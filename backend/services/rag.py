import logging
from pathlib import Path

import anthropic

from config import settings

logger = logging.getLogger(__name__)

SYSTEM_PROMPT_TEMPLATE = """You are a helpful and friendly assistant on Jessie (Yujie) LYU's personal portfolio website. \
Your role is to answer visitors' questions about Jessie based on the knowledge base provided below.

Guidelines:
- Only answer based on the information provided in the knowledge base.
- Be concise, friendly, and professional.
- If asked something that is not covered in the knowledge base, politely say you don't have that information and suggest the visitor reach out to Jessie directly.
- Do not make up or infer information beyond what is explicitly provided.

--- KNOWLEDGE BASE ---
{knowledge}
--- END KNOWLEDGE BASE ---"""


class RAGService:
    """RAG service that uses profile knowledge and Claude to answer questions."""

    def __init__(self) -> None:
        self._knowledge: str = ""
        self._client: anthropic.Anthropic | None = None

    def load_knowledge_base(self) -> None:
        """Load profile knowledge from the markdown file."""
        knowledge_path = Path(__file__).parent.parent / "data" / "profile_knowledge.md"
        try:
            self._knowledge = knowledge_path.read_text(encoding="utf-8")
            logger.info("Knowledge base loaded successfully from %s", knowledge_path)
        except FileNotFoundError:
            logger.error("Knowledge base file not found at %s", knowledge_path)
            self._knowledge = ""

    @property
    def client(self) -> anthropic.Anthropic | None:
        """Lazily create the Anthropic client only when the API key is available."""
        if self._client is None and settings.ANTHROPIC_API_KEY:
            self._client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        return self._client

    async def generate_response(self, message: str) -> str:
        """Generate a response to the user's message using RAG."""
        if not settings.ANTHROPIC_API_KEY:
            return (
                "Chat is currently unavailable. Please configure an API key."
            )

        if not self._knowledge:
            return (
                "I'm sorry, my knowledge base hasn't been loaded yet. "
                "Please try again in a moment."
            )

        client = self.client
        if client is None:
            return "Chat is currently unavailable. Please configure an API key."

        system_prompt = SYSTEM_PROMPT_TEMPLATE.format(knowledge=self._knowledge)

        response = client.messages.create(
            model=settings.MODEL_NAME,
            max_tokens=settings.MAX_TOKENS,
            system=system_prompt,
            messages=[
                {"role": "user", "content": message},
            ],
        )

        if response.content and len(response.content) > 0:
            return response.content[0].text

        return "I'm sorry, I couldn't generate a response. Please try again."


rag_service = RAGService()

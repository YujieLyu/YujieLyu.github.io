import logging

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.rag import rag_service

logger = logging.getLogger(__name__)

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    """Handle a chat message and return an AI-generated response."""
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    try:
        response_text = await rag_service.generate_response(request.message)
        return ChatResponse(response=response_text)
    except Exception as e:
        logger.exception("Error generating chat response: %s", e)
        return ChatResponse(
            response="Sorry, something went wrong while processing your message. Please try again later."
        )

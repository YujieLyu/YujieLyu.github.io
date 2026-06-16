import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    ANTHROPIC_API_KEY: str = os.getenv("ANTHROPIC_API_KEY", "")
    MODEL_NAME: str = "claude-sonnet-4-20250514"
    MAX_TOKENS: int = 1024


settings = Settings()

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import ModelQA

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

model = ModelQA()
@app.post("/generate_text")
async def generate_text(request: Request, text_request: TextRequest) -> str:
    result: str = model(text_request.text)
    return result

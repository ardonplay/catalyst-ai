import os
import uvicorn


def start():
    port = int(os.getenv("LR6_SERVER_PORT", 8000))
    host = os.getenv("LR6_SERVER_HOST", "0.0.0.0")

    uvicorn.run("server:app", host=host, port=port, reload=False)


if __name__ == '__main__':
    start()

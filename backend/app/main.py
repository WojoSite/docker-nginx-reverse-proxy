from fastapi import FastAPI
import ptvsd

ptvsd.enable_attach(address=('0.0.0.0', 5678))

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    a = 1
    b = "two"
    c = 3
    return {"item_id": item_id}
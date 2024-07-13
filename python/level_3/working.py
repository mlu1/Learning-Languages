from fastapi import FastAPI,Path
from typing import Optional

app = FastAPI()

inventory = {
    1:{
        "name":"Milk",
        "price":3.99,
        "brand":"Regular"
    }
}

@app.get("/get-item/{item_id}")
def get_item(item_id:int = Path(description="The ID of the item that you would like",gt=0,lt=2)):
    return inventory[item_id]

##A query parameter
@app.get("/get-by-name")
def get_item(*,name:Optional[str] = None,test:int):
    for item_id in inventory:
        if inventory[item_id]["name"] == name:
            return inventory[item_id]
    return {"Data":"Not found"}

@app.get("/")
def home():
    return {"Data":"Testing"}

@app.get("/about")
def about():
    return {"Data":"About"} 
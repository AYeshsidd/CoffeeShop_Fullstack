from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine ,text
import os
import certifi
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Cloud DB SSL.
connect_args = {}
if os.getenv("DB_SSL") == "1":
    connect_args["ssl"] = {"ca": certifi.where()}


engine = create_engine(DATABASE_URL, echo=True) 
# echo = true prints
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base() # Without Base, SQLAlchemy cannot understand which classes are tables
    
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
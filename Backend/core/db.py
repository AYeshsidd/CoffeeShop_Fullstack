from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine
import os
import certifi
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL environment variable is not set")

# Cloud DB SSL (local par DB_SSL set nahi karna)
connect_args = {}
if os.getenv("DB_SSL") == "1":
    connect_args["ssl"] = {"ca": certifi.where()}

engine = create_engine(
    DATABASE_URL,
    echo=os.getenv("SQL_ECHO") == "1",
    pool_pre_ping=True,
    pool_recycle=300,
    connect_args=connect_args,   # <-- yeh pehle missing tha
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
INSERT INTO USERS (
    USER_ID,
    FIRST_NAME,
    LAST_NAME,
    EMAIL
) VALUES (
    USERS_SEQ.NEXTVAL,
    'John',
    'Doe',
    'john@example.com'
);

INSERT INTO USERS (
    USER_ID,
    FIRST_NAME,
    LAST_NAME,
    EMAIL
) VALUES (
    USERS_SEQ.NEXTVAL,
    'Jane',
    'Smith',
    'jane@example.com'
);

INSERT INTO COURSES (
    COURSE_ID,
    COURSE_NAME,
    COURSE_PROGRESS,
    LAST_ACCESSED,
    USER_ID
) VALUES (
    COURSES_SEQ.NEXTVAL,
    'Introduction to Programming',
    0.75,
    SYSDATE,
    1
);

INSERT INTO COURSES (
    COURSE_ID,
    COURSE_NAME,
    COURSE_PROGRESS,
    LAST_ACCESSED,
    USER_ID
) VALUES (
    COURSES_SEQ.NEXTVAL,
    'Database Management',
    0.50,
    SYSDATE,
    2
);

INSERT INTO LESSONS (
    LESSON_ID,
    LESSON_NAME,
    LESSON_PROGRESS,
    LAST_ACCESSED,
    COURSE_ID
) VALUES (
    LESSONS_SEQ.NEXTVAL,
    'Variables and Data Types',
    0.80,
    SYSDATE,
    1
);

INSERT INTO LESSONS (
    LESSON_ID,
    LESSON_NAME,
    LESSON_PROGRESS,
    LAST_ACCESSED,
    COURSE_ID
) VALUES (
    LESSONS_SEQ.NEXTVAL,
    'Entity-Relationship Model',
    0.60,
    SYSDATE,
    2
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a variable?',
    'A variable is a container for storing data.',
    SYSDATE,
    0.90,
    1
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a primary key?',
    'A primary key is a unique identifier for a record in a database table.',
    SYSDATE,
    0.70,
    2
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a loop?',
    'A loop is a programming construct that repeats a block of code until a certain condition is met.',
    SYSDATE,
    0.85,
    1
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a string?',
    'A string is a sequence of characters, typically used to represent text.',
    SYSDATE,
    0.95,
    1
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a function?',
    'A function is a block of reusable code that performs a specific task.',
    SYSDATE,
    0.75,
    1
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is normalization?',
    'Normalization is the process of organizing data in a database to minimize redundancy and dependency.',
    SYSDATE,
    0.80,
    2
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a foreign key?',
    'A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.',
    SYSDATE,
    0.90,
    2
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LAST_ACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    FLASHCARDS_SEQ.NEXTVAL,
    'What is a join?',
    'A join is a SQL operation that combines columns from two or more tables based on a related column between them.',
    SYSDATE,
    0.70,
    2
);
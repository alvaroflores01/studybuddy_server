INSERT INTO USERS (
    USER_ID,
    FIRST_NAME,
    LAST_NAME,
    EMAIL
) VALUES (
    1,
    'John',
    'Doe',
    'john.doe@example.com'
);

INSERT INTO USERS (
    USER_ID,
    FIRST_NAME,
    LAST_NAME,
    EMAIL
) VALUES (
    2,
    'Jane',
    'Smith',
    'jane.smith@example.com'
);

INSERT INTO COURSES (
    COURSE_ID,
    COURSE_NAME,
    COURSE_PROGRESS,
    LAST_ACCESSED,
    USER_ID
) VALUES (
    1,
    'Introduction to Programming',
    25.50,
    '2024-05-01',
    1
);

INSERT INTO COURSES (
    COURSE_ID,
    COURSE_NAME,
    COURSE_PROGRESS,
    LAST_ACCESSED,
    USER_ID
) VALUES (
    2,
    'Database Management',
    10.75,
    '2024-04-28',
    2
);

INSERT INTO LESSONS (
    LESSON_ID,
    LESSON_NAME,
    LESSON_PROGRESS,
    LAST_ACCESSED,
    COURSE_ID
) VALUES (
    1,
    'Variables and Data Types',
    50.00,
    '2024-05-02',
    1
);

INSERT INTO LESSONS (
    LESSON_ID,
    LESSON_NAME,
    LESSON_PROGRESS,
    LAST_ACCESSED,
    COURSE_ID
) VALUES (
    2,
    'SQL Queries',
    20.00,
    '2024-04-30',
    2
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LASTACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    1,
    'What is a variable?',
    'A variable is a named storage location that can hold a value.',
    '2024-05-03',
    1,
    1
);

INSERT INTO FLASHCARDS (
    FLASHCARD_ID,
    QUESTION,
    ANSWER,
    LASTACCESSED,
    FLASHCARD_PROGRESS,
    LESSON_ID
) VALUES (
    2,
    'What is the SELECT statement?',
    'The SELECT statement is used to retrieve data from a database.',
    '2024-05-01',
    0,
    2
);
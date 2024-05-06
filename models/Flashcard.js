class Flashcard {
    constructor(flashcardId, question, answer, lastAccessed, lastUpdated, flashcardProgress, lessonId) {
        this.flashcardId = flashcardId;
        this.question = question;
        this.answer = answer;
        this.lastAccessed = lastAccessed;
        this.lastUpdated = lastUpdated;
        this.flashcardProgress = flashcardProgress;
        this.lessonId = lessonId;
    }
}

module.exports = Flashcard;


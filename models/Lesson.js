class Lesson {
    constructor(lessonId, lessonName, lessonProgress, lastAccessed, courseId) {
        this.lessonId = lessonId;
        this.lessonName = lessonName;
        this.lessonProgress = lessonProgress;
        this.lastAccessed = lastAccessed;
        this.courseId = courseId;
    }
}

module.exports = Lesson;

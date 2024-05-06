class Course {
    constructor(courseId, courseName, courseProgress, lastAccessed, userId) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseProgress = courseProgress;
        this.lastAccessed = lastAccessed;
        this.userId = userId;
    }
}

module.exports = Course;

/**
 * Created by locvd on 2017/05/03.
 */

const ActivityType = {
  allowedValues: [this.INSERT, this.UPDATE, this.REMOVE, this.INTERVIEW_ORDER, this.USER_REGISTER, this.PHOTOS_UPLOAD],
  INSERT: "insert",
  UPDATE: "update",
  REMOVE: "remove",
  PHOTOS_UPLOAD: "photo-upload",
  INTERVIEW_ORDER: "interview-order",
  USER_REGISTER: "user-register",
  isAdminActivity: function (activity) {
    return activity === this.INSERT ||
      activity === this.UPDATE ||
      activity === this.REMOVE ||
      activity === this.PHOTOS_UPLOAD;
  }
};

export default ActivityType;

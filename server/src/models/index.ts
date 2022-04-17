import mongoose from "mongoose";
import userSchema from "../data-access/schemas/user";
import adminSchema from "../data-access/schemas/admin";
import filmSchema from "../data-access/schemas/film";
import commentSchema from "../data-access/schemas/comment";
import feedbackSchema from "../data-access/schemas/feedback";
import seriesSchema from "../data-access/schemas/series";

import IUser from "../interfaces/user";
import IAdmin from "../interfaces/admin";
import IFilm from "../interfaces/film";
import IComment from "../interfaces/comment";
import IFeedback from "../interfaces/feedback";
import ISeries from "../interfaces/series";

type IUserModel = IUser & mongoose.Document;
type IAdminModel = IAdmin & mongoose.Document;
type IFilmModel = IFilm & mongoose.Document;
type ICommentModel = IComment & mongoose.Document;
type IFeedbackModel = IFeedback & mongoose.Document;
type ISeriesModel = ISeries & mongoose.Document;

// Models
const UserModel = mongoose.model<IUserModel>("User", userSchema);
const AdminModel = mongoose.model<IAdminModel>("Admin", adminSchema);
const FilmModel = mongoose.model<IFilmModel>("Film", filmSchema);
const SeriesModel = mongoose.model<ISeriesModel>("Series", seriesSchema);
const CommentModel = mongoose.model<ICommentModel>("Comment", commentSchema);
const FeedbackModel = mongoose.model<IFeedbackModel>(
  "Feedback",
  feedbackSchema
);

export default Object.freeze({
  UserModel,
  AdminModel,
  FilmModel,
  CommentModel,
  FeedbackModel,
  SeriesModel,
});

export {
  UserModel,
  AdminModel,
  FilmModel,
  CommentModel,
  FeedbackModel,
  SeriesModel,
};

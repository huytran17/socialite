import { Request } from "express";
import { Mongoose } from "mongoose";
import * as _ from "lodash";

import { IUpdateFilm } from "../../../use-cases/film/update-film";
import IFilm from "../../../interfaces/film";
import { IGetFilmById } from "../../../use-cases/film/get-film-by-id";

export default function makeUpdateFilmController({
  updateFilm,
  getFilmById,
  mongoose,
}: {
  updateFilm: IUpdateFilm;
  getFilmById: IGetFilmById;
  mongoose: Mongoose;
}) {
  return async function updateFilmController(
    httpRequest: Request & { context: { validated: { filmDetails: IFilm } } }
  ) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const filmDetails: IFilm = _.get(httpRequest, "context.validated");

      const { _id: film_id } = filmDetails; // the film's ID
      const exists = await getFilmById({ id: film_id });
      if (!exists) {
        throw new Error(`Film by ${film_id} does not exists.`);
      }

      const updatedFilm = await updateFilm({
        filmDetails,
      });

      return {
        headers,
        statusCode: 200,
        body: {
          film: updatedFilm,
        }, // TODO: add in implementation of resource
      };
    } catch (err) {
      // TODO: add in error handling here
      // await session.abortTransaction();
      throw {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 404,
        body: {
          error: err.message,
        },
      };
    }
  };
}

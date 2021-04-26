import { TeacherDocument } from './teacher.model';
import { Model } from "mongoose";
export declare class TeacherService {
    private readonly teacherModel;
    constructor(teacherModel: Model<TeacherDocument>);
    all(): Promise<string>;
}

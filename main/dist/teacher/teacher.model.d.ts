import { Document } from "mongoose";
export declare type TeacherDocument = Teacher & Document;
export declare class Teacher {
    id: number;
    name: string;
}
export declare const TeacherSchema: import("mongoose").Schema<Document<Teacher, {}>, import("mongoose").Model<any, any>, undefined>;

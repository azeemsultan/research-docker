import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    all(): Promise<string>;
}

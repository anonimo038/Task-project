import { Controller, Post,Get,Param, Body, Put, Delete } from '@nestjs/common';

import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto';
@Controller('/api/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO)
  }
  @Get()
  findAll(){
      return this.taskService.findAll()
  }
  @Get(":id")
  findOne(@Param("id") id:string){
    return this.taskService.findOne(id)
  }
 @Put(":id")
 update(@Param("id") id:string,@Body() taskDTO:TaskDTO){
    return this.taskService.update(id,taskDTO)
 }
 @Delete(":id")
 delete(@Param("id") id:string){
    return this.taskService.delete(id)
 }
}

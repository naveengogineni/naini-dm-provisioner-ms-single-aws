import { Controller, Get } from "@nestjs/common";
import { ThingService } from "./thing.service";

@Controller('things')
export class ThingController {
    constructor(private thingService: ThingService) {}

    @Get()
    async things() {
        return await this.thingService.things();
    }
}
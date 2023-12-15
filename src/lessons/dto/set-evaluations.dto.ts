import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetEvaluationsDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly user_id: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly score: number;
}

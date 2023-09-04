import { Controller, Get, Post, UploadedFile, UseInterceptors, BadRequestException, Param, Res } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FilesService } from './files.service';
import { fileFilter, fileNamer } from './helpers';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('product/:imageName')
  findProductImage( @Res() res: Response, @Param('imageName') imageName: string ) {
    const path = this.filesService.getStaticProductImage( imageName )

    res.sendFile( path );
  }

  @Post('product')
  @UseInterceptors( FileInterceptor( 'file', {
    fileFilter: fileFilter,
    // limits: { fieldSize: 1000 },
    storage: diskStorage({
      destination: './static/products',
      filename: fileNamer
    })
  } ) )
  uploadProductFile( 
    @UploadedFile() file: Express.Multer.File
  ) {
    if( !file ) {
      throw new BadRequestException('El archivo debe ser una imagen.');
    }
    
    const secureURL = `${ file.filename }`

    return {
      secureURL
    }
  }
}

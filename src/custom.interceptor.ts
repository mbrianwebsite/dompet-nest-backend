import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('INTERCEPTING REQUEST');
    return handler.handle().pipe(
      map((data) => {
        console.log('INTERCEPTING RESPONSE');

        const response = {
          ...data,
          createdAt: data.created_at,
        };

        delete response.updated_at;
        delete response.created_at;
        console.log({ response });
        return response;
      }),
    );
  }
}

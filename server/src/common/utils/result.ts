import { ApiProperty } from '@nestjs/swagger';

export const SUCCESS_CODE = 200;

/**
 * 响应结构
 * ok 成功
 * fail 失败
 */
export class ResultData {
  constructor(code = SUCCESS_CODE, msg?: string, data?: any) {
    this.code = code;
    this.msg = msg || 'ok';
    this.data = data || null;
  }

  @ApiProperty({ type: 'number', default: SUCCESS_CODE })
  code: number;

  @ApiProperty({ type: 'string', default: 'ok' })
  msg?: string;

  data?: any;

  static ok(data?: any, msg?: string): ResultData {
    return new ResultData(SUCCESS_CODE, msg, data);
  }

  static fail(code: number, msg?: string, data?: any): ResultData {
    return new ResultData(code || 500, msg || 'fail', data);
  }

  static done(data?: any, msg?: string): any {
    return {
      code: SUCCESS_CODE,
      msg: msg || 'ok',
      ...data,
    };
  }
}

import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
})
export class User extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  user_name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone_number: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

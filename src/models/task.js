import { v4 as uuidv4 } from 'uuid';

export class Task {
  _id;
  _content;
  _checked;
  _createdAt;
  _description;
  _tags;

  constructor (content, checked, createdAt, description, tags) {
    this._id = uuidv4()
    this._content = content
    this._checked = checked
    this._createdAt = createdAt
    this._description = description
    this._tags = tags
  }
}
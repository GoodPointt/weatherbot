const { Schema, model } = require('mongoose');
const handleMongooseError = require('../utils/handleMongooseError');

const healthSchema = new Schema(
  {
    status: {
      type: String,
      required: [true, 'health status is required'],
      maxlength: 254,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

healthSchema.post('save', handleMongooseError);

const Health = model('health', healthSchema);

module.exports = { Health };

/*   Copyright (C) 2013-2014 Computer Sciences Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */

//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
if (typeof ezbake === 'undefined') {
  ezbake = {};
}
if (typeof ezbake.example === 'undefined') {
  ezbake.example = {};
}
ezbake.example.Paddle = module.exports.Paddle = function(args) {
  this.name = null;
  this.flag = null;
  this.byyte = null;
  this.counter = null;
  this.ratio = null;
  this.data = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.flag !== undefined) {
      this.flag = args.flag;
    }
    if (args.byyte !== undefined) {
      this.byyte = args.byyte;
    }
    if (args.counter !== undefined) {
      this.counter = args.counter;
    }
    if (args.ratio !== undefined) {
      this.ratio = args.ratio;
    }
    if (args.data !== undefined) {
      this.data = args.data;
    }
  }
};
ezbake.example.Paddle.prototype = {};
ezbake.example.Paddle.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.flag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BYTE) {
        this.byyte = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.counter = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.ratio = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ezbake.example.Paddle.prototype.write = function(output) {
  output.writeStructBegin('Paddle');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.flag !== null && this.flag !== undefined) {
    output.writeFieldBegin('flag', Thrift.Type.BOOL, 2);
    output.writeBool(this.flag);
    output.writeFieldEnd();
  }
  if (this.byyte !== null && this.byyte !== undefined) {
    output.writeFieldBegin('byyte', Thrift.Type.BYTE, 3);
    output.writeByte(this.byyte);
    output.writeFieldEnd();
  }
  if (this.counter !== null && this.counter !== undefined) {
    output.writeFieldBegin('counter', Thrift.Type.I64, 4);
    output.writeI64(this.counter);
    output.writeFieldEnd();
  }
  if (this.ratio !== null && this.ratio !== undefined) {
    output.writeFieldBegin('ratio', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.ratio);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 6);
    output.writeString(this.data);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

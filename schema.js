const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  sku:{
    type:String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    ref:'ProductInventory',
    required: true
  },
  inventory_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'ProductCategory', 
    ref:'ProductInventory',
    required: true
  },
  price:{
    type:Float32Array,
    required: true
  },
  discount_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Discount',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

const productCategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

const productInventorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

const discountSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name:{
    type:Number,
    required:true
  },
  description:{
    type:String
  },
  discount_percent: {
    type: Float32Array,
    required: true
  },
  active:{
    type: Boolean,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

module.exports = {
  Product: mongoose.model('Product', productSchema),
  ProductCategory: mongoose.model('ProductCategory', productCategorySchema),
  ProductInventory: mongoose.model('ProductCategory', productInventorySchema),
  Discount: mongoose.model('ProductCategory', discountSchema)
};
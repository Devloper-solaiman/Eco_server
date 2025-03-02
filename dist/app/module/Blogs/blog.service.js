"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(Object.assign(Object.assign({}, payload), { author: id }));
    return result;
});
const getAllBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find().populate('author').sort('-createdAt');
    return result;
});
const getBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findById(id).populate('author');
    return result;
});
const updateBlogInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
exports.BlogService = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    getBlogFromDB,
    updateBlogInDB,
    deleteBlogFromDB,
};

import { createVenue } from './venue/createVenue';
import { saveVenue } from './venue/saveVenue';
import { unsaveVenue } from './venue/unsaveVenue';

import { createBlogPost } from './blog/createBlogPost';
import { deleteBlogPost } from './blog/deleteBlogPost';
import { createBlogComment } from './blog/createBlogComment';
import { deleteBlogComment } from './blog/deleteBlogComment';
import { createBlogTag } from './blog/createBlogTag';
import { createBlogCategory } from './blog/createBlogCategory';

import { createUser } from './user/createUser';

export const Mutation = {
  createVenue,
  saveVenue,
  unsaveVenue,
  createBlogPost,
  deleteBlogPost,
  createBlogComment,
  deleteBlogComment,
  createBlogTag,
  createBlogCategory,
  createUser,
};

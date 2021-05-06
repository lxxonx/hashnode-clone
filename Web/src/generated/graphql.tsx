import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count?: Maybe<PostCountAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type BookmarkCreateManyPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookmarkCreateManyPostInputEnvelope = {
  data: Array<BookmarkCreateManyPostInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BookmarkCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  postId: Scalars['String'];
};

export type BookmarkCreateManyUserInputEnvelope = {
  data: Array<BookmarkCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BookmarkCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<BookmarkCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<BookmarkCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
};

export type BookmarkCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<BookmarkCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<BookmarkCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
};

export type BookmarkCreateOrConnectWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateWithoutPostInput;
};

export type BookmarkCreateOrConnectWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateWithoutUserInput;
};

export type BookmarkCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookmarksInput;
};

export type BookmarkCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutBookmarkedInput;
};

export type BookmarkListRelationFilter = {
  every?: Maybe<BookmarkWhereInput>;
  some?: Maybe<BookmarkWhereInput>;
  none?: Maybe<BookmarkWhereInput>;
};

export type BookmarkScalarWhereInput = {
  AND?: Maybe<Array<BookmarkScalarWhereInput>>;
  OR?: Maybe<Array<BookmarkScalarWhereInput>>;
  NOT?: Maybe<Array<BookmarkScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
};

export type BookmarkUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookmarkUpdateManyWithWhereWithoutPostInput = {
  where: BookmarkScalarWhereInput;
  data: BookmarkUpdateManyMutationInput;
};

export type BookmarkUpdateManyWithWhereWithoutUserInput = {
  where: BookmarkScalarWhereInput;
  data: BookmarkUpdateManyMutationInput;
};

export type BookmarkUpdateManyWithoutPostInput = {
  create?: Maybe<Array<BookmarkCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<BookmarkUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<BookmarkCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  set?: Maybe<Array<BookmarkWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  delete?: Maybe<Array<BookmarkWhereUniqueInput>>;
  update?: Maybe<Array<BookmarkUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<BookmarkUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<BookmarkScalarWhereInput>>;
};

export type BookmarkUpdateManyWithoutUserInput = {
  create?: Maybe<Array<BookmarkCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<BookmarkUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<BookmarkCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  set?: Maybe<Array<BookmarkWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  delete?: Maybe<Array<BookmarkWhereUniqueInput>>;
  update?: Maybe<Array<BookmarkUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<BookmarkUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<BookmarkScalarWhereInput>>;
};

export type BookmarkUpdateWithWhereUniqueWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  data: BookmarkUpdateWithoutPostInput;
};

export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  data: BookmarkUpdateWithoutUserInput;
};

export type BookmarkUpdateWithoutPostInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutBookmarksInput>;
};

export type BookmarkUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutBookmarkedInput>;
};

export type BookmarkUpsertWithWhereUniqueWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  update: BookmarkUpdateWithoutPostInput;
  create: BookmarkCreateWithoutPostInput;
};

export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  update: BookmarkUpdateWithoutUserInput;
  create: BookmarkCreateWithoutUserInput;
};

export type BookmarkWhereInput = {
  AND?: Maybe<Array<BookmarkWhereInput>>;
  OR?: Maybe<Array<BookmarkWhereInput>>;
  NOT?: Maybe<Array<BookmarkWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<StringFilter>;
};

export type BookmarkWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LikeCreateManyPostInput = {
  id?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type LikeCreateManyPostInputEnvelope = {
  data: Array<LikeCreateManyPostInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
};

export type LikeCreateManyUserInputEnvelope = {
  data: Array<LikeCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<LikeCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateOrConnectWithoutPostInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutPostInput;
};

export type LikeCreateOrConnectWithoutUserInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  post: PostCreateNestedOneWithoutLikesInput;
};

export type LikeListRelationFilter = {
  every?: Maybe<LikeWhereInput>;
  some?: Maybe<LikeWhereInput>;
  none?: Maybe<LikeWhereInput>;
};

export type LikeScalarWhereInput = {
  AND?: Maybe<Array<LikeScalarWhereInput>>;
  OR?: Maybe<Array<LikeScalarWhereInput>>;
  NOT?: Maybe<Array<LikeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
};

export type LikeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LikeUpdateManyWithWhereWithoutPostInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithWhereWithoutUserInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<LikeCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutPostInput;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserInput;
};

export type LikeUpdateWithoutPostInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpsertWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutPostInput;
  create: LikeCreateWithoutPostInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeWhereInput = {
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<StringFilter>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createManyPost: AffectedRowsOutput;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deleteManyPost: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  upsertPost: Post;
  signUp: UserResponse;
  login: UserResponse;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationSignUpArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
  authorId: Scalars['String'];
  authorname?: Maybe<Scalars['String']>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  title: Scalars['Int'];
  content: Scalars['Int'];
  published: Scalars['Int'];
  authorId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PostCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
};

export type PostCreateManyAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  authorId: Scalars['String'];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedOneWithoutBookmarkedInput = {
  create?: Maybe<PostCreateWithoutBookmarkedInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutBookmarkedInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostCreateOrConnectWithoutBookmarkedInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutBookmarkedInput;
};

export type PostCreateOrConnectWithoutLikesInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutLikesInput;
};

export type PostCreateOrConnectWithoutTagsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutTagsInput;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
};

export type PostCreateWithoutBookmarkedInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
};

export type PostCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutPostsInput;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
};

export type PostCreateWithoutTagsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
  authorId: Scalars['String'];
  count?: Maybe<PostCountAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  Content = 'content',
  Published = 'published',
  AuthorId = 'authorId'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  authorId?: Maybe<StringFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  content?: Maybe<StringWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  authorId?: Maybe<StringWithAggregatesFilter>;
};

export type PostUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateOneRequiredWithoutBookmarkedInput = {
  create?: Maybe<PostCreateWithoutBookmarkedInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutBookmarkedInput>;
  upsert?: Maybe<PostUpsertWithoutBookmarkedInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutBookmarkedInput>;
};

export type PostUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<PostUpsertWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutLikesInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutTagsInput;
};

export type PostUpdateWithoutAuthorInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
};

export type PostUpdateWithoutBookmarkedInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
};

export type PostUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
};

export type PostUpdateWithoutTagsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutTagsInput;
  create: PostCreateWithoutTagsInput;
};

export type PostUpsertWithoutBookmarkedInput = {
  update: PostUpdateWithoutBookmarkedInput;
  create: PostCreateWithoutBookmarkedInput;
};

export type PostUpsertWithoutLikesInput = {
  update: PostUpdateWithoutLikesInput;
  create: PostCreateWithoutLikesInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  bookmarked?: Maybe<BookmarkListRelationFilter>;
  tags?: Maybe<TagsListRelationFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  groupByPost: Array<PostGroupBy>;
  me?: Maybe<User>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  by: Array<PostScalarFieldEnum>;
  having?: Maybe<PostScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type TagsCreateNestedManyWithoutFollowersInput = {
  create?: Maybe<Array<TagsCreateWithoutFollowersInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutFollowersInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
};

export type TagsCreateNestedManyWithoutPostsInput = {
  create?: Maybe<Array<TagsCreateWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutPostsInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
};

export type TagsCreateOrConnectWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  create: TagsCreateWithoutFollowersInput;
};

export type TagsCreateOrConnectWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  create: TagsCreateWithoutPostsInput;
};

export type TagsCreateWithoutFollowersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutTagsInput>;
};

export type TagsCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  followers?: Maybe<UserCreateNestedManyWithoutFollowingTagsInput>;
};

export type TagsListRelationFilter = {
  every?: Maybe<TagsWhereInput>;
  some?: Maybe<TagsWhereInput>;
  none?: Maybe<TagsWhereInput>;
};

export type TagsScalarWhereInput = {
  AND?: Maybe<Array<TagsScalarWhereInput>>;
  OR?: Maybe<Array<TagsScalarWhereInput>>;
  NOT?: Maybe<Array<TagsScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
};

export type TagsUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagsUpdateManyWithWhereWithoutFollowersInput = {
  where: TagsScalarWhereInput;
  data: TagsUpdateManyMutationInput;
};

export type TagsUpdateManyWithWhereWithoutPostsInput = {
  where: TagsScalarWhereInput;
  data: TagsUpdateManyMutationInput;
};

export type TagsUpdateManyWithoutFollowersInput = {
  create?: Maybe<Array<TagsCreateWithoutFollowersInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutFollowersInput>>;
  upsert?: Maybe<Array<TagsUpsertWithWhereUniqueWithoutFollowersInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
  set?: Maybe<Array<TagsWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagsWhereUniqueInput>>;
  delete?: Maybe<Array<TagsWhereUniqueInput>>;
  update?: Maybe<Array<TagsUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: Maybe<Array<TagsUpdateManyWithWhereWithoutFollowersInput>>;
  deleteMany?: Maybe<Array<TagsScalarWhereInput>>;
};

export type TagsUpdateManyWithoutPostsInput = {
  create?: Maybe<Array<TagsCreateWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutPostsInput>>;
  upsert?: Maybe<Array<TagsUpsertWithWhereUniqueWithoutPostsInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
  set?: Maybe<Array<TagsWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagsWhereUniqueInput>>;
  delete?: Maybe<Array<TagsWhereUniqueInput>>;
  update?: Maybe<Array<TagsUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagsUpdateManyWithWhereWithoutPostsInput>>;
  deleteMany?: Maybe<Array<TagsScalarWhereInput>>;
};

export type TagsUpdateWithWhereUniqueWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  data: TagsUpdateWithoutFollowersInput;
};

export type TagsUpdateWithWhereUniqueWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  data: TagsUpdateWithoutPostsInput;
};

export type TagsUpdateWithoutFollowersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
};

export type TagsUpdateWithoutPostsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingTagsInput>;
};

export type TagsUpsertWithWhereUniqueWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  update: TagsUpdateWithoutFollowersInput;
  create: TagsCreateWithoutFollowersInput;
};

export type TagsUpsertWithWhereUniqueWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  update: TagsUpdateWithoutPostsInput;
  create: TagsCreateWithoutPostsInput;
};

export type TagsWhereInput = {
  AND?: Maybe<Array<TagsWhereInput>>;
  OR?: Maybe<Array<TagsWhereInput>>;
  NOT?: Maybe<Array<TagsWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  followers?: Maybe<UserListRelationFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type TagsWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  avatar: Scalars['String'];
  cover: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserCreateNestedManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowingTagsInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingTagsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingTagsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutBookmarksInput = {
  create?: Maybe<UserCreateWithoutBookmarksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBookmarksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutBookmarksInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutBookmarksInput;
};

export type UserCreateOrConnectWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserCreateOrConnectWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowingTagsInput;
};

export type UserCreateOrConnectWithoutLikesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutLikesInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type UserCreateWithoutBookmarksInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
};

export type UserCreateWithoutFollowedByInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
};

export type UserCreateWithoutFollowingInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
};

export type UserCreateWithoutFollowingTagsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<FieldError>;
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  avatar?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutFollowedByInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowingTagsInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowedByInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowingTagsInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingTagsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingTagsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingTagsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingTagsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingTagsInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneRequiredWithoutBookmarksInput = {
  create?: Maybe<UserCreateWithoutBookmarksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBookmarksInput>;
  upsert?: Maybe<UserUpsertWithoutBookmarksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutBookmarksInput>;
};

export type UserUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLikesInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowedByInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingTagsInput;
};

export type UserUpdateWithoutBookmarksInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
};

export type UserUpdateWithoutFollowedByInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
};

export type UserUpdateWithoutFollowingInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
};

export type UserUpdateWithoutFollowingTagsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
};

export type UserUpdateWithoutPostsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowedByInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingTagsInput;
  create: UserCreateWithoutFollowingTagsInput;
};

export type UserUpsertWithoutBookmarksInput = {
  update: UserUpdateWithoutBookmarksInput;
  create: UserCreateWithoutBookmarksInput;
};

export type UserUpsertWithoutLikesInput = {
  update: UserUpdateWithoutLikesInput;
  create: UserCreateWithoutLikesInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  avatar?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  posts?: Maybe<PostListRelationFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  bookmarks?: Maybe<BookmarkListRelationFilter>;
  followingTags?: Maybe<TagsListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar'>
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'content' | 'authorId' | 'authorname' | 'createdAt'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  email
  avatar
}
    `;
export const PostsDocument = gql`
    query Posts {
  posts(where: {published: {equals: true}}) {
    title
    content
    authorId
    authorname
    createdAt
  }
}
    `;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
  signUp(email: $email, username: $username, password: $password) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;

    export const SignUpComponent = (props: SignUpComponentProps) => (
      <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables> mutation={SignUpDocument} {...props} />
    );
    

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
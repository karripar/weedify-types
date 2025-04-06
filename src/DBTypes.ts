type UserLevel = {
  user_level_id: number;
  level_name: "Admin" | "User" | "Guest";
};

type User = {
  user_id: number;
  username: string;
  password: string;
  email: string;
  bio?: string;
  user_level_id: number;
  dietary_info: string | null;
  created_at: string;
};

type UserWithLevel = User & {
  level_name: "Admin" | "User" | "Guest";
};

type UserWithProfilePicture = User & {
  profile_picture: string;
};

type UserWithDietaryInfo = UserWithProfilePicture & {
  dietary_restrictions: string | null;
};

type UserWithDietaryIds = UserWithProfilePicture & {
  dietary_id: number[];
};

type UserWithNoPassword = Omit<User, "password">;

type Recipe = {
  recipe_id: number;
  user_id: number;
  title: string;
  instructions: string;
  cooking_time: number;
  difficulty_level_id: number;
  created_at: string;
  filename: string;
  filesize: number;
  media_type: string;
  screenshots: string[];
  thumbnail: string | null;
};

type RecipeWithDietaryInfo = Recipe & {
  dietary_info: string | null;
};

type RecipeWithDietaryIds = Recipe & {
  dietary_id: number[];
};

type Favorite = {
  favorite_id: number;
  user_id: number;
  recipe_id: number;
  created_at: string;
};

type Ingredient = {
  ingredient_id: number;
  recipe_id: number;
  ingredient: string;
};

type Diet = {
  diet_id: number;
  user_id: number;
  recipe_id: number;
  diet_description: string;
};

type Rating = {
  rating_id: number;
  user_id: number;
  recipe_id: number;
  rating: number;
};

type Notification = {
  notification_id: number;
  user_id: number;
  notification_text: string;
  is_read: boolean;
  notification_type_id: number;
  is_archived: boolean;
  created_at: string;
};

type NotificationWithUsername = Notification & {
  username: string;
};

type DietType = {
  diet_type_id: number;
  diet_type_name: string;
};

type RecipeDietType = {
  recipe_diet_id: number;
  recipe_id: number;
  diet_type_id: number;
};

type NotificationWithRecipe = NotificationWithUsername & {
  recipe_id: number;
};

type NotificationType = {
  notification_type_id: number;
  notification_type: string;
};

type Comment = {
  comment_id: number;
  user_id: number;
  recipe_id: number;
  comment_reference_id: number | null;
  comment_text: string;
  created_at: string;
};

type CommentWithUsername = Comment & {
  username: string;
};

type CommentWithReplies = CommentWithUsername & {
  replies: CommentWithReplies[];
};

type CommentWithUsernameAndReplies = CommentWithUsername & {
  replies: CommentWithUsername[];
};

type Tag = {
  tag_id: number;
  tag_name: string;
};

type RecipeTag = {
  recipe_tag_id: number;
  recipe_id: number;
  tag_id: number;
};

type RecipeWithTags = Recipe & {
  tags: Tag[];
};

type TagResult = RecipeTag & Tag;

type Follow = {
  follow_id: number;
  follower_id: number;
  followed_id: number;
  created_at: string;
};

type FollowResponse = {
  message: string;
  follow_id: number;
};

type Like = {
  like_id: number;
  user_id: number;
  recipe_id: number;
  created_at: string;
};

type Credentials = Pick<User, "email" | "password">;

type RegisterCredentials = Pick<User, "username" | "password" | "email">;

type AuthContextType = {
  user: UserWithNoPassword | null;
  handleLogin: (credentials: Credentials) => void;
  handleLogout: () => void;
  handleAutoLogin: () => void;
};

type TokenContent = Pick<User, "user_id"> & Pick<UserLevel, "level_name">;

type RecipeWithOwner = Recipe & Pick<User, "username">;

type FileInfo = {
  filename: string;
  user_id: number;
};

type RecipeResponse = {
  message: string;
  recipe_id: number;
};

type TagResponse = {
  message: string;
  tag_id: number;
};

type ProfilePicture = {
  profile_picture_id: number;
  user_id: number;
  filename: string;
  filesize: number;
  created_at: string;
};

type UserCheck = {
  user_id: number;
  username?: string;
  email?: string;
};

type ResetToken = {
  token_id: number;
  user_id: number;
  token: string;
  expires_at: string;
}

export type {
  UserLevel,
  User,
  UserWithLevel,
  UserWithProfilePicture,
  UserWithNoPassword,
  Recipe,
  Ingredient,
  Diet,
  Rating,
  Comment,
  Follow,
  Like,
  Notification,
  NotificationWithUsername,
  NotificationWithRecipe,
  NotificationType,
  CommentWithUsername,
  CommentWithReplies,
  CommentWithUsernameAndReplies,
  Tag,
  RecipeTag,
  RecipeWithTags,
  TagResult,
  Credentials,
  RegisterCredentials,
  AuthContextType,
  TokenContent,
  RecipeWithOwner,
  FileInfo,
  RecipeResponse,
  TagResponse,
  ProfilePicture,
  FollowResponse,
  Favorite,
  UserWithDietaryInfo,
  RecipeWithDietaryInfo,
  RecipeWithDietaryIds,
  RecipeDietType,
  DietType,
  UserWithDietaryIds,
  UserCheck,
  ResetToken
};

// Type definitions converted to JSDoc comments for better IDE support

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} username
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} [avatar]
 * @property {'user'|'admin'|'editor'} role
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} content
 * @property {string} coverImage
 * @property {string} category
 * @property {string[]} tags
 * @property {User} author
 * @property {string} publishedAt
 * @property {string} updatedAt
 * @property {number} views
 * @property {number} likes
 * @property {boolean} featured
 */

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {string} content
 * @property {User} author
 * @property {string} articleId
 * @property {string} [parentId]
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {number} likes
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string[]} images
 * @property {string} category
 * @property {boolean} inStock
 * @property {boolean} featured
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {Product} product
 * @property {number} quantity
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {string} icon
 * @property {string} color
 */

/**
 * @typedef {Object} AuthState
 * @property {User|null} user
 * @property {boolean} isAuthenticated
 * @property {boolean} isLoading
 */

export {};
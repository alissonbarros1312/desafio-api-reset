import Joi from "joi";

const shippingZoneSchema = Joi.object({
    id: Joi.number().required(),
  name: Joi.string().required(),
  order: Joi.number().required(),
  _links: Joi.object({
    self: Joi.array().items(Joi.object({
        href: Joi.string().required() 
      })),
    collection: Joi.array().items(Joi.object({
        href: Joi.string().required()
      })),
    describedby: Joi.array().items(Joi.object({
        href: Joi.string().required()
      }))   
  })
})

export default shippingZoneSchema
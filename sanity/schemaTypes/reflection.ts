import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reflection',
  title: 'Reflection',
  type: 'document',
  fields: [

    defineField({
      name: 'neighborhood',
      title: 'Neighborhood',
      type: 'string',
    }),
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
    }),
    defineField({
        name: 'sound',
        title: 'Sound',
        type: 'string',
    }),
    defineField({
      name: 'smell',
      title: 'Smell',
      type: 'string',
    }),
    defineField({
        name: 'event',
        title: 'Event',
        type: 'string',
    }),
    defineField({
        name: 'street_corner_object',
        title: 'Street Corner Object',
        type: 'string',
    }),
    defineField({
        name: 'first_name',
        title: 'First Name',
        type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'email',
    }),
  ],

})

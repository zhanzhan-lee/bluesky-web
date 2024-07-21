// sanity/schemas/product.ts
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(0),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: { type: 'category' },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: (Rule: any) => Rule.min(0),
      },
    ],
  };
  
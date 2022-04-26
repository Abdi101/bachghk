module.exports = {
  'menus': {
    enabled: true,
    config: {
      maxDepth: 2,
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: 'Custom Field Label',
                name: 'custom_field',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
          select: [
            {
              input: {
                label: 'Enumeration',
                name: 'example_enum',
                type: 'select',
                options: [
                  {
                    label: 'Option Label 1',
                    value: 'option1',
                  },
                  {
                    label: 'Option Label 2',
                    value: 'option2',
                  },
                  {
                    label: 'Option Label 3',
                    value: 'option3',
                  },
                ],
              },
            },
            {
              input: {
                label: 'Relation (hasOne)',
                name: 'example_relation_one',
                type: 'relation',
              },
            },
            {
              input: {
                label: 'Relation (hasMany)',
                name: 'example_relation_many',
                type: 'relation',
              },
            },
          ],
        },
      },
    },
  },
};
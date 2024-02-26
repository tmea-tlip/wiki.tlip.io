/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  contentSidebar: [
    'intro',
    {
      type: 'category',
      label: 'IOTA',
      items: [{
        type: 'autogenerated',
        dirName: 'section-1'
      }]
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [{
        type: 'autogenerated',
        dirName: 'section-2'
      }]
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [{
        type: 'autogenerated',
        dirName: 'section-3'
      }]
    },
  ],
};

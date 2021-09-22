export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614a8d46ef59b10d4c430359',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hk7x4v8w',
                  apiId: '9176bac3-e8b6-401b-abd8-daa9f1c573ee'
                },
                {
                  buildHookId: '614a8d46da0f94107eaaedf0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-x6jfydrd',
                  apiId: '1ec9a4b1-1345-4e3a-b360-83bfb67d1d6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cyponthemic/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-x6jfydrd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

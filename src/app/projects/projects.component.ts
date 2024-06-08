import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'GraphQL API',
      description: 'A GraphQL API built with Apollo Server and TypeORM',
      link: 'https://github.com/strangermushwana/graphql-backend',
      image: '../../assets/graphql.png',
      tags: ['GraphQL', 'Apollo Server', 'TypeORM', 'TypeGraphQL', 'PostgreSQL', 'Node.js', 'Express.js', 'TypeScript'],
    },
    {
      title: 'GraphQL API',
      description: 'A GraphQL API built with Apollo Server and TypeORM',
      link: 'https://github.com/strangermushwana/graphql-backend',
      image: '../../assets/graphql.png',
      tags: ['GraphQL', 'Apollo Server', 'TypeORM', 'TypeGraphQL', 'PostgreSQL', 'Node.js', 'Express.js', 'TypeScript'],
    },
    {
      title: 'GraphQL API',
      description: 'A GraphQL API built with Apollo Server and TypeORM',
      link: 'https://github.com/strangermushwana/graphql-backend',
      image: '../../assets/graphql.png',
      tags: ['GraphQL', 'Apollo Server', 'TypeORM', 'TypeGraphQL', 'PostgreSQL', 'Node.js', 'Express.js', 'TypeScript'],
    },
    {
      title: 'GraphQL API',
      description: 'A GraphQL API built with Apollo Server and TypeORM',
      link: 'https://github.com/strangermushwana/graphql-backend',
      image: '../../assets/graphql.png',
      tags: ['GraphQL', 'Apollo Server', 'TypeORM', 'TypeGraphQL', 'PostgreSQL', 'Node.js', 'Express.js', 'TypeScript'],
    },
    {
      title: 'GraphQL API',
      description: 'A GraphQL API built with Apollo Server and TypeORM',
      link: 'https://github.com/strangermushwana/graphql-backend',
      image: '../../assets/graphql.png',
      tags: ['GraphQL', 'Apollo Server', 'TypeORM', 'TypeGraphQL', 'PostgreSQL', 'Node.js', 'Express.js', 'TypeScript'],
    }
  ]
}

// Router imports - commented out as we're using single page layout
// import { createBrowserRouter } from 'react-router-dom'
// import { lazy, Suspense, type ReactNode } from 'react'
// import RootLayout from './RootLayout'
// import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load pages for code splitting and faster initial load
// const HomePage = lazy(() => import('../pages/HomePage'))
// const AboutPage = lazy(() => import('../pages/AboutPage'))
// const SkillsPage = lazy(() => import('../pages/SkillsPage'))
// const ProjectsPage = lazy(() => import('../pages/ProjectsPage'))
// const ContactPage = lazy(() => import('../pages/ContactPage'))

// Wrapper component for Suspense
// const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
//   <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
// )

// Router configuration - commented out as we're using single page layout
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout><div /></RootLayout>,
//     children: [
//       {
//         index: true,
//         element: (
//           <SuspenseWrapper>
//             <HomePage />
//           </SuspenseWrapper>
//         ),
//       },
//       {
//         path: 'about',
//         element: (
//           <SuspenseWrapper>
//             <AboutPage />
//           </SuspenseWrapper>
//         ),
//       },
//       {
//         path: 'skills',
//         element: (
//           <SuspenseWrapper>
//             <SkillsPage />
//           </SuspenseWrapper>
//         ),
//       },
//       {
//         path: 'projects',
//         element: (
//           <SuspenseWrapper>
//             <ProjectsPage />
//           </SuspenseWrapper>
//         ),
//       },
//       {
//         path: 'contact',
//         element: (
//           <SuspenseWrapper>
//             <ContactPage />
//           </SuspenseWrapper>
//         ),
//       },
//     ],
//   },
// ])

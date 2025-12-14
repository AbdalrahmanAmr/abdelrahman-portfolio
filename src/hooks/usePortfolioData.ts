import { useQuery } from '@tanstack/react-query'
import type {
  HomeData,
  AboutData,
  SkillsData,
  ProjectsData,
} from '../routes/loaders'
import {
  homeLoader,
  aboutLoader,
  skillsLoader,
  projectsLoader,
} from '../routes/loaders'

export function useHomeData() {
  return useQuery<HomeData>({
    queryKey: ['home'],
    queryFn: homeLoader,
  })
}

export function useAboutData() {
  return useQuery<AboutData>({
    queryKey: ['about'],
    queryFn: aboutLoader,
  })
}

export function useSkillsData() {
  return useQuery<SkillsData>({
    queryKey: ['skills'],
    queryFn: skillsLoader,
  })
}

export function useProjectsData() {
  return useQuery<ProjectsData>({
    queryKey: ['projects'],
    queryFn: projectsLoader,
  })
}


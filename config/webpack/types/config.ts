export type BuildModeType = 'development' | 'production'

export interface IBuildPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface IBuildOptions {
  mode: BuildModeType
  paths: IBuildPaths
  isDev: boolean
  port: number
}

export interface IBuildEnv {
  mode: BuildModeType
}

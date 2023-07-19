declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.woff'
declare module '*.woff2'
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const _IS_DEV_: boolean

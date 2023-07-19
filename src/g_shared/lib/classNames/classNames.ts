type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods?: Mods, additional?: string[]): string => {
  const additionalClasses = additional ?? []
  const modsClasses = Object.entries(mods ?? {})
    .filter(([className, value]) => value)
    .map(([className]) => className)
  return [
    cls,
    ...modsClasses,
    ...additionalClasses
  ].join(' ')
}

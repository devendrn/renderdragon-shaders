import { base } from '../meta.ts'
import { Shader, createShaderPageLoader } from '../theme/shader.ts'

declare const data: Shader[]
export { data }

export default createShaderPageLoader('ko/shaders/list/deferred/*.md', base)

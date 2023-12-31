import { base } from '../meta.ts'
import { Shader, createShaderPageLoader, formatDate } from '../theme/shader.ts'

declare const data: Shader[]
export { data }

export default createShaderPageLoader('shaders/list/rd/*.md', base)

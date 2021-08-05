import duplexer from 'duplexer'
import { Transform } from 'stream'
export default function (streams: Transform[]): duplexer
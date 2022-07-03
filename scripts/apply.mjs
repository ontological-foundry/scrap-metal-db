import { spawn } from 'child_process'

import dotenv from 'dotenv'
dotenv.config()

spawn('fauna-schema-migrate apply', {
  stdio: 'inherit',
  shell: true
})

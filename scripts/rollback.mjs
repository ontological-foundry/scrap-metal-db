import { spawn } from 'child_process'

import dotenv from 'dotenv'
dotenv.config()

spawn('fauna-schema-migrate rollback', {
  stdio: 'inherit',
  shell: true
})

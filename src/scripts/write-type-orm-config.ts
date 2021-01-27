import { dbConfigService } from '../config/db.config'
import fs = require('fs')

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(dbConfigService.getTypeOrmConfig(), null, 2),
)

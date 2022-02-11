import {createClient} from '@supabase/supabase-js'
import config from 'config'

const SUPABASE_URL = config.get('SUPABASE_URL')
const SUPABASE_ANON_KEY = config.get('SUPABASE_ANON_KEY')

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
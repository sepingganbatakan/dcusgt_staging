export const SUPABASE_URL = "https://jrsgeetntlxfucrhmydl.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_ztMzB1j59xwz7ZP0jTvilA_1r_X4d7A";

// Set to true to allow checkups without signing in.
// The Supabase guest-mode setting must also be enabled; see guest_mode.sql.
export const ALLOW_GUEST_CHECKUPS = true;

// Choose "tabs" or "dropdown" for department.
// These settings apply to both checkup identity and the guest profile form.
export const DEPARTMENT_SELECTION_MODE = "dropdown";

// Choose "list" or "dropdown" for employee selection.
export const EMPLOYEE_SELECTION_MODE = "list";

// Application timezone (e.g., "Asia/Jakarta" [WIB], "Asia/Makassar" [WITA], "Asia/Jayapura" [WIT]).
// Acts as the default client timezone and synchronizes with 'app_timezone' in public.app_settings.
export const APP_TIMEZONE = "Asia/Makassar";

// Default visible employee items in department tab selection before scrolling.
// Synchronizes dynamically with 'employee_list_visible_limit' in public.app_settings.
export const DEFAULT_EMPLOYEE_DISPLAY_LIMIT = 4;

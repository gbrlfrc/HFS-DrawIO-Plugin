exports.version = 1.0
exports.description = "Edit drawio files within hfs"
exports.apiRequired = 8.3
exports.frontend_js = ["main.js", "editor.js"]
exports.repo = "gbrlfrc/hfs-drawio-plugin"
exports.preview = ["https://github.com/user-attachments/assets/43f2e261-cb3b-4f48-bb36-cd6289b0d591", "https://github.com/user-attachments/assets/a427a8fc-865a-4846-9ccf-f26fdab8ff40"]
exports.config = {
    regex: {
        frontend: true, type: 'string', defaultValue: 'drawio',
        helperText: "Regex for supported file types"
    }
}

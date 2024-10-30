exports.version = 1.0
exports.description = "Edit drawio files within hfs"
exports.apiRequired = 8.3
exports.frontend_js = ["main.js", "editor.js"]
exports.repo = "gbrlfrc/hfs-drawio-plugin"
exports.config = {
    regex: {
        frontend: true, type: 'string', defaultValue: 'drawio',
        helperText: "Regex for supported file types"
    }
}
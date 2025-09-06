/** Minimal client action that opens diagrams.net in embed mode via an Owl dialog.
 *  Later: implement postMessage exchange to load/save XML and optional PNG.
 */
odoo.define('knowledge_drawio.open_editor', function (require) {
    "use strict";
    const AbstractAction = require('web.AbstractAction');
    const core = require('web.core');
    const rpc = require('web.rpc');

    const DrawioEditor = AbstractAction.extend({
        start: async function () {
            // 1) Get active Knowledge Article
            const context = this.action && this.action.context || {};
            const activeId = context.active_id;

            // 2) Read current XML
            const [rec] = await rpc.query({
                model: 'knowledge.article',
                method: 'read',
                args: [[activeId], ['diagram_xml', 'diagram_name']],
            });

            // 3) Open a simple dialog with an <iframe src="https://embed.diagrams.net/?embed=1&ui=min">
            //    TODO: Implement window.addEventListener('message', ...) to handle draw.io postMessage API
            //    and rpc.query() write() back to model with updated XML/PNG.
            this.do_notify("Draw.io", "Editor would open here (embed).");

            return this._super.apply(this, arguments);
        },
    });

    core.action_registry.add('knowledge_drawio.open_editor', DrawioEditor);
    return DrawioEditor;
});

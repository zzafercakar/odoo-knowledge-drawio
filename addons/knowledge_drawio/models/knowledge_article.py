from odoo import models, fields

class KnowledgeArticle(models.Model):
    _inherit = "knowledge.article"

    diagram_xml = fields.Text("Diagram XML")
    diagram_png = fields.Binary("Diagram PNG")
    diagram_name = fields.Char("Diagram Name", default="diagram.drawio")

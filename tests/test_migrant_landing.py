import re
import unittest
from pathlib import Path


PAGE = Path(__file__).parents[1] / "public" / "megafon-migrants-landing.html"


class MigrantLandingRegressionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = PAGE.read_text(encoding="utf-8")

    def test_connect_button_does_not_inherit_hero_flex_basis(self):
        rule = re.search(
            r"\.landing-buttons-box \.mfui-button\s*\{([^}]*)\}",
            self.source,
        )
        self.assertIsNotNone(rule)
        self.assertIn("flex: 0 0 auto", rule.group(1))
        self.assertIn("height: 52px", rule.group(1))

    def test_perks_carousel_supports_rotation_and_pointer_drag(self):
        self.assertIn("const rotatePerks", self.source)
        self.assertIn("setInterval(rotatePerks", self.source)
        self.assertIn("carousel.addEventListener('pointerdown'", self.source)
        self.assertIn("carousel.addEventListener('pointermove'", self.source)


if __name__ == "__main__":
    unittest.main()

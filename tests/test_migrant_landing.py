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

    def test_prototype_card_reveal_and_scroll_slider(self):
        self.assertIn("@keyframes megafon-service-appear", self.source)
        self.assertIn("rotateX(-68deg)", self.source)
        self.assertIn("data-card-reveal", self.source)
        self.assertIn("perks-scroll-story", self.source)
        self.assertIn("expectedLeft", self.source)
        self.assertNotIn("setInterval(rotatePerks", self.source)


if __name__ == "__main__":
    unittest.main()

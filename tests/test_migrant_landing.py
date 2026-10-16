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

    def test_card_reveal_stays_and_slider_is_horizontal_only(self):
        self.assertIn("@keyframes appear-animation-wrapper", self.source)
        self.assertIn("landing-appear-animation-wrapper_state_hidden", self.source)
        self.assertIn("rotateX(-68deg)", self.source)
        self.assertIn("data-card-reveal", self.source)
        self.assertNotIn(".landing-feature-cards-item,", self.source)
        self.assertIn("rootMargin: '0px 0px 120px 0px'", self.source)
        self.assertIn("MegaFonGraphikLC-Light.woff2", self.source)
        self.assertIn("MegaFonGraphikLC-Black.woff2", self.source)
        self.assertIn("carousel.addEventListener('pointerdown'", self.source)
        self.assertIn("carousel.scrollLeft = dragStartScroll - (event.clientX - dragStartX)", self.source)
        self.assertNotIn("perks-scroll-story", self.source)
        self.assertNotIn("expectedLeft", self.source)
        self.assertNotIn("window.scrollTo", self.source)


if __name__ == "__main__":
    unittest.main()

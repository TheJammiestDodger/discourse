import {
  acceptance,
  exists,
} from "discourse/tests/helpers/qunit-helpers";
import { test } from "qunit";
import { visit } from "@ember/test-helpers";

acceptance("Bootstrap Mode Notice", function (needs) {
  needs.user();
  needs.site({ wizard_required: true });
  needs.settings({
    bootstrap_mode_enabled: true,
    bootstrap_mode_min_users: 50
  });

  test("Navigation", async function (assert) {
    await visit("/");
    assert.ok(exists(".bootstrap-mode-notice"), "has the bootstrap mode notice");
    assert.ok(exists(".bootstrap-invite-button"), "bootstrap alert has invite button");
    assert.ok(exists(".bootstrap-wizard-button"), "bootstrap alert has wizard link");
  });
});

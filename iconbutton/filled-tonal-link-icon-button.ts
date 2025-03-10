/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../icon/icon.js';

import {customElement} from 'lit/decorators.js';
import {ClassInfo} from 'lit/directives/class-map.js';

import {styles} from './lib/filled-tonal-styles.css.js';
import {styles as sharedStyles} from './lib/icon-button-styles.css.js';
import {LinkIconButton} from './lib/link-icon-button.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-tonal-link-icon-button': MdFilledTonalLinkIconButton;
  }
}

/** @soyCompatible */
@customElement('md-filled-tonal-link-icon-button')
export class MdFilledTonalLinkIconButton extends LinkIconButton {
  static override styles = [sharedStyles, styles];

  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-icon-button--filled-tonal': true,
    };
  }
}

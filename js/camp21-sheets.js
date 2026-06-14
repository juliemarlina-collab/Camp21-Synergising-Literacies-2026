/**
 * camp21-sheets.js
 * Camp21: Synergising Literacies 2026 — Google Sheets Integration
 *
 * Provides a SHEETS object with async methods for reading/writing to Google Sheets
 * via a Google Apps Script Web App endpoint.
 *
 * All methods are no-ops when PRIVATE_SHEETS_ENABLED is false (static mode).
 * Set APPS_SCRIPT_URL in camp21-config.js and flip the flag to enable live data.
 */

window.SHEETS = (function () {

  function isEnabled() {
    return !!(window.CAMP21_CONFIG?.PRIVATE_SHEETS_ENABLED && window.CAMP21_CONFIG?.APPS_SCRIPT_URL);
  }

  function endpoint(action, params = {}) {
    const url = new URL(window.CAMP21_CONFIG.APPS_SCRIPT_URL);
    url.searchParams.set('action', action);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    return url.toString();
  }

  async function get(action, params) {
    if (!isEnabled()) return null;
    try {
      const res = await fetch(endpoint(action, params));
      return res.ok ? await res.json() : null;
    } catch (e) {
      console.warn('[SHEETS] GET failed:', action, e);
      return null;
    }
  }

  async function post(action, body) {
    if (!isEnabled()) return null;
    try {
      const res = await fetch(window.CAMP21_CONFIG.APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, ...body })
      });
      return res.ok ? await res.json() : null;
    } catch (e) {
      console.warn('[SHEETS] POST failed:', action, e);
      return null;
    }
  }

  return {

    /**
     * Get live config from Config sheet tab.
     * Returns: { current_day, current_phase, current_status } or null
     */
    getConfig: () => get('getConfig'),

    /**
     * Get all activity updates from Activity_Updates sheet tab.
     * Returns: array of update objects or null
     */
    getUpdates: () => get('getUpdates'),

    /**
     * Get group progress statuses from Groups sheet tab.
     * Returns: array of group progress objects or null
     */
    getGroupProgress: () => get('getGroupProgress'),

    /**
     * Post a new announcement to the Activity_Updates sheet tab.
     * @param {object} data - { tag, title, message, audience, posted_by }
     */
    postUpdate: (data) => post('postUpdate', data),

    /**
     * Update a single group's phase status in the Groups sheet tab.
     * @param {string|number} groupId - 1–6
     * @param {string} phase - 'empathy' | 'define' | 'ideate' | 'prototype' | 'pitch'
     * @param {string} status - 'not_started' | 'progress' | 'done' | 'needs_support' | 'pitch_ready'
     */
    updateGroupPhase: (groupId, phase, status) => post('updateGroupPhase', { groupId, phase, status }),

    /**
     * Submit judge scores to the Scores sheet tab.
     * @param {object} data - { judge, group, scores, total, comments }
     */
    submitScores: (data) => post('submitScores', data),

    /**
     * Get all submitted scores (organiser only).
     * Returns: array of score submissions or null
     */
    getScores: () => get('getScores')

  };
})();

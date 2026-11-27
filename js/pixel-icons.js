// js/pixel-icons.js
// Unified 16x16 Crisp Pixel-Art SVG Icon Library for mipo cuteee
(function (global) {
  'use strict';

  const RAW_ICONS = {
    bolt: `
      <rect x="8" y="1" width="4" height="2" fill="#facc15"/>
      <rect x="6" y="3" width="4" height="2" fill="#fde047"/>
      <rect x="4" y="5" width="7" height="2" fill="#facc15"/>
      <rect x="3" y="7" width="10" height="2" fill="#eab308"/>
      <rect x="7" y="9" width="4" height="2" fill="#facc15"/>
      <rect x="6" y="11" width="4" height="2" fill="#fde047"/>
      <rect x="4" y="13" width="3" height="2" fill="#eab308"/>
    `,
    target: `
      <rect x="5" y="1" width="6" height="2" fill="#ef4444"/>
      <rect x="3" y="3" width="2" height="2" fill="#ef4444"/>
      <rect x="11" y="3" width="2" height="2" fill="#ef4444"/>
      <rect x="5" y="3" width="6" height="2" fill="#ffffff"/>
      <rect x="1" y="5" width="2" height="6" fill="#ef4444"/>
      <rect x="13" y="5" width="2" height="6" fill="#ef4444"/>
      <rect x="3" y="5" width="2" height="6" fill="#ffffff"/>
      <rect x="11" y="5" width="2" height="6" fill="#ffffff"/>
      <rect x="5" y="5" width="6" height="6" fill="#ef4444"/>
      <rect x="7" y="7" width="2" height="2" fill="#ffffff"/>
      <rect x="3" y="11" width="2" height="2" fill="#ef4444"/>
      <rect x="11" y="11" width="2" height="2" fill="#ef4444"/>
      <rect x="5" y="11" width="6" height="2" fill="#ffffff"/>
      <rect x="5" y="13" width="6" height="2" fill="#ef4444"/>
    `,
    book: `
      <rect x="2" y="3" width="5" height="10" fill="#6366f1"/>
      <rect x="9" y="3" width="5" height="10" fill="#4f46e5"/>
      <rect x="3" y="4" width="4" height="8" fill="#ffffff"/>
      <rect x="9" y="4" width="4" height="8" fill="#e2e8f0"/>
      <rect x="7" y="4" width="2" height="9" fill="#312e81"/>
      <rect x="4" y="6" width="2" height="1" fill="#94a3b8"/>
      <rect x="4" y="8" width="2" height="1" fill="#94a3b8"/>
      <rect x="10" y="6" width="2" height="1" fill="#94a3b8"/>
      <rect x="10" y="8" width="2" height="1" fill="#94a3b8"/>
    `,
    'book-red': `
      <rect x="3" y="2" width="10" height="12" fill="#ef4444"/>
      <rect x="3" y="2" width="2" height="12" fill="#b91c1c"/>
      <rect x="6" y="4" width="5" height="3" fill="#fef2f2"/>
      <rect x="5" y="12" width="7" height="1" fill="#fca5a5"/>
    `,
    'book-blue': `
      <rect x="3" y="2" width="10" height="12" fill="#06b6d4"/>
      <rect x="3" y="2" width="2" height="12" fill="#0e7490"/>
      <rect x="6" y="4" width="5" height="3" fill="#ecfeff"/>
      <rect x="5" y="12" width="7" height="1" fill="#a5f3fc"/>
    `,
    books: `
      <rect x="2" y="2" width="4" height="12" fill="#ef4444"/>
      <rect x="2" y="4" width="4" height="1" fill="#fecaca"/>
      <rect x="6" y="3" width="4" height="11" fill="#3b82f6"/>
      <rect x="6" y="5" width="4" height="1" fill="#bfdbfe"/>
      <rect x="10" y="1" width="4" height="13" fill="#10b981"/>
      <rect x="10" y="3" width="4" height="1" fill="#a7f3d0"/>
    `,
    gear: `
      <rect x="6" y="1" width="4" height="2" fill="#64748b"/>
      <rect x="6" y="13" width="4" height="2" fill="#64748b"/>
      <rect x="1" y="6" width="2" height="4" fill="#64748b"/>
      <rect x="13" y="6" width="2" height="4" fill="#64748b"/>
      <rect x="3" y="3" width="2" height="2" fill="#64748b"/>
      <rect x="11" y="3" width="2" height="2" fill="#64748b"/>
      <rect x="3" y="11" width="2" height="2" fill="#64748b"/>
      <rect x="11" y="11" width="2" height="2" fill="#64748b"/>
      <rect x="4" y="4" width="8" height="8" fill="#94a3b8"/>
      <rect x="6" y="6" width="4" height="4" fill="#1e293b"/>
    `,
    sword: `
      <rect x="11" y="1" width="4" height="2" fill="#cbd5e1"/>
      <rect x="12" y="2" width="3" height="3" fill="#e2e8f0"/>
      <rect x="9" y="4" width="3" height="3" fill="#cbd5e1"/>
      <rect x="7" y="6" width="3" height="3" fill="#94a3b8"/>
      <rect x="4" y="8" width="4" height="2" fill="#f59e0b"/>
      <rect x="6" y="10" width="2" height="2" fill="#f59e0b"/>
      <rect x="3" y="11" width="3" height="3" fill="#92400e"/>
      <rect x="1" y="13" width="2" height="2" fill="#fbbf24"/>
    `,
    sun: `
      <rect x="7" y="1" width="2" height="2" fill="#f59e0b"/>
      <rect x="7" y="13" width="2" height="2" fill="#f59e0b"/>
      <rect x="1" y="7" width="2" height="2" fill="#f59e0b"/>
      <rect x="13" y="7" width="2" height="2" fill="#f59e0b"/>
      <rect x="3" y="3" width="2" height="2" fill="#fbbf24"/>
      <rect x="11" y="3" width="2" height="2" fill="#fbbf24"/>
      <rect x="3" y="11" width="2" height="2" fill="#fbbf24"/>
      <rect x="11" y="11" width="2" height="2" fill="#fbbf24"/>
      <rect x="5" y="5" width="6" height="6" fill="#fde047"/>
      <rect x="6" y="4" width="4" height="8" fill="#facc15"/>
      <rect x="4" y="6" width="8" height="4" fill="#facc15"/>
      <rect x="6" y="6" width="4" height="4" fill="#fef08a"/>
    `,
    moon: `
      <rect x="6" y="2" width="5" height="2" fill="#818cf8"/>
      <rect x="4" y="4" width="4" height="2" fill="#818cf8"/>
      <rect x="3" y="6" width="3" height="4" fill="#6366f1"/>
      <rect x="4" y="10" width="4" height="2" fill="#818cf8"/>
      <rect x="6" y="12" width="5" height="2" fill="#6366f1"/>
      <rect x="11" y="11" width="2" height="2" fill="#818cf8"/>
      <rect x="11" y="3" width="1" height="1" fill="#fde047"/>
      <rect x="12" y="6" width="2" height="2" fill="#fde047"/>
    `,
    clock: `
      <rect x="6" y="1" width="4" height="2" fill="#64748b"/>
      <rect x="5" y="3" width="6" height="1" fill="#475569"/>
      <rect x="3" y="4" width="10" height="9" fill="#94a3b8"/>
      <rect x="4" y="5" width="8" height="7" fill="#ffffff"/>
      <rect x="7" y="6" width="2" height="3" fill="#0f172a"/>
      <rect x="9" y="8" width="2" height="2" fill="#ef4444"/>
      <rect x="5" y="13" width="6" height="1" fill="#475569"/>
    `,
    ruler: `
      <rect x="2" y="2" width="2" height="12" fill="#f59e0b"/>
      <rect x="4" y="4" width="2" height="10" fill="#fbbf24"/>
      <rect x="6" y="6" width="2" height="8" fill="#f59e0b"/>
      <rect x="8" y="8" width="2" height="6" fill="#fbbf24"/>
      <rect x="10" y="10" width="2" height="4" fill="#f59e0b"/>
      <rect x="12" y="12" width="2" height="2" fill="#fbbf24"/>
      <rect x="4" y="8" width="3" height="4" fill="#ffffff"/>
    `,
    'chart-up': `
      <rect x="2" y="2" width="12" height="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="0"/>
      <rect x="2" y="12" width="12" height="2" fill="#64748b"/>
      <rect x="2" y="2" width="2" height="12" fill="#64748b"/>
      <rect x="4" y="9" width="2" height="2" fill="#10b981"/>
      <rect x="6" y="7" width="2" height="2" fill="#10b981"/>
      <rect x="8" y="8" width="2" height="2" fill="#10b981"/>
      <rect x="10" y="5" width="2" height="3" fill="#059669"/>
      <rect x="12" y="3" width="2" height="3" fill="#059669"/>
    `,
    wave: `
      <rect x="1" y="9" width="14" height="5" fill="#0284c7"/>
      <rect x="2" y="6" width="5" height="3" fill="#38bdf8"/>
      <rect x="4" y="4" width="4" height="2" fill="#7dd3fc"/>
      <rect x="7" y="5" width="2" height="2" fill="#e0f2fe"/>
      <rect x="9" y="7" width="5" height="3" fill="#0ea5e9"/>
    `,
    dice: `
      <rect x="2" y="2" width="12" height="12" fill="#8b5cf6"/>
      <rect x="3" y="3" width="10" height="10" fill="#ffffff"/>
      <rect x="5" y="5" width="2" height="2" fill="#6d28d9"/>
      <rect x="9" y="5" width="2" height="2" fill="#6d28d9"/>
      <rect x="7" y="7" width="2" height="2" fill="#6d28d9"/>
      <rect x="5" y="9" width="2" height="2" fill="#6d28d9"/>
      <rect x="9" y="9" width="2" height="2" fill="#6d28d9"/>
    `,
    clipboard: `
      <rect x="5" y="1" width="6" height="2" fill="#64748b"/>
      <rect x="3" y="3" width="10" height="12" fill="#d97706"/>
      <rect x="4" y="4" width="8" height="10" fill="#ffffff"/>
      <rect x="5" y="6" width="6" height="1" fill="#94a3b8"/>
      <rect x="5" y="8" width="6" height="1" fill="#94a3b8"/>
      <rect x="5" y="10" width="4" height="1" fill="#94a3b8"/>
    `,
    refresh: `
      <rect x="5" y="2" width="6" height="2" fill="#3b82f6"/>
      <rect x="3" y="4" width="2" height="4" fill="#3b82f6"/>
      <rect x="11" y="4" width="2" height="2" fill="#3b82f6"/>
      <rect x="10" y="3" width="4" height="2" fill="#60a5fa"/>
      <rect x="5" y="12" width="6" height="2" fill="#3b82f6"/>
      <rect x="11" y="8" width="2" height="4" fill="#3b82f6"/>
      <rect x="3" y="10" width="2" height="2" fill="#3b82f6"/>
      <rect x="2" y="11" width="4" height="2" fill="#60a5fa"/>
    `,
    'star-empty': `
      <rect x="7" y="1" width="2" height="3" fill="#94a3b8"/>
      <rect x="2" y="5" width="12" height="2" fill="#94a3b8"/>
      <rect x="4" y="7" width="8" height="3" fill="#cbd5e1"/>
      <rect x="3" y="10" width="3" height="4" fill="#94a3b8"/>
      <rect x="10" y="10" width="3" height="4" fill="#94a3b8"/>
      <rect x="6" y="6" width="4" height="3" fill="#ffffff"/>
    `,
    'star-full': `
      <rect x="7" y="1" width="2" height="4" fill="#f59e0b"/>
      <rect x="2" y="5" width="12" height="2" fill="#fbbf24"/>
      <rect x="4" y="7" width="8" height="3" fill="#f59e0b"/>
      <rect x="3" y="10" width="4" height="4" fill="#fbbf24"/>
      <rect x="9" y="10" width="4" height="4" fill="#fbbf24"/>
      <rect x="6" y="6" width="4" height="2" fill="#fef08a"/>
    `,
    chart: `
      <rect x="2" y="13" width="12" height="2" fill="#64748b"/>
      <rect x="3" y="8" width="3" height="5" fill="#10b981"/>
      <rect x="7" y="5" width="3" height="8" fill="#3b82f6"/>
      <rect x="11" y="2" width="3" height="11" fill="#8b5cf6"/>
    `,
    'dot-green': `
      <rect x="5" y="3" width="6" height="10" fill="#10b981"/>
      <rect x="3" y="5" width="10" height="6" fill="#10b981"/>
      <rect x="5" y="5" width="3" height="2" fill="#a7f3d0"/>
    `,
    'dot-yellow': `
      <rect x="5" y="3" width="6" height="10" fill="#f59e0b"/>
      <rect x="3" y="5" width="10" height="6" fill="#f59e0b"/>
      <rect x="5" y="5" width="3" height="2" fill="#fde68a"/>
    `,
    'dot-red': `
      <rect x="5" y="3" width="6" height="10" fill="#ef4444"/>
      <rect x="3" y="5" width="10" height="6" fill="#ef4444"/>
      <rect x="5" y="5" width="3" height="2" fill="#fecaca"/>
    `,
    brain: `
      <rect x="4" y="2" width="8" height="10" fill="#fb7185"/>
      <rect x="2" y="4" width="12" height="6" fill="#f43f5e"/>
      <rect x="7" y="3" width="2" height="9" fill="#be123c"/>
      <rect x="4" y="5" width="2" height="2" fill="#fecdd3"/>
      <rect x="10" y="5" width="2" height="2" fill="#fecdd3"/>
      <rect x="5" y="12" width="6" height="2" fill="#fda4af"/>
    `,
    bulb: `
      <rect x="5" y="1" width="6" height="2" fill="#fde047"/>
      <rect x="4" y="3" width="8" height="6" fill="#facc15"/>
      <rect x="6" y="4" width="2" height="3" fill="#fef9c3"/>
      <rect x="5" y="9" width="6" height="2" fill="#eab308"/>
      <rect x="6" y="11" width="4" height="3" fill="#94a3b8"/>
      <rect x="6" y="13" width="4" height="1" fill="#475569"/>
    `,
    check: `
      <rect x="12" y="3" width="2" height="2" fill="#10b981"/>
      <rect x="10" y="5" width="2" height="2" fill="#10b981"/>
      <rect x="8" y="7" width="2" height="2" fill="#10b981"/>
      <rect x="6" y="9" width="2" height="2" fill="#059669"/>
      <rect x="4" y="7" width="2" height="2" fill="#10b981"/>
      <rect x="2" y="5" width="2" height="2" fill="#10b981"/>
      <rect x="5" y="10" width="2" height="2" fill="#059669"/>
    `,
    cross: `
      <rect x="3" y="3" width="2" height="2" fill="#ef4444"/>
      <rect x="11" y="3" width="2" height="2" fill="#ef4444"/>
      <rect x="5" y="5" width="2" height="2" fill="#ef4444"/>
      <rect x="9" y="5" width="2" height="2" fill="#ef4444"/>
      <rect x="7" y="7" width="2" height="2" fill="#dc2626"/>
      <rect x="5" y="9" width="2" height="2" fill="#ef4444"/>
      <rect x="9" y="9" width="2" height="2" fill="#ef4444"/>
      <rect x="3" y="11" width="2" height="2" fill="#ef4444"/>
      <rect x="11" y="11" width="2" height="2" fill="#ef4444"/>
    `,
    warn: `
      <rect x="7" y="2" width="2" height="2" fill="#f59e0b"/>
      <rect x="6" y="4" width="4" height="2" fill="#f59e0b"/>
      <rect x="5" y="6" width="6" height="2" fill="#fbbf24"/>
      <rect x="4" y="8" width="8" height="2" fill="#f59e0b"/>
      <rect x="3" y="10" width="10" height="3" fill="#f59e0b"/>
      <rect x="7" y="6" width="2" height="3" fill="#0f172a"/>
      <rect x="7" y="10" width="2" height="2" fill="#0f172a"/>
    `,
    sparkles: `
      <rect x="7" y="1" width="2" height="10" fill="#facc15"/>
      <rect x="2" y="5" width="12" height="2" fill="#facc15"/>
      <rect x="6" y="4" width="4" height="4" fill="#fef08a"/>
      <rect x="12" y="10" width="2" height="4" fill="#fb7185"/>
      <rect x="11" y="11" width="4" height="2" fill="#fb7185"/>
    `,
    trophy: `
      <rect x="4" y="2" width="8" height="6" fill="#facc15"/>
      <rect x="2" y="3" width="2" height="3" fill="#eab308"/>
      <rect x="12" y="3" width="2" height="3" fill="#eab308"/>
      <rect x="5" y="8" width="6" height="2" fill="#eab308"/>
      <rect x="7" y="10" width="2" height="2" fill="#ca8a04"/>
      <rect x="4" y="12" width="8" height="2" fill="#92400e"/>
      <rect x="6" y="4" width="2" height="2" fill="#fef9c3"/>
    `,
    crown: `
      <rect x="2" y="4" width="2" height="7" fill="#facc15"/>
      <rect x="7" y="3" width="2" height="8" fill="#facc15"/>
      <rect x="12" y="4" width="2" height="7" fill="#facc15"/>
      <rect x="4" y="7" width="3" height="4" fill="#eab308"/>
      <rect x="9" y="7" width="3" height="4" fill="#eab308"/>
      <rect x="2" y="11" width="12" height="2" fill="#ca8a04"/>
      <rect x="7" y="8" width="2" height="2" fill="#ef4444"/>
    `,
    'medal-1': `
      <rect x="5" y="1" width="2" height="4" fill="#ef4444"/>
      <rect x="9" y="1" width="2" height="4" fill="#3b82f6"/>
      <rect x="4" y="5" width="8" height="8" fill="#facc15"/>
      <rect x="5" y="6" width="6" height="6" fill="#fef08a"/>
      <rect x="7" y="7" width="2" height="4" fill="#ca8a04"/>
    `,
    'medal-2': `
      <rect x="5" y="1" width="2" height="4" fill="#ef4444"/>
      <rect x="9" y="1" width="2" height="4" fill="#3b82f6"/>
      <rect x="4" y="5" width="8" height="8" fill="#cbd5e1"/>
      <rect x="5" y="6" width="6" height="6" fill="#f1f5f9"/>
      <rect x="6" y="7" width="4" height="4" fill="#64748b"/>
    `,
    'medal-3': `
      <rect x="5" y="1" width="2" height="4" fill="#ef4444"/>
      <rect x="9" y="1" width="2" height="4" fill="#3b82f6"/>
      <rect x="4" y="5" width="8" height="8" fill="#d97706"/>
      <rect x="5" y="6" width="6" height="6" fill="#fcd34d"/>
      <rect x="6" y="7" width="4" height="4" fill="#92400e"/>
    `,
    flag: `
      <rect x="3" y="2" width="2" height="13" fill="#475569"/>
      <rect x="5" y="2" width="8" height="6" fill="#10b981"/>
      <rect x="5" y="2" width="2" height="2" fill="#ffffff"/>
      <rect x="9" y="2" width="2" height="2" fill="#ffffff"/>
      <rect x="7" y="4" width="2" height="2" fill="#ffffff"/>
      <rect x="11" y="4" width="2" height="2" fill="#ffffff"/>
      <rect x="5" y="6" width="2" height="2" fill="#ffffff"/>
      <rect x="9" y="6" width="2" height="2" fill="#ffffff"/>
    `,
    inbox: `
      <rect x="7" y="1" width="2" height="5" fill="#4f46e5"/>
      <rect x="5" y="4" width="6" height="2" fill="#4f46e5"/>
      <rect x="6" y="6" width="4" height="1" fill="#4f46e5"/>
      <rect x="2" y="8" width="2" height="6" fill="#64748b"/>
      <rect x="12" y="8" width="2" height="6" fill="#64748b"/>
      <rect x="2" y="12" width="12" height="2" fill="#475569"/>
      <rect x="4" y="10" width="8" height="2" fill="#cbd5e1"/>
    `,
    outbox: `
      <rect x="7" y="2" width="2" height="6" fill="#10b981"/>
      <rect x="5" y="3" width="6" height="2" fill="#10b981"/>
      <rect x="6" y="1" width="4" height="2" fill="#34d399"/>
      <rect x="2" y="9" width="2" height="5" fill="#64748b"/>
      <rect x="12" y="9" width="2" height="5" fill="#64748b"/>
      <rect x="2" y="12" width="12" height="2" fill="#475569"/>
      <rect x="4" y="10" width="8" height="2" fill="#cbd5e1"/>
    `,
    note: `
      <rect x="3" y="2" width="9" height="12" fill="#ffffff"/>
      <rect x="3" y="2" width="9" height="1" fill="#64748b"/>
      <rect x="3" y="13" width="9" height="1" fill="#64748b"/>
      <rect x="5" y="5" width="5" height="1" fill="#94a3b8"/>
      <rect x="5" y="7" width="4" height="1" fill="#94a3b8"/>
      <rect x="10" y="6" width="4" height="6" fill="#f59e0b"/>
      <rect x="10" y="12" width="2" height="2" fill="#0f172a"/>
    `,
    plus: `
      <rect x="7" y="2" width="2" height="12" fill="#10b981"/>
      <rect x="2" y="7" width="12" height="2" fill="#10b981"/>
    `,
    eye: `
      <rect x="4" y="4" width="8" height="2" fill="#475569"/>
      <rect x="2" y="6" width="12" height="4" fill="#ffffff"/>
      <rect x="4" y="10" width="8" height="2" fill="#475569"/>
      <rect x="6" y="6" width="4" height="4" fill="#3b82f6"/>
      <rect x="7" y="7" width="2" height="2" fill="#0f172a"/>
    `,
    save: `
      <rect x="2" y="2" width="12" height="12" fill="#4f46e5"/>
      <rect x="4" y="2" width="7" height="4" fill="#e2e8f0"/>
      <rect x="8" y="3" width="2" height="2" fill="#475569"/>
      <rect x="4" y="8" width="8" height="5" fill="#ffffff"/>
      <rect x="5" y="10" width="6" height="1" fill="#94a3b8"/>
    `,
    user: `
      <rect x="6" y="2" width="4" height="4" fill="#6366f1"/>
      <rect x="5" y="3" width="6" height="4" fill="#818cf8"/>
      <rect x="3" y="9" width="10" height="5" fill="#4f46e5"/>
      <rect x="4" y="8" width="8" height="2" fill="#6366f1"/>
    `,
    key: `
      <rect x="2" y="5" width="5" height="5" fill="#facc15"/>
      <rect x="3" y="6" width="3" height="3" fill="#fef08a"/>
      <rect x="7" y="7" width="7" height="2" fill="#eab308"/>
      <rect x="11" y="9" width="1" height="2" fill="#ca8a04"/>
      <rect x="13" y="9" width="1" height="2" fill="#ca8a04"/>
    `,
    rocket: `
      <rect x="7" y="1" width="2" height="3" fill="#ef4444"/>
      <rect x="5" y="4" width="6" height="6" fill="#e2e8f0"/>
      <rect x="7" y="5" width="2" height="2" fill="#38bdf8"/>
      <rect x="3" y="8" width="2" height="3" fill="#ef4444"/>
      <rect x="11" y="8" width="2" height="3" fill="#ef4444"/>
      <rect x="6" y="11" width="4" height="2" fill="#f59e0b"/>
      <rect x="7" y="13" width="2" height="2" fill="#fde047"/>
    `,
    globe: `
      <rect x="5" y="2" width="6" height="12" fill="#38bdf8"/>
      <rect x="2" y="5" width="12" height="6" fill="#38bdf8"/>
      <rect x="4" y="4" width="8" height="8" fill="#0ea5e9"/>
      <rect x="5" y="5" width="3" height="3" fill="#10b981"/>
      <rect x="9" y="8" width="3" height="3" fill="#10b981"/>
    `,
    link: `
      <rect x="2" y="6" width="5" height="4" fill="#3b82f6"/>
      <rect x="3" y="7" width="3" height="2" fill="#ffffff"/>
      <rect x="9" y="6" width="5" height="4" fill="#6366f1"/>
      <rect x="10" y="7" width="3" height="2" fill="#ffffff"/>
      <rect x="6" y="7" width="4" height="2" fill="#0ea5e9"/>
    `,
    home: `
      <rect x="7" y="2" width="2" height="2" fill="#ef4444"/>
      <rect x="5" y="4" width="6" height="2" fill="#ef4444"/>
      <rect x="3" y="6" width="10" height="2" fill="#dc2626"/>
      <rect x="4" y="8" width="8" height="6" fill="#f8fafc"/>
      <rect x="7" y="10" width="2" height="4" fill="#92400e"/>
    `,
    scroll: `
      <rect x="4" y="2" width="9" height="12" fill="#fef3c7"/>
      <rect x="2" y="3" width="2" height="3" fill="#f59e0b"/>
      <rect x="12" y="11" width="2" height="3" fill="#f59e0b"/>
      <rect x="6" y="5" width="5" height="1" fill="#92400e"/>
      <rect x="6" y="7" width="5" height="1" fill="#92400e"/>
      <rect x="6" y="9" width="4" height="1" fill="#92400e"/>
    `,
    party: `
      <rect x="3" y="9" width="4" height="4" fill="#f59e0b"/>
      <rect x="5" y="7" width="4" height="4" fill="#ec4899"/>
      <rect x="3" y="3" width="2" height="2" fill="#38bdf8"/>
      <rect x="9" y="2" width="2" height="2" fill="#10b981"/>
      <rect x="12" y="6" width="2" height="2" fill="#facc15"/>
      <rect x="9" y="11" width="2" height="2" fill="#a855f7"/>
    `,
    teacher: `
      <rect x="2" y="5" width="12" height="2" fill="#1e293b"/>
      <rect x="5" y="3" width="6" height="2" fill="#334155"/>
      <rect x="5" y="7" width="6" height="4" fill="#fde68a"/>
      <rect x="4" y="11" width="8" height="3" fill="#4f46e5"/>
      <rect x="13" y="7" width="1" height="3" fill="#facc15"/>
    `,
    hourglass: `
      <rect x="4" y="2" width="8" height="2" fill="#78350f"/>
      <rect x="5" y="4" width="6" height="3" fill="#fde68a"/>
      <rect x="7" y="7" width="2" height="2" fill="#f59e0b"/>
      <rect x="5" y="9" width="6" height="3" fill="#f59e0b"/>
      <rect x="4" y="12" width="8" height="2" fill="#78350f"/>
    `,
    clap: `
      <rect x="3" y="6" width="5" height="6" fill="#fcd34d"/>
      <rect x="8" y="5" width="5" height="6" fill="#fbbf24"/>
      <rect x="5" y="2" width="2" height="2" fill="#f59e0b"/>
      <rect x="9" y="2" width="2" height="2" fill="#f59e0b"/>
    `,
    wavehand: `
      <rect x="5" y="4" width="6" height="8" fill="#fde68a"/>
      <rect x="4" y="6" width="2" height="4" fill="#fcd34d"/>
      <rect x="11" y="5" width="2" height="5" fill="#fcd34d"/>
      <rect x="2" y="3" width="2" height="2" fill="#38bdf8"/>
      <rect x="12" y="3" width="2" height="2" fill="#38bdf8"/>
    `,
    heart: `
      <rect x="3" y="3" width="4" height="3" fill="#f43f5e"/>
      <rect x="9" y="3" width="4" height="3" fill="#f43f5e"/>
      <rect x="2" y="5" width="12" height="4" fill="#fb7185"/>
      <rect x="4" y="9" width="8" height="2" fill="#f43f5e"/>
      <rect x="6" y="11" width="4" height="2" fill="#e11d48"/>
      <rect x="7" y="13" width="2" height="1" fill="#e11d48"/>
    `
  };

  function pxIcon(name, size = 15, extraClass = '') {
    const body = RAW_ICONS[name] || RAW_ICONS.sparkles;
    return `<svg class="px-icon ${extraClass}" viewBox="0 0 16 16" width="${size}" height="${size}" shape-rendering="crispEdges" aria-hidden="true">${body}</svg>`;
  }

  function hydratePixelIcons(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-px]').forEach(el => {
      const name = el.getAttribute('data-px');
      const size = parseInt(el.getAttribute('data-px-size') || '15', 10);
      el.innerHTML = pxIcon(name, size);
    });
  }

  global.pxIcon = pxIcon;
  global.hydratePixelIcons = hydratePixelIcons;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => hydratePixelIcons(document));
    } else {
      hydratePixelIcons(document);
    }
  }
})(typeof window !== 'undefined' ? window : global);

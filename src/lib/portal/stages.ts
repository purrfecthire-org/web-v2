/**
 * Application-stage vocabulary for the roles tracker.
 * Mirrors `OaApplicationStage` in the ATS backend (source/infrastructure/constants.py).
 * Fixed and ordered; candidates can move roles in ANY direction.
 */

export const ACTIVE_STAGES = [
  'por_aplicar',
  'aplicado',
  'primera_entrevista',
  'segunda_entrevista',
  'case_assessment',
  'oferta_verbal',
  'oferta_formal',
  'hired',
] as const;

/** Rendered as collapsed/toggleable kanban columns. */
export const COLLAPSED_STAGES = ['rechazado', 'en_pausa'] as const;

export const ALL_STAGES = [...ACTIVE_STAGES, ...COLLAPSED_STAGES] as const;

export type Stage = (typeof ALL_STAGES)[number];

export const STAGE_LABELS: Record<Stage, string> = {
  por_aplicar: 'Por aplicar',
  aplicado: 'Aplicado',
  primera_entrevista: '1ª entrevista',
  segunda_entrevista: '2ª entrevista',
  case_assessment: 'Case/Assessment',
  oferta_verbal: 'Oferta verbal',
  oferta_formal: 'Oferta formal',
  hired: 'Contratado',
  rechazado: 'Rechazado',
  en_pausa: 'En pausa',
};

export function stageLabel(stage: string): string {
  return STAGE_LABELS[stage as Stage] ?? stage;
}

export function isStage(value: string): value is Stage {
  return (ALL_STAGES as readonly string[]).includes(value);
}

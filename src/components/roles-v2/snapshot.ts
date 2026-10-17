import { apiBase, fetchRole, fetchRoles, type PublicRoleDetail } from '../../lib/roles';

interface RolesSnapshot {
  roles: PublicRoleDetail[];
  unavailable: boolean;
}

// A static site must emit the detail before linking to it. The index and
// getStaticPaths use the same successful detail snapshot in a build.
let snapshot: Promise<RolesSnapshot> | undefined;

export function getRolesSnapshot(): Promise<RolesSnapshot> {
  return snapshot ??= loadSnapshot();
}

async function loadSnapshot(): Promise<RolesSnapshot> {
  if (!apiBase()) return { roles: [], unavailable: true };
  try {
    const listed = await fetchRoles();
    const roles = await Promise.all(
      [...new Set(listed.map((role) => role.slug))].map(fetchRole),
    );
    return { roles, unavailable: false };
  } catch (error) {
    // Never deploy a transient outage as a valid empty snapshot: doing so
    // would delete every previously published static role detail. A failed
    // build preserves the current deployment. A valid empty list is allowed.
    throw new Error(`[roles] Refusing to publish an incomplete roles snapshot: ${(error as Error).message}`, { cause: error });
  }
}

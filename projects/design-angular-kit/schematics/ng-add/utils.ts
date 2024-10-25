import { Tree } from '@angular-devkit/schematics';

interface PackageJson {
  dependencies: Record<string, string>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SemVerObject {
  semVer?: string;
  major?: string;
  minor?: string;
  patch?: string;
  prerelease?: string;
  buildmetadata?: string;
}

function sortObjectByKeys(obj: Record<string, string>) {
  return Object.keys(obj)
    .sort()
    .reduce(
      (result, key) => {
        result[key] = obj[key];
        return result;
      },
      {} as Record<string, string>
    );
}

const semverWithPrefixRegex =
  /^[\^~]?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;

/** Converts a semver string to SemVerObject */
export function toSemVerObject(versionString: string) {
  const [semVer, major, minor, patch, prerelease, buildmetadata] = versionString.match(semverWithPrefixRegex) ?? [];
  return { semVer, major, minor, patch, prerelease, buildmetadata } satisfies SemVerObject;
}

/** Adds a package to the package.json in the given host tree. */
export function addPackageToPackageJson(host: Tree, pkg: string, version: string): Tree {
  if (host.exists('package.json')) {
    const sourceText = host.read('package.json')!.toString('utf-8');
    const json = JSON.parse(sourceText) as PackageJson;

    if (!json.dependencies) {
      json.dependencies = {};
    }

    if (!json.dependencies[pkg]) {
      json.dependencies[pkg] = version;
      json.dependencies = sortObjectByKeys(json.dependencies);
    }

    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }

  return host;
}

/** Gets the version of the specified package by looking at the package.json in the given tree. */
export function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null {
  if (!tree.exists('package.json')) {
    return null;
  }

  const packageJson = JSON.parse(tree.read('package.json')!.toString('utf8')) as PackageJson;

  if (packageJson.dependencies && packageJson.dependencies[name]) {
    return packageJson.dependencies[name];
  }

  return null;
}
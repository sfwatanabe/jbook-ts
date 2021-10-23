import * as esbuild from "esbuild-wasm";

/**
 * Specifies actions to take when parsing url package information for requests
 * to unkpkg.com for dynamic imports.
 *
 * @returns An esbuild-plugin to add steps to onResolve and onLoad when the build
 *          function is called.
 */
export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // Path resolution for index.js request
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: "index.js", namespace: "a" };
      });

      // Path resolution for relative imports paths
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: "a",
          path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href,
        };
      });

      // Default path resolution for top level packages
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};

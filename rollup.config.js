import typescript from '@rollup/plugin-typescript';
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
    input: 'src/index.tsx',
    output: {
        dir: 'build',
        format: 'cjs'
    },
    plugins: [
        typescript(),
        resolve(),
        //babel({
            //exclude: "node_modules/**"
        //}),
        commonjs(),
    ],
};

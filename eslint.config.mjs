import nextPlugin from "@next/eslint-plugin-next";

export default [
    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "dist/**",
            "build/**",
        ],
    },
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },
];
declare function module(params: Options): void

interface Options {
    [key: string]: any
}

declare namespace module {
    const version: string
    function doSomething(): void
}

export = module
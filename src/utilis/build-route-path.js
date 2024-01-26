// /users/:id

export function buildRoutePath(path){
    const routeParametersRegex = /:([a-zA-z]+)/
    const pathWithParams= path.replaceAll(routeParametersRegex, '(?<id>[a-z0-9\-_] +)')

    //console.log(Array.from(path.matchAll(routeParametersRegex)))

    const pathRegex= new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)
    return pathRegex
}
---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHTUVRW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2TOUOFt9jlVlnWUcID3xyG%2FfqIe0wN%2BxGotnbfJGrvAiEAq2EhEvfEfxzuTg18HyXCwiJBGRolx4LGIpSCOUyy74Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGJ9iI%2FD4tVTu5AdjSrcA045f2T4mwQxhCBbyN4WJEcg%2B7NLU2nlBwGRVHkoVGaABqXYwIjM05BW98ajfZn9YGMvWs8nXo%2FLbSbNizJ65kjFpSqCPn16RIm7bNY2ljHTx82aZX%2FsfSLCHZLTjyRDfwVP98StruDdI91pGmVWXN0zEtBKNK%2F5tl%2FzV0Ki9CaO%2Bkcm9Hrfwvt0V51XxhnBVkfw2auTSvtZZ%2FKu1M6nqqtpxgvsJaXjypu%2BithWBtIk7eH%2BgqjcAMS67lUzBT5XlrBcKzC95AMM7gWr4A2cZLk8T4UFVou63EmFse%2BXK7k0G4mzbSbinLYPkmuctBAxxeh2%2FwbPFlYBVNHEjt2%2BHVMCR0HBcAJKgUcQJCgvNjnUP4Dg81Dkv%2BQKhelNToPfrrNrQqHOqUFnzJPdluvyLpv4zAgWMat%2BZ%2FZGirSTC2Zdf%2BG01wgyYganQXYL1kj0fGsKs5BkVtJNmYBK9anOOCFSoWOEGDLgK8LFhM853gEtHVkpe93LXv0FZyF73iN731oCD4PEqbEQ0Cx6ZlK%2B0ASDs%2F5CKxnH0MTSoxrn48anskm3A%2B8y7Xn53mcGAUA4cURAY7kCtxIQlZ46s13PLLSusa%2F8jiOoaNTTOKxDyGPxGd4sBYgvBmddVFGhMK3L0ckGOqUB5e9zfoXCH0gMwrFWI%2F%2BwxdQyvezxC9BMLu%2FWGd9XtXF2p8rqk%2B98jCIymavXW18wQHq9zyGWgwiZ%2B55PNkNbXs9TBUPg1aEE3SxVCPZSWgu7%2BE5gX7GYD8Ig70K4eJXKHAf5atuMphLacWnWXAP5cTmY%2Fkbng7H3iZe%2BMur9urbsB2k7w9ORi3oFxy9YkX2TmmnJ0tb18JWVf7eb94jzxu%2Fd0oTs&X-Amz-Signature=cba272cdaae386c6e8077290cc597508f1f026cdb77892023c6a5ea735521d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHTUVRW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2TOUOFt9jlVlnWUcID3xyG%2FfqIe0wN%2BxGotnbfJGrvAiEAq2EhEvfEfxzuTg18HyXCwiJBGRolx4LGIpSCOUyy74Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGJ9iI%2FD4tVTu5AdjSrcA045f2T4mwQxhCBbyN4WJEcg%2B7NLU2nlBwGRVHkoVGaABqXYwIjM05BW98ajfZn9YGMvWs8nXo%2FLbSbNizJ65kjFpSqCPn16RIm7bNY2ljHTx82aZX%2FsfSLCHZLTjyRDfwVP98StruDdI91pGmVWXN0zEtBKNK%2F5tl%2FzV0Ki9CaO%2Bkcm9Hrfwvt0V51XxhnBVkfw2auTSvtZZ%2FKu1M6nqqtpxgvsJaXjypu%2BithWBtIk7eH%2BgqjcAMS67lUzBT5XlrBcKzC95AMM7gWr4A2cZLk8T4UFVou63EmFse%2BXK7k0G4mzbSbinLYPkmuctBAxxeh2%2FwbPFlYBVNHEjt2%2BHVMCR0HBcAJKgUcQJCgvNjnUP4Dg81Dkv%2BQKhelNToPfrrNrQqHOqUFnzJPdluvyLpv4zAgWMat%2BZ%2FZGirSTC2Zdf%2BG01wgyYganQXYL1kj0fGsKs5BkVtJNmYBK9anOOCFSoWOEGDLgK8LFhM853gEtHVkpe93LXv0FZyF73iN731oCD4PEqbEQ0Cx6ZlK%2B0ASDs%2F5CKxnH0MTSoxrn48anskm3A%2B8y7Xn53mcGAUA4cURAY7kCtxIQlZ46s13PLLSusa%2F8jiOoaNTTOKxDyGPxGd4sBYgvBmddVFGhMK3L0ckGOqUB5e9zfoXCH0gMwrFWI%2F%2BwxdQyvezxC9BMLu%2FWGd9XtXF2p8rqk%2B98jCIymavXW18wQHq9zyGWgwiZ%2B55PNkNbXs9TBUPg1aEE3SxVCPZSWgu7%2BE5gX7GYD8Ig70K4eJXKHAf5atuMphLacWnWXAP5cTmY%2Fkbng7H3iZe%2BMur9urbsB2k7w9ORi3oFxy9YkX2TmmnJ0tb18JWVf7eb94jzxu%2Fd0oTs&X-Amz-Signature=06bbea5e9f87e470ab36d286e67b01e7386ea20730baa1177dc9c3fe9094f8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9

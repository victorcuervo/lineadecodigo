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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEQUY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvOkzvJYv6r6AR6T5JvObv6rD40enM6iMEOojEE9I4AIhAIt%2Fc8cPNyFyUiTPLgNleXGuvc6NrGzp6%2BFoPLsOD3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzhjMCwSiI%2Fge1OeHsq3APX3RwFM94lhOyNSPZLhX2scUdgFFIMKf4svergjjHrAlXswkbnSy9zhWIcbiuWvLXeu3bClVv3P54R2cct2N%2FFV60%2F6UJM1grT5yo%2FEBHSswSgghFlFGV5dkDj5NhuyqQ63TUL%2B3LcoDHwx7paDICMuUZ5KR%2BPxKicG6nlihHmBiHfe5GPeKeTZh7qYtI4APr5zWPNjRfx2yaInoD5AwXRBJD0Stp5xhVeaJlYjnacSBLlsv8iV96utKtYvs%2F7ph9DMQwtY6fA4CRikqFE1VYu3zx%2FO217MS48b%2BVfs18G2aIl%2Bt3UPdFcbUOKo6%2Bhge335MBZ%2Fs5%2Fk6y0f12qFEJhyf4pmrOP%2FyzFThc%2F4K2TgQgCbDxteQthMbD3LCZGZ4bfZCZ%2BWcmaLSR%2Fdsw%2BfgdCf4kgN9YUIJlYDnX8k0UPtn4rt9SrEu0EUo1NR0y79qjeHg7SnZsy%2BMuiTGxJmpfxCC%2B9OOJcEUwdGi3Er20K60E3Biefs11HRnSzkS3pfmi6ne2IOHQEZ%2Fov54lSup%2Bne4MRHBese6JX89XmYR91kguyObpNCPsMzS8PhE46EYf4kyYj1pBgVPcxUOei0xn7lCI%2FNyuvh7GYHkoYMpVd0iaBkX8y4%2Fw8zwpqBTDEptDJBjqkAf1oHCFsPxW5yPY4eFYzbT38tQG%2BK0%2Fj5IDDiLaFp2faDlK11%2Fs%2Fmvnt8z4CBuNDo%2Fkwt7fG%2Fgq8vkGq4ZIYK032hYAuAWwE5Uikqri5FugtYl61mvxP1%2BCfA0aPuSgXPGysnj5xrWAwDDVAsvL9AJci6m7MS0tzk62kT6k5TGhFiJXLTYb1Yxj5Wom9TqYIaaz4Lq7SgncKMA5S8KqpoTnSV2W0&X-Amz-Signature=b5a55155b43ab555ffb2f5bb15824dae42e82164fcd622e31457b9968ab41550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEQUY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvOkzvJYv6r6AR6T5JvObv6rD40enM6iMEOojEE9I4AIhAIt%2Fc8cPNyFyUiTPLgNleXGuvc6NrGzp6%2BFoPLsOD3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzhjMCwSiI%2Fge1OeHsq3APX3RwFM94lhOyNSPZLhX2scUdgFFIMKf4svergjjHrAlXswkbnSy9zhWIcbiuWvLXeu3bClVv3P54R2cct2N%2FFV60%2F6UJM1grT5yo%2FEBHSswSgghFlFGV5dkDj5NhuyqQ63TUL%2B3LcoDHwx7paDICMuUZ5KR%2BPxKicG6nlihHmBiHfe5GPeKeTZh7qYtI4APr5zWPNjRfx2yaInoD5AwXRBJD0Stp5xhVeaJlYjnacSBLlsv8iV96utKtYvs%2F7ph9DMQwtY6fA4CRikqFE1VYu3zx%2FO217MS48b%2BVfs18G2aIl%2Bt3UPdFcbUOKo6%2Bhge335MBZ%2Fs5%2Fk6y0f12qFEJhyf4pmrOP%2FyzFThc%2F4K2TgQgCbDxteQthMbD3LCZGZ4bfZCZ%2BWcmaLSR%2Fdsw%2BfgdCf4kgN9YUIJlYDnX8k0UPtn4rt9SrEu0EUo1NR0y79qjeHg7SnZsy%2BMuiTGxJmpfxCC%2B9OOJcEUwdGi3Er20K60E3Biefs11HRnSzkS3pfmi6ne2IOHQEZ%2Fov54lSup%2Bne4MRHBese6JX89XmYR91kguyObpNCPsMzS8PhE46EYf4kyYj1pBgVPcxUOei0xn7lCI%2FNyuvh7GYHkoYMpVd0iaBkX8y4%2Fw8zwpqBTDEptDJBjqkAf1oHCFsPxW5yPY4eFYzbT38tQG%2BK0%2Fj5IDDiLaFp2faDlK11%2Fs%2Fmvnt8z4CBuNDo%2Fkwt7fG%2Fgq8vkGq4ZIYK032hYAuAWwE5Uikqri5FugtYl61mvxP1%2BCfA0aPuSgXPGysnj5xrWAwDDVAsvL9AJci6m7MS0tzk62kT6k5TGhFiJXLTYb1Yxj5Wom9TqYIaaz4Lq7SgncKMA5S8KqpoTnSV2W0&X-Amz-Signature=e66be17d922ce6a0fc1b85d443e229f62ea1329a214b1dabb9dd970b04451385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

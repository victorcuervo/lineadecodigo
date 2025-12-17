---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHAEEM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCioXZot8eP9i05kgVFRlZyCsMiDd2Efeii2j3Key6cvwIgZcsHEGOM9aoJXhI22pBVLMs%2BP960uCCBwNBGxRpwlggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBSGH9WIo6YXBMjBLSrcAwrMIL1zLgBG78lanQ1oVkb5Jc5yVfqOxjh2Vz4P%2FmHDHMbSv7EHL1f040%2BETlyGLs3r0ZLszP2obsibg6gIPtooXwvKw9HY4PL9F%2FvI3te9RFxzNtfA5kuzmsuLtqMdHUnaELIMZVPTbXDeZ1vF8wAAZWNJsUs3Zp%2FXjcJa%2B%2BylGwteedrP4miWS0ml3brrrcpCvD4eQFcLxm%2BvNcEV44571u39K%2FJDVRwIMNfOKl%2Fbl7%2FArobQLU9bxE7LEEdcLxEFcqxAmvMjp94s63uYVNUiJ%2F9FhHkA690f5l7PNhiRBiA5kmBrlr4gd3oyra8wPmGCUGMp7eZI81wR%2FUOziOCjnC1ow%2FCfuh4IqalslXfpyuAVh4OLdzkpqAUp0BaWS5L7nFbQv7U62i%2FbUPt3tvmN6BUD1P9MTxU5PYxQY0PtOB1ua7F27eBZFK9DwlaMscxb%2FUrxcCy1YNFtU0gOdTkU5BJEvjLBNYAESAPSHZt8TLMYkohYwCCWQejlmmuvwvwohcfwUE3nLt8Uk1GIO8IF%2BA0%2F1VbUk2lIx67OBG6SCEOPLcsag3iUykeD9Dr4Sb0Uwu9Hs5UvpbguEI7lT1pz3kcgkyWB3WqEpSZlCdK4OhXNAPX9ly2Ay%2FiAMMP7h8oGOqUBXQLsjmEQakrPjG4yInE%2FrQSUbkhHbU5vHsrLoxF1tnR%2Bx2ueB81JuwpPlBRtu75UDu01wltd8u3YQMQg2aTsjIEKKU2XUFOvFgeCuv8PWiYS%2BeMleVWMVloQqj8BY9Fi0LkC23vh92zRIIDp56w8SJNFIORevWYbf43JagyC7t7HC%2BNRsa4mklQyAyCvOwWGwr6B2S5HaRra2K2s0g056GYY%2BRJ6&X-Amz-Signature=c5a5a2027f6540077087a2f3de9d951e196e39295401502d3bbd82e225509c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHAEEM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCioXZot8eP9i05kgVFRlZyCsMiDd2Efeii2j3Key6cvwIgZcsHEGOM9aoJXhI22pBVLMs%2BP960uCCBwNBGxRpwlggq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBSGH9WIo6YXBMjBLSrcAwrMIL1zLgBG78lanQ1oVkb5Jc5yVfqOxjh2Vz4P%2FmHDHMbSv7EHL1f040%2BETlyGLs3r0ZLszP2obsibg6gIPtooXwvKw9HY4PL9F%2FvI3te9RFxzNtfA5kuzmsuLtqMdHUnaELIMZVPTbXDeZ1vF8wAAZWNJsUs3Zp%2FXjcJa%2B%2BylGwteedrP4miWS0ml3brrrcpCvD4eQFcLxm%2BvNcEV44571u39K%2FJDVRwIMNfOKl%2Fbl7%2FArobQLU9bxE7LEEdcLxEFcqxAmvMjp94s63uYVNUiJ%2F9FhHkA690f5l7PNhiRBiA5kmBrlr4gd3oyra8wPmGCUGMp7eZI81wR%2FUOziOCjnC1ow%2FCfuh4IqalslXfpyuAVh4OLdzkpqAUp0BaWS5L7nFbQv7U62i%2FbUPt3tvmN6BUD1P9MTxU5PYxQY0PtOB1ua7F27eBZFK9DwlaMscxb%2FUrxcCy1YNFtU0gOdTkU5BJEvjLBNYAESAPSHZt8TLMYkohYwCCWQejlmmuvwvwohcfwUE3nLt8Uk1GIO8IF%2BA0%2F1VbUk2lIx67OBG6SCEOPLcsag3iUykeD9Dr4Sb0Uwu9Hs5UvpbguEI7lT1pz3kcgkyWB3WqEpSZlCdK4OhXNAPX9ly2Ay%2FiAMMP7h8oGOqUBXQLsjmEQakrPjG4yInE%2FrQSUbkhHbU5vHsrLoxF1tnR%2Bx2ueB81JuwpPlBRtu75UDu01wltd8u3YQMQg2aTsjIEKKU2XUFOvFgeCuv8PWiYS%2BeMleVWMVloQqj8BY9Fi0LkC23vh92zRIIDp56w8SJNFIORevWYbf43JagyC7t7HC%2BNRsa4mklQyAyCvOwWGwr6B2S5HaRra2K2s0g056GYY%2BRJ6&X-Amz-Signature=be78a46b0559d8bfdbadbf5c8f4c898b771d2fb5fbd39a1b839170e8dc96cc64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH4BDJU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rDeKcOcIQpJusyKHdtmoBbJulE6uhPXR%2FLb%2FDwuhBAiEAk2fZjfbxoI2%2BSVYs1kBUCP3ibWEEcH6SX3%2FrsCFjz5YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsdWR8QZM9tUvrtlircA4NcFPwoEtzWlw1fl2VqG2pIHunM%2FnYBXFYyatMpoBwh0d1IOPUVWmT1lts13ZbQErnbgkZo8xf3s834B0DeMDcyIAeEziDihAN1%2B9W2ekhbABdiLArzV14pQv%2BP%2BdE2X4Bx1%2B9lea4rtggmOQdA2jMnFnNUDTmh3G%2FmRR3WyKRgiJdgCZVQ5bEfhzNkPd5dX3lOmLyvDt5lRMPvidi%2FlPEDh843i%2F%2BgEnnpP%2F5mxJslej1FBWC6i8QFlhcw3eYeXO2LDC0RhtCkZMWgJI%2BmP5h2yLiTi%2BAvCKCMK4qQLmiKen6cBKr2ZS18ayQYJLaQm9x%2BYOAEt66XL15F5yqmbWbzkiaLGCg%2FRckzn88YgFyfPCFzAXTOsUrj%2F39WYEMLkfPISBmrWWrYtZWomEF0z7WXwsjUml%2BSycCICQVKY%2Ffclw2epu0T3V11rd0DIJ5v%2BnQp87LkPJLQaojvNHSglwLPUSynV4U6rEhMfYIrImUbYH77gx1I0XKbC1kchHGmG1KMY5uIxDHJvodxE%2BCTthKeBk6EQYKYftW7mrusVUh64zMTCBSNt7iMNng7rKIQ9nvwHFXqrNmeFHXwZqvb2uOsJ1MWKUcs9srYKaVsfbFnRjFx54yPQ083W5nUMN%2F90skGOqUBxa9bhkb3LKiQorKs1Th%2BYjW0J7h44x3ZYG%2FVhOCyG1P%2F%2FxLL3OW0e%2FYlzR8Ol%2Bi8EUn2KEpnl6oz%2F63x7OeOD%2FePxZSJVn%2FZHhGggBforQgfbaDrw%2BDUXR4G%2Fbfb4Sj3lbcSkzYzZPzU25JhQIbNyIFpd%2FXNcvZ2ZRVJQCgU7IUT40gdANBIn5cpIgU2%2B8YlFUHvJWGcw6dCLKj%2BW4HrCAoMh5jv&X-Amz-Signature=a72b6003f38d58a4f681ec7c2eba017369d248449716d7c976abf09e6db563b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH4BDJU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rDeKcOcIQpJusyKHdtmoBbJulE6uhPXR%2FLb%2FDwuhBAiEAk2fZjfbxoI2%2BSVYs1kBUCP3ibWEEcH6SX3%2FrsCFjz5YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsdWR8QZM9tUvrtlircA4NcFPwoEtzWlw1fl2VqG2pIHunM%2FnYBXFYyatMpoBwh0d1IOPUVWmT1lts13ZbQErnbgkZo8xf3s834B0DeMDcyIAeEziDihAN1%2B9W2ekhbABdiLArzV14pQv%2BP%2BdE2X4Bx1%2B9lea4rtggmOQdA2jMnFnNUDTmh3G%2FmRR3WyKRgiJdgCZVQ5bEfhzNkPd5dX3lOmLyvDt5lRMPvidi%2FlPEDh843i%2F%2BgEnnpP%2F5mxJslej1FBWC6i8QFlhcw3eYeXO2LDC0RhtCkZMWgJI%2BmP5h2yLiTi%2BAvCKCMK4qQLmiKen6cBKr2ZS18ayQYJLaQm9x%2BYOAEt66XL15F5yqmbWbzkiaLGCg%2FRckzn88YgFyfPCFzAXTOsUrj%2F39WYEMLkfPISBmrWWrYtZWomEF0z7WXwsjUml%2BSycCICQVKY%2Ffclw2epu0T3V11rd0DIJ5v%2BnQp87LkPJLQaojvNHSglwLPUSynV4U6rEhMfYIrImUbYH77gx1I0XKbC1kchHGmG1KMY5uIxDHJvodxE%2BCTthKeBk6EQYKYftW7mrusVUh64zMTCBSNt7iMNng7rKIQ9nvwHFXqrNmeFHXwZqvb2uOsJ1MWKUcs9srYKaVsfbFnRjFx54yPQ083W5nUMN%2F90skGOqUBxa9bhkb3LKiQorKs1Th%2BYjW0J7h44x3ZYG%2FVhOCyG1P%2F%2FxLL3OW0e%2FYlzR8Ol%2Bi8EUn2KEpnl6oz%2F63x7OeOD%2FePxZSJVn%2FZHhGggBforQgfbaDrw%2BDUXR4G%2Fbfb4Sj3lbcSkzYzZPzU25JhQIbNyIFpd%2FXNcvZ2ZRVJQCgU7IUT40gdANBIn5cpIgU2%2B8YlFUHvJWGcw6dCLKj%2BW4HrCAoMh5jv&X-Amz-Signature=7856fda34db8079a230eac4ddf5aabe7dd4127ba125330162ceca917008a3e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

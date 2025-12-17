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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLOMDHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebEeBmYvHp4FFWM1arLIo9UHi4cqRJ1n5kfeYI7UuEAIgJ%2FKctXHXY6PSMPorEcHXNVhD9XBS%2BvjBZfy6pfailkcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMyO%2BZKRetQlD7p4NSrcAxrJCCmcChE2DQ1RK2ie34mSM27pIAiPMnPgJwDOo68sN7qkIf4KtuzztiQ5%2BSjIryQwMAiSjnNGqi7mm0ZLEInxlHUE8LwpDzHsEqGUyUpk9aZlmSaxt7lJ%2FN5%2B%2Fkddpu3xUPOtiOiB1HRibZdv96ry9L%2Bt4kjxPMG7vleixqi8FJYoRnYvVT6LYxEEgWttq3y4fxerxqfYaMx%2BPAO1tJcWuJ0M62n4YeaAErIFcdZKUmb%2FovScj5ZTj0w%2B7jh%2BUvo%2FKvrgeL5Bku6BjMsr5pFzNbjtXzpw6zV9DPQhpmymOTjvXKGdEVeHJZhKM3kZ00%2BW7%2Bji9lW%2Fq7HRaJKnUSO8Xi%2Fq2U41xYq33RTaoYA0NK%2F9Mfp%2BjNM%2FNPfAcELgFd6xePkMWBXG%2FA%2Bc8kkhMTGcNZaz9r6ooIzQzDHC9z1epsXpJJnOLoBYD7i0sq0dQZEiWoWkf0rmmMj27OnNPHRx%2BiIiq0n5S4UeHmWHLJ%2BGSMFXSY%2FDHxAn9xXhQxB9hpiuqy7j32GvDPBdeltTpbCM6UyNTqMh781eTvo99andSsHCGa3YkdFV5q1k7CfvEIYOhk%2Bra1xm22tqXM82ij7sfMwJF%2FDoFbkn%2B6HHDjoKadKb1QgRO%2Fpd8kneMIarisoGOqUBaHpqaEp5l8JiUE7b%2FzMngjE%2BP67OBxleB5Key4YPxvyShtjIqqTN3Wbwul%2FABFRy%2BU9KftPZfRKt4RLLW3QM86FVlZ5jviGQs68LodpaoB7SjaICom6t%2FWEGQHVrX6tDsj1vykZ%2BhQ%2FgdoV7w9bTE7Veo3Dm4gythpEXLqKPohOW%2BFVlhnA71tBTh3BZ75wOYHu7kg3fXpcG5G27cdomV%2FAhJ7n0&X-Amz-Signature=815f4c4af47279c9f574a29a7aa1a23181dbd56a4dcb344655830399c7928175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLOMDHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebEeBmYvHp4FFWM1arLIo9UHi4cqRJ1n5kfeYI7UuEAIgJ%2FKctXHXY6PSMPorEcHXNVhD9XBS%2BvjBZfy6pfailkcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMyO%2BZKRetQlD7p4NSrcAxrJCCmcChE2DQ1RK2ie34mSM27pIAiPMnPgJwDOo68sN7qkIf4KtuzztiQ5%2BSjIryQwMAiSjnNGqi7mm0ZLEInxlHUE8LwpDzHsEqGUyUpk9aZlmSaxt7lJ%2FN5%2B%2Fkddpu3xUPOtiOiB1HRibZdv96ry9L%2Bt4kjxPMG7vleixqi8FJYoRnYvVT6LYxEEgWttq3y4fxerxqfYaMx%2BPAO1tJcWuJ0M62n4YeaAErIFcdZKUmb%2FovScj5ZTj0w%2B7jh%2BUvo%2FKvrgeL5Bku6BjMsr5pFzNbjtXzpw6zV9DPQhpmymOTjvXKGdEVeHJZhKM3kZ00%2BW7%2Bji9lW%2Fq7HRaJKnUSO8Xi%2Fq2U41xYq33RTaoYA0NK%2F9Mfp%2BjNM%2FNPfAcELgFd6xePkMWBXG%2FA%2Bc8kkhMTGcNZaz9r6ooIzQzDHC9z1epsXpJJnOLoBYD7i0sq0dQZEiWoWkf0rmmMj27OnNPHRx%2BiIiq0n5S4UeHmWHLJ%2BGSMFXSY%2FDHxAn9xXhQxB9hpiuqy7j32GvDPBdeltTpbCM6UyNTqMh781eTvo99andSsHCGa3YkdFV5q1k7CfvEIYOhk%2Bra1xm22tqXM82ij7sfMwJF%2FDoFbkn%2B6HHDjoKadKb1QgRO%2Fpd8kneMIarisoGOqUBaHpqaEp5l8JiUE7b%2FzMngjE%2BP67OBxleB5Key4YPxvyShtjIqqTN3Wbwul%2FABFRy%2BU9KftPZfRKt4RLLW3QM86FVlZ5jviGQs68LodpaoB7SjaICom6t%2FWEGQHVrX6tDsj1vykZ%2BhQ%2FgdoV7w9bTE7Veo3Dm4gythpEXLqKPohOW%2BFVlhnA71tBTh3BZ75wOYHu7kg3fXpcG5G27cdomV%2FAhJ7n0&X-Amz-Signature=a0294d12bb2073ee697f718593e74d42aceb3bebe46551605298562df11fa872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

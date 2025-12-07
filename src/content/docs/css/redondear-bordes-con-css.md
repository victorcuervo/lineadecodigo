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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHUWUUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUFxlWQKzJKsf7eFoZZ7uD2QbntuzQV1XN4adSf1UwOAiAToPGTm6r%2FEQVJ2tl2OgXR9%2BsZhqajDQCuhb29zHn8pSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjx2lFJrPHsgxAQRnKtwDvD16molqXA1AzvEVVThiYtVwekJ3xbO%2FcwoUfcQJtHgcn7BeNmLFJoZ8CQd0PC4vvGLkJ5E0M51IJCbv%2Fqu7U1lYXNeRUFy%2BHwVzx%2FNNq7BdVV%2FAb%2F8PSb2lnHc1zok94lPOKffNvcr%2FpmbxASTxKbxjL4CjuZA9DpMSsou7tXKzjKJcEuJUisUfyRgodHnm6hneR0i%2BrUQ62tLu%2BZbsekgKxbZlHa5rfQ3HKZPQIt%2Fa3J9x2CSbHrd7b3nn2%2BV4rWrSbaZL3u%2BsbuioXgLsfiMxekPVsj5483jmYMNqRseR4mg1seP6Iko9xkD1jcuG5wfHnRbVnCrz5ifXSeGPmD3oBgwmVs%2B1p9Ledejj1ocJaL42LowutPi0t6Gj2pOPl87enVseLYW80mLZ3ArvXrh21kiv7il7RzeJeB4JemDRR40UzIHzEnCscVAWBM5E%2BFjnnQwdOTxJYzeQXcBUIHPCPd1pKoAZtpXNfMHiwcRN49qCdHre6qvTQoERVrtg12giPErNlvM6ijsHg8RDVZMZuxM7bfMP3B%2FAbOcHHFuMKOFoGkStk%2FWs5DGWDdS45YFQxsEsMbP%2FGsR91MihvhehDWcQEHmQhOMy4ufvn%2BKjfn%2BhhenbpuyCFEcwwMfXyQY6pgHPYYkFe7I%2Fl3b%2BuXVpzYKI2GtYq%2FJQ80b4pdCIAfQx51JLmjRW5B8AtKk1krO0Yo1Uwv3IlgHQc%2BsR1a46VGVdkHlwRyGYcMtFfyErTd%2Byc3lremOjjBiRW6AVzfjL3%2B%2Bt8mBlEGNHudjupX6kKvzVVAzLXo6exzMuUbzJ%2FYnitRmAZ5Vo1I4QefyGxXwI70uXbpcdjuQWYnxdgLG%2Fjb7xkXfifSBg&X-Amz-Signature=ec7c9f8de83a925ec799434bf8df26179c80ace23105ce9a3676877fa9b09bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHUWUUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUFxlWQKzJKsf7eFoZZ7uD2QbntuzQV1XN4adSf1UwOAiAToPGTm6r%2FEQVJ2tl2OgXR9%2BsZhqajDQCuhb29zHn8pSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjx2lFJrPHsgxAQRnKtwDvD16molqXA1AzvEVVThiYtVwekJ3xbO%2FcwoUfcQJtHgcn7BeNmLFJoZ8CQd0PC4vvGLkJ5E0M51IJCbv%2Fqu7U1lYXNeRUFy%2BHwVzx%2FNNq7BdVV%2FAb%2F8PSb2lnHc1zok94lPOKffNvcr%2FpmbxASTxKbxjL4CjuZA9DpMSsou7tXKzjKJcEuJUisUfyRgodHnm6hneR0i%2BrUQ62tLu%2BZbsekgKxbZlHa5rfQ3HKZPQIt%2Fa3J9x2CSbHrd7b3nn2%2BV4rWrSbaZL3u%2BsbuioXgLsfiMxekPVsj5483jmYMNqRseR4mg1seP6Iko9xkD1jcuG5wfHnRbVnCrz5ifXSeGPmD3oBgwmVs%2B1p9Ledejj1ocJaL42LowutPi0t6Gj2pOPl87enVseLYW80mLZ3ArvXrh21kiv7il7RzeJeB4JemDRR40UzIHzEnCscVAWBM5E%2BFjnnQwdOTxJYzeQXcBUIHPCPd1pKoAZtpXNfMHiwcRN49qCdHre6qvTQoERVrtg12giPErNlvM6ijsHg8RDVZMZuxM7bfMP3B%2FAbOcHHFuMKOFoGkStk%2FWs5DGWDdS45YFQxsEsMbP%2FGsR91MihvhehDWcQEHmQhOMy4ufvn%2BKjfn%2BhhenbpuyCFEcwwMfXyQY6pgHPYYkFe7I%2Fl3b%2BuXVpzYKI2GtYq%2FJQ80b4pdCIAfQx51JLmjRW5B8AtKk1krO0Yo1Uwv3IlgHQc%2BsR1a46VGVdkHlwRyGYcMtFfyErTd%2Byc3lremOjjBiRW6AVzfjL3%2B%2Bt8mBlEGNHudjupX6kKvzVVAzLXo6exzMuUbzJ%2FYnitRmAZ5Vo1I4QefyGxXwI70uXbpcdjuQWYnxdgLG%2Fjb7xkXfifSBg&X-Amz-Signature=d5e7f1162011f60ca52c3f147cbc2e204a56c55c198847c848156f593680559d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

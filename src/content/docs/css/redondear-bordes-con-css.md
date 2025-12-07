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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVAAZEA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr6wS%2BQ12I7lkl8FYbRiUabX6b%2BA6H9JKW5UqDcpvbqAiEAvSVxT5xvByuvcki67pGMqQQfIGpwNuk7pJjAxbFPJTQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVA1jtLzCkOwim3%2FCrcA2mpRKfTigdcVGQbvYw5md4lOxYqMq0Gg8iqzShHzo0qkBokiPRANmf5ygtkkUgTlrLMhqDt%2BOh%2FYGqKBsmhSs1Wl3ZhhxtzBl71jbrGoYOsnr6nvnelPzw%2BYNvRbutiBde3xvtXBJa8vrCbWC2ePbQoWvBB7S399%2FtO5ZIOXfcvPI9%2BiGAyL3iVwqXXOEejbvkCObGrpOLm28yWVFx14o8ubDaJF6yJ3Wk45aQ%2BuwSmbqB4xrIxUPis57fZx8IYAtukorn9rKNA6O8HUWVD42oO6fEV4chRb%2FsnsGhwCQ5UuzXqTV1o59czqqxCpQseu5QfGxEvTOnyQ1XKaQ%2BiThPRFXpiJaQBJQC4rJaXKgcewgESH5BZgjS1YObRAVGflGzFHCr7t8YqhQIMxmf3%2Bs057OU8Fgjnlep8gXhpWN0AP%2FCpUyp96ef7NdCMFTihwQpMCBe6RXR1CvgQa%2BSV2lGqRU3BzQdQATcSqem4J9ZZXvpmeYcALd3PWrt5QsrF1ux1CL9bWG3iw7KlCWyhmIsdaie1BgHESsdPizXv%2FUBd5PrhSGTUMnT3A02tWkP%2FbRRHxtDelsURtQnHHrHw1Ns9Qtcpsz77EO864CJC0uiApU%2BFk%2BljhBlkCSszMLWa1ckGOqUBtrAV36bho%2FLe%2FVpAtp9rZeKC%2B8SZhYJHF9aI2uy%2BD7qIcvgak7sEh8887vjf1d6yMqsofkWCvKScVOaaiAn9YrRi6dwdEtFjeIteH7pC%2BYRupjCceWCSNdYQSFEA2n5f%2BUmtRy8oV98NJzBNRWjip8j2Cah8DJtGU9765pqd61yLJGI%2BSrcLaIE6w%2F2L2EvnweWT%2Bi9xcL%2BCtZS0CikTsyfXXWFx&X-Amz-Signature=bf103e8fb32c9bf22936b41bd7b1ae5a0f85cd3372a490ff1b509f4961334131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVAAZEA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr6wS%2BQ12I7lkl8FYbRiUabX6b%2BA6H9JKW5UqDcpvbqAiEAvSVxT5xvByuvcki67pGMqQQfIGpwNuk7pJjAxbFPJTQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVA1jtLzCkOwim3%2FCrcA2mpRKfTigdcVGQbvYw5md4lOxYqMq0Gg8iqzShHzo0qkBokiPRANmf5ygtkkUgTlrLMhqDt%2BOh%2FYGqKBsmhSs1Wl3ZhhxtzBl71jbrGoYOsnr6nvnelPzw%2BYNvRbutiBde3xvtXBJa8vrCbWC2ePbQoWvBB7S399%2FtO5ZIOXfcvPI9%2BiGAyL3iVwqXXOEejbvkCObGrpOLm28yWVFx14o8ubDaJF6yJ3Wk45aQ%2BuwSmbqB4xrIxUPis57fZx8IYAtukorn9rKNA6O8HUWVD42oO6fEV4chRb%2FsnsGhwCQ5UuzXqTV1o59czqqxCpQseu5QfGxEvTOnyQ1XKaQ%2BiThPRFXpiJaQBJQC4rJaXKgcewgESH5BZgjS1YObRAVGflGzFHCr7t8YqhQIMxmf3%2Bs057OU8Fgjnlep8gXhpWN0AP%2FCpUyp96ef7NdCMFTihwQpMCBe6RXR1CvgQa%2BSV2lGqRU3BzQdQATcSqem4J9ZZXvpmeYcALd3PWrt5QsrF1ux1CL9bWG3iw7KlCWyhmIsdaie1BgHESsdPizXv%2FUBd5PrhSGTUMnT3A02tWkP%2FbRRHxtDelsURtQnHHrHw1Ns9Qtcpsz77EO864CJC0uiApU%2BFk%2BljhBlkCSszMLWa1ckGOqUBtrAV36bho%2FLe%2FVpAtp9rZeKC%2B8SZhYJHF9aI2uy%2BD7qIcvgak7sEh8887vjf1d6yMqsofkWCvKScVOaaiAn9YrRi6dwdEtFjeIteH7pC%2BYRupjCceWCSNdYQSFEA2n5f%2BUmtRy8oV98NJzBNRWjip8j2Cah8DJtGU9765pqd61yLJGI%2BSrcLaIE6w%2F2L2EvnweWT%2Bi9xcL%2BCtZS0CikTsyfXXWFx&X-Amz-Signature=e71110ea9d6a299d5825a585a9d7d6ff15db51f4360061917088bc7f2c4a20f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

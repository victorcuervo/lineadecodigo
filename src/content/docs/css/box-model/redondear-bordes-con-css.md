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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UFBNMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIHUG7evsHV70wAVTqVAOhS285Fz7sNaOj9%2FWd1x%2FxIAiATB3Yd6Sd67ZpsduYG5fxAhwWpq%2FCdjBTPmEMQd4Y0Cir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMIpyKOCGQjWUHjDI%2BKtwDbuqqnmbU%2B3hhUMgl90PnCvvoc%2BALSFy8GK5TsehQRHXzWRlecFoZ8nWhbVuioOBj1uv9AuhImWJvutXbj7dU488jMDBUzMhyrtZRRjcfkARMJjWtD%2Fc5MxYmM1kGl0iNsnZjp1HPhoppMxiTmBYARCVnmyubqC%2B9cx%2FXrO6VcYYUFWgduLuph2OV4pNTZSwQjQ2Q%2BnqE8PZJMqUiNmTJCo7GVs1kNMN7CdZitPyustsAcOzT6920tOvW8jcxJ998X4ZpJomD6f1WQIcNv0XfSEW6GtXlTP1gZFbrUjJ6aEbebAxIEVLJDWKnHqfFyDz4r6zQOovGXJ%2BarA5hLG4JRsADxF6KhTl%2FkgQYmr%2BxWAk01NKk1B%2BVtnHEMOVIdhfBzSgQrYBvlp3%2Bu8A4LmL0rnhlhRN0W8W%2B%2BXmIs686%2B80dtar4dJ%2FZParlQJq%2BH0sTOueHd1PMK9mxJm9jTWRvXH8yavw6D5jKKzCvCgx7Pw1W%2FfsTn9mQpOAkEQWk7uotsSvjM%2FvFBBRWNM7y%2Fr2d7yDIYKeOoeMJfJDWMzoaxSse9F%2Bm970bNNQR4RS%2BGpwKDQ%2FmDq2V08kWWD9ylirhRexH1BdpGaXvHqZ1bkD8Qcy8Rf7MKCP28BtMolIw%2Ft6HygY6pgFE22wlODMot3KSj5Hd3OtFNn%2FPi%2Bffx7Ky7TijqyBwXiXZCpi%2Fv9ZqEw7iXhNiyBCKcrmx2YDZY3cZCCipu%2FUcbCT271raTDJBswX%2BGe0KWuv%2FuLvGQJ2q5Y%2FHTyN819FDHLrH95r9QiCGdaTef%2FXb9ximflWo2TE9M%2F87S2tRnCHppR%2BHNR5gix6bGqOkmRS%2BenmG4IwWU9lhZPfkT8LEvlpkwX4o&X-Amz-Signature=ffff6188f371f318f0fcd253a18a91f0b61dcac013dfd24bd51e6fcf7ac25710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UFBNMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIHUG7evsHV70wAVTqVAOhS285Fz7sNaOj9%2FWd1x%2FxIAiATB3Yd6Sd67ZpsduYG5fxAhwWpq%2FCdjBTPmEMQd4Y0Cir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMIpyKOCGQjWUHjDI%2BKtwDbuqqnmbU%2B3hhUMgl90PnCvvoc%2BALSFy8GK5TsehQRHXzWRlecFoZ8nWhbVuioOBj1uv9AuhImWJvutXbj7dU488jMDBUzMhyrtZRRjcfkARMJjWtD%2Fc5MxYmM1kGl0iNsnZjp1HPhoppMxiTmBYARCVnmyubqC%2B9cx%2FXrO6VcYYUFWgduLuph2OV4pNTZSwQjQ2Q%2BnqE8PZJMqUiNmTJCo7GVs1kNMN7CdZitPyustsAcOzT6920tOvW8jcxJ998X4ZpJomD6f1WQIcNv0XfSEW6GtXlTP1gZFbrUjJ6aEbebAxIEVLJDWKnHqfFyDz4r6zQOovGXJ%2BarA5hLG4JRsADxF6KhTl%2FkgQYmr%2BxWAk01NKk1B%2BVtnHEMOVIdhfBzSgQrYBvlp3%2Bu8A4LmL0rnhlhRN0W8W%2B%2BXmIs686%2B80dtar4dJ%2FZParlQJq%2BH0sTOueHd1PMK9mxJm9jTWRvXH8yavw6D5jKKzCvCgx7Pw1W%2FfsTn9mQpOAkEQWk7uotsSvjM%2FvFBBRWNM7y%2Fr2d7yDIYKeOoeMJfJDWMzoaxSse9F%2Bm970bNNQR4RS%2BGpwKDQ%2FmDq2V08kWWD9ylirhRexH1BdpGaXvHqZ1bkD8Qcy8Rf7MKCP28BtMolIw%2Ft6HygY6pgFE22wlODMot3KSj5Hd3OtFNn%2FPi%2Bffx7Ky7TijqyBwXiXZCpi%2Fv9ZqEw7iXhNiyBCKcrmx2YDZY3cZCCipu%2FUcbCT271raTDJBswX%2BGe0KWuv%2FuLvGQJ2q5Y%2FHTyN819FDHLrH95r9QiCGdaTef%2FXb9ximflWo2TE9M%2F87S2tRnCHppR%2BHNR5gix6bGqOkmRS%2BenmG4IwWU9lhZPfkT8LEvlpkwX4o&X-Amz-Signature=70852f67c614abee599a99b6a67d25cc2de62bce1748de640978515432bfa182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQNSMQ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Oc7UTZrUuJoDpyBiujHXGzz%2FlJLlrQchBZaVdENoSAiAOqXcxbkc8QPzsx%2FzfTFIyZbRgwgS7w2EZKPJC2xUlKSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm35fhduCYmSxgHaBKtwDYSnFKB8l7uOHU6Fdtgp98aDBvoX41yFc3XVlbP%2FjNN%2B4igfbmi2Cqyo%2FWMyfjlB5%2FZ4kqJ05SDwZPRqRPhJEwP17HlOJafUGcPafdkDixamMmGS3utgmeG2hdZ5OTp%2Bb9PdHfUOxi4hld0qgnrL5HrH6upPfqmEDQf%2FYU1IfJ%2BBfnX5ZGYam8nn9fIRiSnOGMzYCadMVndN6H7MeWMYJYz6Fvq3uB3rQy8XafdiLBhRJhPD6PkSSKw9vBFml3fkjFZawBLhwE%2BgxrvUPBpRvi%2F3Mj5IP12I5WAdSd29MCCA4blC4nSOpnMmzZe06f8%2F4LASK8%2FxQ%2BjGYj0TJUecAuYEO4vWZDMFCFDmFUtv4uBeSslugFYHG9Uy%2BfbQ9mcNgwu99DXOByy46uzeGsfLyevpe%2FpJtTrvd48lEeP6VCgLUCXUl1wK7qPXMWMxmP7yHYeUhRylecwx03iqzW6TT8d5pH6RcVvmrU9xBsA%2BF8gBfdcA9op1AUz1iHy1WYuOHkyVuFOsvIn2uS5VaciVkTwiGu32cCFuXxIkfJ2SC8%2Fj93kKv7%2BWOGu45b19dSBTdsxDBpyfW0Q0gBlefWTHDMzmdiBiDDRRX%2B8ID%2FuojmnoMzwVIlWIQm0FngdswgpTZyQY6pgG9ohkmyPvodZXIJpQAEjuEJI5K14AjeuwxbUeTjVmWIbvNw8gxpigyJHDR%2FLA4NuJ3hRqY93Og9Mndg9WPBwvuPx73%2BNhSMZzNakwLALAdWUkh31MhGBISZCDXAGW%2Be5A6cVe7X2KmErpQNOE%2F6DZzp404E0hePVomGOQWxi%2Bd2VdFkC5fCPLfxL43eKV3uxfpbeQZFsHWvZYXeu8etHeXdH%2F8lYVT&X-Amz-Signature=5bec235baa57c9183b1df8a00735fb487642db3a6021f0c401c9e45b1ce7870a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQNSMQ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Oc7UTZrUuJoDpyBiujHXGzz%2FlJLlrQchBZaVdENoSAiAOqXcxbkc8QPzsx%2FzfTFIyZbRgwgS7w2EZKPJC2xUlKSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm35fhduCYmSxgHaBKtwDYSnFKB8l7uOHU6Fdtgp98aDBvoX41yFc3XVlbP%2FjNN%2B4igfbmi2Cqyo%2FWMyfjlB5%2FZ4kqJ05SDwZPRqRPhJEwP17HlOJafUGcPafdkDixamMmGS3utgmeG2hdZ5OTp%2Bb9PdHfUOxi4hld0qgnrL5HrH6upPfqmEDQf%2FYU1IfJ%2BBfnX5ZGYam8nn9fIRiSnOGMzYCadMVndN6H7MeWMYJYz6Fvq3uB3rQy8XafdiLBhRJhPD6PkSSKw9vBFml3fkjFZawBLhwE%2BgxrvUPBpRvi%2F3Mj5IP12I5WAdSd29MCCA4blC4nSOpnMmzZe06f8%2F4LASK8%2FxQ%2BjGYj0TJUecAuYEO4vWZDMFCFDmFUtv4uBeSslugFYHG9Uy%2BfbQ9mcNgwu99DXOByy46uzeGsfLyevpe%2FpJtTrvd48lEeP6VCgLUCXUl1wK7qPXMWMxmP7yHYeUhRylecwx03iqzW6TT8d5pH6RcVvmrU9xBsA%2BF8gBfdcA9op1AUz1iHy1WYuOHkyVuFOsvIn2uS5VaciVkTwiGu32cCFuXxIkfJ2SC8%2Fj93kKv7%2BWOGu45b19dSBTdsxDBpyfW0Q0gBlefWTHDMzmdiBiDDRRX%2B8ID%2FuojmnoMzwVIlWIQm0FngdswgpTZyQY6pgG9ohkmyPvodZXIJpQAEjuEJI5K14AjeuwxbUeTjVmWIbvNw8gxpigyJHDR%2FLA4NuJ3hRqY93Og9Mndg9WPBwvuPx73%2BNhSMZzNakwLALAdWUkh31MhGBISZCDXAGW%2Be5A6cVe7X2KmErpQNOE%2F6DZzp404E0hePVomGOQWxi%2Bd2VdFkC5fCPLfxL43eKV3uxfpbeQZFsHWvZYXeu8etHeXdH%2F8lYVT&X-Amz-Signature=7b600714041fcd96560f203803947791d8d4ad22b5116a87adf7e892b54f5988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

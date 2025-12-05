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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75VL7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqS0N9nlaGfxkqZPsngZtHvKN1Mnixt6Wvk46N45FDqAiEA76LXcX40jJv2GRUqWTnStpNPMLQab4VV1VHbfe1BfUYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF2ANz6z%2FitWdZIOYircAxzce8eYR%2FGQv%2FUkmE9S%2Bdi6rGy3JzAgCxlVW%2BcVZBfOPUj8Q9qH%2Fk1UKJkQsiV0V2Qd4y12mPv2vCu5%2FPr%2FJyKaUB%2BTwkMuSfFxZYauWQQVYWFcbXzITUrn707hiPiIOZa2%2BLtH%2BpD3g7TZHNxzqEJRp93z1RRYRX4jJj3Z9khI85e0Z%2BlsBv38ND8GTQx7nP7eu6YQBgYLK7WF5OKVTY6xIhx1MNG9F8IVQsbfNVdDEZ8ucorkl9WeN11JkKRQSS0XlqtAzGmxwBcBYttgdnBcvAbbNcTEKt3JAhVKskJr8dNMLuiTjVm2vQQFlieiW9Z%2Fahc1edKZJPIN03KC3tNL59ESYxHU1XtEKzeeJAdGzYvYeumZ4UQwLnwoKAml7gP%2FXc8vyryF1rKkcpWo5Jt1Xc6rAnj687TeAD218cp85YdfqrCJ8uOLjgi%2FcS73kQpdmUxoqbvrzIiGrKWZw3BffhbUf4DgNHWg3s9BUlSLQjWFWg2LAsSfd3hFdf4jWwdgWaE5dygFqPkZnTtnpnfd%2By1LSFj4pn6be0sezinTTmkfOw46AFy9Nb5O9KH7TFc2nZLIhpUjcP8OGNPgvktsP6Lh7Mrl7Ivlo%2FpkR4rW5hjrir1%2FBu33R6cEMIPpy8kGOqUB5Co557O%2F%2FGw9%2BLjislPEQ0fUykg4A0uM4Gkb%2FV1FzVMRMmn7rJy4war%2FwskKP%2BB2Yv4Vd%2FnLxsPLBC3TrsFPD1flAFNEQJ1PvI%2B8eaKGJpnT5V4RUr78uP%2Bdo%2FQlUw4ht6hdJfMj4JtPYDFefCDUDY%2Fy%2BNR70Z4cBMiB8Wyv7BQJW3DjbmVl%2FhVbOLflPTznBq29N%2FbHWGGDcdHzNogABchNTDpr&X-Amz-Signature=98c4463cb82c9004e5ac83d697c4bf3880aa2e93b55700aed560963b3a06f541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75VL7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqS0N9nlaGfxkqZPsngZtHvKN1Mnixt6Wvk46N45FDqAiEA76LXcX40jJv2GRUqWTnStpNPMLQab4VV1VHbfe1BfUYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF2ANz6z%2FitWdZIOYircAxzce8eYR%2FGQv%2FUkmE9S%2Bdi6rGy3JzAgCxlVW%2BcVZBfOPUj8Q9qH%2Fk1UKJkQsiV0V2Qd4y12mPv2vCu5%2FPr%2FJyKaUB%2BTwkMuSfFxZYauWQQVYWFcbXzITUrn707hiPiIOZa2%2BLtH%2BpD3g7TZHNxzqEJRp93z1RRYRX4jJj3Z9khI85e0Z%2BlsBv38ND8GTQx7nP7eu6YQBgYLK7WF5OKVTY6xIhx1MNG9F8IVQsbfNVdDEZ8ucorkl9WeN11JkKRQSS0XlqtAzGmxwBcBYttgdnBcvAbbNcTEKt3JAhVKskJr8dNMLuiTjVm2vQQFlieiW9Z%2Fahc1edKZJPIN03KC3tNL59ESYxHU1XtEKzeeJAdGzYvYeumZ4UQwLnwoKAml7gP%2FXc8vyryF1rKkcpWo5Jt1Xc6rAnj687TeAD218cp85YdfqrCJ8uOLjgi%2FcS73kQpdmUxoqbvrzIiGrKWZw3BffhbUf4DgNHWg3s9BUlSLQjWFWg2LAsSfd3hFdf4jWwdgWaE5dygFqPkZnTtnpnfd%2By1LSFj4pn6be0sezinTTmkfOw46AFy9Nb5O9KH7TFc2nZLIhpUjcP8OGNPgvktsP6Lh7Mrl7Ivlo%2FpkR4rW5hjrir1%2FBu33R6cEMIPpy8kGOqUB5Co557O%2F%2FGw9%2BLjislPEQ0fUykg4A0uM4Gkb%2FV1FzVMRMmn7rJy4war%2FwskKP%2BB2Yv4Vd%2FnLxsPLBC3TrsFPD1flAFNEQJ1PvI%2B8eaKGJpnT5V4RUr78uP%2Bdo%2FQlUw4ht6hdJfMj4JtPYDFefCDUDY%2Fy%2BNR70Z4cBMiB8Wyv7BQJW3DjbmVl%2FhVbOLflPTznBq29N%2FbHWGGDcdHzNogABchNTDpr&X-Amz-Signature=29c34affad13f69a89e1206bc20d301c6314ccc110d42ee53caca5e62331d7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBFTEHN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnjGIsJ8k1bNMSWOGYzMmCSiLjWZbvg1FPclq817jYXgIgRcwboUTMlGuXFm54WenOnCfsYHO9Z9HM3zoGQyEssUcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyLkxsDQwpg15r3HSrcA0T0fHKP9yMYB3i44HkPulpHX4ibDzw4US61kaMQTMg96zFI9VT2ld2kKYOHhXZnBK%2BfScChCrv19RX37OoShGNEiwrNRXvLfzbiligywGqVFpeOOEZ8%2FeAQp3Jug5dHSOrWam09nfxajo2gvuk9E5mmO8ifvohPXMDCWEaLJXNJCSZYYPLZUQ96lJhQp5QRXGriETLR2kMWCQqZqBw1zx5LpWWkRtta%2FhCre6YM%2Fnh3MooJX4N3676EwIvQ4aFq7rxckpcGMS5opGDMswU4gPSUyZwwn6T6lcMzGquRxFD5Y8q04SgPwiWuKQSjK3c6pl2arBhRfc6sL%2FFE%2B%2BDZoqDQGfiF%2BCGi%2F3myNZr%2FBvlCd%2FhHREMuNpzGHCl1G%2FImA6T%2Fi%2BudphYt6lfHUAQknhecf8q8KkUKohhCHkajGTIui90ZQbaoQhICr%2FxITs%2BDxKkh9dAKo2Q5zNmAGSn0thPFNi7lvlqGPLRV8eh8yRc%2FTIqGxpteGpDkDi4PT%2FHhN4ppVbrUq%2BL7fCUXDrwk%2FnXzlU1oOX6QACJtDj1AyP5RKekRn4dJzjmOfKUs6mcUalV6cyAGj1g7c658ArYxoy3ThE%2Bd73tDDHWNESMQ7JktAflVLcCrOo6Z1phbMKSH3MkGOqUBt7Cvu93wNWCFcKJHN06KVLC3SVIctL%2B0y3nSbxrkZrocFVzU1k4j6Tcm5WlszgfWc1SPOnKa5bHCrZ%2B1ssAPj8ZF9jk5%2BtqYAoBBZPWBKkOy%2F24LWWQvqyDjL00ADTqwbC9BWBeVDdKe1eI2cyyiAKKV%2FcsBIWlxsPu759cqqU3jO4Hn5Ho0uwGRCl9Zcn7shLti2kXS1uWHpMGXNEl2QSdf1ze9&X-Amz-Signature=114303d8f6c0fadee6e6547a19e4285cb2b7bb1acf99c3d7a5b5a458c3619acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBFTEHN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnjGIsJ8k1bNMSWOGYzMmCSiLjWZbvg1FPclq817jYXgIgRcwboUTMlGuXFm54WenOnCfsYHO9Z9HM3zoGQyEssUcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyLkxsDQwpg15r3HSrcA0T0fHKP9yMYB3i44HkPulpHX4ibDzw4US61kaMQTMg96zFI9VT2ld2kKYOHhXZnBK%2BfScChCrv19RX37OoShGNEiwrNRXvLfzbiligywGqVFpeOOEZ8%2FeAQp3Jug5dHSOrWam09nfxajo2gvuk9E5mmO8ifvohPXMDCWEaLJXNJCSZYYPLZUQ96lJhQp5QRXGriETLR2kMWCQqZqBw1zx5LpWWkRtta%2FhCre6YM%2Fnh3MooJX4N3676EwIvQ4aFq7rxckpcGMS5opGDMswU4gPSUyZwwn6T6lcMzGquRxFD5Y8q04SgPwiWuKQSjK3c6pl2arBhRfc6sL%2FFE%2B%2BDZoqDQGfiF%2BCGi%2F3myNZr%2FBvlCd%2FhHREMuNpzGHCl1G%2FImA6T%2Fi%2BudphYt6lfHUAQknhecf8q8KkUKohhCHkajGTIui90ZQbaoQhICr%2FxITs%2BDxKkh9dAKo2Q5zNmAGSn0thPFNi7lvlqGPLRV8eh8yRc%2FTIqGxpteGpDkDi4PT%2FHhN4ppVbrUq%2BL7fCUXDrwk%2FnXzlU1oOX6QACJtDj1AyP5RKekRn4dJzjmOfKUs6mcUalV6cyAGj1g7c658ArYxoy3ThE%2Bd73tDDHWNESMQ7JktAflVLcCrOo6Z1phbMKSH3MkGOqUBt7Cvu93wNWCFcKJHN06KVLC3SVIctL%2B0y3nSbxrkZrocFVzU1k4j6Tcm5WlszgfWc1SPOnKa5bHCrZ%2B1ssAPj8ZF9jk5%2BtqYAoBBZPWBKkOy%2F24LWWQvqyDjL00ADTqwbC9BWBeVDdKe1eI2cyyiAKKV%2FcsBIWlxsPu759cqqU3jO4Hn5Ho0uwGRCl9Zcn7shLti2kXS1uWHpMGXNEl2QSdf1ze9&X-Amz-Signature=277bfd94200447e8448d6c623865c4285bd072557db366d3cb3050733be467aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOIMQCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxvws1%2FNe9986Hy3MpJCrzIjk8BUC5vfrfTS8k62MUpwIhAK%2FQ%2FIQqGpQutmzqCgjjxrKULpmzGMXeSe1LD28ubJgfKv8DCFUQABoMNjM3NDIzMTgzODA1Igxm66do4GziYHoXGBYq3APqW%2B%2FUW7FDwUTg8qO1RFF1K4k6q486C9BYwbPikhakD88ZmeHlgYnTxiLGwMPoCOhPtbeM%2Bta9YKK1Q%2FGaQuty9ZfhUhe%2FLfO1lQP4MjFLTMOkidXuNrMd8LnLsBYLTU8CLeVOXPdewWp5rOwPxVZ6yGO5ZVG4kFTrEcZGGKKdSbWMv4QSw1LTKKx0HwyWyZix6FgkzlObBhdzEmDWNivalpbOOubprzMgEWulHX07L8jrMofr3gfd6RFYbwNPnvFmhry0LicoDNX2O%2Biji6D1%2FZBjZHyX6JZ419y9g679N2aGG7WrVeJ1tAhGxRuiGti6GeOZQttqmb0mc%2FC4ODmpaBSlr2zACnSUDOoF0Ogmx8kAZ66%2BcYXeSrMZZP3rEux%2Fc%2FFpgYKTbzl6S04JvI58IeoCy0cgaZ8RxAX5tOpaEbp%2FncFi9YgsnaBJlnYtNmh6cYWDE9xqlg2kXjxJb0O2o8W8R5AZM%2FgJJAeOTrovlfCLvEM4S9vio5zpDmYxWUUKCyKN%2FXCzHq0NB548pDtykeze9UvPw28fbxs0BN6NMGBBtjmoyThDWb9eVvwrkLxm97%2BHOuQKHdnXundtzB2Mfv8U4nhDVq8u2rBoBM3UBHPQDoQGB4XvKxwnYzCErcnJBjqkAXwgJotQHQ%2Bdnil%2FD%2BNvt1hOEjtqCaS%2BHNIuJwMjwWN%2BRWE3fxbrkEQL6ztUz60pP4P6rX5rn%2Fngo4uZeGL7fUDdOsXXcKXPw3OEQxawzdLXKJfyD3vuTIP%2BnNMn%2BTPxySrxPa1zVz5BxNp5jahvZX%2FxuBNJVOSMedcjxBwl%2B%2FAD0eAy%2FmpXOewgzOCQqqpKaFG9SVAHmu%2BQiCLhbDYJQghe%2BvdX&X-Amz-Signature=e78b6f25c87c4c4f66952b92ebce933e1282eff4858235f95cda130d8c338a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOIMQCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxvws1%2FNe9986Hy3MpJCrzIjk8BUC5vfrfTS8k62MUpwIhAK%2FQ%2FIQqGpQutmzqCgjjxrKULpmzGMXeSe1LD28ubJgfKv8DCFUQABoMNjM3NDIzMTgzODA1Igxm66do4GziYHoXGBYq3APqW%2B%2FUW7FDwUTg8qO1RFF1K4k6q486C9BYwbPikhakD88ZmeHlgYnTxiLGwMPoCOhPtbeM%2Bta9YKK1Q%2FGaQuty9ZfhUhe%2FLfO1lQP4MjFLTMOkidXuNrMd8LnLsBYLTU8CLeVOXPdewWp5rOwPxVZ6yGO5ZVG4kFTrEcZGGKKdSbWMv4QSw1LTKKx0HwyWyZix6FgkzlObBhdzEmDWNivalpbOOubprzMgEWulHX07L8jrMofr3gfd6RFYbwNPnvFmhry0LicoDNX2O%2Biji6D1%2FZBjZHyX6JZ419y9g679N2aGG7WrVeJ1tAhGxRuiGti6GeOZQttqmb0mc%2FC4ODmpaBSlr2zACnSUDOoF0Ogmx8kAZ66%2BcYXeSrMZZP3rEux%2Fc%2FFpgYKTbzl6S04JvI58IeoCy0cgaZ8RxAX5tOpaEbp%2FncFi9YgsnaBJlnYtNmh6cYWDE9xqlg2kXjxJb0O2o8W8R5AZM%2FgJJAeOTrovlfCLvEM4S9vio5zpDmYxWUUKCyKN%2FXCzHq0NB548pDtykeze9UvPw28fbxs0BN6NMGBBtjmoyThDWb9eVvwrkLxm97%2BHOuQKHdnXundtzB2Mfv8U4nhDVq8u2rBoBM3UBHPQDoQGB4XvKxwnYzCErcnJBjqkAXwgJotQHQ%2Bdnil%2FD%2BNvt1hOEjtqCaS%2BHNIuJwMjwWN%2BRWE3fxbrkEQL6ztUz60pP4P6rX5rn%2Fngo4uZeGL7fUDdOsXXcKXPw3OEQxawzdLXKJfyD3vuTIP%2BnNMn%2BTPxySrxPa1zVz5BxNp5jahvZX%2FxuBNJVOSMedcjxBwl%2B%2FAD0eAy%2FmpXOewgzOCQqqpKaFG9SVAHmu%2BQiCLhbDYJQghe%2BvdX&X-Amz-Signature=179ab7c7caf37a5a2dddff2f6600559495bc6841a220d58184c2b9230f931fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

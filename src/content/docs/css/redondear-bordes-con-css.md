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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCILHI6Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCgTC0eo%2Bk%2BNbuXgu%2Bidr0VRULhD52hdgsyKXAPjs7ETAIfYTpe5FMo6XINfB6oYShMNVepIQL4DQEUfxc42OMLDCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcRR2cxc5BtvdzWlKtwDusIFg39gwZNS%2BW9rAF%2BbDO5sCNHN41EjzG2MIAdSVuebQb3PnrDjI1Gozdx6%2BKZOuKa8X8dsxIGkJHP3B9zdiiNl3wPjrYdMegGiq%2FRU%2BqsCCM%2BrP7WWoBHNHDvwEbx7QAqP1fwyiKTo8i7vkJFUedsgEcjWLR5%2BjG8qY%2BTILekrh7rx4stI%2ByZuM4QT%2BS2bMq4sakJ5bFD7LQu8qLKWH8RCPywhQb5tYtAqv8WdsaUDd5oersGKMVxKeHCMpQZXhHvpS2VXiSBw8xiaVTtFXqzuOuiF0n2WhZr2SQL6GJpTuq2660Iv6RNedrQhTKXc1S6Os%2BebqO7UCUEDalu8BCLyQLcf62G6EHDsf4sAvK%2FMkg3ouFUwZeRb%2FgqUTpwqodj8u3ZrHDCByH6B%2BAz3We%2FnimFx8UyHHk1XjBuR%2BM1JuIJADpMg7TG9UDESfxDyNtKIAl626%2FZgcRTCVjKWZueF7uhdKwBY8dBoqkgbOncq6wW%2BrBz1BfBPK3mDCSLkbgukhYnpF8kb1ogvdj2%2B5TtGiznA5bJji5LBbnIRjJl22AEKFMZlgfpX52yYFen8YgAzLDYEgdEt02jsY%2FqmNZ4e1uifjZw%2BZGlBw2%2BYqL3og%2F%2FeNda8q4tAlk4wwZrVyQY6pgEaWFgWEeclblrG2m8VR1GOofGptPRjnykLGoAyBRdAurmL%2BVIfRwe%2BZkMwPFJPD87uaQljNY%2FgdlSpCiXl9HvzUwFTuZP5W6%2FQku%2FsyCJFHG1VT%2FO9HjBaE%2Fe24vlO6naWNielxC5%2FJw7IfA6rJ7GgxnSetrufxnJ1%2FhObzYXNQwmEJdDMO1Emu9rgT7zOe%2BIziOIL6lO4reBcHrC0Q0fdl%2BNw7vjd&X-Amz-Signature=bfdd469e0e5065996b7331232a865bbdd33e615dbe425fcf8b9ce92530b90d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCILHI6Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCgTC0eo%2Bk%2BNbuXgu%2Bidr0VRULhD52hdgsyKXAPjs7ETAIfYTpe5FMo6XINfB6oYShMNVepIQL4DQEUfxc42OMLDCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcRR2cxc5BtvdzWlKtwDusIFg39gwZNS%2BW9rAF%2BbDO5sCNHN41EjzG2MIAdSVuebQb3PnrDjI1Gozdx6%2BKZOuKa8X8dsxIGkJHP3B9zdiiNl3wPjrYdMegGiq%2FRU%2BqsCCM%2BrP7WWoBHNHDvwEbx7QAqP1fwyiKTo8i7vkJFUedsgEcjWLR5%2BjG8qY%2BTILekrh7rx4stI%2ByZuM4QT%2BS2bMq4sakJ5bFD7LQu8qLKWH8RCPywhQb5tYtAqv8WdsaUDd5oersGKMVxKeHCMpQZXhHvpS2VXiSBw8xiaVTtFXqzuOuiF0n2WhZr2SQL6GJpTuq2660Iv6RNedrQhTKXc1S6Os%2BebqO7UCUEDalu8BCLyQLcf62G6EHDsf4sAvK%2FMkg3ouFUwZeRb%2FgqUTpwqodj8u3ZrHDCByH6B%2BAz3We%2FnimFx8UyHHk1XjBuR%2BM1JuIJADpMg7TG9UDESfxDyNtKIAl626%2FZgcRTCVjKWZueF7uhdKwBY8dBoqkgbOncq6wW%2BrBz1BfBPK3mDCSLkbgukhYnpF8kb1ogvdj2%2B5TtGiznA5bJji5LBbnIRjJl22AEKFMZlgfpX52yYFen8YgAzLDYEgdEt02jsY%2FqmNZ4e1uifjZw%2BZGlBw2%2BYqL3og%2F%2FeNda8q4tAlk4wwZrVyQY6pgEaWFgWEeclblrG2m8VR1GOofGptPRjnykLGoAyBRdAurmL%2BVIfRwe%2BZkMwPFJPD87uaQljNY%2FgdlSpCiXl9HvzUwFTuZP5W6%2FQku%2FsyCJFHG1VT%2FO9HjBaE%2Fe24vlO6naWNielxC5%2FJw7IfA6rJ7GgxnSetrufxnJ1%2FhObzYXNQwmEJdDMO1Emu9rgT7zOe%2BIziOIL6lO4reBcHrC0Q0fdl%2BNw7vjd&X-Amz-Signature=47a400b6a15d95b09ece34c2396fc5c77dd58ad7ea3ff916b058b93cbf26bd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

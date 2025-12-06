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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZX5TCGQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Fs5J4HPyKkiFm8J1uOmynUWl%2FNDDE2HrdSamSR%2FzKFAiB942UpWE%2FnX68zg8cde1aD2NpsaksZmLL6iIWrvmAAwCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzdlaTRjDPE9OytO2KtwDzwm%2F%2FwZoVn5ezc8GqVTgH2uyG%2BRtgBtj3EFeLgysnmR1SLSM3PCoNS8ZabH2JOxCn0g48ZM7T%2F%2FjdfyM0sraiLP6FJZiBScA6%2BxKF9HX5qzFplAR1ucgpU1CX%2BWh8dX1ndxMjPjPcxidHr0N%2FMUTQPH%2BP2cEh1KqVmLdTDnY3J3KRBVV8uNGxZb3yhS7iBgkFqaCw%2B6fB%2B1fE%2FovJsONAVt1od9WoVbxx3d3ChTz7Gr8JquO10ziA7sKm0L%2BP4sZjbWxe37AX6KsyA2ZzyBgQELc%2Bbny3UyXCTswYSaYdOeH9aUHeyudewv%2FVTVWZ6Jpel%2BRvUuhxjtYkPIdEYFVAGxxkSBj3%2BsqqoecudOrZmPJdW9rmymrfYEBNAj5oDkdUFnJKEmuezP3VeyI7z67OZUGPUiH4zllYXbph2kPNCK9fdwEPNKObfPKyYk2KuhoCEYBcKfRUASS%2Bg0DtiAS9BqulHQbiOohBi%2Fg1zjSIiERsrFEkRHOuWTP4HdccHnsfRRjE4ooILR9OMVWXtOsMjfRhxwOFK2ryy8NxheKr1vWUIwNd%2FrEDfJlSbeiAt%2F8IojdDv1DRSHgI2RInh43GlZEje3s1qJo5AIoQqw5Jc8hvsp%2BWWNtk1EwdsMwo6bQyQY6pgHxYq9TiRsN9ACrTQ4WyBOxjQnAzF5bMREjBi9B95cB2oEnpW5Ds6sj%2Bzbn46kFBbR7605cCP7LU4vgTzDPKWcTe5Jos8CnFW8Mu7Tbq7PywVbJMhyyOfraZ8ftv23Ahz2nD%2FfSl6CQJQXhpPAyp%2FhMZC8Co27ekcn9fIvL2wcdrnSgrSG7M%2BJ%2BG5VbRPkD7YfihMQC9PTW3%2FGw1ih2zLXsVxo3QttQ&X-Amz-Signature=d8a0bf05135ef827cf14050280d08370b099342eb4b4cd7947bacbdfdb5ed1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZX5TCGQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Fs5J4HPyKkiFm8J1uOmynUWl%2FNDDE2HrdSamSR%2FzKFAiB942UpWE%2FnX68zg8cde1aD2NpsaksZmLL6iIWrvmAAwCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzdlaTRjDPE9OytO2KtwDzwm%2F%2FwZoVn5ezc8GqVTgH2uyG%2BRtgBtj3EFeLgysnmR1SLSM3PCoNS8ZabH2JOxCn0g48ZM7T%2F%2FjdfyM0sraiLP6FJZiBScA6%2BxKF9HX5qzFplAR1ucgpU1CX%2BWh8dX1ndxMjPjPcxidHr0N%2FMUTQPH%2BP2cEh1KqVmLdTDnY3J3KRBVV8uNGxZb3yhS7iBgkFqaCw%2B6fB%2B1fE%2FovJsONAVt1od9WoVbxx3d3ChTz7Gr8JquO10ziA7sKm0L%2BP4sZjbWxe37AX6KsyA2ZzyBgQELc%2Bbny3UyXCTswYSaYdOeH9aUHeyudewv%2FVTVWZ6Jpel%2BRvUuhxjtYkPIdEYFVAGxxkSBj3%2BsqqoecudOrZmPJdW9rmymrfYEBNAj5oDkdUFnJKEmuezP3VeyI7z67OZUGPUiH4zllYXbph2kPNCK9fdwEPNKObfPKyYk2KuhoCEYBcKfRUASS%2Bg0DtiAS9BqulHQbiOohBi%2Fg1zjSIiERsrFEkRHOuWTP4HdccHnsfRRjE4ooILR9OMVWXtOsMjfRhxwOFK2ryy8NxheKr1vWUIwNd%2FrEDfJlSbeiAt%2F8IojdDv1DRSHgI2RInh43GlZEje3s1qJo5AIoQqw5Jc8hvsp%2BWWNtk1EwdsMwo6bQyQY6pgHxYq9TiRsN9ACrTQ4WyBOxjQnAzF5bMREjBi9B95cB2oEnpW5Ds6sj%2Bzbn46kFBbR7605cCP7LU4vgTzDPKWcTe5Jos8CnFW8Mu7Tbq7PywVbJMhyyOfraZ8ftv23Ahz2nD%2FfSl6CQJQXhpPAyp%2FhMZC8Co27ekcn9fIvL2wcdrnSgrSG7M%2BJ%2BG5VbRPkD7YfihMQC9PTW3%2FGw1ih2zLXsVxo3QttQ&X-Amz-Signature=f00879788d48fa064d2149c8b6d07114ba2a5cae3e8c177a6a42cb1a586858b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

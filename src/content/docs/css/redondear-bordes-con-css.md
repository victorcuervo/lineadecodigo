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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCEXB74C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGK%2BA7rjmKi5wlnwoGFHONea6H0lzdX%2FGDyAYNKTvdNAiAs7OObJREYxU7NI78TkxeCrh%2BaxFLv0Ew4YWmw%2F69r2ir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4M6ejcMqV%2FVCsq%2BLKtwD%2BEZIcmToB%2B2Ffo95%2FipIb2n5b5VbbO6Q%2FXrj2NGNyX4M0dnTx6QwOyQk1nmNB00IMR7%2F7lOPvnmEaipkKXI6RHGFNBLagzFph0UFvQ%2FCweLyZeDtbBTYXtj%2FE6wTuKluTGfDyehVFSEjXgdzPop5NqZP4ZTZSz1U4opzy2Up3%2FMdZfOi%2FUGI%2FBEpTWAc98pn9%2BBX0h0xNKq8kQIXMiyDmXS7%2B2B3YCVbujC4jWNhHXTjXH6innYIjqoPSKA%2FYS%2BScWEaPEn4ADhN6fr2fsgRxq58iKjhzjZfvepHUlNq2khHXWUD%2BNWKsiYUqat%2BcapQxqk05QO7v6NL0uQcDnvTmYLLHStQinOsd0cE9Vte%2BOq8cKycwL%2BjXq3Bi6jRtusxUmmMEZ5D56lhgWYTITtJm3rB2MSVvdH%2F5Vi9RriDiKYxT4rag%2FNP50VX%2FhyV5FbQg21xRGsIvWKqRHcIixqWk3oVvHypIjv8YrfXmCVytVqoHmmm8q2QE9KouzqMqRgch%2BYE9S%2BZVsIZwtpBN7rfaoBR9PQD2l2C3ywJ%2Fow67zI1lWiw8gryEwTddJZPNnFH6isJXTGm0FUsDNG48eJ2BppNw7YatmrJ0s7EgvH2gNkbffxzXyE9GMDWMWgwq%2FPLyQY6pgEEvxKmyq6rTgzYAUk66RrDcEDqZD6F4s5UY9fgupi8%2BdHjBa1L%2FoUyf%2Bmz6tFpKETCpdr1NmMXz6X%2B13Ue%2FX9JY3ga4V5nA4hkDbM9%2Fm1wFUUu1eosoFOaee0e7FGq3hrLU6U%2FclNtXaWIA5sox2Cmh4J4j9ptOSGzuD8nbwN3cOuTBAE%2FPpzv5bPgtVdPQBRcEcKQjETVXVOBTjdaMRqu8sDGBc6e&X-Amz-Signature=d37c5f93fe2a08de0e8cde514d599b3a86b75c52994b8e08aec55ebd8b1dd06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCEXB74C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGK%2BA7rjmKi5wlnwoGFHONea6H0lzdX%2FGDyAYNKTvdNAiAs7OObJREYxU7NI78TkxeCrh%2BaxFLv0Ew4YWmw%2F69r2ir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4M6ejcMqV%2FVCsq%2BLKtwD%2BEZIcmToB%2B2Ffo95%2FipIb2n5b5VbbO6Q%2FXrj2NGNyX4M0dnTx6QwOyQk1nmNB00IMR7%2F7lOPvnmEaipkKXI6RHGFNBLagzFph0UFvQ%2FCweLyZeDtbBTYXtj%2FE6wTuKluTGfDyehVFSEjXgdzPop5NqZP4ZTZSz1U4opzy2Up3%2FMdZfOi%2FUGI%2FBEpTWAc98pn9%2BBX0h0xNKq8kQIXMiyDmXS7%2B2B3YCVbujC4jWNhHXTjXH6innYIjqoPSKA%2FYS%2BScWEaPEn4ADhN6fr2fsgRxq58iKjhzjZfvepHUlNq2khHXWUD%2BNWKsiYUqat%2BcapQxqk05QO7v6NL0uQcDnvTmYLLHStQinOsd0cE9Vte%2BOq8cKycwL%2BjXq3Bi6jRtusxUmmMEZ5D56lhgWYTITtJm3rB2MSVvdH%2F5Vi9RriDiKYxT4rag%2FNP50VX%2FhyV5FbQg21xRGsIvWKqRHcIixqWk3oVvHypIjv8YrfXmCVytVqoHmmm8q2QE9KouzqMqRgch%2BYE9S%2BZVsIZwtpBN7rfaoBR9PQD2l2C3ywJ%2Fow67zI1lWiw8gryEwTddJZPNnFH6isJXTGm0FUsDNG48eJ2BppNw7YatmrJ0s7EgvH2gNkbffxzXyE9GMDWMWgwq%2FPLyQY6pgEEvxKmyq6rTgzYAUk66RrDcEDqZD6F4s5UY9fgupi8%2BdHjBa1L%2FoUyf%2Bmz6tFpKETCpdr1NmMXz6X%2B13Ue%2FX9JY3ga4V5nA4hkDbM9%2Fm1wFUUu1eosoFOaee0e7FGq3hrLU6U%2FclNtXaWIA5sox2Cmh4J4j9ptOSGzuD8nbwN3cOuTBAE%2FPpzv5bPgtVdPQBRcEcKQjETVXVOBTjdaMRqu8sDGBc6e&X-Amz-Signature=f52b3c70abfdf132ecf1296b4c65f12500ec75a7e4362a13b6402634aa9af881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUME6L3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKmcr2%2FaJyfLsWaDZ8W6f1GRbsBBdQRuuBYNJLdDd1igIhAJuBFPo3z2xClwbxBeV0XJYulI5voOibXtnBvvDPed6uKv8DCH0QABoMNjM3NDIzMTgzODA1IgyZGetDfLVkTaTRrZcq3AMkKpqxXJbuR0c7RQe3nGu57Qco0Sm%2Ba4%2BLbLReuGtUc3mclbX30pmjOVAybRz14ccFK1359OOopyL1AVTvLRbHSJnjrpqQ0RCdrKQ25p8M1tbqW4whghK8V%2BTV7IkGrVpKXqz8jGadJphr%2FVOG%2BXJUuGEudQ%2FJIrQc0AHjuIHfvArGvbxN4gBL3xcUhlta3I8xLLbycn%2F7dqdloTkdL2nd1LSF2CuWyFZUckDPk4Mb3j0rowoOl9HJvx07RfQ7iXseQRluy0OYj10ApKcinup35xiLYC0x1csZUjgQ36kuldcBknVFwkT55%2F2HJ67cZ7rdUER2ktDqqlslVP%2FmW6D56M55zxk%2BdAKAhYVa%2FfrUQPhFykF%2Fgi1iHNmQxAZKIzYqGyHntjtbjHIJJ8lnvmJfAO%2FFowMmJzU%2F7lttDpYDAUZBClfYf0EWkApA0gXtuT4%2FMMKw6QlY9g7GeT49V92wr5dIYbsEveUz5EWyRaiDjR8KY%2F3Ul8UIkwCFoRg9wUJptqJwH46ikPcEpno2Z9SI8lroNGL53AHIgI5lSQw4QztkRbnqbfS12R3FngovotAkT6vND7f6JFktPcDqSZpTdSUytPkkcm6EebkUYvKOlk9h1OYuQG%2BizIrwVTDRqorKBjqkARhcG2aW24X%2Fj1yeTyHUDYJI4jDAiDt%2FoE5R6Xy02hjvnljH0DBFEdp1BlPxq9KSIszpXK5fDbbux3wgB%2F6JtaEe01JXcZHSbPT%2BGtSBF5D0LQ%2BYax2HW8Dni5z1KE7rYQQoa2dDjyryv3Ts7nVa6Mfco1L6evK443vAsr7kQ%2BIPKLgdHLceFpHobuKW%2BDNu1%2BvSkUAsO82l1yzgLajt1eKj6ABn&X-Amz-Signature=726eaa6e957b85b12272787a7d24752575604a0c6811bea0120b366d793a286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUME6L3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKmcr2%2FaJyfLsWaDZ8W6f1GRbsBBdQRuuBYNJLdDd1igIhAJuBFPo3z2xClwbxBeV0XJYulI5voOibXtnBvvDPed6uKv8DCH0QABoMNjM3NDIzMTgzODA1IgyZGetDfLVkTaTRrZcq3AMkKpqxXJbuR0c7RQe3nGu57Qco0Sm%2Ba4%2BLbLReuGtUc3mclbX30pmjOVAybRz14ccFK1359OOopyL1AVTvLRbHSJnjrpqQ0RCdrKQ25p8M1tbqW4whghK8V%2BTV7IkGrVpKXqz8jGadJphr%2FVOG%2BXJUuGEudQ%2FJIrQc0AHjuIHfvArGvbxN4gBL3xcUhlta3I8xLLbycn%2F7dqdloTkdL2nd1LSF2CuWyFZUckDPk4Mb3j0rowoOl9HJvx07RfQ7iXseQRluy0OYj10ApKcinup35xiLYC0x1csZUjgQ36kuldcBknVFwkT55%2F2HJ67cZ7rdUER2ktDqqlslVP%2FmW6D56M55zxk%2BdAKAhYVa%2FfrUQPhFykF%2Fgi1iHNmQxAZKIzYqGyHntjtbjHIJJ8lnvmJfAO%2FFowMmJzU%2F7lttDpYDAUZBClfYf0EWkApA0gXtuT4%2FMMKw6QlY9g7GeT49V92wr5dIYbsEveUz5EWyRaiDjR8KY%2F3Ul8UIkwCFoRg9wUJptqJwH46ikPcEpno2Z9SI8lroNGL53AHIgI5lSQw4QztkRbnqbfS12R3FngovotAkT6vND7f6JFktPcDqSZpTdSUytPkkcm6EebkUYvKOlk9h1OYuQG%2BizIrwVTDRqorKBjqkARhcG2aW24X%2Fj1yeTyHUDYJI4jDAiDt%2FoE5R6Xy02hjvnljH0DBFEdp1BlPxq9KSIszpXK5fDbbux3wgB%2F6JtaEe01JXcZHSbPT%2BGtSBF5D0LQ%2BYax2HW8Dni5z1KE7rYQQoa2dDjyryv3Ts7nVa6Mfco1L6evK443vAsr7kQ%2BIPKLgdHLceFpHobuKW%2BDNu1%2BvSkUAsO82l1yzgLajt1eKj6ABn&X-Amz-Signature=78b4617aad1829ab6aa67524eb62f3dffa3defb89b8acb8ff4c394b6cf1966ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

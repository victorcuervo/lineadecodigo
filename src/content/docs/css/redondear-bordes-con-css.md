---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YLYD3M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDy4lUfTKRdDUjzu853OohOb%2BeyaBx1iex86i%2Bt6oRQMgIhAIsY2mc5WUSFP%2BipkmBOAWvx9jAP1TjK9HEKBlLKo3jrKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdcFbQFuqrzAlqWwQq3ANL9P%2FMqs30J%2BJT0Hkq3ACsUNAx0h%2BivCv1to%2Fr1ndoGTSKD5Nt9lTDXzijtr8yrQS0ZegW5ZgnhTd0ONlWMRzrWpBZLI6dIhCtXnmzbqGMSyegUnp3OgSuwLLXRMfvRZ8lK1cUXaG5bMHRs7dCV0rqcVDyYp3QhXuhZNgbD5lw5khVjYApleVDXS5VNK2N2H6TBm9jvg0WF6sdR6QccNnNMQMpgrdT3xTPz1ONmuichnMdhuo8S4GzZ2WfFJ%2BDTC7CZrNxLQ5Eh49zAdy3Sne3SJhORbJve8ATm8JGYFKhcXFZqHa5UiN2paBZYXpmnBuXi%2BpXtC0n7GjMzIC5K8oeAfhZAOatNyJsBakVrmrro2k41eQnrhPitfQ0%2FIfYjy7znZJFNLN7YGl3GaOAs3amghRumNJuzYxirlY7%2F8yEwSlxi%2BlVmYQQFNO1nnl2N57Iv%2FUy6WRq%2BHUcmouOMxGTRHyjEd6oYEbQR84YJ3ay84Zd7DIzE%2F%2F1e%2BB9Di84OHZBamaK4Z4SXWpU09KYpQY6NAcR0OY2m%2FnnteRVcSLbRpd9rnVG3x1NxH2RMprhomaj1BDVukd2cCGkdy7wRWUXG1sK6ucAkOzdPwTtu2Utb9fuIiEQVclOJybKTjCM3MLJBjqkAWufedENneMtE2CotPr45KgbtckeOkoTblcaEeZMVy6wWYPF%2BsTGEInNzpHQhOd1y0BU7Fc4qiPGnhVplZni7gu1IPA8RFLkuwaO1dfrnqfMcWQkyjXaOEZs9CH%2BnyD5cXnp2fTA45IyWUXPG%2FJSdhbpGktPt9b0gqYOxOYx%2B%2BM60lFkmj8TQkOy3nE42euuUJAvMJYJ0YSf8WqNQmU4vNivd0Dl&X-Amz-Signature=75caf31cb04be4b4c5834c9228e4399cdd8c7d4510e2bcaa9363490464be03d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YLYD3M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDy4lUfTKRdDUjzu853OohOb%2BeyaBx1iex86i%2Bt6oRQMgIhAIsY2mc5WUSFP%2BipkmBOAWvx9jAP1TjK9HEKBlLKo3jrKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdcFbQFuqrzAlqWwQq3ANL9P%2FMqs30J%2BJT0Hkq3ACsUNAx0h%2BivCv1to%2Fr1ndoGTSKD5Nt9lTDXzijtr8yrQS0ZegW5ZgnhTd0ONlWMRzrWpBZLI6dIhCtXnmzbqGMSyegUnp3OgSuwLLXRMfvRZ8lK1cUXaG5bMHRs7dCV0rqcVDyYp3QhXuhZNgbD5lw5khVjYApleVDXS5VNK2N2H6TBm9jvg0WF6sdR6QccNnNMQMpgrdT3xTPz1ONmuichnMdhuo8S4GzZ2WfFJ%2BDTC7CZrNxLQ5Eh49zAdy3Sne3SJhORbJve8ATm8JGYFKhcXFZqHa5UiN2paBZYXpmnBuXi%2BpXtC0n7GjMzIC5K8oeAfhZAOatNyJsBakVrmrro2k41eQnrhPitfQ0%2FIfYjy7znZJFNLN7YGl3GaOAs3amghRumNJuzYxirlY7%2F8yEwSlxi%2BlVmYQQFNO1nnl2N57Iv%2FUy6WRq%2BHUcmouOMxGTRHyjEd6oYEbQR84YJ3ay84Zd7DIzE%2F%2F1e%2BB9Di84OHZBamaK4Z4SXWpU09KYpQY6NAcR0OY2m%2FnnteRVcSLbRpd9rnVG3x1NxH2RMprhomaj1BDVukd2cCGkdy7wRWUXG1sK6ucAkOzdPwTtu2Utb9fuIiEQVclOJybKTjCM3MLJBjqkAWufedENneMtE2CotPr45KgbtckeOkoTblcaEeZMVy6wWYPF%2BsTGEInNzpHQhOd1y0BU7Fc4qiPGnhVplZni7gu1IPA8RFLkuwaO1dfrnqfMcWQkyjXaOEZs9CH%2BnyD5cXnp2fTA45IyWUXPG%2FJSdhbpGktPt9b0gqYOxOYx%2B%2BM60lFkmj8TQkOy3nE42euuUJAvMJYJ0YSf8WqNQmU4vNivd0Dl&X-Amz-Signature=b1381279c7a9486da9323167474ede64e70aba7e1e14b1c069e3b4ad17f7dc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674EE46IW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC5dLmulxYCdIqhPWU6NEctMSIafhLniEI61GaeKRKYwAiBJtK7XB38v9zHmbh0tbRiqoee97Miiy1AazsMDJv3qCir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMJrcKDacQIl%2FvwXI6KtwDoiVmtUt9hbloLhUgbgVKNSBqcBHOsOVyDR8rw9TITvuhpayl6KxAmpX9N2cDcXpHbm%2Bwk7k26I3Mqlmp0hsb0ceURF72wEl7FWTd2Pi4MT3SSLcd71CCZa4iozKnV80mQxUPKYZ0RCEfhi381zHICY2Q9chdAGCeHR2xj8SwPSCNlfXPGi9FgGpmN8IGbYZJLcTNDMvuEA2J23xbVxBlsYaKOr2KMEoryHdtMZYyQpZ2RdaiB8ysrf7UcHLE2cc%2BC3TcsN6O3WBXlq4G2IfFFfVgA5OThqmtLfRllDY3OPkaO8AJl9k5Vdydt5p0kCyyzFOgNgqS0HxliXk5H8zJGJMtxfjhNu79R6oq9ziPSjAr3SZfzVARxtnSqyym5vPHbhXT1NzeQjyinfnCpHOsbW%2FqhOWXD9DPn16PYowSfyT5KuFvcXbQPpP0L8OMKYsy1V7X5SYcW2IeDl%2FmIqdan8U7rV6rxKoZ4q%2Fqlr%2BHrj09OrB9OLo2WMiRP4iq4SIcPy5TBB2lgZ5W4KCq7iOBTclD00PhXp7YHqaGGbAcdgJ9y7OI6ruDtncV5OONfqesm3LHGq4WoFO9bQlZ55hhgTHjtzJ4MSzddLQW8fuSAqxeI0BwohTDYCQ0ZnEwt9zCyQY6pgFMtvvLp%2F456C7CNNGRSneeQby%2FZ4NTWdq28j3tI8Ss0R6tjEX0yUq1mQqKS7t4y3Pmtt0fv1qRwKVtskS4wWBEccSl7O0Gwmyg4lz2Cz5JC0r9NSDjh4VRgLHlhiiIhGcjrZAdXz6KRAYxUlSj6kBDr%2BVYAEMyDWXijKPFHDt3Y5rk4T1s9R%2F7%2FcOz7SGgkuhINp9pFzT9dndVrQXKw0YNywocYRKT&X-Amz-Signature=9303f9ddf8292ea6e94f9876574089d3e535f3e6dbe082d372d30fbb98597215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674EE46IW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC5dLmulxYCdIqhPWU6NEctMSIafhLniEI61GaeKRKYwAiBJtK7XB38v9zHmbh0tbRiqoee97Miiy1AazsMDJv3qCir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMJrcKDacQIl%2FvwXI6KtwDoiVmtUt9hbloLhUgbgVKNSBqcBHOsOVyDR8rw9TITvuhpayl6KxAmpX9N2cDcXpHbm%2Bwk7k26I3Mqlmp0hsb0ceURF72wEl7FWTd2Pi4MT3SSLcd71CCZa4iozKnV80mQxUPKYZ0RCEfhi381zHICY2Q9chdAGCeHR2xj8SwPSCNlfXPGi9FgGpmN8IGbYZJLcTNDMvuEA2J23xbVxBlsYaKOr2KMEoryHdtMZYyQpZ2RdaiB8ysrf7UcHLE2cc%2BC3TcsN6O3WBXlq4G2IfFFfVgA5OThqmtLfRllDY3OPkaO8AJl9k5Vdydt5p0kCyyzFOgNgqS0HxliXk5H8zJGJMtxfjhNu79R6oq9ziPSjAr3SZfzVARxtnSqyym5vPHbhXT1NzeQjyinfnCpHOsbW%2FqhOWXD9DPn16PYowSfyT5KuFvcXbQPpP0L8OMKYsy1V7X5SYcW2IeDl%2FmIqdan8U7rV6rxKoZ4q%2Fqlr%2BHrj09OrB9OLo2WMiRP4iq4SIcPy5TBB2lgZ5W4KCq7iOBTclD00PhXp7YHqaGGbAcdgJ9y7OI6ruDtncV5OONfqesm3LHGq4WoFO9bQlZ55hhgTHjtzJ4MSzddLQW8fuSAqxeI0BwohTDYCQ0ZnEwt9zCyQY6pgFMtvvLp%2F456C7CNNGRSneeQby%2FZ4NTWdq28j3tI8Ss0R6tjEX0yUq1mQqKS7t4y3Pmtt0fv1qRwKVtskS4wWBEccSl7O0Gwmyg4lz2Cz5JC0r9NSDjh4VRgLHlhiiIhGcjrZAdXz6KRAYxUlSj6kBDr%2BVYAEMyDWXijKPFHDt3Y5rk4T1s9R%2F7%2FcOz7SGgkuhINp9pFzT9dndVrQXKw0YNywocYRKT&X-Amz-Signature=7f01613c28526175608fa1a4ebb97117afce58067a04bac71a442273297ef9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

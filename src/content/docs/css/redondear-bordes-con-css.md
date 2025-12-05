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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2V7X7R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI87u2fh0ivPurRf1DYVkTVlX7emNAwnSRNIUTBu5MYAiABxNrGLwwIwhylTKF56QkqiJYDFjq6AFsENB146a7u%2Bir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMtF%2BuTnMWTaVGq2lmKtwDBaxWuIwrlkD3m7BaOZxa8jajzwvOa%2Fqqw9nh6ezBDRWP3cvD4ffAvWF0IplTOsZooOzQkx3TmGQ4L8VzxEkBfsyUxWbcggyns0taOJcRjjf0TXzgucrX5Ccc7DE6MQDP1%2BAI0eDgaH10Oy6WPNtFYvH%2F1uFZdWYsveeiHn4d5pbdXsEyAWv7v96iReRsnP5rIfte0QxxNFgaQWjSuLQsnNa%2B6dUno1fqFiJfT2fkJXkVLnkVDkjSEHZ%2FlMKe2hbcSx9urM3xgu6%2FqakK7DGI1W2IcTzQE9yO6KhL84gyZxnVvq7VnEJacaujDhPCm1Y9n2WspRc0SkzXeZafEi1P5ZlWrGXZZEAfGAnKfPqVLmhsJQIAFPs3%2FBAaH2d5MYKUGztFjWqJQQCI1Kk%2BUayXUwnLm0MPrYOZhbRYVpBqJ8HgvX7l8HJzjvsZ9zNFwPzcA9k8fkUfcswudxFNwPXvZ4Jn9ddA%2BiruZlxoFJGBccVgntiLAoFVUxV5ksjqc2SuPmqdJlYIboUMAJbt2o6kyb5y3H0TCWTH3eni%2FY6w8VfWauUXBD65JeSMVpcbKfM9Hz4cdJIcPWRJIjKg0E4VOHjY4Emcs0iLIouRQ8Ln%2B68DdY7KWlaucISNPbswy8%2FKyQY6pgGXs3Umg%2Fy0fNCOJyKNqCoSHT%2FOD9iMQguV7Z8lh6D81K120J9JboN4GXm5h%2FusuIOI8rKToigl3TiD9dfnSIk0fKZ73yWfuElVAkflRBAvZ4uv1WkvwPzp7WtKxHqQVVfZolb1Ew3o0gcGrYs5PdbzxuUDrDTfhzvnAyIEdrveAW11WZW07PkQkWUMxtsr72jxJ4lAueMT3C5yDiSrb8I3MwM3wJA5&X-Amz-Signature=1546269e9e2f16f96a7925e3cb60185f60530e9e596e4178bd7c433fea09b5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2V7X7R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI87u2fh0ivPurRf1DYVkTVlX7emNAwnSRNIUTBu5MYAiABxNrGLwwIwhylTKF56QkqiJYDFjq6AFsENB146a7u%2Bir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMtF%2BuTnMWTaVGq2lmKtwDBaxWuIwrlkD3m7BaOZxa8jajzwvOa%2Fqqw9nh6ezBDRWP3cvD4ffAvWF0IplTOsZooOzQkx3TmGQ4L8VzxEkBfsyUxWbcggyns0taOJcRjjf0TXzgucrX5Ccc7DE6MQDP1%2BAI0eDgaH10Oy6WPNtFYvH%2F1uFZdWYsveeiHn4d5pbdXsEyAWv7v96iReRsnP5rIfte0QxxNFgaQWjSuLQsnNa%2B6dUno1fqFiJfT2fkJXkVLnkVDkjSEHZ%2FlMKe2hbcSx9urM3xgu6%2FqakK7DGI1W2IcTzQE9yO6KhL84gyZxnVvq7VnEJacaujDhPCm1Y9n2WspRc0SkzXeZafEi1P5ZlWrGXZZEAfGAnKfPqVLmhsJQIAFPs3%2FBAaH2d5MYKUGztFjWqJQQCI1Kk%2BUayXUwnLm0MPrYOZhbRYVpBqJ8HgvX7l8HJzjvsZ9zNFwPzcA9k8fkUfcswudxFNwPXvZ4Jn9ddA%2BiruZlxoFJGBccVgntiLAoFVUxV5ksjqc2SuPmqdJlYIboUMAJbt2o6kyb5y3H0TCWTH3eni%2FY6w8VfWauUXBD65JeSMVpcbKfM9Hz4cdJIcPWRJIjKg0E4VOHjY4Emcs0iLIouRQ8Ln%2B68DdY7KWlaucISNPbswy8%2FKyQY6pgGXs3Umg%2Fy0fNCOJyKNqCoSHT%2FOD9iMQguV7Z8lh6D81K120J9JboN4GXm5h%2FusuIOI8rKToigl3TiD9dfnSIk0fKZ73yWfuElVAkflRBAvZ4uv1WkvwPzp7WtKxHqQVVfZolb1Ew3o0gcGrYs5PdbzxuUDrDTfhzvnAyIEdrveAW11WZW07PkQkWUMxtsr72jxJ4lAueMT3C5yDiSrb8I3MwM3wJA5&X-Amz-Signature=a777a709aa8ded813b38e130cc6efa26d27b6a30ec037ee1f371c2f318a21d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

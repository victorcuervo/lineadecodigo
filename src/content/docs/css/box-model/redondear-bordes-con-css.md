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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSJCKAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgnoD9CYt3N29%2BRPsQBpKSvw2ZqXNeuSLdyjXCRo9negIhAKl0iS4bxLAMzq4rw6sErxOkz9D%2Btf1KDSl70TqhQ0vNKv8DCHcQABoMNjM3NDIzMTgzODA1IgzV%2BQ2H4cU%2FPh40bnIq3APdbJ8sWIEushOQxU9MRdDoVy9hSGT3Zcg6x3X63EHQ8iY0LlrCB73DPSSDadxiSVkdwXr4onfM9YkibX4pUbhldj%2BVsT4lvoBTH072M5u1zg%2BBlCSKfyp4FK87flE5JdoJQhmnsewlEigl808GiQS4qikDUlgTa%2Byvg5QWPAWvPgTScxyIfPlLM1yQd%2Fh76PWWdpIU%2FoNZMR3a92qcPmYVfwt11wLf0eO1PJ%2B1tszIPEfKgXFA6X9MoxQrW9pmdnwLFyi1Yp7xE6SlSA%2F3lqorORmiB%2FF97yA8iKGIITpaCMF1LF%2FrGUV9WAhJVrZ4Lk1rlSS3j2Dsn4I%2B3Ygi7QSPceTVUHx3l5AoXePBZs70pyRLjVvNvvjHFV%2BIUfaqNzUwYQ5V3C2CO%2B%2Br8%2B02BWwb%2FiOtdpN2gm%2BhGZuzIMojHvs48YfiiBM5E3Imanm7r90NqrndgrFTOORWcRSlamvEVD7ZBBRniuEbukz75mqDJrqWw3UtZVpMrsN8yHO%2F1u0DjbQ%2BtAbp3fokshaGpXrGgWRF%2BfY%2BIrnNOkCSfE%2Fu7rZECnISmf2mQJ4Bk0MBIwC4A%2FZ%2FdkzSTctWhbo9%2B5CNMinIARBhw6M64QvFyvhj08GZ%2BFFpbJpH8Yy0qjDngonKBjqkAZARvgExvet4oM5mRy4LbLPCu7VEJN%2FY%2FwAQ51%2BefgpedZ25pj%2B979sdEnn0s6Os%2FOIJPJSeZ6k1oIbv1bX2pdIfZSwsPVkBzQdxy6xjJahC5ygT%2FGzMZyZQ5dOeIeZSUnkMGAUgJQxCONtWBQvP%2Begp%2BvX5yjJem47EA4kCkAT7oVPBetWpx%2FUEW%2FR8YK5G%2FWpIy7ln8zMagmmcEjbNH2qZ6D9E&X-Amz-Signature=ae5615fe1382aa01289fdeb805df9a8e31052f00fd727e2a81cb636c3b69dc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSJCKAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgnoD9CYt3N29%2BRPsQBpKSvw2ZqXNeuSLdyjXCRo9negIhAKl0iS4bxLAMzq4rw6sErxOkz9D%2Btf1KDSl70TqhQ0vNKv8DCHcQABoMNjM3NDIzMTgzODA1IgzV%2BQ2H4cU%2FPh40bnIq3APdbJ8sWIEushOQxU9MRdDoVy9hSGT3Zcg6x3X63EHQ8iY0LlrCB73DPSSDadxiSVkdwXr4onfM9YkibX4pUbhldj%2BVsT4lvoBTH072M5u1zg%2BBlCSKfyp4FK87flE5JdoJQhmnsewlEigl808GiQS4qikDUlgTa%2Byvg5QWPAWvPgTScxyIfPlLM1yQd%2Fh76PWWdpIU%2FoNZMR3a92qcPmYVfwt11wLf0eO1PJ%2B1tszIPEfKgXFA6X9MoxQrW9pmdnwLFyi1Yp7xE6SlSA%2F3lqorORmiB%2FF97yA8iKGIITpaCMF1LF%2FrGUV9WAhJVrZ4Lk1rlSS3j2Dsn4I%2B3Ygi7QSPceTVUHx3l5AoXePBZs70pyRLjVvNvvjHFV%2BIUfaqNzUwYQ5V3C2CO%2B%2Br8%2B02BWwb%2FiOtdpN2gm%2BhGZuzIMojHvs48YfiiBM5E3Imanm7r90NqrndgrFTOORWcRSlamvEVD7ZBBRniuEbukz75mqDJrqWw3UtZVpMrsN8yHO%2F1u0DjbQ%2BtAbp3fokshaGpXrGgWRF%2BfY%2BIrnNOkCSfE%2Fu7rZECnISmf2mQJ4Bk0MBIwC4A%2FZ%2FdkzSTctWhbo9%2B5CNMinIARBhw6M64QvFyvhj08GZ%2BFFpbJpH8Yy0qjDngonKBjqkAZARvgExvet4oM5mRy4LbLPCu7VEJN%2FY%2FwAQ51%2BefgpedZ25pj%2B979sdEnn0s6Os%2FOIJPJSeZ6k1oIbv1bX2pdIfZSwsPVkBzQdxy6xjJahC5ygT%2FGzMZyZQ5dOeIeZSUnkMGAUgJQxCONtWBQvP%2Begp%2BvX5yjJem47EA4kCkAT7oVPBetWpx%2FUEW%2FR8YK5G%2FWpIy7ln8zMagmmcEjbNH2qZ6D9E&X-Amz-Signature=bffb3aad654d1ecdfc243fc0215f08538b7769acf7a5f9cedfe685fecf5d48c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TX6YJOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL8NceQFkexbd2sS4o5pW1Gx9bZkqkNHLpEe22TXPnYAiB5IFqgBL6T8Y2oZba2KUc1my1nZNXJ6P091r4L3JCTJSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMBmHD1DjQPPBTFSNUKtwDKcKZ8oUiZxoZfIlDLzweGB5JY0KzxW6P%2BLSHpt%2FG5ks5FlHe6CptWfL1YrewnRisjWQdAjkHfz6l9PTHYuKGWs%2FNS9%2BtW8j5uyxyKQOG7pgu2nkRgXjpTwZMWGj8ExUwiWRcQNmnyC%2FuiqfuvTwCkuNCsjUfJZEEZ0U1YyR9IvBbCD9hu7mFad5l8569s3qHUJPpBxlKjjAz25l7Mkg%2BAIbmVl2i9pfaR4Oj%2FgKcLfLytCLgvBeuXRPoDdoiZy8M08Tdc0EWemzu18roqdZ8xAqcZsV33GL%2FlWDUmQ%2Fc1QATNVm%2BY3vAiZZUekRCqE6XK948qbJ2PPWhILWLQuy5MqPuTc4goBOqM4vBSvjjHiLVSAlvlDuYaw0kstjrKFPqhOALnU%2FfeAGl%2BwoOoaOXwK5rzNlT%2BAtTPWXpO6eETswrb7pXoMLie0DzvTLt4ClybG4jiMox3gpRm4KH86zxd3JgSPir7XaDEyei9G9aWJLT%2By8WlOjhZYn%2FeMtbWgs2L6be1Ad%2BZG%2B5tujeN7vLsCK3RXCRNm2uDP8kE4Cmc3nhVNHGVQU7H%2BsWtbb14MUXh4EqDqHnaslKs89Dm6Pes6LlcSOL%2BUkZs1dt1ci9FVEdYbHQG0Xg6jQn5gow1p7PyQY6pgEUR4mX5sQawUf11Zvdw0RIu8kaLYR6%2FBtAyFEMEpnRqQvJ8iUpf6TyCQZgUgKlzTRtAIfR%2BnoAKRvcZXCvB8GsxyaxDwSFMOOUF1wbAjegl4s0lV78ocaNj7Rb%2FZILWQIOcBh3jTZ0zOyupD46GyDtpVVmnkMCabpaighI4MbZ5P7Zl7tc8IBZpOMWQC%2FQ3fw9BcLhRpuGgARyPclaFp16e7Pr4dBb&X-Amz-Signature=4a014330a5220e0e6040f564b05d281b402d64004a7ca7ef8faa55ce33e3d938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TX6YJOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL8NceQFkexbd2sS4o5pW1Gx9bZkqkNHLpEe22TXPnYAiB5IFqgBL6T8Y2oZba2KUc1my1nZNXJ6P091r4L3JCTJSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMBmHD1DjQPPBTFSNUKtwDKcKZ8oUiZxoZfIlDLzweGB5JY0KzxW6P%2BLSHpt%2FG5ks5FlHe6CptWfL1YrewnRisjWQdAjkHfz6l9PTHYuKGWs%2FNS9%2BtW8j5uyxyKQOG7pgu2nkRgXjpTwZMWGj8ExUwiWRcQNmnyC%2FuiqfuvTwCkuNCsjUfJZEEZ0U1YyR9IvBbCD9hu7mFad5l8569s3qHUJPpBxlKjjAz25l7Mkg%2BAIbmVl2i9pfaR4Oj%2FgKcLfLytCLgvBeuXRPoDdoiZy8M08Tdc0EWemzu18roqdZ8xAqcZsV33GL%2FlWDUmQ%2Fc1QATNVm%2BY3vAiZZUekRCqE6XK948qbJ2PPWhILWLQuy5MqPuTc4goBOqM4vBSvjjHiLVSAlvlDuYaw0kstjrKFPqhOALnU%2FfeAGl%2BwoOoaOXwK5rzNlT%2BAtTPWXpO6eETswrb7pXoMLie0DzvTLt4ClybG4jiMox3gpRm4KH86zxd3JgSPir7XaDEyei9G9aWJLT%2By8WlOjhZYn%2FeMtbWgs2L6be1Ad%2BZG%2B5tujeN7vLsCK3RXCRNm2uDP8kE4Cmc3nhVNHGVQU7H%2BsWtbb14MUXh4EqDqHnaslKs89Dm6Pes6LlcSOL%2BUkZs1dt1ci9FVEdYbHQG0Xg6jQn5gow1p7PyQY6pgEUR4mX5sQawUf11Zvdw0RIu8kaLYR6%2FBtAyFEMEpnRqQvJ8iUpf6TyCQZgUgKlzTRtAIfR%2BnoAKRvcZXCvB8GsxyaxDwSFMOOUF1wbAjegl4s0lV78ocaNj7Rb%2FZILWQIOcBh3jTZ0zOyupD46GyDtpVVmnkMCabpaighI4MbZ5P7Zl7tc8IBZpOMWQC%2FQ3fw9BcLhRpuGgARyPclaFp16e7Pr4dBb&X-Amz-Signature=0fbd4fc75baa1bf00c6c9a0b9d5e0fe3f384331411885f039b2af0ad3cca62b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN7P2SZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BIwUfUUHsNVQX5%2BLXDctgCWL58zPWCf9TvxuQ9x0kvAiAKmwHqcDE%2FI5bepXOVtPSdqQcZuBXUFMObIiN7D4OyvSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkZFnTTjXwDTYW6qXKtwDFQ2RBpHu9lYvQpll%2BLKZbSirU9H1Tr6G3nilEyIrhj8IsbOEjVLjjuYvgvPB9MZHkpbPNHWbGs60uiSceL6NGvbOucb4nSM1fEu8lZt2AXtBZOlo3byFDaDOsIjOHAMTFNndIY4IjquOd%2BqPuMy%2BZaxAIaKDHxfs1WL9lUiQSoM1Ej2cI%2F7XEdzon4%2FQVx2DTUatP3WqXwXkr%2Bt%2Bz1eWiMAGofml23wHXErc5%2BPhu7HqdUk9QNbH6peJ9b0LOvtd%2FYFOYfWYR79SNQkXYKhfiCWbXW436plIDYtGnxsQpPGmaYixqA5x2HS6zeKRfSCkpVPIxb8YOBD%2F%2F%2FAAsR0f8eZkJ3WcUF55CfkhJLBbtYrSd2wbXhyAdgS1AvYkzpt%2B%2FjLlJoY8qeO6dNjI1KUwBUNJrs9VADX1AVmIlBm6g0Mq3tfwg9%2FjMSC0aOeF3sqyThF0VTZBrst10gTx2zMBiOEOlxruhblQ4DGwxRDn9eDjQRSjVuBDPtxkfWJo%2BM%2Fu2kThG7DCNHqUWVBiOEzOpCmguv9I8ZyMb5xsKE7iJVmDK7HgA2jKIzySQaNYz0dd2LnxP%2FkERSK0kSrGB%2FRDRKoCRNXUrZ2xP5P1uQhacxWI5AsoKIceJyBE%2BiEwi8reyQY6pgHasaxmu49hDjaD6FPGmn54%2BO27EACCjpuXL6w0IGFYLTg%2BJ2fBUGWQeTKJqIPre3AHDyNqA7dzQs%2BkMVMWYdfCV%2BrzVWarN6h1AjlnvtelU4%2FQWukfZ8g8f6S6IGhG09PJ9l0aDnJLYzalPqpxDiVAF7uwrVXfJU2%2FAILchEqH82ecXSbCNJVq8LkQ9uXaG2798iXDo4dBwe0wB%2FS%2FwLGU8aHZi3fY&X-Amz-Signature=f2962d6445ff29a1eb2b3fbb04d6c9636d99f95f4dd41f44971054517011372a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN7P2SZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BIwUfUUHsNVQX5%2BLXDctgCWL58zPWCf9TvxuQ9x0kvAiAKmwHqcDE%2FI5bepXOVtPSdqQcZuBXUFMObIiN7D4OyvSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkZFnTTjXwDTYW6qXKtwDFQ2RBpHu9lYvQpll%2BLKZbSirU9H1Tr6G3nilEyIrhj8IsbOEjVLjjuYvgvPB9MZHkpbPNHWbGs60uiSceL6NGvbOucb4nSM1fEu8lZt2AXtBZOlo3byFDaDOsIjOHAMTFNndIY4IjquOd%2BqPuMy%2BZaxAIaKDHxfs1WL9lUiQSoM1Ej2cI%2F7XEdzon4%2FQVx2DTUatP3WqXwXkr%2Bt%2Bz1eWiMAGofml23wHXErc5%2BPhu7HqdUk9QNbH6peJ9b0LOvtd%2FYFOYfWYR79SNQkXYKhfiCWbXW436plIDYtGnxsQpPGmaYixqA5x2HS6zeKRfSCkpVPIxb8YOBD%2F%2F%2FAAsR0f8eZkJ3WcUF55CfkhJLBbtYrSd2wbXhyAdgS1AvYkzpt%2B%2FjLlJoY8qeO6dNjI1KUwBUNJrs9VADX1AVmIlBm6g0Mq3tfwg9%2FjMSC0aOeF3sqyThF0VTZBrst10gTx2zMBiOEOlxruhblQ4DGwxRDn9eDjQRSjVuBDPtxkfWJo%2BM%2Fu2kThG7DCNHqUWVBiOEzOpCmguv9I8ZyMb5xsKE7iJVmDK7HgA2jKIzySQaNYz0dd2LnxP%2FkERSK0kSrGB%2FRDRKoCRNXUrZ2xP5P1uQhacxWI5AsoKIceJyBE%2BiEwi8reyQY6pgHasaxmu49hDjaD6FPGmn54%2BO27EACCjpuXL6w0IGFYLTg%2BJ2fBUGWQeTKJqIPre3AHDyNqA7dzQs%2BkMVMWYdfCV%2BrzVWarN6h1AjlnvtelU4%2FQWukfZ8g8f6S6IGhG09PJ9l0aDnJLYzalPqpxDiVAF7uwrVXfJU2%2FAILchEqH82ecXSbCNJVq8LkQ9uXaG2798iXDo4dBwe0wB%2FS%2FwLGU8aHZi3fY&X-Amz-Signature=4c4382ff996f513506dc7d218f89f0f4706a153066863faec64c37b2afc5a586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

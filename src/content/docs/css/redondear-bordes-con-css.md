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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDRMY3F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0MI8TxxtzGL0UPy2%2BvFn8XWDEfb57c%2B9ph6j4mdDqHAiBas806%2Fx2%2B4iUpwLLkRmH36kMJ5Ma%2BhBXsZteisKwQYSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMR%2BH9cBTsQlQhrQLxKtwDW0iZJiEGGOO6AuqrHrUT9sTvHiE68UECkYAyTek9yOvAIPNR%2FR4B7V1MseH3Mqytq5urdvGmaOzinhLw09zMg30m9XkQ%2Bykori2D7yl%2Bw0ry4qluOil4tBjTwlbkcpT9bPREFcQrS3whkzMI2cgUwd7DTVeCCTTeyoMnMTcHdHzgfdh2nM4rJUaipYjbMgqWcdeBfZG7x3LCqFPecA2u54KGWLJvGbg69IZ009phdUuhrfXCnqmu5f3jG3pSXOiuUq1KQbflnah4Zbjm9x6rre3%2FIcdm90XLfuwFkcxUKAovHnoma24G2GYj4ds9iadW2EiI5Ozj%2BG8m5dYn8HlS1SWIW%2B58gPWHor5HyimPpAM3Mbrn1e8gquu31yDCNWCL5HpOODEI%2FspcY4BtlfVKINDQLD3eibapDx%2FkE7k8EFk6yAmVX69vvtphBr%2F9zNYx0Ia3%2B66vvWOVK9GX0Kj0ehsaigvYGWEgcIJepOZE2c3SeBYPqnA3Vx7vYj3xOaxPOIKDowrVbkyqUFSurtjCMBYdouv6bpF%2F2N%2BOR3FwAqOKyyf3G0igX%2BcbcOCYmOOp0kxTbkx7ojL75qIaTyW0%2FIQpXa9EA%2BfR9ih8wEVS11Klc2DNGkZEa9GvfEswq4zIyQY6pgHbp3bCK%2BGsW8KYa124tn9ROZkcfNngVsyr5ZDgbRe51qpZTuW5s51jzeaid3RApDZBiuNsG7yqlhQmwhumyl3HNihRTTf7FE3%2Bcz3IqjboRZXiECqpwpxf3nyCH8DyrNaXQephD%2FFqwkkf3CnBuMDcKOVN1X1ImBysIvvyWee9dycBH6xN%2BNjb5bdI3WrOl09xqQYL0erFCe1%2FKUs2PJXCm2I4QAFR&X-Amz-Signature=75e56d6d6f7aca819baf74910ff6325fcdbff92d120cec17b3117a7ea0de42ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDRMY3F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0MI8TxxtzGL0UPy2%2BvFn8XWDEfb57c%2B9ph6j4mdDqHAiBas806%2Fx2%2B4iUpwLLkRmH36kMJ5Ma%2BhBXsZteisKwQYSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMR%2BH9cBTsQlQhrQLxKtwDW0iZJiEGGOO6AuqrHrUT9sTvHiE68UECkYAyTek9yOvAIPNR%2FR4B7V1MseH3Mqytq5urdvGmaOzinhLw09zMg30m9XkQ%2Bykori2D7yl%2Bw0ry4qluOil4tBjTwlbkcpT9bPREFcQrS3whkzMI2cgUwd7DTVeCCTTeyoMnMTcHdHzgfdh2nM4rJUaipYjbMgqWcdeBfZG7x3LCqFPecA2u54KGWLJvGbg69IZ009phdUuhrfXCnqmu5f3jG3pSXOiuUq1KQbflnah4Zbjm9x6rre3%2FIcdm90XLfuwFkcxUKAovHnoma24G2GYj4ds9iadW2EiI5Ozj%2BG8m5dYn8HlS1SWIW%2B58gPWHor5HyimPpAM3Mbrn1e8gquu31yDCNWCL5HpOODEI%2FspcY4BtlfVKINDQLD3eibapDx%2FkE7k8EFk6yAmVX69vvtphBr%2F9zNYx0Ia3%2B66vvWOVK9GX0Kj0ehsaigvYGWEgcIJepOZE2c3SeBYPqnA3Vx7vYj3xOaxPOIKDowrVbkyqUFSurtjCMBYdouv6bpF%2F2N%2BOR3FwAqOKyyf3G0igX%2BcbcOCYmOOp0kxTbkx7ojL75qIaTyW0%2FIQpXa9EA%2BfR9ih8wEVS11Klc2DNGkZEa9GvfEswq4zIyQY6pgHbp3bCK%2BGsW8KYa124tn9ROZkcfNngVsyr5ZDgbRe51qpZTuW5s51jzeaid3RApDZBiuNsG7yqlhQmwhumyl3HNihRTTf7FE3%2Bcz3IqjboRZXiECqpwpxf3nyCH8DyrNaXQephD%2FFqwkkf3CnBuMDcKOVN1X1ImBysIvvyWee9dycBH6xN%2BNjb5bdI3WrOl09xqQYL0erFCe1%2FKUs2PJXCm2I4QAFR&X-Amz-Signature=9321fc31d1738bc5e58407209eb9012396770e6a13439232c6a3e66b1dba0b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

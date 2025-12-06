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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBR2EK4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtN6kxCmr%2BZgrOEjN2FXQtlbJLN9MuZAWN31iZqiVeGAiBeDq%2B4U8oi%2F01EJfurIG8MUOU7i%2FoubKxyOUniAx46pyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqxR7J2cr0IkulhjdKtwDmFTklW5e%2F4phE6Qq9J0Qyhy9o4LJ8jW37VgCH19drWNDMYo6im%2F%2BAQQ8CbLrfD6f0mfQfoAeW0Jxm8X2iBgZoaDfTWruKZJOo6FNsdn0KuWVWmtz6hHwhw%2FWgSzkNxkJNMybPcv5JmJ4sfWzVJL0hOeecgMRTHjjDet9HuwN1ptPGQLef7UbM%2BNvIHxIapPvjWCHLlGpRg1jh9NxBmTtx3X4xYv9uMDmudDOjpky1BWQEoI6RkmsEPZbI9XL%2Bm0zvkAhMg3LK2uFFS06EJQGz1TQV%2FncUa0IYO9sy2MDHXFsqina9BbbbaD7j5ETvQnwThUAdgCZ2jddGB5%2FAgT3Iz4u1Q0wLpecmfDepOZ3s%2FNHp3%2FXFn6qQn%2BLTHkaallMyIUq6pAW2VfJPFCxBOyXb0z9PvrPk3AE3DdO9rlVHkjnpzmD618xUdive5rOYOkQbLi5bvjDq4nt6g7IhPBJ5UiN93%2B5uNFT6aEgFONAvmHus8Ews2BCOB8%2FerxjFk6kndbnLwIGcTVE57faBPsMq1nguKl6RX5zDUnUbW%2B7wQ3e1tk0Rss54NCdJt8OdAVIpjOYcdSZKS1a0e9TSq7AmKJ%2FtOT5X2NnhPpn5D7fUjrrN4AMr6xb6DCWSbUwwejNyQY6pgGqBN3aMgk%2Bms4ocwaq41Hwyx2yw7UdSCtdpwAw9VdM1q1xYFgVgwdb20F0S781%2FAh5i8JoyCNiPijbQh6smaZNt1H5nShp8ZLLIN9iyyZUQSz3SCTtiCPr7jKGka4IHGMBojKvJ5q3x1Khzbq8voMBdqim8CQ%2F%2Be%2BKDblxcBedhYjEgm8LshuVjwuyq%2FXZ4gqqlLTTqrX3eRj7lGH2I4m3w01vKK17&X-Amz-Signature=14ca03449b8f0312da10797909acd9768e718c45def9a56eff1f7780b6a6f054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBR2EK4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtN6kxCmr%2BZgrOEjN2FXQtlbJLN9MuZAWN31iZqiVeGAiBeDq%2B4U8oi%2F01EJfurIG8MUOU7i%2FoubKxyOUniAx46pyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqxR7J2cr0IkulhjdKtwDmFTklW5e%2F4phE6Qq9J0Qyhy9o4LJ8jW37VgCH19drWNDMYo6im%2F%2BAQQ8CbLrfD6f0mfQfoAeW0Jxm8X2iBgZoaDfTWruKZJOo6FNsdn0KuWVWmtz6hHwhw%2FWgSzkNxkJNMybPcv5JmJ4sfWzVJL0hOeecgMRTHjjDet9HuwN1ptPGQLef7UbM%2BNvIHxIapPvjWCHLlGpRg1jh9NxBmTtx3X4xYv9uMDmudDOjpky1BWQEoI6RkmsEPZbI9XL%2Bm0zvkAhMg3LK2uFFS06EJQGz1TQV%2FncUa0IYO9sy2MDHXFsqina9BbbbaD7j5ETvQnwThUAdgCZ2jddGB5%2FAgT3Iz4u1Q0wLpecmfDepOZ3s%2FNHp3%2FXFn6qQn%2BLTHkaallMyIUq6pAW2VfJPFCxBOyXb0z9PvrPk3AE3DdO9rlVHkjnpzmD618xUdive5rOYOkQbLi5bvjDq4nt6g7IhPBJ5UiN93%2B5uNFT6aEgFONAvmHus8Ews2BCOB8%2FerxjFk6kndbnLwIGcTVE57faBPsMq1nguKl6RX5zDUnUbW%2B7wQ3e1tk0Rss54NCdJt8OdAVIpjOYcdSZKS1a0e9TSq7AmKJ%2FtOT5X2NnhPpn5D7fUjrrN4AMr6xb6DCWSbUwwejNyQY6pgGqBN3aMgk%2Bms4ocwaq41Hwyx2yw7UdSCtdpwAw9VdM1q1xYFgVgwdb20F0S781%2FAh5i8JoyCNiPijbQh6smaZNt1H5nShp8ZLLIN9iyyZUQSz3SCTtiCPr7jKGka4IHGMBojKvJ5q3x1Khzbq8voMBdqim8CQ%2F%2Be%2BKDblxcBedhYjEgm8LshuVjwuyq%2FXZ4gqqlLTTqrX3eRj7lGH2I4m3w01vKK17&X-Amz-Signature=aa9c6ddfab3eb68d066bc4395f4dd9256599b6c5cefe722590fa28fad83f713c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

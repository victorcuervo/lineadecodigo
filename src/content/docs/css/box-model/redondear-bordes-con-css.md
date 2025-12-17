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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUPXSSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf0Gm3MpcE4yLWCxfo2nyNmepzak0LrubKwIYVs1OnAAIhAN%2B6v2wzJTushIwUfsTafglYsNCC89fpGmG451x0i27ZKv8DCHsQABoMNjM3NDIzMTgzODA1IgywIFVioWWV6iU2vOsq3AM4S2OGZRpxpgRwOVz%2BPxzf%2BjInrp2ekY3nvp5zNvLhfT6rR55P8x%2FD3rlQiNwrvF8J2WUr5vlfB%2Fh5BFsUnKFYQYJUgiT67545lDCTwsNf6JAsXFTGlfNaKuUIPYCuWDcXoz3%2B89JWyZexcvYCXl3DBpIeojZSbYLGc%2FtE1rWqc7vTm9yHDapF%2BnbsorWLRLLUXBRCqKcqWqSMhPQ0hI%2BdKvw4C3bA9BnpuIl6vlcY0dAk55b5kkyxkOtJ5tCcUwc9ywPz%2BzLEpj0hlHvEbjY7gMFaH9PAf37%2FcPqOo0qq0kCtIbI4VczB182QQ9I6fAztpaoWb37vKWUY3wIULoqAAmBO9ZUIYXvfWRUhCEIlJE3R4vxsrZyo7i0TRbReaqbjvdo40RXp4F%2BxSu7Y2xEK36SAkSJS8hHY7Ed4Wmwm8nh9P3tKh5w49HvIAXMiB13g7X2VYw7qxZVCkbV%2BiuTgpLUbnENqEyFKSt0bABhRMUy0Bj540KPbbJjy7LT2n7lPHuClLYTl80380ZJ7ZjAqu8v8ISULvimPI6hU0Wpo8qtsKrlVey1%2B1hJR%2FSisJd9UL76nAtFRSjEpqghFSen7cAke6xd8en5TSpG6tItdL2ZlTFYiVtBEFNMuZzDp74nKBjqkAW3R0JFHXrYVdm4F39pKz4gZTC9ljneCfOrwOhPofwiAHQC3OkQR%2Bh%2BRDeo6YHie2PUCirzRec9kG3089kitwMaQj%2FiZim%2Bzd15LPk6PmFdw2v5I9MXT1TTOuoSDCujdpx6lua15F9AR931aCviMO%2FPZXSUGtuWBaXQAlRzoi2PLSKtMBbzATRTgDtCZ7yX2iWl9%2FbQMAQRt2jkiW7xvWI%2B6SMeX&X-Amz-Signature=06b3927d609158aa8862b6d0a41da4f623f0b2b4a4c32995ad4a703b1e09941c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUPXSSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf0Gm3MpcE4yLWCxfo2nyNmepzak0LrubKwIYVs1OnAAIhAN%2B6v2wzJTushIwUfsTafglYsNCC89fpGmG451x0i27ZKv8DCHsQABoMNjM3NDIzMTgzODA1IgywIFVioWWV6iU2vOsq3AM4S2OGZRpxpgRwOVz%2BPxzf%2BjInrp2ekY3nvp5zNvLhfT6rR55P8x%2FD3rlQiNwrvF8J2WUr5vlfB%2Fh5BFsUnKFYQYJUgiT67545lDCTwsNf6JAsXFTGlfNaKuUIPYCuWDcXoz3%2B89JWyZexcvYCXl3DBpIeojZSbYLGc%2FtE1rWqc7vTm9yHDapF%2BnbsorWLRLLUXBRCqKcqWqSMhPQ0hI%2BdKvw4C3bA9BnpuIl6vlcY0dAk55b5kkyxkOtJ5tCcUwc9ywPz%2BzLEpj0hlHvEbjY7gMFaH9PAf37%2FcPqOo0qq0kCtIbI4VczB182QQ9I6fAztpaoWb37vKWUY3wIULoqAAmBO9ZUIYXvfWRUhCEIlJE3R4vxsrZyo7i0TRbReaqbjvdo40RXp4F%2BxSu7Y2xEK36SAkSJS8hHY7Ed4Wmwm8nh9P3tKh5w49HvIAXMiB13g7X2VYw7qxZVCkbV%2BiuTgpLUbnENqEyFKSt0bABhRMUy0Bj540KPbbJjy7LT2n7lPHuClLYTl80380ZJ7ZjAqu8v8ISULvimPI6hU0Wpo8qtsKrlVey1%2B1hJR%2FSisJd9UL76nAtFRSjEpqghFSen7cAke6xd8en5TSpG6tItdL2ZlTFYiVtBEFNMuZzDp74nKBjqkAW3R0JFHXrYVdm4F39pKz4gZTC9ljneCfOrwOhPofwiAHQC3OkQR%2Bh%2BRDeo6YHie2PUCirzRec9kG3089kitwMaQj%2FiZim%2Bzd15LPk6PmFdw2v5I9MXT1TTOuoSDCujdpx6lua15F9AR931aCviMO%2FPZXSUGtuWBaXQAlRzoi2PLSKtMBbzATRTgDtCZ7yX2iWl9%2FbQMAQRt2jkiW7xvWI%2B6SMeX&X-Amz-Signature=ff01603e8b0d5ea342437bc86ee8f8d56fdd96a1c58dde1f6172525c35637e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

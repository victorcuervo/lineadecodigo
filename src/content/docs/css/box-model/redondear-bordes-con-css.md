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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITRY5BY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiLCjhQnOGoRGMxmGfeTKcFpqNllVAO3WkrE7hz9trdAiEA%2B850NLdvRR47U2nDhIJz0bvyKGPHB7eJnfda%2BKlNV%2B0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKAmVHUtMDRRRRsBYircAxfr79YJWlcfQXVUTVrWp3ChgZe%2BgrlgGV0bdU9OMVUh9TxMXuRWP0jczVuFJniGi%2BBoYNB8aGGX8sDFU6WEPsc57bDUFf6UkMwFoOqtn1uxLOvF9v0UmVph6vGzEM7SAYABqAFY0UQj7ynwjQXHSIr0GuQz9ivmFy14MZ7sq2qIp20BgsrnOSiKFvZN%2BZp6Mdf%2FzDUKNCG6U7JM1wNz2Z1QcY7Arf6TLDJ4AakHrDycimnPZJPTSuLQ6ZnmN5Zn2E7IA273emwJoCqElrOaq9FQ4WeULf7TOzmkl2B46aiD3MHTst7s%2B5bQaW2sYlkmP26C9m7bFbxKrlla7JHGYl7QFwyiRYCsvHysi%2BjSXWzoaP1U9w7L0soZzPxQ5Ng6015Kn050Fcn5NKhd7CGPhzjCDFiSmiDvWcVJrjzXcEkDEsNalzEoZvjPbp3dBZU1CNfJnrjb%2FlEulMbX2STrp3QMo%2F4dE6jNMTQfWc2PQuXIsxqUcO5LXQUO8X9wW5OVy57Ulofqqoskt38MIiPXU7WODM0QnKZy5AFgSUSX4lAxTnw2CwSOnCKAI0GM2ivxeoHrjRoAMu%2F%2Bxgz%2FNsTBIiaMa38%2FUbvI%2FEERnl2OhK6KDRFrTscyj6wE2TI9MI7OiMoGOqUB14s3Mbdhb3DTavgD2a6fh2n4J6yb8kRIXNJt3Z6WmP7lvA9rK%2FwnDPWeY4ukN9cBtQoZzQsbNnPIvK9CKEbOuQRPR%2F3GM5UbD4TrUC7sekuql7aJyYS856sw%2BLfLbauEGM6ZqCL2mr90Hk8i42Aop8UZiCRJaJthYNNCy7bDjuXtXjKZGASHjWnhgfXsxbg%2FP7nHorXdz7Su1KnnwUTcYcKy2H8e&X-Amz-Signature=2297866d330cbe4c9f3b37fcaa438a2e27250cc58e3786d8ac5e9cbc7bb911ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITRY5BY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiLCjhQnOGoRGMxmGfeTKcFpqNllVAO3WkrE7hz9trdAiEA%2B850NLdvRR47U2nDhIJz0bvyKGPHB7eJnfda%2BKlNV%2B0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKAmVHUtMDRRRRsBYircAxfr79YJWlcfQXVUTVrWp3ChgZe%2BgrlgGV0bdU9OMVUh9TxMXuRWP0jczVuFJniGi%2BBoYNB8aGGX8sDFU6WEPsc57bDUFf6UkMwFoOqtn1uxLOvF9v0UmVph6vGzEM7SAYABqAFY0UQj7ynwjQXHSIr0GuQz9ivmFy14MZ7sq2qIp20BgsrnOSiKFvZN%2BZp6Mdf%2FzDUKNCG6U7JM1wNz2Z1QcY7Arf6TLDJ4AakHrDycimnPZJPTSuLQ6ZnmN5Zn2E7IA273emwJoCqElrOaq9FQ4WeULf7TOzmkl2B46aiD3MHTst7s%2B5bQaW2sYlkmP26C9m7bFbxKrlla7JHGYl7QFwyiRYCsvHysi%2BjSXWzoaP1U9w7L0soZzPxQ5Ng6015Kn050Fcn5NKhd7CGPhzjCDFiSmiDvWcVJrjzXcEkDEsNalzEoZvjPbp3dBZU1CNfJnrjb%2FlEulMbX2STrp3QMo%2F4dE6jNMTQfWc2PQuXIsxqUcO5LXQUO8X9wW5OVy57Ulofqqoskt38MIiPXU7WODM0QnKZy5AFgSUSX4lAxTnw2CwSOnCKAI0GM2ivxeoHrjRoAMu%2F%2Bxgz%2FNsTBIiaMa38%2FUbvI%2FEERnl2OhK6KDRFrTscyj6wE2TI9MI7OiMoGOqUB14s3Mbdhb3DTavgD2a6fh2n4J6yb8kRIXNJt3Z6WmP7lvA9rK%2FwnDPWeY4ukN9cBtQoZzQsbNnPIvK9CKEbOuQRPR%2F3GM5UbD4TrUC7sekuql7aJyYS856sw%2BLfLbauEGM6ZqCL2mr90Hk8i42Aop8UZiCRJaJthYNNCy7bDjuXtXjKZGASHjWnhgfXsxbg%2FP7nHorXdz7Su1KnnwUTcYcKy2H8e&X-Amz-Signature=3d5f6b0fe3b20aacede80735e6c7dadc6c37eb4a82151a03c11c790d7601a66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

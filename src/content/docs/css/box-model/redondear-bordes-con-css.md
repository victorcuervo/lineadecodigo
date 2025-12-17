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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM42TQ2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnuAMZ3h86JCrzDKVnUIdiQi7ALsaC93ZU44etBHPjjQIhAJXCQLG7qR8%2B0Tcmx%2BquXMFOyJvrZWQXlCUMsnYDfFBHKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHz1zhvsxlDKOlSB8q3AOLATEgRjxhTckJLdmbcH46%2FxTZ45NCItHjGsV5db5%2BeD%2BQ6BGvlQJr9nyNtv4%2Ff7Ri6olA1kN%2FRfU2V5L164A3EsU04ZfrDg7rOesMM8bng6IKxHCM%2FQR64cai3JW8CSaBE2lnUIKJMr71yPtsuny5oZmeObK32iUmMRnStxkH6G61qxRafeU5OtWm5dPryxzlKWVELXONt6Hnw3yEeAdD1KEML2eAW3xCoHEAeNJsHlLk%2FvAuiKo3bkBwMhMFkRY7rgtJ%2FBaqXdBKBPc%2BJ9EiTdq5xYYPUNElX13%2BYwU3ZmWg2%2F%2BoqyDyNIMbnZXfghoc8z0Of4RyHduQbMC4PTAkiYx5ver5HmLxEixl2x2fcDUjZGGl0%2BtrFzCJAZiz3LW9SXJ3Y4GkKhsO7zdwNkI2CB%2Bv1P8p2vQNH5xh5WdUZoemLUTrlf2DlM2v9Z29CA9zX2DGAxrKfmgNRHRE0xLO32ViLP8dpUw9GGoqGIF6dKT0XzPNe1DCoDs3%2BRn5PsXnNws7LVf1wJYojSIcyzEihWDT8oRyJGvJiXN%2BqyWeMejinyFeQbhJohMVUTortBPSe%2FPSa%2B5XWrJwqOvdssrq3xYREcHf2NaxFdrXnIabjpUq3lHyLQo89iwdbjDW3ofKBjqkATBGUef5OjyYn9oTk%2BwEtzKdKNXOB3QO9VXbOU57FzPIPZdH6AJqgBh%2BQbsFk1ok%2BfdSxs66vmHamrz4hPOJ6slw6aN%2B4R%2Fbz7vJKC52GDSC4Aldpy7bdmpIy9Qd8mUqJtuh6Dn0lfqzypvFIKGl3rO5ePxgihW7sZg0INNkEDiKUET%2FXRz2gIzIYtKbt8o49WvavaGH7mp2lspMMns0F5kqwwwl&X-Amz-Signature=081774a529d4056bf5aa7fe1e0a7b368e01f69a4a424cc8ac37bbf71a3d9ca7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM42TQ2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnuAMZ3h86JCrzDKVnUIdiQi7ALsaC93ZU44etBHPjjQIhAJXCQLG7qR8%2B0Tcmx%2BquXMFOyJvrZWQXlCUMsnYDfFBHKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHz1zhvsxlDKOlSB8q3AOLATEgRjxhTckJLdmbcH46%2FxTZ45NCItHjGsV5db5%2BeD%2BQ6BGvlQJr9nyNtv4%2Ff7Ri6olA1kN%2FRfU2V5L164A3EsU04ZfrDg7rOesMM8bng6IKxHCM%2FQR64cai3JW8CSaBE2lnUIKJMr71yPtsuny5oZmeObK32iUmMRnStxkH6G61qxRafeU5OtWm5dPryxzlKWVELXONt6Hnw3yEeAdD1KEML2eAW3xCoHEAeNJsHlLk%2FvAuiKo3bkBwMhMFkRY7rgtJ%2FBaqXdBKBPc%2BJ9EiTdq5xYYPUNElX13%2BYwU3ZmWg2%2F%2BoqyDyNIMbnZXfghoc8z0Of4RyHduQbMC4PTAkiYx5ver5HmLxEixl2x2fcDUjZGGl0%2BtrFzCJAZiz3LW9SXJ3Y4GkKhsO7zdwNkI2CB%2Bv1P8p2vQNH5xh5WdUZoemLUTrlf2DlM2v9Z29CA9zX2DGAxrKfmgNRHRE0xLO32ViLP8dpUw9GGoqGIF6dKT0XzPNe1DCoDs3%2BRn5PsXnNws7LVf1wJYojSIcyzEihWDT8oRyJGvJiXN%2BqyWeMejinyFeQbhJohMVUTortBPSe%2FPSa%2B5XWrJwqOvdssrq3xYREcHf2NaxFdrXnIabjpUq3lHyLQo89iwdbjDW3ofKBjqkATBGUef5OjyYn9oTk%2BwEtzKdKNXOB3QO9VXbOU57FzPIPZdH6AJqgBh%2BQbsFk1ok%2BfdSxs66vmHamrz4hPOJ6slw6aN%2B4R%2Fbz7vJKC52GDSC4Aldpy7bdmpIy9Qd8mUqJtuh6Dn0lfqzypvFIKGl3rO5ePxgihW7sZg0INNkEDiKUET%2FXRz2gIzIYtKbt8o49WvavaGH7mp2lspMMns0F5kqwwwl&X-Amz-Signature=46ec165f41d54729c0f185aab569d3664f6997e70c47d48a58f45c8b1acfb507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

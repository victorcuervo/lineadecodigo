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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3EQHBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaJoA1g3iUkDogaSW7X2Q03DKF40E19x8K3OQWuN37AIhAI2jwZmNF67b%2F2PTqoGcrUllZU4p5yzG9Ccv32VmCZSNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOcHgHQXGqpGN4G40q3AP7PDFlgVe0t8TGmIC7VOmtw8OHBeRiBGA%2BDjUiKFrmdVDgeMdv5rA3HhEOYa%2BIYJhixIA7bPVee5HnTUOKBCj4YDG9hOkzJsiLa09wwexcx2kAgZmNCi%2BJcfmCYnG4v6SKPE8dwv%2FR7z1D%2FH29jyLMXPydL5WxAZjKyznLDRFNipt3JDZEH0nrHjnx2dfJClueGAyorIv0Rs7uAMdar2VjvF7GjoUMaxzwWvlvIW4zpjcOmukdq4j4xCF0jnczBLLkbeplD0ytX%2FXW0cb%2BZb8PaaN0mhh0o6p1NH%2BykLzjPieOdG7oENlVPp8PtGJ7%2FlkB5Ndi89jGdWMurHd60%2BRCCnjdZKb%2FRXdoa0zoSguVNSQ2U37LnLB66LKpktXM0PvsknLI9hK0Ge%2F9GM8Tw5ca3Z%2FrbFc9WRFMPy%2FiJEy0B9AyFQPvXfzSDlVUVVPFvdbs3xm%2F4ZiAnX3py5iT3MQs5J1wc35L3PcZBqmLvuA0cSTq1XFcCcpIz9U7CdxIEqYhI4KGBVxqyOWae4dJaf3I%2B8luN8s0%2Fou4nbbwpA7SP3hX7thZA%2BVIvv77X4g8%2BYZ5QGbHJboGo1zQ8J2qwqj%2BDNNhAy7tZmlr5cO31PXB6LYLFyOhyu%2BcUZt5YjDDodTJBjqkAb5rMz8wF1Dk3aC2ae6dHRiHsSpzvl7nvva8NUSAaEDtXoUdBkpgrbtgVuU%2BLRqLUwwVDLZmj2qffHSN9hTE6kxe0iNNJDuJvJnZ1Jd2slhKSClip0WtccYwQTAdBDKDi%2F1ekcaSb3ejd3bY1PbN0SdAfnXYTr9Bo1SsYIaLdG3mRcyMf5yB5PUJD2aD8J7e%2Fk1KR85aW3XnqIXa8o3ZPE37dXzQ&X-Amz-Signature=b1b2ecd00fdece0bdeedfcf51e545e8db195d967124d70d4fa7447f9265576e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3EQHBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaJoA1g3iUkDogaSW7X2Q03DKF40E19x8K3OQWuN37AIhAI2jwZmNF67b%2F2PTqoGcrUllZU4p5yzG9Ccv32VmCZSNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOcHgHQXGqpGN4G40q3AP7PDFlgVe0t8TGmIC7VOmtw8OHBeRiBGA%2BDjUiKFrmdVDgeMdv5rA3HhEOYa%2BIYJhixIA7bPVee5HnTUOKBCj4YDG9hOkzJsiLa09wwexcx2kAgZmNCi%2BJcfmCYnG4v6SKPE8dwv%2FR7z1D%2FH29jyLMXPydL5WxAZjKyznLDRFNipt3JDZEH0nrHjnx2dfJClueGAyorIv0Rs7uAMdar2VjvF7GjoUMaxzwWvlvIW4zpjcOmukdq4j4xCF0jnczBLLkbeplD0ytX%2FXW0cb%2BZb8PaaN0mhh0o6p1NH%2BykLzjPieOdG7oENlVPp8PtGJ7%2FlkB5Ndi89jGdWMurHd60%2BRCCnjdZKb%2FRXdoa0zoSguVNSQ2U37LnLB66LKpktXM0PvsknLI9hK0Ge%2F9GM8Tw5ca3Z%2FrbFc9WRFMPy%2FiJEy0B9AyFQPvXfzSDlVUVVPFvdbs3xm%2F4ZiAnX3py5iT3MQs5J1wc35L3PcZBqmLvuA0cSTq1XFcCcpIz9U7CdxIEqYhI4KGBVxqyOWae4dJaf3I%2B8luN8s0%2Fou4nbbwpA7SP3hX7thZA%2BVIvv77X4g8%2BYZ5QGbHJboGo1zQ8J2qwqj%2BDNNhAy7tZmlr5cO31PXB6LYLFyOhyu%2BcUZt5YjDDodTJBjqkAb5rMz8wF1Dk3aC2ae6dHRiHsSpzvl7nvva8NUSAaEDtXoUdBkpgrbtgVuU%2BLRqLUwwVDLZmj2qffHSN9hTE6kxe0iNNJDuJvJnZ1Jd2slhKSClip0WtccYwQTAdBDKDi%2F1ekcaSb3ejd3bY1PbN0SdAfnXYTr9Bo1SsYIaLdG3mRcyMf5yB5PUJD2aD8J7e%2Fk1KR85aW3XnqIXa8o3ZPE37dXzQ&X-Amz-Signature=8dc2e6d60ba69b83fafb816ea194987bb548f8efccf70676213a1d46deee97f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

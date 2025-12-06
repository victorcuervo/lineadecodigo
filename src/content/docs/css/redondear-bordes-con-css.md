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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QZJCZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3uE5uyszUFUVGuuZGbbvZVY5VrnVfl0%2F0KxRax%2Bv7aQIhALjlfDLxIeW0Q9MwTMKvT2wDce8lbL1JQLKxnZ8klcNyKv8DCHkQABoMNjM3NDIzMTgzODA1IgxcgRtTpQGh9JaKxZcq3AOa%2FfHI2jRhv3Yw8yRF%2BnPJGjOmrn3kKVUmpIiGJs0Xsq%2F8TwksGreFN0D13Siy%2Bvk8LTdMpiIwh%2BWjTOuZOV2Esj01PWT7ilcTvonnydVdGSL0UfLBDNylLN%2B8BjxcAmWwGDaFc4zXu2NvYvbLRs%2F6bR0gx9fxA8Edpn7oCpKfbM3gaE0K%2BPeztIL6E%2FxeRm5gWn5uC7x7v8X2KWF0S49TLnM3sqa8Ta2FlrL5Oo%2B%2BDrw0y9T7ahLD%2BwGTqGqrctY%2FpicLXmHGwdVJMd9OZxTkEnmnSFAwlJpbAVd4SZYOE99yW8pZYjWxK987CZIpNe1yfL592kKQWlLRhignRgSLDCu%2Bkc1IJKRilkYU1j32vFHPrEP6lFKAE9orFbQ%2FJ%2FSTtqH%2BYm9Q4ZdbL6TeFcmFka%2FMUyAJ7ke1Wj67SQdXOCETWccJhDXEtZaZOJfGO8skQQKndzhveJvR9ndiooFXSQ8AEEW9zqJOrKl7L2Za%2FvJR0thSfdLzXwSmkdGNVOMs9t3KJznGc%2BZsRoIxhUgDFpyCzK%2FkEmgbC%2BZah3fr5rPy94yPhSAlFXFF1z9O3AaxFr8UZa5ojrIxV6YF0LKpTxwp2i8J9axhiISHat0A1LyUMly1I8Vi0HAZSzCYrdHJBjqkAVsfLEPGMJSYDhRJzuj2B0yeMjaDOVaYSYuZlRvthNCBDmLEnpkJS3%2FDN3hIg3HYL0EIhfhTydnBdkoPqiBP1ybVJjRjpqEiRYb%2FXqyGDsFr%2BPoFH6pMhzoHdDd8NQE2S3lwTzLb3B%2BRXwZsUhdjvAgHhYcLF7ZS1cT4NfBuriveXuOt%2FPKSOa8rBWYlCWlK%2BgAGiXNW1xpjqAHahRizRUMjUgDQ&X-Amz-Signature=16855305bb0b94a5ff94cc42d7fe0b0d615fc661d9b9e0ff8e0c5079142192fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QZJCZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3uE5uyszUFUVGuuZGbbvZVY5VrnVfl0%2F0KxRax%2Bv7aQIhALjlfDLxIeW0Q9MwTMKvT2wDce8lbL1JQLKxnZ8klcNyKv8DCHkQABoMNjM3NDIzMTgzODA1IgxcgRtTpQGh9JaKxZcq3AOa%2FfHI2jRhv3Yw8yRF%2BnPJGjOmrn3kKVUmpIiGJs0Xsq%2F8TwksGreFN0D13Siy%2Bvk8LTdMpiIwh%2BWjTOuZOV2Esj01PWT7ilcTvonnydVdGSL0UfLBDNylLN%2B8BjxcAmWwGDaFc4zXu2NvYvbLRs%2F6bR0gx9fxA8Edpn7oCpKfbM3gaE0K%2BPeztIL6E%2FxeRm5gWn5uC7x7v8X2KWF0S49TLnM3sqa8Ta2FlrL5Oo%2B%2BDrw0y9T7ahLD%2BwGTqGqrctY%2FpicLXmHGwdVJMd9OZxTkEnmnSFAwlJpbAVd4SZYOE99yW8pZYjWxK987CZIpNe1yfL592kKQWlLRhignRgSLDCu%2Bkc1IJKRilkYU1j32vFHPrEP6lFKAE9orFbQ%2FJ%2FSTtqH%2BYm9Q4ZdbL6TeFcmFka%2FMUyAJ7ke1Wj67SQdXOCETWccJhDXEtZaZOJfGO8skQQKndzhveJvR9ndiooFXSQ8AEEW9zqJOrKl7L2Za%2FvJR0thSfdLzXwSmkdGNVOMs9t3KJznGc%2BZsRoIxhUgDFpyCzK%2FkEmgbC%2BZah3fr5rPy94yPhSAlFXFF1z9O3AaxFr8UZa5ojrIxV6YF0LKpTxwp2i8J9axhiISHat0A1LyUMly1I8Vi0HAZSzCYrdHJBjqkAVsfLEPGMJSYDhRJzuj2B0yeMjaDOVaYSYuZlRvthNCBDmLEnpkJS3%2FDN3hIg3HYL0EIhfhTydnBdkoPqiBP1ybVJjRjpqEiRYb%2FXqyGDsFr%2BPoFH6pMhzoHdDd8NQE2S3lwTzLb3B%2BRXwZsUhdjvAgHhYcLF7ZS1cT4NfBuriveXuOt%2FPKSOa8rBWYlCWlK%2BgAGiXNW1xpjqAHahRizRUMjUgDQ&X-Amz-Signature=a36e179dc030637275c71a382f3a8e4807e32ac2e6bee6d8caed5b66d241eb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

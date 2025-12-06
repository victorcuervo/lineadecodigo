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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RK42N3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNGumEjLiGUhwKbvjJUA1W%2FuuDNBvuVO0Xl9fRcWeswAIhAI1l0MWg860xte2SkoXS7dLxPUoVS3CtAP6vWiG478X%2BKv8DCG8QABoMNjM3NDIzMTgzODA1Igxzl%2FLpGbJz6mR1XpIq3AP90GOGvbWwboJXR9gRHgH3yQLMQ9VNGDX9DKoMwqnBnWm%2B4tC4yE3NcBTUQbDAq0sKp94MAkyyMphwP4bwsPUjkQElMlJTPOoZH0i6tYWNN0BTFgvnO5Cjio04FEAywB5kOdo%2B5M9F3Tw%2FcnZV%2BWw1eV76pz5B6h5t9fIxRycH62ryKtqPRjWkefTAkvNMJK8C1B77nYli7H3ioBDt3edW9Kkdh82Roakih%2F6FaBn6gxXTsBLGROrxf0dK3ah27XIhjdHlUmxP4GoBdafjS67uTuvdifUCZ5%2BReqjqALruXkpsfOPoht6PQqMv2T40Neq%2F%2BsM7D%2FZazswIm4%2BkVuVFsdIKCayrgY4c54Ms9QVwm8X0lZzKQDHwz%2F%2Fp5DgvBMLk1jnWFTJNnQUcze%2Fiuq1aHarN9phsGnTd005dGaYlRUfGAqtL00zLwFWZp8wSxEUJZIUCOggp5zj8pOVb4TV00z2r%2BBM9hw%2Fl10eCZXNCi0Tz2y4DB6%2BpSPpP%2FhBIbZZziCtzqAdspgC%2B7Pscts%2FkEnDiQf%2BM783EjKyPXnWDpvL9A9q4eXcEByDfyZsKVFcQ1D4O%2FxS17t724oA8NiS1QDSr%2F7mITGRz4sqo1p2GMQhjGq7n5U3hliuLwjDT%2FM7JBjqkAfOQUvfbhRPqIKtP8YV1Z9d0MFv1yTKXgOfGktbgqlSjPT1ECRUeFbybEB7eyyb59NvUDeiU9LoaTX7ts4g48%2B2aYEK97ZS7xCyz0E2iXhBPorCFWmgRY48WkKvTzBjy3ByuhHsH7M61w6aW82oryqirt2WzIy94LwzMjpPRx2AtHoxhCd0rkBXUwLIk41bBa2x7KeO%2BX2%2FPJ6rfkXOTAr6dPf5l&X-Amz-Signature=6c95c345294ff3468d59c5425e99bd8f5be1dac9d54ac023bff5d2c709d4eda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RK42N3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNGumEjLiGUhwKbvjJUA1W%2FuuDNBvuVO0Xl9fRcWeswAIhAI1l0MWg860xte2SkoXS7dLxPUoVS3CtAP6vWiG478X%2BKv8DCG8QABoMNjM3NDIzMTgzODA1Igxzl%2FLpGbJz6mR1XpIq3AP90GOGvbWwboJXR9gRHgH3yQLMQ9VNGDX9DKoMwqnBnWm%2B4tC4yE3NcBTUQbDAq0sKp94MAkyyMphwP4bwsPUjkQElMlJTPOoZH0i6tYWNN0BTFgvnO5Cjio04FEAywB5kOdo%2B5M9F3Tw%2FcnZV%2BWw1eV76pz5B6h5t9fIxRycH62ryKtqPRjWkefTAkvNMJK8C1B77nYli7H3ioBDt3edW9Kkdh82Roakih%2F6FaBn6gxXTsBLGROrxf0dK3ah27XIhjdHlUmxP4GoBdafjS67uTuvdifUCZ5%2BReqjqALruXkpsfOPoht6PQqMv2T40Neq%2F%2BsM7D%2FZazswIm4%2BkVuVFsdIKCayrgY4c54Ms9QVwm8X0lZzKQDHwz%2F%2Fp5DgvBMLk1jnWFTJNnQUcze%2Fiuq1aHarN9phsGnTd005dGaYlRUfGAqtL00zLwFWZp8wSxEUJZIUCOggp5zj8pOVb4TV00z2r%2BBM9hw%2Fl10eCZXNCi0Tz2y4DB6%2BpSPpP%2FhBIbZZziCtzqAdspgC%2B7Pscts%2FkEnDiQf%2BM783EjKyPXnWDpvL9A9q4eXcEByDfyZsKVFcQ1D4O%2FxS17t724oA8NiS1QDSr%2F7mITGRz4sqo1p2GMQhjGq7n5U3hliuLwjDT%2FM7JBjqkAfOQUvfbhRPqIKtP8YV1Z9d0MFv1yTKXgOfGktbgqlSjPT1ECRUeFbybEB7eyyb59NvUDeiU9LoaTX7ts4g48%2B2aYEK97ZS7xCyz0E2iXhBPorCFWmgRY48WkKvTzBjy3ByuhHsH7M61w6aW82oryqirt2WzIy94LwzMjpPRx2AtHoxhCd0rkBXUwLIk41bBa2x7KeO%2BX2%2FPJ6rfkXOTAr6dPf5l&X-Amz-Signature=90b8195e7e327f128a258c858949d345a67b4bbeaadc1bda309c087df85b1ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

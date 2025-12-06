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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYJXSMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ0ceYFkfb7OgYZfNft6dU23fcERY3jftxMD2m35CjIQIhAPpuJYoJHq06VlH5CfAIJFtEhpY%2FuuGN4%2Bwu69YXLAB%2BKv8DCGsQABoMNjM3NDIzMTgzODA1IgwgmkaSrXkA6gXcVsEq3ANIafHuIyOA3KLQJ36M7%2F58ftlkUzuj3U3NPAc2UBsybsBYt3%2B9jvRAG8aquueremGdA8WgNqQEDtJpaFnaGQEgOdXC8IVoGIoihNX2%2FpTzq4ZnLxy5%2FNNYUTmknrZRMgpR6oORuiIIrVASC8zvAznMsACYpN3gXY0DWG0bhZ8iRAY6p%2FfpkJ%2BBgF4%2B5jVgy0YytJqSp0Jh9qcvxRhOnKR8FSTRfHniXDWfFJewWPTDwZZ15EvT%2FuMaeGxRIHHgmfrBZxe6Rwt%2FggkdFCsZR0mqvwn76UC5%2F%2BUrvrQLwWKCkIKLITwocJJvLmxhxFzHgtGPQxY5DBlWKZGNo419JNa1stTdIUT301vW56MhcOw61DS7Hb7r555%2Bik2c5If33AdofwCPJ4N1AqEI5bPrqGKm5LaPwwrV6mvsmwD6I6FpZojz3tvvEB7RuHIWChu%2BWc1MBzl0QwzyxoEJJWRRd8pXQxlyncNZOlcu1msMCH9BLgv5x82pZ7MglCv3nrBRkyV8IKAR%2Fims%2FSqwoeU4s5shK3IR4QSSEkLhksXa82k%2FJRkBSxpiiYEZ5ym27G8ahCs5eTa42UKS3ac2MvPOrxieko1tAMClXLYGnAR2zGE8IjRbMbr%2F9b9h2JFgejC1p87JBjqkAQsI08yvn6SdQ81cExSmAgaqKGCunruXBBLpVWb%2BxP87ZDd5PyQByKRIlBLo95vL1IL4zBwkVQmgZQqxfufvndmfQuVHIZ0wM2nbsHSHB02ZDNzoI6cNi5%2FQAIqjUOVURdK0X7hCbfLvw%2BBtMJW3f8o4FsYURtpjXzON%2F2B6RGhWKHg6NPXqx3mPBO2JAfj2dfxPwq4kD9Xl%2BxKJ5A%2FrzvUIi7%2F6&X-Amz-Signature=f3fa956354aedd5822e801fe792294840ff8bd5f37703183400c6853e0db7fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYJXSMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ0ceYFkfb7OgYZfNft6dU23fcERY3jftxMD2m35CjIQIhAPpuJYoJHq06VlH5CfAIJFtEhpY%2FuuGN4%2Bwu69YXLAB%2BKv8DCGsQABoMNjM3NDIzMTgzODA1IgwgmkaSrXkA6gXcVsEq3ANIafHuIyOA3KLQJ36M7%2F58ftlkUzuj3U3NPAc2UBsybsBYt3%2B9jvRAG8aquueremGdA8WgNqQEDtJpaFnaGQEgOdXC8IVoGIoihNX2%2FpTzq4ZnLxy5%2FNNYUTmknrZRMgpR6oORuiIIrVASC8zvAznMsACYpN3gXY0DWG0bhZ8iRAY6p%2FfpkJ%2BBgF4%2B5jVgy0YytJqSp0Jh9qcvxRhOnKR8FSTRfHniXDWfFJewWPTDwZZ15EvT%2FuMaeGxRIHHgmfrBZxe6Rwt%2FggkdFCsZR0mqvwn76UC5%2F%2BUrvrQLwWKCkIKLITwocJJvLmxhxFzHgtGPQxY5DBlWKZGNo419JNa1stTdIUT301vW56MhcOw61DS7Hb7r555%2Bik2c5If33AdofwCPJ4N1AqEI5bPrqGKm5LaPwwrV6mvsmwD6I6FpZojz3tvvEB7RuHIWChu%2BWc1MBzl0QwzyxoEJJWRRd8pXQxlyncNZOlcu1msMCH9BLgv5x82pZ7MglCv3nrBRkyV8IKAR%2Fims%2FSqwoeU4s5shK3IR4QSSEkLhksXa82k%2FJRkBSxpiiYEZ5ym27G8ahCs5eTa42UKS3ac2MvPOrxieko1tAMClXLYGnAR2zGE8IjRbMbr%2F9b9h2JFgejC1p87JBjqkAQsI08yvn6SdQ81cExSmAgaqKGCunruXBBLpVWb%2BxP87ZDd5PyQByKRIlBLo95vL1IL4zBwkVQmgZQqxfufvndmfQuVHIZ0wM2nbsHSHB02ZDNzoI6cNi5%2FQAIqjUOVURdK0X7hCbfLvw%2BBtMJW3f8o4FsYURtpjXzON%2F2B6RGhWKHg6NPXqx3mPBO2JAfj2dfxPwq4kD9Xl%2BxKJ5A%2FrzvUIi7%2F6&X-Amz-Signature=18330b6079d1d9846104dfe839c5b2e718f533ebf796171779c6c2df8e78196c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

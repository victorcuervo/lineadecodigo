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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFSRFDF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRH4Y3fjLf%2FR4YLA%2F5oWRvgKXugUROfpsuaP3aYbfNQIhALBMFVlXpSN5ZVAtrY5F3BJff6MQqbQDtK8tXrVfkbVyKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA9%2Bj%2FVo8qFORlcyUq3APJ7QawlVJFZmMvLjt1V3o%2BGUvhxzNN0pNVnOY%2BPJyAqaNRL5KFgagfCmp9I57xjrdd%2FaaH2drYT3Ojxwf%2FKRzm5LHtjHa%2FzY6OpTtNIQjLxL3ZTMywjuYqoWrNyfHqr0YHEPUvcIUPKIOTdCz7gGMhu6pxmiuOzWkmEqtT1gUZ5UuEFWywtXvUGDgj9CZjJeIPnuQ1fAINU4K7LVpR91aw1u1%2Fx0RNvGyW4W%2F5iyb%2FijKJsDp%2BfMp4qb2Txv%2ByoiK94OzeQNhKTcTXS8tZoyYr8m2hBan2pI8QOSbiQPX4O9LmDFeWxr%2B%2Bg3qoj%2FwyEsCzBSl%2BQZr6uB45%2FrOGVDvcMIM44owozTQd5ACR9Up1xTOh65xLCqgax32LgHTLv8HrIEih1wgU0eM1m4YJU8MaQZDs22M8lcAHjd44HFQbFWq3nXP87Lvi2KYtjHkXYwOFtkDtT%2FEXjKQkSShn4pHAsJy2MUzvJXlQ9KVcNslHghIrWLsOKE3uPzwttZjg%2BTYhixZ7cilUpVo6CN0TZpkWkTXDdFJyI8ayDvvX3UP54063yOCW4fHNOlGTg0Da3vTJRJTI8Q5DOFUbhW9KI1S6Nwl9rtbsF5Jzp2RNSnCClFbEzd9BFRPJ1JtM7jC67tnJBjqkAfA6iP9xDb0i1F0qGCl8gxNkXZ5oaq0yIYRQDGdDxrQ3Oq7JRC12FkQGJQkVo3CZDvVKQ6St1PsndfAuLPGYxRb3yFYKq%2FuUa5CcxwMbE2cq9VECQtYaTJmOltwC31MIZZIHNh29Y65m8lwMSU8BFT5Dwteg3yOq83hG04ZHsWVi35Dts%2F8VxSOBj7zGZ1iXpV6ok8BjxpPf1WUCzNpphxwQiDMx&X-Amz-Signature=cb85a00a4f1cf3f44ad136d7eb8061caf704d12797c8049135d12e77f35962a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFSRFDF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRH4Y3fjLf%2FR4YLA%2F5oWRvgKXugUROfpsuaP3aYbfNQIhALBMFVlXpSN5ZVAtrY5F3BJff6MQqbQDtK8tXrVfkbVyKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA9%2Bj%2FVo8qFORlcyUq3APJ7QawlVJFZmMvLjt1V3o%2BGUvhxzNN0pNVnOY%2BPJyAqaNRL5KFgagfCmp9I57xjrdd%2FaaH2drYT3Ojxwf%2FKRzm5LHtjHa%2FzY6OpTtNIQjLxL3ZTMywjuYqoWrNyfHqr0YHEPUvcIUPKIOTdCz7gGMhu6pxmiuOzWkmEqtT1gUZ5UuEFWywtXvUGDgj9CZjJeIPnuQ1fAINU4K7LVpR91aw1u1%2Fx0RNvGyW4W%2F5iyb%2FijKJsDp%2BfMp4qb2Txv%2ByoiK94OzeQNhKTcTXS8tZoyYr8m2hBan2pI8QOSbiQPX4O9LmDFeWxr%2B%2Bg3qoj%2FwyEsCzBSl%2BQZr6uB45%2FrOGVDvcMIM44owozTQd5ACR9Up1xTOh65xLCqgax32LgHTLv8HrIEih1wgU0eM1m4YJU8MaQZDs22M8lcAHjd44HFQbFWq3nXP87Lvi2KYtjHkXYwOFtkDtT%2FEXjKQkSShn4pHAsJy2MUzvJXlQ9KVcNslHghIrWLsOKE3uPzwttZjg%2BTYhixZ7cilUpVo6CN0TZpkWkTXDdFJyI8ayDvvX3UP54063yOCW4fHNOlGTg0Da3vTJRJTI8Q5DOFUbhW9KI1S6Nwl9rtbsF5Jzp2RNSnCClFbEzd9BFRPJ1JtM7jC67tnJBjqkAfA6iP9xDb0i1F0qGCl8gxNkXZ5oaq0yIYRQDGdDxrQ3Oq7JRC12FkQGJQkVo3CZDvVKQ6St1PsndfAuLPGYxRb3yFYKq%2FuUa5CcxwMbE2cq9VECQtYaTJmOltwC31MIZZIHNh29Y65m8lwMSU8BFT5Dwteg3yOq83hG04ZHsWVi35Dts%2F8VxSOBj7zGZ1iXpV6ok8BjxpPf1WUCzNpphxwQiDMx&X-Amz-Signature=9e4e93924df346e7920ba21d7a240f0661addceb311b5da5fd39caf52a5afe0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

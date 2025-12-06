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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHQ6NNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMDCTPLxn1U0SwpOjZkDTeUZmWIZfKW9%2FGEV110NpwIhANZq%2FGjSXPQjvAagjGMmJN3LPhAio0NudY5YUn0W%2FGstKv8DCHUQABoMNjM3NDIzMTgzODA1Igyiwcd9TM%2BqKyFgOpIq3APyY0QeanHcExENapYOyd%2FUsseRee38dUCDV0TxCWrUQbOg3eEe2mfIjbBjJ6vNUNd2otLtV%2FJoMg8OHoyvB08ZHOn8Ic%2Bo2kbShNHaf9CABhUL4obxYzbrepzsWEy0j2E7ibTKZzy4cB9kNgbUkn3R%2B0ijYs53N0z7ap0LDrc5RHxdrUnEF0J5AqHDQS0Ww6O6AhAvYiV06LKyg0cv7Oqi2j9t1gw8zLCYhNO%2FNfOgbPzqwGDbMdhkeZmA4A1yDdKxq%2BfUwutAc2Rh3x29JGLkzwoj3%2FueU5flbWIRpF0K%2FcblxS2ZPS5Zj%2F1i9pY8arXlKqYsSEkIto3KwNKwVnSum3iqKKU1lqG91H8wDBNVUYzuj1Une3PKYEO3oTKXz2PYAXX%2F0J087UeCUOaJmhf%2Fpa4Ct93NTwUspQlBBb0tlLwq%2FEf%2Btq6%2BWhwz%2Bf3q9CMt%2FjLvdNMuzgXw7%2BN1EAhHM5m3KZiDtJTN3mcwWqxMePnH80LdCk1D71Y2IbvAaKm%2BDQ2wsTL2oR9zs0mYpnWkunJQTWP2d0hv2zFeO7PFOMf1x3bkW0b7locZRyOoA5qgXb3UQ1NTl6WJvGchPqRa4zYGJ%2F0Fz6DN2QjYICi%2BminY7mrtG7HoBJbZqzCxptDJBjqkAQgcpCg%2Fs6%2B6YLPCOjb3rLmRG3LQodQmtluhYQRl07VPkB2Csd1KZIZ%2BV89SG%2FSYWTL8qUEPq8d37c2kNTl%2FaAeA%2F5B5cD9njxjSu7Y01yniAhjllk6AC8UMySf1fwuNMIRzP3cfOCQqIo9Le%2B4PI%2BUPUtdokCVRGV1WgTZ0gV9Jub6rf2Z6iQiikZznQQWAltmf9D3%2BVynpq5giZCp%2Bm2E3sqbK&X-Amz-Signature=13b82e3279fb2362a94076780af45ab83e7f7203cdfc8b55d598196ef3ab562c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHQ6NNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMDCTPLxn1U0SwpOjZkDTeUZmWIZfKW9%2FGEV110NpwIhANZq%2FGjSXPQjvAagjGMmJN3LPhAio0NudY5YUn0W%2FGstKv8DCHUQABoMNjM3NDIzMTgzODA1Igyiwcd9TM%2BqKyFgOpIq3APyY0QeanHcExENapYOyd%2FUsseRee38dUCDV0TxCWrUQbOg3eEe2mfIjbBjJ6vNUNd2otLtV%2FJoMg8OHoyvB08ZHOn8Ic%2Bo2kbShNHaf9CABhUL4obxYzbrepzsWEy0j2E7ibTKZzy4cB9kNgbUkn3R%2B0ijYs53N0z7ap0LDrc5RHxdrUnEF0J5AqHDQS0Ww6O6AhAvYiV06LKyg0cv7Oqi2j9t1gw8zLCYhNO%2FNfOgbPzqwGDbMdhkeZmA4A1yDdKxq%2BfUwutAc2Rh3x29JGLkzwoj3%2FueU5flbWIRpF0K%2FcblxS2ZPS5Zj%2F1i9pY8arXlKqYsSEkIto3KwNKwVnSum3iqKKU1lqG91H8wDBNVUYzuj1Une3PKYEO3oTKXz2PYAXX%2F0J087UeCUOaJmhf%2Fpa4Ct93NTwUspQlBBb0tlLwq%2FEf%2Btq6%2BWhwz%2Bf3q9CMt%2FjLvdNMuzgXw7%2BN1EAhHM5m3KZiDtJTN3mcwWqxMePnH80LdCk1D71Y2IbvAaKm%2BDQ2wsTL2oR9zs0mYpnWkunJQTWP2d0hv2zFeO7PFOMf1x3bkW0b7locZRyOoA5qgXb3UQ1NTl6WJvGchPqRa4zYGJ%2F0Fz6DN2QjYICi%2BminY7mrtG7HoBJbZqzCxptDJBjqkAQgcpCg%2Fs6%2B6YLPCOjb3rLmRG3LQodQmtluhYQRl07VPkB2Csd1KZIZ%2BV89SG%2FSYWTL8qUEPq8d37c2kNTl%2FaAeA%2F5B5cD9njxjSu7Y01yniAhjllk6AC8UMySf1fwuNMIRzP3cfOCQqIo9Le%2B4PI%2BUPUtdokCVRGV1WgTZ0gV9Jub6rf2Z6iQiikZznQQWAltmf9D3%2BVynpq5giZCp%2Bm2E3sqbK&X-Amz-Signature=7a8f2ba21cfdc1c0a8deedc89e116694f69b2f1f231cfde239358f31b34fadb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

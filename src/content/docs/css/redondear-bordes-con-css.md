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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622TY6BUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6L6oAy8bM325cYO01sIjcbFEEM1cgw8t6gWd0r7PxAiEA88h7VuPBkBxpFri5%2Bpa7LHf71gw6zSOulw%2BQrNZxoCsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCKHwop%2FhkQdvl6zpCrcAz4oCE0ntnzXuCps5juUND%2F7mt3kgEZ8jnX3tIohSkefhRakfE0Gu2t0rFsFXZqz7KhVhViR%2FWXNekR8VNl9Cg76I9aciwEN%2FjgIDFz0Xl1HgiNvHJLY4X%2BeE3PP6%2B7%2BJmJ6utnuD3Jnbexv4YZQVzWwQKpG9wsfqKGxFwNIZg3zk9W6MenNaLsAs4oZlJLTgahOnuKnAbaFch%2FM6FvXn1xY4VlypscmEynY%2FgvXedgZG6PRmSNITx6jaWGM63ihoMZ%2FF1ZjXGM8OJO0zspufT5%2FXnSb0lY7gRy3BNyic%2BzIx7pKu9iWdQQdNrH30czTVvRxED5YYH5fDg7ym8Fzc5iwPlg2D6%2B7WnvMdvhPzffwN1jFZDIOO4hyPs2pe5a7H2LaepWcs7uLBqD8MW9aHq0ijgpHDx9%2FGkJYUf55VWFdq4W1UNxXQnIzs0wkICA1Xued0AGJ%2Bpa%2BM09EqRqcuycQAKGozcoQSEF%2BGSHeVLyvBlHEB9351s%2BcvK7JZs2gtNro39%2BwdgNihIVS26JlL1gQedvpKwvTYWJQbe2xr6jMw4hCBeRYgcvwqphkFcUS3%2BKUuqQMr9kJlsI%2Bj1LkBcEGbn672Kv7t9OXKhx5CCxClX1uZGXuWCPuRTarMKKozskGOqUB2OSvO1AOSsTKX5n0StFxErfGf5vx784%2BLhL%2BFOX%2Byrvm4huk748WeQKir69x9o53D9bJrggbGZdJO4kgIQmCIOJA5rtlvozjeWVZxWYJGehQZp%2BCA4canpvzr1dOhPRBzeOdICIWu6v3JbiFsfwTCKS7zQqnLkNkuQjF8E0iZB58%2Bg1xX%2Fj2w8o%2F346BfpIviFSnyXH4yXML3loNlzYjEDjxxhK1&X-Amz-Signature=1244a9a48c1fb09e4fa8702fc2abb0d9c410702d15103018a1453ad4a9d2165f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622TY6BUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6L6oAy8bM325cYO01sIjcbFEEM1cgw8t6gWd0r7PxAiEA88h7VuPBkBxpFri5%2Bpa7LHf71gw6zSOulw%2BQrNZxoCsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCKHwop%2FhkQdvl6zpCrcAz4oCE0ntnzXuCps5juUND%2F7mt3kgEZ8jnX3tIohSkefhRakfE0Gu2t0rFsFXZqz7KhVhViR%2FWXNekR8VNl9Cg76I9aciwEN%2FjgIDFz0Xl1HgiNvHJLY4X%2BeE3PP6%2B7%2BJmJ6utnuD3Jnbexv4YZQVzWwQKpG9wsfqKGxFwNIZg3zk9W6MenNaLsAs4oZlJLTgahOnuKnAbaFch%2FM6FvXn1xY4VlypscmEynY%2FgvXedgZG6PRmSNITx6jaWGM63ihoMZ%2FF1ZjXGM8OJO0zspufT5%2FXnSb0lY7gRy3BNyic%2BzIx7pKu9iWdQQdNrH30czTVvRxED5YYH5fDg7ym8Fzc5iwPlg2D6%2B7WnvMdvhPzffwN1jFZDIOO4hyPs2pe5a7H2LaepWcs7uLBqD8MW9aHq0ijgpHDx9%2FGkJYUf55VWFdq4W1UNxXQnIzs0wkICA1Xued0AGJ%2Bpa%2BM09EqRqcuycQAKGozcoQSEF%2BGSHeVLyvBlHEB9351s%2BcvK7JZs2gtNro39%2BwdgNihIVS26JlL1gQedvpKwvTYWJQbe2xr6jMw4hCBeRYgcvwqphkFcUS3%2BKUuqQMr9kJlsI%2Bj1LkBcEGbn672Kv7t9OXKhx5CCxClX1uZGXuWCPuRTarMKKozskGOqUB2OSvO1AOSsTKX5n0StFxErfGf5vx784%2BLhL%2BFOX%2Byrvm4huk748WeQKir69x9o53D9bJrggbGZdJO4kgIQmCIOJA5rtlvozjeWVZxWYJGehQZp%2BCA4canpvzr1dOhPRBzeOdICIWu6v3JbiFsfwTCKS7zQqnLkNkuQjF8E0iZB58%2Bg1xX%2Fj2w8o%2F346BfpIviFSnyXH4yXML3loNlzYjEDjxxhK1&X-Amz-Signature=d0560dd620acf80b7f42511b7cb23c33c9991be37444d65e3370695764af0455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

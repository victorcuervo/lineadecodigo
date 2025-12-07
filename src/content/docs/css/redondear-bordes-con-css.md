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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBJTBCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zr6aAmhnmvJqrJDYj46H4i51IU0G%2FGA8WXDOuB0TGAiAzSM%2BfG0jBKTTdUknpktd%2FnFhqkNRvYPRfge%2FXMLsbNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36jkyUiQaiFaBKeYKtwDPdge%2BGlyeBEn3k0%2F51KBk39VvsJZZ9szZE5cNFkEF4iN%2Fl%2BI6f9uYf3gBicoDnmiingaLBu3S5LFZYz3ECD2xkO0dK0Y1XJKipH7az17zN1jCW90rqUlvbfUtmoVfIfslzDRPowUwkBCzYSdxK7SGDH0lT2n27yxdmbFsgSLdfaIBC7p%2B6m8IBkb%2FRkjjBmV9jh7dt9xi1rUH5FTGyBi7sgTnpMzcCOrpM%2F%2FQ19e3id%2Fehr%2F28u16GqgF3njTRfd3NWwFnyltYPD4KA9BQPFE1QyDdrCWxFQF6JLg212RVNRwVLw5o6nXFIAY9q7ztJ5BUMtIqeuu%2FS6Jw0%2BBybYK%2BAAuiybtYsqi1vBglrz6pOo02jrRgO8HPdg9GpQ0YO65MeTN1G97fAVYy84btlyuHsVSabu37tNh%2B%2FIY0GxLpAeAh7tNh5RE1ofzM1nLrvBge36%2BaARwBI%2FsGXxuyz1fqWJUCfi4yRrCDWVnfb3HSgVlS24wh9dB%2FQHhXtOZIAzJYTe79%2FHWERw0DLKFQjNxYX8TmYYWYXj0m4qu3cnYxZokNYOU8fA9qEr%2BOAtyuVXPKwe3xVgsUgKwsjCo%2FZgbcPmXD5uZ9D4nvVWy5o7X9CK4MrFERuJbB%2FjQvUw1f3SyQY6pgFE2k9rqBxOQgoW5gWtpOrUTt7QhZ9%2B8cnn1%2BcHJWTr7fylomRE%2BIkWjIYG4ZaCB4sKNBdohZ8zpIxewwaDuK2em0yYEN0%2BJ27D6EaLMopZ%2BWJXcf63vlbKhpLwuFzPNDcAYLzTb2dROoDJ08QrMOgwjFrjGKG%2FENwkuE99D%2Fdh%2BWcRSUOGLRm5ROcczcGV0xPUpj5I%2FaRPcNqirDRU3y4zOeZcYzeV&X-Amz-Signature=d59aa0accb82ddd3412480e97d30a74388278b59c08c41c48ded78d4ebade43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBJTBCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zr6aAmhnmvJqrJDYj46H4i51IU0G%2FGA8WXDOuB0TGAiAzSM%2BfG0jBKTTdUknpktd%2FnFhqkNRvYPRfge%2FXMLsbNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36jkyUiQaiFaBKeYKtwDPdge%2BGlyeBEn3k0%2F51KBk39VvsJZZ9szZE5cNFkEF4iN%2Fl%2BI6f9uYf3gBicoDnmiingaLBu3S5LFZYz3ECD2xkO0dK0Y1XJKipH7az17zN1jCW90rqUlvbfUtmoVfIfslzDRPowUwkBCzYSdxK7SGDH0lT2n27yxdmbFsgSLdfaIBC7p%2B6m8IBkb%2FRkjjBmV9jh7dt9xi1rUH5FTGyBi7sgTnpMzcCOrpM%2F%2FQ19e3id%2Fehr%2F28u16GqgF3njTRfd3NWwFnyltYPD4KA9BQPFE1QyDdrCWxFQF6JLg212RVNRwVLw5o6nXFIAY9q7ztJ5BUMtIqeuu%2FS6Jw0%2BBybYK%2BAAuiybtYsqi1vBglrz6pOo02jrRgO8HPdg9GpQ0YO65MeTN1G97fAVYy84btlyuHsVSabu37tNh%2B%2FIY0GxLpAeAh7tNh5RE1ofzM1nLrvBge36%2BaARwBI%2FsGXxuyz1fqWJUCfi4yRrCDWVnfb3HSgVlS24wh9dB%2FQHhXtOZIAzJYTe79%2FHWERw0DLKFQjNxYX8TmYYWYXj0m4qu3cnYxZokNYOU8fA9qEr%2BOAtyuVXPKwe3xVgsUgKwsjCo%2FZgbcPmXD5uZ9D4nvVWy5o7X9CK4MrFERuJbB%2FjQvUw1f3SyQY6pgFE2k9rqBxOQgoW5gWtpOrUTt7QhZ9%2B8cnn1%2BcHJWTr7fylomRE%2BIkWjIYG4ZaCB4sKNBdohZ8zpIxewwaDuK2em0yYEN0%2BJ27D6EaLMopZ%2BWJXcf63vlbKhpLwuFzPNDcAYLzTb2dROoDJ08QrMOgwjFrjGKG%2FENwkuE99D%2Fdh%2BWcRSUOGLRm5ROcczcGV0xPUpj5I%2FaRPcNqirDRU3y4zOeZcYzeV&X-Amz-Signature=f3d4f252ac6615f4e47614702e782271f121fdbf89f4ff0307e668697a5c78bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

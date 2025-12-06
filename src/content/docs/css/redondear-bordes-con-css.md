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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEB7Q37%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU328GtmaKr4mI06UsKzlZy7Gf1bmm%2F9tXgNJ%2BksJx6AiEArS0lUwoKs9RnkzKOC3T1Nyt12LPmY%2BRvOi%2F7FGLQPaMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFJsqmh%2Ba2W06%2FRsSCrcA8SNOqSRNDCmJ3Vd9zBbwPI3emf5IbWir7wZmy3Wak6zv%2FnJ1bMHFZ4YDglcOfI58WcTmCZQoaKRVwRX1OjgXp77SJOlODz8QNFKJHByCf6BBQVn%2F9%2FQMKK6sUXHvzxjxeG%2BNPVZS%2FQAZK1ozmbRTcojysTJltenB%2BL%2FiXU0IuJ5LTHsqUPW%2F0t%2Fa22cvySpoCR85TJXy7QglWwW6TpR1AWxu81Y0ZB3BaXhIoc1hftmux3MQ53skn%2Fb2cu5OuBcabW4x40x2MnylYK9%2Fo9yt8fAG8L6sP3ZhDPhSk%2BTgsTGBqs9cDSCg%2BWqN4gumknBs0IUNUgIac%2Bkx5HxKdSOBk7a%2BbC4e8DGKRp%2FnTHpjAwbJplfbx4fjql5QeaP4nhS5WaovmotQ%2FIAW1AgX6fBwYQiayxq3AFpNdZM2v%2FEqCXO2xVpCCudNyXNnaWUNcCm3ihEPoHg03bUXKFa1ugylLlogApwBD00DSSWhXkR7t0RVuC1devrJjT67IRnqdC6GaJqG0YKkkaVknkaHTOMa8QB98McSdZj%2F2NEdPe1A2obDn8lm6ewDPzd1uLhNDRduH2NyF11TjPEWq%2F9dWKZlfxPul6xbyAlzLhVNt7a9%2FQu74fCLffAkAenswciMN7dzskGOqUBr8TON%2BYE1wStH%2FUbSkZdritM09jp7JiIvRhluobD6w3Qv9NZtLrFaDbHNTMQYYRwUYRR36cYLp6VOmBuqb%2F0t1H6uxO8kE0EZXYAy4ilYzjGj9Tm1MCWP0onnBgYOGCFVIh9qEwgLTDuYXFYMZA6o03Xztcf8YgjJk9z7fJSJwVKR8%2FUbVXWjLilR7pX%2BKUxSpQf89Vt7NKz%2FZWgxFX3i5ZvGL2Y&X-Amz-Signature=bec248d0d72dcd9a1e3a8349b036033e6286a46243b954dbd3dde41798c1283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEB7Q37%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU328GtmaKr4mI06UsKzlZy7Gf1bmm%2F9tXgNJ%2BksJx6AiEArS0lUwoKs9RnkzKOC3T1Nyt12LPmY%2BRvOi%2F7FGLQPaMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFJsqmh%2Ba2W06%2FRsSCrcA8SNOqSRNDCmJ3Vd9zBbwPI3emf5IbWir7wZmy3Wak6zv%2FnJ1bMHFZ4YDglcOfI58WcTmCZQoaKRVwRX1OjgXp77SJOlODz8QNFKJHByCf6BBQVn%2F9%2FQMKK6sUXHvzxjxeG%2BNPVZS%2FQAZK1ozmbRTcojysTJltenB%2BL%2FiXU0IuJ5LTHsqUPW%2F0t%2Fa22cvySpoCR85TJXy7QglWwW6TpR1AWxu81Y0ZB3BaXhIoc1hftmux3MQ53skn%2Fb2cu5OuBcabW4x40x2MnylYK9%2Fo9yt8fAG8L6sP3ZhDPhSk%2BTgsTGBqs9cDSCg%2BWqN4gumknBs0IUNUgIac%2Bkx5HxKdSOBk7a%2BbC4e8DGKRp%2FnTHpjAwbJplfbx4fjql5QeaP4nhS5WaovmotQ%2FIAW1AgX6fBwYQiayxq3AFpNdZM2v%2FEqCXO2xVpCCudNyXNnaWUNcCm3ihEPoHg03bUXKFa1ugylLlogApwBD00DSSWhXkR7t0RVuC1devrJjT67IRnqdC6GaJqG0YKkkaVknkaHTOMa8QB98McSdZj%2F2NEdPe1A2obDn8lm6ewDPzd1uLhNDRduH2NyF11TjPEWq%2F9dWKZlfxPul6xbyAlzLhVNt7a9%2FQu74fCLffAkAenswciMN7dzskGOqUBr8TON%2BYE1wStH%2FUbSkZdritM09jp7JiIvRhluobD6w3Qv9NZtLrFaDbHNTMQYYRwUYRR36cYLp6VOmBuqb%2F0t1H6uxO8kE0EZXYAy4ilYzjGj9Tm1MCWP0onnBgYOGCFVIh9qEwgLTDuYXFYMZA6o03Xztcf8YgjJk9z7fJSJwVKR8%2FUbVXWjLilR7pX%2BKUxSpQf89Vt7NKz%2FZWgxFX3i5ZvGL2Y&X-Amz-Signature=d0440de2f9e2009bf96fb41d9e852f3a01ab502e5c0a1809b48e663ae399c67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

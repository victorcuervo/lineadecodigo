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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667OZUPDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLAjR1xQBNPhaU7cpGjeQrEzbZxoJ5BUH5UrKnc32OiAiEAvi4TX6w317awn%2BSAQcs2bVKqfpjA4of2ABTX1C4DzGsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGl2X6W8LTDA2QjcwCrcA9irLq1jN5nsuNYW5d86F8pgsrG7TaQyovGdYPEDdL5jBx8Vx0VLn%2B8ZqI1ov6qhGQvjpMjWY8FC3Vw23sgv6zOm%2F749NpMfj7Zq%2FDLU0I%2FaDm%2F41kVsY%2Fdz3aEMjfR4F9nTZJZfH%2FAhzck8BP%2FB97gPGQUabNzC7xBZMI3viYqnAmEFXoqtH9NUbvkbzKz%2FyBzvHvw0zH5ZdUqS4pYluRZItXA9tL%2Fr4XP7%2F3eQWc0SrUuzBxjQwWLm6Ris3YUZM1qbbx%2FkG4Lq41sU6R4wu0PwXAwvWtXkPeqs6EeijR%2F6hmbRwavq%2BAMOT6JDAr%2BzKIwGu5gzx94WIWgC2Nf%2F4i99y04Pz%2BunWDC5FJA%2B6vbm5PPEnPuxBkJ7WsJ3JcftB%2FbftsxRUAk1UpSufXfLifUoiXni0BxQYxUcpu%2BSVycc46RjUHELDMHubFR2gvDxny6S9io2b%2BMtQ6oBVB498vP9NJf1pOfGRVEZTR%2Fzjww3bOKG3knRIXU7UtNPhLZ8lgN7zm9kMO1Z6Hc6x1d49r6hy9SUz7NknIYPi6e5P2QCaQQuPDcmo5rW3ObDPLaKVw%2F%2FefYPUNLjPQ1%2F3eicP8M63cJBKRCts%2FGDSGHPZy5TNqqUlmHnPLQJOdT3MPLeh8oGOqUB5Whv8xi3qrU54YwZ8GEg49JzeXuasv4L7UUoKNfdUq4ztBC5V8ZTKN8M7KCXyJYWs46hE9%2B7v38NusZNd%2BoVMFFOieK27u%2FQIIfcjxXuu1RaqFiMtb19qUYD%2B6lSDHrujCJKbAaHD%2BLaG21CFNLRPvRJfLvHNC2eettypHu1t75yvxKZLxlIIb8LuUUaHOMLGFxHOtwt54F6g%2FR2%2B8M2pk6aiwq%2B&X-Amz-Signature=5f9bd318b44c0ab741cd51a4b40bba3fed9dd8122fcba8e84b37a2ab0ddc14d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667OZUPDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLAjR1xQBNPhaU7cpGjeQrEzbZxoJ5BUH5UrKnc32OiAiEAvi4TX6w317awn%2BSAQcs2bVKqfpjA4of2ABTX1C4DzGsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGl2X6W8LTDA2QjcwCrcA9irLq1jN5nsuNYW5d86F8pgsrG7TaQyovGdYPEDdL5jBx8Vx0VLn%2B8ZqI1ov6qhGQvjpMjWY8FC3Vw23sgv6zOm%2F749NpMfj7Zq%2FDLU0I%2FaDm%2F41kVsY%2Fdz3aEMjfR4F9nTZJZfH%2FAhzck8BP%2FB97gPGQUabNzC7xBZMI3viYqnAmEFXoqtH9NUbvkbzKz%2FyBzvHvw0zH5ZdUqS4pYluRZItXA9tL%2Fr4XP7%2F3eQWc0SrUuzBxjQwWLm6Ris3YUZM1qbbx%2FkG4Lq41sU6R4wu0PwXAwvWtXkPeqs6EeijR%2F6hmbRwavq%2BAMOT6JDAr%2BzKIwGu5gzx94WIWgC2Nf%2F4i99y04Pz%2BunWDC5FJA%2B6vbm5PPEnPuxBkJ7WsJ3JcftB%2FbftsxRUAk1UpSufXfLifUoiXni0BxQYxUcpu%2BSVycc46RjUHELDMHubFR2gvDxny6S9io2b%2BMtQ6oBVB498vP9NJf1pOfGRVEZTR%2Fzjww3bOKG3knRIXU7UtNPhLZ8lgN7zm9kMO1Z6Hc6x1d49r6hy9SUz7NknIYPi6e5P2QCaQQuPDcmo5rW3ObDPLaKVw%2F%2FefYPUNLjPQ1%2F3eicP8M63cJBKRCts%2FGDSGHPZy5TNqqUlmHnPLQJOdT3MPLeh8oGOqUB5Whv8xi3qrU54YwZ8GEg49JzeXuasv4L7UUoKNfdUq4ztBC5V8ZTKN8M7KCXyJYWs46hE9%2B7v38NusZNd%2BoVMFFOieK27u%2FQIIfcjxXuu1RaqFiMtb19qUYD%2B6lSDHrujCJKbAaHD%2BLaG21CFNLRPvRJfLvHNC2eettypHu1t75yvxKZLxlIIb8LuUUaHOMLGFxHOtwt54F6g%2FR2%2B8M2pk6aiwq%2B&X-Amz-Signature=af6da788a4bf444aa4c9900e38db0e2bd397fd1a31b34c6fa310c800fe3fd8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

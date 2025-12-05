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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLMSTRL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2kj8LMUpCm%2F7VZdFdiV1PXpYMTPnjZsUAi%2FwbiQVZAIhAOk5pEkebWifasVQ3JLflob30StU7eIfwpybNdHJCNn0Kv8DCGYQABoMNjM3NDIzMTgzODA1Igyd0w6G1e49pUR4LbUq3APJy8Auu28k3yVB7UusGyuSi8vlR6urxC7TMZneQY8BIXo9AdFUREYsbGgCf8aPbCZ80mC%2B1nLjsqnmkG3sA5QXrHQPUn7ATf4KyNaPnhSOfrScrcgLSIZqgbqXSB3jAHACeLOpuocSdQakZ7nFRV9wRyeMreeSwAi9dkyUUoKp96yRqHrNmoqmLA5x1NPys0SySjmJy1BwAayzbjz1WojsXIVmyAXJa6OMgFuhcapek%2B2GCf62W4WvxteXi6vEXw0ynfIc9GcfKSjNvRQ85CcSH9KcQiMrTIo5p92q4nZUkf25JS%2FUBMGEjJVUnqM7DeQALnfbYpf6TMPJAelduByaQpPR7uoXh605SEsaU1l%2BVKh3H%2BzNRCExQHSnAoWufbU5ApKqtzchx6JIbkHOpih12SxZl68beXiUxKWAtt8%2F84odNnJXeZmygUb93sZrsCh04z%2Fah9GvTbwGhpc0mOYQhBilkY0mgmw%2BOcCgP5TYOeG0bw%2BoDaEA%2BEjD2RLvAHZv7uaRYSPt2nDcLii%2FkzaSYtTF8dZuafpsFPx6dIkJQXpF61ObltuyOIC4BLPev5HYL%2BsuDQHo7xbwxbqx%2FqmqYIFW3q6YjW0%2Bm2VrtU1aCC%2FP5%2F1xLCDtjqtStjDEh83JBjqkAWwGzQqWPjmhf4oGkxnxQUmyreZ5628DPCJncznF53tXa553gS4dn6T5Cl8wu8HxWXvi81lJ5VyCjthg21A2lfyqCvoOY21nB%2BmAtOy%2F%2FKCnzdMn8p9d%2FmmrOqyh2p%2FWfmLVLznQvEJ06rH7ODLqk6kLmuCoNy2YNQsnmN8pM0%2BqTGmYnMNE%2Fnrfwd4heiBgdugZg6kLYkyrrlJN8D0V0q29mXsE&X-Amz-Signature=b64eeedc5cd45538058add62a7c077a65e2730c8ffe50833a14576bf26a1a864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLMSTRL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2kj8LMUpCm%2F7VZdFdiV1PXpYMTPnjZsUAi%2FwbiQVZAIhAOk5pEkebWifasVQ3JLflob30StU7eIfwpybNdHJCNn0Kv8DCGYQABoMNjM3NDIzMTgzODA1Igyd0w6G1e49pUR4LbUq3APJy8Auu28k3yVB7UusGyuSi8vlR6urxC7TMZneQY8BIXo9AdFUREYsbGgCf8aPbCZ80mC%2B1nLjsqnmkG3sA5QXrHQPUn7ATf4KyNaPnhSOfrScrcgLSIZqgbqXSB3jAHACeLOpuocSdQakZ7nFRV9wRyeMreeSwAi9dkyUUoKp96yRqHrNmoqmLA5x1NPys0SySjmJy1BwAayzbjz1WojsXIVmyAXJa6OMgFuhcapek%2B2GCf62W4WvxteXi6vEXw0ynfIc9GcfKSjNvRQ85CcSH9KcQiMrTIo5p92q4nZUkf25JS%2FUBMGEjJVUnqM7DeQALnfbYpf6TMPJAelduByaQpPR7uoXh605SEsaU1l%2BVKh3H%2BzNRCExQHSnAoWufbU5ApKqtzchx6JIbkHOpih12SxZl68beXiUxKWAtt8%2F84odNnJXeZmygUb93sZrsCh04z%2Fah9GvTbwGhpc0mOYQhBilkY0mgmw%2BOcCgP5TYOeG0bw%2BoDaEA%2BEjD2RLvAHZv7uaRYSPt2nDcLii%2FkzaSYtTF8dZuafpsFPx6dIkJQXpF61ObltuyOIC4BLPev5HYL%2BsuDQHo7xbwxbqx%2FqmqYIFW3q6YjW0%2Bm2VrtU1aCC%2FP5%2F1xLCDtjqtStjDEh83JBjqkAWwGzQqWPjmhf4oGkxnxQUmyreZ5628DPCJncznF53tXa553gS4dn6T5Cl8wu8HxWXvi81lJ5VyCjthg21A2lfyqCvoOY21nB%2BmAtOy%2F%2FKCnzdMn8p9d%2FmmrOqyh2p%2FWfmLVLznQvEJ06rH7ODLqk6kLmuCoNy2YNQsnmN8pM0%2BqTGmYnMNE%2Fnrfwd4heiBgdugZg6kLYkyrrlJN8D0V0q29mXsE&X-Amz-Signature=a04796f01865a605acabab20f5bf5bbf6ce67e2f0d14f443dd7b7fa81bef91de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

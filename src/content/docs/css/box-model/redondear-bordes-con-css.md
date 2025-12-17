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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4YKDRO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2ByY8Xa1gfeAJa%2BAWSNyvsclcp4ALO42gQuEF53IWKVAiEAwEWGpuKi71xvk1TAOppUoppxJR3jCRWQT32qArF3oN4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCjXWmUJLWTHWfIf4CrcA0WHn2aMfUquhDZPKUE76Y5FvcD21%2FRxJW703j06MsMH6CIlIboXVPHXCfXrondohPhk7tdsdN%2Flf7AnvnpM%2BAXPrOI6EOlEgkRPcXX73Tyj9i2J19kG5gPj%2F1Gg3Au7QJCe3av3r7MqOO7VvQ9j4PKZ6DgZjWFzW1MrsY5l2stDpZV5xCsTOWMiOWXBXpdsfiQt0PBo9xDCnJIyfNKFzhk%2B7x1buW%2FuOZ1FIzAnNMRNLbXNNTA7vNGJfYMdsmBD3uIMWDfzHmiZBN0HhchgSX2gox9tTeuXSDHKiSAumGutPiuytRkLfXVTm%2FKekkLTAJTnkJ9NecTHNnZzfapWcA3jYhl8NYn4n8fy6Vog9cx6JyzhUUIH%2BCbgQVMtsl7zT9R82abN172raKr4FXyLNJynYD6w71gTxv%2FVcQusVc03XFnlMsf4ISDkfpFW%2F60Zf%2Fjm8a6luWeA9CdfMB1gd0xa9mc1OgQNhW9%2FHiOfmoj0NDSLQmDhOQWZUptnqqFHrpdajOSluSfXq5dMNVOdHV9IXbWq5QYo8PE5u5on39hyXI%2BY4hWIeZcCko9Bt9niII%2BVzhQecOJbNwrHdHUOsKVXUi5yXM8m98D7sdEoY66N6JRSmR8DlG6ky4mGMI3qiMoGOqUBzdA3DhZXvLXY0SrFVVMfrE%2BIA92r0f6F3ljABs%2B3QlGkxuulUgK9oxwrIuto%2BgYUXERF42TVxJui0l7bQMaaMbFx5pq8GcwqcmJLQ6PetntBz6eaA8gXZHd2q1GGKS1Zje%2BKePKK1bHqbQQvaO6UbOza6Tw6N%2BrzjOpPvWhGKiEPlKXW371dX%2BE5kx1BewMKCI7KFrwQsf%2F9l3cnpT0XdwgKVn7R&X-Amz-Signature=6bd54f466e60a2585e937c0c6a26d530f2cbb7c6d5a297f4ac75093fe7b49afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4YKDRO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2ByY8Xa1gfeAJa%2BAWSNyvsclcp4ALO42gQuEF53IWKVAiEAwEWGpuKi71xvk1TAOppUoppxJR3jCRWQT32qArF3oN4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCjXWmUJLWTHWfIf4CrcA0WHn2aMfUquhDZPKUE76Y5FvcD21%2FRxJW703j06MsMH6CIlIboXVPHXCfXrondohPhk7tdsdN%2Flf7AnvnpM%2BAXPrOI6EOlEgkRPcXX73Tyj9i2J19kG5gPj%2F1Gg3Au7QJCe3av3r7MqOO7VvQ9j4PKZ6DgZjWFzW1MrsY5l2stDpZV5xCsTOWMiOWXBXpdsfiQt0PBo9xDCnJIyfNKFzhk%2B7x1buW%2FuOZ1FIzAnNMRNLbXNNTA7vNGJfYMdsmBD3uIMWDfzHmiZBN0HhchgSX2gox9tTeuXSDHKiSAumGutPiuytRkLfXVTm%2FKekkLTAJTnkJ9NecTHNnZzfapWcA3jYhl8NYn4n8fy6Vog9cx6JyzhUUIH%2BCbgQVMtsl7zT9R82abN172raKr4FXyLNJynYD6w71gTxv%2FVcQusVc03XFnlMsf4ISDkfpFW%2F60Zf%2Fjm8a6luWeA9CdfMB1gd0xa9mc1OgQNhW9%2FHiOfmoj0NDSLQmDhOQWZUptnqqFHrpdajOSluSfXq5dMNVOdHV9IXbWq5QYo8PE5u5on39hyXI%2BY4hWIeZcCko9Bt9niII%2BVzhQecOJbNwrHdHUOsKVXUi5yXM8m98D7sdEoY66N6JRSmR8DlG6ky4mGMI3qiMoGOqUBzdA3DhZXvLXY0SrFVVMfrE%2BIA92r0f6F3ljABs%2B3QlGkxuulUgK9oxwrIuto%2BgYUXERF42TVxJui0l7bQMaaMbFx5pq8GcwqcmJLQ6PetntBz6eaA8gXZHd2q1GGKS1Zje%2BKePKK1bHqbQQvaO6UbOza6Tw6N%2BrzjOpPvWhGKiEPlKXW371dX%2BE5kx1BewMKCI7KFrwQsf%2F9l3cnpT0XdwgKVn7R&X-Amz-Signature=5b5efd6a7edc0cdaa338ea42e2ec41b287d807ed7d08c287dbf42e97dcef3b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

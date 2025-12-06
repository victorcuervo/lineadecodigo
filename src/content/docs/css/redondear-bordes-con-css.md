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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWYRET5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVMwXs%2F6SB9u%2FB5pQpBqPeUp8NlSjeUmbmbAwmEIQzIAiANaSn9gg1i%2BETd31FhiJ%2BxrSx35fkAj1SOtEVxkTcWSCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMAmVcnbxt%2Fz%2FhtWmNKtwDsbTCZ4Wp8MxDzufmPgjZEJ0QBTf4xdOklv9XocJ4ZgaajcVtmVVg64qNG5Sa7yfU4if%2FbqJ%2BbtUmn5AixPc12LLftX4M4aiTJw3kq10%2BvaqIe1cZ2P0A3Pak9gSPkd6vkyt3LXZj%2FM1yvRlF9hVhRvDG2vQoRSaiqNH5KfvFYU46s0P8Cn5noUJsvdPDTNPOjOCJarGw9f8hk4N%2BRWqB4TIIii2kTHgoQg0puW0n3YQZXUtk57hTX65oQmcSoDdo3UxBKHifZD1no1IFYFxHIGubkmYSmnxlb99SWcCpTrZtGEEgP2XsrvFfNrKWP4IMSCWs0tLhVL%2B%2BFrhljPps5exjojfBgHmcnIPhFtXzC1P0FOF3gFNtMH6pg2j125AS4NQlSUmCQgF7WaqfWMuzXTrNL2lqEVhjnyKng%2FPCXWCQ8jrd03vsTF6ddfiO6WqI1t8oEsguw%2BDeN6oett26Fcf3TJZX8soDZUFkqziIBT8VcW%2FpgHS07x%2FrFXK1fE827VOpGdBQC5yMD7H5busRfa7DWugYPI2rPDSaBlg51hs%2BrwgWsoKfC3JgBP6D%2Ba1U9eo%2F1fgsLtkyQFDZwK7QJ4U%2F%2BBvWz7Jv2UPCKLKRdGJHzm0ogCZ6EJtdOhgwqN7OyQY6pgEoYUy4K7ZqO01OYqVRbcUtKYClMemwA220jIqoBAwcuLszQm6vraJYTw5R8GHZOT7ubQhgRc0oszgN9W9pBqV6zbDsZpeGaulo36AdeOqqXpzDHJr2kqsYoNbWe70JihwjAtcMOEQc1Zu1IAJBn5W9lGUOYfdhePmjMc8AJYRkkLlqd9iV5ydFcOF8Hm0uHk%2FF4bglPdSEtzLHz%2F5QT14d%2BxS%2B59ZZ&X-Amz-Signature=cbe21b44b104c377975dacfe7aa69bef407e7c1dca69627a24d618cc906ba11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWYRET5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVMwXs%2F6SB9u%2FB5pQpBqPeUp8NlSjeUmbmbAwmEIQzIAiANaSn9gg1i%2BETd31FhiJ%2BxrSx35fkAj1SOtEVxkTcWSCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMAmVcnbxt%2Fz%2FhtWmNKtwDsbTCZ4Wp8MxDzufmPgjZEJ0QBTf4xdOklv9XocJ4ZgaajcVtmVVg64qNG5Sa7yfU4if%2FbqJ%2BbtUmn5AixPc12LLftX4M4aiTJw3kq10%2BvaqIe1cZ2P0A3Pak9gSPkd6vkyt3LXZj%2FM1yvRlF9hVhRvDG2vQoRSaiqNH5KfvFYU46s0P8Cn5noUJsvdPDTNPOjOCJarGw9f8hk4N%2BRWqB4TIIii2kTHgoQg0puW0n3YQZXUtk57hTX65oQmcSoDdo3UxBKHifZD1no1IFYFxHIGubkmYSmnxlb99SWcCpTrZtGEEgP2XsrvFfNrKWP4IMSCWs0tLhVL%2B%2BFrhljPps5exjojfBgHmcnIPhFtXzC1P0FOF3gFNtMH6pg2j125AS4NQlSUmCQgF7WaqfWMuzXTrNL2lqEVhjnyKng%2FPCXWCQ8jrd03vsTF6ddfiO6WqI1t8oEsguw%2BDeN6oett26Fcf3TJZX8soDZUFkqziIBT8VcW%2FpgHS07x%2FrFXK1fE827VOpGdBQC5yMD7H5busRfa7DWugYPI2rPDSaBlg51hs%2BrwgWsoKfC3JgBP6D%2Ba1U9eo%2F1fgsLtkyQFDZwK7QJ4U%2F%2BBvWz7Jv2UPCKLKRdGJHzm0ogCZ6EJtdOhgwqN7OyQY6pgEoYUy4K7ZqO01OYqVRbcUtKYClMemwA220jIqoBAwcuLszQm6vraJYTw5R8GHZOT7ubQhgRc0oszgN9W9pBqV6zbDsZpeGaulo36AdeOqqXpzDHJr2kqsYoNbWe70JihwjAtcMOEQc1Zu1IAJBn5W9lGUOYfdhePmjMc8AJYRkkLlqd9iV5ydFcOF8Hm0uHk%2FF4bglPdSEtzLHz%2F5QT14d%2BxS%2B59ZZ&X-Amz-Signature=c7689b88749f3cc1ae3d0321bb4235ff74c777216a01ed7a62ae8e1d78c6515b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

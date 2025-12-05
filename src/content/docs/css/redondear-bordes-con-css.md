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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MSZG4U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4sej%2F1jkFKW%2B84E3tZSXaoJhOganjv%2Bo4Eeu32bSXAiBesYktllwvq6Q6tzGdTc5Vkuu8jrpDZxYhvDyUF9S%2Bcyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMr%2F7caP0ygWteOLzFKtwDu%2FVk%2BmGGqoPZIncJUacu1is1y0BpfZOa%2BIuXm5ZqoEfrMnvrzCkaSb2vTPKqs3kEf63u8mljlIKXURld2XKsMLqkpBYLwY8llmNZBeZtE3nOMAt1TkeqalKGVeWSLdqgQp3gKcM73ItVhU%2FCsSFqx%2F4QHDArFwdBTIbWX8e1jbP10kslooxyo46rsvRVCEZlJn%2Ft%2BKgUWDYb5EswwjDop8avFrQJGkb6C7aJfnilWbY1EPVIu%2BcX4rpzjqCIg791Q%2Bej2BMzYlIMRE6nJaWapaKZ48OR%2FZ%2FAqi1jYwbwIC7ilqd2AkvVsXnyTvr0EbX%2B5caBnve44lbZigPEIiEx5%2F3RZtUiJnKL0%2B8GsSpbkz9vnJ2f8CV338y4QqNtVg%2Fl%2B0%2By5RO6a5FyoCp1MsVwrbIbyGqcqR01o6jXMfp8sfn1eyGlXnEH3g9Af5aPuj6490wRzlgRQRykFEiVOlFiCZ36tQ%2BcHTBj5uxSsEy2sGyoblRXpL%2BtlIxZfyVPHy%2BCCxRHtlZ%2BIXYnoZaPNOMPuavue6bRjqWe5EGZ1K6TF26vpkpY9urOKoJNRMha5aYUz1qFpNlOsh5leQfU82GtVibmWU9g7BMb8ZVAyE%2FBDZGKh1UaIICWbKaSnzswi4nNyQY6pgFY2905qGVmFvK4wE5hQK2m%2Fw3Ns3XPW74QosuuJ1s7dk0sVgq%2BOYyAW1ZImbi6OhNoRti%2BT%2Fq%2FOiws99SQxVMyQJM1%2F0%2FYHLOP4GTOexsIpvnDnVNOIXnQIbAggQ3HPfTb%2FO7Jmutp56GJSsLRwr%2Bd7vlHdThR4q3A3ybIf526%2F6xIiDoZri08%2F49ii4xI9Z3KzQ9Aj%2B6sUv7XjtWhr6E6opkTxmHE&X-Amz-Signature=f35002e9cbd0bb97de68c62d259ed3ccabd2697fc91309d72d1678eb527eb986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MSZG4U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4sej%2F1jkFKW%2B84E3tZSXaoJhOganjv%2Bo4Eeu32bSXAiBesYktllwvq6Q6tzGdTc5Vkuu8jrpDZxYhvDyUF9S%2Bcyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMr%2F7caP0ygWteOLzFKtwDu%2FVk%2BmGGqoPZIncJUacu1is1y0BpfZOa%2BIuXm5ZqoEfrMnvrzCkaSb2vTPKqs3kEf63u8mljlIKXURld2XKsMLqkpBYLwY8llmNZBeZtE3nOMAt1TkeqalKGVeWSLdqgQp3gKcM73ItVhU%2FCsSFqx%2F4QHDArFwdBTIbWX8e1jbP10kslooxyo46rsvRVCEZlJn%2Ft%2BKgUWDYb5EswwjDop8avFrQJGkb6C7aJfnilWbY1EPVIu%2BcX4rpzjqCIg791Q%2Bej2BMzYlIMRE6nJaWapaKZ48OR%2FZ%2FAqi1jYwbwIC7ilqd2AkvVsXnyTvr0EbX%2B5caBnve44lbZigPEIiEx5%2F3RZtUiJnKL0%2B8GsSpbkz9vnJ2f8CV338y4QqNtVg%2Fl%2B0%2By5RO6a5FyoCp1MsVwrbIbyGqcqR01o6jXMfp8sfn1eyGlXnEH3g9Af5aPuj6490wRzlgRQRykFEiVOlFiCZ36tQ%2BcHTBj5uxSsEy2sGyoblRXpL%2BtlIxZfyVPHy%2BCCxRHtlZ%2BIXYnoZaPNOMPuavue6bRjqWe5EGZ1K6TF26vpkpY9urOKoJNRMha5aYUz1qFpNlOsh5leQfU82GtVibmWU9g7BMb8ZVAyE%2FBDZGKh1UaIICWbKaSnzswi4nNyQY6pgFY2905qGVmFvK4wE5hQK2m%2Fw3Ns3XPW74QosuuJ1s7dk0sVgq%2BOYyAW1ZImbi6OhNoRti%2BT%2Fq%2FOiws99SQxVMyQJM1%2F0%2FYHLOP4GTOexsIpvnDnVNOIXnQIbAggQ3HPfTb%2FO7Jmutp56GJSsLRwr%2Bd7vlHdThR4q3A3ybIf526%2F6xIiDoZri08%2F49ii4xI9Z3KzQ9Aj%2B6sUv7XjtWhr6E6opkTxmHE&X-Amz-Signature=534da5c73e81d4b8d95ebb61bf72a434f7e4c3472b4bdaf74d48d618f393310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

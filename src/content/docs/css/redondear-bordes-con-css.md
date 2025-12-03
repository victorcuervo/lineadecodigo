---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCHNSQW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCX4rMyoJaf%2B72ihFbxZLrTOf5HAVSHlFwIv8YW4c3WeQIgbG0TGyLw4O%2BpgnR7QMQxOyOtnrk4IaW13MGPXhGFZDIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLPUhPxjt9uQHi8miyrcA1SZq8AYTKa5%2BUx9VjThJvm%2BGTt9dzHJyl3MKslTWVgOdxp85fX0Wh7jC5c9JMmzWWRy%2Bld1Q%2BB8y6suYTuX4yT9iz0VS%2BXWVcbws4KJDcHv8MhMACg30ABGgFu3opbgZmA%2FEIQZaxabWDdRDd0XdKcBqC0RQ2q8L1BTgUDxEEZvsaSL1eV5sVDycWI3oUvtGydwDWdsyik3judFUMvyZYFiVZPetUCEVtmjnboX5JREIS%2B87JIJac%2FUkT4v7BNyB1j10J1sY3o5B6lY0b4KpGx%2BSlx76g1h9ouZCPqLDU2as1mbEPRXXv9WqMEThI1oCRvxEWFZQD3QvjDdTwdYGDa0tg6ig32K741FjDCF6clwuUrnTdn3BhR64xD8LamcbWBF6tu5ImlO8AbO3rzyH%2FvLpMdvpKjQmuAgZW6c3RrYPCseiHSOfJrhDGiFI8FVyAO4gD1Hmv9JWoX5iejVfkigPi6%2F6x954Hnz0FG00OVn%2F2r5a3V8PyURO7mkyTgfR1Rq102SY8kjDayF67W0kxvXdKCO%2BDKXL7lv3ILzIa1ekYfArvPHXgJuQLffOvqWQ5J23dzpYxN%2BXgUazs66htr%2Bcm2ym8iIY%2BG3HIcLD%2B3ad4K9OOeveFe5VyOhMJH4wskGOqUBklPomX4jUHAamQr36hUoMDDj6MLcKRRJpXyfeKlbe09faf8Zj7KnOwP512wium1yK87X%2B50u%2FcfEz%2Fegi%2B33kQVhjtnCPaunymHKLNU3PYy1gM1Mwjr4pLTQb5yCseRnUvUSUL6v3jIs5A6XmD8jxon4PNFs9DIPU87zEvHBKnUDIu9OqnbBSxUl7iJqvWouUvYJri9ieurMugRt%2BA6PF8C8KnU%2F&X-Amz-Signature=3aa3e86b3767aa58068027862f198fb4ca75fca4752f3c10fa0914bf6fd66291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCHNSQW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCX4rMyoJaf%2B72ihFbxZLrTOf5HAVSHlFwIv8YW4c3WeQIgbG0TGyLw4O%2BpgnR7QMQxOyOtnrk4IaW13MGPXhGFZDIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLPUhPxjt9uQHi8miyrcA1SZq8AYTKa5%2BUx9VjThJvm%2BGTt9dzHJyl3MKslTWVgOdxp85fX0Wh7jC5c9JMmzWWRy%2Bld1Q%2BB8y6suYTuX4yT9iz0VS%2BXWVcbws4KJDcHv8MhMACg30ABGgFu3opbgZmA%2FEIQZaxabWDdRDd0XdKcBqC0RQ2q8L1BTgUDxEEZvsaSL1eV5sVDycWI3oUvtGydwDWdsyik3judFUMvyZYFiVZPetUCEVtmjnboX5JREIS%2B87JIJac%2FUkT4v7BNyB1j10J1sY3o5B6lY0b4KpGx%2BSlx76g1h9ouZCPqLDU2as1mbEPRXXv9WqMEThI1oCRvxEWFZQD3QvjDdTwdYGDa0tg6ig32K741FjDCF6clwuUrnTdn3BhR64xD8LamcbWBF6tu5ImlO8AbO3rzyH%2FvLpMdvpKjQmuAgZW6c3RrYPCseiHSOfJrhDGiFI8FVyAO4gD1Hmv9JWoX5iejVfkigPi6%2F6x954Hnz0FG00OVn%2F2r5a3V8PyURO7mkyTgfR1Rq102SY8kjDayF67W0kxvXdKCO%2BDKXL7lv3ILzIa1ekYfArvPHXgJuQLffOvqWQ5J23dzpYxN%2BXgUazs66htr%2Bcm2ym8iIY%2BG3HIcLD%2B3ad4K9OOeveFe5VyOhMJH4wskGOqUBklPomX4jUHAamQr36hUoMDDj6MLcKRRJpXyfeKlbe09faf8Zj7KnOwP512wium1yK87X%2B50u%2FcfEz%2Fegi%2B33kQVhjtnCPaunymHKLNU3PYy1gM1Mwjr4pLTQb5yCseRnUvUSUL6v3jIs5A6XmD8jxon4PNFs9DIPU87zEvHBKnUDIu9OqnbBSxUl7iJqvWouUvYJri9ieurMugRt%2BA6PF8C8KnU%2F&X-Amz-Signature=b15e8134e0697143fb00677b7bde99ba915fc4e31c3efa1876542c12ece55a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

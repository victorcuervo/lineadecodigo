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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWL22M53%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZs1Ep22YzdvkRNLr3l6Qe6guxwnsYMNFX30sm4h7LJAiEAtxndeButPVxt2OO6JFskQlFCy%2FTVfVe%2BnAO6CycjS38q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJwmzA95t9ux8zusuCrcA%2FrtILQm0JqMoqa%2Bpd9FkDHvCqeSrYiNxK9FPejgCOfNBveRRO2Lx3jI5Jp8%2F7Yw5x94J8DAINTEfhJCwuc%2BQDwNw8WKQ1knjfKK6mLt6R5S3jAN0bUAVmKLrfDy3lKj%2F5qfk6pEXQ%2F1416PBsvDqN8SY11oNaUN73xnfu6zt%2F9imv8NuCtQDTbBHm98%2BhPQNhp%2BXAnL0twHkr6XfzDzbzUCU8F8NQOU7Mtbb%2FL%2BcnJond9shbf9REnSdiQPV463T7xHFsQM74fd%2FCM8t7oASAf68txufS%2F7HCyyX%2FrIxPe%2BFvt%2FkcDc5KTafhW5hQs3Cw6AGhXefu4bzz%2FkPBZUxpZwISzX8j1L864k7flEyNa0pq428vFFPkq7%2BPitmbgZXttsUgq4XbZUFFYSCmKYaZ0O545EckrFvape1XTwTjhrnHSQ1zFGrZCJ6DXRXtSCmov9xg%2BXWLP16oUf6ht0D%2FgY78MR6NFegILxO%2F%2BnpDZUmTo1JNAEUp9zvn%2F8XTX6cwgUIU462hoRoPiHiBcMEXOAQ4ww56nOUWVpz7UoryRdMMfak%2FtxZBLbkLp6%2B9QoQ6nJJz5lgmnun91Jm5JUYQLKkxBobj6%2F%2BBtBgUlBspsTfrL3zo3sq9MesX0NMPaLyMkGOqUB4JH48uea9J8VbML9niW0NLs41L7mfWBn2l1XoXbxEczDmEDQ30nml%2BROFqUwEXnVxVtjzd0gdncxcpeeqVadMkIf4x8lH9avYpZHI99ct7ETf2FwByhFUw1gthBEPbeWl4b75ZsD6JAYb9Drw%2FaI70IdXOePRdf3p8dH1yriKEqpuCTeGgQ4gnNelZ8T9jGp0n4nNSH2kxEFRsYcV1sQiWc6yP9h&X-Amz-Signature=bdc5590477e230a5656c5fdf3a1c694db12f65fef4efd7e37db4b89ce9540254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWL22M53%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZs1Ep22YzdvkRNLr3l6Qe6guxwnsYMNFX30sm4h7LJAiEAtxndeButPVxt2OO6JFskQlFCy%2FTVfVe%2BnAO6CycjS38q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJwmzA95t9ux8zusuCrcA%2FrtILQm0JqMoqa%2Bpd9FkDHvCqeSrYiNxK9FPejgCOfNBveRRO2Lx3jI5Jp8%2F7Yw5x94J8DAINTEfhJCwuc%2BQDwNw8WKQ1knjfKK6mLt6R5S3jAN0bUAVmKLrfDy3lKj%2F5qfk6pEXQ%2F1416PBsvDqN8SY11oNaUN73xnfu6zt%2F9imv8NuCtQDTbBHm98%2BhPQNhp%2BXAnL0twHkr6XfzDzbzUCU8F8NQOU7Mtbb%2FL%2BcnJond9shbf9REnSdiQPV463T7xHFsQM74fd%2FCM8t7oASAf68txufS%2F7HCyyX%2FrIxPe%2BFvt%2FkcDc5KTafhW5hQs3Cw6AGhXefu4bzz%2FkPBZUxpZwISzX8j1L864k7flEyNa0pq428vFFPkq7%2BPitmbgZXttsUgq4XbZUFFYSCmKYaZ0O545EckrFvape1XTwTjhrnHSQ1zFGrZCJ6DXRXtSCmov9xg%2BXWLP16oUf6ht0D%2FgY78MR6NFegILxO%2F%2BnpDZUmTo1JNAEUp9zvn%2F8XTX6cwgUIU462hoRoPiHiBcMEXOAQ4ww56nOUWVpz7UoryRdMMfak%2FtxZBLbkLp6%2B9QoQ6nJJz5lgmnun91Jm5JUYQLKkxBobj6%2F%2BBtBgUlBspsTfrL3zo3sq9MesX0NMPaLyMkGOqUB4JH48uea9J8VbML9niW0NLs41L7mfWBn2l1XoXbxEczDmEDQ30nml%2BROFqUwEXnVxVtjzd0gdncxcpeeqVadMkIf4x8lH9avYpZHI99ct7ETf2FwByhFUw1gthBEPbeWl4b75ZsD6JAYb9Drw%2FaI70IdXOePRdf3p8dH1yriKEqpuCTeGgQ4gnNelZ8T9jGp0n4nNSH2kxEFRsYcV1sQiWc6yP9h&X-Amz-Signature=4efbd2da1d2a486a9dc4b58cdbc7c2899fd2e59ad501f3ab756879dd9623913a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

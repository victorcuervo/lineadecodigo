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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QP3TVIJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUpTk2rC5g2LCyq7evXcjZB5Z5SNWX%2BMTIQ17jMQENLQIgI%2BDie5L%2BCfH6TtD63Bqxx7eVaUAswAyP7dXqLsOUXXIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEbbHch3tNjfZNWGuCrcA%2FtwiFGzx4wS%2Fqp%2Btq1pkqCe%2FGJjTO3HDrL4eQV3wr8TJIRy%2FM6gSSCdeQ5HnHNGivjbh9NiyNwFbQ1qWkqzcjPvNmqFCJ0TS3QfB2153ZcpvPKKmk%2BbmEwxk4IILD5PxZQ17v3R9B1XYoOYao3pdvv8xr7GHD%2BIi%2BjsYg5AMR9s2JcgWHcG7qEKDcbJJvO7fO8xqSQ%2BJzrKjSaErM1%2BAQIfzGh5n2zQL0QPX%2BE3tCBCxZjG%2BrY07OXzlIhrorJkrpZ4Y05zbhR4grPe8tnDoBLVLJsN7CtKlQE3etG6h54I5Q7v6ffDcaRbzyf8PDrtgXqs6OoGY6g4QG7wCF%2BlyJn9Nrc%2FcGXReOMgDxtAjnWhIfFSudhiL%2BTARHQyQVjBBIlW8JS21qQ8WSVFplwZ%2BC5XajSDZNBLyOs0xAdtHWdiEjR0CDoE6E3XbhOKkPo3BJslWbWtQZOPJYQWsfUqCDuDm7IO1xCyBEvMT7SD3VkZeZ743guLBkRr7E7FShkfLfAL0P1eZBTHCX8Yf0bUMk4NNRq2w4XBxfK%2FQ1LyNcoZT4dcF2CwaVcJX3Jq9IfBmCMalRYEvZgBAw7SXCDW8DKk%2FesXtHg5JQMnvs39fWwsgNH8fUY7SpuT%2Bz00MKuMyMkGOqUBmgxWk4hnoUPyj9a1QB9cBrDZNCYkxv3CRjTYdAHGkjq4fcLj%2F%2BIz06u7wdcnVagdT3oGsCph%2BcllxCy5Ik4uvH8jZ8WGS%2BXw7mi51u26oE5bDKV1K3lwFpvohLqXqWlMeSM4Mwu7c9HK0PiNP5TkeOU5zOh3aTZ2D3IEfmV8qxJU0fh6WbT8m%2BtWw2FEWw7oXnS7hAh7nT8yfkUxk9aYsy5Ax5Fe&X-Amz-Signature=7367e47b0846967008cb9908bcce2e8d26e160e0fea1e9b55a1653d58502b6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QP3TVIJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUpTk2rC5g2LCyq7evXcjZB5Z5SNWX%2BMTIQ17jMQENLQIgI%2BDie5L%2BCfH6TtD63Bqxx7eVaUAswAyP7dXqLsOUXXIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEbbHch3tNjfZNWGuCrcA%2FtwiFGzx4wS%2Fqp%2Btq1pkqCe%2FGJjTO3HDrL4eQV3wr8TJIRy%2FM6gSSCdeQ5HnHNGivjbh9NiyNwFbQ1qWkqzcjPvNmqFCJ0TS3QfB2153ZcpvPKKmk%2BbmEwxk4IILD5PxZQ17v3R9B1XYoOYao3pdvv8xr7GHD%2BIi%2BjsYg5AMR9s2JcgWHcG7qEKDcbJJvO7fO8xqSQ%2BJzrKjSaErM1%2BAQIfzGh5n2zQL0QPX%2BE3tCBCxZjG%2BrY07OXzlIhrorJkrpZ4Y05zbhR4grPe8tnDoBLVLJsN7CtKlQE3etG6h54I5Q7v6ffDcaRbzyf8PDrtgXqs6OoGY6g4QG7wCF%2BlyJn9Nrc%2FcGXReOMgDxtAjnWhIfFSudhiL%2BTARHQyQVjBBIlW8JS21qQ8WSVFplwZ%2BC5XajSDZNBLyOs0xAdtHWdiEjR0CDoE6E3XbhOKkPo3BJslWbWtQZOPJYQWsfUqCDuDm7IO1xCyBEvMT7SD3VkZeZ743guLBkRr7E7FShkfLfAL0P1eZBTHCX8Yf0bUMk4NNRq2w4XBxfK%2FQ1LyNcoZT4dcF2CwaVcJX3Jq9IfBmCMalRYEvZgBAw7SXCDW8DKk%2FesXtHg5JQMnvs39fWwsgNH8fUY7SpuT%2Bz00MKuMyMkGOqUBmgxWk4hnoUPyj9a1QB9cBrDZNCYkxv3CRjTYdAHGkjq4fcLj%2F%2BIz06u7wdcnVagdT3oGsCph%2BcllxCy5Ik4uvH8jZ8WGS%2BXw7mi51u26oE5bDKV1K3lwFpvohLqXqWlMeSM4Mwu7c9HK0PiNP5TkeOU5zOh3aTZ2D3IEfmV8qxJU0fh6WbT8m%2BtWw2FEWw7oXnS7hAh7nT8yfkUxk9aYsy5Ax5Fe&X-Amz-Signature=57b0346dd51953b73e92ecc47c6ace77265c129d086425df226ae79a4e2ec8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI4OHNAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjagMYKaljbTg85w4F4qbai95zRh95cq8VLXD9C4jdLwIhALnUGg0Wn4vRJgZtnx2%2F1U4ZmOhC%2BEGKuifj4Rhz6DuCKv8DCH8QABoMNjM3NDIzMTgzODA1Igwu6l53dgZvEpUAJsQq3AOSNooas6FPCcu0yf7THRAbPVP%2BesicreSykNWAKhIooxI5wOeu4hukgkqxgKWlzfEuEZVcBRhcezg%2BThdCpRwnZ6Ec5QflMt3JU7lf%2BzAplkTzcgmCwX1NoB1bzYaxvKIlhJOKnaNx%2BCvqfRUkGQe%2B5fQl1MLaBiitTjlkvrs9bqWZrmULFWYhKMUUjvfJPKagiAw13EbFiqGshS5yd0KcZDYz9Pf3lObKk4NbGDNxCuKCI8HI0Afb%2F83fGYxRCTIQdZ%2FGSdq7tblW4EO%2FE3JCHh4LOrY5TAdeC%2Bo79ryPpgLms4mJYjiycZDRWby%2B4vA7bdEKW8p%2BTLCUmSYO88Z1Z6%2FvzvxbH%2BfZLwEp6qUnEEzqSkW8Jh6IkDtYBnn0S%2Fet9j%2FRm4QiQL3u4EP6B%2BrdAEu3SMOa%2Bww0b%2FF73TyI4fIx1UZAIMcTJNNFdyvxol0hWEq%2BnGiWgAVD5%2Bp4li3VRNQpRCcZAUBP0iWbRCKdmFCqfT%2BSsHKPHnvRtPTQGP1hwXfOneTWUm00eb4JkwlSLP%2BgMJj77hmUyEHErTXZKKsTCw0uS5dLox5vo9PRUJtvAaEYkVw1jwLrQUWeaUUe%2FFPNUJnj%2FBSF7FRd13ByXH8fDqRvSgbMYgmNDjCZ44rKBjqkAZuuo0RWTp7EweiMQNmL1oshDRplU3yfWY1YZJ75Wq%2F2M7kFvHxpp95cGK5nZw76XFAA%2F%2FRlpC6NlS9qQC7By%2Bn%2B2CgBAi69jQOwKYpdr0ha1Ya5xMhjNoUwCPHU9lkypfpm6eYuniFInN%2FhLFoD6bb80CZlUWs9T52yUMC6l4%2F21kReQcQ1pWK68LFD2xnCoKQp11tFvW9IH7ytCCyXigfai8mu&X-Amz-Signature=e45b130bb04d6ba30739643a2bdbd8e70274b273a3ee476060b4a0809a0fc6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI4OHNAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjagMYKaljbTg85w4F4qbai95zRh95cq8VLXD9C4jdLwIhALnUGg0Wn4vRJgZtnx2%2F1U4ZmOhC%2BEGKuifj4Rhz6DuCKv8DCH8QABoMNjM3NDIzMTgzODA1Igwu6l53dgZvEpUAJsQq3AOSNooas6FPCcu0yf7THRAbPVP%2BesicreSykNWAKhIooxI5wOeu4hukgkqxgKWlzfEuEZVcBRhcezg%2BThdCpRwnZ6Ec5QflMt3JU7lf%2BzAplkTzcgmCwX1NoB1bzYaxvKIlhJOKnaNx%2BCvqfRUkGQe%2B5fQl1MLaBiitTjlkvrs9bqWZrmULFWYhKMUUjvfJPKagiAw13EbFiqGshS5yd0KcZDYz9Pf3lObKk4NbGDNxCuKCI8HI0Afb%2F83fGYxRCTIQdZ%2FGSdq7tblW4EO%2FE3JCHh4LOrY5TAdeC%2Bo79ryPpgLms4mJYjiycZDRWby%2B4vA7bdEKW8p%2BTLCUmSYO88Z1Z6%2FvzvxbH%2BfZLwEp6qUnEEzqSkW8Jh6IkDtYBnn0S%2Fet9j%2FRm4QiQL3u4EP6B%2BrdAEu3SMOa%2Bww0b%2FF73TyI4fIx1UZAIMcTJNNFdyvxol0hWEq%2BnGiWgAVD5%2Bp4li3VRNQpRCcZAUBP0iWbRCKdmFCqfT%2BSsHKPHnvRtPTQGP1hwXfOneTWUm00eb4JkwlSLP%2BgMJj77hmUyEHErTXZKKsTCw0uS5dLox5vo9PRUJtvAaEYkVw1jwLrQUWeaUUe%2FFPNUJnj%2FBSF7FRd13ByXH8fDqRvSgbMYgmNDjCZ44rKBjqkAZuuo0RWTp7EweiMQNmL1oshDRplU3yfWY1YZJ75Wq%2F2M7kFvHxpp95cGK5nZw76XFAA%2F%2FRlpC6NlS9qQC7By%2Bn%2B2CgBAi69jQOwKYpdr0ha1Ya5xMhjNoUwCPHU9lkypfpm6eYuniFInN%2FhLFoD6bb80CZlUWs9T52yUMC6l4%2F21kReQcQ1pWK68LFD2xnCoKQp11tFvW9IH7ytCCyXigfai8mu&X-Amz-Signature=736cba226671e3dd8f741511e702314feda47d3de0ce1c70c9e187b9bef53b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

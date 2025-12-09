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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQNTQTF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpXimFKcYZ8gfax0nFywB7GpZHxUtBTkFw0IHeMNXYHAiBn2Rwlr4PugEZ2CxuIGZDOVoUIJ9r5ZJwAyvvSdiDwHyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0XewMYbQBDBvyeSkKtwDzdd3Mloyv%2FvijTwRwpflS4XeBk%2Blot6Pq2iu6TcUe56wSff1l36%2F%2FN99tCq51OZj%2BaUHPaj1oXY9mKA0Oq705609GxmXuEERl7vLCLbz7oHbZX%2BF0oef2HpNo4UQp58fnqLL7TiGRZ1xkZYHPyRy%2BZwsD89fCyzzHXXfVfnMag8MCaefDkxOQFp6ixcwlw5Wn7x4Lp0eK%2FOh409%2FOz0z%2BHv6Upj0wz9ci7DG7K25CQ3toVF5NYxyKrbmc2rBYopDj9OekpWRBR6VqOgDRwfuqvW5CVhDmXi9SgKItgfIJF5ogkiIN74KPOFIhFeCt3%2FZhPBIEhBOagR%2BxTtqzQiyg75S%2BkFmkT0iN1wBOFHR37jaiAjxA2KYkPbcwG1reDHmwwO6f1VV7vZSa82K6QmMbMVw1GVir3t53laKzCX9zjZAZko9dCKtK38ctPUwEg7dKfv8cM0KS5xzGNQjBY5%2FvbgjGVB%2BIBTEtyRyi1vepGGDHfEzwzUYMERW5uI%2Bbh3oncMEoXHStZau32Nf5fq6wfRSQl%2BMr2NSIXYc0AxY2txtT1UHvRXxDkdKnegcSmnqP0evRhDr8ouQ1LbTx5lYANoSvsxmt9sd16xG6Zmb%2B1N6gm%2BoAG3ns1CYpgMwz47eyQY6pgG5u8TdhDaeCUB8oLWxObFvlsK7XtTDPaRAle7zI%2B%2F%2BdvpOV9%2B7TmddymHj8E2JM3E%2F0CcdM6U4THpvn5ySVBE085UI5XvA%2FVwTtEyE2FMIplrsjBHe%2B0PAvXLbSf8B30eZKEF5XsH18j2SiQEyrS9u1kflUJC%2FNS1WFw%2BY5XJUFqUD5KoQhhzfM3Q1caLyt3Qqho1XRnsYMoxJQlYZg37yXfg4sRtn&X-Amz-Signature=f119b7b3d73c275844fc8421b87b228fa0aaf8778a1b4c86ab291c6dd975cada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQNTQTF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpXimFKcYZ8gfax0nFywB7GpZHxUtBTkFw0IHeMNXYHAiBn2Rwlr4PugEZ2CxuIGZDOVoUIJ9r5ZJwAyvvSdiDwHyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0XewMYbQBDBvyeSkKtwDzdd3Mloyv%2FvijTwRwpflS4XeBk%2Blot6Pq2iu6TcUe56wSff1l36%2F%2FN99tCq51OZj%2BaUHPaj1oXY9mKA0Oq705609GxmXuEERl7vLCLbz7oHbZX%2BF0oef2HpNo4UQp58fnqLL7TiGRZ1xkZYHPyRy%2BZwsD89fCyzzHXXfVfnMag8MCaefDkxOQFp6ixcwlw5Wn7x4Lp0eK%2FOh409%2FOz0z%2BHv6Upj0wz9ci7DG7K25CQ3toVF5NYxyKrbmc2rBYopDj9OekpWRBR6VqOgDRwfuqvW5CVhDmXi9SgKItgfIJF5ogkiIN74KPOFIhFeCt3%2FZhPBIEhBOagR%2BxTtqzQiyg75S%2BkFmkT0iN1wBOFHR37jaiAjxA2KYkPbcwG1reDHmwwO6f1VV7vZSa82K6QmMbMVw1GVir3t53laKzCX9zjZAZko9dCKtK38ctPUwEg7dKfv8cM0KS5xzGNQjBY5%2FvbgjGVB%2BIBTEtyRyi1vepGGDHfEzwzUYMERW5uI%2Bbh3oncMEoXHStZau32Nf5fq6wfRSQl%2BMr2NSIXYc0AxY2txtT1UHvRXxDkdKnegcSmnqP0evRhDr8ouQ1LbTx5lYANoSvsxmt9sd16xG6Zmb%2B1N6gm%2BoAG3ns1CYpgMwz47eyQY6pgG5u8TdhDaeCUB8oLWxObFvlsK7XtTDPaRAle7zI%2B%2F%2BdvpOV9%2B7TmddymHj8E2JM3E%2F0CcdM6U4THpvn5ySVBE085UI5XvA%2FVwTtEyE2FMIplrsjBHe%2B0PAvXLbSf8B30eZKEF5XsH18j2SiQEyrS9u1kflUJC%2FNS1WFw%2BY5XJUFqUD5KoQhhzfM3Q1caLyt3Qqho1XRnsYMoxJQlYZg37yXfg4sRtn&X-Amz-Signature=cc28a8c03c7c6aa030432f343b452eb891ac165cd33586a81abf18165559bfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

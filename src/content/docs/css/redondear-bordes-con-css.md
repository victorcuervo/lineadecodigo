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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSN7WQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrWkUcwq%2FMqCQJK4KkELUFt2%2BndeA5KYxWuVEDoKkHfQIhAL6dxribvyluWGugJX20%2FAzyD0%2BH690ZU1ffSm%2FWf6YeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSIPOAe3E%2BnkmzY1Uq3APWvklmLNgNxDVI9xqCLkJhIRDXDbRTAhUEmU0L1DJm2zN4bf1lmwM0bf3uCZKw8alo9BlBEbrz1FqoQWXIe%2BSE7aliBths%2BLFHZV8nuXczHsjxUktXqVMdTcQ%2BykszDFXXW7lNzvWTD8dkcnfSewgi406iFxTGFZY369WFetZu9SYsKFmBVzahnj2UxnRNZ5MOPWQG4sjYEYFyhnJO51qyZzkA2M0BXiWh0ze%2FQGu7FAW8PUKI635z6LXpK%2Bp0Xn619X5s6MJiJxm0uHdv61AtmHyjO93PHgAIG6JvafV4DDXRaJI9hjLDFrZAJzNXI7%2BMkB32K%2Fwc6tLpFmDeJj1UTJQqvR%2FY%2BuRfboKnMS%2B5i8EGDxKnxyIiOPgL5ajqE%2BPmvgAno5IH65qRtUczhlkP7chQMtEVmb7NMp8bBbrrLPgs9CseghLusdQJRgeHZ6YM5CjvWmIzXRuLXUpnVFAI408xJ4Nw7lF2gsKhmKIBJaoEIaKd%2Brc%2FK8xfSYh6vF6zKVFquY8vQUWmr3Cyihzw5zWCReelzTSXuxiof8FjZxBtOXV3hhUHRkezsu13l8Y2T8Cqe%2BvgcoAdYyv8O3bLqqKwJ2JErHl%2BciDdwgfMLK9EngwVyLrYhGT2KzCP%2FdLJBjqkARE8Z30kF1OcZfOB%2F1q3nvPvTWijsk9%2Bgw1%2FlbIPfv4ntLXDfY0%2FzP1ltJdqCfRDC3ia9XOGTUhDNcT%2Fi%2FiMcSmfl%2FweEniFj4H%2FXlzm4mrB58HwdwGUwuORbD9VCdoAk%2FKfMPujZyxlBn%2FQOvW%2BT7OCE2IDCfaLA9f9NwKUsLIoy0GQd42F6nwc8NLCbnWJLHOSnBS1g4uL0wkDjp%2B5A6VpEF2D&X-Amz-Signature=4c23f8ac369370e3adcff4f3c1947cd7d5e8209373c6e3b9265bd34a818de24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSN7WQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrWkUcwq%2FMqCQJK4KkELUFt2%2BndeA5KYxWuVEDoKkHfQIhAL6dxribvyluWGugJX20%2FAzyD0%2BH690ZU1ffSm%2FWf6YeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSIPOAe3E%2BnkmzY1Uq3APWvklmLNgNxDVI9xqCLkJhIRDXDbRTAhUEmU0L1DJm2zN4bf1lmwM0bf3uCZKw8alo9BlBEbrz1FqoQWXIe%2BSE7aliBths%2BLFHZV8nuXczHsjxUktXqVMdTcQ%2BykszDFXXW7lNzvWTD8dkcnfSewgi406iFxTGFZY369WFetZu9SYsKFmBVzahnj2UxnRNZ5MOPWQG4sjYEYFyhnJO51qyZzkA2M0BXiWh0ze%2FQGu7FAW8PUKI635z6LXpK%2Bp0Xn619X5s6MJiJxm0uHdv61AtmHyjO93PHgAIG6JvafV4DDXRaJI9hjLDFrZAJzNXI7%2BMkB32K%2Fwc6tLpFmDeJj1UTJQqvR%2FY%2BuRfboKnMS%2B5i8EGDxKnxyIiOPgL5ajqE%2BPmvgAno5IH65qRtUczhlkP7chQMtEVmb7NMp8bBbrrLPgs9CseghLusdQJRgeHZ6YM5CjvWmIzXRuLXUpnVFAI408xJ4Nw7lF2gsKhmKIBJaoEIaKd%2Brc%2FK8xfSYh6vF6zKVFquY8vQUWmr3Cyihzw5zWCReelzTSXuxiof8FjZxBtOXV3hhUHRkezsu13l8Y2T8Cqe%2BvgcoAdYyv8O3bLqqKwJ2JErHl%2BciDdwgfMLK9EngwVyLrYhGT2KzCP%2FdLJBjqkARE8Z30kF1OcZfOB%2F1q3nvPvTWijsk9%2Bgw1%2FlbIPfv4ntLXDfY0%2FzP1ltJdqCfRDC3ia9XOGTUhDNcT%2Fi%2FiMcSmfl%2FweEniFj4H%2FXlzm4mrB58HwdwGUwuORbD9VCdoAk%2FKfMPujZyxlBn%2FQOvW%2BT7OCE2IDCfaLA9f9NwKUsLIoy0GQd42F6nwc8NLCbnWJLHOSnBS1g4uL0wkDjp%2B5A6VpEF2D&X-Amz-Signature=8eaf60b21c4ee56b6a5cafcf272cc13a7d09a0068caaf6ce99f6c675c63bb064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

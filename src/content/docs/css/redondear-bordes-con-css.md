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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6ZD6YR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwQ5OK88MSOGHiGx8SBUjz60pZEBZRP8CxUoguGKBuUAiEA4e3tIRwV%2F0OcsSntQ%2FpoM3pH24E0dCsxNuM9CtfbEBUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyHW6PCJuUNTlDk5yrcA8jmuDZYR5RiK%2FslfnXGoTMYjVy1CPZCK7%2FhSOEjB%2BXRAt7VvjMJj9SS8fJ1%2FwGPVvzASS7btUJQepH8vfgSbHwhFOa2zWzbi7fk0ui4u3kgZFK4dbAXtU%2FOAirleGHwztXfbBcruCYdckUEDYhzty8%2F2NNrG5yTNmKPlcdxSr2mXGsKs262ddOrQMYdLGQAqn2%2Ff3hUbJ7rM0VfCCBDESwpR3bCz08w3TdM6la96Chrj2wT8Fmu2WNOjV0OHVaR%2FubRvYsO2hiCNhbr8No9hXbA%2Fq5ZycRezgF4o9fyx%2Fxwdh%2F5qVYCrqn2kdkNYw4eindMoWRAB0dJ7fdnGv3OuDSr7b3H7%2BoQpfLk1UJ%2FdQvoxSgR%2F%2F5wexlpdqvvC95e6pvG7idXMDJ9S5T4TawyZLdaSpbiZbSjQViSplh3O56cGGjLvIC9G4kEwQft6pafqM08%2FqfThwhkoXO4j85nyquegQaHIcxaNF5M3HQ9lYB%2FswUIFX4duzg9N8AvLzRuFDc82%2B2VXy%2BuU0lB2KEM%2BmEN87BjdAlVyswyTLkpVxOGgqQBZsmhzGBt2sTwDP7leE708G1B%2FB%2BP4NjjWcmDblCZQAClThFzNz5tFZ%2FZGzaJzod4GzKafmuhgmCDMJrl3skGOqUBFN98lOPjPkXEV55c3psxHDXtTL2Xa7IaRDQ7INwsh2NZNOwWLeMg9rKRzIdLr%2BNpnnf5ZOJhvrnpVUNsckF%2BrzTTJn6NzQpBFvOQ%2BVnemCPc4Dxu6PqE4Z3ZfHUscfNyFCV61y2sdhCc3cKKY%2BWMwWYiJhLx81S0nr0ZLeGP6rbxvzRL28l8vULlt5V%2Bw0pQuxQyRSTdjVQNizL%2FgbttnLbUKUaV&X-Amz-Signature=1844d383e194bc76cec9ad0c03ac100633cedc97f414c92b6f975ffbdccddcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6ZD6YR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwQ5OK88MSOGHiGx8SBUjz60pZEBZRP8CxUoguGKBuUAiEA4e3tIRwV%2F0OcsSntQ%2FpoM3pH24E0dCsxNuM9CtfbEBUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyHW6PCJuUNTlDk5yrcA8jmuDZYR5RiK%2FslfnXGoTMYjVy1CPZCK7%2FhSOEjB%2BXRAt7VvjMJj9SS8fJ1%2FwGPVvzASS7btUJQepH8vfgSbHwhFOa2zWzbi7fk0ui4u3kgZFK4dbAXtU%2FOAirleGHwztXfbBcruCYdckUEDYhzty8%2F2NNrG5yTNmKPlcdxSr2mXGsKs262ddOrQMYdLGQAqn2%2Ff3hUbJ7rM0VfCCBDESwpR3bCz08w3TdM6la96Chrj2wT8Fmu2WNOjV0OHVaR%2FubRvYsO2hiCNhbr8No9hXbA%2Fq5ZycRezgF4o9fyx%2Fxwdh%2F5qVYCrqn2kdkNYw4eindMoWRAB0dJ7fdnGv3OuDSr7b3H7%2BoQpfLk1UJ%2FdQvoxSgR%2F%2F5wexlpdqvvC95e6pvG7idXMDJ9S5T4TawyZLdaSpbiZbSjQViSplh3O56cGGjLvIC9G4kEwQft6pafqM08%2FqfThwhkoXO4j85nyquegQaHIcxaNF5M3HQ9lYB%2FswUIFX4duzg9N8AvLzRuFDc82%2B2VXy%2BuU0lB2KEM%2BmEN87BjdAlVyswyTLkpVxOGgqQBZsmhzGBt2sTwDP7leE708G1B%2FB%2BP4NjjWcmDblCZQAClThFzNz5tFZ%2FZGzaJzod4GzKafmuhgmCDMJrl3skGOqUBFN98lOPjPkXEV55c3psxHDXtTL2Xa7IaRDQ7INwsh2NZNOwWLeMg9rKRzIdLr%2BNpnnf5ZOJhvrnpVUNsckF%2BrzTTJn6NzQpBFvOQ%2BVnemCPc4Dxu6PqE4Z3ZfHUscfNyFCV61y2sdhCc3cKKY%2BWMwWYiJhLx81S0nr0ZLeGP6rbxvzRL28l8vULlt5V%2Bw0pQuxQyRSTdjVQNizL%2FgbttnLbUKUaV&X-Amz-Signature=3f9d0f83a65a64e8dbcfb2bf0c8c9fbf84f1475be2274c42e08ff95687c2bb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

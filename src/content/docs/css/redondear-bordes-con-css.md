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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQYAEQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHzrkR%2F2alAn%2Fa5Am2T6Sa6uQEJOKrybIq6PSRQVBZtQIgOVaqAgomac9Eq3OMnal5kPmRHrwL2XBvOcUFi3%2BVBTwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI0bpZqD%2B1ErYtwlASrcA0i%2BPgrEenxdsC9yP5%2FEm1nYfb8v%2FkK6S8TUUCFx0mTzW%2F5eI0%2FRj1LBt%2By2BeRSr0c%2FhUgkn96vnFBKgabxupYup2jjTaKXdfsV09Oje7Z8T8eNAgY2f%2BGDjPWKyfviRlp2QtEWkYkMP1zgwrD803g7Wv2YPWSYM1Oy7dKFWtWaTGRHwRIOeGZkEiKoab8dO0Q0o%2FvQ8qXKgMEGdhZJr22iu22XFJAH93M5mg6X56cWAN3rSP2lKcD2A0ewW3X1bgIZSi3ZGb3mnMfcPZQDgbO0v9FARgh%2BqO6oeuDXvfzgfjis2k6e9jA1oRgscAjopved8xJUl%2Fk8lEQmQ%2BIeXKNR0jz7T2Lu30B89PViUTY9mQVKAvLM%2BHojX0i2tK168UStOthRjf63qBEpt1s%2BUwsalE9hOiK6wcObVTlUdDfim5MmfBHryhOBjL7%2BJV1dapYyYOpTxzzutTYDqzuyDy0fLYPDCpc%2FyFTcfa5nL7uYfWAgto02ZodpPMZNM70Boos1EoBEnvzgTgAx6fBkdCiZCFwICStVn0KjjWPpsuC1pXOD2Ha72D%2F9oDtdIOkTaqEXVgeuw2gnmCU56Pqalae6Zo5pY%2BUZAwczpCotQa5Zi7%2Btwr3VJsrRqfEHMJ3T0skGOqUBYoVfFUcQnAa4zTodva5Rta7KMUCz0shCJqOfNLc3NXJxTUUlVuAI%2BwuIpwM0ZSBOLx0jAwW9VAs52mUn38aMuMeHwp85daPze3VgocG8uVzwY5XX%2FnzpykaBwPFxW2Vad%2FMX%2BmVQAYLhcGsm5nMeBMuEFraOmRxfc78w9wusfOU1XGn%2BfleTfPJK1%2BfjFf0TZjKsn8YbVloaNmXijUmWJ74o2HhR&X-Amz-Signature=1243fd7661730ded0b152cd05eb6f7b56439ec78238bd39482df3fdbaa785358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQYAEQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHzrkR%2F2alAn%2Fa5Am2T6Sa6uQEJOKrybIq6PSRQVBZtQIgOVaqAgomac9Eq3OMnal5kPmRHrwL2XBvOcUFi3%2BVBTwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI0bpZqD%2B1ErYtwlASrcA0i%2BPgrEenxdsC9yP5%2FEm1nYfb8v%2FkK6S8TUUCFx0mTzW%2F5eI0%2FRj1LBt%2By2BeRSr0c%2FhUgkn96vnFBKgabxupYup2jjTaKXdfsV09Oje7Z8T8eNAgY2f%2BGDjPWKyfviRlp2QtEWkYkMP1zgwrD803g7Wv2YPWSYM1Oy7dKFWtWaTGRHwRIOeGZkEiKoab8dO0Q0o%2FvQ8qXKgMEGdhZJr22iu22XFJAH93M5mg6X56cWAN3rSP2lKcD2A0ewW3X1bgIZSi3ZGb3mnMfcPZQDgbO0v9FARgh%2BqO6oeuDXvfzgfjis2k6e9jA1oRgscAjopved8xJUl%2Fk8lEQmQ%2BIeXKNR0jz7T2Lu30B89PViUTY9mQVKAvLM%2BHojX0i2tK168UStOthRjf63qBEpt1s%2BUwsalE9hOiK6wcObVTlUdDfim5MmfBHryhOBjL7%2BJV1dapYyYOpTxzzutTYDqzuyDy0fLYPDCpc%2FyFTcfa5nL7uYfWAgto02ZodpPMZNM70Boos1EoBEnvzgTgAx6fBkdCiZCFwICStVn0KjjWPpsuC1pXOD2Ha72D%2F9oDtdIOkTaqEXVgeuw2gnmCU56Pqalae6Zo5pY%2BUZAwczpCotQa5Zi7%2Btwr3VJsrRqfEHMJ3T0skGOqUBYoVfFUcQnAa4zTodva5Rta7KMUCz0shCJqOfNLc3NXJxTUUlVuAI%2BwuIpwM0ZSBOLx0jAwW9VAs52mUn38aMuMeHwp85daPze3VgocG8uVzwY5XX%2FnzpykaBwPFxW2Vad%2FMX%2BmVQAYLhcGsm5nMeBMuEFraOmRxfc78w9wusfOU1XGn%2BfleTfPJK1%2BfjFf0TZjKsn8YbVloaNmXijUmWJ74o2HhR&X-Amz-Signature=72d67d75518849b723f25f1104821129b3934571ddf207e116892cbad6f5b3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

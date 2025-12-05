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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SM3JX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ7wR7al2b9v%2FTGd%2Fl%2FMqIK7%2F6wckjymqrqgZK9ov6wIhAO%2FS1qOkkuIB5ybUPTJAkbmCsqHN4BZdMdwsR2StCk4bKv8DCE8QABoMNjM3NDIzMTgzODA1Igxj%2F6V%2Fg5%2By48V5GpEq3APLIkx09BjgqiqO2DTRPmLx1EPUpIr0mrinv%2FAIeS%2BJucNC7mJov6dkH6fOHTS7udU3g5IsIXX6pTf99MwSHWlnh5wGYkwYflyXo0YhkWKI7jIS9HMEC4kTdYbRTPpCJSvxNnZXK1eMjGVxnxT1K3nlbVgS7fBnizQxKlKtYoTrLmUAfq8uXJH2ynUikj1qYvZcVBlNCEWejVN73RqNXJBKygBM4H0jmM3YW9KXQKxnI0s3834i0WlSM1HLM9aoCNRxbTeB7HtWv%2Bed%2FFh2%2FVQw6DnluIWhhvWtskyR1bQXkVCY7qXjXJWBwqoH%2Few7l7wBmWhyoFA7BBUc73XsMwIqrRXzjg57aGxHPthN1JG9DZl8iGRP%2FSCDqOFoBmdM0cOTEU7IHAhh1HUnVMgoU5Rx5IxFE8aulWAXSknHPS8e1ba2KtW0PSKocTck5hudEBa5hcWT8meB1Ghqz1L%2FKEkTlvsnpNbjbyYVRQDCawXe3JqcQgpwNIAK5G6GjHSuC%2FM%2Bvr6Xx8Xd32uysJ0gKsK4W88e7anCdAwBg7yQw0M1SgFXjPjOVGhVCCfAx9nK0HnnIjfXhTGibh6Qrm7UObZMlO5iEiWEfWe0SYj2XXkt60NnUhjsOGuk91ZqGzDUjMjJBjqkAYOIbVC5tOKm5mMZqTrFzng5m8unLBu%2BJp5wJi%2FixuDhpajjVLWmsgA6Uc3WY3JW2HOTwuzbhUixpESZDLp46uEmlbnLu4%2B6UagrGtSrUePqrR5usMpTELWh%2FO%2FK%2BIKHUpELmy%2BSIlpGPa8fIQk6zVUsAA8JgmIGq9z3T50t75ZZ3oWZrzivUHEFjblORF1CH%2BvrwFu0tnXYHwAqR1rFlGNj%2BVDs&X-Amz-Signature=4df162b9ebfa2ab064c99c7c597f353c2214867d273967672fa476efbb5db761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SM3JX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ7wR7al2b9v%2FTGd%2Fl%2FMqIK7%2F6wckjymqrqgZK9ov6wIhAO%2FS1qOkkuIB5ybUPTJAkbmCsqHN4BZdMdwsR2StCk4bKv8DCE8QABoMNjM3NDIzMTgzODA1Igxj%2F6V%2Fg5%2By48V5GpEq3APLIkx09BjgqiqO2DTRPmLx1EPUpIr0mrinv%2FAIeS%2BJucNC7mJov6dkH6fOHTS7udU3g5IsIXX6pTf99MwSHWlnh5wGYkwYflyXo0YhkWKI7jIS9HMEC4kTdYbRTPpCJSvxNnZXK1eMjGVxnxT1K3nlbVgS7fBnizQxKlKtYoTrLmUAfq8uXJH2ynUikj1qYvZcVBlNCEWejVN73RqNXJBKygBM4H0jmM3YW9KXQKxnI0s3834i0WlSM1HLM9aoCNRxbTeB7HtWv%2Bed%2FFh2%2FVQw6DnluIWhhvWtskyR1bQXkVCY7qXjXJWBwqoH%2Few7l7wBmWhyoFA7BBUc73XsMwIqrRXzjg57aGxHPthN1JG9DZl8iGRP%2FSCDqOFoBmdM0cOTEU7IHAhh1HUnVMgoU5Rx5IxFE8aulWAXSknHPS8e1ba2KtW0PSKocTck5hudEBa5hcWT8meB1Ghqz1L%2FKEkTlvsnpNbjbyYVRQDCawXe3JqcQgpwNIAK5G6GjHSuC%2FM%2Bvr6Xx8Xd32uysJ0gKsK4W88e7anCdAwBg7yQw0M1SgFXjPjOVGhVCCfAx9nK0HnnIjfXhTGibh6Qrm7UObZMlO5iEiWEfWe0SYj2XXkt60NnUhjsOGuk91ZqGzDUjMjJBjqkAYOIbVC5tOKm5mMZqTrFzng5m8unLBu%2BJp5wJi%2FixuDhpajjVLWmsgA6Uc3WY3JW2HOTwuzbhUixpESZDLp46uEmlbnLu4%2B6UagrGtSrUePqrR5usMpTELWh%2FO%2FK%2BIKHUpELmy%2BSIlpGPa8fIQk6zVUsAA8JgmIGq9z3T50t75ZZ3oWZrzivUHEFjblORF1CH%2BvrwFu0tnXYHwAqR1rFlGNj%2BVDs&X-Amz-Signature=dce5bd294fa2d71aa2b3f5033f56d3d56c7075ae5fdd68df63d1076c39daa722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

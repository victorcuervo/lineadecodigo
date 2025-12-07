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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMKI3IJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID12WCqsdZ2O%2FvJoidsxbguPfphYSmA4vHvSsRqGsZirAiBcnZOs%2FIOXMwkdct4k6Uo%2BYcjVOfH%2Fb2dqWZYd0iZTPyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvGD%2F%2BXQPsKktv4UiKtwDbOLIiYmh6eYWzs%2BVGpgX5r%2FjVqnX20Nd5QA8WkU6H%2Bb0lQMxg8aLZtQSlOyLUbv8qTs6SjHZMY19ScnatgeLCl3rucAIEgrhJ%2FUz5JZBQy29sMjdQy%2BAYWiOGc5Sv2Fu48R6BKJl52fQ%2B335FESiwCJuOQ1OYBwtoJFwGX5Qc2YXbiqJ4gLB9wETL0Q30CP2gh%2F%2B%2FIWZFxGV8g8kqTMvq6LYtmAKXQU%2BNSFo0GVkNFwjk1JOlM9rBMMgaPRNObK3%2Fp8T0zXSh55xGZ1FRiuSwua%2BE90LerKE6G9O25AnAETzpAcmyJasHsHDwZzuwUKlbUXCy%2FZnfQdMKYVEjl8m59t5e3W8CJdf5pt1Ra77fguR44WaSzDyeqvmX2MmtsnUy7BrVVRzOv0P4egk8UfHQQUqZwys4SrEbITgAgV64ClkSp0Ir5tHEijDDlXqmDGxgZoeAarpZXEUk%2BFS17q2OPoBE3hAULmaxpO0CBLq7ds%2BtluIWPSg1yUge0ndJ4tzNb4ECK%2FPcOz3pddfkU737Q6e7QmXd8%2BM3AMbO9z2qp0u0Vchd4fN8%2F2peHF0i%2BmunbEOIsosFK7fFnbAc7r%2FTJLYbJgWBxQ3NfUv%2BHzt9VJfZsiypTCVw8zH9xkwqqPUyQY6pgG0w%2BhSfeB2En9Ig21bFBHrTwdvYUT9s2JDfFZkPP7MFaSJlct1Ul%2FjEkOTuc17rlUXAEPaQ3ujHIZq5kI%2BZH0wRErQLlbuK%2FSfygYeiq8myzI%2BwBQa5%2BKZTLS%2FvUdUohfY62%2BJSGX0GMd4s8lCu7%2Bgcm2weDpAEu23BlBMsWo8sUDtMF6Hl%2FSuTCOW9oQWcee4zRzFjIWfO0%2FqQ2CTp3E6dc8x8BDE&X-Amz-Signature=900e3399cf67e8469d88ddc474fb41549b34854c8102a6ac2404d86a4061681d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMKI3IJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID12WCqsdZ2O%2FvJoidsxbguPfphYSmA4vHvSsRqGsZirAiBcnZOs%2FIOXMwkdct4k6Uo%2BYcjVOfH%2Fb2dqWZYd0iZTPyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvGD%2F%2BXQPsKktv4UiKtwDbOLIiYmh6eYWzs%2BVGpgX5r%2FjVqnX20Nd5QA8WkU6H%2Bb0lQMxg8aLZtQSlOyLUbv8qTs6SjHZMY19ScnatgeLCl3rucAIEgrhJ%2FUz5JZBQy29sMjdQy%2BAYWiOGc5Sv2Fu48R6BKJl52fQ%2B335FESiwCJuOQ1OYBwtoJFwGX5Qc2YXbiqJ4gLB9wETL0Q30CP2gh%2F%2B%2FIWZFxGV8g8kqTMvq6LYtmAKXQU%2BNSFo0GVkNFwjk1JOlM9rBMMgaPRNObK3%2Fp8T0zXSh55xGZ1FRiuSwua%2BE90LerKE6G9O25AnAETzpAcmyJasHsHDwZzuwUKlbUXCy%2FZnfQdMKYVEjl8m59t5e3W8CJdf5pt1Ra77fguR44WaSzDyeqvmX2MmtsnUy7BrVVRzOv0P4egk8UfHQQUqZwys4SrEbITgAgV64ClkSp0Ir5tHEijDDlXqmDGxgZoeAarpZXEUk%2BFS17q2OPoBE3hAULmaxpO0CBLq7ds%2BtluIWPSg1yUge0ndJ4tzNb4ECK%2FPcOz3pddfkU737Q6e7QmXd8%2BM3AMbO9z2qp0u0Vchd4fN8%2F2peHF0i%2BmunbEOIsosFK7fFnbAc7r%2FTJLYbJgWBxQ3NfUv%2BHzt9VJfZsiypTCVw8zH9xkwqqPUyQY6pgG0w%2BhSfeB2En9Ig21bFBHrTwdvYUT9s2JDfFZkPP7MFaSJlct1Ul%2FjEkOTuc17rlUXAEPaQ3ujHIZq5kI%2BZH0wRErQLlbuK%2FSfygYeiq8myzI%2BwBQa5%2BKZTLS%2FvUdUohfY62%2BJSGX0GMd4s8lCu7%2Bgcm2weDpAEu23BlBMsWo8sUDtMF6Hl%2FSuTCOW9oQWcee4zRzFjIWfO0%2FqQ2CTp3E6dc8x8BDE&X-Amz-Signature=f0d1ea08816d185239f1dea591a19829be350ef4baad0c734b67e80ea6e91e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7CBIUJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmgP5POUg9SYL1emPNGhMtZhkZ9P5I9%2F1ONPtt%2Bk2HqAiEAhAC0%2BZ9JjnZ13sUQnK8i0QcdhjrLXeUWhzG%2F435f%2FCEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFVB%2FskntzfPRrOS9SrcA8FCj1MdjR0qVoahbI%2FvBThBeKBe1oByCi2f%2BeuuvZm4KHx2vPrKdTcIqtX%2FrRAgnf94eJ7Ixd4pfmbG7BB9lZaP6fTW1P8Yehe0R%2FQsV3bIOqH9vpD%2B2zGR2XBDBHW9OHpO0FibBYOJO0LSyDJmatnMrndexG2jOPVBxBm8D%2BX7Tbe%2Bp2wiVtbK8WcQPsTPb3%2FjQ91mBBl7KnhauBqN4AprEMKdHM8TjXVUBHtQEcad31ESs4xbvYKreP3RmOIvGIa8j55uj8ufBq%2BTDvhzfflvZbHGWyJHUeBWkHJjEk5L8NIyUjpYj0qviTWVF%2BaU5MfDwFkK%2Fv6gfWURfssmFiGU9LWr1D%2BXjBaBWwHIYLAQsHg6VuEAK6K0T8NC3WqtbyplPDx%2FBNa5oOtC5AtnC138fEN2BUZjhd%2BbZhlgkVMYxNZz1dWHw1Mamf88mFFLN%2BQN%2FW2C59udIW6XSAYJwBhaK%2FVUUsM2fWyLMX38eaIec1cIzci5TZ7Jz8bnvSXt1VEdLkKWVTwDDsS8tCwlY3HSMeVxJF4DZd2E2tGwEhtvE2KoZmURQIymwokmAeqvT4GSYgXggPkC%2Bq6oLj%2FJNsTxsEgiIjlvWiw85s6CmJbKqsESewAJdL2npdBCMN2tyckGOqUB8Ra2SfqxRbMO%2F5TwTpu2%2Ba9PhRa%2BX7hztc8jmlaXL8LJnlaS%2FO88YoMxZcvXRjOvCaiHqU5GQumKoZTpKoA9OHCIiaSAOA1OY%2Fiej50GcVYCHdu9DXOWXyBV%2FVeoaP9073iFo0qQtI2toEgknbQ6TphjvbU8Pbr8LVJrzYpgb4ZMKZn1%2BTxrhNeTKZv5hbBM2tN6RO1X2W9%2FOAjNN7VM4C2wZM%2BZ&X-Amz-Signature=ce635b5abe588a43988ecb1a5d8353bf3f46364d32e2fa473580e9ea84415d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7CBIUJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmgP5POUg9SYL1emPNGhMtZhkZ9P5I9%2F1ONPtt%2Bk2HqAiEAhAC0%2BZ9JjnZ13sUQnK8i0QcdhjrLXeUWhzG%2F435f%2FCEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFVB%2FskntzfPRrOS9SrcA8FCj1MdjR0qVoahbI%2FvBThBeKBe1oByCi2f%2BeuuvZm4KHx2vPrKdTcIqtX%2FrRAgnf94eJ7Ixd4pfmbG7BB9lZaP6fTW1P8Yehe0R%2FQsV3bIOqH9vpD%2B2zGR2XBDBHW9OHpO0FibBYOJO0LSyDJmatnMrndexG2jOPVBxBm8D%2BX7Tbe%2Bp2wiVtbK8WcQPsTPb3%2FjQ91mBBl7KnhauBqN4AprEMKdHM8TjXVUBHtQEcad31ESs4xbvYKreP3RmOIvGIa8j55uj8ufBq%2BTDvhzfflvZbHGWyJHUeBWkHJjEk5L8NIyUjpYj0qviTWVF%2BaU5MfDwFkK%2Fv6gfWURfssmFiGU9LWr1D%2BXjBaBWwHIYLAQsHg6VuEAK6K0T8NC3WqtbyplPDx%2FBNa5oOtC5AtnC138fEN2BUZjhd%2BbZhlgkVMYxNZz1dWHw1Mamf88mFFLN%2BQN%2FW2C59udIW6XSAYJwBhaK%2FVUUsM2fWyLMX38eaIec1cIzci5TZ7Jz8bnvSXt1VEdLkKWVTwDDsS8tCwlY3HSMeVxJF4DZd2E2tGwEhtvE2KoZmURQIymwokmAeqvT4GSYgXggPkC%2Bq6oLj%2FJNsTxsEgiIjlvWiw85s6CmJbKqsESewAJdL2npdBCMN2tyckGOqUB8Ra2SfqxRbMO%2F5TwTpu2%2Ba9PhRa%2BX7hztc8jmlaXL8LJnlaS%2FO88YoMxZcvXRjOvCaiHqU5GQumKoZTpKoA9OHCIiaSAOA1OY%2Fiej50GcVYCHdu9DXOWXyBV%2FVeoaP9073iFo0qQtI2toEgknbQ6TphjvbU8Pbr8LVJrzYpgb4ZMKZn1%2BTxrhNeTKZv5hbBM2tN6RO1X2W9%2FOAjNN7VM4C2wZM%2BZ&X-Amz-Signature=9fea1b4021e2a675d30e1a162cbed02b9bd6d95bf24ac5be92bf66bf62ca9cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

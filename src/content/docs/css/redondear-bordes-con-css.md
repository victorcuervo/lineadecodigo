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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJIKPRC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJD%2BGRkua6m%2B0rypOyB3aSLLereBubof7WBKx9ygFPhgIhAKXNht62ke46rXof0syY03CE46TgCKuv3VIqjQdfHYZVKv8DCE8QABoMNjM3NDIzMTgzODA1Igzlj0YVy2ZutY3fJHYq3ANzcEhx9wbCQKI%2F%2FvAygegXclEJV8LCOfzno6k6sQqZ%2B8R%2F1Cp%2F02Sn7PMVKmC309USTh3fg21Imjd%2BqGwrVIN7l0uEacjS9s0D6iq%2FQfSH%2FVfXQ0TaAqD6CvRIfRH8BeGYzQUH%2F6IUA3Fep17gPiEwzi%2Fj3Z%2F3%2FJ4TZt9kbCFMX%2B79YIyHzPg8Ri4ug9uXcUEFMJCR7Lr543PgJ7vRW%2Brc2W5mtyu8Oqc897k5QK%2BMFZZmPh%2FCR%2FloMnC62WtqFM2huL4trUXQl7iHgenJ%2FwW%2BVPZ7%2FtuLkRvZ5S72WJ5%2FncNVXiw2K0IE2Gbz8qtTH9hcBS5Y6yz65S2StMSJV8zpty0KA24SZ%2BdHkdrcv%2Fwv5UC7F2QKbIrfYt94NiZMPakvL0T8iBOdvcxtfARcYkkfE601wKEcq6AH%2FIO%2BvXajpJTFRjwmfGE1P6WohJZ5Izjomoz8Parv0X%2FKngXKt1HoayYvg1Ppe4g35WSudTGpk%2FiOaus91MZjptX0SPNy%2BDDImd3pOx6S0Fn3QbCAGmjY4A1ptLfQu5XZs9B3doZsoLYQC2qI2M6qCfdDZwk%2Fp4FwHhL2Mve6Omhe1gGn3z%2BiKGHa18o5nVO5yUT%2BCangRwsqN8my1MOk4yKtTTCyjMjJBjqkAZgffEKEx8lkuZV3G4hBZHmicZq8JSn5IbAsGCcOMuUDnW%2BcQYP5EXi3bBCCFcK25BJYGQg50jHSXyjWkytJkSzXWnkDFW1OwIkd8IRBktwIE40V9FAIcM6hJBbPs4R8be6S%2FO5QjG1A27PmJhZHREZ9aOAq%2BG9Qf44%2BibvVcUlIyqEO%2FEpiFEGOUQmKBppz2MRhCGkmV%2B8i0cik9CsA026q1jB2&X-Amz-Signature=18556ff28cfeb61eddcf6fc42b81af5e5d0251f7d93f4fad502a88d74dc7cdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJIKPRC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJD%2BGRkua6m%2B0rypOyB3aSLLereBubof7WBKx9ygFPhgIhAKXNht62ke46rXof0syY03CE46TgCKuv3VIqjQdfHYZVKv8DCE8QABoMNjM3NDIzMTgzODA1Igzlj0YVy2ZutY3fJHYq3ANzcEhx9wbCQKI%2F%2FvAygegXclEJV8LCOfzno6k6sQqZ%2B8R%2F1Cp%2F02Sn7PMVKmC309USTh3fg21Imjd%2BqGwrVIN7l0uEacjS9s0D6iq%2FQfSH%2FVfXQ0TaAqD6CvRIfRH8BeGYzQUH%2F6IUA3Fep17gPiEwzi%2Fj3Z%2F3%2FJ4TZt9kbCFMX%2B79YIyHzPg8Ri4ug9uXcUEFMJCR7Lr543PgJ7vRW%2Brc2W5mtyu8Oqc897k5QK%2BMFZZmPh%2FCR%2FloMnC62WtqFM2huL4trUXQl7iHgenJ%2FwW%2BVPZ7%2FtuLkRvZ5S72WJ5%2FncNVXiw2K0IE2Gbz8qtTH9hcBS5Y6yz65S2StMSJV8zpty0KA24SZ%2BdHkdrcv%2Fwv5UC7F2QKbIrfYt94NiZMPakvL0T8iBOdvcxtfARcYkkfE601wKEcq6AH%2FIO%2BvXajpJTFRjwmfGE1P6WohJZ5Izjomoz8Parv0X%2FKngXKt1HoayYvg1Ppe4g35WSudTGpk%2FiOaus91MZjptX0SPNy%2BDDImd3pOx6S0Fn3QbCAGmjY4A1ptLfQu5XZs9B3doZsoLYQC2qI2M6qCfdDZwk%2Fp4FwHhL2Mve6Omhe1gGn3z%2BiKGHa18o5nVO5yUT%2BCangRwsqN8my1MOk4yKtTTCyjMjJBjqkAZgffEKEx8lkuZV3G4hBZHmicZq8JSn5IbAsGCcOMuUDnW%2BcQYP5EXi3bBCCFcK25BJYGQg50jHSXyjWkytJkSzXWnkDFW1OwIkd8IRBktwIE40V9FAIcM6hJBbPs4R8be6S%2FO5QjG1A27PmJhZHREZ9aOAq%2BG9Qf44%2BibvVcUlIyqEO%2FEpiFEGOUQmKBppz2MRhCGkmV%2B8i0cik9CsA026q1jB2&X-Amz-Signature=011d7522a5b1a9b55a128a281b326768d2c2361ce601fee7e22c9687fac971bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

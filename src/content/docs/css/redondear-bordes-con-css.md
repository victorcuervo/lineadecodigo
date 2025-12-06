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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364QJAG2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFflDezmwYZv71Mtt4MDI71zli%2B5LX5DnYg19hQGAQKUAiAq9rD4LWF%2FJJId0fYubXFQXG19Bfb6OwDskLh%2FdhtUVir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMiaNPX7fYlRUt41rwKtwDfdISY1AYJ04MSiO0c0FT6YSATOqaajDxkjpYkgE0xYluQQwVtJzNmdCbovCClAIw4l7TCaZnclxZmmxBsYIWCqpahJoTDQd3vmqGWETxCxBgVDBt%2B7wphhZNPZr9kuZEH1xSg7OT%2BewWwm3Ei4ErqEaTJkZHeWVJtyBbKmxRoxJunSqbCl9cqr0i6i7RnjgcDXCwVkoW7KkJnwAGQ6Gc4rplnoCBS1s7c4WJwd8sjLyLrTFbounseFO9xmKJynSD744%2FwLB7eWxSHIbb3GerESrj3XG%2BgimZDHxFPGERq4NTJx9K8ap86no4MwE4e%2F%2FGbEoTBNcP6tmk0rpzlxOouE8Eqpij%2FA8Q5lDljgCsTv9DEpmEk8gCSQYPYFiCpItj26x%2BLd10SmSsGobCdDMMJTOcrvlINq%2BC3RUkr1l50vIQA12XXCRv5GH9rM0v9OKVxhDwDG0l%2FNGSGDPdF%2BR%2BPq9zuTFWf943phB6XqRKgr9VWOuIDeaY44gAG8%2BWiGBZ7KIBvKB%2BTPE3kz85VYoHzwygwE3wYAtJfCduxFyKzmBcS3BdyiUsLyjCI00RypLujlHL%2Bbps2mwqoDnYv6NFrIweMCOMR8WQt6vKGYni8lLntmUb0VKfyLWYPOcwgsbRyQY6pgGevyKgi4qAKJcZpBm7zFODemDxRE4qKcVdDZ5SKP5yXi2RfB9T8THD4Cv%2BXkHsDH9ZNQEgon97L4lCXyn%2BgDU6U2VtigboSfYIQRutMBC4WPx3UbVGcgR5rAMBTk%2F57R9Gk86gP0MjCyAh5ialZacPgNxuP5jC1Jm8U0%2Fq4%2BYhsDbiRBN%2FQ6LCKM2AhMc1PJOrAI1QpY0ToZPkfVD9K9k2zqpaP9tD&X-Amz-Signature=f8d5b153c3c1bb287129e0403485378a2abfc2451d910df0e9a24b301dcc887d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364QJAG2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFflDezmwYZv71Mtt4MDI71zli%2B5LX5DnYg19hQGAQKUAiAq9rD4LWF%2FJJId0fYubXFQXG19Bfb6OwDskLh%2FdhtUVir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMiaNPX7fYlRUt41rwKtwDfdISY1AYJ04MSiO0c0FT6YSATOqaajDxkjpYkgE0xYluQQwVtJzNmdCbovCClAIw4l7TCaZnclxZmmxBsYIWCqpahJoTDQd3vmqGWETxCxBgVDBt%2B7wphhZNPZr9kuZEH1xSg7OT%2BewWwm3Ei4ErqEaTJkZHeWVJtyBbKmxRoxJunSqbCl9cqr0i6i7RnjgcDXCwVkoW7KkJnwAGQ6Gc4rplnoCBS1s7c4WJwd8sjLyLrTFbounseFO9xmKJynSD744%2FwLB7eWxSHIbb3GerESrj3XG%2BgimZDHxFPGERq4NTJx9K8ap86no4MwE4e%2F%2FGbEoTBNcP6tmk0rpzlxOouE8Eqpij%2FA8Q5lDljgCsTv9DEpmEk8gCSQYPYFiCpItj26x%2BLd10SmSsGobCdDMMJTOcrvlINq%2BC3RUkr1l50vIQA12XXCRv5GH9rM0v9OKVxhDwDG0l%2FNGSGDPdF%2BR%2BPq9zuTFWf943phB6XqRKgr9VWOuIDeaY44gAG8%2BWiGBZ7KIBvKB%2BTPE3kz85VYoHzwygwE3wYAtJfCduxFyKzmBcS3BdyiUsLyjCI00RypLujlHL%2Bbps2mwqoDnYv6NFrIweMCOMR8WQt6vKGYni8lLntmUb0VKfyLWYPOcwgsbRyQY6pgGevyKgi4qAKJcZpBm7zFODemDxRE4qKcVdDZ5SKP5yXi2RfB9T8THD4Cv%2BXkHsDH9ZNQEgon97L4lCXyn%2BgDU6U2VtigboSfYIQRutMBC4WPx3UbVGcgR5rAMBTk%2F57R9Gk86gP0MjCyAh5ialZacPgNxuP5jC1Jm8U0%2Fq4%2BYhsDbiRBN%2FQ6LCKM2AhMc1PJOrAI1QpY0ToZPkfVD9K9k2zqpaP9tD&X-Amz-Signature=e5216096b0495b3266156e4ecaeca3b3424e0b6b2a68aa039ea45439c96d7db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

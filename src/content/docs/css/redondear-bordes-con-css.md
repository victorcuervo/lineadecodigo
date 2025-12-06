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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTL5IWYR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF5aD4lyUj8Ip63ldvBxbjQyT5Rb%2FztvzJMTeYrnl2vgIgf7aarQ6rC8lHCnWVnsYHE9joYfOtMcV0iNoqaUHQ1KMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH6c%2BmentcbUNC2xeyrcA30jH3Xq0MuHJ7boAGWUjVx8abpRGz0L05Dp%2FJAIHBYZQzSiU1BN10OVERV6xU7FvVuBpoAdtGNK90CQo5Nl%2F5aX%2FqsWAgSTFjyQIjpX460RBWyn1ovJoPp0Enj%2FnwHdeYBtSxFWrZWRAiLqP6tlXIQwRuLyLlhKeegK9Mqy%2B%2FIhCbXAtvBebjEw1bhwJqJWHKE%2FZw2u5xDA1YRU2mT7Mjw21x7wjBPMyurCIhpLsPLW4FDREtvo7V5ldTfNaX8Dn7T82FVcC4rf%2FmDNPbaOfMQpTfx2N0X6yub45zPio0zv5QqPcE4LEjaLlYN5LDqIRMkLrSi6PeatvEjEZoxogU4cQ5%2FZXsvGkrMx1QMlzSpwE6EpAURud44NMidHuFuRNRVPVu7wJS1Voqc%2BzO%2FKOxxWoY55qXswzYVIA4j8CGCqajSTKnF9sHcrcIrdVjIvmTUh%2FaTr%2Bi6MSl2xmuMfPpZraQrTCaBmP8qOuqlBVr2A9p34OrSwGlYvQFbdbj4x89C3LR23MXOgxIx8uEW6uqQomBZoclmrOjtpnFCXDhjxC%2FYQZmT7HINLJE9beEg26f69JylHgmV9crRfXvpjv8UcjtAk42LPmoYE%2BEFtdBMiUSX6HHTa%2BOluvH6gMP%2B8z8kGOqUB3wY6MsDZq6WZnAzX7JEs7OPGQb%2Bgf1RRMqI1nUKnYdlbqaG4id14xcHzghyL%2BAvp5YueNbmmt8b6zpb9wB8hMywTDUg3%2FFmoBCOxHYiPqqAemVKZLi6F4Dl36akTFcrsEFWGvHmg%2F4TCddXwOCYIZQc%2FhhVrmu9CgolpkLtgaqmb2%2FGlhZ64oy4GQFmNGQ5207zHmhlj1bUekvdnLf4c9dh7IW%2B%2F&X-Amz-Signature=86d498da2a188c0be7f1e17877e3f88c248fd6cb7338cf2c6d38e644fef94a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTL5IWYR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF5aD4lyUj8Ip63ldvBxbjQyT5Rb%2FztvzJMTeYrnl2vgIgf7aarQ6rC8lHCnWVnsYHE9joYfOtMcV0iNoqaUHQ1KMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH6c%2BmentcbUNC2xeyrcA30jH3Xq0MuHJ7boAGWUjVx8abpRGz0L05Dp%2FJAIHBYZQzSiU1BN10OVERV6xU7FvVuBpoAdtGNK90CQo5Nl%2F5aX%2FqsWAgSTFjyQIjpX460RBWyn1ovJoPp0Enj%2FnwHdeYBtSxFWrZWRAiLqP6tlXIQwRuLyLlhKeegK9Mqy%2B%2FIhCbXAtvBebjEw1bhwJqJWHKE%2FZw2u5xDA1YRU2mT7Mjw21x7wjBPMyurCIhpLsPLW4FDREtvo7V5ldTfNaX8Dn7T82FVcC4rf%2FmDNPbaOfMQpTfx2N0X6yub45zPio0zv5QqPcE4LEjaLlYN5LDqIRMkLrSi6PeatvEjEZoxogU4cQ5%2FZXsvGkrMx1QMlzSpwE6EpAURud44NMidHuFuRNRVPVu7wJS1Voqc%2BzO%2FKOxxWoY55qXswzYVIA4j8CGCqajSTKnF9sHcrcIrdVjIvmTUh%2FaTr%2Bi6MSl2xmuMfPpZraQrTCaBmP8qOuqlBVr2A9p34OrSwGlYvQFbdbj4x89C3LR23MXOgxIx8uEW6uqQomBZoclmrOjtpnFCXDhjxC%2FYQZmT7HINLJE9beEg26f69JylHgmV9crRfXvpjv8UcjtAk42LPmoYE%2BEFtdBMiUSX6HHTa%2BOluvH6gMP%2B8z8kGOqUB3wY6MsDZq6WZnAzX7JEs7OPGQb%2Bgf1RRMqI1nUKnYdlbqaG4id14xcHzghyL%2BAvp5YueNbmmt8b6zpb9wB8hMywTDUg3%2FFmoBCOxHYiPqqAemVKZLi6F4Dl36akTFcrsEFWGvHmg%2F4TCddXwOCYIZQc%2FhhVrmu9CgolpkLtgaqmb2%2FGlhZ64oy4GQFmNGQ5207zHmhlj1bUekvdnLf4c9dh7IW%2B%2F&X-Amz-Signature=5b7918d1bbe228d2e358cc4bbe96488ab97c5f5ad66073d3cf044883491bf232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

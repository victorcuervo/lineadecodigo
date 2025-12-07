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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3FWJJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGTaO6hH0v%2Bo9EPKPtPoaF0k7UVQkCXJ7QA5H6pzCf%2FAiAcGcA7KAae8%2Bx2qnuTvSqQXQxUDgFWdRty1jfypmURsyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrFeDRDU1BwJ%2FTwUKtwDsDphsuMz6Nh11%2FU%2Bd2finZPsNILToPNULGYWkz6PctSjF5h2zA2J40U%2B6Y%2Ff05BYpl7nFekQN2rIUjTUnqBmRH3gjfusHCsXDmrLEJQZVyGPdA5rQIaZSnq7OhmBiHDz6eaUWJtNCZW%2F1e%2BakSsRrXQ5Euf3GUeWutNTITemDqRify8yKxnUrHxNGbdIRBYtHbZ5hmnywG5K6EvIIzBUqJfjrYrlAZfR22QUONkyNz6a2epMRWBlSts2PSubyslrbg%2F6%2BbJUdFFUdP1KVfrNIuPaF3oW8aFMFhL5ZTWZu4hDwfJE6WlDjpWToy7VZBhongWTIjEWXkD7mpuxY%2FPErevy3y%2FR0DBaUJjMRMho5bapPSAQP8XxNpXF%2F1Lx0ffLnzD5IREnCX2rWe4IyZNqmJPchgxXlRm5rdcDkAZmIQIMWeVzD5bA7wlFOL0u1cSrNGRft6FZRpKBcEZmc18FM2Dj50WiAjLUzBrZbgNZSKYWBsG%2BCYcVn2NxipXBDfk6Rl0GF1WjcMIoGURKq2YSQTHF2AHm1EGyhmPcR7NxrqIJxxLPYaH%2BWyQPOs%2B%2B1eZpChtgvEsw1UGRvC%2BvXgy7Br6tuC9GVsIoxTgV6pKYcRE%2Ba1tFzOGWPMClqwEwiL%2FWyQY6pgEiBpu3%2F4sa8yFjW9wAnibD3sJ93Oca80qqMGg47TqRT40WC6qz1224PdXieu8bJ6dcIIklOjUDGQuZLVgs32wtVikbwqRjYSOCrNz1GGfgHrKdDXbYUdP7JgcQLIbF4ps%2F583qWvPMIn4P75NB8CmQzrgo8orL2jdnR%2BBDeoIL16JNg%2FzNztWGrKXZ1BOd%2FYlXVjtaAb9%2FuinAPw2W1a96cRA9Jp2x&X-Amz-Signature=1fe0f6363b3079089836100104b0d3db2dab1270482d2136a5f2e80e4cfdea60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3FWJJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGTaO6hH0v%2Bo9EPKPtPoaF0k7UVQkCXJ7QA5H6pzCf%2FAiAcGcA7KAae8%2Bx2qnuTvSqQXQxUDgFWdRty1jfypmURsyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrFeDRDU1BwJ%2FTwUKtwDsDphsuMz6Nh11%2FU%2Bd2finZPsNILToPNULGYWkz6PctSjF5h2zA2J40U%2B6Y%2Ff05BYpl7nFekQN2rIUjTUnqBmRH3gjfusHCsXDmrLEJQZVyGPdA5rQIaZSnq7OhmBiHDz6eaUWJtNCZW%2F1e%2BakSsRrXQ5Euf3GUeWutNTITemDqRify8yKxnUrHxNGbdIRBYtHbZ5hmnywG5K6EvIIzBUqJfjrYrlAZfR22QUONkyNz6a2epMRWBlSts2PSubyslrbg%2F6%2BbJUdFFUdP1KVfrNIuPaF3oW8aFMFhL5ZTWZu4hDwfJE6WlDjpWToy7VZBhongWTIjEWXkD7mpuxY%2FPErevy3y%2FR0DBaUJjMRMho5bapPSAQP8XxNpXF%2F1Lx0ffLnzD5IREnCX2rWe4IyZNqmJPchgxXlRm5rdcDkAZmIQIMWeVzD5bA7wlFOL0u1cSrNGRft6FZRpKBcEZmc18FM2Dj50WiAjLUzBrZbgNZSKYWBsG%2BCYcVn2NxipXBDfk6Rl0GF1WjcMIoGURKq2YSQTHF2AHm1EGyhmPcR7NxrqIJxxLPYaH%2BWyQPOs%2B%2B1eZpChtgvEsw1UGRvC%2BvXgy7Br6tuC9GVsIoxTgV6pKYcRE%2Ba1tFzOGWPMClqwEwiL%2FWyQY6pgEiBpu3%2F4sa8yFjW9wAnibD3sJ93Oca80qqMGg47TqRT40WC6qz1224PdXieu8bJ6dcIIklOjUDGQuZLVgs32wtVikbwqRjYSOCrNz1GGfgHrKdDXbYUdP7JgcQLIbF4ps%2F583qWvPMIn4P75NB8CmQzrgo8orL2jdnR%2BBDeoIL16JNg%2FzNztWGrKXZ1BOd%2FYlXVjtaAb9%2FuinAPw2W1a96cRA9Jp2x&X-Amz-Signature=e78adf0f9ac8604011d885aa8f772cf18b0458f5e204398136abb621134077b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

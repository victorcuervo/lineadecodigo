---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FRXD35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXIP3D7x%2FZdMB3bto1lLBVzlwKCpagFSX%2BhCCRE20lAIhANokvJ6XokHkQoEW5l6Bf%2BCBkCCRnPxrrvESPhZS%2F0LZKv8DCHgQABoMNjM3NDIzMTgzODA1IgyfRvGPyExJGf3LkBEq3AOh093oDW5UrX22R7%2FYrmSFdOaCMxwH4%2FrMlX8KE8yLUFtvOC9GiNCqAo6DdZ71pNhCny3WlGPKiy%2BAZzHMeAmPjLV4OUhcA8kTOz882865JE7FdIt3yC390eOJsjI0UW6oGeNrwgauJR8xNGYdLH3Py5eARQ7fTr6yOa0SfPtfCgfNcyACbJcCmrfy%2BrYD5zRD8Nr9EdhzMS9Y9%2BymupIqDew%2B8EHViPuBE7%2FQdyvuu7cpYQGWu%2FOp6W97Y3gk51%2FVPZUh6VoaGWTruN5jRsR0r0cP6%2FDbRpND8OTIUpLWgH3uID7B4ZWNV1jDUNJVG3jdCyZlS6wlDTCJQ6F3k5vpVxAaQ1tqDZ4fFxi5g2rqR1bU7jh44OROJcoGQKnjG02Yvq%2BWF9pMNty3M70mkinG2dbxbZ4Yh%2BYEbifpCHLAgBpQDFm8uhregb0ya3gSdc5Ze9CVqLMWIhwXd5hv6edkBVue6bjBKEPvZqpgfSh5%2FoH1ueW93w8IuH4U%2BdlU7YTAjOAmXCgjsCOLbZLPHT%2B6qK8DzftnqwGHqON%2FMrBm9r5IB5YDpDH0TXJWR4AGsS7tLn8xx1o9FWVbWwFpvJOOKFtoWPV43WtEqVx%2FQrP6MGx5%2FgWnVS4yWVKI1TDinYnKBjqkASZ28NEkOxLU0msPeg1Xw57nYm467R3MFOBYekRFbqYNIKQxz%2BG8pfy5I8BJEm02CcnSj2MWe6%2BLct5DZ5C9JqijIBZ3BGQ%2FPa1hZzDsJyUSSj32oODqG68IUf4DYsYKc9jd8u4SIipi88cxIOsEHKbQls11LU3joZqKO5Ap7dBMCh6%2BvPdvhj259nTkNZzkJbsD85%2F%2BUSjgEiFQyNB%2Bscs8lqP6&X-Amz-Signature=4341dc5f19c892703820a57e0f020c989c66c29e29ab13d65b5f4b79eda14b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FRXD35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXIP3D7x%2FZdMB3bto1lLBVzlwKCpagFSX%2BhCCRE20lAIhANokvJ6XokHkQoEW5l6Bf%2BCBkCCRnPxrrvESPhZS%2F0LZKv8DCHgQABoMNjM3NDIzMTgzODA1IgyfRvGPyExJGf3LkBEq3AOh093oDW5UrX22R7%2FYrmSFdOaCMxwH4%2FrMlX8KE8yLUFtvOC9GiNCqAo6DdZ71pNhCny3WlGPKiy%2BAZzHMeAmPjLV4OUhcA8kTOz882865JE7FdIt3yC390eOJsjI0UW6oGeNrwgauJR8xNGYdLH3Py5eARQ7fTr6yOa0SfPtfCgfNcyACbJcCmrfy%2BrYD5zRD8Nr9EdhzMS9Y9%2BymupIqDew%2B8EHViPuBE7%2FQdyvuu7cpYQGWu%2FOp6W97Y3gk51%2FVPZUh6VoaGWTruN5jRsR0r0cP6%2FDbRpND8OTIUpLWgH3uID7B4ZWNV1jDUNJVG3jdCyZlS6wlDTCJQ6F3k5vpVxAaQ1tqDZ4fFxi5g2rqR1bU7jh44OROJcoGQKnjG02Yvq%2BWF9pMNty3M70mkinG2dbxbZ4Yh%2BYEbifpCHLAgBpQDFm8uhregb0ya3gSdc5Ze9CVqLMWIhwXd5hv6edkBVue6bjBKEPvZqpgfSh5%2FoH1ueW93w8IuH4U%2BdlU7YTAjOAmXCgjsCOLbZLPHT%2B6qK8DzftnqwGHqON%2FMrBm9r5IB5YDpDH0TXJWR4AGsS7tLn8xx1o9FWVbWwFpvJOOKFtoWPV43WtEqVx%2FQrP6MGx5%2FgWnVS4yWVKI1TDinYnKBjqkASZ28NEkOxLU0msPeg1Xw57nYm467R3MFOBYekRFbqYNIKQxz%2BG8pfy5I8BJEm02CcnSj2MWe6%2BLct5DZ5C9JqijIBZ3BGQ%2FPa1hZzDsJyUSSj32oODqG68IUf4DYsYKc9jd8u4SIipi88cxIOsEHKbQls11LU3joZqKO5Ap7dBMCh6%2BvPdvhj259nTkNZzkJbsD85%2F%2BUSjgEiFQyNB%2Bscs8lqP6&X-Amz-Signature=d315295199bc1ad48f356dc7cf42d9ba8ecc4493eaedabb9291b6a31ef37ef9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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

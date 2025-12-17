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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPQQGXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFe3pZXncBllk8UPjO2A5NSQltJIZ%2FS9J8z9Vx6Q3PsAiB9dTdHnS4HIjyFs7ks71xiNV3sMBuRRyU6rIvO3UYdwCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTBg6eWpvjz6w0vw7KtwDKJmtdJ8VfYrIi380pUfW7P4W3vYTroD1RWu3Np61VGwK7%2FtnMLJn6VeO4abl6mfTbNlVumSw9TH8M2QuHEsslsy%2Fb%2BSKD6H7ep0HooLmmQVIaviF9B%2FlRL9sg9y%2Fr%2F68UgQT8N76Ubl7dTJpZ2qIP717D8TUcrt7HMQs1pQ%2FX1kUe4F0EUINC7wlSXWYWwm8X1wO6W%2FoW7do2e6ULsBMoFYfbVydhv5diml9TfNeb1m9RwrVjOoofnWoHXvlxYlmOaIA16IoV1hiAoxPvbEN%2B6rrv2%2Fa5Q%2Bcjn9djOvBQz41yEfPieFxS2p4GYMGfGkintBgJxuK3IjzUZofcvbZiq3orv70kHxlPXMUI1lvaGe7XJN%2FfQ13eIj9srn16bEqxJ%2BYdpZGx8jSOt7%2FHx9LfPEBpjpIRYKO1mAdSpNMoFLAvj7sPNYPBjIfZwJs8K%2FiQ0ztiLwncjJcxRPIOKCtYMC4PtpCTHY7a8iQYvf1hxkMfSLHS9VaNjwUqVSgjH7Ykvdk8%2FFt%2FVme5yEY0jMz5GT4VwNjomPmRP3e2kdR5DbjtlMVrT1bdH6hOF3RBXbk%2Fr6slTFXXLu04t3W5KLwLQs93IUEtMKxmCYKwEMPm5uOcHHa2GVCWIYmt9QwkLeJygY6pgHY6EkIW8RSPKcarS%2FBxwTqe2CJdwtHe%2BI5K4X7dTq667pqoDf6rPAyrQJJOKqUOW%2FoD0PVuVYm3l9PMbbc9MNgkVziK5S91kdGQ155opSNsyE%2BssSfQJ3PYbnoS25ypEFWw3UVdE4ySC9lZL58HtRPVKZxb7tBTMO2PseWEODoMIiaWDZTnuHi2JmMbYREQf0ATvD34h9jsKSUYO6LgTs%2FIb%2F30n4e&X-Amz-Signature=b568286f0ae5fc157f39167d391fda73d58fbddf49e2d2fd0fedaf5d026760d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPQQGXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFe3pZXncBllk8UPjO2A5NSQltJIZ%2FS9J8z9Vx6Q3PsAiB9dTdHnS4HIjyFs7ks71xiNV3sMBuRRyU6rIvO3UYdwCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTBg6eWpvjz6w0vw7KtwDKJmtdJ8VfYrIi380pUfW7P4W3vYTroD1RWu3Np61VGwK7%2FtnMLJn6VeO4abl6mfTbNlVumSw9TH8M2QuHEsslsy%2Fb%2BSKD6H7ep0HooLmmQVIaviF9B%2FlRL9sg9y%2Fr%2F68UgQT8N76Ubl7dTJpZ2qIP717D8TUcrt7HMQs1pQ%2FX1kUe4F0EUINC7wlSXWYWwm8X1wO6W%2FoW7do2e6ULsBMoFYfbVydhv5diml9TfNeb1m9RwrVjOoofnWoHXvlxYlmOaIA16IoV1hiAoxPvbEN%2B6rrv2%2Fa5Q%2Bcjn9djOvBQz41yEfPieFxS2p4GYMGfGkintBgJxuK3IjzUZofcvbZiq3orv70kHxlPXMUI1lvaGe7XJN%2FfQ13eIj9srn16bEqxJ%2BYdpZGx8jSOt7%2FHx9LfPEBpjpIRYKO1mAdSpNMoFLAvj7sPNYPBjIfZwJs8K%2FiQ0ztiLwncjJcxRPIOKCtYMC4PtpCTHY7a8iQYvf1hxkMfSLHS9VaNjwUqVSgjH7Ykvdk8%2FFt%2FVme5yEY0jMz5GT4VwNjomPmRP3e2kdR5DbjtlMVrT1bdH6hOF3RBXbk%2Fr6slTFXXLu04t3W5KLwLQs93IUEtMKxmCYKwEMPm5uOcHHa2GVCWIYmt9QwkLeJygY6pgHY6EkIW8RSPKcarS%2FBxwTqe2CJdwtHe%2BI5K4X7dTq667pqoDf6rPAyrQJJOKqUOW%2FoD0PVuVYm3l9PMbbc9MNgkVziK5S91kdGQ155opSNsyE%2BssSfQJ3PYbnoS25ypEFWw3UVdE4ySC9lZL58HtRPVKZxb7tBTMO2PseWEODoMIiaWDZTnuHi2JmMbYREQf0ATvD34h9jsKSUYO6LgTs%2FIb%2F30n4e&X-Amz-Signature=aecde7edb2328cb1bf75371ec8437f69f07cfadc13aeae76c3acb1133fe060a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

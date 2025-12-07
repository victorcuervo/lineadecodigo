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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKR5RCC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO7L79Pvi%2FO%2Berp1qI68WsM3zUgZJC3o%2BmBM6y3phocAiEA8T52itvSwO1Wga6Co4WM0QyJSdapx8VkwiUKl9of40sqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEyNPRidE8BNxNcHyrcA%2FX7gnbAwkX1AevTD1zbOt4W5yVBTCRcEhqUXjGW0F7SPI7vxwItR2whOTUhkn%2BtKvuh%2F4z%2BrDW09ElNi04ZbZ5NLsRD1eh34d5HSFcd9sAYUTZ49LurMIdaOO2UnpmhVeag%2FHBGISqCLRwvSjS1s2Fh%2BV%2F8E%2BxuVlLpixxU7hqZPAqfpmFi9b9iwsrav3Elpbg6pbn61gixzXMVjruyI54%2Bz8xsgnQXTMixhqmMYPDiGBts%2FawXad8K%2Fks1%2FoTB1vGO7VlQvlFl%2FH3qX4UKMaDopi7vLouub2p7wZJq1Ih6fph0WkY%2Bx%2FIuKQ%2Ba7o56baKAZtvAg%2B2F7j73d2tpWL%2B9DyjXhWnXk6QbjFCW3DsfV0j4c3t444BXcu23QcZB5xKImODDofSoymQNp%2BGQa8VY7LnGg8jUmOh8wjYIw4h1jkYj9d%2FjmGUWJGHnniiKVeX67TWr8Uq1XeyAiSwZBjGtYGFFPaBuql2obONf%2FM7e%2BH9WOGjTSbOjH2k%2BFPRX7lsRv9Ypp5DzZc169X7ZnhP1kffZk8VqL0AAvJTTt9Ves%2BfM2YpKG4Jx%2BAqWX944OH9Mao5ljOggW8ljdtFD0M5PMlaROPbV91am2T7DPzMjzu3YjQjKb1D%2FG2YaMPCy1skGOqUB90CVuRVAyoa27LdIOjnR78CvSnUgncXjGCIMAk0xVltkRsfcRaalSlIP%2B77vbytZMbTKfT%2B93QJl2njKMvmzJu4rOciefEhwOz88oC7FXF2fozvXviPdwveVh42BJmgQ11DAZL3XFx59Pf0AkNVwe72XntUJI3p9GJugLYMaFs%2F7U%2BYszE8kYFXhgOtkwa1fqmpKmHPhVh%2BS5C56OFaXU7rgE78q&X-Amz-Signature=2d0b4a110a106ee31376dc3f5b702072dc1117a6413b52812d36fa825a6e5c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKR5RCC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO7L79Pvi%2FO%2Berp1qI68WsM3zUgZJC3o%2BmBM6y3phocAiEA8T52itvSwO1Wga6Co4WM0QyJSdapx8VkwiUKl9of40sqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEyNPRidE8BNxNcHyrcA%2FX7gnbAwkX1AevTD1zbOt4W5yVBTCRcEhqUXjGW0F7SPI7vxwItR2whOTUhkn%2BtKvuh%2F4z%2BrDW09ElNi04ZbZ5NLsRD1eh34d5HSFcd9sAYUTZ49LurMIdaOO2UnpmhVeag%2FHBGISqCLRwvSjS1s2Fh%2BV%2F8E%2BxuVlLpixxU7hqZPAqfpmFi9b9iwsrav3Elpbg6pbn61gixzXMVjruyI54%2Bz8xsgnQXTMixhqmMYPDiGBts%2FawXad8K%2Fks1%2FoTB1vGO7VlQvlFl%2FH3qX4UKMaDopi7vLouub2p7wZJq1Ih6fph0WkY%2Bx%2FIuKQ%2Ba7o56baKAZtvAg%2B2F7j73d2tpWL%2B9DyjXhWnXk6QbjFCW3DsfV0j4c3t444BXcu23QcZB5xKImODDofSoymQNp%2BGQa8VY7LnGg8jUmOh8wjYIw4h1jkYj9d%2FjmGUWJGHnniiKVeX67TWr8Uq1XeyAiSwZBjGtYGFFPaBuql2obONf%2FM7e%2BH9WOGjTSbOjH2k%2BFPRX7lsRv9Ypp5DzZc169X7ZnhP1kffZk8VqL0AAvJTTt9Ves%2BfM2YpKG4Jx%2BAqWX944OH9Mao5ljOggW8ljdtFD0M5PMlaROPbV91am2T7DPzMjzu3YjQjKb1D%2FG2YaMPCy1skGOqUB90CVuRVAyoa27LdIOjnR78CvSnUgncXjGCIMAk0xVltkRsfcRaalSlIP%2B77vbytZMbTKfT%2B93QJl2njKMvmzJu4rOciefEhwOz88oC7FXF2fozvXviPdwveVh42BJmgQ11DAZL3XFx59Pf0AkNVwe72XntUJI3p9GJugLYMaFs%2F7U%2BYszE8kYFXhgOtkwa1fqmpKmHPhVh%2BS5C56OFaXU7rgE78q&X-Amz-Signature=4ec15c61a8e15ca5a271a382d4f80ee1614206400f2bbe6ce7409cd38839d8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

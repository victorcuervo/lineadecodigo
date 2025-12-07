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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWO3ACFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3jJmk%2F%2BVzVv3TAGgWtzvh0K4ieefy8Z2IWNJBx44j3AiArjP2%2FxbWbaiKHg86qMMo95PiwY0RZWBP4HnCqDz5FCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiDjUSYiOGlCcyAyKtwDQK%2FuIXmnczPWL5F5yJPzYpPkIH9t6VF96yjRqvrNxHc9y9hZfak4c7LnMrtbGOisN6x78z9xZZAL0oS3by0kQrRCOo1zyFkapRkAntOR%2BKsYmmvydGGJLFmIguZBS%2BahS2Tbpeb1wI3PLe9rH1HDRzCqLmIqQik8zfZstKl6Z5Lg01geu7YoeOs6qQ3pLRaZBOGjosjXNWlTP2t%2FzTIqkDpzYbV%2FcOR%2BdFfoBPWrQTrCFlIoo7c63wGwVZzFd7DH6vPxYDvhiepbjlN1xF4JObI%2FRIoIAJM55l%2Fg1wlkOVAKCpOVEq4QEPI6shCKwActu50ObM57a2lLiP7IYVxbtAiEsvJHZzwoZ28HAlw5JkZ8l73Sb0QBvDMvGUH9GxrmHsQ3x1Tt%2Bq5Mn0T0FZsIU%2B7GJNruxSNpkbnS9JLXIP5J6W9PyIoBT2ZTkr0kQftvEd9LbMf%2FHEBnTSOKqOzkR2FmWb%2F5r9P7rvFFzg2LAyJG2FzLnPlDMcGHoFEt61Sl7SQ3m8TVuY71%2FoIkPBqeFIes4wgE%2Bc2KG8CmAmAiN5eyrFYeXlBe%2F3HUuUyWpx92vFPaJR7VZXvyLkud%2BssY1sEZfEDIyO2NAe8kTHG2cC0naceoEye77xEXhz4wpv3SyQY6pgEcrz2d65hfASxGJ2dbQyneQcR0bceifEykehitTXikCYlz%2FEGXYw6C8pl56TEypPDJxsOS5Q%2FMH8%2FClT7UA%2FMJg72uoGfTe9fBJcmB20hYT0S2wRg8TDkSnpfAEvlclwcOwEERPRsgbafC1HceFFPK0meKZ6ehxU3b6ffVXTOttLKi24hLrKiIk8gDP%2Foc8fkZdTjh7v0xej0vpcYPTRlRu6sVbGpL&X-Amz-Signature=5453b6e636dcb31c30a5450ef1a0932a606f7b559002e6e095796019fe3b4db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWO3ACFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3jJmk%2F%2BVzVv3TAGgWtzvh0K4ieefy8Z2IWNJBx44j3AiArjP2%2FxbWbaiKHg86qMMo95PiwY0RZWBP4HnCqDz5FCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiDjUSYiOGlCcyAyKtwDQK%2FuIXmnczPWL5F5yJPzYpPkIH9t6VF96yjRqvrNxHc9y9hZfak4c7LnMrtbGOisN6x78z9xZZAL0oS3by0kQrRCOo1zyFkapRkAntOR%2BKsYmmvydGGJLFmIguZBS%2BahS2Tbpeb1wI3PLe9rH1HDRzCqLmIqQik8zfZstKl6Z5Lg01geu7YoeOs6qQ3pLRaZBOGjosjXNWlTP2t%2FzTIqkDpzYbV%2FcOR%2BdFfoBPWrQTrCFlIoo7c63wGwVZzFd7DH6vPxYDvhiepbjlN1xF4JObI%2FRIoIAJM55l%2Fg1wlkOVAKCpOVEq4QEPI6shCKwActu50ObM57a2lLiP7IYVxbtAiEsvJHZzwoZ28HAlw5JkZ8l73Sb0QBvDMvGUH9GxrmHsQ3x1Tt%2Bq5Mn0T0FZsIU%2B7GJNruxSNpkbnS9JLXIP5J6W9PyIoBT2ZTkr0kQftvEd9LbMf%2FHEBnTSOKqOzkR2FmWb%2F5r9P7rvFFzg2LAyJG2FzLnPlDMcGHoFEt61Sl7SQ3m8TVuY71%2FoIkPBqeFIes4wgE%2Bc2KG8CmAmAiN5eyrFYeXlBe%2F3HUuUyWpx92vFPaJR7VZXvyLkud%2BssY1sEZfEDIyO2NAe8kTHG2cC0naceoEye77xEXhz4wpv3SyQY6pgEcrz2d65hfASxGJ2dbQyneQcR0bceifEykehitTXikCYlz%2FEGXYw6C8pl56TEypPDJxsOS5Q%2FMH8%2FClT7UA%2FMJg72uoGfTe9fBJcmB20hYT0S2wRg8TDkSnpfAEvlclwcOwEERPRsgbafC1HceFFPK0meKZ6ehxU3b6ffVXTOttLKi24hLrKiIk8gDP%2Foc8fkZdTjh7v0xej0vpcYPTRlRu6sVbGpL&X-Amz-Signature=2586c230e9ed6a6219031ab7214bb11a97b8a538165b5f596f7ce0210ee52faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

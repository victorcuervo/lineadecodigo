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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ2OXXU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgwV6JD3wbf%2B%2BGpiJXuXgYjOGJyokZyT%2FExBo2NAOz%2FgIhAKXnebLP%2FAuhLc8xnh7lHWJZCFggz1p8p0nEDtO466uDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBc4mZZDMC7LOllRQq3AMsTIgzmVHP20dtrcB4ddkxQkpDAJc3UOAiNnJr5OtxRLaHBPR14xxwlGBVCVgI4QxP8J1Z%2FvRPIC6n8XyfTR7Mh0p0NOWP%2FbBT%2BZBK%2FOXKDzLWCdCoQIdG1y7ifd1%2FhP1KShpmzOuFJ%2B8EaUBICBVTC60dMMJE3TUrjyUBgqjmd4aFzaVzaqrsAvTy6cd7lspKkG8OHZ3VgPCG7JPbYC%2BfQ%2FETl0igbki02m4m3oleQLhWi0FsyiJvB5nbyu8viGRzlyakVBcYUr8O%2F0nOp8E4h1lai2WoxwqtiXI%2FI%2Fl%2B9Sk2NYPPmRkdcrtJcrJOieCsiSU9QB2NLMJ%2FL2KuJ7xjbKcgVZlQxgYY0ndFXR7X%2BeTCUOtGBlM9M%2BCFZwXPENtmLajZ2JLJNbaIhPSz3QSfHT1HLFPp8HePnk3oPkJ6BKQkONZeYRfbu6bPRPqgSjXExUrG7FFpXqNha6j%2BPmSsPYukuahm29RRFRa%2BVopiAXkp4Hjucxze26s24jyuGQLvc6ePLbrlKNo9EgzYa41AC2QgLKG8SYDRYtPAtJmo8ror3ulPU3kVJJ0Haj3bDJ2smpbf1aE4BPBigXIVtLlvWgwR2T%2BEDCQAISvBl0scJpdi8ew7g3DNkCNY0jC7ot3JBjqkAS77%2BBSG%2FrDe7YemjMHimowWM3NAdcHLlLNh1WO%2BkwBQDcdIs3e3HEpuVNQ4dfenCBcznryHmX4OE2h367BNQqSXb%2BegJse4nzb8JORdX3E5TK0oTZophlA4VGONqu1qF8H8fu%2F4tyhHB6TUf8%2BdjQe4BVKVnF1jQs1U9CFgU%2FrOK0rio5Ty6xxUTuSlUMyYztWTtjeo28Pcd2f7AEvQk0GfNqut&X-Amz-Signature=12d7bb81285a153c1606353ec12606c9c2a39c3556ac60f819bad6d29a6f06e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ2OXXU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgwV6JD3wbf%2B%2BGpiJXuXgYjOGJyokZyT%2FExBo2NAOz%2FgIhAKXnebLP%2FAuhLc8xnh7lHWJZCFggz1p8p0nEDtO466uDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBc4mZZDMC7LOllRQq3AMsTIgzmVHP20dtrcB4ddkxQkpDAJc3UOAiNnJr5OtxRLaHBPR14xxwlGBVCVgI4QxP8J1Z%2FvRPIC6n8XyfTR7Mh0p0NOWP%2FbBT%2BZBK%2FOXKDzLWCdCoQIdG1y7ifd1%2FhP1KShpmzOuFJ%2B8EaUBICBVTC60dMMJE3TUrjyUBgqjmd4aFzaVzaqrsAvTy6cd7lspKkG8OHZ3VgPCG7JPbYC%2BfQ%2FETl0igbki02m4m3oleQLhWi0FsyiJvB5nbyu8viGRzlyakVBcYUr8O%2F0nOp8E4h1lai2WoxwqtiXI%2FI%2Fl%2B9Sk2NYPPmRkdcrtJcrJOieCsiSU9QB2NLMJ%2FL2KuJ7xjbKcgVZlQxgYY0ndFXR7X%2BeTCUOtGBlM9M%2BCFZwXPENtmLajZ2JLJNbaIhPSz3QSfHT1HLFPp8HePnk3oPkJ6BKQkONZeYRfbu6bPRPqgSjXExUrG7FFpXqNha6j%2BPmSsPYukuahm29RRFRa%2BVopiAXkp4Hjucxze26s24jyuGQLvc6ePLbrlKNo9EgzYa41AC2QgLKG8SYDRYtPAtJmo8ror3ulPU3kVJJ0Haj3bDJ2smpbf1aE4BPBigXIVtLlvWgwR2T%2BEDCQAISvBl0scJpdi8ew7g3DNkCNY0jC7ot3JBjqkAS77%2BBSG%2FrDe7YemjMHimowWM3NAdcHLlLNh1WO%2BkwBQDcdIs3e3HEpuVNQ4dfenCBcznryHmX4OE2h367BNQqSXb%2BegJse4nzb8JORdX3E5TK0oTZophlA4VGONqu1qF8H8fu%2F4tyhHB6TUf8%2BdjQe4BVKVnF1jQs1U9CFgU%2FrOK0rio5Ty6xxUTuSlUMyYztWTtjeo28Pcd2f7AEvQk0GfNqut&X-Amz-Signature=8baf7949aac9c1aad87c769b7d1337df075b4d2e49531e84510e459d63df9f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

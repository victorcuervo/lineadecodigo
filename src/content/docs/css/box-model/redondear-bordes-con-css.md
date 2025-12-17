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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMHVNJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZRs5vSaqW5EgSSxYZpPPstIBYVzcheeUA3oZSRtNfQIgXUvkysHqxmhigS05UOyS80jI1DWKyTPTTwVp%2Be9F37MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN5Zq2sk%2FVhiMhJvircA7DQom6ojS4sBRZB00SLL9sLKB8idxKSk1Ga%2FKkat%2FZW293pL%2FnS849GmT43%2F6FPN0TaW%2Fo0vCmE9OM9K0y3K0ua8%2Bzq%2BevVV9jWD7S0lC7pRAcTkB1XoWL84z79og4Xy5BEVhxOU35nR117aqgcAKGnzDjzWoygIh1lmuquf66Fp2x%2BtYTXNZtdPv4QF1j9lHgU44beyNXohPPrizC6Nzdu5DmdqpHqQ0v9qUYgEmz2VcyBZ05KE0Xh5zKzZShx4QBiMllp9lj8keCsfRcPrYdxQUWdr8rxHov0FZNFuPdqmEkwkmtMoPk%2FvcnHRwpetgt%2FA2HxoImYOJpGOAz9%2BLPOt%2BeEpbOAItqe6ViO2wCd7T%2FG6p21bJsaePX1w6%2FPb0ZsV9UyVv9FEI%2BEQY9dSOLVDE86Bh3wZFL2u23%2BAptNdhSOalzutyMvffAjmu15Vjky21ZnrARVX2FuWq29Lt96VfHcDhthv9OI73cgrgXL9YjeDcMyPigIy3tIsiLyRbCqZHXZS%2FUURlPyYOTYhesJHJOIb1oxqW0k50aZX9tTaLArEBUtctM%2FrkedBsUh3ZSqWksxf4w2KfewvaNd5YBuD3o9ieC5lrxVwSYNoHv74dM0xBXcKetSZCoGMIOgi8oGOqUB7zP37gBjdsK7IbStxfRCTkPacUZepXTJNQjEaafRC8SeIEe60w299K2IrPq%2F8iI61n5YTXNusG83R0uLSnqOyFEqiWi4mFN4N3MjJMvVRWwczf%2BqJuriGMBIH611Wa5AXdNNCDUbemkRjHQfh8v9oRx1eUDuI4LPyzgcI%2BD29fJveeJw7wmu5bjhccxEeHWr8ykFO791AoKVdFxCtcNnW5hJ5zi0&X-Amz-Signature=e4e8c1d8e2c07b19afaf3d126e8665ab43f7b9fc3a395d3704c7ae35583579de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMHVNJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZRs5vSaqW5EgSSxYZpPPstIBYVzcheeUA3oZSRtNfQIgXUvkysHqxmhigS05UOyS80jI1DWKyTPTTwVp%2Be9F37MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN5Zq2sk%2FVhiMhJvircA7DQom6ojS4sBRZB00SLL9sLKB8idxKSk1Ga%2FKkat%2FZW293pL%2FnS849GmT43%2F6FPN0TaW%2Fo0vCmE9OM9K0y3K0ua8%2Bzq%2BevVV9jWD7S0lC7pRAcTkB1XoWL84z79og4Xy5BEVhxOU35nR117aqgcAKGnzDjzWoygIh1lmuquf66Fp2x%2BtYTXNZtdPv4QF1j9lHgU44beyNXohPPrizC6Nzdu5DmdqpHqQ0v9qUYgEmz2VcyBZ05KE0Xh5zKzZShx4QBiMllp9lj8keCsfRcPrYdxQUWdr8rxHov0FZNFuPdqmEkwkmtMoPk%2FvcnHRwpetgt%2FA2HxoImYOJpGOAz9%2BLPOt%2BeEpbOAItqe6ViO2wCd7T%2FG6p21bJsaePX1w6%2FPb0ZsV9UyVv9FEI%2BEQY9dSOLVDE86Bh3wZFL2u23%2BAptNdhSOalzutyMvffAjmu15Vjky21ZnrARVX2FuWq29Lt96VfHcDhthv9OI73cgrgXL9YjeDcMyPigIy3tIsiLyRbCqZHXZS%2FUURlPyYOTYhesJHJOIb1oxqW0k50aZX9tTaLArEBUtctM%2FrkedBsUh3ZSqWksxf4w2KfewvaNd5YBuD3o9ieC5lrxVwSYNoHv74dM0xBXcKetSZCoGMIOgi8oGOqUB7zP37gBjdsK7IbStxfRCTkPacUZepXTJNQjEaafRC8SeIEe60w299K2IrPq%2F8iI61n5YTXNusG83R0uLSnqOyFEqiWi4mFN4N3MjJMvVRWwczf%2BqJuriGMBIH611Wa5AXdNNCDUbemkRjHQfh8v9oRx1eUDuI4LPyzgcI%2BD29fJveeJw7wmu5bjhccxEeHWr8ykFO791AoKVdFxCtcNnW5hJ5zi0&X-Amz-Signature=090b204903a772c3565cb6e00c5e7dffe71705598abc77d45fdcc5e6a842b7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

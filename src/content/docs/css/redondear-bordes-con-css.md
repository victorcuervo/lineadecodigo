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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLU2CZT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN%2FyvCmOHIr8vg8CZLWjU0XkalUSSJ%2FzYvKcYZ4LWaoAiEA6XdySSFsx9YBcCtgrtPGoQtW%2BMukDge0aCmH91OJns0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFwpPMAaHoYvdy7e%2BSrcA08%2F%2BdvnuEIlA2MxekwkYJYE3TwVSusumvqjumgTVyyqXmW40NcDQgXtnfr39YnIBzMHgjMea6u8oMGvtqozeNB0QHkT1FpG7%2FEXmvOBDPMWJcJrgKi7qha6e0ALKiY1hlVNl1boXA8zKujU2ZX8RCQSiEldnNiYZJ%2BzJMoxZyx8L462oRYT1BmayUV8SfK1SQP8prE78XcTSfSg2CaGeWTo59jwpiZyj42YFg%2FSYWttz7CccxwKwDJClfv5x9qB%2F55nPKJ4B6782f7iUVDIY4eUdDP%2BZoFq5YgLEF7O13nkdRLUjtivxWyRgzex3iKkriUgIb56O6rpVNq6oHz0C%2BUYpfj0yQ2QzmJ8vXHrKYJYagq9m%2BR6BGQFrq5KIJQ6yULjholCQfOMsGd9UVpYE%2FQ5Kvv9GTST8tXMoPJx033%2FG0gKenHfr4w3Zm7yfbUTi7l32ZdBekW1bx2JE7QLuwzVn9B5JQp5NAolWIsOtDfGk91QpaTR92i7KaNZRcDN%2BK48hrl1ehd5nf2stnHydmXHL0D7Fft2R0fCS1KDCA2StgkyoNaJtsrQJ%2BMpAOIR3czq%2F%2BXelzkcMnQNrvgteTdfE8XPSjY2RU3XNctIFLaMwrtnIC8UBYi3n5qoMLuvyckGOqUBMQGYVhRs%2BuU65c3r0fMA7XWNwTgDgrCvlKZm5%2F7XXkH4V4npA4E1Y0Ij9TL0%2FmBLqDFXeQXrAW5z7sq2wDq%2B%2Fh5UkInx9o9DbHE4gm%2BiOB%2Bz4wIvnewrI4NoDLmXZOFjDGBhXMAF67hcUmEghrRmHJIO8hsnhVEjPczcQNfkAwcKKsphFJyUgVylcf47%2FCgnKtstoNrEWlNeyje9eRvkibnQyHqD&X-Amz-Signature=484c80010d78cf2b0d3811eb5907f814bdc6d99cb4f7f922383136471cadb8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLU2CZT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN%2FyvCmOHIr8vg8CZLWjU0XkalUSSJ%2FzYvKcYZ4LWaoAiEA6XdySSFsx9YBcCtgrtPGoQtW%2BMukDge0aCmH91OJns0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFwpPMAaHoYvdy7e%2BSrcA08%2F%2BdvnuEIlA2MxekwkYJYE3TwVSusumvqjumgTVyyqXmW40NcDQgXtnfr39YnIBzMHgjMea6u8oMGvtqozeNB0QHkT1FpG7%2FEXmvOBDPMWJcJrgKi7qha6e0ALKiY1hlVNl1boXA8zKujU2ZX8RCQSiEldnNiYZJ%2BzJMoxZyx8L462oRYT1BmayUV8SfK1SQP8prE78XcTSfSg2CaGeWTo59jwpiZyj42YFg%2FSYWttz7CccxwKwDJClfv5x9qB%2F55nPKJ4B6782f7iUVDIY4eUdDP%2BZoFq5YgLEF7O13nkdRLUjtivxWyRgzex3iKkriUgIb56O6rpVNq6oHz0C%2BUYpfj0yQ2QzmJ8vXHrKYJYagq9m%2BR6BGQFrq5KIJQ6yULjholCQfOMsGd9UVpYE%2FQ5Kvv9GTST8tXMoPJx033%2FG0gKenHfr4w3Zm7yfbUTi7l32ZdBekW1bx2JE7QLuwzVn9B5JQp5NAolWIsOtDfGk91QpaTR92i7KaNZRcDN%2BK48hrl1ehd5nf2stnHydmXHL0D7Fft2R0fCS1KDCA2StgkyoNaJtsrQJ%2BMpAOIR3czq%2F%2BXelzkcMnQNrvgteTdfE8XPSjY2RU3XNctIFLaMwrtnIC8UBYi3n5qoMLuvyckGOqUBMQGYVhRs%2BuU65c3r0fMA7XWNwTgDgrCvlKZm5%2F7XXkH4V4npA4E1Y0Ij9TL0%2FmBLqDFXeQXrAW5z7sq2wDq%2B%2Fh5UkInx9o9DbHE4gm%2BiOB%2Bz4wIvnewrI4NoDLmXZOFjDGBhXMAF67hcUmEghrRmHJIO8hsnhVEjPczcQNfkAwcKKsphFJyUgVylcf47%2FCgnKtstoNrEWlNeyje9eRvkibnQyHqD&X-Amz-Signature=51b60e60430623972fe12e4af3850b2684ba19bb2284012d543f6f4033ed484b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

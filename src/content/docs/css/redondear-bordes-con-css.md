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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FF4EP4H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCya%2Fh0ovaOgilf34TBkRmFnDQyrfw0X55RTBAh0oe9oAIhAObMI8N5x%2FoUM%2B4xm6K9KOJcAXCZi%2FxYyt69HtFnam4uKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypdtNgtaHaQ48Z9PEq3AO%2FtQ4M7xYxpN18SatVTaKhNlwoJ%2B%2Bb%2FKvSkKnNbevtomUkbLR0TvxrUPsdkt%2BrhuE3zJhdqu3u7wgla1PoCiXpzvUlrML4E%2BaeFaC17AZaWY%2FCe7aFCHaEhTZCdZvK0lsZm6ml5uA1NkpFLt%2Fs%2B%2BIDhukRdyOp4hlwnlfEwDIQHG%2FD91ej5O1QJ%2BelVLpqBPaTOvGlAjio5H7KMtmmUMmFeYAOAYPL3FVlme6SiCezP0XfUzgHzMALzzSgy5MovpX16C1YU6lDa5p1HS4gYLwJambJG04%2BErLUSVEHK0jmVrI49%2F7e4rFeei16l8EeOz4njWQ3TxHJPnnbZxdZG7bjKMemR8KsHvAln%2BXueiaDOmz7lrg%2FRd9FyzkoVN4UoOUBO%2F1HfD5RUHbVE%2Bmj3ih7i2o%2FSs6pK6ImNi59u5ex8Lb2IrM4NBN6WEWdGNeqRVGX5hEeo0N401TQPuxUmK4TEGv0cTobZ9j5A5b12NXRv3C3JRZNo%2F7xEKRy6sVtgTw8u5tTUnaR%2BHFNv8AUzc3KgSWi%2FdTYSLupzclov17pm3YUUhlmT7q9nYp4FtRUMkIrwMmDos2gaesjhe22M9%2Bx0D%2BPEpAbUyzMpZxdim7qP%2BRYZn4Fq0mvyTz9MTDm0NnJBjqkAT%2FRTR%2F6aS84E9a0Ok3XlkIYGB%2BsbGU1NFQo92l3Am3V0r2EptwREwAkZPofPYrxmv%2FCtXIsuwbcpKuRhv8Tqvy35hqjbxXyi%2BRKX4pIwX%2FZSvW8ftsZWoWLVv%2F%2BT%2BSXDaeh%2FG9%2Fd2j2%2BEMdLPE6bDS9AWsb2BLH81APoBjZd1lvN3vkNRSp0SbAMJA%2BLAuzqIgLeNMlAJ9xVdW9V0PflGWOWorU&X-Amz-Signature=bf688b2045cadc56d0a5a67f79a33c9a5431c93a0ab0cb8cecaf7de36e36cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FF4EP4H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCya%2Fh0ovaOgilf34TBkRmFnDQyrfw0X55RTBAh0oe9oAIhAObMI8N5x%2FoUM%2B4xm6K9KOJcAXCZi%2FxYyt69HtFnam4uKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypdtNgtaHaQ48Z9PEq3AO%2FtQ4M7xYxpN18SatVTaKhNlwoJ%2B%2Bb%2FKvSkKnNbevtomUkbLR0TvxrUPsdkt%2BrhuE3zJhdqu3u7wgla1PoCiXpzvUlrML4E%2BaeFaC17AZaWY%2FCe7aFCHaEhTZCdZvK0lsZm6ml5uA1NkpFLt%2Fs%2B%2BIDhukRdyOp4hlwnlfEwDIQHG%2FD91ej5O1QJ%2BelVLpqBPaTOvGlAjio5H7KMtmmUMmFeYAOAYPL3FVlme6SiCezP0XfUzgHzMALzzSgy5MovpX16C1YU6lDa5p1HS4gYLwJambJG04%2BErLUSVEHK0jmVrI49%2F7e4rFeei16l8EeOz4njWQ3TxHJPnnbZxdZG7bjKMemR8KsHvAln%2BXueiaDOmz7lrg%2FRd9FyzkoVN4UoOUBO%2F1HfD5RUHbVE%2Bmj3ih7i2o%2FSs6pK6ImNi59u5ex8Lb2IrM4NBN6WEWdGNeqRVGX5hEeo0N401TQPuxUmK4TEGv0cTobZ9j5A5b12NXRv3C3JRZNo%2F7xEKRy6sVtgTw8u5tTUnaR%2BHFNv8AUzc3KgSWi%2FdTYSLupzclov17pm3YUUhlmT7q9nYp4FtRUMkIrwMmDos2gaesjhe22M9%2Bx0D%2BPEpAbUyzMpZxdim7qP%2BRYZn4Fq0mvyTz9MTDm0NnJBjqkAT%2FRTR%2F6aS84E9a0Ok3XlkIYGB%2BsbGU1NFQo92l3Am3V0r2EptwREwAkZPofPYrxmv%2FCtXIsuwbcpKuRhv8Tqvy35hqjbxXyi%2BRKX4pIwX%2FZSvW8ftsZWoWLVv%2F%2BT%2BSXDaeh%2FG9%2Fd2j2%2BEMdLPE6bDS9AWsb2BLH81APoBjZd1lvN3vkNRSp0SbAMJA%2BLAuzqIgLeNMlAJ9xVdW9V0PflGWOWorU&X-Amz-Signature=c1879980cc08f33db768fd9044c1629e12f29dbc43bf5d2f3e650a7cab69353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

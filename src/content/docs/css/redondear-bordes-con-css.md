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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMWXKQI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUqy575phgedL5ppWIpfxBkLgf9K%2Fe49ZQ5095zh31LwIgSCT8Ly2WO3VGDDLhQnhsbSHvH8iYcZVobx%2FYLgEV%2BtEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMWevVSkvsHrzFKTEircA1ysNiPXV3ZVVpY8cpUH2gIeGzdrij48OKONGayPbc5CVmDY62r8O3Kc1ju%2FnPcKbwRWzJtkNtnL38LL4ngJscnKrvcWpTEbKibl%2Fufhed9X20UjKuqkF9FmjfxibmZC8D6dlfjwzab4ZDf1NWLQsmTSda4%2FEtWx%2FhKNtdB%2FguskIc2hRrOZTeYqhVNs3CgJzzi39euAX9TAzShj2zzyMGkURUUmTsScv2nTSbo2jL4wUG7e5xhbX1iEe0NyQ4kemzze6HtVYGxWqBxVxtssgbxyeGsIXwI0JHmPtJ%2BH%2BGn35cflEH1Vo6lFAe3cW47E2bBKpQZqzcbDpL3Un4MHOmTz%2BLPYdZ0nx%2BZ4lRPuSj37qgIJVncjvAs6L%2Fi%2BrTxh8N%2F%2BrNUs88gChtJSjfFhAWB4OfUyWZqpHDGwUG35yvgyaTiGOCxdjHXLzdbjzpx6KNHeUGut1EFyv2OSQtKDwSZL8w3AYUMGUPEUksBALUQxc6np66tNQVXKeEGeU5hkldAhqpCS4KVrCxOcDAi4CUE868tvu3Shf0oIXHsGeNAUfGtLtm5FFkeSQjGj8%2BU5NAJWLaDfundg3xivJrQI2BKa5iCkmhudeg%2FONS9rCqK%2F6wSXOS%2FBW3a6faURMPPMyskGOqUBZGxcFLF9bK7xNZdPn%2BbOSyam2BQ5hQg7sl7TU72hHYco6qBpnVxKDtxa2%2BisL7zWMvnJRUjLS5M5krxpC2xQx9XzU9LJ3csSxrn2wPb6RRkQdSVfgDZ3dQFleVw%2FdwGps%2FpgevhWCbii0eQZHgwlx7C1eoqN1wBtkusNpqWOcWdUJNmzSQ8JeqXwe0ArMBPLUY7sDB%2F8%2FodaM1y0feChpsiTVn5y&X-Amz-Signature=2ddd095cd5080d1244d95d6a14caf1a66d5749bd7d18af7df283cec6ac9dd1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMWXKQI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUqy575phgedL5ppWIpfxBkLgf9K%2Fe49ZQ5095zh31LwIgSCT8Ly2WO3VGDDLhQnhsbSHvH8iYcZVobx%2FYLgEV%2BtEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMWevVSkvsHrzFKTEircA1ysNiPXV3ZVVpY8cpUH2gIeGzdrij48OKONGayPbc5CVmDY62r8O3Kc1ju%2FnPcKbwRWzJtkNtnL38LL4ngJscnKrvcWpTEbKibl%2Fufhed9X20UjKuqkF9FmjfxibmZC8D6dlfjwzab4ZDf1NWLQsmTSda4%2FEtWx%2FhKNtdB%2FguskIc2hRrOZTeYqhVNs3CgJzzi39euAX9TAzShj2zzyMGkURUUmTsScv2nTSbo2jL4wUG7e5xhbX1iEe0NyQ4kemzze6HtVYGxWqBxVxtssgbxyeGsIXwI0JHmPtJ%2BH%2BGn35cflEH1Vo6lFAe3cW47E2bBKpQZqzcbDpL3Un4MHOmTz%2BLPYdZ0nx%2BZ4lRPuSj37qgIJVncjvAs6L%2Fi%2BrTxh8N%2F%2BrNUs88gChtJSjfFhAWB4OfUyWZqpHDGwUG35yvgyaTiGOCxdjHXLzdbjzpx6KNHeUGut1EFyv2OSQtKDwSZL8w3AYUMGUPEUksBALUQxc6np66tNQVXKeEGeU5hkldAhqpCS4KVrCxOcDAi4CUE868tvu3Shf0oIXHsGeNAUfGtLtm5FFkeSQjGj8%2BU5NAJWLaDfundg3xivJrQI2BKa5iCkmhudeg%2FONS9rCqK%2F6wSXOS%2FBW3a6faURMPPMyskGOqUBZGxcFLF9bK7xNZdPn%2BbOSyam2BQ5hQg7sl7TU72hHYco6qBpnVxKDtxa2%2BisL7zWMvnJRUjLS5M5krxpC2xQx9XzU9LJ3csSxrn2wPb6RRkQdSVfgDZ3dQFleVw%2FdwGps%2FpgevhWCbii0eQZHgwlx7C1eoqN1wBtkusNpqWOcWdUJNmzSQ8JeqXwe0ArMBPLUY7sDB%2F8%2FodaM1y0feChpsiTVn5y&X-Amz-Signature=a86028d80e6f7baf198a5adb7d1f26c702bfff7c79050eb34acf198c872b7ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

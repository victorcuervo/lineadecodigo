---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAE5QE7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFKTzvQP0w%2FQxhDPVFqx%2F6mLw0vCgBFmH70TMPko%2BeU5AiA0Pxf9ljphhEN4kdgQLtVUi0xQ7hybBkEqy6sXeCgl%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcHPQU7q3obdydrbKtwDV5Q93A%2BJJ2OfljMKXk6O5kWcUp7G1UITkXU9yEA5MZwOVcdqOeyJ2IYQYa1BC6%2F%2BWgV6NA4i2LZTWYiQXSXcRHHICUpAhcqBPcplsWzWpowk28D%2FYnjsDLKEO2P3XePM27olt%2FDLo%2FTBTcfLDhHJCv2Y8ZheFlqp4tSb087lurGgHzGpzrpRl8vhC%2BJ73OJsGSpa1bqM8RAtB5zve8WRZRkV9w7CRVnLRlNdpqiMBkkiwSnhLs%2BHwpUMbUMy5%2Fr4jscQrmnjLW5NcNOlqT%2BzaIHSLPdFL8qdM7pAfFYKYtiQ%2FUEz6YnCWdceoZBVWn%2BU0PvRl135B8tWjlONEwRnlf77NTirU9KzGA%2BE1VPfJpQIwRUDMUsFxMdMSy5sgB7jN5RG4%2B3ki41CjN6ka7yZyCd%2F%2F%2B3Dj1EDPDjmeG3A4UC%2B8Jrv9D9bqO2CtOWqavqOaa630Fu4MMr9IOXcel2bc%2F1x3R6Px%2FAgQ%2BIH2LaC2CAeSiFlK%2BZftrmKcaU7eeqgFs1oBPmK8FGj8wBgSt55nWl0wqxyWBD5X6oIkVbAVbZCz9jfXyhibqJvHl7ET76g%2Ba8pB%2FhFTfgxD9yjLEZ69uyAZ8M2rP51upN6%2BHVXNjGdPS7k%2FR1jgY4k5mUwrMrFyQY6pgGjpxK9hIG8GaENYFgxsda909pffcsZ3uml7t8Mg%2BmUlPNsNEc9eUZKg5GqCS09JvvGk%2FwjSQ0QEeDdLZ47r%2BHsG97bjQ3v7yrd2pSJCvunxDfba7b5JoE1fvy4v0V1Ke3ALx7K9OTmTow9fP7HTll%2BtREpL8nKwXYVfmf81BvKU7DgS6%2BcrS%2BFlPKY3yQHEchp1iVPn8ZnDDalnauL1TXwAphj1Ktp&X-Amz-Signature=667a6bf6919aa15d72e3ecc3cf3754b9910a451185f19895745ff4f6d5d553f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAE5QE7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFKTzvQP0w%2FQxhDPVFqx%2F6mLw0vCgBFmH70TMPko%2BeU5AiA0Pxf9ljphhEN4kdgQLtVUi0xQ7hybBkEqy6sXeCgl%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcHPQU7q3obdydrbKtwDV5Q93A%2BJJ2OfljMKXk6O5kWcUp7G1UITkXU9yEA5MZwOVcdqOeyJ2IYQYa1BC6%2F%2BWgV6NA4i2LZTWYiQXSXcRHHICUpAhcqBPcplsWzWpowk28D%2FYnjsDLKEO2P3XePM27olt%2FDLo%2FTBTcfLDhHJCv2Y8ZheFlqp4tSb087lurGgHzGpzrpRl8vhC%2BJ73OJsGSpa1bqM8RAtB5zve8WRZRkV9w7CRVnLRlNdpqiMBkkiwSnhLs%2BHwpUMbUMy5%2Fr4jscQrmnjLW5NcNOlqT%2BzaIHSLPdFL8qdM7pAfFYKYtiQ%2FUEz6YnCWdceoZBVWn%2BU0PvRl135B8tWjlONEwRnlf77NTirU9KzGA%2BE1VPfJpQIwRUDMUsFxMdMSy5sgB7jN5RG4%2B3ki41CjN6ka7yZyCd%2F%2F%2B3Dj1EDPDjmeG3A4UC%2B8Jrv9D9bqO2CtOWqavqOaa630Fu4MMr9IOXcel2bc%2F1x3R6Px%2FAgQ%2BIH2LaC2CAeSiFlK%2BZftrmKcaU7eeqgFs1oBPmK8FGj8wBgSt55nWl0wqxyWBD5X6oIkVbAVbZCz9jfXyhibqJvHl7ET76g%2Ba8pB%2FhFTfgxD9yjLEZ69uyAZ8M2rP51upN6%2BHVXNjGdPS7k%2FR1jgY4k5mUwrMrFyQY6pgGjpxK9hIG8GaENYFgxsda909pffcsZ3uml7t8Mg%2BmUlPNsNEc9eUZKg5GqCS09JvvGk%2FwjSQ0QEeDdLZ47r%2BHsG97bjQ3v7yrd2pSJCvunxDfba7b5JoE1fvy4v0V1Ke3ALx7K9OTmTow9fP7HTll%2BtREpL8nKwXYVfmf81BvKU7DgS6%2BcrS%2BFlPKY3yQHEchp1iVPn8ZnDDalnauL1TXwAphj1Ktp&X-Amz-Signature=fa06a5f070746377320687629a028b11fc72fdf350cbded1aa66ea4b726ecca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

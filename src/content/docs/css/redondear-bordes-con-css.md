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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAHBBY5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTyitkYVJ%2BTogod5WNjy0ZTu30Sh%2BPrVfiJ21%2FM1cXsAiAOZ1fzcc0l3rODRnDhEeYneaO3wrElCp1JMu6FI7sjFiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqxSzNNlyFb2o%2BBhlKtwDM2zajb4AlmoWYm3tHh9WLO69LvEoZ1SDaRy5iFkoDoQVzHUL24V6vErfA%2Ft3%2Be%2BUkS3jtvpxq9r6T7PSJfFhp8afNfWEHkiayZD4ElsDcD7EbP%2BM8jBXjNkartOLdxLPfTcbCZl3N6mtK5%2BDOqGEFY4OvDPTzHI6LBm3nFpB%2By0GWhuhgOqAOEYOcWOD6glu62rjCn%2F%2FBDmwcH8whpCVTpoh36cTdta%2F27V6zjfRCiR0TMxE6izmhBjmiGf93Ly6ejJPIEH%2FDTRDJU3CcrXRCFNcgNQ8v%2B9%2FquTAQ7%2BKHBszB%2F27CrUes8zPfHk8FWyL%2FzKhlDUvzeQbswPqBxSg93Mwo%2Frr7JYslD0uadz67w8iQtduN69fYRaHJmaT91AlTPho25guJkHjjogLOL9Qznt%2Fp7ye0GpwbFC6AXf7WbRcjjW5HyXBEgT6n0qpFm1zSlX6LnfElo%2BZHVoF%2B0FuXHfY6bnok%2FNut%2F9HETd3bf6r5o6g%2FqRSJ0mZf1OY3f2bw1QgTpKa%2B1bIpSB6Qm0oi%2Bwn6F73Q1WiBIvMW5tMdBNd9euHNvd7xopKehZNHCW%2BN7VthdBBIH4KXBGapPTYdH0H4uWlaxZNxHwfWEnS7Jwwt1rcp4QMtCOFyasws6PUyQY6pgHowqKo6T46sI5I2O2T%2B3z%2Fa3fDQLK2YoE7GnvsGsHCfdcs9uDNRLt1swQRiWcP8hvUhDsBn6qwNxgaiLvB6Zb2X%2FBQuO6VTh9yzJidKV%2BBQHt8Zo0uywbrJott%2B7zjwzylFqE63SD4WEZGX%2FC1bWEUSW0eUXBoJdvPDAf9oCslrzJnZ8NL6SKBhgiItz67o4jixp3HEkDvlsg52SS2FvyUU%2FoqThq6&X-Amz-Signature=7aef041b159f309cbc225f64c757dc23ab8fa9ffb3c873bf241f6053fe4117ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAHBBY5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTyitkYVJ%2BTogod5WNjy0ZTu30Sh%2BPrVfiJ21%2FM1cXsAiAOZ1fzcc0l3rODRnDhEeYneaO3wrElCp1JMu6FI7sjFiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqxSzNNlyFb2o%2BBhlKtwDM2zajb4AlmoWYm3tHh9WLO69LvEoZ1SDaRy5iFkoDoQVzHUL24V6vErfA%2Ft3%2Be%2BUkS3jtvpxq9r6T7PSJfFhp8afNfWEHkiayZD4ElsDcD7EbP%2BM8jBXjNkartOLdxLPfTcbCZl3N6mtK5%2BDOqGEFY4OvDPTzHI6LBm3nFpB%2By0GWhuhgOqAOEYOcWOD6glu62rjCn%2F%2FBDmwcH8whpCVTpoh36cTdta%2F27V6zjfRCiR0TMxE6izmhBjmiGf93Ly6ejJPIEH%2FDTRDJU3CcrXRCFNcgNQ8v%2B9%2FquTAQ7%2BKHBszB%2F27CrUes8zPfHk8FWyL%2FzKhlDUvzeQbswPqBxSg93Mwo%2Frr7JYslD0uadz67w8iQtduN69fYRaHJmaT91AlTPho25guJkHjjogLOL9Qznt%2Fp7ye0GpwbFC6AXf7WbRcjjW5HyXBEgT6n0qpFm1zSlX6LnfElo%2BZHVoF%2B0FuXHfY6bnok%2FNut%2F9HETd3bf6r5o6g%2FqRSJ0mZf1OY3f2bw1QgTpKa%2B1bIpSB6Qm0oi%2Bwn6F73Q1WiBIvMW5tMdBNd9euHNvd7xopKehZNHCW%2BN7VthdBBIH4KXBGapPTYdH0H4uWlaxZNxHwfWEnS7Jwwt1rcp4QMtCOFyasws6PUyQY6pgHowqKo6T46sI5I2O2T%2B3z%2Fa3fDQLK2YoE7GnvsGsHCfdcs9uDNRLt1swQRiWcP8hvUhDsBn6qwNxgaiLvB6Zb2X%2FBQuO6VTh9yzJidKV%2BBQHt8Zo0uywbrJott%2B7zjwzylFqE63SD4WEZGX%2FC1bWEUSW0eUXBoJdvPDAf9oCslrzJnZ8NL6SKBhgiItz67o4jixp3HEkDvlsg52SS2FvyUU%2FoqThq6&X-Amz-Signature=fc333a5b05bae3dd00ee5153be4673e534ee18022722f48832934e8b92d738a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

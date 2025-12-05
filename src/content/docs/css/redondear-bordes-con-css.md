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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66F7KH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICODiE8ltHN6Tuj8jx%2BHTywMhxfWNgAn4RdLR%2F8by4nrAiEA%2FtMX1U%2BNVpZkiL6P0aZmkI85QDVZkm3WbcGyH3Fdbxsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHMMw7ay7zt5X9sqiSrcAz2GZ5f%2F6FMy3UKEai%2FXoegKbVaVJc03af610PN6e%2BhbBkPiBFPjoX4DvxRdoXL4TJlRbKaunNb%2BjYhR2jGbhOT311mHo7IzjEJj9LooPSE1D7Np0pnKIC9%2B3HE%2B%2BfQtRRNPsy93wm2gyy%2B1bCmj%2B45jPNsDXe6XVZbP7HWVUtnQYOHkb0y%2B8S6O0vOQmASJmmRWzmISZeUerTlhyrSX58hTWMBRaQezP2Kswhtpo1AmsnGKBHEKHWbizwgqbF%2F6hYwcuhwzIjUinnIFudPvwtnsN4I04KE57E8UxRgF14qOvyVc6pZsPR1MqcAhGG0%2BKhVRuEPKpngP2m9W5zDvc0xwQRIuLTDKwxc97%2BTaifqgfMmWudNTVJFs5Nv6tpDHZfby8jed10YtgDqLuDJybE%2F75GUTWsO1AhANjtj7UcHXGEWpolK%2By3XjgGOo%2B3T6RoJwuCbW4mngeOCri2FhS9oT%2FYdo8oFRcqbMxEDRtFR%2Bla%2BUTM5YwtYg4f5HWqcYVQoVCFfnBexZfwOKwPM%2BJ5M2tSZOOY8vP894Sna6QbfRj4HfeC22YiS90Vuzi%2BviOCZIJhJPxK55iXGpzzvXwacpo0cVqlVhnMFnSEb6hy8Bicf3kF96ovmkUZsJMLTGzckGOqUB0pfSahVWKzEZZJqT5ZExCF000sqcfNY46RFFt1rCdaGRoVipcIvzgce%2F8BR9I6R1ATgvo%2B1Vq1O3EP8qu%2F6A%2FTTkNvG3qzhsqtT24yOjot0YM1zrq5mLvSEEcW%2BxVKaJ1vsqgWr1kqjhC%2BjaZMF0n2EYlY%2Bl3nnI4XSrJZMMNncKW78%2BO%2BcSMEy6K7vYBsb6JuZ1nuniZDwMvtKn%2BxFA7pKKheC5&X-Amz-Signature=73c1dc6738f72894cbe9bb95d42a1e1e0329ef12d1e357fd050727e55ceacc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66F7KH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICODiE8ltHN6Tuj8jx%2BHTywMhxfWNgAn4RdLR%2F8by4nrAiEA%2FtMX1U%2BNVpZkiL6P0aZmkI85QDVZkm3WbcGyH3Fdbxsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHMMw7ay7zt5X9sqiSrcAz2GZ5f%2F6FMy3UKEai%2FXoegKbVaVJc03af610PN6e%2BhbBkPiBFPjoX4DvxRdoXL4TJlRbKaunNb%2BjYhR2jGbhOT311mHo7IzjEJj9LooPSE1D7Np0pnKIC9%2B3HE%2B%2BfQtRRNPsy93wm2gyy%2B1bCmj%2B45jPNsDXe6XVZbP7HWVUtnQYOHkb0y%2B8S6O0vOQmASJmmRWzmISZeUerTlhyrSX58hTWMBRaQezP2Kswhtpo1AmsnGKBHEKHWbizwgqbF%2F6hYwcuhwzIjUinnIFudPvwtnsN4I04KE57E8UxRgF14qOvyVc6pZsPR1MqcAhGG0%2BKhVRuEPKpngP2m9W5zDvc0xwQRIuLTDKwxc97%2BTaifqgfMmWudNTVJFs5Nv6tpDHZfby8jed10YtgDqLuDJybE%2F75GUTWsO1AhANjtj7UcHXGEWpolK%2By3XjgGOo%2B3T6RoJwuCbW4mngeOCri2FhS9oT%2FYdo8oFRcqbMxEDRtFR%2Bla%2BUTM5YwtYg4f5HWqcYVQoVCFfnBexZfwOKwPM%2BJ5M2tSZOOY8vP894Sna6QbfRj4HfeC22YiS90Vuzi%2BviOCZIJhJPxK55iXGpzzvXwacpo0cVqlVhnMFnSEb6hy8Bicf3kF96ovmkUZsJMLTGzckGOqUB0pfSahVWKzEZZJqT5ZExCF000sqcfNY46RFFt1rCdaGRoVipcIvzgce%2F8BR9I6R1ATgvo%2B1Vq1O3EP8qu%2F6A%2FTTkNvG3qzhsqtT24yOjot0YM1zrq5mLvSEEcW%2BxVKaJ1vsqgWr1kqjhC%2BjaZMF0n2EYlY%2Bl3nnI4XSrJZMMNncKW78%2BO%2BcSMEy6K7vYBsb6JuZ1nuniZDwMvtKn%2BxFA7pKKheC5&X-Amz-Signature=9c906fc7abbf634501582fbffc357cff813418a026a492ac10a158317c8ca1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

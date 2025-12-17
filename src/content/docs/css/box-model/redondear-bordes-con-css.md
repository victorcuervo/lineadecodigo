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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALY5BLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8upg1yCaTkPIHRxEA60GVyETu1U97pLDKjgdvHJ8j6AiA30D%2Fxotim%2Fpw4yiNhkX4L0bNqPZ3CLP9PEZ1XlEV4VSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRL575%2FIsDc%2FISQZKtwDpca8AetXafbAqXdKE0PsLea6%2BC%2BT6PVP6GvA3EyWb14OmAl434H4d%2FX5P2es5ZrQH9iY%2F7DY0eZb0KK3xGpuJOgkM7o2On7guVxd7gJjRIPm%2FkivjgC4JSyRuV2pFRSm9Ib1U7O69SD5pVA9MB3qsQoFFUBAMq8Ezi6gIFEhLyxJHWzfopZOfDg9mdhoPiivGML9ATFTToJYc6QQMdlv4W%2BJPCX4elDhta2L8DBzXZZPALfg8uyNfu5yFVkO7%2BX3GipdiRIiD6EHf%2FgDl9ruZzCHZPsyBULzHxlOc75dOWu7lkgfV9YnEdVymfWGWnh60ZRkRj6iJ6d1yekcOGBNJv%2Blkog4CpZTMO1RYDKd%2FBwiZCjUX7V1HONoZMHMw9%2BJ0PXpg%2BGRa1r4zjFhllCYUmx8p76olumQShaptUtJA3vnP63%2B%2Belr2E7qa40g9Yq726zI18mjs7T4PV%2FC0wR7peE%2BBbA71yL563JdfnBvxcvmH%2Fgq%2B9ffkpxmwXiFDdzAWCDoKKKSyVtrdfowq2T%2Bnlg0mdGCGs%2BsicbZMaxwPSt7vjGuOBhmI%2F2US2NllxTsIY1IE1YAgyycD1HBLfKp2wYQrWB%2BxVxQ55xBfKrn6PeZzc%2BpP5E0yO04mukwyaCLygY6pgHt7LdvvDRBiX6dR7wO59PF%2FyAIJkIPoRJHWixW%2FzaCnV1xfHf%2B9HgALJs5SS1DU1KffBibmeYOgig6umIELiLyZSuv%2F9iOMctTX93NUWvoi2rkxvWUtACJH%2FYDl4HVj8ewnorSV8hlAgA9k3JJ3mvWeFMhIgUKrdsC4R2cIzCAOX%2F1Zeu%2FF4gRZxL4tmDry2jjVVwSbsT68aiEyPyKz6lsOZjQkS4P&X-Amz-Signature=675d85f2b9c1601bf5ff47678417db0d1a56fccaa3b5224d2af3cf447a4986b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALY5BLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8upg1yCaTkPIHRxEA60GVyETu1U97pLDKjgdvHJ8j6AiA30D%2Fxotim%2Fpw4yiNhkX4L0bNqPZ3CLP9PEZ1XlEV4VSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRL575%2FIsDc%2FISQZKtwDpca8AetXafbAqXdKE0PsLea6%2BC%2BT6PVP6GvA3EyWb14OmAl434H4d%2FX5P2es5ZrQH9iY%2F7DY0eZb0KK3xGpuJOgkM7o2On7guVxd7gJjRIPm%2FkivjgC4JSyRuV2pFRSm9Ib1U7O69SD5pVA9MB3qsQoFFUBAMq8Ezi6gIFEhLyxJHWzfopZOfDg9mdhoPiivGML9ATFTToJYc6QQMdlv4W%2BJPCX4elDhta2L8DBzXZZPALfg8uyNfu5yFVkO7%2BX3GipdiRIiD6EHf%2FgDl9ruZzCHZPsyBULzHxlOc75dOWu7lkgfV9YnEdVymfWGWnh60ZRkRj6iJ6d1yekcOGBNJv%2Blkog4CpZTMO1RYDKd%2FBwiZCjUX7V1HONoZMHMw9%2BJ0PXpg%2BGRa1r4zjFhllCYUmx8p76olumQShaptUtJA3vnP63%2B%2Belr2E7qa40g9Yq726zI18mjs7T4PV%2FC0wR7peE%2BBbA71yL563JdfnBvxcvmH%2Fgq%2B9ffkpxmwXiFDdzAWCDoKKKSyVtrdfowq2T%2Bnlg0mdGCGs%2BsicbZMaxwPSt7vjGuOBhmI%2F2US2NllxTsIY1IE1YAgyycD1HBLfKp2wYQrWB%2BxVxQ55xBfKrn6PeZzc%2BpP5E0yO04mukwyaCLygY6pgHt7LdvvDRBiX6dR7wO59PF%2FyAIJkIPoRJHWixW%2FzaCnV1xfHf%2B9HgALJs5SS1DU1KffBibmeYOgig6umIELiLyZSuv%2F9iOMctTX93NUWvoi2rkxvWUtACJH%2FYDl4HVj8ewnorSV8hlAgA9k3JJ3mvWeFMhIgUKrdsC4R2cIzCAOX%2F1Zeu%2FF4gRZxL4tmDry2jjVVwSbsT68aiEyPyKz6lsOZjQkS4P&X-Amz-Signature=8044d618d387ba9552cc01cddbba69e453827c63ceb91e291b9c41448b23beac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

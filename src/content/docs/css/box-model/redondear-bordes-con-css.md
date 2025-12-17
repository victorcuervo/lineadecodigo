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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUFPNLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD9Qs6WNmVxLQrbKYDfyp8ca1UZj5zqktBFbCwbVPvKAiEA40NjTgir7BIPfJvgU6v8KEzp8%2FcGhPSn5%2FPmiOOPJswq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK7k1DMzjNY50oGk8SrcA%2FUKWybYXwPTwdEmL2jCkxOM%2FDifNH3%2BDCTSf3drDGazHvNudkngG6rxg7T3Q%2BBFCP4SOnWiAfkRrFjlNEZLPzWBWroM9tuWRvec%2Bw5d5oTzz0xfu45EUneXigeo3N5ydlYQwOufqlbA5qV6NHx%2F4Usz8o9u2Fj8bEwcUVtIBU%2FtQhI6U6IW%2F6q0FvG%2BLtv467y19ErHyM6Ju5r154114nU8fEAFs6X0d0OQLoZ39%2B2Xc9kVfZZZciHr9FT2FuYzTzdiSTbTbGI8apUKiQlXx70Nbd65w3kBipDmDZaDd1dMdy8F5ApzhWYql9I4kFUVq8WMizYJ7fr7QaOG5RAToTs7nlPa4JijnPt2Nf9NXvKM8aqc7xJx2fmWnCjm1UGvpNM4enRxNPdasDDL70oyvRCtl6a%2BXwgrRfn24RUxWZ5S%2BKKQiT7bbGVkcBPAT6EgMCx%2BMjgGl6CPfwBVUyr44nn1%2BA1bBNLgAqhLLr9g1ieh4CoCDPgREjXFkw8ru2QS7E1RFEo4EOIs3BSq%2BL%2BZT4sdDAXxZhK%2BHHfSnVKkl%2Bt%2BS0wpiACrQ7mgG%2FrZTq5xfhDnqN8ekAeywEBQ6ey3eopIlxIv45XUEMXbypizsVDXzyNkpjfIG8BWeOfBMJuDicoGOqUBccxwbceY1Xw3TyKFmP72YCZl2sj7AJ%2FbbnizcZnGeoQZo%2FnGwBKEi6k3qbgRijS5GCFcoh003BW7OF8yVNcrMKgREkXwyvQ3C6bwXZhR0I9jgXyQsq5ok9%2BZmg10QBh9opoHnIQGDZMgWuOE796d9q8SxK1IXo1iprxe218L4PVYOs76t6CXsLi2jKA3OntowbOQjtZb0p%2BLflFSZ9rETaXIgzke&X-Amz-Signature=0b4b22ca420500bf7678f46cc7895d3c932da789204e164323ce2c658a01e5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUFPNLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD9Qs6WNmVxLQrbKYDfyp8ca1UZj5zqktBFbCwbVPvKAiEA40NjTgir7BIPfJvgU6v8KEzp8%2FcGhPSn5%2FPmiOOPJswq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK7k1DMzjNY50oGk8SrcA%2FUKWybYXwPTwdEmL2jCkxOM%2FDifNH3%2BDCTSf3drDGazHvNudkngG6rxg7T3Q%2BBFCP4SOnWiAfkRrFjlNEZLPzWBWroM9tuWRvec%2Bw5d5oTzz0xfu45EUneXigeo3N5ydlYQwOufqlbA5qV6NHx%2F4Usz8o9u2Fj8bEwcUVtIBU%2FtQhI6U6IW%2F6q0FvG%2BLtv467y19ErHyM6Ju5r154114nU8fEAFs6X0d0OQLoZ39%2B2Xc9kVfZZZciHr9FT2FuYzTzdiSTbTbGI8apUKiQlXx70Nbd65w3kBipDmDZaDd1dMdy8F5ApzhWYql9I4kFUVq8WMizYJ7fr7QaOG5RAToTs7nlPa4JijnPt2Nf9NXvKM8aqc7xJx2fmWnCjm1UGvpNM4enRxNPdasDDL70oyvRCtl6a%2BXwgrRfn24RUxWZ5S%2BKKQiT7bbGVkcBPAT6EgMCx%2BMjgGl6CPfwBVUyr44nn1%2BA1bBNLgAqhLLr9g1ieh4CoCDPgREjXFkw8ru2QS7E1RFEo4EOIs3BSq%2BL%2BZT4sdDAXxZhK%2BHHfSnVKkl%2Bt%2BS0wpiACrQ7mgG%2FrZTq5xfhDnqN8ekAeywEBQ6ey3eopIlxIv45XUEMXbypizsVDXzyNkpjfIG8BWeOfBMJuDicoGOqUBccxwbceY1Xw3TyKFmP72YCZl2sj7AJ%2FbbnizcZnGeoQZo%2FnGwBKEi6k3qbgRijS5GCFcoh003BW7OF8yVNcrMKgREkXwyvQ3C6bwXZhR0I9jgXyQsq5ok9%2BZmg10QBh9opoHnIQGDZMgWuOE796d9q8SxK1IXo1iprxe218L4PVYOs76t6CXsLi2jKA3OntowbOQjtZb0p%2BLflFSZ9rETaXIgzke&X-Amz-Signature=e8afb0478028b393c09de0edd4ef5aa5822bce2a737933f35b58db6b43f789b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

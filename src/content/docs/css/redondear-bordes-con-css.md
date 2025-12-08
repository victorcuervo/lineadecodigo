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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVKT3YW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1TSAGk7B1LT%2F1ZP1T3uzUJhPfuYrVgUCzE6FyF1xnwIhAImMnU2f5fLAGcv67yaX3yMLg%2BX9WmCxkp6fmq62BVGRKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxapphu8TlWcDxOAHkq3AMtvbx2rWvDWH81VlJf1H42wgKwm9ESd4nYAypXi2xPo8NK%2BVqsUaESXEOfyhzsQey249Qroy%2Bx8GYFdbe8B2hGet9o%2BDvX5GtDbSYLBpXSpY%2B7i55OdZ4tKLQzJFmvUTN0dVWb1vHmMLgsUtiIqtcUYwsd%2FkxBEs88QITkJs%2B2nUcuenkE5bQpqaTelcJ3wtfLDZ%2BnkCoMj4a38%2BR0V8e2z9%2Flo4bsgld%2B4xsNe%2BDt%2BvBSVwjKgQk1hHZD2SAG3%2FqwiYCBahuz4qN8myO8gTTjET2H6eakb%2Bnd1nIvSOgk7AAeRqPbKXDzVg2wTOktKwLklYY03CBYnCb9NO0ciRRHxau0gHJMii9VdDsnMPoRXGu7AZvTP8zvP4eP34XoqTrYqfqgAgf79g6vTgvtWF7frAariULwt2wzm7lPS9Y6HiNglEuD%2FbDXRyIFufstC1P4NQJ019dtEBVoTS%2BT7VmzlWdt2nbvbS1GXqewKLwEXUwdZt16ieNcUO6ArviZwXY4zpeKdpnPzzfAOibHTV6tVi4cDpZaMrYz2w3uzb3Ysz4mDVQ7NF4mZ1JgW7%2FJs5V1XLxHfuYHKgq0EnOwdNJbOZx1Y%2FS1kr8cZdQ7RRy1J%2FnfhtJcvizX8MGQuDCw0NnJBjqkAVgaHCS8RFByEi%2BEBCiWk1Av9AFo2QHI8ot6ddpF%2F3zVU%2B3qbTnZ%2BPE17Z3BYCkE2OE%2F9d1ZiCfBHWCaEAu%2BsPy9Yr3oFXtwgC9%2Be4j5ycZuSBNDh5QN4t%2Fffv4VrNrfB4AK2W6B9xXLoC6G8MNRDYNXBQ1nDPCGs5klaNW4%2BRrys6Tas0T2XqP21xzSCGzpoXmw%2FQwuSzB7BE%2BvLh7%2FTF2K%2BQQ%2F&X-Amz-Signature=700d77b520c67fbb805330c288449b1a428d0cf3d073563d419c003eddb7df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVKT3YW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1TSAGk7B1LT%2F1ZP1T3uzUJhPfuYrVgUCzE6FyF1xnwIhAImMnU2f5fLAGcv67yaX3yMLg%2BX9WmCxkp6fmq62BVGRKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxapphu8TlWcDxOAHkq3AMtvbx2rWvDWH81VlJf1H42wgKwm9ESd4nYAypXi2xPo8NK%2BVqsUaESXEOfyhzsQey249Qroy%2Bx8GYFdbe8B2hGet9o%2BDvX5GtDbSYLBpXSpY%2B7i55OdZ4tKLQzJFmvUTN0dVWb1vHmMLgsUtiIqtcUYwsd%2FkxBEs88QITkJs%2B2nUcuenkE5bQpqaTelcJ3wtfLDZ%2BnkCoMj4a38%2BR0V8e2z9%2Flo4bsgld%2B4xsNe%2BDt%2BvBSVwjKgQk1hHZD2SAG3%2FqwiYCBahuz4qN8myO8gTTjET2H6eakb%2Bnd1nIvSOgk7AAeRqPbKXDzVg2wTOktKwLklYY03CBYnCb9NO0ciRRHxau0gHJMii9VdDsnMPoRXGu7AZvTP8zvP4eP34XoqTrYqfqgAgf79g6vTgvtWF7frAariULwt2wzm7lPS9Y6HiNglEuD%2FbDXRyIFufstC1P4NQJ019dtEBVoTS%2BT7VmzlWdt2nbvbS1GXqewKLwEXUwdZt16ieNcUO6ArviZwXY4zpeKdpnPzzfAOibHTV6tVi4cDpZaMrYz2w3uzb3Ysz4mDVQ7NF4mZ1JgW7%2FJs5V1XLxHfuYHKgq0EnOwdNJbOZx1Y%2FS1kr8cZdQ7RRy1J%2FnfhtJcvizX8MGQuDCw0NnJBjqkAVgaHCS8RFByEi%2BEBCiWk1Av9AFo2QHI8ot6ddpF%2F3zVU%2B3qbTnZ%2BPE17Z3BYCkE2OE%2F9d1ZiCfBHWCaEAu%2BsPy9Yr3oFXtwgC9%2Be4j5ycZuSBNDh5QN4t%2Fffv4VrNrfB4AK2W6B9xXLoC6G8MNRDYNXBQ1nDPCGs5klaNW4%2BRrys6Tas0T2XqP21xzSCGzpoXmw%2FQwuSzB7BE%2BvLh7%2FTF2K%2BQQ%2F&X-Amz-Signature=2df2ad4e8ca1ec53007b5b30ca385a252dbff7813ff03fe502781785987f3e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

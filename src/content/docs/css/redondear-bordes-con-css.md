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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJPWOAS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8SjmCGkOwuiAcLam1H5gZWwy8Tg6ftceIQ6W6ad4LAIhAOWWP6p0KvKubPY7JgezsosRwDv%2FoWhNeG1nObtzGrvcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy27bZ0tJzc0v8DdVwq3AO3d17xWlJtHxXaKea%2FAKNy83ySEvBSjcbKatLyQmBdJ91j5u04CMpx%2FyeV8ZIZismXqn3Hvx4L9nx8Q2mRvD0%2Fcf%2BpMAbjlvrNr%2B3JJ%2B6K%2BlFeaiSgDzpUwF2kSW7bCJtXkw3Dijx1z%2BfFqPCBLQ2f8i6wY1oQz0tbBfImtbt0SatnDE09nd%2BswqKZ7sj4An4kysSkiFaSiO%2BAX0KDLJP93Rh17JIRfh8tR7R0A3A38B64RCZBRU%2B5NKpuGq8rhNIQhnd6SvJV0gNZ0GIfVb2oDUjAn9dcG1h2F6wvffeu2BWFSQd3aZtwlWw0MYvkgJLp%2Bn1DEG0N4womurJs6LVeCVAwBzptGRSJFTMfhjN1vQk0spZR3tPGDL6W0LVWvTJ2V%2FjHfd7%2Bup52GzRqErYAAyuG6pxXkkrQKwzhFeGLth3UKocraR2XKrrgXCIo7PRiv0ebX8URqdxfSQ75QrhdLfIosOrgl%2F8t26LemD9YD4splgdkU60Q6kURHsQIQlYptqtBLBBywZMwX43gsZm4Wq1p8ifgSODuJyeyrqcWycirDwr5w7yCcDZKOolYHP4ZA5pHxtlCUlW1yL0l2nG9KADNM64%2FwWsy7dyZLe%2BblFGkCtmtQbfdN414ETDyqNfJBjqkAdmB3KN8d%2BYD1G%2BDoXdpof8bGD5hQxaRfKnur0kTzeZ%2F%2Bgl2%2BNIcHBZBE0f82HVZNDi1KhFZJEDvAsIvI6m7oF6kiRp8ff7SOsklAX%2FtXEwMy69LFMcrgl5VIp5FLn9%2FovuQbJU%2Fgrd80hk4QSoL0Ho2c87ovjgtZdLihYrQd3HvgJigrS9m7LN7z69VFUVsLKzLA56IGmWiScuDruWDAlE0LT4u&X-Amz-Signature=fab8c7548e4c8f460c8f3560f8c4a71abcc3940e29aae5014c8af6a3be77adae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJPWOAS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8SjmCGkOwuiAcLam1H5gZWwy8Tg6ftceIQ6W6ad4LAIhAOWWP6p0KvKubPY7JgezsosRwDv%2FoWhNeG1nObtzGrvcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy27bZ0tJzc0v8DdVwq3AO3d17xWlJtHxXaKea%2FAKNy83ySEvBSjcbKatLyQmBdJ91j5u04CMpx%2FyeV8ZIZismXqn3Hvx4L9nx8Q2mRvD0%2Fcf%2BpMAbjlvrNr%2B3JJ%2B6K%2BlFeaiSgDzpUwF2kSW7bCJtXkw3Dijx1z%2BfFqPCBLQ2f8i6wY1oQz0tbBfImtbt0SatnDE09nd%2BswqKZ7sj4An4kysSkiFaSiO%2BAX0KDLJP93Rh17JIRfh8tR7R0A3A38B64RCZBRU%2B5NKpuGq8rhNIQhnd6SvJV0gNZ0GIfVb2oDUjAn9dcG1h2F6wvffeu2BWFSQd3aZtwlWw0MYvkgJLp%2Bn1DEG0N4womurJs6LVeCVAwBzptGRSJFTMfhjN1vQk0spZR3tPGDL6W0LVWvTJ2V%2FjHfd7%2Bup52GzRqErYAAyuG6pxXkkrQKwzhFeGLth3UKocraR2XKrrgXCIo7PRiv0ebX8URqdxfSQ75QrhdLfIosOrgl%2F8t26LemD9YD4splgdkU60Q6kURHsQIQlYptqtBLBBywZMwX43gsZm4Wq1p8ifgSODuJyeyrqcWycirDwr5w7yCcDZKOolYHP4ZA5pHxtlCUlW1yL0l2nG9KADNM64%2FwWsy7dyZLe%2BblFGkCtmtQbfdN414ETDyqNfJBjqkAdmB3KN8d%2BYD1G%2BDoXdpof8bGD5hQxaRfKnur0kTzeZ%2F%2Bgl2%2BNIcHBZBE0f82HVZNDi1KhFZJEDvAsIvI6m7oF6kiRp8ff7SOsklAX%2FtXEwMy69LFMcrgl5VIp5FLn9%2FovuQbJU%2Fgrd80hk4QSoL0Ho2c87ovjgtZdLihYrQd3HvgJigrS9m7LN7z69VFUVsLKzLA56IGmWiScuDruWDAlE0LT4u&X-Amz-Signature=6fde4c11259cd3c284e725501f5d428ea6356f8856f2d4b053adeb7c7ecdc3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4WCANZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB%2B57pUji8Ou8XBx7PAuQ343f25tTvlVIUda%2BE5tOb9AiAwI7HwhYCVnl1cCXOV9rzC%2BV44ueYFgDZp%2FCBbl%2BJshyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMhsttTUyIYoj0xgNQKtwDb2v6%2BZjUNznEYP%2ByAyIAy9WBI%2Bq%2FirAkrVtBv%2FP7lKS4ZxkRlJ2OMppDKddRXk6nnbsRUlVTmNc4s4m20ylI9I8fOdkdnr9ji0QkdeI0rMnc8NZBVeevkDuk57K9H7BKbCHZoU91kvlWpeeS6994uHFgtMkh5oMsByINYd8rcqIrssilB9bDh16l2QcH2o6bRmNAUwdFdsEUEH0qANNslNDtrxiUnPqv4J52MBcoUFNyc88ZJSd9o81N5m7p1m0qc6BU9%2BVvKL9p7cAayAYfeQWl5X6pgZvYMJ9bEiNZKikntat6ASY%2BOcjGW3VzP21a15YXdJUx4mABNrfE55F8bhd4ovxQYF6761Oyrvh1Lzecl49m5Es5PBrcULefVbyoDUcrEWE8XseKR2RiYDtb51lHds1AKL07UTvQR6Qo1OkKhkgrAu8A8NKOg%2Bp7uYS37TKhdmxeipJN%2FEW%2Biw3kCTPVC%2BVCCe3paH97BtTjSVBc3NZJzKnARnDn%2FkT5ghBk95dIzj9lSIp68nm7RlcO4mHVXOXYLFQpps3SNIdY0YbDQhWKxkf9p6KXp6AO6OF1M%2F8pWP6LKDZp9qobJP8bNqbblC8pSB0WryhzBveh9c84wtCJmixzqoaizI8wyLGIygY6pgHMu%2B9KkkYVeTX5jn7oqeAnpv3wb74VJ53Qp2Ng7auY70JRB5OuPf2pTPD%2BRWKsT8%2B0rJYlOcbcPEFvHH3%2Fm0gRfrqrPTHZ0cLuIpG4mzgr2w55epAklTdOj%2FZ1tC%2BdCJJ%2BQM8E7VE%2BaspR8oYYelEEVUOlaxGP7bGdrd3LVx0E4BLU8YU4dYBVgf%2FWIhGoYQ0IIZJQpYgr4IkU%2FvWxxOI6fBjtYUid&X-Amz-Signature=fc26b2b3ce3da7ba8951baecabd7bdcf785be1c5f951d5ac1697db7d208c3b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4WCANZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB%2B57pUji8Ou8XBx7PAuQ343f25tTvlVIUda%2BE5tOb9AiAwI7HwhYCVnl1cCXOV9rzC%2BV44ueYFgDZp%2FCBbl%2BJshyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMhsttTUyIYoj0xgNQKtwDb2v6%2BZjUNznEYP%2ByAyIAy9WBI%2Bq%2FirAkrVtBv%2FP7lKS4ZxkRlJ2OMppDKddRXk6nnbsRUlVTmNc4s4m20ylI9I8fOdkdnr9ji0QkdeI0rMnc8NZBVeevkDuk57K9H7BKbCHZoU91kvlWpeeS6994uHFgtMkh5oMsByINYd8rcqIrssilB9bDh16l2QcH2o6bRmNAUwdFdsEUEH0qANNslNDtrxiUnPqv4J52MBcoUFNyc88ZJSd9o81N5m7p1m0qc6BU9%2BVvKL9p7cAayAYfeQWl5X6pgZvYMJ9bEiNZKikntat6ASY%2BOcjGW3VzP21a15YXdJUx4mABNrfE55F8bhd4ovxQYF6761Oyrvh1Lzecl49m5Es5PBrcULefVbyoDUcrEWE8XseKR2RiYDtb51lHds1AKL07UTvQR6Qo1OkKhkgrAu8A8NKOg%2Bp7uYS37TKhdmxeipJN%2FEW%2Biw3kCTPVC%2BVCCe3paH97BtTjSVBc3NZJzKnARnDn%2FkT5ghBk95dIzj9lSIp68nm7RlcO4mHVXOXYLFQpps3SNIdY0YbDQhWKxkf9p6KXp6AO6OF1M%2F8pWP6LKDZp9qobJP8bNqbblC8pSB0WryhzBveh9c84wtCJmixzqoaizI8wyLGIygY6pgHMu%2B9KkkYVeTX5jn7oqeAnpv3wb74VJ53Qp2Ng7auY70JRB5OuPf2pTPD%2BRWKsT8%2B0rJYlOcbcPEFvHH3%2Fm0gRfrqrPTHZ0cLuIpG4mzgr2w55epAklTdOj%2FZ1tC%2BdCJJ%2BQM8E7VE%2BaspR8oYYelEEVUOlaxGP7bGdrd3LVx0E4BLU8YU4dYBVgf%2FWIhGoYQ0IIZJQpYgr4IkU%2FvWxxOI6fBjtYUid&X-Amz-Signature=1efc3e1dd89abb51492a65da4bd0471122569dd691138adf5022198f882743df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

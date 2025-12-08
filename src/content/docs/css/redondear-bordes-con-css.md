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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVLRDXO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcONeflDYBwkArUJkuFM4zFe7Eud1o2uJKuHTmLLR%2BSAiBKG%2FVSSkTrQg4dStqfF4HY5SaRcU%2FLI9TaCdZD%2FMyJzSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZlXgoevJCxs%2BwhSvKtwDePAvfBDqBuoAgLJ3D8kXyh66wlyceVUuVhhYkRpShYQu9REzsPsPOtTSV15a8eSf8VibvEHDlRWvrz9%2F%2Fv%2F0IKdkPLwkRHqP3%2Fe%2BtltXXxFtuuBsTHA%2BTR6de5t7whaJTZgL%2FDWBoYnKff9RC0tVC6bNAM1mY0n%2BnNT5kgM9gzrRLYk%2FtKGO8W1rsyipfv%2BFTVsGR%2FrSg0sRSkYgPLDnY63bcrxFiR6aygIJUEOSxwe9%2BF0d84HPhI7k2jjfQY026xlzP8%2BcVHtA5O0qwaoCapK5EfiI2OJJsnx9dh8Ia3DMT4m0GISYtOvgYLE1yzXOnFtdL3fsVlVVS3FjGIrKVN8d37lX5HYrQQnY5mpXRa%2FMIq2ORP315oLyLauEBBBwq4hcYFOaZMHUC2Fpl7jV6Mq6RbW9XvBhR3xuMlqWk2VKFODqZJaXH3HPppmAlD1%2Bb54cpXGtKUGWinJ%2FOpASP5PumDtccmwXO9v1kc6bpWW7bvKNwOh03ELeqBnBeSUe24cQ4Py2O3%2F5NkUMJs%2B0SZkCJ%2BqqGj78jXxTcpFeC77WMs2fNM5YcBy6mCn6scRAc1iEuiF2l4Xdy3UTaqn0e4wq1LnOCAiTSD64wGcqbjgEmLvtIFrr2ejG4lswie3ZyQY6pgG2o%2F6fIC6p7VWnSuULi6XdMl0yYf9auSmzTu0V9GBsQp0MxiqUijP6gkVIxwK9hxXgTEhVR6KH%2FNO9Dh4o1rCsG47vaJin6SK%2BQrC9jd6HOctkhsr8Hgde%2BR1UgDGBdDcVb5aj0DKnTMR%2BuFKiVYDzJMtbv4g2sw4%2FPTGjWK1cFSsO68f4VhqOHAmlB2qYhnA64hh6A9iDz4ZEc3kjFpGSR97qOeTQ&X-Amz-Signature=5d248e639d3d1c063477b50cda815a5c71d3f14a0ab77a1717ac7b3d11b64fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVLRDXO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcONeflDYBwkArUJkuFM4zFe7Eud1o2uJKuHTmLLR%2BSAiBKG%2FVSSkTrQg4dStqfF4HY5SaRcU%2FLI9TaCdZD%2FMyJzSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZlXgoevJCxs%2BwhSvKtwDePAvfBDqBuoAgLJ3D8kXyh66wlyceVUuVhhYkRpShYQu9REzsPsPOtTSV15a8eSf8VibvEHDlRWvrz9%2F%2Fv%2F0IKdkPLwkRHqP3%2Fe%2BtltXXxFtuuBsTHA%2BTR6de5t7whaJTZgL%2FDWBoYnKff9RC0tVC6bNAM1mY0n%2BnNT5kgM9gzrRLYk%2FtKGO8W1rsyipfv%2BFTVsGR%2FrSg0sRSkYgPLDnY63bcrxFiR6aygIJUEOSxwe9%2BF0d84HPhI7k2jjfQY026xlzP8%2BcVHtA5O0qwaoCapK5EfiI2OJJsnx9dh8Ia3DMT4m0GISYtOvgYLE1yzXOnFtdL3fsVlVVS3FjGIrKVN8d37lX5HYrQQnY5mpXRa%2FMIq2ORP315oLyLauEBBBwq4hcYFOaZMHUC2Fpl7jV6Mq6RbW9XvBhR3xuMlqWk2VKFODqZJaXH3HPppmAlD1%2Bb54cpXGtKUGWinJ%2FOpASP5PumDtccmwXO9v1kc6bpWW7bvKNwOh03ELeqBnBeSUe24cQ4Py2O3%2F5NkUMJs%2B0SZkCJ%2BqqGj78jXxTcpFeC77WMs2fNM5YcBy6mCn6scRAc1iEuiF2l4Xdy3UTaqn0e4wq1LnOCAiTSD64wGcqbjgEmLvtIFrr2ejG4lswie3ZyQY6pgG2o%2F6fIC6p7VWnSuULi6XdMl0yYf9auSmzTu0V9GBsQp0MxiqUijP6gkVIxwK9hxXgTEhVR6KH%2FNO9Dh4o1rCsG47vaJin6SK%2BQrC9jd6HOctkhsr8Hgde%2BR1UgDGBdDcVb5aj0DKnTMR%2BuFKiVYDzJMtbv4g2sw4%2FPTGjWK1cFSsO68f4VhqOHAmlB2qYhnA64hh6A9iDz4ZEc3kjFpGSR97qOeTQ&X-Amz-Signature=d4af27837fda094be03802dd941a270f1ba624b9cd0b2e6b2cb730b6d2379a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

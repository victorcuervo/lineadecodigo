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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3VQ5CS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbqYtM%2B4wnbzX1rF07XkzXijyhAuQJxlpsG1EOVrDo7AiBgntXLsco9KSfg9ZPx2nYjTERJjyNrppPCvjIM7Y0jgir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMITMAmGMoDK6t3jE8KtwDDnFxYs4x62vABpvnfh4%2Ft%2FJXXgxlFApDQhciEoNetEEUEy9ohBmhwmmEIMzixUXeCWaBPTI220OXnVY8EfFfDJPG%2F4Q2HeTuL4qBGB5OR%2BxAohruMdaszoJAvsyHpCqOdcl%2BKPJ6K2jBIE6oBMFEk2Bhpns2RZbvJfcp0kpyiVL4hf8D5zEPj5Czapgbcskf7d9dcmsM8Eu6UHF%2BjMwXsrdPWRPUMyFmcW6yVlzQxhMVc%2Fpaqbf1SX78dF8kSc%2BemOCfRRYmdgXFB6HSMlGiBbC8Cd1P4s%2FDTyJaOTngIL43MuyWL7xmWhcMtAYB1QuIX4qIEUNdXb3YVrYY2q9hALJ8iwABKt3TOzlES3Ct79eJeouCbo%2FkjWg6%2BbyXIHDn7lFgHPQBXXpW6eGmDRdxDOD9Okd1SzI5iOSTBUaLZSoJi3MYjPNwhJEHq6JVw7M4%2FtZxlx%2Bl%2FLu6Ig0SeHmQLZYUQ%2B27U%2Fcq8CWSW4Fv0RU6xoq9qqzTAmhBUQ%2BiQOooca7L159btwlGmboh5dkb6udFq9HPSSSBwB8vAICV3bL0MlppBuqSpC366%2FMLsSNice6jNhVtgEUsGHU6uawc0EJT7J2%2BYfH9OJsdkb7pCwAoNZSiIs7TXWdE0lgww4zIyQY6pgFwyqR5yoTBGKKWct87HknO84CyPq0Y85eSWA%2BhtzLwLpE2KHUe1b5YbjhXgYY4SvEIDPM8xzbx5HQB%2FIlKV%2Fee0XaOQebwXtVVZ8J%2F1j%2FaphdYqZ9L2d8WwGF0HVCIQRhjxX4OiMWHNdqzvEULRYPTF%2FoQuhNXmFMb6KBvzBBSy33yNfHGXUUIwWyG4lrjK3H2RTmr6Vo4wsbkaNMLik6oU1RXdXdK&X-Amz-Signature=4fa81cc87555b468abb748670a18ffe23a0402b797f3f9771780dc48231f4ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3VQ5CS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbqYtM%2B4wnbzX1rF07XkzXijyhAuQJxlpsG1EOVrDo7AiBgntXLsco9KSfg9ZPx2nYjTERJjyNrppPCvjIM7Y0jgir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMITMAmGMoDK6t3jE8KtwDDnFxYs4x62vABpvnfh4%2Ft%2FJXXgxlFApDQhciEoNetEEUEy9ohBmhwmmEIMzixUXeCWaBPTI220OXnVY8EfFfDJPG%2F4Q2HeTuL4qBGB5OR%2BxAohruMdaszoJAvsyHpCqOdcl%2BKPJ6K2jBIE6oBMFEk2Bhpns2RZbvJfcp0kpyiVL4hf8D5zEPj5Czapgbcskf7d9dcmsM8Eu6UHF%2BjMwXsrdPWRPUMyFmcW6yVlzQxhMVc%2Fpaqbf1SX78dF8kSc%2BemOCfRRYmdgXFB6HSMlGiBbC8Cd1P4s%2FDTyJaOTngIL43MuyWL7xmWhcMtAYB1QuIX4qIEUNdXb3YVrYY2q9hALJ8iwABKt3TOzlES3Ct79eJeouCbo%2FkjWg6%2BbyXIHDn7lFgHPQBXXpW6eGmDRdxDOD9Okd1SzI5iOSTBUaLZSoJi3MYjPNwhJEHq6JVw7M4%2FtZxlx%2Bl%2FLu6Ig0SeHmQLZYUQ%2B27U%2Fcq8CWSW4Fv0RU6xoq9qqzTAmhBUQ%2BiQOooca7L159btwlGmboh5dkb6udFq9HPSSSBwB8vAICV3bL0MlppBuqSpC366%2FMLsSNice6jNhVtgEUsGHU6uawc0EJT7J2%2BYfH9OJsdkb7pCwAoNZSiIs7TXWdE0lgww4zIyQY6pgFwyqR5yoTBGKKWct87HknO84CyPq0Y85eSWA%2BhtzLwLpE2KHUe1b5YbjhXgYY4SvEIDPM8xzbx5HQB%2FIlKV%2Fee0XaOQebwXtVVZ8J%2F1j%2FaphdYqZ9L2d8WwGF0HVCIQRhjxX4OiMWHNdqzvEULRYPTF%2FoQuhNXmFMb6KBvzBBSy33yNfHGXUUIwWyG4lrjK3H2RTmr6Vo4wsbkaNMLik6oU1RXdXdK&X-Amz-Signature=e608b4649f45cf5787eb3fc69d3eb53f8f64dc416434a0296794ae5e4a04192f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

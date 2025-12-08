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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFQTBQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYmJXBc72ZmtXEOZAM%2B%2FWryWp9l8nylQzE%2FsF8pHAzWAiEA05zPzQO86Bqvn%2BWu6fGzUZ%2BXlJtK%2BXvq7VagtvHoxEMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMk2JLf9RCgY7UhOSrcA9uOSze5hgEmbcDehp5AgNAy0DBTEcgoWj10u4%2BTgt3KuOYY3W%2FSvSslspwnjKMOYBC1TNMrFrewcSHGulAwf9NNGc64zYFUnwe6xdD8QB6wfdF7fQDUifXtUiReVnXJ4TW61hMEx%2FNgjzKXsJLtDOna25P5GyGo7Y3Y6%2FrJ3ZDMNW8A48m1y4IMF%2BMYXg33LYPNXgz%2FfTvJm67h8NYJPVz3VdQjR0VQZYiuX1B5mNqm9Rb28uhfQBdnGTO5wmRTmmeJMnlBBqXAmOWX%2F6VXtzQKQ%2BPoJBdHYvYpVyBrV1cAnSXKRWZjDv6rDd5eXsHCL0owIkhaxJQqh7ceosmzZG%2BJi9tkKynlive970fFstVMnNk3XlCADRXT7qu74JK30cVQNnPJu0Wk6oNC6Hc%2FMNlOz5gHFwmZ%2BW2BfAX3H91pbci8pavGa4BQBD1laLQZZ4amndiPUF3y%2FBzj4znjqiJC0Em0gwd8x6Yc%2BH6SwejUVNBxpn%2B1S3zFABsGTCtJCpMGEHw5Hl2atz6MdMm%2FRtCv5wor5ryuUPUZwoPk9DebRJHwIouq%2FpicTW6BGZfOwRmICNtcjUsZq3xL6lY0lgXs6MN3S6Ma0HfcUUKsDs2%2FuzcattHSrXkRCNZEMI%2B02ckGOqUBItl2wQekS3NynzHxnMxOhNhwwQbo49oNXfIiZoz6OGxX4NV%2FWKBRGXGRueiUMy8u35ZPtt5%2Fob1ru3X0zwV5cFdSyxxLGzY%2FV8pquhiOxW%2FftDMyz88r69Mkm1hPY4lsAGvaBNViT9cXqTha2zZGix26HbWiC%2BaxD%2FoK%2Bbh5bsFoptRmFlx55N2yJxNezkADdWTCqB1OcWKM93jrIQ3ztKrCKpFB&X-Amz-Signature=7c173d3d4ba241d777cfc369a01cdedc639ee279af3cbf402c20884523dc235f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFQTBQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYmJXBc72ZmtXEOZAM%2B%2FWryWp9l8nylQzE%2FsF8pHAzWAiEA05zPzQO86Bqvn%2BWu6fGzUZ%2BXlJtK%2BXvq7VagtvHoxEMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMk2JLf9RCgY7UhOSrcA9uOSze5hgEmbcDehp5AgNAy0DBTEcgoWj10u4%2BTgt3KuOYY3W%2FSvSslspwnjKMOYBC1TNMrFrewcSHGulAwf9NNGc64zYFUnwe6xdD8QB6wfdF7fQDUifXtUiReVnXJ4TW61hMEx%2FNgjzKXsJLtDOna25P5GyGo7Y3Y6%2FrJ3ZDMNW8A48m1y4IMF%2BMYXg33LYPNXgz%2FfTvJm67h8NYJPVz3VdQjR0VQZYiuX1B5mNqm9Rb28uhfQBdnGTO5wmRTmmeJMnlBBqXAmOWX%2F6VXtzQKQ%2BPoJBdHYvYpVyBrV1cAnSXKRWZjDv6rDd5eXsHCL0owIkhaxJQqh7ceosmzZG%2BJi9tkKynlive970fFstVMnNk3XlCADRXT7qu74JK30cVQNnPJu0Wk6oNC6Hc%2FMNlOz5gHFwmZ%2BW2BfAX3H91pbci8pavGa4BQBD1laLQZZ4amndiPUF3y%2FBzj4znjqiJC0Em0gwd8x6Yc%2BH6SwejUVNBxpn%2B1S3zFABsGTCtJCpMGEHw5Hl2atz6MdMm%2FRtCv5wor5ryuUPUZwoPk9DebRJHwIouq%2FpicTW6BGZfOwRmICNtcjUsZq3xL6lY0lgXs6MN3S6Ma0HfcUUKsDs2%2FuzcattHSrXkRCNZEMI%2B02ckGOqUBItl2wQekS3NynzHxnMxOhNhwwQbo49oNXfIiZoz6OGxX4NV%2FWKBRGXGRueiUMy8u35ZPtt5%2Fob1ru3X0zwV5cFdSyxxLGzY%2FV8pquhiOxW%2FftDMyz88r69Mkm1hPY4lsAGvaBNViT9cXqTha2zZGix26HbWiC%2BaxD%2FoK%2Bbh5bsFoptRmFlx55N2yJxNezkADdWTCqB1OcWKM93jrIQ3ztKrCKpFB&X-Amz-Signature=ab4f2b9b7890a32cc45c572ba77e953b8936b152c831142376edf6f7f9cafb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

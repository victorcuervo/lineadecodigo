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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTGVE2E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7wtraGKxsb2WiVXZSASW4WZKSSzHyfgG6nhV9UCPA0AiAWGQLj4jbsNDzxanaSaGmPGi%2FW86muvgS%2BqGDAcLGdvyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryCmk2DXJ4Vxx%2FufKtwDLazw82WfnCWW8QIn2WkthcPjUDL8SN0AowhNffMOmpR2GInr2gnZit6xXAQL3dIT47TexBgkH0YTENtDGhCVOOPcWVjMFhoXO93%2Fe3lwzIhW3GJX41b296Y4NcrozCB04NaVN3UBGpNTXQcyU3fIJbNP7ioaPW2qLOvHMje86Hztdmk%2FrGWpcjXbQ2VNCaRsV2uWKAk868kbaBoEOv%2BKd2DQtTJO9W9KtY3eIQBLYS9BLiQ7lpfDFjYs8Iul9dn8ovx0SuUVeWVlpECgNPPou%2F7fdWjfUBBIS5%2BwICofddwOP4xFQMYLpl0Qz87I9SezuDi%2Fl2sG5t8Hu%2BgBDO4B9EtlCa%2BAJw%2FVMHWpzj78nTk6fp0PluYW87GFUPyOOt9IVO52JsJqVylbwNSFzLcOq4lWsaplmEKxzEzXzugheyqoSpKRRbJFNhgjANpe4DBmPITOEGNykOzBAJxrFhiYajsG%2FikFdddunwL8xu0kkGlcIspMgyHkiIoWpZ6qseWdzXDoxA8zaPza8x9RYztK5dXkeaMjyCVcWWB9AS3fMZIQF7MFJq2UnGhfYlDsHd0PzKmw8V947iTKXGF2J%2FlcCK9VdaG5o3oCE1SAPVSayBAgRFsqcdtbFq0T9yIwzbPcyQY6pgG%2BrAeSLqpbZkNiGtwkeNa0ndlaetBaFxgCXCEdzZ83mHSciTmYIw5xGDOeIsnbIDog9ews1Ue%2FVhQzKjlLwX%2FgvaOzJHuhdeg6Vt7W31UDhMB9mK%2BXnbyXzVpUrjCO0ozQ9ShhafYM40Vy1c3uVyCLO8otVqe6gGHJE8GznH9Q21mSTByqIQ4r4l8ucv%2FZm5tvmkaNhZL3Nww1y43N83qcN6kQUj4j&X-Amz-Signature=b4db84ae53cf977044f5d55db7b3fef223129eb9293488dd5bd096b369577908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTGVE2E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7wtraGKxsb2WiVXZSASW4WZKSSzHyfgG6nhV9UCPA0AiAWGQLj4jbsNDzxanaSaGmPGi%2FW86muvgS%2BqGDAcLGdvyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryCmk2DXJ4Vxx%2FufKtwDLazw82WfnCWW8QIn2WkthcPjUDL8SN0AowhNffMOmpR2GInr2gnZit6xXAQL3dIT47TexBgkH0YTENtDGhCVOOPcWVjMFhoXO93%2Fe3lwzIhW3GJX41b296Y4NcrozCB04NaVN3UBGpNTXQcyU3fIJbNP7ioaPW2qLOvHMje86Hztdmk%2FrGWpcjXbQ2VNCaRsV2uWKAk868kbaBoEOv%2BKd2DQtTJO9W9KtY3eIQBLYS9BLiQ7lpfDFjYs8Iul9dn8ovx0SuUVeWVlpECgNPPou%2F7fdWjfUBBIS5%2BwICofddwOP4xFQMYLpl0Qz87I9SezuDi%2Fl2sG5t8Hu%2BgBDO4B9EtlCa%2BAJw%2FVMHWpzj78nTk6fp0PluYW87GFUPyOOt9IVO52JsJqVylbwNSFzLcOq4lWsaplmEKxzEzXzugheyqoSpKRRbJFNhgjANpe4DBmPITOEGNykOzBAJxrFhiYajsG%2FikFdddunwL8xu0kkGlcIspMgyHkiIoWpZ6qseWdzXDoxA8zaPza8x9RYztK5dXkeaMjyCVcWWB9AS3fMZIQF7MFJq2UnGhfYlDsHd0PzKmw8V947iTKXGF2J%2FlcCK9VdaG5o3oCE1SAPVSayBAgRFsqcdtbFq0T9yIwzbPcyQY6pgG%2BrAeSLqpbZkNiGtwkeNa0ndlaetBaFxgCXCEdzZ83mHSciTmYIw5xGDOeIsnbIDog9ews1Ue%2FVhQzKjlLwX%2FgvaOzJHuhdeg6Vt7W31UDhMB9mK%2BXnbyXzVpUrjCO0ozQ9ShhafYM40Vy1c3uVyCLO8otVqe6gGHJE8GznH9Q21mSTByqIQ4r4l8ucv%2FZm5tvmkaNhZL3Nww1y43N83qcN6kQUj4j&X-Amz-Signature=038695f30647d52e1839e14300a3cc77608df425c04f1c517b4d8026a18bcf54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

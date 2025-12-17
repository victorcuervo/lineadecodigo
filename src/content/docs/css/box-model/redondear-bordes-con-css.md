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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3632CLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FDmqJjZOe9yzhPrSA4qLTsmnnn5kaSCj3lsiatWd7wIgOw3hDc9pOgGshgCqjreT5WDJD%2F1e%2F5a2%2BQrDMV2S0%2F8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDO2RpuyLvkd2mS3kBCrcA1pjoHFjC6%2BPHuQvMCo2bRwYIL21VCnPEGx1cuRRUH1UXU%2FSMhWML%2Br3Gcz%2BZmYjWYozt87KhBrgSPqzzQJwc9IwLzMwCoN3Qsv6QZezdNvoPrjj8xkI9lAW5FdKcOaj5Ganecv4tK82qYdcggKRb7%2BYBqcLNcRV8fzc5TS%2BUnNn29sj24wu57ogRpGVDmyD5DbsDc6CtK0zJPpVuGSvUs2Ia0d5kEkike8mjD7WSafvdaKB0bN1pWTQ%2F5kg795WfeWB%2BNLJRHkekaKAGIbOUfqaYwJuCqC%2FhbfWAdvwrqhu6xsHcq1pEwpM0ap4g%2F6%2BNWMwUs5J8NnIznM8e5mF%2BtfSkiH9JfAxwYo8uoCJoe3%2Fi3EhNf%2B0Iwkom4%2BcnZR%2BMgBw8KtLbVirDDYnPYg1Vu%2BhC7JvNMoSrvJsGJEKOXgN%2Fg2H8ixa242juqSc6gB39AwtCrtFtHNUbKZoiz9GXsXIpLfXNP%2F3wL6zPgB43ftY5kQAdaeRPQuFclR2zUknVfLc4wqWrT0VTccoknXxwEeQc4P4UhdXnxwhQ%2Fqm1hOf7wCpsq3arRqNNgN7ut%2FggLjVeW96GaNhYziL6pR7gsHWwglhu7JNMNbCrsQvy7ZZn%2B07JL1eem4StLTWMOTRicoGOqUBVPB1zYb7MUZvHRQ0Pc3t58847LQ5sSYK4XIf3PSIuiJZ4tLaDucYn1JP9etyJ2vFq3RsMUETXZxLa8s6AGCr%2Bfgw8N7HJzITJVx2jGQ7tK8RqrMCTG2p5glembD0C7zPX%2Fy2VGdVQKj5OBLF57Sf9yUGzy01yfh63sX44YRshGs9Yuhf2kH9N%2FZLoAIW%2BDbGkaocBVsrdAvid7xguLq2%2Bu8vaeBH&X-Amz-Signature=d260a56372785d0ce1cad73cae469d3eaba5d0c9bd907ccba40894b0e902aaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3632CLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FDmqJjZOe9yzhPrSA4qLTsmnnn5kaSCj3lsiatWd7wIgOw3hDc9pOgGshgCqjreT5WDJD%2F1e%2F5a2%2BQrDMV2S0%2F8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDO2RpuyLvkd2mS3kBCrcA1pjoHFjC6%2BPHuQvMCo2bRwYIL21VCnPEGx1cuRRUH1UXU%2FSMhWML%2Br3Gcz%2BZmYjWYozt87KhBrgSPqzzQJwc9IwLzMwCoN3Qsv6QZezdNvoPrjj8xkI9lAW5FdKcOaj5Ganecv4tK82qYdcggKRb7%2BYBqcLNcRV8fzc5TS%2BUnNn29sj24wu57ogRpGVDmyD5DbsDc6CtK0zJPpVuGSvUs2Ia0d5kEkike8mjD7WSafvdaKB0bN1pWTQ%2F5kg795WfeWB%2BNLJRHkekaKAGIbOUfqaYwJuCqC%2FhbfWAdvwrqhu6xsHcq1pEwpM0ap4g%2F6%2BNWMwUs5J8NnIznM8e5mF%2BtfSkiH9JfAxwYo8uoCJoe3%2Fi3EhNf%2B0Iwkom4%2BcnZR%2BMgBw8KtLbVirDDYnPYg1Vu%2BhC7JvNMoSrvJsGJEKOXgN%2Fg2H8ixa242juqSc6gB39AwtCrtFtHNUbKZoiz9GXsXIpLfXNP%2F3wL6zPgB43ftY5kQAdaeRPQuFclR2zUknVfLc4wqWrT0VTccoknXxwEeQc4P4UhdXnxwhQ%2Fqm1hOf7wCpsq3arRqNNgN7ut%2FggLjVeW96GaNhYziL6pR7gsHWwglhu7JNMNbCrsQvy7ZZn%2B07JL1eem4StLTWMOTRicoGOqUBVPB1zYb7MUZvHRQ0Pc3t58847LQ5sSYK4XIf3PSIuiJZ4tLaDucYn1JP9etyJ2vFq3RsMUETXZxLa8s6AGCr%2Bfgw8N7HJzITJVx2jGQ7tK8RqrMCTG2p5glembD0C7zPX%2Fy2VGdVQKj5OBLF57Sf9yUGzy01yfh63sX44YRshGs9Yuhf2kH9N%2FZLoAIW%2BDbGkaocBVsrdAvid7xguLq2%2Bu8vaeBH&X-Amz-Signature=d74b02f750e9384f98c564debfe72fda50b23c02507a962ceebd052ddd9e56cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

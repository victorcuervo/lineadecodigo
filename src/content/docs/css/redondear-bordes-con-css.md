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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USEBYSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7vvmfXQublI%2F8J44vxUzWXeC%2FRtdU%2F0JEzHuUd3sS3wIgTslEBjsxpGoO%2BmbBGBfPziTFNI%2BvOayiOMZFXBFi8M4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPhm2msFHUg0k2th%2FSrcAygARNHno5UH%2BCJZnYHfT8IdhmHx8WwdZeb5pPnk4NXtuN53O3lzNRWPhbHMX1QJdaNYcaoHGjC3%2BWrHEPV%2BudWbaMOHhVMzFQNoLGFuXkJcaE3DripGAXm7iXwP0fJbc4WFONS41WtVmr%2FgtFuRfw%2Brfu00%2BBDugCoxJ8AsBaCqCikoCqqZl9KChInEvvbFi788Q%2FRO3RC7c23oWffudHdpdgA%2BvQlV0JBNMKwWK9pHJxq8MtxF4D0vbIP5Q%2FaWYw%2BiKqJtmW2VBnnMg%2BuOjJUIVAqgRFEo%2BH6%2FmXmNmyxyM6Opl4uGw%2Bfpzeh%2FdwRbysGTcyumRuH94aIWMr9Or03X3CMe2Zvd%2Fb%2FLYb63tRH%2FqH%2BQ0Pxp3V4YgANUBkIpUfBVnZO9hu08s%2BZAgSep0BpavpXSsvZp5z6aURWkiTqBA1%2FC92jBDMyNVx15N2NlpfWAJ2HuTt2pg8IsnMidh43d2e%2FLVSf7LUep26sKxLkgHADqUHV0TRUDCSISHxBNvVWE9GghWSmJh%2FkFOr50GeJPdAmSD2K75yD3HVfma%2FlFM4J%2F%2FflAPQaBOhaKDpffP62JnGJ1wM5AyE1b1cPbZySdQH5mV%2BEsE6x6v7Off7psXVP5rBehIin0iwh0MJGn0MkGOqUB7SBxU1sg%2FWZJsAM7zJLfPdlL14ymWPYcl6%2FSLN%2Fb5T%2Bu601enasRiTmw3Z1ISqK%2BKnXjfl7qUMroCryC42Yw%2FIlI5Tz0eixjMvuVR%2F5BchUkb%2BeMKtj%2Bbk1lxR9cha7EMPmwNS8ulUyMh644FYxN9yNMx3fG2Dom%2BsSfqE99vjyonrRIBwVmeTb0X5TAHvn5Cp8q20421khpfMI4OJeIN3IWABsb&X-Amz-Signature=06715a59378b318e1bfc95d9af486c14760a52cd3e5cee005966d77beb302922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USEBYSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7vvmfXQublI%2F8J44vxUzWXeC%2FRtdU%2F0JEzHuUd3sS3wIgTslEBjsxpGoO%2BmbBGBfPziTFNI%2BvOayiOMZFXBFi8M4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPhm2msFHUg0k2th%2FSrcAygARNHno5UH%2BCJZnYHfT8IdhmHx8WwdZeb5pPnk4NXtuN53O3lzNRWPhbHMX1QJdaNYcaoHGjC3%2BWrHEPV%2BudWbaMOHhVMzFQNoLGFuXkJcaE3DripGAXm7iXwP0fJbc4WFONS41WtVmr%2FgtFuRfw%2Brfu00%2BBDugCoxJ8AsBaCqCikoCqqZl9KChInEvvbFi788Q%2FRO3RC7c23oWffudHdpdgA%2BvQlV0JBNMKwWK9pHJxq8MtxF4D0vbIP5Q%2FaWYw%2BiKqJtmW2VBnnMg%2BuOjJUIVAqgRFEo%2BH6%2FmXmNmyxyM6Opl4uGw%2Bfpzeh%2FdwRbysGTcyumRuH94aIWMr9Or03X3CMe2Zvd%2Fb%2FLYb63tRH%2FqH%2BQ0Pxp3V4YgANUBkIpUfBVnZO9hu08s%2BZAgSep0BpavpXSsvZp5z6aURWkiTqBA1%2FC92jBDMyNVx15N2NlpfWAJ2HuTt2pg8IsnMidh43d2e%2FLVSf7LUep26sKxLkgHADqUHV0TRUDCSISHxBNvVWE9GghWSmJh%2FkFOr50GeJPdAmSD2K75yD3HVfma%2FlFM4J%2F%2FflAPQaBOhaKDpffP62JnGJ1wM5AyE1b1cPbZySdQH5mV%2BEsE6x6v7Off7psXVP5rBehIin0iwh0MJGn0MkGOqUB7SBxU1sg%2FWZJsAM7zJLfPdlL14ymWPYcl6%2FSLN%2Fb5T%2Bu601enasRiTmw3Z1ISqK%2BKnXjfl7qUMroCryC42Yw%2FIlI5Tz0eixjMvuVR%2F5BchUkb%2BeMKtj%2Bbk1lxR9cha7EMPmwNS8ulUyMh644FYxN9yNMx3fG2Dom%2BsSfqE99vjyonrRIBwVmeTb0X5TAHvn5Cp8q20421khpfMI4OJeIN3IWABsb&X-Amz-Signature=a8f71e4336d755f92c480ce2cab37fb0bcd92cc394032164596f2f92c819ff04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

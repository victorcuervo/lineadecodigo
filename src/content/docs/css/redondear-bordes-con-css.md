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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDQATMQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsp1vB276Npu%2FfAb3OaxNWF5DjkmJZArK%2F9AfoMtsJgIgRvpJ0JVsn3hvYIKJcd5%2BY47Z3fQBYNXeBtFKX3vYQB8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU9SjyTrIKm%2BFZBzSrcA5gRvYADjF8chRHcJGwacJuf0GC%2BZ%2FLM5YYw1cCnUJgAKPu%2FUQQexjsiVb3CUIdakGh0YYXGLEwIU8%2FduwJgeTVTbxVhkJ6mBjgTIfeS6RaH7nylipt4qg%2FVFY215ZSZm6%2Bagqk6gL9rskSlT3Kyzqz8RAPOXa8uGcL7FDvd8WQo7dWBLptwVgm0lNVrdjlFd5yDAMyUedmy6ntLrP2HCOe%2BFder1G3WmxZSgiq5EBTykRIE02Sfg2YyYqaCDJu6d82geJVVqL%2FE4Uteblmid2ebQXAVGIcObbcre9U%2BW8i65o2bOLu1OO0RUeKg6CuBp%2B9Vrskdcuquye3PuXrBeL33B39UHpmJXsPwpAxnw4LZITWDRtuSG%2BhTXVQUrd80FWmUsOXuNslYA6Abl2UvVuahGeaKRG5k%2Fr5GgQpuH%2FK%2BB%2BYxTpI%2FmP4Y2JcbLFfcfBYj6HNmwbHwcdKDdefHknQvnwpHdHXlTDhbtYm365o1z65oYzYTMhZ2O1S36IjgIxe7lgClnWsm0Ft3iN2LUtrYptSYYwvXwMfjm5m5oafqRdmlNZ%2Bda5Gr%2FfT6DKT5CN6uXO6idFjSX51VkXOB6r9fVl7A3nHT2v%2BkNG%2Fy1Qg4fYCJuLbTqelCpvLJMI3t2ckGOqUBXBhlkCHdXIjSUnIiRkRslr1XHgB47PzV28WsTc82BOfudKt%2BI8FkfBofaroLGTMZoAXctfbdDkmO0%2FtHB6AhQxDi0ZHcoWb38nNNye3IyTgm%2FLjPcG%2FuKmRIMu54qlT7m2Tz4%2FwPsgU78zFsVnf0uY2V2cITbsWWFQO0bTmrUCCREk%2BK1XSME2dI4QgEJlfirpO88HTHcSf1iZc50Qa2ypV3Io1I&X-Amz-Signature=93c5a786ac9540c4e8280fbf57a23e7d26082041fee874dcc03b351d25265bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDQATMQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsp1vB276Npu%2FfAb3OaxNWF5DjkmJZArK%2F9AfoMtsJgIgRvpJ0JVsn3hvYIKJcd5%2BY47Z3fQBYNXeBtFKX3vYQB8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU9SjyTrIKm%2BFZBzSrcA5gRvYADjF8chRHcJGwacJuf0GC%2BZ%2FLM5YYw1cCnUJgAKPu%2FUQQexjsiVb3CUIdakGh0YYXGLEwIU8%2FduwJgeTVTbxVhkJ6mBjgTIfeS6RaH7nylipt4qg%2FVFY215ZSZm6%2Bagqk6gL9rskSlT3Kyzqz8RAPOXa8uGcL7FDvd8WQo7dWBLptwVgm0lNVrdjlFd5yDAMyUedmy6ntLrP2HCOe%2BFder1G3WmxZSgiq5EBTykRIE02Sfg2YyYqaCDJu6d82geJVVqL%2FE4Uteblmid2ebQXAVGIcObbcre9U%2BW8i65o2bOLu1OO0RUeKg6CuBp%2B9Vrskdcuquye3PuXrBeL33B39UHpmJXsPwpAxnw4LZITWDRtuSG%2BhTXVQUrd80FWmUsOXuNslYA6Abl2UvVuahGeaKRG5k%2Fr5GgQpuH%2FK%2BB%2BYxTpI%2FmP4Y2JcbLFfcfBYj6HNmwbHwcdKDdefHknQvnwpHdHXlTDhbtYm365o1z65oYzYTMhZ2O1S36IjgIxe7lgClnWsm0Ft3iN2LUtrYptSYYwvXwMfjm5m5oafqRdmlNZ%2Bda5Gr%2FfT6DKT5CN6uXO6idFjSX51VkXOB6r9fVl7A3nHT2v%2BkNG%2Fy1Qg4fYCJuLbTqelCpvLJMI3t2ckGOqUBXBhlkCHdXIjSUnIiRkRslr1XHgB47PzV28WsTc82BOfudKt%2BI8FkfBofaroLGTMZoAXctfbdDkmO0%2FtHB6AhQxDi0ZHcoWb38nNNye3IyTgm%2FLjPcG%2FuKmRIMu54qlT7m2Tz4%2FwPsgU78zFsVnf0uY2V2cITbsWWFQO0bTmrUCCREk%2BK1XSME2dI4QgEJlfirpO88HTHcSf1iZc50Qa2ypV3Io1I&X-Amz-Signature=af8948334af1e0f3d6bc459c54f3df04a3beac84340e38400a696aeca0452c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

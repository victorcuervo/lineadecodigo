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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VVLDR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x%2BxCUuiDk9krlmGVGi%2BERNpbj0LNnTlhpZBy%2FqpaOgIgddV7rnliNWj5b2y%2B3Ak028GrxxDQnVfmR9cuJEVHvCUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLf0BaGPXOrBpTLgwSrcAwzj0cO1aCQNeYcCf7rnv8qPnpAMIwQS3bKhs1vJm03f0rvPljD9b3CVWbez0X%2Bw8JP7%2FyXvII039lsK68XS8LagQHtpyIKlnNX9RYdLvik7d54hUxcsj8FAuhjHspNlvK9lkNlljvDPEVU4J%2BStBgsUI%2FKu%2BaxxhOzVkTZs6DOTAYAVoWZzeiR%2BlSKlscI7%2FMxnRLEKlP8ALOkFEZus0coyMeXi%2FjCxHOYd%2BW%2FeuTmETJa7B%2BVKAXjpg81aYPcy1YYHrLZzFRGz6PKjnDsu7bYQvvdEhdyHlkV7s23y2sl2XlUbFaF79hHb4zN9U4V7u8eGe4XUoVqsHcPelQ%2FhH%2FDAM3UaMqJswfnP9RY8wFgZFi5qoJXGTHL1g5cbnW1k4vLyfeC%2FK%2BTKr8RWZ%2FnTeKwYMtS60mdvmkFVW1aWgvpMA%2FfwMZTj9fsMgIOMCzCUfdsmDc1662uW78oXtPfVgvJnsqoiA%2FmHAX1cwKudpSC7ViEspR2bzth853m3J6wV%2FMfCBQaiIbPE8PrmtQbCji6NIlIDVV14JoJxFju81R6N026QChD06zaxOG79Q0GJ5yg2NDHljb%2Bb52fgGTd2hBVPwKUBJttKNqe0xQJs%2Fjd%2FWuNi9pPim0EpKGGCMJbhisoGOqUBsmSkYJ1pzDZrLVKnmHbxc9fakyE%2F78fQy58la%2FSceS%2B4NB2TlJh64pfi25UVU1BoQeTfvvdbHx4FjmkvaSsd4PhYlaUKtk5%2FVj8xzJsO7dgfuuz%2FQvi6CWZcquaXdNs43TDuB9jwtPmpAZez42COIwH5Fq9Mio4KhPyRKsJcf3LadTeA4fBNyeg1XNrN5nacp3k1noLHJw0HuekaogD1qGY5rq%2BC&X-Amz-Signature=ab83bf227e07a6861e616923a439a2af121863406f7b0e169d8302a7b6cb2f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VVLDR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x%2BxCUuiDk9krlmGVGi%2BERNpbj0LNnTlhpZBy%2FqpaOgIgddV7rnliNWj5b2y%2B3Ak028GrxxDQnVfmR9cuJEVHvCUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLf0BaGPXOrBpTLgwSrcAwzj0cO1aCQNeYcCf7rnv8qPnpAMIwQS3bKhs1vJm03f0rvPljD9b3CVWbez0X%2Bw8JP7%2FyXvII039lsK68XS8LagQHtpyIKlnNX9RYdLvik7d54hUxcsj8FAuhjHspNlvK9lkNlljvDPEVU4J%2BStBgsUI%2FKu%2BaxxhOzVkTZs6DOTAYAVoWZzeiR%2BlSKlscI7%2FMxnRLEKlP8ALOkFEZus0coyMeXi%2FjCxHOYd%2BW%2FeuTmETJa7B%2BVKAXjpg81aYPcy1YYHrLZzFRGz6PKjnDsu7bYQvvdEhdyHlkV7s23y2sl2XlUbFaF79hHb4zN9U4V7u8eGe4XUoVqsHcPelQ%2FhH%2FDAM3UaMqJswfnP9RY8wFgZFi5qoJXGTHL1g5cbnW1k4vLyfeC%2FK%2BTKr8RWZ%2FnTeKwYMtS60mdvmkFVW1aWgvpMA%2FfwMZTj9fsMgIOMCzCUfdsmDc1662uW78oXtPfVgvJnsqoiA%2FmHAX1cwKudpSC7ViEspR2bzth853m3J6wV%2FMfCBQaiIbPE8PrmtQbCji6NIlIDVV14JoJxFju81R6N026QChD06zaxOG79Q0GJ5yg2NDHljb%2Bb52fgGTd2hBVPwKUBJttKNqe0xQJs%2Fjd%2FWuNi9pPim0EpKGGCMJbhisoGOqUBsmSkYJ1pzDZrLVKnmHbxc9fakyE%2F78fQy58la%2FSceS%2B4NB2TlJh64pfi25UVU1BoQeTfvvdbHx4FjmkvaSsd4PhYlaUKtk5%2FVj8xzJsO7dgfuuz%2FQvi6CWZcquaXdNs43TDuB9jwtPmpAZez42COIwH5Fq9Mio4KhPyRKsJcf3LadTeA4fBNyeg1XNrN5nacp3k1noLHJw0HuekaogD1qGY5rq%2BC&X-Amz-Signature=d371b84b7ec82a0c36202880db539ab3b1807f6188c9e510b69f896da2bb1191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

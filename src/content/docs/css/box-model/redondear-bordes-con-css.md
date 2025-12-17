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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LUOAXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDMcldxxdzc0EEKbH2F3xggae%2Bd%2ByocGUqS3jCVcRO5AiEA2NKS6PNYPhP5nlcd804C3OwXDNvHqoKdWSfeTuyXj8cq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHdVZO7nKkEgjNlAFSrcAzF34tZNfhn3u%2B0YGBPsExjwJdokVrMO1Rf2YKJ%2FltkXGaZ3ubKpIY%2FH9zQ687McenaNC8KWU4xNkLdWX%2FD%2BfHBcJEtVTXC35qsTc7MEZzapzI58vibu0fib2ZwW%2BX3v4ih%2FDL5koisKSZorV8m2bEp4x36j2rrjO%2BgxL2k3X3QAsxHlOzDhVrKMUinbA1aVOZ7g7cNPW6KM%2BekNhIUT%2BNAJGu59ubqb52dzSsnpcy991zAtRlUxcPM2KB0SAVsYUmAtskk7wju1DIR3dYGJ5U2JbLDpdYbZllmu3cgtiT%2FWFk8n2EoJPk2UlJs%2FnbBRcSk9PxxWfEqlEIQrGoNhHp5%2BbnAJtgcyqIypJds%2Fbyiq839jS2fZI3nJ5s9DVjKW5RZ6mV1AuFLmLoc7jzBDpA2ikHdU3WVb6A%2FtZtLx%2F3u1o8dEWL8L7RKoC98SL%2FafWLXJFkQsTdsxVhNwbdQ%2F0r6LTeAM2YFyltyBsRZhdyvvD%2BAEnsvNBGo1smiGR%2FYyIlCbsyPbEb30efgZ%2FnvNIrrKaO8J2ane3ilY9KdXSQeGWHd%2BCTRURg%2Bwc1V9vIiFFim%2BdU1HfUaNAtbkedoU51Ds2s8YHOMLhilyYQ%2BLVnN7SZdrKJDlcFAy8cnsML7hisoGOqUBimpM4Us7zgE9p5jrqDrZz9hD9%2B5%2Bph4NaMRXgzxyyjrO7PAHxCFNHyQte%2FTbJJJXPVgKQWUWKJzbNhia%2B%2FYaILm1Mtq29RjNtinfI7WPQQb52JUHHNlSFyX4rniN8FVYqLcC4ee0OxIMwFHbyb9%2Bg5nePDwPME9jQ%2FE%2F8Tzmm43vVwx20%2F9kYkDhVbqmvP5FBK3id1YnZtx%2BW8W83Eex2dws8W7E&X-Amz-Signature=a18de3e0353070a24dba203a610cba2f71da8b568c2128469af3b75bde7b003f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LUOAXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDMcldxxdzc0EEKbH2F3xggae%2Bd%2ByocGUqS3jCVcRO5AiEA2NKS6PNYPhP5nlcd804C3OwXDNvHqoKdWSfeTuyXj8cq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHdVZO7nKkEgjNlAFSrcAzF34tZNfhn3u%2B0YGBPsExjwJdokVrMO1Rf2YKJ%2FltkXGaZ3ubKpIY%2FH9zQ687McenaNC8KWU4xNkLdWX%2FD%2BfHBcJEtVTXC35qsTc7MEZzapzI58vibu0fib2ZwW%2BX3v4ih%2FDL5koisKSZorV8m2bEp4x36j2rrjO%2BgxL2k3X3QAsxHlOzDhVrKMUinbA1aVOZ7g7cNPW6KM%2BekNhIUT%2BNAJGu59ubqb52dzSsnpcy991zAtRlUxcPM2KB0SAVsYUmAtskk7wju1DIR3dYGJ5U2JbLDpdYbZllmu3cgtiT%2FWFk8n2EoJPk2UlJs%2FnbBRcSk9PxxWfEqlEIQrGoNhHp5%2BbnAJtgcyqIypJds%2Fbyiq839jS2fZI3nJ5s9DVjKW5RZ6mV1AuFLmLoc7jzBDpA2ikHdU3WVb6A%2FtZtLx%2F3u1o8dEWL8L7RKoC98SL%2FafWLXJFkQsTdsxVhNwbdQ%2F0r6LTeAM2YFyltyBsRZhdyvvD%2BAEnsvNBGo1smiGR%2FYyIlCbsyPbEb30efgZ%2FnvNIrrKaO8J2ane3ilY9KdXSQeGWHd%2BCTRURg%2Bwc1V9vIiFFim%2BdU1HfUaNAtbkedoU51Ds2s8YHOMLhilyYQ%2BLVnN7SZdrKJDlcFAy8cnsML7hisoGOqUBimpM4Us7zgE9p5jrqDrZz9hD9%2B5%2Bph4NaMRXgzxyyjrO7PAHxCFNHyQte%2FTbJJJXPVgKQWUWKJzbNhia%2B%2FYaILm1Mtq29RjNtinfI7WPQQb52JUHHNlSFyX4rniN8FVYqLcC4ee0OxIMwFHbyb9%2Bg5nePDwPME9jQ%2FE%2F8Tzmm43vVwx20%2F9kYkDhVbqmvP5FBK3id1YnZtx%2BW8W83Eex2dws8W7E&X-Amz-Signature=acf0b4012378c2c0e7eebd560b9ecd745ea26e0d6b10afde0cb809ebea5bd60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

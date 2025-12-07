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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCEGDEUR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWCdx%2F4Tp%2FtY5o%2Fk2c%2F0v1p9ECr342fi4vjMcmyrY23AIhALBL9YwiZ%2BDZWXlmP8R1RxMrgZoV2LqiHxv4jyVct8GDKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwiMZ6XcQQYf42wAwq3AP5aMllt1MVQCegd9MTHawdAFGUJ2buFILoiwi5jstBv9jqfxyRpt98iNsTsB1%2BAS5We%2FYMKsw45uDW%2BF%2FXdw7SxM%2BREiLBZ3C0Z3%2FFTB2A7RaYoIuhsGS8x2ZpeRfEZzrLyJ2oFBaVngINg7OPBWhU81jIOFVlPjS6YKLOf4PLjAl1Vyd1jJQgI3o1Eo%2BCfjq9FXJKKkHuc%2FjyPP2QqwWR9H7XqQC8JAiekK8KyEqpmh2GaqF4t%2BIxy%2FOGIu84Ql4PD0mzRHf9NnAibwCwoXjy6YQl1F9BtbCSVn4isbKn29CU71SqDJZ%2F6zPD8zQZvIjckrJ03ThatG5qQWvpGHx4Z1bSf6WV8rYtPHMODsXZwZyU4CTppH2A%2F8%2FfHq5SsmQXPTDnDtEeMgd%2FBEArl%2BTDA5bXgjnAC%2FY4wvGRs6pZk7cftL9n2AlwB9KbtYgTof2OxgeR8n3saUr%2BghcwsNBPNiL57jSwO0VVPqjKioG%2FkgqHdC%2F7eBbegAHX5XjjSPVy6KayKZEI%2B9ggGzuyNiX7yiwiTT0JhxeQRThhOKEzfg5e1CUhfxDOitKSiw%2BALVEjywpKoK1%2FAVoy%2BHLLtHpBaY8GbbHdyDP6U8kF49mfGs0%2FRwoo2KA19qLd0jDpx9fJBjqkAZ4LNQvQlOhAIfOpu%2Bcq1JArVXF6Z83IkqGzgxrk%2BOity5OW8x6LU7ie1TcCd7gAJLJM30dmvopiXqsr%2BlHnivBHmFaYTm90dYzyYAPxq9qAwOIMTwOMgIN%2F1PnJNRrvoFnnwW0ket8ZOWzOpKAUyH5uDoWXevO18xBKnTbFY%2FdHy1E3Xux7%2BUL5n7TbKmcBPQj%2F8vTtleTAVvB2h%2BceUcBjdOgC&X-Amz-Signature=3c507d48546bb363f669d51b3e98d8534df54ea4e1d8be1eacd302adf04192df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCEGDEUR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWCdx%2F4Tp%2FtY5o%2Fk2c%2F0v1p9ECr342fi4vjMcmyrY23AIhALBL9YwiZ%2BDZWXlmP8R1RxMrgZoV2LqiHxv4jyVct8GDKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwiMZ6XcQQYf42wAwq3AP5aMllt1MVQCegd9MTHawdAFGUJ2buFILoiwi5jstBv9jqfxyRpt98iNsTsB1%2BAS5We%2FYMKsw45uDW%2BF%2FXdw7SxM%2BREiLBZ3C0Z3%2FFTB2A7RaYoIuhsGS8x2ZpeRfEZzrLyJ2oFBaVngINg7OPBWhU81jIOFVlPjS6YKLOf4PLjAl1Vyd1jJQgI3o1Eo%2BCfjq9FXJKKkHuc%2FjyPP2QqwWR9H7XqQC8JAiekK8KyEqpmh2GaqF4t%2BIxy%2FOGIu84Ql4PD0mzRHf9NnAibwCwoXjy6YQl1F9BtbCSVn4isbKn29CU71SqDJZ%2F6zPD8zQZvIjckrJ03ThatG5qQWvpGHx4Z1bSf6WV8rYtPHMODsXZwZyU4CTppH2A%2F8%2FfHq5SsmQXPTDnDtEeMgd%2FBEArl%2BTDA5bXgjnAC%2FY4wvGRs6pZk7cftL9n2AlwB9KbtYgTof2OxgeR8n3saUr%2BghcwsNBPNiL57jSwO0VVPqjKioG%2FkgqHdC%2F7eBbegAHX5XjjSPVy6KayKZEI%2B9ggGzuyNiX7yiwiTT0JhxeQRThhOKEzfg5e1CUhfxDOitKSiw%2BALVEjywpKoK1%2FAVoy%2BHLLtHpBaY8GbbHdyDP6U8kF49mfGs0%2FRwoo2KA19qLd0jDpx9fJBjqkAZ4LNQvQlOhAIfOpu%2Bcq1JArVXF6Z83IkqGzgxrk%2BOity5OW8x6LU7ie1TcCd7gAJLJM30dmvopiXqsr%2BlHnivBHmFaYTm90dYzyYAPxq9qAwOIMTwOMgIN%2F1PnJNRrvoFnnwW0ket8ZOWzOpKAUyH5uDoWXevO18xBKnTbFY%2FdHy1E3Xux7%2BUL5n7TbKmcBPQj%2F8vTtleTAVvB2h%2BceUcBjdOgC&X-Amz-Signature=f9b3ded860894ab0e0d373d6a5907228f897ebee8fa32bfc6d3f54e0690bbe54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

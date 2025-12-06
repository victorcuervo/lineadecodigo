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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSGI722%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8zeQr5e94sKfPdliCyfpVndx3dS18aQkR5nNz%2BMaTMgIhAP6g9KMdFcUEdzmfwVXS0YmQM2%2Fy6QmuiVXgTuFU%2BI1jKv8DCHAQABoMNjM3NDIzMTgzODA1IgwRiJf0VjDNzTjqUbUq3AOMPz18n%2BAd1kpTztaZzMdXefkqGGq5UgKwpUXgSkJIAhPsIxmOxf49BBb6Ty51EnzmTKVUXTyE9gixNDJv74QWdN3AfvDyeDXDasEvw9oBPW7d463vf0HNVTW%2BZox%2Fr%2FGN8m6G0oDSA8Ox4QM4gV0Asz%2BkhHYB8JkUsvokudGyORG6b6Y3f6dvWkNbDrAZBmbNbhAgSP7KP%2Bevr6eRcRMB9PomY%2BleAMjE%2F1RVVLVpd2cJuEQyiftJfMMJkLIJTGt4mZ7Ju2oa5Fw%2FXBdDFpZ1h2zddpRmsvRFgo35Q%2BKSnUVV%2F8s9jr%2BtKLcHRP2AE8ivBQMHw2ucDolCMShxuFwRtdbczqR5yWby1ZyN5i4SbdpOyL0ioWPfrhnfaazofqpAU%2Bq2%2Fd%2BViUqPgE7hV%2FTON8VUigPQG39SD94cbcaS4hp6aWoqyHV3sqGw3v1ChG57O4F52LZSzV%2BRhivzR%2F7Nmf7vZIq7Ng7EfVxNoiMA7Fqm0psFflhjBJMkC0CXXEw7VuiIFR32qZUg8DD9a5PhkGP5DvjuVa%2BjsVJCQXxZwpVbv213txxHPTP4ICdh901xwMRA1PcytNp%2BNDrf9YLodWGuJTPDFC%2B3GhI8t4gEC02pc7gU%2F01Z7yNZEzDens%2FJBjqkAZmrPSTFk98xhU8o%2BL50lCTDzxIwvtNd%2B6YDy2kWWkOZoKpvoReZMkVBmv20VZe7GXrzIvtH%2FFlObIa0lGIIsh0twgKE6zvNQ8p3wIg2UGOa2vZ%2BfIH9pX6QnWxebhexmVyd3TCmgNTwYoeddKbO8%2Fj26L%2FddnCCtiWxxoseuMCaDruSpX3lzQurOrLwfd%2Fm7I1lIlRQvJ1l4knsWR4mFDxFPjSl&X-Amz-Signature=58ad489eda0715516596f6c9c68569708790b9081726dcd58b893db5ff33ecbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSGI722%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8zeQr5e94sKfPdliCyfpVndx3dS18aQkR5nNz%2BMaTMgIhAP6g9KMdFcUEdzmfwVXS0YmQM2%2Fy6QmuiVXgTuFU%2BI1jKv8DCHAQABoMNjM3NDIzMTgzODA1IgwRiJf0VjDNzTjqUbUq3AOMPz18n%2BAd1kpTztaZzMdXefkqGGq5UgKwpUXgSkJIAhPsIxmOxf49BBb6Ty51EnzmTKVUXTyE9gixNDJv74QWdN3AfvDyeDXDasEvw9oBPW7d463vf0HNVTW%2BZox%2Fr%2FGN8m6G0oDSA8Ox4QM4gV0Asz%2BkhHYB8JkUsvokudGyORG6b6Y3f6dvWkNbDrAZBmbNbhAgSP7KP%2Bevr6eRcRMB9PomY%2BleAMjE%2F1RVVLVpd2cJuEQyiftJfMMJkLIJTGt4mZ7Ju2oa5Fw%2FXBdDFpZ1h2zddpRmsvRFgo35Q%2BKSnUVV%2F8s9jr%2BtKLcHRP2AE8ivBQMHw2ucDolCMShxuFwRtdbczqR5yWby1ZyN5i4SbdpOyL0ioWPfrhnfaazofqpAU%2Bq2%2Fd%2BViUqPgE7hV%2FTON8VUigPQG39SD94cbcaS4hp6aWoqyHV3sqGw3v1ChG57O4F52LZSzV%2BRhivzR%2F7Nmf7vZIq7Ng7EfVxNoiMA7Fqm0psFflhjBJMkC0CXXEw7VuiIFR32qZUg8DD9a5PhkGP5DvjuVa%2BjsVJCQXxZwpVbv213txxHPTP4ICdh901xwMRA1PcytNp%2BNDrf9YLodWGuJTPDFC%2B3GhI8t4gEC02pc7gU%2F01Z7yNZEzDens%2FJBjqkAZmrPSTFk98xhU8o%2BL50lCTDzxIwvtNd%2B6YDy2kWWkOZoKpvoReZMkVBmv20VZe7GXrzIvtH%2FFlObIa0lGIIsh0twgKE6zvNQ8p3wIg2UGOa2vZ%2BfIH9pX6QnWxebhexmVyd3TCmgNTwYoeddKbO8%2Fj26L%2FddnCCtiWxxoseuMCaDruSpX3lzQurOrLwfd%2Fm7I1lIlRQvJ1l4knsWR4mFDxFPjSl&X-Amz-Signature=47f31207888fd95fa3adcfbdbf6a58253216daef9edb7029a8e29570c0938117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

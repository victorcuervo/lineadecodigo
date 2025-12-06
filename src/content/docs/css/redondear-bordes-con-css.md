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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WDER3M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYkyhy%2BL2VE3OLCtCwVQXQCguPlYkjWQ96WRfWNpvf7AiEAo%2FTdlN8V4ynMisx4gNG5GQBioEZT7ynxenDo0p%2BWJg8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI9xyipjSQKGIo6rjyrcA46EKflAbSjsy4QzMHMx1g%2B%2BIyVaaeLlz2prdxlrnRjvEyKNyvxpnVHVG3TOq0tZapG23OxDb3wzHuzrsYFNEVrrMbV3z1OJneIkqZOqWZgKEQSmnY59aHUsWN8fD%2FLeTBnotbWyThQPJI1mfV9UAfT%2F1k2rMKoP4AI%2Fzmrz%2BFQ%2FirxyzX9NEfFqtfhmktA820ecMOcMuN6UL1WyqL5hNKZb90%2BHNmJgSSYBzDMTTYRXJ%2FBL0%2F3Nv603LZ%2F4h3LYDI49lQUxodJE6OFKJ8VvayHFohUGteMiuUd9J9cMJ4JsInS2x719a%2B3%2F3b4IfEsxUmK2TOReCKkp4p4Mz%2FXwy9OI%2F7uOLC65yF47Am8wpJ9%2F87bTG3TnBg0Z7wamaPlsnfOIB4Nh2JCR0WWo7Udygm0VZVNpZf1RxtpwCGynzQJnJmAAxFv4l1%2BZtInyiE%2F3887xgA8vbnqVbMeisM8WmfYzI4wem9gtdZeOi1ulvBUjfpmE90dx5PFkMBslBbofnf2fRlxTkZbGmJpjlmXz%2Bmd0WKjOxpSHGbsjJf%2FxxsatNYK0DbiYqiG7AkU670OqIcVCHQugMhoF3HfgrmPspIfcUgUiCnJIoWKxjUg4VgP%2FxPIx0yv03XCbazHEMLfN0ckGOqUBe1X%2FrPubfOqoX%2FkKTMYbps0sxgr6ZazzSMJUDfnMxj7ukXVHpc6CdBJT6avMxyLHnI2pWbpTNf7Qfk05w9lWk3vvy%2F4LAdC%2Ft9BhZlyfpp3kK4fQGS6IMQc4YPQj3OY0vOyNCzjvg7WsquAW%2BWA6ywNNV4sGIPLzaxAe63ExLboeYtFjGccshwuwxIoMTIpS0XSfNdgx2dHtJGZEsJmpO%2ByZMFsT&X-Amz-Signature=59d563e1dfd44f1f43676ae0b3d42a79f7a50b5910c702bd73816b973f46496c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WDER3M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYkyhy%2BL2VE3OLCtCwVQXQCguPlYkjWQ96WRfWNpvf7AiEAo%2FTdlN8V4ynMisx4gNG5GQBioEZT7ynxenDo0p%2BWJg8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI9xyipjSQKGIo6rjyrcA46EKflAbSjsy4QzMHMx1g%2B%2BIyVaaeLlz2prdxlrnRjvEyKNyvxpnVHVG3TOq0tZapG23OxDb3wzHuzrsYFNEVrrMbV3z1OJneIkqZOqWZgKEQSmnY59aHUsWN8fD%2FLeTBnotbWyThQPJI1mfV9UAfT%2F1k2rMKoP4AI%2Fzmrz%2BFQ%2FirxyzX9NEfFqtfhmktA820ecMOcMuN6UL1WyqL5hNKZb90%2BHNmJgSSYBzDMTTYRXJ%2FBL0%2F3Nv603LZ%2F4h3LYDI49lQUxodJE6OFKJ8VvayHFohUGteMiuUd9J9cMJ4JsInS2x719a%2B3%2F3b4IfEsxUmK2TOReCKkp4p4Mz%2FXwy9OI%2F7uOLC65yF47Am8wpJ9%2F87bTG3TnBg0Z7wamaPlsnfOIB4Nh2JCR0WWo7Udygm0VZVNpZf1RxtpwCGynzQJnJmAAxFv4l1%2BZtInyiE%2F3887xgA8vbnqVbMeisM8WmfYzI4wem9gtdZeOi1ulvBUjfpmE90dx5PFkMBslBbofnf2fRlxTkZbGmJpjlmXz%2Bmd0WKjOxpSHGbsjJf%2FxxsatNYK0DbiYqiG7AkU670OqIcVCHQugMhoF3HfgrmPspIfcUgUiCnJIoWKxjUg4VgP%2FxPIx0yv03XCbazHEMLfN0ckGOqUBe1X%2FrPubfOqoX%2FkKTMYbps0sxgr6ZazzSMJUDfnMxj7ukXVHpc6CdBJT6avMxyLHnI2pWbpTNf7Qfk05w9lWk3vvy%2F4LAdC%2Ft9BhZlyfpp3kK4fQGS6IMQc4YPQj3OY0vOyNCzjvg7WsquAW%2BWA6ywNNV4sGIPLzaxAe63ExLboeYtFjGccshwuwxIoMTIpS0XSfNdgx2dHtJGZEsJmpO%2ByZMFsT&X-Amz-Signature=00eb3a072f49028e90691499f5a9f089b72c37ae82c27a39f1284621ed823805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

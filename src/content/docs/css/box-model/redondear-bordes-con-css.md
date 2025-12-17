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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBV2SYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JrCGRFOwoRw7jCrtn3EdC8fBpLwZg0GCK5hpQKuWJAIhAIT5Vj88WXUcQ9BVKkrHLLft08JluklrHrDxWHSxDUP%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgyMVcKf%2F%2FlQVYGFLVQq3ANqy2S00DKyCgDd%2FZLZ21eTR8bJiy4g4bp79yvRd4c2rCotDkLWJrG%2BABi5F40zOCbAJzma6E4qRSk1ZHg3M5y6es9XgABPYXaBgkW5%2FQH5VjRw%2BYEswYtTlnFUamBMqlomvGkAaUDHgyR57VXXWSbu8%2FedpVK%2FbhKBJhPPtVqkrOa3g6btVvWQxeEokuTRvCWOkU%2FcaLEpOwvrqEOvFSMG4%2Br3ZGbaRzoXIOsxXAKvT5JrrANRuFFR3esTRlOE3eC4Lcwo1MS3XP0sQU7YlpUhHgYuXPbHfO9pK%2F4DepmYymGjhsZhhqtkQdmm9eHYVR3ANWoDOni37XXyrkDrcaM%2FQBawIIhI%2FUTR%2FfuvoB54u1SFseub0EuqI1ngftjHkf46zZXxhstXTypYkOg1lrSlOj16VsnHD931c%2BMd8Rgml31pZxgUHbSVPrGqZ5IKXpISn2VRk2TD6lEE0n%2BeUBq3pGQJ78Z0jEg5enBOcDeic8RV0PMSQswV8IsHn48sCJRz8kGLsT%2FiFtce4uAs2FuU6%2Bk6k7K8A8Fav%2B9PCNfU55%2FzgODzAPsHhIspC1miXcEhkuPc1H1Qal5%2BRR%2F2NUyBNsZsvSiYsRahYzx7hjGbAJlwC8jqWFyi8w0TFzCD8InKBjqkAWLrXYR2Hx6SajdUrIRuQeGcIniZRcTVZ1WTGZwmsibS1X2E%2BVcn%2BeJPxbgouGeaf2QNn2cdW2a9EzIJQbbKCj%2F7JkDQm3S%2FDCXGzM1itnRefLCaIyul67I4v4fjayeYa3lJwCuoiMITAYmgF6x%2FqQs4iFXK2paWxI%2F%2FprArT3u5OoN6H1plLBkPGUPPEt5Y1Scvp24LH8XZgJFJOXqtcPpFxSe3&X-Amz-Signature=92286863fe006d65dc52d3367f85f54aac7f35bd831bb642b459d9e2390e34b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBV2SYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JrCGRFOwoRw7jCrtn3EdC8fBpLwZg0GCK5hpQKuWJAIhAIT5Vj88WXUcQ9BVKkrHLLft08JluklrHrDxWHSxDUP%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgyMVcKf%2F%2FlQVYGFLVQq3ANqy2S00DKyCgDd%2FZLZ21eTR8bJiy4g4bp79yvRd4c2rCotDkLWJrG%2BABi5F40zOCbAJzma6E4qRSk1ZHg3M5y6es9XgABPYXaBgkW5%2FQH5VjRw%2BYEswYtTlnFUamBMqlomvGkAaUDHgyR57VXXWSbu8%2FedpVK%2FbhKBJhPPtVqkrOa3g6btVvWQxeEokuTRvCWOkU%2FcaLEpOwvrqEOvFSMG4%2Br3ZGbaRzoXIOsxXAKvT5JrrANRuFFR3esTRlOE3eC4Lcwo1MS3XP0sQU7YlpUhHgYuXPbHfO9pK%2F4DepmYymGjhsZhhqtkQdmm9eHYVR3ANWoDOni37XXyrkDrcaM%2FQBawIIhI%2FUTR%2FfuvoB54u1SFseub0EuqI1ngftjHkf46zZXxhstXTypYkOg1lrSlOj16VsnHD931c%2BMd8Rgml31pZxgUHbSVPrGqZ5IKXpISn2VRk2TD6lEE0n%2BeUBq3pGQJ78Z0jEg5enBOcDeic8RV0PMSQswV8IsHn48sCJRz8kGLsT%2FiFtce4uAs2FuU6%2Bk6k7K8A8Fav%2B9PCNfU55%2FzgODzAPsHhIspC1miXcEhkuPc1H1Qal5%2BRR%2F2NUyBNsZsvSiYsRahYzx7hjGbAJlwC8jqWFyi8w0TFzCD8InKBjqkAWLrXYR2Hx6SajdUrIRuQeGcIniZRcTVZ1WTGZwmsibS1X2E%2BVcn%2BeJPxbgouGeaf2QNn2cdW2a9EzIJQbbKCj%2F7JkDQm3S%2FDCXGzM1itnRefLCaIyul67I4v4fjayeYa3lJwCuoiMITAYmgF6x%2FqQs4iFXK2paWxI%2F%2FprArT3u5OoN6H1plLBkPGUPPEt5Y1Scvp24LH8XZgJFJOXqtcPpFxSe3&X-Amz-Signature=b5c9c8e8f502d4882bd18dcdd4bee785da85f08d12df859da1e8c83fc20a5cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

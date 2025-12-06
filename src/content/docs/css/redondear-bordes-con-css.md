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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MXFRYY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzKMSRKTcIMkwQdFt7hP6uWKogJAbRbMVwgY1pSDPEAgIgXb9lqTQ4eiHuA0%2FjFsXAiNFA0miM4zkuuEOLJ50z96sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFxBC%2FduGDF4%2BPDA2ircA19kdyC7yy6OZ9vdO9reMy6Aun7KtaOIblGeMAy2jH4MGnoA%2FrMEhyNf3SiaTwHb29WhHpFMNsDU5BLiu2xc1cJqtMemS3tU%2Fle1fSXfBTZmpEtwFNFbmane6klrYxuX3L7p1nvzG4eEuQs%2Bit0l1RyaWBEiiAu0HL7fzn%2FJReXjstkeCXGhVYkJwbU27kSP3Z3yiZFRSIY%2FVEmQcrhTFQ7q0dgahqqyqiDfwso0SVro1TpFgdjxUb5rOPdm18R3NBMQ234xk5BN09ZyKQ5M4Z6D%2Be8hf8%2Fvt6eB%2B2cRVce6CC296frOrdHVmQzk3J%2FwFaB35j9YA%2FCzbh%2Bq4P3ZVKSXvSaAU%2F2o%2BQ%2FSjYrsjxHwI3Q7IQHLiLLJXXv5V7f1Bt8BexeelM3%2FrM5AZsAHtt1z%2FXWen8TkZxOWD5j0SQSpM67ISXzAutFz77hQtk2mCC%2BAGMbCUJE9FaTBlw0IeO3qnFJHplAFhZ7w2P%2BdmTHFpxZ9HAeuBonf4lNuUEFrsqYN1xuBUviCAg7m2Hi4LhBQmOj0gpccqVWEHn2vXPw2ma%2Ba%2Fxdf1EendQdOGVhbZikFMMr4TimjH%2B8n9IxR3g7Ld2%2FSue0mwVf4JWdVqHS6pd%2BZuG%2FOZjxIUvXxMJGn0MkGOqUBNg5M1Zghw2m5uwvg0lbhZsZmToTfvRpqFQr%2FylogEHyWJRLJsR7zUC2PfyHoc7QlDIwzj1Ci6G6ET1dRxyTBBFmt%2FWg7%2Be3FoYMzfgHW9OjumW%2FEp7mPqAF102ZUsWXO%2B1rmJMQm134ntXVfHVMHWPRdK8O1yoMsfT2OShtCZkeM6wTivjxj9JRnuBJWwLD2Sq3mhVHdsDvMKuOtbjcEmstWRkfB&X-Amz-Signature=883aea4ba9fffb344daf5318c77afa9269846c968f94a0bbe398215b2a94895a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MXFRYY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzKMSRKTcIMkwQdFt7hP6uWKogJAbRbMVwgY1pSDPEAgIgXb9lqTQ4eiHuA0%2FjFsXAiNFA0miM4zkuuEOLJ50z96sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFxBC%2FduGDF4%2BPDA2ircA19kdyC7yy6OZ9vdO9reMy6Aun7KtaOIblGeMAy2jH4MGnoA%2FrMEhyNf3SiaTwHb29WhHpFMNsDU5BLiu2xc1cJqtMemS3tU%2Fle1fSXfBTZmpEtwFNFbmane6klrYxuX3L7p1nvzG4eEuQs%2Bit0l1RyaWBEiiAu0HL7fzn%2FJReXjstkeCXGhVYkJwbU27kSP3Z3yiZFRSIY%2FVEmQcrhTFQ7q0dgahqqyqiDfwso0SVro1TpFgdjxUb5rOPdm18R3NBMQ234xk5BN09ZyKQ5M4Z6D%2Be8hf8%2Fvt6eB%2B2cRVce6CC296frOrdHVmQzk3J%2FwFaB35j9YA%2FCzbh%2Bq4P3ZVKSXvSaAU%2F2o%2BQ%2FSjYrsjxHwI3Q7IQHLiLLJXXv5V7f1Bt8BexeelM3%2FrM5AZsAHtt1z%2FXWen8TkZxOWD5j0SQSpM67ISXzAutFz77hQtk2mCC%2BAGMbCUJE9FaTBlw0IeO3qnFJHplAFhZ7w2P%2BdmTHFpxZ9HAeuBonf4lNuUEFrsqYN1xuBUviCAg7m2Hi4LhBQmOj0gpccqVWEHn2vXPw2ma%2Ba%2Fxdf1EendQdOGVhbZikFMMr4TimjH%2B8n9IxR3g7Ld2%2FSue0mwVf4JWdVqHS6pd%2BZuG%2FOZjxIUvXxMJGn0MkGOqUBNg5M1Zghw2m5uwvg0lbhZsZmToTfvRpqFQr%2FylogEHyWJRLJsR7zUC2PfyHoc7QlDIwzj1Ci6G6ET1dRxyTBBFmt%2FWg7%2Be3FoYMzfgHW9OjumW%2FEp7mPqAF102ZUsWXO%2B1rmJMQm134ntXVfHVMHWPRdK8O1yoMsfT2OShtCZkeM6wTivjxj9JRnuBJWwLD2Sq3mhVHdsDvMKuOtbjcEmstWRkfB&X-Amz-Signature=eba6abeedd679eaf4818a0dbe2c5e0dbc3983994ff83e31a13afe2b2df9e6fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

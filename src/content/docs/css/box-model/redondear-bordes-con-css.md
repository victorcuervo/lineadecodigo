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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQTSOYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG9Ba671h7dIR9PF8U466V8r%2FCFqWtn1b46h%2FTAAyVIAiEA6jvkXMeJ28ivgj8cYd5C%2BPvxUYsQJohybTTDkYsnuu4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHdF%2BMisLPXU5V6YGyrcA%2B4%2FT2dh4odNUPQ7j0KSg8uRxuXzjCYGReJc5hPuG8DcW6TLACtg9Ppy79XnKO3T87ljaBnAM4mtESoqvOjcGZMBCRZ2XYOk5XcIXw%2FE6ItEqJB%2Fy6sUksUnpV6V6NR%2FKlWtQLYQhf9Q4qA8LofDYNXjnBpQHEGs%2B%2F4jZxsqmx%2FTzuo66lM%2FnKktZO5xuYQzC9CM0Au1aYvJEk4uN%2Bg%2B%2BEJYL%2B4eIGA1WxSny0Y1kNI2N1bna9zGLRGiLporTvB1gglNkMnHhEO0JvLoIjASRp1Kvhi8hDJKG3fMoCLeyhx4hEasUw1v%2FZekv0htGn9nryCM8PKUHhNVFdt5XUcGjSBYVb2LqCcRFneRORPjxNS6y4flJWNLYv%2B5VGmzG80SBnCnYwyvlC43gjsRGdrougnZrElFOOMVxMAHc4zq0EbJBdyCLZYwEGrahrg%2FM4vbkA%2BhJ7%2BZhNBAbAguMrxJ9lCpSGtOAZRc6s3%2FJZt8%2FebN48Xgrb30CquI42rDd0G8oqkc3yJKA9sOBE1jQT%2Fe0O3ZytjI2bAlZRz0LhI4EFq%2B4tLMng3cmwCKWn9iy58bV3tfkDE3rVzmM%2BlZ6QfNwBUkDfglfz6sFIZcuiw2fzntv%2F0c2QNaRMuKfRyUMNGCicoGOqUBOVJbQ2by47MZdwMSjS6NfRWn4B8J2YoQQ9in2Ol3I4Dm7j%2Fb73ADcPMbBn2p%2FAi5a5ipyaWzQSL8uXAWgwGFOx1D8RR5d3xZsisuMIu3MjPDMkbewlA74NPnFk52Iv25oBHcxXDl2iaeoK28XLiDYSgKiNQkTmSsf1J6YE21AfYfhGvytjSP9JpQCCWAfT%2BQ2AO8HcRKqktnXvXUnyLeJgSngJSc&X-Amz-Signature=0e37e6e8489b96ba1be303e22e7f71a5dd078e314c41b04ead2a0a84e3a60e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQTSOYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG9Ba671h7dIR9PF8U466V8r%2FCFqWtn1b46h%2FTAAyVIAiEA6jvkXMeJ28ivgj8cYd5C%2BPvxUYsQJohybTTDkYsnuu4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHdF%2BMisLPXU5V6YGyrcA%2B4%2FT2dh4odNUPQ7j0KSg8uRxuXzjCYGReJc5hPuG8DcW6TLACtg9Ppy79XnKO3T87ljaBnAM4mtESoqvOjcGZMBCRZ2XYOk5XcIXw%2FE6ItEqJB%2Fy6sUksUnpV6V6NR%2FKlWtQLYQhf9Q4qA8LofDYNXjnBpQHEGs%2B%2F4jZxsqmx%2FTzuo66lM%2FnKktZO5xuYQzC9CM0Au1aYvJEk4uN%2Bg%2B%2BEJYL%2B4eIGA1WxSny0Y1kNI2N1bna9zGLRGiLporTvB1gglNkMnHhEO0JvLoIjASRp1Kvhi8hDJKG3fMoCLeyhx4hEasUw1v%2FZekv0htGn9nryCM8PKUHhNVFdt5XUcGjSBYVb2LqCcRFneRORPjxNS6y4flJWNLYv%2B5VGmzG80SBnCnYwyvlC43gjsRGdrougnZrElFOOMVxMAHc4zq0EbJBdyCLZYwEGrahrg%2FM4vbkA%2BhJ7%2BZhNBAbAguMrxJ9lCpSGtOAZRc6s3%2FJZt8%2FebN48Xgrb30CquI42rDd0G8oqkc3yJKA9sOBE1jQT%2Fe0O3ZytjI2bAlZRz0LhI4EFq%2B4tLMng3cmwCKWn9iy58bV3tfkDE3rVzmM%2BlZ6QfNwBUkDfglfz6sFIZcuiw2fzntv%2F0c2QNaRMuKfRyUMNGCicoGOqUBOVJbQ2by47MZdwMSjS6NfRWn4B8J2YoQQ9in2Ol3I4Dm7j%2Fb73ADcPMbBn2p%2FAi5a5ipyaWzQSL8uXAWgwGFOx1D8RR5d3xZsisuMIu3MjPDMkbewlA74NPnFk52Iv25oBHcxXDl2iaeoK28XLiDYSgKiNQkTmSsf1J6YE21AfYfhGvytjSP9JpQCCWAfT%2BQ2AO8HcRKqktnXvXUnyLeJgSngJSc&X-Amz-Signature=801c3e42c26ce2c052fb715c63999075883d862b7b8c039a8edaee7495e68596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

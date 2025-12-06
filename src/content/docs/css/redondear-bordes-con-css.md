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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQNJYO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH5XWTONnaZltoBWtuVhmpuISEHsaDpevMHOZSZS6ZDAiEA4bSv1uZIBOah4J%2Bsj6lg3a4lp0VZ46qg5Hb9n%2Fovd40q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF8umNtZSj4%2Bh2zDvSrcA3pkuQVluKTKu7E8iDLeInh12T2n4tMHoyjOiCx0lmyFbbK6261syZ%2Fdx%2BTMim7wee%2FZ%2BPXzyjWelhw0nOuNQCjPqEsCRYiXN2OcqM3uA13PeLihcbd339TG5AZvkBxYoRE324oQr7Ws7phH3t1ermsNZCojUhbW%2FbAAG4KnoYhLT8zJ7JA4FHJZIka4wop6AtpQQ29HOlbpFu2AaJnMES%2BELHccVoFCz2QA4zgOCpRLKgPFbyx29JJPKRlo%2BFkb%2FaMNp5o5m2lylDL4kI7spB2XFdsFr9X8oNz54lzU2nqIMp3XvfT3%2BKerSRMAGkKP6muiJQhqGMCH%2FSzFV%2BdsKaefEOzvak7FRebnYRatSucroz3PdsdU7hSu%2BIrA%2FnkoH0j1i89qqxZeI5VzPh7b5UuZVUO6RWCCDP4882HR0%2FTz4qwNR03q%2FI3euErPzfCV5wcxOmmG19tAAok9B%2B1WJF2t4ouxuSurOuBsikUYvsNIjwxImptLr47%2B%2BIFz3eWLkPKiYlBNzZg63j%2FSA3rvF1zgkwidS03FdqjKHqYWeJTG7xfompyvWk5as2XXhimKYeEYDxiibwsYKVA0%2FxqQIlgtKwLNRGl6dplF46qULUlGATe8%2B3Aq%2FNLM7zpyMKXezskGOqUBsx56Reu0QFobcM%2BQ2F7UH%2F4Q1Z2xjJPJqdECbwMc2Q6CiMQj0c4XtY%2FEU%2FlxhZ4WzwziG6kjo2k8wSpOk8DJvRNA9OkSrDEMHsKaiqPoaj6FdcKK%2F%2BTHrHdKojwDl7OItyInjp9tDzhkWV0jUxHSBt2r0UHdcauwov6T3IukdpUgRlujKuHwyJr8%2Blkvk0TcG3paP4Ox9PFc3kKxumD2N2VZ3XQu&X-Amz-Signature=f85f9552a3e9ab4771adf85bf5fb34eac14e87d0e1bc73a2c0a6be356e7f88af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQNJYO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH5XWTONnaZltoBWtuVhmpuISEHsaDpevMHOZSZS6ZDAiEA4bSv1uZIBOah4J%2Bsj6lg3a4lp0VZ46qg5Hb9n%2Fovd40q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF8umNtZSj4%2Bh2zDvSrcA3pkuQVluKTKu7E8iDLeInh12T2n4tMHoyjOiCx0lmyFbbK6261syZ%2Fdx%2BTMim7wee%2FZ%2BPXzyjWelhw0nOuNQCjPqEsCRYiXN2OcqM3uA13PeLihcbd339TG5AZvkBxYoRE324oQr7Ws7phH3t1ermsNZCojUhbW%2FbAAG4KnoYhLT8zJ7JA4FHJZIka4wop6AtpQQ29HOlbpFu2AaJnMES%2BELHccVoFCz2QA4zgOCpRLKgPFbyx29JJPKRlo%2BFkb%2FaMNp5o5m2lylDL4kI7spB2XFdsFr9X8oNz54lzU2nqIMp3XvfT3%2BKerSRMAGkKP6muiJQhqGMCH%2FSzFV%2BdsKaefEOzvak7FRebnYRatSucroz3PdsdU7hSu%2BIrA%2FnkoH0j1i89qqxZeI5VzPh7b5UuZVUO6RWCCDP4882HR0%2FTz4qwNR03q%2FI3euErPzfCV5wcxOmmG19tAAok9B%2B1WJF2t4ouxuSurOuBsikUYvsNIjwxImptLr47%2B%2BIFz3eWLkPKiYlBNzZg63j%2FSA3rvF1zgkwidS03FdqjKHqYWeJTG7xfompyvWk5as2XXhimKYeEYDxiibwsYKVA0%2FxqQIlgtKwLNRGl6dplF46qULUlGATe8%2B3Aq%2FNLM7zpyMKXezskGOqUBsx56Reu0QFobcM%2BQ2F7UH%2F4Q1Z2xjJPJqdECbwMc2Q6CiMQj0c4XtY%2FEU%2FlxhZ4WzwziG6kjo2k8wSpOk8DJvRNA9OkSrDEMHsKaiqPoaj6FdcKK%2F%2BTHrHdKojwDl7OItyInjp9tDzhkWV0jUxHSBt2r0UHdcauwov6T3IukdpUgRlujKuHwyJr8%2Blkvk0TcG3paP4Ox9PFc3kKxumD2N2VZ3XQu&X-Amz-Signature=6bdcc819f32db82f4a1cabe5565994756510e14b02cf7fde284cc5764b38ca89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

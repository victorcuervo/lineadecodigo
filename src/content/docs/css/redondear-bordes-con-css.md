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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSEZV4E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHesbps%2B0%2BpDLbR%2BNaulTUlCPTQtsxkSgJnJ5OlPIINAiEA8t1DiAjhSz6ZZsK4tuikwTWxDKhwHoGDfyMYHwChX9cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMl%2BOzyVgGA%2BhjlhySrcA0cHK2iFZOs5DUrOyDtWGxbRlvPJlVKewAaxfWiJwKI5sqj9A4Tqt2JHPKuFGXaq%2F8Uv91pDjNPny4GxuqXdOERJPAes9mNzCbwTnS0t%2FQC0%2B9YaIJGhAtqFkm9Rtph6ueJv8ovj23aoL38i1aOYIhR0YZGLDTdcBvtQx39ZOUJiLt%2Bg3sTn%2Fi6RrEcWY3gNK3y%2Bjlo%2BOjIsR%2BXlJI3Q8MhgJBa%2F4qce8hX54YETjy6RWOeluQwU3dIpq%2FPpcIfp8lKdKWD5F0sztlkf1SxbLYiua%2FHSgLVCBHwj34ckBDs8SKpj%2BLF0ZD5n4XRdFpNr%2BQiQzpJlO1IH5kk%2FkU%2FduEYGDimpSLo4mhH%2F8Uid1%2Ftv0IDcY41VHxVCHYdpDBwMYhIvP3uFo4GzImk4%2F4%2Fvs4KvtqQhol1urkKuVqGrMhNZ3dNXyFKWa%2Bdvp7x8di3b4f2AHGwfzF2Ns9nui89humFj%2B%2BAKPYp4NlCEQoYE%2FoyeQMxOS4r4LwIhA%2By1fX%2BXzaPRDNsWjuzu88WxrEnV2I%2BWDLPNOLpoHOZjLMsepsFAtZhuTaEF8uPO63Hztfb9NDBBHERVXmov6CuEKBo3obUL814pftuXPSr5s75WgoWgwI3IxEZD55MEl4NyMLHuzMkGOqUBIX6qUGVD8LtDlUl2dNCpWjiOMzW76G%2BgyLRDWPVN3vYGvq2hb0kidI5UDbXUoeF9AM5qgibEjO48fdGs33aiGU%2BgowLydGTkxhXN0rOVUIqOlOpQhG0nkPvAkCM%2FDYOZ6JONaXNLHhbDVw8RYJGF1OYFyQn%2B2U0VwG530IxQyYpscc3S96QBA%2BKPJI8P8r02jhkEQV1iaFwp%2FLf1wn47bDuH9gSw&X-Amz-Signature=b30bb2e3f813ceb5291bd3fa8cee4885bf8aaef0707956827c0985c3d6597854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSEZV4E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHesbps%2B0%2BpDLbR%2BNaulTUlCPTQtsxkSgJnJ5OlPIINAiEA8t1DiAjhSz6ZZsK4tuikwTWxDKhwHoGDfyMYHwChX9cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMl%2BOzyVgGA%2BhjlhySrcA0cHK2iFZOs5DUrOyDtWGxbRlvPJlVKewAaxfWiJwKI5sqj9A4Tqt2JHPKuFGXaq%2F8Uv91pDjNPny4GxuqXdOERJPAes9mNzCbwTnS0t%2FQC0%2B9YaIJGhAtqFkm9Rtph6ueJv8ovj23aoL38i1aOYIhR0YZGLDTdcBvtQx39ZOUJiLt%2Bg3sTn%2Fi6RrEcWY3gNK3y%2Bjlo%2BOjIsR%2BXlJI3Q8MhgJBa%2F4qce8hX54YETjy6RWOeluQwU3dIpq%2FPpcIfp8lKdKWD5F0sztlkf1SxbLYiua%2FHSgLVCBHwj34ckBDs8SKpj%2BLF0ZD5n4XRdFpNr%2BQiQzpJlO1IH5kk%2FkU%2FduEYGDimpSLo4mhH%2F8Uid1%2Ftv0IDcY41VHxVCHYdpDBwMYhIvP3uFo4GzImk4%2F4%2Fvs4KvtqQhol1urkKuVqGrMhNZ3dNXyFKWa%2Bdvp7x8di3b4f2AHGwfzF2Ns9nui89humFj%2B%2BAKPYp4NlCEQoYE%2FoyeQMxOS4r4LwIhA%2By1fX%2BXzaPRDNsWjuzu88WxrEnV2I%2BWDLPNOLpoHOZjLMsepsFAtZhuTaEF8uPO63Hztfb9NDBBHERVXmov6CuEKBo3obUL814pftuXPSr5s75WgoWgwI3IxEZD55MEl4NyMLHuzMkGOqUBIX6qUGVD8LtDlUl2dNCpWjiOMzW76G%2BgyLRDWPVN3vYGvq2hb0kidI5UDbXUoeF9AM5qgibEjO48fdGs33aiGU%2BgowLydGTkxhXN0rOVUIqOlOpQhG0nkPvAkCM%2FDYOZ6JONaXNLHhbDVw8RYJGF1OYFyQn%2B2U0VwG530IxQyYpscc3S96QBA%2BKPJI8P8r02jhkEQV1iaFwp%2FLf1wn47bDuH9gSw&X-Amz-Signature=e5fe9c50f1abe17f0b3aa52c08f7e4349c6f4e70d7cace41364199690af18237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

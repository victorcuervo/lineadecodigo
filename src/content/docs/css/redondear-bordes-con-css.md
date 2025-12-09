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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJFOC7C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo03d3fKOGBsHxTAOeSv3%2FXnfXVauXQ404XXJBYNJehgIgSHC5FQK7fHm1YCHfgj25fp%2B34AVUOiQtoGFGuCtha5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BPnm38TKNFlzPLoircA42i7hKG27nafBJoujlsqEVyLBZ4OJo1UZ3Hr%2FMLCI1fGIeQ34vYpsobsps%2FQUsVcz2VYQLzcaCI5eH%2BIa%2Bi5M%2BqhUrfXd5GtuWccPMBTgCSRAiHI53wO4KMAINJB2dfQZqYO80cmsUCQhMXs0itCu2Pf7caAwkNfjYUVUyb4kF%2FciaZjqR787wbc59QhhJ5XH0iZjOpG6UxdtMsmYjn7DaesrZCrE%2FCHDKHUyltx0LD0qtRVuG1hCc70Khe2cKWKUKAJZ6816HiDWTYJlkpgqpJe60lnTizZWqAiPMjgJKlsGa%2BFxmiiDQq2%2Fz0BGI3Ra0%2B3DEiY%2Fjp%2FSDjKU1khk0AywEoJBYqfx1L62Ym7fS8zDlAodwx34GvU4cSyaJTb5Fzt5Vsqtw9B%2FMP4sQz0E5OerYeLNkMD%2FWoZwW7yafhaSREBNwPa57OEq7KvZDo%2FzVEoc%2BE%2BDqx6117q05FLOD6VSzQzv%2BE7ffnF3Xo256uWsi%2FRuwLsmMFZ85%2B6Tbo9slvWCbylE64u11xDTIqtr%2B3IpDWM%2FmczpjVLBJDv8vd1Lsx5ImP4pVPfKMD%2FZ%2FzJAqKt4QEmlz9nKJDpwvA4LDszP7lqpsP9fesAH%2FC4Ik93Mw%2FAmmUR190SPb3MKbJ3skGOqUBVaN5nGsTMWgx0xemO%2B%2B8t0UkSukkLd5JQlywXvCHO2YowrTqnOj%2FewrtvES6KYxhWyHmwNYt%2BfUImHkl3guEjzJomHNUKLwdK%2BBKvJ5zVrAoKn6dR2FdE50U%2FM7c%2FJt6lQRzL%2Fjxqz06TuEVnJbGJUq7PqdzCjEoUyhfgRioV%2FzuejXthkInlMfuwaRYOTZTSI1nPfbTk%2Bk1qvDdBxeG5i7R%2B5qc&X-Amz-Signature=9f8be8b710620609de50f6054ff6cdc68c8c86819445cf2df0713b5530e7c31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJFOC7C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo03d3fKOGBsHxTAOeSv3%2FXnfXVauXQ404XXJBYNJehgIgSHC5FQK7fHm1YCHfgj25fp%2B34AVUOiQtoGFGuCtha5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BPnm38TKNFlzPLoircA42i7hKG27nafBJoujlsqEVyLBZ4OJo1UZ3Hr%2FMLCI1fGIeQ34vYpsobsps%2FQUsVcz2VYQLzcaCI5eH%2BIa%2Bi5M%2BqhUrfXd5GtuWccPMBTgCSRAiHI53wO4KMAINJB2dfQZqYO80cmsUCQhMXs0itCu2Pf7caAwkNfjYUVUyb4kF%2FciaZjqR787wbc59QhhJ5XH0iZjOpG6UxdtMsmYjn7DaesrZCrE%2FCHDKHUyltx0LD0qtRVuG1hCc70Khe2cKWKUKAJZ6816HiDWTYJlkpgqpJe60lnTizZWqAiPMjgJKlsGa%2BFxmiiDQq2%2Fz0BGI3Ra0%2B3DEiY%2Fjp%2FSDjKU1khk0AywEoJBYqfx1L62Ym7fS8zDlAodwx34GvU4cSyaJTb5Fzt5Vsqtw9B%2FMP4sQz0E5OerYeLNkMD%2FWoZwW7yafhaSREBNwPa57OEq7KvZDo%2FzVEoc%2BE%2BDqx6117q05FLOD6VSzQzv%2BE7ffnF3Xo256uWsi%2FRuwLsmMFZ85%2B6Tbo9slvWCbylE64u11xDTIqtr%2B3IpDWM%2FmczpjVLBJDv8vd1Lsx5ImP4pVPfKMD%2FZ%2FzJAqKt4QEmlz9nKJDpwvA4LDszP7lqpsP9fesAH%2FC4Ik93Mw%2FAmmUR190SPb3MKbJ3skGOqUBVaN5nGsTMWgx0xemO%2B%2B8t0UkSukkLd5JQlywXvCHO2YowrTqnOj%2FewrtvES6KYxhWyHmwNYt%2BfUImHkl3guEjzJomHNUKLwdK%2BBKvJ5zVrAoKn6dR2FdE50U%2FM7c%2FJt6lQRzL%2Fjxqz06TuEVnJbGJUq7PqdzCjEoUyhfgRioV%2FzuejXthkInlMfuwaRYOTZTSI1nPfbTk%2Bk1qvDdBxeG5i7R%2B5qc&X-Amz-Signature=9c249a93dc791286e83d6db28984ab320eef3260f49f5505f2d39f996bda294e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

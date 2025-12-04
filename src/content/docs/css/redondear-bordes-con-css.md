---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMCJIYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBlkU6syie5H0H3uYMsYQkxGcuNIGYIM54xAZ%2FhqWVQKAiEAvm8FVUpf%2Fiux3yjDjSumJPnBpTMDe5ad4xFC6ipJnRkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKSCodgEU0Dz8TVd3SrcA6M8Vn%2BxTx6%2FFIiaiAdZ1UTYznv47rwAhDomA7BbVAFJkgXpnHkANuYS6pm4dYC5d39bpKMFkEYmj4k7Ghv2Nk%2Fdbjio3jjYYQTsic2vrcajsr%2FPHkQWsdF4g%2FH6hGM3XiCUHJudG6M3tb8qNUna%2BPpzkUcQRxJGJLRdmTA3TrrViunadqGI47nBaYUfvcP9%2FF86Fg8uyykNqB%2FTvi3Ojz1aJSCRjnN96grcosJdKXVn%2FmDQZwIfnfKBGwiwAmutoCg43rcCdidtH1%2FQyrkWQyCgv06RrLM8748dPhKv1QJ%2FM7eGtWl1OZOzHjOxDVEmQHghoSFvg6qCp1WjvpCUpMX4qnp1ZJ479fMpCXVH1XIiDBTBLm4K8vrSNGxYnVGg0y9Jd%2FuERpLCZWz0XUgF3OpAfs85EYsCK9F5nWjcAxro%2FKrd5FA%2FaBu%2BVs9xzaidvZHh3cYDEft6b9nfln1x6zGVteuCDWVZcKYOFS8AN%2BZU23fpF%2FryzXU9fXVolF7KHdD0FhMsUCRY%2B40xb55liZpT0A7tymu7mRbPRQQmgXgHMpt68jEc8bXOIJAqFIzSCHNjLL9ufpu6CcHpPgGp%2FYEmpAWiagAuschjAwvaoVZg1%2BO0txw5F%2FOBxyPaMLeqxckGOqUB2Lh8f3D%2FwwY3iAjSaM3YX7yv20T6as9eCT9q12dYMs4qV3s64N2SP%2BQeCJDXjATQI4R6kBijxmYa12B0HSGUzJGfkYb1ivst7KmUzKf24AglBY1jjpLjZUAp7e3AaNHfewCkA5WKRK%2Fw4xzm%2FOODg5SB23w1rwiKT7t%2FAISjtVYo7B040ojjXv9I5OPK5ZyibN2sW8fBhGI0Mprjb6rYdZasvDcq&X-Amz-Signature=fea5f0133e4856651be4c1f44370785a5c5ab0f69f71ffaf19bcf338bce3d9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMCJIYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBlkU6syie5H0H3uYMsYQkxGcuNIGYIM54xAZ%2FhqWVQKAiEAvm8FVUpf%2Fiux3yjDjSumJPnBpTMDe5ad4xFC6ipJnRkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKSCodgEU0Dz8TVd3SrcA6M8Vn%2BxTx6%2FFIiaiAdZ1UTYznv47rwAhDomA7BbVAFJkgXpnHkANuYS6pm4dYC5d39bpKMFkEYmj4k7Ghv2Nk%2Fdbjio3jjYYQTsic2vrcajsr%2FPHkQWsdF4g%2FH6hGM3XiCUHJudG6M3tb8qNUna%2BPpzkUcQRxJGJLRdmTA3TrrViunadqGI47nBaYUfvcP9%2FF86Fg8uyykNqB%2FTvi3Ojz1aJSCRjnN96grcosJdKXVn%2FmDQZwIfnfKBGwiwAmutoCg43rcCdidtH1%2FQyrkWQyCgv06RrLM8748dPhKv1QJ%2FM7eGtWl1OZOzHjOxDVEmQHghoSFvg6qCp1WjvpCUpMX4qnp1ZJ479fMpCXVH1XIiDBTBLm4K8vrSNGxYnVGg0y9Jd%2FuERpLCZWz0XUgF3OpAfs85EYsCK9F5nWjcAxro%2FKrd5FA%2FaBu%2BVs9xzaidvZHh3cYDEft6b9nfln1x6zGVteuCDWVZcKYOFS8AN%2BZU23fpF%2FryzXU9fXVolF7KHdD0FhMsUCRY%2B40xb55liZpT0A7tymu7mRbPRQQmgXgHMpt68jEc8bXOIJAqFIzSCHNjLL9ufpu6CcHpPgGp%2FYEmpAWiagAuschjAwvaoVZg1%2BO0txw5F%2FOBxyPaMLeqxckGOqUB2Lh8f3D%2FwwY3iAjSaM3YX7yv20T6as9eCT9q12dYMs4qV3s64N2SP%2BQeCJDXjATQI4R6kBijxmYa12B0HSGUzJGfkYb1ivst7KmUzKf24AglBY1jjpLjZUAp7e3AaNHfewCkA5WKRK%2Fw4xzm%2FOODg5SB23w1rwiKT7t%2FAISjtVYo7B040ojjXv9I5OPK5ZyibN2sW8fBhGI0Mprjb6rYdZasvDcq&X-Amz-Signature=8a9bfc31d4085d08662943358477cc4a4e5c3f31dd44c56180e5c433aac2aa98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

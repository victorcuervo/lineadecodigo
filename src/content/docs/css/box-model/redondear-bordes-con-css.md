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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZYPHJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJR0RgdqvCY92pZigopUQDEXB31nt1ICe9RYVpgj%2BdAIhAORTsBgMV%2FAA0GTA35zOye%2BrUoF8FYbx%2BmVu0DxrS6J1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL03S7t0APpDoDFbEq3APdKwPhq6PZASiJ%2F9If3Ww%2Fdhlq62TUjH6J3JsnaeXrV0VM%2BWsMq9GBgQaiuy1aRkFX%2F9ihkLQ1VPlhEpAQ5c8UyHx3%2BrBTcT2yqVtCmpyt1n8nctojMCb8TnrLliU7WiATwiwUo6jPB9mg2DroGvxEplUPHe71VdIDm0hn9vhENu83roS5D2nJqVDu1frNFyFiRDiLbvW69lhA2rOi4nsZZVghvaB38TBL6stFDX5p4vya5ljhtDJkSBYye8I8b6UjvjjTilMDFf6vwUQlwk4w06ImrROC5gi8XMvUzFujmbv0QCHRjWqAt3341dC8GQTNjG06xzhwhS1%2BwKPFCWZfWNwsfiiLRD2E3y6LfKqv58DWINAploed1Np3WCGN4NLA4qF%2BGibq1LZrQBkHWXPj6oLzmOrttSECG9lYPk%2F5T4yCd4bqY%2FQwYbFsxdZ%2FaGTXTtI1tocZXaEWl12dot8TfJJHCpY4oKpBX8Us%2FI0OcYHXjqVf32S8iNj90e28216N62EjgppR%2BnlDYjobZufJM1Nao1uvkVEuwgIyEFpTbrZZKlE3MGBUQTwsG0oIdb1QwF7vvE%2BW3hmwI7wGQwgME5wnBTCIxsh4403HS%2F0gA2R8JPE%2BZCzcC2zLyDDIrozKBjqkAQTO2J5t%2BIaWPoKcVkhbDEBMa%2BBr3Rg2FDLfc9op5tta8HZH9q3LI%2FGwr1lGcDsg%2FjXLwTtuum%2BIzC0TBr44Jgke6l%2B%2BD0AFBMle2OAjNzUqii4Tg9FwiJwKieg%2BG9S3v%2FznOKH8YHwKEeQMDJ4wIFcf37ejq39xhE2K0%2FqJQCWlUWA5FpGhjLEjl9aLAq2BSVP6HixdoqB%2BiicFxusZcZnlcIwB&X-Amz-Signature=edcb09ba9d30f0c487858de19549c86894ecf3798be0928f9cdd87463cc4fe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZYPHJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJR0RgdqvCY92pZigopUQDEXB31nt1ICe9RYVpgj%2BdAIhAORTsBgMV%2FAA0GTA35zOye%2BrUoF8FYbx%2BmVu0DxrS6J1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL03S7t0APpDoDFbEq3APdKwPhq6PZASiJ%2F9If3Ww%2Fdhlq62TUjH6J3JsnaeXrV0VM%2BWsMq9GBgQaiuy1aRkFX%2F9ihkLQ1VPlhEpAQ5c8UyHx3%2BrBTcT2yqVtCmpyt1n8nctojMCb8TnrLliU7WiATwiwUo6jPB9mg2DroGvxEplUPHe71VdIDm0hn9vhENu83roS5D2nJqVDu1frNFyFiRDiLbvW69lhA2rOi4nsZZVghvaB38TBL6stFDX5p4vya5ljhtDJkSBYye8I8b6UjvjjTilMDFf6vwUQlwk4w06ImrROC5gi8XMvUzFujmbv0QCHRjWqAt3341dC8GQTNjG06xzhwhS1%2BwKPFCWZfWNwsfiiLRD2E3y6LfKqv58DWINAploed1Np3WCGN4NLA4qF%2BGibq1LZrQBkHWXPj6oLzmOrttSECG9lYPk%2F5T4yCd4bqY%2FQwYbFsxdZ%2FaGTXTtI1tocZXaEWl12dot8TfJJHCpY4oKpBX8Us%2FI0OcYHXjqVf32S8iNj90e28216N62EjgppR%2BnlDYjobZufJM1Nao1uvkVEuwgIyEFpTbrZZKlE3MGBUQTwsG0oIdb1QwF7vvE%2BW3hmwI7wGQwgME5wnBTCIxsh4403HS%2F0gA2R8JPE%2BZCzcC2zLyDDIrozKBjqkAQTO2J5t%2BIaWPoKcVkhbDEBMa%2BBr3Rg2FDLfc9op5tta8HZH9q3LI%2FGwr1lGcDsg%2FjXLwTtuum%2BIzC0TBr44Jgke6l%2B%2BD0AFBMle2OAjNzUqii4Tg9FwiJwKieg%2BG9S3v%2FznOKH8YHwKEeQMDJ4wIFcf37ejq39xhE2K0%2FqJQCWlUWA5FpGhjLEjl9aLAq2BSVP6HixdoqB%2BiicFxusZcZnlcIwB&X-Amz-Signature=8f95dd84804b751e299310d39a34a6e5c79d35218f2dbd30ee92be64a6c98eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

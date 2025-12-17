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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QYWPPO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWYAGvOVUK3cvDMojJniUW2%2BnhAHkvb68ka0gIktZ6SwIgFfPLrE%2FpIChhHLjdkCZueut9gDBO6pmEFhI9sX84NAoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOQL4ScBUDHVjsr9IyrcA1PGy1dA0xt3JE70P23pUdrnQ5kM3o9lHWJiInWbICQ5jpROOsOuQY7Yu3QU15yKdoCYP0nblaldSTN%2FikB11BEJbwLa3c9iMpzgJRnH69Q00caaGZiITIDGHb7tu0DCXdKLGNIVFgPner4aCFmzaZRRiYibi9W6geknHT%2FNXYa5u3sE2%2B382deFpn8rVjNMk2Kd%2F025P3B60J1hA9YeNdIvk33LtoKrkohY6ogzFcNPVGyFOaVzjXvjJLSqfogyOjK%2FwBwJyLeF6sJsv4QXc8A72WEJyXjlHR%2FQrG5FTNsZQbWENvPhR3Az%2FVvUXVQV3%2FZ1e2AkMO%2B3hO%2Fd93H4rgXZSdLFnlRwL0JyCGQV%2Be3KbNTX6hp7co4vF3QZ9XwNE%2BFOHyPZJ4geqPZLrE1lUYJRSw3AKExJUCRZIF5T%2BzXmUEYMomjCkTVDReWPXuCJ7PKn8Xy9xvOGpEv2iEbnBQIgl4bc4uqhrgtEUhzRC8wnR2WnTN%2BQipVuLgTBnIDd5Be3ot56QuVoPc8AS89mepHHfpHIUswaE%2BjBbIw96aC0pbDQtHBRjMFADl%2FO%2BOIfGsm8g1R%2BThLQAq00CKcuF35LZtp%2B%2FqaG1wcH1P0Va37roBy7pOhkQBXPojBtMK7GisoGOqUBLu2Cb%2Bxcm%2BDpT%2FoL1YwOYHrXxynCBUs97XMyIJrj1lm2UazCHSkxIsyU4HLAmHC7E4uPlAJxWk1x0F1KEWqd8z4UOYx3UlAEyzcF27DuqO0R6jAnGsdKXrpZCXuuj9gw%2BC3pT9VRz3fYbZ9M2r2KkB197SIBu2qIHWcO6HZvVQCk6KCEkq0uTnOe6yCgdeY9nwEU5soBlYPsiNWHLz2g09D%2B5kCq&X-Amz-Signature=636e84fb7aeab25c60619faa8bdc8be775c36b7952de048d1bfb80f13f2800ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QYWPPO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWYAGvOVUK3cvDMojJniUW2%2BnhAHkvb68ka0gIktZ6SwIgFfPLrE%2FpIChhHLjdkCZueut9gDBO6pmEFhI9sX84NAoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOQL4ScBUDHVjsr9IyrcA1PGy1dA0xt3JE70P23pUdrnQ5kM3o9lHWJiInWbICQ5jpROOsOuQY7Yu3QU15yKdoCYP0nblaldSTN%2FikB11BEJbwLa3c9iMpzgJRnH69Q00caaGZiITIDGHb7tu0DCXdKLGNIVFgPner4aCFmzaZRRiYibi9W6geknHT%2FNXYa5u3sE2%2B382deFpn8rVjNMk2Kd%2F025P3B60J1hA9YeNdIvk33LtoKrkohY6ogzFcNPVGyFOaVzjXvjJLSqfogyOjK%2FwBwJyLeF6sJsv4QXc8A72WEJyXjlHR%2FQrG5FTNsZQbWENvPhR3Az%2FVvUXVQV3%2FZ1e2AkMO%2B3hO%2Fd93H4rgXZSdLFnlRwL0JyCGQV%2Be3KbNTX6hp7co4vF3QZ9XwNE%2BFOHyPZJ4geqPZLrE1lUYJRSw3AKExJUCRZIF5T%2BzXmUEYMomjCkTVDReWPXuCJ7PKn8Xy9xvOGpEv2iEbnBQIgl4bc4uqhrgtEUhzRC8wnR2WnTN%2BQipVuLgTBnIDd5Be3ot56QuVoPc8AS89mepHHfpHIUswaE%2BjBbIw96aC0pbDQtHBRjMFADl%2FO%2BOIfGsm8g1R%2BThLQAq00CKcuF35LZtp%2B%2FqaG1wcH1P0Va37roBy7pOhkQBXPojBtMK7GisoGOqUBLu2Cb%2Bxcm%2BDpT%2FoL1YwOYHrXxynCBUs97XMyIJrj1lm2UazCHSkxIsyU4HLAmHC7E4uPlAJxWk1x0F1KEWqd8z4UOYx3UlAEyzcF27DuqO0R6jAnGsdKXrpZCXuuj9gw%2BC3pT9VRz3fYbZ9M2r2KkB197SIBu2qIHWcO6HZvVQCk6KCEkq0uTnOe6yCgdeY9nwEU5soBlYPsiNWHLz2g09D%2B5kCq&X-Amz-Signature=ee2d7b8e784d76b83a1985121ae5611dd57ace50f4c9d6e7666942af848ef361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

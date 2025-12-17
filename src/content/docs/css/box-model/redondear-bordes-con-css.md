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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H4FJC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKPyaX1oX7oMBlGhzYn%2F6gtQdleJn%2BKx5qBIlK4xSFugIhAJ%2BYJCMkRvJSiEZPDS5XPG98OQg1Akk7PggmrQh8EZnCKv8DCHwQABoMNjM3NDIzMTgzODA1Igx5tKCOxMlRhEwairgq3AN50Q6xrc%2Fw0tXVXueyFlAROXXXqfdeY37qAyRKBPPJeADxBcyE9lPeMqeXnnr79FkDUApcD8jRFmVcAUvwwqOAsKwIbnutTCTsKpnIlQ9FGh3xYM%2F%2FPUZ1dDzqR2P5MBPDCIPSCwrtsvJhKaeMqizph4KVIxfk4gye%2FsT0RASiyVV15axShRd%2FM7Af9YNm1xQgGwZzzervoffQN%2FWlKHKn%2FazDC%2Fs4R5SHTrktOEH3y29cCVZ18ZObYkdt8OLzJ06oHNFSBBOT5TJ%2BI6H3nuxaAufMjc%2Byj2DXq4MqHK4NVrkIO4XGN9RAJ7GcmvTsuvi4E21%2B0uWJm7cBWJ2kea6tmslwub%2BxMXPtLTQuYi5p2xMcue2nEzlNTTYRRMVV0Ugk5CF0q0NKiP5GrhzDHYZ979EFh8NuuyaevMwlVXeOl894wGQh%2Bh4J%2B7xWhInfFBZWkuH%2FyptePuiQw9drW81eqToT33Ko8BLUgbVtF3GolQJDp0onAZcWbGd%2FScYYjFimlDJArAyMimeyc6%2B5py%2FLHwJRJ6xo31y0BNx9Fqsxo%2FP6H5kjCbrs%2F5CZvYhIFjI6A3uJqBcmxA4sYsbIQMH7D9lCLVWeH%2FgQEjotWeigx%2BMG5YMEwOvIaYNtnTCcj4rKBjqkAcs3AaTkzloMRnEYylQKen0nkdVznGEx%2F7WWztyaT20o7%2BSyDJi8CrpgsLVXYdGwAlqriCi7cgF%2B08Z9h00QEDA%2FAZCp%2B7yK%2FfOG%2FKFvrmH0SHYHkh12c%2BtJvJH67%2FCa1O8wI%2BMuE3qdo4IsLPnOtBgV%2B8a%2FQ07ZmbgOD33O9flU93dfiH6P9LM0v6dqNgK9rphCXV9Ds5%2F4IZoilm8g%2BmD6MZty&X-Amz-Signature=c4b766cdce6bf8514e1abbf6e5c76b521a68473265f21cf58cf17ca6496d98a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H4FJC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKPyaX1oX7oMBlGhzYn%2F6gtQdleJn%2BKx5qBIlK4xSFugIhAJ%2BYJCMkRvJSiEZPDS5XPG98OQg1Akk7PggmrQh8EZnCKv8DCHwQABoMNjM3NDIzMTgzODA1Igx5tKCOxMlRhEwairgq3AN50Q6xrc%2Fw0tXVXueyFlAROXXXqfdeY37qAyRKBPPJeADxBcyE9lPeMqeXnnr79FkDUApcD8jRFmVcAUvwwqOAsKwIbnutTCTsKpnIlQ9FGh3xYM%2F%2FPUZ1dDzqR2P5MBPDCIPSCwrtsvJhKaeMqizph4KVIxfk4gye%2FsT0RASiyVV15axShRd%2FM7Af9YNm1xQgGwZzzervoffQN%2FWlKHKn%2FazDC%2Fs4R5SHTrktOEH3y29cCVZ18ZObYkdt8OLzJ06oHNFSBBOT5TJ%2BI6H3nuxaAufMjc%2Byj2DXq4MqHK4NVrkIO4XGN9RAJ7GcmvTsuvi4E21%2B0uWJm7cBWJ2kea6tmslwub%2BxMXPtLTQuYi5p2xMcue2nEzlNTTYRRMVV0Ugk5CF0q0NKiP5GrhzDHYZ979EFh8NuuyaevMwlVXeOl894wGQh%2Bh4J%2B7xWhInfFBZWkuH%2FyptePuiQw9drW81eqToT33Ko8BLUgbVtF3GolQJDp0onAZcWbGd%2FScYYjFimlDJArAyMimeyc6%2B5py%2FLHwJRJ6xo31y0BNx9Fqsxo%2FP6H5kjCbrs%2F5CZvYhIFjI6A3uJqBcmxA4sYsbIQMH7D9lCLVWeH%2FgQEjotWeigx%2BMG5YMEwOvIaYNtnTCcj4rKBjqkAcs3AaTkzloMRnEYylQKen0nkdVznGEx%2F7WWztyaT20o7%2BSyDJi8CrpgsLVXYdGwAlqriCi7cgF%2B08Z9h00QEDA%2FAZCp%2B7yK%2FfOG%2FKFvrmH0SHYHkh12c%2BtJvJH67%2FCa1O8wI%2BMuE3qdo4IsLPnOtBgV%2B8a%2FQ07ZmbgOD33O9flU93dfiH6P9LM0v6dqNgK9rphCXV9Ds5%2F4IZoilm8g%2BmD6MZty&X-Amz-Signature=fc577d99d57c30a1bb7d15035918a8e0ca095e3f2703d0045e5f59912fd47e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

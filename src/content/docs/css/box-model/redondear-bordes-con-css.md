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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJDBMXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwz1Xm%2FaAHiuhRHq1qDUlRnYSeipKuul7flec4KhjXMAiEAzJdLXP57kyYojjQc8OkxF9PJNGDiJgFJ2i81RZKpYr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNBPiFZACFulbl1mrircAywtWNCklswcBzzdMsT8Q3U0EiDwUZs%2BU7pwHPutFeyNQKRc8IV5%2FWwX%2BW9EReGFlY4YYxH7enAAa8FgzcpO3baoiM2IVygBTIqB4tz8CW%2F7DH0qXLAFm8FaM4HBrpZnp6BaJ6pBj4kAUG%2BmDzjaZPKGDLH96xNaf5DEyabL7FdZPCTcFGJ9oOK2c2JTJZQHNvOo5EmjlpPIIqrWrpaNMOyqyryJsPXtZxSPeUnpnxGuVIFMVwA12xgOFXca1J5j3RZFTG3EKh4sd%2FVdLmokHK0U9lmIkAyocRCJhU3jEXylEX3ykjqMRMrfan0wXuiEG%2BYkvTz7n1lnTne6U95Nc9%2FOFw3ZgzAaccNbusMHiKsEc8FK%2FAgfPFmIisNz5BuvbivtE1L5J76yTDovm%2Fu327F9AwqKIn%2Bu7TegMQdYGLNa7F0xyg7Zks%2Bkp%2FkJSsepa%2B5BY9Cp5BNo3LjxaY1yFvlkx%2BqFclsroREAZMWEqHCHQkW%2FO8CSej8xoiCArTeeaT%2FNeSM4h%2FYRixCqgTcs1VCq868q5yMamMMTZTe6ppvD6wOEbTi7j%2FcvLXuAPw21YWEBlgfJ76A6XcvWNlQCEpzU%2FvSHovBPvQjZBIggLvfBfOk9GauT%2BLz9y5GZMOGOisoGOqUBESLZREJ4Uhv2AyEstOZOHLRdTxVcMTzpDq2MNV7KIWYqrziwpHk7dCbPKxr%2FstptZ4ihcA8yToklzFjU56oxInIfTVSS58b1SY0zi9P%2FT8NkIGm9yxcq9JIcogig8pXLMWRU9ljAVgcPtdWwDXfr%2F7yqq2qjFr0DEK9S65fL%2B%2FHi2Jts1cpUXGl6ZNWCiM2HxMb5Kmb8Fu7oq6AoSCFOz3rNu5FR&X-Amz-Signature=10c33d0857ea6c946f66a2a5c7cef8b1e38540df6ee381691d9752832726655b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJDBMXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwz1Xm%2FaAHiuhRHq1qDUlRnYSeipKuul7flec4KhjXMAiEAzJdLXP57kyYojjQc8OkxF9PJNGDiJgFJ2i81RZKpYr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNBPiFZACFulbl1mrircAywtWNCklswcBzzdMsT8Q3U0EiDwUZs%2BU7pwHPutFeyNQKRc8IV5%2FWwX%2BW9EReGFlY4YYxH7enAAa8FgzcpO3baoiM2IVygBTIqB4tz8CW%2F7DH0qXLAFm8FaM4HBrpZnp6BaJ6pBj4kAUG%2BmDzjaZPKGDLH96xNaf5DEyabL7FdZPCTcFGJ9oOK2c2JTJZQHNvOo5EmjlpPIIqrWrpaNMOyqyryJsPXtZxSPeUnpnxGuVIFMVwA12xgOFXca1J5j3RZFTG3EKh4sd%2FVdLmokHK0U9lmIkAyocRCJhU3jEXylEX3ykjqMRMrfan0wXuiEG%2BYkvTz7n1lnTne6U95Nc9%2FOFw3ZgzAaccNbusMHiKsEc8FK%2FAgfPFmIisNz5BuvbivtE1L5J76yTDovm%2Fu327F9AwqKIn%2Bu7TegMQdYGLNa7F0xyg7Zks%2Bkp%2FkJSsepa%2B5BY9Cp5BNo3LjxaY1yFvlkx%2BqFclsroREAZMWEqHCHQkW%2FO8CSej8xoiCArTeeaT%2FNeSM4h%2FYRixCqgTcs1VCq868q5yMamMMTZTe6ppvD6wOEbTi7j%2FcvLXuAPw21YWEBlgfJ76A6XcvWNlQCEpzU%2FvSHovBPvQjZBIggLvfBfOk9GauT%2BLz9y5GZMOGOisoGOqUBESLZREJ4Uhv2AyEstOZOHLRdTxVcMTzpDq2MNV7KIWYqrziwpHk7dCbPKxr%2FstptZ4ihcA8yToklzFjU56oxInIfTVSS58b1SY0zi9P%2FT8NkIGm9yxcq9JIcogig8pXLMWRU9ljAVgcPtdWwDXfr%2F7yqq2qjFr0DEK9S65fL%2B%2FHi2Jts1cpUXGl6ZNWCiM2HxMb5Kmb8Fu7oq6AoSCFOz3rNu5FR&X-Amz-Signature=28ee63411f0d1763a9f0ad2b6881d7c44e33e92f147dfe47b033ebf2c0cd7d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

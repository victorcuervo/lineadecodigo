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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVV5UWA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAHc5K4zcIfZSIxnn7U6x7mElE2ZCb4mdoS8QqT2KRIAiBXivMkidBoPh9i2z2YnC3UO6lvXSodRl%2B0g4Ae49t7niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChNWwSIK13h%2BDzxxKtwDQHa2G3bOlXKQpJ0TUWDotYiIpfa5x8IeXHZ7FxCSL7aDNlYEcIWi2pwFVAhaVQCoj7CxCtQiLsS9SSuDDS6O5vcSy15udRSeXicUe5LSeJJbOPQB8Za9edBbe%2FWN5EcGfJPaivtt4fh6kNKJbgERlYzkC2zyZcWEeT5ltRukscEeVy7%2BHhE7to0q2LK3g9f049sRepwAAbX%2FtE0A4lomVxIA1tw9QNTgpa9M7AwQbuTWPhQOubz%2FO6VhDJN7SkjVWfIE5%2BCKOQ4InmAsAkg1R426J%2FsUTejYP2qFUJLJevBHQKPK4YbvV4LICLr%2BLS%2BZiotJsxFiyT%2FFSqKDz%2F0FFKxdiXsXmFT%2BLvpEYnmlHf0xxSKXZiUuf76CHlCtpuJTWmxwe%2B%2BhbQZARdOZQQ7zpVXNxD9ZkjNt41NnErb3TJGJ785zXIokrU%2FRbN09Ueoe%2B9%2B7lt0p3lcueT3SbSQkNldOsJT9tqOPPWgzAUFZgkmsvxxV5G9xEyUeqIL30ajVDtBxTh3tL6SWCgxaEhy%2BOsiM48ZCNb4OhayBzF19lNM6AWkhkw%2FyO6NE%2F98B9wLFmli%2Bqq3BmYwD1mCkymXVF1L6K76Nfs2BMBbsRjQKZqGHZgiw%2BWjfBrKOiG4wt9HYyQY6pgHdkNxFszhw3xr8ytsxKlwmVBjVTiaOTOjDrbxFlbtx8Hs2m6FZ5aH3mhOmU1SN5X72oALJHn5DY97RWpWGyz0jApEgcAkugXL4pRHH340OBWf0KLo%2BOKkBzO6fVZawnDx%2F1K8BslgdrD7ExeRWmVSV%2FfbGyd7CaT3WKAQR8DauM0B9yKuQWbGyfL%2BHPQofF35CP9UF7fMVbblNTFKlnK3%2FnDvWqxV8&X-Amz-Signature=0113f28da5d93c2810f5b3bbe15cb6faf6287717aece9e588080558fc2466a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVV5UWA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAHc5K4zcIfZSIxnn7U6x7mElE2ZCb4mdoS8QqT2KRIAiBXivMkidBoPh9i2z2YnC3UO6lvXSodRl%2B0g4Ae49t7niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChNWwSIK13h%2BDzxxKtwDQHa2G3bOlXKQpJ0TUWDotYiIpfa5x8IeXHZ7FxCSL7aDNlYEcIWi2pwFVAhaVQCoj7CxCtQiLsS9SSuDDS6O5vcSy15udRSeXicUe5LSeJJbOPQB8Za9edBbe%2FWN5EcGfJPaivtt4fh6kNKJbgERlYzkC2zyZcWEeT5ltRukscEeVy7%2BHhE7to0q2LK3g9f049sRepwAAbX%2FtE0A4lomVxIA1tw9QNTgpa9M7AwQbuTWPhQOubz%2FO6VhDJN7SkjVWfIE5%2BCKOQ4InmAsAkg1R426J%2FsUTejYP2qFUJLJevBHQKPK4YbvV4LICLr%2BLS%2BZiotJsxFiyT%2FFSqKDz%2F0FFKxdiXsXmFT%2BLvpEYnmlHf0xxSKXZiUuf76CHlCtpuJTWmxwe%2B%2BhbQZARdOZQQ7zpVXNxD9ZkjNt41NnErb3TJGJ785zXIokrU%2FRbN09Ueoe%2B9%2B7lt0p3lcueT3SbSQkNldOsJT9tqOPPWgzAUFZgkmsvxxV5G9xEyUeqIL30ajVDtBxTh3tL6SWCgxaEhy%2BOsiM48ZCNb4OhayBzF19lNM6AWkhkw%2FyO6NE%2F98B9wLFmli%2Bqq3BmYwD1mCkymXVF1L6K76Nfs2BMBbsRjQKZqGHZgiw%2BWjfBrKOiG4wt9HYyQY6pgHdkNxFszhw3xr8ytsxKlwmVBjVTiaOTOjDrbxFlbtx8Hs2m6FZ5aH3mhOmU1SN5X72oALJHn5DY97RWpWGyz0jApEgcAkugXL4pRHH340OBWf0KLo%2BOKkBzO6fVZawnDx%2F1K8BslgdrD7ExeRWmVSV%2FfbGyd7CaT3WKAQR8DauM0B9yKuQWbGyfL%2BHPQofF35CP9UF7fMVbblNTFKlnK3%2FnDvWqxV8&X-Amz-Signature=66e1a2985f931e8318fe7ed38f36f4908ab93d88d868da0d13ffcb5ea0d6cdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

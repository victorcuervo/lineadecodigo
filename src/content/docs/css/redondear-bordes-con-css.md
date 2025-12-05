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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUS3OKEZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKNmbaB7A6T2u9E5CcuOHMPRhNTjQW2lYqUJW%2B9Eme6AiEA%2FsGWrkGHmJSMzOSIeRLE2jxHhFgiw4j4F%2BtzamgqyE4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHDZZS37fUYj1QhyQyrcAylg6KPrCGM34P6zZSViVCqxCP2L6vZHRxHMk6%2BwNlEBt07UOLm7zGqaYOHabTutknrJAsSLYZHpWw9IZbrABnq%2Bi3fr8ZwSe7lK4jDwmASHOmiWKYcxjzenm99UBr5%2B%2FMhplCoZ9j7nY%2F5ZpBT6LyIcVXUKQSXU1EfZRHz0HxQx39RMwyozg1h1NeSAesKcwL7v1cNdcSa8xdtUx3Db9KjFJ8C%2FMZKPGUNk8ljzJ7D55Zp4WENWF6Mq0xqf0yNjjo3hD44I6yWVZkdC1jZZzEuJWYoFAS13R9x5Ym092JncaWTrhD6YG38FRyFBeq9jO0NUqPcrpQKmAdBhd63kC2viz%2B6U2mmEyZ1jnZnG2L7LKLDGXG%2FkNl9Sa8YGTQIBi6PMVATkDGmLsJFztaA4zBdit2e1v0yOmxxyM553MJe2K8FSPvbt%2BZKI%2FwgaKPs1wjYJihZY4RynQG3sx0%2BOH47eVISZj7Vr9myOCN9XmlOyI3I0EEfuDXbRrX49Cs3cDfeAxURBNwIezZX6QQLvsH1y%2BZ5dlUyq09PMSfDNG%2FzxzSLF5IqSG2fM%2FETJ%2BFNIaTuKnJSSA3VQ2ZBb1qowccobkSH%2BKlwzeI2LIC2EPe1FiEpndm7UdO%2F4XifAMLzGzckGOqUByBjFOSBPX%2BBMCaronRIvg0V2EWAXrvHlaSHKPqoO%2FroxNfU4VeZSPRgUS5B5UlwOlrUOoF67J7of%2BE5q0J%2Bws9Qd%2Fcwv4iJbhKUQ6G297xFnrbWypPY7tF6PInn2zv0IVEFB3ihyvusbcsvTgVW6e%2F9YoJ3aCeelW2%2Bsx6Rh21Z3ZV7Sdr%2FXh%2BZOvooqfAePm6fq6jKPRmlVvxRhtyHdQ4J5Gw1X&X-Amz-Signature=8dccf7832c62fd5cf17ff02835d5a7e6882f885bf260cecf0e79c79c42eff5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUS3OKEZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKNmbaB7A6T2u9E5CcuOHMPRhNTjQW2lYqUJW%2B9Eme6AiEA%2FsGWrkGHmJSMzOSIeRLE2jxHhFgiw4j4F%2BtzamgqyE4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHDZZS37fUYj1QhyQyrcAylg6KPrCGM34P6zZSViVCqxCP2L6vZHRxHMk6%2BwNlEBt07UOLm7zGqaYOHabTutknrJAsSLYZHpWw9IZbrABnq%2Bi3fr8ZwSe7lK4jDwmASHOmiWKYcxjzenm99UBr5%2B%2FMhplCoZ9j7nY%2F5ZpBT6LyIcVXUKQSXU1EfZRHz0HxQx39RMwyozg1h1NeSAesKcwL7v1cNdcSa8xdtUx3Db9KjFJ8C%2FMZKPGUNk8ljzJ7D55Zp4WENWF6Mq0xqf0yNjjo3hD44I6yWVZkdC1jZZzEuJWYoFAS13R9x5Ym092JncaWTrhD6YG38FRyFBeq9jO0NUqPcrpQKmAdBhd63kC2viz%2B6U2mmEyZ1jnZnG2L7LKLDGXG%2FkNl9Sa8YGTQIBi6PMVATkDGmLsJFztaA4zBdit2e1v0yOmxxyM553MJe2K8FSPvbt%2BZKI%2FwgaKPs1wjYJihZY4RynQG3sx0%2BOH47eVISZj7Vr9myOCN9XmlOyI3I0EEfuDXbRrX49Cs3cDfeAxURBNwIezZX6QQLvsH1y%2BZ5dlUyq09PMSfDNG%2FzxzSLF5IqSG2fM%2FETJ%2BFNIaTuKnJSSA3VQ2ZBb1qowccobkSH%2BKlwzeI2LIC2EPe1FiEpndm7UdO%2F4XifAMLzGzckGOqUByBjFOSBPX%2BBMCaronRIvg0V2EWAXrvHlaSHKPqoO%2FroxNfU4VeZSPRgUS5B5UlwOlrUOoF67J7of%2BE5q0J%2Bws9Qd%2Fcwv4iJbhKUQ6G297xFnrbWypPY7tF6PInn2zv0IVEFB3ihyvusbcsvTgVW6e%2F9YoJ3aCeelW2%2Bsx6Rh21Z3ZV7Sdr%2FXh%2BZOvooqfAePm6fq6jKPRmlVvxRhtyHdQ4J5Gw1X&X-Amz-Signature=a5eb2a88c6704b789f4269d2e64c7a40d21e1cb0cb85e897334f97d80162485b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GXGDWT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKG9OhvozWe0Zzr2SFcXoCOrTSmydRX8f%2Fw0JyGNl4AIhAKqp37%2BHXMoaysRXU3c6vvFc%2FjsCDgAkO3gYJiwwDGoeKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUM5MR0jME9PVyLJAq3AOG%2F2zoXk17O8QMtHuY3yJ7cczUuJFfFaHNbJbTULxcPTDvaMlJHucbhI%2BKQAXWrJTqrMB1Dzhv54fi21IyglNINkgbQPWO8S5VfMX6v0OT3nFn8M025RNStPjTfN1%2BkaV27tdwtETO%2F6v9boJqiRjsVYliQZu36QYk1ZQcAQxBU9xGC2Tu9g8rhQZUSvRblMnT6pr2OJOnSaDhwj6I64r6KC3goNR6uNCs8kfs0NvI8zh2BNGFKF5B2rcQT3wUPBJJ%2BoCMfKbXF3x%2FUGUWwa30kBGiPjMQD9sOqwW7pBUzRro5k1kuHQ1LrHd4pkwUXvLmaJIrGbhORkik21ZzDpjVfbY8piwbUIeSQLB0yK1STanAtXzABfNMlshpcCr3jZd%2FBj0ZVIBvr7ECj2BvaKrK%2BMO%2BMkKhRl9IaXUOEXF6lHAb4V6gncXhbFBp%2BWM8AadBKGfIJC5XB5n3vSC6ijugXNt6ocVYzieONnlsdtaEn3O8xSF25YWJp0VrNp71Mq186Zt6wSIrSsY5rne%2FUv%2B%2Bp%2BArKawDgOeGZnnjGQvqUL3LZ4sKymNs6qHmUD2BZ6cXwV7zkk20z9juEWor6OuqcB1LjyzJD%2B6QJl%2FghsXNYvPe7COBf%2F8nrai6YzC8pd%2FJBjqkAQMZvxVK%2F73mI11z0%2Fuv3NxJGsmHRpCsTiQ9RzDLc4U%2F8%2B0%2FsjstmiEYDwDo5ysGLkzttYn4VHle2IY0r3Gf92wWJSPjfuPWkty7hVX7xo%2F9v8GYncVdmXygjkJGmp5KoWqcQ83EkebNql0bEITtqRt148YBb9no5nkloZqVN9HqAbcHh1foFuZHYTnFMU5yAiusuDsa4drM%2BDPKCqjIMxKDL9j0&X-Amz-Signature=c70ca758a1394fec0ee1ad431e91ba2547561165398bb929f4ad28408a0b207d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GXGDWT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKG9OhvozWe0Zzr2SFcXoCOrTSmydRX8f%2Fw0JyGNl4AIhAKqp37%2BHXMoaysRXU3c6vvFc%2FjsCDgAkO3gYJiwwDGoeKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUM5MR0jME9PVyLJAq3AOG%2F2zoXk17O8QMtHuY3yJ7cczUuJFfFaHNbJbTULxcPTDvaMlJHucbhI%2BKQAXWrJTqrMB1Dzhv54fi21IyglNINkgbQPWO8S5VfMX6v0OT3nFn8M025RNStPjTfN1%2BkaV27tdwtETO%2F6v9boJqiRjsVYliQZu36QYk1ZQcAQxBU9xGC2Tu9g8rhQZUSvRblMnT6pr2OJOnSaDhwj6I64r6KC3goNR6uNCs8kfs0NvI8zh2BNGFKF5B2rcQT3wUPBJJ%2BoCMfKbXF3x%2FUGUWwa30kBGiPjMQD9sOqwW7pBUzRro5k1kuHQ1LrHd4pkwUXvLmaJIrGbhORkik21ZzDpjVfbY8piwbUIeSQLB0yK1STanAtXzABfNMlshpcCr3jZd%2FBj0ZVIBvr7ECj2BvaKrK%2BMO%2BMkKhRl9IaXUOEXF6lHAb4V6gncXhbFBp%2BWM8AadBKGfIJC5XB5n3vSC6ijugXNt6ocVYzieONnlsdtaEn3O8xSF25YWJp0VrNp71Mq186Zt6wSIrSsY5rne%2FUv%2B%2Bp%2BArKawDgOeGZnnjGQvqUL3LZ4sKymNs6qHmUD2BZ6cXwV7zkk20z9juEWor6OuqcB1LjyzJD%2B6QJl%2FghsXNYvPe7COBf%2F8nrai6YzC8pd%2FJBjqkAQMZvxVK%2F73mI11z0%2Fuv3NxJGsmHRpCsTiQ9RzDLc4U%2F8%2B0%2FsjstmiEYDwDo5ysGLkzttYn4VHle2IY0r3Gf92wWJSPjfuPWkty7hVX7xo%2F9v8GYncVdmXygjkJGmp5KoWqcQ83EkebNql0bEITtqRt148YBb9no5nkloZqVN9HqAbcHh1foFuZHYTnFMU5yAiusuDsa4drM%2BDPKCqjIMxKDL9j0&X-Amz-Signature=9aa4459d0c6e8313e09d0599f2ddf08da844d2421c7eeeca042aa8fee66f58e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

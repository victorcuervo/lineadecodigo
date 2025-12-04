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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQ56QLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFEMWAKnEVyX%2FfIQiqB0GeVEhnqs8bdNC3HeD8vlYYn8AiAJA1sfh%2BSFauEYK%2Fmwn1EvR9vNvsKF7TIP96xfqp9Pyir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMj4qc9lpTMK0Lz3CsKtwDYdSn5QKyGktKMHTQ7oUjPuV%2FXBYjA39gWOJ0CH59AM1dWptQNZgyCq36CSnpLOfngKsIgNFXeQu0wiHra3eXpCkqqpahPGCihSxg%2FzA0f%2BZz4%2Be%2F7JEfIT3wKD9UqtSaOKTf7HLeib9BkH3Mk9vPQtPxw3iFZIhIMOz2sN7eaGQPA2RCVTTOUmMvKv5olOGc9bHRjc6C0X64toao9U17%2F1tMHplJH4eT94Xhi5bbNdbDJFUPUA8RqDpsMapBtI4pZiH1Ve9ztkynJyXwK44XTagQ3DpsKLHQF9xe4uoG1Mdlr8uW7N7%2FlEZWtZjBPdv47pq2UkfbuMm4%2BWMTHQ2hKQPkfzjVa3%2BdkdfxYcaU0R4KvvIn7e0MPlvQfgtQnrhW29TKDKs%2FlfeBwTfpnhweeNWN9n23Qf2CDUNuwAfJyEabAebbWfRIqRjuac31c7ixtuLKVRvqQL%2BatrPP5oGFbNZRW7kKWA6lZt3ugzzxdSr3I5uzrcJvkfuE4W9b62iV0Y4%2B%2FjG2qjQBaniy6jdxv8rp5p9yY32ldVBp8IKeQVeRt0LOXlohHcvy%2BqvO0LsG%2FiZGJWB6AUdVlg2HiRNpXeHL3ZcTQZ%2FT7mP0KFHtPQIlWODvxRPBePTZNoUw2ObFyQY6pgF0XGXzSAczJYBLFo5yKlRZU3PsUYllImHmDwtSVNUohyyi%2F6phwdEwRQ27gr05zK5DE2MxnffNuDN4NTIn5rhiDJ63SjzMw8Gbu27gzO7IqmUsK1mJeen0xvTYVro1sTDbXhzXlSYdDcD%2BWLfAeubK%2BwxDHPnujTLdPUkDpRhFwCOO%2Bo%2FZBVTnsb41%2BXb91lL5S3CsG3i7Vkr8QjgdbErFZBIM5jYg&X-Amz-Signature=7458e662aebe30eb8af1ae669ceb65c1fbbce80809d27fb9ec82f8a8ef3a7e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQ56QLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFEMWAKnEVyX%2FfIQiqB0GeVEhnqs8bdNC3HeD8vlYYn8AiAJA1sfh%2BSFauEYK%2Fmwn1EvR9vNvsKF7TIP96xfqp9Pyir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMj4qc9lpTMK0Lz3CsKtwDYdSn5QKyGktKMHTQ7oUjPuV%2FXBYjA39gWOJ0CH59AM1dWptQNZgyCq36CSnpLOfngKsIgNFXeQu0wiHra3eXpCkqqpahPGCihSxg%2FzA0f%2BZz4%2Be%2F7JEfIT3wKD9UqtSaOKTf7HLeib9BkH3Mk9vPQtPxw3iFZIhIMOz2sN7eaGQPA2RCVTTOUmMvKv5olOGc9bHRjc6C0X64toao9U17%2F1tMHplJH4eT94Xhi5bbNdbDJFUPUA8RqDpsMapBtI4pZiH1Ve9ztkynJyXwK44XTagQ3DpsKLHQF9xe4uoG1Mdlr8uW7N7%2FlEZWtZjBPdv47pq2UkfbuMm4%2BWMTHQ2hKQPkfzjVa3%2BdkdfxYcaU0R4KvvIn7e0MPlvQfgtQnrhW29TKDKs%2FlfeBwTfpnhweeNWN9n23Qf2CDUNuwAfJyEabAebbWfRIqRjuac31c7ixtuLKVRvqQL%2BatrPP5oGFbNZRW7kKWA6lZt3ugzzxdSr3I5uzrcJvkfuE4W9b62iV0Y4%2B%2FjG2qjQBaniy6jdxv8rp5p9yY32ldVBp8IKeQVeRt0LOXlohHcvy%2BqvO0LsG%2FiZGJWB6AUdVlg2HiRNpXeHL3ZcTQZ%2FT7mP0KFHtPQIlWODvxRPBePTZNoUw2ObFyQY6pgF0XGXzSAczJYBLFo5yKlRZU3PsUYllImHmDwtSVNUohyyi%2F6phwdEwRQ27gr05zK5DE2MxnffNuDN4NTIn5rhiDJ63SjzMw8Gbu27gzO7IqmUsK1mJeen0xvTYVro1sTDbXhzXlSYdDcD%2BWLfAeubK%2BwxDHPnujTLdPUkDpRhFwCOO%2Bo%2FZBVTnsb41%2BXb91lL5S3CsG3i7Vkr8QjgdbErFZBIM5jYg&X-Amz-Signature=c5ba206b43a00dbeb69b9562317c0d4837337b5b41526a659245095fd6b07e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

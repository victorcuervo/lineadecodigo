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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZP6RUP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsSNd3KLblBVywlkqnMRvWfq6T9ntWYrt2%2FMdGRtBdwAiBUGob3XFSKtqpCj1AuHVMJ9CTjMIkBHh5U4raX2NH7LCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyHu4dRfN65l5EEVQKtwDAYvP8lN5AVTdtGgDDp4GNVhzSS21NuKp1BJT5tJnRveFzQt7UnbicTbklxdLzpNaja10PiT97d5AyFVItrjN9IW1I2D9j%2BXF%2FAB3%2F28gHHsI6YA3kv%2B6gVLa%2FfMrlf1xbmr5cDbvM0zh4%2Bo3EqgYllj%2FzTsY6SjH19aYtV%2BisMuwvz95qmDUkV5PDqm19OYxM6XSxfy2u8vBcl8%2F9yEO%2F%2BaDczY%2F2RyPZMB5lMs3EyP%2Bnb7mROCgTCMbw%2FA8CiisbNS8uGCN2ECTjo7tM8F6YJxt0b2czlAVDj%2Bx03jyz5hj34H6964pnXZySdbuslxfDAlSE1%2Fapy0VPzl%2BoP%2Fp4mngi%2BNZ7jKBT3pUSPiFpRYfyYMU9yXVW6FjNrPZf6OfW8wAbIvDiWktE4As3JMYCOrVf4NTToTiF7E0a168lPcH4Xn8pl77hLRJ6%2FFhb4ydViXMfqTAoodnXVPvjNOgHgPURITjZk9nmHu88jozdFblsxdiyH%2B7Pfw6HSTjsIAeuDswZ9y3p%2Bl4badjXJcQVhzgEoSg9lIoVBVVTtNdU%2B%2F9uDFGjMRY7BsZDH2rUUeFWyeN84Y0lXGJuHsL7v6lUjkhvTfazmlWWEbLbHhPsEZSUpTUePbJVNY9Zlwwm4fcyQY6pgGLTPqvErP03tGXZNjA8edXU0KjadStgfh60tttkgX9i4b7%2Bc0pWnogWlYAKEDhMqpLSzA2R%2Fc7KLR%2FJOosewkSdd%2BHBfTXw0hPnA3%2FR6h6btrq1Z9y3Yc6fcfZuYxFpMDQyCDLjG2faKNnjjQf%2Bi69qdNWOU7SYZofAOdPKhDA%2FQYaZXhQ60bXhXO2384dxB5llHDp4W0re4rBd9lUy0vshqHV0Rbo&X-Amz-Signature=4d5194cb536c38af270c83e303fb36443ad6a9037705ca51d4c9fd1a62b50935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZP6RUP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsSNd3KLblBVywlkqnMRvWfq6T9ntWYrt2%2FMdGRtBdwAiBUGob3XFSKtqpCj1AuHVMJ9CTjMIkBHh5U4raX2NH7LCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyHu4dRfN65l5EEVQKtwDAYvP8lN5AVTdtGgDDp4GNVhzSS21NuKp1BJT5tJnRveFzQt7UnbicTbklxdLzpNaja10PiT97d5AyFVItrjN9IW1I2D9j%2BXF%2FAB3%2F28gHHsI6YA3kv%2B6gVLa%2FfMrlf1xbmr5cDbvM0zh4%2Bo3EqgYllj%2FzTsY6SjH19aYtV%2BisMuwvz95qmDUkV5PDqm19OYxM6XSxfy2u8vBcl8%2F9yEO%2F%2BaDczY%2F2RyPZMB5lMs3EyP%2Bnb7mROCgTCMbw%2FA8CiisbNS8uGCN2ECTjo7tM8F6YJxt0b2czlAVDj%2Bx03jyz5hj34H6964pnXZySdbuslxfDAlSE1%2Fapy0VPzl%2BoP%2Fp4mngi%2BNZ7jKBT3pUSPiFpRYfyYMU9yXVW6FjNrPZf6OfW8wAbIvDiWktE4As3JMYCOrVf4NTToTiF7E0a168lPcH4Xn8pl77hLRJ6%2FFhb4ydViXMfqTAoodnXVPvjNOgHgPURITjZk9nmHu88jozdFblsxdiyH%2B7Pfw6HSTjsIAeuDswZ9y3p%2Bl4badjXJcQVhzgEoSg9lIoVBVVTtNdU%2B%2F9uDFGjMRY7BsZDH2rUUeFWyeN84Y0lXGJuHsL7v6lUjkhvTfazmlWWEbLbHhPsEZSUpTUePbJVNY9Zlwwm4fcyQY6pgGLTPqvErP03tGXZNjA8edXU0KjadStgfh60tttkgX9i4b7%2Bc0pWnogWlYAKEDhMqpLSzA2R%2Fc7KLR%2FJOosewkSdd%2BHBfTXw0hPnA3%2FR6h6btrq1Z9y3Yc6fcfZuYxFpMDQyCDLjG2faKNnjjQf%2Bi69qdNWOU7SYZofAOdPKhDA%2FQYaZXhQ60bXhXO2384dxB5llHDp4W0re4rBd9lUy0vshqHV0Rbo&X-Amz-Signature=77de9968ecf3b82f920ac36d5e134d235ac7235259abeac107e39e98695be61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

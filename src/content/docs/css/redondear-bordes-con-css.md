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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6C2JEBF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBEsV9iGAoia%2FWfce9VxVhX7lF48ADBjHUwdxV3nB%2FlAiEA3jj3SZeyhQrp6dfX%2BumLSUffE43CvkKPjUUMGqpazKsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCi7sxryKGe%2BJK30WircA8PGwRX%2Bg1XuxbJ3zbHrr%2FroTUm8G%2FYTG9DO7ebf%2FNHK8GAGloqyRRDGUL7lAWrwYuaLNdrm3u%2F3XsK%2Bd2DbEPaFknSMdV5T4AWp4UP%2FIff2Z3BwnsguSSePkXWE5PxXLLoSWPTD5yhgw5C5uHJwu01iHFaSF7HqkqVqKuKUd9BhybmLqZMm8NEMF%2BIBJtWIfk3mbpoUQZluJOMT34gX4j71QZZQYELJ7zpJp%2FrpF6G%2B9GJfOUMmCKOV%2FlNkZqmR46ydVfnb3uI8Rj89PgTc8TgO8shsHXQsMlgz9aPVBeuZcU9%2BQhDsm%2BHc0DAnpts4PjDP13Mv3jPhjtxnPHs04XkQwc1Z0Ly5aJ0ThUDWyCp3MzpCatHodzmFfIi1R8llFp0LfT0F4j61WMCeES%2F6lWQVgAFpebnrIVaLHuCCDmwVf38ZYZbYZrlsffEMrXJgp8ABdk2ZIo6z%2BvWBYl69fbOEO%2Fx76XmdgKElYyYnQSTKXSeKu6UZaopeYph6NcYdcHcmKI8m0FwKWVms674fNad2jbFRyQ8QL5DnCyRi8VR3L9kRq6irr46OiQ%2FTVLXIczsrVD5ifkvQNvG6tYAojsLeSt0f%2FhjCapFpWzR8ieHbOfgmAMbwqse0NZM3MLyMzckGOqUBPyYEOySFn7GGH27E9Grkr1hSX3jTuinVNGQzZBZLV0emCpB%2Bq8DBIQhfANmHWtHou%2BpszAbzwPGpIeFnEnZUIXFbrzhC4hheiEOpnVtZfamo51gfsS4qlpKk3uDgTVhGdKVMSRtp0eKpojhQdqMReJiwXtfu%2BsNk8pQfq03xvaBUBhHuJBWKFfTOMZ88%2B7dcYJfk5Rh1V%2BUTNC%2FNY2Mjki95OwfE&X-Amz-Signature=95dd3b748797beb1c5de73ab3e4d824b8071c366b1aef59904892f7e24791023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6C2JEBF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBEsV9iGAoia%2FWfce9VxVhX7lF48ADBjHUwdxV3nB%2FlAiEA3jj3SZeyhQrp6dfX%2BumLSUffE43CvkKPjUUMGqpazKsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCi7sxryKGe%2BJK30WircA8PGwRX%2Bg1XuxbJ3zbHrr%2FroTUm8G%2FYTG9DO7ebf%2FNHK8GAGloqyRRDGUL7lAWrwYuaLNdrm3u%2F3XsK%2Bd2DbEPaFknSMdV5T4AWp4UP%2FIff2Z3BwnsguSSePkXWE5PxXLLoSWPTD5yhgw5C5uHJwu01iHFaSF7HqkqVqKuKUd9BhybmLqZMm8NEMF%2BIBJtWIfk3mbpoUQZluJOMT34gX4j71QZZQYELJ7zpJp%2FrpF6G%2B9GJfOUMmCKOV%2FlNkZqmR46ydVfnb3uI8Rj89PgTc8TgO8shsHXQsMlgz9aPVBeuZcU9%2BQhDsm%2BHc0DAnpts4PjDP13Mv3jPhjtxnPHs04XkQwc1Z0Ly5aJ0ThUDWyCp3MzpCatHodzmFfIi1R8llFp0LfT0F4j61WMCeES%2F6lWQVgAFpebnrIVaLHuCCDmwVf38ZYZbYZrlsffEMrXJgp8ABdk2ZIo6z%2BvWBYl69fbOEO%2Fx76XmdgKElYyYnQSTKXSeKu6UZaopeYph6NcYdcHcmKI8m0FwKWVms674fNad2jbFRyQ8QL5DnCyRi8VR3L9kRq6irr46OiQ%2FTVLXIczsrVD5ifkvQNvG6tYAojsLeSt0f%2FhjCapFpWzR8ieHbOfgmAMbwqse0NZM3MLyMzckGOqUBPyYEOySFn7GGH27E9Grkr1hSX3jTuinVNGQzZBZLV0emCpB%2Bq8DBIQhfANmHWtHou%2BpszAbzwPGpIeFnEnZUIXFbrzhC4hheiEOpnVtZfamo51gfsS4qlpKk3uDgTVhGdKVMSRtp0eKpojhQdqMReJiwXtfu%2BsNk8pQfq03xvaBUBhHuJBWKFfTOMZ88%2B7dcYJfk5Rh1V%2BUTNC%2FNY2Mjki95OwfE&X-Amz-Signature=b347bed9b3183861e918b7e1cf3ac4ef2192bcb3582f69f4a703e5271f59905d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

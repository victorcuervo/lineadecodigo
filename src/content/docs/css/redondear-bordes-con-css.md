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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG45XB7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLxjrkRr8PY5C2Ix1M%2FmVu%2Fbz5tGCVMKerMc3mqR0ywIhAOTQBqrIebmyoNHrMSpIuD%2FKwaxFdafxHGiLHtMSyVsgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h%2FTHsLUlaCSukP8q3AOOCGQno1MxUHgSkzUR%2BEuET5WemKHoaJVkVHvoLeIb5KhSi0op4CVQ2gNIXJJ3V9DGO7xvOoPCQSXMriZ4UqOki790yhDdIEkLVsByydYHZJVC2bel%2FYCJylheVL7iqD3hliPU5CgeNKJWyNPMEAJeBUe3Ing%2BIxDz2EXdVmSlHAD3BPZqjwDAFZPO2gxQ%2F%2FMqmKzHmcKv9NlL0ACAAk0yX9Nn0Mde4LBIpMc7QDr82SMgjMqFhX18kPbWl7d28N1%2Bkeumu2Ji%2BQuKPNcl%2FjmuHUMIK6KizPetVd3g4DMx7xk43rvtkwr7KifGYMXjadGcGUI7F5Ia8CTOVsKqnPNZssmxRGpUv6F93e1V5c2WSibqAWIVpPbFRwhZCW5kapRcgYDwVEg%2BCOsg9H6nGYUGeqyjvqeCl2HSgu%2B1pD%2BOyPeLrV7fVl5VLQ4ge2iOEsdJaSfp8Q3cFhnLHiAEqbwHHjcx5kAiKww1mObdsUpkAoZiGRdfQ1WWZ74hJ2tIAzjHQbWsu0d%2BTARpqSD3TJ0T%2BVcPoC4pqXuf60YJf0iFxcodjFu0D2BEP%2B%2BXI3ht6YCaGQAizz9FHM4ubW6o8AocqcJPoXEk%2BkutxOd%2BvCGJzGBYeATs4jDyd54bCDCO79jJBjqkAdrFzPtFW%2B83RBygiZGxnDBKp03SyFn16Nv%2BYOegbXkz%2FJ%2FJuU9Uz5GigCAiw2eKaAAeDRfBoBkLTwAzg5Z5DYPA2VUJKDJGWvpVhTEb%2BDjjFfyT2PKcpII2243hvekfv%2Fkf9OPf8OmvGcgxkFpRI38BeTG6mx58uX0ipjTXzRWF%2FxdL%2FeO0Gv9LIhpsI0ZclTW%2BMeZiUeQABWnt3XDGT0CbXOYm&X-Amz-Signature=fd806ed787b14500d72ad353aa19ba278cb1f3fc01247dfe324ab61a154a0b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG45XB7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLxjrkRr8PY5C2Ix1M%2FmVu%2Fbz5tGCVMKerMc3mqR0ywIhAOTQBqrIebmyoNHrMSpIuD%2FKwaxFdafxHGiLHtMSyVsgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2h%2FTHsLUlaCSukP8q3AOOCGQno1MxUHgSkzUR%2BEuET5WemKHoaJVkVHvoLeIb5KhSi0op4CVQ2gNIXJJ3V9DGO7xvOoPCQSXMriZ4UqOki790yhDdIEkLVsByydYHZJVC2bel%2FYCJylheVL7iqD3hliPU5CgeNKJWyNPMEAJeBUe3Ing%2BIxDz2EXdVmSlHAD3BPZqjwDAFZPO2gxQ%2F%2FMqmKzHmcKv9NlL0ACAAk0yX9Nn0Mde4LBIpMc7QDr82SMgjMqFhX18kPbWl7d28N1%2Bkeumu2Ji%2BQuKPNcl%2FjmuHUMIK6KizPetVd3g4DMx7xk43rvtkwr7KifGYMXjadGcGUI7F5Ia8CTOVsKqnPNZssmxRGpUv6F93e1V5c2WSibqAWIVpPbFRwhZCW5kapRcgYDwVEg%2BCOsg9H6nGYUGeqyjvqeCl2HSgu%2B1pD%2BOyPeLrV7fVl5VLQ4ge2iOEsdJaSfp8Q3cFhnLHiAEqbwHHjcx5kAiKww1mObdsUpkAoZiGRdfQ1WWZ74hJ2tIAzjHQbWsu0d%2BTARpqSD3TJ0T%2BVcPoC4pqXuf60YJf0iFxcodjFu0D2BEP%2B%2BXI3ht6YCaGQAizz9FHM4ubW6o8AocqcJPoXEk%2BkutxOd%2BvCGJzGBYeATs4jDyd54bCDCO79jJBjqkAdrFzPtFW%2B83RBygiZGxnDBKp03SyFn16Nv%2BYOegbXkz%2FJ%2FJuU9Uz5GigCAiw2eKaAAeDRfBoBkLTwAzg5Z5DYPA2VUJKDJGWvpVhTEb%2BDjjFfyT2PKcpII2243hvekfv%2Fkf9OPf8OmvGcgxkFpRI38BeTG6mx58uX0ipjTXzRWF%2FxdL%2FeO0Gv9LIhpsI0ZclTW%2BMeZiUeQABWnt3XDGT0CbXOYm&X-Amz-Signature=0c843bed1bb1e62d79344934ff5547ce302490c6cca2988df880d6ab914a3f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

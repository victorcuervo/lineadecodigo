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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URFE3Z5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUD4wywm26bp82n326HginVFRy3q6c2lg2u040RH4ZAAiEAovKeAaCJPp0JpwW%2Fj6ULUyOYpZL67OuiwoWS1KV3RaUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyKzICk9rLWwNP8YircA%2BxM8pDgE9pMrNB4UwcWdSFjkY3j%2Bx9Ved0VHK8%2FF8j2jXQ1tU0zU235bv7%2BI8Y9lj9T51dvOkAm0kn8DYqoYQrfYzQwofb8fJXCQREFhvkJoW0%2BSQ%2B1pkXDx1Ll1igtEr64T%2FoJr0VF2GAlpDmjeomiGOfvjE%2BMu%2BKV4jbB9WrdeTVItkF1yCyLRvDi2OYQadhjLCU6%2Fgjbdba%2B1SA0CPyJDjkwfWAF%2Ffu%2FXVAoYlN7gXDXmaxHJlKyHiBpG5jB%2FVihcsC0zD%2BcbjCGyi3JZ%2BRBk9JZLIAs%2FOs9FdSYzmGu9bhuvaMnqL8hI4QCc3zg1AHIxYwkwessXnUAtHa%2FG%2BuysIHQ9MmEbuoME%2FZjWBHH51bcJo46IajNUPjuptm3kAHfw3NcJiNk32wGzs0aLUTwxuaoNn9F%2FFbhybHVCvNU1NI12xwxGqdq7hyyCMcHpxDqVioC7g%2BVN5TIHWrTyi9U1MgphcVmsMKxd16uN65%2Fm7C4TB7vVcJjH0rBemygFuAjY8JQHM0Ch9CdRR3cekUJwvPvaV7tz6vgLBqaPj6H2nIZY8knUYfZQd%2BCug9Gn6XpfapCl2T8dPi2r3RbaHoh2Q%2BY02rpBPxDLkNfJvg%2BX5zfUm2%2FlcctdkSkMNLH18kGOqUBjoCrroYMRKY56E9684I3SDacU9AO5y%2FI1k1%2Bxw85gZVMhM%2FlaXSBkBOpOJFxdPYZHXas%2BxtMBoysI%2BnTJU%2FjVKWXLLcn3E0p3mtPUfx%2B6Hh4oELtXd%2Fg%2BApaQp8uRE1d0veoVM4RgoLkLdGIwHG6LL5Myy727Qy5glSYBD5sM%2BZwdzZv6YsLEAXxZdJPeuwzwLbyIH%2FfqYmrdXt1yjWvx4qmQarT&X-Amz-Signature=031970a7b9aa4eb462ccd3af84925695ec54391aa1ce888966f9ea353f38ccd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URFE3Z5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUD4wywm26bp82n326HginVFRy3q6c2lg2u040RH4ZAAiEAovKeAaCJPp0JpwW%2Fj6ULUyOYpZL67OuiwoWS1KV3RaUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyKzICk9rLWwNP8YircA%2BxM8pDgE9pMrNB4UwcWdSFjkY3j%2Bx9Ved0VHK8%2FF8j2jXQ1tU0zU235bv7%2BI8Y9lj9T51dvOkAm0kn8DYqoYQrfYzQwofb8fJXCQREFhvkJoW0%2BSQ%2B1pkXDx1Ll1igtEr64T%2FoJr0VF2GAlpDmjeomiGOfvjE%2BMu%2BKV4jbB9WrdeTVItkF1yCyLRvDi2OYQadhjLCU6%2Fgjbdba%2B1SA0CPyJDjkwfWAF%2Ffu%2FXVAoYlN7gXDXmaxHJlKyHiBpG5jB%2FVihcsC0zD%2BcbjCGyi3JZ%2BRBk9JZLIAs%2FOs9FdSYzmGu9bhuvaMnqL8hI4QCc3zg1AHIxYwkwessXnUAtHa%2FG%2BuysIHQ9MmEbuoME%2FZjWBHH51bcJo46IajNUPjuptm3kAHfw3NcJiNk32wGzs0aLUTwxuaoNn9F%2FFbhybHVCvNU1NI12xwxGqdq7hyyCMcHpxDqVioC7g%2BVN5TIHWrTyi9U1MgphcVmsMKxd16uN65%2Fm7C4TB7vVcJjH0rBemygFuAjY8JQHM0Ch9CdRR3cekUJwvPvaV7tz6vgLBqaPj6H2nIZY8knUYfZQd%2BCug9Gn6XpfapCl2T8dPi2r3RbaHoh2Q%2BY02rpBPxDLkNfJvg%2BX5zfUm2%2FlcctdkSkMNLH18kGOqUBjoCrroYMRKY56E9684I3SDacU9AO5y%2FI1k1%2Bxw85gZVMhM%2FlaXSBkBOpOJFxdPYZHXas%2BxtMBoysI%2BnTJU%2FjVKWXLLcn3E0p3mtPUfx%2B6Hh4oELtXd%2Fg%2BApaQp8uRE1d0veoVM4RgoLkLdGIwHG6LL5Myy727Qy5glSYBD5sM%2BZwdzZv6YsLEAXxZdJPeuwzwLbyIH%2FfqYmrdXt1yjWvx4qmQarT&X-Amz-Signature=b5993a6e2e63b7bdf8ecd960975781f0d4a9c1757c63fe1166c8496714ff4e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

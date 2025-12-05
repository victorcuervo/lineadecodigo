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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMSCXIN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuh1U74ERZpkcB9uPf8snFOQGbb1K0VhVSlwqvwiATMAiEAoflAHMRgo2rsE1LYMaWmMpTV7ekQsFukwBDTM7nMBIAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP%2FJel%2BgYBPup7Ku3yrcA%2B7aPGLfublX8XYC73jVg9ALUJa8%2FESXzOM2%2FQm8naK7JXuU2hFs9JJzHYKipFNbi%2BgNacY%2BCJyDHf3KC12WMTkfjVsg4tsWGJ3qryd2%2BMT9RcPmayAlM1ueFSW3eQ98ow543u8vDHmMqguRltXOn%2Fp2VyjAxocRmzNHwa%2BbBkGgj45My7mYq0DqsdqmUzYDP6CPmr6b1rCl9bXSLgeSYn1xnBpAs0DOnba0%2Fgq%2BVMJ%2FYXuE%2Bbb7mHRA%2FCawI2YEQXn9mlXHEndnHrQAhnymVfwvfrCYkV6iCBSvCYDbKHF2S76yRVv1HB3Dc2wZVZzC7zt2BZe%2BnyooxRQB8bX5yk4LGNie2S7yaBlRyzM1a1lgZVXnw1RwzqAQDFWJ4vHCLl8FJPhZewgm1klw78ofh3gofA1erguNmgRTZJV3eEIJRpnuETy%2FZ1wY%2FyprHAZuXpmQEPl2jl3ILxNPRkTrLaAUCB5Ey2YsjUOvtBbHltszUAByVxihZL1Xl0upNTQvInZYM42aJ40iNLUjDOREn3yO2s1%2FgneMmxnumtX3sggxlmQK5NGJpu%2FVblB1VBd7lH064WXIriuzhl%2F8BcPfwahdROwcZv9l1qhCIqoS4HKrbRZ6CF30aOZHpozvMMb%2Fy8kGOqUBv6qf%2FjZCdFkqdo7byKPKDGUX48gMBbyOCphq0PKAO%2FqpenCH4zKUlq3sMpcmjK4be42euy4mG0e04ZUpQ%2FiPEJLbxbOIm5zHKm7zYgXZa1QQC%2Fr088wPl76M%2FBvzB%2BaLQ5C7Jl3sLS7ygJWVEXSbkLmpzS7jLZpLQOCErarQ%2FGGswF6bRy%2B%2BvP5hYjQDTFmMJyOXB2y04%2F%2F6RvAXQ1xIdXAaskDp&X-Amz-Signature=ceb5e9931b084d426ad081340d8044db54d2254f29cd89beff6f2069f75f43cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMSCXIN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuh1U74ERZpkcB9uPf8snFOQGbb1K0VhVSlwqvwiATMAiEAoflAHMRgo2rsE1LYMaWmMpTV7ekQsFukwBDTM7nMBIAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP%2FJel%2BgYBPup7Ku3yrcA%2B7aPGLfublX8XYC73jVg9ALUJa8%2FESXzOM2%2FQm8naK7JXuU2hFs9JJzHYKipFNbi%2BgNacY%2BCJyDHf3KC12WMTkfjVsg4tsWGJ3qryd2%2BMT9RcPmayAlM1ueFSW3eQ98ow543u8vDHmMqguRltXOn%2Fp2VyjAxocRmzNHwa%2BbBkGgj45My7mYq0DqsdqmUzYDP6CPmr6b1rCl9bXSLgeSYn1xnBpAs0DOnba0%2Fgq%2BVMJ%2FYXuE%2Bbb7mHRA%2FCawI2YEQXn9mlXHEndnHrQAhnymVfwvfrCYkV6iCBSvCYDbKHF2S76yRVv1HB3Dc2wZVZzC7zt2BZe%2BnyooxRQB8bX5yk4LGNie2S7yaBlRyzM1a1lgZVXnw1RwzqAQDFWJ4vHCLl8FJPhZewgm1klw78ofh3gofA1erguNmgRTZJV3eEIJRpnuETy%2FZ1wY%2FyprHAZuXpmQEPl2jl3ILxNPRkTrLaAUCB5Ey2YsjUOvtBbHltszUAByVxihZL1Xl0upNTQvInZYM42aJ40iNLUjDOREn3yO2s1%2FgneMmxnumtX3sggxlmQK5NGJpu%2FVblB1VBd7lH064WXIriuzhl%2F8BcPfwahdROwcZv9l1qhCIqoS4HKrbRZ6CF30aOZHpozvMMb%2Fy8kGOqUBv6qf%2FjZCdFkqdo7byKPKDGUX48gMBbyOCphq0PKAO%2FqpenCH4zKUlq3sMpcmjK4be42euy4mG0e04ZUpQ%2FiPEJLbxbOIm5zHKm7zYgXZa1QQC%2Fr088wPl76M%2FBvzB%2BaLQ5C7Jl3sLS7ygJWVEXSbkLmpzS7jLZpLQOCErarQ%2FGGswF6bRy%2B%2BvP5hYjQDTFmMJyOXB2y04%2F%2F6RvAXQ1xIdXAaskDp&X-Amz-Signature=186508bce7e825604267bc394c1f9177941a6a9989fde4be58e9e12d3bfd5504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

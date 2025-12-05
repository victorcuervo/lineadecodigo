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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4JRTMD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2FaFCTc2VbrfoTAVjZ35vY6pacSqg2IYaUuf2%2Fgg4lAIhAO%2BCLI9NEGGDgmZYp2SVA9atLQXAXF8Kp%2BUT6kWD8mwKKv8DCE8QABoMNjM3NDIzMTgzODA1IgzRyEt0iPnzKpIqsLAq3AP%2BeT4tBibysenQFpdp2N5LVYQhixk%2BRfidSrv%2Bh3Xh7%2FKqocOVD8SgXm4TZx%2FllA5EatJhHnUhyOAYB7wQYhjcQjBLsuybrx8GrdLIQvpSAAj2ttMmh2x3R0stuX2cwprUSwGARlDsYVf%2B6z%2FVz%2FjPO4oacew7BaaVB6ui0yEW8noXbrdql2ZLl9c8SAnj9UWdeqczTz4VxzXRLYXAONjSz0CGLXHiwbYCKz0GeLud%2BN8VWhjo9O6YMW%2Fzx39jtYFdhqQ3eLvahtSDVIWCM8%2Ft%2FnuTwYnchzDs%2B03GHcflG%2Bwwu4EPx9b%2BT4h7LAgUWIQyx1%2Ft3MH4OY4dpn6u%2BSsdC1WkWw29ouuDZ84iO6So1k%2FeoVmDgwQlrcb5afw61PBAAdemppKvLbYcsTQqRz2wq4fVuyOCZJU9o%2Fcm9MBRAUsE123fZ8r7xk3kuhUSxsjAvAmuN7d8wVGEgFvGRTDZ80qy%2BXOVkVaOY2oQ%2FTsx5mY4BpkJ7n%2FJ2Oa57QnecLpYp4Znp4dpH%2B59Qivl4wiMDFv%2FzttuSU3vMu1DYhxdSqm%2B%2Fx0iWRCsHNfKLPnQA7mcejldOkJSvq2CBKsrSQm%2FZLKbibv%2BXLzrdQWNvZYl6JSigy1O0fHL5tmRFTCejMjJBjqkAZpeJ8l%2BNyH78wHEhZqbvhn7oRiBUEfh8AdevoL7zLBAC9CFwDN3TbOXPetwNXOdKufUwrSO8fMdmx4rpcVAbTeE7u7kKYR5YzRbWDSMY2O1Dfz0Hs6FSpEY9cZpNaUtVCyGQeH%2F%2BFq6dKPKnYd5%2FRyTYvCG4QQmwGQW%2BJm%2FIyurvpHSFsTBdrWmJwfdC7b5SXY%2BYk1Apm3T4ZjLKy0l8IJTrGxY&X-Amz-Signature=7e36ae57d860e0f1d9e717ae0bdc34ac31acf8fb57364febf6cfa7452a4fb925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4JRTMD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2FaFCTc2VbrfoTAVjZ35vY6pacSqg2IYaUuf2%2Fgg4lAIhAO%2BCLI9NEGGDgmZYp2SVA9atLQXAXF8Kp%2BUT6kWD8mwKKv8DCE8QABoMNjM3NDIzMTgzODA1IgzRyEt0iPnzKpIqsLAq3AP%2BeT4tBibysenQFpdp2N5LVYQhixk%2BRfidSrv%2Bh3Xh7%2FKqocOVD8SgXm4TZx%2FllA5EatJhHnUhyOAYB7wQYhjcQjBLsuybrx8GrdLIQvpSAAj2ttMmh2x3R0stuX2cwprUSwGARlDsYVf%2B6z%2FVz%2FjPO4oacew7BaaVB6ui0yEW8noXbrdql2ZLl9c8SAnj9UWdeqczTz4VxzXRLYXAONjSz0CGLXHiwbYCKz0GeLud%2BN8VWhjo9O6YMW%2Fzx39jtYFdhqQ3eLvahtSDVIWCM8%2Ft%2FnuTwYnchzDs%2B03GHcflG%2Bwwu4EPx9b%2BT4h7LAgUWIQyx1%2Ft3MH4OY4dpn6u%2BSsdC1WkWw29ouuDZ84iO6So1k%2FeoVmDgwQlrcb5afw61PBAAdemppKvLbYcsTQqRz2wq4fVuyOCZJU9o%2Fcm9MBRAUsE123fZ8r7xk3kuhUSxsjAvAmuN7d8wVGEgFvGRTDZ80qy%2BXOVkVaOY2oQ%2FTsx5mY4BpkJ7n%2FJ2Oa57QnecLpYp4Znp4dpH%2B59Qivl4wiMDFv%2FzttuSU3vMu1DYhxdSqm%2B%2Fx0iWRCsHNfKLPnQA7mcejldOkJSvq2CBKsrSQm%2FZLKbibv%2BXLzrdQWNvZYl6JSigy1O0fHL5tmRFTCejMjJBjqkAZpeJ8l%2BNyH78wHEhZqbvhn7oRiBUEfh8AdevoL7zLBAC9CFwDN3TbOXPetwNXOdKufUwrSO8fMdmx4rpcVAbTeE7u7kKYR5YzRbWDSMY2O1Dfz0Hs6FSpEY9cZpNaUtVCyGQeH%2F%2BFq6dKPKnYd5%2FRyTYvCG4QQmwGQW%2BJm%2FIyurvpHSFsTBdrWmJwfdC7b5SXY%2BYk1Apm3T4ZjLKy0l8IJTrGxY&X-Amz-Signature=df402445b0d875d25633b8a78f84edd578934d7c21360c1e1999b8c29db1fba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2L372XJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE44nuG9SmssV4WOwSewRMpaJLWJxNOKy3S9o5836KgAiAg4nocIbWKMPuEFF6vnixbTWxWS2L2mRUu7E2KFjE3tyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsH3A1zK2Dyyh9DDpKtwD%2FWiz4izSVbm%2FwesdVIYMJ6nkiI4n4BKu44%2B2Uvw%2FeS91fxS3sLdGVrFA7KwgjgFqo3cNiI6kTErKW7pEOo3J4Hxd88T2lINV04JiXSs%2FL3K%2FJG1hMZUlyp5Y7K2dYb5enidXLHSrHt7FeKE5FqyNI7FhpAD%2B4%2Bti3HSvIaut%2BymFoTydbnRM%2Fg0lGtdm7vs%2BQYGooHzlxIa%2FmeTWNUDnzypOsaI27cn%2BC1%2BWX2xZ%2Bio7MVWP0vALMdmQ50eXqXH6EJm8161ltkxLZg%2FxG3rxV8l1MbmnOXQNRSKhmSBITvVeZM%2FOBISaFjmB0txqKSeAwYrhgbJrz5NDnzftTjmrUN1c0XyO7oicJFv25QucBIa4RzyPjtSLyluVi3eQNduA2tpSf1hax6TZSuttp3qzw95ejOgwxMJhs7peQDD1CbA658YRHi0QWun5JhjbwbY0HBBX6cvyElAaIqgGwE4PHBAAfPWCq6b22u9HqYI%2FYtL14ZOSwCZVE3E9bdMRKFHidBVPCXvwiLjaagggK%2F%2B5kyXb0g0infea15bLB7c8ptWdqzy7dMFfgQXBsOLeAmud0R%2FmlMPT7Naq%2B5j6%2FcInokq1aCJSmlwyh5eYFSoyaoxqumTe3LyiezURP6kw%2Ba6MygY6pgHmx%2FFxzQKcBeqU6c94y0%2ByVlave%2Fmzes3pmHk4em7zXhnEnbJzT7Pb97SqugHOzllB84vIdVGc%2BZ55ug%2BEnSccx7Xttk4xa%2BiypeMsxU8KihWa98v5ufkBunTT5VbfQzTdEAaU0fWJ1USMyboj5Uml0B%2B7eaV4MC%2Fs%2B%2BXV0rgKaIfa%2BHaUSBYEvASLzL9oZvIBa94HlXSaBKkcjhbXI%2BkqaJDyE3Hw&X-Amz-Signature=4317264bd52f189d455d0c4b5929cfed8b497a51d1343c7643781db6491ef62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2L372XJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE44nuG9SmssV4WOwSewRMpaJLWJxNOKy3S9o5836KgAiAg4nocIbWKMPuEFF6vnixbTWxWS2L2mRUu7E2KFjE3tyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsH3A1zK2Dyyh9DDpKtwD%2FWiz4izSVbm%2FwesdVIYMJ6nkiI4n4BKu44%2B2Uvw%2FeS91fxS3sLdGVrFA7KwgjgFqo3cNiI6kTErKW7pEOo3J4Hxd88T2lINV04JiXSs%2FL3K%2FJG1hMZUlyp5Y7K2dYb5enidXLHSrHt7FeKE5FqyNI7FhpAD%2B4%2Bti3HSvIaut%2BymFoTydbnRM%2Fg0lGtdm7vs%2BQYGooHzlxIa%2FmeTWNUDnzypOsaI27cn%2BC1%2BWX2xZ%2Bio7MVWP0vALMdmQ50eXqXH6EJm8161ltkxLZg%2FxG3rxV8l1MbmnOXQNRSKhmSBITvVeZM%2FOBISaFjmB0txqKSeAwYrhgbJrz5NDnzftTjmrUN1c0XyO7oicJFv25QucBIa4RzyPjtSLyluVi3eQNduA2tpSf1hax6TZSuttp3qzw95ejOgwxMJhs7peQDD1CbA658YRHi0QWun5JhjbwbY0HBBX6cvyElAaIqgGwE4PHBAAfPWCq6b22u9HqYI%2FYtL14ZOSwCZVE3E9bdMRKFHidBVPCXvwiLjaagggK%2F%2B5kyXb0g0infea15bLB7c8ptWdqzy7dMFfgQXBsOLeAmud0R%2FmlMPT7Naq%2B5j6%2FcInokq1aCJSmlwyh5eYFSoyaoxqumTe3LyiezURP6kw%2Ba6MygY6pgHmx%2FFxzQKcBeqU6c94y0%2ByVlave%2Fmzes3pmHk4em7zXhnEnbJzT7Pb97SqugHOzllB84vIdVGc%2BZ55ug%2BEnSccx7Xttk4xa%2BiypeMsxU8KihWa98v5ufkBunTT5VbfQzTdEAaU0fWJ1USMyboj5Uml0B%2B7eaV4MC%2Fs%2B%2BXV0rgKaIfa%2BHaUSBYEvASLzL9oZvIBa94HlXSaBKkcjhbXI%2BkqaJDyE3Hw&X-Amz-Signature=d57f992d47df7350ab0bd8079383072a8ec37821b1b81af1cd5aeb35fa99bc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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

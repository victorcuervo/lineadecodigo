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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFP6VUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCex8RL%2BrqM%2Fc1EqVsayiE5VqlBoyibLBVJXvceFOuz6AIhAOUY4SemRhMCN98tZviCysNfaLi%2BeB0I4zWOAGXwt%2BZKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutJSPShmqDNqHeKEq3AMnPP3T5DeGYlVPFj2b%2B52RPJCSO%2BLjw7ez5p8MUuWyPgtfqXGV9Y2AqyhyoN9Vi4eseDpMn6X%2F4YE2XRrKNhPVWCkbuG%2FUcKZ7wgpX%2B66dNHYwzkT90OnGMbFGslE4vz7%2FXxtQr28ju84ZLGB2LGP0Fbl9guGyRe8PhubPVW%2By7oIk6KNUDx3Ul35B4dj6prS%2Fwjh6hCBRR4rzucnoca2fIav60zklHi9qPfl3pjvJUkhpx3QA0AXhOaJOMrvPx0q8InKgTT8XuvUIUJ5z%2BglEqIGLwLLAZLRWKfOoqIYNSIQDP1jDq8wu8LUCJW6BMBK3cqfNCOyj%2Fir37fpq6Hg1ZiGdAPGx%2Fe4uW6Eg8ZDVxHO%2B8LNOEGWu3O5E12wmNZXL8Y55RLqUb8ehFu14D%2BYgBBSKUNB%2BxPcgRZxa%2FAGH%2FixKVESBJthGY0N5FjYemh6xaOECSHobY%2FCUVs21xAIoq%2FheMkP5dAKmFhvDUhFf3mZGf8WA0Aai4hsrMrcgN7TugJXtmo5fUCOrahI7aejRDzgO95rabVV1F1ulEshyJt7KtgZBYvz8T%2F0H1xO8Ly6ju6SRCxiN44hrixwf50iuArBMFRnMSsiOX7nUaq%2FqNxnzXPf85tikPuSLPzDw%2FdLJBjqkAUt0JkT729ifZqyGFUFd8Lg6rIRsTXTrYxay%2BNBMg5ybjt7jfJ4r9gBc9A7VA%2BugVV68h6LI23LqLIQO7nX3SDKuoTy4CiAJrPhutG7Ll4Ww19XqP1Mm2VrcoW2qKCgFS%2FS%2FsfQFHn2ZKeWPxhXIMGXHZ%2F8YNnGyXq2LIVXK4K2eMUswCRrFSduHDu0kNAqC%2FzmCuYesnnXXi%2BRDBQMgUiOwLzIN&X-Amz-Signature=8a18d075391646db8296b209e9ee815b2a3cff98b0fb64a98d416247c0ecc1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFP6VUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCex8RL%2BrqM%2Fc1EqVsayiE5VqlBoyibLBVJXvceFOuz6AIhAOUY4SemRhMCN98tZviCysNfaLi%2BeB0I4zWOAGXwt%2BZKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutJSPShmqDNqHeKEq3AMnPP3T5DeGYlVPFj2b%2B52RPJCSO%2BLjw7ez5p8MUuWyPgtfqXGV9Y2AqyhyoN9Vi4eseDpMn6X%2F4YE2XRrKNhPVWCkbuG%2FUcKZ7wgpX%2B66dNHYwzkT90OnGMbFGslE4vz7%2FXxtQr28ju84ZLGB2LGP0Fbl9guGyRe8PhubPVW%2By7oIk6KNUDx3Ul35B4dj6prS%2Fwjh6hCBRR4rzucnoca2fIav60zklHi9qPfl3pjvJUkhpx3QA0AXhOaJOMrvPx0q8InKgTT8XuvUIUJ5z%2BglEqIGLwLLAZLRWKfOoqIYNSIQDP1jDq8wu8LUCJW6BMBK3cqfNCOyj%2Fir37fpq6Hg1ZiGdAPGx%2Fe4uW6Eg8ZDVxHO%2B8LNOEGWu3O5E12wmNZXL8Y55RLqUb8ehFu14D%2BYgBBSKUNB%2BxPcgRZxa%2FAGH%2FixKVESBJthGY0N5FjYemh6xaOECSHobY%2FCUVs21xAIoq%2FheMkP5dAKmFhvDUhFf3mZGf8WA0Aai4hsrMrcgN7TugJXtmo5fUCOrahI7aejRDzgO95rabVV1F1ulEshyJt7KtgZBYvz8T%2F0H1xO8Ly6ju6SRCxiN44hrixwf50iuArBMFRnMSsiOX7nUaq%2FqNxnzXPf85tikPuSLPzDw%2FdLJBjqkAUt0JkT729ifZqyGFUFd8Lg6rIRsTXTrYxay%2BNBMg5ybjt7jfJ4r9gBc9A7VA%2BugVV68h6LI23LqLIQO7nX3SDKuoTy4CiAJrPhutG7Ll4Ww19XqP1Mm2VrcoW2qKCgFS%2FS%2FsfQFHn2ZKeWPxhXIMGXHZ%2F8YNnGyXq2LIVXK4K2eMUswCRrFSduHDu0kNAqC%2FzmCuYesnnXXi%2BRDBQMgUiOwLzIN&X-Amz-Signature=e79789a0b790d219b095ba3b39add34a55a04ea000b785605eb68e4d946be514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

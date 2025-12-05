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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWVZRDX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BpjuMZziJD17xS3xy9XrTUEXQjhFSQuqdZxch5IUcZAiA9QRF7V5ITkBpTiwL6iUfRbKTwS6tL5Lupj4Nz46PPTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTDLwLaoIpHb9SsMwKtwD2CMZPfCGYNdJX%2BXGob3mzaM9edNOdBYFABDEG0xLGVZ6T14Q2IdpdKMHmBDijPvWbGEtjyErn6aKFRhQbR8Yt3GBJviQF17cO%2FsomXe51AKv2LplV83IqdJPMhATHaB3NW9LXmun2u9JIBRexZDpvRNZqgfcBq%2BFIjM2zKToaWDUMGoCLXiws6nX7c%2FJ5ztKzkXaRTQllBmHFv%2FlPVJiW5Rudui8xT%2FWNfVWxeI12VmnhtF3Jq%2FB6nPE1jyO%2BWSMRApPxdnPcI385ihzfFx6eFJQ5GAnxJ5YVLAssFUzukBv2O2niwElKVPK6fvNImKQQR3djN3xoifNBzWEK8iHHzUgEj6h7Cpz9m4Y9qZftcZK8U83hFwbFueeF5q0oAMJp15oR9QaocMWhdlY8tSG6izxgqpbCNG6J4FhgJBqjS6MYWeQ%2Fuc6HNiaXAuyxBRQGf0q5EJEjeCmhj%2FScmH3YUyjbbmdSFKOnExg2Kipd%2B0s4A9eEL5WD2FLpMY95LpRkc%2BMR9FHfzFNgENVRv%2FI0Ll9h1cd7COSLdizPbPNJaPTG0RHTDHPH%2BcO%2Bte0BZzMiDpuJXnmeUY%2BxPHcpHx0rYLaFRUCti1WJXjEcuQ3aAE%2FbFDj3BXv3czVimIws6zJyQY6pgFSRzgVqp49k0iVj6Sd78dRJQnT7dZ4Zg26n1uh%2FZZz76p5r2QJHeTg3rZjNY0mDWcpHJoOKZZFjcq%2BGzwtCvpWq5e%2FjSRFmEBq5r%2FE%2BzKo4RBPU30mXZ0%2FU7Lr6upvWzr%2FcQxyMFJ9Fu780uZVgcHDSBIzR0ODL4YMSlVvTUP51hVLd%2Bu5drthKP5Utjk6PN96mzCdenSaQ3BNOf%2Fa9Ydau7Bz9BeN&X-Amz-Signature=491ae5ad028dce8f4bfc5b06c8ceca7cd7e7e79da64b707aa59ff234b68de013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWVZRDX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BpjuMZziJD17xS3xy9XrTUEXQjhFSQuqdZxch5IUcZAiA9QRF7V5ITkBpTiwL6iUfRbKTwS6tL5Lupj4Nz46PPTir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTDLwLaoIpHb9SsMwKtwD2CMZPfCGYNdJX%2BXGob3mzaM9edNOdBYFABDEG0xLGVZ6T14Q2IdpdKMHmBDijPvWbGEtjyErn6aKFRhQbR8Yt3GBJviQF17cO%2FsomXe51AKv2LplV83IqdJPMhATHaB3NW9LXmun2u9JIBRexZDpvRNZqgfcBq%2BFIjM2zKToaWDUMGoCLXiws6nX7c%2FJ5ztKzkXaRTQllBmHFv%2FlPVJiW5Rudui8xT%2FWNfVWxeI12VmnhtF3Jq%2FB6nPE1jyO%2BWSMRApPxdnPcI385ihzfFx6eFJQ5GAnxJ5YVLAssFUzukBv2O2niwElKVPK6fvNImKQQR3djN3xoifNBzWEK8iHHzUgEj6h7Cpz9m4Y9qZftcZK8U83hFwbFueeF5q0oAMJp15oR9QaocMWhdlY8tSG6izxgqpbCNG6J4FhgJBqjS6MYWeQ%2Fuc6HNiaXAuyxBRQGf0q5EJEjeCmhj%2FScmH3YUyjbbmdSFKOnExg2Kipd%2B0s4A9eEL5WD2FLpMY95LpRkc%2BMR9FHfzFNgENVRv%2FI0Ll9h1cd7COSLdizPbPNJaPTG0RHTDHPH%2BcO%2Bte0BZzMiDpuJXnmeUY%2BxPHcpHx0rYLaFRUCti1WJXjEcuQ3aAE%2FbFDj3BXv3czVimIws6zJyQY6pgFSRzgVqp49k0iVj6Sd78dRJQnT7dZ4Zg26n1uh%2FZZz76p5r2QJHeTg3rZjNY0mDWcpHJoOKZZFjcq%2BGzwtCvpWq5e%2FjSRFmEBq5r%2FE%2BzKo4RBPU30mXZ0%2FU7Lr6upvWzr%2FcQxyMFJ9Fu780uZVgcHDSBIzR0ODL4YMSlVvTUP51hVLd%2Bu5drthKP5Utjk6PN96mzCdenSaQ3BNOf%2Fa9Ydau7Bz9BeN&X-Amz-Signature=98d315ec334c3f608304b7f0d16437d1f98688efb26dfa1bfdcd778b39b28441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

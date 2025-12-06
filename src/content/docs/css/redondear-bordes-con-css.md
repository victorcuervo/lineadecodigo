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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQZOETL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA5pbTzcynqv8qnn0PN%2Bqk5earJNu1FjwVf3ju2HFcpAiBMwE%2FBbk1vXyXMffEs6Y1ZQY0x0zoOspP1z86m6WEioyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMO750m5cP9FoFjFy9KtwDyQTyJQiLuFzRrwXq3C4Q79pZrLAOI03Q3Sli76tAiraaA48yY29Ar%2BFwBg8p3g1fEngs32FGkHz9vyoP6qdR%2FayIsljnuX9TipLyPcdpw2ZLBwzxBGC37FcogG31bIVc8tlOSheWKi9nPRI2U3IT1X4Q9e72Wf%2BJEwJNRCdGbRZ7wStTjNKdKtdvDjlsnjK%2Bf9qY11NQD1CPjpggYkfMTAVQqxaxBxH2%2B9NwsDCziG7%2FOoNaL4wNtowAtbaVmJmp6LZuUBk8zWIzVkH9yFc2O%2Fzhl8E3aAoAhizqlxCWCOYwAsnEhJOEOShC05SieEST0OkNFbzUzDTIVz9ojBMO%2FBK4xHS71DeXv%2B1txHkqfIWmZJYdroFugPlBr52xCt1QqH56i5krXJJXVwpm1bzqU5JlmNYrDOc3r%2Fhv%2Fy8AjlhBtBgs8j9DHnJ2YKKPFjYBCSN6xo%2BSjrBHBWNS0EetXcgD8XR3muIo5Ie4%2Fxj5iPqCgHBrBjGs1z9v%2F2qsKLGLueFhadleKeOw7c1F2pIxgF5ybXviXlVMpvZ9lxGp2uUbGBmCcfGwkOozKETExeQEoc65Av4QonU9zuxIQnAPJbWPkj1skJqig1ICnhGWChjyQ9T9UbcPmpxfXDAwj4nQyQY6pgEId2zMx9%2BNuPd6Nz8ewuXPb1NFTI2%2BnnYW3zWHx3X%2Br%2F0Ud%2Fpfx0ADCHdUuWWZ8DVMR3Bxl%2FSjtone33D0FbIZDbEXFz%2B9iVs%2BlNrMWTQdXV0Zt%2B%2FHCRUHUN962ilrRrzNSv3iDeE%2FsBuua7CCtwyLAxL5%2B3Bw7ngf6EtCO4%2B%2FXWc%2FI%2FpKzdtfQ3q%2FTpTVPDGMemkpa%2BXaa5ZAiIRLw1Ah0huanKnn&X-Amz-Signature=90b8b10744ed1a7ab68889e7ea740053adf34f923bde40ef3f95eb9b73bad7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQZOETL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA5pbTzcynqv8qnn0PN%2Bqk5earJNu1FjwVf3ju2HFcpAiBMwE%2FBbk1vXyXMffEs6Y1ZQY0x0zoOspP1z86m6WEioyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMO750m5cP9FoFjFy9KtwDyQTyJQiLuFzRrwXq3C4Q79pZrLAOI03Q3Sli76tAiraaA48yY29Ar%2BFwBg8p3g1fEngs32FGkHz9vyoP6qdR%2FayIsljnuX9TipLyPcdpw2ZLBwzxBGC37FcogG31bIVc8tlOSheWKi9nPRI2U3IT1X4Q9e72Wf%2BJEwJNRCdGbRZ7wStTjNKdKtdvDjlsnjK%2Bf9qY11NQD1CPjpggYkfMTAVQqxaxBxH2%2B9NwsDCziG7%2FOoNaL4wNtowAtbaVmJmp6LZuUBk8zWIzVkH9yFc2O%2Fzhl8E3aAoAhizqlxCWCOYwAsnEhJOEOShC05SieEST0OkNFbzUzDTIVz9ojBMO%2FBK4xHS71DeXv%2B1txHkqfIWmZJYdroFugPlBr52xCt1QqH56i5krXJJXVwpm1bzqU5JlmNYrDOc3r%2Fhv%2Fy8AjlhBtBgs8j9DHnJ2YKKPFjYBCSN6xo%2BSjrBHBWNS0EetXcgD8XR3muIo5Ie4%2Fxj5iPqCgHBrBjGs1z9v%2F2qsKLGLueFhadleKeOw7c1F2pIxgF5ybXviXlVMpvZ9lxGp2uUbGBmCcfGwkOozKETExeQEoc65Av4QonU9zuxIQnAPJbWPkj1skJqig1ICnhGWChjyQ9T9UbcPmpxfXDAwj4nQyQY6pgEId2zMx9%2BNuPd6Nz8ewuXPb1NFTI2%2BnnYW3zWHx3X%2Br%2F0Ud%2Fpfx0ADCHdUuWWZ8DVMR3Bxl%2FSjtone33D0FbIZDbEXFz%2B9iVs%2BlNrMWTQdXV0Zt%2B%2FHCRUHUN962ilrRrzNSv3iDeE%2FsBuua7CCtwyLAxL5%2B3Bw7ngf6EtCO4%2B%2FXWc%2FI%2FpKzdtfQ3q%2FTpTVPDGMemkpa%2BXaa5ZAiIRLw1Ah0huanKnn&X-Amz-Signature=b0ca8c44cfab67554dcd0eab3e446b61f185a6bfb8968184b53df8659b31a878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

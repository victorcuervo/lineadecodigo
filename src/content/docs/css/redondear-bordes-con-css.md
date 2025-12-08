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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2N6UOYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQgK%2Fh58U52PI55ynmRN7HgkQMTA83Nld7J8SCcl9qnQIhAL6R%2Bh%2B2oGr9PHqbyJlpGlPMPBEX8hqqmvuixYy54wibKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlO%2FFZZUgIgXo88J4q3AOGEcKEyQQXDkzhh50sxxMvTAV8B5152BwGbKChXSe7IrLl4k3INcj0Dafik0HgKBLwJs7T2HHm3GYUEZraN%2FoIECVeEEYZUcSBLak%2F4R2Q0wtgPnEwUZmzupxsQIKwK3HcPzlujBtlqWNu%2BI5fVkS5fhHKPMjerEBcXUJR%2FUGosdnzuMiTKOQRGIR2Rwp8uIu7w%2FRp0KfpQLzS5sgmJaCR9n3wC7FL2vgXnRe7dWquXQ49ehC2P1E0%2BPDUBrFDAr%2FVdglF3VHwxXsu9aNGzvkLl0FmUc%2B4I6uQAMTR6hSv1hb3%2BhkqEN0IyeqxN93Wf3gQylPSq2DGAVBbbsHrBvbv85Vst5fDTVFzXNKbil26ghFqByO5n7UUdTWH6hdg6DAoH%2BY3SXsJDAKxHgr4QHBrfbyflWU1QkTyQU2qhJDiGNd%2FQ36X3xrFyeQO8DySp22cAIR2Wp8u0Qa6fU9hbw76XibmZ0Mcvy8tjWMW5sEZ4oTv2tBAbxWY2gCmJdQzZqGBiuDxx6yPTazSNnz09cIcB%2B9phYlHIHWN9ZgrQSVymBcOkM%2FknvKG0MuFvKBEJQXQX7vy6MxlOWziZ4%2FrwjheTLg8k%2BgVptrIJz5KcTmWsvnF0Vr5A5x84ilPAzCh7tnJBjqkAc9O4H4zxbm7wRaedBJgnM0cNa92W4bV1mkHQdsUuaRvx%2FYXytl%2BTvcG8z4xrv%2BIwtWZR%2FM%2Flm0GPXigyG%2F%2BPGgwGpgIsi7aGPWtAgTPTaanfD7yJJugxALF3fgCjvC%2FLOuRUlLKRgTbi3eEAnbq6pLNaf9mDOI7cAFzBhjNBXS6J0xMHBO2xcoVQDTEHfTKBDSspMdmQgsNXAVsR9cm5EkytJSR&X-Amz-Signature=d613de4f419d8420f1abd5402464accb3eea07a2dd19ef952979efbf172c4bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2N6UOYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQgK%2Fh58U52PI55ynmRN7HgkQMTA83Nld7J8SCcl9qnQIhAL6R%2Bh%2B2oGr9PHqbyJlpGlPMPBEX8hqqmvuixYy54wibKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlO%2FFZZUgIgXo88J4q3AOGEcKEyQQXDkzhh50sxxMvTAV8B5152BwGbKChXSe7IrLl4k3INcj0Dafik0HgKBLwJs7T2HHm3GYUEZraN%2FoIECVeEEYZUcSBLak%2F4R2Q0wtgPnEwUZmzupxsQIKwK3HcPzlujBtlqWNu%2BI5fVkS5fhHKPMjerEBcXUJR%2FUGosdnzuMiTKOQRGIR2Rwp8uIu7w%2FRp0KfpQLzS5sgmJaCR9n3wC7FL2vgXnRe7dWquXQ49ehC2P1E0%2BPDUBrFDAr%2FVdglF3VHwxXsu9aNGzvkLl0FmUc%2B4I6uQAMTR6hSv1hb3%2BhkqEN0IyeqxN93Wf3gQylPSq2DGAVBbbsHrBvbv85Vst5fDTVFzXNKbil26ghFqByO5n7UUdTWH6hdg6DAoH%2BY3SXsJDAKxHgr4QHBrfbyflWU1QkTyQU2qhJDiGNd%2FQ36X3xrFyeQO8DySp22cAIR2Wp8u0Qa6fU9hbw76XibmZ0Mcvy8tjWMW5sEZ4oTv2tBAbxWY2gCmJdQzZqGBiuDxx6yPTazSNnz09cIcB%2B9phYlHIHWN9ZgrQSVymBcOkM%2FknvKG0MuFvKBEJQXQX7vy6MxlOWziZ4%2FrwjheTLg8k%2BgVptrIJz5KcTmWsvnF0Vr5A5x84ilPAzCh7tnJBjqkAc9O4H4zxbm7wRaedBJgnM0cNa92W4bV1mkHQdsUuaRvx%2FYXytl%2BTvcG8z4xrv%2BIwtWZR%2FM%2Flm0GPXigyG%2F%2BPGgwGpgIsi7aGPWtAgTPTaanfD7yJJugxALF3fgCjvC%2FLOuRUlLKRgTbi3eEAnbq6pLNaf9mDOI7cAFzBhjNBXS6J0xMHBO2xcoVQDTEHfTKBDSspMdmQgsNXAVsR9cm5EkytJSR&X-Amz-Signature=fc1c5a95e9bb8fa48e3fac4bd908f97873baccc274443f7b87ed96707e5cf72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

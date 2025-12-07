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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TGWJIL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDF355YzTRBAqKB%2F9FFSFtjjjhNTee1O98hTU7vEdGWBAiAc0AM9po22qPZCtZHz%2FHPBAm73r3HOIl4bpQ1n0a6UxSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM726FWcvUJ8IrpUoiKtwDADj4hlVJXYZdfdDVlbrJ1F25ImlealsvVrbTbpgxgTDhDUZjdGLcLFHLvQFEQjxfJupM7WezKzIIlvF87tEbWjKGrebc9A%2B6KZWuRVvlY78Bg6z8nilT1bVgqcTumrcT%2BEmxTiBeSNs4nGGAXIs6rRCFnQx3R3Hdu14ovHtWqqJuVAx7LcBZHdr%2FzVO7jWzE33wQGpBDlZLye1mliQfEEhXOZmVwtGu3fKIDKoB1qJCOkfZGVTNhPjCPf8i0EgBt91wejTU%2FbVdQmPD0aMgThtKVIep5KCDEIAzozS6%2BI393gZrn%2FFNb%2FUuxUNNsWHpBS00KcHV8VeadmAzS%2Brqk%2BhAhTZPMl69hxR1EBYlO2g5xJnvtbia0MweIr57sYn862dsE3V2HsPXnYZqro9SZG9I9v2MoOq7eGmYpbZ5%2BcUZTUkV8GC2ie03h2NcQT7xyvQPQ%2BFHXGX4fnUqzh8HTrkuIQmwOZNwa1nYdAUZ8UcG%2FRXOmt1E%2FYatVY0Z0xXr3BIFeYxdzkQc5gjf27OQIdc4zvsZOEIbtrAkoq7lfURIPxf9OnAu%2Flbe9wYmwP1Sdqq5mgjYTgALgPO5uxvrokJS6pDO%2FxCIyZRBKoCHbIXXA6ajOj1XhCWOdz0sw5bzWyQY6pgE8%2FRsWZdEmoL2SrsAHUOd1ZRFPUOt7ks8MKTvUpj51MTQfVjYo6x9DSxB%2BQ1GfOk%2F%2FAr65%2FJy%2FE3pVpGNgxg1%2FZWWCZowdwI43D8O%2FqzFoAOY%2BwLJN3%2Bc24fQCane%2BKOKX3WolKEg6LmMSUqa7Cgay2M%2B35tGTOY1Reuylth64JGKgVGFMdqK82y0eUMDAVSMx4cVg0QTR2AAaTS7tHmoy0rfyw0Te&X-Amz-Signature=8f245d89350a19e686917e96ec6fc119bcfdc7ce1188c2d65af985989789fade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TGWJIL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDF355YzTRBAqKB%2F9FFSFtjjjhNTee1O98hTU7vEdGWBAiAc0AM9po22qPZCtZHz%2FHPBAm73r3HOIl4bpQ1n0a6UxSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM726FWcvUJ8IrpUoiKtwDADj4hlVJXYZdfdDVlbrJ1F25ImlealsvVrbTbpgxgTDhDUZjdGLcLFHLvQFEQjxfJupM7WezKzIIlvF87tEbWjKGrebc9A%2B6KZWuRVvlY78Bg6z8nilT1bVgqcTumrcT%2BEmxTiBeSNs4nGGAXIs6rRCFnQx3R3Hdu14ovHtWqqJuVAx7LcBZHdr%2FzVO7jWzE33wQGpBDlZLye1mliQfEEhXOZmVwtGu3fKIDKoB1qJCOkfZGVTNhPjCPf8i0EgBt91wejTU%2FbVdQmPD0aMgThtKVIep5KCDEIAzozS6%2BI393gZrn%2FFNb%2FUuxUNNsWHpBS00KcHV8VeadmAzS%2Brqk%2BhAhTZPMl69hxR1EBYlO2g5xJnvtbia0MweIr57sYn862dsE3V2HsPXnYZqro9SZG9I9v2MoOq7eGmYpbZ5%2BcUZTUkV8GC2ie03h2NcQT7xyvQPQ%2BFHXGX4fnUqzh8HTrkuIQmwOZNwa1nYdAUZ8UcG%2FRXOmt1E%2FYatVY0Z0xXr3BIFeYxdzkQc5gjf27OQIdc4zvsZOEIbtrAkoq7lfURIPxf9OnAu%2Flbe9wYmwP1Sdqq5mgjYTgALgPO5uxvrokJS6pDO%2FxCIyZRBKoCHbIXXA6ajOj1XhCWOdz0sw5bzWyQY6pgE8%2FRsWZdEmoL2SrsAHUOd1ZRFPUOt7ks8MKTvUpj51MTQfVjYo6x9DSxB%2BQ1GfOk%2F%2FAr65%2FJy%2FE3pVpGNgxg1%2FZWWCZowdwI43D8O%2FqzFoAOY%2BwLJN3%2Bc24fQCane%2BKOKX3WolKEg6LmMSUqa7Cgay2M%2B35tGTOY1Reuylth64JGKgVGFMdqK82y0eUMDAVSMx4cVg0QTR2AAaTS7tHmoy0rfyw0Te&X-Amz-Signature=249359336344ba26dd5a82b76a266922a56847ee99a2544b3bcbbd65376dd407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

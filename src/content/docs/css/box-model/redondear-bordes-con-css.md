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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3YF2ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiI6r4epyUfritqFhS4ngq6jOh43uiCY1Ly%2FkuoNx46AiARSCFHmfC7mYJtIOxThJs2wPx7R4A7yAG2T%2FfI9hbiqCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMNf222sIjjyee7tj0KtwDHGEmuiSkLimkLjsC%2BRFI%2FanroMlA39NfCrNeigeD83nqmrx%2BBmXRxhW%2FETHfbs2NcF59BD069bMa6Xk5EZQnS9hDqj0wcJshp2Q6WeLDHywWEmcGYO0HpcHY%2BgbctPPnb8oECihcoG9vID7SNEON6nkANnB0SauUh1nSZIo3%2FvUKAgZQktMDvrTMPyciH41lHxKd4Ppo4BuKSFl77o%2BQLt0IAq0%2FYNHTEnz6rh2WyhAihjXAGRrrS6e31tnDHTXJE9Q9WuH0ECDpOPhmr22GkZMc7qJtzLz0UYcrcOuzqGV6hcNAdTlMrloR5KK%2BmyFzUzzdbt7MPeIdJ8aTsoONjrVaoTMe7IOYqlctIRjWPSLj%2FYyM%2B69Hlk4Nlk11NxwpjCZQX%2BD77%2F1gmctsLVTesVgFx0kaQEgacz3hZ8%2Bj32B1ejdtY5eZuRJKbTBc2raRsJYDS3%2Buq1QwTjBdpVlVLB84%2FQBwTNhlDaboKZXFIy3aN%2BDtcEofEP2mFwO1iQObhsDXk7z10PHfCHd96dsDtEQSF30gdGJx3Lcqz4lwZbWM0iBMkx%2FQ6r%2F4Ew4Cyg3Ij%2FYEd1yxxMP0FeLW30OJgFNwJPDhcR13ch9ToP%2FawVRy9ycbJR5ZipzAJ%2BIw%2F7KIygY6pgGDye71LzkzbafVhmacnWIjbFuxHM5a%2Br6tgk1gMfNwE%2FRY7AsOcYxuhc2%2FbFp2GuowWAyEMexY7NIdI1ACUmWposS3%2FRVucj3nJAs%2BoL7fMvUqhL9qusjbCp1VcAbp8MspFt3I4khMw04RsE%2FXvTcWYrBJlSrc27KY%2FVCvAg8OApxrdtT%2FwmOfIAVNKqjh6CaytIMWP29n8dSl8YQk2FeVglTV0dNu&X-Amz-Signature=696a47975c20a0415e7812bcdf811c4b6f6936cc94134436dc15c024681ac9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3YF2ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiI6r4epyUfritqFhS4ngq6jOh43uiCY1Ly%2FkuoNx46AiARSCFHmfC7mYJtIOxThJs2wPx7R4A7yAG2T%2FfI9hbiqCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMNf222sIjjyee7tj0KtwDHGEmuiSkLimkLjsC%2BRFI%2FanroMlA39NfCrNeigeD83nqmrx%2BBmXRxhW%2FETHfbs2NcF59BD069bMa6Xk5EZQnS9hDqj0wcJshp2Q6WeLDHywWEmcGYO0HpcHY%2BgbctPPnb8oECihcoG9vID7SNEON6nkANnB0SauUh1nSZIo3%2FvUKAgZQktMDvrTMPyciH41lHxKd4Ppo4BuKSFl77o%2BQLt0IAq0%2FYNHTEnz6rh2WyhAihjXAGRrrS6e31tnDHTXJE9Q9WuH0ECDpOPhmr22GkZMc7qJtzLz0UYcrcOuzqGV6hcNAdTlMrloR5KK%2BmyFzUzzdbt7MPeIdJ8aTsoONjrVaoTMe7IOYqlctIRjWPSLj%2FYyM%2B69Hlk4Nlk11NxwpjCZQX%2BD77%2F1gmctsLVTesVgFx0kaQEgacz3hZ8%2Bj32B1ejdtY5eZuRJKbTBc2raRsJYDS3%2Buq1QwTjBdpVlVLB84%2FQBwTNhlDaboKZXFIy3aN%2BDtcEofEP2mFwO1iQObhsDXk7z10PHfCHd96dsDtEQSF30gdGJx3Lcqz4lwZbWM0iBMkx%2FQ6r%2F4Ew4Cyg3Ij%2FYEd1yxxMP0FeLW30OJgFNwJPDhcR13ch9ToP%2FawVRy9ycbJR5ZipzAJ%2BIw%2F7KIygY6pgGDye71LzkzbafVhmacnWIjbFuxHM5a%2Br6tgk1gMfNwE%2FRY7AsOcYxuhc2%2FbFp2GuowWAyEMexY7NIdI1ACUmWposS3%2FRVucj3nJAs%2BoL7fMvUqhL9qusjbCp1VcAbp8MspFt3I4khMw04RsE%2FXvTcWYrBJlSrc27KY%2FVCvAg8OApxrdtT%2FwmOfIAVNKqjh6CaytIMWP29n8dSl8YQk2FeVglTV0dNu&X-Amz-Signature=e638b164c63f72285889c7275b0512c0d08a8f50c9918fbab35cd99ec6e1b76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

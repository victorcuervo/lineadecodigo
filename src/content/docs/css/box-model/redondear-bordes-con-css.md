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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RS4WTNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElG%2Bgmm5cIysggRfvAS7hTAC1en%2FCHmGj85MtpGnOf2AiATQt9w38VX0Jc6OrpN7A0TOo71uGIYitDvLj0I%2FSrTlyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY3n18mnLKI8pQE21KtwDdtqCRS3S7AdoA6MxrVGPIZciL6Ny3yNhrSesw5NwsmZi%2BIXM%2BK5rPNDFI3pa%2FTPiXev3yTgwG%2BWg6tTtpjdgJVELrwhkxhQwx8k9Qki448wZCuWIWOB7%2Flm7Q%2Bw%2BUE8ojucfdxCKXKfshpXDE6WDiy6gZB2xXXTVOppaWp%2FTYXFEhb6QOkYzxPbHFCZL52uqXMM1rVFSKmh0qrMLyIPAiwpfuyC%2Fnn5Ax8uqw1vDyV3XYiNxoVZ1G%2BGiAmxXbaDFkiNaimCbZxsVuSp1S6WO8steEpPBanBNd3H2hQV06zKLWC0MZLA8bD%2BbmfZ6vC%2B%2BHEnk9Qu10r3VpihItUatxhgy%2BqBHfx7du0Y%2FnAmzVIuv5%2F5UqBj7DE%2FfRiXM%2FK6ND5LZ%2BWqzxcUWVFNCvW9F1TIh8ALZux%2Bh9tqVsTT1VgmQof%2F3m%2FPP9MnbV%2F6uKtz9lIs19xgTcx40UcEk8ehL1kC6AWsOmrs8CTuVcqEUIP2d7f5Z%2FbvWBxQhi%2FU%2FwVjUxaMJsm%2BDvK5JHvllsYQd%2BTfCOXkfNDcniE13Ri6BukgXgNZb%2Bu%2FsAUlU6RZLgM%2B2zd4cbhteHtBW%2B9xgZpleogXIQY6X1%2FErlFcugVk18k6vTXlUQdITEGWAo18wuZ%2BLygY6pgF8Yet4hP1H76P3BqNiHCRAd%2BRVGRNagQg1odVO2x8zkxGjCFuHyKJc54yjsi1j%2Fae3JTqtM3xXnTcaAo7RhOgZULxe%2FJIzt4VWrXHZ9tLmuPmSCgYwNR%2Fy7650goTRqH37bmYFkLJHLABBV2b4OMimzjmr5NrgiL6ViJUsV1X%2BeXft2x8jxHm8pLM0da%2Bz5KaXDCMFBFw1Um44T5ujhlglSJVgHIQQ&X-Amz-Signature=f2ac313b4bb129a4c021f47b40e8a798622aaf425b7307417c76f766ffb50066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RS4WTNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElG%2Bgmm5cIysggRfvAS7hTAC1en%2FCHmGj85MtpGnOf2AiATQt9w38VX0Jc6OrpN7A0TOo71uGIYitDvLj0I%2FSrTlyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY3n18mnLKI8pQE21KtwDdtqCRS3S7AdoA6MxrVGPIZciL6Ny3yNhrSesw5NwsmZi%2BIXM%2BK5rPNDFI3pa%2FTPiXev3yTgwG%2BWg6tTtpjdgJVELrwhkxhQwx8k9Qki448wZCuWIWOB7%2Flm7Q%2Bw%2BUE8ojucfdxCKXKfshpXDE6WDiy6gZB2xXXTVOppaWp%2FTYXFEhb6QOkYzxPbHFCZL52uqXMM1rVFSKmh0qrMLyIPAiwpfuyC%2Fnn5Ax8uqw1vDyV3XYiNxoVZ1G%2BGiAmxXbaDFkiNaimCbZxsVuSp1S6WO8steEpPBanBNd3H2hQV06zKLWC0MZLA8bD%2BbmfZ6vC%2B%2BHEnk9Qu10r3VpihItUatxhgy%2BqBHfx7du0Y%2FnAmzVIuv5%2F5UqBj7DE%2FfRiXM%2FK6ND5LZ%2BWqzxcUWVFNCvW9F1TIh8ALZux%2Bh9tqVsTT1VgmQof%2F3m%2FPP9MnbV%2F6uKtz9lIs19xgTcx40UcEk8ehL1kC6AWsOmrs8CTuVcqEUIP2d7f5Z%2FbvWBxQhi%2FU%2FwVjUxaMJsm%2BDvK5JHvllsYQd%2BTfCOXkfNDcniE13Ri6BukgXgNZb%2Bu%2FsAUlU6RZLgM%2B2zd4cbhteHtBW%2B9xgZpleogXIQY6X1%2FErlFcugVk18k6vTXlUQdITEGWAo18wuZ%2BLygY6pgF8Yet4hP1H76P3BqNiHCRAd%2BRVGRNagQg1odVO2x8zkxGjCFuHyKJc54yjsi1j%2Fae3JTqtM3xXnTcaAo7RhOgZULxe%2FJIzt4VWrXHZ9tLmuPmSCgYwNR%2Fy7650goTRqH37bmYFkLJHLABBV2b4OMimzjmr5NrgiL6ViJUsV1X%2BeXft2x8jxHm8pLM0da%2Bz5KaXDCMFBFw1Um44T5ujhlglSJVgHIQQ&X-Amz-Signature=ced5770794f8a61accf2cc72e24aeb185fe22ab8f24b74c0502031df11b56760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

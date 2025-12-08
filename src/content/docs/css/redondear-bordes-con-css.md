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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLF53AC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfcHy4GUbzTWqoQ7v%2FtN4HMjJTch3BScg1V8SMI8gFAiBy3cHwIGZueDdIvZh1A2fb0v4Ej6bHeT43rhik00COOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYtK9ZSQ8iC8M2VCKtwD%2BzHmOYs7ttbxCxHUtf%2FVAzSnLKetwxqXvBL2bTRl1jFRyc6WDssWX0J2Ryick02agJCJRGzQEMpTtF5i3tmV26LKdCEOEyBuR0Ey6paaRPv2B3yLX24kp9TRRLY5xrm%2BSL478n%2FV6XnTBBXdPtw4K3HimJsBNhirhh0wgdOu0MO5eDO2qHIUpuZSMkTC5wWEK0QGmLVLeWVdPL4l6i%2FolPPIF8fu%2F81jo7dOBM10yYxCSkDavmuOUixjc7LUKbHx7CiRhshkKgrgAfKMW%2Br5lv0UCXgEaPNNRH8vc8COys6w4seDvaOeaPGVP2b5qlYFDbMQ1lCrtaLCUSa5Z5eVqlMm%2BIyUSYWPQmbhw96hsrnvCEVqI8TtyLS9FpNgbpohoFb3EJBW52yNAM00Zpj3VQmxkxxOONGMmIPGSwpeEonVKfhvN3z4DcDC7%2F3ko3UIqqDo9VN1iVU7Y2tfr7opUeNi3l3FUKMOOtvZUkRsV7Iy3JlVPGmCni3f2p6ixy7dkeE5Y7aHF0L1pkmZ8BQMdANrRnQhD5Jn1mhvfxO%2FkJphE1E07p3Dr3CBIws4HAU7481WBdlT9SYQGAkSZRrCcyhJLpU0Jitw%2FfrAsMIpfVY7wcWjA6TeNz5k4csw8%2BzZyQY6pgHIKvHd4IQdTeiuk1nLC2oN8Se9V9k4snJy3gY5wBts%2BxDbQUIowsQKULOlafKJv8iVznPW7i4aQSowBqQsFOzuAPq09ZclBs3F%2BdfRgfdq1vCfGB0dSmNnXHqM8Cf2z7Uff%2BgA5oJSk0SyX9%2F5jBInAtFXXmwa5WceFMF1uHNhDzCUuSKSFr0jgIKyXkplVOfUtNWY9K3bI8EISlQhR8wwbDGSw4K%2F&X-Amz-Signature=28025566de3397957d84d81473a0b2928c7a17d67c860feff3583229bb02466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLF53AC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfcHy4GUbzTWqoQ7v%2FtN4HMjJTch3BScg1V8SMI8gFAiBy3cHwIGZueDdIvZh1A2fb0v4Ej6bHeT43rhik00COOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYtK9ZSQ8iC8M2VCKtwD%2BzHmOYs7ttbxCxHUtf%2FVAzSnLKetwxqXvBL2bTRl1jFRyc6WDssWX0J2Ryick02agJCJRGzQEMpTtF5i3tmV26LKdCEOEyBuR0Ey6paaRPv2B3yLX24kp9TRRLY5xrm%2BSL478n%2FV6XnTBBXdPtw4K3HimJsBNhirhh0wgdOu0MO5eDO2qHIUpuZSMkTC5wWEK0QGmLVLeWVdPL4l6i%2FolPPIF8fu%2F81jo7dOBM10yYxCSkDavmuOUixjc7LUKbHx7CiRhshkKgrgAfKMW%2Br5lv0UCXgEaPNNRH8vc8COys6w4seDvaOeaPGVP2b5qlYFDbMQ1lCrtaLCUSa5Z5eVqlMm%2BIyUSYWPQmbhw96hsrnvCEVqI8TtyLS9FpNgbpohoFb3EJBW52yNAM00Zpj3VQmxkxxOONGMmIPGSwpeEonVKfhvN3z4DcDC7%2F3ko3UIqqDo9VN1iVU7Y2tfr7opUeNi3l3FUKMOOtvZUkRsV7Iy3JlVPGmCni3f2p6ixy7dkeE5Y7aHF0L1pkmZ8BQMdANrRnQhD5Jn1mhvfxO%2FkJphE1E07p3Dr3CBIws4HAU7481WBdlT9SYQGAkSZRrCcyhJLpU0Jitw%2FfrAsMIpfVY7wcWjA6TeNz5k4csw8%2BzZyQY6pgHIKvHd4IQdTeiuk1nLC2oN8Se9V9k4snJy3gY5wBts%2BxDbQUIowsQKULOlafKJv8iVznPW7i4aQSowBqQsFOzuAPq09ZclBs3F%2BdfRgfdq1vCfGB0dSmNnXHqM8Cf2z7Uff%2BgA5oJSk0SyX9%2F5jBInAtFXXmwa5WceFMF1uHNhDzCUuSKSFr0jgIKyXkplVOfUtNWY9K3bI8EISlQhR8wwbDGSw4K%2F&X-Amz-Signature=7781bf7d47b0d8f38ada69a1d95b79300044b19247348c756ea0865fc8ba6192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

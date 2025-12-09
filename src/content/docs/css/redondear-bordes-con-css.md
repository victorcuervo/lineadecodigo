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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44DKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy9onmlUjq94kPrEmrDBLDqDzgpqyUKXKPM5M6v1SzfgIgKLev7xXBTlv4kjyISN75qR7UvlHmJDy3BPcOVbZDPlMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDmiP2znEFCIVf13CrcA0dAZVpldglzk%2B8k7a3NZwZlyucpAwh3RFGNK%2BH8f6zOkOsMp4CiUYclN0zPXvAZVmmUCS6lYo6YbYgbJMRe2JI8EIJ%2F07Mxw6Vie%2F%2Bhy5UKR3yB%2BwVzw0JUNqqC2%2BP3fVCvf0rwse1dsUzaGltg7Su58C%2B4Ac4r74AaTwzFweQ%2FGsIEossaAOddfmI9KzrROCzv0g0wNbyElv%2FDc77CmS%2Fqx8XAm2hl6VG0mlpTXW0yO6212U6kH1H6Z13s7OJqzO25EItPwkcclALD18XBv6RlOODKwR9YbMhEvai8gr2h%2F7%2F%2FaJifCuJrBS%2BObEUj3YHB87sb8VS7NOzZby4zFDuYS%2BP2gwp1dnzmwwCytY270LckmVlGl3%2Fh3lTpKyW8PN6MTBZKd68rQz4BkHefMvYyOvB169cDSbu9wXgaNvBxAYQEkyKWP6ughr8aa9%2BrFQ%2F3W3S6riV8mk4iRXwAdG0mTTDzi%2BcHelLkXU%2FCEyeWnKKivV90JnjEUAbToqzmxCU2efi5HeO9dBzSzWVCkGVmpDCeWKEMMXjpz6AzQYw0Ym5BEh1KQRtNUfMaaEl21uqtUXYda8cfuoYSuHhdB352S4ys3zAUso49jAhcKP2DWuDqDn%2BcJtcypD4sMM3l3skGOqUB9aY2hlEpFIXy%2BkiNnMi60EYqeAoB7V2g0MyzSKcSExt86JJGJGqzICw5l75Xun0a8aAes8%2FcgFP5IE9pnh5HhA5Jk341wWLP8B0UF0PGwfa1LzLhaaUWDxPsaLf6v4Qhto%2BaM0BWofiQEl0ngeW3q8EjTX%2FmgpybcPA%2FEaPhdCINBJIaMU88sf5xRCl7uGcyy9eM40Do9CGhWalubc48FlsPTMIr&X-Amz-Signature=b37543e08b0a9326227fdc366377d1da2f33623639bd448d37ccdfe75ddf3643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44DKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy9onmlUjq94kPrEmrDBLDqDzgpqyUKXKPM5M6v1SzfgIgKLev7xXBTlv4kjyISN75qR7UvlHmJDy3BPcOVbZDPlMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDmiP2znEFCIVf13CrcA0dAZVpldglzk%2B8k7a3NZwZlyucpAwh3RFGNK%2BH8f6zOkOsMp4CiUYclN0zPXvAZVmmUCS6lYo6YbYgbJMRe2JI8EIJ%2F07Mxw6Vie%2F%2Bhy5UKR3yB%2BwVzw0JUNqqC2%2BP3fVCvf0rwse1dsUzaGltg7Su58C%2B4Ac4r74AaTwzFweQ%2FGsIEossaAOddfmI9KzrROCzv0g0wNbyElv%2FDc77CmS%2Fqx8XAm2hl6VG0mlpTXW0yO6212U6kH1H6Z13s7OJqzO25EItPwkcclALD18XBv6RlOODKwR9YbMhEvai8gr2h%2F7%2F%2FaJifCuJrBS%2BObEUj3YHB87sb8VS7NOzZby4zFDuYS%2BP2gwp1dnzmwwCytY270LckmVlGl3%2Fh3lTpKyW8PN6MTBZKd68rQz4BkHefMvYyOvB169cDSbu9wXgaNvBxAYQEkyKWP6ughr8aa9%2BrFQ%2F3W3S6riV8mk4iRXwAdG0mTTDzi%2BcHelLkXU%2FCEyeWnKKivV90JnjEUAbToqzmxCU2efi5HeO9dBzSzWVCkGVmpDCeWKEMMXjpz6AzQYw0Ym5BEh1KQRtNUfMaaEl21uqtUXYda8cfuoYSuHhdB352S4ys3zAUso49jAhcKP2DWuDqDn%2BcJtcypD4sMM3l3skGOqUB9aY2hlEpFIXy%2BkiNnMi60EYqeAoB7V2g0MyzSKcSExt86JJGJGqzICw5l75Xun0a8aAes8%2FcgFP5IE9pnh5HhA5Jk341wWLP8B0UF0PGwfa1LzLhaaUWDxPsaLf6v4Qhto%2BaM0BWofiQEl0ngeW3q8EjTX%2FmgpybcPA%2FEaPhdCINBJIaMU88sf5xRCl7uGcyy9eM40Do9CGhWalubc48FlsPTMIr&X-Amz-Signature=0995ca12e45c62307ba2907ab6e4af029498c1a01cb2368abd064152c0662a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

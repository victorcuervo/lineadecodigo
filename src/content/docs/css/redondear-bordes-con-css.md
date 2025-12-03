---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W6E7XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDk4r01anCm7rNV%2FdoTBut9Hc8aNJ2k9qwbUzp20NUnkAiAVllgHIuO%2FDoptGfSJjfs2n2%2FS288xJuF6lXlS4zj41yr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMkVr4PhJ0BlVpuGyNKtwDew2tr%2F6TZksj1D5DsZuKLzH1FM7FLHkz%2FN9xoK%2FOPgcv4QlWm0WUAdkemvmpRN8KlZuSP8SddepQRcvdFlDaSjih8Qp0Dj4t62c7dkrvC3jBb7N6w%2BPKdWGMrKUCbwKI3ZnSo1FGC9XO1sNHVVDnhgIHLrwg5Qwyq5vweuKSUv3Ioybdp00M0mmaSxUyrmzLCHcLu4iFhF%2BzCwrNMykWWaVyzKk%2B%2FhkqrZOuCETdMd9w8gGrYYXOwbUPZyHL2E68T841ztwCI7t3rBm4TgoPRpkdfktNODpXaDNOSYnTNrQ04VZtGUTotCXS3w699qurl4bMPtBJuKFlPBizK7HgVHd5SMuLDx0ZVqHyTW6ztZ5s8ssA1xPxkORn9%2FV4jx4Nm1ckuNBb%2Bs%2BeTqdM0DNgAIV6FaoY%2BtawKgunSNWmX3JERlR%2F38gRK6dWDJA4hIRrGYb339SWBWwd2YsCYNoyHLrImVFnupEMfIp1BlZuII9QIMk5%2FltcuZToHuGHO5XoSKF3KPVdZrGQWCPCzmYoV3vLXBYSvuCeRMQNbAv1I%2Fb4GRSOstS2EqtHqSrRRfZOsyWsRE46fTMCvhHpGiUC%2BLFgYyQN33ycgdze4TH6i4jbYbdPvQVVBw%2B%2FyIMw1%2FjCyQY6pgH2Id%2B37AyK15Uhjh3q5AZX6X2rJIKPuPlPf9YV5ziWIF%2FMgsOv4VMIQuxqdsESxObuOmZtYToWRJHKPhTEXf4VJAoj3H8b8CqxSz0BINH1gxnz4dtFNJLbyZ5%2ByQad0SV%2BlR5ikoUEHibfOkJY1certoWOXhelfI4Rsa%2FuVSy865dgnTlMimBBevRTDKKRvEdwvYqr%2B12TfRpRSrbMYoEQJxipemDQ&X-Amz-Signature=bae3edfd4d154b7747d60b259e2bf5b27ffedc75ceb4afb93fa3484ed5b9643d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W6E7XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDk4r01anCm7rNV%2FdoTBut9Hc8aNJ2k9qwbUzp20NUnkAiAVllgHIuO%2FDoptGfSJjfs2n2%2FS288xJuF6lXlS4zj41yr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMkVr4PhJ0BlVpuGyNKtwDew2tr%2F6TZksj1D5DsZuKLzH1FM7FLHkz%2FN9xoK%2FOPgcv4QlWm0WUAdkemvmpRN8KlZuSP8SddepQRcvdFlDaSjih8Qp0Dj4t62c7dkrvC3jBb7N6w%2BPKdWGMrKUCbwKI3ZnSo1FGC9XO1sNHVVDnhgIHLrwg5Qwyq5vweuKSUv3Ioybdp00M0mmaSxUyrmzLCHcLu4iFhF%2BzCwrNMykWWaVyzKk%2B%2FhkqrZOuCETdMd9w8gGrYYXOwbUPZyHL2E68T841ztwCI7t3rBm4TgoPRpkdfktNODpXaDNOSYnTNrQ04VZtGUTotCXS3w699qurl4bMPtBJuKFlPBizK7HgVHd5SMuLDx0ZVqHyTW6ztZ5s8ssA1xPxkORn9%2FV4jx4Nm1ckuNBb%2Bs%2BeTqdM0DNgAIV6FaoY%2BtawKgunSNWmX3JERlR%2F38gRK6dWDJA4hIRrGYb339SWBWwd2YsCYNoyHLrImVFnupEMfIp1BlZuII9QIMk5%2FltcuZToHuGHO5XoSKF3KPVdZrGQWCPCzmYoV3vLXBYSvuCeRMQNbAv1I%2Fb4GRSOstS2EqtHqSrRRfZOsyWsRE46fTMCvhHpGiUC%2BLFgYyQN33ycgdze4TH6i4jbYbdPvQVVBw%2B%2FyIMw1%2FjCyQY6pgH2Id%2B37AyK15Uhjh3q5AZX6X2rJIKPuPlPf9YV5ziWIF%2FMgsOv4VMIQuxqdsESxObuOmZtYToWRJHKPhTEXf4VJAoj3H8b8CqxSz0BINH1gxnz4dtFNJLbyZ5%2ByQad0SV%2BlR5ikoUEHibfOkJY1certoWOXhelfI4Rsa%2FuVSy865dgnTlMimBBevRTDKKRvEdwvYqr%2B12TfRpRSrbMYoEQJxipemDQ&X-Amz-Signature=fcc7b5f40ecc360ca6a83cf8d97558e731515ac5de63313b3cfa8aa54668b208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

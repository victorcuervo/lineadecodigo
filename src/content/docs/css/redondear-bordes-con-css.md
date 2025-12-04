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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEYJF3N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFExP6%2Fs6%2FdtgctIcIZjW6XF0tWXhNm9mUnuswo3ba6GAiEA%2FtDx39w5GX4UawSBVTiS%2F11hIWL54Itj8KD9tDk9dUcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDG%2BfnFfP5VCB7zDSGCrcA2t25NBR%2Bdi38XpKhIvKbAnnV1C8J5SWWGyMkMw3BD0QX6ZYXtIK5V1O3kVw6aQY7uW9qx6sMAA8JDcIPIkzYQfM%2F9vSPSGaFqVbTQaVkIspE0CuTxAat8YLAvk5lvQJVsyt76DsykIhzpnc2NqODShaJtugjJNuvCx%2B7cIofEwBA5KUnGJ277klfi5zoihmJHIMe8OSrSfF9HH0m7AO%2F%2FDtVeEnUWGfH1dEEWc7tvLX%2F1OTshQ%2FZvyGkp%2BMRrFt1SnkdlTCaWeH4T3RfsgBNDMu4X2WwXoKAFU%2B3uIL0Tl1Ar4Ez3dbxOuLCbYuicWoTcMah5WzaChazSLFMa9vf6FWGcOSBVBj4VEjQV0ZC%2B%2FIG3YrWJkc5IETWfFn%2BipXyhHptfqw1Z1ZxKkENGLc%2FpHFdc3MjhJgwGL0ON%2Bp8bm%2FONJTvNoaZr06l1UWmrCrpGAPFMjoHYL%2FrWA%2FkRZS8ZZu447PkZf8h4G949%2BkBzuy65uy3dyesMjzfH2h%2BpjvawrNlOf%2BG4m%2Bp6TBUear75rSyhZ3SSvCsWcG9s7kafnVSqaQZhaRORj0AyJT7pfBF5gMXjX%2F0%2BYU0EJkkoLoSMuticGWvJaXtoEpnIlgHO61qJAtyNtEzDzctlLoML%2BuxMkGOqUBETCleO6BKm4%2ByhIblAafVlSh9CyXPoW7iETCOv0mYuRSiu5MCi6q15O85NzFzSCnXJ%2Fo5zyg6F4bgZR0upnRb3GqkTxPATLnx7SH6f6p4OBXEqxDzQbeJy0w8Xcj2U5ozygMpwLEKngFI4q4WlV8UAFHD1yyWzU2topNfYLAi8CWDliEtttA1VE%2BRuRDAS7aMhHNCQlQjv8yDwtJaYeDAvqKDlNr&X-Amz-Signature=b20eb5f7081dd200c79880df0c0cdf3ad3da96b2b0c1e47683f1f0aea9700845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEYJF3N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFExP6%2Fs6%2FdtgctIcIZjW6XF0tWXhNm9mUnuswo3ba6GAiEA%2FtDx39w5GX4UawSBVTiS%2F11hIWL54Itj8KD9tDk9dUcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDG%2BfnFfP5VCB7zDSGCrcA2t25NBR%2Bdi38XpKhIvKbAnnV1C8J5SWWGyMkMw3BD0QX6ZYXtIK5V1O3kVw6aQY7uW9qx6sMAA8JDcIPIkzYQfM%2F9vSPSGaFqVbTQaVkIspE0CuTxAat8YLAvk5lvQJVsyt76DsykIhzpnc2NqODShaJtugjJNuvCx%2B7cIofEwBA5KUnGJ277klfi5zoihmJHIMe8OSrSfF9HH0m7AO%2F%2FDtVeEnUWGfH1dEEWc7tvLX%2F1OTshQ%2FZvyGkp%2BMRrFt1SnkdlTCaWeH4T3RfsgBNDMu4X2WwXoKAFU%2B3uIL0Tl1Ar4Ez3dbxOuLCbYuicWoTcMah5WzaChazSLFMa9vf6FWGcOSBVBj4VEjQV0ZC%2B%2FIG3YrWJkc5IETWfFn%2BipXyhHptfqw1Z1ZxKkENGLc%2FpHFdc3MjhJgwGL0ON%2Bp8bm%2FONJTvNoaZr06l1UWmrCrpGAPFMjoHYL%2FrWA%2FkRZS8ZZu447PkZf8h4G949%2BkBzuy65uy3dyesMjzfH2h%2BpjvawrNlOf%2BG4m%2Bp6TBUear75rSyhZ3SSvCsWcG9s7kafnVSqaQZhaRORj0AyJT7pfBF5gMXjX%2F0%2BYU0EJkkoLoSMuticGWvJaXtoEpnIlgHO61qJAtyNtEzDzctlLoML%2BuxMkGOqUBETCleO6BKm4%2ByhIblAafVlSh9CyXPoW7iETCOv0mYuRSiu5MCi6q15O85NzFzSCnXJ%2Fo5zyg6F4bgZR0upnRb3GqkTxPATLnx7SH6f6p4OBXEqxDzQbeJy0w8Xcj2U5ozygMpwLEKngFI4q4WlV8UAFHD1yyWzU2topNfYLAi8CWDliEtttA1VE%2BRuRDAS7aMhHNCQlQjv8yDwtJaYeDAvqKDlNr&X-Amz-Signature=ce2094d1dcdb0f9a563e13b16b94f13ebb625b0419b86e7820e42a6ab51c53e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS3IFOS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2da9tW9aEJuW3O2c8qF0uMbHm4hlGr5OLsRXL7FmyswIgYhis4WsUfpM%2BdNtYO%2FGEZmevgMbfG%2BXU4Z0oXRIHvEcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDChHa3D4tLuPLQcxzSrcA5Ma2BdDtnZ28MSVGzVCrUdc49HjkpJmUpA939jEFSKmy3auxhOpftViOHMbX5hfbP1Kb2Fs6GJCZ7w4gJRbBXY%2Fh%2F9agBCKsXG63bCTWbaA5x%2BVIqluOa3vwBoJLv0o4Ek%2FYcOgBLz6kvaoMDooGsVg2qX7c30G2rSrQ1D03fauKnNV37KalTN%2FapuJQJg5cBSq9VA5NE7cQiQChpmkz%2Bp02mgzwHVeK5cML2dRtvdiGDxbRI0AnhKE02ZCjxX2yVQTGD18vd%2F%2Bb3sXtRDz5d%2Bnrst5aME3xRO8d%2BPp4noYR9SWwxvryqRywgzuXM3Dc6Uo65LwzbdB4VO4VDOxUExj0BunAATre1th%2FG22H%2FF%2FfHIMmYsO8RZUQd1Z7mTRDX2u4Va24yjgQDI1kjoUR0TdGrHhf35G1wIOmwUKyc6uTvt5Vh6puijYa0Zbd0ykFK6OaM%2F8civYZBE9gE92CSJc8KS4%2FTxM842%2Fe6Us3wBcpNnNwlmmxv%2BC8ICG6BMWVE20RguHZIPZTcJd0HO%2BMA93NmLtjAUQIJvV6VDY76HVc84%2B510jFOUJaur0Y7ABOoCuOvMXd4xw1N3GBwVbkRBFojrcHS3u%2FsGHZOsyZYYLwWvrKEXYwONCpIZXMIaNyMkGOqUBz34vRTQ7PpA%2B4kQPgm7AaXaMFy%2Fp3E7GYCcUibf6bOGhWIf5lGQJ46yvFJG5PXf4c5HO7RKk3MnCIxbtjNBUEBG9ihG%2FhdmpSF3CkOxR%2B9ADivirKp92NxV%2FCjjaI43jzZwkAcJzeKtGHpdtn%2BzcvXcaeEKw3Uj5Teg3KTD3RkPi2rvVaZb%2Bs5Wh08gFaOThGLSoCyU1zvFzEiCDBgNFUX7SGLG%2B&X-Amz-Signature=30f66e6879d58b877113ffabd501465763c848663a4dff8f556b7aab3eb9ac40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS3IFOS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2da9tW9aEJuW3O2c8qF0uMbHm4hlGr5OLsRXL7FmyswIgYhis4WsUfpM%2BdNtYO%2FGEZmevgMbfG%2BXU4Z0oXRIHvEcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDChHa3D4tLuPLQcxzSrcA5Ma2BdDtnZ28MSVGzVCrUdc49HjkpJmUpA939jEFSKmy3auxhOpftViOHMbX5hfbP1Kb2Fs6GJCZ7w4gJRbBXY%2Fh%2F9agBCKsXG63bCTWbaA5x%2BVIqluOa3vwBoJLv0o4Ek%2FYcOgBLz6kvaoMDooGsVg2qX7c30G2rSrQ1D03fauKnNV37KalTN%2FapuJQJg5cBSq9VA5NE7cQiQChpmkz%2Bp02mgzwHVeK5cML2dRtvdiGDxbRI0AnhKE02ZCjxX2yVQTGD18vd%2F%2Bb3sXtRDz5d%2Bnrst5aME3xRO8d%2BPp4noYR9SWwxvryqRywgzuXM3Dc6Uo65LwzbdB4VO4VDOxUExj0BunAATre1th%2FG22H%2FF%2FfHIMmYsO8RZUQd1Z7mTRDX2u4Va24yjgQDI1kjoUR0TdGrHhf35G1wIOmwUKyc6uTvt5Vh6puijYa0Zbd0ykFK6OaM%2F8civYZBE9gE92CSJc8KS4%2FTxM842%2Fe6Us3wBcpNnNwlmmxv%2BC8ICG6BMWVE20RguHZIPZTcJd0HO%2BMA93NmLtjAUQIJvV6VDY76HVc84%2B510jFOUJaur0Y7ABOoCuOvMXd4xw1N3GBwVbkRBFojrcHS3u%2FsGHZOsyZYYLwWvrKEXYwONCpIZXMIaNyMkGOqUBz34vRTQ7PpA%2B4kQPgm7AaXaMFy%2Fp3E7GYCcUibf6bOGhWIf5lGQJ46yvFJG5PXf4c5HO7RKk3MnCIxbtjNBUEBG9ihG%2FhdmpSF3CkOxR%2B9ADivirKp92NxV%2FCjjaI43jzZwkAcJzeKtGHpdtn%2BzcvXcaeEKw3Uj5Teg3KTD3RkPi2rvVaZb%2Bs5Wh08gFaOThGLSoCyU1zvFzEiCDBgNFUX7SGLG%2B&X-Amz-Signature=47aa7872738a0b9b3f3c7518b85d6cd07c5faeddaef97b5533a8e38b873d100b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

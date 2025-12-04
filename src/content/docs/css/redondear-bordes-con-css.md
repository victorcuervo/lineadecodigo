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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DLMXVG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIElzHvs3OtmhwY3TxfG1QJS2%2Fgu3BkS4I9q7%2FXUV0yRUAiEAt6SVfr8QBlQ7VJUiSjMvfGvKwjG%2FY9ppvUDcDssXmrsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJ9LnkeWcIE0vj6DQircA6NV2CbNY7w7QoNyBYN4GEGVNjSVcvFIBpXoJvzzKF6bVaQFSfbKOGm8uAJySQpg3bimwR%2Bfzhht21iE2a7iuV5%2B0zBSAaAgwYZCOsnBnHMqEglO0mTqzZYd3oyZXxy6EM3EjylBVffm%2FgjPxPooHl8dIrpr%2BgSSOWuJq0RJ5I2e7DrG0%2FnDyRP2BSKLLcABCEU%2BmzmHKr5vQeDHtr6FxqMCc%2Fe1ZvkFL6kXUjPNIJNuR9jRaV6i4XwhyoR7Bmp4N%2FiZVEmY9iPP5UL6wcg7dAZe1gMfEgcICmVuRYa%2F5KdcW6wvD7hIH2JO7U6tw%2F6azhQICmxhoYPfRDhruZi1vzIfblEwCOktQVXue1TCg9SUqS5TS92Ha545mANioZ97OCwIvuSTYT4cW%2Fte%2Fqz3eQAgvZdA9m1ai5U5SLYmo6b0xv5LBFVz6Nc14VeadNb8msptDTqC0dtXIhdKk%2F9wTG8hCGlN5J%2BPxUrHAOFRkQRay%2F9a4%2FDtJ%2Bi5Iy%2FcLiDCmJkedmZvgz1%2F6UmQk8vn56%2Bdd6tOnoqMhCtTlzYhQJYU4PhhrwcoaA6%2BshQ3%2BbsiopRGMYPdC47yrOeDTp4bWEh37aMbWSd3ld52TfsC%2BXCGenZEJ9a06Kl1cfv1MKPnxckGOqUBxXGTyWFuF4krdmM6%2FHMEMRXeR2vWG57CTqKbavU1pdyz6ENECQ8qVppGI4pRIRSLDOK50rGcgM4I0CoEzdkXJ1KZ1%2B6IVrKd8FXliACTK2TCDDVyCUwoOX4vBgmqp%2Fyni3xj18vzF9JM3lV2rKYpXTSkmacEi7IdleZshlM4zovS4FzpeTiS%2BKrpj920R4spanq2pnRL5lPKxOM%2BAS1nBre5CBRg&X-Amz-Signature=6bf28706dffeda9780705a416e44ba0ed907faeae6d9385ac76e561520d743a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DLMXVG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIElzHvs3OtmhwY3TxfG1QJS2%2Fgu3BkS4I9q7%2FXUV0yRUAiEAt6SVfr8QBlQ7VJUiSjMvfGvKwjG%2FY9ppvUDcDssXmrsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJ9LnkeWcIE0vj6DQircA6NV2CbNY7w7QoNyBYN4GEGVNjSVcvFIBpXoJvzzKF6bVaQFSfbKOGm8uAJySQpg3bimwR%2Bfzhht21iE2a7iuV5%2B0zBSAaAgwYZCOsnBnHMqEglO0mTqzZYd3oyZXxy6EM3EjylBVffm%2FgjPxPooHl8dIrpr%2BgSSOWuJq0RJ5I2e7DrG0%2FnDyRP2BSKLLcABCEU%2BmzmHKr5vQeDHtr6FxqMCc%2Fe1ZvkFL6kXUjPNIJNuR9jRaV6i4XwhyoR7Bmp4N%2FiZVEmY9iPP5UL6wcg7dAZe1gMfEgcICmVuRYa%2F5KdcW6wvD7hIH2JO7U6tw%2F6azhQICmxhoYPfRDhruZi1vzIfblEwCOktQVXue1TCg9SUqS5TS92Ha545mANioZ97OCwIvuSTYT4cW%2Fte%2Fqz3eQAgvZdA9m1ai5U5SLYmo6b0xv5LBFVz6Nc14VeadNb8msptDTqC0dtXIhdKk%2F9wTG8hCGlN5J%2BPxUrHAOFRkQRay%2F9a4%2FDtJ%2Bi5Iy%2FcLiDCmJkedmZvgz1%2F6UmQk8vn56%2Bdd6tOnoqMhCtTlzYhQJYU4PhhrwcoaA6%2BshQ3%2BbsiopRGMYPdC47yrOeDTp4bWEh37aMbWSd3ld52TfsC%2BXCGenZEJ9a06Kl1cfv1MKPnxckGOqUBxXGTyWFuF4krdmM6%2FHMEMRXeR2vWG57CTqKbavU1pdyz6ENECQ8qVppGI4pRIRSLDOK50rGcgM4I0CoEzdkXJ1KZ1%2B6IVrKd8FXliACTK2TCDDVyCUwoOX4vBgmqp%2Fyni3xj18vzF9JM3lV2rKYpXTSkmacEi7IdleZshlM4zovS4FzpeTiS%2BKrpj920R4spanq2pnRL5lPKxOM%2BAS1nBre5CBRg&X-Amz-Signature=12c33e46660cb2eefb38a423601213a17a46c4097eb1d69ee0c39507d7cca7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MM5FRNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcVVON9RBI48eDZGW8BlO%2BfeAQiWFnVm55P7kAVOOr0AiEA65l6Gi4Wb25YG1EI6GNg2C57btbeVdE9n3rBR9iuhOkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMUkJgO7nxEiSWM9vircA2sv1sCjSL6Qvhm7DRHmS3WujQCmttWTvzrNJPg%2FJSvA%2FnYRlIbTZ1kPsLPT2iq9dAdce%2F9lNwf5ll3T679H%2BeRCJykDD5xF45h2yEh584w6iQOGSSwV4gW%2BUX1QIURhKNHvvpuoXoee221pK4zcf5mtSjebVFxKnE363DpnK%2BvkJdYj9%2B8mwd%2B6Ymtj39be6uD4%2Fs9Lyar98kfzPPV4UOpPE2jDM8feCaPoos0Npo9xwKPcb5xG7So8iEiBX5PZE5Yp2rayJ7XDXRM%2BTgJqyuLyH6g%2F5sZaq6k%2FM9g%2Bxdv9MTEgQv20Byio8OcVbh0C6xrrA7PSiMo2%2BBy5iqGtAfPWCW%2FcWYIsz2u%2FZterRhkPVRUG0l%2BgPObG91Uiz5%2F0dnwxJ8HGHd%2BAtoZ3Yo6kiAOac6tRL0py1j%2FSNdTT1PaZAtxhM1aDZMqSf8X0ev%2BuYFHKxkoxtO9WMUI1PaXB1z6JiKG6CY6ifRFm%2BA32BC%2FTNdwOT8p0h5SOO3azCiwSwaulWoDmrUlep1xMr%2BJGeb0PUkL0o4t5wdpQNuAws1zhtVOXYTSI0f5pFCxfi2hNFQMdgzQ%2FEyvH4BoyrhTCTbStVLD3tDfmJoKWlKAJYqLjYkrw119aidY66BpgMI6risoGOqUB9ZY2CHuj5310mUahratDMCuiN4J8HoJMiug%2Bql7%2Bm7oz4I7Z6xQZYVLGlntPXUT3ELlmTMTwQeM%2Fnq0d6Ezo%2BM2LYilGwqPoWyXLettxw1IbboojYYgGjocAFqrrlkfNwZ1GBFvBWFKMugJWUaCa7EKF1GhTATNwhSxsyG5nhw%2FPNIoQ8f3n1Mp6TmWaboUSVzvI9sWzoV70HHDwcVuwIdj8laBK&X-Amz-Signature=f8a30fe7b0a0a2a4b17d4659d1413006ab5747226048af6b7fc7bb02f48a0f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MM5FRNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcVVON9RBI48eDZGW8BlO%2BfeAQiWFnVm55P7kAVOOr0AiEA65l6Gi4Wb25YG1EI6GNg2C57btbeVdE9n3rBR9iuhOkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMUkJgO7nxEiSWM9vircA2sv1sCjSL6Qvhm7DRHmS3WujQCmttWTvzrNJPg%2FJSvA%2FnYRlIbTZ1kPsLPT2iq9dAdce%2F9lNwf5ll3T679H%2BeRCJykDD5xF45h2yEh584w6iQOGSSwV4gW%2BUX1QIURhKNHvvpuoXoee221pK4zcf5mtSjebVFxKnE363DpnK%2BvkJdYj9%2B8mwd%2B6Ymtj39be6uD4%2Fs9Lyar98kfzPPV4UOpPE2jDM8feCaPoos0Npo9xwKPcb5xG7So8iEiBX5PZE5Yp2rayJ7XDXRM%2BTgJqyuLyH6g%2F5sZaq6k%2FM9g%2Bxdv9MTEgQv20Byio8OcVbh0C6xrrA7PSiMo2%2BBy5iqGtAfPWCW%2FcWYIsz2u%2FZterRhkPVRUG0l%2BgPObG91Uiz5%2F0dnwxJ8HGHd%2BAtoZ3Yo6kiAOac6tRL0py1j%2FSNdTT1PaZAtxhM1aDZMqSf8X0ev%2BuYFHKxkoxtO9WMUI1PaXB1z6JiKG6CY6ifRFm%2BA32BC%2FTNdwOT8p0h5SOO3azCiwSwaulWoDmrUlep1xMr%2BJGeb0PUkL0o4t5wdpQNuAws1zhtVOXYTSI0f5pFCxfi2hNFQMdgzQ%2FEyvH4BoyrhTCTbStVLD3tDfmJoKWlKAJYqLjYkrw119aidY66BpgMI6risoGOqUB9ZY2CHuj5310mUahratDMCuiN4J8HoJMiug%2Bql7%2Bm7oz4I7Z6xQZYVLGlntPXUT3ELlmTMTwQeM%2Fnq0d6Ezo%2BM2LYilGwqPoWyXLettxw1IbboojYYgGjocAFqrrlkfNwZ1GBFvBWFKMugJWUaCa7EKF1GhTATNwhSxsyG5nhw%2FPNIoQ8f3n1Mp6TmWaboUSVzvI9sWzoV70HHDwcVuwIdj8laBK&X-Amz-Signature=97c20eaa12a433b5a2bf5c6ad2269a34a78dd02e46f73740e653f63765cf14b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

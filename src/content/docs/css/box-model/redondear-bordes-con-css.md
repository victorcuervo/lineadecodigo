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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZVIUBW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCps9K4DrYDYzqv9LVBSZynHBfl7VYN%2FWE3UAFTjfY%2FOgIhAL6jzN6G4CXiuXpssj%2BsBoX2znYpeyBgeE%2Bmj3B3oA9MKv8DCHkQABoMNjM3NDIzMTgzODA1IgzLwdJoK3uauwjt9Ucq3AObyWbMWMcrvsAa5Tsbylg7T2uAkiw1VYcng3s2IslT1NsFwBB8%2BoR%2BjqkZmgU1ulQoLH3XKVnirfHJAp000yC%2B%2BGriZp46KKkqCa9NoHgBXdkvTEIazrNX8CVHQVgr3p4XNQibpTO5DMtFrHCOLbXTBqPjY8sHhmvAbVKE4SAK09O2nF10VxX8ZxAIKDSfBAGZDm47xI8ezzBh59YiozZP8Y9j6h%2Bdzz0gQ017imDnBdxfPIsiYWghhYpEX2GarTQGEQOkD6POe4VaVUz3qaUBcymXUyhD9KXE2m81SX3eyHxM1rNvUCmwAvStIm5KosbxwKF48DHly24mo2ishU5TBNUJXpDUbnM%2BhzIdemSlR%2FCz0vsqv53Sfg9V2bS8xB3GNsOConk95aEE4I5FdyVSxKY1X8naW4q86gvSRZSaV4RCv%2F5fAAHkhj4wPz15H19aWVANPhCwFVFOrxU72UmwrNSvIYF1pWPRtaBSNzG9rpF0FCSTyu75armNh7qzkw1mC5xR3IIRQEBxnMyhxI8iMCw0gj5GgZ26yzh7QecM%2FLhAYIt1JIOdC0g4Lz8uP50fIHO89mWO6Dwa6nNW7zva5xgzH3DJ3JVlOItNyS4%2FU0y4xBRRw2nBvbHkfTCguInKBjqkAetAPytWHzFnceGwVxRleWHAVCUxW1h%2Fy%2BK4lzo%2B%2F1lahU7d2GnIbPwodtChGrqrMybB3i%2B5VF9lBU6Kk24fb9kVZqdrt%2BimgJ9ejgJ80bpSF9AedeZ7wsL6oSODAoKzcto%2F%2FVX5hiBCcU%2Bby9RochaVj5jAjgc%2FzTuVoAGkFNrzj8nHrYSlF71ASKFf4bR6%2Bvy4icN5%2FZV%2BLj3ySTdA8%2Fk2x56B&X-Amz-Signature=6285c8eeed2987f38fdee9b8716a4d65f9f2bc930774cdddf6d595f11f833106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZVIUBW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCps9K4DrYDYzqv9LVBSZynHBfl7VYN%2FWE3UAFTjfY%2FOgIhAL6jzN6G4CXiuXpssj%2BsBoX2znYpeyBgeE%2Bmj3B3oA9MKv8DCHkQABoMNjM3NDIzMTgzODA1IgzLwdJoK3uauwjt9Ucq3AObyWbMWMcrvsAa5Tsbylg7T2uAkiw1VYcng3s2IslT1NsFwBB8%2BoR%2BjqkZmgU1ulQoLH3XKVnirfHJAp000yC%2B%2BGriZp46KKkqCa9NoHgBXdkvTEIazrNX8CVHQVgr3p4XNQibpTO5DMtFrHCOLbXTBqPjY8sHhmvAbVKE4SAK09O2nF10VxX8ZxAIKDSfBAGZDm47xI8ezzBh59YiozZP8Y9j6h%2Bdzz0gQ017imDnBdxfPIsiYWghhYpEX2GarTQGEQOkD6POe4VaVUz3qaUBcymXUyhD9KXE2m81SX3eyHxM1rNvUCmwAvStIm5KosbxwKF48DHly24mo2ishU5TBNUJXpDUbnM%2BhzIdemSlR%2FCz0vsqv53Sfg9V2bS8xB3GNsOConk95aEE4I5FdyVSxKY1X8naW4q86gvSRZSaV4RCv%2F5fAAHkhj4wPz15H19aWVANPhCwFVFOrxU72UmwrNSvIYF1pWPRtaBSNzG9rpF0FCSTyu75armNh7qzkw1mC5xR3IIRQEBxnMyhxI8iMCw0gj5GgZ26yzh7QecM%2FLhAYIt1JIOdC0g4Lz8uP50fIHO89mWO6Dwa6nNW7zva5xgzH3DJ3JVlOItNyS4%2FU0y4xBRRw2nBvbHkfTCguInKBjqkAetAPytWHzFnceGwVxRleWHAVCUxW1h%2Fy%2BK4lzo%2B%2F1lahU7d2GnIbPwodtChGrqrMybB3i%2B5VF9lBU6Kk24fb9kVZqdrt%2BimgJ9ejgJ80bpSF9AedeZ7wsL6oSODAoKzcto%2F%2FVX5hiBCcU%2Bby9RochaVj5jAjgc%2FzTuVoAGkFNrzj8nHrYSlF71ASKFf4bR6%2Bvy4icN5%2FZV%2BLj3ySTdA8%2Fk2x56B&X-Amz-Signature=f82709641dfaa731053caf10a4e5559e49d45b131b919b8672c9ad66455d20f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

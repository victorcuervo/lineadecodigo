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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ25PWLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDriaeanxVlGUpJVE9zJ7qiG6ZsA3WrBvzMnPML1dP9UQIhAOVLB520rgujBXGmm6OBrjTwyk%2FlQVthzs7miMam1G%2BBKv8DCHUQABoMNjM3NDIzMTgzODA1IgxjYRiVznXaYZFpxtoq3ANfNw96CER2RXuWLd0lvKV4pe6sZQwPlGtaylwLmNV7dVvr%2BArKgTfyxza9GTgNMJDN7ahOVp3VnMzwsrbtx7ZoHLAuNCL4ZIOkmtqfKNDhQCXa%2BR9VfmfkZZeKB0np%2BQLRdC33%2BaOwAbqk%2FYGrx4re46VZjr1eOHmlViYLgv1pLacOrIbJXIrGzVkesQT1T56KDgoApyP%2Fr%2FfEzwoqu%2Bt0YQoQHTzp3bsMyt9Mgkg70R8GwymoAsl56%2FF50KPcZWOTNAUEsM3yu9%2FaASSVLiUE7c%2Bi7Yh%2FJN3V272ti8O6HDtop9eigz3tgw4O5kP%2BiiRjuHqH2l4QMiZ2M7ZIcCcbhMNWeOOgO49fToKWHDJfZQg7t%2FqApVXTe95%2B5cv4ilpD%2BEwvyRKmDV5hrcXyCL%2B%2FPHTrnJ%2FKtXs0oO%2FXQZpjwcGCza4ELTmxB3Ahd0Q%2FDhFE9M%2BAlOm4cQ64YdYLpoxVApthGe9QMmO6VWCqshYDyybiEU9gfzL4Ip06LLkwbLxyIb5zj3qkdrj2QMgUAsyMXTpRnNzGJBynf2yq3TQRy1k%2FJRLlhc8GLPP45fxm7sKuhU463IHoQnOmp4az3Y9Fk2JP0OBQ3HsloI74RcqXfeJiicv%2BheEy2cYJRjCmzojKBjqkAQQcCIiHo3LvQbfq8qFUvcaLxzRs677HBFzutZCcMYFvcy07%2BIyW8QTEJ60IXD4HXscThJKSidQ5vsvxFipmALyGvaGbm9dMv0ti8FK%2FMEKx99msQth0MFNCuZ3KUclGq%2BcSHgrQ31GMUZ4MODbbMROJvPUvOxbDmaqWL3Zsu9Dp5CucmtcTtCfiX0mANNx%2B9YbM13UDRY4c65dqU1VWByU66dTl&X-Amz-Signature=515f3de5afe67f7682a94605fecf3e8dc82614e40d36557dc9e63ec16f71a5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ25PWLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDriaeanxVlGUpJVE9zJ7qiG6ZsA3WrBvzMnPML1dP9UQIhAOVLB520rgujBXGmm6OBrjTwyk%2FlQVthzs7miMam1G%2BBKv8DCHUQABoMNjM3NDIzMTgzODA1IgxjYRiVznXaYZFpxtoq3ANfNw96CER2RXuWLd0lvKV4pe6sZQwPlGtaylwLmNV7dVvr%2BArKgTfyxza9GTgNMJDN7ahOVp3VnMzwsrbtx7ZoHLAuNCL4ZIOkmtqfKNDhQCXa%2BR9VfmfkZZeKB0np%2BQLRdC33%2BaOwAbqk%2FYGrx4re46VZjr1eOHmlViYLgv1pLacOrIbJXIrGzVkesQT1T56KDgoApyP%2Fr%2FfEzwoqu%2Bt0YQoQHTzp3bsMyt9Mgkg70R8GwymoAsl56%2FF50KPcZWOTNAUEsM3yu9%2FaASSVLiUE7c%2Bi7Yh%2FJN3V272ti8O6HDtop9eigz3tgw4O5kP%2BiiRjuHqH2l4QMiZ2M7ZIcCcbhMNWeOOgO49fToKWHDJfZQg7t%2FqApVXTe95%2B5cv4ilpD%2BEwvyRKmDV5hrcXyCL%2B%2FPHTrnJ%2FKtXs0oO%2FXQZpjwcGCza4ELTmxB3Ahd0Q%2FDhFE9M%2BAlOm4cQ64YdYLpoxVApthGe9QMmO6VWCqshYDyybiEU9gfzL4Ip06LLkwbLxyIb5zj3qkdrj2QMgUAsyMXTpRnNzGJBynf2yq3TQRy1k%2FJRLlhc8GLPP45fxm7sKuhU463IHoQnOmp4az3Y9Fk2JP0OBQ3HsloI74RcqXfeJiicv%2BheEy2cYJRjCmzojKBjqkAQQcCIiHo3LvQbfq8qFUvcaLxzRs677HBFzutZCcMYFvcy07%2BIyW8QTEJ60IXD4HXscThJKSidQ5vsvxFipmALyGvaGbm9dMv0ti8FK%2FMEKx99msQth0MFNCuZ3KUclGq%2BcSHgrQ31GMUZ4MODbbMROJvPUvOxbDmaqWL3Zsu9Dp5CucmtcTtCfiX0mANNx%2B9YbM13UDRY4c65dqU1VWByU66dTl&X-Amz-Signature=ad5a7e9f77714d2cf5c291a1667129ae065f7787ce15a02b079304d217beea35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

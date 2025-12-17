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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQGLNUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtPc2NDw4NozOZr%2FXXzS7TpTvDh%2BdH0gAeUxlNH2lqZAiEA6NCbccC1Wo0f%2BjRgIvdx66innwbHB%2BqA2XOu3%2BYRnDsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLz9b8L38Y4eVJZMnSrcA6x5JxA2kww9jt8VA6Y%2FVXdIeiN%2B%2F0hdJKSylMnqY%2B7cKpqdceIrEejdMUsKS6zpn1GibE071OCTQzpo9IyqZnnivjVSpEjxOxKo6A5BE75rQK9zxUNl2zt7ROdfElQ58gXRgmwuRrFy7pd8FntjU3UWpJ6eALGJyZtrqMO%2FiA7GZSY3MK5V%2BBWmRQHhL0d1v3Jrr4losP8uZ%2FHrij6c6b2xs4a6L6UgWhWHC89pBb7IceAm5XHRHAA1cnTFhAfOFz4m4c9q1X3VV1Sc%2B0EC%2BI1OnJNnmbLbOcXNMANFRpqH5iW9XXUO0DuSmptJs%2FH%2BRJcN%2FUDwXz7Ro81p3wgk1woYm%2BLsz6%2BvVk7pWUCvvmI8iyJrRPP7nUxLPtD8NstqDhSALCaLTzQv08RsmaBjCzp0BWbdwG0W8sh1%2FVxlOOvNRS4rNNP2mVilEH65FLkxDHb85GI0eZjXfoIKTk1ROuPEvnmnwqHNpMc6jufAkUN60G7yeSog0MAVYWUBgr4wPUFwooxZNfo1X8yKL%2BHjm4A%2FNtJ6Dyzio4faJy9OdKWdFV%2Fkr0EIs%2BqrdWmSNKrJtolH48htnxY2Yf4THKVnp3uO3mc%2FgLdD5Gpnl3q27HJkI4fSEd3jVfi%2BGkKSMNadicoGOqUBwQ4MM1ecYXArG%2FHvCMDRFyZEa5M7JkUzAOrPwNe81dIXc2XRUbbeFUteiIGw%2FOBZYUCR14HnYpBwy%2BrfjRvS1DH9Nj6G91RAlwpQjx0aP2rV%2FJO4uWP%2BIgSTSt0N82myGjj%2F3sV7%2FdEmztnmvCabKVdP%2FDE7HCCYsX46zlHzsGIwi4jvgOPvsRFTn92mk7KXYzV%2FEp2hTqEoeW83bKV3%2Bvf%2FTBV3&X-Amz-Signature=bc7622ec0d87c7fab7f4d3c3040ad1fb840ddf637ee7bf7ca7925db9f73f8825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQGLNUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtPc2NDw4NozOZr%2FXXzS7TpTvDh%2BdH0gAeUxlNH2lqZAiEA6NCbccC1Wo0f%2BjRgIvdx66innwbHB%2BqA2XOu3%2BYRnDsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLz9b8L38Y4eVJZMnSrcA6x5JxA2kww9jt8VA6Y%2FVXdIeiN%2B%2F0hdJKSylMnqY%2B7cKpqdceIrEejdMUsKS6zpn1GibE071OCTQzpo9IyqZnnivjVSpEjxOxKo6A5BE75rQK9zxUNl2zt7ROdfElQ58gXRgmwuRrFy7pd8FntjU3UWpJ6eALGJyZtrqMO%2FiA7GZSY3MK5V%2BBWmRQHhL0d1v3Jrr4losP8uZ%2FHrij6c6b2xs4a6L6UgWhWHC89pBb7IceAm5XHRHAA1cnTFhAfOFz4m4c9q1X3VV1Sc%2B0EC%2BI1OnJNnmbLbOcXNMANFRpqH5iW9XXUO0DuSmptJs%2FH%2BRJcN%2FUDwXz7Ro81p3wgk1woYm%2BLsz6%2BvVk7pWUCvvmI8iyJrRPP7nUxLPtD8NstqDhSALCaLTzQv08RsmaBjCzp0BWbdwG0W8sh1%2FVxlOOvNRS4rNNP2mVilEH65FLkxDHb85GI0eZjXfoIKTk1ROuPEvnmnwqHNpMc6jufAkUN60G7yeSog0MAVYWUBgr4wPUFwooxZNfo1X8yKL%2BHjm4A%2FNtJ6Dyzio4faJy9OdKWdFV%2Fkr0EIs%2BqrdWmSNKrJtolH48htnxY2Yf4THKVnp3uO3mc%2FgLdD5Gpnl3q27HJkI4fSEd3jVfi%2BGkKSMNadicoGOqUBwQ4MM1ecYXArG%2FHvCMDRFyZEa5M7JkUzAOrPwNe81dIXc2XRUbbeFUteiIGw%2FOBZYUCR14HnYpBwy%2BrfjRvS1DH9Nj6G91RAlwpQjx0aP2rV%2FJO4uWP%2BIgSTSt0N82myGjj%2F3sV7%2FdEmztnmvCabKVdP%2FDE7HCCYsX46zlHzsGIwi4jvgOPvsRFTn92mk7KXYzV%2FEp2hTqEoeW83bKV3%2Bvf%2FTBV3&X-Amz-Signature=c27c09cd9e50f5664d6bb7c3f86480bbc33731a6835600146baa13b3719fd1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

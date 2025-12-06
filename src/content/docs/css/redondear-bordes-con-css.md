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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIID5EO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBssRbCRKqVJcvKnf7KK7gfWCQlGyF1FGo2ye0nJOVY8AiEAiw7I6zPS15ZljRnwppZ1MMsthry4hJTzz5VPdvcLursq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJkbp7ckcXfY1789USrcA3CjVK4CkzW8Em%2F%2FZWX2ChJK%2BNCsMBOE9fTVWQbASFLMH8y0PaTR8ImLopgybLDdKDKb8Z2Hq6javfKjmC2gP1xVuHO3V64gRVhfuSIvjegIp%2FrXdjeol0wojQ8WdZE3yM%2BN4bfxWtA5f884vpdx1udy3PoR%2FDXRRg27bmkciWcLZW%2Frf986DoLwN3%2BzUlos6O2QYY67ZgKib%2BFM12skK4tFzH8CFzBEym6i7Kj9am7uUAJM6CT7Ff%2B19puC%2BL6IA5b7C230m21xmdZ1C%2FVEydoGBZ%2BPTPrDN2tMwCp8bY%2FAq4xNtwqFSqEGEePDL9q6rwVR5V0oCobB%2Fs6a5MeKBO50G5qg2q565i1kTCVsKqDkCiLJbi5DKj%2BCx6bX3EYLf6O7x9B9CZae%2BviAcwA%2FS93LRcJ2nsHRTf%2BunDCbJKC%2FEJXsZ49ZilLY%2FnFT0Xyf4Ly9lzYD0R4Y4cu%2BZYsHwPIOqHn%2BavQ%2BX7m3qoEzoy58IaW2dCGk4UyDXHtEOpS8RyPgNCTbHndd%2FXS3wBO4EeEoxocZol0rfZwmgoYcB9AhxgQdC3s8ZnPhLS3g2cfqjql28hhlyS4RnLBN6xKsIk5TkDn66TDDZSMde63TQOyTKixyyMbaAXk5Dv1PMOSm0MkGOqUB1%2FhPTXwBvbkV1Qpa5c5NiiyJX%2F1UYPmNDSmQyaGn1eVo24IAsGVptYCuicoDtm%2FcTVcfZmR4FNUTRI5vsfS3k9ut4e83XFoQDzd4XrvT%2FGaGnwbevMnLRP3I8U4ot5Ncod0eCDEB7EhX5%2FIZvXKR2ob%2FklN49s5BpfRVFYqB%2F8CDdFO4%2FAnoUL%2B59i407IrkQFYgdJ3nqkQh2bu%2Bumz3zCXQCP0a&X-Amz-Signature=b8c52cb58143c8f7dd64049c4b860d3729e93bf838c44cb1c0c0e2545e0f6ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIID5EO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBssRbCRKqVJcvKnf7KK7gfWCQlGyF1FGo2ye0nJOVY8AiEAiw7I6zPS15ZljRnwppZ1MMsthry4hJTzz5VPdvcLursq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJkbp7ckcXfY1789USrcA3CjVK4CkzW8Em%2F%2FZWX2ChJK%2BNCsMBOE9fTVWQbASFLMH8y0PaTR8ImLopgybLDdKDKb8Z2Hq6javfKjmC2gP1xVuHO3V64gRVhfuSIvjegIp%2FrXdjeol0wojQ8WdZE3yM%2BN4bfxWtA5f884vpdx1udy3PoR%2FDXRRg27bmkciWcLZW%2Frf986DoLwN3%2BzUlos6O2QYY67ZgKib%2BFM12skK4tFzH8CFzBEym6i7Kj9am7uUAJM6CT7Ff%2B19puC%2BL6IA5b7C230m21xmdZ1C%2FVEydoGBZ%2BPTPrDN2tMwCp8bY%2FAq4xNtwqFSqEGEePDL9q6rwVR5V0oCobB%2Fs6a5MeKBO50G5qg2q565i1kTCVsKqDkCiLJbi5DKj%2BCx6bX3EYLf6O7x9B9CZae%2BviAcwA%2FS93LRcJ2nsHRTf%2BunDCbJKC%2FEJXsZ49ZilLY%2FnFT0Xyf4Ly9lzYD0R4Y4cu%2BZYsHwPIOqHn%2BavQ%2BX7m3qoEzoy58IaW2dCGk4UyDXHtEOpS8RyPgNCTbHndd%2FXS3wBO4EeEoxocZol0rfZwmgoYcB9AhxgQdC3s8ZnPhLS3g2cfqjql28hhlyS4RnLBN6xKsIk5TkDn66TDDZSMde63TQOyTKixyyMbaAXk5Dv1PMOSm0MkGOqUB1%2FhPTXwBvbkV1Qpa5c5NiiyJX%2F1UYPmNDSmQyaGn1eVo24IAsGVptYCuicoDtm%2FcTVcfZmR4FNUTRI5vsfS3k9ut4e83XFoQDzd4XrvT%2FGaGnwbevMnLRP3I8U4ot5Ncod0eCDEB7EhX5%2FIZvXKR2ob%2FklN49s5BpfRVFYqB%2F8CDdFO4%2FAnoUL%2B59i407IrkQFYgdJ3nqkQh2bu%2Bumz3zCXQCP0a&X-Amz-Signature=42bd78269e79a7645712b5da7d57307c4466755b9e69ecda2dc04c9fcef15aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

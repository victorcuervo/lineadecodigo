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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6VPFBW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHGLEfiue4ievnWs8QxA5Ab1BpeyXyMvh9IDR8ir%2FrAiEAwOsx%2FUJX1BD2LxLfMpGoYyZGYamrPRrb9kE%2Fbjn9OjMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5WEUOineDSUg0VrCrcA0DBEk%2B3mg4qFIE2fFSH1u9a3XZeE5F65QpHxWDreJeH6Fhv9AmOSRXvF826CxObJNRXvhIYVMs4cat4L5QGj1HtyV3x5MWkXxXNR7mf0olHC0p1bNg%2Br6Yx1yHBiDF%2FSLWR6n5nNB3RbGvVMYO3UpADgtHJUpfNuXwSfNFX7dFODsmW4eP9Yo1FIhFKlghr7ZfC7ra7si6Dunh9Bpu8eF%2Fh2CVDLipEGdADN34Vc9YiohqJgBKM3%2FJqDzcKjua6uP95jW%2F%2B%2FQlph9XbHwP5fbUXDmJbeyfAEYEYxyNWcPBuyXl27Z9TdWEFO3d%2BXrHTLndP%2BNAd7uS1VQj48NVkKlXZTWwfKNxJycGioHp57FTHFMobBqaXRpkmHXSBdLwKeyjXPCdMoqUKiu%2FtENmvti03IVjntQBftDoaMa4b8tzejPgR%2BuT2o79%2Bp2%2FeS3msvKdMUqNeoapkHIcTDu12DWRkXsmGXmjUPpUR2D%2FYrRupIBvh%2FFUYkBHr3TGN2u9lKicPyL2n%2FxnezJFNsq6Hj0QRnEiGijjnM90EHd8RyPas%2BpnGyCy6iW8ILgQjAFbQxyoQSR08AsMlk46odDQpvKXARwEVOFZPkd97cD0WKJAZdJyqI6%2BcgfIb8n31MKvR2ckGOqUBwcHGzmD6EF%2BC70XaD29vGP51%2BK41wFw%2BuJ3mY1vbrzZn3qoPA%2BMKFIwiuRHZafiQ%2BmuBSZgmhvGSh8XIhp7QO9mxhBdBIxbxwKXhtE9L6YR0WfyCGae%2F8E7AUrE53R0u16kktYiuuVG7ntS3qiXWeGL%2FoyzLmijIicBaQWSnu8t4G0dRHQXUfRQ6O0UXOc9sg69qjBLi3UpCcYNvh%2BrltuC25Xnp&X-Amz-Signature=77b8e258c844da4587e8fb33314e1ffd21a1ec27d90d0621c26a334f98df5f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6VPFBW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHGLEfiue4ievnWs8QxA5Ab1BpeyXyMvh9IDR8ir%2FrAiEAwOsx%2FUJX1BD2LxLfMpGoYyZGYamrPRrb9kE%2Fbjn9OjMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5WEUOineDSUg0VrCrcA0DBEk%2B3mg4qFIE2fFSH1u9a3XZeE5F65QpHxWDreJeH6Fhv9AmOSRXvF826CxObJNRXvhIYVMs4cat4L5QGj1HtyV3x5MWkXxXNR7mf0olHC0p1bNg%2Br6Yx1yHBiDF%2FSLWR6n5nNB3RbGvVMYO3UpADgtHJUpfNuXwSfNFX7dFODsmW4eP9Yo1FIhFKlghr7ZfC7ra7si6Dunh9Bpu8eF%2Fh2CVDLipEGdADN34Vc9YiohqJgBKM3%2FJqDzcKjua6uP95jW%2F%2B%2FQlph9XbHwP5fbUXDmJbeyfAEYEYxyNWcPBuyXl27Z9TdWEFO3d%2BXrHTLndP%2BNAd7uS1VQj48NVkKlXZTWwfKNxJycGioHp57FTHFMobBqaXRpkmHXSBdLwKeyjXPCdMoqUKiu%2FtENmvti03IVjntQBftDoaMa4b8tzejPgR%2BuT2o79%2Bp2%2FeS3msvKdMUqNeoapkHIcTDu12DWRkXsmGXmjUPpUR2D%2FYrRupIBvh%2FFUYkBHr3TGN2u9lKicPyL2n%2FxnezJFNsq6Hj0QRnEiGijjnM90EHd8RyPas%2BpnGyCy6iW8ILgQjAFbQxyoQSR08AsMlk46odDQpvKXARwEVOFZPkd97cD0WKJAZdJyqI6%2BcgfIb8n31MKvR2ckGOqUBwcHGzmD6EF%2BC70XaD29vGP51%2BK41wFw%2BuJ3mY1vbrzZn3qoPA%2BMKFIwiuRHZafiQ%2BmuBSZgmhvGSh8XIhp7QO9mxhBdBIxbxwKXhtE9L6YR0WfyCGae%2F8E7AUrE53R0u16kktYiuuVG7ntS3qiXWeGL%2FoyzLmijIicBaQWSnu8t4G0dRHQXUfRQ6O0UXOc9sg69qjBLi3UpCcYNvh%2BrltuC25Xnp&X-Amz-Signature=74954dd35b41583564443dc3ff35f4a720493e8f4d843a133da80dad193d57e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

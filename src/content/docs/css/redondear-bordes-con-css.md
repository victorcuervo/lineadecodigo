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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IFVGFV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwZ%2BzdH86HxDHhtDVdEb%2BLdV%2BU4ZOTJAvcTF%2Fmeav9xgIgHVum%2FxIVHbl%2BGJ1n7iSSAemGyByI8HmDlPIQMvFwgjgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1xXFeTA8uodL5F0yrcA%2BCvcth1z7%2BiWMxLy7zrCA0u0O0tavbD3uEgsemEINB1uTfjKsdo1BpVKNzGX7kpCJRGu2BL%2FhlwYbQqnpOji%2FMR0C5SB4aEjMEzNIEANIqJR9VQTT1%2BRad1AjgW3w%2F3EkbRPIHwTawaeFXWUQrjzo%2Bp%2FaXYFw8quzla6khm7BBfe%2BcGgXabOiLIVSuWq3S8ww3kf1%2FBuCRFe0OMJ%2BzQF0QebeG8Uh40K9eHl6E99k4OiJBFUFeMDxilX1CkI4rJ67YkHEhfRHsXXZpNkAc3N3wRg%2BRe88qWqegLtHKEB250DccJfHa86ppIiae77Z9NuyEYOaKGS69NwV247kUCXKHWD9yRyVDP8fhlzNXO3aDIyRpbBddxJNz0asXARg7RPQXpQQWnzuAKLxL7F2lUCLwniHqDzExdvT9%2BWl51ueycZ7UPEKhXkNZLee4En437P9zxwyzzj2b8PfCP6Pkt8xw9yX%2Bkj%2FKXc6YMCYTUTxsjKaV%2BiWFx4vzDf%2F7fBtnHHDhatupK0nLa61t4qAgXuGyHhaGw%2FozM%2BOFbpHnHrtqtm28u47q2BqI0ISWaVbdJp8ZxlD3GioOXRtAe6v0ttqbqZfBFX7q6agv8%2BNUeYVh6Q5lL5IsY0MSvGAdGMLPR2MkGOqUB50xonqBspFXI95kRPByE0G7lO6Xxd54WDTSHpHALV5zq6OFCIDi4lbx7kP7gkTde%2FKTtAnOtcE2VoMBRhzUso0NCVyLrmVdcCCdoUR0h1bW0fTDFqAIZATGyRuy5SwBuO51negaHlz1RwVwcCKBpk8Q6%2FS%2FYQCrvjLCEhYmh10fvnts56dQH7bU9EInjp3b4IzudZQt8BqonG5Nw0xyFG4PZNGsF&X-Amz-Signature=f791052fe2ba8ac566734e59f5947addf000a5c426786c258b788c666b5a7198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IFVGFV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwZ%2BzdH86HxDHhtDVdEb%2BLdV%2BU4ZOTJAvcTF%2Fmeav9xgIgHVum%2FxIVHbl%2BGJ1n7iSSAemGyByI8HmDlPIQMvFwgjgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1xXFeTA8uodL5F0yrcA%2BCvcth1z7%2BiWMxLy7zrCA0u0O0tavbD3uEgsemEINB1uTfjKsdo1BpVKNzGX7kpCJRGu2BL%2FhlwYbQqnpOji%2FMR0C5SB4aEjMEzNIEANIqJR9VQTT1%2BRad1AjgW3w%2F3EkbRPIHwTawaeFXWUQrjzo%2Bp%2FaXYFw8quzla6khm7BBfe%2BcGgXabOiLIVSuWq3S8ww3kf1%2FBuCRFe0OMJ%2BzQF0QebeG8Uh40K9eHl6E99k4OiJBFUFeMDxilX1CkI4rJ67YkHEhfRHsXXZpNkAc3N3wRg%2BRe88qWqegLtHKEB250DccJfHa86ppIiae77Z9NuyEYOaKGS69NwV247kUCXKHWD9yRyVDP8fhlzNXO3aDIyRpbBddxJNz0asXARg7RPQXpQQWnzuAKLxL7F2lUCLwniHqDzExdvT9%2BWl51ueycZ7UPEKhXkNZLee4En437P9zxwyzzj2b8PfCP6Pkt8xw9yX%2Bkj%2FKXc6YMCYTUTxsjKaV%2BiWFx4vzDf%2F7fBtnHHDhatupK0nLa61t4qAgXuGyHhaGw%2FozM%2BOFbpHnHrtqtm28u47q2BqI0ISWaVbdJp8ZxlD3GioOXRtAe6v0ttqbqZfBFX7q6agv8%2BNUeYVh6Q5lL5IsY0MSvGAdGMLPR2MkGOqUB50xonqBspFXI95kRPByE0G7lO6Xxd54WDTSHpHALV5zq6OFCIDi4lbx7kP7gkTde%2FKTtAnOtcE2VoMBRhzUso0NCVyLrmVdcCCdoUR0h1bW0fTDFqAIZATGyRuy5SwBuO51negaHlz1RwVwcCKBpk8Q6%2FS%2FYQCrvjLCEhYmh10fvnts56dQH7bU9EInjp3b4IzudZQt8BqonG5Nw0xyFG4PZNGsF&X-Amz-Signature=4be400be28956c02dcee41131b329cdd61ec6e629891d44636a618abae298943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

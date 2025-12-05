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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6IF6LP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP7hqjdhhS6dFiDS%2FhJfb9xqZ49QnFaN3sxeVtiJ3Y7AiA6QK8Tth5SvsljoPs4%2FaxCF5zT4U6%2B5rbygTvn8oTdpir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrCwecHoU%2BiV2l%2BslKtwDEkl%2FiXKxHWakV%2BIUiN8VHlfQNebC%2BDvkBvG2vYyM7HdfdKoxbY1qw4TFxszO8%2Bqe7NqeamLbPwfNZT5Z3dIF9KyHy9uEDTl2PWBKLbZ8W6ZMGkkA%2BxOA5lCHx9QPmXCOJsUb%2BAHopMehX3SkfKdLbLRnPIfFN7yoe4i%2BvoiqPPI7B9%2BeSxiUlDwVZLgtdTKhTTSXmkLeSv553tLg9qMYow6lV6nh1ULAJGYuPsCAeRjKLzoKSUOB1Qt9vk7pcF4xnJSf%2FeWn88HJSFuB96qePuO5zv%2BK%2FJtTiuV2SZPaU8Sy%2F85q9WWFX9ydLNDsRwaSwmWCh%2BsT84cG%2FysQMBUdKPFQPcknBmoTjcK%2BqlxnhoRamlLaSLH1s1QTxSEKekTCiBAOh%2F7aFZisDav1HHsaSxPaRAOQyqEeP4V7O1zRV1wVQQVQXq3Ab6Yrgv3E0otyuJFKmHxGpM5OmF6eSGbFxK3wcKsYTyjP9I3pqys8RBKe%2FPQ%2FBdL1prkBDwVOLaENXxlKoWXNv5KCnqMfivSIl7YNwe9b6j6sPm8hKDVGKzarI0n5Cmg3Fs2rCFD8f68JwygB8MQOvRSsQK56mgSRux1I8FtouLIdgZJE9q4RPYHIki85LFan%2B313T%2BUwn4zIyQY6pgE30YzW47k4V9t1o%2FuvJqGcNyWgEPCnY1Gem%2BGn1ANBDb0oFnzQ9eTDpaOKWUTQ9h5RcK4Qygny2inKe6P5s1HYd5bjHcWPIy18p5Rm6Ktbt56z95uwXJo0u7dHq32xt6q349rH6CJ%2B%2FL5MqVOPkOeSJon1nhHS9KO2evTrft7obRCwiXYC8W2zLqX7JEJnRDL9isfCPIFsJA9jxiFU%2BVjr8NzoK7UI&X-Amz-Signature=a861fc8729c06a8511f6372ea83fa2fd5828a271ebc3313bc0d732b4b1c0f0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6IF6LP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP7hqjdhhS6dFiDS%2FhJfb9xqZ49QnFaN3sxeVtiJ3Y7AiA6QK8Tth5SvsljoPs4%2FaxCF5zT4U6%2B5rbygTvn8oTdpir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrCwecHoU%2BiV2l%2BslKtwDEkl%2FiXKxHWakV%2BIUiN8VHlfQNebC%2BDvkBvG2vYyM7HdfdKoxbY1qw4TFxszO8%2Bqe7NqeamLbPwfNZT5Z3dIF9KyHy9uEDTl2PWBKLbZ8W6ZMGkkA%2BxOA5lCHx9QPmXCOJsUb%2BAHopMehX3SkfKdLbLRnPIfFN7yoe4i%2BvoiqPPI7B9%2BeSxiUlDwVZLgtdTKhTTSXmkLeSv553tLg9qMYow6lV6nh1ULAJGYuPsCAeRjKLzoKSUOB1Qt9vk7pcF4xnJSf%2FeWn88HJSFuB96qePuO5zv%2BK%2FJtTiuV2SZPaU8Sy%2F85q9WWFX9ydLNDsRwaSwmWCh%2BsT84cG%2FysQMBUdKPFQPcknBmoTjcK%2BqlxnhoRamlLaSLH1s1QTxSEKekTCiBAOh%2F7aFZisDav1HHsaSxPaRAOQyqEeP4V7O1zRV1wVQQVQXq3Ab6Yrgv3E0otyuJFKmHxGpM5OmF6eSGbFxK3wcKsYTyjP9I3pqys8RBKe%2FPQ%2FBdL1prkBDwVOLaENXxlKoWXNv5KCnqMfivSIl7YNwe9b6j6sPm8hKDVGKzarI0n5Cmg3Fs2rCFD8f68JwygB8MQOvRSsQK56mgSRux1I8FtouLIdgZJE9q4RPYHIki85LFan%2B313T%2BUwn4zIyQY6pgE30YzW47k4V9t1o%2FuvJqGcNyWgEPCnY1Gem%2BGn1ANBDb0oFnzQ9eTDpaOKWUTQ9h5RcK4Qygny2inKe6P5s1HYd5bjHcWPIy18p5Rm6Ktbt56z95uwXJo0u7dHq32xt6q349rH6CJ%2B%2FL5MqVOPkOeSJon1nhHS9KO2evTrft7obRCwiXYC8W2zLqX7JEJnRDL9isfCPIFsJA9jxiFU%2BVjr8NzoK7UI&X-Amz-Signature=cc4d44fde13cb47ca61678c0f2976d51ccb3ab975af3c8e87c315353c9132981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

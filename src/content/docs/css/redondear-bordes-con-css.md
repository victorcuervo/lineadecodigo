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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNQSZMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6xFBdN5tBpDWyrk9zmkRljpWcDDWMKreRUDuW%2BA3lwAiAByVHISpoF5lC4tzlqEk4un5FexPywsYa6ISeHk2u9XSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVW%2FqAHlwhvrxQmhTKtwDzsM%2B9BLgHhwU1Q27ARyrqFNH8Uij%2FGYqiHe2jXEF2kvx14taoT4gm6po5RM%2FmXzy4ysjlDBVN20egDPJNZIU1D%2BNPxYp3qtFfcN7BpVR4uj2YRZOs8dXoESZLsLWInzkbSLQyLga2MXbCWNjDgjwQr0lX7KV7gHkMzvS8dGN4lShndL3qWXu16ozIynVD1OEJiEALzoGVQH%2F3UHuXgPZEOOrPLFCnQl3zZpBYNGsqxlROq16VPJVu6aZ1HkT2QC%2B4ZTR4kTy6%2FhRh09tFISMt3QJmaIVJUj42ptw9Im38bMgt7jz4Casc%2BkgisLkex8u41ZDr2KuSdIi0%2Fip76GTJgJ0pP4hm4fekBQswzBddhqyA2IzTAxPBynabzKhMOzFzDDmwoRaG4xkKegS9otQF5ZjxF%2FNuKJNByMOroxpaz3ihc6cquGPxjzbvCH1R2NolacCkAAuInRUjcSEEDdUAjO5AJ70WU%2FNlv1sY1cT0pUhcbxDa48%2Bn4V1DZaCN%2BqPjDpAkrHbgbzPi9SWLMCFT71Pu%2FwfUdHW1hZ374kVAhmQ3IlN%2BrQnNgIPIicX8Lqzl0CTsrGfaB7pUl6jhSvZ3MMOV5mTaeZ1Jv64YUAcFbUHtWolnVuzFjVjDnIwmMjKyQY6pgFJ9MH%2BlUWN0aWs%2FNdGMXDcEn%2FCbPrnI5Mmqi59DvgqlbIVdHQrJIa0qMCVGh0L%2B7ODmGkQbIywiM0Iuy%2FXSgM6kv92VU83cLVTphpdodYgq7Utq39tPY%2BNrz5ZG5x95q1GbrU1wLSwtcI9h1N3DeASfEn3J7enTCvzeC8Np22uyXrK33hGBujN0mFl6pBJwQaeqOEjQqquP2e4JYRtr4pQi3vE%2FXRP&X-Amz-Signature=c23c4a954b85c6da15e46d54f250079417feb0fb6428e738aeb4fa1d0ef0f0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNQSZMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6xFBdN5tBpDWyrk9zmkRljpWcDDWMKreRUDuW%2BA3lwAiAByVHISpoF5lC4tzlqEk4un5FexPywsYa6ISeHk2u9XSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVW%2FqAHlwhvrxQmhTKtwDzsM%2B9BLgHhwU1Q27ARyrqFNH8Uij%2FGYqiHe2jXEF2kvx14taoT4gm6po5RM%2FmXzy4ysjlDBVN20egDPJNZIU1D%2BNPxYp3qtFfcN7BpVR4uj2YRZOs8dXoESZLsLWInzkbSLQyLga2MXbCWNjDgjwQr0lX7KV7gHkMzvS8dGN4lShndL3qWXu16ozIynVD1OEJiEALzoGVQH%2F3UHuXgPZEOOrPLFCnQl3zZpBYNGsqxlROq16VPJVu6aZ1HkT2QC%2B4ZTR4kTy6%2FhRh09tFISMt3QJmaIVJUj42ptw9Im38bMgt7jz4Casc%2BkgisLkex8u41ZDr2KuSdIi0%2Fip76GTJgJ0pP4hm4fekBQswzBddhqyA2IzTAxPBynabzKhMOzFzDDmwoRaG4xkKegS9otQF5ZjxF%2FNuKJNByMOroxpaz3ihc6cquGPxjzbvCH1R2NolacCkAAuInRUjcSEEDdUAjO5AJ70WU%2FNlv1sY1cT0pUhcbxDa48%2Bn4V1DZaCN%2BqPjDpAkrHbgbzPi9SWLMCFT71Pu%2FwfUdHW1hZ374kVAhmQ3IlN%2BrQnNgIPIicX8Lqzl0CTsrGfaB7pUl6jhSvZ3MMOV5mTaeZ1Jv64YUAcFbUHtWolnVuzFjVjDnIwmMjKyQY6pgFJ9MH%2BlUWN0aWs%2FNdGMXDcEn%2FCbPrnI5Mmqi59DvgqlbIVdHQrJIa0qMCVGh0L%2B7ODmGkQbIywiM0Iuy%2FXSgM6kv92VU83cLVTphpdodYgq7Utq39tPY%2BNrz5ZG5x95q1GbrU1wLSwtcI9h1N3DeASfEn3J7enTCvzeC8Np22uyXrK33hGBujN0mFl6pBJwQaeqOEjQqquP2e4JYRtr4pQi3vE%2FXRP&X-Amz-Signature=2e6dd864bca3fc1ea039a8c364d69f09ff3bf495e5ffdc635ebe79d0b0c2dc06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

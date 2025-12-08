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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PSL5RO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQkbInhkGxETP61Ba4RKgyFmtWsUjtR3%2FE4O%2FmMMJJVQIgObjCm%2FkvZqn0pQnphLSHwf554aiAL5ak3CVpgLW1LmkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMJOz8wpUoeuVZ71yrcAzeeKyExbtYqiwAQn61a7DfI4RoE5CKOFbulq%2FRO%2BOsSK1bI%2FwyYMskuh%2B8sTuHL6iDsuCG7aOumMCq5PJ1M6hPgOyKb24aqaOzlxSO0fvznuZwSs1MqY7IoZJX5BKWxBo3qxCDiqRiS1Kj89OVCzgNRsYOHJFGkgzuejeXBTh%2BdxLnXgdxg9c58iZpwcZhrGxMwbfsyxV8HEbjKHEh5tquAmSz5t1CP0xWtcB4Eg4JRKalWSKxQVUGSo0O%2FAmFVpHdAP2NCZk%2BnO9rcw8PuCPz2rs%2BuS7jZrw%2FXcwRTCn3zpyBD8%2BoyzDoWUQKSwG%2FMr3YCsIw15oJWeZ82LNZC5bat1YjLxRk0oYhHb%2F1rW0%2F79oOifrv6DNXL3JbkWxI%2BoQ13Lb7Uxcl43uqidNNnTWCxKaFGKnTuMtxJ8T2qQre3Wd8zh4hwZl4y4UtesiUvHvucVNAvRA2%2F9xrRkXGEOoFaBfJuEGhVWV2GZiPQd4t%2BM%2B6n0%2BIxgMBs0mhelKRnpco4ww9Y97XH25XEqsbbYu%2B%2FJbyikYWGk9YYks9BNYUbhHm2m3aiZa38kL%2Fct5LUMgmZyI4xG1wKhD7sITy5uu%2FjwwUt%2FNNeePL%2BUD0eVCJUBGN9sFqdtuPHEHr6MMu02ckGOqUBJUs5sVP%2FZlSWUnT%2BsJGtU1sjdnPVHeAl4BKYal0bwiV9OuRZ6UkrYg8bO57VN16SpGS0ex7pGG25wwHGzPF9Xhs7iwnT%2FowP%2BQL09esfs4WhYKcgUYuBFYmTrIVX2aNkLbmLYpccbXBpAFbdQ0c0vS82f2fHuHg66zizXYtNr1iYckYkiyRggcvRPPyeKdmv3fgvoKEwmE64XiLt5nOAP4pb2S6k&X-Amz-Signature=51e65376288965655d066a0b75b6c8749af6907082d5536090a07b39bc4c4c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PSL5RO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQkbInhkGxETP61Ba4RKgyFmtWsUjtR3%2FE4O%2FmMMJJVQIgObjCm%2FkvZqn0pQnphLSHwf554aiAL5ak3CVpgLW1LmkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMJOz8wpUoeuVZ71yrcAzeeKyExbtYqiwAQn61a7DfI4RoE5CKOFbulq%2FRO%2BOsSK1bI%2FwyYMskuh%2B8sTuHL6iDsuCG7aOumMCq5PJ1M6hPgOyKb24aqaOzlxSO0fvznuZwSs1MqY7IoZJX5BKWxBo3qxCDiqRiS1Kj89OVCzgNRsYOHJFGkgzuejeXBTh%2BdxLnXgdxg9c58iZpwcZhrGxMwbfsyxV8HEbjKHEh5tquAmSz5t1CP0xWtcB4Eg4JRKalWSKxQVUGSo0O%2FAmFVpHdAP2NCZk%2BnO9rcw8PuCPz2rs%2BuS7jZrw%2FXcwRTCn3zpyBD8%2BoyzDoWUQKSwG%2FMr3YCsIw15oJWeZ82LNZC5bat1YjLxRk0oYhHb%2F1rW0%2F79oOifrv6DNXL3JbkWxI%2BoQ13Lb7Uxcl43uqidNNnTWCxKaFGKnTuMtxJ8T2qQre3Wd8zh4hwZl4y4UtesiUvHvucVNAvRA2%2F9xrRkXGEOoFaBfJuEGhVWV2GZiPQd4t%2BM%2B6n0%2BIxgMBs0mhelKRnpco4ww9Y97XH25XEqsbbYu%2B%2FJbyikYWGk9YYks9BNYUbhHm2m3aiZa38kL%2Fct5LUMgmZyI4xG1wKhD7sITy5uu%2FjwwUt%2FNNeePL%2BUD0eVCJUBGN9sFqdtuPHEHr6MMu02ckGOqUBJUs5sVP%2FZlSWUnT%2BsJGtU1sjdnPVHeAl4BKYal0bwiV9OuRZ6UkrYg8bO57VN16SpGS0ex7pGG25wwHGzPF9Xhs7iwnT%2FowP%2BQL09esfs4WhYKcgUYuBFYmTrIVX2aNkLbmLYpccbXBpAFbdQ0c0vS82f2fHuHg66zizXYtNr1iYckYkiyRggcvRPPyeKdmv3fgvoKEwmE64XiLt5nOAP4pb2S6k&X-Amz-Signature=629aa683c1227996c8815a0b4c093928e55c506f8bdfded481ed1ca33c5bd5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BKDPE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEckytwghHzA6v5SUPyTu6wZbnvduRfi5wyEVVzDeYFAiB8EEMOfwHeZbwDv3cewbf9N%2FlC%2FEtmEXH53JhuRUOiTSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYehtpZ8pnfOu%2BbeGKtwDcmXNo2Mtpe%2FpVMZrdUaNUB2VJcIy85%2Bt%2B46POUQbWBzHxcSVL9o6NUj6lGVEHzbmp9IRx%2F58pKtZ%2FZE8bNDtXfsiVxMRVyEz51P3VD%2FxDYc1N6%2BySlen6rHfrtLjkkjzWEFL1RqxN6hf8%2FB1cfA6bmO5%2BLSHzSFBgxrSr3pyZpdnWVjTK3QF%2FbfG5295IDUIPWwv%2F0qktYugGCrtPHLittp%2FsZ34uR2tGPpv9uPVRRHoVRC7k1QnggYekS%2FksCS3BU0OxL6by0RIxo9w1mbSm2N%2Bth0KjGJO6Qiynt327k1gN9YeZW3X%2FruXYJDi4ls4KP3Jf9NGFAqUXCHpjI974PwIv7Jpjx7CH4U3Ga1%2FaOzAcPOXFMIQm8PvNG7gYPpgwqhbgwMnW7DRB%2Bli7DwH8enIRTBbjfaGmq2defAn4hmAp2ZYkgajLKurTiZIyKHC4hQYzlgeTDmtS0s5Qk8F0Ou7B4V8g8%2BojutDtE0ECYUATIy6j31pmuyU4%2FqlsdHHFelETwyIXi9fsPEOn3bWyyeHt6mJkJVmp3NVWvc9CLV47CUjvP0ko3EJgwc8%2BODbKE3uvazqNeMaovcJJ8g6i53az4QJ5irjq%2BsZUj1nTJOyIJu1HyahEHfi9zcw9c2IygY6pgGIELgheFgsTwUdMVOfVKtxixcMG5sJ2y%2BEFXdEf9gRQ2zTvNTvNykTxz8ad%2FDmmFVhXE3%2FBdtYNdb3YK2Y55XweoiYFvtR6sJtdshMixAU2A%2F%2BaGWqRCk47NgUxTihO4HcSACb0f7jZJjmk33IL1OB2g9sOKiDAeu%2FQXroPJYHrUsW7dJop94mkh9fgMxd13sn2gyeiAaG5M56KNOrv793gyjyw%2F3b&X-Amz-Signature=2bbee3c21dd6d840f85f25b83c987ed7eb84a5bb4a545021a7ecb55baa545a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BKDPE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEckytwghHzA6v5SUPyTu6wZbnvduRfi5wyEVVzDeYFAiB8EEMOfwHeZbwDv3cewbf9N%2FlC%2FEtmEXH53JhuRUOiTSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYehtpZ8pnfOu%2BbeGKtwDcmXNo2Mtpe%2FpVMZrdUaNUB2VJcIy85%2Bt%2B46POUQbWBzHxcSVL9o6NUj6lGVEHzbmp9IRx%2F58pKtZ%2FZE8bNDtXfsiVxMRVyEz51P3VD%2FxDYc1N6%2BySlen6rHfrtLjkkjzWEFL1RqxN6hf8%2FB1cfA6bmO5%2BLSHzSFBgxrSr3pyZpdnWVjTK3QF%2FbfG5295IDUIPWwv%2F0qktYugGCrtPHLittp%2FsZ34uR2tGPpv9uPVRRHoVRC7k1QnggYekS%2FksCS3BU0OxL6by0RIxo9w1mbSm2N%2Bth0KjGJO6Qiynt327k1gN9YeZW3X%2FruXYJDi4ls4KP3Jf9NGFAqUXCHpjI974PwIv7Jpjx7CH4U3Ga1%2FaOzAcPOXFMIQm8PvNG7gYPpgwqhbgwMnW7DRB%2Bli7DwH8enIRTBbjfaGmq2defAn4hmAp2ZYkgajLKurTiZIyKHC4hQYzlgeTDmtS0s5Qk8F0Ou7B4V8g8%2BojutDtE0ECYUATIy6j31pmuyU4%2FqlsdHHFelETwyIXi9fsPEOn3bWyyeHt6mJkJVmp3NVWvc9CLV47CUjvP0ko3EJgwc8%2BODbKE3uvazqNeMaovcJJ8g6i53az4QJ5irjq%2BsZUj1nTJOyIJu1HyahEHfi9zcw9c2IygY6pgGIELgheFgsTwUdMVOfVKtxixcMG5sJ2y%2BEFXdEf9gRQ2zTvNTvNykTxz8ad%2FDmmFVhXE3%2FBdtYNdb3YK2Y55XweoiYFvtR6sJtdshMixAU2A%2F%2BaGWqRCk47NgUxTihO4HcSACb0f7jZJjmk33IL1OB2g9sOKiDAeu%2FQXroPJYHrUsW7dJop94mkh9fgMxd13sn2gyeiAaG5M56KNOrv793gyjyw%2F3b&X-Amz-Signature=726322d070a0125a7d42657547fea1bb2c7170473a9456a5d4f4fb4272bd4d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

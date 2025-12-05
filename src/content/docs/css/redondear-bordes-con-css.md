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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564OQ4GQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLkQUhNfC3ZSyEpl2IZfAOeSAH7fQNPQLVcJE6YeRk%2FAiAcutW8BLLtY37f3W4wXhGx%2BYFh%2FrMlfEjhI20MpKWivyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM679hqukkZdwfFxIrKtwD6KAMYHpDtmMIC%2FR7Czc%2BO%2BjL4SzX1moU5Ytut1wIcD%2BrJqEMbujhcLVBtj8XX%2BpeoIhtUUmCKM%2FpllAQLk%2Bp1d4Aqy6jcUHOeHwxE%2BoHRTHklC3kEDAjLjDy%2FcAaJVCf2tRW4c6ILmLON4rFLy7Q5CcaMkUgmoHPvc7ODkYoyXZHobSKDcjUx6ftfZMAmDXhETgrRxDN0cbJkzCsFeXJIdj7XRFBo1C7JatcUVT2vuiGMQnoa99slRBZ1PqzQcwhu5Nwfuc%2Fqb3fThApy80bGw0GgeJZJ%2Bqu3xZhMfqQDP5sSGFGaXPatkon4AjzBgj8JWo5aQkv6jzhb4yzRurG8oI3mOgUiiFacffdUM2SsUk5p9gOk6Ro4cSKCxs%2B68dnYoB5uFAdpWC9vVow6Y243nRtqwDWu8993UP9IkuCrFA5TBUN9sNKXlAjtdua%2Fmz9Tbx2cBCMfVDf8XCcgnqwTuFFUVhKsc9XX2vBqv0%2BAtNsho2xwvKc6ykt7aEAtqGLC%2Fsah0tW1FrLjpIbp9MU8Fq%2BdwHC6KTy9kiB4sUoWHmPAYZxS3Z%2FXCC%2FzwcNcFKKjJk60pmb9A7DZvLmfl1oaWqzLrZBg2qFbBMLzXPp6CCAsmmf%2Bqa%2FsCFrsgwwvprNyQY6pgFxv9Z%2BPTFozj34QcFK5EAKn97XYslIpg5lFx7HRrg88WGka1shgwj1V%2Bb5uWGSsadwAHAOqcx6TOfXU1bNnlC9PeTBK32YRr7iQ%2BF8NPjhg%2FvmzTr6FWbMuHujbxxi0qYpImd3YYqPOHnJhXU5rJlkADgNNilp9ZTC%2BqQOARaGESMPfRJ9fxH8YPNyRQ47iBeno8UABJR3effKQ6NbcUnhc%2BIg2PWL&X-Amz-Signature=d7ddca95ba0ecbde31986a71ec92bf0a128ef1494166f3ae8eee00a22bfc2c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564OQ4GQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLkQUhNfC3ZSyEpl2IZfAOeSAH7fQNPQLVcJE6YeRk%2FAiAcutW8BLLtY37f3W4wXhGx%2BYFh%2FrMlfEjhI20MpKWivyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM679hqukkZdwfFxIrKtwD6KAMYHpDtmMIC%2FR7Czc%2BO%2BjL4SzX1moU5Ytut1wIcD%2BrJqEMbujhcLVBtj8XX%2BpeoIhtUUmCKM%2FpllAQLk%2Bp1d4Aqy6jcUHOeHwxE%2BoHRTHklC3kEDAjLjDy%2FcAaJVCf2tRW4c6ILmLON4rFLy7Q5CcaMkUgmoHPvc7ODkYoyXZHobSKDcjUx6ftfZMAmDXhETgrRxDN0cbJkzCsFeXJIdj7XRFBo1C7JatcUVT2vuiGMQnoa99slRBZ1PqzQcwhu5Nwfuc%2Fqb3fThApy80bGw0GgeJZJ%2Bqu3xZhMfqQDP5sSGFGaXPatkon4AjzBgj8JWo5aQkv6jzhb4yzRurG8oI3mOgUiiFacffdUM2SsUk5p9gOk6Ro4cSKCxs%2B68dnYoB5uFAdpWC9vVow6Y243nRtqwDWu8993UP9IkuCrFA5TBUN9sNKXlAjtdua%2Fmz9Tbx2cBCMfVDf8XCcgnqwTuFFUVhKsc9XX2vBqv0%2BAtNsho2xwvKc6ykt7aEAtqGLC%2Fsah0tW1FrLjpIbp9MU8Fq%2BdwHC6KTy9kiB4sUoWHmPAYZxS3Z%2FXCC%2FzwcNcFKKjJk60pmb9A7DZvLmfl1oaWqzLrZBg2qFbBMLzXPp6CCAsmmf%2Bqa%2FsCFrsgwwvprNyQY6pgFxv9Z%2BPTFozj34QcFK5EAKn97XYslIpg5lFx7HRrg88WGka1shgwj1V%2Bb5uWGSsadwAHAOqcx6TOfXU1bNnlC9PeTBK32YRr7iQ%2BF8NPjhg%2FvmzTr6FWbMuHujbxxi0qYpImd3YYqPOHnJhXU5rJlkADgNNilp9ZTC%2BqQOARaGESMPfRJ9fxH8YPNyRQ47iBeno8UABJR3effKQ6NbcUnhc%2BIg2PWL&X-Amz-Signature=973f50bb0e26b6e69bb54ca9841055777f8ff82f8f33d372a267e173b17d1029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

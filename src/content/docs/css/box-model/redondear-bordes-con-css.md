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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4RJERS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNH9Xk4fmIHZ9YZz93ovivlmr0bW5N1EcglS4Jhh9dCAiEAnwQ%2FNsIgEa05j1q5I6FTNip5l6JA7OaPtL%2F4JXxVR1YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkx3SEL8Hst8H7ctSrcA%2FsWxHqOu6xDEeZ2gTwCtZIVtRTgSj8QHS5J3UARWEKARcQ71tBX0hVgI0iBA%2BiD7Eah%2BmQs6YNaCya5Msb9cJ3XgoQRjwv9Ydfq%2BRRYxfhO%2FA8AnpPO31inQamRnJi1zasHGMMZ2Rtt%2FLRgH%2BA%2FJ5KJNf3l3q7B2moUDInajdAGkkeS66WlNwfw6HDp1hTR2pNw2aXgVRKPm9pnEdn3UxSn%2BHC1BzBjGCDRJjnwt6yGuW8ahxxix8N92PfVMm0zYtdjTN6UHi6syl5%2FffqA051FP06Eos%2BtxXZ8klcIcfDL%2FminDyhSU3EyYmCG%2F2sJt4AbqG%2BJdNX300I9NwBDv4mjEouZsamiyQtRoqD659Wpp257cBRfAV7TkD7wuL8e00OjKcVNAz%2BVWdKFEjNwqgyfvpTNB38DY6MmRVPwnPXYWm40DhW3T7oyvOD9%2BeOHVHPKQWq42Jfrm89AwjLDJYDn0dIAxxu1%2F7tvsiYo7gsXIOCfp4CvirHErBfQWCIE5CdyZ9AEVucSpMexbVVLB41SxOwAJuHFH8oho88eYvSzpj46CKHaAWfLke5APdnfBscaAzYPatAaamD7rWWKP7AFlvih51%2Bs3BZ5%2Bk3qxesRATSRCcYhjNUBKXlNMMyei8oGOqUBDaSiCWTtkFPEultu0mnv0kHGxbSyKzan2CVWM8J17eWWWuw4a%2FTyS%2FzeGGBCRolUd4BPEaheEV25fKiHUGD1xLQjhMbRBFHgoi%2FjAGG1VQBZ10WJluGFOkEaGyCceY3muT1whN0myXnT6wEOWIxSYMA%2FWiKuF%2FsjhUfSUUTMPnVLSwKMxwVhoakY63ICth2UTKfMHuaqQQ60mOm%2BCErqD%2Bu28HPN&X-Amz-Signature=4fb04eb6945f4dbc68c7aea932d8ea426ce7e577cbaaa35a0cedf4c55211862c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4RJERS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNH9Xk4fmIHZ9YZz93ovivlmr0bW5N1EcglS4Jhh9dCAiEAnwQ%2FNsIgEa05j1q5I6FTNip5l6JA7OaPtL%2F4JXxVR1YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkx3SEL8Hst8H7ctSrcA%2FsWxHqOu6xDEeZ2gTwCtZIVtRTgSj8QHS5J3UARWEKARcQ71tBX0hVgI0iBA%2BiD7Eah%2BmQs6YNaCya5Msb9cJ3XgoQRjwv9Ydfq%2BRRYxfhO%2FA8AnpPO31inQamRnJi1zasHGMMZ2Rtt%2FLRgH%2BA%2FJ5KJNf3l3q7B2moUDInajdAGkkeS66WlNwfw6HDp1hTR2pNw2aXgVRKPm9pnEdn3UxSn%2BHC1BzBjGCDRJjnwt6yGuW8ahxxix8N92PfVMm0zYtdjTN6UHi6syl5%2FffqA051FP06Eos%2BtxXZ8klcIcfDL%2FminDyhSU3EyYmCG%2F2sJt4AbqG%2BJdNX300I9NwBDv4mjEouZsamiyQtRoqD659Wpp257cBRfAV7TkD7wuL8e00OjKcVNAz%2BVWdKFEjNwqgyfvpTNB38DY6MmRVPwnPXYWm40DhW3T7oyvOD9%2BeOHVHPKQWq42Jfrm89AwjLDJYDn0dIAxxu1%2F7tvsiYo7gsXIOCfp4CvirHErBfQWCIE5CdyZ9AEVucSpMexbVVLB41SxOwAJuHFH8oho88eYvSzpj46CKHaAWfLke5APdnfBscaAzYPatAaamD7rWWKP7AFlvih51%2Bs3BZ5%2Bk3qxesRATSRCcYhjNUBKXlNMMyei8oGOqUBDaSiCWTtkFPEultu0mnv0kHGxbSyKzan2CVWM8J17eWWWuw4a%2FTyS%2FzeGGBCRolUd4BPEaheEV25fKiHUGD1xLQjhMbRBFHgoi%2FjAGG1VQBZ10WJluGFOkEaGyCceY3muT1whN0myXnT6wEOWIxSYMA%2FWiKuF%2FsjhUfSUUTMPnVLSwKMxwVhoakY63ICth2UTKfMHuaqQQ60mOm%2BCErqD%2Bu28HPN&X-Amz-Signature=f89b0399abd4e0f7d1f5d79043c71e2cbb5e0321b240c2463b76525f59f8d9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

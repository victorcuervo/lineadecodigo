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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2TCX4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFiKuwZq8RWwqEzVisdCFy6B%2BfQSg0A3vk9jXgr9ytWQIgOSMwBN1R40JTCphY0T2LpKMXGyWa3zDdLIdbo28%2BOfEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ1tiH2l9WaqugQIXircA5cIlpuMX9v9EKa5ht3tn0geDaImP3TlQWuPaId19TbidE2KElwXMfyOh74srdubnZWv22B%2B2WaDeRBSfK9%2FDu4fm1W%2FU9m0GiWW2ptdX8ieLY4qONNh7CSbqOAj5sr5AWgE0MZGVlIQ6nzcwmsyCoVMILIZORixtBvBDOVPd0YXx6Dsib6sqeu5jGasKqFpw1UydAOvVylCyeHh9ijxAU4FmvRY04MxrTu7QAlFvHoQT4Y9s%2FoBdjMMQ4sSI2S3HYhJomYg0TL3VMdueUpisMcpe7TnWuMFtFGRE21ZmbX4H9tgALCuD40mWyeDlBdC8kbD3JFCY33YRXDTZDKFkk%2FDs2xZs4U263qW3%2FVwA%2B3aCgK1Rwt%2BPcIMzwrDRM8xVgWpc0ar4yNFA9AjgXGA%2FGwU3oTXBthDtVUNyDpZ3bbGIYYYisWfEuWakJkp7XVdIe59bWERxWgPe36PXdDAgnHpWDlc0u26KxKgzm4WJg7Qn43%2BBkfCKseDlr3q06NRJKVkaopLBMl2tNS%2BCZRXkQWTafdt9mInwZwqpl%2BLC1J8Be7IH0Mf4mcMbaTQDEPs5TigPio06pPhMMH6gmabpudOukdaOjTmCyBM4PlgEMNGlw53qKfliRWJhhNwMI63icoGOqUB2IRdzGyAVI2fr%2By7DIYvuZt4vdDYKuPJxIKLSkmsAPWV9PpNi%2FOH%2FQySJygiOm5VIVojVfKQILdyvnxnqpPikDazOIm6Y%2BaXuTuxn6ITdN%2BY0YayT7YSh%2BtLQYSDX6VkjZCw9n%2B8tRChcAJ%2F5zNr72lG%2Fr0mqg%2BRK3WutJIu7zDqMY4rTja83mIKGNvhI3Tg4F%2B8GS5b2iJ%2BwpXlssTK98ncDueD&X-Amz-Signature=99bb4f1c3082692fedc4bfa6b7166ff6a1287c2bd75436aef8c7ed42f3f5455d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2TCX4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFiKuwZq8RWwqEzVisdCFy6B%2BfQSg0A3vk9jXgr9ytWQIgOSMwBN1R40JTCphY0T2LpKMXGyWa3zDdLIdbo28%2BOfEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ1tiH2l9WaqugQIXircA5cIlpuMX9v9EKa5ht3tn0geDaImP3TlQWuPaId19TbidE2KElwXMfyOh74srdubnZWv22B%2B2WaDeRBSfK9%2FDu4fm1W%2FU9m0GiWW2ptdX8ieLY4qONNh7CSbqOAj5sr5AWgE0MZGVlIQ6nzcwmsyCoVMILIZORixtBvBDOVPd0YXx6Dsib6sqeu5jGasKqFpw1UydAOvVylCyeHh9ijxAU4FmvRY04MxrTu7QAlFvHoQT4Y9s%2FoBdjMMQ4sSI2S3HYhJomYg0TL3VMdueUpisMcpe7TnWuMFtFGRE21ZmbX4H9tgALCuD40mWyeDlBdC8kbD3JFCY33YRXDTZDKFkk%2FDs2xZs4U263qW3%2FVwA%2B3aCgK1Rwt%2BPcIMzwrDRM8xVgWpc0ar4yNFA9AjgXGA%2FGwU3oTXBthDtVUNyDpZ3bbGIYYYisWfEuWakJkp7XVdIe59bWERxWgPe36PXdDAgnHpWDlc0u26KxKgzm4WJg7Qn43%2BBkfCKseDlr3q06NRJKVkaopLBMl2tNS%2BCZRXkQWTafdt9mInwZwqpl%2BLC1J8Be7IH0Mf4mcMbaTQDEPs5TigPio06pPhMMH6gmabpudOukdaOjTmCyBM4PlgEMNGlw53qKfliRWJhhNwMI63icoGOqUB2IRdzGyAVI2fr%2By7DIYvuZt4vdDYKuPJxIKLSkmsAPWV9PpNi%2FOH%2FQySJygiOm5VIVojVfKQILdyvnxnqpPikDazOIm6Y%2BaXuTuxn6ITdN%2BY0YayT7YSh%2BtLQYSDX6VkjZCw9n%2B8tRChcAJ%2F5zNr72lG%2Fr0mqg%2BRK3WutJIu7zDqMY4rTja83mIKGNvhI3Tg4F%2B8GS5b2iJ%2BwpXlssTK98ncDueD&X-Amz-Signature=8d243dac5589974dd2db88c77394f9a3056cad2cafbf7ab3667ca7f4111ddd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

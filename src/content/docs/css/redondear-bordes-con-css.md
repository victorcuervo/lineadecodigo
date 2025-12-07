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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POVEKLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi0u1mtzmkRAtd6VuhTS%2FrYdg%2B2VPPHDSFDBlHixNBJwIhALebs2CrddEHv3KYchtyG%2BzNWp4bErHdoNQI2ivsLKqxKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzycfBSEbzFxvm2Xd4q3AOg3gFpE6bXw%2BERlKw0ilABSSoitndxEwFrv41NOcZOqdPZLhwJspeNUdHyP%2FDhE6nxEjuLHodEFgxC%2BKyxbq3PPoW9Eppj4nQUa2O4MJ7Tmp55TE8DjowG2x4rG6326YAPREPYG5z%2FOkCZKOkdc%2B7qzvR2%2FyvvocxLJ%2BJj5jvICYzFo%2BTa5B3AY3MP5LGfOVekN3w6hFGSeZlWNRLNLWZLTGCMhdWrRI87u5NTzK2Bzo0mLD6fsjpN7lVxhSTKUMY8z0euXQx6uB3ic8sGnBzdR8bba00ft9mkoERXYrP513Ya72ucI8QOAmzLCdXAadpNHDqjsqwY78kG8rsFum5u6HOWsR4JmM9NyZyHM%2BNCMQ2Z1r%2FZD6F4GISwCRfGdG3IWwLZoyB%2F%2FplYEx4I2s3jxDhsz1k6%2F%2FleaWgC72Vl4YP23bGyscb2j%2FJNthIRk%2Fc4bnJ9kPTag8LvhRPG%2ByiOvfrDQyWBF9duWWO8FdXNTRfEfma1sLOleBLfOmPw6sjCbqr6VU%2FlpMO9a1kGvVCL4sRlW89DSiZR%2Bp9x7NQmLu%2FBDTN7urNxyyUQ8vKrncKfDb5TKaawWtWZPSD%2FVxAd9uFfFkfGdbTm7lcT1nMEPIKGQ%2FOBGS0RN03hPzCam9TJBjqkARaTbe1SYhoc5hZpLBZq8jhdzw4%2FyNIQMcZLfR2TzqOdoZSGLAHPT8hB%2FvAXuHn25sghvdZe9MMiDbuLsnsbFgVskyZffFw6oO9vetMQA1PReaa92rXdNNgJjLioPf5mghCOkqqobeJZGPMFtqh7ZjhIwgShxr8CE90I6auKtxFZsx1Lsh4bEjIsG1GXcGCQaLT7O%2Flwozj%2F0Pxdmy2eBhljpyxC&X-Amz-Signature=2b1fe521fbf374766dc8f81f3d3cb4d5763acfbee0839859d2e6d7df689ac283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POVEKLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi0u1mtzmkRAtd6VuhTS%2FrYdg%2B2VPPHDSFDBlHixNBJwIhALebs2CrddEHv3KYchtyG%2BzNWp4bErHdoNQI2ivsLKqxKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzycfBSEbzFxvm2Xd4q3AOg3gFpE6bXw%2BERlKw0ilABSSoitndxEwFrv41NOcZOqdPZLhwJspeNUdHyP%2FDhE6nxEjuLHodEFgxC%2BKyxbq3PPoW9Eppj4nQUa2O4MJ7Tmp55TE8DjowG2x4rG6326YAPREPYG5z%2FOkCZKOkdc%2B7qzvR2%2FyvvocxLJ%2BJj5jvICYzFo%2BTa5B3AY3MP5LGfOVekN3w6hFGSeZlWNRLNLWZLTGCMhdWrRI87u5NTzK2Bzo0mLD6fsjpN7lVxhSTKUMY8z0euXQx6uB3ic8sGnBzdR8bba00ft9mkoERXYrP513Ya72ucI8QOAmzLCdXAadpNHDqjsqwY78kG8rsFum5u6HOWsR4JmM9NyZyHM%2BNCMQ2Z1r%2FZD6F4GISwCRfGdG3IWwLZoyB%2F%2FplYEx4I2s3jxDhsz1k6%2F%2FleaWgC72Vl4YP23bGyscb2j%2FJNthIRk%2Fc4bnJ9kPTag8LvhRPG%2ByiOvfrDQyWBF9duWWO8FdXNTRfEfma1sLOleBLfOmPw6sjCbqr6VU%2FlpMO9a1kGvVCL4sRlW89DSiZR%2Bp9x7NQmLu%2FBDTN7urNxyyUQ8vKrncKfDb5TKaawWtWZPSD%2FVxAd9uFfFkfGdbTm7lcT1nMEPIKGQ%2FOBGS0RN03hPzCam9TJBjqkARaTbe1SYhoc5hZpLBZq8jhdzw4%2FyNIQMcZLfR2TzqOdoZSGLAHPT8hB%2FvAXuHn25sghvdZe9MMiDbuLsnsbFgVskyZffFw6oO9vetMQA1PReaa92rXdNNgJjLioPf5mghCOkqqobeJZGPMFtqh7ZjhIwgShxr8CE90I6auKtxFZsx1Lsh4bEjIsG1GXcGCQaLT7O%2Flwozj%2F0Pxdmy2eBhljpyxC&X-Amz-Signature=83397c7df7a33a543cd79c557489f313f4d18caebc10bf3823f3947740513b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

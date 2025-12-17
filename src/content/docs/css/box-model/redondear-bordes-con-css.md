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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNXNGXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7qUV8kVcseTCJ7nSIzEboRm8edNBHEuIdHBruhK8wAIhAJtz%2F3fYup14hhsQhUxRhRKKrRj3EIyUvJpVojaWIJDoKv8DCHsQABoMNjM3NDIzMTgzODA1IgzNL%2F36j8k%2BbTCtLHwq3AO9qYgMdB0KPMnPUwDZrKvnzDyMF3cvY0eliryggnJjZwui%2FQu0c6NOOOElJt4%2FdTsF9ykprAxUgKmUG6QiiWcRpkN2NNdtpOwn60n32Fia9nxCe4LPV1xT7QmT48hQ4nwYJpcf2Z4vMRut9dcPHyPwGxKgluSXB%2BWcTIZApfgY98q6xZMqZIZs9wWGRcrQtF%2BF%2Fp1mlFmjXeOrwjIZmrtj2uRhlExVGwAk2diMaXPToclA%2FyoYBxcX2C0hfKcP77RBolXF1j%2Bf4VMsSgpgX82pIapK3i%2BbV1SzR%2BSpPRhYYrEs5E4ug4RBvpv%2BY%2FiovluqFHbKcqKJj%2FjpqqkWnOZaDbnVp%2FR60YXNUcWiNvsW%2FAIAJlx8nBW8TCphEbu4SrJiMsgNHaMBWB0yTKnOi9YFa8RcM%2FGpbSH3oDw4Gy5XVr%2FrWyFo%2F0PURaXSJ0jVaGywe4m0Q66RiQ8fSKviBVP6syiOru9u9FOdFssqF%2FAYAJTvAKgpmK2BIkxFhw9IgMbcQ05UJUT25lfikRsdE%2FGvPEfHgZM1R%2FhhXIo2Nssdv9bZi161QTKwINEMOLZSRsc0uAmCblrXsRnwMECnHv0EYVq4MTLK2as88VIv9SJClLWm2L0do3zm%2F4gUBjDg74nKBjqkARLNa%2BSymD1L%2FRLvvfjrnYAn3qJ4yfubUNkFWNRtKE2nsQos34YNhDO9whW8zFtsUNz3iIg6ciir2c%2B9xZbAlD2JD1woCAnN%2B75IFaSAsyqkA03dE%2BJoAXGsrISGwPcdm3Sw5TxEb1OvxzGV8Xjwc19nENy2lawG8ncpWDAef3pmcLz8Dai06fHdrl6vrPEoQYo%2FdenNll%2F0pY7Oh99klAixz%2Fjg&X-Amz-Signature=3d3b5a78a31642beec470508bca61563c0f4d6248d2d2bda449a8f745a714a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNXNGXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7qUV8kVcseTCJ7nSIzEboRm8edNBHEuIdHBruhK8wAIhAJtz%2F3fYup14hhsQhUxRhRKKrRj3EIyUvJpVojaWIJDoKv8DCHsQABoMNjM3NDIzMTgzODA1IgzNL%2F36j8k%2BbTCtLHwq3AO9qYgMdB0KPMnPUwDZrKvnzDyMF3cvY0eliryggnJjZwui%2FQu0c6NOOOElJt4%2FdTsF9ykprAxUgKmUG6QiiWcRpkN2NNdtpOwn60n32Fia9nxCe4LPV1xT7QmT48hQ4nwYJpcf2Z4vMRut9dcPHyPwGxKgluSXB%2BWcTIZApfgY98q6xZMqZIZs9wWGRcrQtF%2BF%2Fp1mlFmjXeOrwjIZmrtj2uRhlExVGwAk2diMaXPToclA%2FyoYBxcX2C0hfKcP77RBolXF1j%2Bf4VMsSgpgX82pIapK3i%2BbV1SzR%2BSpPRhYYrEs5E4ug4RBvpv%2BY%2FiovluqFHbKcqKJj%2FjpqqkWnOZaDbnVp%2FR60YXNUcWiNvsW%2FAIAJlx8nBW8TCphEbu4SrJiMsgNHaMBWB0yTKnOi9YFa8RcM%2FGpbSH3oDw4Gy5XVr%2FrWyFo%2F0PURaXSJ0jVaGywe4m0Q66RiQ8fSKviBVP6syiOru9u9FOdFssqF%2FAYAJTvAKgpmK2BIkxFhw9IgMbcQ05UJUT25lfikRsdE%2FGvPEfHgZM1R%2FhhXIo2Nssdv9bZi161QTKwINEMOLZSRsc0uAmCblrXsRnwMECnHv0EYVq4MTLK2as88VIv9SJClLWm2L0do3zm%2F4gUBjDg74nKBjqkARLNa%2BSymD1L%2FRLvvfjrnYAn3qJ4yfubUNkFWNRtKE2nsQos34YNhDO9whW8zFtsUNz3iIg6ciir2c%2B9xZbAlD2JD1woCAnN%2B75IFaSAsyqkA03dE%2BJoAXGsrISGwPcdm3Sw5TxEb1OvxzGV8Xjwc19nENy2lawG8ncpWDAef3pmcLz8Dai06fHdrl6vrPEoQYo%2FdenNll%2F0pY7Oh99klAixz%2Fjg&X-Amz-Signature=27d051d2d3a70f3c24d20e6a8270d118d9e6bf0256098d2f0009d21bb58d1f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

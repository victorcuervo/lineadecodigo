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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYL3LH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FHsUz%2BkkIAqQ9pMSxRAQrHVhzl4Cvnk7az4M%2Fz4DvEgIhALh15MnWU9iywBnTRsqPqM4IFb9I2%2BTs9x8Y6E7bNzb3Kv8DCHwQABoMNjM3NDIzMTgzODA1Igzg4VFTjI8sbbazzgAq3APOgkwUvATezycP9DcmSXdknFMXvFkH3qQZjTXiMJZUquV%2BjIMDQWukIMDDoXZ%2FqvVSPtRItMbmA6EhaWKn3k%2FiDGM6MXIXLV8WRhilvcYtZhw8WtVgDq7v%2FokdBwjUrLWypM%2FfGkCxmH4rPCuhuS%2F7nbhCsp3I01QJestVjkCkmrd7NWswjFBRXwqYScFEAlbR3PRfKVGCJouj5kbciva0nbwi479xFHJEsdqsfLRY5x%2FubDVO%2B9vQoYWDcJSpb5t23qol7aqB3WjkdZ56RSf23Fj9sktW4OISWdV0GopustGhc0A2jKCdUJ04bdKvm9WNZW9t5mBn%2FMINscY9ERc1n%2F9LCbq0%2BG6Q%2BXDGVWvxpg8ytgwQNWVrCEhy2obVngnyP6FoALdsCZhPNYYTcv1k6zHYOlRrn6WDdQYadgKV1vMqy8CCp7IFgBUEvuydFCc8z6Pg0E%2Brj8PdrRjED9q%2FZpCc66G3tgW4VgR7y5XAIxAaxXiyR0WfeEj%2F4oofJnWEqU5XYDtQRaqy86jtwxG5ekHlvETPm3gPx4HmZjPHvAZpPkVTYNRAx6MgjUjsWeZWStwgEzpMaKn0mhsIf6Oc0ZO%2FxcHMBAmMAaL50BdulUCvFUh8YZnhBp49JDCMlYrKBjqkAdTdM8XCfJRELt0fq0fix5uE57EZMFGVSLWIoCqPbNHArSluEmzU9%2F1%2FS6mBs2lZFxnZXHFUY4yvG15V4ue5FWc2WP8zTaHZ9nJz9t5UGOCL%2BvmgBYREcsHC8cVcO2J9AcJq68IxXaIKKNyE3i5wrCce9%2BmST%2FLXauzYx%2Bn2CU6bGUDN7mQTxeHIGolOTV8qXYU4nvqijUehTcSQyzfWclC8eJ%2BM&X-Amz-Signature=ad80a750799b7abe93ae9e616cc11519a2b9d06af980788ed6d8f3c3b21f9de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYL3LH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FHsUz%2BkkIAqQ9pMSxRAQrHVhzl4Cvnk7az4M%2Fz4DvEgIhALh15MnWU9iywBnTRsqPqM4IFb9I2%2BTs9x8Y6E7bNzb3Kv8DCHwQABoMNjM3NDIzMTgzODA1Igzg4VFTjI8sbbazzgAq3APOgkwUvATezycP9DcmSXdknFMXvFkH3qQZjTXiMJZUquV%2BjIMDQWukIMDDoXZ%2FqvVSPtRItMbmA6EhaWKn3k%2FiDGM6MXIXLV8WRhilvcYtZhw8WtVgDq7v%2FokdBwjUrLWypM%2FfGkCxmH4rPCuhuS%2F7nbhCsp3I01QJestVjkCkmrd7NWswjFBRXwqYScFEAlbR3PRfKVGCJouj5kbciva0nbwi479xFHJEsdqsfLRY5x%2FubDVO%2B9vQoYWDcJSpb5t23qol7aqB3WjkdZ56RSf23Fj9sktW4OISWdV0GopustGhc0A2jKCdUJ04bdKvm9WNZW9t5mBn%2FMINscY9ERc1n%2F9LCbq0%2BG6Q%2BXDGVWvxpg8ytgwQNWVrCEhy2obVngnyP6FoALdsCZhPNYYTcv1k6zHYOlRrn6WDdQYadgKV1vMqy8CCp7IFgBUEvuydFCc8z6Pg0E%2Brj8PdrRjED9q%2FZpCc66G3tgW4VgR7y5XAIxAaxXiyR0WfeEj%2F4oofJnWEqU5XYDtQRaqy86jtwxG5ekHlvETPm3gPx4HmZjPHvAZpPkVTYNRAx6MgjUjsWeZWStwgEzpMaKn0mhsIf6Oc0ZO%2FxcHMBAmMAaL50BdulUCvFUh8YZnhBp49JDCMlYrKBjqkAdTdM8XCfJRELt0fq0fix5uE57EZMFGVSLWIoCqPbNHArSluEmzU9%2F1%2FS6mBs2lZFxnZXHFUY4yvG15V4ue5FWc2WP8zTaHZ9nJz9t5UGOCL%2BvmgBYREcsHC8cVcO2J9AcJq68IxXaIKKNyE3i5wrCce9%2BmST%2FLXauzYx%2Bn2CU6bGUDN7mQTxeHIGolOTV8qXYU4nvqijUehTcSQyzfWclC8eJ%2BM&X-Amz-Signature=413eff24202b017aa7965d3489f47364041b2e08e10df86705b1b8995ab91e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

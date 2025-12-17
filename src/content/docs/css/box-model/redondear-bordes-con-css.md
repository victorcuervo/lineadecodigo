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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4LULT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRCEl9aCS7o9st4xj0zhkugU9IOfMiCywkTESXLxr1eAiA1%2Baja04E34WmkY5NMTvzV7b4KONi7LjXmW%2BrAHGwaRCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMX%2BjvNThSfU%2FxJ%2Ft1KtwDQes9tWl7zi2Z1GhFKsruqo%2FIpVAjFaMjUbUUQJkfdc5wP5%2BKBC25VfP%2FrXhViBDFGnfLNhs9LvIJUjg8rYLW8VaCN%2FoAbkhNHMOaHMqeovdBYGAlfTFWu2X8e1WoYw73LQgSVcpu0yBqlZiusU7zYpRk037sV3Zhqcg9BbUcMDVBYoVu%2FFmFoygofNL6S8uXgi3SYF1QOtNZTLbtbmq3ay3i7UCzPwhtIwzBptQgr2RggLWHc4LLrH8RnuhJVt%2Bk7UZa3kVcr2VWBmMN%2Bz0HZp7BJksYmemifMH3N5FyByYKJZvnRF%2Fc3PrIUD%2FX%2BcdxFrpGDLYMhmHomE6lWCyu8c5Q4dAwMcPVMWhhc6cgJ0xzc4MqwwUZfQJgAh9tnCmpm8Rphe6dlCO%2Fzg71DPHgHfuqfx%2FV2y7FNnkgMd45UbcgidXLtUyEGAmp76SjzWMxh6T6JBQ5Ks7Nq3ZZcIp33Z6AFo7OVX6wsXyOCl%2F3yA2f4Vqo9Hn4UD%2BkVcP3tpSJkSKoF2GvKbE3o%2FDiSDALXJ%2FNnof5NpA1x9iV%2B2t4Tqg1smf%2B72OlJHFJkjsLgtmV0%2BgbWQuHwQmgM4WJqDkAiHM0DjCQOw9WocfBEjEJtX7zbzVv7r42aSUCjl0w786IygY6pgGWhKj1wXpHXEXiCEBGz78qDZk4WRFsIbXh4YFWYpf7%2FeZzZDbjHdQCGa1R4gRWPODk63XwJkATQ9HTVOpsHb7MH4BiWcaNp5pHgCTdfkG0XMx8YzGoleSShjl711Nzpw9AeiWqjigAas5TpeqbuiidvtS%2BeCkd%2FUkcw6tKkO08%2Bco%2FTnABEb0SoBzsrrmKISVQrdaLbG5SNY1kAJHJ%2B5ssJSZgqzKl&X-Amz-Signature=e5771d2afabc8329d5b506d72983521941d91b4ab714347356d34b488b844d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4LULT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRCEl9aCS7o9st4xj0zhkugU9IOfMiCywkTESXLxr1eAiA1%2Baja04E34WmkY5NMTvzV7b4KONi7LjXmW%2BrAHGwaRCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMX%2BjvNThSfU%2FxJ%2Ft1KtwDQes9tWl7zi2Z1GhFKsruqo%2FIpVAjFaMjUbUUQJkfdc5wP5%2BKBC25VfP%2FrXhViBDFGnfLNhs9LvIJUjg8rYLW8VaCN%2FoAbkhNHMOaHMqeovdBYGAlfTFWu2X8e1WoYw73LQgSVcpu0yBqlZiusU7zYpRk037sV3Zhqcg9BbUcMDVBYoVu%2FFmFoygofNL6S8uXgi3SYF1QOtNZTLbtbmq3ay3i7UCzPwhtIwzBptQgr2RggLWHc4LLrH8RnuhJVt%2Bk7UZa3kVcr2VWBmMN%2Bz0HZp7BJksYmemifMH3N5FyByYKJZvnRF%2Fc3PrIUD%2FX%2BcdxFrpGDLYMhmHomE6lWCyu8c5Q4dAwMcPVMWhhc6cgJ0xzc4MqwwUZfQJgAh9tnCmpm8Rphe6dlCO%2Fzg71DPHgHfuqfx%2FV2y7FNnkgMd45UbcgidXLtUyEGAmp76SjzWMxh6T6JBQ5Ks7Nq3ZZcIp33Z6AFo7OVX6wsXyOCl%2F3yA2f4Vqo9Hn4UD%2BkVcP3tpSJkSKoF2GvKbE3o%2FDiSDALXJ%2FNnof5NpA1x9iV%2B2t4Tqg1smf%2B72OlJHFJkjsLgtmV0%2BgbWQuHwQmgM4WJqDkAiHM0DjCQOw9WocfBEjEJtX7zbzVv7r42aSUCjl0w786IygY6pgGWhKj1wXpHXEXiCEBGz78qDZk4WRFsIbXh4YFWYpf7%2FeZzZDbjHdQCGa1R4gRWPODk63XwJkATQ9HTVOpsHb7MH4BiWcaNp5pHgCTdfkG0XMx8YzGoleSShjl711Nzpw9AeiWqjigAas5TpeqbuiidvtS%2BeCkd%2FUkcw6tKkO08%2Bco%2FTnABEb0SoBzsrrmKISVQrdaLbG5SNY1kAJHJ%2B5ssJSZgqzKl&X-Amz-Signature=c0b19e048272a9857fd4e9566f359fc5bec0096f2f1364b155b62b1f056211e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

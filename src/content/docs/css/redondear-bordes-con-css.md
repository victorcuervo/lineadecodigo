---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2M3AIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICmOAQHOfXy%2Bh5%2Focjav%2BBROXJQqUVJX%2FUJhfx8GuYWLAiAcFWAh%2B7Ag7035vxjSI2%2B1TZe7%2BrpdSYD73W1lMewgsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8jP8oFWHD%2BvYZWNAKtwDA1dp5n%2BPf5Om3cjtaJgymvgkqvXMq1m2lhC5ID2PfoL63wbS7FFSWqojUnSnXaFWKKx%2Bok7ffjuemLUVHLL3gFYnNlv1shR4APbQB29WerLq0jhJkKFkCSbXR%2FyvLJ24cBOqCPRwSnkt4%2FmK1iQjEV9oygslmFmgQHYcAidHZHqZywmpV%2F9CJC894x0nJcD3Gj9wCAfJircQWkGUta9XsHnKWx10B3U11QQp4f76JVQNfEcB5AGJ8Iow3kPug7FxahUkwqDzyXCLEfbH9Lb7kmdpItTJ%2Bf3bhixPGLefTyUWoeKh%2B2X7LIxzKrKdKnmv3oGOAQheYHSMl5nCFPDLW%2FxOz6SzwPfm1TO2NNNXYmJDpRs8zAX%2BKOUJSQ3EzQhTHzCZDo1X10YD6rQcwbrBQkkdFPGKXjkUx%2BH5vjKG2Wml6E6FYLlWdXvNww%2FmY%2BPwwbKPQ1gxTBYXAamisM%2BfVBcG2nehzjg1NBmKl4G7twsy45F4RgwjvDgzfQbFQfMu3AYwhciJrQSSqi95zpLGsgepcsGW15aUR0IW3CHAW0niSdeHZYCbnym%2B52vIZhjLMm7hTtBJ%2FL7jDcfCwyT0%2BA%2FaSouK8vgeZSeFt21F7M2SG0gz0NWCXv9AGBIwxITGyQY6pgE6MMRYrmZb2QrBqovKz9Ei6xzqDY%2BgsqCO2yCGMMJZlcLttNWSA0sFZjQdP0VeZ4Yi73k3Af5oscTbTTQlBNVrpAd26gcodxhwZ%2FJe6UsR5gZHRbh3NEa7UTP4RkrYaBZhqkgSBMOQndXn4LysIkJ9VhcPNffD0WlnAVUazZoxFdKTtnqwEzXFgO%2BqEyn%2BX5D3kmZLhpmc2E92JdQp%2FcwT9vvffotG&X-Amz-Signature=82d27e0ef138b9609997a0708cc3f9bae74cac17027b6eda5cdc05bc6381420a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2M3AIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICmOAQHOfXy%2Bh5%2Focjav%2BBROXJQqUVJX%2FUJhfx8GuYWLAiAcFWAh%2B7Ag7035vxjSI2%2B1TZe7%2BrpdSYD73W1lMewgsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8jP8oFWHD%2BvYZWNAKtwDA1dp5n%2BPf5Om3cjtaJgymvgkqvXMq1m2lhC5ID2PfoL63wbS7FFSWqojUnSnXaFWKKx%2Bok7ffjuemLUVHLL3gFYnNlv1shR4APbQB29WerLq0jhJkKFkCSbXR%2FyvLJ24cBOqCPRwSnkt4%2FmK1iQjEV9oygslmFmgQHYcAidHZHqZywmpV%2F9CJC894x0nJcD3Gj9wCAfJircQWkGUta9XsHnKWx10B3U11QQp4f76JVQNfEcB5AGJ8Iow3kPug7FxahUkwqDzyXCLEfbH9Lb7kmdpItTJ%2Bf3bhixPGLefTyUWoeKh%2B2X7LIxzKrKdKnmv3oGOAQheYHSMl5nCFPDLW%2FxOz6SzwPfm1TO2NNNXYmJDpRs8zAX%2BKOUJSQ3EzQhTHzCZDo1X10YD6rQcwbrBQkkdFPGKXjkUx%2BH5vjKG2Wml6E6FYLlWdXvNww%2FmY%2BPwwbKPQ1gxTBYXAamisM%2BfVBcG2nehzjg1NBmKl4G7twsy45F4RgwjvDgzfQbFQfMu3AYwhciJrQSSqi95zpLGsgepcsGW15aUR0IW3CHAW0niSdeHZYCbnym%2B52vIZhjLMm7hTtBJ%2FL7jDcfCwyT0%2BA%2FaSouK8vgeZSeFt21F7M2SG0gz0NWCXv9AGBIwxITGyQY6pgE6MMRYrmZb2QrBqovKz9Ei6xzqDY%2BgsqCO2yCGMMJZlcLttNWSA0sFZjQdP0VeZ4Yi73k3Af5oscTbTTQlBNVrpAd26gcodxhwZ%2FJe6UsR5gZHRbh3NEa7UTP4RkrYaBZhqkgSBMOQndXn4LysIkJ9VhcPNffD0WlnAVUazZoxFdKTtnqwEzXFgO%2BqEyn%2BX5D3kmZLhpmc2E92JdQp%2FcwT9vvffotG&X-Amz-Signature=2a4e331c326201e6df0fe8a39ad58993774318a78b251e646d43b83db15bd4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

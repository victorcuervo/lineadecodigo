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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ULDRA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICud2h9kY20D4wHzzYD4kBoaputDgBMYpcWjC8d1kMoOAiBa4c50LmuHeJmi9Qxqmf7D0233zEX%2BFoCANReEvoX2Qyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMdDuJsxAeOBWZMpihKtwDWmaW%2Ft2q1m5JtlqZF0FBgUyjZ%2B0KejwNjHg36gTEtF5psgcGxiiv2MldlN7Iw9rs%2FgJWqEG2A6ShNV2tqpUQmyz%2BVtBqMMsmlXuYq2j92bnE%2F8Pj7PhgMkrSHKZ6ZhuhL%2By9I8dbezGuPQEQ3BBJSzgzu7jtzC8WLhryf6djUDD9%2B6tvwgaLLIdZDRlzm8c83wuW%2BzPVZtKv76d2GinRU6tlKE7F%2BPjJwZ7KRrRGk6SRlhDl5LIKLJwKR%2BRmaFvoSgqADCKycLd%2FYGkqYPGojVz7hpeTed8EsjK8k%2FVHwwP6Zh1o3jW9snPeKLUX35bKcYdUtYhAqLZ55FnNTJ7DQnwqMGhdFb24d%2FjpUoHYo1x6EDEW5wqe0Mjb39yMiDMFhWuJAViaqoR0o9YZbd1z%2B0kh5At4fyB5ytuSR66WWALDLM7PmwTSLr%2FJueng0D87qyff2P1mZlZpPMyytPGsrV%2Bjbgb8tjV5hvZvp1q6JmG8LAPhC7srb7YQ5ervdncOExakjU8ke4BIWLH%2FVHI09qlCHAz849KcFhmchxiCfc6gqb61zkhZzmMLaTxmEjBFeMnFu2R9noFeGljF6ru%2BWbGu33nnyEJ5Ngakb5%2Fnx%2BnxZXaTJv3l6mG4SqAwvYzIyQY6pgEFNbdj3NIy0tW2LyAmv9Fi978VLPqaK2GDg6u4ftH0Wb5epS9o%2Fm4TSJAfc7Jx9wZEd9Nn7PnJydKmORAfO%2BJd08%2F7%2B%2FukSOVuRhgKZrzLJdkiFn9pl2Ou3pq2fWzUfFIYvnom%2Fxzq2H0%2B2SWWvrBrCEBGzSEMDpee%2BjQQCd2lLZG4mbEr%2BNk6fUjvEeCn6j4bsFXUJw4JDZ8bZjgj3RW2%2BGbmzSjA&X-Amz-Signature=6e47b904a585373b039ca7e8118cfac5a370d3d2e652da46e18f3051602e8eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ULDRA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICud2h9kY20D4wHzzYD4kBoaputDgBMYpcWjC8d1kMoOAiBa4c50LmuHeJmi9Qxqmf7D0233zEX%2BFoCANReEvoX2Qyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMdDuJsxAeOBWZMpihKtwDWmaW%2Ft2q1m5JtlqZF0FBgUyjZ%2B0KejwNjHg36gTEtF5psgcGxiiv2MldlN7Iw9rs%2FgJWqEG2A6ShNV2tqpUQmyz%2BVtBqMMsmlXuYq2j92bnE%2F8Pj7PhgMkrSHKZ6ZhuhL%2By9I8dbezGuPQEQ3BBJSzgzu7jtzC8WLhryf6djUDD9%2B6tvwgaLLIdZDRlzm8c83wuW%2BzPVZtKv76d2GinRU6tlKE7F%2BPjJwZ7KRrRGk6SRlhDl5LIKLJwKR%2BRmaFvoSgqADCKycLd%2FYGkqYPGojVz7hpeTed8EsjK8k%2FVHwwP6Zh1o3jW9snPeKLUX35bKcYdUtYhAqLZ55FnNTJ7DQnwqMGhdFb24d%2FjpUoHYo1x6EDEW5wqe0Mjb39yMiDMFhWuJAViaqoR0o9YZbd1z%2B0kh5At4fyB5ytuSR66WWALDLM7PmwTSLr%2FJueng0D87qyff2P1mZlZpPMyytPGsrV%2Bjbgb8tjV5hvZvp1q6JmG8LAPhC7srb7YQ5ervdncOExakjU8ke4BIWLH%2FVHI09qlCHAz849KcFhmchxiCfc6gqb61zkhZzmMLaTxmEjBFeMnFu2R9noFeGljF6ru%2BWbGu33nnyEJ5Ngakb5%2Fnx%2BnxZXaTJv3l6mG4SqAwvYzIyQY6pgEFNbdj3NIy0tW2LyAmv9Fi978VLPqaK2GDg6u4ftH0Wb5epS9o%2Fm4TSJAfc7Jx9wZEd9Nn7PnJydKmORAfO%2BJd08%2F7%2B%2FukSOVuRhgKZrzLJdkiFn9pl2Ou3pq2fWzUfFIYvnom%2Fxzq2H0%2B2SWWvrBrCEBGzSEMDpee%2BjQQCd2lLZG4mbEr%2BNk6fUjvEeCn6j4bsFXUJw4JDZ8bZjgj3RW2%2BGbmzSjA&X-Amz-Signature=33e92fb265be88d3d5279f6b75195077bf4af8711f6963e53ad1a550d82eab47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

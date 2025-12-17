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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN2O4TL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizu3F%2BPYjAmRzzxDnzqmiEFTG6cEJce1SEXZDehzTDAiEA0KtQRb2cCC9a%2FdbREGvC2m4I2GxXJqPpAvNLps3jWj0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNl9%2FixhMJ2OaSfbxCrcAyM4o8eLeDvXaDG%2BjVbqw%2BhO5%2Fs9nFozAJHAK%2BiAaP420RM03xMu3yEmoNC%2Fk1myXt7iLqF9HOmdNJA5rp81Jhio1jxceLL0yzQtRwsOp%2BNO1KRWuDAaINNC%2BLo3hsNEbeYL%2FoCuUEXE6KvcL8e6kyqMmexllJaKj7DWGoK3Lb27QFKr3%2BWl5lktCyu1BgvPS973y4uZCdGCkcbzgZ9Huhsk7s%2FD1MMAT3onJhiWpKyrzDWdAYYYZGGbDbiboKu%2F8pG89CYFB4x2i6bx888jvxQcdWdTuKGNLMssgHXQ%2FCH4D7kYd9uR2MbDxccx8YBc3eV9MEuovO%2BwM%2BJ%2FwO9dlOJRgwCNgI46yVkeMR%2Bxt6D9xLEt6IYuLnWuYc5QIGGnnfIvdn%2BSQV2FaNKph1BRsz9gOtrvWQ7xrkbJFoss4208pdQwLhQ%2FFgExYQFZUADxQHnovWCzXd5XYtxO0O8CCOViX%2BAVz9KY2lLXQqLo5j1HytQ0WcFtadGwStxoA%2FDLzJ7Cj0TFY7nyMzQLMX%2FqPD9cdXXPGD8Bbw%2FkeTsBAiHy75jLbfQ0DFX2uCUlKG0Xvu0njrZo%2BtEwyIR6zTcsWWz%2Bu%2BQZRHut8P6ZXUXi6SI85XaRNQHhXuMTk4yFMLXeh8oGOqUBmNsWm9kAXTJzWUV%2Bl20Z99acm2l6SrlwJijAMQBin7PyrA9PLm6fJHT0xGn02nuLb4UHNHZnEu4tCVGPfQdjK2xUoOfaGV8hO70xhPM8BaIgXf8g01V4csbqzpwz0Rv2Z%2BIFuwhZdJjViPruh7QtGv%2BIR7qrqPrxrbv%2BfPZieCQ%2Fhgu4ahMy4V8K01VNqUgPDRjQRWf9s%2FpII2AaAVk5EVvvhzuO&X-Amz-Signature=12c86698c63365a90c17167afbfe9ee7d00f4b866f0e29ee1ce23fb9f710c9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN2O4TL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizu3F%2BPYjAmRzzxDnzqmiEFTG6cEJce1SEXZDehzTDAiEA0KtQRb2cCC9a%2FdbREGvC2m4I2GxXJqPpAvNLps3jWj0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNl9%2FixhMJ2OaSfbxCrcAyM4o8eLeDvXaDG%2BjVbqw%2BhO5%2Fs9nFozAJHAK%2BiAaP420RM03xMu3yEmoNC%2Fk1myXt7iLqF9HOmdNJA5rp81Jhio1jxceLL0yzQtRwsOp%2BNO1KRWuDAaINNC%2BLo3hsNEbeYL%2FoCuUEXE6KvcL8e6kyqMmexllJaKj7DWGoK3Lb27QFKr3%2BWl5lktCyu1BgvPS973y4uZCdGCkcbzgZ9Huhsk7s%2FD1MMAT3onJhiWpKyrzDWdAYYYZGGbDbiboKu%2F8pG89CYFB4x2i6bx888jvxQcdWdTuKGNLMssgHXQ%2FCH4D7kYd9uR2MbDxccx8YBc3eV9MEuovO%2BwM%2BJ%2FwO9dlOJRgwCNgI46yVkeMR%2Bxt6D9xLEt6IYuLnWuYc5QIGGnnfIvdn%2BSQV2FaNKph1BRsz9gOtrvWQ7xrkbJFoss4208pdQwLhQ%2FFgExYQFZUADxQHnovWCzXd5XYtxO0O8CCOViX%2BAVz9KY2lLXQqLo5j1HytQ0WcFtadGwStxoA%2FDLzJ7Cj0TFY7nyMzQLMX%2FqPD9cdXXPGD8Bbw%2FkeTsBAiHy75jLbfQ0DFX2uCUlKG0Xvu0njrZo%2BtEwyIR6zTcsWWz%2Bu%2BQZRHut8P6ZXUXi6SI85XaRNQHhXuMTk4yFMLXeh8oGOqUBmNsWm9kAXTJzWUV%2Bl20Z99acm2l6SrlwJijAMQBin7PyrA9PLm6fJHT0xGn02nuLb4UHNHZnEu4tCVGPfQdjK2xUoOfaGV8hO70xhPM8BaIgXf8g01V4csbqzpwz0Rv2Z%2BIFuwhZdJjViPruh7QtGv%2BIR7qrqPrxrbv%2BfPZieCQ%2Fhgu4ahMy4V8K01VNqUgPDRjQRWf9s%2FpII2AaAVk5EVvvhzuO&X-Amz-Signature=47b81589e82758ef59310ea610bca01cbe4f0e2c9fcb2fda006c507fd7ccf233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

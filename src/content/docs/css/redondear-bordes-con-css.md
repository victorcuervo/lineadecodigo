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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MHUF6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5SKgaaLg3q8kv4P%2BPekNBhUMu93Jd4r%2BBJksquqVQZwIgHCWVRO%2FPB%2BQvdcZORiD19QMuyz4wGW78Z7n1zqcp%2FPQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDE4V%2BIWvqrGNeYF5HircA4BfH%2FDKDUzLLBAUXdIF7SR570fAF5Vl%2FkPBpuAQEQqbPcDws%2BASo%2FrkeI%2BGXkYHUILAIwQ2Cg2sSHZPmIEw7hYijZVA%2BYSSSYNEQtvlRsxmeKrTDOaPi4bNEFY%2BUiD43GB8UZi587zrCbQhu9sh8RtO8qkzjP6NLck7MhmmTtWQ3mDHjfpKFcXhy95f5amDy3AMcNHlcaTtyGN7l2Xk3HCcTao82CfOhSQepJg2E%2BOvdS8qi%2F3WQNsvShmsG6PXXR7oojh%2FYCGp%2FX7sCToFEQtvpvACE%2BuHNG8fgI73rJEn1MKKo2iHdjaVTFRQXa2mz1vZaxjLhPCOXMKIOu5nH9iIszbQkP68tHS%2FJsjf%2F04OpeBmup52eQlZwBhtG%2FG8pty9DImbKN2%2BCLIrSC25sCiPTlfZY4%2BxR8EU6X5A2hZketgQxV7kMIXC95Ksn2Av9cZIbpBY3vEWQSA8sfMIXIbHOA0rGuUkOGpA1HlrHUekoPey3vNnTPQ9USLIZPRzq%2BpKrwHJO9%2F3fCGjVa8fo7ybs8lYAI9evmvfWVNd2qr%2BQOjRx5Ix8n5r2OVXM%2B%2BniLEQOTotkpAUz6jB0kkh8VX%2FeMuouJmePEz5gP9VaNvvKOhe8pMH3jfTURrUMNv8zskGOqUBkr%2F5%2FFpM8B%2BOAP7t8BU%2BTy3sK3Ksb92jvJ0GcQ6hClhvgb7YRkB4m40BAeKRYt1nilQjLXoGT2UT3z0Tex1SST6NoFxS%2Bah3UKbeFdrI8YDM8%2FQF9Twt4mXMtei66p6dU3lIhItXsBLm2eI45BQn18FOqNsKZrp3V6%2BgaAHgN8BpxjnNp%2FF%2FFSwn8xdL9QfKDktlHafd16UICJ8b%2Foujrn1wT7qB&X-Amz-Signature=944f16ae994e2b72d7fa6a3fb0b16bdb8dda29f3303a932026b5a14c5857dab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MHUF6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5SKgaaLg3q8kv4P%2BPekNBhUMu93Jd4r%2BBJksquqVQZwIgHCWVRO%2FPB%2BQvdcZORiD19QMuyz4wGW78Z7n1zqcp%2FPQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDE4V%2BIWvqrGNeYF5HircA4BfH%2FDKDUzLLBAUXdIF7SR570fAF5Vl%2FkPBpuAQEQqbPcDws%2BASo%2FrkeI%2BGXkYHUILAIwQ2Cg2sSHZPmIEw7hYijZVA%2BYSSSYNEQtvlRsxmeKrTDOaPi4bNEFY%2BUiD43GB8UZi587zrCbQhu9sh8RtO8qkzjP6NLck7MhmmTtWQ3mDHjfpKFcXhy95f5amDy3AMcNHlcaTtyGN7l2Xk3HCcTao82CfOhSQepJg2E%2BOvdS8qi%2F3WQNsvShmsG6PXXR7oojh%2FYCGp%2FX7sCToFEQtvpvACE%2BuHNG8fgI73rJEn1MKKo2iHdjaVTFRQXa2mz1vZaxjLhPCOXMKIOu5nH9iIszbQkP68tHS%2FJsjf%2F04OpeBmup52eQlZwBhtG%2FG8pty9DImbKN2%2BCLIrSC25sCiPTlfZY4%2BxR8EU6X5A2hZketgQxV7kMIXC95Ksn2Av9cZIbpBY3vEWQSA8sfMIXIbHOA0rGuUkOGpA1HlrHUekoPey3vNnTPQ9USLIZPRzq%2BpKrwHJO9%2F3fCGjVa8fo7ybs8lYAI9evmvfWVNd2qr%2BQOjRx5Ix8n5r2OVXM%2B%2BniLEQOTotkpAUz6jB0kkh8VX%2FeMuouJmePEz5gP9VaNvvKOhe8pMH3jfTURrUMNv8zskGOqUBkr%2F5%2FFpM8B%2BOAP7t8BU%2BTy3sK3Ksb92jvJ0GcQ6hClhvgb7YRkB4m40BAeKRYt1nilQjLXoGT2UT3z0Tex1SST6NoFxS%2Bah3UKbeFdrI8YDM8%2FQF9Twt4mXMtei66p6dU3lIhItXsBLm2eI45BQn18FOqNsKZrp3V6%2BgaAHgN8BpxjnNp%2FF%2FFSwn8xdL9QfKDktlHafd16UICJ8b%2Foujrn1wT7qB&X-Amz-Signature=d0724609deb5516aba7189d5416fd63e75e3bd30babff065dcafb1a24a44234c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

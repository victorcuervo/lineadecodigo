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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHLDD5D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrtrOY7PaHdebp4o2tUgg3dYQD6tHm2abdM%2BA6he2vaAIhAMJ1pzq0ucfYvn5UGDh60j%2FjAFG3tHertlU5o9DMMRCYKv8DCFUQABoMNjM3NDIzMTgzODA1IgzmnXAkApSKePcuSc8q3ANxSyx56uo04wO5VaYTHPM96zxX7BbmKcytik7dYICRHRKky82rfbQDtdhskAY6nO7fWyC1kHK8D9TRYw6DwjtelTJVoGFqeeobejgb1M1wBAzR8p7scQLz11dEgJmGPFb8Lfq1wqDUaOVQTvsb1tpMuHiZRxDaOozKZnT0rlR8LamOWPu5YCYeoeRJiYGKay6h6e%2FO4FahIUIy16W%2Fpx4mrvkpF9bMc%2FFieR0ZERIjgrX%2ByW2kg1XnS5W8%2FqjkBuCwh5f6A3vqQnGumMCyeb1l9Ny6lMDYpAEODEzeKk%2BFvpbfCvWBkkXYOUSRMZbmWkPU4gZ%2B1p6N0c1ZCLt%2BoImjShemqLKX43Ndd%2F1Uad7Pcu%2BUQBTKBvFCR3KWpd3HDPYDqaiFc%2FBj0xl%2FvjBQ3GWkCypfV3OA5v82bAYT66iNlvWoR8JIHDsJt5FCOVj30vb9J7rk52DsWOePseAVepcECoI8J10swF%2FuD5GVc1kfbO1O7yrVc94ZIJL95UXVWhsEGFvVSPBmrr%2FMdMo5DSfuqlKbC%2Fba1y%2BBe4V%2B6zRUJReOX4O%2FZ5OLQCVRhHQ5dN7XGzQlCjDwGBdBRLydDBRcgcMLVt1cj%2FthLRmNSHt9ICwgVuUqCt2N0dGazTDiq8nJBjqkAeyAzoE48N8D0k2HhXbYKfYbK6k%2F7i3f278mpj1LAgfegqp7kkq%2BpUkXf0bNsKQc4yQRDCBPEI2gUi2A0lDV7k8hGuHG6LoNZEQZOogJxeSWwkxA2exBYf8IT%2FNg9m%2BqT1QY1gpsKPDdsG%2BKKLdSqOuhEhPcClmkPqZopOdTSm6BoiAaUp3xoXVOHNTqRhOn%2BhJt82yeZU4CG%2FsE00F5SyZOcimP&X-Amz-Signature=7caf4a4761b2279ddd54ef0df85fa41517df711ee128853d7c889fc243210559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHLDD5D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrtrOY7PaHdebp4o2tUgg3dYQD6tHm2abdM%2BA6he2vaAIhAMJ1pzq0ucfYvn5UGDh60j%2FjAFG3tHertlU5o9DMMRCYKv8DCFUQABoMNjM3NDIzMTgzODA1IgzmnXAkApSKePcuSc8q3ANxSyx56uo04wO5VaYTHPM96zxX7BbmKcytik7dYICRHRKky82rfbQDtdhskAY6nO7fWyC1kHK8D9TRYw6DwjtelTJVoGFqeeobejgb1M1wBAzR8p7scQLz11dEgJmGPFb8Lfq1wqDUaOVQTvsb1tpMuHiZRxDaOozKZnT0rlR8LamOWPu5YCYeoeRJiYGKay6h6e%2FO4FahIUIy16W%2Fpx4mrvkpF9bMc%2FFieR0ZERIjgrX%2ByW2kg1XnS5W8%2FqjkBuCwh5f6A3vqQnGumMCyeb1l9Ny6lMDYpAEODEzeKk%2BFvpbfCvWBkkXYOUSRMZbmWkPU4gZ%2B1p6N0c1ZCLt%2BoImjShemqLKX43Ndd%2F1Uad7Pcu%2BUQBTKBvFCR3KWpd3HDPYDqaiFc%2FBj0xl%2FvjBQ3GWkCypfV3OA5v82bAYT66iNlvWoR8JIHDsJt5FCOVj30vb9J7rk52DsWOePseAVepcECoI8J10swF%2FuD5GVc1kfbO1O7yrVc94ZIJL95UXVWhsEGFvVSPBmrr%2FMdMo5DSfuqlKbC%2Fba1y%2BBe4V%2B6zRUJReOX4O%2FZ5OLQCVRhHQ5dN7XGzQlCjDwGBdBRLydDBRcgcMLVt1cj%2FthLRmNSHt9ICwgVuUqCt2N0dGazTDiq8nJBjqkAeyAzoE48N8D0k2HhXbYKfYbK6k%2F7i3f278mpj1LAgfegqp7kkq%2BpUkXf0bNsKQc4yQRDCBPEI2gUi2A0lDV7k8hGuHG6LoNZEQZOogJxeSWwkxA2exBYf8IT%2FNg9m%2BqT1QY1gpsKPDdsG%2BKKLdSqOuhEhPcClmkPqZopOdTSm6BoiAaUp3xoXVOHNTqRhOn%2BhJt82yeZU4CG%2FsE00F5SyZOcimP&X-Amz-Signature=ef55091f61cd4434f72bbdd0d65f9d6008c8e19e57dc1ef6e7c036c6b71f1b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

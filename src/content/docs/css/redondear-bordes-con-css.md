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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCVE2GW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ1%2B76xlAUZNWQgk1iMPjXJmYqzs7uZ42BgXGbYg3aYAiEA%2Ff16%2FfwmOlSQbY0e2PfBPykwvYQ0lMJgi%2B%2Bko85xE%2Bwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKjdqjNlxoODK%2F1EdyrcA21tei09BYtjWDZFIY%2FgEmn%2BT6iWGIYcTV%2FyE0JMq0EACiwZjjlaWJMcNLwaL5cO7fUPQ%2F4JchrnNX6O696G4KugPmLJIWG%2Fo3tcIuNq8DA4bMzxJMPW%2Fcj8R7ZAuoSLUR7slJwkVil9JPWMBZGPXv7uJsoNSlUIGb7J6rUPkF3pMvft6lvaiMV64zf8UnQ50maIVT3h8Dnh3UUWKK%2FBoCdbX%2BdpoKiMbPGpT5aj6sx2NufSeI0T5lhLcntcUeKnVJmuVIVRVk%2Brl9YwLT1KcM%2FjpcIPh%2B9027CzqpIy54Jb4BtdRbcFPMTucCj68vJFKG4RMUY0T%2FqCBRbp7LzJGmYiABHQsT1K8Q1wIHAEHBpN%2Bil6jlWQv1Ek7W%2BGfWoO2H9U7FAb%2F%2BaGGZPz6IppaPBYN5WcZRdIycDtWTlfwLVfHkImkkfiC%2BPo3a8Nryu6Fy%2FwzV2U1WrEWXSsnzQJuURuWvCpkcpvz6lVJqDC1MfLKaahV9F9yto%2BuNt10WyB%2FGBVwZE8e3Gc7nrZ5n5TTIKZIvUsopzCz2KYU1olCKQC4Vq64qXoePlTGICy1Y%2FKTObmLACPi9JL%2Bm11jwckPGbEXMgADp5c5aPLccybaoIzTGwzpTiWstc29ZfYMMjK0ckGOqUBucU1i3x%2FRX32%2Fq33%2FANs34p3OCeBycIZt%2BTp57PUxQxUvEkF%2BLm1yhwjRGzY4LtY2f8RLKiiKMw7qJrNfEKcEZNsSy9J2FTZnC3dgPGzGj8mDpko%2BmrendX53niGN53MYtgf3nnuRCVhyLWcIXXQxXcMHvKEHq3lZON42h8eW6p1K3JbEOequ4Spfao8y1HVwgoqEwZG7HlkzD9PBJMFi0lAOKNl&X-Amz-Signature=4dc84a131b9ce1df1d8b11b418412808fe145a9daf9ad8c5b1abf0b3d1966dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCVE2GW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ1%2B76xlAUZNWQgk1iMPjXJmYqzs7uZ42BgXGbYg3aYAiEA%2Ff16%2FfwmOlSQbY0e2PfBPykwvYQ0lMJgi%2B%2Bko85xE%2Bwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKjdqjNlxoODK%2F1EdyrcA21tei09BYtjWDZFIY%2FgEmn%2BT6iWGIYcTV%2FyE0JMq0EACiwZjjlaWJMcNLwaL5cO7fUPQ%2F4JchrnNX6O696G4KugPmLJIWG%2Fo3tcIuNq8DA4bMzxJMPW%2Fcj8R7ZAuoSLUR7slJwkVil9JPWMBZGPXv7uJsoNSlUIGb7J6rUPkF3pMvft6lvaiMV64zf8UnQ50maIVT3h8Dnh3UUWKK%2FBoCdbX%2BdpoKiMbPGpT5aj6sx2NufSeI0T5lhLcntcUeKnVJmuVIVRVk%2Brl9YwLT1KcM%2FjpcIPh%2B9027CzqpIy54Jb4BtdRbcFPMTucCj68vJFKG4RMUY0T%2FqCBRbp7LzJGmYiABHQsT1K8Q1wIHAEHBpN%2Bil6jlWQv1Ek7W%2BGfWoO2H9U7FAb%2F%2BaGGZPz6IppaPBYN5WcZRdIycDtWTlfwLVfHkImkkfiC%2BPo3a8Nryu6Fy%2FwzV2U1WrEWXSsnzQJuURuWvCpkcpvz6lVJqDC1MfLKaahV9F9yto%2BuNt10WyB%2FGBVwZE8e3Gc7nrZ5n5TTIKZIvUsopzCz2KYU1olCKQC4Vq64qXoePlTGICy1Y%2FKTObmLACPi9JL%2Bm11jwckPGbEXMgADp5c5aPLccybaoIzTGwzpTiWstc29ZfYMMjK0ckGOqUBucU1i3x%2FRX32%2Fq33%2FANs34p3OCeBycIZt%2BTp57PUxQxUvEkF%2BLm1yhwjRGzY4LtY2f8RLKiiKMw7qJrNfEKcEZNsSy9J2FTZnC3dgPGzGj8mDpko%2BmrendX53niGN53MYtgf3nnuRCVhyLWcIXXQxXcMHvKEHq3lZON42h8eW6p1K3JbEOequ4Spfao8y1HVwgoqEwZG7HlkzD9PBJMFi0lAOKNl&X-Amz-Signature=93bd4e84a6369ff4db826c56f39b15e3b46fe800ed4ab136affabb635d413f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

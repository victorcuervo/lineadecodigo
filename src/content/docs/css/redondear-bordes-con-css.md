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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMSS6XY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhI3DPT9lhi2aY2oW6%2B5sktWt0d0UBUoPwqEIR38wa8AiAt5zKwj5PNc3LzpvARB3IFkFSbxBWJtVRzSrvIwi1kXCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMxnfrFGiDvTO9cafwKtwDU1yfTFNCBmyiJFTSXGgmJXcDCW3%2BEmtUtCcYoFJBrKJFGoeT4sAJyOcbdhS4CZ%2F%2FvVAm6WG%2FNWxZ2Te%2F%2FbAdewkWQt11Q0lG6tj%2BEhVTpfPdTa5kW4rbDI2K1aZMpuz0Fb26ZISa4uWoTlHHuezEpcN6qyL4Yb%2BEDkgNIC3e%2FnTYOkTfRKjBfEEaIc1OAnzvFGEH0g%2Bfx5AMXjZzk%2FNjC2wKkJm4bI8luDE6Un9YrxhnhPy2kTqEMTsz9ebzjbSVtzcWjv4yHZLh7ndjO0jKpiUAKyfccK1MQ2nQLAYsqJNffPdHP9hC1uRfHFqzcngTTTxgeS7xRDdf%2Fqt4DkQ2Q2rG0kHSFZc5YijndwQZ4PoaeZhoHNZDnrhngrxUiKpLaR8ViK84RMPzqfMNn0FE5fSCIhbQ45KD0rqbQemOcyj9L1jna8XkM2DGiZeNP8zJg4ye9SfwKC1M4G%2B0QnuAnDnwkxGAyPejGkFRHpk3uTeSgYmRlex0r%2ByF6DV53Br%2FAHVRNnY8lGsj7UGR4FwOZBu%2BGDs2p%2FYc2pvoiEJg7Is%2FVjHS4pX28DVrJ4aODRokQTxADs4ZvRcUNJrWVp73RkE6xJe%2BC4KkxZ1YzfIiU2rjQMbyMWKzpH4GcwkwrcvRyQY6pgE%2Bjt7LykFYXKpVNEjacfZROXwqWAePPh1qROgU8lw7gxhGLLYpmBqyAxIxg6QNno7HLXY%2BOxs6xVDfkoWevo2cOXWDIH1AkVobDlL%2B%2Fz5sRNRS60CjVkPYk%2B6MxDcSZoWEUJcMy42oF%2Btz4ut8lnFVEpstde%2BWb1eXVYujgDK%2FrdpfqX3ZZ%2FLgGd%2FEnahJmhSeVDTTh6P%2Fvy0PfVSGlLWSogWpgg5B&X-Amz-Signature=b5f9c86cfd02122fa563e38666340406e8d99ee3cca44628891ac590b6891f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMSS6XY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhI3DPT9lhi2aY2oW6%2B5sktWt0d0UBUoPwqEIR38wa8AiAt5zKwj5PNc3LzpvARB3IFkFSbxBWJtVRzSrvIwi1kXCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMxnfrFGiDvTO9cafwKtwDU1yfTFNCBmyiJFTSXGgmJXcDCW3%2BEmtUtCcYoFJBrKJFGoeT4sAJyOcbdhS4CZ%2F%2FvVAm6WG%2FNWxZ2Te%2F%2FbAdewkWQt11Q0lG6tj%2BEhVTpfPdTa5kW4rbDI2K1aZMpuz0Fb26ZISa4uWoTlHHuezEpcN6qyL4Yb%2BEDkgNIC3e%2FnTYOkTfRKjBfEEaIc1OAnzvFGEH0g%2Bfx5AMXjZzk%2FNjC2wKkJm4bI8luDE6Un9YrxhnhPy2kTqEMTsz9ebzjbSVtzcWjv4yHZLh7ndjO0jKpiUAKyfccK1MQ2nQLAYsqJNffPdHP9hC1uRfHFqzcngTTTxgeS7xRDdf%2Fqt4DkQ2Q2rG0kHSFZc5YijndwQZ4PoaeZhoHNZDnrhngrxUiKpLaR8ViK84RMPzqfMNn0FE5fSCIhbQ45KD0rqbQemOcyj9L1jna8XkM2DGiZeNP8zJg4ye9SfwKC1M4G%2B0QnuAnDnwkxGAyPejGkFRHpk3uTeSgYmRlex0r%2ByF6DV53Br%2FAHVRNnY8lGsj7UGR4FwOZBu%2BGDs2p%2FYc2pvoiEJg7Is%2FVjHS4pX28DVrJ4aODRokQTxADs4ZvRcUNJrWVp73RkE6xJe%2BC4KkxZ1YzfIiU2rjQMbyMWKzpH4GcwkwrcvRyQY6pgE%2Bjt7LykFYXKpVNEjacfZROXwqWAePPh1qROgU8lw7gxhGLLYpmBqyAxIxg6QNno7HLXY%2BOxs6xVDfkoWevo2cOXWDIH1AkVobDlL%2B%2Fz5sRNRS60CjVkPYk%2B6MxDcSZoWEUJcMy42oF%2Btz4ut8lnFVEpstde%2BWb1eXVYujgDK%2FrdpfqX3ZZ%2FLgGd%2FEnahJmhSeVDTTh6P%2Fvy0PfVSGlLWSogWpgg5B&X-Amz-Signature=bb1b44d0e99d735e5174e4f366ca2e4adfeaf1f879c2e52e674ced1ce2b583c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

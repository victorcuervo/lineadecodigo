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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKQJWJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMF5w5MzLVUv7hx%2Bjvk5PPYwky10ckW3f9mH0MBPt87AIhAJM%2BAkywuOYw4CB0kvbiRQHZslvUwJErRgOTvl5S4A1MKv8DCDkQABoMNjM3NDIzMTgzODA1IgzWcFyvmlN6mTAtKJwq3AObWVMqSZabWa18Epllz4dry0XAX%2FcfjDwji57HGQD%2FjQklr%2BTDP6ya0ryKABgMWE73MLAQDXWI2IC5yVWGjEinusYV75eEnLVzqhmVWyv8bkvZ1QkyrbiE8eBxlzYOMg1zz4TKoou1TkY5HNDV1aRwQR3LTsXA0%2B%2BkRmo1sP%2BLxqjHz1WV2pT1MgfhfoPgZpi7Pb1tEAGUopsXGgiTKVky6P%2FybRgCIvs5zRWFgjuhy6z1X7Bebg7w9MsfJgJgVSvQyirIvh0ATWFNBIHC7cc7EKopBz4yMOxmczOgQIxc8%2FKYAgB%2BeoWugOUfrLuK6az%2FMikMSJmCDW%2FupBUlSyO98R%2FFIrK%2FdrGtwcP4p9YR5VG7csv5LaYh3CGFdDelXTVlrq4yDNaxVWk7mUXhNrJT6wYlRRTRK48jsK1umd4lQkrSdbRfZk%2B5r9lDrMCdhp%2BdiN7%2BPQA%2Be44BYY20AAPg5i%2FGT8a3Z4savDG2tNnRFc913B51zPyMySVEPKL1zqEziTh5%2FK1QwJki1PvBP2Sgvgeq6pcxCpXh7aRsjZyfo28TRPbLNcS3EDtJRfZq0C8bifsUPCxFZ3Lg9PwwLlIdYrfptFrzF41oN%2FDqv0p5vftVB6KLI3ftzXg2ZTCqlcPJBjqkAUVwC1vFMQbKTsd6S%2Bdm5a7n%2FHyL2HE0U7Q26DS2QNpSStRbCMsZmynFYG8qy4XDihnIDtjkRvU0C%2FRJEFqrau0ZkQ9QFjYgJ1huo3457JE%2Fo3%2B4pNFGKtYy0Fm57Rbkqye%2FIqhBB83qR9zmDEL9FLqbc4Ql%2FE7WbtFO4HqwODo7eErrx4pn9zNwEATw5jant56cI7nyGsuKY3vnG5JZrE5LwyQV&X-Amz-Signature=7b31e59f2ea05afebbcee40629ea2ac3b56d79306edd08f1e652f10fdac800fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKQJWJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMF5w5MzLVUv7hx%2Bjvk5PPYwky10ckW3f9mH0MBPt87AIhAJM%2BAkywuOYw4CB0kvbiRQHZslvUwJErRgOTvl5S4A1MKv8DCDkQABoMNjM3NDIzMTgzODA1IgzWcFyvmlN6mTAtKJwq3AObWVMqSZabWa18Epllz4dry0XAX%2FcfjDwji57HGQD%2FjQklr%2BTDP6ya0ryKABgMWE73MLAQDXWI2IC5yVWGjEinusYV75eEnLVzqhmVWyv8bkvZ1QkyrbiE8eBxlzYOMg1zz4TKoou1TkY5HNDV1aRwQR3LTsXA0%2B%2BkRmo1sP%2BLxqjHz1WV2pT1MgfhfoPgZpi7Pb1tEAGUopsXGgiTKVky6P%2FybRgCIvs5zRWFgjuhy6z1X7Bebg7w9MsfJgJgVSvQyirIvh0ATWFNBIHC7cc7EKopBz4yMOxmczOgQIxc8%2FKYAgB%2BeoWugOUfrLuK6az%2FMikMSJmCDW%2FupBUlSyO98R%2FFIrK%2FdrGtwcP4p9YR5VG7csv5LaYh3CGFdDelXTVlrq4yDNaxVWk7mUXhNrJT6wYlRRTRK48jsK1umd4lQkrSdbRfZk%2B5r9lDrMCdhp%2BdiN7%2BPQA%2Be44BYY20AAPg5i%2FGT8a3Z4savDG2tNnRFc913B51zPyMySVEPKL1zqEziTh5%2FK1QwJki1PvBP2Sgvgeq6pcxCpXh7aRsjZyfo28TRPbLNcS3EDtJRfZq0C8bifsUPCxFZ3Lg9PwwLlIdYrfptFrzF41oN%2FDqv0p5vftVB6KLI3ftzXg2ZTCqlcPJBjqkAUVwC1vFMQbKTsd6S%2Bdm5a7n%2FHyL2HE0U7Q26DS2QNpSStRbCMsZmynFYG8qy4XDihnIDtjkRvU0C%2FRJEFqrau0ZkQ9QFjYgJ1huo3457JE%2Fo3%2B4pNFGKtYy0Fm57Rbkqye%2FIqhBB83qR9zmDEL9FLqbc4Ql%2FE7WbtFO4HqwODo7eErrx4pn9zNwEATw5jant56cI7nyGsuKY3vnG5JZrE5LwyQV&X-Amz-Signature=c3a501155cf14e6d11c1683a5574247bc9b2e5618cd171464a59e1ed2b638358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

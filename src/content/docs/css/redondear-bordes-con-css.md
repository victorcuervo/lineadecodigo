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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEECWYT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwo%2FKEAOD32P%2B%2Bx52uvscxzWsxR2jxPC7W9QEjrp9zwIgRnCLSdG%2Fq%2BxYQMJh%2FUXopNN6Nh22ArkZqfL8E2PEv%2BUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2FJZeNiKVitMS8ECrcA%2B0H5WSkONDTzfYx5KKa4UuzDlWnFAwVfs6Ta4q%2FOr%2Buu8lLumSojbB7DIxuy2lpmiR0fcGpG8Sal78imNlFugpvIylGyVPntvN38jAl2ckvMjNcpbwva8ZZstGiYqJG4E7ozYNaNTj7jitaLeGXC9WnqHMgKMJ%2BkI7NvsFKkPziwcd9wA6Dr0h9jLpOwWtf3w8sXIGftfBAOJiKYTZ1kpy3cvuahGzBq6lToVarwOhLaEXRLyN2spTwMQjUhcMPtdV%2BM2ArfnBFm1kgPlQarA6%2BrN5Yz%2B%2BagmehUDwR9FSKaAVbdJCD%2BNMmBp4BZJ%2B78zDNFkYan%2BFSJUAY7FVMwRpSPdlqNWHOxD0uehx395FSqcqMEzkwlqnQHu7D%2FBwuo0SdZKAvdS%2BFdm%2BJnnKKQlMFCaVLvUPW%2BEMskKTm2t0x8X9H0CrjW%2FDnWBlH58jDvm35CLlQX06hWWsjn87IVJwjNFbKL7duJQhihQgHggEjzTlGyDf97TO1EHgXU7zIxUJhAKLgSDR5bP1n0Cme8zx2i9ridtHvExwJsrD2WnnflD6V4GxWGzxGZ9p7BIfFa3QK6MtqGB5SbSDkaJZtcLbwbgip%2FwbtBycIQrhNvl1OlApuk2XYkgdWsQoNMJOU2ckGOqUBzIsax7M2wJRKy7h6O4mDSsnS3zBCa0FJpUx59nF8ECq4Lm23EUlc2l64%2FnXRH5GuJQC5k5Gp9d3wjxAb9s4zDNzmFue7qLG3wqGGVdjzukBErb1bs5adnCZ5vWIzznNQrPBO2YjcS%2F4i5tC7v0d2N2a0RD4BUh%2FUBiNwN%2BJ5fBh%2BDRV0Quj1tO5xMNfyrvY2V%2BpmbsSTThfpGQ5dz0%2BmTac4JuOZ&X-Amz-Signature=89fb9a6d797e8a1d738ca0ae296e9feb00d13ad7c393bb7a7a10e871aa32731b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEECWYT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwo%2FKEAOD32P%2B%2Bx52uvscxzWsxR2jxPC7W9QEjrp9zwIgRnCLSdG%2Fq%2BxYQMJh%2FUXopNN6Nh22ArkZqfL8E2PEv%2BUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2FJZeNiKVitMS8ECrcA%2B0H5WSkONDTzfYx5KKa4UuzDlWnFAwVfs6Ta4q%2FOr%2Buu8lLumSojbB7DIxuy2lpmiR0fcGpG8Sal78imNlFugpvIylGyVPntvN38jAl2ckvMjNcpbwva8ZZstGiYqJG4E7ozYNaNTj7jitaLeGXC9WnqHMgKMJ%2BkI7NvsFKkPziwcd9wA6Dr0h9jLpOwWtf3w8sXIGftfBAOJiKYTZ1kpy3cvuahGzBq6lToVarwOhLaEXRLyN2spTwMQjUhcMPtdV%2BM2ArfnBFm1kgPlQarA6%2BrN5Yz%2B%2BagmehUDwR9FSKaAVbdJCD%2BNMmBp4BZJ%2B78zDNFkYan%2BFSJUAY7FVMwRpSPdlqNWHOxD0uehx395FSqcqMEzkwlqnQHu7D%2FBwuo0SdZKAvdS%2BFdm%2BJnnKKQlMFCaVLvUPW%2BEMskKTm2t0x8X9H0CrjW%2FDnWBlH58jDvm35CLlQX06hWWsjn87IVJwjNFbKL7duJQhihQgHggEjzTlGyDf97TO1EHgXU7zIxUJhAKLgSDR5bP1n0Cme8zx2i9ridtHvExwJsrD2WnnflD6V4GxWGzxGZ9p7BIfFa3QK6MtqGB5SbSDkaJZtcLbwbgip%2FwbtBycIQrhNvl1OlApuk2XYkgdWsQoNMJOU2ckGOqUBzIsax7M2wJRKy7h6O4mDSsnS3zBCa0FJpUx59nF8ECq4Lm23EUlc2l64%2FnXRH5GuJQC5k5Gp9d3wjxAb9s4zDNzmFue7qLG3wqGGVdjzukBErb1bs5adnCZ5vWIzznNQrPBO2YjcS%2F4i5tC7v0d2N2a0RD4BUh%2FUBiNwN%2BJ5fBh%2BDRV0Quj1tO5xMNfyrvY2V%2BpmbsSTThfpGQ5dz0%2BmTac4JuOZ&X-Amz-Signature=904d52719ae452fa352e87c6476640786eb0a5afbccf37814a27fe8965569d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

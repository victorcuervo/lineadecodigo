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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSHFAQL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsMqTUiPc%2FOpCddpvc7Z9VmgEYViGmWDn1WEuTRZTi7AiEAk0ukPwy0b96nnfhfxIrpkDC%2FrmGNH4hSIKslwWyNpUMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDxF7kme6bjZ3eGPVCrcA9hv6Ysa8R0hPeJP9XCnNRdRIePG08zoGHvS7oGyHbolA6qoqky6Jzk9%2FqcovHzQ3tAdZW2td2wRSys0FToyiecLEk%2BxqZ9uaf1HUTWxiNi5jI2lDLKDixhsMZidlrx%2FhDgUa8oM54kcpgsIppYTg2JObkuv8U9ztlI%2FZZJIQXJx3VvbKBktCCRPnczSlxFWVi6XL4wmBgNa3h2nLFFbRrhWyN%2FaPzwWl3rKkb%2Bf8gtn0N5pL11XYFg3OAs%2Be4SiAShD0Vxsnj9Lux3B9hnCBAUtYsk%2Bnhq1Kx6%2FTVMEFefc8gAS%2BYT12BOdMnXiu3ZP%2FT%2FkeWlSX8Ok91I8xmIcGbJr6G8jIZwXIg7bQ6UFSwz0YP9QoRFeSmFDD9G4VmqxlK%2F7%2B%2BShieu1oQJMSnn%2BsTXAOxtPQaiXELeWzMdU039rzQnzSjPusCSQCa%2BKxGryLjCjSHwtlEcNEYioKGFxPRe8R9BbY4V8PnMrW6xK8wRkjxOS%2BUOGny9fqwmLUQkyE0XvOqEAzR2AxjCbBje1wrPpSRuu0zzlpRvaB1oq2VJ6d%2BHVRxgFUBE87JSILf3I5X0j7Qs10huSHCAuiue5ie4kj699gIdPo94uuOBtZknzrSIIdHhHc64yjTYOMNSMyMkGOqUBsiWMLEPr3bs7fE5FIb2zHac7U4t1FVFbYepVDj1qFdE4qx6j%2Fda%2BDfdUMjMRtQX%2Bq1GnlvmBBZckraZ8kK63EC79ww50CWHS0j7GzXP8cXNy4B2Z6%2BIv8tfNJZpQFToxsxvswQDs3tEIwjhFmqb7H70FP57Ge%2B5Er5VrovxVKQruBJoOlBQ8yD6c6WonK7VVu0Xet2sknzy6BiYf1dpZCYZgwzTv&X-Amz-Signature=66225b0486a9be2bcf9d359794a0119aa2ebced3d67f5b4ca9ca919d772ccdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSHFAQL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsMqTUiPc%2FOpCddpvc7Z9VmgEYViGmWDn1WEuTRZTi7AiEAk0ukPwy0b96nnfhfxIrpkDC%2FrmGNH4hSIKslwWyNpUMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDxF7kme6bjZ3eGPVCrcA9hv6Ysa8R0hPeJP9XCnNRdRIePG08zoGHvS7oGyHbolA6qoqky6Jzk9%2FqcovHzQ3tAdZW2td2wRSys0FToyiecLEk%2BxqZ9uaf1HUTWxiNi5jI2lDLKDixhsMZidlrx%2FhDgUa8oM54kcpgsIppYTg2JObkuv8U9ztlI%2FZZJIQXJx3VvbKBktCCRPnczSlxFWVi6XL4wmBgNa3h2nLFFbRrhWyN%2FaPzwWl3rKkb%2Bf8gtn0N5pL11XYFg3OAs%2Be4SiAShD0Vxsnj9Lux3B9hnCBAUtYsk%2Bnhq1Kx6%2FTVMEFefc8gAS%2BYT12BOdMnXiu3ZP%2FT%2FkeWlSX8Ok91I8xmIcGbJr6G8jIZwXIg7bQ6UFSwz0YP9QoRFeSmFDD9G4VmqxlK%2F7%2B%2BShieu1oQJMSnn%2BsTXAOxtPQaiXELeWzMdU039rzQnzSjPusCSQCa%2BKxGryLjCjSHwtlEcNEYioKGFxPRe8R9BbY4V8PnMrW6xK8wRkjxOS%2BUOGny9fqwmLUQkyE0XvOqEAzR2AxjCbBje1wrPpSRuu0zzlpRvaB1oq2VJ6d%2BHVRxgFUBE87JSILf3I5X0j7Qs10huSHCAuiue5ie4kj699gIdPo94uuOBtZknzrSIIdHhHc64yjTYOMNSMyMkGOqUBsiWMLEPr3bs7fE5FIb2zHac7U4t1FVFbYepVDj1qFdE4qx6j%2Fda%2BDfdUMjMRtQX%2Bq1GnlvmBBZckraZ8kK63EC79ww50CWHS0j7GzXP8cXNy4B2Z6%2BIv8tfNJZpQFToxsxvswQDs3tEIwjhFmqb7H70FP57Ge%2B5Er5VrovxVKQruBJoOlBQ8yD6c6WonK7VVu0Xet2sknzy6BiYf1dpZCYZgwzTv&X-Amz-Signature=07531cb156fa4bd866c1299d77f1d9ae3d3ab4c631536d2df9dfaddf9d46a095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

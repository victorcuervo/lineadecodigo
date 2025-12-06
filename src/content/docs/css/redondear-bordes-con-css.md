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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPEU47L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlS6mKftAdP64XHaHnal6ilcmnhNVcb%2BQP1ATcwUi1uAiB1aw3pMmDoFQC5%2B3Juz%2B0n7Bvrr6vfFdHLuI62EzcaKSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMT5SiiIn6vJ7twlphKtwDVDkUo%2Fj%2F4kBdgbiH1uAUOmL%2FOskU3M%2BYT2ZbOnsU8sOpbfhr%2FNTyghpxLMxkX8Uw%2F3iNIitqdtgtDTSvLDbzC6Y6hjAKc66%2BBq2V1FoBUFuxVElTBCSxWML4ikwD9LmmWsNqG2DS4Kep5WKHg%2BOaFv32mC1wyv87ZpUx6FZlvtPj4dzGHp4qM2M0oC%2Fl9w27TnAfB1Q%2FDALLxRYw%2FBrOfcT%2Br3Izi%2BRrsYiQHDljjd%2Bmb%2F8otFSnu7WutvQmCOmUXwxXhgnn2eP4%2FCuDJ1YAKb1uScq%2FvyE%2FbRv%2FNRuQZEGo1sRk558raaO7pAypXWbpSpeBer4zBftaoKYv%2FeQnF%2BYDxou0EwZsq9K3%2B4Od2AgvIOvSq5RboPvbBVtaVYLu2kfIr%2FTxWgAGhVgRr0kXJXFhubqCAMpMnlquOv0rQKCDaebssoE8zrAz%2FXNWxMhuCshGm0pkMJyey4DTn7CYnFUrMI5CHF2ONc9f2InymYdmP1SQAnOe6Am15J%2BlphRyA2sqmBc%2B6AjclS9uJ01Ibe37p99Y1miiHrGFJ38u8NcWIbcK0G5Qxv1wwXaLuen2%2Fw7fpSWY8BjjEq2kaBeLAhJNLtv17fvFcqs6A%2BK3k1LdbqAOL0YJ3JNlWUowj%2F3OyQY6pgGhkhrL6AgHrv%2BEsbPBWEF1x8eicmEblyY4LQ0B5T9ZVcvT%2Fr1hC9W2u3hpMSv1%2FIzCJ2sLHlk%2BNt6rjVja8sRO28vwNHeshUKAj8%2BHkoj%2F4QR1LagRytLXdg1r27DgcWpEJMHJGAAZiGGE8goQ%2FZEI6krHjzt5hEV0srKQDHo5BBUWZ2vtxWXEp0Gn9PUM%2B9gEfM6EamGsVrCa0rrWccg4nyK2Rm23&X-Amz-Signature=6631da3ca377545b1a2905c30d3f48293b85ce7e2530fddcbdd34b9601f3eef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPEU47L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlS6mKftAdP64XHaHnal6ilcmnhNVcb%2BQP1ATcwUi1uAiB1aw3pMmDoFQC5%2B3Juz%2B0n7Bvrr6vfFdHLuI62EzcaKSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMT5SiiIn6vJ7twlphKtwDVDkUo%2Fj%2F4kBdgbiH1uAUOmL%2FOskU3M%2BYT2ZbOnsU8sOpbfhr%2FNTyghpxLMxkX8Uw%2F3iNIitqdtgtDTSvLDbzC6Y6hjAKc66%2BBq2V1FoBUFuxVElTBCSxWML4ikwD9LmmWsNqG2DS4Kep5WKHg%2BOaFv32mC1wyv87ZpUx6FZlvtPj4dzGHp4qM2M0oC%2Fl9w27TnAfB1Q%2FDALLxRYw%2FBrOfcT%2Br3Izi%2BRrsYiQHDljjd%2Bmb%2F8otFSnu7WutvQmCOmUXwxXhgnn2eP4%2FCuDJ1YAKb1uScq%2FvyE%2FbRv%2FNRuQZEGo1sRk558raaO7pAypXWbpSpeBer4zBftaoKYv%2FeQnF%2BYDxou0EwZsq9K3%2B4Od2AgvIOvSq5RboPvbBVtaVYLu2kfIr%2FTxWgAGhVgRr0kXJXFhubqCAMpMnlquOv0rQKCDaebssoE8zrAz%2FXNWxMhuCshGm0pkMJyey4DTn7CYnFUrMI5CHF2ONc9f2InymYdmP1SQAnOe6Am15J%2BlphRyA2sqmBc%2B6AjclS9uJ01Ibe37p99Y1miiHrGFJ38u8NcWIbcK0G5Qxv1wwXaLuen2%2Fw7fpSWY8BjjEq2kaBeLAhJNLtv17fvFcqs6A%2BK3k1LdbqAOL0YJ3JNlWUowj%2F3OyQY6pgGhkhrL6AgHrv%2BEsbPBWEF1x8eicmEblyY4LQ0B5T9ZVcvT%2Fr1hC9W2u3hpMSv1%2FIzCJ2sLHlk%2BNt6rjVja8sRO28vwNHeshUKAj8%2BHkoj%2F4QR1LagRytLXdg1r27DgcWpEJMHJGAAZiGGE8goQ%2FZEI6krHjzt5hEV0srKQDHo5BBUWZ2vtxWXEp0Gn9PUM%2B9gEfM6EamGsVrCa0rrWccg4nyK2Rm23&X-Amz-Signature=90f2179c526f0a9a077d90b5f5c3b6654a9fc4fee24f8feb1de3ad9a949ad20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IU6AI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFD6Z5757%2Fq7%2Fhn7nWTgsaoR5B8E8iZtzFo%2B%2BUWrJkmjAiEA5Qzy8bpiqNF1Vo5uQn0oo6OUfWumYceV9bUt1e7NDGEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNPuzNecwnv3DMY46SrcAzYRIoLn%2B7nL0nnu18cyiP3walPGXtDnt6n%2BEogEu6uN%2BTW2ySxrxTSyTUSmwGCLjysV%2Bg3wIkqcyVIg85iX10tdZN6b6ka2zeJghkVruciy81vvpskRqGjA%2F2Q3TLpCGbpj%2BoZ9%2F03grZFZBHt0fq8WMHL1gJozWP9NrLjQj8zgE9JQj2%2FyA1beRfOclUDDyOE3ZHqFmeLfIwMTLP%2B1Co1LjkjnmhBJxIFLUtPUm7Uhua8fTakR9hflnbX6NNw1wVje0GohCA6sUhL6PcTv5RNhbewQ654QDL1JSgSrLWSQ7WYJfFu%2FsG8nbEz4ZMddleXF3IrcP4d9%2BeL2tMoFAI62OykVF7Hzl0MjKf8uzG7yeDRaNMiv0rCA15aD7rGb1FD%2BaMg2bFl9j%2FnjvgW4Ndsbo%2B3iY3BOk2oAYF5itdqadVgs7yqOSogsvQsIVNd%2FFB9nI7%2BUWJbXDyWD0CGaPJfgZRnFjxdfZu63UBpaoXIXbyBy6O0CSACAk9yPlaaUrrSGVnmjZXlohfTWIlYHJPPm1bxhC4KS8aQgKI%2FlJS1Ono%2BZUndh1xmCJMmoThwNo88ld0zhrjrCMHh7qMgsdfpFF22llhwv5eWJdEGf%2BJ1KBoqMTRH9pWg%2BpzAYMMuxiMoGOqUBMHEbkDwa9Bu8g3LtuIxboGRNZ6qDGPx4HXGeajBw9EPWpZb2ZkjWSdMlMhh%2Fz5gxS%2FBdrtKHE%2F%2FUlqjKQOvrHlIrAAk%2Bv%2FTcMjAljWIjO7d18bFeVLJ0IMahDUTHeocxzCxUNP%2Bh06EcaxNP19p1zjxOZzcXj1r7UlMiid09KHLk7OcMyNp6Kh0vhFK2jj2RGLpduHBZ0472HmkABSIJHfCS%2BKnu&X-Amz-Signature=86172afcb88bfb708c1c8f6e816be87b16cdaf8fd3476e715b71b71db7cad506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IU6AI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFD6Z5757%2Fq7%2Fhn7nWTgsaoR5B8E8iZtzFo%2B%2BUWrJkmjAiEA5Qzy8bpiqNF1Vo5uQn0oo6OUfWumYceV9bUt1e7NDGEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNPuzNecwnv3DMY46SrcAzYRIoLn%2B7nL0nnu18cyiP3walPGXtDnt6n%2BEogEu6uN%2BTW2ySxrxTSyTUSmwGCLjysV%2Bg3wIkqcyVIg85iX10tdZN6b6ka2zeJghkVruciy81vvpskRqGjA%2F2Q3TLpCGbpj%2BoZ9%2F03grZFZBHt0fq8WMHL1gJozWP9NrLjQj8zgE9JQj2%2FyA1beRfOclUDDyOE3ZHqFmeLfIwMTLP%2B1Co1LjkjnmhBJxIFLUtPUm7Uhua8fTakR9hflnbX6NNw1wVje0GohCA6sUhL6PcTv5RNhbewQ654QDL1JSgSrLWSQ7WYJfFu%2FsG8nbEz4ZMddleXF3IrcP4d9%2BeL2tMoFAI62OykVF7Hzl0MjKf8uzG7yeDRaNMiv0rCA15aD7rGb1FD%2BaMg2bFl9j%2FnjvgW4Ndsbo%2B3iY3BOk2oAYF5itdqadVgs7yqOSogsvQsIVNd%2FFB9nI7%2BUWJbXDyWD0CGaPJfgZRnFjxdfZu63UBpaoXIXbyBy6O0CSACAk9yPlaaUrrSGVnmjZXlohfTWIlYHJPPm1bxhC4KS8aQgKI%2FlJS1Ono%2BZUndh1xmCJMmoThwNo88ld0zhrjrCMHh7qMgsdfpFF22llhwv5eWJdEGf%2BJ1KBoqMTRH9pWg%2BpzAYMMuxiMoGOqUBMHEbkDwa9Bu8g3LtuIxboGRNZ6qDGPx4HXGeajBw9EPWpZb2ZkjWSdMlMhh%2Fz5gxS%2FBdrtKHE%2F%2FUlqjKQOvrHlIrAAk%2Bv%2FTcMjAljWIjO7d18bFeVLJ0IMahDUTHeocxzCxUNP%2Bh06EcaxNP19p1zjxOZzcXj1r7UlMiid09KHLk7OcMyNp6Kh0vhFK2jj2RGLpduHBZ0472HmkABSIJHfCS%2BKnu&X-Amz-Signature=d7cbb39d1216449afe7589c6535e8f8b93ab4b3a2c4d3e94ecc0ce55a56b5826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

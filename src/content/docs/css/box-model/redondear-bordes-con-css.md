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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVVV77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR1TWi%2FPtKzuLPWxXsxj1sLn72MSnns3gzth%2F%2Fg1WkXQIgfDEoVMV680VTV8qSWVapcEea75xlkT49XCi7C%2BSMzxIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLulunPfCw%2FMiKC38SrcAyGwTnxOA5PTBHF%2Bd5svRtYubRoNmbuuuKb%2B0G2ZgUTbVNncscHyu6lqFtHMbjvM%2BihEnfGuaLDAqKxXeQyjkInPGjibc29WUiFw%2FuKddw6rUGw8WNfKtUb2Fs1himMD5RICksbQGcoJXObaWdBL7HGWaAIDcYEw07DCBRYr%2BV3G30VpMo9Tz6MJYpqqORxEeEQu6XhyV8i1vPcl6DpXYzumARUQhvq8OVVWpqO7epXqby%2B3Q13k2Enpu3r6h9UyzW7iYDeCejfD9N1U%2BZ01oTwWiEyW3MixbanLmP%2BLzbAQ5uEWWBhSRzprw82WxC4UKLBrFpW659xKPtlEjFhMB0Z1kxWVghH987aqmRZeTd%2Fwlx4fv8WEfu8USSsIndzIuznpSTdxfPVxc6pNovj20MDrh4xo35Okr2DEp%2FoTUlvfmfawcYXQkvVKiR8Bz5ZCNbDAs2%2B7AB8RG8BjCeLyCFjbzbEI2Jd4QBYDK7SCTVbexRwDZFb9y4OM0nv60U%2F%2BWxHulTDMlUzs%2BRMkD7iBq5QoHHGDek1rD95dUQDrzAQ49f07VC8W6ZkrC%2Be4pR7802JJp%2BabqbmO%2BKkgOyI6nUhUH22tszhmvl2csCcCEcEMIm6JYPgxvXWYuWiEMNuyiMoGOqUBEwr6e16WNWCE2zxctvSHaU%2B1xHH%2FsyBoskQ8D6eUy3lDLgIZw46rMDRz0wGYZafSchZt1clL6xNHdiIaS%2BPkgmr2Mv8wjPOtlrBlYVj1RQBAkWQSkMFPNGeXxyRXJG2%2Bw5QyB4fHrndfCuRMdLKcxUkY14prCB59VKIaUEArPdWTAAXKR%2FWY5JTrfBUvTIL2WINZbMiISP7Ku5YzzhEA%2BuV%2B0pDZ&X-Amz-Signature=32d61c24bfb5d6b8d772d357ba71d17156a500316e8bda3caa0b88def2f64958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVVV77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR1TWi%2FPtKzuLPWxXsxj1sLn72MSnns3gzth%2F%2Fg1WkXQIgfDEoVMV680VTV8qSWVapcEea75xlkT49XCi7C%2BSMzxIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLulunPfCw%2FMiKC38SrcAyGwTnxOA5PTBHF%2Bd5svRtYubRoNmbuuuKb%2B0G2ZgUTbVNncscHyu6lqFtHMbjvM%2BihEnfGuaLDAqKxXeQyjkInPGjibc29WUiFw%2FuKddw6rUGw8WNfKtUb2Fs1himMD5RICksbQGcoJXObaWdBL7HGWaAIDcYEw07DCBRYr%2BV3G30VpMo9Tz6MJYpqqORxEeEQu6XhyV8i1vPcl6DpXYzumARUQhvq8OVVWpqO7epXqby%2B3Q13k2Enpu3r6h9UyzW7iYDeCejfD9N1U%2BZ01oTwWiEyW3MixbanLmP%2BLzbAQ5uEWWBhSRzprw82WxC4UKLBrFpW659xKPtlEjFhMB0Z1kxWVghH987aqmRZeTd%2Fwlx4fv8WEfu8USSsIndzIuznpSTdxfPVxc6pNovj20MDrh4xo35Okr2DEp%2FoTUlvfmfawcYXQkvVKiR8Bz5ZCNbDAs2%2B7AB8RG8BjCeLyCFjbzbEI2Jd4QBYDK7SCTVbexRwDZFb9y4OM0nv60U%2F%2BWxHulTDMlUzs%2BRMkD7iBq5QoHHGDek1rD95dUQDrzAQ49f07VC8W6ZkrC%2Be4pR7802JJp%2BabqbmO%2BKkgOyI6nUhUH22tszhmvl2csCcCEcEMIm6JYPgxvXWYuWiEMNuyiMoGOqUBEwr6e16WNWCE2zxctvSHaU%2B1xHH%2FsyBoskQ8D6eUy3lDLgIZw46rMDRz0wGYZafSchZt1clL6xNHdiIaS%2BPkgmr2Mv8wjPOtlrBlYVj1RQBAkWQSkMFPNGeXxyRXJG2%2Bw5QyB4fHrndfCuRMdLKcxUkY14prCB59VKIaUEArPdWTAAXKR%2FWY5JTrfBUvTIL2WINZbMiISP7Ku5YzzhEA%2BuV%2B0pDZ&X-Amz-Signature=3866e25a0b3d0c64e113db2c10186d96fc8284d38cde6e63779b07141e5d1e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

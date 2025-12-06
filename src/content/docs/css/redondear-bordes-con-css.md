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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLYHBFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCF4z5o9K6EealBDjRHhLpFyEhLEvfVzZhO0wtievrqwIgdl8DC8Ogr66pVoY3cgCsucCfqv7uxcKakwwOSDH6tH0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBAs8txt9p8jc%2FBMVSrcA2fzIDBr%2B6wfQnIn96qmy2sVwi%2Fh1nXLhwrrxX9kDlNO5kXnPZvGp8yuY0%2BhKSx5I4%2B968Q6KspiWtl01jUwI8Hys7qb4GZAFZLMnBcSQQ9p5p6nle7WYtdnvj4wvS8dPdmp7Bk%2B7p%2Fs9x264gHPSovF%2FQ8GKdhNO5jzfwl5qR8tF%2FWeOm0w4aPoJbLE9eMBryK1P6cMNbCaPLzqnxWLuz%2B5Aizg%2Fm12KhZ9oQ2jDMXVdLLCQT1I8KduyUvrnN4fp8l4foyKjV9G%2FXW68HkLlWVedBsTNhN%2BIo%2F9tofwnkdgmHqRdziF29s1XFoXAdpuSNXvcRCx1gzzAJlnINUNOUWrmpbUUReYR%2BqWFdhl1JIn4J4V5WSS5UB73j8y9gLyZlzvzWseNAWcRYMuaIDoJjrfdZTckZyJGcK%2FLgUw7q8a4mSBDmyF0x8BGTnqv8iJFJx5OSpkiDjbDUzrQux%2FF2UbsPy3p%2BoA5frsj4nNoZxsLllV4eSyffPVoVB%2BJoCq9Mip2FOacNBjDzsRRKl1rWVxkz0xPktGCik9DGF99VXQqvJIi%2F83z2OzE627j%2BkqVnAuogytTlkNV%2F4dIiplXq8jyv%2F7C8X%2B3S1%2FmAp1F6nUdd1ePU3pACsgno8BMN7H0ckGOqUB0VgP%2BwsIVXRS8pUdr35G4XGiOLZbSgRB90wlBLME%2BXI1aX9075OvMrNwdV0kePbccDfskXO6XZfgOObG1rEVq7UaKgypih5S0xq2fx48tEfehTkTBOS8HFSOmupVLIPZsr1ECgif0IPjlU%2FVYX1V7mILnCSyCG4jOp%2FCDrNeUyIH4vR2MHiy1mmzs7i5SmRIFvKdBEAzZNYNchibiZfQNA9FKhUn&X-Amz-Signature=048192494bbd1ca567098f645e8c44aff501a762d185fcec2c259b1760556220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLYHBFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCF4z5o9K6EealBDjRHhLpFyEhLEvfVzZhO0wtievrqwIgdl8DC8Ogr66pVoY3cgCsucCfqv7uxcKakwwOSDH6tH0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBAs8txt9p8jc%2FBMVSrcA2fzIDBr%2B6wfQnIn96qmy2sVwi%2Fh1nXLhwrrxX9kDlNO5kXnPZvGp8yuY0%2BhKSx5I4%2B968Q6KspiWtl01jUwI8Hys7qb4GZAFZLMnBcSQQ9p5p6nle7WYtdnvj4wvS8dPdmp7Bk%2B7p%2Fs9x264gHPSovF%2FQ8GKdhNO5jzfwl5qR8tF%2FWeOm0w4aPoJbLE9eMBryK1P6cMNbCaPLzqnxWLuz%2B5Aizg%2Fm12KhZ9oQ2jDMXVdLLCQT1I8KduyUvrnN4fp8l4foyKjV9G%2FXW68HkLlWVedBsTNhN%2BIo%2F9tofwnkdgmHqRdziF29s1XFoXAdpuSNXvcRCx1gzzAJlnINUNOUWrmpbUUReYR%2BqWFdhl1JIn4J4V5WSS5UB73j8y9gLyZlzvzWseNAWcRYMuaIDoJjrfdZTckZyJGcK%2FLgUw7q8a4mSBDmyF0x8BGTnqv8iJFJx5OSpkiDjbDUzrQux%2FF2UbsPy3p%2BoA5frsj4nNoZxsLllV4eSyffPVoVB%2BJoCq9Mip2FOacNBjDzsRRKl1rWVxkz0xPktGCik9DGF99VXQqvJIi%2F83z2OzE627j%2BkqVnAuogytTlkNV%2F4dIiplXq8jyv%2F7C8X%2B3S1%2FmAp1F6nUdd1ePU3pACsgno8BMN7H0ckGOqUB0VgP%2BwsIVXRS8pUdr35G4XGiOLZbSgRB90wlBLME%2BXI1aX9075OvMrNwdV0kePbccDfskXO6XZfgOObG1rEVq7UaKgypih5S0xq2fx48tEfehTkTBOS8HFSOmupVLIPZsr1ECgif0IPjlU%2FVYX1V7mILnCSyCG4jOp%2FCDrNeUyIH4vR2MHiy1mmzs7i5SmRIFvKdBEAzZNYNchibiZfQNA9FKhUn&X-Amz-Signature=f2e82331fd39a2d262772f3ef3d7a1332ef861ce0a4fce8019bfb0b8c26b505f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

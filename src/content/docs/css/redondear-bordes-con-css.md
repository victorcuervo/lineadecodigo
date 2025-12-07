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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6XEZFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9GXZIL4OcFTNrJb97cjWZCauDH62%2F14pA5yc33euriAiBUq%2FNv%2BUXsVwZXgNpyVM3t5JpkmPNd4l%2FKv1%2BI1BQCuSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUUpZZlBBrUf3aulKtwDCN%2B7Az9DBRdS5bvHxTReXjCZGWW2SW8jViLrjmg9p%2FL3jh8bdLNoilEYw9Ud1h%2B%2BmOW4t%2BhizYyrXLLP2Yf5eHXxCA1i6KLFd7S4GfDnV8mr%2FleWUyzCHIvaXHMcsL6VQiKPm%2BHdFPSXhAJAyfE5wHZWspHUNPmqGb4z9ygOuLgVBinPkmZLHZ0Y1LGCd6Llra1%2Fg%2BjKWuLfpoTlGkjLdVtGS58poy5s9545wlAoqw9inWkAwsH6D4mOb4GZNzdoKAEWs6Hp8bHhtRCOX%2FIrcd3XXGerw7k%2FFLd6cJGTgmS0O%2BwGlmgkGblJ7pWxoIcQsdEdRQx%2FwNa4G6EgEylxon5hWCPHBp3f4f5eiYgWY8o%2BJzbebppYQv4DeM2X4cUFAmm13xtebtT%2FYWSSDv5W%2BfY612X46Go9i%2FuTUYTuBxLJNh5sFnvmto0qGg5FXMEKGQu2CI15N4Q9H%2FXskbPeH%2F17k9j8pCTDwm9gVA6cZg1tEozr6EbESev%2BCKFph2cldpl8wJrgVJ1rvOU9Fd0GIPu91QhQUE9sWZ6BswBJWkwffSK3kb3tSI2JTGn%2F%2BCmoSuootX6dMW3%2FtwjE1dx5k7m6Qx57zPOu1rgqgAG%2BHtwjyS6BgyBHGAod38ow1v3SyQY6pgE97NuXHuaxD9eY%2FYCNt1mUCeo0gtLT3hmR2zgcuHRZBhlY0yx%2FONn%2FAuE6LIvS1UR8VnIjG6h9djnM4tfVOZkJIe1%2F2B%2FddxgQEqwplSl3NLRgdeiTNBcGe0aAXAQeTeylNP%2ByC9xYSG4HK0571p4K4uHogYIlgMg2778IquaQYohb09JW25vFIAFF1k7P48qCgKCoQPiHTwHzr77lFrXMe4t8cM3a&X-Amz-Signature=c685850809f25b0b7c8bcdd867499408a2d157474495c770a20762ef74e5cd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6XEZFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9GXZIL4OcFTNrJb97cjWZCauDH62%2F14pA5yc33euriAiBUq%2FNv%2BUXsVwZXgNpyVM3t5JpkmPNd4l%2FKv1%2BI1BQCuSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUUpZZlBBrUf3aulKtwDCN%2B7Az9DBRdS5bvHxTReXjCZGWW2SW8jViLrjmg9p%2FL3jh8bdLNoilEYw9Ud1h%2B%2BmOW4t%2BhizYyrXLLP2Yf5eHXxCA1i6KLFd7S4GfDnV8mr%2FleWUyzCHIvaXHMcsL6VQiKPm%2BHdFPSXhAJAyfE5wHZWspHUNPmqGb4z9ygOuLgVBinPkmZLHZ0Y1LGCd6Llra1%2Fg%2BjKWuLfpoTlGkjLdVtGS58poy5s9545wlAoqw9inWkAwsH6D4mOb4GZNzdoKAEWs6Hp8bHhtRCOX%2FIrcd3XXGerw7k%2FFLd6cJGTgmS0O%2BwGlmgkGblJ7pWxoIcQsdEdRQx%2FwNa4G6EgEylxon5hWCPHBp3f4f5eiYgWY8o%2BJzbebppYQv4DeM2X4cUFAmm13xtebtT%2FYWSSDv5W%2BfY612X46Go9i%2FuTUYTuBxLJNh5sFnvmto0qGg5FXMEKGQu2CI15N4Q9H%2FXskbPeH%2F17k9j8pCTDwm9gVA6cZg1tEozr6EbESev%2BCKFph2cldpl8wJrgVJ1rvOU9Fd0GIPu91QhQUE9sWZ6BswBJWkwffSK3kb3tSI2JTGn%2F%2BCmoSuootX6dMW3%2FtwjE1dx5k7m6Qx57zPOu1rgqgAG%2BHtwjyS6BgyBHGAod38ow1v3SyQY6pgE97NuXHuaxD9eY%2FYCNt1mUCeo0gtLT3hmR2zgcuHRZBhlY0yx%2FONn%2FAuE6LIvS1UR8VnIjG6h9djnM4tfVOZkJIe1%2F2B%2FddxgQEqwplSl3NLRgdeiTNBcGe0aAXAQeTeylNP%2ByC9xYSG4HK0571p4K4uHogYIlgMg2778IquaQYohb09JW25vFIAFF1k7P48qCgKCoQPiHTwHzr77lFrXMe4t8cM3a&X-Amz-Signature=a19076ca1197b69769642cd47cb0ea281ba04274defdda60957f4dc55c0cb8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

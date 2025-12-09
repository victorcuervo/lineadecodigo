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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCVZZ2W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbAM8guRVFIFWxR9mzjeWWUzP2q%2BGgPgFyq0olFowb7AiEAzaO5H3VlvsQQgPGGVTwSiVv0cQXIqYCo6OAxuwKD0vsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO4ZlsmZvKpFi4EhircA7jGdjkSClmmyx4%2Bv113UhI0mFoHiZ%2B3zyA9rU7KwolGb3oqRIK5Ow0NRXHzKBsneqkSvm7yawXfcVIMI5urywevpCH9qAKdadmVzJYCb%2FOKxIMVl4%2FtsrO0Pf69r4j4RKaNDA67%2BdJViBnWK%2FmWIhgmm53a%2FYBbbvnNaeNG4o6v4qONeyof0sd3obvGbX1qodNLN7LWe273C6PziHGxn7Qleij6vJOrS%2B7O6CSlLFvfptkFjFx8kIAzLlHGTTsAnaHwwxKNJab8UBVPgF8dI3FdA72e5eue1x4KusT3skGtBuXADTpOF6Ky9enUg89ZH5bd%2FV8aY%2FcAQtu%2B9rv5zkpQckS2cXjK39Le1KJJr5ZSKX8ul628RVjk4rdUYfrihuuVtFSy1SqDN0xoNiiPJG9S6rRV8kzy1Bfnv2JOVFt0lc0lbRNbpdT5I%2FOteQF1gZjerTMMDWMa37ZvMRn%2BDStkKpV0sUVNiR1h5N0nkryPDzr7uhg8TnjySDi6APqEiSYBA4HaxGfzoP2JzSWar%2BkJfg4FhiQZq4QLoMCK7bRMyT3iwUYXWREo5Ahxe6XORkC6aUG1ay2JqNTta%2B3dCafSjmVwK%2BX%2FOztYKYGmOrW7RlC%2FPhYT%2BOyRyl8yMJmu3skGOqUB2Bgk914CYEfIFqSsJc0RiOMqG9eH9Vr5A0DZTn6By2m2MXeSFth4Y0QwxVS%2B8wnpvBFsCg2lgovBBkYA5O9iHcS6FpEAV6Jm8tmW4sROZWYVh6FZL57h2g6MQE4FM9byu7SrYWoeKd2D0GvD%2B4h7Wq6E%2FjEbxcDW%2BHBzMWT7FgpN%2Fc%2FFkO4yMfZPt%2B9GekXR1uY6KnxUiIFQwZPdgkWEqUA8yccz&X-Amz-Signature=113979a06cdbde1354e4298ad9413010c38c545d4d9e914a544c97b57ab15ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCVZZ2W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbAM8guRVFIFWxR9mzjeWWUzP2q%2BGgPgFyq0olFowb7AiEAzaO5H3VlvsQQgPGGVTwSiVv0cQXIqYCo6OAxuwKD0vsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO4ZlsmZvKpFi4EhircA7jGdjkSClmmyx4%2Bv113UhI0mFoHiZ%2B3zyA9rU7KwolGb3oqRIK5Ow0NRXHzKBsneqkSvm7yawXfcVIMI5urywevpCH9qAKdadmVzJYCb%2FOKxIMVl4%2FtsrO0Pf69r4j4RKaNDA67%2BdJViBnWK%2FmWIhgmm53a%2FYBbbvnNaeNG4o6v4qONeyof0sd3obvGbX1qodNLN7LWe273C6PziHGxn7Qleij6vJOrS%2B7O6CSlLFvfptkFjFx8kIAzLlHGTTsAnaHwwxKNJab8UBVPgF8dI3FdA72e5eue1x4KusT3skGtBuXADTpOF6Ky9enUg89ZH5bd%2FV8aY%2FcAQtu%2B9rv5zkpQckS2cXjK39Le1KJJr5ZSKX8ul628RVjk4rdUYfrihuuVtFSy1SqDN0xoNiiPJG9S6rRV8kzy1Bfnv2JOVFt0lc0lbRNbpdT5I%2FOteQF1gZjerTMMDWMa37ZvMRn%2BDStkKpV0sUVNiR1h5N0nkryPDzr7uhg8TnjySDi6APqEiSYBA4HaxGfzoP2JzSWar%2BkJfg4FhiQZq4QLoMCK7bRMyT3iwUYXWREo5Ahxe6XORkC6aUG1ay2JqNTta%2B3dCafSjmVwK%2BX%2FOztYKYGmOrW7RlC%2FPhYT%2BOyRyl8yMJmu3skGOqUB2Bgk914CYEfIFqSsJc0RiOMqG9eH9Vr5A0DZTn6By2m2MXeSFth4Y0QwxVS%2B8wnpvBFsCg2lgovBBkYA5O9iHcS6FpEAV6Jm8tmW4sROZWYVh6FZL57h2g6MQE4FM9byu7SrYWoeKd2D0GvD%2B4h7Wq6E%2FjEbxcDW%2BHBzMWT7FgpN%2Fc%2FFkO4yMfZPt%2B9GekXR1uY6KnxUiIFQwZPdgkWEqUA8yccz&X-Amz-Signature=372b9b5611e54646b460e93ec171d4e42202afef918d90445b5917feb6be492c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

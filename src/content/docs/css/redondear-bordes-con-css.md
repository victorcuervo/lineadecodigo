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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NOZ3RV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU9gZzR3rJio7jSrrwCVC7RP%2FdUDoDal%2FCGPu8U7%2BxwAiEA%2BmacIkxfD7nzc7yBkLk%2BamWovUIb5Luq6Tj3NsGoPkAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBL0gSZYohAF6IokCrcA%2FseoqR4CiSU6ti0X0wCiJ1iyHL%2B%2BpdJrVJAQmewxH%2B3%2BV00zPCq02mdmWWz3uxNXyhGAl3wtg8Cpmg6%2B9WSpxQ2l8NtX0hhj48kENJWX53sDHZDxSRerySeLPdGTHwWBm62eMfyPPg8kQDU3vrfYml3lJN0mLB%2FUA8jN3wW9hC8JsbbjkOZuCXLDqZX3s4ejftL15AOK95koxMqnvL6cv4YG3d8knTBBWImMHX5YAKM%2FhHbP0mrdXksXNT0iF5mZmEUiOLmemzul7ylEifojsyjtgHg9GwedTszdr4xtIoL80ChxKepbsybxqOggufrVlo4K2mUVWx7BX5fjXRstGEML9Q25J0H4fIJMFEAP8sF6nV%2BdFFnbCqQLbnlBBh3vvbeybYi%2Fk2ECIbRv01ZVuL3iRfTTHde0eLfz1t5gOp9X9zlIfhC8VikaY91KJnSkzxdcZLBgn%2FtC9rg6aW4IoXJDl6ypLzxZu5u9trtLwiMszuPjVaTEomLzzO4AxX%2FxaLGZOHqyQ3LVmrfhsj1%2BWYu8e%2BNb2Dt%2BalIjU0e%2BL13ePZDtaEk8LZLNLJtn5YIXRlzfMrCSYeJX9NS3P1NbrZ5xjIetuWaUwO5qxIucpHWY%2FnI7bKSvIonTYI3MLya1ckGOqUBGjUR0Zp2Xj13Bh0U3ZhFvqiegi6798WAahKuq89EAbzKAnuLE4rVwWLutRcn1KzQRlgWYz343%2BaEBXE4VYc04aP8wjnJQRIXSvAd5MZk%2F2EkACxHVoRdbFKc9hKn%2FE2H84vU6bPjseU9fYaORCCXxBTHqhzZhiJZSyUhTKhESe%2B7VPxWwTSIiIzkq%2FKQuyPxGNVPWOeAtCzXnRrfV7aMUj%2FTtO16&X-Amz-Signature=838017220de60dc3c65d6e5393ac619be418187c185da00b7d06afa2a884bc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NOZ3RV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU9gZzR3rJio7jSrrwCVC7RP%2FdUDoDal%2FCGPu8U7%2BxwAiEA%2BmacIkxfD7nzc7yBkLk%2BamWovUIb5Luq6Tj3NsGoPkAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBL0gSZYohAF6IokCrcA%2FseoqR4CiSU6ti0X0wCiJ1iyHL%2B%2BpdJrVJAQmewxH%2B3%2BV00zPCq02mdmWWz3uxNXyhGAl3wtg8Cpmg6%2B9WSpxQ2l8NtX0hhj48kENJWX53sDHZDxSRerySeLPdGTHwWBm62eMfyPPg8kQDU3vrfYml3lJN0mLB%2FUA8jN3wW9hC8JsbbjkOZuCXLDqZX3s4ejftL15AOK95koxMqnvL6cv4YG3d8knTBBWImMHX5YAKM%2FhHbP0mrdXksXNT0iF5mZmEUiOLmemzul7ylEifojsyjtgHg9GwedTszdr4xtIoL80ChxKepbsybxqOggufrVlo4K2mUVWx7BX5fjXRstGEML9Q25J0H4fIJMFEAP8sF6nV%2BdFFnbCqQLbnlBBh3vvbeybYi%2Fk2ECIbRv01ZVuL3iRfTTHde0eLfz1t5gOp9X9zlIfhC8VikaY91KJnSkzxdcZLBgn%2FtC9rg6aW4IoXJDl6ypLzxZu5u9trtLwiMszuPjVaTEomLzzO4AxX%2FxaLGZOHqyQ3LVmrfhsj1%2BWYu8e%2BNb2Dt%2BalIjU0e%2BL13ePZDtaEk8LZLNLJtn5YIXRlzfMrCSYeJX9NS3P1NbrZ5xjIetuWaUwO5qxIucpHWY%2FnI7bKSvIonTYI3MLya1ckGOqUBGjUR0Zp2Xj13Bh0U3ZhFvqiegi6798WAahKuq89EAbzKAnuLE4rVwWLutRcn1KzQRlgWYz343%2BaEBXE4VYc04aP8wjnJQRIXSvAd5MZk%2F2EkACxHVoRdbFKc9hKn%2FE2H84vU6bPjseU9fYaORCCXxBTHqhzZhiJZSyUhTKhESe%2B7VPxWwTSIiIzkq%2FKQuyPxGNVPWOeAtCzXnRrfV7aMUj%2FTtO16&X-Amz-Signature=c695cea568e974114ee1cdf8c387d96ed35ce6dd3e4ef7eb1f8e19823e9262bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

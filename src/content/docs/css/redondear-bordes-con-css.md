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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7UIKRA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbl%2Ftd3VScGFSJIByuKDwjAX1BxXYKaL3Ym7gL1KlbgIhAOBtGvC73naN2egDlmriKfszqnjqzJ4Tvf5R8EW22vDOKv8DCH8QABoMNjM3NDIzMTgzODA1Igwicw86K9pMzadGlqMq3APCGZRxyBL8D8npc02B0B3NyeKqYdka32V5tY%2FpQbRdPXVNTZD%2FiUH5QWDeFGa2VBeL1RQXzQbr8mhNRP2AUQjpqtH0erooSrKSEU8aSN5a%2F7dTv%2BB2Dg%2FHbNlK4Cp44q6XpeIPi2Y0AEsTIhqjWAQZAr99Z1T1WVIZdiuHbSEsx294GjUM1AVUMPle8WXjwaYShwAcJyHwgMjvJqSO3i5pAlGlfUDokOOmCTuUIdMCQljEijzKDfM3tLalYSUrCN2Q19N2aB0WfOLeLckxCVWd5xE3xfC%2FBJ9VmPwolgCBnIaCLm7DvlqCMGhncawTpBhoRwRh5BKB75DOMFGZ%2B3kcYWI0FHcNoZAX5uwWi0Otw8k76foPWrHV0EHDILEURd0FR45lN1dQlndREkJMAu158Wxdnnor6%2FOklij1xssPd8GZJysW4Av6nISjLHFgD%2FjIp4EPL%2FFxZ5bBIv9XFa0kyeeYR%2FRpk9wMlKSpsYlpth8FWGWLAaDL9%2BPPsnjiVrqKdIyYv%2FFKB69BbeKv2lGfW3JrKmExYhlb8PXn%2B0lDOsOTQSgoM0JX8qip6LGkbD4O5e2q8Q4No%2BO1SKI9mV%2B6i7KLKp7jGATDO5fOv6i2h5ehCFEpa%2F4Gq3yoTDCs1NLJBjqkAZZE7gD55RLuwkGG3iO4PQXC2okiRfcs2m0hVrVOthcfM7hRuHJvIpUoVw62EIckvrTHrOoD03%2B6PLzTkMY%2Fc3ZXWlZudwDCWcFWVhk5Cv9uASpfaE%2B%2B3j5%2BWq8KKpK%2FiTqkBJ5gtqdIZD3p9f0L3F1GgE76gaax8ZAaXl5noU3WxgCTELtmGU3VgmEQkNAb5atU1CTOtWsuGb3kgUIChTBaQiUf&X-Amz-Signature=ba9e10ecef9e089b8e3fd9be7b8b8da99a2c4440a23bca78762b7b8d333d31d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7UIKRA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbl%2Ftd3VScGFSJIByuKDwjAX1BxXYKaL3Ym7gL1KlbgIhAOBtGvC73naN2egDlmriKfszqnjqzJ4Tvf5R8EW22vDOKv8DCH8QABoMNjM3NDIzMTgzODA1Igwicw86K9pMzadGlqMq3APCGZRxyBL8D8npc02B0B3NyeKqYdka32V5tY%2FpQbRdPXVNTZD%2FiUH5QWDeFGa2VBeL1RQXzQbr8mhNRP2AUQjpqtH0erooSrKSEU8aSN5a%2F7dTv%2BB2Dg%2FHbNlK4Cp44q6XpeIPi2Y0AEsTIhqjWAQZAr99Z1T1WVIZdiuHbSEsx294GjUM1AVUMPle8WXjwaYShwAcJyHwgMjvJqSO3i5pAlGlfUDokOOmCTuUIdMCQljEijzKDfM3tLalYSUrCN2Q19N2aB0WfOLeLckxCVWd5xE3xfC%2FBJ9VmPwolgCBnIaCLm7DvlqCMGhncawTpBhoRwRh5BKB75DOMFGZ%2B3kcYWI0FHcNoZAX5uwWi0Otw8k76foPWrHV0EHDILEURd0FR45lN1dQlndREkJMAu158Wxdnnor6%2FOklij1xssPd8GZJysW4Av6nISjLHFgD%2FjIp4EPL%2FFxZ5bBIv9XFa0kyeeYR%2FRpk9wMlKSpsYlpth8FWGWLAaDL9%2BPPsnjiVrqKdIyYv%2FFKB69BbeKv2lGfW3JrKmExYhlb8PXn%2B0lDOsOTQSgoM0JX8qip6LGkbD4O5e2q8Q4No%2BO1SKI9mV%2B6i7KLKp7jGATDO5fOv6i2h5ehCFEpa%2F4Gq3yoTDCs1NLJBjqkAZZE7gD55RLuwkGG3iO4PQXC2okiRfcs2m0hVrVOthcfM7hRuHJvIpUoVw62EIckvrTHrOoD03%2B6PLzTkMY%2Fc3ZXWlZudwDCWcFWVhk5Cv9uASpfaE%2B%2B3j5%2BWq8KKpK%2FiTqkBJ5gtqdIZD3p9f0L3F1GgE76gaax8ZAaXl5noU3WxgCTELtmGU3VgmEQkNAb5atU1CTOtWsuGb3kgUIChTBaQiUf&X-Amz-Signature=ae490edfa83cc64e0f1d98d9fd1717bb4ad53d07993747584b6686dae7c0fd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

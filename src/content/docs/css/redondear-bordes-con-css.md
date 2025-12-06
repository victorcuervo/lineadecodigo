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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIUNM5T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl6Q7j4OvCkFb9gnqzyZuuASJ99h2J%2BLxsoZIqQQMa%2FAiEAyMJTK4M33KXG4J6OZZd01%2B2hTwEgsaHTBAhloioTNq4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFeY9jMTNwL5fX%2BzLCrcAyIOrjVPaIy3yfxsCYzRNv9wQiErInnEiPJwoAYYkT0B0SHn4ADrIFEkCvfHg2rq5VVqdW03EtsNALKy1Nm%2B57LeiBZODeWlFqDL7%2Bw37uv%2FqchLSkGbDLlvsV%2BsynhzIr9l7qpkLeYNnqBPbc038PIaDNplWyBcqPsVxm%2BuCeqQgr8Ecjh7kyV9CpXmKVGbw4kQkEwU8ojwpD5yhYpGDWJxPMKMHvSvZ1dOJb0eRnPOx552o2%2BbDgVwxFUOIpKHcmCbKZzehgr8cUKa2fnLOtcxmyAM9MY%2BIfD8EECmVljB3q7CABPNS7O0AtPUAPbjO0nO2uQchGgSAZHDvQ%2Bc3JFt042DiQzmSPYF0IKdsgXmEbxHPK6DCvaE%2BC%2BpXex%2BqLHVVKKVyIJ0RurrwskB6S5PdUQTvZH0FOC92ErxlZDy9%2F%2BcA2vaTMKGAu%2BKYDzE0U%2BQ%2Fh9YjZQrpxMjlIK3rDlHtohDYkzVi8lF5jonVAhdXQhMhiDa5Ww67pDpf85iysIoaxPXtseSDLOB%2BY6k2sps4j%2BKIontKq2OCBt3EVnQpJJEI9fQ2eEdf2IUAy8J%2BTY%2FKWa2GZLLTLW48B1AF8q2e%2Bivrx61J49G%2BVABmYMXLWoTHccJ4usEso3AMIS9z8kGOqUBToGVO6OxaVNkYDfW2ftn5TCeG9RU0wGquYpiYsRLG3dOFAS3Uk5yWBRI5E3bSdf4d3xaS3raT7bRpf6ggipywU10IcFP%2FCB3Rn5o8RBEbr5GflwHvoiIXHlsbh8c0dWOP685sn7nb5hjBArFK4eZ7zpX6ntjZ16jLshwnqoB%2FA5Q213jA0YxxQV0DXyCfA7KiCpfmAv0a2YXizA3l7Wzcd9SE0cf&X-Amz-Signature=8ba0edc29e08f2ac112e8eaa766b9f963357582d58e8b21771bd8f0742969215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIUNM5T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl6Q7j4OvCkFb9gnqzyZuuASJ99h2J%2BLxsoZIqQQMa%2FAiEAyMJTK4M33KXG4J6OZZd01%2B2hTwEgsaHTBAhloioTNq4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFeY9jMTNwL5fX%2BzLCrcAyIOrjVPaIy3yfxsCYzRNv9wQiErInnEiPJwoAYYkT0B0SHn4ADrIFEkCvfHg2rq5VVqdW03EtsNALKy1Nm%2B57LeiBZODeWlFqDL7%2Bw37uv%2FqchLSkGbDLlvsV%2BsynhzIr9l7qpkLeYNnqBPbc038PIaDNplWyBcqPsVxm%2BuCeqQgr8Ecjh7kyV9CpXmKVGbw4kQkEwU8ojwpD5yhYpGDWJxPMKMHvSvZ1dOJb0eRnPOx552o2%2BbDgVwxFUOIpKHcmCbKZzehgr8cUKa2fnLOtcxmyAM9MY%2BIfD8EECmVljB3q7CABPNS7O0AtPUAPbjO0nO2uQchGgSAZHDvQ%2Bc3JFt042DiQzmSPYF0IKdsgXmEbxHPK6DCvaE%2BC%2BpXex%2BqLHVVKKVyIJ0RurrwskB6S5PdUQTvZH0FOC92ErxlZDy9%2F%2BcA2vaTMKGAu%2BKYDzE0U%2BQ%2Fh9YjZQrpxMjlIK3rDlHtohDYkzVi8lF5jonVAhdXQhMhiDa5Ww67pDpf85iysIoaxPXtseSDLOB%2BY6k2sps4j%2BKIontKq2OCBt3EVnQpJJEI9fQ2eEdf2IUAy8J%2BTY%2FKWa2GZLLTLW48B1AF8q2e%2Bivrx61J49G%2BVABmYMXLWoTHccJ4usEso3AMIS9z8kGOqUBToGVO6OxaVNkYDfW2ftn5TCeG9RU0wGquYpiYsRLG3dOFAS3Uk5yWBRI5E3bSdf4d3xaS3raT7bRpf6ggipywU10IcFP%2FCB3Rn5o8RBEbr5GflwHvoiIXHlsbh8c0dWOP685sn7nb5hjBArFK4eZ7zpX6ntjZ16jLshwnqoB%2FA5Q213jA0YxxQV0DXyCfA7KiCpfmAv0a2YXizA3l7Wzcd9SE0cf&X-Amz-Signature=5d1358d11e01c6acdd1adcd117dd4803dbf9bd4418709d086fcf33641ad8b0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

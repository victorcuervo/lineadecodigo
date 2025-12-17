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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3GIXCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhCh0g92z%2Fh3ImeIXm6OaojdgMGiqMjoiky6p0K4ceQIgSA0%2FfdS6gJ2iRCxOMWPhHBcbI5Aojny%2BODuMVjzFHbQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP5I4%2BffThWCH91dTSrcA0U4ZIE8EMQSx%2Floty9H83F1ghJHmFNzm6LppDvUTlw4pLML0SLPJBiwtMT4pMKBaqtOhxIUGuiKUWAzwX355aMajovRbnsXDw0UXc72%2FjSbv6ojd5jdbi8b5d2Zu7LlFMLPM2Q49IYFLvtLti0MLnkApOavVj2ZJD5%2FVphTQ8BGlf1jKObA0ncsHW6nXKf7P6%2FDgK7AvGXfpYaGxTugVulglNGDOzK9ZU4p27UXPvkpidkcf50BS2mnUpFKwGEUAuVrXDitHhZ43imikxuC%2FjTEnwSTz9Rayp4VgjiJBcWUZXNmhIzIrGsBsujyZ5ewKst3CBMxOotNcQXeqnKW3iFx8m8p9wDImGNgvBrzx%2Br9XGk4U4yZDEC3wttkxEcfZoCBxXZ8wmVrCf2LhbrM40fLmFz3uq2R%2Fv41Sp4%2FE4NbdphX7bya7ZD1SjOHwfIOqMJ1Pp75uqEOXqDefHJmmgmAzQBLFjnQ1KCPOK4bBNN%2FO4%2Fz5Ic9Smj%2BH%2B29FH4229vWT5dmFsBmHjCkYEfvHGabKy8u%2BBxDRiIuJlFfDL5%2BfhjHTpIapqX7j26Pxab7IyseShmaU68ljed6zgX3XjQ7fwxdt643jm8t%2BY0Qy1kqP33Y1upf7LCybyKWMPHSicoGOqUBiIxajFcjVNzeb03AtakwWhlDanYAM%2FqnSbWtMBJ9cExEbytQjetowo1vINHI7oQI41IXsnwTI3G76WZwCxQO4WGhkrVdY0gVrocIqR37qwr84t3KHQ9yX%2B0PcXuQuSVqMIaBKXLvNNR%2BwXFs%2BRlBnelo9jDl332%2FRDTs%2BvPiBKTgeTZ9JyKa72PQTAI4BUIcmlv4NutsDnpbRN0u3W4ajmrqzqOP&X-Amz-Signature=8112dbce2a1485c5e6f67c3563e540d8a4956df2bbd0f0ace814fbc415559e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3GIXCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhCh0g92z%2Fh3ImeIXm6OaojdgMGiqMjoiky6p0K4ceQIgSA0%2FfdS6gJ2iRCxOMWPhHBcbI5Aojny%2BODuMVjzFHbQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP5I4%2BffThWCH91dTSrcA0U4ZIE8EMQSx%2Floty9H83F1ghJHmFNzm6LppDvUTlw4pLML0SLPJBiwtMT4pMKBaqtOhxIUGuiKUWAzwX355aMajovRbnsXDw0UXc72%2FjSbv6ojd5jdbi8b5d2Zu7LlFMLPM2Q49IYFLvtLti0MLnkApOavVj2ZJD5%2FVphTQ8BGlf1jKObA0ncsHW6nXKf7P6%2FDgK7AvGXfpYaGxTugVulglNGDOzK9ZU4p27UXPvkpidkcf50BS2mnUpFKwGEUAuVrXDitHhZ43imikxuC%2FjTEnwSTz9Rayp4VgjiJBcWUZXNmhIzIrGsBsujyZ5ewKst3CBMxOotNcQXeqnKW3iFx8m8p9wDImGNgvBrzx%2Br9XGk4U4yZDEC3wttkxEcfZoCBxXZ8wmVrCf2LhbrM40fLmFz3uq2R%2Fv41Sp4%2FE4NbdphX7bya7ZD1SjOHwfIOqMJ1Pp75uqEOXqDefHJmmgmAzQBLFjnQ1KCPOK4bBNN%2FO4%2Fz5Ic9Smj%2BH%2B29FH4229vWT5dmFsBmHjCkYEfvHGabKy8u%2BBxDRiIuJlFfDL5%2BfhjHTpIapqX7j26Pxab7IyseShmaU68ljed6zgX3XjQ7fwxdt643jm8t%2BY0Qy1kqP33Y1upf7LCybyKWMPHSicoGOqUBiIxajFcjVNzeb03AtakwWhlDanYAM%2FqnSbWtMBJ9cExEbytQjetowo1vINHI7oQI41IXsnwTI3G76WZwCxQO4WGhkrVdY0gVrocIqR37qwr84t3KHQ9yX%2B0PcXuQuSVqMIaBKXLvNNR%2BwXFs%2BRlBnelo9jDl332%2FRDTs%2BvPiBKTgeTZ9JyKa72PQTAI4BUIcmlv4NutsDnpbRN0u3W4ajmrqzqOP&X-Amz-Signature=27c0c0a8f93b2aa14beb598d4314d9620446ade7c8831eeb8381c4766a834e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

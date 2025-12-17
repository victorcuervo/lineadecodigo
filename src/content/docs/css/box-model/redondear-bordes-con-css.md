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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMXVWDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKKNvYhPfMaMAUmZXlvq4Fb4rkH2kBWj8yZqKUhFdOMgIgZeiHa%2FStoJj%2BlLHyKHGOFB3yCuQYpGRyD4MQn1FhebMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ%2F9HA0qQ5aO84xERyrcA73QTUxFjj%2Fvw98uqlKkTIhQcY7S4c2Nilf4B22AnYykLw8FxLYzL45Nrr6%2F0JkmXACVixWL26Jplayiy09WWFi0i8AdWPG3telRoyDM5oyB8OSonjdzpisCcmPPhS%2FYjKQnFN%2FxFGBz0bHC07MfAM%2B2jYPPb9QnAgcxiRIpvMwQUfcJ%2B1T8sD1hUQJkVNzdjAHmfmGf%2FriwTTTn2uxwSwb%2FbhTqVld9s0z1ZG%2FqkXf%2FQySBBTCJOW26qB07sTYpB045DMo7WQvnL4HmpLOXPBfGONj%2F%2BZ1ays4dyg69DDTLVxNdQNQlBKITPbdmxSZ4iAfKd4tmLXW732tsXuaTsXew4kmJSp3%2FRhQljKB9iGM%2FbYQ99LjHgdPiLIUMh5Ca1qCy9afkUiIfKGQf5LabIYMP72Pdx5Xu7an%2Bc%2FWMRw8gkwD%2FGry5ejRRkzWLPA17LFc05Tp90xw0QfJ1%2FCDsgatyTSAQpTJhMc4q8thdr1stTle7b6NyWyPAgkWGxRnHfacKcJajey9p6nmknhYPhV6g0Q84qvHP1YiwT%2BuVXIH4V0Yo8A%2ByXkbtn5NpLkBMeznHOLpWtlbQWnEhvRQtL1UUeoiDoec38yLYP46XNzhzv5TQ2qfb9jhMG7BfMJiqisoGOqUBiDheWs86ejJUISv2%2B%2FS%2FzOqLTD%2BuVdovG3Vn1Hh5tT3uoY01wIeONTlb2L4yXID2Y7kuSKF0c7a8HIDEW3OKiW11tTTQVRRp44GmhQNYsK6NLb%2F6v15M1WfC506FHfTVarfCsQ9Wng4mykLBYc7N3x47u9Iw1AxFTv3UnrUPEGHFJti%2F8MnSqdY0CKKCloAB%2Bjd0QhAzM5M22J%2Bm03SH87umIRDm&X-Amz-Signature=bbdb207a2031ee56abe3d6a777ed7a21b7c004773cda4e1d62ecee1abe81569d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMXVWDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKKNvYhPfMaMAUmZXlvq4Fb4rkH2kBWj8yZqKUhFdOMgIgZeiHa%2FStoJj%2BlLHyKHGOFB3yCuQYpGRyD4MQn1FhebMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ%2F9HA0qQ5aO84xERyrcA73QTUxFjj%2Fvw98uqlKkTIhQcY7S4c2Nilf4B22AnYykLw8FxLYzL45Nrr6%2F0JkmXACVixWL26Jplayiy09WWFi0i8AdWPG3telRoyDM5oyB8OSonjdzpisCcmPPhS%2FYjKQnFN%2FxFGBz0bHC07MfAM%2B2jYPPb9QnAgcxiRIpvMwQUfcJ%2B1T8sD1hUQJkVNzdjAHmfmGf%2FriwTTTn2uxwSwb%2FbhTqVld9s0z1ZG%2FqkXf%2FQySBBTCJOW26qB07sTYpB045DMo7WQvnL4HmpLOXPBfGONj%2F%2BZ1ays4dyg69DDTLVxNdQNQlBKITPbdmxSZ4iAfKd4tmLXW732tsXuaTsXew4kmJSp3%2FRhQljKB9iGM%2FbYQ99LjHgdPiLIUMh5Ca1qCy9afkUiIfKGQf5LabIYMP72Pdx5Xu7an%2Bc%2FWMRw8gkwD%2FGry5ejRRkzWLPA17LFc05Tp90xw0QfJ1%2FCDsgatyTSAQpTJhMc4q8thdr1stTle7b6NyWyPAgkWGxRnHfacKcJajey9p6nmknhYPhV6g0Q84qvHP1YiwT%2BuVXIH4V0Yo8A%2ByXkbtn5NpLkBMeznHOLpWtlbQWnEhvRQtL1UUeoiDoec38yLYP46XNzhzv5TQ2qfb9jhMG7BfMJiqisoGOqUBiDheWs86ejJUISv2%2B%2FS%2FzOqLTD%2BuVdovG3Vn1Hh5tT3uoY01wIeONTlb2L4yXID2Y7kuSKF0c7a8HIDEW3OKiW11tTTQVRRp44GmhQNYsK6NLb%2F6v15M1WfC506FHfTVarfCsQ9Wng4mykLBYc7N3x47u9Iw1AxFTv3UnrUPEGHFJti%2F8MnSqdY0CKKCloAB%2Bjd0QhAzM5M22J%2Bm03SH87umIRDm&X-Amz-Signature=891d436a529bf235ed9ca5b8b636d29770be6c1f1ae0efa886d3040b11070b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

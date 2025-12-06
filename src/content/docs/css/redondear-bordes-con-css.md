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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSLDFS7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6H3Ux9GvFZacqTNPvr8Ho2oqBN9JktOOWeTL%2BwY5wgQIgIugou%2B4Pw73qYfIgI3dz2CCsLIxGbXN%2BUc7TcZ3xlRcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHwzCByEcCGq%2BjU41CrcA0P6TFMZWXWdY3sZwPAJWfEALLJTYLd%2F42gAidDZLhpSdntuI5Jm7OFQ9zUBgWIC0qR5sVmXUOOd8dpP2QALZIfxCaH1qvOSY5CoquBXeVV%2BvlBB5uiAirP3A4CYjv1MvRQhwJwx%2FSkTwjANM47DEfMJU%2BdQ7hBavKleXScpag3RUrEzTs3lTZ88rP76Gu8KwugSW071DJhsf%2F%2BExnkbW7M%2F0KeOgbSGcelfN8IfreYTCy%2BvAMZzDUctzlKuQcSBHpmWMU%2BiGKPvTEHv9tceEInW%2BgLxVQMJlMJ1wFwx8DB8MQggA1YmGto6jv%2BcLDyWI9vLncbYX8GnmunwrZO5oA7EuXIlTmfM%2Ftabiqk5eVywWPSu3GrrTTbkQ3oA1zbgYZFVrFgfCne6QPRl5GQaSCfceQzS9D%2BJDkIFLx97f7bKjayUgcTtcJGRqaAZGdMoqKSjqst8G0eLnT5k0ZJW8ycSH%2FEGLDfi2IDumKa%2FQPN7ZCs7wBQCIXcgr%2B77PTRhMKTuPf9M5krEcVZ4%2BCpFP85bb7GQXyfZx3OCjyp%2B5WKR7sw4xKtwAA9PW5%2BAOKX2lZG8GHt6N6hABust6iHGOXSqEvKuS28ZYnCOXhPQ9146zl3cyshZQwzc62dAMLDD0ckGOqUBUls657MPT1dW4hqaJUR5PBOAnYUyxcdlC487DBqP61lUpudXXyyUPjQL5TsxppoY%2Bi%2FaSkkuqxEkF7QGMc%2BmF5nMTA%2BFuNjRunN5YVCYMaT6oP3rypVEvA5BCLs1UaO%2BSIzEMO3uDt4o3zcwS%2BcUksDlUE17T%2BE7DLZZCt7D8S6f8AGpfxcpXpi%2F2Khqvz%2FyROn3vM5Q72Oa3gyHAKP9oIX2Zlhf&X-Amz-Signature=fd88c5c34a2efc82d57fe7308e27cb9e79a2d27e55c6363d4a4c7a6426234961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSLDFS7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6H3Ux9GvFZacqTNPvr8Ho2oqBN9JktOOWeTL%2BwY5wgQIgIugou%2B4Pw73qYfIgI3dz2CCsLIxGbXN%2BUc7TcZ3xlRcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHwzCByEcCGq%2BjU41CrcA0P6TFMZWXWdY3sZwPAJWfEALLJTYLd%2F42gAidDZLhpSdntuI5Jm7OFQ9zUBgWIC0qR5sVmXUOOd8dpP2QALZIfxCaH1qvOSY5CoquBXeVV%2BvlBB5uiAirP3A4CYjv1MvRQhwJwx%2FSkTwjANM47DEfMJU%2BdQ7hBavKleXScpag3RUrEzTs3lTZ88rP76Gu8KwugSW071DJhsf%2F%2BExnkbW7M%2F0KeOgbSGcelfN8IfreYTCy%2BvAMZzDUctzlKuQcSBHpmWMU%2BiGKPvTEHv9tceEInW%2BgLxVQMJlMJ1wFwx8DB8MQggA1YmGto6jv%2BcLDyWI9vLncbYX8GnmunwrZO5oA7EuXIlTmfM%2Ftabiqk5eVywWPSu3GrrTTbkQ3oA1zbgYZFVrFgfCne6QPRl5GQaSCfceQzS9D%2BJDkIFLx97f7bKjayUgcTtcJGRqaAZGdMoqKSjqst8G0eLnT5k0ZJW8ycSH%2FEGLDfi2IDumKa%2FQPN7ZCs7wBQCIXcgr%2B77PTRhMKTuPf9M5krEcVZ4%2BCpFP85bb7GQXyfZx3OCjyp%2B5WKR7sw4xKtwAA9PW5%2BAOKX2lZG8GHt6N6hABust6iHGOXSqEvKuS28ZYnCOXhPQ9146zl3cyshZQwzc62dAMLDD0ckGOqUBUls657MPT1dW4hqaJUR5PBOAnYUyxcdlC487DBqP61lUpudXXyyUPjQL5TsxppoY%2Bi%2FaSkkuqxEkF7QGMc%2BmF5nMTA%2BFuNjRunN5YVCYMaT6oP3rypVEvA5BCLs1UaO%2BSIzEMO3uDt4o3zcwS%2BcUksDlUE17T%2BE7DLZZCt7D8S6f8AGpfxcpXpi%2F2Khqvz%2FyROn3vM5Q72Oa3gyHAKP9oIX2Zlhf&X-Amz-Signature=e4fd3a44eb90b4c60c3ae612a3a117a9fab2976c598d00baf448b0e9ca3d8979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

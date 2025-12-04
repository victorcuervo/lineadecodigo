---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBKFWB6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCAxCNvdgeoywkKQqpe3yAFlNnjaubFhHIYRLlv1%2Bn7XQIgMxqRfT4JabUW68bKAtKzKx1wufl13I212J3abJIH6zMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIBacxZyJlkwjFGP8CrcA2cB93AIYrKHjB3YFr8NpEMjJg85OzWdXqS95ASY%2BYdAMgH8ciUZSxHu5wXbsDZsGRcb%2B4DFyB%2F2O%2BnkqOyFjzkdaGACFeV7OQCnuHVv4pigZ3OZ814UAlDQh7XeSpn6ivzoqfxBLG6crESaK%2FwxBp6x6D6CD%2BR1pzwpWYV4lpwn7%2BU66DxL3qlhfVduhPZ8Oh41tkvSFN72mWm8dJT9QSNAJQtY1iXhCYrQ0uEAmQ43gZVmKmDxgEralw6fKu2YpbTRn3TI0IFjEFo%2B6pLm04kXIoU2waakCBFB%2BDf1irZ544B%2BR0bdbTvY%2BXjiAzTgpc0DZi995TOU%2Bp3AFSQhhne98d0kFQaGUOsK8i63VIVa2W4UnqRayMFvo50tER1sxqraS0Nt3pjsia1LHlzJPDUr5vWg2%2B9JiuLsATI5WoIz2YC8XCX8Dnz2FJWZw6f3TLtqKzqbDfpBmapCG%2FhrmKu4y%2Butcop8wzq7t60laxRgTT3GCVvDKO8yBwWaz8KzvI6Hnf%2FcxcHL%2FTez%2FLdSON%2FPMdq5epEEj9tl82%2Bcrz3KnIATlsdNmHUsC2lqMBIiec5Z7E7rqccLeHLrvYPj3Jtga6sB2muj%2BYQz7Cc6%2Fy6JSLNThIifsuiVpQnjMIPpxMkGOqUBGp0STlTefgPfoVRj0Oh3ZTwXD2fBXUvhFl61fvrCyXMSGia2aB3Dio13i8bCh5aUcWHQj0VCcjfFVNSg4mZk2Gi3om3s%2B4TXL6K3Jb6whp1g9Xs%2FOLE%2BVogCUPIZ%2Bekrl%2BAefY8jV0agpUftYU4lsaDPon1QfbbSPnmbfeCMpGlV9E8ZeZyQY3g%2FvrJxqQTzznzygwmZuEppJ90y%2BYCJ00l8fwo0&X-Amz-Signature=9b9b1b0522a529d7e80c9b76d05c195e962f6190101fcf492e3b04159d1dc8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBKFWB6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCAxCNvdgeoywkKQqpe3yAFlNnjaubFhHIYRLlv1%2Bn7XQIgMxqRfT4JabUW68bKAtKzKx1wufl13I212J3abJIH6zMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIBacxZyJlkwjFGP8CrcA2cB93AIYrKHjB3YFr8NpEMjJg85OzWdXqS95ASY%2BYdAMgH8ciUZSxHu5wXbsDZsGRcb%2B4DFyB%2F2O%2BnkqOyFjzkdaGACFeV7OQCnuHVv4pigZ3OZ814UAlDQh7XeSpn6ivzoqfxBLG6crESaK%2FwxBp6x6D6CD%2BR1pzwpWYV4lpwn7%2BU66DxL3qlhfVduhPZ8Oh41tkvSFN72mWm8dJT9QSNAJQtY1iXhCYrQ0uEAmQ43gZVmKmDxgEralw6fKu2YpbTRn3TI0IFjEFo%2B6pLm04kXIoU2waakCBFB%2BDf1irZ544B%2BR0bdbTvY%2BXjiAzTgpc0DZi995TOU%2Bp3AFSQhhne98d0kFQaGUOsK8i63VIVa2W4UnqRayMFvo50tER1sxqraS0Nt3pjsia1LHlzJPDUr5vWg2%2B9JiuLsATI5WoIz2YC8XCX8Dnz2FJWZw6f3TLtqKzqbDfpBmapCG%2FhrmKu4y%2Butcop8wzq7t60laxRgTT3GCVvDKO8yBwWaz8KzvI6Hnf%2FcxcHL%2FTez%2FLdSON%2FPMdq5epEEj9tl82%2Bcrz3KnIATlsdNmHUsC2lqMBIiec5Z7E7rqccLeHLrvYPj3Jtga6sB2muj%2BYQz7Cc6%2Fy6JSLNThIifsuiVpQnjMIPpxMkGOqUBGp0STlTefgPfoVRj0Oh3ZTwXD2fBXUvhFl61fvrCyXMSGia2aB3Dio13i8bCh5aUcWHQj0VCcjfFVNSg4mZk2Gi3om3s%2B4TXL6K3Jb6whp1g9Xs%2FOLE%2BVogCUPIZ%2Bekrl%2BAefY8jV0agpUftYU4lsaDPon1QfbbSPnmbfeCMpGlV9E8ZeZyQY3g%2FvrJxqQTzznzygwmZuEppJ90y%2BYCJ00l8fwo0&X-Amz-Signature=37ecb36df15012b5919a7b56b14df869b0728aa65ea226923357b648184c0049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

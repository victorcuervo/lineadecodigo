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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q74E3T7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApY6t%2FB8x4%2FTiz30LLfsiUvMkQJ%2FOqKDlqknbEv%2BcjjAiEAs10uGGISeG3G7q1T7pfoJYSRQxA%2BV%2BiEsXjpM4Pml00q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPG3RgNzoLkD%2B%2FAz8yrcA6ayeFDwc1j4cchwaZgEWJBsf8yQMTIJLwv392MOiQqvwBE3J2ZtglN8csF%2FhcNIxIH0zNSEs6dAffdK9mWuBHtwUyD04F2y7RmZve2lBHJX2TFbgNqcvk7am2FanXPXfAjNsVqqON8N%2BCWhEZ0xco1z8kYDKWhCsKA1%2FmUSLfMB%2B6S1Rt5Kmep2qb2czexLVjItKiolPjJgtPsWU%2F3XnvKcq%2F778G51%2F2x0dfJoOIa0znGXi47wEqTAQONA3rZruU3xDZb5gn9VNXjG1DVwd9BtjMv%2B2L%2FwvvQD7Ao6pHOzzn5FbzuTCDMFUj9Pmjx2pGsldTJVbPkJE6guH04GrI1JG0uENt9yhkY2B6xIJjJ0MBWJSkorP46SHacx4umkyicQt%2BIvCuC%2B4FTNfI6gnQvxdYQCpIGb5tcd7KQHeiJ7YB7ctVqe2t93t5gHWZSal%2BgGTyFTOrtk%2BTBPumNfehS2GXZ7oYOcnmCbLu6QOYudWLyrrOLi%2F1EuKodxBft90U%2FX7dxuIecwbNrmL8TLYGfXc0dNhdhFHSvfWTjnwxLeWnsUR9usgJw2y%2FsURNTnl2TKmCHvG4FXSrHDVoLWxrB6bcyAgE8VarQnNNzBSb7w7%2B7wK9%2Fev%2Biii4ToMNLhisoGOqUB67NsKq95CP2kjaxaEW9Ii8lyOBAYKJ%2BUbsXAzkHQXyOIpoTaGXjLPupXNqYNuvqXt0JX2jE7Kot%2BOVor8SpXV%2BCQjeYrXgJu%2FGAcrkecHJiCdsyoAtSE9osWUMpcpLM2Q6l0ve1eFQ%2FF3u5%2FZMLlWgg3SocMNTndZimbWXtFpf9IgLFjRChK3vZtR%2BfY2V7hpnqAZfoKni5Q%2F6ISOqNeeYmx9WAt&X-Amz-Signature=0d52ab0e57bcbdda9ee9fcb5cb3709a700128d9dc8c8b420cc4450c680dfac9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q74E3T7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApY6t%2FB8x4%2FTiz30LLfsiUvMkQJ%2FOqKDlqknbEv%2BcjjAiEAs10uGGISeG3G7q1T7pfoJYSRQxA%2BV%2BiEsXjpM4Pml00q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPG3RgNzoLkD%2B%2FAz8yrcA6ayeFDwc1j4cchwaZgEWJBsf8yQMTIJLwv392MOiQqvwBE3J2ZtglN8csF%2FhcNIxIH0zNSEs6dAffdK9mWuBHtwUyD04F2y7RmZve2lBHJX2TFbgNqcvk7am2FanXPXfAjNsVqqON8N%2BCWhEZ0xco1z8kYDKWhCsKA1%2FmUSLfMB%2B6S1Rt5Kmep2qb2czexLVjItKiolPjJgtPsWU%2F3XnvKcq%2F778G51%2F2x0dfJoOIa0znGXi47wEqTAQONA3rZruU3xDZb5gn9VNXjG1DVwd9BtjMv%2B2L%2FwvvQD7Ao6pHOzzn5FbzuTCDMFUj9Pmjx2pGsldTJVbPkJE6guH04GrI1JG0uENt9yhkY2B6xIJjJ0MBWJSkorP46SHacx4umkyicQt%2BIvCuC%2B4FTNfI6gnQvxdYQCpIGb5tcd7KQHeiJ7YB7ctVqe2t93t5gHWZSal%2BgGTyFTOrtk%2BTBPumNfehS2GXZ7oYOcnmCbLu6QOYudWLyrrOLi%2F1EuKodxBft90U%2FX7dxuIecwbNrmL8TLYGfXc0dNhdhFHSvfWTjnwxLeWnsUR9usgJw2y%2FsURNTnl2TKmCHvG4FXSrHDVoLWxrB6bcyAgE8VarQnNNzBSb7w7%2B7wK9%2Fev%2Biii4ToMNLhisoGOqUB67NsKq95CP2kjaxaEW9Ii8lyOBAYKJ%2BUbsXAzkHQXyOIpoTaGXjLPupXNqYNuvqXt0JX2jE7Kot%2BOVor8SpXV%2BCQjeYrXgJu%2FGAcrkecHJiCdsyoAtSE9osWUMpcpLM2Q6l0ve1eFQ%2FF3u5%2FZMLlWgg3SocMNTndZimbWXtFpf9IgLFjRChK3vZtR%2BfY2V7hpnqAZfoKni5Q%2F6ISOqNeeYmx9WAt&X-Amz-Signature=5471f824a724b4cb6d94c51020daf0dfb686cf10f0a77c4d67feda0ebc282954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YAEKB32%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdE8YD2VEaWPrWKswMEBQonk9kOg0FDMg8yd%2BvqVPmrAiEA5dwSqAf75M1tItZTZ%2FQScUOp5rmzisO2vALZAwDgXN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBQ%2Frkd52QZiAk3L0ircA5%2B4CFS0fHaNcBVgKBsD7ajsHEuVF9dvFiFubJnsO%2BZCZfdNbwAtJXNIKNCwg1zkpo90eQnu2zEnG%2FttK3C28XcCXzD4i3JDq5sPXosbGXSog8MTtGTpad38iXByS%2BuSFeEg8yW4OKerDa6I%2FebhIJYxgnhPZCjqJS9hBhfBrbJmdNv28XW6OL4A%2FQVSISoWZvFoM3R%2FHW8c0VEnzJz3GdiCZ2SC60b29Vzk9myoCAdea74voNoTVLZR4JjRLlCQQkawRIhwVfTQTq21nVqth%2FLxUe931WRrFaV1k6k%2Bltgr8nHkWbp2FfebCh3id9TnCrZDyDvrfJiuJvTBhQRRTXS1%2FFy69Eb8ZRMHv52MAxXe0kBfWlU0NGEziX1HwdSkrZHvZ3Kc5BjOBGeMwb0SBdK2Vpkfh%2BTlZV%2Fz%2FVQNk6NGlFQ0k3EdAx0ivMUq%2FkyUjtKAOtUZG7HYtu05WNp7vc6qvdNGNbKeHfzmKlk7pl1%2BguXNhAFPT%2FxSjMctjPqisJqnPfy9tf5bekh6hgxIfLlBAgaEuLAL677ZY%2F0R8SF3NtjvEWqOItgZ6J0sBmXGmMVR7lUAQHUOHx2yeZuS9NRg9ET8rmFx4PjwYq%2F9sNMUxmUHwbtQ%2FeaUEv7rMPeLyMkGOqUBGv2A4OmurF7Oj%2Bj2%2BORqTLk2u5EAf1Yq5SJhAoXd0pTcIIZk3%2FK61mFNDpkH4y1ItoFGmTCzmodnAMfp%2BQcjsbPPxRC3lkSukipRGBA3DaqcdcHbLYWOPNXqh4szeDk9M1%2Fb5Q3IUFwkp2vcCedn%2B4PAZ0vsuVwSvt%2FGfAbRkye9%2Bh1OfrbchD%2FmnqxMdnqrOMzVyE87vrEWEyK0SGk%2BT83Fmvd0&X-Amz-Signature=7b5e830f1004efc59db118545dfa1fcc2a0505ec2c53f9bfb68a0430f9827dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YAEKB32%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdE8YD2VEaWPrWKswMEBQonk9kOg0FDMg8yd%2BvqVPmrAiEA5dwSqAf75M1tItZTZ%2FQScUOp5rmzisO2vALZAwDgXN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBQ%2Frkd52QZiAk3L0ircA5%2B4CFS0fHaNcBVgKBsD7ajsHEuVF9dvFiFubJnsO%2BZCZfdNbwAtJXNIKNCwg1zkpo90eQnu2zEnG%2FttK3C28XcCXzD4i3JDq5sPXosbGXSog8MTtGTpad38iXByS%2BuSFeEg8yW4OKerDa6I%2FebhIJYxgnhPZCjqJS9hBhfBrbJmdNv28XW6OL4A%2FQVSISoWZvFoM3R%2FHW8c0VEnzJz3GdiCZ2SC60b29Vzk9myoCAdea74voNoTVLZR4JjRLlCQQkawRIhwVfTQTq21nVqth%2FLxUe931WRrFaV1k6k%2Bltgr8nHkWbp2FfebCh3id9TnCrZDyDvrfJiuJvTBhQRRTXS1%2FFy69Eb8ZRMHv52MAxXe0kBfWlU0NGEziX1HwdSkrZHvZ3Kc5BjOBGeMwb0SBdK2Vpkfh%2BTlZV%2Fz%2FVQNk6NGlFQ0k3EdAx0ivMUq%2FkyUjtKAOtUZG7HYtu05WNp7vc6qvdNGNbKeHfzmKlk7pl1%2BguXNhAFPT%2FxSjMctjPqisJqnPfy9tf5bekh6hgxIfLlBAgaEuLAL677ZY%2F0R8SF3NtjvEWqOItgZ6J0sBmXGmMVR7lUAQHUOHx2yeZuS9NRg9ET8rmFx4PjwYq%2F9sNMUxmUHwbtQ%2FeaUEv7rMPeLyMkGOqUBGv2A4OmurF7Oj%2Bj2%2BORqTLk2u5EAf1Yq5SJhAoXd0pTcIIZk3%2FK61mFNDpkH4y1ItoFGmTCzmodnAMfp%2BQcjsbPPxRC3lkSukipRGBA3DaqcdcHbLYWOPNXqh4szeDk9M1%2Fb5Q3IUFwkp2vcCedn%2B4PAZ0vsuVwSvt%2FGfAbRkye9%2Bh1OfrbchD%2FmnqxMdnqrOMzVyE87vrEWEyK0SGk%2BT83Fmvd0&X-Amz-Signature=a0f8c719e481bb0cdb21782956848db2acd7a8f8c0d44e73045922f4c4eba7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHZOLC3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFC2ZM4obt3YSclQ9eBzTe8LLAiA3l7YFq6Qx%2FP7EKrAiAmmsgo7fvmPTbvCaTeE2Ohc8gC%2BZBPAJz7uY5V8VYzqSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrzz20MUEB5HAiMTOKtwDdYM1xiyUEui069CLrJAdIVIOQ4yps5ZBc2aGUdr6yzS21cTvW05U4VRWRUslJl9JHyD6LeMwJHt%2FqjJuYoiHC4q2Oo7DrpZDluL9quXxMCBdRz%2B5u0NZ5GJt4IWFn4AjIfmoLVdMsm%2BokNxdbLqQY4oNY34YATwC1%2F0zkqMzYo%2F7DxFMX1W0bAn5bY9XhGl2krcV8cSUB4DYG7mZdkWlrqgyz0evI%2BWeeBMvAaIVrgrmPpnFURPnvMeWNkDX2wzHZGP0hOUtpMfjarfg7pn11VEjVW57cH6KRwG9EXfeO5%2FvK7RghWoJTuCjb9iNUSNmg60AWn%2B3gjdwqTyQSYDzY1G0drdIrxAKZo8nhvbWOh1wGVCOaI7pUMnFTxOJCwrebkOJW%2F53R5JXDfUwQF%2BRh5jmfHGRiBVMu7Fht4tnIAOf3jM3e%2FJ27HoZY6h%2BSRxuT98uvn7F6oyo01eMlfjTj8ot4%2FAUvaTqvsYQuuZC69M8x1i73JHLHkWGQ5B0nkj%2FAbB%2BmGlSweTIA9%2F2HcARndg3NZW5qOyb5x18SBOTUfjjMup1vBvMRdN03GwGhigG%2BryRYtXEbEtUGjlo90lpr6Vyvi18UrcyaduCgcngqQVbz8crg3R2xIFvdpQwwIfcyQY6pgEAknizd8%2FStbv%2BA%2F0afMH5mcRR7ycY%2FGGHbF9E2u7Lra9rSK2STeIijtgXxmknyfSh6K8U%2BLxNEBKKnYe%2B4dKtrUKEJfEBHusko9vMw1ryuyMrND742sbdmKiywBcAuYxc2Rg2bXoGVmkaiDoYfaKdDl77uj2yKLpeYgP4jhgIxa8VatLScY84aDoPZRvZXDHMFuHKjtNR3y1%2BRoKoIRWQxJYrR5zX&X-Amz-Signature=df879b19bafe776435f0d2527ed6d0373a9272d9dcf05274b33d8db88df66274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHZOLC3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFC2ZM4obt3YSclQ9eBzTe8LLAiA3l7YFq6Qx%2FP7EKrAiAmmsgo7fvmPTbvCaTeE2Ohc8gC%2BZBPAJz7uY5V8VYzqSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrzz20MUEB5HAiMTOKtwDdYM1xiyUEui069CLrJAdIVIOQ4yps5ZBc2aGUdr6yzS21cTvW05U4VRWRUslJl9JHyD6LeMwJHt%2FqjJuYoiHC4q2Oo7DrpZDluL9quXxMCBdRz%2B5u0NZ5GJt4IWFn4AjIfmoLVdMsm%2BokNxdbLqQY4oNY34YATwC1%2F0zkqMzYo%2F7DxFMX1W0bAn5bY9XhGl2krcV8cSUB4DYG7mZdkWlrqgyz0evI%2BWeeBMvAaIVrgrmPpnFURPnvMeWNkDX2wzHZGP0hOUtpMfjarfg7pn11VEjVW57cH6KRwG9EXfeO5%2FvK7RghWoJTuCjb9iNUSNmg60AWn%2B3gjdwqTyQSYDzY1G0drdIrxAKZo8nhvbWOh1wGVCOaI7pUMnFTxOJCwrebkOJW%2F53R5JXDfUwQF%2BRh5jmfHGRiBVMu7Fht4tnIAOf3jM3e%2FJ27HoZY6h%2BSRxuT98uvn7F6oyo01eMlfjTj8ot4%2FAUvaTqvsYQuuZC69M8x1i73JHLHkWGQ5B0nkj%2FAbB%2BmGlSweTIA9%2F2HcARndg3NZW5qOyb5x18SBOTUfjjMup1vBvMRdN03GwGhigG%2BryRYtXEbEtUGjlo90lpr6Vyvi18UrcyaduCgcngqQVbz8crg3R2xIFvdpQwwIfcyQY6pgEAknizd8%2FStbv%2BA%2F0afMH5mcRR7ycY%2FGGHbF9E2u7Lra9rSK2STeIijtgXxmknyfSh6K8U%2BLxNEBKKnYe%2B4dKtrUKEJfEBHusko9vMw1ryuyMrND742sbdmKiywBcAuYxc2Rg2bXoGVmkaiDoYfaKdDl77uj2yKLpeYgP4jhgIxa8VatLScY84aDoPZRvZXDHMFuHKjtNR3y1%2BRoKoIRWQxJYrR5zX&X-Amz-Signature=4026e52c0eebccd84e40dc01ffc8a56f37f6d4cb7590e5d54aaa87bb90108217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

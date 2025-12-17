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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEJYEIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzjF5%2B5sptuLCuabURSg0%2BK8BdeotY92asB0xtAGanAiEA5xnLJcY77ZN4tN6Gfu5%2F%2FSUUiVXCzNVtDH2EkCMNCHAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMh0%2FHYUxb%2BJdtthCrcA86Y9ASLSVndgM39N0nP2Kcu4pf5yyhpyHLFpBrjbtMOobBoZGczgr8rRA%2BpFXUHW67uHyODGfn6FR5FxtbBjwh36wxME8HkTraVhflQqgcZnaHTdQI4rV0dOca0MrySI6nxIF80dKQkhuPMdDP5S3Q9lJRtRmp5VjHa0sc9gKivXYrs9aR5H%2BPWsFr8JXxdx3BwXpgReE77Kp2asnM5qEouV5e3iO4aolVaMqqI04hO3BYJ7kkpw7EgljsAcxRjODZODsalUTgjBcrsuj6n%2BTal76J6E%2F7TAtz2Hko4%2FiPTsb9UFEd2Zm2Yb9Q6KOxdK30FjWIz%2BThZcEE7GK6MxYcy4xgAeKuPJrPXEhfvIVlzB4WBjIrsHwX%2FlyJ%2BhWaVdPiquuxDJT7iU2%2FuZIKO33Qn6HU1aowdkFbGhEmEPiXtJgkWfnfAeQcsjWdUbXNIXzrZNi4hP1ozOmDsS7s2qvj%2FM1HLVLXm%2B0N1ilLCFwKrav6mG91RTzhq1OVYNUP9Fx8frm%2Bv%2B89VgC8SFPebldre%2FUetTdeOKSZAKiCqUv3C%2FLOl0pAb8WiEt5wf1zkJ8ZiaWMpJrja3qpnBIQzh%2BUt8%2B9kBtmy6EhIb6zcuqXVxqciwrUi0og0h5%2FeMMPCgi8oGOqUBHgmRlQgzSnXm4sDjZTBsIp6hzK2a97Ta%2FyF9m9BMsG%2FtMsFosikNhbSPmQgoFPgZUSKVJhzmF2hZadibraQVTAP%2F1zt%2BcGuOG0gDl9Ovvqre0kwASxw5g8wmYmRRRx7GhQSWKPXg59pjC842RFt8G1QHFkIhoG9qK95dRk%2BUG57EDXSG0bsh7g8symjvdiXKkgqN9yeKR6qx%2ByQ%2FyXYQ08z6K%2B1j&X-Amz-Signature=a886c94056c7d4950f088629dcfa56b24ce35dcca3b23306d8d8f6abc1ee79cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEJYEIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzjF5%2B5sptuLCuabURSg0%2BK8BdeotY92asB0xtAGanAiEA5xnLJcY77ZN4tN6Gfu5%2F%2FSUUiVXCzNVtDH2EkCMNCHAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMh0%2FHYUxb%2BJdtthCrcA86Y9ASLSVndgM39N0nP2Kcu4pf5yyhpyHLFpBrjbtMOobBoZGczgr8rRA%2BpFXUHW67uHyODGfn6FR5FxtbBjwh36wxME8HkTraVhflQqgcZnaHTdQI4rV0dOca0MrySI6nxIF80dKQkhuPMdDP5S3Q9lJRtRmp5VjHa0sc9gKivXYrs9aR5H%2BPWsFr8JXxdx3BwXpgReE77Kp2asnM5qEouV5e3iO4aolVaMqqI04hO3BYJ7kkpw7EgljsAcxRjODZODsalUTgjBcrsuj6n%2BTal76J6E%2F7TAtz2Hko4%2FiPTsb9UFEd2Zm2Yb9Q6KOxdK30FjWIz%2BThZcEE7GK6MxYcy4xgAeKuPJrPXEhfvIVlzB4WBjIrsHwX%2FlyJ%2BhWaVdPiquuxDJT7iU2%2FuZIKO33Qn6HU1aowdkFbGhEmEPiXtJgkWfnfAeQcsjWdUbXNIXzrZNi4hP1ozOmDsS7s2qvj%2FM1HLVLXm%2B0N1ilLCFwKrav6mG91RTzhq1OVYNUP9Fx8frm%2Bv%2B89VgC8SFPebldre%2FUetTdeOKSZAKiCqUv3C%2FLOl0pAb8WiEt5wf1zkJ8ZiaWMpJrja3qpnBIQzh%2BUt8%2B9kBtmy6EhIb6zcuqXVxqciwrUi0og0h5%2FeMMPCgi8oGOqUBHgmRlQgzSnXm4sDjZTBsIp6hzK2a97Ta%2FyF9m9BMsG%2FtMsFosikNhbSPmQgoFPgZUSKVJhzmF2hZadibraQVTAP%2F1zt%2BcGuOG0gDl9Ovvqre0kwASxw5g8wmYmRRRx7GhQSWKPXg59pjC842RFt8G1QHFkIhoG9qK95dRk%2BUG57EDXSG0bsh7g8symjvdiXKkgqN9yeKR6qx%2ByQ%2FyXYQ08z6K%2B1j&X-Amz-Signature=cc8cf312d08e1ebd33ee4afe13b5028af0b8212adb15a74ce6932ed069f21f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

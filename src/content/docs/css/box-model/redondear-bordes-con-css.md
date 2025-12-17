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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIWYXU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEw%2F%2FziExWE2Yu6G%2FIfJzCpeD4RMOK46j8ex0zffS8vAiEAzE4DhZjWGt5r1aECWy35O48H%2Ftl%2BqczYHph%2Fw6ou9SQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL2yocfzaBu8tkJOSyrcAxrmR%2BlLlC%2F6B3Ofz8s2x6NTH4Vz3QT2fDktuq391Mxwreqdwo4nbfC%2B8cF8vooZ391X9Kt4m8tGSe0mIW%2FA%2BzcRiWcta3RX65KF94%2BvEV57RovMxSkVazw1PbDCf40Q6cbTDMf%2FkHZILPtKOZdkCVw5KfkyinWqC4kg4FLgijsmic%2F%2BupZDuPpBTlvfF%2Bf%2F%2Bm9MniKHm9KggUknycEe8E4CGqFfdlfLuATaPQsuWhvhCiFT%2FM6IE8wK3OMBGPMRlKWiFfVayqIcykawmK1cao9dVbVmgAvf2Ds2HungYAnmchmO6RbfhmUvqTIpr4oQ7iRCHNuCqb36Yl5mBNDwzokwbIDTdebXYQq8NUvsiq0jVrxLbkySkDlEzgTuukzjBNiKeKwWZFcCRCaufFozlkH7ZbmjeHNJ1reGrJQVtIJsUxGnz7YOITVD3htfaAFHEa1WmzEmAqyl%2BCv718ySn2N0rBtF%2BOs950IgMplIyc2ik%2Fq5sUCJNKWBAdkNHahGCTBjWekUqULeZ8xNJ77dOvNCPPw%2FmrYxAVeIop%2FRefzxZ28MWm2k%2Fob0218%2FLmGfxJxZ%2FNdD67eGCECNeyB%2BhIkphi0MaFBjgF6LzEo%2Bs4heYycljHgnaM4QSj2cMI%2FRicoGOqUBp2nQ%2B1OU7jc1X9bgnUSn7gnUX1roBglaRUSJgoGjQlKm3qZi%2F%2BCDK%2BdaADb78PNpez1so1vVLVP%2B%2Bi3W%2Bd%2FpcUBqZixJBPpTjbQR1KSmkyg9J4yrB7Db8oQ9%2FJfURrTmY1MJCsNicdU6O4nquZpDNrxsqJkixFIynorBa5OGVGL9xK38Sq2g4F9pvO6YxwJSR2OiqmGhAf%2BUfdibVhA92rQgceOa&X-Amz-Signature=b8e3f0a196d73a5c57bbd02d7dcd0e9ef5fffa7eb24fd3535e5f75c067f657e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIWYXU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEw%2F%2FziExWE2Yu6G%2FIfJzCpeD4RMOK46j8ex0zffS8vAiEAzE4DhZjWGt5r1aECWy35O48H%2Ftl%2BqczYHph%2Fw6ou9SQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL2yocfzaBu8tkJOSyrcAxrmR%2BlLlC%2F6B3Ofz8s2x6NTH4Vz3QT2fDktuq391Mxwreqdwo4nbfC%2B8cF8vooZ391X9Kt4m8tGSe0mIW%2FA%2BzcRiWcta3RX65KF94%2BvEV57RovMxSkVazw1PbDCf40Q6cbTDMf%2FkHZILPtKOZdkCVw5KfkyinWqC4kg4FLgijsmic%2F%2BupZDuPpBTlvfF%2Bf%2F%2Bm9MniKHm9KggUknycEe8E4CGqFfdlfLuATaPQsuWhvhCiFT%2FM6IE8wK3OMBGPMRlKWiFfVayqIcykawmK1cao9dVbVmgAvf2Ds2HungYAnmchmO6RbfhmUvqTIpr4oQ7iRCHNuCqb36Yl5mBNDwzokwbIDTdebXYQq8NUvsiq0jVrxLbkySkDlEzgTuukzjBNiKeKwWZFcCRCaufFozlkH7ZbmjeHNJ1reGrJQVtIJsUxGnz7YOITVD3htfaAFHEa1WmzEmAqyl%2BCv718ySn2N0rBtF%2BOs950IgMplIyc2ik%2Fq5sUCJNKWBAdkNHahGCTBjWekUqULeZ8xNJ77dOvNCPPw%2FmrYxAVeIop%2FRefzxZ28MWm2k%2Fob0218%2FLmGfxJxZ%2FNdD67eGCECNeyB%2BhIkphi0MaFBjgF6LzEo%2Bs4heYycljHgnaM4QSj2cMI%2FRicoGOqUBp2nQ%2B1OU7jc1X9bgnUSn7gnUX1roBglaRUSJgoGjQlKm3qZi%2F%2BCDK%2BdaADb78PNpez1so1vVLVP%2B%2Bi3W%2Bd%2FpcUBqZixJBPpTjbQR1KSmkyg9J4yrB7Db8oQ9%2FJfURrTmY1MJCsNicdU6O4nquZpDNrxsqJkixFIynorBa5OGVGL9xK38Sq2g4F9pvO6YxwJSR2OiqmGhAf%2BUfdibVhA92rQgceOa&X-Amz-Signature=81e7f13386fdf5104a9e5a29b19fdd91ed21adf6dc97428ee44439f7dc1197d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

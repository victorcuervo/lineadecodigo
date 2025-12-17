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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSUNF6F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4l6ZR1Gp%2FxpB%2FP6jkIlrF5%2FrIUb0E9F3%2FIAsHd7rUFwIhANGBWfUUMiXgFPXSL3aWB2bIv%2BSj%2F3ZcuKog9Xb71CfQKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzHM2%2BMookjYmE%2B0gq3APrpDPLNM%2FzfDlkDAe%2F3BLi%2FszAndfMwbECyJL%2FZVK4G06YCB0DOT%2Fwog390L9uVgv0km8qqA2JNSeYHzCFfiqNeoULfS25rjiOr%2BpMdwd6LyXo0k%2BwsTzoBkpPXoWj4Ra8T%2FlDgisK1I%2FWd6ay8Lh9rQ4HweSJr8HoeAFsJc8RyZAHsk7%2FQ%2BpSJcbVTswSN%2FXM3qSUUA5MbtYia2JimYY6OvzIWTt7aZvdc1jFEpJJoeeu1NnCJdEeb9PFiYaKXBdtQyzD9wkkNAHUK5TtRkLgo6yQ3KTlPcNV3fOXZt7W1DhlOwU8A17tR9E%2BlehItiiJNvt1VDbx6epzgN1UmU4wlia%2BvozPezrNh4ypOACO4CxZcy8MGtM76QoyQ7WE1cJyOcxQ4dSettJVI4mD41NSPwlyd2CIC0TfUzv%2FDmTQruNgVpfAXkQCt1VqzhASlgOzJHPmezLYJFTmGU4A39G0jMJMInWdX4N8a1vg%2FcV7YP1cTtyV2jn15S8ljS1L1MRS4mNNC%2BN2hodwnyaVLNecuWjsOCoQkfy4JLSDSC0PxavkzI6WXhu7SlEMmHmUfnvhXfvavHMtxP%2FrtVDTLPyrC6FG6pXVzJcjPiv4K%2BRO4l6u8xqLZF70HaU4uTD%2Fi4zKBjqkAVMDNXRRRwh3WDV4Iifl6CNhSyPBaAQG%2FGPGRHZlZ68Gbgx1SYEX8qTGiA%2FNE%2F1%2FqWsLrpQSjl7gDCr8%2BQvvImuUwCZv%2Be%2F7XVTjbSWSWpkceOF6LfRMIpnyDO8E7ZoPEsBARdR%2BOCiq9eNx5NncLfjxMaVI%2FymjsA0ySOqMRcLNnfqF0lHUUZA4IF%2FNB5r9p%2BIgek7M9sSITFDpBvHkT10RurJA&X-Amz-Signature=cc3dbdd8bcc3186d91a22e0e9a8c4b114f7f69f2dd232809c27f51eab8112422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSUNF6F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4l6ZR1Gp%2FxpB%2FP6jkIlrF5%2FrIUb0E9F3%2FIAsHd7rUFwIhANGBWfUUMiXgFPXSL3aWB2bIv%2BSj%2F3ZcuKog9Xb71CfQKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzHM2%2BMookjYmE%2B0gq3APrpDPLNM%2FzfDlkDAe%2F3BLi%2FszAndfMwbECyJL%2FZVK4G06YCB0DOT%2Fwog390L9uVgv0km8qqA2JNSeYHzCFfiqNeoULfS25rjiOr%2BpMdwd6LyXo0k%2BwsTzoBkpPXoWj4Ra8T%2FlDgisK1I%2FWd6ay8Lh9rQ4HweSJr8HoeAFsJc8RyZAHsk7%2FQ%2BpSJcbVTswSN%2FXM3qSUUA5MbtYia2JimYY6OvzIWTt7aZvdc1jFEpJJoeeu1NnCJdEeb9PFiYaKXBdtQyzD9wkkNAHUK5TtRkLgo6yQ3KTlPcNV3fOXZt7W1DhlOwU8A17tR9E%2BlehItiiJNvt1VDbx6epzgN1UmU4wlia%2BvozPezrNh4ypOACO4CxZcy8MGtM76QoyQ7WE1cJyOcxQ4dSettJVI4mD41NSPwlyd2CIC0TfUzv%2FDmTQruNgVpfAXkQCt1VqzhASlgOzJHPmezLYJFTmGU4A39G0jMJMInWdX4N8a1vg%2FcV7YP1cTtyV2jn15S8ljS1L1MRS4mNNC%2BN2hodwnyaVLNecuWjsOCoQkfy4JLSDSC0PxavkzI6WXhu7SlEMmHmUfnvhXfvavHMtxP%2FrtVDTLPyrC6FG6pXVzJcjPiv4K%2BRO4l6u8xqLZF70HaU4uTD%2Fi4zKBjqkAVMDNXRRRwh3WDV4Iifl6CNhSyPBaAQG%2FGPGRHZlZ68Gbgx1SYEX8qTGiA%2FNE%2F1%2FqWsLrpQSjl7gDCr8%2BQvvImuUwCZv%2Be%2F7XVTjbSWSWpkceOF6LfRMIpnyDO8E7ZoPEsBARdR%2BOCiq9eNx5NncLfjxMaVI%2FymjsA0ySOqMRcLNnfqF0lHUUZA4IF%2FNB5r9p%2BIgek7M9sSITFDpBvHkT10RurJA&X-Amz-Signature=64113b8675cdfbc05b5181364fdcb7987015536815e621df97378fab57c9c146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

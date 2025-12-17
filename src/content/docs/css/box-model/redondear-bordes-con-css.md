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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6LGWPXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2W9RV2%2F3iv431jEtmo9AAlzKvCBFFq4Wv5MSMtKLI1AIhAMDQxYJ09r5enjQLJQe%2FcqzdcspmCSDrDjMscD%2FtptC4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzyIRX9epbN%2FAZcnSoq3ANb2SD5%2FkmXQglk4yTY%2BcoxeKtyilCFt3Vi56iF9t3fs3dZ9h%2FaYW9GDFhCk4CCvNyDqOaBzcbut9KTzW72kiuM617%2B3As1edDASpQAZ3BHK5JVRiL9Y7mTEFcnPKrT44yPXSea0%2Fk2AuRB8Wf2lgcP%2FFEbyzw8zpP2U5zj5GCdtNzrK4m1WFbxtopYM132GbFvHb9Tea1y51T4LmFE7lX9%2BGGTY9AXMfDV4Diq%2FmZxM7OqNGxKofLYYU8qeF18PrO%2Fe5TeOnoo022p1hXSmknQyBX76jyDqQogKeyp3BFTpW99V%2FW%2FeMk0KkLdBUk41XUP9oiV9TjW%2FN1qYI2sw4XWaHk5thFiDl8n%2BUpF0kvxuhRsbdQfHrmo5vW7C7AwDasH5EEgdvxCVAjf%2B1KOcc9zWzikV39FBgm6%2BKUgR%2BZazYo8RyBquUPYYkHhdtwG25bEghQJgo1RZW%2BDx4R0l%2FheFz0o91vhutvvD1PFh%2BbHSP%2BnbJWEOn0Uy%2BuAgtGMoMvTsN2%2FYV83FQ9cE6wAHFaT%2FNvnEun%2BRGcKRxzK2CuBY%2Fk6j0yMs8RL5BPXxrvuquPd8Wl90nRuqw8VgZJ5viz8WoDeEYBoMqfYmGnOL1cd6Wj%2FsUt5t5%2Bz64iwuzCOnonKBjqkAR%2F97N4tcTV%2Fpumjr07%2F%2BwiAZ8fR9BsNfR91Wl8P8PKztSttduKtklhBOaWqpTqSomNyBHvPCrJB7g9M7vue583SS%2FU5g%2BHrF5xq4xOQNlZiIPxYYTFMpZ70dHJE5ygh2LAz1P7%2Bt7UiKZN7Hzglzc25PBM9VUv5bkz3mWlAjyBg55obi7HEluWSvI3E%2FCTMAG8W8yPDdMsx3eghh%2FjkhB8ggHX7&X-Amz-Signature=b661dbdc109cad5450a9623bc593a23c8bd88740ac5fe9fe85db59f868a56476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6LGWPXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2W9RV2%2F3iv431jEtmo9AAlzKvCBFFq4Wv5MSMtKLI1AIhAMDQxYJ09r5enjQLJQe%2FcqzdcspmCSDrDjMscD%2FtptC4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzyIRX9epbN%2FAZcnSoq3ANb2SD5%2FkmXQglk4yTY%2BcoxeKtyilCFt3Vi56iF9t3fs3dZ9h%2FaYW9GDFhCk4CCvNyDqOaBzcbut9KTzW72kiuM617%2B3As1edDASpQAZ3BHK5JVRiL9Y7mTEFcnPKrT44yPXSea0%2Fk2AuRB8Wf2lgcP%2FFEbyzw8zpP2U5zj5GCdtNzrK4m1WFbxtopYM132GbFvHb9Tea1y51T4LmFE7lX9%2BGGTY9AXMfDV4Diq%2FmZxM7OqNGxKofLYYU8qeF18PrO%2Fe5TeOnoo022p1hXSmknQyBX76jyDqQogKeyp3BFTpW99V%2FW%2FeMk0KkLdBUk41XUP9oiV9TjW%2FN1qYI2sw4XWaHk5thFiDl8n%2BUpF0kvxuhRsbdQfHrmo5vW7C7AwDasH5EEgdvxCVAjf%2B1KOcc9zWzikV39FBgm6%2BKUgR%2BZazYo8RyBquUPYYkHhdtwG25bEghQJgo1RZW%2BDx4R0l%2FheFz0o91vhutvvD1PFh%2BbHSP%2BnbJWEOn0Uy%2BuAgtGMoMvTsN2%2FYV83FQ9cE6wAHFaT%2FNvnEun%2BRGcKRxzK2CuBY%2Fk6j0yMs8RL5BPXxrvuquPd8Wl90nRuqw8VgZJ5viz8WoDeEYBoMqfYmGnOL1cd6Wj%2FsUt5t5%2Bz64iwuzCOnonKBjqkAR%2F97N4tcTV%2Fpumjr07%2F%2BwiAZ8fR9BsNfR91Wl8P8PKztSttduKtklhBOaWqpTqSomNyBHvPCrJB7g9M7vue583SS%2FU5g%2BHrF5xq4xOQNlZiIPxYYTFMpZ70dHJE5ygh2LAz1P7%2Bt7UiKZN7Hzglzc25PBM9VUv5bkz3mWlAjyBg55obi7HEluWSvI3E%2FCTMAG8W8yPDdMsx3eghh%2FjkhB8ggHX7&X-Amz-Signature=cf54fecf0fa886597e0aa9a6b0c0fe4c8130b33fc0d9a3ecd6ac5b1e3efcca4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

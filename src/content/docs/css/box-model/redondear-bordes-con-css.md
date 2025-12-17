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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMDHYQD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5MvqA6JX2Xdb9zgd10kMmYT%2B3pILpI9Jc1Rxjmy3T3AiEAxj1fSJ5UAjiDkITmOo3PzBJHcZ6xcyXnYikIgJ9T5cYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIb7dSygMGGMFb95PCrcA%2FeTGsLgAvsvRLXXEdE9t66FiKwLfODhxuF%2BA0o%2BDzVPBPeTZIFWKtLdItdxcCfu%2Fm0EDTI%2B7mjyBihKDrGVQgccgF68v9VnFZajt90MrD12Vr%2FfVwmEv%2FqOY426oykUrFf7%2FFCnTsl1Kh8p%2FDOSJjRu%2FZHPoyRa5zJGcEb3hyKqX%2F%2FM6ElGLdFiHu1JUjEN1yBM0K9mfTKYJcx%2Fv7N3cY2GZyAMT7VhkYf0xhqkPmxjcRPkclbFXsH178fu7LF06CcYdssH6l4JK09VDM%2FplEl1njWWgQHrOkLQkUddD7VyUiUtAD5uc6dMet6it52Rpoi98m4FYRxP9Ezu%2FAZNXdlYNtFhL%2Fka2wh3BMNmslD9ItRwwE53MHAHXM04V%2BL6pOvseh%2FBxHBE5mVINKbGoKFzYZjwQaBLixA%2B5H62DAdHwfxSmKihRJ9XEOodpHOdSq2yps4a3ArsxrBMTUlmEzgpgwR2Z2SCXFf%2Bx17%2FpPvsU0RWiFI9CLYra9zl%2BdTPzh%2FHrCowY5eaJKiiMtF%2BxnlMU61cgHniTgr2Li%2B4%2BLqH%2Fg5dwHDqgAUeoky6FDUDitYbAc%2BrPDgBrrYj766pvfsqg%2Frj8Q9zgGxMNlgeg8h0NiBQKFfav4FlvS9QMN%2FhisoGOqUBCRZWfXIrUeSGh2Dr4vb%2BZHDBW2d2zEvcVce5LmQ9nUTGgv6kFELcC6acwF92xzVrcPPNb7l57KAcZxiEMVsfzk46JJHDH57p%2BkklmPOCXSMADec%2FA29oDM57bkgLuMlszYpYQru%2FFtSWI0xH0a%2BwVdFuWZIOGrai4U8eEyyjbLFplBd34mPBx5kvvWqud8nrpSSu02QhxCIQnqsWrfpsabdTja90&X-Amz-Signature=d43a5b05f7e062d0d9be25b06931547a553e678b88199fdc125cdf6bde805f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMDHYQD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5MvqA6JX2Xdb9zgd10kMmYT%2B3pILpI9Jc1Rxjmy3T3AiEAxj1fSJ5UAjiDkITmOo3PzBJHcZ6xcyXnYikIgJ9T5cYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIb7dSygMGGMFb95PCrcA%2FeTGsLgAvsvRLXXEdE9t66FiKwLfODhxuF%2BA0o%2BDzVPBPeTZIFWKtLdItdxcCfu%2Fm0EDTI%2B7mjyBihKDrGVQgccgF68v9VnFZajt90MrD12Vr%2FfVwmEv%2FqOY426oykUrFf7%2FFCnTsl1Kh8p%2FDOSJjRu%2FZHPoyRa5zJGcEb3hyKqX%2F%2FM6ElGLdFiHu1JUjEN1yBM0K9mfTKYJcx%2Fv7N3cY2GZyAMT7VhkYf0xhqkPmxjcRPkclbFXsH178fu7LF06CcYdssH6l4JK09VDM%2FplEl1njWWgQHrOkLQkUddD7VyUiUtAD5uc6dMet6it52Rpoi98m4FYRxP9Ezu%2FAZNXdlYNtFhL%2Fka2wh3BMNmslD9ItRwwE53MHAHXM04V%2BL6pOvseh%2FBxHBE5mVINKbGoKFzYZjwQaBLixA%2B5H62DAdHwfxSmKihRJ9XEOodpHOdSq2yps4a3ArsxrBMTUlmEzgpgwR2Z2SCXFf%2Bx17%2FpPvsU0RWiFI9CLYra9zl%2BdTPzh%2FHrCowY5eaJKiiMtF%2BxnlMU61cgHniTgr2Li%2B4%2BLqH%2Fg5dwHDqgAUeoky6FDUDitYbAc%2BrPDgBrrYj766pvfsqg%2Frj8Q9zgGxMNlgeg8h0NiBQKFfav4FlvS9QMN%2FhisoGOqUBCRZWfXIrUeSGh2Dr4vb%2BZHDBW2d2zEvcVce5LmQ9nUTGgv6kFELcC6acwF92xzVrcPPNb7l57KAcZxiEMVsfzk46JJHDH57p%2BkklmPOCXSMADec%2FA29oDM57bkgLuMlszYpYQru%2FFtSWI0xH0a%2BwVdFuWZIOGrai4U8eEyyjbLFplBd34mPBx5kvvWqud8nrpSSu02QhxCIQnqsWrfpsabdTja90&X-Amz-Signature=a478c030d8b20ec45da77ce73f9cbfcf13d4958a75560692dbc8f50932d9ed3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

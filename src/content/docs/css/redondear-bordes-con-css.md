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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HS3LQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTR%2B8SZ4JPdD%2BBL9NN%2Brs8gkjE1kG50fteDm%2FJkUVMFAiAyH5PgBjzHCdrB0f4cAG3nJD9XHzRFUAFmrNrP%2FOkBSSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzg%2FAwCrgQhBFN5auKtwD9iM4Whb1f1om5NLf3D86qkZfWIhNH1ao7cjpB5u6nfQtdNVFS9trgZfL%2FxwYkhgEJxAuSJXJ7%2Ffkn2s8GJILMklbW2OQu5fHJPxCS3WbjyRnRGniKOSFk4HDjXHMDLoQ%2BR4OIlWnEg77pddKF6UHpWkgz3gjARA3jejeTeSR8ms4EByHaQ7nzu6DHbmBag1loLp5rjWNRcFl9zoFfhp%2Fb7iqxvTDsPNN%2BPqqoetICB9%2Fdp1rhL3itXgYBZD%2Bu1BMqNopp1%2FZZJ8ez%2F2p9iBnLmOSfq6ne2cKe7ZLvXeu92fp8H%2Bs%2Bx2EUv0pqTMVraP%2BdCwe6bzCcRHTejL%2FBLOW84QdteWv9m8BDPgA0D6bQN%2F84CyQBRntuUreas2YKQhzcyzDOKYRpNl%2FjfzPa8GeEuFPbrJhaAy1B2zVWZ4rx3Zy6sDI%2BEn%2BtR4UcIH0zm8dl8WPHA0mv8O%2F1FPZzgsn5PZtg1ueOK7kUiJ8GiUKuCK2rlFS0m76okaXp8PLZHV8hvJpVAB%2BhSqra8dI19kUzpSzU4h9tielB%2FKuJbxv6luT%2F6mJpr6geal%2BRBpf%2BvYvAw9Po6uRMPeTFfHEqB7Is%2FyKC8mCBFM3ToDLK3ggRIe7fwRsk%2BXX2yO4QpYwle%2FYyQY6pgE0r03mOXpH%2FOO%2FjoNGVkcoh9PevN8th7p83lRTSWnD%2F02Wpa2FlJ%2FyG51g2W0njI0kEgl8UTntaSUbLHW2nZWMRqkCzVe%2Bcm1cTaY%2Fq1z%2FPmP1tAtOQQjTmr5kWyzDtMekGlRitrWrCIqVLzbKXAyiOrN36twJeLhru16TD0SHKWxhA3OtMP6kdZmpZM58g1CqcgfzgrKMQsHjQ8L0Bbbj%2BkjFDuWP&X-Amz-Signature=1ff76cafe8b6673fe1b45e190ea12b4262d2db680abb64ba04bcecf376a0b076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HS3LQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTR%2B8SZ4JPdD%2BBL9NN%2Brs8gkjE1kG50fteDm%2FJkUVMFAiAyH5PgBjzHCdrB0f4cAG3nJD9XHzRFUAFmrNrP%2FOkBSSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzg%2FAwCrgQhBFN5auKtwD9iM4Whb1f1om5NLf3D86qkZfWIhNH1ao7cjpB5u6nfQtdNVFS9trgZfL%2FxwYkhgEJxAuSJXJ7%2Ffkn2s8GJILMklbW2OQu5fHJPxCS3WbjyRnRGniKOSFk4HDjXHMDLoQ%2BR4OIlWnEg77pddKF6UHpWkgz3gjARA3jejeTeSR8ms4EByHaQ7nzu6DHbmBag1loLp5rjWNRcFl9zoFfhp%2Fb7iqxvTDsPNN%2BPqqoetICB9%2Fdp1rhL3itXgYBZD%2Bu1BMqNopp1%2FZZJ8ez%2F2p9iBnLmOSfq6ne2cKe7ZLvXeu92fp8H%2Bs%2Bx2EUv0pqTMVraP%2BdCwe6bzCcRHTejL%2FBLOW84QdteWv9m8BDPgA0D6bQN%2F84CyQBRntuUreas2YKQhzcyzDOKYRpNl%2FjfzPa8GeEuFPbrJhaAy1B2zVWZ4rx3Zy6sDI%2BEn%2BtR4UcIH0zm8dl8WPHA0mv8O%2F1FPZzgsn5PZtg1ueOK7kUiJ8GiUKuCK2rlFS0m76okaXp8PLZHV8hvJpVAB%2BhSqra8dI19kUzpSzU4h9tielB%2FKuJbxv6luT%2F6mJpr6geal%2BRBpf%2BvYvAw9Po6uRMPeTFfHEqB7Is%2FyKC8mCBFM3ToDLK3ggRIe7fwRsk%2BXX2yO4QpYwle%2FYyQY6pgE0r03mOXpH%2FOO%2FjoNGVkcoh9PevN8th7p83lRTSWnD%2F02Wpa2FlJ%2FyG51g2W0njI0kEgl8UTntaSUbLHW2nZWMRqkCzVe%2Bcm1cTaY%2Fq1z%2FPmP1tAtOQQjTmr5kWyzDtMekGlRitrWrCIqVLzbKXAyiOrN36twJeLhru16TD0SHKWxhA3OtMP6kdZmpZM58g1CqcgfzgrKMQsHjQ8L0Bbbj%2BkjFDuWP&X-Amz-Signature=d24a70025f10aafbf303ec6a1b0469b96ca9636eb3bd629cdd7f80328a1a3ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

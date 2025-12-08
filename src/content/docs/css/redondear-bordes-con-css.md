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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFXD7PA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfXloLnMbbFT6WI06fxJFhqVgDne1ocG591Z7iq5XSEgIhAOxW4zDwBHWhw95e%2BM%2FKcBJn%2Fx%2BxYfJbm%2ByLgHEbYaRAKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRPz7eIDxdatcUhGkq3AOsyFdHxWoeZE8DTNWVIhVmMM58wRrji99xdp7riDkHpMfjFDQ96MyAsWBuh9ZG57xG0B6e8xsco40vR0HrWcb2PZjl9mUA97AAhiIVc%2BFvIvCwl%2F2D39yU34CxorPh1sPwm%2FG6fRJODOcAEO4PXW%2BhxIxWi%2BIJfHfcIHJ5Tm5HXV6D2%2BAuEoVEOjlDUmB8tpHXGY1zI5saPbVu6Ew9ROoFbkHsJQ8P693JbiaHl5Qmxbnrl%2BwRIRsCFRbtE4dcWBJi8Ct9rMRefQ9YBwyaQadSJdrJgsUfSYYCgoSvO0kQMGdo5ksqzmd1u9%2FjaenP3XGrzgIHwCxOI8hsVNlvSnLycporGoBF5XXZDHR1PrM3fpxSmdHR8DJKUwpLlO%2BWE5qyNWuqI1MV9Fvy0EqiXplRxi%2B9sV3iNEoWmQBdcLLIIvKOay5Rmzp1OYJWYniI%2FVrFnLcCRLn%2F%2Fmu%2BTWPWhRxFuDazXAscfR2zILudIvAGC0jfkSM8%2FIpoA0%2BOsUiZ9kYE3PktGuUAlObHgjMbD1MkdzEzxYiPwuuYkCT2nnpqiSQaHgoW4j9HSGzP%2BTSJSukZuXMW3hNekLFCKPHCGsjEW3mJiPsGe0O2Bq16IEVR5Fz%2FniLDqdBRBiRRizDw9NrJBjqkAafZC%2F2c0W4YFutnoZxDkmCbWcEGsNgq9LPEaGDHMKPMKJPtK1ubp6ZOjmjgysxvRPmo2MfeBtgqiiv4l6A5wNqqQcRNpPQWPr2jItB3s%2Brcb3NsY69IlHjZozji5ZXxH7i1dAHIrSGs013%2FOLryZJHHip9y%2FNmArTB0gaXLcXzsG4CECKhuaYSPY0byVShEwHnngDh%2BHsPbnVfA3bYNOlboVtv0&X-Amz-Signature=99670e02d482cc2808da91b45a3aa56f9fb51323ae3c7d552856a709c87a0876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFXD7PA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfXloLnMbbFT6WI06fxJFhqVgDne1ocG591Z7iq5XSEgIhAOxW4zDwBHWhw95e%2BM%2FKcBJn%2Fx%2BxYfJbm%2ByLgHEbYaRAKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRPz7eIDxdatcUhGkq3AOsyFdHxWoeZE8DTNWVIhVmMM58wRrji99xdp7riDkHpMfjFDQ96MyAsWBuh9ZG57xG0B6e8xsco40vR0HrWcb2PZjl9mUA97AAhiIVc%2BFvIvCwl%2F2D39yU34CxorPh1sPwm%2FG6fRJODOcAEO4PXW%2BhxIxWi%2BIJfHfcIHJ5Tm5HXV6D2%2BAuEoVEOjlDUmB8tpHXGY1zI5saPbVu6Ew9ROoFbkHsJQ8P693JbiaHl5Qmxbnrl%2BwRIRsCFRbtE4dcWBJi8Ct9rMRefQ9YBwyaQadSJdrJgsUfSYYCgoSvO0kQMGdo5ksqzmd1u9%2FjaenP3XGrzgIHwCxOI8hsVNlvSnLycporGoBF5XXZDHR1PrM3fpxSmdHR8DJKUwpLlO%2BWE5qyNWuqI1MV9Fvy0EqiXplRxi%2B9sV3iNEoWmQBdcLLIIvKOay5Rmzp1OYJWYniI%2FVrFnLcCRLn%2F%2Fmu%2BTWPWhRxFuDazXAscfR2zILudIvAGC0jfkSM8%2FIpoA0%2BOsUiZ9kYE3PktGuUAlObHgjMbD1MkdzEzxYiPwuuYkCT2nnpqiSQaHgoW4j9HSGzP%2BTSJSukZuXMW3hNekLFCKPHCGsjEW3mJiPsGe0O2Bq16IEVR5Fz%2FniLDqdBRBiRRizDw9NrJBjqkAafZC%2F2c0W4YFutnoZxDkmCbWcEGsNgq9LPEaGDHMKPMKJPtK1ubp6ZOjmjgysxvRPmo2MfeBtgqiiv4l6A5wNqqQcRNpPQWPr2jItB3s%2Brcb3NsY69IlHjZozji5ZXxH7i1dAHIrSGs013%2FOLryZJHHip9y%2FNmArTB0gaXLcXzsG4CECKhuaYSPY0byVShEwHnngDh%2BHsPbnVfA3bYNOlboVtv0&X-Amz-Signature=0d56dd49268d84eadc57292bd0aac5ff410fe040ff69b30f2d4d285be0b2324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

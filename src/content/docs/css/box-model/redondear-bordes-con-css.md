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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXDFLEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJjk%2B2wgidsf4Ekk%2BZC3lG8a8UChQip5%2BSIwe9vKklJAiEA5XCP9lOHJLVgk%2FiLH5mIsrEYftPCPXFsEXcwL1LP2G8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLrVMsC4DMh%2B0k%2B9syrcA4oj6ZQ0ycdaEqmeFpDvb%2Btcw1sYF3VSkYm%2BGYftSBmKbPoB8nl%2FXJiyGCrB7xKZcCh1AydD8QX2zIVFVUx95RfSQ2cEFM%2FabyzQD95HyPzCsEQV9RR%2BHBeS83rThV4vJgSZZ1kOzxtD7XJb%2BDm3FJVtWHFzmOo5EqlH9iLdNH%2Bp%2BPkQANpTfzIeu%2FKslZcshl7yRtL3cziK2rXRdOkYZffbhAUAWK%2BlfWbh0mA%2BlOQ7s9KTsC2rh76nmm7mSMsiZWrvsVAwXm%2BH58BccQKFwE26yyM5RkYhr6eySHXsM220A0TpJ2RrFG%2BVYbIn%2Bae6ZocAASVrlA82ggaT5xA9HauuL62lloT97zD3Bu7eeZyHWLMiu%2FdY0vECeMx4SWLB7L%2FH%2B19BU%2B6S8Fybl9z0i%2FGNgacR2S8WNNhPwCZ0E0sn9muSQAcEOEXr8efBAprhvFUuQigXhGqS9QdRj5Hy5ePBBX8OHjRxDvJKQZ2xsN1QliaBD2kB4lmEMVEE3qJDl6ImIdfyvh4s9ljQs7ja1j2QZt84KXaigoGCRv7JXn2qnlUOP5XhMdgahi68lYr1M%2FaycRU6XcxTz29aZixbp7W1Enap1f6BsxbCcGJOfEpAP6I4xPAT68gBPIyLMMSXiMoGOqUBwnhxF0KX0p00L6LlXrriRrO%2BZ1nhWmH7%2FrfhADQ4UMwVNREWNOdDvgF1WTQhBM1ixCFDL00yYkfLiDtFa%2Bku51ouH1sOVgiI0iM5ofT3gA1lyzu%2Fqcran8w4Sh5RoGd6eJDfduoO1tbRmRylJD2qULWxdbkZ771GRB52yxbErW2I9q02%2FEY9ynsePF63kJh%2BnuyGsdtpHgFp2LR9KgED3tHFmmMo&X-Amz-Signature=f25814beb97c5b43b5e62f202dd73a9d340cc764b4678a28b6aee5cfbcbac11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXDFLEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJjk%2B2wgidsf4Ekk%2BZC3lG8a8UChQip5%2BSIwe9vKklJAiEA5XCP9lOHJLVgk%2FiLH5mIsrEYftPCPXFsEXcwL1LP2G8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLrVMsC4DMh%2B0k%2B9syrcA4oj6ZQ0ycdaEqmeFpDvb%2Btcw1sYF3VSkYm%2BGYftSBmKbPoB8nl%2FXJiyGCrB7xKZcCh1AydD8QX2zIVFVUx95RfSQ2cEFM%2FabyzQD95HyPzCsEQV9RR%2BHBeS83rThV4vJgSZZ1kOzxtD7XJb%2BDm3FJVtWHFzmOo5EqlH9iLdNH%2Bp%2BPkQANpTfzIeu%2FKslZcshl7yRtL3cziK2rXRdOkYZffbhAUAWK%2BlfWbh0mA%2BlOQ7s9KTsC2rh76nmm7mSMsiZWrvsVAwXm%2BH58BccQKFwE26yyM5RkYhr6eySHXsM220A0TpJ2RrFG%2BVYbIn%2Bae6ZocAASVrlA82ggaT5xA9HauuL62lloT97zD3Bu7eeZyHWLMiu%2FdY0vECeMx4SWLB7L%2FH%2B19BU%2B6S8Fybl9z0i%2FGNgacR2S8WNNhPwCZ0E0sn9muSQAcEOEXr8efBAprhvFUuQigXhGqS9QdRj5Hy5ePBBX8OHjRxDvJKQZ2xsN1QliaBD2kB4lmEMVEE3qJDl6ImIdfyvh4s9ljQs7ja1j2QZt84KXaigoGCRv7JXn2qnlUOP5XhMdgahi68lYr1M%2FaycRU6XcxTz29aZixbp7W1Enap1f6BsxbCcGJOfEpAP6I4xPAT68gBPIyLMMSXiMoGOqUBwnhxF0KX0p00L6LlXrriRrO%2BZ1nhWmH7%2FrfhADQ4UMwVNREWNOdDvgF1WTQhBM1ixCFDL00yYkfLiDtFa%2Bku51ouH1sOVgiI0iM5ofT3gA1lyzu%2Fqcran8w4Sh5RoGd6eJDfduoO1tbRmRylJD2qULWxdbkZ771GRB52yxbErW2I9q02%2FEY9ynsePF63kJh%2BnuyGsdtpHgFp2LR9KgED3tHFmmMo&X-Amz-Signature=385108726e662ed59367a03e3cf175006287ab0f60eed539d47c356220214774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTZORJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlZlccmkQIICYGltpZRz%2B1KiT9XbyOl1AuRWDgoEqt1AiB9%2F0zpaL%2FzdpcCXBm%2FAh2I34zNoJSKgcmstWrUKk1FJyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4fqK6d0Lr4Xrwmi6KtwDzecSnZ3wRQGxAWOWHfIcGC%2BkTMqrLavYq4mH4wQ1jdUYPz3jC82m%2Buhii7s6a3EWczaP9pP6THD8BFchLDXFQTKSa5iL8cunuKBLdgggbK0eoyBPJBQJ43L2RgMabHYb0ef6M6LLDLji58jz3rBcLVxhiKTHNpOFtify1W4GY6Ain7Sfx5AT6YEpgtvsYTZqZPqGAQbMyAwld7wilZa14jEeYE1hnJv4DAuGzHNlpnurKYsyZnrGNO9muQjY7RjyPaYxdfCvf23T%2BT51ddPMNBUKQV9TYwKV3rxrhzpEczV2nsUFTVNnv6N4xW6hWzOs%2BNdIBSPMOVlrw8VCi45gDI8yTZUCZa8%2F%2BqH2Pk8WJry6fK1%2FkgpL0JR0MGFVih0RkZtwbKPaxdAVbOxcq84PEoJ4bqgy%2Bk5CJGZyBuWG1d%2FCYyHfPGow8OmU4sGE%2Br4O27lSS4eyXeAD6JrGV%2FQM%2BCsKMlF41S2OWViDC5lgQ382hmZFTKX%2FYc11U%2Bt4ThTqCNKcojRJuVpV9yPubQAFc%2FFMqD2Knw4DPsCwD%2Ft0JvmKXMU60QtpLeFwITotZLOrUqFGvkF%2FzIOhSWC9l68%2ByU5UxUadVEeUbswKTu4%2BAiuUjWaEM7g4M9gZXBEwo4KJygY6pgE%2BedGN%2B4rq65ocXArl6I6uh%2F16IJvOtp8Yw%2FU2hTrpwLhO%2FUmeIG2CcM1igkj2g%2FVmWBIAIS0VBEzDxq0tw1NUfq3VEpcU2yY3HZIIjGqPE4eeN%2F0yzK8RjNb1muZa%2FFOBZyZpB0Me6OXqd8wP99m25RUu%2Fyup5OTxnXw6dbsrWPwEzg8hgmfUFmCG2%2FeUmXVheZ%2FcNzM%2FKyUylH3lcu7qncPilU04&X-Amz-Signature=51ec43c089ab2fe0785376a4df4288081c155f66e4f470ed5d9e390b7aa35c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTZORJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlZlccmkQIICYGltpZRz%2B1KiT9XbyOl1AuRWDgoEqt1AiB9%2F0zpaL%2FzdpcCXBm%2FAh2I34zNoJSKgcmstWrUKk1FJyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4fqK6d0Lr4Xrwmi6KtwDzecSnZ3wRQGxAWOWHfIcGC%2BkTMqrLavYq4mH4wQ1jdUYPz3jC82m%2Buhii7s6a3EWczaP9pP6THD8BFchLDXFQTKSa5iL8cunuKBLdgggbK0eoyBPJBQJ43L2RgMabHYb0ef6M6LLDLji58jz3rBcLVxhiKTHNpOFtify1W4GY6Ain7Sfx5AT6YEpgtvsYTZqZPqGAQbMyAwld7wilZa14jEeYE1hnJv4DAuGzHNlpnurKYsyZnrGNO9muQjY7RjyPaYxdfCvf23T%2BT51ddPMNBUKQV9TYwKV3rxrhzpEczV2nsUFTVNnv6N4xW6hWzOs%2BNdIBSPMOVlrw8VCi45gDI8yTZUCZa8%2F%2BqH2Pk8WJry6fK1%2FkgpL0JR0MGFVih0RkZtwbKPaxdAVbOxcq84PEoJ4bqgy%2Bk5CJGZyBuWG1d%2FCYyHfPGow8OmU4sGE%2Br4O27lSS4eyXeAD6JrGV%2FQM%2BCsKMlF41S2OWViDC5lgQ382hmZFTKX%2FYc11U%2Bt4ThTqCNKcojRJuVpV9yPubQAFc%2FFMqD2Knw4DPsCwD%2Ft0JvmKXMU60QtpLeFwITotZLOrUqFGvkF%2FzIOhSWC9l68%2ByU5UxUadVEeUbswKTu4%2BAiuUjWaEM7g4M9gZXBEwo4KJygY6pgE%2BedGN%2B4rq65ocXArl6I6uh%2F16IJvOtp8Yw%2FU2hTrpwLhO%2FUmeIG2CcM1igkj2g%2FVmWBIAIS0VBEzDxq0tw1NUfq3VEpcU2yY3HZIIjGqPE4eeN%2F0yzK8RjNb1muZa%2FFOBZyZpB0Me6OXqd8wP99m25RUu%2Fyup5OTxnXw6dbsrWPwEzg8hgmfUFmCG2%2FeUmXVheZ%2FcNzM%2FKyUylH3lcu7qncPilU04&X-Amz-Signature=6048e4c9ff1c4eb1e3e1587dc444c3a5f1d41121ff41276b49c391d0d32fd56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

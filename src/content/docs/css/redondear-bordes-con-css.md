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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CXTT2R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPE%2B827AGgzDl4Pv%2B7bGyZFUWvMU1Yo01MfBnV6Nf%2FTAiEAxdIjMb%2B9flrJXnWi3erjSVH1Yu5uODNiLC8o8hDNoAgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Fc0OWxTSfgQVlHzyrcA4fw2oM%2BpaxPqqrEOgxmI62lnus2UW93UxyQ9GWZ8j8HptFvOHXImb%2BwP5wkxl92KUI7Y8bBAY18GIjSSUZO7Zva9LzKe6I8qu8zdUH16i1vyVrDwux%2BYuGtQ8gk1UAM65Uva6kzalvIoQ5gvvAbL64OxlHB90LgNpws1hOeiYokcN3hCCnuZVVP2Oc5EnAZ7mc6DUAQUIs%2F4zEITocoYkpjDfSrak%2BG5zbixPUBUo%2Bdnh6UbVZInrF1h8swQTANMunwfhxomT%2BkyKSSXMZCD5ejDbWUYgg1PAomemYeovNzc0b1tavwUggzzUSMXPsSct6ZpMZt0odCf3VAAPuzQWkNfAqmxhLrXzAJniCiTah1MtECDHrG8metxrgwV%2FlvanrtyDt5q6KDXRFTzJYxbUC4pZwiUCYh8TiHp84tuVUJ5LOxDzSVtgPwjj0GnfOmuePIdsMxe73hkZKIQk%2FbPUf22D%2F9ikoAEU3ehx5uyjCMN6F%2FzpaUTsmPxQrtOnBhTkSrkU%2BOgJzJeFGQ3%2Bd9wJuhRkdyUgX9yOIAKF6GyWOVKWVzAPohqhc5DQ8StqiveML7V8E5TuTqd0fUSKgDlU01QvazhcPU%2B%2BEhgrqrQ88qN0x%2FgaRb13rXYSRQMOTE38kGOqUBYKLSa9ymMItQW2Ajv8XN%2Fahx6Hs1WF0Nkd8tYGSw6mLf9Hl7D4wg6cXLNv5W9ILJq%2FeAH60WbWGyhwdqBsKqYJw92zFzIB0Ily1B%2Bzj2Yr6jFMkmWHKmSNtaijlssLCXxH2AFlwpCAY2%2BhL2qOFyZTqVt64dFpRTSNS3VyWRmImSCo0LkHz2Z9dbH4EBVccEl9oxZ6AXb5oo%2FUCrebiHZlN3RVGJ&X-Amz-Signature=d2873bf22104321080d6bb28ccffb2499ad2d4ca5099ee8af2b5795e9d61c965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CXTT2R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPE%2B827AGgzDl4Pv%2B7bGyZFUWvMU1Yo01MfBnV6Nf%2FTAiEAxdIjMb%2B9flrJXnWi3erjSVH1Yu5uODNiLC8o8hDNoAgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Fc0OWxTSfgQVlHzyrcA4fw2oM%2BpaxPqqrEOgxmI62lnus2UW93UxyQ9GWZ8j8HptFvOHXImb%2BwP5wkxl92KUI7Y8bBAY18GIjSSUZO7Zva9LzKe6I8qu8zdUH16i1vyVrDwux%2BYuGtQ8gk1UAM65Uva6kzalvIoQ5gvvAbL64OxlHB90LgNpws1hOeiYokcN3hCCnuZVVP2Oc5EnAZ7mc6DUAQUIs%2F4zEITocoYkpjDfSrak%2BG5zbixPUBUo%2Bdnh6UbVZInrF1h8swQTANMunwfhxomT%2BkyKSSXMZCD5ejDbWUYgg1PAomemYeovNzc0b1tavwUggzzUSMXPsSct6ZpMZt0odCf3VAAPuzQWkNfAqmxhLrXzAJniCiTah1MtECDHrG8metxrgwV%2FlvanrtyDt5q6KDXRFTzJYxbUC4pZwiUCYh8TiHp84tuVUJ5LOxDzSVtgPwjj0GnfOmuePIdsMxe73hkZKIQk%2FbPUf22D%2F9ikoAEU3ehx5uyjCMN6F%2FzpaUTsmPxQrtOnBhTkSrkU%2BOgJzJeFGQ3%2Bd9wJuhRkdyUgX9yOIAKF6GyWOVKWVzAPohqhc5DQ8StqiveML7V8E5TuTqd0fUSKgDlU01QvazhcPU%2B%2BEhgrqrQ88qN0x%2FgaRb13rXYSRQMOTE38kGOqUBYKLSa9ymMItQW2Ajv8XN%2Fahx6Hs1WF0Nkd8tYGSw6mLf9Hl7D4wg6cXLNv5W9ILJq%2FeAH60WbWGyhwdqBsKqYJw92zFzIB0Ily1B%2Bzj2Yr6jFMkmWHKmSNtaijlssLCXxH2AFlwpCAY2%2BhL2qOFyZTqVt64dFpRTSNS3VyWRmImSCo0LkHz2Z9dbH4EBVccEl9oxZ6AXb5oo%2FUCrebiHZlN3RVGJ&X-Amz-Signature=183616be1340bde5893dea3f6fa3b925628f136ace5876544d4782818ce2e571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

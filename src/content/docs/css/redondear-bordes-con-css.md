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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDHE6WS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRO5J515qgDXwMWU9w%2B3vBS%2F5clO5NdSCrKK%2BkpMLv4AiEAySTU23qVkYhzqeR9brRN%2BgOPfUxthVNtVi1FeCVciEMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOFJdJupabyADlY3GyrcAy0Rkk%2FQOP4%2FBADhoABwjYyAPIey%2FQZWvR0%2FRzY%2FBmCztc%2BQVUkEcKKKU2p2w%2BhhIvKBq3%2BASuSiJPw3sca7i77TuRMNAUcdy6EX85yosdZEroxAZNHIMSZBqP7k8GNKc81jmqxFaFYf%2BW873KNZSusulWQ%2BiJ3mhelzFyO2Gms1aX%2Fx89v%2BNaiwO1Lt2ftqNdws0e2Vh7l6Ody78PXCfjzz1g3mg2awCZY%2FnwMNBNj9OLbELNp4aXhth%2FU93cxVN5h56SZYe8gPqmb28F4SpBnUjr8IEIX0lrhzT1H%2FfdFStBGuLX9lEZ2F8FXcL64%2BbS47AWYB%2B8swiFH%2Flbzu2UBo4XBl%2BZHHI2%2B%2FphGmDJPBdV71WidiN7iSeGonUHgL7YN16DOGTLHsycCIxQbK9ZPvMKW6Y9gHVbxHR%2Fx51%2FUlgNGtFYIASifiSnWNYyhGGy1Ph%2BHYbEPU82v8ejWFwRYCRawfOzUKRnzm4vsBzdne7ZGyrJCnTcjQYA7ihQWHAc%2B%2BTx9HuHHYEX386nKvLUCZrgigsVxDNKL1wyBciZETOqFQxSiu97b3jGDGrK7feVP3%2BEgt3ns9s6cCPuT5YJ%2FiMXtAM%2FV3fTzFlbZmFG2eZBXYwLMjNwrrwox1MPfty8kGOqUBjWoZHcl%2BDaw%2B5cyotKUxeJvebObsGMnl7a99qUvuyJIlPDmRC4zSLmA1dE37ydh4tBV5i4vLFVLu3VOWW8abYB3qrGikwSv9GEyXSG1z9q4K5eU3qXniSQbrdJsOl%2FndZ3vdtfJiZwF93r0vuJyuI8m1kM2sLZN%2FoycAHF8YzCWc2sCpkInAklayuSMkVhKW2qPAcn0ts8XP1pozuDFAqXXb943O&X-Amz-Signature=29f0f24f8cc2bf01d8b3aae62fd39434cf24578f3f496924ca47f3d9164d6d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDHE6WS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRO5J515qgDXwMWU9w%2B3vBS%2F5clO5NdSCrKK%2BkpMLv4AiEAySTU23qVkYhzqeR9brRN%2BgOPfUxthVNtVi1FeCVciEMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOFJdJupabyADlY3GyrcAy0Rkk%2FQOP4%2FBADhoABwjYyAPIey%2FQZWvR0%2FRzY%2FBmCztc%2BQVUkEcKKKU2p2w%2BhhIvKBq3%2BASuSiJPw3sca7i77TuRMNAUcdy6EX85yosdZEroxAZNHIMSZBqP7k8GNKc81jmqxFaFYf%2BW873KNZSusulWQ%2BiJ3mhelzFyO2Gms1aX%2Fx89v%2BNaiwO1Lt2ftqNdws0e2Vh7l6Ody78PXCfjzz1g3mg2awCZY%2FnwMNBNj9OLbELNp4aXhth%2FU93cxVN5h56SZYe8gPqmb28F4SpBnUjr8IEIX0lrhzT1H%2FfdFStBGuLX9lEZ2F8FXcL64%2BbS47AWYB%2B8swiFH%2Flbzu2UBo4XBl%2BZHHI2%2B%2FphGmDJPBdV71WidiN7iSeGonUHgL7YN16DOGTLHsycCIxQbK9ZPvMKW6Y9gHVbxHR%2Fx51%2FUlgNGtFYIASifiSnWNYyhGGy1Ph%2BHYbEPU82v8ejWFwRYCRawfOzUKRnzm4vsBzdne7ZGyrJCnTcjQYA7ihQWHAc%2B%2BTx9HuHHYEX386nKvLUCZrgigsVxDNKL1wyBciZETOqFQxSiu97b3jGDGrK7feVP3%2BEgt3ns9s6cCPuT5YJ%2FiMXtAM%2FV3fTzFlbZmFG2eZBXYwLMjNwrrwox1MPfty8kGOqUBjWoZHcl%2BDaw%2B5cyotKUxeJvebObsGMnl7a99qUvuyJIlPDmRC4zSLmA1dE37ydh4tBV5i4vLFVLu3VOWW8abYB3qrGikwSv9GEyXSG1z9q4K5eU3qXniSQbrdJsOl%2FndZ3vdtfJiZwF93r0vuJyuI8m1kM2sLZN%2FoycAHF8YzCWc2sCpkInAklayuSMkVhKW2qPAcn0ts8XP1pozuDFAqXXb943O&X-Amz-Signature=2a720741de538211e967ae5a4db9ad0e89524f213c45d41d2ff7b6faac0044a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

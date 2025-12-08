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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZSTZF4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwd9nd5LWW9e47WadmVT%2BCvaVH53EVja1LRzAStTg%2BNAiABhzfa6VrqDbrWARdynz9XROxrzomK4QsWMkRwzvyVCCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4zU6vhpPBR1DvpF5KtwDz9XyGYNh4LnJpFoGsbvKhidexuvWv2z5kdK4XLPM%2FCdye0zB4OVQark7%2B%2FSU3LdktGuiDgzLxOGH0tP2y4YMs6FrveI%2BVZelWn97hEwf%2BH34Zb60iQYjKpykdHpnUa%2FERj1B0hOXaLm8YRzLN2mgLK3UQOhEaVK0voXU73oHoAgDXL7g9GfiKdh4FKdCFqkkB5eXNXNqdx2UYu02ULL1tc%2BqWw9kTVBYEkshrfyDCUGKBTFOVU5XcbipwgC%2BzdH%2BeYc%2FFei4YlfxnizQggi6QvnNs4jUP3gEMLq7pJuO%2BthJ6ks4RLKAmvIrBUanAV5UoDhDSebVHgtl0%2F%2BcSDnlBA3WfteEEBg08GoOBynWevQrQ5UegEJB0oP2nDfEx7Hc1AXbxYyYvfJ0zjIOM24IpfB4yrB6Pbw5upe9SCPSKD3LFJAq%2BwTu8L8jQ4oEs%2BRaF%2FZWWwSctl55DlrjHR32Uz3BKmhksyLWHFAgElWKFsOtLeh1Nt64BhNsAXqxnnUIsBTOPnSTRYlBBcnJF9ECTH%2BflwZdwMxsfAbYRS5jdZACBiIHzU%2FeMe7jR9Jq%2FGSnjszNO8HOEREhN5YOG0j%2FpAN1YrTBt0IBCjoJ5jFv7joRWJPgngMo2NGoiZkwgu7ZyQY6pgFJHY3GKl6zFAFdeYoiffxlG0CUy0YQr7TCpcyKKmY68Ux6tf4WP2sYuSnlOn8oQEepVFniI7EM3L7k%2FkDpXfb7Dpf7IBL672Iva1Rya2by7q8mp32EcSoQCJ0wR37mYrN%2BOSzv%2BkxmYFPUu5eLdeKiEIiF22i1yBLofVrp%2BEeNp58PCxzs0lYmbcvZPIivBF%2Fl1PwRgKYwGYK4pMUzvIIbNIGkgOJs&X-Amz-Signature=26923f51c286d626ccc05b649fa02e1722dedc67fa42176dd90ad8b44487aa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZSTZF4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwd9nd5LWW9e47WadmVT%2BCvaVH53EVja1LRzAStTg%2BNAiABhzfa6VrqDbrWARdynz9XROxrzomK4QsWMkRwzvyVCCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4zU6vhpPBR1DvpF5KtwDz9XyGYNh4LnJpFoGsbvKhidexuvWv2z5kdK4XLPM%2FCdye0zB4OVQark7%2B%2FSU3LdktGuiDgzLxOGH0tP2y4YMs6FrveI%2BVZelWn97hEwf%2BH34Zb60iQYjKpykdHpnUa%2FERj1B0hOXaLm8YRzLN2mgLK3UQOhEaVK0voXU73oHoAgDXL7g9GfiKdh4FKdCFqkkB5eXNXNqdx2UYu02ULL1tc%2BqWw9kTVBYEkshrfyDCUGKBTFOVU5XcbipwgC%2BzdH%2BeYc%2FFei4YlfxnizQggi6QvnNs4jUP3gEMLq7pJuO%2BthJ6ks4RLKAmvIrBUanAV5UoDhDSebVHgtl0%2F%2BcSDnlBA3WfteEEBg08GoOBynWevQrQ5UegEJB0oP2nDfEx7Hc1AXbxYyYvfJ0zjIOM24IpfB4yrB6Pbw5upe9SCPSKD3LFJAq%2BwTu8L8jQ4oEs%2BRaF%2FZWWwSctl55DlrjHR32Uz3BKmhksyLWHFAgElWKFsOtLeh1Nt64BhNsAXqxnnUIsBTOPnSTRYlBBcnJF9ECTH%2BflwZdwMxsfAbYRS5jdZACBiIHzU%2FeMe7jR9Jq%2FGSnjszNO8HOEREhN5YOG0j%2FpAN1YrTBt0IBCjoJ5jFv7joRWJPgngMo2NGoiZkwgu7ZyQY6pgFJHY3GKl6zFAFdeYoiffxlG0CUy0YQr7TCpcyKKmY68Ux6tf4WP2sYuSnlOn8oQEepVFniI7EM3L7k%2FkDpXfb7Dpf7IBL672Iva1Rya2by7q8mp32EcSoQCJ0wR37mYrN%2BOSzv%2BkxmYFPUu5eLdeKiEIiF22i1yBLofVrp%2BEeNp58PCxzs0lYmbcvZPIivBF%2Fl1PwRgKYwGYK4pMUzvIIbNIGkgOJs&X-Amz-Signature=6463dda197094298ab2be2cf0ed15763a1c56208d78f95a7aa3384f5cd868264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

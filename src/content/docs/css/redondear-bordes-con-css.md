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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBWRE4TJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXccyZHoeuhOpgPPmdj84gQaCNy2r8iRFYpxyjmOZPdQIhAPJiytGhVetk99buVDvmfUlYl9pemwOZ7P47dJ68s6jUKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz436T8oeCUGrKUH9wq3AOVPQP0o0CtSvIKdt%2BnIgV1UxleIz89O2dyiRm6XRtjQVaX9Ku9UlvqrKMqxNOrFiDAVjNe2%2Fr9MJvowsY0Oxl%2FWxJPe9v5IfjMzRGhMxQGdfAnXF5LKPFrhVY5Dt4C3Mk7Q0pIQAeVyJzVTCUvpfJ6tGzG101EnP0xFiZfiKtjLVRj6vDMVuHnH5VCPL7ATI29ICwp3SZbZ7HXM7G6h6O9WQYXa%2Bo98Mo9ru3fn9KCLtwJU6q804LjJ1Eo86gILMDY%2ByCYiHTRsJGU8m8GAfMfG1MyiwWDAEHMJntdaAPcm4%2B2GOCtsnF%2F8o3Tcw9r6iSElZHbogrqUQnKFDtR7pQCytSEOQDb5IzEyFdiYu0tCkr7cllKzKfeQGl8yZUanYHGAM1C%2FEFh9opAwY4JYE%2FS%2BiyVLKaKAwsDKU5EWR6SEcDVx2Pj48ifJG1kN5TNHQGSekavONTwWDbnA1%2Bw9kmTBmmaoNfczkYAjOsUJD3UWDMfSQceBNXqHbq4pxYwYZAQ%2FVOY%2Ff3K3v8n4DexF2NfDVFQvZSfn8SkNoAoca04KH8NQQBFoOK%2BQXWl8Kgda7hYVdE6eRN7AfYTiy0OgWkoQnJ68tK9W45LxxmCgwyN5I4JftXIj67O9RfYGjDHlNnJBjqkAR%2F80Ad8L%2BP1CRjffBxRbOA87GIStTpLuQm4IyKPfWVNyejwg%2FiQLzuTL1KZTtpNm8vuj1VBcfzQ7PL54XdSEKKtQzR0anrbi9lPIS8Z2cZAbTRGs8VsNfLqKjgO2Wj9kPVPPCVVA2aC8maygZtI6MaqLRMB3R8UrNSQ%2FInE6lQTQr8nbWKdjnvkwcMjWfBJovqK4jQmifkgThfPFzmrQRoBL60Z&X-Amz-Signature=78c8c4bf1b5ce2c8bed3a0a5a80ee92748158f232445eab53bb4f97a1b50a24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBWRE4TJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXccyZHoeuhOpgPPmdj84gQaCNy2r8iRFYpxyjmOZPdQIhAPJiytGhVetk99buVDvmfUlYl9pemwOZ7P47dJ68s6jUKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz436T8oeCUGrKUH9wq3AOVPQP0o0CtSvIKdt%2BnIgV1UxleIz89O2dyiRm6XRtjQVaX9Ku9UlvqrKMqxNOrFiDAVjNe2%2Fr9MJvowsY0Oxl%2FWxJPe9v5IfjMzRGhMxQGdfAnXF5LKPFrhVY5Dt4C3Mk7Q0pIQAeVyJzVTCUvpfJ6tGzG101EnP0xFiZfiKtjLVRj6vDMVuHnH5VCPL7ATI29ICwp3SZbZ7HXM7G6h6O9WQYXa%2Bo98Mo9ru3fn9KCLtwJU6q804LjJ1Eo86gILMDY%2ByCYiHTRsJGU8m8GAfMfG1MyiwWDAEHMJntdaAPcm4%2B2GOCtsnF%2F8o3Tcw9r6iSElZHbogrqUQnKFDtR7pQCytSEOQDb5IzEyFdiYu0tCkr7cllKzKfeQGl8yZUanYHGAM1C%2FEFh9opAwY4JYE%2FS%2BiyVLKaKAwsDKU5EWR6SEcDVx2Pj48ifJG1kN5TNHQGSekavONTwWDbnA1%2Bw9kmTBmmaoNfczkYAjOsUJD3UWDMfSQceBNXqHbq4pxYwYZAQ%2FVOY%2Ff3K3v8n4DexF2NfDVFQvZSfn8SkNoAoca04KH8NQQBFoOK%2BQXWl8Kgda7hYVdE6eRN7AfYTiy0OgWkoQnJ68tK9W45LxxmCgwyN5I4JftXIj67O9RfYGjDHlNnJBjqkAR%2F80Ad8L%2BP1CRjffBxRbOA87GIStTpLuQm4IyKPfWVNyejwg%2FiQLzuTL1KZTtpNm8vuj1VBcfzQ7PL54XdSEKKtQzR0anrbi9lPIS8Z2cZAbTRGs8VsNfLqKjgO2Wj9kPVPPCVVA2aC8maygZtI6MaqLRMB3R8UrNSQ%2FInE6lQTQr8nbWKdjnvkwcMjWfBJovqK4jQmifkgThfPFzmrQRoBL60Z&X-Amz-Signature=63065c1acc8a3be9be210f4e17399a32b11cf89c725b513b6d6863f17bf01b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

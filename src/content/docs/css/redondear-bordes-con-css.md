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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IDGUO27%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKyyS0wItfOu8G3WYA1eJKtXne9fV0eDwb9YoMWzLPAIgHD3rYSOBD2ZZWm7KVrICF%2F6BU8es7hkMpBa%2F5%2FmDX%2FEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWWn0gnyOaJMGWC%2BSrcA8gBOQF6MplR7oTyrRU2GwfMG4WDrgswXpb%2F7Azaq1mjf9dkJlTwGVmM2HjZXPfqeJ3TEQKdPzl9pHiS9ojsgqxxopqZBoj9%2FStqNO3zObDHRZVSoElOnziis2%2BDjtYUToTOdAbgU%2FRph9%2Bcb5aWfobCdzAmotfFQLRNDmM%2FvY3TqmvFEqqxemGNSBK166N2KDus3aOJvamPJEFSNtp2DUXBdyVl3KoZerbQjjOnWp7HjF0XI8hm5eSkz2adx5oOIPG19Yk2yBLFL4wPzExq1LUVuXHvJ%2F5NHqPNCk6vsNR2oytK3us5jgY02kbVU09klcbcpTiCfqW7wPaDoz1OA26ce25NmeXVeeKc5xjHYDcg6ka9GVNcrqLYJSZJycFOG8TUjp4mp7sSrx0ZtnTYMSu5MO%2FJh5UOw%2BwHTws9lDZMe4WJsmKeDhTSly%2FPacE1cu1b8LCZRyycX3EApezlffSdh8QilD2Chqg%2Bebywj%2FQox5wz%2BTUmTjLJfw1xVH53FsB4P5oSesuwCvZD4BNwPLj3hhvV4x6gEZ7TDP18Cqf08FdsAd725lLngCxfzQHYRltmx48EPX7xQ43qvMEk4qFj8BVJhllmLGLs0FIbB0Gwm7oUhXtkheF%2BSu94MJLt2ckGOqUBygHi%2Fg0LeVbZDT%2F4IABXppqFN9%2FGrdNXlk8vLbzIlcGeNhjtjM8MHyiUTZ1iKt45uQpvh28yv2udvtEIGvP31jkT1Vm4Exow8BbY3no4AFuukqtlLeZ9fWUMHk2A6R0rP26c7S3RZ830dWdYhN9KKuPql7h7Tj2HhVCBywH0Iz6vscBg62cRxFOmWWFbaD7kGyOKwiNWm3sV%2FGW93lkeZb4km9tk&X-Amz-Signature=f41d4e1b70facead59e9ed30a0245799579aa6f104a00cb0afbaab44c2f0a247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IDGUO27%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKyyS0wItfOu8G3WYA1eJKtXne9fV0eDwb9YoMWzLPAIgHD3rYSOBD2ZZWm7KVrICF%2F6BU8es7hkMpBa%2F5%2FmDX%2FEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWWn0gnyOaJMGWC%2BSrcA8gBOQF6MplR7oTyrRU2GwfMG4WDrgswXpb%2F7Azaq1mjf9dkJlTwGVmM2HjZXPfqeJ3TEQKdPzl9pHiS9ojsgqxxopqZBoj9%2FStqNO3zObDHRZVSoElOnziis2%2BDjtYUToTOdAbgU%2FRph9%2Bcb5aWfobCdzAmotfFQLRNDmM%2FvY3TqmvFEqqxemGNSBK166N2KDus3aOJvamPJEFSNtp2DUXBdyVl3KoZerbQjjOnWp7HjF0XI8hm5eSkz2adx5oOIPG19Yk2yBLFL4wPzExq1LUVuXHvJ%2F5NHqPNCk6vsNR2oytK3us5jgY02kbVU09klcbcpTiCfqW7wPaDoz1OA26ce25NmeXVeeKc5xjHYDcg6ka9GVNcrqLYJSZJycFOG8TUjp4mp7sSrx0ZtnTYMSu5MO%2FJh5UOw%2BwHTws9lDZMe4WJsmKeDhTSly%2FPacE1cu1b8LCZRyycX3EApezlffSdh8QilD2Chqg%2Bebywj%2FQox5wz%2BTUmTjLJfw1xVH53FsB4P5oSesuwCvZD4BNwPLj3hhvV4x6gEZ7TDP18Cqf08FdsAd725lLngCxfzQHYRltmx48EPX7xQ43qvMEk4qFj8BVJhllmLGLs0FIbB0Gwm7oUhXtkheF%2BSu94MJLt2ckGOqUBygHi%2Fg0LeVbZDT%2F4IABXppqFN9%2FGrdNXlk8vLbzIlcGeNhjtjM8MHyiUTZ1iKt45uQpvh28yv2udvtEIGvP31jkT1Vm4Exow8BbY3no4AFuukqtlLeZ9fWUMHk2A6R0rP26c7S3RZ830dWdYhN9KKuPql7h7Tj2HhVCBywH0Iz6vscBg62cRxFOmWWFbaD7kGyOKwiNWm3sV%2FGW93lkeZb4km9tk&X-Amz-Signature=eacbbe9e09b578ed4c3320b56ae81bcd046c4e19cfabefea4044c50f8f8d1298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

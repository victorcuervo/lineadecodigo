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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2Y566Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIsbCN9ivtQDlUiZHbzQdUS2849pW5ZqpQI8YqBcrjcQIhAMa4pFj7xdMHIdDM8qwqYvTLWhyYhqNoAZ9t%2B9yyiUkJKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqsxnh%2BdhtA5MwM2cq3APMxfDBcfIKNXT%2F6FtvfHydxPGlfl%2BQ6Db6CdEJuMJQEkD7yHz7O2n5F2x6UYKMn4pFBAcPoyov5vaU2CbcEvbFKAok4SB64kD9YW2C%2B6eC9%2Bxun1y%2F5wBMXkA06bq7HsZVHBM0fkLB0j6Sm0Q%2BSJFaJF0egbydH5%2B4MLVsiy1YCjcXFYBPLigc2J5x4aW26G0uFibcgL65Q0gk7Iprfrt7JeDfsXdrA1VavNTozQQ%2FjRS37RnnxKRMHm7n3%2FcheSpTN%2BCOtdSfk00B2MgaEmYjM55hwzybIaxHwC6X0QsodHJpzT1rEi1Ywicj2xTbhRENCrqTfsXWZrdMZ6bdctPTV6ZDk%2FOOx27%2BMuDw8fN2K7qaRyd03UeWcxYxPPfVLgP1kolIcGUMM29F0IP28z1ofVL6NBv8WiWT%2FTx9PVwkRqPuZY5HONO2TT9CHBf6E5%2F9X2W%2FpXZ4cApCtZEcLfOPQ8HayUtPQukoDSdCPBSlBycFw%2FvVNFCPlmZMzb%2FZuT5Paw8RBzLeNg3rHyJGjj5srQvEedwqIDiq5kRMxsJEr49kqpeAc6dpc3TLxtYrmRy7if9EuAbTYv%2BNRSUrHbf8Ly7XkKHBKQlB74NCCebr2DsaeTBRQa8MAgEcgjDBh9zJBjqkAYnk4Opb4zzjCdH%2F3oc2NoOlqlxHthM7gekqhvwG3RDqgLpsW4Mu8th%2F5xOBlpig7g9O%2BlBJ5Ts%2Fltdgwjgp0REqIV1OtorEy2RC5r0G6MOPI1VMKKH33W1KUeQV2atAWOHcmAM45r6b2oqiFYUjmunE91abkWS8%2BmtDxTYhrjAUDoAgbWITnh1MmoP2H%2FdpLxWD0%2BXMZTeltPNpuONj11YKK11%2F&X-Amz-Signature=699f5cb4e2508b025d8160ba61fa707ae99df480fbb25b6c4f3c1087a0e12fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2Y566Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIsbCN9ivtQDlUiZHbzQdUS2849pW5ZqpQI8YqBcrjcQIhAMa4pFj7xdMHIdDM8qwqYvTLWhyYhqNoAZ9t%2B9yyiUkJKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqsxnh%2BdhtA5MwM2cq3APMxfDBcfIKNXT%2F6FtvfHydxPGlfl%2BQ6Db6CdEJuMJQEkD7yHz7O2n5F2x6UYKMn4pFBAcPoyov5vaU2CbcEvbFKAok4SB64kD9YW2C%2B6eC9%2Bxun1y%2F5wBMXkA06bq7HsZVHBM0fkLB0j6Sm0Q%2BSJFaJF0egbydH5%2B4MLVsiy1YCjcXFYBPLigc2J5x4aW26G0uFibcgL65Q0gk7Iprfrt7JeDfsXdrA1VavNTozQQ%2FjRS37RnnxKRMHm7n3%2FcheSpTN%2BCOtdSfk00B2MgaEmYjM55hwzybIaxHwC6X0QsodHJpzT1rEi1Ywicj2xTbhRENCrqTfsXWZrdMZ6bdctPTV6ZDk%2FOOx27%2BMuDw8fN2K7qaRyd03UeWcxYxPPfVLgP1kolIcGUMM29F0IP28z1ofVL6NBv8WiWT%2FTx9PVwkRqPuZY5HONO2TT9CHBf6E5%2F9X2W%2FpXZ4cApCtZEcLfOPQ8HayUtPQukoDSdCPBSlBycFw%2FvVNFCPlmZMzb%2FZuT5Paw8RBzLeNg3rHyJGjj5srQvEedwqIDiq5kRMxsJEr49kqpeAc6dpc3TLxtYrmRy7if9EuAbTYv%2BNRSUrHbf8Ly7XkKHBKQlB74NCCebr2DsaeTBRQa8MAgEcgjDBh9zJBjqkAYnk4Opb4zzjCdH%2F3oc2NoOlqlxHthM7gekqhvwG3RDqgLpsW4Mu8th%2F5xOBlpig7g9O%2BlBJ5Ts%2Fltdgwjgp0REqIV1OtorEy2RC5r0G6MOPI1VMKKH33W1KUeQV2atAWOHcmAM45r6b2oqiFYUjmunE91abkWS8%2BmtDxTYhrjAUDoAgbWITnh1MmoP2H%2FdpLxWD0%2BXMZTeltPNpuONj11YKK11%2F&X-Amz-Signature=c2f0cf49e46d437400ed4fe9d07091f8b6b7adb4edbe2443502310fe29df2cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

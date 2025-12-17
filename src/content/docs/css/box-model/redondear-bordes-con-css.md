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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5LAF4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUdyiuDU81y9YRO4OdNffWUYiDBEkp%2FZ8mrgcySfoC6AiEAwPBV434FiquaOa63w90U3b1yWZwcBPXNAjtLwx%2BdmVMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPuvtrOD9tIx8MTcjyrcAwFlYajLhvxGbJN9r8CzQS%2FP1qEuezDWvZTnCzhEFUtKK7Yk31lf0UU04ugiRU1cXRgjvL7BmzY0yo3AUxR%2B8YorpKU9RAMVW7VR7akiaS%2Ftpm8TXZPmFhxuW2Qv8lDyE99rjJpMe7VC4oniGghm89KoPC%2FsNr5MnI2LkEqB4MPbsXQmcL6vl8VMHp5%2Bo3rMYRjHJp1ZF%2FjrnqVvNcg%2BygW773hHypu%2BvihFgM0XA9h0UkdGp4qJyGFrJ4i6s2x34sBAJnAsTH1Kh84wU3vEQsKtVDSoNGXMR8O38Nc%2B1s9ejKQVm0N8bN9Yj%2Be8r2Lq5se10OyNjtAu3hh4s%2Fm%2BgPjV2my1c6nclfv4iQPChF3DzgeXF0lBmxHO0O5AW9LQ8en6DOnBmvnC2BR7CsUYYvYjhjyOsYmvZA9%2Fp9eJ7BVLwqfuLMmXZtLRi0R3zVzf6PAQUKFVPe%2FBIUCtWWP3f%2BJw3flx7FlYrbAthn2EcCMG4EwO2atvzeQThh%2FcGf0LqtSB4mHL2XzVOQMl1HouX1GJtxbxXUQb75HEU2ho%2B8C%2FGgTIWRDttWQWhgklI1qO2cs2BSxQ4KW7bhTPUeO5f6N0JPPxaDvfm5CsJ33MqUnzHIi2268uHasARCxQMPvwicoGOqUBUTFOcdQotl1VaGIVZJNfaCyPDiAl0oY1swPLWJBfYAGkQebgEBBJkWzFURzsqxANwVEfjMPA03UZZSgnbWU3COR24mDQp4Bpyklo5hR%2FwKMf1u4163EIYRn5ga0buPIWKwQG7tR0bDH6rhGfiDTy5qNovUjjAqPc09o%2FNTBiL5Lc6DF0rIjPcv4vYCvGiMBPtCHuLM67Z65k6ETA4j%2FzJnKOvW1v&X-Amz-Signature=3d245b2fa5f5c40ed298f713ab4fb10cf23aac78b13fd6a00f2d76c3771f2320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5LAF4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUdyiuDU81y9YRO4OdNffWUYiDBEkp%2FZ8mrgcySfoC6AiEAwPBV434FiquaOa63w90U3b1yWZwcBPXNAjtLwx%2BdmVMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPuvtrOD9tIx8MTcjyrcAwFlYajLhvxGbJN9r8CzQS%2FP1qEuezDWvZTnCzhEFUtKK7Yk31lf0UU04ugiRU1cXRgjvL7BmzY0yo3AUxR%2B8YorpKU9RAMVW7VR7akiaS%2Ftpm8TXZPmFhxuW2Qv8lDyE99rjJpMe7VC4oniGghm89KoPC%2FsNr5MnI2LkEqB4MPbsXQmcL6vl8VMHp5%2Bo3rMYRjHJp1ZF%2FjrnqVvNcg%2BygW773hHypu%2BvihFgM0XA9h0UkdGp4qJyGFrJ4i6s2x34sBAJnAsTH1Kh84wU3vEQsKtVDSoNGXMR8O38Nc%2B1s9ejKQVm0N8bN9Yj%2Be8r2Lq5se10OyNjtAu3hh4s%2Fm%2BgPjV2my1c6nclfv4iQPChF3DzgeXF0lBmxHO0O5AW9LQ8en6DOnBmvnC2BR7CsUYYvYjhjyOsYmvZA9%2Fp9eJ7BVLwqfuLMmXZtLRi0R3zVzf6PAQUKFVPe%2FBIUCtWWP3f%2BJw3flx7FlYrbAthn2EcCMG4EwO2atvzeQThh%2FcGf0LqtSB4mHL2XzVOQMl1HouX1GJtxbxXUQb75HEU2ho%2B8C%2FGgTIWRDttWQWhgklI1qO2cs2BSxQ4KW7bhTPUeO5f6N0JPPxaDvfm5CsJ33MqUnzHIi2268uHasARCxQMPvwicoGOqUBUTFOcdQotl1VaGIVZJNfaCyPDiAl0oY1swPLWJBfYAGkQebgEBBJkWzFURzsqxANwVEfjMPA03UZZSgnbWU3COR24mDQp4Bpyklo5hR%2FwKMf1u4163EIYRn5ga0buPIWKwQG7tR0bDH6rhGfiDTy5qNovUjjAqPc09o%2FNTBiL5Lc6DF0rIjPcv4vYCvGiMBPtCHuLM67Z65k6ETA4j%2FzJnKOvW1v&X-Amz-Signature=5ff18b2852c73ef8c94a1f14ce697b459145d19e8be45e8020a9776c07de2d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

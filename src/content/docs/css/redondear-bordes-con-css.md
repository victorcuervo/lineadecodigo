---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IVTLL5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgebg0az27xw98VftenO1HgWgZmsDck3WBFAZwrfE%2BkAIgYtbkHzVCnssuGgailgjTEnzKjP8T6LxbQfumNoVLOMEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDA%2FzG3unvZdOwodVECrcAz%2FJoiGehTax2LZsZA94DHogU0iG5w%2B49fW4qDtXBaMDflaisZZ4S%2FpLVN5qN%2FiTVHRZOWhaUom0DCDsQQvQ0%2F3DmJhCSX2e9ghkypX6CFdW6Cn1y%2Bp6SdBXotrd0qgZM7DQORYMShSojq8u1P3i%2Bw8tOBKgY6MzfvcZPm%2FWZy6HqNovb446DRYfIiCKGfQvBaXZ9H8n6Dr%2BNU6LiX7MLgs6MSuEtwyx2LavxoI73syy0HxYiaKPBqkTOfZ4bJf6QKsKyI06rYcMAaI7x9CSZvwhINcyRXE6N2rZvvAumOyuzWENTx8fIiDTQj%2F6kxMgpicPy9H5qx3ZFpG4F70UxwVvMjDyMiL4qf%2BV0%2FhgZywaPYdybPPKhfyfADqdQYinoQvQbbKYxgjIGxfd7AfP2l5hCm0N%2F6qSaTnNlPC3iJwOLz%2B2nOoxBDP75QVQRrdqaGRYVPUfbpaJ%2FEB9d9UiiAc5WJadDQxuH4vyydT68JEOeUpCWZObB%2BMpZkTrZy3MdEvhxMh5r27S9aKrrYqqROOoe4mvEsW51Ldm1kFBhRq2aCTGBaAuqh1qZwzHdufGlQuGQrIcjo8tWqg5WPYYh2GHUWmU6LKvbn2X8Ec7nt1ayagoycfsXZ5b02%2FzMPXbxskGOqUBuzzOodBoKtbNHsKW99S%2Flmcwr%2BSeUO9mfZAIYavpwMEvK%2BCgZ%2FjYtjbMDv7TSts%2BlGXwYFrca4lXbrZaysqrGAWcQCjWEsP6QfqCkBf%2F0SVQ5BTKdOAzfXnvku764QvJWprtmhWJppoLz%2FwEFy8GtthPCKjaHvIcubV3iC9792Pi0%2Fijx7SRBvr6411SAKfYgQcpO8gaw9BQEEssVi2ak%2B%2FxusVh&X-Amz-Signature=b22977044ca89568228203f149635bbb97dad9e48d50b8e069bb6bbe0a36dbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IVTLL5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgebg0az27xw98VftenO1HgWgZmsDck3WBFAZwrfE%2BkAIgYtbkHzVCnssuGgailgjTEnzKjP8T6LxbQfumNoVLOMEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDA%2FzG3unvZdOwodVECrcAz%2FJoiGehTax2LZsZA94DHogU0iG5w%2B49fW4qDtXBaMDflaisZZ4S%2FpLVN5qN%2FiTVHRZOWhaUom0DCDsQQvQ0%2F3DmJhCSX2e9ghkypX6CFdW6Cn1y%2Bp6SdBXotrd0qgZM7DQORYMShSojq8u1P3i%2Bw8tOBKgY6MzfvcZPm%2FWZy6HqNovb446DRYfIiCKGfQvBaXZ9H8n6Dr%2BNU6LiX7MLgs6MSuEtwyx2LavxoI73syy0HxYiaKPBqkTOfZ4bJf6QKsKyI06rYcMAaI7x9CSZvwhINcyRXE6N2rZvvAumOyuzWENTx8fIiDTQj%2F6kxMgpicPy9H5qx3ZFpG4F70UxwVvMjDyMiL4qf%2BV0%2FhgZywaPYdybPPKhfyfADqdQYinoQvQbbKYxgjIGxfd7AfP2l5hCm0N%2F6qSaTnNlPC3iJwOLz%2B2nOoxBDP75QVQRrdqaGRYVPUfbpaJ%2FEB9d9UiiAc5WJadDQxuH4vyydT68JEOeUpCWZObB%2BMpZkTrZy3MdEvhxMh5r27S9aKrrYqqROOoe4mvEsW51Ldm1kFBhRq2aCTGBaAuqh1qZwzHdufGlQuGQrIcjo8tWqg5WPYYh2GHUWmU6LKvbn2X8Ec7nt1ayagoycfsXZ5b02%2FzMPXbxskGOqUBuzzOodBoKtbNHsKW99S%2Flmcwr%2BSeUO9mfZAIYavpwMEvK%2BCgZ%2FjYtjbMDv7TSts%2BlGXwYFrca4lXbrZaysqrGAWcQCjWEsP6QfqCkBf%2F0SVQ5BTKdOAzfXnvku764QvJWprtmhWJppoLz%2FwEFy8GtthPCKjaHvIcubV3iC9792Pi0%2Fijx7SRBvr6411SAKfYgQcpO8gaw9BQEEssVi2ak%2B%2FxusVh&X-Amz-Signature=b747c93c54fd184f2e23573e6cd78dd6e30bb3ea5d8a6404bacd8c8f04496719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

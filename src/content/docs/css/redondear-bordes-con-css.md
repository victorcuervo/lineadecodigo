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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNCD2HL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5m%2BqvtKbqKq83nrdruArsgApdVcEdKoY76iXWbKXqAiEAgFj1a%2F%2BFZLatVRyMVoW4R4p04Qxd47cjfWI0gNHpOiYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNN3sRMPqfLKqynrQircA8B43cdJDIghJa3WuzrsHofRV%2FHv0rHbjt0AWnC6wmzhPMpD1rO636YowgjmxI%2Fo4NpzGKxYy3Eetep6HL6xaJA65U4JsDRvsbly%2BrvPKUBdO1Ug6kD2gUppAt5qimjqo5xOGULD3688gw32nAArW33U5j1patZw%2Fxfku9IZFzbTgXoYv3m4kFevrdw42QFs0CsaEt3yUGaA6FBRc9AUp1BCd0wOyIGY7NjwI9JrXWg7tM2iuT3sSyy9HAIF1aZTYpVRbDCf2Abn2wNlvEVITtFgA90ByP%2BIT1BXI9VkhnZfxT2DLjZLJpeLasHKlwCsan%2FsffxVhbvQQ8fX7MbNFp%2BI1xDisLp8D3kjPXic9waIEyzDwgFPy2jWB2YpOBYNM7kbth%2FakAye1PVQDZF5qNSGWhmRkd8qY4ZETpl21CaIHfdnDznXKfHiQXmNHS2JeU9%2BInzrAdRYqeLIuea6PVLrXiL01aKQMj3DZaeUwd3qTsNurRXvEuKJkoWH7TIGOXLKSaQ%2F%2BE90J3hHWxM7r5PSmfurJLwrMoOKj6HXdKHYXxudru4CKba%2Fvh9iiKd%2FwU%2B%2Bzp%2Fc4%2BYSxxW0n%2F%2FbtBFF41GgnZPdnGbms1u7jhkzIJsgGIRZJtz%2BTci%2FMLT3y8kGOqUBHjCNJgxWEjl7ju1vtJlXJhaOgImsdgdTnbLqfiQin%2BQVqbGaXV1Q%2FR2qsX0SinLNkfll%2B%2FU%2FEZeud3wdPUURarTMR92aTf1iVJOJQ0PwrUCtIhmlJoWKil1bTGq0dGe0%2BIxUPhJ38IKYZrndJ7k%2FY68oA9FBuge%2BgnLagZv71ieG8uSyIOWCcdLE3ODjjSA6RjJtxNzh%2B%2F%2BHc0eAjHJJDxFT27nJ&X-Amz-Signature=66b2100ee725f9c5236e9b982333aae064acdff05531a83ff052bf32639e9826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNCD2HL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5m%2BqvtKbqKq83nrdruArsgApdVcEdKoY76iXWbKXqAiEAgFj1a%2F%2BFZLatVRyMVoW4R4p04Qxd47cjfWI0gNHpOiYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNN3sRMPqfLKqynrQircA8B43cdJDIghJa3WuzrsHofRV%2FHv0rHbjt0AWnC6wmzhPMpD1rO636YowgjmxI%2Fo4NpzGKxYy3Eetep6HL6xaJA65U4JsDRvsbly%2BrvPKUBdO1Ug6kD2gUppAt5qimjqo5xOGULD3688gw32nAArW33U5j1patZw%2Fxfku9IZFzbTgXoYv3m4kFevrdw42QFs0CsaEt3yUGaA6FBRc9AUp1BCd0wOyIGY7NjwI9JrXWg7tM2iuT3sSyy9HAIF1aZTYpVRbDCf2Abn2wNlvEVITtFgA90ByP%2BIT1BXI9VkhnZfxT2DLjZLJpeLasHKlwCsan%2FsffxVhbvQQ8fX7MbNFp%2BI1xDisLp8D3kjPXic9waIEyzDwgFPy2jWB2YpOBYNM7kbth%2FakAye1PVQDZF5qNSGWhmRkd8qY4ZETpl21CaIHfdnDznXKfHiQXmNHS2JeU9%2BInzrAdRYqeLIuea6PVLrXiL01aKQMj3DZaeUwd3qTsNurRXvEuKJkoWH7TIGOXLKSaQ%2F%2BE90J3hHWxM7r5PSmfurJLwrMoOKj6HXdKHYXxudru4CKba%2Fvh9iiKd%2FwU%2B%2Bzp%2Fc4%2BYSxxW0n%2F%2FbtBFF41GgnZPdnGbms1u7jhkzIJsgGIRZJtz%2BTci%2FMLT3y8kGOqUBHjCNJgxWEjl7ju1vtJlXJhaOgImsdgdTnbLqfiQin%2BQVqbGaXV1Q%2FR2qsX0SinLNkfll%2B%2FU%2FEZeud3wdPUURarTMR92aTf1iVJOJQ0PwrUCtIhmlJoWKil1bTGq0dGe0%2BIxUPhJ38IKYZrndJ7k%2FY68oA9FBuge%2BgnLagZv71ieG8uSyIOWCcdLE3ODjjSA6RjJtxNzh%2B%2F%2BHc0eAjHJJDxFT27nJ&X-Amz-Signature=e9e358a6671c974c20e7ef2c9765af0b9ad0ea7a22028c999b631ea97658da35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

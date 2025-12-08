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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWUPJXB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGwDZ8m%2BOxjx8HSOnKOo48GDTYsZJJHLopln4IhLPbFAiEAixygXMu0gCw4jFIrbzHfwihKUZnHJoFWZk28xoK2ziwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo0pj3Y7TaU8YsgCircA%2Fm%2Fa5j%2FNUkB%2Bag17YsIU5%2B%2FmHKGRNSu2ZKuXe3vNCAgeJPONGH1frwKegAIrL1krGVVV%2F8h949Ry9gfn8tyQsWAGvGR8Q7x9ttLmpm%2BVaLiuVNI4bzQ96GXL6gvUZPbYUdVWKQ3O37zfTNvpUew9%2BNw%2F7oCrpprz8HxhaFmdbLw1EgKkD1wtHHMst0UeQzeOb8ND1Rh%2BgPuPWIy5so%2BtMZE2Dcb%2FJr7njNHBN5kUDSG%2F0txvG7vKUJb2%2FB2bPUPm1sw9RC729HtduhIIEaqURBa6ktXodYxGuIoRf7Ss4Od9Hm1b9yh37dojdid2tvjb5kt%2FG7fkGsuP8rxgTKByEHUV6mK7QNBklCUBYt0ioSCu822PzU7%2FhPex5vCiLY8Fa5xBQePn91L%2BV%2Fd%2FYRrcLkuxt8nEMPyzkGku63w5%2BlJy3qzowaFTnUcvA0QOGNbdf%2F9%2B%2BPsVXIqXAn4kl%2B9CdD6ieDS3ErZH5B6fWC5VpjAnPsT5J2YS%2B%2FaCk9P9dsTBGaBImC36mPdm8lRk2GqddYEvb7u8Qpgf2hkN9M3njsk7rQR07%2BzyQ%2Bnriy3KgsDUZxl6lF0DCJUf5KAEw0dYFAaAfe00XFyoGoy9ZFXWzbvfOuBOQxw5sfnTTrXMM6h2MkGOqUBjHntL8sak20qma0FdJSTzkHstks8qyyrDvw%2FgqN8QhEFSuYD3yQpPKTcRXNTwGm%2FjuRCm3fvIPlZ1mQYDiTBQWGZ3bKm%2FExzI56uQ5YSwwMxSa4%2Fvzf6PdRpHkvh3nSyX%2BoSqog6mpAK%2FHTv%2FH7J3SKouww6W1uV%2BZIC5PxlFGYNkxoqmnYmMVyh8SEEJ4EGhUAACpvjEx9Rtjt6m01DrCUDFALV&X-Amz-Signature=c937bdb2a20ed167ebb6df858604522ae4475fe746603a5623412b6fc2179ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWUPJXB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGwDZ8m%2BOxjx8HSOnKOo48GDTYsZJJHLopln4IhLPbFAiEAixygXMu0gCw4jFIrbzHfwihKUZnHJoFWZk28xoK2ziwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo0pj3Y7TaU8YsgCircA%2Fm%2Fa5j%2FNUkB%2Bag17YsIU5%2B%2FmHKGRNSu2ZKuXe3vNCAgeJPONGH1frwKegAIrL1krGVVV%2F8h949Ry9gfn8tyQsWAGvGR8Q7x9ttLmpm%2BVaLiuVNI4bzQ96GXL6gvUZPbYUdVWKQ3O37zfTNvpUew9%2BNw%2F7oCrpprz8HxhaFmdbLw1EgKkD1wtHHMst0UeQzeOb8ND1Rh%2BgPuPWIy5so%2BtMZE2Dcb%2FJr7njNHBN5kUDSG%2F0txvG7vKUJb2%2FB2bPUPm1sw9RC729HtduhIIEaqURBa6ktXodYxGuIoRf7Ss4Od9Hm1b9yh37dojdid2tvjb5kt%2FG7fkGsuP8rxgTKByEHUV6mK7QNBklCUBYt0ioSCu822PzU7%2FhPex5vCiLY8Fa5xBQePn91L%2BV%2Fd%2FYRrcLkuxt8nEMPyzkGku63w5%2BlJy3qzowaFTnUcvA0QOGNbdf%2F9%2B%2BPsVXIqXAn4kl%2B9CdD6ieDS3ErZH5B6fWC5VpjAnPsT5J2YS%2B%2FaCk9P9dsTBGaBImC36mPdm8lRk2GqddYEvb7u8Qpgf2hkN9M3njsk7rQR07%2BzyQ%2Bnriy3KgsDUZxl6lF0DCJUf5KAEw0dYFAaAfe00XFyoGoy9ZFXWzbvfOuBOQxw5sfnTTrXMM6h2MkGOqUBjHntL8sak20qma0FdJSTzkHstks8qyyrDvw%2FgqN8QhEFSuYD3yQpPKTcRXNTwGm%2FjuRCm3fvIPlZ1mQYDiTBQWGZ3bKm%2FExzI56uQ5YSwwMxSa4%2Fvzf6PdRpHkvh3nSyX%2BoSqog6mpAK%2FHTv%2FH7J3SKouww6W1uV%2BZIC5PxlFGYNkxoqmnYmMVyh8SEEJ4EGhUAACpvjEx9Rtjt6m01DrCUDFALV&X-Amz-Signature=7c9b939b65b652b06ab799d2a56db00906e2e4361c4343c3216be06d93b60f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

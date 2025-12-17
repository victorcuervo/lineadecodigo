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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUGYMB2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyN%2F%2BWaFGCHkxW4qF6a72j97kAqfM8lZqW4a%2BA%2F4DwlAiEAxdk86Or4S6Jwti%2FHS%2FGdn6svzef4Pxpphi84Sdq0G%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBL3%2BJsvBOcC0TXXIircA5NMnXyz8nZjUG1APp%2BBT3irbErJKr5NyxKz%2BHhWMI6sZEbvbRl5KOllQQAjPJ55q0J8hvBC%2FdCXEGM6S06wc8c%2BlMUE9bJJJSLgE2Oio5QHA2J71GQyjHKjVKy9L4t2jWFCdFx8mhPzt2vAAcz8kCzmIDueGKXITDrYHkMwUFZuK5aZjSusclKyNNZ9nOPznTM%2BLxEzyu1CJi%2FeZopUHcxv188qm4LaQ8H0VrDZHLvtSDhoyrQcDawAlaUUVnZnn2DdRUaFHokyPOMfFKO%2F%2FHVXSy6E36khQCA3s%2FGZfV0Bemt4wOC%2FyIE7jxRizueUkkCgqU6Qa7Jp0f6HZUwvFEwGDI8gsBgGCDbWUvEQzx3EQ%2BHP%2B1zHR%2BtmsSNii%2Bpg20heDdUOAfX2EDx5bl1ZUtLs9BYBtf%2B30YkdDCE1rltAEl49p4q2Fcj1LPwNaYlxSS3gfKOi1OLxWZHxoNLGN17gQoTjhhZ9WlQ6SnuzyzOrnqk5vafL7yy9S0ZfkYIXjnBA9klCe7jrl9Rbw4Hye%2B3a22YAKw13DBwqDjaiDua88ogvMnEaBawwOotpySWx41tubUH5KO9Wu0hMeb3zmNPucMD8dl70kE97TYpHx1ci2Zf02%2BxXvHqSAHWjMPvQicoGOqUB1RXMS7yoCted0jaFXKGIy7CKlo7vjdmfqQQ1qa1ciixGkvnzO12chSGvCrqdB078O%2FHsC6BCySnsYKxpPvoztAyrpmd1HN%2Frc8c9Gvm3LZMVRibS6Q5C93dTd12aCI%2F2eYMBp5e2cSfBppYTXQTri8%2BmvApN%2FB7M3o9%2F3KqSTFX8w5Ol0NK7bzNnORQGLrcK5zc6JoPVcTcfTW3Ro1KWnnyC1ih0&X-Amz-Signature=a75035c9f5f02672c6207b3f6faf069fc405fe3eff775ed52f5b9eaf66dcbf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUGYMB2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyN%2F%2BWaFGCHkxW4qF6a72j97kAqfM8lZqW4a%2BA%2F4DwlAiEAxdk86Or4S6Jwti%2FHS%2FGdn6svzef4Pxpphi84Sdq0G%2BEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBL3%2BJsvBOcC0TXXIircA5NMnXyz8nZjUG1APp%2BBT3irbErJKr5NyxKz%2BHhWMI6sZEbvbRl5KOllQQAjPJ55q0J8hvBC%2FdCXEGM6S06wc8c%2BlMUE9bJJJSLgE2Oio5QHA2J71GQyjHKjVKy9L4t2jWFCdFx8mhPzt2vAAcz8kCzmIDueGKXITDrYHkMwUFZuK5aZjSusclKyNNZ9nOPznTM%2BLxEzyu1CJi%2FeZopUHcxv188qm4LaQ8H0VrDZHLvtSDhoyrQcDawAlaUUVnZnn2DdRUaFHokyPOMfFKO%2F%2FHVXSy6E36khQCA3s%2FGZfV0Bemt4wOC%2FyIE7jxRizueUkkCgqU6Qa7Jp0f6HZUwvFEwGDI8gsBgGCDbWUvEQzx3EQ%2BHP%2B1zHR%2BtmsSNii%2Bpg20heDdUOAfX2EDx5bl1ZUtLs9BYBtf%2B30YkdDCE1rltAEl49p4q2Fcj1LPwNaYlxSS3gfKOi1OLxWZHxoNLGN17gQoTjhhZ9WlQ6SnuzyzOrnqk5vafL7yy9S0ZfkYIXjnBA9klCe7jrl9Rbw4Hye%2B3a22YAKw13DBwqDjaiDua88ogvMnEaBawwOotpySWx41tubUH5KO9Wu0hMeb3zmNPucMD8dl70kE97TYpHx1ci2Zf02%2BxXvHqSAHWjMPvQicoGOqUB1RXMS7yoCted0jaFXKGIy7CKlo7vjdmfqQQ1qa1ciixGkvnzO12chSGvCrqdB078O%2FHsC6BCySnsYKxpPvoztAyrpmd1HN%2Frc8c9Gvm3LZMVRibS6Q5C93dTd12aCI%2F2eYMBp5e2cSfBppYTXQTri8%2BmvApN%2FB7M3o9%2F3KqSTFX8w5Ol0NK7bzNnORQGLrcK5zc6JoPVcTcfTW3Ro1KWnnyC1ih0&X-Amz-Signature=71db320abe3d6ee69afa291f842e35b5e5eead2f9ebf2adc2e4b05226d9561f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3XPFK4X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi1o6xOirrjRsxErbtSNa3aVNcthwnWjI9LgsuCj0%2B4QIgdSQJfNYlSmtOkTuj1J%2FjSCwZDaPkSd8EIfvomL%2FznNEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBt%2FdXJQi%2FRxUnkcxCrcA%2Be3LCeasBW%2Fst9okf3oIglc%2BBnpjyacbiu1rQVSstAVkk4L96Yp%2FwjN0nYQD5AznkbHACCa1wrl8%2FXP4V%2FgFQUMq%2FOIa89%2BqaCbAxPjSm9H%2FBbwzy%2FFTfM0M59bzL7trtPI8PCVbWgEGFB87FoseJ%2FdGPhdJX3XvymI6KYdDuZJhafJ26nJGDu60Ka1v3px2j0WHWTKvkqPEuo58K1pnFqMqHG8j6ViJJ6YPOx8b4DW8TJvETCwbGDzEp4yeEWm%2B67Nba%2FLpr4N%2FPhPmxs6TH%2BzEp15AegpJs4HegtCo64rogchLjHAvTNtYqkYFDYzDE1eyAq1rOtGfjth0W6sEl5ISZ6L01YurBnpxFkTPz8ZQrc4iMKuC%2FM3xXut8krKQ8HBBb69BWqv5d5btnYsrBd4uyrEGuzb8aCaO5tqxj9eJY6cnlMzg20%2FPS4soXMskJEiZJ8EwekAWeO0GGWYhuGdjLzy4%2B%2FTLNzqd%2F7VpzLZ7sD7MjtWXQvBJpXEDUoKGmZ31a82v0fdzxBQUewTxW1P21r%2Fd%2BxyFsByOV84BiFG%2BehhvVqy4Tlv9kPq%2BrSiRanT%2Bj63VEtiPhoDKzcjiWRZC92WOSpz7MIF8YmmgbiV97MPjs%2FR8YpMreY6MJDsy8kGOqUB5iPmSEUu3Btri9Rfd2Z%2BymUTnOPU3mKrtsRWaMJ7PLq9E4lsZi2nY00ln97QPUPtAzP0fwyL%2B7iO6j1xbxdrpWpYWcSx2CAGJX8XdscGfbXLi%2F%2FzqGntn1zhlT8tA3ESzxvWiRb%2FV4Um1y0ZFex6Hu5a4LLVo1GJqI%2BKM6JR8ctlOC7OQNdG3dJtNneFQX4U%2Fb6WVYFQaV3KsSIxw1IyN%2BEcQkI6&X-Amz-Signature=1de9346e0420964840bc7f50e1aa0054e88e667002a9ae974e0901d26ed63318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3XPFK4X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi1o6xOirrjRsxErbtSNa3aVNcthwnWjI9LgsuCj0%2B4QIgdSQJfNYlSmtOkTuj1J%2FjSCwZDaPkSd8EIfvomL%2FznNEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBt%2FdXJQi%2FRxUnkcxCrcA%2Be3LCeasBW%2Fst9okf3oIglc%2BBnpjyacbiu1rQVSstAVkk4L96Yp%2FwjN0nYQD5AznkbHACCa1wrl8%2FXP4V%2FgFQUMq%2FOIa89%2BqaCbAxPjSm9H%2FBbwzy%2FFTfM0M59bzL7trtPI8PCVbWgEGFB87FoseJ%2FdGPhdJX3XvymI6KYdDuZJhafJ26nJGDu60Ka1v3px2j0WHWTKvkqPEuo58K1pnFqMqHG8j6ViJJ6YPOx8b4DW8TJvETCwbGDzEp4yeEWm%2B67Nba%2FLpr4N%2FPhPmxs6TH%2BzEp15AegpJs4HegtCo64rogchLjHAvTNtYqkYFDYzDE1eyAq1rOtGfjth0W6sEl5ISZ6L01YurBnpxFkTPz8ZQrc4iMKuC%2FM3xXut8krKQ8HBBb69BWqv5d5btnYsrBd4uyrEGuzb8aCaO5tqxj9eJY6cnlMzg20%2FPS4soXMskJEiZJ8EwekAWeO0GGWYhuGdjLzy4%2B%2FTLNzqd%2F7VpzLZ7sD7MjtWXQvBJpXEDUoKGmZ31a82v0fdzxBQUewTxW1P21r%2Fd%2BxyFsByOV84BiFG%2BehhvVqy4Tlv9kPq%2BrSiRanT%2Bj63VEtiPhoDKzcjiWRZC92WOSpz7MIF8YmmgbiV97MPjs%2FR8YpMreY6MJDsy8kGOqUB5iPmSEUu3Btri9Rfd2Z%2BymUTnOPU3mKrtsRWaMJ7PLq9E4lsZi2nY00ln97QPUPtAzP0fwyL%2B7iO6j1xbxdrpWpYWcSx2CAGJX8XdscGfbXLi%2F%2FzqGntn1zhlT8tA3ESzxvWiRb%2FV4Um1y0ZFex6Hu5a4LLVo1GJqI%2BKM6JR8ctlOC7OQNdG3dJtNneFQX4U%2Fb6WVYFQaV3KsSIxw1IyN%2BEcQkI6&X-Amz-Signature=5e246709d42b7becd8c9037c18368a5df9067657d847b96ebee4452bda3c11fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

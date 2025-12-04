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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNWGQRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBr71W5XrlJ8P1ZuXqEGHlBxT6NkhWH5Gnu2BjCXOWGoAiEAju2j4l%2BV7NGiIPwokw4yBcUcp2ShiOAkMLD9uPRjWoMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDkVgkOSXPpdGyGyeircA4sPMCtAlDYy4%2FuJRplpU%2FAUzpM%2F9Ut1tGVBYCeWbPAecdOJtDXTiTBxs%2ByOblIDG2Xh%2BTf3kcKbvuOpvyfKGfmRNrBlgvXkrPMOTWJ2gtLoPWswtC2gANu%2BQhELG%2FcNY6VCn0gZJY5vEuvK8cfocvTr2POVB5XplU8e13r4hBm36m%2FAxENyoqtWoyS5fOO08mCgl4v4qcLbW1vIR0CopEHuFyyt94Pti0PzBXcHOZt17QBhwX7oPiBFhs2RacpLtiu%2Baoh15D7o%2BNTgxE2UuQ9CUln2CTKgi2KTyoFyTxVS25NH1yMJuGJU%2FD2V8p9bWN%2B7%2Fk04ded7piJS14k%2F8P1OXYAY%2Bzte5XISozntH%2BVikaMTjVxlNXW6KuuOOYTMgfwMdfhra%2BVRYUP5XGuZHxN5yOMMdSBKtCjgexppp7f%2BfKwmSwg6yZGb3BMYmUSTLgfoEu0rAg2whS218rI26jgX0Rkjnd9LldZ9homHf3RNpgu%2BD5CNJ%2BMyx5pKG1mv8YC1YIT4Y6lBBIOhRi5Xdc5ePGaumZSdX8SfLgIXhPbUa8JnwnvSd%2FsyWsLh3ZL6%2BsVZZByfjnwyce8YU4fkTa8FHwByG4yAfjvBsKxvE2GaLTKr6ByjR8wQ5Y4PMJ%2BRxMkGOqUB80LlTBO%2FmlhUu%2FavNxUjkC4bE3KH4J9%2BwGV4wqvahXKoLea8%2B7Lx2OmBd78wRoxBifsYgIBFAJU8RQkzWV8fO1hJp7gCAzdfyBKTuJtgou%2BP0NskRDVjych%2B3GN5NCyKFgxY6rVfkv2jXk%2BuJVY42RE7FxbEPKd4yo6l02PdwEBOAv4jngza3ZWROgtHRZHHoWl9O1GkbM5ewkXwXY0177XfQdhp&X-Amz-Signature=57ec799493c0d048e814c26ff03ce2522358a9c79b6bfdc22bc45278360be6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNWGQRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBr71W5XrlJ8P1ZuXqEGHlBxT6NkhWH5Gnu2BjCXOWGoAiEAju2j4l%2BV7NGiIPwokw4yBcUcp2ShiOAkMLD9uPRjWoMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDkVgkOSXPpdGyGyeircA4sPMCtAlDYy4%2FuJRplpU%2FAUzpM%2F9Ut1tGVBYCeWbPAecdOJtDXTiTBxs%2ByOblIDG2Xh%2BTf3kcKbvuOpvyfKGfmRNrBlgvXkrPMOTWJ2gtLoPWswtC2gANu%2BQhELG%2FcNY6VCn0gZJY5vEuvK8cfocvTr2POVB5XplU8e13r4hBm36m%2FAxENyoqtWoyS5fOO08mCgl4v4qcLbW1vIR0CopEHuFyyt94Pti0PzBXcHOZt17QBhwX7oPiBFhs2RacpLtiu%2Baoh15D7o%2BNTgxE2UuQ9CUln2CTKgi2KTyoFyTxVS25NH1yMJuGJU%2FD2V8p9bWN%2B7%2Fk04ded7piJS14k%2F8P1OXYAY%2Bzte5XISozntH%2BVikaMTjVxlNXW6KuuOOYTMgfwMdfhra%2BVRYUP5XGuZHxN5yOMMdSBKtCjgexppp7f%2BfKwmSwg6yZGb3BMYmUSTLgfoEu0rAg2whS218rI26jgX0Rkjnd9LldZ9homHf3RNpgu%2BD5CNJ%2BMyx5pKG1mv8YC1YIT4Y6lBBIOhRi5Xdc5ePGaumZSdX8SfLgIXhPbUa8JnwnvSd%2FsyWsLh3ZL6%2BsVZZByfjnwyce8YU4fkTa8FHwByG4yAfjvBsKxvE2GaLTKr6ByjR8wQ5Y4PMJ%2BRxMkGOqUB80LlTBO%2FmlhUu%2FavNxUjkC4bE3KH4J9%2BwGV4wqvahXKoLea8%2B7Lx2OmBd78wRoxBifsYgIBFAJU8RQkzWV8fO1hJp7gCAzdfyBKTuJtgou%2BP0NskRDVjych%2B3GN5NCyKFgxY6rVfkv2jXk%2BuJVY42RE7FxbEPKd4yo6l02PdwEBOAv4jngza3ZWROgtHRZHHoWl9O1GkbM5ewkXwXY0177XfQdhp&X-Amz-Signature=73e15b82685296e1e5228948ea5394fa58710dcd2beefeff87ea999b17aea3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

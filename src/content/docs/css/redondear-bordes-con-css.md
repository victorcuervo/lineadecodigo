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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASPV6QE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFna6JRKZem%2BFBpU65RBe%2Bouno1sE7kzys%2F%2BWOQI%2FQrAiEAzDdcs3wXPLkbBtrCm%2BNvyoE9yUNgCZj44roKWLucNlcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGinwEECW9zTRpTPFyrcA3qjkWFL7sYi%2FV2IwfCVenta2Y6LYdmM6VjPwrhbz36JPoGt3ftcnVhVyc7bow4q3xjP4ys3wszgQN6lIWNZjQWm%2BXCbcLom5QhbZp0n9Y%2Ba36ZEMqFy7ThShIVVnlhcCPZBPGmnPp6VoyFjMpKfsbmAsGUzgxvneEN7E%2BK39ncm%2Bev0O%2F3lWW9vhL49E18t2sGT5o7I9BvxFK2FiOeeRk3namFwTfrgm9ZnZtS6ZzZQLAH0wgA38scDshlB%2F8SBc6FbkQwaUcC5qH3Oth817iHJbumX8nEQjg7Jn5PxoG3ROO7HuBsZ0xyY8rQ3StcLGNeI9cQZpySx%2F6OrSm0K0NVfkvcvfTRf70I4PSCu7%2BJpNPiWsGebCtpqAoDHFB%2B7CRuCQPjOD%2FWtYMOS9LwEOsq6WeFqCCDrR168yIxJyi8i6%2FBoqefHc6ncS%2Bq%2FriauKL9uUdlDRXmriJebOLMNCJFrnmA5gXa%2BnL5HLRkYlq%2F84jRaBuO76QMVtljC3wFAvRxllwaH5LDpLiryR0HDO9B4FvVmIx3E4hfFZioZsUyKdIiYHHjN6N17h1jq11pw2iwr7WYVYj1coW5J0QUflcuFCIDmN0ip5SgwBAXD4B8HvQpxAPGo4EyCXnZwML%2Bi3ckGOqUB%2BTGROL5%2BEW72H419G8u8%2BDOwby1Oo6Bbyiwv7MV2AAfV5tEyLd3S%2FomX8YgHkBiKzyOhf5zh7adAKxDoYjOA3eR7CyWFGHt7JGQOwJu4N3MbOSD0LX5pw%2BHPXnjImrnNIDeQc5BZZKbF43mRkCuEJLpJWGL4C5q6AkvAslNbuzYEXckW2zOM0ydqsceY3JUcP6Bl0vDJ3iHf1gLhPlmZENbmJaNG&X-Amz-Signature=327c9424884f248c59515416faa6f49e12b7cfaec7d1a574c75aecac97dbcf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASPV6QE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFna6JRKZem%2BFBpU65RBe%2Bouno1sE7kzys%2F%2BWOQI%2FQrAiEAzDdcs3wXPLkbBtrCm%2BNvyoE9yUNgCZj44roKWLucNlcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGinwEECW9zTRpTPFyrcA3qjkWFL7sYi%2FV2IwfCVenta2Y6LYdmM6VjPwrhbz36JPoGt3ftcnVhVyc7bow4q3xjP4ys3wszgQN6lIWNZjQWm%2BXCbcLom5QhbZp0n9Y%2Ba36ZEMqFy7ThShIVVnlhcCPZBPGmnPp6VoyFjMpKfsbmAsGUzgxvneEN7E%2BK39ncm%2Bev0O%2F3lWW9vhL49E18t2sGT5o7I9BvxFK2FiOeeRk3namFwTfrgm9ZnZtS6ZzZQLAH0wgA38scDshlB%2F8SBc6FbkQwaUcC5qH3Oth817iHJbumX8nEQjg7Jn5PxoG3ROO7HuBsZ0xyY8rQ3StcLGNeI9cQZpySx%2F6OrSm0K0NVfkvcvfTRf70I4PSCu7%2BJpNPiWsGebCtpqAoDHFB%2B7CRuCQPjOD%2FWtYMOS9LwEOsq6WeFqCCDrR168yIxJyi8i6%2FBoqefHc6ncS%2Bq%2FriauKL9uUdlDRXmriJebOLMNCJFrnmA5gXa%2BnL5HLRkYlq%2F84jRaBuO76QMVtljC3wFAvRxllwaH5LDpLiryR0HDO9B4FvVmIx3E4hfFZioZsUyKdIiYHHjN6N17h1jq11pw2iwr7WYVYj1coW5J0QUflcuFCIDmN0ip5SgwBAXD4B8HvQpxAPGo4EyCXnZwML%2Bi3ckGOqUB%2BTGROL5%2BEW72H419G8u8%2BDOwby1Oo6Bbyiwv7MV2AAfV5tEyLd3S%2FomX8YgHkBiKzyOhf5zh7adAKxDoYjOA3eR7CyWFGHt7JGQOwJu4N3MbOSD0LX5pw%2BHPXnjImrnNIDeQc5BZZKbF43mRkCuEJLpJWGL4C5q6AkvAslNbuzYEXckW2zOM0ydqsceY3JUcP6Bl0vDJ3iHf1gLhPlmZENbmJaNG&X-Amz-Signature=9d12613cbe45dccef1c8dda38bda2c5bbaad3352fbbd8b26934acf0f82444296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

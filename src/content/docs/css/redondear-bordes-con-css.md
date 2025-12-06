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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBRQ7RJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbuYpLZYgmwP95U0I7MgmFEo4wtMUr3531omzICkWJhAiAatOYYozLNefxUWN7UgFKxzI0aGtBnLnlOy6ZSOI1Ojir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmEAiNZ9U8e6vJ9aEKtwD37xl1GycQVo4BmDDCcYa5piVaPlMX200pBKDa7dGdaSL2K5A0IHNTuZFXdaYZiOJ4dVJl%2F0Peo6HTetgxIHgf9XU%2BcZHpwj93Yn0Akvx%2BWZTzT3LLKi7jIzxbJimszecchHfupRR9c4sF9gv4YjPIQ3wUXXl82mwjMaNaeOeSIPeMbvpfJ97L5ogE%2BrVtEAgH8BHh7PcgQxswZWAsukO3Xro2XNf33VmA8Pked7%2FyF7eyt7EgG93mM61IK3TgNyF9OdSDti9IQLJKUVR%2FlyWPDYGnG3coiSL8Mg7294u%2BlLGuBLRmXKJ6QqHLSGgVutGUSgS8izv9kuN9ILqfxUCVMUtxvEOO3J7Ak8YEh%2BmeIGBDIwG%2FUHErx4L2Ush%2FooGSJoST3xI3oKVFrzV%2FlxXA8nmR5D8ayDFEM%2BwuEyMimxrBYrBzOzKRUPe0wkwmN96FByMbywEweuwVzhw0LvjMBg8AQyCGfd7ilEn2Mf5gVwgY%2BuVCa96IKySdx0iLvb15l%2FbhTFZm725FxKNGuTyIAZqnT8iKmfLwEP4V3%2FaoV4Zuhr%2F%2FpJCc%2BuRwWAhz1vftvUNhW3LxeA3v8pH0Z%2B8pI0QJmmY7P5BMH1Zx6J8Ntj3KaAJN%2BGSWiWBsTUw0%2BjNyQY6pgEj8f0PXxfnZqLA9ouTTHofw%2FaFRJwHx%2FjpJC0WU6Fmbx41v709QcgvemKKC1vl7Y3XGAVjkTNHY9TirIDU9BK8qzGoVvc%2Bs8yh%2FkzKJ6%2FU9vrOsT9a%2FeEr7c8aRJZnWO16Uf30A%2BrXDjVqzABKNgaea1Q7CUpj%2BExdmqQe8uo1O0XwZ%2FjoJeoRl5uLgA5DVOIHbHIjbxYq2Yj03GNDsNi3d0fWCRhP&X-Amz-Signature=f8ae2935f91a2c7d0ae4bfeb6e0443917eaef0b6d06cd1de52f9358e81970ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBRQ7RJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbuYpLZYgmwP95U0I7MgmFEo4wtMUr3531omzICkWJhAiAatOYYozLNefxUWN7UgFKxzI0aGtBnLnlOy6ZSOI1Ojir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmEAiNZ9U8e6vJ9aEKtwD37xl1GycQVo4BmDDCcYa5piVaPlMX200pBKDa7dGdaSL2K5A0IHNTuZFXdaYZiOJ4dVJl%2F0Peo6HTetgxIHgf9XU%2BcZHpwj93Yn0Akvx%2BWZTzT3LLKi7jIzxbJimszecchHfupRR9c4sF9gv4YjPIQ3wUXXl82mwjMaNaeOeSIPeMbvpfJ97L5ogE%2BrVtEAgH8BHh7PcgQxswZWAsukO3Xro2XNf33VmA8Pked7%2FyF7eyt7EgG93mM61IK3TgNyF9OdSDti9IQLJKUVR%2FlyWPDYGnG3coiSL8Mg7294u%2BlLGuBLRmXKJ6QqHLSGgVutGUSgS8izv9kuN9ILqfxUCVMUtxvEOO3J7Ak8YEh%2BmeIGBDIwG%2FUHErx4L2Ush%2FooGSJoST3xI3oKVFrzV%2FlxXA8nmR5D8ayDFEM%2BwuEyMimxrBYrBzOzKRUPe0wkwmN96FByMbywEweuwVzhw0LvjMBg8AQyCGfd7ilEn2Mf5gVwgY%2BuVCa96IKySdx0iLvb15l%2FbhTFZm725FxKNGuTyIAZqnT8iKmfLwEP4V3%2FaoV4Zuhr%2F%2FpJCc%2BuRwWAhz1vftvUNhW3LxeA3v8pH0Z%2B8pI0QJmmY7P5BMH1Zx6J8Ntj3KaAJN%2BGSWiWBsTUw0%2BjNyQY6pgEj8f0PXxfnZqLA9ouTTHofw%2FaFRJwHx%2FjpJC0WU6Fmbx41v709QcgvemKKC1vl7Y3XGAVjkTNHY9TirIDU9BK8qzGoVvc%2Bs8yh%2FkzKJ6%2FU9vrOsT9a%2FeEr7c8aRJZnWO16Uf30A%2BrXDjVqzABKNgaea1Q7CUpj%2BExdmqQe8uo1O0XwZ%2FjoJeoRl5uLgA5DVOIHbHIjbxYq2Yj03GNDsNi3d0fWCRhP&X-Amz-Signature=a32ed50ab98bfe5df16001999b5bf16e3fe78fd19edc17082650784e5ff20d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

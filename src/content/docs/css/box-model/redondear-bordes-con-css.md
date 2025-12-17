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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WACYKJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbkVM1HAEXgoGSrQbBQ4yCzIsQat%2F8NastZIPWHFtgXAiBaWhNGqD7c1EBaaCvhHK7i%2F3A0QDKsC%2FHUYphUgG5yJCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4S576pcVXzfmJLoIKtwDBFlzVUEnyfOm%2FTvRjj0vHxMN8kVtWm15U1d8FbYWxWMl0lLsJVwJsSr2luKVmPvUGi2Wq2z62HhCCWr%2FW0K1uOlWxud3amPDb%2B5VDedHCV7G9hwpJppDm5Y7y99j0YT0qulbcdHsJMM6yA9czP71dDldvyjqF6bQAjN7MeeUaBUjN6zBnHc0hhkaAHiuHUJvNw7r0%2FfZzHvbvUA%2BD9y6aBw%2BeUyR%2FnzVYjeTDTwYwQ8GYa9ccdao64aO%2FN1%2BbJPF8eBUxI23LOzENa2q8d07oT4%2BxNSJaY4wa%2B31PONqs1K58liHZSOOLpaSBJhDoNGtGdip0o7P1bqY4oK%2FuROS2iCLE1CZWq1f4InywuGsZcNWf9MsSdBJdD2Mg6zI5gXydtxIRZJG22HE5fH6a8agX6SiEHFxUgJu%2BuDBiPF2yZVTy%2F2XS8W9EDZzden2LHMNHtjZ4%2B%2BzUCGw6zeBJfNVNNpaG3JRCCjWtf0vARBMEhimZlcEs39HVfrjc1YZiHQx8Cw383kawKlpQE%2BX1VYV9CzpcdXaiy4DZQD215ZChQMWLotzEZjndK1Fizmk486b85GEGwtwx%2BKPFZBakEir%2FJUYLNHj0de3JTPnH1v2TCi4F2N6qhIZnEfLFRUwl5iIygY6pgEXHj9LmFbvOwC%2BjeUvY4eefF2OiNToBIlnwdS2eG3QP1%2BpSJIyz7lSNyjzvAlkb5d6JzJ4VS9%2B1iZhABrurIZCupDIJHefhMCnURPFSGxp0PLNVBlpDsPY9XB661VbuaVrmRJS8eWPdI4n0zlARUwU7DQVk736EmKlPOcqV0%2BmecRXeEGVKDuLvK0DydS38BEPbJHIiuT9dcVfCFiIUiUhCkQ2Yr6S&X-Amz-Signature=a49894c6ae9bdf8d596931048321f650477fc726be9409dfce86c4474ed643ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WACYKJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbkVM1HAEXgoGSrQbBQ4yCzIsQat%2F8NastZIPWHFtgXAiBaWhNGqD7c1EBaaCvhHK7i%2F3A0QDKsC%2FHUYphUgG5yJCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4S576pcVXzfmJLoIKtwDBFlzVUEnyfOm%2FTvRjj0vHxMN8kVtWm15U1d8FbYWxWMl0lLsJVwJsSr2luKVmPvUGi2Wq2z62HhCCWr%2FW0K1uOlWxud3amPDb%2B5VDedHCV7G9hwpJppDm5Y7y99j0YT0qulbcdHsJMM6yA9czP71dDldvyjqF6bQAjN7MeeUaBUjN6zBnHc0hhkaAHiuHUJvNw7r0%2FfZzHvbvUA%2BD9y6aBw%2BeUyR%2FnzVYjeTDTwYwQ8GYa9ccdao64aO%2FN1%2BbJPF8eBUxI23LOzENa2q8d07oT4%2BxNSJaY4wa%2B31PONqs1K58liHZSOOLpaSBJhDoNGtGdip0o7P1bqY4oK%2FuROS2iCLE1CZWq1f4InywuGsZcNWf9MsSdBJdD2Mg6zI5gXydtxIRZJG22HE5fH6a8agX6SiEHFxUgJu%2BuDBiPF2yZVTy%2F2XS8W9EDZzden2LHMNHtjZ4%2B%2BzUCGw6zeBJfNVNNpaG3JRCCjWtf0vARBMEhimZlcEs39HVfrjc1YZiHQx8Cw383kawKlpQE%2BX1VYV9CzpcdXaiy4DZQD215ZChQMWLotzEZjndK1Fizmk486b85GEGwtwx%2BKPFZBakEir%2FJUYLNHj0de3JTPnH1v2TCi4F2N6qhIZnEfLFRUwl5iIygY6pgEXHj9LmFbvOwC%2BjeUvY4eefF2OiNToBIlnwdS2eG3QP1%2BpSJIyz7lSNyjzvAlkb5d6JzJ4VS9%2B1iZhABrurIZCupDIJHefhMCnURPFSGxp0PLNVBlpDsPY9XB661VbuaVrmRJS8eWPdI4n0zlARUwU7DQVk736EmKlPOcqV0%2BmecRXeEGVKDuLvK0DydS38BEPbJHIiuT9dcVfCFiIUiUhCkQ2Yr6S&X-Amz-Signature=99ae62cf801ee8d256a578b274c65259eb456e6ff0b02d9e097087536604e933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

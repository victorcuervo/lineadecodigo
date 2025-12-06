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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM7GMWO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWClTp8ZXtjM0SXVSEJKB3PqUZnN%2FQ4vpWa6MgWTAbsAIgKWVY4YBI%2B%2BeOqYcBz2OtRSb3bOZ81oNM5vjFORNKgxIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCaKGBP4BLbqojqooyrcA25DTomYyuH%2B14bXiC%2FJm6mK1yIc0i57UtQKYovcmlkmHWB9FuuY6UL2NZ0afSiddn7oKsRqS%2B6xXDWzgUykFT7D8doTTEnZNNnAwOfGi0p0HIELo7ANOY5TLWi%2BNmlCcCaWbzi3F041nHv%2BqZXolcC7A6Q0evRsFyTmDtnFHCBPNbp5QmVTXbF%2F9k1oE7%2BG3jcfJ86OezNeVKVWYZ5xjZGUWs2JXMdoTUAcQmK2pSOfnbuNqqWY%2BdI6ywrU6QHNCwa1KvZx5SFbcWRKTbrtihgelIhWCO5dwq5R%2Ff1R5i7ZYoDu9fkfCTC5sqTowHLh5jOEd%2BRbp04QEjSpEFnAx4aa1YCO3Q7ns0n8qAKkzrWsXa1ycigCUD8jZvJ0UlWO5BBfzEhGKDiZ9yYB3%2B1V%2BIJG%2FeWrUlk70oK6XFuvXroRRvm9ysKSO6myED%2FfvUtO%2BP408450aaGG%2BBsnyV8AZkDgQo7f1hfupbOyIh0UumBiANpDyvfSXu5czayYmRzX4smqmxUjuNZ6D1ENvNOTSu%2FmC2f5j1QW0w3Y2fDx2liFgjU4BP%2BdtWzX0NsI1gX4eeoBQH32%2FbwptmM777ySKf0e9y80gWMWVfV%2BMEWn%2BhFHbAyuNCTCgvGc69IlMISJ0MkGOqUB%2FYaST57E9igI4%2BKCqC6ArjgVPqYmSZEpEv7so4T8n%2B%2F%2FF9gML0dTx4rEACweMU9RQYj1BHsvg1kbt2vDhfsBjZCHFvv8Bss%2FpoC9hSAfIUXVSWAweaDxGt75xs592Y1ze8dJ71MX9vqBzUf5y%2F4u720xwIl9zqJoCB3Bzw%2FVgODGWHSY2JJDHkMyAReCZuSef6oOsvZJDJIBlok2xdbmkqaW9byM&X-Amz-Signature=c536d8837fbcac2a5c44ce0261094e8ff9ac94309ae4b17847a9c0747a672ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM7GMWO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWClTp8ZXtjM0SXVSEJKB3PqUZnN%2FQ4vpWa6MgWTAbsAIgKWVY4YBI%2B%2BeOqYcBz2OtRSb3bOZ81oNM5vjFORNKgxIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCaKGBP4BLbqojqooyrcA25DTomYyuH%2B14bXiC%2FJm6mK1yIc0i57UtQKYovcmlkmHWB9FuuY6UL2NZ0afSiddn7oKsRqS%2B6xXDWzgUykFT7D8doTTEnZNNnAwOfGi0p0HIELo7ANOY5TLWi%2BNmlCcCaWbzi3F041nHv%2BqZXolcC7A6Q0evRsFyTmDtnFHCBPNbp5QmVTXbF%2F9k1oE7%2BG3jcfJ86OezNeVKVWYZ5xjZGUWs2JXMdoTUAcQmK2pSOfnbuNqqWY%2BdI6ywrU6QHNCwa1KvZx5SFbcWRKTbrtihgelIhWCO5dwq5R%2Ff1R5i7ZYoDu9fkfCTC5sqTowHLh5jOEd%2BRbp04QEjSpEFnAx4aa1YCO3Q7ns0n8qAKkzrWsXa1ycigCUD8jZvJ0UlWO5BBfzEhGKDiZ9yYB3%2B1V%2BIJG%2FeWrUlk70oK6XFuvXroRRvm9ysKSO6myED%2FfvUtO%2BP408450aaGG%2BBsnyV8AZkDgQo7f1hfupbOyIh0UumBiANpDyvfSXu5czayYmRzX4smqmxUjuNZ6D1ENvNOTSu%2FmC2f5j1QW0w3Y2fDx2liFgjU4BP%2BdtWzX0NsI1gX4eeoBQH32%2FbwptmM777ySKf0e9y80gWMWVfV%2BMEWn%2BhFHbAyuNCTCgvGc69IlMISJ0MkGOqUB%2FYaST57E9igI4%2BKCqC6ArjgVPqYmSZEpEv7so4T8n%2B%2F%2FF9gML0dTx4rEACweMU9RQYj1BHsvg1kbt2vDhfsBjZCHFvv8Bss%2FpoC9hSAfIUXVSWAweaDxGt75xs592Y1ze8dJ71MX9vqBzUf5y%2F4u720xwIl9zqJoCB3Bzw%2FVgODGWHSY2JJDHkMyAReCZuSef6oOsvZJDJIBlok2xdbmkqaW9byM&X-Amz-Signature=d9c25e8aa107bad94b84118ae6991b4689e0692b230a5b61c202f979c85f588b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

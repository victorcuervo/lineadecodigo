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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW52OUDT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDtA4UxF3%2F8WvMJaM3WD%2FDFWzyJ1tK7n08RfrXOlqLNsQIgItNKkTrL25f2M63vFMXt96sTzvU5dxcB2M3EhJ5CfVEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGroF4WOf4tH6bM1uyrcA245g6VB6oCkxm%2FPzmbV7WO5OI2S07ftj%2FLjDxrbB824YfZ8gdBWgyCuLqwYZg4WWcvRVzxik0ao7B3AW4xgGoFnuL%2FStSPKqo7SASVAlfS9VoQIgf3gbQ4Re4n%2B44rORfSkJ3gXwlX2RJTGT4%2BpP0vKqwdivFlNrCuRR6sGdXgrlHg3K%2BLGXIiwSBC9I8gH8j7N18Jnx9VPmRZX5n9JqWrgQhJvMF0NlJYaddGSvNEV2jK7bdSQ%2FBF1WGDaA%2FKB9illikx8PFrrk4Mm7v8vaCV2h7%2B%2Bg%2B4Wt58jbaEaT5m%2FbRp7sjWmNVq32JXzlvFa5tP7g%2F9o9N7q5Q08FFRF6TzupgRFgAsd3ymSEYXTNWHnZSV1epKouzhJwblST%2ByY2K2Z4NeUbrY2xuQMN%2F6z9HZe8o4pUn8Qg8DDMONVJ%2FAmRW2Rj3PRByqFi7NmxUhftRcOV%2Bsqr%2Bv%2BVOjXX7GCHnhDRVD1D3dlN%2BHrvUn65rJIfI9iTpMhuI%2BVa586ZJLhliZGuesH48WAqENQs7SwFC8NSHzaHmfIBSlh9b8YZGyAY%2BFIp8nElI34NzYE%2BOXCE31yZKRUqakRLira6hea1oh37yQtznxblMxDhHmkViOv7sw9SKACIYAsYf6kMOe%2BxskGOqUBR%2F%2BN2FzgeU8jq%2F6H5tHx%2BJOQ6EfFHX2JgcsKI9O3LVCgxE%2BvaE7dUv3knOht9Z4M%2Fhu%2BMr1stSLkLMB7WDC%2BVKbe%2Bm3uTfZZUOgxUKdbJYB%2FMT65cm4kYaV8zaAPi%2B6lEdP11N9rCb1QqopBvQJHojyyVABIRxCOGrlUnmK%2Fm3vG1DOvGTb3ZR1Gei%2FvsjUxHaOJeey644qEhy%2BTxwzKzAHgpAUf&X-Amz-Signature=512d53218fc3c4eda038808a52d7381c2aa3dea23e3accfc5bdabbae1dad510f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW52OUDT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDtA4UxF3%2F8WvMJaM3WD%2FDFWzyJ1tK7n08RfrXOlqLNsQIgItNKkTrL25f2M63vFMXt96sTzvU5dxcB2M3EhJ5CfVEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGroF4WOf4tH6bM1uyrcA245g6VB6oCkxm%2FPzmbV7WO5OI2S07ftj%2FLjDxrbB824YfZ8gdBWgyCuLqwYZg4WWcvRVzxik0ao7B3AW4xgGoFnuL%2FStSPKqo7SASVAlfS9VoQIgf3gbQ4Re4n%2B44rORfSkJ3gXwlX2RJTGT4%2BpP0vKqwdivFlNrCuRR6sGdXgrlHg3K%2BLGXIiwSBC9I8gH8j7N18Jnx9VPmRZX5n9JqWrgQhJvMF0NlJYaddGSvNEV2jK7bdSQ%2FBF1WGDaA%2FKB9illikx8PFrrk4Mm7v8vaCV2h7%2B%2Bg%2B4Wt58jbaEaT5m%2FbRp7sjWmNVq32JXzlvFa5tP7g%2F9o9N7q5Q08FFRF6TzupgRFgAsd3ymSEYXTNWHnZSV1epKouzhJwblST%2ByY2K2Z4NeUbrY2xuQMN%2F6z9HZe8o4pUn8Qg8DDMONVJ%2FAmRW2Rj3PRByqFi7NmxUhftRcOV%2Bsqr%2Bv%2BVOjXX7GCHnhDRVD1D3dlN%2BHrvUn65rJIfI9iTpMhuI%2BVa586ZJLhliZGuesH48WAqENQs7SwFC8NSHzaHmfIBSlh9b8YZGyAY%2BFIp8nElI34NzYE%2BOXCE31yZKRUqakRLira6hea1oh37yQtznxblMxDhHmkViOv7sw9SKACIYAsYf6kMOe%2BxskGOqUBR%2F%2BN2FzgeU8jq%2F6H5tHx%2BJOQ6EfFHX2JgcsKI9O3LVCgxE%2BvaE7dUv3knOht9Z4M%2Fhu%2BMr1stSLkLMB7WDC%2BVKbe%2Bm3uTfZZUOgxUKdbJYB%2FMT65cm4kYaV8zaAPi%2B6lEdP11N9rCb1QqopBvQJHojyyVABIRxCOGrlUnmK%2Fm3vG1DOvGTb3ZR1Gei%2FvsjUxHaOJeey644qEhy%2BTxwzKzAHgpAUf&X-Amz-Signature=ee93adf8f55176ea25f9bacb8887cda1612572a3622812d8e58634c84ca981e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

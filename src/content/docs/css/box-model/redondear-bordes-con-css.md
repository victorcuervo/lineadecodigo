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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73MGAVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FDFwlhBfwAXAdUUggqX4kfS9SpEr6ER5BLaAbtXNQCIBJwzqmnUnxY1HgXbOr%2BJYn07fFeej311zcVhOZ7RCvOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYRL1MUgXsNc0MNvMq3AMTq4MDVORvCS9zzQ0BJ1foolo9dcmf2slb5xER1JPRf0biDBIZTZQ9NS5Zgqyn8heOV33DSZslp4DIUR7u3oNBNg%2Bu53SZFxJF19CPOrGJMZ87CZRq75bNExjS3W9XS1fowKQZPVRQ%2FBp5p%2B2dJSdk4OvIHyEKhDaqbWlDJIB79vEz2E%2FTJh8WEl5s66fzHbyXwJ8JpzkabWTNnj%2FZbD5c8NMtah%2FqjcCEIiQCuodiuQ8fkLbcol9wN7ZA%2FKPSj9kLIfkuPnthbSfj1LfolF7cXx15rpBLz2%2FYqVI491HXZoQnohJi6g9zH6dhSSM7sLRiPjJdTCbc4NeTq6zsVAryXtK3ZO8OR7%2B5RZHaGpSFjO8UX7wol8mbReEbmupR196hw7APmorxo2%2FR2HY17onwDmz2oaoZ0N8g5Mamn3bUjegy13J1bNVK%2F6AKqeaquVYzD1h2fk4o3u1TxW0XGrO1n0K3u5iagun8CtEXOsuRMwjz7wqy1rM%2FU9Q60xqygRReR9LbGQfnWqCIekzpuWF5C%2Fu6roKqxMfrq%2BTp1h88KlDm%2BR862xQ%2FMFMzOC8QbIZarCiDrbMjBNud5kcxNyU0ZUKo52Kz20URB0vAgIODC%2BaaaFIoLTZlaKWt8DDNnInKBjqnAYHXSgN0XerZmu3upcTg%2Brhgu9YWDlZaxW%2FdCqdKvjsTUDOgB7pKwtWXNguYioA7jz900SLmf4rKXBZhKduyEvuqOf1Wj1D0u5frZ%2B3%2BRZw2ITMhgA7N3jtbiZz5%2FekklLX5oECSJ76jdrJU9BnB7GaY2tvGtgJCFLF%2BkA%2F7OnD2OX3OZNX8Z2So7jhF9nDxORYLRT4X5OZgkF460BJoIzVYFUVQd7zk&X-Amz-Signature=e1190390747caa3d5e40411e7e2a1e645e92078e822001948315baba067422e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73MGAVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3%2FDFwlhBfwAXAdUUggqX4kfS9SpEr6ER5BLaAbtXNQCIBJwzqmnUnxY1HgXbOr%2BJYn07fFeej311zcVhOZ7RCvOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYRL1MUgXsNc0MNvMq3AMTq4MDVORvCS9zzQ0BJ1foolo9dcmf2slb5xER1JPRf0biDBIZTZQ9NS5Zgqyn8heOV33DSZslp4DIUR7u3oNBNg%2Bu53SZFxJF19CPOrGJMZ87CZRq75bNExjS3W9XS1fowKQZPVRQ%2FBp5p%2B2dJSdk4OvIHyEKhDaqbWlDJIB79vEz2E%2FTJh8WEl5s66fzHbyXwJ8JpzkabWTNnj%2FZbD5c8NMtah%2FqjcCEIiQCuodiuQ8fkLbcol9wN7ZA%2FKPSj9kLIfkuPnthbSfj1LfolF7cXx15rpBLz2%2FYqVI491HXZoQnohJi6g9zH6dhSSM7sLRiPjJdTCbc4NeTq6zsVAryXtK3ZO8OR7%2B5RZHaGpSFjO8UX7wol8mbReEbmupR196hw7APmorxo2%2FR2HY17onwDmz2oaoZ0N8g5Mamn3bUjegy13J1bNVK%2F6AKqeaquVYzD1h2fk4o3u1TxW0XGrO1n0K3u5iagun8CtEXOsuRMwjz7wqy1rM%2FU9Q60xqygRReR9LbGQfnWqCIekzpuWF5C%2Fu6roKqxMfrq%2BTp1h88KlDm%2BR862xQ%2FMFMzOC8QbIZarCiDrbMjBNud5kcxNyU0ZUKo52Kz20URB0vAgIODC%2BaaaFIoLTZlaKWt8DDNnInKBjqnAYHXSgN0XerZmu3upcTg%2Brhgu9YWDlZaxW%2FdCqdKvjsTUDOgB7pKwtWXNguYioA7jz900SLmf4rKXBZhKduyEvuqOf1Wj1D0u5frZ%2B3%2BRZw2ITMhgA7N3jtbiZz5%2FekklLX5oECSJ76jdrJU9BnB7GaY2tvGtgJCFLF%2BkA%2F7OnD2OX3OZNX8Z2So7jhF9nDxORYLRT4X5OZgkF460BJoIzVYFUVQd7zk&X-Amz-Signature=61bf1494037c06c7895c0a65a4641ccd5d665f23979cec79e05d49e4c0ee4914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AEUT5Z7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGxeA2vhvV6omy%2F7RZLc2OYb595dw3VXKDWDEb5MAHR%2BAiA8BJYsy5JD1s%2F5loT6Yx2otcIAoXSlIxPyg078BnAarSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMuInGvy1zolO5WQ6mKtwDdZUTKr5IIhTWcue2ENGg1HlESDyiUhHjui9E%2BN2Z07ENfY%2B0PwBQJ8J9ak9nIg1KkuhRytnDUTI1L0TsysbnnS0KKe9%2FTH6uK2oXLaPFxCXy5qyduFItEdx1xDV4X%2BXyxbjlP3Cs5oYgHNBFBiW7sz4XOlJadMR91v9tIBVjF5M7anVyJElOCXND596G4ZhJwDpJQYMgKkYodHBauuB7NL6XDmSrgb67fu2KqWM6igXmS6BnVZOpR%2F7Vihp2vSH7FGMZWXldDqcO4w%2BN77Uny%2B%2FOjZnqC82nuRTIgqLzw8B1Q5ClO9PsAp6ZwmvRul4bAV4jW3QQa9GaYI9JJw5bSoaxV14t0doNE%2FtXjZtx3iPD4DyjTOmhtf62VfDvs8925WEqahjbL6xaA9Tcw6BGKUUfWEmud8rqTgaCVFLiYebofJV25kJ9p%2FJt3OzpQKEUZ1Zky9o0FACE1V0ffhCuJbrKsjzTZUFeq5AaEpHXJw7RBAZfu%2Fjy83p%2BDcJfPl1JPKznySHuivE7ww9DG9xeDBSRLnisJ0MdmcmnLvy%2F1gB4qaDCtIPW5ixaeAUnh1f0Ha4fsc1aerTxX5a1HfsKafrMSBOeOYYptImEbU%2FWjPZQ7b3bMu1ynkKHs9Ew%2F77GyQY6pgGBe69X2qxHGNin71nUXWkTqpqPJJYZerKDYRrOtnyCcxpRXhR5eXe2Ff15o%2F00kqy6i2t%2B%2FMd08PnQvrC4ftgiScjPg5qPYSKNRZcq0rqLBPyFD4SxkoHtpHNcv%2FJuHMdCAeUXCwCmUj9UWjFfgIYgT5kUmypP48g9ZPazISx5Smi94y7q2kW55hdOqizov28ZIq7T6iGwgWyGdyhvESoq9m%2F7NTEh&X-Amz-Signature=2ac8fd6b2a24e27deea2e586addeddcdb110d47dc31a2d8224ec5783e0e3a5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AEUT5Z7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGxeA2vhvV6omy%2F7RZLc2OYb595dw3VXKDWDEb5MAHR%2BAiA8BJYsy5JD1s%2F5loT6Yx2otcIAoXSlIxPyg078BnAarSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMuInGvy1zolO5WQ6mKtwDdZUTKr5IIhTWcue2ENGg1HlESDyiUhHjui9E%2BN2Z07ENfY%2B0PwBQJ8J9ak9nIg1KkuhRytnDUTI1L0TsysbnnS0KKe9%2FTH6uK2oXLaPFxCXy5qyduFItEdx1xDV4X%2BXyxbjlP3Cs5oYgHNBFBiW7sz4XOlJadMR91v9tIBVjF5M7anVyJElOCXND596G4ZhJwDpJQYMgKkYodHBauuB7NL6XDmSrgb67fu2KqWM6igXmS6BnVZOpR%2F7Vihp2vSH7FGMZWXldDqcO4w%2BN77Uny%2B%2FOjZnqC82nuRTIgqLzw8B1Q5ClO9PsAp6ZwmvRul4bAV4jW3QQa9GaYI9JJw5bSoaxV14t0doNE%2FtXjZtx3iPD4DyjTOmhtf62VfDvs8925WEqahjbL6xaA9Tcw6BGKUUfWEmud8rqTgaCVFLiYebofJV25kJ9p%2FJt3OzpQKEUZ1Zky9o0FACE1V0ffhCuJbrKsjzTZUFeq5AaEpHXJw7RBAZfu%2Fjy83p%2BDcJfPl1JPKznySHuivE7ww9DG9xeDBSRLnisJ0MdmcmnLvy%2F1gB4qaDCtIPW5ixaeAUnh1f0Ha4fsc1aerTxX5a1HfsKafrMSBOeOYYptImEbU%2FWjPZQ7b3bMu1ynkKHs9Ew%2F77GyQY6pgGBe69X2qxHGNin71nUXWkTqpqPJJYZerKDYRrOtnyCcxpRXhR5eXe2Ff15o%2F00kqy6i2t%2B%2FMd08PnQvrC4ftgiScjPg5qPYSKNRZcq0rqLBPyFD4SxkoHtpHNcv%2FJuHMdCAeUXCwCmUj9UWjFfgIYgT5kUmypP48g9ZPazISx5Smi94y7q2kW55hdOqizov28ZIq7T6iGwgWyGdyhvESoq9m%2F7NTEh&X-Amz-Signature=e3463e1dffba62faae7c585d70d87ca73f9ad292fd96673c8cc10aee4029e385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

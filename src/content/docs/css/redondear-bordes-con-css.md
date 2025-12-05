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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPUGBVH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX06Eky4coblE%2BRMizrsrBqKEnghSp81vzvaNmKkWbmgIgGy%2BTYz8NCRLFH5kJOdyOlhI0HmdfAJYlVloHMw4dmFkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD32yf2ndzehFpWAxyrcA%2B20QbbaylxXCPjIEp0rux3dQcfR2m3O7r0E9DIXe9C3bPnhMOSw%2FsTgbhfoqZGO19J%2FvMUbleubBH%2F9P1lFr6%2FdK9Uxdxndtugb91q%2F0TgzwRpKsV9iARflQ%2B%2FrtkppFBG9QYiE5uAk2LlQ8Reaj1hiKG1CEr7l6U9jO%2BQhMAZN0IEAT0j7PBdualbb132pPh%2F56PpcTu0GS2ZQkXyVzghl1sUahKu3Ig7jxazlmNqWesneyNAjSQ1nkjKa94Ubv49sztcBPTS1HPOdDKt9gShYXxoGKtLbmr9DEULRAWu2hGJ7ZZPJ1DJ6ak2LSa7zJIKVRUSldsSMbHDA8TlirOJcX1JGn4AyhHazr9nNaYeCpGzaDKM51zsKVtExyXPuWiZVBWYAtEFFVyT8LQLa08NYFVnlRUelVxz2717tS0JM8AgZQF%2BfLtdm2gZVe53TUa0JfOfPXAM9pzDP9Jna%2Fi6yN%2FEZefZU9zoDQMpAHwruDbR0LAO7wJuThByLTLatgGsc2pIIbZ0m%2BC9NGERE9ZbVjeQsDKTAuKKKnJ1GXDMFcbngG%2BzSju0hPygM%2FJ0ChYQLhjztc69Cw0gonOSA4RMfbDSf2z%2BWYoV17TgG%2B%2F3kXALDgjExmahpU5yUMLzzy8kGOqUBxq9wLjNoUw%2B7OubbNT5rDpx2pO95wKbdg0QxNVR1u0u3E2UD01GaCUZM7%2FMQ6FCWB8CTPTmt8sHHkTtdQZzHCo71PjhvzxyBf2ynVBqRGbk%2FZAxFFrgXPQXoHHn0kM%2FkViwswYIOdOtP19zDbm8xNzR2JSiNmFcl9g4igDy0pK2xNNazX72%2B7wF%2Ffuxjd2n78jrWm9FrNS9zkP%2Fns6Q9z3Vtkx3e&X-Amz-Signature=2de6792e5c163501648f2c34483079e761425a40a47d1b00b58cf99923f1f8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPUGBVH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX06Eky4coblE%2BRMizrsrBqKEnghSp81vzvaNmKkWbmgIgGy%2BTYz8NCRLFH5kJOdyOlhI0HmdfAJYlVloHMw4dmFkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD32yf2ndzehFpWAxyrcA%2B20QbbaylxXCPjIEp0rux3dQcfR2m3O7r0E9DIXe9C3bPnhMOSw%2FsTgbhfoqZGO19J%2FvMUbleubBH%2F9P1lFr6%2FdK9Uxdxndtugb91q%2F0TgzwRpKsV9iARflQ%2B%2FrtkppFBG9QYiE5uAk2LlQ8Reaj1hiKG1CEr7l6U9jO%2BQhMAZN0IEAT0j7PBdualbb132pPh%2F56PpcTu0GS2ZQkXyVzghl1sUahKu3Ig7jxazlmNqWesneyNAjSQ1nkjKa94Ubv49sztcBPTS1HPOdDKt9gShYXxoGKtLbmr9DEULRAWu2hGJ7ZZPJ1DJ6ak2LSa7zJIKVRUSldsSMbHDA8TlirOJcX1JGn4AyhHazr9nNaYeCpGzaDKM51zsKVtExyXPuWiZVBWYAtEFFVyT8LQLa08NYFVnlRUelVxz2717tS0JM8AgZQF%2BfLtdm2gZVe53TUa0JfOfPXAM9pzDP9Jna%2Fi6yN%2FEZefZU9zoDQMpAHwruDbR0LAO7wJuThByLTLatgGsc2pIIbZ0m%2BC9NGERE9ZbVjeQsDKTAuKKKnJ1GXDMFcbngG%2BzSju0hPygM%2FJ0ChYQLhjztc69Cw0gonOSA4RMfbDSf2z%2BWYoV17TgG%2B%2F3kXALDgjExmahpU5yUMLzzy8kGOqUBxq9wLjNoUw%2B7OubbNT5rDpx2pO95wKbdg0QxNVR1u0u3E2UD01GaCUZM7%2FMQ6FCWB8CTPTmt8sHHkTtdQZzHCo71PjhvzxyBf2ynVBqRGbk%2FZAxFFrgXPQXoHHn0kM%2FkViwswYIOdOtP19zDbm8xNzR2JSiNmFcl9g4igDy0pK2xNNazX72%2B7wF%2Ffuxjd2n78jrWm9FrNS9zkP%2Fns6Q9z3Vtkx3e&X-Amz-Signature=e8266026b6310d9c0dc8528b306dd0b6f5331c219824df75e6b7d9a270a86234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

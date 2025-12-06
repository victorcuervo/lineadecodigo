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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67VT5JR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU%2BFwCCiAtZVldTmt%2B0vLoUUmP8SLhi8dgbu%2BTbmesiAiEAi8dc85EMYarRmDY1j7B5r%2FSvbPW979LO9%2FkAnPNP%2BZIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAvtfyo0Q7rRw7sikCrcAydv0NIehqLyUUJvEmPDFRMmf1OciRRPX2F%2B7Mxm2K9U7%2B39EfBGuPDo8YeUobgHWbjqy1jSx4sApbnsY%2FaW7cDXwighTu%2By8J7Nwc6GCjdK0lcqBkPGOsHIGipzYb8LTiu4lJjajOn9n6l79Ing%2ByyDR7ppEk4O0AzjPkUaUPqzjrooSO6M6682AhlGokjmMjIpbe0CogzNER8GKKOrRvOIqjRuz6gBYlHeriFn5eEcbBkHOJR%2F6rJD6ZzrWjxoB4iZKDVg1%2FSST15qoFy4BDO0UrA5EApN7Yj5OSmUyKgPZPNkbOGX%2FvD3DjnWViRntX%2BMxy3jOUKx1dVbA038XRJ49G%2B9Kw96u3wkVenM%2BIjOJ8v8uWpxz03K14ZyjaHZKzflaZuqtDsMGOi8ZrUMTWY%2FjS%2FFoRF0L915TJ5mu0dp%2BPdqpQ%2FjPFJR1yoK56u4bif%2FZrpOXpWOI9kGYu8NcI2P5H%2Fvl1cSQm0kwUmzaX2rIukKbnm1RwXqwAyJyZVDWnjNJ253BJgrkWnHCdupBYeB9%2Ba1M20ODk6b8Us2fpe8pv65AE6C9pvvnJYpwyPWOh0k3Y6MeFHACvJhYGhaAlVHssddWtac6vd22w6jm65FxNpPBViwJicA09RtMKDL0ckGOqUBxZ%2BoYRGCzWNUbmHyIp62h7%2Bz6i4KGueIz60gHDol6%2Bb4mfKi6CdAFNVZcP3SdOXPn9KPBDFxrgJk9xytNpKOp4WOiYSOsExszXC3BF8DY1jNAbh7O520KaxEllGw80hDcE8YiBQobXUWIoVLe8v6FzcyUDGFsOOLGZYXKZT7%2B0nIcIRRqgmbqZgSEqD71yu6ncs2xmIczFaYN%2B8Wdq55QxKHn%2Fxa&X-Amz-Signature=5b5f3eefec6b944c14eecd6764e3f5b73f21d2d5e5da659feae8cbf5517920c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67VT5JR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU%2BFwCCiAtZVldTmt%2B0vLoUUmP8SLhi8dgbu%2BTbmesiAiEAi8dc85EMYarRmDY1j7B5r%2FSvbPW979LO9%2FkAnPNP%2BZIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAvtfyo0Q7rRw7sikCrcAydv0NIehqLyUUJvEmPDFRMmf1OciRRPX2F%2B7Mxm2K9U7%2B39EfBGuPDo8YeUobgHWbjqy1jSx4sApbnsY%2FaW7cDXwighTu%2By8J7Nwc6GCjdK0lcqBkPGOsHIGipzYb8LTiu4lJjajOn9n6l79Ing%2ByyDR7ppEk4O0AzjPkUaUPqzjrooSO6M6682AhlGokjmMjIpbe0CogzNER8GKKOrRvOIqjRuz6gBYlHeriFn5eEcbBkHOJR%2F6rJD6ZzrWjxoB4iZKDVg1%2FSST15qoFy4BDO0UrA5EApN7Yj5OSmUyKgPZPNkbOGX%2FvD3DjnWViRntX%2BMxy3jOUKx1dVbA038XRJ49G%2B9Kw96u3wkVenM%2BIjOJ8v8uWpxz03K14ZyjaHZKzflaZuqtDsMGOi8ZrUMTWY%2FjS%2FFoRF0L915TJ5mu0dp%2BPdqpQ%2FjPFJR1yoK56u4bif%2FZrpOXpWOI9kGYu8NcI2P5H%2Fvl1cSQm0kwUmzaX2rIukKbnm1RwXqwAyJyZVDWnjNJ253BJgrkWnHCdupBYeB9%2Ba1M20ODk6b8Us2fpe8pv65AE6C9pvvnJYpwyPWOh0k3Y6MeFHACvJhYGhaAlVHssddWtac6vd22w6jm65FxNpPBViwJicA09RtMKDL0ckGOqUBxZ%2BoYRGCzWNUbmHyIp62h7%2Bz6i4KGueIz60gHDol6%2Bb4mfKi6CdAFNVZcP3SdOXPn9KPBDFxrgJk9xytNpKOp4WOiYSOsExszXC3BF8DY1jNAbh7O520KaxEllGw80hDcE8YiBQobXUWIoVLe8v6FzcyUDGFsOOLGZYXKZT7%2B0nIcIRRqgmbqZgSEqD71yu6ncs2xmIczFaYN%2B8Wdq55QxKHn%2Fxa&X-Amz-Signature=803a4db69aff1c9c56afe78b5ad6c84a250fe86f4c5841a278ab795d76fecdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

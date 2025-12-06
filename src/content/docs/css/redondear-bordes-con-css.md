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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJZUS4Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx5ifhLTWneDSr%2FzK2dblhmc%2FThKZ%2FcfrUJmOC%2B50sLQIgNcx6FE5YAJVCUYmjONlsU51jK5N16I5M4ziH0d%2FYOw4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKfuwaDNraFwWtKkeircA4dy42FtGRoqKUyaGp3siqud1dWPJfNW2arX9UVimns6JYIxodRkp3t5vYHjje%2FvC91KfO3XHk3MOtSUFmqU4%2B6P%2BarLNWB8NFQcDhtc8lKRov9oDJ0X4p4wRUZJ0wcEBDzXh1eXOlo6qXRPlf7zuohbohBzAsYwI%2FNDkJpBQkXHC5ksnpEIXfaS7GyxWsuQ1IlkuNyx%2FBNmRhv8t7eouhxcdDuyEAEwKbTdU4JRm9xUYG%2B82ftCDwqFGNeM8ZZ1RMwXzMhe1Y5qwkIppL29r8AKjDR%2BCeBBsk7gJR9XDYqh2ugNSmG6Ov7u%2FoXuJnmDL0JkVGNMGbtjV9ULSo4QJ1Qc3D55mkuG1RvyCGOGRp9N6uZFT3cJ5nZ%2B9he4px6sm0ALwKr9bsJ%2FMZcjrP%2FS9enNN9FQgo%2FHoiA8xv%2FYrZqdmsXXbt4rz9yaaAwAfEAelHM9W06zUvV1AmrlGud1QPaHa2Xyyp02MRog6XFyR3Lvg6JbLEzWH1yrtNLJRGO68E89OK5iQyHhXl5CCpH0m7ksxsI6dDK5Ens9sL3qzSQY717xgpm4LWTRsFzeDg7jKdNmxXxTi%2Fhpq3FfyalliuLnATSjLDZQtTHD0%2F06mS5DPnn0iENQ7NfY46qiMPWm0MkGOqUBgjFhc5ON1u24PGjcUIoWdKw5pvB3WgbVk7HU259PjmpHXw7%2Bo6upyUpl0h0Bgd6SfWEzrz7whHACeITrs4JEdShGrx1EYtog2RmZhwpWmkdjgJGgDV%2FqZRFQFPmkrIkf0VM4sRmrxHZMtNHqnaCgtyQ%2FiLMyMiFGv6NI%2FJpCYe0lDPUNbg1WgEnl90t9sIddowURxM%2BSU8I7H7lUekgLw9KQTMO%2B&X-Amz-Signature=19651d0d75908075ea1a6c34bef5e8aadf6539d49cb009f1081e71d5d4d97505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJZUS4Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx5ifhLTWneDSr%2FzK2dblhmc%2FThKZ%2FcfrUJmOC%2B50sLQIgNcx6FE5YAJVCUYmjONlsU51jK5N16I5M4ziH0d%2FYOw4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKfuwaDNraFwWtKkeircA4dy42FtGRoqKUyaGp3siqud1dWPJfNW2arX9UVimns6JYIxodRkp3t5vYHjje%2FvC91KfO3XHk3MOtSUFmqU4%2B6P%2BarLNWB8NFQcDhtc8lKRov9oDJ0X4p4wRUZJ0wcEBDzXh1eXOlo6qXRPlf7zuohbohBzAsYwI%2FNDkJpBQkXHC5ksnpEIXfaS7GyxWsuQ1IlkuNyx%2FBNmRhv8t7eouhxcdDuyEAEwKbTdU4JRm9xUYG%2B82ftCDwqFGNeM8ZZ1RMwXzMhe1Y5qwkIppL29r8AKjDR%2BCeBBsk7gJR9XDYqh2ugNSmG6Ov7u%2FoXuJnmDL0JkVGNMGbtjV9ULSo4QJ1Qc3D55mkuG1RvyCGOGRp9N6uZFT3cJ5nZ%2B9he4px6sm0ALwKr9bsJ%2FMZcjrP%2FS9enNN9FQgo%2FHoiA8xv%2FYrZqdmsXXbt4rz9yaaAwAfEAelHM9W06zUvV1AmrlGud1QPaHa2Xyyp02MRog6XFyR3Lvg6JbLEzWH1yrtNLJRGO68E89OK5iQyHhXl5CCpH0m7ksxsI6dDK5Ens9sL3qzSQY717xgpm4LWTRsFzeDg7jKdNmxXxTi%2Fhpq3FfyalliuLnATSjLDZQtTHD0%2F06mS5DPnn0iENQ7NfY46qiMPWm0MkGOqUBgjFhc5ON1u24PGjcUIoWdKw5pvB3WgbVk7HU259PjmpHXw7%2Bo6upyUpl0h0Bgd6SfWEzrz7whHACeITrs4JEdShGrx1EYtog2RmZhwpWmkdjgJGgDV%2FqZRFQFPmkrIkf0VM4sRmrxHZMtNHqnaCgtyQ%2FiLMyMiFGv6NI%2FJpCYe0lDPUNbg1WgEnl90t9sIddowURxM%2BSU8I7H7lUekgLw9KQTMO%2B&X-Amz-Signature=eadfb4fc0946926827b27ec6ed2689766fa45bc3830a39b03441a2b2249de889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

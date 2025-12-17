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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGEO3F2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfhlGQ9zN7%2BRmCjGYvqTPTuWkravuzOw8ey%2BPerDgewIgUvFHhbl2We6wTBitb2NT52n367M0oWOz2vjCwG1X7F4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH6I7f5EJd3WcPD%2BdircA3azEgSj84W8q84ZyEHOYEdqOCjnlutDoorrmpsgTyOU27Em2qyKiBUiOHyB%2FwORjcZAg%2BZFjj7MgxUo%2BWnZQB3sXZZj91udGQkpBcDpaoMAqmmNVsQAh3i26%2BfrduMiGWho20Vk8W1yAYcMB81qpUh%2F1Z34%2FuCRwu3fiEqVLmATCXphYiteiRdcEgeswjm1mUI66ZJI9CkbY8D2aDQqcuHQC%2BiIqukuvd0KViBXC2GGhZhyVTgzE%2BrF5ip5oWrYs8vWrYezBpVhoMz7FMVJYyL8oBgGtnVyJu3OY6RFZ27lxMeK61SXyNCzb2C6zGux6c86xQHNxQp07VnHRvVdud0B5zqXGf7Ww9v2272o%2FTCngZBx29xXV5YDn5i8NnqWZlZYVXcCxfvelqdfqPgw4ZVUy2uGugOnHBqXGVr1whTM1JqtrBZJ7MBe19%2BOvXMNClQ8g%2FiQJWW1Be1QrIAXCxdGe2KoyTBcJGi6IETuabVy%2Fey%2FQzd4%2BOx1MZIOJLm5bYwTgYBVmZcWccsmFrjzrPQ%2Floj%2F%2BZi%2FOSwVY6KGMVKsjSXE%2Ft4j4dM1TNdm8xcMgnu7AHcHXZPrjIKFWF1b%2BU5p2oDPpQJgfkAm9%2BLgeJAtjAfWBF5hIGjwdIzMMKSdicoGOqUBqlIcBzD4capAZgahi9qzAda7egwOK2qK93wh7ojXLkACtWt3CG9dvv1wQ9XHs4GoAbVJsUhWS8n4Nm4jX4E77TeGCef4dC%2FcmaSAGEKkdoHN0WiFhy38PeBNdBNg19bBTB2Qu7pruJlcZYwY%2FitBPWV02K8awND2HwLzvMYR5kDCU%2FqJYtypMacO2wH7ThtJNhFuRJfOY3eG6WcDRKTULPaLg2Zx&X-Amz-Signature=2327458ac79a1809eb1868b084a7f7f2ba430eeb2ec4370fdf4e69cb8b5bd585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGEO3F2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfhlGQ9zN7%2BRmCjGYvqTPTuWkravuzOw8ey%2BPerDgewIgUvFHhbl2We6wTBitb2NT52n367M0oWOz2vjCwG1X7F4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH6I7f5EJd3WcPD%2BdircA3azEgSj84W8q84ZyEHOYEdqOCjnlutDoorrmpsgTyOU27Em2qyKiBUiOHyB%2FwORjcZAg%2BZFjj7MgxUo%2BWnZQB3sXZZj91udGQkpBcDpaoMAqmmNVsQAh3i26%2BfrduMiGWho20Vk8W1yAYcMB81qpUh%2F1Z34%2FuCRwu3fiEqVLmATCXphYiteiRdcEgeswjm1mUI66ZJI9CkbY8D2aDQqcuHQC%2BiIqukuvd0KViBXC2GGhZhyVTgzE%2BrF5ip5oWrYs8vWrYezBpVhoMz7FMVJYyL8oBgGtnVyJu3OY6RFZ27lxMeK61SXyNCzb2C6zGux6c86xQHNxQp07VnHRvVdud0B5zqXGf7Ww9v2272o%2FTCngZBx29xXV5YDn5i8NnqWZlZYVXcCxfvelqdfqPgw4ZVUy2uGugOnHBqXGVr1whTM1JqtrBZJ7MBe19%2BOvXMNClQ8g%2FiQJWW1Be1QrIAXCxdGe2KoyTBcJGi6IETuabVy%2Fey%2FQzd4%2BOx1MZIOJLm5bYwTgYBVmZcWccsmFrjzrPQ%2Floj%2F%2BZi%2FOSwVY6KGMVKsjSXE%2Ft4j4dM1TNdm8xcMgnu7AHcHXZPrjIKFWF1b%2BU5p2oDPpQJgfkAm9%2BLgeJAtjAfWBF5hIGjwdIzMMKSdicoGOqUBqlIcBzD4capAZgahi9qzAda7egwOK2qK93wh7ojXLkACtWt3CG9dvv1wQ9XHs4GoAbVJsUhWS8n4Nm4jX4E77TeGCef4dC%2FcmaSAGEKkdoHN0WiFhy38PeBNdBNg19bBTB2Qu7pruJlcZYwY%2FitBPWV02K8awND2HwLzvMYR5kDCU%2FqJYtypMacO2wH7ThtJNhFuRJfOY3eG6WcDRKTULPaLg2Zx&X-Amz-Signature=ea67c24bd61dccbda8cecf4378563f8e1f61be2e54bee61631020dc7831c1647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

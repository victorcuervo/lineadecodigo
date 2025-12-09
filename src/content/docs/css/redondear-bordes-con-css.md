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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHHS2T6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbphfOGHqH8Xe7Bmif0dvaefsHslPsDlso6kxBu3LNAiEApNQMcJlLgLQQQ6erpd1BCPc8wVTQQ5VnNnYbquUn7LQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnI%2Bgq40KqNVPjPCyrcAw8IDSC9Tk4Kg6u0jIgl7HCmdCUIyjOqAnb8iSvFYGUXgZDinqUcKYZK320VmS46Ae%2B1%2BM8Gdt4GYMTFee80JQdVf2DCf8JdAui5KE3s3cwbA3cbB8bNwJSJlx7cn6xH1ggceju%2Fo7NJYOlEsjSQ3Yndwg%2B3ZJdkl8sk5oLzCDGJyXjOT24jvxHdTzjXbLOCQ%2BFq2NY0SNl173QjWTgNMZL6MVT0OiSuzMoxLioQS%2B7H7Bgit%2FB3cALYALQvhPMwLcgk%2FnA5hiSDL2LfiiUB5Lj6jPZ%2BoyphhnH1Oxv2jFUDScTWHvAGWqgnBmiqkWAQ6dz7lAWI1Oiwqfb%2BCjwZzngB05CghhgEnUnsw0gLCXERLkb8kxyeVEyuVlFlR1nTk5KsYkdBtJ2msHpJR%2B%2F5TykBQXDLM4IccHk3hex0AF4930tgkNZ7HnjU63ET4CvV3VrapvlGrsQonH8Df02sLFRnXdG8oD7OCt9%2BucayF%2FINU8xSAmfXziXAUq5Y%2FRZwHcfhT3G5Q%2FbVJL963M4rqdd33O5d1sb4prtx7Q2pa01WWlqrRs3xa%2F5GAzjnKJ1I0CylVjKQkY%2FlCUiXP%2Fm90oqlHYzS%2BqQ7fslUf29QeAM1BTvaP2jRoZR5O0jlMJuH38kGOqUB9L8G6uY3WDSTxr0wiYvbLMvhX7A4i3aTiaOdhJbAmSmrS1rSNSDZXr%2BOO2zGo4zDqFBoCHahqCDH1GVuvXyTyWk17rLQICHSy5rL0hx3soPi58ti4ugIMxR8AOlSESVy3Yegr%2BeiUQjUOomd797LgLqY6b1ZSFOH8ewFkbI3ddKKthrJYM5Ms1WP17DbT%2BxSiC5gb9kk%2FYgBk%2FTde93tKeqDtaKv&X-Amz-Signature=1aec4de80f3605cad85522934cefcf9ac7bf594fa45de2b9ebbea858d085ad9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHHS2T6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbphfOGHqH8Xe7Bmif0dvaefsHslPsDlso6kxBu3LNAiEApNQMcJlLgLQQQ6erpd1BCPc8wVTQQ5VnNnYbquUn7LQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnI%2Bgq40KqNVPjPCyrcAw8IDSC9Tk4Kg6u0jIgl7HCmdCUIyjOqAnb8iSvFYGUXgZDinqUcKYZK320VmS46Ae%2B1%2BM8Gdt4GYMTFee80JQdVf2DCf8JdAui5KE3s3cwbA3cbB8bNwJSJlx7cn6xH1ggceju%2Fo7NJYOlEsjSQ3Yndwg%2B3ZJdkl8sk5oLzCDGJyXjOT24jvxHdTzjXbLOCQ%2BFq2NY0SNl173QjWTgNMZL6MVT0OiSuzMoxLioQS%2B7H7Bgit%2FB3cALYALQvhPMwLcgk%2FnA5hiSDL2LfiiUB5Lj6jPZ%2BoyphhnH1Oxv2jFUDScTWHvAGWqgnBmiqkWAQ6dz7lAWI1Oiwqfb%2BCjwZzngB05CghhgEnUnsw0gLCXERLkb8kxyeVEyuVlFlR1nTk5KsYkdBtJ2msHpJR%2B%2F5TykBQXDLM4IccHk3hex0AF4930tgkNZ7HnjU63ET4CvV3VrapvlGrsQonH8Df02sLFRnXdG8oD7OCt9%2BucayF%2FINU8xSAmfXziXAUq5Y%2FRZwHcfhT3G5Q%2FbVJL963M4rqdd33O5d1sb4prtx7Q2pa01WWlqrRs3xa%2F5GAzjnKJ1I0CylVjKQkY%2FlCUiXP%2Fm90oqlHYzS%2BqQ7fslUf29QeAM1BTvaP2jRoZR5O0jlMJuH38kGOqUB9L8G6uY3WDSTxr0wiYvbLMvhX7A4i3aTiaOdhJbAmSmrS1rSNSDZXr%2BOO2zGo4zDqFBoCHahqCDH1GVuvXyTyWk17rLQICHSy5rL0hx3soPi58ti4ugIMxR8AOlSESVy3Yegr%2BeiUQjUOomd797LgLqY6b1ZSFOH8ewFkbI3ddKKthrJYM5Ms1WP17DbT%2BxSiC5gb9kk%2FYgBk%2FTde93tKeqDtaKv&X-Amz-Signature=253c91260402ae94d8b957e208ae697729e58e96bca8fbc93daf95db6efa0424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

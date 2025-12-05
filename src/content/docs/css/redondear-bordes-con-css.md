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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDUVLC6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArP2MUYspfVwwaARX6eqWcZcR98muqa%2BFpvlrRzFOh8AiEA6zJc7N33PiiVDAvmOQYF9MmHEm5n1frazp0J3KvrBRUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLdu8leyabm5DuE7PyrcA8TGkXbxFeRV1LH%2BqT9dfJ80qn%2BHUwzKiuZ4ob%2Fp1bh9FGNGXCDyt%2BRxrR1mTW%2FVDQFaCzbaz1%2FlXsAS1sn36KlzwL2GG6NadkWDTxWCk%2B%2FhdNp9JtPWngdI6UZrFIrZbGEXEE85Ay19rzRDte2A%2BZbInvK01bon%2B5L283QQhXGflss0OAOngbo3z2r%2FIxNzbK4kLmtlXYkk31HirqJEEnfQdc4pMDpaqmKTGS3QZjqVjZGq2maP7Olm7gKfDybuPhp2aby0hzlK8At2OWkMKJZYB8W5KHlH0zhuDjZMKGPlluBmYzDGY%2BFVs7LFSg5vP9t2MeVDw70TJLFXWcduDQ2ZklHbmfjoWuZ1KfOWNDEPXYO1ih5eXjJbOY9MmkkPO1JICqAsM946DEjI9ImJ0JDDwwZar69nhl6JRCYTQUMtY0FUogffXrDoDy8DDI7kOSckNu%2BqzNTamU5mLY%2Bz9MR%2B1ZPcKCY1mTDv1U4cUFyxMjQPghu9b8HAy%2B%2FTzt8%2BmzUFeMT%2B%2F4wlAAZ0TdU%2FD%2FiJNtcRk3aIK35sOjKrgYg08yLBUFkjyztL1Wf7mBKNC817ygjHsB9MT6%2Bjyg5qUWH7kwWfO8a3x2RC6WzCCja6thl2A4dTw%2BF4rCSFMJWqyckGOqUB5yOo0X88E2C2BJU2Fk6pEr6Lzcy4qOZdYM%2FduCFcRGNgkeZBWhJbPyA%2BXwaZQ2CF48Q783GEJwBZO1bDWnWJdypsdtjlkaCFzv2oADhmnZXNJbGxUSMp1%2BBaeeIe2W%2Fz8diM8dCx1u549yyYxEjTjtRF%2BhGfNa2r%2B9mRsTl7Lo%2Bni7z11rpI5nI1KSM5tj2FelHx9yZgNELtz5N5tCI0iviO8ySH&X-Amz-Signature=21ba00b407f0fb8ff8c7b4cc56cb6d358eb780ed9a6e76cc3a5348588c5707f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDUVLC6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArP2MUYspfVwwaARX6eqWcZcR98muqa%2BFpvlrRzFOh8AiEA6zJc7N33PiiVDAvmOQYF9MmHEm5n1frazp0J3KvrBRUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLdu8leyabm5DuE7PyrcA8TGkXbxFeRV1LH%2BqT9dfJ80qn%2BHUwzKiuZ4ob%2Fp1bh9FGNGXCDyt%2BRxrR1mTW%2FVDQFaCzbaz1%2FlXsAS1sn36KlzwL2GG6NadkWDTxWCk%2B%2FhdNp9JtPWngdI6UZrFIrZbGEXEE85Ay19rzRDte2A%2BZbInvK01bon%2B5L283QQhXGflss0OAOngbo3z2r%2FIxNzbK4kLmtlXYkk31HirqJEEnfQdc4pMDpaqmKTGS3QZjqVjZGq2maP7Olm7gKfDybuPhp2aby0hzlK8At2OWkMKJZYB8W5KHlH0zhuDjZMKGPlluBmYzDGY%2BFVs7LFSg5vP9t2MeVDw70TJLFXWcduDQ2ZklHbmfjoWuZ1KfOWNDEPXYO1ih5eXjJbOY9MmkkPO1JICqAsM946DEjI9ImJ0JDDwwZar69nhl6JRCYTQUMtY0FUogffXrDoDy8DDI7kOSckNu%2BqzNTamU5mLY%2Bz9MR%2B1ZPcKCY1mTDv1U4cUFyxMjQPghu9b8HAy%2B%2FTzt8%2BmzUFeMT%2B%2F4wlAAZ0TdU%2FD%2FiJNtcRk3aIK35sOjKrgYg08yLBUFkjyztL1Wf7mBKNC817ygjHsB9MT6%2Bjyg5qUWH7kwWfO8a3x2RC6WzCCja6thl2A4dTw%2BF4rCSFMJWqyckGOqUB5yOo0X88E2C2BJU2Fk6pEr6Lzcy4qOZdYM%2FduCFcRGNgkeZBWhJbPyA%2BXwaZQ2CF48Q783GEJwBZO1bDWnWJdypsdtjlkaCFzv2oADhmnZXNJbGxUSMp1%2BBaeeIe2W%2Fz8diM8dCx1u549yyYxEjTjtRF%2BhGfNa2r%2B9mRsTl7Lo%2Bni7z11rpI5nI1KSM5tj2FelHx9yZgNELtz5N5tCI0iviO8ySH&X-Amz-Signature=b102e32bf13efd4c9275f662b82f80995d480fbe154f959590a5e5c79c18f348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

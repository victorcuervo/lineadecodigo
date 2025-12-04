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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROF6FJ5J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH86yQpKrWoyrq5Nt5OYeJAPv8SLOjK%2BGOjmlOxvI29nAiBddSABqVicWh8lQ0ITUSEqjXudSSa8247tUQy%2Ba8RU0yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMF%2BNX0KwzzLeh%2BN5YKtwD%2B34qRPm6Q2ABvbTka6aQdTRRe5Yp45GP2Limqa5ygwhJI7Ji7YLGlL24CYajZ4bVzoLh%2BWEVGJBB1BUGpWW8M14pQk8KYqf9WAwap1XpqDHjJweXT50feoS2pzGgYsvL0tK1DlaeNI6TyqRZHZdbHPXcER8wmkOX%2FQbnfyqYlkudSI7M1kMkZ5kUTZ5rN6Jw5NLnyebIzhlwYPdg4a%2FI2k7Ej1LclxdGL7Lt%2BsKBsYIP33TMdtgia3A72sosP%2BhgHHoutZTuByQAVQfu9ApCAgDhJEiq%2F%2FtX2bDxACPZi7USiT7YCxLpDB1nJ%2Fmu5%2BmHjEpgIKqB7pRJkbE1ctI8b6cwMFcebHEZKgeKrb2ulW%2FuWm%2F%2BrINf%2BZyBgJGmeFH%2BhsX%2FZMrAiaHTfn4%2FaNCeX3vNrn7RSmvA91DBtWLClKeqGopuJ1DSs5r9sWsgwop4OPLO%2BSpaE9wv8fnzDPQ5m03uxgx%2BRCwBX8K11aZezNy3p1DMUkklxLp5ie1cVOFh3R2bzboN5iZiJMi9qmspAW7V7EzwIU5LwaBq52M1Jede7%2FAElIA%2FbwSgEIFoBCCpuZGthh4qWF7BGHZQqQxn3ASSII0%2BQCMsk9ebOpsQ1%2FvN6ZFn8juxvU7rCSswpOfFyQY6pgGcNMGIt1fp0gofvUCi2T77pCsL7j2bKCf6v12XUqV%2BQVrjQKgi9QoASyk%2FGlQOm7aAW1tvtiHErSVg4PNqltNFyskPlrQjbwH30vkq24%2FYh9%2BQz6LVRckXZDCpZGlY1d1mkdzNOuwLtvCOLU3GbuWGxt1w2%2BIFK1p4nPFX8SF8cz01CibhzL3JItcMUJ3kmo2KTn9FFDkLSVi7UknWnUVnB8O9lLZV&X-Amz-Signature=62e3f623af90a35647896385c305280e52f9a4d5e7dfa78871e163a40e148d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROF6FJ5J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH86yQpKrWoyrq5Nt5OYeJAPv8SLOjK%2BGOjmlOxvI29nAiBddSABqVicWh8lQ0ITUSEqjXudSSa8247tUQy%2Ba8RU0yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMF%2BNX0KwzzLeh%2BN5YKtwD%2B34qRPm6Q2ABvbTka6aQdTRRe5Yp45GP2Limqa5ygwhJI7Ji7YLGlL24CYajZ4bVzoLh%2BWEVGJBB1BUGpWW8M14pQk8KYqf9WAwap1XpqDHjJweXT50feoS2pzGgYsvL0tK1DlaeNI6TyqRZHZdbHPXcER8wmkOX%2FQbnfyqYlkudSI7M1kMkZ5kUTZ5rN6Jw5NLnyebIzhlwYPdg4a%2FI2k7Ej1LclxdGL7Lt%2BsKBsYIP33TMdtgia3A72sosP%2BhgHHoutZTuByQAVQfu9ApCAgDhJEiq%2F%2FtX2bDxACPZi7USiT7YCxLpDB1nJ%2Fmu5%2BmHjEpgIKqB7pRJkbE1ctI8b6cwMFcebHEZKgeKrb2ulW%2FuWm%2F%2BrINf%2BZyBgJGmeFH%2BhsX%2FZMrAiaHTfn4%2FaNCeX3vNrn7RSmvA91DBtWLClKeqGopuJ1DSs5r9sWsgwop4OPLO%2BSpaE9wv8fnzDPQ5m03uxgx%2BRCwBX8K11aZezNy3p1DMUkklxLp5ie1cVOFh3R2bzboN5iZiJMi9qmspAW7V7EzwIU5LwaBq52M1Jede7%2FAElIA%2FbwSgEIFoBCCpuZGthh4qWF7BGHZQqQxn3ASSII0%2BQCMsk9ebOpsQ1%2FvN6ZFn8juxvU7rCSswpOfFyQY6pgGcNMGIt1fp0gofvUCi2T77pCsL7j2bKCf6v12XUqV%2BQVrjQKgi9QoASyk%2FGlQOm7aAW1tvtiHErSVg4PNqltNFyskPlrQjbwH30vkq24%2FYh9%2BQz6LVRckXZDCpZGlY1d1mkdzNOuwLtvCOLU3GbuWGxt1w2%2BIFK1p4nPFX8SF8cz01CibhzL3JItcMUJ3kmo2KTn9FFDkLSVi7UknWnUVnB8O9lLZV&X-Amz-Signature=2d8a8b708733fc7ac548dfe0196ea41a11d0d6731a76ba511dabcfb993af55c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

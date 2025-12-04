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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGUN55M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFQzvCyl5evXgE3zuadh1yqR3%2F6TmBH%2Fu9goWMM3WA%2FXAiEA0Orn8m4g9N156z2U75T7e5dP%2Bg65dFHdMTORNNGFIHYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAFr6hFSmLTeHNJwyyrcA%2FwnXAu%2BkJjPjoiYjuVTizbCGl4Zftcr55PzDM%2BWoExtv9TU3mWE9zt9fckLHKSt7y9k4vObQ7ra1Txsu5wByOL22dStKIMpGUZjg0JJSozsI5IuTgbF1jc9T6OKf62d5gxPvTW86XXw2bPCDIGQgaSyFMleb6c1%2BGsijyigmh6f2u%2Bp%2BJp3ttVlUkMUQ2EHg4GihckyXc50TGWdAHeCSdCwxmYu%2BbVYZXmu%2FigTZRRyYvEL4UxKbfVFAwMGR9GfRzzhvV%2FmNnJ5cJoR7cphC6gT7%2BeGO3JhYKNAx4far%2FuwRdU576pmAuRjCnuRbA6VGdiGo92DyYdUlAl08AltAt645%2FR9E2CXS%2F7ATQecOI45wpVdoE7GQNo7QB%2BBe%2FVvn1gW6MqnkkUoeAQanB%2B1TnL%2FHlXi36oAgpVhGCH8elgqOjY9Cc%2Bj0N0Wm6VMfsNT2QfUFCLQIlPROsnrzag7cMJ8LxzrIjYUXQbx%2BC%2BbKT%2BPXbaF5PlNpw79UnUa0gxA5cojK1qac5jptPqubTJKxyL3CeVwt5q9AMdvF5h%2BApPX20wtrlYpe52utgwFrTas%2FfCgWKVEqeDTIXnIvJ%2B4TFh9l%2B1kclsFIKCk8Mk7JSNbfc%2BDyd6rNZ9%2FwS91MMG1w8kGOqUBWb6ceA2il9HhR7FUf39ab%2BWVzPKF5k0hHCzZhzTAb7uLfecUuycv5jpnONv65PdKfrSp6Kg28QY%2BfP2luQccxGqkRBYHTpyu3GoFcl6kxP61W%2FvdUim2q2meW9cDe7WxySOZUhpCDaNUq9CjGpgqOlAojmZeDk4SSDO2j4MPvTA6Xm8NH3DPyIsPdjxie2fw5sDC0efGTm66UtG8EI%2FdRgrjcIi6&X-Amz-Signature=cc73190a65039b7045fb5020cd20c1282da914312cb71acadc79a377985db501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGUN55M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFQzvCyl5evXgE3zuadh1yqR3%2F6TmBH%2Fu9goWMM3WA%2FXAiEA0Orn8m4g9N156z2U75T7e5dP%2Bg65dFHdMTORNNGFIHYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAFr6hFSmLTeHNJwyyrcA%2FwnXAu%2BkJjPjoiYjuVTizbCGl4Zftcr55PzDM%2BWoExtv9TU3mWE9zt9fckLHKSt7y9k4vObQ7ra1Txsu5wByOL22dStKIMpGUZjg0JJSozsI5IuTgbF1jc9T6OKf62d5gxPvTW86XXw2bPCDIGQgaSyFMleb6c1%2BGsijyigmh6f2u%2Bp%2BJp3ttVlUkMUQ2EHg4GihckyXc50TGWdAHeCSdCwxmYu%2BbVYZXmu%2FigTZRRyYvEL4UxKbfVFAwMGR9GfRzzhvV%2FmNnJ5cJoR7cphC6gT7%2BeGO3JhYKNAx4far%2FuwRdU576pmAuRjCnuRbA6VGdiGo92DyYdUlAl08AltAt645%2FR9E2CXS%2F7ATQecOI45wpVdoE7GQNo7QB%2BBe%2FVvn1gW6MqnkkUoeAQanB%2B1TnL%2FHlXi36oAgpVhGCH8elgqOjY9Cc%2Bj0N0Wm6VMfsNT2QfUFCLQIlPROsnrzag7cMJ8LxzrIjYUXQbx%2BC%2BbKT%2BPXbaF5PlNpw79UnUa0gxA5cojK1qac5jptPqubTJKxyL3CeVwt5q9AMdvF5h%2BApPX20wtrlYpe52utgwFrTas%2FfCgWKVEqeDTIXnIvJ%2B4TFh9l%2B1kclsFIKCk8Mk7JSNbfc%2BDyd6rNZ9%2FwS91MMG1w8kGOqUBWb6ceA2il9HhR7FUf39ab%2BWVzPKF5k0hHCzZhzTAb7uLfecUuycv5jpnONv65PdKfrSp6Kg28QY%2BfP2luQccxGqkRBYHTpyu3GoFcl6kxP61W%2FvdUim2q2meW9cDe7WxySOZUhpCDaNUq9CjGpgqOlAojmZeDk4SSDO2j4MPvTA6Xm8NH3DPyIsPdjxie2fw5sDC0efGTm66UtG8EI%2FdRgrjcIi6&X-Amz-Signature=a36ee5ec9f3c83df865995482f4074d589e356495f6f1619ca0d70af32fddeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

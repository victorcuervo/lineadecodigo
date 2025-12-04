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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXR63DVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDJwF6Pvg5X3OgWzrG4LUMHWy%2BjpROsd1UJFXg1Qi3NzAIgZ879XkLjXOofArrexYdCxuu03qcUNgV1B4evSv6kv60q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGuUX7OfoCnKzEyQvSrcA%2BAdfEKUzjTeFdHjHc5YbSlhewAwBySkJZlItlqVIyzBnib3%2Fu6Z%2BJgA5Nprs5e25a7syLhy1bIZXOiH9xXnpxOwrbhfy5Ugx%2Bzve9x1xHaL5VZUzzIFk5LpcvwZvXmpz781scx%2F3jRc2wE4u3dqDyI8NUdzc16t5NWPOuFQC9ZWhpnKmTQOwc9I9JYsMuCEbcGCX3ropy7i1YU9g3VMMnKnCQuo5YFkVMiCSA0drVjbT6ec4HGSN8IzfMc1pjsA2%2FjxRNDaI3VEH923X7YHvqDYE%2F%2FLn1smI4%2BqADs1H1Wbbor7Sm9%2Bi6u2ysfpU8ve5uduEXmCkTQa8c5WLXtdheQvTTPRLNzuJW2d7%2Fjd0XUUemt1Q%2F%2FzSzsAISEUt2pqQ9GPmPFxkdbiu5JN1amu4BaTOUS0g%2F2dh5weGairixteDJi5oKd49Ukf5HYedhJheP5JYSZxd7TiozXT2HX14qh%2FdFeahVzXSkQ5Jd9YNmKVEigrTOZpxV2ahL7ix2XBcQFV0OlL7el2BZbhpo3fAT4npZgMv4WBVdlzAhvdY4xzciTjTN7%2BoRhxcH2BaO56zPfrq8mtuDMaJsbt%2Fcl3MMoFmWzKSnMQBM2iQdPxPJoVnm44MeekAEg%2BHELEMOzTw8kGOqUBTRoQFkFGjN%2F8ZwzTN4zuYpSoLk6a28piC%2BUsy6seAr1opmkZfRnA1iVBHOwhwLK0V61odu0fwbcg1GQtTbicXpgGLWXztwZc27Kg0MGM%2FRIBze5owsZer3syWBav92k8rqW0y8uLNDVoJ6sB7ylYfPazOoAIGeOf3ONUOruqCY4%2F6XZwCn1WN0FRz40zx624ycQMXsafQim5uj9cFH1VSvQxqL6n&X-Amz-Signature=005924e14f8819002783b5d3ebf3c77714676b797377a231471e08ea7d371a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXR63DVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDJwF6Pvg5X3OgWzrG4LUMHWy%2BjpROsd1UJFXg1Qi3NzAIgZ879XkLjXOofArrexYdCxuu03qcUNgV1B4evSv6kv60q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGuUX7OfoCnKzEyQvSrcA%2BAdfEKUzjTeFdHjHc5YbSlhewAwBySkJZlItlqVIyzBnib3%2Fu6Z%2BJgA5Nprs5e25a7syLhy1bIZXOiH9xXnpxOwrbhfy5Ugx%2Bzve9x1xHaL5VZUzzIFk5LpcvwZvXmpz781scx%2F3jRc2wE4u3dqDyI8NUdzc16t5NWPOuFQC9ZWhpnKmTQOwc9I9JYsMuCEbcGCX3ropy7i1YU9g3VMMnKnCQuo5YFkVMiCSA0drVjbT6ec4HGSN8IzfMc1pjsA2%2FjxRNDaI3VEH923X7YHvqDYE%2F%2FLn1smI4%2BqADs1H1Wbbor7Sm9%2Bi6u2ysfpU8ve5uduEXmCkTQa8c5WLXtdheQvTTPRLNzuJW2d7%2Fjd0XUUemt1Q%2F%2FzSzsAISEUt2pqQ9GPmPFxkdbiu5JN1amu4BaTOUS0g%2F2dh5weGairixteDJi5oKd49Ukf5HYedhJheP5JYSZxd7TiozXT2HX14qh%2FdFeahVzXSkQ5Jd9YNmKVEigrTOZpxV2ahL7ix2XBcQFV0OlL7el2BZbhpo3fAT4npZgMv4WBVdlzAhvdY4xzciTjTN7%2BoRhxcH2BaO56zPfrq8mtuDMaJsbt%2Fcl3MMoFmWzKSnMQBM2iQdPxPJoVnm44MeekAEg%2BHELEMOzTw8kGOqUBTRoQFkFGjN%2F8ZwzTN4zuYpSoLk6a28piC%2BUsy6seAr1opmkZfRnA1iVBHOwhwLK0V61odu0fwbcg1GQtTbicXpgGLWXztwZc27Kg0MGM%2FRIBze5owsZer3syWBav92k8rqW0y8uLNDVoJ6sB7ylYfPazOoAIGeOf3ONUOruqCY4%2F6XZwCn1WN0FRz40zx624ycQMXsafQim5uj9cFH1VSvQxqL6n&X-Amz-Signature=eceea9a6163ca9f9fd60fd26b25d908a6116199734aaca2467175322b95102e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMUKSUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzJEWP1BsO7dW7gCvzbCWQqVYGZJ7tOikn709cO5QPgIhANE7K2SfPPvqGSxTHjrN27mePGYnuGtBGiF7U%2FKx8%2BnkKv8DCHAQABoMNjM3NDIzMTgzODA1IgwICb7wEbVJ2iW%2FvdUq3ANQNvhntBkRMXf%2BCk7T1rBkQjEHPWgnUHk74h0NbUi%2Fqj5A2AydMzzgo5%2FIi2yxO4Rn%2BTnuHC%2BeAnkt3BmL0Ol0sxYsUHMiEUZ6avHtRmFpGM5ZshGgg4vDir%2FF0LWUaZdeGCXy4N2XKNXpWgwuzlDC19EZTnHu35RUSZkT2WS04XEjlutMA1KDwS1bImrW8aLqZW79a6%2Fo7647fi%2BKcKl1LfnFGcUQovMnRJazJgZR2rJQo0jFi%2F3RO3v9O4ZV0E1fjDyeB2bSWEoKoiFR6Ni%2BLpATiYJuqklmRnxi88YnWk0x8DNwl%2FjNw3BIc7OqG0Yc1cSez5kU9Osz5AK4SbEuZpQfi78PT1z97BYWvbru8zXzEkScSWtlGhwzJJQxtvTHQyWzYcM8A9pJEm9tgBF8yan0ODQy6IMdIGhuUaUKKsvc7fSJUM24thApwauuU9lURNg%2Byjw81HKS7MKotvh2hmT7Dl%2F3c672LH4DWIrQ%2FTwXF%2BkkRidixSSRu9mj0YnKS%2FMymrlONtMGgpRRToaezqRKWE3Jq%2BS2xw0oLB18HeQB%2B6zJavivgDWabN9uFABipTOO9pDoKXFLVdgi%2BMWJl%2FZ%2B2IBmKPFTFTuNKnU3XvCmV3n%2FXPlX%2BZkbHDD9ns%2FJBjqkATQnNm2waS6jAb6qwkiOZLl8x9Bcx7RmqEAqPs70lXBGJHkgW13Ag4DiYMbur%2BUvI3ZF176E9EDIOWr9Yd07oiQKq9zkmwukbgIbKs3QAJvHRMpqKUl8uQxkN08bb2Ql7TaQ1a69q6uFPooM0BZWd%2B%2BYFWY6ISudlqsF9Jb8WfWoBuESYGR7wLEGc5B29Gie%2BSYNyYoNt6bL9cbgq45dH40IK6fw&X-Amz-Signature=deaee8de31d744bfaffb105fed08102168c482c4f0ed22d317326020a8a30d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMUKSUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzJEWP1BsO7dW7gCvzbCWQqVYGZJ7tOikn709cO5QPgIhANE7K2SfPPvqGSxTHjrN27mePGYnuGtBGiF7U%2FKx8%2BnkKv8DCHAQABoMNjM3NDIzMTgzODA1IgwICb7wEbVJ2iW%2FvdUq3ANQNvhntBkRMXf%2BCk7T1rBkQjEHPWgnUHk74h0NbUi%2Fqj5A2AydMzzgo5%2FIi2yxO4Rn%2BTnuHC%2BeAnkt3BmL0Ol0sxYsUHMiEUZ6avHtRmFpGM5ZshGgg4vDir%2FF0LWUaZdeGCXy4N2XKNXpWgwuzlDC19EZTnHu35RUSZkT2WS04XEjlutMA1KDwS1bImrW8aLqZW79a6%2Fo7647fi%2BKcKl1LfnFGcUQovMnRJazJgZR2rJQo0jFi%2F3RO3v9O4ZV0E1fjDyeB2bSWEoKoiFR6Ni%2BLpATiYJuqklmRnxi88YnWk0x8DNwl%2FjNw3BIc7OqG0Yc1cSez5kU9Osz5AK4SbEuZpQfi78PT1z97BYWvbru8zXzEkScSWtlGhwzJJQxtvTHQyWzYcM8A9pJEm9tgBF8yan0ODQy6IMdIGhuUaUKKsvc7fSJUM24thApwauuU9lURNg%2Byjw81HKS7MKotvh2hmT7Dl%2F3c672LH4DWIrQ%2FTwXF%2BkkRidixSSRu9mj0YnKS%2FMymrlONtMGgpRRToaezqRKWE3Jq%2BS2xw0oLB18HeQB%2B6zJavivgDWabN9uFABipTOO9pDoKXFLVdgi%2BMWJl%2FZ%2B2IBmKPFTFTuNKnU3XvCmV3n%2FXPlX%2BZkbHDD9ns%2FJBjqkATQnNm2waS6jAb6qwkiOZLl8x9Bcx7RmqEAqPs70lXBGJHkgW13Ag4DiYMbur%2BUvI3ZF176E9EDIOWr9Yd07oiQKq9zkmwukbgIbKs3QAJvHRMpqKUl8uQxkN08bb2Ql7TaQ1a69q6uFPooM0BZWd%2B%2BYFWY6ISudlqsF9Jb8WfWoBuESYGR7wLEGc5B29Gie%2BSYNyYoNt6bL9cbgq45dH40IK6fw&X-Amz-Signature=233994a27c42a58e66f7fc9ed225666165800286fef58933dbf6010a909a3f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

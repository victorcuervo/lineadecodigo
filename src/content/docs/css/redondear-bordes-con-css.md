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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORGYRD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTRiR29FHascfii9ao016XoSO%2FTzMtt1E0NLHNEyCLFAiAFduz42ivLNgmE92q1qX7htCHy9gveYwm8cgy96mOqNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk1%2F0LsIvocuQ4anLKtwDepJh5tm5LcnJGApiwGFxhOTtIReNZMGvi%2BN1zMrMOYj581K15ZI8BQdvCTOwqPklt3yBoItshDCQQciCn5qpZH2LRJ0ZuJ5rkepbj6SsMbpIrM7zEYhED6S68lZC9X8KpyuYmXztDJT5MmHpB4J%2BsjePRj7LYWuBOanZKf9VOtQM7pUeiGhAVDGLIWmZIErq3Y3j3x7kefEczp2UD525NhNsbUHbzN1Sng0vIM34TYWzQjF3gr5G7fQQAUPZbZjVxXB8waVQhSa7ZuQLKjMVFW4BbvworBRAaI0sYhKWwWY9Zp5WM%2BGjdYr5GtCJKtHTvOsjZKeCFhGUbIW2buwKjAw8CgUby4k1%2FpoS8o641vX1bZo%2B7BBarijyMR%2BkUCFWLbh2rF%2FJnIUKD8xK0k8c5WrOgw27iYuKbz674MhaFymMJ%2FWLJ6uTUpX5SNJZQVLlA2LQ40xFN8xExC%2F8PAysWWojo1qPl6DHqRsgT5UEFjVqtcx79ZkONTRhoGP%2B7CLsgCKJEthk2aio5jLCIuebIi1QzhXjnKI%2F0abNny9D4H%2FsdlX4A%2BZYoHIhmJ5qMg%2F7NXe%2F%2FalzVG2rWekf%2BJAASyoF9YDWtnZ%2FzHfJ%2BrHpnaySY%2FXnPD9Dyg4SQA4wzOTbyQY6pgF9xmGg%2B641SfSurjO2WcYAbxNSceUlamgHLlIlPEoAaqFCOP6ICdVQa5pz6dvEIzy3NnzaDBoymxkCJvDJHUkDFoB7KHkzfqGrh%2FQhO%2BKltWrcOWGoT62pz8PN%2BuPgSjgkkuktXdYygw4ECxG63txQy3D8XDBHXTjO0Uwc8xD9As%2F7%2Fa7Z7Aktt%2BlsU9nyMRJEZXJCYmlSu05dyZaBfzcjYQvmhPGE&X-Amz-Signature=44d3528cbf2ce24516e1b481c09ab5526d9f2aadd3a4b69cbc2385b44d9723dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORGYRD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTRiR29FHascfii9ao016XoSO%2FTzMtt1E0NLHNEyCLFAiAFduz42ivLNgmE92q1qX7htCHy9gveYwm8cgy96mOqNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk1%2F0LsIvocuQ4anLKtwDepJh5tm5LcnJGApiwGFxhOTtIReNZMGvi%2BN1zMrMOYj581K15ZI8BQdvCTOwqPklt3yBoItshDCQQciCn5qpZH2LRJ0ZuJ5rkepbj6SsMbpIrM7zEYhED6S68lZC9X8KpyuYmXztDJT5MmHpB4J%2BsjePRj7LYWuBOanZKf9VOtQM7pUeiGhAVDGLIWmZIErq3Y3j3x7kefEczp2UD525NhNsbUHbzN1Sng0vIM34TYWzQjF3gr5G7fQQAUPZbZjVxXB8waVQhSa7ZuQLKjMVFW4BbvworBRAaI0sYhKWwWY9Zp5WM%2BGjdYr5GtCJKtHTvOsjZKeCFhGUbIW2buwKjAw8CgUby4k1%2FpoS8o641vX1bZo%2B7BBarijyMR%2BkUCFWLbh2rF%2FJnIUKD8xK0k8c5WrOgw27iYuKbz674MhaFymMJ%2FWLJ6uTUpX5SNJZQVLlA2LQ40xFN8xExC%2F8PAysWWojo1qPl6DHqRsgT5UEFjVqtcx79ZkONTRhoGP%2B7CLsgCKJEthk2aio5jLCIuebIi1QzhXjnKI%2F0abNny9D4H%2FsdlX4A%2BZYoHIhmJ5qMg%2F7NXe%2F%2FalzVG2rWekf%2BJAASyoF9YDWtnZ%2FzHfJ%2BrHpnaySY%2FXnPD9Dyg4SQA4wzOTbyQY6pgF9xmGg%2B641SfSurjO2WcYAbxNSceUlamgHLlIlPEoAaqFCOP6ICdVQa5pz6dvEIzy3NnzaDBoymxkCJvDJHUkDFoB7KHkzfqGrh%2FQhO%2BKltWrcOWGoT62pz8PN%2BuPgSjgkkuktXdYygw4ECxG63txQy3D8XDBHXTjO0Uwc8xD9As%2F7%2Fa7Z7Aktt%2BlsU9nyMRJEZXJCYmlSu05dyZaBfzcjYQvmhPGE&X-Amz-Signature=375b7f072ffcd355cc1e736e38c77dbdf95bb19f20d535193b2ddc21e2fcc3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

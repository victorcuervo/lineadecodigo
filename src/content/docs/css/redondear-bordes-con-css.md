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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSABYUS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCcujjT60VH1FXpVTSwyk%2BHidZlF4Ephsg6q9Yam9tB6QIhAPunhtzbOSETnnr2KvQVl2BudBMxnBRyrkonJ%2F5yyWQyKv8DCEYQABoMNjM3NDIzMTgzODA1Igx8E8kgEJOp8Rr%2B0Pkq3APxXZlu71%2FrnLEfZwLSXSAbbFZ6qXXmuKmvGTJp%2B5iI%2FFmQpQh7uyntfhFPmsf2MyccjD7%2B2pzL7pDZ%2BxSAgqCeNXrDrm6ahdqbKwReHt21SzfbI8Ip0RMi%2BTtE%2BkIY8wiMnppDdZrKmAnYsYgm4Fg9nc8DzEI15%2Foc3EdTSoRd%2Fe1vJVZnMYV5My9aRqKaF65KaZoYqWoWqKJzuCt5lYPcBtuEAFwmFH0UU%2BXznjUGuixTJJchNf40REk1SxDuxbosYKU2U7jL2HnrklyMkWPFZbROmJzw9laSf9%2B2g7SExYGw3EyMs1moFvUHbVVjCi42%2BE6WMe1zCABFG9YU8WETMZ2xRFpb1clN7sZalYR5tYZ8W05KnfmCX7NxarFAB59FdCU1KCAcn8OMrwZHESLOBGisfMXs5zzLdrwtbX%2BoJa8Epc%2B9uT%2BlGqC%2FbaS1h%2FwYebN37SiETSmEf9q4QEzNXNYM6M8vKrjshF935m%2B6KNhhRwEwwllsSx4t7uUYmCbO0UbC5qjOyUeIp0JNu9yh0SHACDqCF75AI8xWVVD7ojzjm7GN7ZR9yioLn88AW02C52JYi3uVag%2FRNHTge1g2kdlHVa0xmjkG398LewKbgcZAaaAINKEkp19FCTDUg8bJBjqkAf4dxD8naSZo0Jn%2BIUmdqUiG3MSC1tA3R5pNfD%2F2M7hzMzdpFRJCjOcC6bgeMozODXFIm9auBT8fS1SokKoqy7xOGWZSXHOfo1qVXnjwijBX6Kv0E3uJpmZcnfXToVVAmZqCWsdONU6GT3aBTKuCJghX7NDF7flgZzpCVHiZdRGkQlvdz8ydjxVIQhZFeUhwu4rXkqKAKd76lE0ON1r6QASJn8L8&X-Amz-Signature=e1bfe3d1748c79f48b366b2d0186784014e24137fe5812588fe4b5fd0f38878c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSABYUS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCcujjT60VH1FXpVTSwyk%2BHidZlF4Ephsg6q9Yam9tB6QIhAPunhtzbOSETnnr2KvQVl2BudBMxnBRyrkonJ%2F5yyWQyKv8DCEYQABoMNjM3NDIzMTgzODA1Igx8E8kgEJOp8Rr%2B0Pkq3APxXZlu71%2FrnLEfZwLSXSAbbFZ6qXXmuKmvGTJp%2B5iI%2FFmQpQh7uyntfhFPmsf2MyccjD7%2B2pzL7pDZ%2BxSAgqCeNXrDrm6ahdqbKwReHt21SzfbI8Ip0RMi%2BTtE%2BkIY8wiMnppDdZrKmAnYsYgm4Fg9nc8DzEI15%2Foc3EdTSoRd%2Fe1vJVZnMYV5My9aRqKaF65KaZoYqWoWqKJzuCt5lYPcBtuEAFwmFH0UU%2BXznjUGuixTJJchNf40REk1SxDuxbosYKU2U7jL2HnrklyMkWPFZbROmJzw9laSf9%2B2g7SExYGw3EyMs1moFvUHbVVjCi42%2BE6WMe1zCABFG9YU8WETMZ2xRFpb1clN7sZalYR5tYZ8W05KnfmCX7NxarFAB59FdCU1KCAcn8OMrwZHESLOBGisfMXs5zzLdrwtbX%2BoJa8Epc%2B9uT%2BlGqC%2FbaS1h%2FwYebN37SiETSmEf9q4QEzNXNYM6M8vKrjshF935m%2B6KNhhRwEwwllsSx4t7uUYmCbO0UbC5qjOyUeIp0JNu9yh0SHACDqCF75AI8xWVVD7ojzjm7GN7ZR9yioLn88AW02C52JYi3uVag%2FRNHTge1g2kdlHVa0xmjkG398LewKbgcZAaaAINKEkp19FCTDUg8bJBjqkAf4dxD8naSZo0Jn%2BIUmdqUiG3MSC1tA3R5pNfD%2F2M7hzMzdpFRJCjOcC6bgeMozODXFIm9auBT8fS1SokKoqy7xOGWZSXHOfo1qVXnjwijBX6Kv0E3uJpmZcnfXToVVAmZqCWsdONU6GT3aBTKuCJghX7NDF7flgZzpCVHiZdRGkQlvdz8ydjxVIQhZFeUhwu4rXkqKAKd76lE0ON1r6QASJn8L8&X-Amz-Signature=71b6b8c2439be4ab518c9fdd0ab175910cc2b9d035ce8b3aaec377fda58012ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

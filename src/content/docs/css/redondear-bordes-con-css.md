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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIH5F22P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDWMFqJG29XhrgjQmOm%2B%2FUPw3evo9mFsA1nYuy3iaq%2FywIgGtGFHbgaGQalJlbr3dyZ7J7ghTPxq%2BBTsX%2BwTEN2UpQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCyPkRDj3l2NJGKgkSrcAy81%2Ftuuv7T2zLZQ%2BV3EKN9IklevreqA%2BgpW9knWZYgmbygTlXppNStXe%2BUBm2lx9I9HWGbwDCrWr5Jkv%2Fkyo5Wa6NRTZL5%2BFtpxcRWdc3uOG%2Be6%2Fy5UOKgkb20eUtKAolzw5F%2BbFcoJxDqiTPCoBYiPgliDkRYiy1lQioO4uQk0Zvn4Nljg82VjDlyLF94%2BGS6abqZrBkVmrQGutwUQrD6coqIDN9ddw%2BvrGblPlfRr9oG8CSSNAqMZlvTfdQY1urPzxFvK3figabhuGzTLmEpePxQtFc%2BRh3%2FPVqe%2BuJeh%2BE414hKnvZrfZ7pa8ktJ3KEgzPi4%2BGT5T8%2Fb3rko8jX8BaZFd8FNK4MNPkBnt%2FVMn24aulC71IWUdEUOA4fty3pwotG8MZBAn5od2y2zzfolnJbebD1SpgatmxRAM1fv0U%2BxUqu968YIRTbbO7Bj%2BzJTHyoclm9xUDUUO9rTm5XjRgBGRGXmhJ0SiGwCDU6uxRmIKMjgI6oa2J%2BVCxGooKXB59f%2F0OvYDKQlNeuf9q%2F%2FU237gImcMgNIroOa7bheK8g%2FrjsOugaMPZOlSiw3U2UVpEa4kGnwfS7o%2BS%2B3l8XbOhu%2BjMNqH5XaFaGLEDdo%2F2ocVBxb9h7dhS1hMIiExskGOqUBSSpBg9aBMhK6mXVoOJa3Uz4eSaEUl6thWkmemu3RflPlhsDufR95SyQSY0taX9O9Ud76TbMijkSr5AJ6s7jUHEhpNF7zjEdNjRetLe8cY8u74Od4zE%2FOiLYFooMqiYGeJ8EZQziV3FIMLspGXZ38QX5t1doZaxGqYJ9Z087eNJD0xW33ZVUvKmHrKtKdyaZinRpK6YPyYXz7eMiCNPr9PBdrBwvx&X-Amz-Signature=865feb67c215dacc1d0be2e63ca56b254135c5774198148f143f625acd9f8b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIH5F22P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDWMFqJG29XhrgjQmOm%2B%2FUPw3evo9mFsA1nYuy3iaq%2FywIgGtGFHbgaGQalJlbr3dyZ7J7ghTPxq%2BBTsX%2BwTEN2UpQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCyPkRDj3l2NJGKgkSrcAy81%2Ftuuv7T2zLZQ%2BV3EKN9IklevreqA%2BgpW9knWZYgmbygTlXppNStXe%2BUBm2lx9I9HWGbwDCrWr5Jkv%2Fkyo5Wa6NRTZL5%2BFtpxcRWdc3uOG%2Be6%2Fy5UOKgkb20eUtKAolzw5F%2BbFcoJxDqiTPCoBYiPgliDkRYiy1lQioO4uQk0Zvn4Nljg82VjDlyLF94%2BGS6abqZrBkVmrQGutwUQrD6coqIDN9ddw%2BvrGblPlfRr9oG8CSSNAqMZlvTfdQY1urPzxFvK3figabhuGzTLmEpePxQtFc%2BRh3%2FPVqe%2BuJeh%2BE414hKnvZrfZ7pa8ktJ3KEgzPi4%2BGT5T8%2Fb3rko8jX8BaZFd8FNK4MNPkBnt%2FVMn24aulC71IWUdEUOA4fty3pwotG8MZBAn5od2y2zzfolnJbebD1SpgatmxRAM1fv0U%2BxUqu968YIRTbbO7Bj%2BzJTHyoclm9xUDUUO9rTm5XjRgBGRGXmhJ0SiGwCDU6uxRmIKMjgI6oa2J%2BVCxGooKXB59f%2F0OvYDKQlNeuf9q%2F%2FU237gImcMgNIroOa7bheK8g%2FrjsOugaMPZOlSiw3U2UVpEa4kGnwfS7o%2BS%2B3l8XbOhu%2BjMNqH5XaFaGLEDdo%2F2ocVBxb9h7dhS1hMIiExskGOqUBSSpBg9aBMhK6mXVoOJa3Uz4eSaEUl6thWkmemu3RflPlhsDufR95SyQSY0taX9O9Ud76TbMijkSr5AJ6s7jUHEhpNF7zjEdNjRetLe8cY8u74Od4zE%2FOiLYFooMqiYGeJ8EZQziV3FIMLspGXZ38QX5t1doZaxGqYJ9Z087eNJD0xW33ZVUvKmHrKtKdyaZinRpK6YPyYXz7eMiCNPr9PBdrBwvx&X-Amz-Signature=3ef99124187017933dec8dad2718ab4b0410fc76ab458205b067489e29343b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITW4HY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYfTpmyNrqlsFXw8mni3p1fXvS0NPo9%2BWVCq2Sd4fP9AiAArKa10Utn9NsNT8a7p9v3BLEl9fxsN13fFhwyhHeDUir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXZGTXxdGuUJrfYEwKtwDuw1k3kAXYCZ8Qg82eUDKQLYLzz6MOsQCg7SLlYeyR%2Bm5etJUPPxuel25zoedNwymEGIRM87ZHSw2vHORb6jNBhqYKj1XjONM5r%2BuMV3Z2bGg6CFZr5uZzwfEu%2BrjMT2SFudOmrVHjhvk%2Ff8unsUNUwada5czwU2O53rueqJhmktprhwLeRpeB406IrZ%2FuoPqJ0OZJENtbbEuEZHWjS3X3%2BsE%2BnfUM8%2FF%2BXmW350FDjtFSp8Jopoe51Sj2YlT2Hm1oSsa5Q%2FC3xoYShoMIstnfKpgUCN9IZLLHQ0NiK4SvlvCz%2BJOQx%2FNpSKeOcM4elkmHOTw%2BQMX2uEp9aHbLRTtALWAIdDN%2F1s8F1KbDnRU65sgUFhMxemN8OXY8ODgUJrB0QlWStn4zFRm2mKUhHaymAoRRll%2FXV1baeUIw%2FiLpnY2ywTKzE629W6l42JNe7gkopjiwImepikcj7cMnrjTt8eAt5U967HwNnuyDU6hDnJMFiGjCl6Z5WfdGc%2FgiM7QPe7CaJL5Q70GRNrInadvwhx35BAtuk5fG2rRi3x48ItZO%2BHzgn7uj0ni5Y0AEjzHbRkepCmVjgs%2FZeJDwPUQhQ%2FZ45WMPGD2oWdljfO5%2B%2FqnKcCNC3BojXky7HMwi8bNyQY6pgFuMU%2B9nUKNcMXevqZsPnvzrzWZ9M1lNxgNMUvMtHMNOChGU8HFZYXmsqZZQsUxH4n52baxhYIAklEB1wl8eLI0u9pZnbz8kStGtnBEzjWjiUjfEQ5QZhBJNjBsO1BCyweKzmvyItZuvH1Qk30Nm5Tb0uF9ErgLtF0bYkxRPwXVhLZByzMD8AWGHXymidnm054NJxj%2FYkiS%2FLNhBhLb9ynp1hghgnA8&X-Amz-Signature=5505e670fa016f085af2af89b7f7de9991ef5d1354bf56aa6e46af8fa9f3f1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITW4HY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYfTpmyNrqlsFXw8mni3p1fXvS0NPo9%2BWVCq2Sd4fP9AiAArKa10Utn9NsNT8a7p9v3BLEl9fxsN13fFhwyhHeDUir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXZGTXxdGuUJrfYEwKtwDuw1k3kAXYCZ8Qg82eUDKQLYLzz6MOsQCg7SLlYeyR%2Bm5etJUPPxuel25zoedNwymEGIRM87ZHSw2vHORb6jNBhqYKj1XjONM5r%2BuMV3Z2bGg6CFZr5uZzwfEu%2BrjMT2SFudOmrVHjhvk%2Ff8unsUNUwada5czwU2O53rueqJhmktprhwLeRpeB406IrZ%2FuoPqJ0OZJENtbbEuEZHWjS3X3%2BsE%2BnfUM8%2FF%2BXmW350FDjtFSp8Jopoe51Sj2YlT2Hm1oSsa5Q%2FC3xoYShoMIstnfKpgUCN9IZLLHQ0NiK4SvlvCz%2BJOQx%2FNpSKeOcM4elkmHOTw%2BQMX2uEp9aHbLRTtALWAIdDN%2F1s8F1KbDnRU65sgUFhMxemN8OXY8ODgUJrB0QlWStn4zFRm2mKUhHaymAoRRll%2FXV1baeUIw%2FiLpnY2ywTKzE629W6l42JNe7gkopjiwImepikcj7cMnrjTt8eAt5U967HwNnuyDU6hDnJMFiGjCl6Z5WfdGc%2FgiM7QPe7CaJL5Q70GRNrInadvwhx35BAtuk5fG2rRi3x48ItZO%2BHzgn7uj0ni5Y0AEjzHbRkepCmVjgs%2FZeJDwPUQhQ%2FZ45WMPGD2oWdljfO5%2B%2FqnKcCNC3BojXky7HMwi8bNyQY6pgFuMU%2B9nUKNcMXevqZsPnvzrzWZ9M1lNxgNMUvMtHMNOChGU8HFZYXmsqZZQsUxH4n52baxhYIAklEB1wl8eLI0u9pZnbz8kStGtnBEzjWjiUjfEQ5QZhBJNjBsO1BCyweKzmvyItZuvH1Qk30Nm5Tb0uF9ErgLtF0bYkxRPwXVhLZByzMD8AWGHXymidnm054NJxj%2FYkiS%2FLNhBhLb9ynp1hghgnA8&X-Amz-Signature=9a6a66a5c59956baab1c1ab4031de21f6bfdd6b1a05cf76b731dc09dd62f674b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

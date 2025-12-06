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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYJBG5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1NqY1muZzSskiCSmw6ZDC%2BSlz5fYtJN0PQ1dntpzfyAiAHRX5VLO%2F%2BNAe4LF8evLQyXcVhtPVQ9UOTKpMHUpEgQSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMJUGt9n4AZvMxuip3KtwDpn9mIg1zopMJRb5itCkFWEU%2FsnC4PMmXyvAGOe8rHhkowHj5%2FaBfkQIkCBsZleulfimBaz%2FexjDYrQBnOZ4TcNTN%2BovGRICWpbKVN8%2FIaKQ7k5R2PH3s4dCWEeH2Qz3O9ddZuzsTSFt4vDv3OB71s2ShoY5QrG6XVV9T7qW4TtlzJxJRRj7nubDf9sgt2oqQR8QAthKNR2uXlP5OjDZMSFv34hZyTyh8Rk8jgIJW07T8h2%2FzzYTxhqa7HMbprSEnrNM6REkn51EruOoSuxsPu%2F4jUTpRdmps0sLUJp326t04HrpRApGRVY8AeS4C90px5dpcKfFaZ%2B3isfhYS4UTIJAYLsO4HMA54lYYwQWgdSXYveLGLrnzsp%2BDmt0tquaLJU%2B0VX9rvvNTom80l8OtefnO8AdNY37DnfksMOzErnnG1Y1LXOqSPpmt3NJhapICKnonZpsq%2FQ83S2Mazw6B4TfWg9v6U4%2BymfCifiDpFS7fXPCe7T8yfU7ePnM93od3T2OjnfNpwkde4S32n4k%2Fr7hsI6rnNwjfxVhLq27vZk%2FKJvcxChf9CuZtsyembsXWSpmhbi1Tv57uGENA8LgnBGS6H818bW6aHc2udStNeHlK0pGFzvUTycY6ec4w6qfOyQY6pgHxIBWw%2FbTiSw5e0grGdfEdeut4I79H4EPyAXHjC4n30qRjFDgaSK%2BKup63lUqumHZNCXsao5xe%2FATsY4637p9cxKERc78cCJ2iwu%2FqJvMKYTo63xS80tKM%2BB7WmcouGEwLTODJgXL5HDaoIDbSL43UXIwjTK5kL%2BdjBVxv4QzmC%2Blvunr4cX8CXGb9iDyZJ%2Fg7G8nQ5iESIxwR5DJ%2FOxw5pINo%2BgUm&X-Amz-Signature=172a2c6282a385ec5fc02495af0a7c4fdb7749fb9d0fa0c3fc36e68737646f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYJBG5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1NqY1muZzSskiCSmw6ZDC%2BSlz5fYtJN0PQ1dntpzfyAiAHRX5VLO%2F%2BNAe4LF8evLQyXcVhtPVQ9UOTKpMHUpEgQSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMJUGt9n4AZvMxuip3KtwDpn9mIg1zopMJRb5itCkFWEU%2FsnC4PMmXyvAGOe8rHhkowHj5%2FaBfkQIkCBsZleulfimBaz%2FexjDYrQBnOZ4TcNTN%2BovGRICWpbKVN8%2FIaKQ7k5R2PH3s4dCWEeH2Qz3O9ddZuzsTSFt4vDv3OB71s2ShoY5QrG6XVV9T7qW4TtlzJxJRRj7nubDf9sgt2oqQR8QAthKNR2uXlP5OjDZMSFv34hZyTyh8Rk8jgIJW07T8h2%2FzzYTxhqa7HMbprSEnrNM6REkn51EruOoSuxsPu%2F4jUTpRdmps0sLUJp326t04HrpRApGRVY8AeS4C90px5dpcKfFaZ%2B3isfhYS4UTIJAYLsO4HMA54lYYwQWgdSXYveLGLrnzsp%2BDmt0tquaLJU%2B0VX9rvvNTom80l8OtefnO8AdNY37DnfksMOzErnnG1Y1LXOqSPpmt3NJhapICKnonZpsq%2FQ83S2Mazw6B4TfWg9v6U4%2BymfCifiDpFS7fXPCe7T8yfU7ePnM93od3T2OjnfNpwkde4S32n4k%2Fr7hsI6rnNwjfxVhLq27vZk%2FKJvcxChf9CuZtsyembsXWSpmhbi1Tv57uGENA8LgnBGS6H818bW6aHc2udStNeHlK0pGFzvUTycY6ec4w6qfOyQY6pgHxIBWw%2FbTiSw5e0grGdfEdeut4I79H4EPyAXHjC4n30qRjFDgaSK%2BKup63lUqumHZNCXsao5xe%2FATsY4637p9cxKERc78cCJ2iwu%2FqJvMKYTo63xS80tKM%2BB7WmcouGEwLTODJgXL5HDaoIDbSL43UXIwjTK5kL%2BdjBVxv4QzmC%2Blvunr4cX8CXGb9iDyZJ%2Fg7G8nQ5iESIxwR5DJ%2FOxw5pINo%2BgUm&X-Amz-Signature=3f57c1e12e5d9a4a2b227643f17d879f9ed656660ae9177f33c7171b8cbd0c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

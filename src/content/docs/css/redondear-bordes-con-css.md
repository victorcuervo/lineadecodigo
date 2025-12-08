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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKEXMZM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHISi9WBEdkDal%2B73zXz3z43Bg9BF3VIqLY%2FpySZlMRqAiAMEwt06bZc%2FLXWPKpShcr0yVBUqEQeJfknN6CC67i%2BfyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnggdunhIVqL%2FKNFGKtwDawDUzfayJmEBjo%2F38sGpfoz9TTcsBJRXtS%2Fv3FozEULhEBT28se2q6yrhBxZLjTX7QtBouMDeJPJe4eU10V%2FSNYyV84NtvPVMHOhXRRQwMO%2BxUXhJed%2Bo1aXUP%2BQCW1wj%2FQjzm3K491749FZUfF9gFafEGcnWWEPBXF7BlAFvPNuHkWMPcnmcT5O3VZ8UCAeDgRhDP1wrBAeCUtkM%2FnNtbq61v4m4WPVIDuTL9CWCU2KmiTVr38QxV80DSX4AID6QS7yCVLLmQNpcEiQcI7ilGzKLYZvCnDaL6rzlouy4U0mFcjMkLQXLRF4Il5DCiwpPGWH%2F01f%2F3T4sxAA95bp59qTQAJ30nPC3dqwld6nJp37L0eqt0fy1o4j3y5UhOA2HYiiIKKdTPZzLt2oZzoVMKZftwNRtu8nt1NqpCZejzdxPPHTslmgNgfeFamRcwSgbTpng9hYJdPoWpEFnvRw76UdKvF5pro3sWVJDDRZlzmPn0GX94HhcYvBSbpzd9ZxTkA65tSpyfsciXaSf54JyPb%2FRV2MosjfM725R1F2UEkPPZQOLfGJpjbnW52FmoEAYON48Jtuy2MSxRQ0FWBKHkxWZx%2FsdHbM7VAuEI9mkSFahiKHl3uapPSGMCQw3JTZyQY6pgEf5SM2aKJvPMGEhLf%2BVCxDD30cYihsH9b1GueLp209xmu1luPqI6dqag1g%2FrxuwViMM18APtYvQ12bZKWk3Egs88mg5wBuVWoueK6yksxpYPeF1wFlytvEDJuqgWnE3S9gN9aW8qJgL7LWSYm7RA5NYAD8NW2pr66S7KvoB7RqGtZ154UCe2hIdurx2AbzJ4Rxxt2WiRirvFcMriWaX7UNI4e21xzx&X-Amz-Signature=70cf35ab63641ed8a25c957227c1051fd50f171c2a59ae1b3c97f3fbde758ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKEXMZM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHISi9WBEdkDal%2B73zXz3z43Bg9BF3VIqLY%2FpySZlMRqAiAMEwt06bZc%2FLXWPKpShcr0yVBUqEQeJfknN6CC67i%2BfyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnggdunhIVqL%2FKNFGKtwDawDUzfayJmEBjo%2F38sGpfoz9TTcsBJRXtS%2Fv3FozEULhEBT28se2q6yrhBxZLjTX7QtBouMDeJPJe4eU10V%2FSNYyV84NtvPVMHOhXRRQwMO%2BxUXhJed%2Bo1aXUP%2BQCW1wj%2FQjzm3K491749FZUfF9gFafEGcnWWEPBXF7BlAFvPNuHkWMPcnmcT5O3VZ8UCAeDgRhDP1wrBAeCUtkM%2FnNtbq61v4m4WPVIDuTL9CWCU2KmiTVr38QxV80DSX4AID6QS7yCVLLmQNpcEiQcI7ilGzKLYZvCnDaL6rzlouy4U0mFcjMkLQXLRF4Il5DCiwpPGWH%2F01f%2F3T4sxAA95bp59qTQAJ30nPC3dqwld6nJp37L0eqt0fy1o4j3y5UhOA2HYiiIKKdTPZzLt2oZzoVMKZftwNRtu8nt1NqpCZejzdxPPHTslmgNgfeFamRcwSgbTpng9hYJdPoWpEFnvRw76UdKvF5pro3sWVJDDRZlzmPn0GX94HhcYvBSbpzd9ZxTkA65tSpyfsciXaSf54JyPb%2FRV2MosjfM725R1F2UEkPPZQOLfGJpjbnW52FmoEAYON48Jtuy2MSxRQ0FWBKHkxWZx%2FsdHbM7VAuEI9mkSFahiKHl3uapPSGMCQw3JTZyQY6pgEf5SM2aKJvPMGEhLf%2BVCxDD30cYihsH9b1GueLp209xmu1luPqI6dqag1g%2FrxuwViMM18APtYvQ12bZKWk3Egs88mg5wBuVWoueK6yksxpYPeF1wFlytvEDJuqgWnE3S9gN9aW8qJgL7LWSYm7RA5NYAD8NW2pr66S7KvoB7RqGtZ154UCe2hIdurx2AbzJ4Rxxt2WiRirvFcMriWaX7UNI4e21xzx&X-Amz-Signature=e387fcd1da19e6a083361785dfaabfcf912a51c09fcb6d7963939d08bb210a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

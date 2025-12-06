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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SABVGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSVE84hhZBjX1cz6MmnnmbHnI22tYUEk%2FG2l%2FHsnMrAIgVjlGw5q1yadPsnlNYWXUFwOoWYncOG91NMgudldFS2gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMyxTmaOEdT0sA1XDircA83lnzr8vx0ejeQsW6DMyTq9QRGaBdYADyx%2FcXd%2ByDddxIH8eYA03T44bP5II2ixAJWWAgHrbai9x6DbWmqKChrCc5WOXe8YgJRirGaB7Lj6nwZlI21xDyl%2FUkcr0Q%2BGHnLmySTzOt1QB239wbcD8vj%2FwgsgMqxdxyHlepng5zq1VutgF5RQsbzYshD6GNP9vHS00oqhIjftT3V16VkIuDYQpp%2BDC27ohiGTpUeh3WH%2FgcWcqlpGvkNRPUaQjzod2f%2FYix0mWi5oJemBauav7%2Fj9K9Y5p1gbz4QwuZ6o895lgLFZ9EHwj2x41mp0evsdAM%2Fesl5mMRPbXnSxb%2B6ZQQr1x7ul0ZjvMO13R0dct5B%2BiQD1vqz%2FvPdu3a1wg%2FXToZMdus%2Fv9P8mqmBC9WaVSf94BBIFR7zulF1OWTR1gva8uMqIuqLk7RWdg81vjufTmqAD6%2BrFDid2EopS4q5esZvStahF3BwiPSGSi4b2vOS1dal3Fj4EmZZa5qtDV4fqMvwat9ehPgJS90hXW3eeURazEVKXQ40PniOK%2BR11aDxC6fAcTDceExsESgWutvGaPN3Kqp719WnMzpkbGGM1%2Fj2f85gy5sC3vM54ahm4WeTJ1tqXWJGPvvSsIATVMI%2Frz8kGOqUByDIxkJAO2XuOI7ArH%2BXLb1e2tsaATznXlyMWryfjtDXb%2BKUD%2BOKjbGmabmA%2Fc4Ng8PbdbKDbhv5c9vbSwqBEgO7rom8F1cTMiXVQnpG6tfRNIcbuohktj314jJBPdUTHSrgdBgKjw%2B3qWsGYgi8HLQgc9Vzp3GvGOk1nJEJCojFItD5ayt1yq9M%2FbtckUJyrKd7jK4Qvx1DTWBdtDyDc%2Biko9wVQ&X-Amz-Signature=51b4bd93bda86d3986cb8cbf2dd0837b070ad1c545d6c9bb2e4361b55b65f9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SABVGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSVE84hhZBjX1cz6MmnnmbHnI22tYUEk%2FG2l%2FHsnMrAIgVjlGw5q1yadPsnlNYWXUFwOoWYncOG91NMgudldFS2gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMyxTmaOEdT0sA1XDircA83lnzr8vx0ejeQsW6DMyTq9QRGaBdYADyx%2FcXd%2ByDddxIH8eYA03T44bP5II2ixAJWWAgHrbai9x6DbWmqKChrCc5WOXe8YgJRirGaB7Lj6nwZlI21xDyl%2FUkcr0Q%2BGHnLmySTzOt1QB239wbcD8vj%2FwgsgMqxdxyHlepng5zq1VutgF5RQsbzYshD6GNP9vHS00oqhIjftT3V16VkIuDYQpp%2BDC27ohiGTpUeh3WH%2FgcWcqlpGvkNRPUaQjzod2f%2FYix0mWi5oJemBauav7%2Fj9K9Y5p1gbz4QwuZ6o895lgLFZ9EHwj2x41mp0evsdAM%2Fesl5mMRPbXnSxb%2B6ZQQr1x7ul0ZjvMO13R0dct5B%2BiQD1vqz%2FvPdu3a1wg%2FXToZMdus%2Fv9P8mqmBC9WaVSf94BBIFR7zulF1OWTR1gva8uMqIuqLk7RWdg81vjufTmqAD6%2BrFDid2EopS4q5esZvStahF3BwiPSGSi4b2vOS1dal3Fj4EmZZa5qtDV4fqMvwat9ehPgJS90hXW3eeURazEVKXQ40PniOK%2BR11aDxC6fAcTDceExsESgWutvGaPN3Kqp719WnMzpkbGGM1%2Fj2f85gy5sC3vM54ahm4WeTJ1tqXWJGPvvSsIATVMI%2Frz8kGOqUByDIxkJAO2XuOI7ArH%2BXLb1e2tsaATznXlyMWryfjtDXb%2BKUD%2BOKjbGmabmA%2Fc4Ng8PbdbKDbhv5c9vbSwqBEgO7rom8F1cTMiXVQnpG6tfRNIcbuohktj314jJBPdUTHSrgdBgKjw%2B3qWsGYgi8HLQgc9Vzp3GvGOk1nJEJCojFItD5ayt1yq9M%2FbtckUJyrKd7jK4Qvx1DTWBdtDyDc%2Biko9wVQ&X-Amz-Signature=8fbde46191a399d7fa83f702ea734ee8226929f98293af9811e794e16d9bb356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

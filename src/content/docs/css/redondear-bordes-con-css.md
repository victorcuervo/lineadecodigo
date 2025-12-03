---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOW2635%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEQNqOJKULoiPs9%2FeZ3qmp%2F%2FVmqtXFc1HisGCf7oMH2lAiEAlJb%2BuZZwFBXbxGLKCWUDihXHcKdkW6rl%2BnDKkNSTvu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK8CEQ4snEWmYOHl7SrcA4%2F74qqcx4owv7KkBDHwXjCc0RZ1%2BStAumzBXASu4e78OelBxZStO%2FS3REd6rAdOQC8lWAIR9sR4ivI%2FCK4eijSR%2FL3UV5rbl55QXfBiFiNDJ2hDQ5O1IRiAnzdGu2JLYzUEzwWXcGIovp8u76uHTe0MiBAfYW0HPLaq8kipQGEmsD7Ji7cpvwUlVlbu0fqZC6zoYwzJIzqGDS1cuGnrmG1kpW0oJase6SeRgPMYavxNDru%2F%2FwNxbNPdhULojUejoAAQhKckXKDfhcqghV70e05ybAIMwEIgw7MK44GhUzSEjic2dXFXOQvyFGIIFZ5X6yZFRtGFBpp%2BXRE6G%2BvNtgdY5zBDdKkI%2FPw5SLrCfLW6ekIERGo%2FYVXvi43gc7YfYAAsWudkXtkdy6J64Blhm3VxBf2Yi35ymh0p5eyM%2Bn6EyTU0XtBQawhpuqFZYioSaVqE87t7Z%2BoWh26OOWVev0PbZprNO4bxiduxQ1t5KZG%2Frhjm9nW7gyGW%2BnA%2FCok%2FyzE1rDpzDIth5MFATF0kZelmlzrBC63ACam73wvRKz9XAQgybR2SxZGGnWNjNMoyfENRb9sVRRa3H%2BytjiElyfQ4gXjm3bt02GWFzrlDQ%2FxRWwW9UftfvsXf95c2MJHdwskGOqUBqes96ruaDmPcIw3opWw35ADvhhSPUMT2ci7w25TG32Am96%2B7CzfJb0GXXhOGGKgDpBsH0wcTsQzJmq%2FVBjogdbDj0j8LpSGOfIuRM1WD6R1EJi%2FIjezGIvNnjEGVmdp%2FlauRDD4Ld9WHKzXbOuoeE01exnm9vEH7aMJJJRgzK1ZNvX4ovehH84Q0dVzXwuZuO5t5f3s4GHFq6rHK1uZF3qTKLLcR&X-Amz-Signature=4d5769acf01e54d97d1050a43724bbbd795c90750c6024542cc4caf5b6ab90bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOW2635%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEQNqOJKULoiPs9%2FeZ3qmp%2F%2FVmqtXFc1HisGCf7oMH2lAiEAlJb%2BuZZwFBXbxGLKCWUDihXHcKdkW6rl%2BnDKkNSTvu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK8CEQ4snEWmYOHl7SrcA4%2F74qqcx4owv7KkBDHwXjCc0RZ1%2BStAumzBXASu4e78OelBxZStO%2FS3REd6rAdOQC8lWAIR9sR4ivI%2FCK4eijSR%2FL3UV5rbl55QXfBiFiNDJ2hDQ5O1IRiAnzdGu2JLYzUEzwWXcGIovp8u76uHTe0MiBAfYW0HPLaq8kipQGEmsD7Ji7cpvwUlVlbu0fqZC6zoYwzJIzqGDS1cuGnrmG1kpW0oJase6SeRgPMYavxNDru%2F%2FwNxbNPdhULojUejoAAQhKckXKDfhcqghV70e05ybAIMwEIgw7MK44GhUzSEjic2dXFXOQvyFGIIFZ5X6yZFRtGFBpp%2BXRE6G%2BvNtgdY5zBDdKkI%2FPw5SLrCfLW6ekIERGo%2FYVXvi43gc7YfYAAsWudkXtkdy6J64Blhm3VxBf2Yi35ymh0p5eyM%2Bn6EyTU0XtBQawhpuqFZYioSaVqE87t7Z%2BoWh26OOWVev0PbZprNO4bxiduxQ1t5KZG%2Frhjm9nW7gyGW%2BnA%2FCok%2FyzE1rDpzDIth5MFATF0kZelmlzrBC63ACam73wvRKz9XAQgybR2SxZGGnWNjNMoyfENRb9sVRRa3H%2BytjiElyfQ4gXjm3bt02GWFzrlDQ%2FxRWwW9UftfvsXf95c2MJHdwskGOqUBqes96ruaDmPcIw3opWw35ADvhhSPUMT2ci7w25TG32Am96%2B7CzfJb0GXXhOGGKgDpBsH0wcTsQzJmq%2FVBjogdbDj0j8LpSGOfIuRM1WD6R1EJi%2FIjezGIvNnjEGVmdp%2FlauRDD4Ld9WHKzXbOuoeE01exnm9vEH7aMJJJRgzK1ZNvX4ovehH84Q0dVzXwuZuO5t5f3s4GHFq6rHK1uZF3qTKLLcR&X-Amz-Signature=ac6ea578fc73548fa56ecf6779946bd93925826b17898a3118dd115346bc7bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

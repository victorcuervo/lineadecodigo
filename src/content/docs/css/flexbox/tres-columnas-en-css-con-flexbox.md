---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27NIECM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX2g70WujWZCrzVACNxFrEdTFiyyPI7p5eZyn4AtBaoAiABHJLy2YOFdLwuSD5V89XMvF2Q7NM8UA%2Ba%2FB5BYn%2BtNSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMs1%2Bh%2B9fxEdIkpn03KtwDrlbbTvqVYPZFy98KiISu5SNv9iZ4zAl%2BS0vVEIrJUuR3BdLiAeTtqBQX0d6Kg9I%2FXIXzqyDznhBhIg3UqsJoVlojGBeiST4LrQvSaAyEkVFYtbawzTEtk%2F2KgdEIr%2BbUOxop%2FyQHaPJae7yZb6uJHlyX7Z9rXCgrXVoU13qC0x4CDEHevdTbkOMotfrvu3Gwoka1uEIVzWKSs%2B778m7N%2BGrAPynon6P2Fox4bp%2B%2FFhUV5NWYb8aSvDFoXn7O3hQpbbYoxpP5e0i3pPtG4gTmHdEZ8BdGYZhmd%2B8UgkJ55qn9zjuAYBiSwSlWTNvMxdee69e9AHIj18vbIbrsQzTUKp7LViCKi4Nch78gvSRAxl1igdrH49%2FvD4X%2BpfzoS4oKZE6GONDR26q1XJ0rj2sS4cMGYtdAmYKLogOL3aDGi9MLVGz7w5aZwt42MZGjBWd%2B06gPzRUX81ACOdo6yKmWM2IQ7D7%2BIYR%2F%2FQZcDA6YqzxeYs7hfop8tmxGNrboMrfrdkfEG1%2Fu7dFf8DC%2BX0kLxLbXOanvsLvXGNXCCe3GpaMThbeDB1Q5mK1Ua5QIPbclleZpaFMMCSRtFSOP8MtuaVOnlv%2F6RYmKPzmeE0escFmGqeQGY%2BYyvBFPVNsw6KfOyQY6pgFjnDzFfXRIy%2B9MWknEkH4JxXFndLYb1JEArNWHKZ5vaNzBMr78pTBrk7NSt%2FhpwyH%2BgQzo6r7zBQG0My76wYOtK4NMhWXKf01d3aG1JF6yrtenqyexukUnVDJYIEGmFyuxWUJDv3Z7OCtlxCbncp8d9ycIlXDvk3XbN0A2lYoD0pjwkxuSrob4iaJSj54ADQUvxYgJY002nwiDaagHqPI2hpNEsWgz&X-Amz-Signature=f8e340f46f5738a8dd0b2c66b4f13da0721811aec5f594d3dac938065763de7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27NIECM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX2g70WujWZCrzVACNxFrEdTFiyyPI7p5eZyn4AtBaoAiABHJLy2YOFdLwuSD5V89XMvF2Q7NM8UA%2Ba%2FB5BYn%2BtNSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMs1%2Bh%2B9fxEdIkpn03KtwDrlbbTvqVYPZFy98KiISu5SNv9iZ4zAl%2BS0vVEIrJUuR3BdLiAeTtqBQX0d6Kg9I%2FXIXzqyDznhBhIg3UqsJoVlojGBeiST4LrQvSaAyEkVFYtbawzTEtk%2F2KgdEIr%2BbUOxop%2FyQHaPJae7yZb6uJHlyX7Z9rXCgrXVoU13qC0x4CDEHevdTbkOMotfrvu3Gwoka1uEIVzWKSs%2B778m7N%2BGrAPynon6P2Fox4bp%2B%2FFhUV5NWYb8aSvDFoXn7O3hQpbbYoxpP5e0i3pPtG4gTmHdEZ8BdGYZhmd%2B8UgkJ55qn9zjuAYBiSwSlWTNvMxdee69e9AHIj18vbIbrsQzTUKp7LViCKi4Nch78gvSRAxl1igdrH49%2FvD4X%2BpfzoS4oKZE6GONDR26q1XJ0rj2sS4cMGYtdAmYKLogOL3aDGi9MLVGz7w5aZwt42MZGjBWd%2B06gPzRUX81ACOdo6yKmWM2IQ7D7%2BIYR%2F%2FQZcDA6YqzxeYs7hfop8tmxGNrboMrfrdkfEG1%2Fu7dFf8DC%2BX0kLxLbXOanvsLvXGNXCCe3GpaMThbeDB1Q5mK1Ua5QIPbclleZpaFMMCSRtFSOP8MtuaVOnlv%2F6RYmKPzmeE0escFmGqeQGY%2BYyvBFPVNsw6KfOyQY6pgFjnDzFfXRIy%2B9MWknEkH4JxXFndLYb1JEArNWHKZ5vaNzBMr78pTBrk7NSt%2FhpwyH%2BgQzo6r7zBQG0My76wYOtK4NMhWXKf01d3aG1JF6yrtenqyexukUnVDJYIEGmFyuxWUJDv3Z7OCtlxCbncp8d9ycIlXDvk3XbN0A2lYoD0pjwkxuSrob4iaJSj54ADQUvxYgJY002nwiDaagHqPI2hpNEsWgz&X-Amz-Signature=4faabde7e1599a44bdc7c19fec436586af66186dd752d42f42e3f5dd871393d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


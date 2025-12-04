---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUGNPVA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICMt5OzDAuNZMelWhv9xiUCb1sG1Q%2FpHdAEpEg1lYcVtAiB9%2BJJhbUyjbqqFhe%2F5ww%2F5CWdiR3yREt%2Fg0y2h2u294Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM321%2FF1%2FybLQ6Z7DGKtwDW8trJYpEwOktRsZqQT5waTePSKtNV9SDWt8erYMZkplFiME1CrfK%2FJjTZuUCBE76YQQG0xtpTWzSk1Gi6KDedDacxzkEuGNmal%2F8BadIl6Y3xLWC%2Bo7yC8O1tPRKb5zejGLcM3TJHux8DHqYI4vfNKu0GM%2BpV1u%2BnZrTJkvTyrKk3rDd9vuESibanSO55wMN3HmjKDzdkNmeDIPr3bfTlBAwah9px6e1trmQ%2FRiQ%2FwWJkC6IoXmhmm31LKrFtu76sBcCK%2BB2ggSvKH25F5YpnOMRa%2BXIOmeMbtb4GMb8T2qGWaXZhv5lhlvsib5Oo54hLsErm100UoIEgZvodeAlj4kI3GpTYM%2BZTQVM5jcvpEIayp3aSoWAH6jTmVum7cmp%2BDv%2BFnljV9MMQcnzvQOAOm4krq1vQDTJ3UoCZ%2FBQleQcPp3XvTeKXGqAgPPi%2Bqx17It93NQAG3fglVH%2BmbJw91L6fxytGzfZfKbT0AgaHMiBQD3p0WBFOMCQe78BT%2Flw5vmXTE0h%2FtkKtHmbThWQm7nEWHhoiry7SH%2BPHl43LapDvdxJEVp93N%2B%2BiLECiMoqjzCM5LW89%2FNVGQOwn2%2FqD%2F%2F2sv0uVSE1mgMYrCyXq5dGyyOZS%2BjmIDFOnWwws7XDyQY6pgFimA35Bn9MsI2H9CJVF11%2Fl94TzEAfl87qIm8DGQv065EV0kU3DlnTsOrzUE24QJxUKT1SuVh0LzMUBLXZyZMoGBAhZjbexrpJzhvcZ2QOGdTeOEd8p1h3%2BcmAMFcxiXrYGSnlssMAw6oupz5Jio0vttIiSEyThKQjCpzZ2AENyxOLP%2BJDw3y%2B38zGQVaCIw37RcfMyD%2BPLOILAclBd%2B2B7pcyfQEi&X-Amz-Signature=618903d10c4608eb977acb9fd3ea3005c5b70ed0c30c81592213c2668769bfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUGNPVA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICMt5OzDAuNZMelWhv9xiUCb1sG1Q%2FpHdAEpEg1lYcVtAiB9%2BJJhbUyjbqqFhe%2F5ww%2F5CWdiR3yREt%2Fg0y2h2u294Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM321%2FF1%2FybLQ6Z7DGKtwDW8trJYpEwOktRsZqQT5waTePSKtNV9SDWt8erYMZkplFiME1CrfK%2FJjTZuUCBE76YQQG0xtpTWzSk1Gi6KDedDacxzkEuGNmal%2F8BadIl6Y3xLWC%2Bo7yC8O1tPRKb5zejGLcM3TJHux8DHqYI4vfNKu0GM%2BpV1u%2BnZrTJkvTyrKk3rDd9vuESibanSO55wMN3HmjKDzdkNmeDIPr3bfTlBAwah9px6e1trmQ%2FRiQ%2FwWJkC6IoXmhmm31LKrFtu76sBcCK%2BB2ggSvKH25F5YpnOMRa%2BXIOmeMbtb4GMb8T2qGWaXZhv5lhlvsib5Oo54hLsErm100UoIEgZvodeAlj4kI3GpTYM%2BZTQVM5jcvpEIayp3aSoWAH6jTmVum7cmp%2BDv%2BFnljV9MMQcnzvQOAOm4krq1vQDTJ3UoCZ%2FBQleQcPp3XvTeKXGqAgPPi%2Bqx17It93NQAG3fglVH%2BmbJw91L6fxytGzfZfKbT0AgaHMiBQD3p0WBFOMCQe78BT%2Flw5vmXTE0h%2FtkKtHmbThWQm7nEWHhoiry7SH%2BPHl43LapDvdxJEVp93N%2B%2BiLECiMoqjzCM5LW89%2FNVGQOwn2%2FqD%2F%2F2sv0uVSE1mgMYrCyXq5dGyyOZS%2BjmIDFOnWwws7XDyQY6pgFimA35Bn9MsI2H9CJVF11%2Fl94TzEAfl87qIm8DGQv065EV0kU3DlnTsOrzUE24QJxUKT1SuVh0LzMUBLXZyZMoGBAhZjbexrpJzhvcZ2QOGdTeOEd8p1h3%2BcmAMFcxiXrYGSnlssMAw6oupz5Jio0vttIiSEyThKQjCpzZ2AENyxOLP%2BJDw3y%2B38zGQVaCIw37RcfMyD%2BPLOILAclBd%2B2B7pcyfQEi&X-Amz-Signature=a0031c983af578360a03a6eec8d80aa01144038af076f8b177cd36068e3c2f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


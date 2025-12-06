---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBGEXVO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoukq65EQLzvpeFRrHcJvNhgfPDO80vffLQ%2BSWj7DCfwIgGwFRuWexhD1lc3tDuQYeSufY%2BBO6pHKHP%2F1oyzuZwxEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA1Or61BnlRoNnXUqSrcAwOeOTRDZlUh3PDmHDLdhi8H6Tvzh1Um8RjRs8wnwrE0SJ3speqL1MPAUrFbi3lpklT0aj%2FFJiMUO1xNgnh7ZtJYRH1XazzM8eMupXTMEp21e6Dw0jSHlmUKi1ORy5ee4u4xLTSGWqm%2BfomofTD5ljpXhB4ayxR9PvFgqqQCYL3ofUG8jkc0LiqrADETtfUYyLT0LFaqWrm10pO3kTfb3hsQNULLhOTP6xgaWM%2BHG1xAqzQThbjjxGe8twWYrR2hzjifG2yLm3JjlRzMvWQskp3QHn%2FVL0Ngr7MP7Xg9C%2FAeUDjW1pUjXeDcuZEKI3p1z%2BuEE%2Bt5wpBnturxEpXBv4Fg8TzpZzCS60IxvDUwC9fbV6aTVuihnd0yz3VioIeI6%2B0mmsgzjJrml06ThWqpQR4eW1S30ET61zUgh5gnfMaJiONy09JFRjEfiA6nLzWZaepaW1XCo0dS2hTg6IvLy%2FynG4jeRAdkCbBKDCwaaOuFkJx3dzOqWewvCn96D7A4R1914FH8HWWvrCB19QwfC8atQSOB6iynGahLvGeyynCupdvHPxPJ0ea7v8lw%2BYkZ0t83QQFuTaGHEUTbZaNJ7%2BIbfLNOjl2gZg2htlqyS%2FXWwtsz8iVfioUb%2BiUuMPTrz8kGOqUBCgrxZh8T4%2B4p7pBZregX5nSS0V7YyKD3yISJnMxXS8VOPr8y7BD3HvFbDMVMt1y3MPgfGPWMRNb3BzMmtvWR0ghYx65HljnNlbQ4Dipgz6eKQaV9Qptmwvml5JuaULY7Y1jgXsJ%2BWRzLvprm50Z6yrF%2BTl6R3LGGVDVKdIT5AEC3ICdGPNVATeUCjjnvyF%2BzK0Cb0wOuPLXWgN0UzDz0X0VagTsu&X-Amz-Signature=d23cb32d2eb1f38cc38f0162c8d18ed32f1fc1eb6ebd2fc70a6677361dba6285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBGEXVO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoukq65EQLzvpeFRrHcJvNhgfPDO80vffLQ%2BSWj7DCfwIgGwFRuWexhD1lc3tDuQYeSufY%2BBO6pHKHP%2F1oyzuZwxEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA1Or61BnlRoNnXUqSrcAwOeOTRDZlUh3PDmHDLdhi8H6Tvzh1Um8RjRs8wnwrE0SJ3speqL1MPAUrFbi3lpklT0aj%2FFJiMUO1xNgnh7ZtJYRH1XazzM8eMupXTMEp21e6Dw0jSHlmUKi1ORy5ee4u4xLTSGWqm%2BfomofTD5ljpXhB4ayxR9PvFgqqQCYL3ofUG8jkc0LiqrADETtfUYyLT0LFaqWrm10pO3kTfb3hsQNULLhOTP6xgaWM%2BHG1xAqzQThbjjxGe8twWYrR2hzjifG2yLm3JjlRzMvWQskp3QHn%2FVL0Ngr7MP7Xg9C%2FAeUDjW1pUjXeDcuZEKI3p1z%2BuEE%2Bt5wpBnturxEpXBv4Fg8TzpZzCS60IxvDUwC9fbV6aTVuihnd0yz3VioIeI6%2B0mmsgzjJrml06ThWqpQR4eW1S30ET61zUgh5gnfMaJiONy09JFRjEfiA6nLzWZaepaW1XCo0dS2hTg6IvLy%2FynG4jeRAdkCbBKDCwaaOuFkJx3dzOqWewvCn96D7A4R1914FH8HWWvrCB19QwfC8atQSOB6iynGahLvGeyynCupdvHPxPJ0ea7v8lw%2BYkZ0t83QQFuTaGHEUTbZaNJ7%2BIbfLNOjl2gZg2htlqyS%2FXWwtsz8iVfioUb%2BiUuMPTrz8kGOqUBCgrxZh8T4%2B4p7pBZregX5nSS0V7YyKD3yISJnMxXS8VOPr8y7BD3HvFbDMVMt1y3MPgfGPWMRNb3BzMmtvWR0ghYx65HljnNlbQ4Dipgz6eKQaV9Qptmwvml5JuaULY7Y1jgXsJ%2BWRzLvprm50Z6yrF%2BTl6R3LGGVDVKdIT5AEC3ICdGPNVATeUCjjnvyF%2BzK0Cb0wOuPLXWgN0UzDz0X0VagTsu&X-Amz-Signature=c00d0d24b5ce3686035ed18e010e2b9d2a0804254bcd5a993058bcaacbf309b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


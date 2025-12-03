---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORSZCKF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEnUnVqtE5d0ZxRoGj3%2F344yyKTAAUjQ227JpubIoE76AiEA0TF1n7Zjoa%2BV36S6qohM4qJsf7zGylDptC0eywsb4x0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHi%2FRPMiWZMGw0IoZyrcAwz%2BsjTYdfDJVGyViuVeMHsb8bLzwFyuwA5bbnLh8WkWOllw%2Btesdb4rEfFWwO5YFAWA46VQiusIK3BeSKP7VwTnLAbjJVsIYzqhVahxGWbrzukxeck8PI4JCPD%2FSaoQbC7wyDqL%2B3D4h6VEBfin68toO7KGkMljABCS3WGhsSdG4v3MDi0N%2FAa%2BKtZWgE1k3KonUn%2Ff%2FfWGVWEfpKYlcDyXpgVV3z1ib1yS07OBQcXLV2yyFFlajpeTwuhKUAb3IXhOVsF2aKhj8roOcAx2JzNi9tWJdLeFpDgIQUjs3xVSiSl00CalcLURZqXBwnCV2zGHpXOhU0d1NY5lR8KDnlebw3zotUd2IupgUS0SNrffl072Q4Ty72HtGptNdTArE9kklczetB2U81IZSjeliZnanxYA7dqu283sc6p3XtEddPMrPSJ9VQF%2ByUIE6rIaR8rYQeoBxaftlcao5KkJZHxP8fvxiLaFnC2zK%2FBezwRGQFkimWRCWsBSdKy4X5%2F2vF0seAZbnrHBA0I8cu9BlERhcPz1Cw7Nen4b1q9boR6e0r8l9T65TVUtw3C7S930cbSlUSs9q9GO1nv3S70%2FnvYfhkq8764twzL1DLcjYquY7i6rEJ9lgyB86BmmMMb1v8kGOqUBcpkO6BnLlYHuJFDDTVM%2BOTzfmSW53YAK1nmtG7GmvXyhpmz0p%2BCYHnYaYBYulBqVQaaXhvWaM9DUiy05P38tZIbOq4yC98o2h8qodQu0fsxe1ydBWuKK7N1K467jgdwZa98d59VKzEEVJnywKJ%2Bx8qxZULVS8ISzZJHYgoNa98NQzsbSV2FO%2FBcjOOqSD0LbiCQ3Q2V9Vp%2F1CoyPJh6g61jtDa4r&X-Amz-Signature=297d8f31dbd16712c697e1c9dbbd2270a4c93e3c62d7c1cd68571ad8954fbc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORSZCKF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEnUnVqtE5d0ZxRoGj3%2F344yyKTAAUjQ227JpubIoE76AiEA0TF1n7Zjoa%2BV36S6qohM4qJsf7zGylDptC0eywsb4x0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHi%2FRPMiWZMGw0IoZyrcAwz%2BsjTYdfDJVGyViuVeMHsb8bLzwFyuwA5bbnLh8WkWOllw%2Btesdb4rEfFWwO5YFAWA46VQiusIK3BeSKP7VwTnLAbjJVsIYzqhVahxGWbrzukxeck8PI4JCPD%2FSaoQbC7wyDqL%2B3D4h6VEBfin68toO7KGkMljABCS3WGhsSdG4v3MDi0N%2FAa%2BKtZWgE1k3KonUn%2Ff%2FfWGVWEfpKYlcDyXpgVV3z1ib1yS07OBQcXLV2yyFFlajpeTwuhKUAb3IXhOVsF2aKhj8roOcAx2JzNi9tWJdLeFpDgIQUjs3xVSiSl00CalcLURZqXBwnCV2zGHpXOhU0d1NY5lR8KDnlebw3zotUd2IupgUS0SNrffl072Q4Ty72HtGptNdTArE9kklczetB2U81IZSjeliZnanxYA7dqu283sc6p3XtEddPMrPSJ9VQF%2ByUIE6rIaR8rYQeoBxaftlcao5KkJZHxP8fvxiLaFnC2zK%2FBezwRGQFkimWRCWsBSdKy4X5%2F2vF0seAZbnrHBA0I8cu9BlERhcPz1Cw7Nen4b1q9boR6e0r8l9T65TVUtw3C7S930cbSlUSs9q9GO1nv3S70%2FnvYfhkq8764twzL1DLcjYquY7i6rEJ9lgyB86BmmMMb1v8kGOqUBcpkO6BnLlYHuJFDDTVM%2BOTzfmSW53YAK1nmtG7GmvXyhpmz0p%2BCYHnYaYBYulBqVQaaXhvWaM9DUiy05P38tZIbOq4yC98o2h8qodQu0fsxe1ydBWuKK7N1K467jgdwZa98d59VKzEEVJnywKJ%2Bx8qxZULVS8ISzZJHYgoNa98NQzsbSV2FO%2FBcjOOqSD0LbiCQ3Q2V9Vp%2F1CoyPJh6g61jtDa4r&X-Amz-Signature=0214d1b3e43058363c1b2107d53138fa5ffbaed81b603e16e242e8d2ac038a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


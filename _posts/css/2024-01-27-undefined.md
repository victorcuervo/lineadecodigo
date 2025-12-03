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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTBMCUG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCnEOHEPozA%2FalpmpowGycEPO%2BVdQZXuv65zQJJna4PHwIhAME6PsYxWe%2Fyg4YL83CQvcKvDGd8YOUTVkWsIL4t6l3BKv8DCCsQABoMNjM3NDIzMTgzODA1IgzYWMk3NLrC6LXQtGwq3AN30knxQSQFbfHjRsDta0qnsyQQk1T3AqQzTkoAETR0WYLeSvQiOUEVOqYHOdqwi%2F%2B4rimE%2BNIoXZil2qw9%2B9M7zUKWLcP%2BHKqzymfooH0XfqMcXELdZ0KOKLDumvSyEPXRX2FHBDn%2F3AXMZZZNkhfcca%2Fg6h8p2%2FINAf7N2HWxtbPukNLHko%2FVVPiMP10PDZPM0gFMx2MIkmHQaoZ6Qs%2F9%2FfK0az6OsvSjJASd6vbkOJssb%2FAQMGjmaLnUZfuD8qQyeZ%2BwF6k7Ec9leazOh8jaGAq6HJiSWGufvmCIbC2lh0yjE33AkRKYNZOTmO9R0yuTG4Do1QdArhPO0OCDgKk%2B1KtUrZPiy%2F5HAeYl1fcUlUOUbm9QQRAioYZVljXnL0hgZ93ecElE10SywcRgAsOwvIkaf0DHvkWLjsVCvrvGSvUl0Q2%2BcfRoshJDS91IHMnv9UQi7yM9wLN0gSeYFXB%2BpP0cI6RUvk%2BovZLL5uxP8HkAFZ5%2FGO7o5%2F8287OhivOF12mAxbSKcjqLc7wlYQHig7NpGXNoVEPEpFnVO69EmFilXq3aqqElADdf%2Fe4Jll92v27EaztBCU5XBAAupb473EoO%2BbC8skbrzXlz9e1GqlWo5ouMHhsUrJzkIDDvk8DJBjqkAa1bGaOjzkQf9fGWxDjhIh0DrDE4f8iDl0BedewBqJYu7t3rSoMMTVlbWwVNRBrB75DyfYVl9LJNKD6kxLM%2BWpdtJVPLt03o4X3RUSSqG2mNK7q%2B9L564fu7OJYLyfYhuG66vOKb%2FRk%2FxaTZ1EoV6V8Q4Hbg0weyqD%2BlSKuXt6qde3MKlgxdnVuaDrAk0xK04xhuBF2VZYUEQzL2mRxm16%2FkU5Ni&X-Amz-Signature=b39a1f758fd283413b789de4ef3175e10a2c0d71bb9ce59edda4330f7475dce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTBMCUG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCnEOHEPozA%2FalpmpowGycEPO%2BVdQZXuv65zQJJna4PHwIhAME6PsYxWe%2Fyg4YL83CQvcKvDGd8YOUTVkWsIL4t6l3BKv8DCCsQABoMNjM3NDIzMTgzODA1IgzYWMk3NLrC6LXQtGwq3AN30knxQSQFbfHjRsDta0qnsyQQk1T3AqQzTkoAETR0WYLeSvQiOUEVOqYHOdqwi%2F%2B4rimE%2BNIoXZil2qw9%2B9M7zUKWLcP%2BHKqzymfooH0XfqMcXELdZ0KOKLDumvSyEPXRX2FHBDn%2F3AXMZZZNkhfcca%2Fg6h8p2%2FINAf7N2HWxtbPukNLHko%2FVVPiMP10PDZPM0gFMx2MIkmHQaoZ6Qs%2F9%2FfK0az6OsvSjJASd6vbkOJssb%2FAQMGjmaLnUZfuD8qQyeZ%2BwF6k7Ec9leazOh8jaGAq6HJiSWGufvmCIbC2lh0yjE33AkRKYNZOTmO9R0yuTG4Do1QdArhPO0OCDgKk%2B1KtUrZPiy%2F5HAeYl1fcUlUOUbm9QQRAioYZVljXnL0hgZ93ecElE10SywcRgAsOwvIkaf0DHvkWLjsVCvrvGSvUl0Q2%2BcfRoshJDS91IHMnv9UQi7yM9wLN0gSeYFXB%2BpP0cI6RUvk%2BovZLL5uxP8HkAFZ5%2FGO7o5%2F8287OhivOF12mAxbSKcjqLc7wlYQHig7NpGXNoVEPEpFnVO69EmFilXq3aqqElADdf%2Fe4Jll92v27EaztBCU5XBAAupb473EoO%2BbC8skbrzXlz9e1GqlWo5ouMHhsUrJzkIDDvk8DJBjqkAa1bGaOjzkQf9fGWxDjhIh0DrDE4f8iDl0BedewBqJYu7t3rSoMMTVlbWwVNRBrB75DyfYVl9LJNKD6kxLM%2BWpdtJVPLt03o4X3RUSSqG2mNK7q%2B9L564fu7OJYLyfYhuG66vOKb%2FRk%2FxaTZ1EoV6V8Q4Hbg0weyqD%2BlSKuXt6qde3MKlgxdnVuaDrAk0xK04xhuBF2VZYUEQzL2mRxm16%2FkU5Ni&X-Amz-Signature=9cb563dadac94970b4dac8ccb13fc3c682721406b5179a161d9d1f96ae46bd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


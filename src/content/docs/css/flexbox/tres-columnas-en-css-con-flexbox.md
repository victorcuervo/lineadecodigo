---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH4ICK24%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRR9oGfb2J0N11owNIxuem704Hd%2F50ZxmZWgwrh9%2FdcAiBD62rgTwUm0nan3hBCginfhTTuLM3Ld3GH6oDN0aTnpCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbY7vVADnV7%2FwXeQSKtwDZ%2FWgrEUwO%2BiGa36CRNCNi4jSE98K%2BDy6YmS5TML3GphYuLRzydQwZPIiQOKSNwoTZxhZRauGBkXCv9NcjtwsieSLaR5Vgd6jqWDtymSMoABI5Lgsqnl8MUSAAzkV962q00g3E6t5%2FrsuO6kNmOJ%2BmE6ho4Me9Zx%2BponV8%2FcK5jAK0BJajPxYB4SN5kF34keWGb0X1ZzO7DawGtLg76hKgP2zGZFQhz696IrJUoSVHUFNSipAJ%2FOp1KDFnHUEETvr6XbOJjGVBoOnmCkcG%2BM7M5aLtmBmuf28OrveYYOT7QxUAQLazEPnXbqq9NRMCpfOd9VfpKKKxpRx%2FAR8j4OzQLIG62CdAnvze5%2Fk41K9GfbVOlqnNWS23wE8z0mZZ6t%2Bg8MkhxD%2Fnt3VUmCgtWug72xdgCZkulQ4NZk9ViYjEcuwOrUQg4LbcoCn9tNlmYuEmLM7j3PlTvxuH37awnbQeFyV9zYsN7Gzo0lGGGcm%2FRAvmnr4TktFOMbQuyr8n7yDq65wMxasLi7OdTFv7qflDkM%2B3wytaqhYEwS6MaHWDYItjB1GFL5%2F1z6ehTDAQFNxKhx8IFoTJYjtqa81Ero8JjAUO9KCzMKahFdHLcDTH5axTkG82ReBXf4CaFAw05DbyQY6pgHeIBoGHXWcIk2oXxc1QuhYS6FgyniGH0nWJjtqwQhZau%2F5PjWtT9h7%2BLgyKdKFEl2c2l1G3%2BokhYSEn0ZJUsRrNfkeKztcBOiMQC14GGLckZiI8J80KxEl%2FuQdvFnAoUMMlIyohtra24L%2FF1EX5RR6j0Ca1ztq0c89uyRF0Ia4kQmiJNV2lioveQ01%2B2qgm4Djs%2FkwnLJHRn%2BZ7fRzh2hvUrdJORMy&X-Amz-Signature=2530191d0f913dd245078332ca77d91f31cade3e844672a1ff466e0ec4e83e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH4ICK24%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRR9oGfb2J0N11owNIxuem704Hd%2F50ZxmZWgwrh9%2FdcAiBD62rgTwUm0nan3hBCginfhTTuLM3Ld3GH6oDN0aTnpCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbY7vVADnV7%2FwXeQSKtwDZ%2FWgrEUwO%2BiGa36CRNCNi4jSE98K%2BDy6YmS5TML3GphYuLRzydQwZPIiQOKSNwoTZxhZRauGBkXCv9NcjtwsieSLaR5Vgd6jqWDtymSMoABI5Lgsqnl8MUSAAzkV962q00g3E6t5%2FrsuO6kNmOJ%2BmE6ho4Me9Zx%2BponV8%2FcK5jAK0BJajPxYB4SN5kF34keWGb0X1ZzO7DawGtLg76hKgP2zGZFQhz696IrJUoSVHUFNSipAJ%2FOp1KDFnHUEETvr6XbOJjGVBoOnmCkcG%2BM7M5aLtmBmuf28OrveYYOT7QxUAQLazEPnXbqq9NRMCpfOd9VfpKKKxpRx%2FAR8j4OzQLIG62CdAnvze5%2Fk41K9GfbVOlqnNWS23wE8z0mZZ6t%2Bg8MkhxD%2Fnt3VUmCgtWug72xdgCZkulQ4NZk9ViYjEcuwOrUQg4LbcoCn9tNlmYuEmLM7j3PlTvxuH37awnbQeFyV9zYsN7Gzo0lGGGcm%2FRAvmnr4TktFOMbQuyr8n7yDq65wMxasLi7OdTFv7qflDkM%2B3wytaqhYEwS6MaHWDYItjB1GFL5%2F1z6ehTDAQFNxKhx8IFoTJYjtqa81Ero8JjAUO9KCzMKahFdHLcDTH5axTkG82ReBXf4CaFAw05DbyQY6pgHeIBoGHXWcIk2oXxc1QuhYS6FgyniGH0nWJjtqwQhZau%2F5PjWtT9h7%2BLgyKdKFEl2c2l1G3%2BokhYSEn0ZJUsRrNfkeKztcBOiMQC14GGLckZiI8J80KxEl%2FuQdvFnAoUMMlIyohtra24L%2FF1EX5RR6j0Ca1ztq0c89uyRF0Ia4kQmiJNV2lioveQ01%2B2qgm4Djs%2FkwnLJHRn%2BZ7fRzh2hvUrdJORMy&X-Amz-Signature=9b0aaa1897fce4d7373ca82451b905ddedcb464ec213cce8e29464f25b2f2ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


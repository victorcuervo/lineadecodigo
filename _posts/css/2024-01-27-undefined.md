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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3T27XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAXsnGoi2QHw2HvQMDcRy7wZjUw4qVJZR%2FLPaRNXHowxAiBAgK3b%2BNC8gSl6vkITO2%2Ff%2BmolkT701fPPEwIn0ocqESr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvNW1XOXuUtxX2C2gKtwDWs5QniWBu3WrfJwstjvrGRFwm8dYrb2mFYgmwTKgs4l905yzDrDyjeLO9yPgEIj%2F%2BoVjYyylRlkLujQh%2Fvmai%2BIhyyQF%2Bs62WsaByTtkTtn%2FgULFtekyIHFVrMFGLg%2BsYxTmyQslCWhJ2qcu7CoKanvu%2B6jiEQb72PC%2FW2Kf9AoBA2eZMfW9pCZw3%2BmoB4ziCsExlh4Gdph1rDx1G1238dEZo0lck9UIFxlK5mDwmsG8zszREzjaZ%2BvkFLy%2B%2F6aS6Cehh6OWXVDloohBJCIMK%2B3svMEYEafAe8pDwMU2C2p%2BQGmyCHs%2BHOJpmfflK%2BZRudY1MeQBl6u2amuM1aiLEe5F%2Bpma%2F1rYaI71F6ETkA8HPPVwJbZJRtjxALuIg5IwBK%2BW9mXwp1kJKkQ2txlA27t%2FNf5D4Vluj9YlWC6t6jzW4X9nJT6C%2BqeuHFZLbyCA2xWC1WCv53%2F1F3iXtNisvKhfUGcX5JUoco1QN0ERmkx7ucmdIOxuohPBb7HhgNDrBcMYuCM354OiHmLxVwRycdZ%2BkBm7oEWsw4R4CysLMzQdP%2FczyBS%2Bm37Rs%2FgI82RP8l%2FN28RTpyC3Y6HsYGb03BrXSXJMjM3CXIdXwb0QDDMNYUh9t5zsz%2FqY2VIwzszAyQY6pgEVP%2FnjMWLIc%2BnXkkI8dVHNZdmK9iMQGGD28CgTQ8UJPK3pEwmRGRO7CMzCfpMSq0PZ%2BncSdk7R4uzKVUCKAO6tP0x%2BAaq97pHeGFN5g12Vg0z1IiOhiq1B%2FVymqxJ7W8wJpTj6zPFIbO8ba1vtnvD%2FwuCCvstDy5fHg122eeMrA6clvfhOk6VmtTUDpQYUurpNo0N3x17TJppEXzuwscpMgAKLzKty&X-Amz-Signature=0c4568ad6d9521cb2698ed7bc9f3eadbee3a1c85164ac6d28ff532e299a49aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3T27XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAXsnGoi2QHw2HvQMDcRy7wZjUw4qVJZR%2FLPaRNXHowxAiBAgK3b%2BNC8gSl6vkITO2%2Ff%2BmolkT701fPPEwIn0ocqESr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvNW1XOXuUtxX2C2gKtwDWs5QniWBu3WrfJwstjvrGRFwm8dYrb2mFYgmwTKgs4l905yzDrDyjeLO9yPgEIj%2F%2BoVjYyylRlkLujQh%2Fvmai%2BIhyyQF%2Bs62WsaByTtkTtn%2FgULFtekyIHFVrMFGLg%2BsYxTmyQslCWhJ2qcu7CoKanvu%2B6jiEQb72PC%2FW2Kf9AoBA2eZMfW9pCZw3%2BmoB4ziCsExlh4Gdph1rDx1G1238dEZo0lck9UIFxlK5mDwmsG8zszREzjaZ%2BvkFLy%2B%2F6aS6Cehh6OWXVDloohBJCIMK%2B3svMEYEafAe8pDwMU2C2p%2BQGmyCHs%2BHOJpmfflK%2BZRudY1MeQBl6u2amuM1aiLEe5F%2Bpma%2F1rYaI71F6ETkA8HPPVwJbZJRtjxALuIg5IwBK%2BW9mXwp1kJKkQ2txlA27t%2FNf5D4Vluj9YlWC6t6jzW4X9nJT6C%2BqeuHFZLbyCA2xWC1WCv53%2F1F3iXtNisvKhfUGcX5JUoco1QN0ERmkx7ucmdIOxuohPBb7HhgNDrBcMYuCM354OiHmLxVwRycdZ%2BkBm7oEWsw4R4CysLMzQdP%2FczyBS%2Bm37Rs%2FgI82RP8l%2FN28RTpyC3Y6HsYGb03BrXSXJMjM3CXIdXwb0QDDMNYUh9t5zsz%2FqY2VIwzszAyQY6pgEVP%2FnjMWLIc%2BnXkkI8dVHNZdmK9iMQGGD28CgTQ8UJPK3pEwmRGRO7CMzCfpMSq0PZ%2BncSdk7R4uzKVUCKAO6tP0x%2BAaq97pHeGFN5g12Vg0z1IiOhiq1B%2FVymqxJ7W8wJpTj6zPFIbO8ba1vtnvD%2FwuCCvstDy5fHg122eeMrA6clvfhOk6VmtTUDpQYUurpNo0N3x17TJppEXzuwscpMgAKLzKty&X-Amz-Signature=3c292a032d54d739b0449d11419f8852b97e6a71d5c3d22739bff90286ec690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


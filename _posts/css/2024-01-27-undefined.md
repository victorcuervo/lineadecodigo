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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4S4S7LS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCUTLcZgptn0BmKWpRg2YHbaH7P7m09RSEIzngiAl06igIhAJh3Ks9cZn6L%2BhYh%2FE%2B01nicSf5i%2FlLSLC5RCQXqODQKKv8DCC8QABoMNjM3NDIzMTgzODA1IgxPJ018k5vKQ6QyNqkq3AOedTpJQN4vJZ2RjJcOyTlMg2qe2DEMfaa9BSx4LwnNXyQf%2FXLtXBSbwmxBi%2BmxvQNkeaim5BkxsusaVyB49qEngQr9L0ux16jPWFysvTz9aRVBYJGXKS7VXBOa%2BOrBoPkg6XOzlxyYqKQII8n5AkHKa%2BFEinzf0tZWC5lfCBfqANvjkNEbFCvEqBchgzwt9un9rf7ERau9YIbkLavwZTJJDT%2FOh47sKB8plro9rJ0EzqiILe3x0TblfhxeJoENB29Q84O0sk1DzCvtWZ%2FD3vM3yM29FOA%2FR04hrMrKJVaTG8WUp67qISYzBvPjYjRVAqBY50zuOZUfkHGBZd%2FSPsUfQrfZkKhcpr51kMb%2F4Q3NsjeLNNBrcPRkkdQkP7Kwpicr0k9%2BIlcg5OdmtGbn8zXS0Fg8S%2BUYzoGS6Fqsm1sLqEy34pTsV%2BOOD3U5fLjwNJCxgCFSEtnlgzwVNdhYjHejEW%2FFyOJLpAlJ3rjjW3fE1aEmJcneR8DnbCmTgalN3PYagOcAa1zez3Rp79mpk7fAIwPHd%2FjBMs3zIDDwNOyDIBWga1ISCVHJjvinRSX6bgWyhgOrJ1Z9Qbs8B7dAXdbS4MsiVy5AIkTlHKv%2BYsz0DG7PU%2BE%2BGZB8if%2FByjDBh8HJBjqkARftSN%2BptUbC45tA013acnKcS9fELzeNe%2FQT4XeRqO8vqe8nfGf%2F%2FYivySk%2Bvs8Cay7WqQllRHaSR6MTYYg4Q4FZIoaeu0npbX%2BpsAO9IlJKkp7wmpFzBLgvXu4iyskApNkiCiGDqkHnMzLLdZ8vXD2BsfXdFQcxaL7l6B%2BCLhpz1VEuH9u%2BtVAmZPuXHitSII5HJI9PW1ZnfLx%2BwQdBsVVlEG1A&X-Amz-Signature=d417a435bdf24d439bd7c4f8eb742fb7f83bd9a544febf5e3dac08fa1527e474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4S4S7LS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCUTLcZgptn0BmKWpRg2YHbaH7P7m09RSEIzngiAl06igIhAJh3Ks9cZn6L%2BhYh%2FE%2B01nicSf5i%2FlLSLC5RCQXqODQKKv8DCC8QABoMNjM3NDIzMTgzODA1IgxPJ018k5vKQ6QyNqkq3AOedTpJQN4vJZ2RjJcOyTlMg2qe2DEMfaa9BSx4LwnNXyQf%2FXLtXBSbwmxBi%2BmxvQNkeaim5BkxsusaVyB49qEngQr9L0ux16jPWFysvTz9aRVBYJGXKS7VXBOa%2BOrBoPkg6XOzlxyYqKQII8n5AkHKa%2BFEinzf0tZWC5lfCBfqANvjkNEbFCvEqBchgzwt9un9rf7ERau9YIbkLavwZTJJDT%2FOh47sKB8plro9rJ0EzqiILe3x0TblfhxeJoENB29Q84O0sk1DzCvtWZ%2FD3vM3yM29FOA%2FR04hrMrKJVaTG8WUp67qISYzBvPjYjRVAqBY50zuOZUfkHGBZd%2FSPsUfQrfZkKhcpr51kMb%2F4Q3NsjeLNNBrcPRkkdQkP7Kwpicr0k9%2BIlcg5OdmtGbn8zXS0Fg8S%2BUYzoGS6Fqsm1sLqEy34pTsV%2BOOD3U5fLjwNJCxgCFSEtnlgzwVNdhYjHejEW%2FFyOJLpAlJ3rjjW3fE1aEmJcneR8DnbCmTgalN3PYagOcAa1zez3Rp79mpk7fAIwPHd%2FjBMs3zIDDwNOyDIBWga1ISCVHJjvinRSX6bgWyhgOrJ1Z9Qbs8B7dAXdbS4MsiVy5AIkTlHKv%2BYsz0DG7PU%2BE%2BGZB8if%2FByjDBh8HJBjqkARftSN%2BptUbC45tA013acnKcS9fELzeNe%2FQT4XeRqO8vqe8nfGf%2F%2FYivySk%2Bvs8Cay7WqQllRHaSR6MTYYg4Q4FZIoaeu0npbX%2BpsAO9IlJKkp7wmpFzBLgvXu4iyskApNkiCiGDqkHnMzLLdZ8vXD2BsfXdFQcxaL7l6B%2BCLhpz1VEuH9u%2BtVAmZPuXHitSII5HJI9PW1ZnfLx%2BwQdBsVVlEG1A&X-Amz-Signature=a032c3cc375521498be964df5eaedf42771bfca68f6b3c87626fc51afcf3d19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


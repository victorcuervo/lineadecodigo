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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XMDQLR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCdFI7YsL%2FZUllPYCe%2B%2BOYyzG0Exq6jZpU%2BE0xq7BpTPgIhAKcXL9MuGXE85YGdujhi31PVg9jD%2BX3MEM%2BRgiwth%2BdrKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5xvsFSvo42uHL1Bkq3ANgXCCaGIuKrW7bYnaXGpueYSFCXBsnPtWTSVJqP5UBLooT1wi%2F7YJJje6XZaMUZlOoDkt38zqLP5JJ4oYaCam9caLHLQVb7lWwD4fOcO%2BHmW0ZOxq2T3tjluhGghCFLFnp1K129fikKAHkoLdq8%2BtnGfTJJlW85ryarVHrTDUAvum1fDUZFbPHqlikyP9KfkT6U6BFOyv3IK%2BOT%2F7bUeWo6B8pp0GWy0rBkAAUFkrc8fbvSQhyASISKXsbHTCtbfXyZt1SByAvdIhJpqRLdOfnxQMCbtYwkfX8mJp%2FY52FeNycBLscngS1c4dPn4GhFU9CzYeh0H1gm8Rv9QfzXQ2A5jmZfZAC0aDIwgBe6AEmOMVzfpe%2B5aRxxOx7ozkq%2BT2tPJ6C4bZzLdw%2BMW2Sj1JsVPwr8q8mzcHFiBAT02N4VTpY7vlaC1OsHBy4u7awvT6t7tpCMJHZn%2FkJCEh6G4d%2Bm%2BbQsq2TY4MDICr7WarvrCx%2Bgj9h7%2BnOqkZeWABsVLOha0F1hqWMq4tlVN%2FUPr2uLhoJA32DgGBwG0GWcEP54WAuvugYBanoj5F4eDPeo0Rmz3%2BfkAFISnltbYUVCkTsOUZTOXY9m%2FCccN7m9aDd72tFYQqu7cpJQ0x0%2BzCXh8HJBjqkAbRB9fCLMqN7NTwEqsbXyVAQcMuLJB1d5GEbFxHZOFlevxEa0mjPr8VfWs7Mia1ei%2F1ZCAcotCjI%2B2pjktniFE3%2BJRKMq0VVNS0fJE3B%2FowXb8g7bQnuGZjU9V0X%2BcNN2CYtb7OgkkARKRw%2BjKYJltdfNvYoRgX2fbNtZ1x6KE9MARHRXPfrIbRc3r5LTvyZef6w%2Fk1ZDkHOlPIcnn%2FoZVm6aXAQ&X-Amz-Signature=a7b2cd634965490b039b160e28229401b3fe73d12cfc40f2b01c4cd73fdb0998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XMDQLR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCdFI7YsL%2FZUllPYCe%2B%2BOYyzG0Exq6jZpU%2BE0xq7BpTPgIhAKcXL9MuGXE85YGdujhi31PVg9jD%2BX3MEM%2BRgiwth%2BdrKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5xvsFSvo42uHL1Bkq3ANgXCCaGIuKrW7bYnaXGpueYSFCXBsnPtWTSVJqP5UBLooT1wi%2F7YJJje6XZaMUZlOoDkt38zqLP5JJ4oYaCam9caLHLQVb7lWwD4fOcO%2BHmW0ZOxq2T3tjluhGghCFLFnp1K129fikKAHkoLdq8%2BtnGfTJJlW85ryarVHrTDUAvum1fDUZFbPHqlikyP9KfkT6U6BFOyv3IK%2BOT%2F7bUeWo6B8pp0GWy0rBkAAUFkrc8fbvSQhyASISKXsbHTCtbfXyZt1SByAvdIhJpqRLdOfnxQMCbtYwkfX8mJp%2FY52FeNycBLscngS1c4dPn4GhFU9CzYeh0H1gm8Rv9QfzXQ2A5jmZfZAC0aDIwgBe6AEmOMVzfpe%2B5aRxxOx7ozkq%2BT2tPJ6C4bZzLdw%2BMW2Sj1JsVPwr8q8mzcHFiBAT02N4VTpY7vlaC1OsHBy4u7awvT6t7tpCMJHZn%2FkJCEh6G4d%2Bm%2BbQsq2TY4MDICr7WarvrCx%2Bgj9h7%2BnOqkZeWABsVLOha0F1hqWMq4tlVN%2FUPr2uLhoJA32DgGBwG0GWcEP54WAuvugYBanoj5F4eDPeo0Rmz3%2BfkAFISnltbYUVCkTsOUZTOXY9m%2FCccN7m9aDd72tFYQqu7cpJQ0x0%2BzCXh8HJBjqkAbRB9fCLMqN7NTwEqsbXyVAQcMuLJB1d5GEbFxHZOFlevxEa0mjPr8VfWs7Mia1ei%2F1ZCAcotCjI%2B2pjktniFE3%2BJRKMq0VVNS0fJE3B%2FowXb8g7bQnuGZjU9V0X%2BcNN2CYtb7OgkkARKRw%2BjKYJltdfNvYoRgX2fbNtZ1x6KE9MARHRXPfrIbRc3r5LTvyZef6w%2Fk1ZDkHOlPIcnn%2FoZVm6aXAQ&X-Amz-Signature=fc5c65cee198ab02b185b4afb885cfdc5b154dbd93d0f5c1c26d66cd3f13fd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


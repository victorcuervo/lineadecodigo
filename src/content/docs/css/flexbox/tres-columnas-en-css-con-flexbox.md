---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4JFN44%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2FiI8EcP5%2BHX1gtKLiufLZvKpMSK6htj%2Fd21lUJOyDQIhAMfVF09fjMjUNczvyftUI%2F7%2Fo%2F4GCsjC50dLP6ig10HdKv8DCHUQABoMNjM3NDIzMTgzODA1Igyp74L0XIEx5wVF%2F64q3AMlcO%2BER0w%2FUru0LaQiAktjnPblPTR3f9UAdYezDjriUDJA1WqO0YLYH8PbTT5V8O4XdD%2BYahCN5PGitYdxK6AlgRy9aICmnFj%2BIJQKZS2Gs4U6hKZL6wXZpI8BEy0owGAXO8BvnEJy7W41gb4DbH9CBPWeEDeJDigIy74zsdzph52zdPqyIw0%2FjRxhMc5%2FUk0aFhfJ0ZXBHKmTB8kwTNYlQSeACavkWDcNWZSRX6shTGDPVeG%2F%2F4gzsWffnz0tFyVKeu1zrJoMFo2AwMIonfsyODqAZOEPAmZyGpDQeCxOb9U3aZrw4iBW%2F2CtMact%2BPY5iy4dIIbmoCa15ribIX7NKcfo6incXyEgmVPmUgnmjAyUGr21qM8koACkpQ1F5SJFtUxG0Nw1i1T5CY%2F6l0fCxHSNYOAF5OUtCBk0WbqkrXpykWz7zqd0%2BGz2tJ598zebn0pD1qNIbvzm6kChulLJHxyZgyfUHjC6kjKeq%2Fsvc083d6ozhKAQC46JlXf0WBsPHwdMkSGf0KtVM7nSUnjGH0YR4mMyDKH7o3g08Wa%2FI84i%2B4y2C8E6j1wGSJF4m4eMP%2BjzTiI2b2KAgKq0FxgpUaBiawop3Vbu0cdQSKn6tsiPR3YSI1wOP4QodDClptDJBjqkAf%2FSN%2Fsr5B4z7NX0cOlDnbC6SXHxHdW0VGn8DAqO8mURey1Gosx9h7uVOeJtxKB7VPr52%2FpnKPRFzKrdFfN%2Fn01wW6I1KwPkQtOUS0lpS2f4PTo4cLOSdbsdSaIbU1JyvFPmXtM%2Fsgq0rk2DE3Y4xhk08LTGyHijxj%2BHhT7Lz%2FClsGqpSf2D1wL27xpY1yarJrgf5sok9I7AEnL9%2BsEc1Ws5ODgP&X-Amz-Signature=c0d49eeef3268c85d62fbad5c4f92c984c79793297f43c45fa59fab9a79c4f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4JFN44%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2FiI8EcP5%2BHX1gtKLiufLZvKpMSK6htj%2Fd21lUJOyDQIhAMfVF09fjMjUNczvyftUI%2F7%2Fo%2F4GCsjC50dLP6ig10HdKv8DCHUQABoMNjM3NDIzMTgzODA1Igyp74L0XIEx5wVF%2F64q3AMlcO%2BER0w%2FUru0LaQiAktjnPblPTR3f9UAdYezDjriUDJA1WqO0YLYH8PbTT5V8O4XdD%2BYahCN5PGitYdxK6AlgRy9aICmnFj%2BIJQKZS2Gs4U6hKZL6wXZpI8BEy0owGAXO8BvnEJy7W41gb4DbH9CBPWeEDeJDigIy74zsdzph52zdPqyIw0%2FjRxhMc5%2FUk0aFhfJ0ZXBHKmTB8kwTNYlQSeACavkWDcNWZSRX6shTGDPVeG%2F%2F4gzsWffnz0tFyVKeu1zrJoMFo2AwMIonfsyODqAZOEPAmZyGpDQeCxOb9U3aZrw4iBW%2F2CtMact%2BPY5iy4dIIbmoCa15ribIX7NKcfo6incXyEgmVPmUgnmjAyUGr21qM8koACkpQ1F5SJFtUxG0Nw1i1T5CY%2F6l0fCxHSNYOAF5OUtCBk0WbqkrXpykWz7zqd0%2BGz2tJ598zebn0pD1qNIbvzm6kChulLJHxyZgyfUHjC6kjKeq%2Fsvc083d6ozhKAQC46JlXf0WBsPHwdMkSGf0KtVM7nSUnjGH0YR4mMyDKH7o3g08Wa%2FI84i%2B4y2C8E6j1wGSJF4m4eMP%2BjzTiI2b2KAgKq0FxgpUaBiawop3Vbu0cdQSKn6tsiPR3YSI1wOP4QodDClptDJBjqkAf%2FSN%2Fsr5B4z7NX0cOlDnbC6SXHxHdW0VGn8DAqO8mURey1Gosx9h7uVOeJtxKB7VPr52%2FpnKPRFzKrdFfN%2Fn01wW6I1KwPkQtOUS0lpS2f4PTo4cLOSdbsdSaIbU1JyvFPmXtM%2Fsgq0rk2DE3Y4xhk08LTGyHijxj%2BHhT7Lz%2FClsGqpSf2D1wL27xpY1yarJrgf5sok9I7AEnL9%2BsEc1Ws5ODgP&X-Amz-Signature=e4772bbd755fbbb12952d7f865de59c216334b0882b640fc766e257774482892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


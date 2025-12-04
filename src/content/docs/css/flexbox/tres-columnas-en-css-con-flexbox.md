---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXBIZKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDuiyXjieqF%2Fmpphi6AGI3Enlj81UdOF4U6yaGtXPtwuAIhAPbnkCHe%2FgwaeSpJbsMaqKY3t3ZyR4%2Fm6eJWUYVu%2FEBeKv8DCD0QABoMNjM3NDIzMTgzODA1Igzg3Oj%2F%2FHFKQ7ShVuIq3AOrGE6DMfdagyrW9YSopVEx78n8Sjb8m5T3vLEiz2cQR088n1AAg%2F0LvZyHUY4QWJ43fD%2BUi6fz%2FWj4w%2BarkzO5zxy7BgWwcWOBwnkP88Pb6p5NTY4QhhpTO6br0WsGABUVrHHXvyjVQ%2BA2WV4WuECTaWEqCPdWg7%2FLeHemizMP65Rb%2Bp3BZMNYA%2FftfzhIYKaZBWldflzy%2FDG2sMXFVVEv%2Boj81d4nlN%2BhZcjDZws7k0%2B8CwyfU8dmnvcO%2FOQVQa15CRzCWPxNnglxsFIFXaG%2BpvAmGeOu8EI1fZY7MH9%2FKGEmJwDP5CohyeNX1uCHKnozzsTV91sGSiGezQf4LoleJlOY2L5R49QkZGQJGiW%2B1f7JeyWOzg3CfrVRG0VsPgvi2YREFCjNKunT8%2BH2GajluQAHzUvJA7SFUA1aCOgcQwGg84Sd0pE%2FFuNTDRYODs5ZQZH3STC0xotSgUwyr9pxoHOJxDGt2UZYpYy%2Bb1EJ0LRbfgobht58Vy%2F%2Fabf4bsDEN0D3tN%2BmgX%2FtzTFpUDnog32L2oSfOuj6LDAfeZ6WVYOU%2FnV5RtsiZGzx4LLUkopFxZIYsguTn449aBZyghQzZreEvjShzVKlkNubBscmqNNewNYCSR0TAISf1DCmkcTJBjqkASE2guotfDA6v7nZ3XDXEvUXInemHgbBYTGHMKQaz0XU2v%2FIrsfAqqJwRCrAuJbEqYEbY%2BQtKX8Qch4PUPMPCggPRftxsfWy05gzynUavmy9wlPa23gSKAMYQj%2FC5FyO8oybH8BHW2YwTWpE6Yd6L%2B9NSBqC0f8%2BbknL7Lx6TojyC0RmF7IU%2BfplhVTO31veU0nlPjslWrDiQf7x6Ve4qxjQY%2B3U&X-Amz-Signature=d8da0e0bd7c152e3d73c2d07294680c1c9112f02f2db45ce2d6d8131bc2222ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXBIZKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDuiyXjieqF%2Fmpphi6AGI3Enlj81UdOF4U6yaGtXPtwuAIhAPbnkCHe%2FgwaeSpJbsMaqKY3t3ZyR4%2Fm6eJWUYVu%2FEBeKv8DCD0QABoMNjM3NDIzMTgzODA1Igzg3Oj%2F%2FHFKQ7ShVuIq3AOrGE6DMfdagyrW9YSopVEx78n8Sjb8m5T3vLEiz2cQR088n1AAg%2F0LvZyHUY4QWJ43fD%2BUi6fz%2FWj4w%2BarkzO5zxy7BgWwcWOBwnkP88Pb6p5NTY4QhhpTO6br0WsGABUVrHHXvyjVQ%2BA2WV4WuECTaWEqCPdWg7%2FLeHemizMP65Rb%2Bp3BZMNYA%2FftfzhIYKaZBWldflzy%2FDG2sMXFVVEv%2Boj81d4nlN%2BhZcjDZws7k0%2B8CwyfU8dmnvcO%2FOQVQa15CRzCWPxNnglxsFIFXaG%2BpvAmGeOu8EI1fZY7MH9%2FKGEmJwDP5CohyeNX1uCHKnozzsTV91sGSiGezQf4LoleJlOY2L5R49QkZGQJGiW%2B1f7JeyWOzg3CfrVRG0VsPgvi2YREFCjNKunT8%2BH2GajluQAHzUvJA7SFUA1aCOgcQwGg84Sd0pE%2FFuNTDRYODs5ZQZH3STC0xotSgUwyr9pxoHOJxDGt2UZYpYy%2Bb1EJ0LRbfgobht58Vy%2F%2Fabf4bsDEN0D3tN%2BmgX%2FtzTFpUDnog32L2oSfOuj6LDAfeZ6WVYOU%2FnV5RtsiZGzx4LLUkopFxZIYsguTn449aBZyghQzZreEvjShzVKlkNubBscmqNNewNYCSR0TAISf1DCmkcTJBjqkASE2guotfDA6v7nZ3XDXEvUXInemHgbBYTGHMKQaz0XU2v%2FIrsfAqqJwRCrAuJbEqYEbY%2BQtKX8Qch4PUPMPCggPRftxsfWy05gzynUavmy9wlPa23gSKAMYQj%2FC5FyO8oybH8BHW2YwTWpE6Yd6L%2B9NSBqC0f8%2BbknL7Lx6TojyC0RmF7IU%2BfplhVTO31veU0nlPjslWrDiQf7x6Ve4qxjQY%2B3U&X-Amz-Signature=6c5815bc50b0d25ebb0769a721fb2e76b47b1f7021e9cf38a2392fac21d372b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


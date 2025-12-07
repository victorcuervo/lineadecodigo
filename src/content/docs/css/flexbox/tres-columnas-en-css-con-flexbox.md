---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KXDOEG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE55AKcQWcSdCmt%2BwzjZ8jn3dKY%2B7FyYAMs6%2BVwVjf7oAiA1tfSm1BP4QXfLq8biEJhsYSHK3YuFFIGfWi%2BTO7at%2ByqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWsHsMsZQfR3AdTnKtwD8KrgNuUHR6%2Bc35o0bhx5EEZaqLpTfrIvcFI3HoiCP7aDyEBKon0s0bzAwZu8DvKsQntcr9FKrNik1CNUc36L7EQo8%2Bwg4GzE2%2BZrnzPQhNi30APZeznftiYniLbZpWpqZ8SybcnYYmFg8QWR4ApNP%2FNbiuFCQlMD3hEPpHOhMkOQfHPYDXnuLU96RfZTINPXpakryODR%2FM9LTFIUJqj%2Bx%2BgW%2FBP%2FofvW6mfBxmZk6gMzxmSJ2Vj0Wo8aJGJpEYXpUnEvBCie6qXcu1C2xtuR%2BxHgC86rjAgDU4S0chuDOJt7KA2dePO7NKksq%2Br426Y%2FZI01DAMGXTBDPR68qKvcUbChp9SdLBtImGSaRwpDNKGhnl5SxwtFVpGgVA4p0YNWPmnMqDDKrYl%2FVFT5LlmV7NELurXyMAQarj63W%2F0zEGd%2Fzv8jemNKIn7WGLfLVtMAngVZVjUCbr%2BtX7CvzxHaFB3IN55r1fVHF0MHkjU6suPuycHj%2BgNFcQwZe9B57WEqgfCjnTwJoqJZ6vo1yBvbGg%2BKraE8rZFVsSGrFDgmWL%2FnGE33PapJ0Tgxb5xzL0yv0A02O3SP9ndk7Hw%2BjK9oe1GgMafRKj%2F8kCM1ShlZt9cqjuIy1VIXdAIM6ygwz77WyQY6pgGvxCMyFvArBvLs3P%2Bc5a2l6of3F%2FDorRwD8kubJdW9BxDnkMOP0Ma9CPki7kyd%2ByWwZ16iWy%2FqI4Kfy%2FYwUZhE21isuESpljphCDmH4k1mS9fji8hX9XhUk1WyMa5%2FKSyQv3lJGHbCZGbTv%2FcmFuAhX0PMQ1npz3z2Y%2BY4iid9BtgjFVqud%2FIK%2FkZBwHv4amQHEuUoik1DwbUeWGAlTINtTeimDTX%2B&X-Amz-Signature=ffcfdb1edd1b546f6156e44f3828c97660e4553d1293ba181074d8894414535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KXDOEG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE55AKcQWcSdCmt%2BwzjZ8jn3dKY%2B7FyYAMs6%2BVwVjf7oAiA1tfSm1BP4QXfLq8biEJhsYSHK3YuFFIGfWi%2BTO7at%2ByqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWsHsMsZQfR3AdTnKtwD8KrgNuUHR6%2Bc35o0bhx5EEZaqLpTfrIvcFI3HoiCP7aDyEBKon0s0bzAwZu8DvKsQntcr9FKrNik1CNUc36L7EQo8%2Bwg4GzE2%2BZrnzPQhNi30APZeznftiYniLbZpWpqZ8SybcnYYmFg8QWR4ApNP%2FNbiuFCQlMD3hEPpHOhMkOQfHPYDXnuLU96RfZTINPXpakryODR%2FM9LTFIUJqj%2Bx%2BgW%2FBP%2FofvW6mfBxmZk6gMzxmSJ2Vj0Wo8aJGJpEYXpUnEvBCie6qXcu1C2xtuR%2BxHgC86rjAgDU4S0chuDOJt7KA2dePO7NKksq%2Br426Y%2FZI01DAMGXTBDPR68qKvcUbChp9SdLBtImGSaRwpDNKGhnl5SxwtFVpGgVA4p0YNWPmnMqDDKrYl%2FVFT5LlmV7NELurXyMAQarj63W%2F0zEGd%2Fzv8jemNKIn7WGLfLVtMAngVZVjUCbr%2BtX7CvzxHaFB3IN55r1fVHF0MHkjU6suPuycHj%2BgNFcQwZe9B57WEqgfCjnTwJoqJZ6vo1yBvbGg%2BKraE8rZFVsSGrFDgmWL%2FnGE33PapJ0Tgxb5xzL0yv0A02O3SP9ndk7Hw%2BjK9oe1GgMafRKj%2F8kCM1ShlZt9cqjuIy1VIXdAIM6ygwz77WyQY6pgGvxCMyFvArBvLs3P%2Bc5a2l6of3F%2FDorRwD8kubJdW9BxDnkMOP0Ma9CPki7kyd%2ByWwZ16iWy%2FqI4Kfy%2FYwUZhE21isuESpljphCDmH4k1mS9fji8hX9XhUk1WyMa5%2FKSyQv3lJGHbCZGbTv%2FcmFuAhX0PMQ1npz3z2Y%2BY4iid9BtgjFVqud%2FIK%2FkZBwHv4amQHEuUoik1DwbUeWGAlTINtTeimDTX%2B&X-Amz-Signature=12ef22b841f9d462b3c71520aafadc0654fae94441811d493bd05416d2ddcec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


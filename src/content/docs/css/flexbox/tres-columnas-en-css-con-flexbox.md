---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VQOJVQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD524Qk4neg8odQyTn3hn2D7GRMp4hhVY0TTXUADJhrzwIgZhY34anuy9ZwBIWp9CKgkFWCcAfICmvq6KFOaIblpCAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbYNOaHnv16CdzmoyrcA%2F%2BUZrmHhutZQwD2OvSfhoZUgnSuIAQQ614HhtaOBmpHa7O3zXy9%2F66qWXmABotPpcyuKdKQCvk4fv0UPxz91oQuajXimCBfd7xfKOvA%2FYDL4ZE0mFDu1WNuSgLTHekhQyZSH%2B15gc4N3E4353sfFF1yQIc8D1tAuH0t4UZ83lgJpLFzhEAcMAiNh6nZTKz%2FbVHLyUpO%2FL6hbPEbMbcuproYUGpou6bcoWtm4N1oKCUBJcvTXXmeKIgHnd6pBfkYbsfWpoHbB8Zu7Irp4EPfn1vYk2f4EJTMZPO%2FPyCYLY%2BImFkMEVBh%2BLANuP0uT0x4JIGILgwQnzSfkpwPtKLhkUeuhG2eI6CK2GV38g7%2FqEK3YOYOTWUBlAX4DiKJabTOxxq0UQkxrDEn8IUoFv7dpbhoNI9s4dI5sqL9tozdvusd%2B5KMiEEPdizkk3QXPcHr5cXl5BVOoF7KUpSiFnkCs6FN8UPC91XtVY8oR5eafYo4lVGkzzOZWuJp2OhAlmzwxVtzASEB0BjrUnkvOlvoFz4ugsUwHb3UFEcTiQPkMxfD4XiErMB%2F%2FhARCtoLvO%2FUbw4uGlWz5nqeEI7jnAggVqglQZrUpHjtEVemTLDi7hYJn9Rl38mbETcKGz73MITI18kGOqUBqINns8QV%2FMR9rrCoK9T0Hu7GS6I8o%2BaqDx4gJe2TAOhmJYiMX9rAk89SeF%2FHGEtqwThXIva6S7AKlMQEo2rAXUYGa4sESO1OpcQBbEHui1WqDYWBUbk175FC8jWYtAwfszmorTxOsKGATu5PzRa1r8ckzt0RxOXPjVmQdZzYc165PoALffrYEj8ETBHSkO8tx1GMTr7fMlSCY0uNScvN0Qx3jMK%2F&X-Amz-Signature=b9fa930b615f6e1ab9cf6e059944eeb1405de3a5806b69ffe5896ebff789fe8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VQOJVQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD524Qk4neg8odQyTn3hn2D7GRMp4hhVY0TTXUADJhrzwIgZhY34anuy9ZwBIWp9CKgkFWCcAfICmvq6KFOaIblpCAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbYNOaHnv16CdzmoyrcA%2F%2BUZrmHhutZQwD2OvSfhoZUgnSuIAQQ614HhtaOBmpHa7O3zXy9%2F66qWXmABotPpcyuKdKQCvk4fv0UPxz91oQuajXimCBfd7xfKOvA%2FYDL4ZE0mFDu1WNuSgLTHekhQyZSH%2B15gc4N3E4353sfFF1yQIc8D1tAuH0t4UZ83lgJpLFzhEAcMAiNh6nZTKz%2FbVHLyUpO%2FL6hbPEbMbcuproYUGpou6bcoWtm4N1oKCUBJcvTXXmeKIgHnd6pBfkYbsfWpoHbB8Zu7Irp4EPfn1vYk2f4EJTMZPO%2FPyCYLY%2BImFkMEVBh%2BLANuP0uT0x4JIGILgwQnzSfkpwPtKLhkUeuhG2eI6CK2GV38g7%2FqEK3YOYOTWUBlAX4DiKJabTOxxq0UQkxrDEn8IUoFv7dpbhoNI9s4dI5sqL9tozdvusd%2B5KMiEEPdizkk3QXPcHr5cXl5BVOoF7KUpSiFnkCs6FN8UPC91XtVY8oR5eafYo4lVGkzzOZWuJp2OhAlmzwxVtzASEB0BjrUnkvOlvoFz4ugsUwHb3UFEcTiQPkMxfD4XiErMB%2F%2FhARCtoLvO%2FUbw4uGlWz5nqeEI7jnAggVqglQZrUpHjtEVemTLDi7hYJn9Rl38mbETcKGz73MITI18kGOqUBqINns8QV%2FMR9rrCoK9T0Hu7GS6I8o%2BaqDx4gJe2TAOhmJYiMX9rAk89SeF%2FHGEtqwThXIva6S7AKlMQEo2rAXUYGa4sESO1OpcQBbEHui1WqDYWBUbk175FC8jWYtAwfszmorTxOsKGATu5PzRa1r8ckzt0RxOXPjVmQdZzYc165PoALffrYEj8ETBHSkO8tx1GMTr7fMlSCY0uNScvN0Qx3jMK%2F&X-Amz-Signature=baf9932a2e7a258d92a00c386955fadce49e9e4a2d06d252ad720d12025ef34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


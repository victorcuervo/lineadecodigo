---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52F6CFF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN8OodbLyZ5JMdveZWkHbaJtzXOvBTt1h8U7lF1%2B22mAiAuSC3xYKHl%2BXMR2%2FJ%2FfkZpXM2XF6zKYgEyy4cND0KWYyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHF2VR85rGpvzOaKqKtwDxtpThYovamWtN9TtZ5Ug6IKy5%2BqMVMayaPUaHNkDGmWL%2BKFWPLWpATlIgOl83VQk%2BLYsV9JPaA%2BlsydmH%2Bk2fzUeEbamx3%2B8%2BOSHBok41J%2FHf5xOE5IqcR5B6TCuECN0FByod9A4Cb9hph4u3PQ9nVobjsVeXOzBTgwIwcVjaT%2F3xSBfTz%2Fk7A2drb3zOtLuZ%2BGif6tm%2B7uWtx4Gxp3ufr4W%2FtlmXs6ihonP1ibqIm1lh7uSDuDxlBuuacZFH0J9deXg6hK92MTkli8Llmh8aZzCDm6bZAdJiAid7197ZqTqAg%2FStW2JFiyyJ5XNMjizxV%2FmlAWyfOv14trptOERD8lu6CZbhHUmCQW1tN3NpZlKhlZNS8X0%2FuaUVKqZHGL2AFg9qWHPZvfmmEN01oFKpDCFoRcukemrHsXnCYEYM7Kaem4Oy8ZbaVyHPrLi6JVEueYxaYqV1FW8e82BjbI7mWeE6K0ZobDOJ6UWKlSwbuK26lBSmZdaldymNpXPNWpQNNu7S%2F%2BTMbiZ%2BCkznYuiqewIVBJ5lUTPYHFTs0kgBTNHlQy%2FAZZkLgYCgtDlHJ1zaKSh5qcp1BkkCSkLtEMWQtuzOuCyPLTYWLUbFz8ffVadyGZaCq5m5gwzI7Qwn6bQyQY6pgH%2FYbOw3p8%2BB7WcX5y04dAA11bfbbSpoIfO%2FRQvz5oP0VI0w9PBeVv0Dsj7MYdeyYEbEY86KU95EIWX4hmlcxZ9rWfrLWMb821IkdeeWxpAjlW29Dg05JXU3gZU6a9iAh4atKwGOpWr%2FUxHP%2F43jiSaMt6U8CtPp%2FOzWqjyiT2G9qgSUqnoryOCOi0Nuzod2hlDcGZSQe3D%2BLJoi7Hp%2B%2By%2Bi0ZrNW4N&X-Amz-Signature=e434a4fbc041b275d7ce85d9ee847ba7c1365c7665a771b67dd5f44bec400229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52F6CFF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN8OodbLyZ5JMdveZWkHbaJtzXOvBTt1h8U7lF1%2B22mAiAuSC3xYKHl%2BXMR2%2FJ%2FfkZpXM2XF6zKYgEyy4cND0KWYyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHF2VR85rGpvzOaKqKtwDxtpThYovamWtN9TtZ5Ug6IKy5%2BqMVMayaPUaHNkDGmWL%2BKFWPLWpATlIgOl83VQk%2BLYsV9JPaA%2BlsydmH%2Bk2fzUeEbamx3%2B8%2BOSHBok41J%2FHf5xOE5IqcR5B6TCuECN0FByod9A4Cb9hph4u3PQ9nVobjsVeXOzBTgwIwcVjaT%2F3xSBfTz%2Fk7A2drb3zOtLuZ%2BGif6tm%2B7uWtx4Gxp3ufr4W%2FtlmXs6ihonP1ibqIm1lh7uSDuDxlBuuacZFH0J9deXg6hK92MTkli8Llmh8aZzCDm6bZAdJiAid7197ZqTqAg%2FStW2JFiyyJ5XNMjizxV%2FmlAWyfOv14trptOERD8lu6CZbhHUmCQW1tN3NpZlKhlZNS8X0%2FuaUVKqZHGL2AFg9qWHPZvfmmEN01oFKpDCFoRcukemrHsXnCYEYM7Kaem4Oy8ZbaVyHPrLi6JVEueYxaYqV1FW8e82BjbI7mWeE6K0ZobDOJ6UWKlSwbuK26lBSmZdaldymNpXPNWpQNNu7S%2F%2BTMbiZ%2BCkznYuiqewIVBJ5lUTPYHFTs0kgBTNHlQy%2FAZZkLgYCgtDlHJ1zaKSh5qcp1BkkCSkLtEMWQtuzOuCyPLTYWLUbFz8ffVadyGZaCq5m5gwzI7Qwn6bQyQY6pgH%2FYbOw3p8%2BB7WcX5y04dAA11bfbbSpoIfO%2FRQvz5oP0VI0w9PBeVv0Dsj7MYdeyYEbEY86KU95EIWX4hmlcxZ9rWfrLWMb821IkdeeWxpAjlW29Dg05JXU3gZU6a9iAh4atKwGOpWr%2FUxHP%2F43jiSaMt6U8CtPp%2FOzWqjyiT2G9qgSUqnoryOCOi0Nuzod2hlDcGZSQe3D%2BLJoi7Hp%2B%2By%2Bi0ZrNW4N&X-Amz-Signature=ecd6de3e7262ee0f7ea3036f5f7d0d35045842fb7877f2226b6a81afdc31cb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


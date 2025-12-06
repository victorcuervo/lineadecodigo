---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XII7LKXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5EDO7ckbjddvGeN7llq0T7DES7ieohX7DhJSgkjdVgIgbWZLdmZzsTyQWT%2BtoG25OCZMWEDduoWJOXWSSqrO098q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMijwGLoa4JUJM1i1CrcAwDqRYWlLz4WsyMJ8DGx0gXCy67bCut%2Fmd6env9fBGWrElU9tftwKkS3V8JANoj5zIeWNu3cJqJhUEIA1Je4aCuAFo%2BDIu5JtiKzbYmiVIXnax0pg%2BVYnMpFFkPB%2F8lvl7Ho0vGcCFh%2FE9Sd9vyvQXrixcgchAAuAmoHAW0IOx59YgocyBsECiK%2Bv4rYMzxUc5FWFX1GXlYLIbMQPtWg0c6q3G0yNdB3vDI1s3vRatKmvfBtO5Ce1lU2geIWuGGQxbFe33GjydlBEw5NkN2Wac5xA4xqyM1gDrtRFJEXr82g4RMfWSzGkQ3z8VFKpH6S98aGLHoe13gJ82Ux2d7iwfIKu8AvTgv3GMB7REHgmDMHNZkpJKdd0cWyGYkvzGXJm2Za3ItWckqRFLnq1VcPtJ3NCIgj5yKvM7RagKUJjLJ1o%2FU%2FflPtLsDqUpfyZfIJvBJ%2BAB60ABoPM6qgzIrIBerMsc%2B6jfwMfva4ZPwjkKerhxGwkkyb7PBWnQLMT9crMoSeBmAyXOo0kSwJFBUSvG2wMTCKF6Zwb439zwXAAEC8FXYC%2BVKgEPdpGywmrEzU8egRtzl3N1AlUImDSJGjuZ9F%2FFfIKru070qwSuav%2FwPltiXIayFf7WPOvCGtMKzozckGOqUBQAD%2BygwWMdsw8d7hn%2BLcNNrV8D0al57DpyyIuMRUDrj9rHBGkBlJBuN76o0XH2bq2OSlFjdPeAPNGUn69Jv13Ly3WRXNVYNsE1TBGkyPyxjSXyVMej3ePK1YsYCB9BE87ihyGswZhlxFlIZCSLlluUeKbuez7dKxUR8aeu%2B%2BbVZ9ciY8UnkFvTiJlbWMaOZYh%2Fj5dpf6BH4EzvY5IsTOzgECqiuq&X-Amz-Signature=c974685da40fd525e0ed9f579160c5f574cc7dd2494243de3589703b5faa0dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XII7LKXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5EDO7ckbjddvGeN7llq0T7DES7ieohX7DhJSgkjdVgIgbWZLdmZzsTyQWT%2BtoG25OCZMWEDduoWJOXWSSqrO098q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMijwGLoa4JUJM1i1CrcAwDqRYWlLz4WsyMJ8DGx0gXCy67bCut%2Fmd6env9fBGWrElU9tftwKkS3V8JANoj5zIeWNu3cJqJhUEIA1Je4aCuAFo%2BDIu5JtiKzbYmiVIXnax0pg%2BVYnMpFFkPB%2F8lvl7Ho0vGcCFh%2FE9Sd9vyvQXrixcgchAAuAmoHAW0IOx59YgocyBsECiK%2Bv4rYMzxUc5FWFX1GXlYLIbMQPtWg0c6q3G0yNdB3vDI1s3vRatKmvfBtO5Ce1lU2geIWuGGQxbFe33GjydlBEw5NkN2Wac5xA4xqyM1gDrtRFJEXr82g4RMfWSzGkQ3z8VFKpH6S98aGLHoe13gJ82Ux2d7iwfIKu8AvTgv3GMB7REHgmDMHNZkpJKdd0cWyGYkvzGXJm2Za3ItWckqRFLnq1VcPtJ3NCIgj5yKvM7RagKUJjLJ1o%2FU%2FflPtLsDqUpfyZfIJvBJ%2BAB60ABoPM6qgzIrIBerMsc%2B6jfwMfva4ZPwjkKerhxGwkkyb7PBWnQLMT9crMoSeBmAyXOo0kSwJFBUSvG2wMTCKF6Zwb439zwXAAEC8FXYC%2BVKgEPdpGywmrEzU8egRtzl3N1AlUImDSJGjuZ9F%2FFfIKru070qwSuav%2FwPltiXIayFf7WPOvCGtMKzozckGOqUBQAD%2BygwWMdsw8d7hn%2BLcNNrV8D0al57DpyyIuMRUDrj9rHBGkBlJBuN76o0XH2bq2OSlFjdPeAPNGUn69Jv13Ly3WRXNVYNsE1TBGkyPyxjSXyVMej3ePK1YsYCB9BE87ihyGswZhlxFlIZCSLlluUeKbuez7dKxUR8aeu%2B%2BbVZ9ciY8UnkFvTiJlbWMaOZYh%2Fj5dpf6BH4EzvY5IsTOzgECqiuq&X-Amz-Signature=a641cc307a99c24a58aea22e9c47903aafffdf9eecc44a0b0d9ca150f8cfa4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


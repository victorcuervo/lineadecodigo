---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Y2HAXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpFzlafSSgLDEe37rPSmDgh8uoXWjS%2B0qxLS%2BhJ5NZ4AiEAqPkhNRLGGh2w2O8eVcWTQ06YCDQ5hqaFcekb%2Fd6q0tgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEseTw3Y959GY930YircA%2B9wDQU2%2F3ikPT%2BudJpiMWORtJ5mYLiARd54KxT4ODo8026lJ97kG2co3Q4aPst677M4pzWkf6gzvXHX8iHMmjl4IARJqtJKubNJlEaZDo4gDKaAwbInqNvy4pVXsZ%2BGYoS2uG8khosZC7EaeAVKA7Qa92OP5VEuOgZlQB9Ana%2BGbePFp1vkDtE19NhFFY3Na4lb5WzSuamqUn5RFJ0I7usQ3AV2hV3f6C6rKsHB%2BtD24R%2B3VFw3Z0eIUTsTlTSi0%2BHNeFawiEU11DKKxGh%2FcbCu51Ha9LZQsdWduBIApeK7LSlgtkka1UP8V5NE4y7e8K%2F70ujgaSBwG9W9NN0KkderkrLybMQJe1GxxQnbUUXvXCisKI6uW0EvVIJM64k85DaNGCWlvo10WgKKQQhdL8TOBkg0Zgyr6Pv%2FDThZLfjM1EDA6jRlXYNkQm1XYgCIoUvjchfd6w9%2FqKTiecj06RZTs8E1We7BnglZ8wfcbRcfgQWTaME%2F2Rd4pEQWCIdUosiNAs1N2ZOIl5O28f4rJJeGo13838l9gPBM46tYvhA79HmVxoZzIHeTj%2Fhg5uzPOu7mudHdtuMjkySP829yWZHN7Wbx8diQh4YuPZH73ys5f0Cg26%2B8dQxq0tpYMMi8z8kGOqUBNXM2FRVjN4bI%2Fl4LXUCp5F5LI8nOi1XMGsasEH4%2FIkYC4ulLiYZ88Nx6SctJ8Rlytgc5dKfzGQfgjm7ZkZM5HwhRSLOa%2BhHgZP6h6J3%2F3y8vYsG7Z%2F50hkY1liTso1jsnyT6MOwEf3BCHVD94s%2F%2Fu0Wn9JUA802BsstB8jf24cYPbDdIagsjf6EKBeh%2FPYSZ6RvSZAxrGF8B93nYb%2Furej1Ys8JM&X-Amz-Signature=a3396e784d8e43c6d645d027d5d33a67555da23cac350d6431e04cc5f37e6136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Y2HAXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpFzlafSSgLDEe37rPSmDgh8uoXWjS%2B0qxLS%2BhJ5NZ4AiEAqPkhNRLGGh2w2O8eVcWTQ06YCDQ5hqaFcekb%2Fd6q0tgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEseTw3Y959GY930YircA%2B9wDQU2%2F3ikPT%2BudJpiMWORtJ5mYLiARd54KxT4ODo8026lJ97kG2co3Q4aPst677M4pzWkf6gzvXHX8iHMmjl4IARJqtJKubNJlEaZDo4gDKaAwbInqNvy4pVXsZ%2BGYoS2uG8khosZC7EaeAVKA7Qa92OP5VEuOgZlQB9Ana%2BGbePFp1vkDtE19NhFFY3Na4lb5WzSuamqUn5RFJ0I7usQ3AV2hV3f6C6rKsHB%2BtD24R%2B3VFw3Z0eIUTsTlTSi0%2BHNeFawiEU11DKKxGh%2FcbCu51Ha9LZQsdWduBIApeK7LSlgtkka1UP8V5NE4y7e8K%2F70ujgaSBwG9W9NN0KkderkrLybMQJe1GxxQnbUUXvXCisKI6uW0EvVIJM64k85DaNGCWlvo10WgKKQQhdL8TOBkg0Zgyr6Pv%2FDThZLfjM1EDA6jRlXYNkQm1XYgCIoUvjchfd6w9%2FqKTiecj06RZTs8E1We7BnglZ8wfcbRcfgQWTaME%2F2Rd4pEQWCIdUosiNAs1N2ZOIl5O28f4rJJeGo13838l9gPBM46tYvhA79HmVxoZzIHeTj%2Fhg5uzPOu7mudHdtuMjkySP829yWZHN7Wbx8diQh4YuPZH73ys5f0Cg26%2B8dQxq0tpYMMi8z8kGOqUBNXM2FRVjN4bI%2Fl4LXUCp5F5LI8nOi1XMGsasEH4%2FIkYC4ulLiYZ88Nx6SctJ8Rlytgc5dKfzGQfgjm7ZkZM5HwhRSLOa%2BhHgZP6h6J3%2F3y8vYsG7Z%2F50hkY1liTso1jsnyT6MOwEf3BCHVD94s%2F%2Fu0Wn9JUA802BsstB8jf24cYPbDdIagsjf6EKBeh%2FPYSZ6RvSZAxrGF8B93nYb%2Furej1Ys8JM&X-Amz-Signature=14861a33fff993654fee1a8ffb6ce78a4fa1f1acaeb77e3a5a9766567f94a268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


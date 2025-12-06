---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFBS3EZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgPVrKYuZED7yif2rTkYRoRhOv77UToJ6rBDz%2FKK%2F45AiAhspHSoVqMvNUEeBbA5UQBJeOnntk7QCl4pu1I5mEQUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTXtw5WYxGZHE4QC9KtwDX1crGCSQEhpPN7RbA2ENrXyi4YWZUllLU%2F7o35dKSfIx1p3ZZDvlNH9%2Bg4%2Fq1MvBmLbZm4QCC%2BSYbvcHt9Hnahsq%2B6386jKOUcsmPjUsq8WPXx9dpypKYedJT%2BRr25asZk6YDZ8ExEo4d76xAIzCDp%2FEEh2qoFrLLqFPUi%2BtKncZ%2FYFyiHOFoE6iVryBPbXx3HcKXh1uSSrnuuxwYOSdZO68zTUEREKUReqsN%2B9FsEfL5sB%2BLRJZ5bN5zPEZ%2B3z9gcE%2BFt7RdcMrd3tW4FlR1Pp1RjqsJVh7hMWBbF1WXaGiduWi2a%2B55QP5RmM9wR4HlNcXQ%2BYsXsO6C2TpOLlW%2FbgHQGPK1DWNkXYJUbZGlJt0%2B0xBTwIAX%2FHV8xobROa0huUAO3R%2BR6rAmKhSfnckJP1zIhmb9AUdS3g0k%2BX%2FnZx6rinJL%2Bq2WGFbe8FEjK9ZmJy5WInWm9ah7Ifxk1bcJy29%2BG0UtU%2Bn5nyZ8qAwo%2FqzD10GxsROr%2Fb0UHzUswonwC7BVxmICBlU1WNASJKbTh1XeWU%2FfG5mSiMJZochc%2BynHXmCVnQpMrCnpVsE7Y09VS9sj0EeE6e6BXlYMolqTG4COAaX5VGjfhzuIR9Wcu8luxn8gG5arcekmXowz6bQyQY6pgGWTfGftszszYog06iQqRvpgOk0htoGkTkV3Jn5dYZoEbBKdw4dx01AsvGxUkzAcQqI3P9d213Q57S6dQHBQNCe3HdNx8MDMnrZmzUO6cYFF3FKyD5y9r1Kb3Vb8sdGA92czUai%2BymU7hS5AZk%2Bghy5U9k2sH33jEDks6583H3LIEG9mcWh0j1efMVxferEaV1t1akW7UTzJgwNvsl7R2q5H9DHGJwR&X-Amz-Signature=7e90d1bf65ec6395b4bf0c22d7aae9e88494648e37502e9a0aa021d055afc1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFBS3EZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgPVrKYuZED7yif2rTkYRoRhOv77UToJ6rBDz%2FKK%2F45AiAhspHSoVqMvNUEeBbA5UQBJeOnntk7QCl4pu1I5mEQUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTXtw5WYxGZHE4QC9KtwDX1crGCSQEhpPN7RbA2ENrXyi4YWZUllLU%2F7o35dKSfIx1p3ZZDvlNH9%2Bg4%2Fq1MvBmLbZm4QCC%2BSYbvcHt9Hnahsq%2B6386jKOUcsmPjUsq8WPXx9dpypKYedJT%2BRr25asZk6YDZ8ExEo4d76xAIzCDp%2FEEh2qoFrLLqFPUi%2BtKncZ%2FYFyiHOFoE6iVryBPbXx3HcKXh1uSSrnuuxwYOSdZO68zTUEREKUReqsN%2B9FsEfL5sB%2BLRJZ5bN5zPEZ%2B3z9gcE%2BFt7RdcMrd3tW4FlR1Pp1RjqsJVh7hMWBbF1WXaGiduWi2a%2B55QP5RmM9wR4HlNcXQ%2BYsXsO6C2TpOLlW%2FbgHQGPK1DWNkXYJUbZGlJt0%2B0xBTwIAX%2FHV8xobROa0huUAO3R%2BR6rAmKhSfnckJP1zIhmb9AUdS3g0k%2BX%2FnZx6rinJL%2Bq2WGFbe8FEjK9ZmJy5WInWm9ah7Ifxk1bcJy29%2BG0UtU%2Bn5nyZ8qAwo%2FqzD10GxsROr%2Fb0UHzUswonwC7BVxmICBlU1WNASJKbTh1XeWU%2FfG5mSiMJZochc%2BynHXmCVnQpMrCnpVsE7Y09VS9sj0EeE6e6BXlYMolqTG4COAaX5VGjfhzuIR9Wcu8luxn8gG5arcekmXowz6bQyQY6pgGWTfGftszszYog06iQqRvpgOk0htoGkTkV3Jn5dYZoEbBKdw4dx01AsvGxUkzAcQqI3P9d213Q57S6dQHBQNCe3HdNx8MDMnrZmzUO6cYFF3FKyD5y9r1Kb3Vb8sdGA92czUai%2BymU7hS5AZk%2Bghy5U9k2sH33jEDks6583H3LIEG9mcWh0j1efMVxferEaV1t1akW7UTzJgwNvsl7R2q5H9DHGJwR&X-Amz-Signature=d33f8637ea2ef01718151701a7a8b2b634e35512eb2523bddfc8894e6892989b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


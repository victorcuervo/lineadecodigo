---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCV2QETS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGH%2FRXUUXNflcFfGYD5lGtdvvekA5kehz91Nu79ITlAQIhAL4g7XsSe2Y2NxiSS74rCPiwJ%2BE8ZOHFcU%2BWxBuhUDPDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWNsMEvjZudawpbwq3AM3Apm1VapUukyyNJ4RbY0CdTHhKgBC4iYIgsF7XcziJ%2FIuVY1H56vOUGXrT%2FEu3v9gPip7L06xoa4heLJTAm76y%2FIgymwdya3PFyLKbk9aS11CVMucMTH%2BccasxwaVDOAsJphOHFJjvur5JFuUhZ07YhB3sGp%2FriWxQ90CkhJ9Bm2cHSkjlCeHOLeWemt16yC22sdPmmIsTW8Y5VXNGx%2BnINfj0mZuyDvyFrmfKSP%2BmxxbPdDNqpvTv7iFe5vD8OFHMYTU02AHkUceJUGzaZVVvRyo6aRKsJPUNTaGTjKrIzCJqk2R5MlAOKcg4t%2F%2F69GyY3wa5QEEgRFHtCbxuhW3IxIRc2L2sl0sZf3%2BNAnGyoWCGIH8ioWCRFM5FF7dzUwOZb8GZlsuMpLYfe%2B2Eq9ZTeh2Tt6K0txbm3gk%2B4BuvgiO8HYU9xSGnQKM131XPk9nBCoCFOYQWHjPziPGK9MVxfFJ%2BTGlSjUoWlbKzQBXYGq2s909iEvBeWZUWqu97ohFCDpXuI%2FmQzw5FNKAr8cYcYpo837b%2B40FvlEeuzCssxw6yjWsSpl%2BmNTQ1fxBwR5t6um8Qne%2FWkfo89eZirYSr6AxyiY7sqHYHSy4sj5IyKQaForsrkS8TJg5XjCkmdXJBjqkAabxP%2B8B1zDTrRrLu3qp%2BasmaygFw3gjIoPPuKDUq5lGKzkMiCPA06Ia7hjMeBJvdfS3r1iuZv9OxOIInqBq0s%2F0MvBG%2BV112bYq1F8o3iEw5jIupUyDoL5Y%2Bf97Yyp%2Fw0q1L5OFgj42vqpayaNxlJ47LaMS%2F4cXkpgfhfmFKnrFBBX1QbNxQEBrJu015WPBCw0ZRzhZm4L86hAJ9zfxJ2lhY%2FHv&X-Amz-Signature=cc7e72b6f65b79af9ed52f40b576b913fb5101745c54308a7e3c99bd662ee9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCV2QETS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGH%2FRXUUXNflcFfGYD5lGtdvvekA5kehz91Nu79ITlAQIhAL4g7XsSe2Y2NxiSS74rCPiwJ%2BE8ZOHFcU%2BWxBuhUDPDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWNsMEvjZudawpbwq3AM3Apm1VapUukyyNJ4RbY0CdTHhKgBC4iYIgsF7XcziJ%2FIuVY1H56vOUGXrT%2FEu3v9gPip7L06xoa4heLJTAm76y%2FIgymwdya3PFyLKbk9aS11CVMucMTH%2BccasxwaVDOAsJphOHFJjvur5JFuUhZ07YhB3sGp%2FriWxQ90CkhJ9Bm2cHSkjlCeHOLeWemt16yC22sdPmmIsTW8Y5VXNGx%2BnINfj0mZuyDvyFrmfKSP%2BmxxbPdDNqpvTv7iFe5vD8OFHMYTU02AHkUceJUGzaZVVvRyo6aRKsJPUNTaGTjKrIzCJqk2R5MlAOKcg4t%2F%2F69GyY3wa5QEEgRFHtCbxuhW3IxIRc2L2sl0sZf3%2BNAnGyoWCGIH8ioWCRFM5FF7dzUwOZb8GZlsuMpLYfe%2B2Eq9ZTeh2Tt6K0txbm3gk%2B4BuvgiO8HYU9xSGnQKM131XPk9nBCoCFOYQWHjPziPGK9MVxfFJ%2BTGlSjUoWlbKzQBXYGq2s909iEvBeWZUWqu97ohFCDpXuI%2FmQzw5FNKAr8cYcYpo837b%2B40FvlEeuzCssxw6yjWsSpl%2BmNTQ1fxBwR5t6um8Qne%2FWkfo89eZirYSr6AxyiY7sqHYHSy4sj5IyKQaForsrkS8TJg5XjCkmdXJBjqkAabxP%2B8B1zDTrRrLu3qp%2BasmaygFw3gjIoPPuKDUq5lGKzkMiCPA06Ia7hjMeBJvdfS3r1iuZv9OxOIInqBq0s%2F0MvBG%2BV112bYq1F8o3iEw5jIupUyDoL5Y%2Bf97Yyp%2Fw0q1L5OFgj42vqpayaNxlJ47LaMS%2F4cXkpgfhfmFKnrFBBX1QbNxQEBrJu015WPBCw0ZRzhZm4L86hAJ9zfxJ2lhY%2FHv&X-Amz-Signature=872d8942eaa02106a35c9cb68364a6759da3ce7ececa79579b4797926bf17f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


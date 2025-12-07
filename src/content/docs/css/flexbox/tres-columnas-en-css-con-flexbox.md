---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644325VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa5HisuTzpdVHnOtyLEwyQtt7LMneB%2BPsLoLpXp9a%2BoAiEAqcmzGhFsd%2Bi0oYofblYM0R8Wa9hck4U6b7gAKczN45IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0jY%2B1cm5eL%2BJvFOCrcAwTE1GSBb0hP64Vj%2F70MQXCSY%2FWQghcOA9jOheYY2onkcBj2d5LwM2yOWGaTYM9%2BQYdrQT%2FZ8DHYDdybX013swR3slZ%2FRRREZK3w0pqYKLDfoMs49rpCto1u%2BYvv4xY4WZzR9%2F41wa95lo8qXZrMGvQVSB62Tq5hWkby4xmtRsGm9yXM4UvNwAQWxF677SXBj%2BBemTjbiJyxvd05ual8DH%2B6UWoDNKZrWiJvA3vex5enkvOPnwGL1OD4kFrVgRyOsyYsHn%2Bspi9Mwepao3k%2FHdEHHPtrSkxB4jXc80U6wP16Jzm0gQfq5h52uqrs8XD5N1U0WLt%2BDl%2FyGW068v5190sH5ZBgFh5%2BfDUYshyAxYwhLZhdhstOoTiyqNAQ5MRXsZLjCIS6MHhaB%2F94hqVCOoGpxD7HTCK9B5ybFXLjwws9EqEX0a84alBJ%2Fki5IUjWZMv3Vm79Q5xFBtoykrCWPxD01KXx1NKh8srFX%2FRA4fJIxN4VZHQ1qUiN4o2MLyONIRVrz%2BSuib5t0tJwBaqNwl%2BSA2VOlwitFn5jE9sCDUAHkNkUMuhCviu3JuYHHBfcb8FiFJEwWySk5CQFZimhLJj%2FvkL0O%2BBek%2FyAMmvIiAO739m4E3Zj6%2FgVn2QLMMiZ1ckGOqUBOBsBQa8FM8uMllHMScWytm8czDBHrM%2ByozL2q33XSR4hizg6%2BcewevoXk9c185Fn7%2BCJChHWwAwIhZGvdPiUZBbMhHHsKY%2BCTo6Skw7d4C4%2F9ufNAT7S%2BkCVwOdarRnTBrfGmBNfYZFDbWGygrxyA1zyR1MyOuMytLqZ2C416cAkGkxwNvpCXZs1EPFJAhc24ufM5bV9c7Lys1QykQIK%2FL%2BMsxi%2F&X-Amz-Signature=e623bcd67b9f798547a9ecfedcd68fe882dedfefad6bbee44dd83cd910727154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644325VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa5HisuTzpdVHnOtyLEwyQtt7LMneB%2BPsLoLpXp9a%2BoAiEAqcmzGhFsd%2Bi0oYofblYM0R8Wa9hck4U6b7gAKczN45IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0jY%2B1cm5eL%2BJvFOCrcAwTE1GSBb0hP64Vj%2F70MQXCSY%2FWQghcOA9jOheYY2onkcBj2d5LwM2yOWGaTYM9%2BQYdrQT%2FZ8DHYDdybX013swR3slZ%2FRRREZK3w0pqYKLDfoMs49rpCto1u%2BYvv4xY4WZzR9%2F41wa95lo8qXZrMGvQVSB62Tq5hWkby4xmtRsGm9yXM4UvNwAQWxF677SXBj%2BBemTjbiJyxvd05ual8DH%2B6UWoDNKZrWiJvA3vex5enkvOPnwGL1OD4kFrVgRyOsyYsHn%2Bspi9Mwepao3k%2FHdEHHPtrSkxB4jXc80U6wP16Jzm0gQfq5h52uqrs8XD5N1U0WLt%2BDl%2FyGW068v5190sH5ZBgFh5%2BfDUYshyAxYwhLZhdhstOoTiyqNAQ5MRXsZLjCIS6MHhaB%2F94hqVCOoGpxD7HTCK9B5ybFXLjwws9EqEX0a84alBJ%2Fki5IUjWZMv3Vm79Q5xFBtoykrCWPxD01KXx1NKh8srFX%2FRA4fJIxN4VZHQ1qUiN4o2MLyONIRVrz%2BSuib5t0tJwBaqNwl%2BSA2VOlwitFn5jE9sCDUAHkNkUMuhCviu3JuYHHBfcb8FiFJEwWySk5CQFZimhLJj%2FvkL0O%2BBek%2FyAMmvIiAO739m4E3Zj6%2FgVn2QLMMiZ1ckGOqUBOBsBQa8FM8uMllHMScWytm8czDBHrM%2ByozL2q33XSR4hizg6%2BcewevoXk9c185Fn7%2BCJChHWwAwIhZGvdPiUZBbMhHHsKY%2BCTo6Skw7d4C4%2F9ufNAT7S%2BkCVwOdarRnTBrfGmBNfYZFDbWGygrxyA1zyR1MyOuMytLqZ2C416cAkGkxwNvpCXZs1EPFJAhc24ufM5bV9c7Lys1QykQIK%2FL%2BMsxi%2F&X-Amz-Signature=beccd8f94f491502e901fcb8681df1d9b5a2c61af28fee6048fd807f4148ffe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


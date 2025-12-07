---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q72DAP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFIF%2BiKQWrx6gpapBzBKAf96sX7manOuA2WBaHKB2I7AiANEfoYOmz02HkHrKg4FXPY09acnSavqS6%2BR28J01zhMSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieACnaw%2F%2FL2vGs6CKtwDikYEi4NrK26FL5q1LVZT3zZrqQRQtKFi%2BT89uEZk7h6RUTAysTYDlfwsCipCHG%2BKt7KUBvws%2BzLzI9DpfpWIfc3kcWNPK1WwS3hl8EvvjgawlXuKTt6boUIhuubN4bfvs1m2i6o4R0WHKxT0%2BfwNNiQJ2FXxeXK%2Bwd43hMIyPmAxivnDDLtNedSaV01SN%2FrjEnUwsAvbLbSDmQjP1bdvTs89koprtf8iaoHKGf1ZhH5qZ4B7uKDctx0XhwgOw6R%2BVf5J9zpDnVv5PnNVvnxLahOaFG%2BrT9k28T164SMGSX1EhosLNidLzTi1Q%2BjTtV35v0Xxj0KWgWA9Ka66yGfcIac9gW45HYdVpLtrZ3eUoRg5B%2BHvXvrHc2fS2iPpWLw8c6eTYyFIeEiX%2BfeGKA7IqHst2OZEaaQVll%2BSJJtDQBNqM3Ch2bseR2ZTZt2tvERm2qnJE7xbodbK7tUJ3YCkJN%2F8FcUJBrEc4MAUyZuCQtgaJNjrH6h1%2B1FHbMDokXXtgVejHM0dY3BRrPYPkTiKFjlLgI048uh1mgyplZGrDaZAhasAta5XHf8fbCan5V5CerEp9m04GiWQJxsruytUnB2d1R9O2FdOLhQatzcV%2BuPjvrqPnC4bznhI0u4wwZrVyQY6pgFVYv9njjAwckDjnbf091EkGeAaLubb9pTYtWeUmG%2BOm6k8vmC6Jx3FQ0fsxQ1NB4PvPOnLEJE2U%2FEKvyX7AbgFm30cKzsYmiUaR8PYpUqjflL6c7P%2Bhj6Mdpazx3S%2BLayeoaLFrQ92850G5NJUmvTn2mgI8FyCd0GwY8U1YDQ%2FcNIT5niH7LgjRgU%2B7bM5%2Fi%2BLTg%2F2VzJ7q7whMtbx3XNCpm0gO0i3&X-Amz-Signature=4c46dce4b7e2c940622e295d490d68f6a5ce5bd8432f24dfbd716899e6e1243d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q72DAP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFIF%2BiKQWrx6gpapBzBKAf96sX7manOuA2WBaHKB2I7AiANEfoYOmz02HkHrKg4FXPY09acnSavqS6%2BR28J01zhMSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieACnaw%2F%2FL2vGs6CKtwDikYEi4NrK26FL5q1LVZT3zZrqQRQtKFi%2BT89uEZk7h6RUTAysTYDlfwsCipCHG%2BKt7KUBvws%2BzLzI9DpfpWIfc3kcWNPK1WwS3hl8EvvjgawlXuKTt6boUIhuubN4bfvs1m2i6o4R0WHKxT0%2BfwNNiQJ2FXxeXK%2Bwd43hMIyPmAxivnDDLtNedSaV01SN%2FrjEnUwsAvbLbSDmQjP1bdvTs89koprtf8iaoHKGf1ZhH5qZ4B7uKDctx0XhwgOw6R%2BVf5J9zpDnVv5PnNVvnxLahOaFG%2BrT9k28T164SMGSX1EhosLNidLzTi1Q%2BjTtV35v0Xxj0KWgWA9Ka66yGfcIac9gW45HYdVpLtrZ3eUoRg5B%2BHvXvrHc2fS2iPpWLw8c6eTYyFIeEiX%2BfeGKA7IqHst2OZEaaQVll%2BSJJtDQBNqM3Ch2bseR2ZTZt2tvERm2qnJE7xbodbK7tUJ3YCkJN%2F8FcUJBrEc4MAUyZuCQtgaJNjrH6h1%2B1FHbMDokXXtgVejHM0dY3BRrPYPkTiKFjlLgI048uh1mgyplZGrDaZAhasAta5XHf8fbCan5V5CerEp9m04GiWQJxsruytUnB2d1R9O2FdOLhQatzcV%2BuPjvrqPnC4bznhI0u4wwZrVyQY6pgFVYv9njjAwckDjnbf091EkGeAaLubb9pTYtWeUmG%2BOm6k8vmC6Jx3FQ0fsxQ1NB4PvPOnLEJE2U%2FEKvyX7AbgFm30cKzsYmiUaR8PYpUqjflL6c7P%2Bhj6Mdpazx3S%2BLayeoaLFrQ92850G5NJUmvTn2mgI8FyCd0GwY8U1YDQ%2FcNIT5niH7LgjRgU%2B7bM5%2Fi%2BLTg%2F2VzJ7q7whMtbx3XNCpm0gO0i3&X-Amz-Signature=5200b4ba2904170f27e21c9fa5d7d4a3c754df96d153bc1b4c05c63e4cc5caf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


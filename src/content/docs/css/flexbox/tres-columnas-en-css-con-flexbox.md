---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANSUDHV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC4jCJgXbITXIw9xeMN7DgXtQP35nq2dJi1XOGDQNZxhwIgcVHJuAYPpkWdTn9EfFKn0AYP%2FmNZEXmtuBhT94c5W2Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJxhjN2mHU2gsYnHEyrcAw%2BLGiMAYWWrUdTq3ZLC0ezMaZbY%2F0DE2XnsHHBkpbYRrH%2FZmG4Hm51LpQMGHE%2FDYwwqGYrvPuwcKROxq5JLBi3GCJcIhJgYlB2cUiqn79w2sWzV1KXeI3YQ2fm1R4MXcnVgFtioKPd26OklqMJQ63Tb4WbSzbKhvT3YEWDf7%2BfNGBHay4grfLt9CCm3hgh1emJukeUsRIuIWHrrC6O%2FkOF%2BrQHeTd7UpqpK9Qusbo%2Fl86wo7KTMHKverv00X24eqxel0I3ZZ7LlGf9TSPiEzp9pBaGFZS4lq006IyPlDJq5euWlxgSIRm6odBoxs2KoStGSG6g7H6Rm%2FDLam0CG94zh6a%2F%2FhtjSrYxg%2FseRtFkGFNkoKpVoawplzRqBky8qBxMTrBLfuSD0N3PY39N%2BUH%2FVM9els94CXpt9uHLWHVJ7sAxNcBlklj%2FzKUhmUuW9yP5MahkQCXGAczFfZUXYlBKN07kxvBZRfPMzrj3Gj4nz%2BGHz3mjqtV%2BywgyrRxV3rtLQX3PDvdFBvSdrXoUPdzhZR2UKqlbRAvLe90BEI4JDCg3QtfZoswBI7WnHsJ6h2uYeWuhFZbPmxj8nV%2BgHiKXJuUdc7Asl8OGxFmZeQ2MhOHz3pl9BE%2BRFz1RJMNODxskGOqUBSEx%2Fy%2BScEmbhmyVpdHV5ksDFmGaChiOpMCpGJf690SPf%2FI3AJaCBXv07EoCRIPs1IjVI0bErnvFijmTjaiKlBvtK%2BjDtgxjpEttTS4vDs5TDIwHB3uYj9YQBwFwHb10pV1qQ3XkN%2FOVqzfotwMM%2BAdAVmnU5itgJz0y87024OnYm2K2FRliVLASiD6fsqKo9%2Ft4bkpWE9VyM%2B%2B%2BukER8wuuwd%2FXK&X-Amz-Signature=c92f067a392ab5eb459f99aa43908db0a0db9de668ed0a97e60fc69417e08293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANSUDHV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC4jCJgXbITXIw9xeMN7DgXtQP35nq2dJi1XOGDQNZxhwIgcVHJuAYPpkWdTn9EfFKn0AYP%2FmNZEXmtuBhT94c5W2Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJxhjN2mHU2gsYnHEyrcAw%2BLGiMAYWWrUdTq3ZLC0ezMaZbY%2F0DE2XnsHHBkpbYRrH%2FZmG4Hm51LpQMGHE%2FDYwwqGYrvPuwcKROxq5JLBi3GCJcIhJgYlB2cUiqn79w2sWzV1KXeI3YQ2fm1R4MXcnVgFtioKPd26OklqMJQ63Tb4WbSzbKhvT3YEWDf7%2BfNGBHay4grfLt9CCm3hgh1emJukeUsRIuIWHrrC6O%2FkOF%2BrQHeTd7UpqpK9Qusbo%2Fl86wo7KTMHKverv00X24eqxel0I3ZZ7LlGf9TSPiEzp9pBaGFZS4lq006IyPlDJq5euWlxgSIRm6odBoxs2KoStGSG6g7H6Rm%2FDLam0CG94zh6a%2F%2FhtjSrYxg%2FseRtFkGFNkoKpVoawplzRqBky8qBxMTrBLfuSD0N3PY39N%2BUH%2FVM9els94CXpt9uHLWHVJ7sAxNcBlklj%2FzKUhmUuW9yP5MahkQCXGAczFfZUXYlBKN07kxvBZRfPMzrj3Gj4nz%2BGHz3mjqtV%2BywgyrRxV3rtLQX3PDvdFBvSdrXoUPdzhZR2UKqlbRAvLe90BEI4JDCg3QtfZoswBI7WnHsJ6h2uYeWuhFZbPmxj8nV%2BgHiKXJuUdc7Asl8OGxFmZeQ2MhOHz3pl9BE%2BRFz1RJMNODxskGOqUBSEx%2Fy%2BScEmbhmyVpdHV5ksDFmGaChiOpMCpGJf690SPf%2FI3AJaCBXv07EoCRIPs1IjVI0bErnvFijmTjaiKlBvtK%2BjDtgxjpEttTS4vDs5TDIwHB3uYj9YQBwFwHb10pV1qQ3XkN%2FOVqzfotwMM%2BAdAVmnU5itgJz0y87024OnYm2K2FRliVLASiD6fsqKo9%2Ft4bkpWE9VyM%2B%2B%2BukER8wuuwd%2FXK&X-Amz-Signature=62a6deb467bdb9f417d888b373102cd76a288c167ee218589dbd291bddc532b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


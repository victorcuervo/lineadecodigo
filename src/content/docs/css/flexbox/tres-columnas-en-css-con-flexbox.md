---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L33VN22%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDqlrB3r5kzavUYMjktBcUJTG46khTt%2FI04cbaATf%2FNNQIgQaJy%2FHLmP1NDN7cyE%2Fd%2B2zLtI4BduMtm1XnGGVmnfgoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNWlQrSr%2B9EZUb7zbircAyMN8tvNrEPjASd9gFg1sAPtZ%2BMn6ZGY86vLielSJmeIKEPdINz3kPmLvyXH86x0draKa9aZ%2B7iffaYraJfqm5GRW0hmPe7KR%2FbVD2p9sREcD0YEz8NDLzU6rxF%2B%2B0Ihx33ssxDalJsAzsZQqs1PCajBcYymcinlA54bT1KUU52kVX0Ex%2FeVCywJEMwZSXxef2LSd7Zt%2FHhDpqckVqoqqJ5n%2B642aPYIYbxfKJT4P%2FIRswtfaMH0ensc6h%2Bpi8taPsj8opYYXSV9GUZy%2FazddgNPRzut3WQeUTjjR54PUCsYenQKWtTG%2BNc2XwjLvdccm%2B%2BJG783dlJAtUnO5f2TvBvXaLznZ0VVTeiCJXFAPg3lZIuDa3xhsb9zOrdPJcCknUk%2F%2BMUEeFxA%2BXxrHLB%2FSh5WPj106CG7KU27KxAZ9wzWF3ZvkMnY%2FTns6qkF4j7B3vpupTtXfkfHvcOaNHqDyMEL3s0jWUEwes4jUDkDRCK9IGUKECkWNFKaka2Hu5Azjr%2Fv7FhoX5VwzKbDVWLCZNkdbH7KZLeylrc9H6K8DnuFUmFi3EJyEougXJ0TGaKzMkjzvDIxReDtWq0VS8qDG0yIYbSHOKxK%2B1geEDepNfSUOYoisor0fY4nyH9WMMD4wskGOqUBeoXScMTEZ6tH%2FxG2aGa%2FkNOl9VgBR6ZRnwJJG3DBikZLivhxSs%2F30mIb6bqCzFx8vcZeAcB7jrj7KkWfdeJkwsgPvBQItvlwakQsbm%2BZN0R0adL0wcmBqsRwJ59l%2FGHwwxCso1T2JfBXVtrclloLYZ27ghAMgo0tTN3F2T9fj8AJipuV%2FaddDcCPysM1LEXRGca6MBMUrkptYJl8bjH%2B5fmvI4v5&X-Amz-Signature=b480af016ed44b62beedd4e077597e76a586721f98f96c54bfcd9f6b82e8ba5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L33VN22%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDqlrB3r5kzavUYMjktBcUJTG46khTt%2FI04cbaATf%2FNNQIgQaJy%2FHLmP1NDN7cyE%2Fd%2B2zLtI4BduMtm1XnGGVmnfgoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNWlQrSr%2B9EZUb7zbircAyMN8tvNrEPjASd9gFg1sAPtZ%2BMn6ZGY86vLielSJmeIKEPdINz3kPmLvyXH86x0draKa9aZ%2B7iffaYraJfqm5GRW0hmPe7KR%2FbVD2p9sREcD0YEz8NDLzU6rxF%2B%2B0Ihx33ssxDalJsAzsZQqs1PCajBcYymcinlA54bT1KUU52kVX0Ex%2FeVCywJEMwZSXxef2LSd7Zt%2FHhDpqckVqoqqJ5n%2B642aPYIYbxfKJT4P%2FIRswtfaMH0ensc6h%2Bpi8taPsj8opYYXSV9GUZy%2FazddgNPRzut3WQeUTjjR54PUCsYenQKWtTG%2BNc2XwjLvdccm%2B%2BJG783dlJAtUnO5f2TvBvXaLznZ0VVTeiCJXFAPg3lZIuDa3xhsb9zOrdPJcCknUk%2F%2BMUEeFxA%2BXxrHLB%2FSh5WPj106CG7KU27KxAZ9wzWF3ZvkMnY%2FTns6qkF4j7B3vpupTtXfkfHvcOaNHqDyMEL3s0jWUEwes4jUDkDRCK9IGUKECkWNFKaka2Hu5Azjr%2Fv7FhoX5VwzKbDVWLCZNkdbH7KZLeylrc9H6K8DnuFUmFi3EJyEougXJ0TGaKzMkjzvDIxReDtWq0VS8qDG0yIYbSHOKxK%2B1geEDepNfSUOYoisor0fY4nyH9WMMD4wskGOqUBeoXScMTEZ6tH%2FxG2aGa%2FkNOl9VgBR6ZRnwJJG3DBikZLivhxSs%2F30mIb6bqCzFx8vcZeAcB7jrj7KkWfdeJkwsgPvBQItvlwakQsbm%2BZN0R0adL0wcmBqsRwJ59l%2FGHwwxCso1T2JfBXVtrclloLYZ27ghAMgo0tTN3F2T9fj8AJipuV%2FaddDcCPysM1LEXRGca6MBMUrkptYJl8bjH%2B5fmvI4v5&X-Amz-Signature=d95288fa668b549874f5ded9ecf6d64e4ed743d45239adb54169a6f9aba3e629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


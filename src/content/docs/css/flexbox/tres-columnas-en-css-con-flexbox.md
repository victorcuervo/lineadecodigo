---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBX2TTD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDNbDAn2pwKxRr3V%2FrlBJkfL8VZs5O1f4QXm6v0nTilswIgZ%2FCJQRpkdgDDrZjS3z7yS%2FAtXPajpUrVKNjodKHMthQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKOH0yNyxOv9KTxgdircA3FB7%2BG1WccKRmQo9n7Gr2FPoptbB6nwwrHgzrfAJvnDq%2FwHylWDy6jET4CccEYPyRcSVVSFn77o3wIl9jieQvCnzvXjbFme8Mn2oHiIYL8p9e1on4qAF6r71rREyjUZzVzIKrC1ML0px6nZ%2BK38id0cEqG6Y6CEfeH9ArCp9OYcvYht1aLdVT1q6gwZVHj6XWUAABhG8xL2KmbrSEERvvkfmME%2BcyUzyLLrLp0Kw759HDovCG67qBwt4VfmE1Y9q97EV76MvkSlhVRTfJIVz4p6j8eAOU83HBNtGVaXwBgu3NGrAyen8EF9IKCOU0UNSZNGZpPKlgMfRwpFiNhjjgqH6NzYlR63gsBUc%2BZea1bPGbi4NOOfhT4e4iQSWrBYbyVqspXyvRcUSZMRyMPM6IdqmIzlxfPB2HM9JuuTcCtU9wFwcNNcOirr7McnD8MYB%2FLexteGZT6Ww7Gb1L53Dpwq%2BmI7WtPyWHfi3iYJyv%2BGkc3EyC%2Bt8uPWKjXzcGXMj0qWvbzb2pi99UHWdbqTpAMIsletjGwXqfmPO%2FKjaI8%2FMOJ6bZpDADxblZVgbdUivNrztmh6cP8UesZwA5zD5RuxbhuVnKgGwRxWl1%2BPbwocvevDzDi5P5tK4KBmMJaExskGOqUBaLogfkNnWCltD2F56iijgpLa%2B33pGQxJ%2Fp4SwNILt2mdEFDhTGZ7Y0tGgWRoryzvBuco78iNmhOdA7T%2BpybIdXpfFmlA8sdQ9cObLGFrs0ZCVDmXBRSz1Jwnwi37KHykrdsFtDrJb3x7a6dd%2Fd3tBffsBykc%2FDDoC7Fa3mBxicrlzh0hp3250mDYOCXbTWQyNP3GQ9VtaZRPVoHHKymi1KKQu64m&X-Amz-Signature=8a6fcf85ff1653500dc935ebf0e315201cba5c0c7e2c1cfecb7389551ba17936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBX2TTD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDNbDAn2pwKxRr3V%2FrlBJkfL8VZs5O1f4QXm6v0nTilswIgZ%2FCJQRpkdgDDrZjS3z7yS%2FAtXPajpUrVKNjodKHMthQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKOH0yNyxOv9KTxgdircA3FB7%2BG1WccKRmQo9n7Gr2FPoptbB6nwwrHgzrfAJvnDq%2FwHylWDy6jET4CccEYPyRcSVVSFn77o3wIl9jieQvCnzvXjbFme8Mn2oHiIYL8p9e1on4qAF6r71rREyjUZzVzIKrC1ML0px6nZ%2BK38id0cEqG6Y6CEfeH9ArCp9OYcvYht1aLdVT1q6gwZVHj6XWUAABhG8xL2KmbrSEERvvkfmME%2BcyUzyLLrLp0Kw759HDovCG67qBwt4VfmE1Y9q97EV76MvkSlhVRTfJIVz4p6j8eAOU83HBNtGVaXwBgu3NGrAyen8EF9IKCOU0UNSZNGZpPKlgMfRwpFiNhjjgqH6NzYlR63gsBUc%2BZea1bPGbi4NOOfhT4e4iQSWrBYbyVqspXyvRcUSZMRyMPM6IdqmIzlxfPB2HM9JuuTcCtU9wFwcNNcOirr7McnD8MYB%2FLexteGZT6Ww7Gb1L53Dpwq%2BmI7WtPyWHfi3iYJyv%2BGkc3EyC%2Bt8uPWKjXzcGXMj0qWvbzb2pi99UHWdbqTpAMIsletjGwXqfmPO%2FKjaI8%2FMOJ6bZpDADxblZVgbdUivNrztmh6cP8UesZwA5zD5RuxbhuVnKgGwRxWl1%2BPbwocvevDzDi5P5tK4KBmMJaExskGOqUBaLogfkNnWCltD2F56iijgpLa%2B33pGQxJ%2Fp4SwNILt2mdEFDhTGZ7Y0tGgWRoryzvBuco78iNmhOdA7T%2BpybIdXpfFmlA8sdQ9cObLGFrs0ZCVDmXBRSz1Jwnwi37KHykrdsFtDrJb3x7a6dd%2Fd3tBffsBykc%2FDDoC7Fa3mBxicrlzh0hp3250mDYOCXbTWQyNP3GQ9VtaZRPVoHHKymi1KKQu64m&X-Amz-Signature=7dbc9e69a7015d92d491a7904378b3a650232f4d7659cc77c406394bb8f1896a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


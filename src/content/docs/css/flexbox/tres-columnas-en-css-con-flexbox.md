---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSALOZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDz%2FD%2F85XyQmnnzQlT15bWZxRyYZVDT9BWGxCpvIvokQwIhANm9MyBlQmjZ7aPTUHFdpZL5FH1bE%2BJtEz%2FQvieawJYGKv8DCDsQABoMNjM3NDIzMTgzODA1IgwHK0kVYoNybfoeKqYq3APi7JGDv6m3X3el%2B9UoLJmRa%2BQBCHd8Mcsa9jYx2Dh8QCgp%2BPdUiu19TAU4v6iCoZ%2B3pH0HjZLHfTGisiKWr%2BU%2ByNKusbDOf03Cnp2%2FxNI%2F9YC%2BWVsmc07d0S1pibEKTglocrR1oT8sJRoGA5ljNiWhay8S5QU3WrZPS0Vd%2FTsIyrL9%2BW75z8WYByWOl8PUUY9%2Bnd%2FbzSBTOd1uQdxHLOlVfYwn7lk4BCVTe3iVcT%2F8JPGCd7lcOU0FtnbJoIty4gmCVwDTscCCm0UQqeYRv9jUWE0%2BVNiBrIQWj6PhtQXQKL7jAd78xYrEGgQZW7Mw5B0Gl6qP84n%2FXdBYy4jRPJRg%2FXXEgCFgIN6GTnwLgdh0wKsIJe9uLpwrdrVdZ5tnCGM8PNPieqCDGxxEKR26Z1u1ttLog7g%2FhRGjJoK1%2F1I8YD3qZTfGCoDQ0tXCnWIoNPmVGYPUUhalNTknrnL4htzWrJ32XFJC3WmEyqkdEVJR07h5Nygwe5zb0rh80I2uTTHSF0%2Fpze2V6fuwk%2BEc489qCGY%2F3wzG84SeW%2BhebXi4O9bxjN0zYOr9RcT%2BOq9GK1XQmlhGG01UBD%2FEdrl%2BRN4IVDV9EFnkOOJk17d8KOHeL6G3%2Fr5706GABrEkmDDv1MPJBjqkASyDbf6wj%2BgcMroRGAZQqAeTYnbClDbBOrZN10tgE0Ldhf%2FQILzBMWrVTtgL9ozvj2m2gLzULe%2FaaZdWW4w2ERvtdVeCRqQzxVEM9d6nO4FrrjoScgrc8BKD6gwmyOnN5r6LRmgq9CA%2BxDcjZI7Cc%2BWcpwYYed4CbOiFCO3KIfGXDRp3qXHfnn9w6CfblR3rw7E%2F8qkbjVV8cDTaEtoel15BzPYS&X-Amz-Signature=3e9c6b1391d38bd0d68a98795b9ab33e004c50968c67abd33a134ab89aa65559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSALOZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDz%2FD%2F85XyQmnnzQlT15bWZxRyYZVDT9BWGxCpvIvokQwIhANm9MyBlQmjZ7aPTUHFdpZL5FH1bE%2BJtEz%2FQvieawJYGKv8DCDsQABoMNjM3NDIzMTgzODA1IgwHK0kVYoNybfoeKqYq3APi7JGDv6m3X3el%2B9UoLJmRa%2BQBCHd8Mcsa9jYx2Dh8QCgp%2BPdUiu19TAU4v6iCoZ%2B3pH0HjZLHfTGisiKWr%2BU%2ByNKusbDOf03Cnp2%2FxNI%2F9YC%2BWVsmc07d0S1pibEKTglocrR1oT8sJRoGA5ljNiWhay8S5QU3WrZPS0Vd%2FTsIyrL9%2BW75z8WYByWOl8PUUY9%2Bnd%2FbzSBTOd1uQdxHLOlVfYwn7lk4BCVTe3iVcT%2F8JPGCd7lcOU0FtnbJoIty4gmCVwDTscCCm0UQqeYRv9jUWE0%2BVNiBrIQWj6PhtQXQKL7jAd78xYrEGgQZW7Mw5B0Gl6qP84n%2FXdBYy4jRPJRg%2FXXEgCFgIN6GTnwLgdh0wKsIJe9uLpwrdrVdZ5tnCGM8PNPieqCDGxxEKR26Z1u1ttLog7g%2FhRGjJoK1%2F1I8YD3qZTfGCoDQ0tXCnWIoNPmVGYPUUhalNTknrnL4htzWrJ32XFJC3WmEyqkdEVJR07h5Nygwe5zb0rh80I2uTTHSF0%2Fpze2V6fuwk%2BEc489qCGY%2F3wzG84SeW%2BhebXi4O9bxjN0zYOr9RcT%2BOq9GK1XQmlhGG01UBD%2FEdrl%2BRN4IVDV9EFnkOOJk17d8KOHeL6G3%2Fr5706GABrEkmDDv1MPJBjqkASyDbf6wj%2BgcMroRGAZQqAeTYnbClDbBOrZN10tgE0Ldhf%2FQILzBMWrVTtgL9ozvj2m2gLzULe%2FaaZdWW4w2ERvtdVeCRqQzxVEM9d6nO4FrrjoScgrc8BKD6gwmyOnN5r6LRmgq9CA%2BxDcjZI7Cc%2BWcpwYYed4CbOiFCO3KIfGXDRp3qXHfnn9w6CfblR3rw7E%2F8qkbjVV8cDTaEtoel15BzPYS&X-Amz-Signature=3a6b3d79502709fb7b716b8ea2be8a8eee7bd6b7700993baf0efaf67c8eb8ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


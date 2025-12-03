---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLXSELU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF7Q2wWX5RlAn%2BDIlUHCFrYl7UEZYEdCnQk8waTbKJG0AiAK6sSE6fhYQ7K1%2BxS88lFhKg55IiRvtWR%2FqdB2JgAMJSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMGV9h0aS4ZnSEk1O0KtwD2zuJlBkDOulMu8PR9WturBIwpbXgQD8RldQRqPUpIFohmVxYrWYlQUVGNYZzK69aJa5HJwU87PxJHRBaOudzFswvHzWn0%2Bc93jhjVLFQDM8gXbVfG8VOOTEH%2BDyV%2B95Q7HaPWeS0C3rpfx6S%2F1mjF81lTMkrv9QKA8GrZOcbTJc8wuZIBFJU3VlFPMcHfSJ20BOqBVtCYERPnMeX6xPiHyi559VC4EFkXL9ZoCCM440%2B%2B4xKI0PwFDRSe%2BCUA7nB3V3EUHGMzMF5qGAylXu3QOJ%2FQOTKAUxZsa%2BEPqGSNXPV0%2FW1hCKLgZus8CksnFoEkvSmOb7%2B8ek1Ccc%2BJmsThNU0T9JCmwrXLN0TQ8u2Ummv9vb%2FLbM8yzJVYtxRqkFqp7%2FbAim8flVlKed%2BNJyQ86ZZvX6vBh7thIumIXozAWaparLqBfmF%2Fy6BP5zqQRnItQ9DbI46nMSNKAAl3AngIl4EW%2BnPk03rpTO2vF8pOTTYFGOvfQuRHwPbIOAvNFrkCJnil0BB1cBpIH5Mdkw4pGBciknpAKpOwKI%2Fm19FiYXvwYk%2BNQUyLro0fY9bdVy9Ujy7cMssK7xCJiht4IqaZ4Fl%2BrSTGgCI7615TNzl9vvaHOim5lhFZrr1ReQw6Ja%2ByQY6pgHQfyyVecpJ5XQAzJUamH%2Bu0%2Bt1U9K0p78cnBMUbsdsSR%2FSvGWEiok1886oqLQ6JfP1gPaY8MZ9ps33a3NDnbf9Dc3xSR0DyLvONXOKmKLEqn34GhSEMqG6Gc7VcnxsqPG02Uj6lktraho%2BQfD3XWgGhyuf219r5CTaZU%2BQssOS%2Btigq%2F5BRx%2FpJUNJhxYGtda0OeL1dLjM0djHHWi8FdOCZTXPMSVO&X-Amz-Signature=6d8f4daa355d6d5ca13ea3d21df54a9726b344094519f9f29348a7a9f14ab163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLXSELU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF7Q2wWX5RlAn%2BDIlUHCFrYl7UEZYEdCnQk8waTbKJG0AiAK6sSE6fhYQ7K1%2BxS88lFhKg55IiRvtWR%2FqdB2JgAMJSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMGV9h0aS4ZnSEk1O0KtwD2zuJlBkDOulMu8PR9WturBIwpbXgQD8RldQRqPUpIFohmVxYrWYlQUVGNYZzK69aJa5HJwU87PxJHRBaOudzFswvHzWn0%2Bc93jhjVLFQDM8gXbVfG8VOOTEH%2BDyV%2B95Q7HaPWeS0C3rpfx6S%2F1mjF81lTMkrv9QKA8GrZOcbTJc8wuZIBFJU3VlFPMcHfSJ20BOqBVtCYERPnMeX6xPiHyi559VC4EFkXL9ZoCCM440%2B%2B4xKI0PwFDRSe%2BCUA7nB3V3EUHGMzMF5qGAylXu3QOJ%2FQOTKAUxZsa%2BEPqGSNXPV0%2FW1hCKLgZus8CksnFoEkvSmOb7%2B8ek1Ccc%2BJmsThNU0T9JCmwrXLN0TQ8u2Ummv9vb%2FLbM8yzJVYtxRqkFqp7%2FbAim8flVlKed%2BNJyQ86ZZvX6vBh7thIumIXozAWaparLqBfmF%2Fy6BP5zqQRnItQ9DbI46nMSNKAAl3AngIl4EW%2BnPk03rpTO2vF8pOTTYFGOvfQuRHwPbIOAvNFrkCJnil0BB1cBpIH5Mdkw4pGBciknpAKpOwKI%2Fm19FiYXvwYk%2BNQUyLro0fY9bdVy9Ujy7cMssK7xCJiht4IqaZ4Fl%2BrSTGgCI7615TNzl9vvaHOim5lhFZrr1ReQw6Ja%2ByQY6pgHQfyyVecpJ5XQAzJUamH%2Bu0%2Bt1U9K0p78cnBMUbsdsSR%2FSvGWEiok1886oqLQ6JfP1gPaY8MZ9ps33a3NDnbf9Dc3xSR0DyLvONXOKmKLEqn34GhSEMqG6Gc7VcnxsqPG02Uj6lktraho%2BQfD3XWgGhyuf219r5CTaZU%2BQssOS%2Btigq%2F5BRx%2FpJUNJhxYGtda0OeL1dLjM0djHHWi8FdOCZTXPMSVO&X-Amz-Signature=72c7c6ae3401858f49d8915d81a15ebc1eaf58323b623f843126dfd24fe041ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


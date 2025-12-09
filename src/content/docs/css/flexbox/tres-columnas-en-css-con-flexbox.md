---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXO233O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETX%2BhJPGTq%2BumdSKJtZ%2FEAfCaoxVq02W80yJLjgfTjOAiB7xPZ59ME%2BY19Kjb2i%2BLx0IAwBusfg5l%2BmtXY6IbaFLiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BzECC9PZLN3T08%2BKtwDBqnKjVLEvHa%2BRO9zMVLQ0t4CWHoWV6NvzUmXOfzoilN13xUSp%2F%2FtzG11hf4Gc4Nst75jsCqg1jEAMwRhSJYuvX4hLgrtSlUiBRvm7LDoy106EOR%2BzLiVyXrBSv59M%2FB3H%2FJv8CZGP5RUhLSu0Q%2FUZ3zBfloy6TsOb489KqluKyGnNHr7ZNtbXuJRHFs%2FT7gIoLMaoOOPWNuFSE%2BRqJwE6Syn95viegGb%2FQe6IY6VnFOjLfz0W0WvCl5MzHWnO5rck8IMy4b53C%2F8kXabd%2FuwjDpoTN14y%2Fqv8AeGRSXIpCP8TCIXUSoZ40%2FcJzBztRc8oComlLnASCLWzTxZ2Txly%2BXbsggTZ07lUzXaKSHG4rhConagTEtqojipSuOtGlJXqyXHaJm6%2BheoXRj2hFyETR77p0WJ4TGB9xisjz1tTB7ToYKgd2BsG6M44FtY4YKpaiM29SlGOLpbpKj57KlOy1QhlqGuOm5bfLz7gjPefSmz9rNOKLqbIVTUWafLOsTAUbcaARxx0F6aoY2%2F4ppa1XtQOegiNGM5tmoiUojd6X%2FRxd8OLEVh%2FkO2AyyziKieRZ%2BDcIkE9A3EgDxLxUVejw3NTQ%2F2uuLc2LNK%2BwPXexqadbnm9Iq7fu4nnV8wwI7eyQY6pgEVcnJuLraIBCrM%2FPX3cPs0gEX9%2FV856soaXkudiPiuby3hPj6FeMkeDI%2BVe9WEViUO8z%2B2xuCXNaPFKm%2FzJBqWe91tdI%2BRmImxEf2ZnAu3Wbtq2WAMYY10eBZ2XEay70zK1lneJyuE7ztqoIygx9WFuEAATuxMECV99xX%2FhtEO1uKYoOJ4UkREOBiIQwywEwQkEfXAALK5rURI6IwOoma3LWvVI9Ll&X-Amz-Signature=5079b657e4838f7b5d8fef5327b7c6e96236c5588a237e4bea53d4d71fc70966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXO233O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETX%2BhJPGTq%2BumdSKJtZ%2FEAfCaoxVq02W80yJLjgfTjOAiB7xPZ59ME%2BY19Kjb2i%2BLx0IAwBusfg5l%2BmtXY6IbaFLiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BzECC9PZLN3T08%2BKtwDBqnKjVLEvHa%2BRO9zMVLQ0t4CWHoWV6NvzUmXOfzoilN13xUSp%2F%2FtzG11hf4Gc4Nst75jsCqg1jEAMwRhSJYuvX4hLgrtSlUiBRvm7LDoy106EOR%2BzLiVyXrBSv59M%2FB3H%2FJv8CZGP5RUhLSu0Q%2FUZ3zBfloy6TsOb489KqluKyGnNHr7ZNtbXuJRHFs%2FT7gIoLMaoOOPWNuFSE%2BRqJwE6Syn95viegGb%2FQe6IY6VnFOjLfz0W0WvCl5MzHWnO5rck8IMy4b53C%2F8kXabd%2FuwjDpoTN14y%2Fqv8AeGRSXIpCP8TCIXUSoZ40%2FcJzBztRc8oComlLnASCLWzTxZ2Txly%2BXbsggTZ07lUzXaKSHG4rhConagTEtqojipSuOtGlJXqyXHaJm6%2BheoXRj2hFyETR77p0WJ4TGB9xisjz1tTB7ToYKgd2BsG6M44FtY4YKpaiM29SlGOLpbpKj57KlOy1QhlqGuOm5bfLz7gjPefSmz9rNOKLqbIVTUWafLOsTAUbcaARxx0F6aoY2%2F4ppa1XtQOegiNGM5tmoiUojd6X%2FRxd8OLEVh%2FkO2AyyziKieRZ%2BDcIkE9A3EgDxLxUVejw3NTQ%2F2uuLc2LNK%2BwPXexqadbnm9Iq7fu4nnV8wwI7eyQY6pgEVcnJuLraIBCrM%2FPX3cPs0gEX9%2FV856soaXkudiPiuby3hPj6FeMkeDI%2BVe9WEViUO8z%2B2xuCXNaPFKm%2FzJBqWe91tdI%2BRmImxEf2ZnAu3Wbtq2WAMYY10eBZ2XEay70zK1lneJyuE7ztqoIygx9WFuEAATuxMECV99xX%2FhtEO1uKYoOJ4UkREOBiIQwywEwQkEfXAALK5rURI6IwOoma3LWvVI9Ll&X-Amz-Signature=6313bcbb9a076886beba70e23d521db164c629e8563d49e23e70d1297fcb9702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


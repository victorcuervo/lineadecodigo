---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATADJFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAmqQGDsneT%2F8XxOgGLxErS0RRBKLBoo9HFF3NE%2BZwIhAIlomBCjuxPJnf7GFK%2FBHzxpQ%2FYxV1oBrQ073Iyin7rnKv8DCFUQABoMNjM3NDIzMTgzODA1IgwFSJg%2BoFoRh8QjPFUq3AOypjo6aEkzNwl8Ti9GQOcjqTW0JSW2VDaGR7p4sf4Od9IdYMffUTX6zoDxaYg1keYHfq4BXZa9bJqZODh77KG7aXiTsKisFpHxNSziC8DQDTttNz7wfo4%2BlnElWIOjFUoqhDiGlvPjqxkKwfvazwwjSv1Gdt3B7mOeSAYaCBa3P7PbynBJSvLKfOhGdV%2F0jqStwsaaqj79q08OfDvRRXC76o58u02m3HVHZfybeXAwew%2FmnJz%2F1eFxoPBa6NrajDi8eLtoCW1nB5Uvlg8rRivxOgr0CObkBaGn8NWH8y6klIE3itf0aT1yMrR4mRh2xTb3yNP%2F5ZVS9TGuS4RKmTk%2FtG4k87ptbQ3tAlv7VJEKbiVUe5ABuvl0Hlnxulmmwe7X2%2Fq8nx6Az%2F4C%2BL9MzHgqoOYDwzRJO%2BS9GiOZLJr1w2wqG4BQ6E8F2VaDGgpTnl0iojodFHOx96hkKB035OcPeRZFi4dE1bASSJQa%2F1xjRAuZXC7cXCwNf9SIil1BHmKDhcFseidz4y3mtcLCgnF1jr9nWLGddPzsATkrw86H%2FYewKLVrEskP5UUbRkVTxp9KKQUs5ZyHKmgnSncjwCYEBDpEBsixOVxkEHouoJLfusJ4yKo1goLFRx2MxDDoqcnJBjqkAadRq2SV3dsii5FVlcmVijulUzlI9YlpZsho%2BD81oYXURpM7w0TRCuF%2BAf112TL0W4OgPe6bCmVokWm0s0S37K8Oq97BDMLO%2BhVdvrY1eZpMg%2Fr%2Fa6G0G3X%2F6uLmkBgLnwol5LSq9TLmnApgQ7jSpbyFr5I2OqNOlSu0uieGtrIJFA8W8eCUhSuuHJ2OhhrKo6kg%2FB%2Fc2cSSIeqWtQ3QSts1E1MY&X-Amz-Signature=bf5ec482c9c2e7d8eaa93e781f3623ee331d94535b75d53dc5b40d61300a910c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATADJFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAmqQGDsneT%2F8XxOgGLxErS0RRBKLBoo9HFF3NE%2BZwIhAIlomBCjuxPJnf7GFK%2FBHzxpQ%2FYxV1oBrQ073Iyin7rnKv8DCFUQABoMNjM3NDIzMTgzODA1IgwFSJg%2BoFoRh8QjPFUq3AOypjo6aEkzNwl8Ti9GQOcjqTW0JSW2VDaGR7p4sf4Od9IdYMffUTX6zoDxaYg1keYHfq4BXZa9bJqZODh77KG7aXiTsKisFpHxNSziC8DQDTttNz7wfo4%2BlnElWIOjFUoqhDiGlvPjqxkKwfvazwwjSv1Gdt3B7mOeSAYaCBa3P7PbynBJSvLKfOhGdV%2F0jqStwsaaqj79q08OfDvRRXC76o58u02m3HVHZfybeXAwew%2FmnJz%2F1eFxoPBa6NrajDi8eLtoCW1nB5Uvlg8rRivxOgr0CObkBaGn8NWH8y6klIE3itf0aT1yMrR4mRh2xTb3yNP%2F5ZVS9TGuS4RKmTk%2FtG4k87ptbQ3tAlv7VJEKbiVUe5ABuvl0Hlnxulmmwe7X2%2Fq8nx6Az%2F4C%2BL9MzHgqoOYDwzRJO%2BS9GiOZLJr1w2wqG4BQ6E8F2VaDGgpTnl0iojodFHOx96hkKB035OcPeRZFi4dE1bASSJQa%2F1xjRAuZXC7cXCwNf9SIil1BHmKDhcFseidz4y3mtcLCgnF1jr9nWLGddPzsATkrw86H%2FYewKLVrEskP5UUbRkVTxp9KKQUs5ZyHKmgnSncjwCYEBDpEBsixOVxkEHouoJLfusJ4yKo1goLFRx2MxDDoqcnJBjqkAadRq2SV3dsii5FVlcmVijulUzlI9YlpZsho%2BD81oYXURpM7w0TRCuF%2BAf112TL0W4OgPe6bCmVokWm0s0S37K8Oq97BDMLO%2BhVdvrY1eZpMg%2Fr%2Fa6G0G3X%2F6uLmkBgLnwol5LSq9TLmnApgQ7jSpbyFr5I2OqNOlSu0uieGtrIJFA8W8eCUhSuuHJ2OhhrKo6kg%2FB%2Fc2cSSIeqWtQ3QSts1E1MY&X-Amz-Signature=79defc4d13ab6dee4f137c552db1de6fc621fb522947a0c21439469062f8ad20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


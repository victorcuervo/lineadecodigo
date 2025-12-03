---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVD7NHRV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCu%2BmOsHa0qtSJ%2FITmxJNBQuIAEbsfGUeAMD6321gMa8QIhAL9bzm40MozxaKa6otwgxpsBCVCM%2BMeSbM0ritLV9ZQPKv8DCDYQABoMNjM3NDIzMTgzODA1Igyt2D1Qt8DYy43YDN0q3AM9SIBYNexzgJ2O2Jp7E0ZU3DRQmyCfpG4YUBCg9P3TtBjvThKwJQdcjSBNunxcu34pJVuAu3igmoJ6g9GX1VHfFSsGKLIiDK%2FE6NYvBZcTgAMHqkwhl21X930kvflmqsGjBbFlOW4fBEo0cuECKxW3V5Ft8isFx7W%2F9G8fCe0I0FKAxHT1tvBOi4JEOi%2BwYwGQmpKrgHqyVYp8Gkaus9vzj1iRAkktWGJLPmbVb2xKLNBLmo%2BQ5csA9aTk5Gq8CMzX2httetcJtDT8GBz4IkRun5FikLVMcwcOLDZagDrFfPcA1JkPRj2BLb8522sCv18c7p89hOnOoM2%2BEk%2B7DU78PCMakEijWdyweMqbINUDdHZhS0bKFXnX0GZdDeoOgJHy%2F7DLI9GY3Rtiv0MGiameN%2BCSCOfzzcTs1F%2BHT8%2FVUBWIfqVuFZO9w69Bh5X1n27FWSHIPTj9J0R8Ka%2BJAa1QcRa9bnWwgzWz5qeJssRN5L4WRGLjgYTdttLH5LSGjsjCsQ%2FEM1jlIlkJUmt%2FTjXKC5sWlyXTxJayX9XNUaiWYSZU7Wn9o3xYaksrVA%2Fh5jeOShmnaO4tVBre%2BalTC6NCWQpZCMXvHxTjUKBp6grVDGlMLPGxyJbYEW2K%2FjDovcLJBjqkAeK7TZW9807U1hyU9HLDJ%2BX10rcqV7HIZlcBJkWoGp%2FGwOBnaTvKIxeFcMqBr4%2B81Hw8TNhMRIMI5TW8Jud3MoFz0szV1pxjMEb7eecW11frS34qaT6K8pnUWSkBSLqrpsPK9Q5n%2F2wILTypHx%2B%2Fjt%2B4n8AvCOc2PPirwA%2BMEk0HtLFVqTgd58k2BoF%2B53uhMgMIkHByBITt2Y5HwDNN5xy0pQ7t&X-Amz-Signature=cb4c7f32bd431772bc7f51bc9b89573331567bc36c5b12d355a959864a5e55b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVD7NHRV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCu%2BmOsHa0qtSJ%2FITmxJNBQuIAEbsfGUeAMD6321gMa8QIhAL9bzm40MozxaKa6otwgxpsBCVCM%2BMeSbM0ritLV9ZQPKv8DCDYQABoMNjM3NDIzMTgzODA1Igyt2D1Qt8DYy43YDN0q3AM9SIBYNexzgJ2O2Jp7E0ZU3DRQmyCfpG4YUBCg9P3TtBjvThKwJQdcjSBNunxcu34pJVuAu3igmoJ6g9GX1VHfFSsGKLIiDK%2FE6NYvBZcTgAMHqkwhl21X930kvflmqsGjBbFlOW4fBEo0cuECKxW3V5Ft8isFx7W%2F9G8fCe0I0FKAxHT1tvBOi4JEOi%2BwYwGQmpKrgHqyVYp8Gkaus9vzj1iRAkktWGJLPmbVb2xKLNBLmo%2BQ5csA9aTk5Gq8CMzX2httetcJtDT8GBz4IkRun5FikLVMcwcOLDZagDrFfPcA1JkPRj2BLb8522sCv18c7p89hOnOoM2%2BEk%2B7DU78PCMakEijWdyweMqbINUDdHZhS0bKFXnX0GZdDeoOgJHy%2F7DLI9GY3Rtiv0MGiameN%2BCSCOfzzcTs1F%2BHT8%2FVUBWIfqVuFZO9w69Bh5X1n27FWSHIPTj9J0R8Ka%2BJAa1QcRa9bnWwgzWz5qeJssRN5L4WRGLjgYTdttLH5LSGjsjCsQ%2FEM1jlIlkJUmt%2FTjXKC5sWlyXTxJayX9XNUaiWYSZU7Wn9o3xYaksrVA%2Fh5jeOShmnaO4tVBre%2BalTC6NCWQpZCMXvHxTjUKBp6grVDGlMLPGxyJbYEW2K%2FjDovcLJBjqkAeK7TZW9807U1hyU9HLDJ%2BX10rcqV7HIZlcBJkWoGp%2FGwOBnaTvKIxeFcMqBr4%2B81Hw8TNhMRIMI5TW8Jud3MoFz0szV1pxjMEb7eecW11frS34qaT6K8pnUWSkBSLqrpsPK9Q5n%2F2wILTypHx%2B%2Fjt%2B4n8AvCOc2PPirwA%2BMEk0HtLFVqTgd58k2BoF%2B53uhMgMIkHByBITt2Y5HwDNN5xy0pQ7t&X-Amz-Signature=065614df2f757014cf9dedc79b80d1e63de6d0a91e8867910be6abc3ee03fc59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


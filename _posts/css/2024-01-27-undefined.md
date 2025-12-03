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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZBKEK5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD3IyV0TjcdGne7t45GTIiowj7gR8iwOqxqCuzjYftIZAIhAJ4Q2oAm86vkoIuL2jvPoMtLJXu7a4RJKAaXHtXFG4K%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgziE%2Flj5e7lI%2FWPASkq3AMUWw%2FteW%2FndYjHnrNC6ekapDzif%2Bh2bSorRT8alPLAp%2Bhc8%2BUHh7HgPHiz6IhugCkkpNqppIzB0rVFsiJV4qN%2BfCVYLdq14CUuMCGwdgB2IbI8einHmAR9JkPgfdA3afMF9KJTle6FF66Fz0QpYkM8P7azD1DzHuVzFsQF2O29y%2BkwdgyX9ITAUr8csGa3JAQjzZUIHn1ViCasGge2BLOgUJTlXecU4nhKvLkHqvMLJTqJ0WpAXRB%2BMTkZscNeHgwstIjuZ7eejTLDnB02a0%2BeTqFlm12KNAFCerkvlzekj0nwbhs0Xx9vxe0inrghl7InrJx00DAr2r%2FTkxhxEx7RigQ20pYV1thaOxNoHcCGMdedwTbJvUhxUUCAH9iU7ZjqAvuy1Xwy5l%2FDtZXnGnonuAF75Lr1y5b%2B4EHXhKXBadSZjRsOVzqYq77AVgFpVaJBJ8spWNVjEXKLabvRH%2B70XkNY0XPg8l1AMkh83CXdfMDv7MzfJ4xmAhYNQ0QyvgDhOSXLVbph3RrydnUjoBTD1p9L%2FF14wQGxuqwQZSVp2LB9CYhcro9UAyQihssR8%2FqbkqCn%2F7CFBjmpVmut1V%2BdLPIbxWw8Aw7DV%2BuXb8rOAMI2MMpY0ziXpQ6rJjCQmr%2FJBjqkAcynX%2Fh6tbInGyNCJIJAWOEmoR7FiEiLf2a7%2BKMhb%2B8FCLntHx2yCGGgZpcO3ezYlciTGgCTcgt6p%2BQ7WS8ToP4HUipOLv%2BUivroR2E9RDLg9deSAa1lo7iwnOuqVp4Gn7daU8PYUvXBWDDANdAtNUv%2BySlXKyQrDaWsNP%2FCOjH64goEVgvxfYWxtHg4J%2FXYpLYgaGwcHhpiuL4EYwXsEVDMAnEl&X-Amz-Signature=f49c6d63e6efb82985d887c1eb2c5a95bc731a572195b7e8731c17f433f553b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZBKEK5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD3IyV0TjcdGne7t45GTIiowj7gR8iwOqxqCuzjYftIZAIhAJ4Q2oAm86vkoIuL2jvPoMtLJXu7a4RJKAaXHtXFG4K%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgziE%2Flj5e7lI%2FWPASkq3AMUWw%2FteW%2FndYjHnrNC6ekapDzif%2Bh2bSorRT8alPLAp%2Bhc8%2BUHh7HgPHiz6IhugCkkpNqppIzB0rVFsiJV4qN%2BfCVYLdq14CUuMCGwdgB2IbI8einHmAR9JkPgfdA3afMF9KJTle6FF66Fz0QpYkM8P7azD1DzHuVzFsQF2O29y%2BkwdgyX9ITAUr8csGa3JAQjzZUIHn1ViCasGge2BLOgUJTlXecU4nhKvLkHqvMLJTqJ0WpAXRB%2BMTkZscNeHgwstIjuZ7eejTLDnB02a0%2BeTqFlm12KNAFCerkvlzekj0nwbhs0Xx9vxe0inrghl7InrJx00DAr2r%2FTkxhxEx7RigQ20pYV1thaOxNoHcCGMdedwTbJvUhxUUCAH9iU7ZjqAvuy1Xwy5l%2FDtZXnGnonuAF75Lr1y5b%2B4EHXhKXBadSZjRsOVzqYq77AVgFpVaJBJ8spWNVjEXKLabvRH%2B70XkNY0XPg8l1AMkh83CXdfMDv7MzfJ4xmAhYNQ0QyvgDhOSXLVbph3RrydnUjoBTD1p9L%2FF14wQGxuqwQZSVp2LB9CYhcro9UAyQihssR8%2FqbkqCn%2F7CFBjmpVmut1V%2BdLPIbxWw8Aw7DV%2BuXb8rOAMI2MMpY0ziXpQ6rJjCQmr%2FJBjqkAcynX%2Fh6tbInGyNCJIJAWOEmoR7FiEiLf2a7%2BKMhb%2B8FCLntHx2yCGGgZpcO3ezYlciTGgCTcgt6p%2BQ7WS8ToP4HUipOLv%2BUivroR2E9RDLg9deSAa1lo7iwnOuqVp4Gn7daU8PYUvXBWDDANdAtNUv%2BySlXKyQrDaWsNP%2FCOjH64goEVgvxfYWxtHg4J%2FXYpLYgaGwcHhpiuL4EYwXsEVDMAnEl&X-Amz-Signature=03b04fe99685099a2c9facd57d86ac41418a353fc1511ba90c40fb8c05aaebc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


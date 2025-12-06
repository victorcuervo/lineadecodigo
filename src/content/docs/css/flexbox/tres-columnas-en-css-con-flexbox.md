---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALRMVOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9n%2FnUET4wV8aHThj45dDPddJjzQgt%2FjKVM7K60AK06gIgQkMyjpNJNyoCkk%2Fm8RpzrbjAlV0DNe4LgxKA3PnJ5psq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGgtPybLgCDIlsAIWCrcA4LiMc5lXTTGEZckMSGfmuPVRFnbfQwWZxQRNjMjw3%2BUvavFeTg6qz9CIurgOLvD3F2fzhyS%2B8DyJS0bYWSTyEFm%2Bxq%2BXPCLjxgw5vlwIPbXZc3%2Fnr3n1xQmCARnlbRZopLUIxuyfIbCROub6bY40NAEDbD6gA%2F%2BlqeT1Uy8BCiT1sWlzqxxt9IZ%2FzEfj3aJ2G%2FM8Ie8LP3WdgfAcyK28yLZhU3qPuoPhKFK719Jblh2OBaNRGJVLEdX691tbEThLx9aZ9zrwMvh2Dqx1C2GVEZIFwEMbDsUjnqwHKHsH5FgtauQSFrgpGAf4rKQy4tZK%2FlJ1AkrRiFpzWs3klVcI04a2u2G3Qh0icw%2BnO142RU2anFG6G%2FuTHnAb62%2FyCyrry7fhxvkqH7tyDPPfoXGZLDXh44ufJTY2pkrJMzqrQVF3kftfChUivGBW4VANIEjwSmblA1fmJ6MmsBg3V6Piq2hEKKi9%2F571leYhKwoa1vXxopSbFWTAAjVFsY86AVVSMs32Bgs6lGdVUJOqL8UvhQWtGuF%2B9r4YO7nujdvrw5hSbQJDNFxj1uNsZMOwwsPm5pqeM%2FajAFPQqs0K4tT5HSaVSHmen0uQOINlGhl95xY6HZhrQqlyPU9pKTkMOum0MkGOqUBw%2B36ans9c8pmcNOL2ZcU56cl3iiUsRehy%2BoeoLLrj617Oc1JfwZl5FYSB2RWmuqY8ESKn2QEf%2BVhptsC7O7fFNWNMPHBgREFYuj7ZTFl%2BXbUnKL9565Dv58n5G2W8%2Fzn%2Fbcc442osxOwDNFnshvcHRJkxNSxGqjwbBaSQU6t2KRKHJuIkbGO9H2DQalvUfCQdgkdxGcSCW5Siro0EeSZNvUi%2BDd5&X-Amz-Signature=455b4f32a2d78a20b0debc1e5a95ea6665c4ce9254e999fba97599d14fbd5b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALRMVOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9n%2FnUET4wV8aHThj45dDPddJjzQgt%2FjKVM7K60AK06gIgQkMyjpNJNyoCkk%2Fm8RpzrbjAlV0DNe4LgxKA3PnJ5psq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGgtPybLgCDIlsAIWCrcA4LiMc5lXTTGEZckMSGfmuPVRFnbfQwWZxQRNjMjw3%2BUvavFeTg6qz9CIurgOLvD3F2fzhyS%2B8DyJS0bYWSTyEFm%2Bxq%2BXPCLjxgw5vlwIPbXZc3%2Fnr3n1xQmCARnlbRZopLUIxuyfIbCROub6bY40NAEDbD6gA%2F%2BlqeT1Uy8BCiT1sWlzqxxt9IZ%2FzEfj3aJ2G%2FM8Ie8LP3WdgfAcyK28yLZhU3qPuoPhKFK719Jblh2OBaNRGJVLEdX691tbEThLx9aZ9zrwMvh2Dqx1C2GVEZIFwEMbDsUjnqwHKHsH5FgtauQSFrgpGAf4rKQy4tZK%2FlJ1AkrRiFpzWs3klVcI04a2u2G3Qh0icw%2BnO142RU2anFG6G%2FuTHnAb62%2FyCyrry7fhxvkqH7tyDPPfoXGZLDXh44ufJTY2pkrJMzqrQVF3kftfChUivGBW4VANIEjwSmblA1fmJ6MmsBg3V6Piq2hEKKi9%2F571leYhKwoa1vXxopSbFWTAAjVFsY86AVVSMs32Bgs6lGdVUJOqL8UvhQWtGuF%2B9r4YO7nujdvrw5hSbQJDNFxj1uNsZMOwwsPm5pqeM%2FajAFPQqs0K4tT5HSaVSHmen0uQOINlGhl95xY6HZhrQqlyPU9pKTkMOum0MkGOqUBw%2B36ans9c8pmcNOL2ZcU56cl3iiUsRehy%2BoeoLLrj617Oc1JfwZl5FYSB2RWmuqY8ESKn2QEf%2BVhptsC7O7fFNWNMPHBgREFYuj7ZTFl%2BXbUnKL9565Dv58n5G2W8%2Fzn%2Fbcc442osxOwDNFnshvcHRJkxNSxGqjwbBaSQU6t2KRKHJuIkbGO9H2DQalvUfCQdgkdxGcSCW5Siro0EeSZNvUi%2BDd5&X-Amz-Signature=87675dca6f8422446bce57e313f4c23d368b56ac7680b50ee5c75b4f64834601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


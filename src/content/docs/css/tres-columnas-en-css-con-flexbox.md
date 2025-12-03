---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUQMJJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCz5E6WXIaNmNGD81XJzYsfEhI4zHgD6mxneuz1J77UOwIhAL%2F9uy4VI%2BgY9Lub1bLqlEApoSYFOesjIbyjqtRrz%2FHRKv8DCDYQABoMNjM3NDIzMTgzODA1IgyEEDXTr3DBtvBrL1Mq3ANo7s%2Bq25aQJg3QuCwvYKZ7d5P4v6TK5KD%2FAS15Ts44OerJGl9xRAJoFxst13CBIQueNRYoN79uYgqDw%2FQjhVWO8EtCoQVu4SxLKrOf%2FP1ljf6MhnXo1aywjNsozTdYbRZ5se8SX6NQy5wf88T6mqaGGOOmsS%2BvVXk5lgIuoR%2BM7QLApiMOm%2BrhqvC7VTaR07zl%2FKnaZPPmvnngXxfz15%2F6N%2FykM1BSxVlZ0bwVfB4ZTwtQQpP3OBwFjwAXUJwczFyWiS3fnPij5d9Mw1mqYPx5Gw1aPpqWSfNfLNKAFTIdZBYPU50dhAgBe%2BwCwWW5Q5cUBhyRk6rL6o0C7IRBEy5ahUVZRrq0hQuaYr7veYsdR%2BqqGaFzcR6ZQs1pczhRJvhtmQqQmWeZg%2BlxePBE6%2BJstzZKSLezQtLFON9FYL0F0pTL2BAPPwBo72q%2FOSNmCjaohRfVeeLUtBicCkdB4EsPdjptuY75fwLIeWCwLbnQNoIvNMDa38eyiO4KhQRRhOOFvT3gdNlr%2FKztRcTo14NELNZvBl1aw9Zj21YGjdO24CyDhZhmc1%2BYN%2Bhx1hpHczTerYkz%2FvNx3HfZxsjy8Efy9%2FSYMOBrfOIIGnsE1ADacG%2FkAMZAS3JCcB02RzDYvcLJBjqkAa926xxNUQq%2Fhefx5wxZHZ8VRJyn5Fa9WBPLHsftaroZXNd4KnWbFZKRo%2B6F0DP9NQltdyemAF5ZBMSGNzFP2iQEwQIBqqrIho0pau%2FrBY5%2F9rIPDVTXVi4j11DMscakPeXu7E3WdXQOub%2BTq2aOjWYD08DpsEM%2B7vvfjhJqBEL20X%2B5%2BYPDEoU8yuusjrEM0IQT1OID8%2FWYTweFj6CI9sBRp0%2BE&X-Amz-Signature=f119a039c042b05d8f40a43eef4c2ea81a2c4453198bc5c3d5ecc71b668c6580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUQMJJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCz5E6WXIaNmNGD81XJzYsfEhI4zHgD6mxneuz1J77UOwIhAL%2F9uy4VI%2BgY9Lub1bLqlEApoSYFOesjIbyjqtRrz%2FHRKv8DCDYQABoMNjM3NDIzMTgzODA1IgyEEDXTr3DBtvBrL1Mq3ANo7s%2Bq25aQJg3QuCwvYKZ7d5P4v6TK5KD%2FAS15Ts44OerJGl9xRAJoFxst13CBIQueNRYoN79uYgqDw%2FQjhVWO8EtCoQVu4SxLKrOf%2FP1ljf6MhnXo1aywjNsozTdYbRZ5se8SX6NQy5wf88T6mqaGGOOmsS%2BvVXk5lgIuoR%2BM7QLApiMOm%2BrhqvC7VTaR07zl%2FKnaZPPmvnngXxfz15%2F6N%2FykM1BSxVlZ0bwVfB4ZTwtQQpP3OBwFjwAXUJwczFyWiS3fnPij5d9Mw1mqYPx5Gw1aPpqWSfNfLNKAFTIdZBYPU50dhAgBe%2BwCwWW5Q5cUBhyRk6rL6o0C7IRBEy5ahUVZRrq0hQuaYr7veYsdR%2BqqGaFzcR6ZQs1pczhRJvhtmQqQmWeZg%2BlxePBE6%2BJstzZKSLezQtLFON9FYL0F0pTL2BAPPwBo72q%2FOSNmCjaohRfVeeLUtBicCkdB4EsPdjptuY75fwLIeWCwLbnQNoIvNMDa38eyiO4KhQRRhOOFvT3gdNlr%2FKztRcTo14NELNZvBl1aw9Zj21YGjdO24CyDhZhmc1%2BYN%2Bhx1hpHczTerYkz%2FvNx3HfZxsjy8Efy9%2FSYMOBrfOIIGnsE1ADacG%2FkAMZAS3JCcB02RzDYvcLJBjqkAa926xxNUQq%2Fhefx5wxZHZ8VRJyn5Fa9WBPLHsftaroZXNd4KnWbFZKRo%2B6F0DP9NQltdyemAF5ZBMSGNzFP2iQEwQIBqqrIho0pau%2FrBY5%2F9rIPDVTXVi4j11DMscakPeXu7E3WdXQOub%2BTq2aOjWYD08DpsEM%2B7vvfjhJqBEL20X%2B5%2BYPDEoU8yuusjrEM0IQT1OID8%2FWYTweFj6CI9sBRp0%2BE&X-Amz-Signature=c0f6dad4a4cb19f7d2452ad938142d9972d85da3ac42435d260a95bf2408a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


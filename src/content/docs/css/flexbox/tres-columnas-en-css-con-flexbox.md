---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZNQMGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP118b1dkgKPqNtbS2S5fFF%2BqQ8EHxEjk2BlzVDqrW4QIhAPzdZ%2FYhzffhIf%2FbmokuEY0PA6QUxRG%2FFh0LY%2Fz%2F7XWNKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUxzUELYn2kxMPhT8q3APUXQOAkU%2Bn6zAIzQgw7MED8M%2BtyB5fzCDakkhwrLZ%2B1QpQGSv5LQunx8g%2FrB7F78rfHegEIDDXO6xsFBJ59Ecijuwrr%2BQxEm5xf3yoQmX%2BrBJ%2BnY1iKq71p4CIJUYKLlBDSHX0KgxJsnBBY%2B9%2BUnkUlpDBGGddQ2DJGw1%2BvtWHNNZsS%2BHAt5Pu5g%2BUPzd4ee2vgtk5x1%2BmICSXZGS%2F%2FR4cyCnSEn5vzAs1zQGO6%2BxGw00LTfa%2B4NI3wSoxBzjUtP7GSrJkslEmnvfHSpuhqu8nkHKE9%2FktzLcNLHz%2FBEQAvOgvvcPtUuLRIi%2FQn3%2FUNo8Y3qLIMwQDpoDmATKzbjTHr%2BKFi4f3R1jeB9FOOa9IQZehxU5%2FlTdXR960xGs35h%2FDbiSLUZxUIz7%2BNA6yWw5LCr56hcOBZtRbouftW7Y4b%2BRq%2Budv%2FqjVGFjM%2F4i3RR1XjdeMC8TnmNiX%2BITR%2B6Mn1ycJUU9LIX2uTK8rhA3xKQMMMXHZ4Ljn5O%2B4Mxtfk52Ug%2Fg3YruvEW3PB%2BPZ083Mu%2BAER2OHMaxSdhlZN6fIai43AwXffKJp0Mdx0pq3fhnsOXlqnkOF1hDpHZUDz4c2U6kZDRQZVaMQnoYh3Llu1gYEECpA5Oz50AsvOjDv%2Fc7JBjqkAbp7XvhxAo0UMSoTIF%2Bvt3EVTAL%2Bv2hoARV%2Bpos%2ByDgRcL5lJOtTweL973r4dl1pbT22QCrZiupv8c2OENNFhEro8gKuMKjifrg2aQTxeBLpwzxVufQYcCnTlObbVvyezquEkEiWdhTle4xx%2BZ%2FKutqZjG9V5OwbG%2FrkcEVCdGOJ%2FTN7w95MeuFJ9%2FUJCEv0oYagiKZeVs2aCw9o3XV4L2KxJ4bq&X-Amz-Signature=c217bd5cae74d7115bd4e737d0e5963d3bce99bb926c22009343d4d6a38e16e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZNQMGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP118b1dkgKPqNtbS2S5fFF%2BqQ8EHxEjk2BlzVDqrW4QIhAPzdZ%2FYhzffhIf%2FbmokuEY0PA6QUxRG%2FFh0LY%2Fz%2F7XWNKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUxzUELYn2kxMPhT8q3APUXQOAkU%2Bn6zAIzQgw7MED8M%2BtyB5fzCDakkhwrLZ%2B1QpQGSv5LQunx8g%2FrB7F78rfHegEIDDXO6xsFBJ59Ecijuwrr%2BQxEm5xf3yoQmX%2BrBJ%2BnY1iKq71p4CIJUYKLlBDSHX0KgxJsnBBY%2B9%2BUnkUlpDBGGddQ2DJGw1%2BvtWHNNZsS%2BHAt5Pu5g%2BUPzd4ee2vgtk5x1%2BmICSXZGS%2F%2FR4cyCnSEn5vzAs1zQGO6%2BxGw00LTfa%2B4NI3wSoxBzjUtP7GSrJkslEmnvfHSpuhqu8nkHKE9%2FktzLcNLHz%2FBEQAvOgvvcPtUuLRIi%2FQn3%2FUNo8Y3qLIMwQDpoDmATKzbjTHr%2BKFi4f3R1jeB9FOOa9IQZehxU5%2FlTdXR960xGs35h%2FDbiSLUZxUIz7%2BNA6yWw5LCr56hcOBZtRbouftW7Y4b%2BRq%2Budv%2FqjVGFjM%2F4i3RR1XjdeMC8TnmNiX%2BITR%2B6Mn1ycJUU9LIX2uTK8rhA3xKQMMMXHZ4Ljn5O%2B4Mxtfk52Ug%2Fg3YruvEW3PB%2BPZ083Mu%2BAER2OHMaxSdhlZN6fIai43AwXffKJp0Mdx0pq3fhnsOXlqnkOF1hDpHZUDz4c2U6kZDRQZVaMQnoYh3Llu1gYEECpA5Oz50AsvOjDv%2Fc7JBjqkAbp7XvhxAo0UMSoTIF%2Bvt3EVTAL%2Bv2hoARV%2Bpos%2ByDgRcL5lJOtTweL973r4dl1pbT22QCrZiupv8c2OENNFhEro8gKuMKjifrg2aQTxeBLpwzxVufQYcCnTlObbVvyezquEkEiWdhTle4xx%2BZ%2FKutqZjG9V5OwbG%2FrkcEVCdGOJ%2FTN7w95MeuFJ9%2FUJCEv0oYagiKZeVs2aCw9o3XV4L2KxJ4bq&X-Amz-Signature=ff4eb5dbc3327963feaf774c090f0dd5c3fbee202c280411b3b4caa83bd9a051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


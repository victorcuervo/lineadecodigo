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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRJFKAZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICumXJfMEV8DBI%2BzJEiy56hZjQjuE%2FLxEvaEv1A14%2FkhAiBImwTHu6iKQu%2FoVYyur%2Flbe9bkIZfUPXSCIWvHGhFFGir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbNjxtQBhlmY7nx%2B9KtwDtMYkqnj8SaYIUiKHbDp%2FABjYOnMkSOeodbqSeYk%2B%2FJkm79glZykAk8K6aik01mHM3f93z94zcqg6e9JjwDpnobwpDnqSS%2BUT%2FbAL6zlzCRzPyxDkryyNKgXH0onwgiD4kaqqN6dbmWdReui743cQI%2FczNZ99Wnt0koIK0rUvQFbOy6775N9wEWXDin1g8dZeLajTVG%2FpmGWF6H67IQ3QcIAR%2F7Y4JJv9ZPJug0heRw9BU%2FDPurJnD2KkYtoYSdXSO5szsduxBwL0Fy2L7ndtokPPh6bd19h3sx6S45FddRktkTkhtyNv%2FSiBFriEOqPOAJdJMz8ZibJHmCFF%2F9HzPdNusWYgy0eoj6CymNVRVDe%2Fu7dHuiOoOsaNpeUqASGA83QDLSqHqh%2Fvx6kYZJHNtwOjnBQ0ugrhBMbgDUGsZrsMiX9ZxvNcqSRMxwEDRAhKq2VyFyDWXgjYF3Lom8zVi4ppVdHGIFSd0scu59YAd3pKKKUz61Qeihj87uUMq4Xq5Th4Z386KptzMvWpFpx6HSuMEOmbUE1zlUJkaZxIzpC8V6Zs5YQd2tDcyZaShBEfIPOnkKeJJdHj7%2BvBw3DlHRuut3SCQBcsj5zUU1ZHmKGyLgJiFhxXkKBTcYwwjYjByQY6pgHtvuIQj3prkSrKIilpSTn%2FO1xryYsprCr0bq4RoMo9S0YRvTmLBimXN6q%2FYBvxtf0qnC2VoDW%2B2ukB7WsMDGMxgaVoWhbDnCMAqf%2FQ1Ek%2BQjFIL%2BFJ0w%2FMB0BagcB9XYnHoVceznk0CFg9mLxAYZ2Nbe4qdza0KYUXy5xZvahnI8q2pVcXGdzDwxAoviOgES0UrV18i2%2BVKDQcfGhr6auVOlBOC9vy&X-Amz-Signature=209a426f8056a6e8fda03a8b834315d7758aa7e9d657713ae34789bb08f9f6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRJFKAZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICumXJfMEV8DBI%2BzJEiy56hZjQjuE%2FLxEvaEv1A14%2FkhAiBImwTHu6iKQu%2FoVYyur%2Flbe9bkIZfUPXSCIWvHGhFFGir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbNjxtQBhlmY7nx%2B9KtwDtMYkqnj8SaYIUiKHbDp%2FABjYOnMkSOeodbqSeYk%2B%2FJkm79glZykAk8K6aik01mHM3f93z94zcqg6e9JjwDpnobwpDnqSS%2BUT%2FbAL6zlzCRzPyxDkryyNKgXH0onwgiD4kaqqN6dbmWdReui743cQI%2FczNZ99Wnt0koIK0rUvQFbOy6775N9wEWXDin1g8dZeLajTVG%2FpmGWF6H67IQ3QcIAR%2F7Y4JJv9ZPJug0heRw9BU%2FDPurJnD2KkYtoYSdXSO5szsduxBwL0Fy2L7ndtokPPh6bd19h3sx6S45FddRktkTkhtyNv%2FSiBFriEOqPOAJdJMz8ZibJHmCFF%2F9HzPdNusWYgy0eoj6CymNVRVDe%2Fu7dHuiOoOsaNpeUqASGA83QDLSqHqh%2Fvx6kYZJHNtwOjnBQ0ugrhBMbgDUGsZrsMiX9ZxvNcqSRMxwEDRAhKq2VyFyDWXgjYF3Lom8zVi4ppVdHGIFSd0scu59YAd3pKKKUz61Qeihj87uUMq4Xq5Th4Z386KptzMvWpFpx6HSuMEOmbUE1zlUJkaZxIzpC8V6Zs5YQd2tDcyZaShBEfIPOnkKeJJdHj7%2BvBw3DlHRuut3SCQBcsj5zUU1ZHmKGyLgJiFhxXkKBTcYwwjYjByQY6pgHtvuIQj3prkSrKIilpSTn%2FO1xryYsprCr0bq4RoMo9S0YRvTmLBimXN6q%2FYBvxtf0qnC2VoDW%2B2ukB7WsMDGMxgaVoWhbDnCMAqf%2FQ1Ek%2BQjFIL%2BFJ0w%2FMB0BagcB9XYnHoVceznk0CFg9mLxAYZ2Nbe4qdza0KYUXy5xZvahnI8q2pVcXGdzDwxAoviOgES0UrV18i2%2BVKDQcfGhr6auVOlBOC9vy&X-Amz-Signature=89d1db5d99b7bcd0e5eba204148b2afbee826e4418ec669d8250558971a0d53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


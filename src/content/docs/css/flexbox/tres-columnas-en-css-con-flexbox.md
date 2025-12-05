---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXU22V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnLk1Cbv9%2FM6V7nbenzjxKeZpbwsjoYJkz6rkMiCnAwIhAP%2Bq1ACybPMAQxGpSY%2F1FxzVf7K1xnyCwWGxthDuZRADKv8DCGEQABoMNjM3NDIzMTgzODA1Igxkie5MH0v3e2pRYL0q3APiNWW%2FemhWbFtcZgp3edSHtODJLoK4qpys7lgKKIriIPZlyTbEMn8%2Fg5zhvfhG%2BwLqbHV2tugpGr25FTFSokikI6o2zxzFxW%2Bc%2BoKeh425Fw%2BvZ0bqy99eVTuXjZ1OAinf029929%2BRxBEbltEGv9o%2FAK93hkbnE6bDczTkqbRCmPZqb1nFEYIzO%2BDHN80f4UEUiJYE6P33RU6IFNbUy8qONxWNDIZqNV6%2FBkfYewaioQQCyH2DWFHz03wQ5ZnL79x0nbMb56FHh4Kb05i2d0%2FvJ7HMYg8lpOOf23eGjHBMHe9XHtoLEMSHFNqec85EoynY3YESMxdhAzUiN8%2B7emCkYRk2tIDvAZ8p6BvpsabulZIzq%2FWRfZ4xTFRrFCUUSnxDN%2BmSRCk5U7M5asDPdrYvu8st23w6SA7tWLJ%2BNZvFgUHvo4IiI%2FPYf9WobvCwSfzPeE265nAGn04wqacAXt3BWCH631r9RKhgUdwMC%2Fj7WZ0qnuHFLwl2G3l8a3S%2BejsCvG8C65l9BfWAGzfJw2bGqIUbqe1lIwUrQVYpQh%2FCv1ArNDX%2BywNu7wF7cfxrcMJqsu8jK1qPay8xJx75bcCM3cwUeOZYalbgrhUyzBVs3xrAxkrt075%2BqKO44zCR9MvJBjqkAZk1Zwf5aluXhXkZr2tstjWQiQATAd0i7HqEbJPfRWpNFv8reBHr9jJgRcxzpYcPchT5g5UgXLukQ%2B%2BpXEMlFIcfqHWU2WNxqPRqe8u8Fylcq0UM7oowTZpN78I9wISx0D0NmlqfmJHLjkvFAXOor6WiR3FpyD9rZ7uFQY3tkUnoEKc%2FSasqYobV8IbmAVKLRRlDFNlmH6uJpD6VJsDqzZaq1Zza&X-Amz-Signature=ec7e95e2823f562f7d972624123c06d70d17c57ece743f9570e7569d546dad8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXU22V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnLk1Cbv9%2FM6V7nbenzjxKeZpbwsjoYJkz6rkMiCnAwIhAP%2Bq1ACybPMAQxGpSY%2F1FxzVf7K1xnyCwWGxthDuZRADKv8DCGEQABoMNjM3NDIzMTgzODA1Igxkie5MH0v3e2pRYL0q3APiNWW%2FemhWbFtcZgp3edSHtODJLoK4qpys7lgKKIriIPZlyTbEMn8%2Fg5zhvfhG%2BwLqbHV2tugpGr25FTFSokikI6o2zxzFxW%2Bc%2BoKeh425Fw%2BvZ0bqy99eVTuXjZ1OAinf029929%2BRxBEbltEGv9o%2FAK93hkbnE6bDczTkqbRCmPZqb1nFEYIzO%2BDHN80f4UEUiJYE6P33RU6IFNbUy8qONxWNDIZqNV6%2FBkfYewaioQQCyH2DWFHz03wQ5ZnL79x0nbMb56FHh4Kb05i2d0%2FvJ7HMYg8lpOOf23eGjHBMHe9XHtoLEMSHFNqec85EoynY3YESMxdhAzUiN8%2B7emCkYRk2tIDvAZ8p6BvpsabulZIzq%2FWRfZ4xTFRrFCUUSnxDN%2BmSRCk5U7M5asDPdrYvu8st23w6SA7tWLJ%2BNZvFgUHvo4IiI%2FPYf9WobvCwSfzPeE265nAGn04wqacAXt3BWCH631r9RKhgUdwMC%2Fj7WZ0qnuHFLwl2G3l8a3S%2BejsCvG8C65l9BfWAGzfJw2bGqIUbqe1lIwUrQVYpQh%2FCv1ArNDX%2BywNu7wF7cfxrcMJqsu8jK1qPay8xJx75bcCM3cwUeOZYalbgrhUyzBVs3xrAxkrt075%2BqKO44zCR9MvJBjqkAZk1Zwf5aluXhXkZr2tstjWQiQATAd0i7HqEbJPfRWpNFv8reBHr9jJgRcxzpYcPchT5g5UgXLukQ%2B%2BpXEMlFIcfqHWU2WNxqPRqe8u8Fylcq0UM7oowTZpN78I9wISx0D0NmlqfmJHLjkvFAXOor6WiR3FpyD9rZ7uFQY3tkUnoEKc%2FSasqYobV8IbmAVKLRRlDFNlmH6uJpD6VJsDqzZaq1Zza&X-Amz-Signature=4e31f514ab838b51f2cf6a0e26f09e5197fe48437056ed9506a311f76d7a1212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


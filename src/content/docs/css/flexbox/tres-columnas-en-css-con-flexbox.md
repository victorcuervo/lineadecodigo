---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLFFRRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNTLFYHaNY01zohGjFyWI2n6QjxiXgtlkfcHeKVvupAIgWMp7VlxtH3Q7cmcvZOkarm6%2BYZ11l2M2lNhaVxhWNkcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDpr6mmk6U9bp3WhFSrcAwjV8p%2FNkRNby6v8TkeJuJUi4%2B1%2BLOdpJp5uHv%2BPP0ebp5fz6aFlX3WTQKaqlK29Z8dbTtBRZnof%2BaQTtaVc%2BKbtB%2FJtq2ASwe9D5YsWpIM4%2FyjwFbQzo80i0p8o7OuiPKaADk04OVtC1S7y9ibt9y82%2FJJyJsMiGvtg%2FSXz%2Fbs577OvzMqHALS1Yn%2BmlxvPmETJrr1j%2Fqb9WSQ0wi9qAmv%2FiZEn1%2FHtMRleBAdSGDigzP7iREo7ThTdFYAde1EShX41cXu7DkopsikwD5xJeRzvTRhsGgxWl76WbuBYzwNT8nMeo2U8SF%2BjKWeNjZeRmBpEIRwv7w4HTi0M4WpF31EDMPxw%2FqbkY955D0CYni0SEYwx5SX4ZwV7lurSOyzFKnHrj3IIs8G2LAdMTRRgPYBh0VjBL34PJu9yYupkS1V4qnREBdKUDFMDrtGNS4UXxaVRlJcksL1tNxz0BwbR%2FYxu5uIr6Ruts5Tne4yWDQ5cbhwT9J5EaD1UOXkMynkzyRreSVG7XPBU1WzBNU6B%2BQ%2BQCXWiHzstaIfGhpxJYWgO9VuDjYA0BvFgGCASBmPk%2BEKGb%2Be9E3BGDbXj0x3lpMHpAR51xaucM00O31A1259f%2FZV%2Byx7Lzl6jWCirMLPOyskGOqUBnAQIkipR5WUTuR3IsA%2BFcWESdzY%2FlSsBgHJoB2gdu3MKdEFybw9%2BTRdwUqs3bMpBQpcipX4fpVrWdEWLFCJV0gMogiI6kLv4DuPlpyY78FC%2FksJi0R2ttm4W8yz5acLBYV9dbR4kKRU%2FlEqjaiLk2SCtvixmP9YQtrq9gQ1S226uJ5HIOlYdzN5TKNfVz5q2N6YLt6eIG9EEBv243LjnZU0bQdDf&X-Amz-Signature=12e41e5aa6da5f6d948e9a8befba7e8c24a052563c230c56b1de5ec078a1a142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLFFRRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNTLFYHaNY01zohGjFyWI2n6QjxiXgtlkfcHeKVvupAIgWMp7VlxtH3Q7cmcvZOkarm6%2BYZ11l2M2lNhaVxhWNkcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDpr6mmk6U9bp3WhFSrcAwjV8p%2FNkRNby6v8TkeJuJUi4%2B1%2BLOdpJp5uHv%2BPP0ebp5fz6aFlX3WTQKaqlK29Z8dbTtBRZnof%2BaQTtaVc%2BKbtB%2FJtq2ASwe9D5YsWpIM4%2FyjwFbQzo80i0p8o7OuiPKaADk04OVtC1S7y9ibt9y82%2FJJyJsMiGvtg%2FSXz%2Fbs577OvzMqHALS1Yn%2BmlxvPmETJrr1j%2Fqb9WSQ0wi9qAmv%2FiZEn1%2FHtMRleBAdSGDigzP7iREo7ThTdFYAde1EShX41cXu7DkopsikwD5xJeRzvTRhsGgxWl76WbuBYzwNT8nMeo2U8SF%2BjKWeNjZeRmBpEIRwv7w4HTi0M4WpF31EDMPxw%2FqbkY955D0CYni0SEYwx5SX4ZwV7lurSOyzFKnHrj3IIs8G2LAdMTRRgPYBh0VjBL34PJu9yYupkS1V4qnREBdKUDFMDrtGNS4UXxaVRlJcksL1tNxz0BwbR%2FYxu5uIr6Ruts5Tne4yWDQ5cbhwT9J5EaD1UOXkMynkzyRreSVG7XPBU1WzBNU6B%2BQ%2BQCXWiHzstaIfGhpxJYWgO9VuDjYA0BvFgGCASBmPk%2BEKGb%2Be9E3BGDbXj0x3lpMHpAR51xaucM00O31A1259f%2FZV%2Byx7Lzl6jWCirMLPOyskGOqUBnAQIkipR5WUTuR3IsA%2BFcWESdzY%2FlSsBgHJoB2gdu3MKdEFybw9%2BTRdwUqs3bMpBQpcipX4fpVrWdEWLFCJV0gMogiI6kLv4DuPlpyY78FC%2FksJi0R2ttm4W8yz5acLBYV9dbR4kKRU%2FlEqjaiLk2SCtvixmP9YQtrq9gQ1S226uJ5HIOlYdzN5TKNfVz5q2N6YLt6eIG9EEBv243LjnZU0bQdDf&X-Amz-Signature=315b178d8e19d166289ad970889033b475b608085143ab8c59772fed241874c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


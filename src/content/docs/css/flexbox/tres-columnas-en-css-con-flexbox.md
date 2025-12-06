---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4HVC3A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSVbjL0pIFYgFGkSVi5rTJqJ2XS7q%2BXJiWuAtr9upHaAiEA9XdB7bb1yG5UvsC5Pt9HglMz%2FwYusMlQwHxsAo4ySlgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAeZGKTgMKtzlGNs4yrcA0vt2YkNO7QALNvP5QtlOrxH9vB2yubbPosAMNAQbFbk9ios24WGSMHPn8Tho82M0U%2Bv8mYL2FzvBacycQBylVZ4bVMpsqjNt6fxuDeisxbfcZq6OWrN9iS%2BrVlmme5nA1Z2pT9RkSWw8j8%2BayorWH%2Blre1cqt4GlpA2K0CTazvs74%2BEheguDMt5jax6j4BpPb2tasZVz8FttyisrvFvyqZCjPW%2FBkaQgHlrOaCI3uFaD7ofw2q%2B1ePaUpsvlZvRC%2FSaqTbuIp0fUF64mqktldMZl5eeqnf8TlwtAewiPGqvKuPM4kTJ2jrfpLF3MhsN0tvyqH%2FI27FAanEj3KbVIqkCGrAV4EwujtrNJ7DJgXtiyspQFMKUA3m%2FjDYZ0MLcGIJB5WwXhuDT6KX2HKAMzfwOHjXqfUoiRwNdQMbIcoVO77o%2Fb9PYWadxOzovXI86YKKSoSPfsHF4g1u4K%2B39T4ab2GSYTgCp0BDpc3swi19sd9QaHwg%2FJvzTky8DBz71ECXoOkI0BwzwffqHDGHn2mkvkSr%2B%2FmmyqiRt0dtwMhXq3AUS8CBNY%2FFtgr1heGWoI4hx82%2FObw3jqEGwuHlsBlL8w9FSC8lfyPXNax0WViQ%2BFC%2Fk%2Fhd%2BZe6G%2BLHVML28z8kGOqUBTje0tpOAfZ%2BDwZMgA9Q%2Bcn%2BJMQkh%2Fj7koOyZndPRefmJJvhfLf%2F8doA7bi2Vv7A9%2BZmDMQQKMhxVEbeajcQK6NBJFQ4bkilIVRHVDkpqA%2BeIGn%2BQe6bQpsa7rHMSJO20l4%2B%2B%2FKETXeCshbtb5dxwxuUEyyx0LBwUCuGgyKA13QoTw59YBOAdd%2BBIlZHVJLKIfaxUZoVr6Wchqg4geLgkFFg%2BMFcu&X-Amz-Signature=dd3a9a547749607a9b431485c5824b55ef32a9567a0599e5b974adbb122aa950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4HVC3A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSVbjL0pIFYgFGkSVi5rTJqJ2XS7q%2BXJiWuAtr9upHaAiEA9XdB7bb1yG5UvsC5Pt9HglMz%2FwYusMlQwHxsAo4ySlgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAeZGKTgMKtzlGNs4yrcA0vt2YkNO7QALNvP5QtlOrxH9vB2yubbPosAMNAQbFbk9ios24WGSMHPn8Tho82M0U%2Bv8mYL2FzvBacycQBylVZ4bVMpsqjNt6fxuDeisxbfcZq6OWrN9iS%2BrVlmme5nA1Z2pT9RkSWw8j8%2BayorWH%2Blre1cqt4GlpA2K0CTazvs74%2BEheguDMt5jax6j4BpPb2tasZVz8FttyisrvFvyqZCjPW%2FBkaQgHlrOaCI3uFaD7ofw2q%2B1ePaUpsvlZvRC%2FSaqTbuIp0fUF64mqktldMZl5eeqnf8TlwtAewiPGqvKuPM4kTJ2jrfpLF3MhsN0tvyqH%2FI27FAanEj3KbVIqkCGrAV4EwujtrNJ7DJgXtiyspQFMKUA3m%2FjDYZ0MLcGIJB5WwXhuDT6KX2HKAMzfwOHjXqfUoiRwNdQMbIcoVO77o%2Fb9PYWadxOzovXI86YKKSoSPfsHF4g1u4K%2B39T4ab2GSYTgCp0BDpc3swi19sd9QaHwg%2FJvzTky8DBz71ECXoOkI0BwzwffqHDGHn2mkvkSr%2B%2FmmyqiRt0dtwMhXq3AUS8CBNY%2FFtgr1heGWoI4hx82%2FObw3jqEGwuHlsBlL8w9FSC8lfyPXNax0WViQ%2BFC%2Fk%2Fhd%2BZe6G%2BLHVML28z8kGOqUBTje0tpOAfZ%2BDwZMgA9Q%2Bcn%2BJMQkh%2Fj7koOyZndPRefmJJvhfLf%2F8doA7bi2Vv7A9%2BZmDMQQKMhxVEbeajcQK6NBJFQ4bkilIVRHVDkpqA%2BeIGn%2BQe6bQpsa7rHMSJO20l4%2B%2B%2FKETXeCshbtb5dxwxuUEyyx0LBwUCuGgyKA13QoTw59YBOAdd%2BBIlZHVJLKIfaxUZoVr6Wchqg4geLgkFFg%2BMFcu&X-Amz-Signature=c711a47b46d45da39cbd641df0e8c6238de984ba208eb024dce4f26a31187803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


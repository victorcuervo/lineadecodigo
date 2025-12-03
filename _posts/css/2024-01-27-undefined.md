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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKRUGPE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDohU98%2B%2B%2FRPAq2WHL3dYm%2FUUkgJfLFl83e5tYSRHxTgQIhAO6SnIO6K9z6N5LXm3b1n%2FcF4dIpA5AXkjOPdhXAsDx5Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzb4ogh3JZm5rUs71Yq3AO9vR94AMuQmic1osxBRrOUPpEXfjk8mBb4rEF5KKru0QQZJSw6IxRBUHllcenieG%2BhelFmaO%2BR0WP%2FIwoz%2B5Cxj6zFXvFx%2BSRqzNs%2FO3ts0qZKDCKbLeUzR4wtvsmSHIY77UShsFKB9D8OW%2FmBZgC1Wwi5SIPXFyhvFyBN4cjzon0mqV8n1MabK%2FppuBhfLAzIbhqz8k0aZiyIOs79shkySdVvZF5N76%2FYJ5Qc4reVIO95YRIHhOSu5Vej%2BmCkerzTj2MabGZQDZZlpj3RIl4A1hKYjM%2BzD7BN8R2zQFWwWoZ1cVW%2F3jaLujy90YpgTZPL%2FtJEnQ1Aj5Oro4ybpXmoEfenQZyqU%2BI8bS4ZglwEGSrogd5N3KhLnpSQN1iRxQEO6gVdyVOjWxUqg4zP4LqlK%2BOg%2BR%2B4C0SiBq1ONKTaZMNTUZkH5%2F9rPEIQoo7U5zyEwU20XGN1G37kpEdN8ZUKNNIecc8ngoYkxYXjGs5vuxODhAGPTrK%2F63%2B5Pv3cBScyLHzbF4JPX3pdmejGMAhlW68Ws3xfibU7aHMRv1Mu8NPJXqRCSG%2FVZq3Hqipoj%2Fe%2FUrx5EchOk9voTdWnSTqdqw09lvNGk8Mdh4ZGg1oeAvN2R%2FOkcjAiDmub7DDEpcHJBjqkAX8BjS90R0Wdy3JHOxAjefi5dxuHRIomHL%2BIZjyVp8o9zZ54goTSm%2BIzw2tEiAJr0jNS645bYIhxoa1ot7Nli5VaZ9Exr2WNqPH6TBgNyr%2B6hB6QNOYcHUXN3YNtEhLIpEoOVJU427DR48rUduPngk2cOE2m2HFegJnlsrCU%2BMb%2BciptOuojL3XfLGh9pdwF8ivsSgfjIUQH58w6WOGiKxjyTwu0&X-Amz-Signature=fdbc06237a8db816f2589c5c8a4ab28356f87db511b67e073129850cc47920de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKRUGPE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDohU98%2B%2B%2FRPAq2WHL3dYm%2FUUkgJfLFl83e5tYSRHxTgQIhAO6SnIO6K9z6N5LXm3b1n%2FcF4dIpA5AXkjOPdhXAsDx5Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzb4ogh3JZm5rUs71Yq3AO9vR94AMuQmic1osxBRrOUPpEXfjk8mBb4rEF5KKru0QQZJSw6IxRBUHllcenieG%2BhelFmaO%2BR0WP%2FIwoz%2B5Cxj6zFXvFx%2BSRqzNs%2FO3ts0qZKDCKbLeUzR4wtvsmSHIY77UShsFKB9D8OW%2FmBZgC1Wwi5SIPXFyhvFyBN4cjzon0mqV8n1MabK%2FppuBhfLAzIbhqz8k0aZiyIOs79shkySdVvZF5N76%2FYJ5Qc4reVIO95YRIHhOSu5Vej%2BmCkerzTj2MabGZQDZZlpj3RIl4A1hKYjM%2BzD7BN8R2zQFWwWoZ1cVW%2F3jaLujy90YpgTZPL%2FtJEnQ1Aj5Oro4ybpXmoEfenQZyqU%2BI8bS4ZglwEGSrogd5N3KhLnpSQN1iRxQEO6gVdyVOjWxUqg4zP4LqlK%2BOg%2BR%2B4C0SiBq1ONKTaZMNTUZkH5%2F9rPEIQoo7U5zyEwU20XGN1G37kpEdN8ZUKNNIecc8ngoYkxYXjGs5vuxODhAGPTrK%2F63%2B5Pv3cBScyLHzbF4JPX3pdmejGMAhlW68Ws3xfibU7aHMRv1Mu8NPJXqRCSG%2FVZq3Hqipoj%2Fe%2FUrx5EchOk9voTdWnSTqdqw09lvNGk8Mdh4ZGg1oeAvN2R%2FOkcjAiDmub7DDEpcHJBjqkAX8BjS90R0Wdy3JHOxAjefi5dxuHRIomHL%2BIZjyVp8o9zZ54goTSm%2BIzw2tEiAJr0jNS645bYIhxoa1ot7Nli5VaZ9Exr2WNqPH6TBgNyr%2B6hB6QNOYcHUXN3YNtEhLIpEoOVJU427DR48rUduPngk2cOE2m2HFegJnlsrCU%2BMb%2BciptOuojL3XfLGh9pdwF8ivsSgfjIUQH58w6WOGiKxjyTwu0&X-Amz-Signature=112c39b47725ff1b435a81777845c12f5ebac7ff6c7088e81b2cb43f5caf81ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


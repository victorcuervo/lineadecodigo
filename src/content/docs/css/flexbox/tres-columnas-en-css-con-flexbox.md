---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FCSNL67%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfDrkUsw1cC3BUntDtDEQHnrOVhQ%2B3bmH4Ko5LfcQyQIhALLXrvD7xUzqlopQsuWGIzJgqf533iytMg1xQzGNiQIXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy5L4EOXKmQmglhIcq3AO12K0bqlqZz%2FxjSXzMEiHXqtoTno3%2FW2hMo5bZYcSfh0p0aAQnDwHkaUHpJS4dGR8nqtw5gX0oi4ku61lzj1GW%2Bo8k%2BDdyY3VXFAfGoAq92fZ4l0I9KQWj%2Ba55SXQP3ukbkki%2BpE5h%2B3VCZZn69LzWI%2FhUhvfKtpQ1N%2BlaUrin%2FveUSVnGDcWuj01ue6IcopQe2u6n7gJlph3XMHaVLkpAJfY36J8LHCQV47khHm%2FC8fN2wXSW9G8DQtXWkHg5lhZJGrAQAN4ly9MFhqwncWBQ1Ed0RObIZIsCzFc59MXXS%2B%2Fufcr9fC%2FhiIw8FEDYjXeQnF5f8DntOTKaZW9p%2F0rXmGK8imFZagqXTg5v9QO8jh%2FAd7zEEQnQM0jfQoh6n7Hw%2FcETY2ZYyrs7e%2F6PMRWubcFVguBuD7U5En44zuOwh6JJP6toLZcUG2ApQYLOj%2FB1XcxtB9dO72X3g9bjp9IALd1mdN6C%2BwKY7%2FvN%2FsQwU6ERzPvThM%2BR5fQWvLqa8OP1l110qtOOc2GlBqE1vEb3YdjK0AnaBKGUxjz1Kj8A972ki1H0UrQaqSWzIGIXX20M8YoJdF1lMoZNMmt4cjNNTUKsHZUgDSbRMarnuJuUrTFEIiwYRrDF%2F3kBNzD7s9nJBjqkAZ9hALC6mRmFaVJvsYRotPaA%2B5Qc1mCq0y0DvwupdEJtVQq%2BjC%2BUVbWhf2mr8Pqt%2Bpoj9KhjujRmeMhJwlFdhkr5b9gyH8HFhy0xOs38YNG8mABajNI7OYwrcnK9OCJKgDfyTKUuv8xMVibd%2FAIVL7QrYkVScQjAcbX3Ccaay4eHij42nWfiv%2FGPTHzErfEVM97G6pnqsUR1gOZgwW%2BRhgOw741X&X-Amz-Signature=4abe97a9f3a669c7774fff5c5187ca039058bedd28967ef7774b02442b70a73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FCSNL67%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfDrkUsw1cC3BUntDtDEQHnrOVhQ%2B3bmH4Ko5LfcQyQIhALLXrvD7xUzqlopQsuWGIzJgqf533iytMg1xQzGNiQIXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy5L4EOXKmQmglhIcq3AO12K0bqlqZz%2FxjSXzMEiHXqtoTno3%2FW2hMo5bZYcSfh0p0aAQnDwHkaUHpJS4dGR8nqtw5gX0oi4ku61lzj1GW%2Bo8k%2BDdyY3VXFAfGoAq92fZ4l0I9KQWj%2Ba55SXQP3ukbkki%2BpE5h%2B3VCZZn69LzWI%2FhUhvfKtpQ1N%2BlaUrin%2FveUSVnGDcWuj01ue6IcopQe2u6n7gJlph3XMHaVLkpAJfY36J8LHCQV47khHm%2FC8fN2wXSW9G8DQtXWkHg5lhZJGrAQAN4ly9MFhqwncWBQ1Ed0RObIZIsCzFc59MXXS%2B%2Fufcr9fC%2FhiIw8FEDYjXeQnF5f8DntOTKaZW9p%2F0rXmGK8imFZagqXTg5v9QO8jh%2FAd7zEEQnQM0jfQoh6n7Hw%2FcETY2ZYyrs7e%2F6PMRWubcFVguBuD7U5En44zuOwh6JJP6toLZcUG2ApQYLOj%2FB1XcxtB9dO72X3g9bjp9IALd1mdN6C%2BwKY7%2FvN%2FsQwU6ERzPvThM%2BR5fQWvLqa8OP1l110qtOOc2GlBqE1vEb3YdjK0AnaBKGUxjz1Kj8A972ki1H0UrQaqSWzIGIXX20M8YoJdF1lMoZNMmt4cjNNTUKsHZUgDSbRMarnuJuUrTFEIiwYRrDF%2F3kBNzD7s9nJBjqkAZ9hALC6mRmFaVJvsYRotPaA%2B5Qc1mCq0y0DvwupdEJtVQq%2BjC%2BUVbWhf2mr8Pqt%2Bpoj9KhjujRmeMhJwlFdhkr5b9gyH8HFhy0xOs38YNG8mABajNI7OYwrcnK9OCJKgDfyTKUuv8xMVibd%2FAIVL7QrYkVScQjAcbX3Ccaay4eHij42nWfiv%2FGPTHzErfEVM97G6pnqsUR1gOZgwW%2BRhgOw741X&X-Amz-Signature=30841c7c5090d42a55dbb709dda88c8025422283ee7917a48fc3462381ebd341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


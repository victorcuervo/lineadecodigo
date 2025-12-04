---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GCVINK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB95jdUu9G%2Bzc4HdPe4zvahloz42VvIoL%2FW2DmXp7mTdAiEAwQIwUlcO9v%2BQICSWSHHiOVbMyIH8BKe2nSmxwH0JEE4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI2vQgWgC5JuyRvAZyrcA5e%2BzZXRkVUJHS7Orq%2B6L%2FT9gjet%2FuJu6rQ1EEBoOWRfReQo%2Fr4cv22oZyUpNUULxensrocZS8vx2EpNcrvy87QuBfiLWT727WLo5Z1ssRPPzCXSkdOh2J19DF8xjb8QA9wmB%2FhtUm9ndlUxZNhEAbyeJMYG1bhIZ8%2BKLKmAHX9PHa%2BNo1aHD8WiS7KGfDhWN4r0jfkrSNnStH2GO4z2iZJd04Erk5vooogqqkbs8Q9%2BKe%2BrkzQkCx0S7h9gVrLi%2FO6AJZ%2BF9%2FvXJOVJMbg7IxDd8cI9YHpBa3SxRGIm0Ao%2FyfEYCqn00BVdYf9vh4GDMpmvlJYlKR1dxEl9EErAvKhNP42%2Bj16kHuf%2FXVzvUVUDAo5ZeaFoNpNwnbJN4HHyPtTtO7ndzda2ixMPmS9LJdppmIkYn92qBgV8MbOeB%2FdhwSPkYrWsQeEIMYY8uJ77IM0ta9LaWYNUpepL9O33Q8SmVQWDlcxnmfyNebA7WW7IydXEcc9w9Kgv3JaQrbDtOYMXEG%2FqDcBpjsu5gnHbNwwQMJM0FW6b9qxp4wWR6NfpMzkBPkinXyIu09nXpGkAowj67thdAvzzVX7r%2BbJwLFcIZBeQ5vkw4OxUzaqg8j11AZBmWLp8qhW0WZRtMODMxMkGOqUB0Buiouv75h5Eua5zpCLS%2Bd6B7SPRk8r8df2dPdOw8JLijtdI1ICLEf3gywAqtFr1gmxkO%2FIYSs2QVR%2FS00GWzTxQEXX4V6yjikxXbHFlwYfxSlA%2F0kAlJh9fqa9n0xDUo0uHQJCmell1b99gii2A24KkSjuEn8Dan0IZ2Ldsy%2Bem72SHA9j%2B1c8NFZzrPcEKVPLt83oWB25BG%2Fx1DGx8wo5o8dn8&X-Amz-Signature=77a6b133b176a33508d80edaaf9490a2b8626391a641192efec153f15d13614c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GCVINK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB95jdUu9G%2Bzc4HdPe4zvahloz42VvIoL%2FW2DmXp7mTdAiEAwQIwUlcO9v%2BQICSWSHHiOVbMyIH8BKe2nSmxwH0JEE4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI2vQgWgC5JuyRvAZyrcA5e%2BzZXRkVUJHS7Orq%2B6L%2FT9gjet%2FuJu6rQ1EEBoOWRfReQo%2Fr4cv22oZyUpNUULxensrocZS8vx2EpNcrvy87QuBfiLWT727WLo5Z1ssRPPzCXSkdOh2J19DF8xjb8QA9wmB%2FhtUm9ndlUxZNhEAbyeJMYG1bhIZ8%2BKLKmAHX9PHa%2BNo1aHD8WiS7KGfDhWN4r0jfkrSNnStH2GO4z2iZJd04Erk5vooogqqkbs8Q9%2BKe%2BrkzQkCx0S7h9gVrLi%2FO6AJZ%2BF9%2FvXJOVJMbg7IxDd8cI9YHpBa3SxRGIm0Ao%2FyfEYCqn00BVdYf9vh4GDMpmvlJYlKR1dxEl9EErAvKhNP42%2Bj16kHuf%2FXVzvUVUDAo5ZeaFoNpNwnbJN4HHyPtTtO7ndzda2ixMPmS9LJdppmIkYn92qBgV8MbOeB%2FdhwSPkYrWsQeEIMYY8uJ77IM0ta9LaWYNUpepL9O33Q8SmVQWDlcxnmfyNebA7WW7IydXEcc9w9Kgv3JaQrbDtOYMXEG%2FqDcBpjsu5gnHbNwwQMJM0FW6b9qxp4wWR6NfpMzkBPkinXyIu09nXpGkAowj67thdAvzzVX7r%2BbJwLFcIZBeQ5vkw4OxUzaqg8j11AZBmWLp8qhW0WZRtMODMxMkGOqUB0Buiouv75h5Eua5zpCLS%2Bd6B7SPRk8r8df2dPdOw8JLijtdI1ICLEf3gywAqtFr1gmxkO%2FIYSs2QVR%2FS00GWzTxQEXX4V6yjikxXbHFlwYfxSlA%2F0kAlJh9fqa9n0xDUo0uHQJCmell1b99gii2A24KkSjuEn8Dan0IZ2Ldsy%2Bem72SHA9j%2B1c8NFZzrPcEKVPLt83oWB25BG%2Fx1DGx8wo5o8dn8&X-Amz-Signature=ae029289784e0ac937ca602054fcdff72d89afe1b90367e701d0515e5e11f86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


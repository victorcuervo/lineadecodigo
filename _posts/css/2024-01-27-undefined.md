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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZZJYGM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD4GgKMnPBk7qqx6fHHYzA24fhtbc9hipQagzBxmwmedgIhAJlWHYupaVIfkLNofmb%2B7y5QcIg83WMwbQZgdPz0VoLmKv8DCC0QABoMNjM3NDIzMTgzODA1IgyjigxjzgMJF0ptdm4q3ANmSA1EaxFQJD4qEFAUA2T1vjBjiMqd%2FHUcIwf9bkZFucvUtyluBpNLLyhgTCdcP1Q%2F0bWMQxpZbb9EUpiyJWjJUEGgOC6hp4Pb89UTq1g9R9%2BDM3%2Bl6ief5hk6qpRuvzMNGnzuvMk9Sfj1QYiEns27nerb3yqxL5w7Z3%2BWmZMCOpAAAw5G1obhMdHvqnYElZqZmoGRYtpu26SLUFG1oIgiwL1oSMAgkFv%2Bxk4nKvnpSLQz2Rz0E0IrnXgyvM0kwMkL%2FAxEeLfLWGK167EB9EOQ0SHtLLF6GhBf6Wp5JkxMuoWRZtB9%2F3jsQUxqI98pUFye9LNHVRMffL3a4WqZagscHgo%2F6pe1AOTrY5cfCQkMsfaw%2BiCL%2FVh5w6HuilmiybHQ6VxY42bngsPQRZkfgloqdigOInkGZn8G8x9K5BU2fhiELbiVNxhZcRVPRc2Lf0pvXc%2FDkMGD9OfXd18eiPeM5sgnmwB9oTsc5b9ZQK2qPHzvxcBjQcO7Ch9a8fuakLY4JqfZfvIMd74nPXLyWMzvU6WQABMYVP5H7e3%2FVtnICIGpNREt6UhKXHKU5N9zkzgFmO2cysXp%2Bci43Ashxsp2sRTf1H%2FnDM1eG1bZE2RGkkL4m8V%2Bz44k5MXj6TD3zMDJBjqkAZaNdUQb9bSQ%2FeuIGxPtGh1g3S6xnWwP0CUz5VdSCEwLv0bo4VqxfQOa6OckVm2lbQfkClWdNnbBNhwIuK%2F2IjDByunzn4hFFgn48CL6ap0NStwPZFioPPk7JrzuyxZ1Cc4RzMf8ohdp66jZWVxLw4Msqv2FJwd42kPncYLUvAs6C2Ctne4gaJK41f%2FFmbm7%2F6Bdf0CWdHNTLJqMEB2ZWA9gnRYe&X-Amz-Signature=d98d7e3467a4e7058eec025c60b120bc4615fec147eaba977ae4e39bae3f00e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZZJYGM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD4GgKMnPBk7qqx6fHHYzA24fhtbc9hipQagzBxmwmedgIhAJlWHYupaVIfkLNofmb%2B7y5QcIg83WMwbQZgdPz0VoLmKv8DCC0QABoMNjM3NDIzMTgzODA1IgyjigxjzgMJF0ptdm4q3ANmSA1EaxFQJD4qEFAUA2T1vjBjiMqd%2FHUcIwf9bkZFucvUtyluBpNLLyhgTCdcP1Q%2F0bWMQxpZbb9EUpiyJWjJUEGgOC6hp4Pb89UTq1g9R9%2BDM3%2Bl6ief5hk6qpRuvzMNGnzuvMk9Sfj1QYiEns27nerb3yqxL5w7Z3%2BWmZMCOpAAAw5G1obhMdHvqnYElZqZmoGRYtpu26SLUFG1oIgiwL1oSMAgkFv%2Bxk4nKvnpSLQz2Rz0E0IrnXgyvM0kwMkL%2FAxEeLfLWGK167EB9EOQ0SHtLLF6GhBf6Wp5JkxMuoWRZtB9%2F3jsQUxqI98pUFye9LNHVRMffL3a4WqZagscHgo%2F6pe1AOTrY5cfCQkMsfaw%2BiCL%2FVh5w6HuilmiybHQ6VxY42bngsPQRZkfgloqdigOInkGZn8G8x9K5BU2fhiELbiVNxhZcRVPRc2Lf0pvXc%2FDkMGD9OfXd18eiPeM5sgnmwB9oTsc5b9ZQK2qPHzvxcBjQcO7Ch9a8fuakLY4JqfZfvIMd74nPXLyWMzvU6WQABMYVP5H7e3%2FVtnICIGpNREt6UhKXHKU5N9zkzgFmO2cysXp%2Bci43Ashxsp2sRTf1H%2FnDM1eG1bZE2RGkkL4m8V%2Bz44k5MXj6TD3zMDJBjqkAZaNdUQb9bSQ%2FeuIGxPtGh1g3S6xnWwP0CUz5VdSCEwLv0bo4VqxfQOa6OckVm2lbQfkClWdNnbBNhwIuK%2F2IjDByunzn4hFFgn48CL6ap0NStwPZFioPPk7JrzuyxZ1Cc4RzMf8ohdp66jZWVxLw4Msqv2FJwd42kPncYLUvAs6C2Ctne4gaJK41f%2FFmbm7%2F6Bdf0CWdHNTLJqMEB2ZWA9gnRYe&X-Amz-Signature=9ec7d279d15d41a25dca0059e0945e805b93acb4ec811f02eb0a84f76a23c361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


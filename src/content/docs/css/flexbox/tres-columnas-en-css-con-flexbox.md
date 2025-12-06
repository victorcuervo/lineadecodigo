---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEEAXWA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1nx6zCZjgi7hyAX%2B4CANgCdBusWcYSAFW6iMxYfzeqAIgMvVNuevE9bZVfVbslQDAxYIW8XvCUIvy953TYS1d8A0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDyFHDup0ajwsdwtlyrcA%2B49tRO905WuuM9Bi3QliWUIqMOfapQFbhRExWsPYtX0J9rK3HOEqOBOvByHO7Umttu%2BvE34OQAqgOICV5XlGURFpZVeqG8EAazehEInm%2Bp088KK8OXqsJu6D%2FDF00MljP7XQ3ROM%2FiMVI%2BU8xyl4PhZL0AQsylx1mlHOJ0ucW4G%2Bz3pZtxnO6JC%2F371HSw%2BgTvwcv2maKBWcAn76GOwgplVCN03bUgE2KuXbkal5tkfEAv76jopZuOcRJwzerGZz9WRkwe5vmDxJKWhdGWJPqBrmxmzA7smxLrGsU%2B5l%2Bl5pAsq0Z6agaIF2so3sVt0dfor6ncA6JkAnd97cx3GKZA%2F%2BtYg1f5LG9oMm%2F%2BuG0h%2Fg3OP%2Fmzgj66UPW5SksvFxhmzsdlP9tsfnqxArRDy36v8WlW34d2Fdq0e8uTDVKcYaGC8yZZ0jcoKtILtRjfz2HEQpCi0TVryKuL%2FMvmmnH13Vi7dw3RMJYktRnzXj6L10b2M8VlbipOBciAzK%2FYpx8vjcgNC5Opi3jLViqo7WornZWJXn6ZzdLDiy2sTussRr4A4j1gymCS13u2zymkIfo9jLWZ2%2FTO1oEs%2BbVryX9X4aeF%2BEw%2BqK2cxDQIylr96Lxb05kJURo00VjjJMJ%2FezskGOqUBBiW5ERHO1UG6dTTYU9SLOuHVwD6HvIzuvWKltG37gRN6HESFVqT%2BjualzEZKX8pJ6MnJzYsRLepnz9%2FiOrSdfkiELlrdEWQEl1YrzmxMrKp%2FSs%2BWdms3%2Bilfh7qr0OmDnUqAv%2BnKexqVJlYGoqHmUGLmgJmRQyXczitivhtg%2BtOEX%2BVHdKSjiozceCaUyPplhEauJWZ6qS6T%2FsRG%2BUk4nRT6hIJb&X-Amz-Signature=f033f8047905ec28995adf6f163368ec6c12d05f02b03b47334c4d8d30e3d5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEEAXWA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1nx6zCZjgi7hyAX%2B4CANgCdBusWcYSAFW6iMxYfzeqAIgMvVNuevE9bZVfVbslQDAxYIW8XvCUIvy953TYS1d8A0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDyFHDup0ajwsdwtlyrcA%2B49tRO905WuuM9Bi3QliWUIqMOfapQFbhRExWsPYtX0J9rK3HOEqOBOvByHO7Umttu%2BvE34OQAqgOICV5XlGURFpZVeqG8EAazehEInm%2Bp088KK8OXqsJu6D%2FDF00MljP7XQ3ROM%2FiMVI%2BU8xyl4PhZL0AQsylx1mlHOJ0ucW4G%2Bz3pZtxnO6JC%2F371HSw%2BgTvwcv2maKBWcAn76GOwgplVCN03bUgE2KuXbkal5tkfEAv76jopZuOcRJwzerGZz9WRkwe5vmDxJKWhdGWJPqBrmxmzA7smxLrGsU%2B5l%2Bl5pAsq0Z6agaIF2so3sVt0dfor6ncA6JkAnd97cx3GKZA%2F%2BtYg1f5LG9oMm%2F%2BuG0h%2Fg3OP%2Fmzgj66UPW5SksvFxhmzsdlP9tsfnqxArRDy36v8WlW34d2Fdq0e8uTDVKcYaGC8yZZ0jcoKtILtRjfz2HEQpCi0TVryKuL%2FMvmmnH13Vi7dw3RMJYktRnzXj6L10b2M8VlbipOBciAzK%2FYpx8vjcgNC5Opi3jLViqo7WornZWJXn6ZzdLDiy2sTussRr4A4j1gymCS13u2zymkIfo9jLWZ2%2FTO1oEs%2BbVryX9X4aeF%2BEw%2BqK2cxDQIylr96Lxb05kJURo00VjjJMJ%2FezskGOqUBBiW5ERHO1UG6dTTYU9SLOuHVwD6HvIzuvWKltG37gRN6HESFVqT%2BjualzEZKX8pJ6MnJzYsRLepnz9%2FiOrSdfkiELlrdEWQEl1YrzmxMrKp%2FSs%2BWdms3%2Bilfh7qr0OmDnUqAv%2BnKexqVJlYGoqHmUGLmgJmRQyXczitivhtg%2BtOEX%2BVHdKSjiozceCaUyPplhEauJWZ6qS6T%2FsRG%2BUk4nRT6hIJb&X-Amz-Signature=8e8898d48b3f77ab73a2119acbc4768a18fe953096a63ef08b6947766f5a62df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


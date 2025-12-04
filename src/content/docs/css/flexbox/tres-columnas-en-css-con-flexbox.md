---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZE6JJSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkYzsqX5lCNiT94ct32B4xMUmh6%2B%2B1kVGY9GSEQd%2B2lgIgFZl%2BPb811FNtOQaGMq0SSmHLI%2FU2T1VvlOpGHZkOZFAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBlpwstElqbwFS8wMyrcA21HJ45yWhV2v9owyf3apY3cu25cDMDQJGIrV9E4qEM0ZWa1xVnNg4W%2BRqzpBH8hDgiQYe86Vl7BSSKOtq850ZNC4mcIQLvrP6HAjyL3Kzp0EI16%2BVKGVdxam16ETdN7ng6V5U4eE5p8%2FzC6I9hRqLdSiDJnne6byITV6OyiemKKBmlphc90j69zcZchrSCJGH882vbSy%2BC4YY%2BJWP%2Bcsbuz33cmPBOBZJdnFA2oJW3Uc7KEXkuDbiKwYNRu2o2c12rQRiy8CF3yViW6%2FKjciEzWzGm%2FF81PrcZdWkmHi5QIfR6rXsq4olotU3dKRkUtY94Od0tFYN6bBXeg%2FzFf9pj57Xga%2BFsAI0BOpHgWBp7qQiCCeIia03RBqMY%2BKOog1Z6xwvlIzi3ysAxXEPpuc3o2wzceP3%2BsEk3enreOptYdpCD5m0030C0EKvqDMrAEdWYSwtFd37fV6eSnDd2%2BpBQUZNlcpheyWxQyfN9%2F%2Fj1qKrndSZounq6kf76XZbEGC0KXvm8YX6r74BY2ivp%2FKhtSLOBBKx3J%2BQX2yjNg7%2Bddd8IVzABTefZZqZTHRHOodlQDcJVU0JraYofI%2BV7yYACrijBUlmO77BQTShKCnpJIleY6pma1V6jNKSv6MNWUw8kGOqUB00LIOdM9CbUiY83BthjfdLZ2uWp3LJy9xYKQW%2BuQkJcoaDgBNE%2Bx1lj%2FUwCeRxEfNjG8PW0qPHzXV6jNRkXtEjln0JrrYIO11nIW7xiEBx46f5XAw4IkZ%2BHYvMNUE97kYmAh0n856brIfij%2BZREVfBNizskR8Zf1oY65SqrUluTskDvaRHiGXVekVUvq9%2FOe5xCBw0z6rbkuA8FQTHK1uXWIuGIU&X-Amz-Signature=a8d2ff978b05a1ba1af035f504847e26d1d6b4d484a4c97e187eccc168d1d686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZE6JJSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkYzsqX5lCNiT94ct32B4xMUmh6%2B%2B1kVGY9GSEQd%2B2lgIgFZl%2BPb811FNtOQaGMq0SSmHLI%2FU2T1VvlOpGHZkOZFAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBlpwstElqbwFS8wMyrcA21HJ45yWhV2v9owyf3apY3cu25cDMDQJGIrV9E4qEM0ZWa1xVnNg4W%2BRqzpBH8hDgiQYe86Vl7BSSKOtq850ZNC4mcIQLvrP6HAjyL3Kzp0EI16%2BVKGVdxam16ETdN7ng6V5U4eE5p8%2FzC6I9hRqLdSiDJnne6byITV6OyiemKKBmlphc90j69zcZchrSCJGH882vbSy%2BC4YY%2BJWP%2Bcsbuz33cmPBOBZJdnFA2oJW3Uc7KEXkuDbiKwYNRu2o2c12rQRiy8CF3yViW6%2FKjciEzWzGm%2FF81PrcZdWkmHi5QIfR6rXsq4olotU3dKRkUtY94Od0tFYN6bBXeg%2FzFf9pj57Xga%2BFsAI0BOpHgWBp7qQiCCeIia03RBqMY%2BKOog1Z6xwvlIzi3ysAxXEPpuc3o2wzceP3%2BsEk3enreOptYdpCD5m0030C0EKvqDMrAEdWYSwtFd37fV6eSnDd2%2BpBQUZNlcpheyWxQyfN9%2F%2Fj1qKrndSZounq6kf76XZbEGC0KXvm8YX6r74BY2ivp%2FKhtSLOBBKx3J%2BQX2yjNg7%2Bddd8IVzABTefZZqZTHRHOodlQDcJVU0JraYofI%2BV7yYACrijBUlmO77BQTShKCnpJIleY6pma1V6jNKSv6MNWUw8kGOqUB00LIOdM9CbUiY83BthjfdLZ2uWp3LJy9xYKQW%2BuQkJcoaDgBNE%2Bx1lj%2FUwCeRxEfNjG8PW0qPHzXV6jNRkXtEjln0JrrYIO11nIW7xiEBx46f5XAw4IkZ%2BHYvMNUE97kYmAh0n856brIfij%2BZREVfBNizskR8Zf1oY65SqrUluTskDvaRHiGXVekVUvq9%2FOe5xCBw0z6rbkuA8FQTHK1uXWIuGIU&X-Amz-Signature=5a5b5886907b1eefa42c0f73267f616b62e82421e2b28a68fc0e401614994f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


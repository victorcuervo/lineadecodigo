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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVOFKVI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDIWSNvrSUxSkfI7h5jqAYqFDmHk%2FTnDwxlrFosJwEo6AIgP0gvG0%2Ba3VVYTkQjzHZwb3GJmSVQA2QFrymd4kjaK1gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOe1ugPyDYHKy9VsJyrcA7j5Hqtp35tFQZcHgHKHVIJNjzlbo5%2FkwsdOAruubp2i6vlt9ow9hQcjL1TheG4Hjm0ZaqMbD3o57FJaembnkesxy5v3sbE6KQH1hyZKAtEsrKHKZYEvy4QIik1JE9q8w2mFotEl3hgWocMXDOcFy98kybUhDlB2peKhjeuHj%2FYC3K5jqjZPgVfCwfAX8Z0pQNiZNy7KBHK9FiRv2Isz9Xpt1%2FzbiWzHjFBKewsT5%2FDgs6r9nB3acYESAwOLqXpGTt3FDaScIXAu%2B9fQOV5M54%2FekEzCg0I%2BImPo1Hibaq6PhPpErrD%2BSooLY19eSkHE911GDJeNM7%2F7NmGdKQ49fBTcOnzfCtlj5XIH7QDpycUvfimCHwTBNyi6WfgyChn5cMUM9HCY6BN90EqvulYW2jT1lYa%2B8r7jcSDqSxWmAw56diWvcttakc8NpUKLmFKTpS38nTC0w89L0EiK5fENK4VXBgsLREDjoTUCm3qw6h8bpl4yvs63oaFLAkm8SWCrc4W%2FBiaWqd51e3MPI3t%2FIBKrjQcyWl07eOtk7zMIz%2BsaaBa3dlagXI4DJuk3pmhr9gHI7EgZ5asaRDyH434TF5mJY41lLyXEF9E8JeNT9pgai57Z6DKIRKTnuIvTMJ2TwMkGOqUBIrSYPWezi6p2vJ9jmlhfPFzeBPpuWkqWjK7DSHRqz71M3dWcBNGmVAQ06hzivK0MrsvMgt6uw8kJlERtbBWND04QpHq8tEv3d80rRSEqVSR2i1QUZXiIFBDa6xDyVpkThxaoStt3%2Bze0JDlFIjDJrONXkCvJv%2F72%2F8Tqxri%2BpmyGpyISXTxJHdLJKQ%2FWA3ZOtMVdkeZw7QaOBqnF4zjGzbxWBEPS&X-Amz-Signature=67e967040663f381a480e52416d2fce502cf8c855275e8ca3029c9c08673fdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVOFKVI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDIWSNvrSUxSkfI7h5jqAYqFDmHk%2FTnDwxlrFosJwEo6AIgP0gvG0%2Ba3VVYTkQjzHZwb3GJmSVQA2QFrymd4kjaK1gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOe1ugPyDYHKy9VsJyrcA7j5Hqtp35tFQZcHgHKHVIJNjzlbo5%2FkwsdOAruubp2i6vlt9ow9hQcjL1TheG4Hjm0ZaqMbD3o57FJaembnkesxy5v3sbE6KQH1hyZKAtEsrKHKZYEvy4QIik1JE9q8w2mFotEl3hgWocMXDOcFy98kybUhDlB2peKhjeuHj%2FYC3K5jqjZPgVfCwfAX8Z0pQNiZNy7KBHK9FiRv2Isz9Xpt1%2FzbiWzHjFBKewsT5%2FDgs6r9nB3acYESAwOLqXpGTt3FDaScIXAu%2B9fQOV5M54%2FekEzCg0I%2BImPo1Hibaq6PhPpErrD%2BSooLY19eSkHE911GDJeNM7%2F7NmGdKQ49fBTcOnzfCtlj5XIH7QDpycUvfimCHwTBNyi6WfgyChn5cMUM9HCY6BN90EqvulYW2jT1lYa%2B8r7jcSDqSxWmAw56diWvcttakc8NpUKLmFKTpS38nTC0w89L0EiK5fENK4VXBgsLREDjoTUCm3qw6h8bpl4yvs63oaFLAkm8SWCrc4W%2FBiaWqd51e3MPI3t%2FIBKrjQcyWl07eOtk7zMIz%2BsaaBa3dlagXI4DJuk3pmhr9gHI7EgZ5asaRDyH434TF5mJY41lLyXEF9E8JeNT9pgai57Z6DKIRKTnuIvTMJ2TwMkGOqUBIrSYPWezi6p2vJ9jmlhfPFzeBPpuWkqWjK7DSHRqz71M3dWcBNGmVAQ06hzivK0MrsvMgt6uw8kJlERtbBWND04QpHq8tEv3d80rRSEqVSR2i1QUZXiIFBDa6xDyVpkThxaoStt3%2Bze0JDlFIjDJrONXkCvJv%2F72%2F8Tqxri%2BpmyGpyISXTxJHdLJKQ%2FWA3ZOtMVdkeZw7QaOBqnF4zjGzbxWBEPS&X-Amz-Signature=b50aecfb84d713789127d3ca2f062f50c0fdd423b1007b9062ddddd8a2866f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


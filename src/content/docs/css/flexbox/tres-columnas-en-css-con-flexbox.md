---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRPF6L5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHLyTlAC0Go42EsNh23b3uYrN4Ce6t%2BdSekoNW5fOW5AiEAjCxg8UV2NnKYmBFmj%2BETcMTtS8C0mfxgMOuvyfdwrL4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNXvMQsuxvapPhnOpyrcA%2FU%2BInmT%2BVv9Nuw5%2BI0bDPnG342bTh4aG8yU1VPNwNr2olyB5s8AQfh2WtzOWAVDZp0Lfa36ltZbk4eUXYT9Hf90OX1ivU%2BXcdGX2GxlYP6kaIHTbY1Rdd63C1XJkETj4D%2FbuFkUQzotiW9M7m3%2F4Vhv%2BHKVbKLg0jOxi6q3s4dzYLInvLjEaiDIYxfgYzphyS1KAHLf1KMMLFjUU74bVCV38BVWNWYUTUdshMHQpsxY%2FtSD7tS12kPQ9UMikItieAHhapBegZV8%2FA2OLwm7bBfs35XabbrwRFi7kbz%2BWstCeTQP%2FuiCP2J1q3h4T5TCNZmV%2BSNCqV1Gs23GDvIPyONko%2FPkBWRuzrp4hNubA8PD%2BQghjIin2sFX4Zohokzne9OYyvipOjO1UjjT%2FV7VEWJlGky%2BCPeckkADMp7WMxZFM7n%2BNXQs5K636nI%2FpsFDvzfD59j8tLQ3uU7jBfeUpOkCO4Hhz%2BEn6Ei2EvlZFOUTXqyZnFvwJhfTOyWr7ZD67bZqGlU0lgxOmi24SglFZaSXbQGY4AXgPyFQQar57BRX93JwfLvqobwddYbOjxW%2Fpfvfz9Bex5NjNTV67Icp6lNfNeUK6jB4Un%2BPFB8sHJF0Ly1yFnzHu8AZCXD5MO3M0ckGOqUBY26G8aGXAioD7smOiOq7AU1mspG42WI28r5V8GnLz%2FxvU4RWkDvSsrMFpYdVQB7H9P9tjT3tJT5kJ8MiiA1GpP9cHDE6ejg%2BtMxJuQZIA3mFjoxw2OXeYR1pVFKAF1mNlxq5%2FIzix%2B4Wbj6nP6oo4xeDNcS%2FKfOxknPP0eSYR1hjEIMnmxJ30Vp4vEl2ZgweTJbHzC01%2B0gv0qAyTZOkoV2pDrnk&X-Amz-Signature=aa3771eabeb284643516b70adde2c972e5b91a9c3c92ce65f3a60bec87798c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRPF6L5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHLyTlAC0Go42EsNh23b3uYrN4Ce6t%2BdSekoNW5fOW5AiEAjCxg8UV2NnKYmBFmj%2BETcMTtS8C0mfxgMOuvyfdwrL4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNXvMQsuxvapPhnOpyrcA%2FU%2BInmT%2BVv9Nuw5%2BI0bDPnG342bTh4aG8yU1VPNwNr2olyB5s8AQfh2WtzOWAVDZp0Lfa36ltZbk4eUXYT9Hf90OX1ivU%2BXcdGX2GxlYP6kaIHTbY1Rdd63C1XJkETj4D%2FbuFkUQzotiW9M7m3%2F4Vhv%2BHKVbKLg0jOxi6q3s4dzYLInvLjEaiDIYxfgYzphyS1KAHLf1KMMLFjUU74bVCV38BVWNWYUTUdshMHQpsxY%2FtSD7tS12kPQ9UMikItieAHhapBegZV8%2FA2OLwm7bBfs35XabbrwRFi7kbz%2BWstCeTQP%2FuiCP2J1q3h4T5TCNZmV%2BSNCqV1Gs23GDvIPyONko%2FPkBWRuzrp4hNubA8PD%2BQghjIin2sFX4Zohokzne9OYyvipOjO1UjjT%2FV7VEWJlGky%2BCPeckkADMp7WMxZFM7n%2BNXQs5K636nI%2FpsFDvzfD59j8tLQ3uU7jBfeUpOkCO4Hhz%2BEn6Ei2EvlZFOUTXqyZnFvwJhfTOyWr7ZD67bZqGlU0lgxOmi24SglFZaSXbQGY4AXgPyFQQar57BRX93JwfLvqobwddYbOjxW%2Fpfvfz9Bex5NjNTV67Icp6lNfNeUK6jB4Un%2BPFB8sHJF0Ly1yFnzHu8AZCXD5MO3M0ckGOqUBY26G8aGXAioD7smOiOq7AU1mspG42WI28r5V8GnLz%2FxvU4RWkDvSsrMFpYdVQB7H9P9tjT3tJT5kJ8MiiA1GpP9cHDE6ejg%2BtMxJuQZIA3mFjoxw2OXeYR1pVFKAF1mNlxq5%2FIzix%2B4Wbj6nP6oo4xeDNcS%2FKfOxknPP0eSYR1hjEIMnmxJ30Vp4vEl2ZgweTJbHzC01%2B0gv0qAyTZOkoV2pDrnk&X-Amz-Signature=69b4aca7fbab3b19bfcd6f906439fa307f9da07c8e2f16eecfe3b36b25a23c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


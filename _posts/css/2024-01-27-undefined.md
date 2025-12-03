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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AAEERY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIG%2FnVUsJstj%2B9pPNY4YngR5kLCFrsu8R8fxIePGUkNy2AiEAhYWmbVa2GGAQiVby%2BbgBTbknWoa4uLIpkqX%2FbfilA9oq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERGRrfeIbJ8MiZAxCrcA88%2B3yB0%2BEr2hFfuX2es0gO%2Bf40zOYFxSs9VKRAcqMPpyDWP3KUTyFxhBPdRazM5ftbvjtv1E8eB3tHIuWkzqK0rqdspYQE5v2KQzhEG5Uh0ePmeJJCHacMFjXmOT6FI2fNo0M2NUIYtaz9m7eOyc5tD6fcHgNUNvqB%2FHQManxOLi0KXeFFvEB9NyYHrUoFR2y9%2BwY%2BuvCBKPVIlUTm8lrXhCbo6FG1ONqCPadqEcYCYXMQ9jVf7RV0mYxp5x0OEcothPqDYTtuATTZP000DW3Gsx4CXycwbNO3hIMoD91PdLokC8s9I0cnNgj5oKuxB3G2VDVzt3K0kIHKlz9ceGURLi5WFpGo2Nyg9hx7jnc4AQvzmiTvCk%2Bd5OQcwejmeADDAp43AcY9vqqTOszZ1eXHlVAEGS7jesdY9u1q51iBwzhrVjkJhMXo44ZzHUqdKdGC%2B8pJuMNvbRzNBCPU4qD1ZlOaSQSMhmg8fATsn4GmYErtqFf0JyoP1KeAMJMU9YYzdklji8okM4IZd9ZeVD8zuBhvYHPr0%2FqQG2SiQtY3T4M%2BYqg9XNX1t1z60atv3tffVnkawxIuk7fdyKbaOwuk5rtM5MDGLvuyk1CuFTWHdHVneMpfPi2iU%2Br8vMOvMwMkGOqUB8beNh8TyITPAXOVsWrwK%2FoSLV9W1%2FyV3yPObu8CgvmOu0G8kxFyIHqCS4jPpW%2B00OX3q8KWoAVYwEzQ%2B4%2BB2NDMRiYahdkPj7VuiVie80ABnWo7Lb0hL3JYpbWJuAHqY01ZIHa8y2s4oJNq8LtRzvvGUXaAUx4w%2BOD33Y6CEDX6FpqXDZwikYP4BIHQE5nqV4FDyCsBCTvffr00I4%2FNcMil8zm4S&X-Amz-Signature=7e8ed1cc61c97ffddecadac4aba4979ee1f3f303e163a728fed60f22ccf7b04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AAEERY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIG%2FnVUsJstj%2B9pPNY4YngR5kLCFrsu8R8fxIePGUkNy2AiEAhYWmbVa2GGAQiVby%2BbgBTbknWoa4uLIpkqX%2FbfilA9oq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERGRrfeIbJ8MiZAxCrcA88%2B3yB0%2BEr2hFfuX2es0gO%2Bf40zOYFxSs9VKRAcqMPpyDWP3KUTyFxhBPdRazM5ftbvjtv1E8eB3tHIuWkzqK0rqdspYQE5v2KQzhEG5Uh0ePmeJJCHacMFjXmOT6FI2fNo0M2NUIYtaz9m7eOyc5tD6fcHgNUNvqB%2FHQManxOLi0KXeFFvEB9NyYHrUoFR2y9%2BwY%2BuvCBKPVIlUTm8lrXhCbo6FG1ONqCPadqEcYCYXMQ9jVf7RV0mYxp5x0OEcothPqDYTtuATTZP000DW3Gsx4CXycwbNO3hIMoD91PdLokC8s9I0cnNgj5oKuxB3G2VDVzt3K0kIHKlz9ceGURLi5WFpGo2Nyg9hx7jnc4AQvzmiTvCk%2Bd5OQcwejmeADDAp43AcY9vqqTOszZ1eXHlVAEGS7jesdY9u1q51iBwzhrVjkJhMXo44ZzHUqdKdGC%2B8pJuMNvbRzNBCPU4qD1ZlOaSQSMhmg8fATsn4GmYErtqFf0JyoP1KeAMJMU9YYzdklji8okM4IZd9ZeVD8zuBhvYHPr0%2FqQG2SiQtY3T4M%2BYqg9XNX1t1z60atv3tffVnkawxIuk7fdyKbaOwuk5rtM5MDGLvuyk1CuFTWHdHVneMpfPi2iU%2Br8vMOvMwMkGOqUB8beNh8TyITPAXOVsWrwK%2FoSLV9W1%2FyV3yPObu8CgvmOu0G8kxFyIHqCS4jPpW%2B00OX3q8KWoAVYwEzQ%2B4%2BB2NDMRiYahdkPj7VuiVie80ABnWo7Lb0hL3JYpbWJuAHqY01ZIHa8y2s4oJNq8LtRzvvGUXaAUx4w%2BOD33Y6CEDX6FpqXDZwikYP4BIHQE5nqV4FDyCsBCTvffr00I4%2FNcMil8zm4S&X-Amz-Signature=de91ba9ea2b6669dc5d1ddb4df55ec6e689b7fcf214a896f33d6f376eb86f8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


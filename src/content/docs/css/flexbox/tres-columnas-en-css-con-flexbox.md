---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63AFZDQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx0zoPNY0XBNToLODTDhBoWxEzKxN8NueRgmO8TwP7hAiEA5OmQr9Lq79fST%2FJlEfkjVteZyix7sFRIpdPAN0F%2BVLwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtuI9w74kEy0T7hQSrcA537SaptCPQ8mfCgT624m1LZviXyrJ34zo1PEIPInjbuC5CGdMTDIDzEEN9Qp5LrOX4PNz1DWY0Tc3QnJ1CjG%2FaVW2gKbr0P2JmMHNqNlAWZTF8yYTaLCcfbGNxQRUJaM5%2F85%2FZrC140jGn9xd9dhAnPkDXoFuLLPusO2ZyEBruOK2K0hhkGZNkgGxXo9UpYc1etQ7IW5a%2BjI%2Bmtzdexg8861A%2F3rNk8BglOv2xJnM4Bc52Acx3gdC%2FsiaHQC%2Ba%2F%2Bc2wC5zLCsmcU%2F49JVr2FrlxSJQkvBCbd579E1x%2BurPXeTmKZw3BLtAZzavSQdAKo0uvLeoEVjG3uibC87O6ofExUU%2F0pzrl20vBXBE9snLgY7S7qxTYOaldHzY1gmfMcDtgRaf1b4ZIh5PQiSACoBYwfoZXjbnTfoFgs35F1L3dLZX2xs79SIKvUTDQQWk3C6lyYRk0gUZZ5wqE%2BwhxfpECUUUocVbicLbXG661jookgbHT4kBfzrkXb01VAYkW0Ifo02RRw1U6CwjH9t7Qe55GUVU0BQbeM7gT61vByeQb9fvTJoMw%2FZdjyexeIvFydan16kKLD7QUuM9AC4EYzKSLzlnGIBzODfQJUY%2F8tadzxCWpsNPr6N5n7PueMKO02ckGOqUBca3968%2FwkHjxULc7IcilPqF4SxLxwCk%2FezwPj%2Be7ilb4rIeMWobXNBeYTZCit%2Bjs59BUD%2BawZheCYlFzcVOdmf6k7mjORA%2FxKbKSzW8a5Y2rHy8EX64oEFC8uNsIB%2FtdS%2BGOm4Q%2FK0Msy5mMbFjrXP%2BgVs%2FsfxrCR%2ByR2fFfWq9uJEWDkaAIRwQJO0fz8jTfkrCot4g887KP4DqIF24FuZlErXBR&X-Amz-Signature=0eb7baf77637fb1e41a5519998df6c552678b125b2a93761bb7ce1fcaed00141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63AFZDQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx0zoPNY0XBNToLODTDhBoWxEzKxN8NueRgmO8TwP7hAiEA5OmQr9Lq79fST%2FJlEfkjVteZyix7sFRIpdPAN0F%2BVLwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtuI9w74kEy0T7hQSrcA537SaptCPQ8mfCgT624m1LZviXyrJ34zo1PEIPInjbuC5CGdMTDIDzEEN9Qp5LrOX4PNz1DWY0Tc3QnJ1CjG%2FaVW2gKbr0P2JmMHNqNlAWZTF8yYTaLCcfbGNxQRUJaM5%2F85%2FZrC140jGn9xd9dhAnPkDXoFuLLPusO2ZyEBruOK2K0hhkGZNkgGxXo9UpYc1etQ7IW5a%2BjI%2Bmtzdexg8861A%2F3rNk8BglOv2xJnM4Bc52Acx3gdC%2FsiaHQC%2Ba%2F%2Bc2wC5zLCsmcU%2F49JVr2FrlxSJQkvBCbd579E1x%2BurPXeTmKZw3BLtAZzavSQdAKo0uvLeoEVjG3uibC87O6ofExUU%2F0pzrl20vBXBE9snLgY7S7qxTYOaldHzY1gmfMcDtgRaf1b4ZIh5PQiSACoBYwfoZXjbnTfoFgs35F1L3dLZX2xs79SIKvUTDQQWk3C6lyYRk0gUZZ5wqE%2BwhxfpECUUUocVbicLbXG661jookgbHT4kBfzrkXb01VAYkW0Ifo02RRw1U6CwjH9t7Qe55GUVU0BQbeM7gT61vByeQb9fvTJoMw%2FZdjyexeIvFydan16kKLD7QUuM9AC4EYzKSLzlnGIBzODfQJUY%2F8tadzxCWpsNPr6N5n7PueMKO02ckGOqUBca3968%2FwkHjxULc7IcilPqF4SxLxwCk%2FezwPj%2Be7ilb4rIeMWobXNBeYTZCit%2Bjs59BUD%2BawZheCYlFzcVOdmf6k7mjORA%2FxKbKSzW8a5Y2rHy8EX64oEFC8uNsIB%2FtdS%2BGOm4Q%2FK0Msy5mMbFjrXP%2BgVs%2FsfxrCR%2ByR2fFfWq9uJEWDkaAIRwQJO0fz8jTfkrCot4g887KP4DqIF24FuZlErXBR&X-Amz-Signature=70ac01844a1b4ded2cb9628c2b867da965059f5dee81499ff8b20279368191d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


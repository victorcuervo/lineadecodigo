---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQTJJ7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtIw4SZouMiQcodJxr06LIPGzzOs5qnGqluW6zkWOv9gIhAJGrRVUpLACgJh3mTxl2HLpBz1vvjWCt8XpBMM2g8DTDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqmxFJhHTBh%2F70OGIq3AP8i4B7v52ae6tb2yRfLEJcoyOXfizb5ADaGlhnsuUphx5kJXZZjy9uYIF%2Fo3%2FrSDnRRKNg9U3wqR9AYsf7a52FvcQoSgVMoQ11oVlcOSvMzbpQ7oqOdxFpWpMDkca0xO43IzMU5gGDC3I71qPIswqOgLvQV2W18VaDWJjQ9gQDXATsyEBJWztS9xYW1HWgKISwx3exU98pnwDsTJvmEOYUcIlLGME0Bd6yDo0g4QQLDbTDKhuRJeeFNerch4vZ0sMAKOWX31niX26H9Kol0lmz4iOdGYV%2BmYk3clxoYtgYJY1eah2DB6PUHIjJh9hmmEP0i3bk0SV1eUffm85tmDQU5%2FFnat5hCY2fCQUaYvQc31QdCLUdXgfO7bw5isUyiJlseHou%2BIIfI%2FgB7%2F8O6YwNL%2B8KzWeKYcjY45ychtIcsUC4z4z1k9VahKl1oW2xeBOEA11y4KZnZP7pVeFTNGppwQM6r7CsOy%2BBGJiStKARYfPKNCpQd9dn7kBe1H%2Fdt3Hf8P%2BeYTJb%2FPkXcIStDzISb7lGAOAb51R6BBfL7yWe0zs1sOLiw5Attgl0kGmsLBotiR8SyeRQHNT3HH7o79IM%2BOF3AlEaVxofwVuCUpL8czU6sq7O%2Fhna2wJOZzCu%2FtLJBjqkAegykW%2Fh39JaVdYsn44uhpae3GrcybP64k3XpMVqcC%2FcGAJuyrhwQopM6nNJ4wps1DIRyFpiIFjYcMoBd3LNQnnTegjKil8Ixx6N%2FoSN7ueWjpbkZBKDMD4u9sg7IZQa8YqkeLdU7QhDR4NN3YowLOQeZwUcv3AyB0QPrKHdntwc9ld4eDHt8eIMsytC03Vsb1F29Ls028N4v7mM%2Bf7Ye8J8hhvS&X-Amz-Signature=08819efbc83e0cc915cf6c471545b766c378acec61fe5dbb92db37fc68ac9e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQTJJ7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtIw4SZouMiQcodJxr06LIPGzzOs5qnGqluW6zkWOv9gIhAJGrRVUpLACgJh3mTxl2HLpBz1vvjWCt8XpBMM2g8DTDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqmxFJhHTBh%2F70OGIq3AP8i4B7v52ae6tb2yRfLEJcoyOXfizb5ADaGlhnsuUphx5kJXZZjy9uYIF%2Fo3%2FrSDnRRKNg9U3wqR9AYsf7a52FvcQoSgVMoQ11oVlcOSvMzbpQ7oqOdxFpWpMDkca0xO43IzMU5gGDC3I71qPIswqOgLvQV2W18VaDWJjQ9gQDXATsyEBJWztS9xYW1HWgKISwx3exU98pnwDsTJvmEOYUcIlLGME0Bd6yDo0g4QQLDbTDKhuRJeeFNerch4vZ0sMAKOWX31niX26H9Kol0lmz4iOdGYV%2BmYk3clxoYtgYJY1eah2DB6PUHIjJh9hmmEP0i3bk0SV1eUffm85tmDQU5%2FFnat5hCY2fCQUaYvQc31QdCLUdXgfO7bw5isUyiJlseHou%2BIIfI%2FgB7%2F8O6YwNL%2B8KzWeKYcjY45ychtIcsUC4z4z1k9VahKl1oW2xeBOEA11y4KZnZP7pVeFTNGppwQM6r7CsOy%2BBGJiStKARYfPKNCpQd9dn7kBe1H%2Fdt3Hf8P%2BeYTJb%2FPkXcIStDzISb7lGAOAb51R6BBfL7yWe0zs1sOLiw5Attgl0kGmsLBotiR8SyeRQHNT3HH7o79IM%2BOF3AlEaVxofwVuCUpL8czU6sq7O%2Fhna2wJOZzCu%2FtLJBjqkAegykW%2Fh39JaVdYsn44uhpae3GrcybP64k3XpMVqcC%2FcGAJuyrhwQopM6nNJ4wps1DIRyFpiIFjYcMoBd3LNQnnTegjKil8Ixx6N%2FoSN7ueWjpbkZBKDMD4u9sg7IZQa8YqkeLdU7QhDR4NN3YowLOQeZwUcv3AyB0QPrKHdntwc9ld4eDHt8eIMsytC03Vsb1F29Ls028N4v7mM%2Bf7Ye8J8hhvS&X-Amz-Signature=9c70a8c859b85c4f45628f6b6bb0eae8c704ae67f352b5b5bb3c3c54a7fbc656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


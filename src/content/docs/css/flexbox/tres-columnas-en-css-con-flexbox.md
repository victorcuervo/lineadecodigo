---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2I7VMI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDPDs7JCYAJSFu2EZZA4zki%2FhLz3Ed1m5c5TMOkY%2FJRbwIgNC%2Brst0QV87Pd4pX8WSl2c1f%2BrPc32WdtkW%2F4IFlwfkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMIqlZ0K%2FtqTHXvY1SrcA%2BgkY%2BFLn83apvUOJpfUv3kl1rzm7p4MoJGsBCizd4gUB5U5rx6y7%2FmlbQ4mUVL0fzK7DE9CNzAnpuVVzKcCxfaQD5cGep19je0HpIlVUcFa0%2BSiXREhIFqWEaZ9l%2F7P2YoftMjLNfgZ6Sll8emxl0brd8SM1yLl4biFLsNzT4I4vkuPHwVlyzAc%2FP4%2BqJwEACLw%2BsKOV7nDU0YBunPo86fJwtMZDkv5Kde90xe%2FX1jzCjAyHsl3SbcOo4wYJ4rm4aIjtjhE%2FxA%2BPniGO2lSkWXsoZp8m1XK6kq3UB3POOjI5fBWmn2uz%2B0uLTN8Umle3Hwo2CrRQkIDPiWk4TCQcTKe0IMwf3evwJU1AJYiFQgZhH7eBZO7wcGFk1BDlWxmP3qJNGinUKEJfRq5Gn5kNOHTshhqZHnILK1%2BGBfcwNW%2F8xrTX3LDZoqvNnoC7nzKJT1iZCagj1MVGdk9oH%2FHpCkxYKhOa04BzcwegBSBf6FzHWiyO%2BPLaWdqN5onKvDipadMP24J%2FSzRLIF9bO3kE5gKnDZEwYX9ToYoiKywwTTlmNe6JQ5IvtIFys15JO%2F%2Fuw5VuL8TnBvuF7zckQDgZ1mAkzlr4QoHvNsfn1xNy16CRj6%2FzSa7Z%2FQ8ffsuMNWuxMkGOqUBeA1k2KwNd3TxREYGiAUcXQtAZEKSdg45CepGeIjMqvRw1mAWQStJotWwtz%2FHy6Szy3sHQNjJWpnCVMrr5O9SiwTImefgQxQSVSupq6x9ys%2Bqbvr1MsoHXN1Bxh4wGMOuJghvlu96JfKlt5DjYGn5A8Xnz6vtVQoH26XCMk%2F%2BIN2PDcau5U6ZPO%2FHhLFqe39W6Tz6k2eHEW51zBtrmZuud0U6Qq2H&X-Amz-Signature=e622537dfc25868428209a699170e625f3f654fc572f77643b6c0a59de25f226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2I7VMI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDPDs7JCYAJSFu2EZZA4zki%2FhLz3Ed1m5c5TMOkY%2FJRbwIgNC%2Brst0QV87Pd4pX8WSl2c1f%2BrPc32WdtkW%2F4IFlwfkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMIqlZ0K%2FtqTHXvY1SrcA%2BgkY%2BFLn83apvUOJpfUv3kl1rzm7p4MoJGsBCizd4gUB5U5rx6y7%2FmlbQ4mUVL0fzK7DE9CNzAnpuVVzKcCxfaQD5cGep19je0HpIlVUcFa0%2BSiXREhIFqWEaZ9l%2F7P2YoftMjLNfgZ6Sll8emxl0brd8SM1yLl4biFLsNzT4I4vkuPHwVlyzAc%2FP4%2BqJwEACLw%2BsKOV7nDU0YBunPo86fJwtMZDkv5Kde90xe%2FX1jzCjAyHsl3SbcOo4wYJ4rm4aIjtjhE%2FxA%2BPniGO2lSkWXsoZp8m1XK6kq3UB3POOjI5fBWmn2uz%2B0uLTN8Umle3Hwo2CrRQkIDPiWk4TCQcTKe0IMwf3evwJU1AJYiFQgZhH7eBZO7wcGFk1BDlWxmP3qJNGinUKEJfRq5Gn5kNOHTshhqZHnILK1%2BGBfcwNW%2F8xrTX3LDZoqvNnoC7nzKJT1iZCagj1MVGdk9oH%2FHpCkxYKhOa04BzcwegBSBf6FzHWiyO%2BPLaWdqN5onKvDipadMP24J%2FSzRLIF9bO3kE5gKnDZEwYX9ToYoiKywwTTlmNe6JQ5IvtIFys15JO%2F%2Fuw5VuL8TnBvuF7zckQDgZ1mAkzlr4QoHvNsfn1xNy16CRj6%2FzSa7Z%2FQ8ffsuMNWuxMkGOqUBeA1k2KwNd3TxREYGiAUcXQtAZEKSdg45CepGeIjMqvRw1mAWQStJotWwtz%2FHy6Szy3sHQNjJWpnCVMrr5O9SiwTImefgQxQSVSupq6x9ys%2Bqbvr1MsoHXN1Bxh4wGMOuJghvlu96JfKlt5DjYGn5A8Xnz6vtVQoH26XCMk%2F%2BIN2PDcau5U6ZPO%2FHhLFqe39W6Tz6k2eHEW51zBtrmZuud0U6Qq2H&X-Amz-Signature=ad18db5f83d0426d93f0b3ec61d0b62a8e5deb02ba4cd092296d11bdda6ebf17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


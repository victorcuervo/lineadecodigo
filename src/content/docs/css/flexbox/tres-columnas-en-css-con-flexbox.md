---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GACJKL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyaTUb2wzqWs8PvZ9WggwmibjEJw6Yak3P7BOZerFgrgIhAPm0sVUPGPeeQxLIGEbinLoJeKrx%2BXY%2Fof2CwzseEGKlKv8DCFUQABoMNjM3NDIzMTgzODA1Igxac%2FgNSO5yDe3PizQq3AN97urqzVF0p1PPqM7V6d%2F0PpMQbas4k5UphxOZ4DqHGWUwmk%2FCqf0bqnJZIwiw97HVTelWsXCdN7MbkgCijKjqImmDuwSNkS8CbCtjf2fRvVmTm2W%2FeKrYQ6gaUZHHyGOyE4EfgY0QhvmVUVV2lT8kQU%2B6Czh%2FqVoSVrmsa8pBb2BW1herV235DwDqd4HEe0NXsAEC4HrkRF0wPylbQEptg0fXJ%2F7wEZuNDe9%2FSS1N54zHt8P2Znfh9kqi0YwEZI8Ui%2B3KYcdG4Rg84C%2FDEq%2BRkOylLPxUUBWyZfNvpbXkjLxoNukHazNmbOL%2BadImhbt%2BcQWikqkLVKDAq%2BLI8iKLZhMhZrxh5wCuYvOk%2BsgnaY5m%2Bx%2FZ9IhSbwoUADmRKSLmx3cx0Ov8TcOg9951qXXqI9iRyXBT7Zj6t9wjoKiWY%2B2LRUYvIwn0jbpcUnlWkmShNMVqPew5h7Vh3XdVHM0l1GPNoVCF1iSKVf%2BZFQTT32MyV6lRjuetH3KhpRLirwFSrsgr3CJYmgJz3uOwF3%2FRq7gehte3b4W9H4L0Fh6IXEXQvqGgPo8826JGc592zpIKM%2FOfX8VPTbjTc2ZcmrKcxuAaUSRUxCmpwgZNGiZZOVaUxH%2BPoWoqIZGg6DCzrMnJBjqkAdmd7zsDWVV2uuepwUb4fWZRa03vfKzmNbaRSzENa9i8%2FpeVJEuUbkSvU%2B0HJsviRyR4v600qTtvP7j%2BxgVphe6DJXzhOt%2F%2BnXoS13sNAooOIVzOgNVLbcMKWh6NiLWJpE6nup%2FIXXApChWojv1FFUfFEihEJa6XK%2FSmxs%2BfzSspnVGwkOqn3NBa8CZ%2Bec76i4C8O3VKs5bcxl07Gglp5nE2jOoU&X-Amz-Signature=f0f333ef141e80c2f95fc8086f74801b30a3e20073b611800eb9f3e0284901b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GACJKL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyaTUb2wzqWs8PvZ9WggwmibjEJw6Yak3P7BOZerFgrgIhAPm0sVUPGPeeQxLIGEbinLoJeKrx%2BXY%2Fof2CwzseEGKlKv8DCFUQABoMNjM3NDIzMTgzODA1Igxac%2FgNSO5yDe3PizQq3AN97urqzVF0p1PPqM7V6d%2F0PpMQbas4k5UphxOZ4DqHGWUwmk%2FCqf0bqnJZIwiw97HVTelWsXCdN7MbkgCijKjqImmDuwSNkS8CbCtjf2fRvVmTm2W%2FeKrYQ6gaUZHHyGOyE4EfgY0QhvmVUVV2lT8kQU%2B6Czh%2FqVoSVrmsa8pBb2BW1herV235DwDqd4HEe0NXsAEC4HrkRF0wPylbQEptg0fXJ%2F7wEZuNDe9%2FSS1N54zHt8P2Znfh9kqi0YwEZI8Ui%2B3KYcdG4Rg84C%2FDEq%2BRkOylLPxUUBWyZfNvpbXkjLxoNukHazNmbOL%2BadImhbt%2BcQWikqkLVKDAq%2BLI8iKLZhMhZrxh5wCuYvOk%2BsgnaY5m%2Bx%2FZ9IhSbwoUADmRKSLmx3cx0Ov8TcOg9951qXXqI9iRyXBT7Zj6t9wjoKiWY%2B2LRUYvIwn0jbpcUnlWkmShNMVqPew5h7Vh3XdVHM0l1GPNoVCF1iSKVf%2BZFQTT32MyV6lRjuetH3KhpRLirwFSrsgr3CJYmgJz3uOwF3%2FRq7gehte3b4W9H4L0Fh6IXEXQvqGgPo8826JGc592zpIKM%2FOfX8VPTbjTc2ZcmrKcxuAaUSRUxCmpwgZNGiZZOVaUxH%2BPoWoqIZGg6DCzrMnJBjqkAdmd7zsDWVV2uuepwUb4fWZRa03vfKzmNbaRSzENa9i8%2FpeVJEuUbkSvU%2B0HJsviRyR4v600qTtvP7j%2BxgVphe6DJXzhOt%2F%2BnXoS13sNAooOIVzOgNVLbcMKWh6NiLWJpE6nup%2FIXXApChWojv1FFUfFEihEJa6XK%2FSmxs%2BfzSspnVGwkOqn3NBa8CZ%2Bec76i4C8O3VKs5bcxl07Gglp5nE2jOoU&X-Amz-Signature=57c842d318efcb4bfb637e4f122a86430d8ad4379e702002ddd432b3f7bdcc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


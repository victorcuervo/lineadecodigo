---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CGHPT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt7V7XvAFxfinzaP4Bc4PYb7A%2F6D1hdLaWVzHc4d7ACAiEAyWjgd3B9EkeE0PwuDvQrEmyK9H6zgzjsnwj24SuvrVgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFbhea5wK%2BtYEAq%2BSrcAyS0HRXgxkgZE%2F%2Fs9JGwZKjq0v6mDexDldMgepskSOZ8iApmvyT8nlbLYf0vMPX9UYLquh20D61LLGbZr8dqAuAouexJIQRza4dW8fiWqQxLDw4mbI19j%2BXAh2aaLbjgmHnUTdz3TXUG7jXvQkFfnRbJvOu72Ic25yvx2THRa24gQkY%2BhzMqKllDGwC8jQpULNs09oxL0Y5xBfu%2FUedvhs5AAZKWdDH7gU1a%2B1cPbiPILqPIj5U5tsWGKOBR5NTpwFuStO8%2Fh6xzw1PbUg9MSuRmKLe2T0bVXYWnJX1s%2BNU4yMoNpsNSFKIEVGSg0W8v6DeoOf%2BQJHf48I1w7jC%2Bdd1egsSG6n5mpyteC5%2BkmL4jpWBbBBIG3g5VI48JpIraqfEDTIYYpCVWiPGJei0b3hW2FUJu8eVioZj3xbfcjMEGO%2Fu5VlxXS71TDGTG0Fx%2FGN%2BFkuW3EXI45KIktAQl17TQ3XFj28Zd8XKxFeTXooaPhIFm7OObOCnvYvqtkmYSDlwVWadOGVHE3%2FEx9eMHmGmTB1Qz1wQC7jic7%2B%2F42SO4AgZMT37VvSwzxulzmSp1MVv1wiLezBqJB6NsVG6u4Z1Prnyam1T8jhkBldCmIb8no6pU0oGCBpm8PycpMLqb1MkGOqUBevT%2FzdDp5SF7aMtQxXnjGYwSia%2FhQ4ObPcTbatlGb8Na%2BfMt%2BCKj%2F9zBFj7c7T80VSVe%2BwxNb1H7980tnQoE0FbLvqGRkKxmKjRo2i2NuwxCV2pCPOLBsf29J%2F3qiQiS7G7Dxc5LJu3NVCi5zmhPyT7Th8wHQEibfpfGwIRkkvAN81k3d856ucRIvs%2FZ96%2BoUj68%2FFYEXSi7l4HqFNWD8KoL7LLS&X-Amz-Signature=9fdd39791b11266caac2f8c326bcba44bc31b83923e4272d2d1192340a8e774b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CGHPT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt7V7XvAFxfinzaP4Bc4PYb7A%2F6D1hdLaWVzHc4d7ACAiEAyWjgd3B9EkeE0PwuDvQrEmyK9H6zgzjsnwj24SuvrVgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFbhea5wK%2BtYEAq%2BSrcAyS0HRXgxkgZE%2F%2Fs9JGwZKjq0v6mDexDldMgepskSOZ8iApmvyT8nlbLYf0vMPX9UYLquh20D61LLGbZr8dqAuAouexJIQRza4dW8fiWqQxLDw4mbI19j%2BXAh2aaLbjgmHnUTdz3TXUG7jXvQkFfnRbJvOu72Ic25yvx2THRa24gQkY%2BhzMqKllDGwC8jQpULNs09oxL0Y5xBfu%2FUedvhs5AAZKWdDH7gU1a%2B1cPbiPILqPIj5U5tsWGKOBR5NTpwFuStO8%2Fh6xzw1PbUg9MSuRmKLe2T0bVXYWnJX1s%2BNU4yMoNpsNSFKIEVGSg0W8v6DeoOf%2BQJHf48I1w7jC%2Bdd1egsSG6n5mpyteC5%2BkmL4jpWBbBBIG3g5VI48JpIraqfEDTIYYpCVWiPGJei0b3hW2FUJu8eVioZj3xbfcjMEGO%2Fu5VlxXS71TDGTG0Fx%2FGN%2BFkuW3EXI45KIktAQl17TQ3XFj28Zd8XKxFeTXooaPhIFm7OObOCnvYvqtkmYSDlwVWadOGVHE3%2FEx9eMHmGmTB1Qz1wQC7jic7%2B%2F42SO4AgZMT37VvSwzxulzmSp1MVv1wiLezBqJB6NsVG6u4Z1Prnyam1T8jhkBldCmIb8no6pU0oGCBpm8PycpMLqb1MkGOqUBevT%2FzdDp5SF7aMtQxXnjGYwSia%2FhQ4ObPcTbatlGb8Na%2BfMt%2BCKj%2F9zBFj7c7T80VSVe%2BwxNb1H7980tnQoE0FbLvqGRkKxmKjRo2i2NuwxCV2pCPOLBsf29J%2F3qiQiS7G7Dxc5LJu3NVCi5zmhPyT7Th8wHQEibfpfGwIRkkvAN81k3d856ucRIvs%2FZ96%2BoUj68%2FFYEXSi7l4HqFNWD8KoL7LLS&X-Amz-Signature=fe9c60d2eeb482e331974046ca802e4805f1ecf022d329cdb9e9d2fae995f0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


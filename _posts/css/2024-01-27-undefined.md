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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5I5IIX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCBAb8%2FXrdtleiPUVEStaD%2FZBzFF8%2FB3%2FHyiGOKpx9nEAIgHZtbPc1OuXn4Lkdb8FNGxljVJowxicvM0t8XjhNP9Ikq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAHLSn0hkimfqfRxwyrcAzjsgF3x0j3u4jR76rA25g%2FS6BBCv79HmRINsRwkjBbKdCNpKi68K7lBBaMR4Syqs7Cbhh6Y4Wr7MXUOrWzyrBUywH9BZilV4q1%2BzxFv6%2Bond4Z%2BC6%2BTBculTKaLSuOmTSNrNR%2B6nOgkMYePzzkmXXwfG%2B48xCsd1wcG2nwk4EpnsJ1gElQ9tNxUSNduOBv8aUUvNNGhaVjTldoJDcRKxrs9ryBSYGwL1%2FOkKrR1J1KNcADBVAQsCdZgRSXYHY21tIjkYyJ55WZzFBnxPXOoaIUo%2F%2BvL3k7fU8mv9%2B1GgtoLLGdkCgWmbhRuKWwQGPRLHt2qpxECoOoTJ9jBU9BQ741ph2Xf1SP%2ByvGzpCRxodGCPb0GoBQ6TAHzJK7MpoPJYl9c6YjMdUiCWRkclKWU9gP4SHTZxm4KpwYSrP2SJjskavxBAmTcbgTX4laMvA8o9re4EPrGYzQ9EAItiqpPRthsz9kOtCbjuTkH9SUbedkZTXvR6V9st8%2B9uxBD57Y0JIClfdkFk55z4O8%2BL3LkznNl%2F%2Fchrx5qXHupLGX%2BfLlBz47GdhCbkSNLlmQscMDOOhpE7yeI8%2BLNIEy3Y8ibJGYxACjLYnOQqGj%2Bf5%2BFICiQe%2FbfZJu73wKwM%2FcXMOCVvskGOqUB1rDZ6wBVkW7UAgWrYhQgPM4DX4qhI2Z7IF%2B%2Bs%2FLJX5qw3ZeKkOnB%2BgavTHDs1tBn2yDUSvkMzcAoxGHwZ2SYe7LCKHPqip52Cz2RsOq7x0rgRi1m2Uno9ACvVa0swKSH0YE5TD%2F24DekDXsHzQgaT9QsXGB5lmelwueIEPYnybrfXHJ%2BAPwkndHH12cgNtHGcW99V2HMjYr2Bi5qpsutLgVFf00Y&X-Amz-Signature=7952591ef4c2ca45c72281f24576a74c604cf109a7c8dd937895f8f552b2ee6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5I5IIX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCBAb8%2FXrdtleiPUVEStaD%2FZBzFF8%2FB3%2FHyiGOKpx9nEAIgHZtbPc1OuXn4Lkdb8FNGxljVJowxicvM0t8XjhNP9Ikq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAHLSn0hkimfqfRxwyrcAzjsgF3x0j3u4jR76rA25g%2FS6BBCv79HmRINsRwkjBbKdCNpKi68K7lBBaMR4Syqs7Cbhh6Y4Wr7MXUOrWzyrBUywH9BZilV4q1%2BzxFv6%2Bond4Z%2BC6%2BTBculTKaLSuOmTSNrNR%2B6nOgkMYePzzkmXXwfG%2B48xCsd1wcG2nwk4EpnsJ1gElQ9tNxUSNduOBv8aUUvNNGhaVjTldoJDcRKxrs9ryBSYGwL1%2FOkKrR1J1KNcADBVAQsCdZgRSXYHY21tIjkYyJ55WZzFBnxPXOoaIUo%2F%2BvL3k7fU8mv9%2B1GgtoLLGdkCgWmbhRuKWwQGPRLHt2qpxECoOoTJ9jBU9BQ741ph2Xf1SP%2ByvGzpCRxodGCPb0GoBQ6TAHzJK7MpoPJYl9c6YjMdUiCWRkclKWU9gP4SHTZxm4KpwYSrP2SJjskavxBAmTcbgTX4laMvA8o9re4EPrGYzQ9EAItiqpPRthsz9kOtCbjuTkH9SUbedkZTXvR6V9st8%2B9uxBD57Y0JIClfdkFk55z4O8%2BL3LkznNl%2F%2Fchrx5qXHupLGX%2BfLlBz47GdhCbkSNLlmQscMDOOhpE7yeI8%2BLNIEy3Y8ibJGYxACjLYnOQqGj%2Bf5%2BFICiQe%2FbfZJu73wKwM%2FcXMOCVvskGOqUB1rDZ6wBVkW7UAgWrYhQgPM4DX4qhI2Z7IF%2B%2Bs%2FLJX5qw3ZeKkOnB%2BgavTHDs1tBn2yDUSvkMzcAoxGHwZ2SYe7LCKHPqip52Cz2RsOq7x0rgRi1m2Uno9ACvVa0swKSH0YE5TD%2F24DekDXsHzQgaT9QsXGB5lmelwueIEPYnybrfXHJ%2BAPwkndHH12cgNtHGcW99V2HMjYr2Bi5qpsutLgVFf00Y&X-Amz-Signature=548402132aa593733e5f3d4a5e11c293a1d29cfd2935ad9ea0848a8d8fc5d87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


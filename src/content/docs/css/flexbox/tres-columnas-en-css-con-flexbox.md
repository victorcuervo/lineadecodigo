---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBO5UVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5VBtl0uYpoP2o%2FLf98cd%2BuUABaGVn4dTx9RNm8xxXgIgX7cTmXV2BipZ8YrGtMvmh1USIEs8TD%2BrkCR%2BsJk6v6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuBpow6Kl5DKt%2BncyrcA8ncFpeXqMk81kE%2BnRuXk0QwYTt4OnrcLNRi0rzdecz4zlbG%2FJRxC7FrObzHFJb%2BwN5FQbkb4uSEiAkxNrWj%2FmgJW%2FnYuRhHQGaNw%2FCt28kwc6C1NYVjg9FRp%2FBeDU2suNLjLrOJdwjIC1Xh9iPi2s5RUaJduHx4FmVNs8%2FuBn70YA4QX%2B7asRGObhlXACI2hv6JeRQRV6m01VapuFWCUQxPOSfCYtVkboDqH5iI6SjlFPdk7UmZf5Pmxva8H6oJCyeBqsMSGZZ514b7d6eQoRPDbimoHZKGpoXM6%2Fm3Y7Q9nxQXoATXDzGKHnQj9B%2BcGosjQImtoYlIttOzA4B9Ihm89228i3lj%2FXIK3xSgAEdiaFUj52B%2BC1zZCrotu0EPGdC7JPpFswRSyN6uv6N1Y9uduJ8N4N9hhKDa3Ua0oH6KR5c45tayNUVk03l6RO0257NoJAt7brdcxsSmgn1aLkYB1p7iW%2FTbOaPaELYlrb2eD8ku6hqmJQ0cw%2B5fIN%2BqWufKQ9QOPrD87Ykilw1WYfjAxxw6PRDD1J%2BAHO9ge7Fm9KJ%2BaTnUcqDxG7f2vW5wGbWNLJE6NtmWfpi0pF1Txc3tWO1SWxirRg62j0YDOeC%2FFx3%2BZOTTIm9gANS7MKiZ1ckGOqUBc51K5CHVyfS%2F0%2Bmbli%2Br5XJ9vwvDup6y0gvrFg1THi3BwHH5XYN9stmjfQwERYrw8DwloU8W2uJggOot2FqnQ1mLptU6IKauhO34PYBccmvBPrTJWKauXjWWmqDsQMvyXXn%2BxxFUUBIn8zm3vqKnTPWf3Q4LED2Mv9bBIlgWQQ4LbYIyEiowpRDwSiB%2BCqdPNiulgBwO%2BPCX5FNOIypj6q4Ys3xx&X-Amz-Signature=af2d88c4986636ba69b8736dd8c5db449f5d390d149429302eb2b116e7dd5dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBO5UVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5VBtl0uYpoP2o%2FLf98cd%2BuUABaGVn4dTx9RNm8xxXgIgX7cTmXV2BipZ8YrGtMvmh1USIEs8TD%2BrkCR%2BsJk6v6cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuBpow6Kl5DKt%2BncyrcA8ncFpeXqMk81kE%2BnRuXk0QwYTt4OnrcLNRi0rzdecz4zlbG%2FJRxC7FrObzHFJb%2BwN5FQbkb4uSEiAkxNrWj%2FmgJW%2FnYuRhHQGaNw%2FCt28kwc6C1NYVjg9FRp%2FBeDU2suNLjLrOJdwjIC1Xh9iPi2s5RUaJduHx4FmVNs8%2FuBn70YA4QX%2B7asRGObhlXACI2hv6JeRQRV6m01VapuFWCUQxPOSfCYtVkboDqH5iI6SjlFPdk7UmZf5Pmxva8H6oJCyeBqsMSGZZ514b7d6eQoRPDbimoHZKGpoXM6%2Fm3Y7Q9nxQXoATXDzGKHnQj9B%2BcGosjQImtoYlIttOzA4B9Ihm89228i3lj%2FXIK3xSgAEdiaFUj52B%2BC1zZCrotu0EPGdC7JPpFswRSyN6uv6N1Y9uduJ8N4N9hhKDa3Ua0oH6KR5c45tayNUVk03l6RO0257NoJAt7brdcxsSmgn1aLkYB1p7iW%2FTbOaPaELYlrb2eD8ku6hqmJQ0cw%2B5fIN%2BqWufKQ9QOPrD87Ykilw1WYfjAxxw6PRDD1J%2BAHO9ge7Fm9KJ%2BaTnUcqDxG7f2vW5wGbWNLJE6NtmWfpi0pF1Txc3tWO1SWxirRg62j0YDOeC%2FFx3%2BZOTTIm9gANS7MKiZ1ckGOqUBc51K5CHVyfS%2F0%2Bmbli%2Br5XJ9vwvDup6y0gvrFg1THi3BwHH5XYN9stmjfQwERYrw8DwloU8W2uJggOot2FqnQ1mLptU6IKauhO34PYBccmvBPrTJWKauXjWWmqDsQMvyXXn%2BxxFUUBIn8zm3vqKnTPWf3Q4LED2Mv9bBIlgWQQ4LbYIyEiowpRDwSiB%2BCqdPNiulgBwO%2BPCX5FNOIypj6q4Ys3xx&X-Amz-Signature=e993f7f9308885aaaa5223783b1a81c53f24e207cdfb03c816e66af809f0d6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


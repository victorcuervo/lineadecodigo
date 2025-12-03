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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITC6JR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC1y9paGN1H66D%2FFLVHQVuRpdVrtnVT%2F5UyTeRvqfmBrAiEAjCNw%2FVY22IrN%2FWy20%2FimtXhxDeShoaTTho6f%2FL8%2Blokq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJ2BkKIM5ZhvtN0unCrcAxY5ggDHZXgQe%2BBkxNpUhm0eKppXIUg0I2cpGtGco28BHuk1A2bgvlc3RfSMm01GRpwEDrd99vkPymYvFa3IMCXDiwaOIVyxKKfv1ePDINX2DvXswCULzGZdbnq9vCR2h%2B5Ik1cl9By87AR3pUTV1%2FFPV70uJee5fA701JfKQzugeSmZV15tftjf8AmsEwqnTF1woEzonSVXFfi8M7SwSsOt6Euq2Y50GLp6dfdJvEp0hOIY60OKYHrJH6GXLoKiDdzbfx9XLpUpvv98APsnHpB7emwFOnmtRtovJuLq3%2FDBF5jH9VqndLz9BgrDLcFZ4UHtqNYuxaI6mw3qzoSwyJ%2BuQkpaHGTbFgEl0lJUdyu0lqbjJpoOP1NDP1zVWOHT78VLggn6xt9AG9MeEo65VJJMTq6wgOhwlxUskDcsC5GHSpizHZa2Mo%2B8ZLxmbiIzigvarN%2Fnj88VX12Zt4whFsxKp6YJKKXMvDPT6nTVvnj73z7dvOJQlPZoU5snB8a8K5I9Nm3G3Q57USH3bZIFlF8K3ac4CW4JJxzKPLNfkfSz3qO0Cz9aMJRvAv%2BvSNIzKo0cdGjoNyI23gdar%2BWBS1rth3jFzb4%2F9Nr3vMRXuGy4vbFsnPVTzyPz7zlfMMLpwMkGOqUBqTSZdCYZG6EKcweLEoUnqmPmJ%2BOEr%2BQB8D7r4yJ5%2F7WjigUp53kxswxsn1rHC9izmidLqhhkZQAPmRVZY7O3hKB7whcOeN%2BXsjbl%2F50M9DiZi7Qs4DeLSGtzRewmQ4EW589AGYP1wv8B0%2BM0QKiUm2GVL2PdB74w0iMIc%2BSeMA%2FIqTby%2BH6aKvhc9%2BAMI3hoL9ERwvnGSoNDp5tsdE5PhpbFiADP&X-Amz-Signature=76d41d37a548a99640094b68171b1d22970affa3ebfe9247af6cf3b9c9e19c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITC6JR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC1y9paGN1H66D%2FFLVHQVuRpdVrtnVT%2F5UyTeRvqfmBrAiEAjCNw%2FVY22IrN%2FWy20%2FimtXhxDeShoaTTho6f%2FL8%2Blokq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJ2BkKIM5ZhvtN0unCrcAxY5ggDHZXgQe%2BBkxNpUhm0eKppXIUg0I2cpGtGco28BHuk1A2bgvlc3RfSMm01GRpwEDrd99vkPymYvFa3IMCXDiwaOIVyxKKfv1ePDINX2DvXswCULzGZdbnq9vCR2h%2B5Ik1cl9By87AR3pUTV1%2FFPV70uJee5fA701JfKQzugeSmZV15tftjf8AmsEwqnTF1woEzonSVXFfi8M7SwSsOt6Euq2Y50GLp6dfdJvEp0hOIY60OKYHrJH6GXLoKiDdzbfx9XLpUpvv98APsnHpB7emwFOnmtRtovJuLq3%2FDBF5jH9VqndLz9BgrDLcFZ4UHtqNYuxaI6mw3qzoSwyJ%2BuQkpaHGTbFgEl0lJUdyu0lqbjJpoOP1NDP1zVWOHT78VLggn6xt9AG9MeEo65VJJMTq6wgOhwlxUskDcsC5GHSpizHZa2Mo%2B8ZLxmbiIzigvarN%2Fnj88VX12Zt4whFsxKp6YJKKXMvDPT6nTVvnj73z7dvOJQlPZoU5snB8a8K5I9Nm3G3Q57USH3bZIFlF8K3ac4CW4JJxzKPLNfkfSz3qO0Cz9aMJRvAv%2BvSNIzKo0cdGjoNyI23gdar%2BWBS1rth3jFzb4%2F9Nr3vMRXuGy4vbFsnPVTzyPz7zlfMMLpwMkGOqUBqTSZdCYZG6EKcweLEoUnqmPmJ%2BOEr%2BQB8D7r4yJ5%2F7WjigUp53kxswxsn1rHC9izmidLqhhkZQAPmRVZY7O3hKB7whcOeN%2BXsjbl%2F50M9DiZi7Qs4DeLSGtzRewmQ4EW589AGYP1wv8B0%2BM0QKiUm2GVL2PdB74w0iMIc%2BSeMA%2FIqTby%2BH6aKvhc9%2BAMI3hoL9ERwvnGSoNDp5tsdE5PhpbFiADP&X-Amz-Signature=1a51d58cd215d2032d57ab3dae60af00192a01e9752c9034a29fdb294a4d2d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


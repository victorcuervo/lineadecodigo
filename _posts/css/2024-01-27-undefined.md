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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZ6FS4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDDGGD6qkS8Baa9qkSnJhB7An04aY%2F12toeNAkS%2FBn32gIhAPk4L9%2FZK8Uz9VlBXpe4OTAjDY9nGUbtGFTZsjqEYvWZKv8DCDAQABoMNjM3NDIzMTgzODA1IgzuRRGKzqfFSi5e5q4q3APihnzWxEaxUqh67Ha%2ByiVo4Jhq%2FKRPVqZ3cxoduStZ6LG1BEA6IfxN50zVZ64iMC2b3XJqw3xbFNnzHcicOxqcwV%2Fz%2F37gU9WqHW3GdYO0RmJLmNLwXBVxMUBLXsuSbfaPn3k79VWBKeXon1O4aRuefaU8DIQu7klf6r62bO4wv2pAlMQvqyU2CmWBfdKksX6YSEQb1UGZJd09Jxx3qyxv7O6TZhhIcCgWD173nnpJnp%2BcS%2FP4l%2BM3Zg0sNtZIwL4Pfx6eK0b%2FnZvJ1pyeKYu9xdTRNYlQ14POfEfjsM6rUBRxlhNlOWAugDoKrnAQUOMO%2B9ewAYeokZDKRl1NYZWgtbcAVTmnej%2FqM7YaUlw2wWvydxVBaeqtCjArpUXhtlvJzy5hr88%2FAZTHWHw27A5pO67QMs1U58Nv7DK2yEwbsyMX3WlR3BTre0aJSHv3MMvEJPRrp2CyRWYBUJFfCk3Y6D2PgrSlOEYPPwWPIZbbBOSu97I4%2F4Tl4fEklbXsFU6vigYqS%2BKhRFT%2BAvtwnEEFvTtSV038TLrdIzfLx3MK3N9eMCcQOwWHYdox8mEfgTvJ5hx%2FCv9Lg11pNgAXl9bXobkEdF4XVX90lXLhdgo8mPbeBvkJN3tWjHf2eDDApsHJBjqkAXCprLLHKtVsZP1aCedmFuQMdbezLqD2YekA7J4pS4Dw%2Bfq96015Dvx1flQuWZJ1D20fzGSKqbzp%2BWqbh3bfHDMnQF5Tgkuzi%2BiFePA%2B16tinK4k5F3OuWdeg1TDHb5r73zHUBYoZ5Wi8wvrt%2FUZb2sZTgXew%2Fot5A7dq49abFncKSnHnSIpseOhXg3ckFLo3dh%2FeAyjAAemK%2FF9DISmqrs%2BeJzQ&X-Amz-Signature=f57b071ef588ff1966c8019af9f79c3223e7bfde53ee1d8abf4ac80b22ade483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZ6FS4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDDGGD6qkS8Baa9qkSnJhB7An04aY%2F12toeNAkS%2FBn32gIhAPk4L9%2FZK8Uz9VlBXpe4OTAjDY9nGUbtGFTZsjqEYvWZKv8DCDAQABoMNjM3NDIzMTgzODA1IgzuRRGKzqfFSi5e5q4q3APihnzWxEaxUqh67Ha%2ByiVo4Jhq%2FKRPVqZ3cxoduStZ6LG1BEA6IfxN50zVZ64iMC2b3XJqw3xbFNnzHcicOxqcwV%2Fz%2F37gU9WqHW3GdYO0RmJLmNLwXBVxMUBLXsuSbfaPn3k79VWBKeXon1O4aRuefaU8DIQu7klf6r62bO4wv2pAlMQvqyU2CmWBfdKksX6YSEQb1UGZJd09Jxx3qyxv7O6TZhhIcCgWD173nnpJnp%2BcS%2FP4l%2BM3Zg0sNtZIwL4Pfx6eK0b%2FnZvJ1pyeKYu9xdTRNYlQ14POfEfjsM6rUBRxlhNlOWAugDoKrnAQUOMO%2B9ewAYeokZDKRl1NYZWgtbcAVTmnej%2FqM7YaUlw2wWvydxVBaeqtCjArpUXhtlvJzy5hr88%2FAZTHWHw27A5pO67QMs1U58Nv7DK2yEwbsyMX3WlR3BTre0aJSHv3MMvEJPRrp2CyRWYBUJFfCk3Y6D2PgrSlOEYPPwWPIZbbBOSu97I4%2F4Tl4fEklbXsFU6vigYqS%2BKhRFT%2BAvtwnEEFvTtSV038TLrdIzfLx3MK3N9eMCcQOwWHYdox8mEfgTvJ5hx%2FCv9Lg11pNgAXl9bXobkEdF4XVX90lXLhdgo8mPbeBvkJN3tWjHf2eDDApsHJBjqkAXCprLLHKtVsZP1aCedmFuQMdbezLqD2YekA7J4pS4Dw%2Bfq96015Dvx1flQuWZJ1D20fzGSKqbzp%2BWqbh3bfHDMnQF5Tgkuzi%2BiFePA%2B16tinK4k5F3OuWdeg1TDHb5r73zHUBYoZ5Wi8wvrt%2FUZb2sZTgXew%2Fot5A7dq49abFncKSnHnSIpseOhXg3ckFLo3dh%2FeAyjAAemK%2FF9DISmqrs%2BeJzQ&X-Amz-Signature=6cee4e7540403b8f8ddb3564d579cc20298ffa6d6b3f8e0e33d707c396e10744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6KYBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr7jL4DSgYcpryCxzIGGF9q4viT%2Fm3gJhNkdk%2BCrySSAiBI48sFCbVHxnpugl2dQtHUNVHOeZYM7bDvRmPQWgvbXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFfYx4d914wG7LrxKtwDo1QN982o0BsHXXhDDRSxmA9vSp3p3OzctYRCbIiKjM4ij3pc4WtWD3uMl6pWuPVowBdUTgXcx%2FqM2VfLFyT9Cc2yoHvE%2FRHVx6ioxwMdCXqwBVa6HpSXc7osE4CFjIXUGv9IO%2FBPSsTom1tRYMu7M1ldhhCyWmRZUmgyRJcLxCxbk0cGABWHL4Y115MV29w3Lu5KsUCG%2B5pbitDgQ5axWL78tmh3mqnLudn4RYTPN6P%2BUkb0SFLHJkTFxRBQ6cck7baMekl3YcxcXZHAG%2FwTp16a6YRkTr9r72mCMQbXlPxMZO%2B6jtqf2MrtYGu0tPoCAcTrjfxVpbJz%2B%2FFpQfDdY3frHokt5wg7bMag%2BViN3T2uSPqX%2FWREMpp9kv5iDttBBR0VGFI0qSiQxAHFEYjD57ImxUv2ny3n8YKp%2B71Ibi%2BVNjiRL9E%2F%2BnQ9PcJ4EihG8obz%2FEPb79ZIQ9wn%2Fnm%2BNJlkl4YUFJAROaXgfW6CsjYlH%2BlLrF16sh9h1o0MZSWkZPGXQPhqbXOA5HruowmFtraJvVdIZyHMpl%2Bleth3eiq2KzmhYKTpMskSDzeTTW%2BVZzbe2z8sSqpRd13Ta%2BmnOlOPBAe5l7pq93GbbPpCSaewLVa6%2F0ugjVx4td8w0ZnVyQY6pgGtQ6wEkvgTTAhiXlYsueECvylDmJ6ghJFgAr%2B5FQfBBby2b3VAlI7Kwke8z2oedugeZaH%2BzFklMsc02I%2BAP3A3OiGVPiMbBJ73WNwjGh%2Bx6B4wBljpbFbmGHhSpsU4zrTqEjyI2Mt7TOXetbHTntmfBnnnk56gRmDu9mzwLwCuhSw34ZUqyi0pgzqJ6utrWgEg%2FubzGNcpV7uG7Pm4p3IZhX3%2FiCBq&X-Amz-Signature=32f10942d4d03bb6d52639662a03906fffcb7918fb82c66c13c15704c67e70ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6KYBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr7jL4DSgYcpryCxzIGGF9q4viT%2Fm3gJhNkdk%2BCrySSAiBI48sFCbVHxnpugl2dQtHUNVHOeZYM7bDvRmPQWgvbXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFfYx4d914wG7LrxKtwDo1QN982o0BsHXXhDDRSxmA9vSp3p3OzctYRCbIiKjM4ij3pc4WtWD3uMl6pWuPVowBdUTgXcx%2FqM2VfLFyT9Cc2yoHvE%2FRHVx6ioxwMdCXqwBVa6HpSXc7osE4CFjIXUGv9IO%2FBPSsTom1tRYMu7M1ldhhCyWmRZUmgyRJcLxCxbk0cGABWHL4Y115MV29w3Lu5KsUCG%2B5pbitDgQ5axWL78tmh3mqnLudn4RYTPN6P%2BUkb0SFLHJkTFxRBQ6cck7baMekl3YcxcXZHAG%2FwTp16a6YRkTr9r72mCMQbXlPxMZO%2B6jtqf2MrtYGu0tPoCAcTrjfxVpbJz%2B%2FFpQfDdY3frHokt5wg7bMag%2BViN3T2uSPqX%2FWREMpp9kv5iDttBBR0VGFI0qSiQxAHFEYjD57ImxUv2ny3n8YKp%2B71Ibi%2BVNjiRL9E%2F%2BnQ9PcJ4EihG8obz%2FEPb79ZIQ9wn%2Fnm%2BNJlkl4YUFJAROaXgfW6CsjYlH%2BlLrF16sh9h1o0MZSWkZPGXQPhqbXOA5HruowmFtraJvVdIZyHMpl%2Bleth3eiq2KzmhYKTpMskSDzeTTW%2BVZzbe2z8sSqpRd13Ta%2BmnOlOPBAe5l7pq93GbbPpCSaewLVa6%2F0ugjVx4td8w0ZnVyQY6pgGtQ6wEkvgTTAhiXlYsueECvylDmJ6ghJFgAr%2B5FQfBBby2b3VAlI7Kwke8z2oedugeZaH%2BzFklMsc02I%2BAP3A3OiGVPiMbBJ73WNwjGh%2Bx6B4wBljpbFbmGHhSpsU4zrTqEjyI2Mt7TOXetbHTntmfBnnnk56gRmDu9mzwLwCuhSw34ZUqyi0pgzqJ6utrWgEg%2FubzGNcpV7uG7Pm4p3IZhX3%2FiCBq&X-Amz-Signature=dad00bff4126ef2ed399e2cdfc22645bcb683b32519222f1b598289fa9242371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


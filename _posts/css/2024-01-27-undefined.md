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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4SFMIZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDvSOXDtsaU35ZpiEvCkyC4D4%2FP2GRUbN4jA8dFRqyCpQIgHT%2BWFH6SAIFwx0FI0RPjY1%2FAYbpJx509vjgdJYF6MgQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHRfQoKtMdmhHZNXiSrcA067vXEuPdCKXxU9lx4k6e0LEbUn2LynWk8eD3bAGXfh%2FxOZRf4kVW4VCoZw1D0g9HeaUK%2BFjAGVDuXiacPpBBQFgwKm9h87bDLHNm1nARl4G6XrZN%2BZkco%2B0S4aWLLdR%2FlTj1kZTsx7zGcvFjNr9vY5gumEX6V%2BsScJMj6YzJbL9xSeiAqCK%2FCDJxiTc7RqOnPGwGxrRkQQko8mfDIKohlikIRlEfUDVeR4cK5b3k9s84AXUag5O4DucQ%2BpSkSX03yMp4Z%2FJqknMYlzV041yBeKIEFcwDzQBOFTtQoqUyF9aSrvN1WUDhu6MQzJuj7Nkhi2k5YpoyNHjDUI%2FzcPVJTVz%2FFAJ5QH2QOJBu8%2FhabrOwN5t1lMYRZgBK32F%2B5SpJGwcMhhWwD%2B9%2FCVImZzrCtcdm%2FRrfoTMEzuEs5owcvbKzk7oRe5Qsch63nkw9mt70He%2B0%2FENi9YoDXmLk69S2F30mBKXDI7B5yN2z8fxw0t9drODngcQl4%2BGSl09gvNXDVZqAi8A%2FmLzd6misUM7RE53bLYuHrQ5iHt7%2BCW%2FJQr9%2FvNflEf8dfO1c5r3u9D4NwYwHrz9wxLcsGK9VKCapFNaJe2d2Mhk4Tz6CITFfVyQx3ZmcFEb%2FFHj9n5MIzBwckGOqUB3BUrPau0FhbyCaZT5ycFRlzDdLXG9g31UVxePFQ1z5WTUP5LGBiXQOkLFubLh6PIN8nmNi1qXZjfQ3SbmP7Hsrbe0D2xsoYj%2FWWl6G%2BotyI1oDeOdCiQjaw9tTr38nlOF4Js5GcdzSzy3E4dVBzXuh6A%2FS3wkLlIRhb%2FUAmA%2BMJ%2FyL7Zm4Xv0dB6Ek%2BSmHq7Mi3E4ylzt9Ckvp6Z0o5Fppo9kvzl&X-Amz-Signature=7b74889b6dbc6e2e87a30c420bc4838eaf48a84344f2fc712ad62d00906871fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4SFMIZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDvSOXDtsaU35ZpiEvCkyC4D4%2FP2GRUbN4jA8dFRqyCpQIgHT%2BWFH6SAIFwx0FI0RPjY1%2FAYbpJx509vjgdJYF6MgQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHRfQoKtMdmhHZNXiSrcA067vXEuPdCKXxU9lx4k6e0LEbUn2LynWk8eD3bAGXfh%2FxOZRf4kVW4VCoZw1D0g9HeaUK%2BFjAGVDuXiacPpBBQFgwKm9h87bDLHNm1nARl4G6XrZN%2BZkco%2B0S4aWLLdR%2FlTj1kZTsx7zGcvFjNr9vY5gumEX6V%2BsScJMj6YzJbL9xSeiAqCK%2FCDJxiTc7RqOnPGwGxrRkQQko8mfDIKohlikIRlEfUDVeR4cK5b3k9s84AXUag5O4DucQ%2BpSkSX03yMp4Z%2FJqknMYlzV041yBeKIEFcwDzQBOFTtQoqUyF9aSrvN1WUDhu6MQzJuj7Nkhi2k5YpoyNHjDUI%2FzcPVJTVz%2FFAJ5QH2QOJBu8%2FhabrOwN5t1lMYRZgBK32F%2B5SpJGwcMhhWwD%2B9%2FCVImZzrCtcdm%2FRrfoTMEzuEs5owcvbKzk7oRe5Qsch63nkw9mt70He%2B0%2FENi9YoDXmLk69S2F30mBKXDI7B5yN2z8fxw0t9drODngcQl4%2BGSl09gvNXDVZqAi8A%2FmLzd6misUM7RE53bLYuHrQ5iHt7%2BCW%2FJQr9%2FvNflEf8dfO1c5r3u9D4NwYwHrz9wxLcsGK9VKCapFNaJe2d2Mhk4Tz6CITFfVyQx3ZmcFEb%2FFHj9n5MIzBwckGOqUB3BUrPau0FhbyCaZT5ycFRlzDdLXG9g31UVxePFQ1z5WTUP5LGBiXQOkLFubLh6PIN8nmNi1qXZjfQ3SbmP7Hsrbe0D2xsoYj%2FWWl6G%2BotyI1oDeOdCiQjaw9tTr38nlOF4Js5GcdzSzy3E4dVBzXuh6A%2FS3wkLlIRhb%2FUAmA%2BMJ%2FyL7Zm4Xv0dB6Ek%2BSmHq7Mi3E4ylzt9Ckvp6Z0o5Fppo9kvzl&X-Amz-Signature=052424086cad170ad5fd716e78e5730141a46e4cbd3e8cba255c20dbce4ee81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


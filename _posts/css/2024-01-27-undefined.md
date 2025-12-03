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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROVINL5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDy3Huz2AusxY8aOCKbMHc2uPSjiKiEwolZJb2hT6fdHwIgfxihiFKpb1eP6jDUHKiyuv%2BmI2yH6v5RZem7ev25Q5kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGJWPkDJjw0cbL%2BfNSrcA3zihhE76%2FEegBNSrWAC4pw%2F6zPyxczj7jKZZhjuK3MFEgdkZPwzKZuQkwWH2LrzuB4JDR01ua1m2oil3kSAVkRGUUU1f9M6OukivFRv72UVsYnKeUfEGGtG4yU%2FFxxwUaerz9wQxVKwFcVy8mdlCdns1dME3s%2BX86dFzR2rGr5%2FwhvBzIM09QY5vijFaGNeEr0jjxvpumtbN%2BJmcijHxD04ZP%2Bz5%2FeyEUudsyN5GGO5kPUvm6gVDsmtcbJZ6iezQudm5hrf5li3K7aVEit4VeTSJ8e7YT1P3Db4GjQrRgFbjUX7yXYpyErIfKoFm8vaPGgWaTteZPaWCVja9Ni3jnye4%2BvQXjJCIYEnEWm9RpzHAQpL3SFZ2JqhvH%2FANcZWIoreWXI1pUYc%2FNhrP5mQwKM7LpPzITG5JniLDJO22aa4tyWfx9YD2G1UsFY4QyK%2BhpCPn5b3aPK6%2BdHT%2BoL%2BQcObp9y7jWSI2yohrApPF7ITFKAmigBJ7rNEufwkMavV%2BfWYDG4YNrm8jI%2BRSatcJrbuz7rs%2FWt853fCGLTs3fCzTZTFFqIBd6e2XEEHJsnW7g9ZyuHaiOeDF5oGA0THSSFIn3C6ai3xTLyvRAJ9xdgNwBQL1UAKAuHlITj8MMaUvskGOqUB4WscuCRtQ%2FbLEGzWpeS%2BAQmEF4RAh7SOZX8jppSvmBUKN8oXi9kjQO95FIIOpNr5jgKuk3Bqtl3ZmcyNWgF6QIYDPrbbQU3ENqzqiKD82e%2F8AjnT4YC5aIZhzd8RPr%2FfpbHDvyTBSHAX5uFDbzstu6rrK6PVXhEK%2FB2C4VbBVmItImRlzoKyFCTQ7XBcBvYVerdje1lWRk%2Bd64jgdct4e55K3HFG&X-Amz-Signature=c0b2a3b15d710aae574ab131f4128b5794f534d3aa35220b999a10c186e20c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROVINL5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDy3Huz2AusxY8aOCKbMHc2uPSjiKiEwolZJb2hT6fdHwIgfxihiFKpb1eP6jDUHKiyuv%2BmI2yH6v5RZem7ev25Q5kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGJWPkDJjw0cbL%2BfNSrcA3zihhE76%2FEegBNSrWAC4pw%2F6zPyxczj7jKZZhjuK3MFEgdkZPwzKZuQkwWH2LrzuB4JDR01ua1m2oil3kSAVkRGUUU1f9M6OukivFRv72UVsYnKeUfEGGtG4yU%2FFxxwUaerz9wQxVKwFcVy8mdlCdns1dME3s%2BX86dFzR2rGr5%2FwhvBzIM09QY5vijFaGNeEr0jjxvpumtbN%2BJmcijHxD04ZP%2Bz5%2FeyEUudsyN5GGO5kPUvm6gVDsmtcbJZ6iezQudm5hrf5li3K7aVEit4VeTSJ8e7YT1P3Db4GjQrRgFbjUX7yXYpyErIfKoFm8vaPGgWaTteZPaWCVja9Ni3jnye4%2BvQXjJCIYEnEWm9RpzHAQpL3SFZ2JqhvH%2FANcZWIoreWXI1pUYc%2FNhrP5mQwKM7LpPzITG5JniLDJO22aa4tyWfx9YD2G1UsFY4QyK%2BhpCPn5b3aPK6%2BdHT%2BoL%2BQcObp9y7jWSI2yohrApPF7ITFKAmigBJ7rNEufwkMavV%2BfWYDG4YNrm8jI%2BRSatcJrbuz7rs%2FWt853fCGLTs3fCzTZTFFqIBd6e2XEEHJsnW7g9ZyuHaiOeDF5oGA0THSSFIn3C6ai3xTLyvRAJ9xdgNwBQL1UAKAuHlITj8MMaUvskGOqUB4WscuCRtQ%2FbLEGzWpeS%2BAQmEF4RAh7SOZX8jppSvmBUKN8oXi9kjQO95FIIOpNr5jgKuk3Bqtl3ZmcyNWgF6QIYDPrbbQU3ENqzqiKD82e%2F8AjnT4YC5aIZhzd8RPr%2FfpbHDvyTBSHAX5uFDbzstu6rrK6PVXhEK%2FB2C4VbBVmItImRlzoKyFCTQ7XBcBvYVerdje1lWRk%2Bd64jgdct4e55K3HFG&X-Amz-Signature=6ac3b222a5d8288ac3d53002686818df9789a082d41e6a12bc4a7151cc4cb2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


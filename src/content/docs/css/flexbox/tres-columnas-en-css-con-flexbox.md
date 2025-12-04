---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZA5VJRV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTCJv27EcUuu7hevkJ%2Fg%2BGnybWRhs%2FLo9iWGlFvEUqdQIhALmsXzzvNyNiXsYB35I3mIQhTdbWBokGRuMWYP9mX3ynKv8DCEkQABoMNjM3NDIzMTgzODA1IgzSr8weaVDvMcoSMkwq3ANiBBP%2Fj%2BDGD7QhzI0oQFnI%2F8Q8OAY11zLfvT8eI4Izjs3JRFGorp1PNWZUZeryPyDeW1%2BOynt%2BLZqVV5YXbVH2Nw%2FgUf2%2B2rdzj8Kh1OtXfRRvxBt2NwqjGxRM5Tg6FpqMC%2F05UcKg95wGyp5qSTCo3ilnXqRpM%2FOuShw%2BsFKghEI53qo04n%2FMKs8vUwmLq4M6wluDn1PpFfTdgOfPZTpwkTDEpP8RqAFQ0WWsRT6aPd4jqovToOf2%2FMuTLSlBl82CRGBe6uukthgcHdnZflzFAX%2Fe5LWUpykvBM9b0XuiysnXy9chtcDh%2FkXZIK0LHbmE12ScvgWHfDMmVBhvYGlvT%2FtAiKYD16yIKLnM%2Fzp2Uw7yJzOHPvPCGPDSv3ciO8TZ60o8AYwMstaqWeZGKFD2bqAYTSf59G7GWRjFI9SjUFvp%2BMYvK4k3bM6NduRCLa1YwyXOTz3ZXHFoZUjHgqdCVMq04tNU0PVvoeQdTJaVIY01F6thoxqkTWsBGnhXtgUhGC3bMDh0w0Bq%2B5eW44MkEalNLUtQe%2BviMRyAVsnfoSCL83806kWu%2BICjyh7e5up7QvIEARNStIjA10h9Gj%2Fw%2FAas8uNtx0UAstnlSEa5rfCLMutclmkCMx5skzDf28bJBjqkAVmtGddXoqWoljmC5swgBfHwP4ens%2Blnl2Val%2BmUZHtWwcu9DiB3xIyZSuOcn6SHsbRJZI1eY7NRCURRHH4t5vD4ywMc%2FJaEbaMXG6AXqXDWOZlmisX4NspsofOc5%2BLw2L6Im56rhS7lG%2BCBQyGwwkXr5hlyzOWSlOQiHEpOD80hykms4FJ%2FoYOWCnnhOFPWTJxzp4HnAKUeA1e%2BAuR1RitPkvOT&X-Amz-Signature=877606c8be0957227e66f5eb224e6abc30a33f74f1ee6b7dbe355d12b70b7411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZA5VJRV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTCJv27EcUuu7hevkJ%2Fg%2BGnybWRhs%2FLo9iWGlFvEUqdQIhALmsXzzvNyNiXsYB35I3mIQhTdbWBokGRuMWYP9mX3ynKv8DCEkQABoMNjM3NDIzMTgzODA1IgzSr8weaVDvMcoSMkwq3ANiBBP%2Fj%2BDGD7QhzI0oQFnI%2F8Q8OAY11zLfvT8eI4Izjs3JRFGorp1PNWZUZeryPyDeW1%2BOynt%2BLZqVV5YXbVH2Nw%2FgUf2%2B2rdzj8Kh1OtXfRRvxBt2NwqjGxRM5Tg6FpqMC%2F05UcKg95wGyp5qSTCo3ilnXqRpM%2FOuShw%2BsFKghEI53qo04n%2FMKs8vUwmLq4M6wluDn1PpFfTdgOfPZTpwkTDEpP8RqAFQ0WWsRT6aPd4jqovToOf2%2FMuTLSlBl82CRGBe6uukthgcHdnZflzFAX%2Fe5LWUpykvBM9b0XuiysnXy9chtcDh%2FkXZIK0LHbmE12ScvgWHfDMmVBhvYGlvT%2FtAiKYD16yIKLnM%2Fzp2Uw7yJzOHPvPCGPDSv3ciO8TZ60o8AYwMstaqWeZGKFD2bqAYTSf59G7GWRjFI9SjUFvp%2BMYvK4k3bM6NduRCLa1YwyXOTz3ZXHFoZUjHgqdCVMq04tNU0PVvoeQdTJaVIY01F6thoxqkTWsBGnhXtgUhGC3bMDh0w0Bq%2B5eW44MkEalNLUtQe%2BviMRyAVsnfoSCL83806kWu%2BICjyh7e5up7QvIEARNStIjA10h9Gj%2Fw%2FAas8uNtx0UAstnlSEa5rfCLMutclmkCMx5skzDf28bJBjqkAVmtGddXoqWoljmC5swgBfHwP4ens%2Blnl2Val%2BmUZHtWwcu9DiB3xIyZSuOcn6SHsbRJZI1eY7NRCURRHH4t5vD4ywMc%2FJaEbaMXG6AXqXDWOZlmisX4NspsofOc5%2BLw2L6Im56rhS7lG%2BCBQyGwwkXr5hlyzOWSlOQiHEpOD80hykms4FJ%2FoYOWCnnhOFPWTJxzp4HnAKUeA1e%2BAuR1RitPkvOT&X-Amz-Signature=17d21a1b1f9fcbddf1b928c31c1b0de1567331ac330a32cb3db62bd20c05215d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


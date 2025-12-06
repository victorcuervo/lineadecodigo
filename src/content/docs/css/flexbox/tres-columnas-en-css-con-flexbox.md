---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXGHHU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3KiJ3%2F2CKy7xDX4hBfsUsHRt0go52J6o%2FRG2COWBO8AIgOEcZDOwve1T5SOtMA%2Bn%2FhILT2hqJxsQ3Po%2F32W46nE0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDG53ssSyw55ZXmrkMSrcA5tDamLK4Bv5gnCRF%2FjsfJtxiQpkixcKqBq5UEbYllypOWcHkek5LsYB5MDtbUSAPbgtRgVQOcmU0MS%2FAUp3y0p27FK3dqZq%2FIBeb%2F5nWMSszHTefXrMNeh%2FjGezyVbk13huUtP1KTIDZC69kaDFzelaAIuzRzEbg0fY6YMw3%2BrV7hZRjY%2BraWbJ7mFZT9t7BnOjV1HYpDeb5DAY0Il%2BnRxKHuQro7LEvvHI9QBwwO6OdtNSIUxkb6qnAeivPp6u6urtBrA86%2FSEtbCuDiiFMcJAcTunJ1Q5sLmmGyJogFesmYlYCJG1rWUlbW3jfLAh2Cva2kVUTauHp%2FRrqynZ3YOYmcbFtkVO6gQg4OgWB0Q1ZgB478ZDpQPoG7C5SM1Cg1IJjcY%2Bx117W9XcmujTnwEElQJrlRBvWMmUB5%2B3Ahw9pYtZ4N2M4R2IpBaxKOUaSME90tN225S2oJZgzYVNr4YH8CnomdH%2B4ag5WmyHJ0H4qSYnQ5dglTvOhiBBWRSXMp8x%2FOZKAzG%2BLypxc89ArygTIzibdcQme%2BzgdoJCYsl0rRF61tHSrtBv1%2B2XvBiml%2F6iOjbdZ2Gg570mqUeZMNnMOmvSi04D2WVGUFo%2FXkxyTXzj7FHSfvKmU4lvMJDezskGOqUBO12ai%2BGvEn0N5kqLE7OXr%2FLSwy8uIdG4Euh26kBSFQUQhnVH%2BAOVjH35fPK7WMOi4y6svG8q%2F0%2Bq7NboPA9WdRterrUtzyyG%2F0tRT8fGoa4T%2B7z%2F5mumSbP6IAk4pdomTbUfw3ve9MdzjlbAws1iyG1jLrUGfkDgEfr%2F2ehnwlkf6yPP3cOJ8gMBOmuqasbQE4IvHKfyjXqPBPUHUu7%2FTLTTLioY&X-Amz-Signature=a2720b8af762ffae49632076359c6976baffd9c0f04c80ea5ec20dee0eea2f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXGHHU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3KiJ3%2F2CKy7xDX4hBfsUsHRt0go52J6o%2FRG2COWBO8AIgOEcZDOwve1T5SOtMA%2Bn%2FhILT2hqJxsQ3Po%2F32W46nE0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDG53ssSyw55ZXmrkMSrcA5tDamLK4Bv5gnCRF%2FjsfJtxiQpkixcKqBq5UEbYllypOWcHkek5LsYB5MDtbUSAPbgtRgVQOcmU0MS%2FAUp3y0p27FK3dqZq%2FIBeb%2F5nWMSszHTefXrMNeh%2FjGezyVbk13huUtP1KTIDZC69kaDFzelaAIuzRzEbg0fY6YMw3%2BrV7hZRjY%2BraWbJ7mFZT9t7BnOjV1HYpDeb5DAY0Il%2BnRxKHuQro7LEvvHI9QBwwO6OdtNSIUxkb6qnAeivPp6u6urtBrA86%2FSEtbCuDiiFMcJAcTunJ1Q5sLmmGyJogFesmYlYCJG1rWUlbW3jfLAh2Cva2kVUTauHp%2FRrqynZ3YOYmcbFtkVO6gQg4OgWB0Q1ZgB478ZDpQPoG7C5SM1Cg1IJjcY%2Bx117W9XcmujTnwEElQJrlRBvWMmUB5%2B3Ahw9pYtZ4N2M4R2IpBaxKOUaSME90tN225S2oJZgzYVNr4YH8CnomdH%2B4ag5WmyHJ0H4qSYnQ5dglTvOhiBBWRSXMp8x%2FOZKAzG%2BLypxc89ArygTIzibdcQme%2BzgdoJCYsl0rRF61tHSrtBv1%2B2XvBiml%2F6iOjbdZ2Gg570mqUeZMNnMOmvSi04D2WVGUFo%2FXkxyTXzj7FHSfvKmU4lvMJDezskGOqUBO12ai%2BGvEn0N5kqLE7OXr%2FLSwy8uIdG4Euh26kBSFQUQhnVH%2BAOVjH35fPK7WMOi4y6svG8q%2F0%2Bq7NboPA9WdRterrUtzyyG%2F0tRT8fGoa4T%2B7z%2F5mumSbP6IAk4pdomTbUfw3ve9MdzjlbAws1iyG1jLrUGfkDgEfr%2F2ehnwlkf6yPP3cOJ8gMBOmuqasbQE4IvHKfyjXqPBPUHUu7%2FTLTTLioY&X-Amz-Signature=27cab72ef090ff9ab7f6e8d67fc30fab4a60bc66f15f30c57f96dfa07e30911b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


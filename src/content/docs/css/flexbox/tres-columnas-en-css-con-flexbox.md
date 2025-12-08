---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBNPKJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAC6Kz85%2FzLIy7JXg%2FGa1xnJmXYxFb3capIX%2B3nxlQVAIgKldkKGq79zu9wLb5BXuwtoIrOPPuq0opvpvaNZYDlzQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ2xqpSIVQAczzo3yrcA05JUxWjzeP8LImL6W%2B1wL8gY%2BzGzVIusyWtwHoeT53DRBLFAKL19k0Eko67vfqTNpXnW86Ley%2FHzBebsSJbgF6fn0OMtbJ7ozjO3nDfF3waU2EeaAJ3VVukpRKtvfqXl3kcEnm9%2FxzkUHjMi%2F3ORl1t%2BnDC4VEXb2f81mZIrWq507bPzXswo%2FhYCHVV%2B%2B7FlVUCDhty%2BSXJPYLSNXyfw5Efe0EhKf2i%2B2M1pk6NsG5LDxVedkloUuLzK9evykIV6Eu%2Bwj02pzst%2FD0afraOLouylKF0b8nbgiF6f5Mp7TP7oWB8SgSYqvhEKiOB7ibR4GVdg16GMNdLQK9r00ty5A2z2jEouX6d5prgHv8nW1nov1aArqL8Gzxvmcgoo4jNFzAdbOtEo8%2FjNEyQI0Qva7ynMMQX6naXIdNLBhEgjNvYL1BzOld1S0F%2BF0mbBl5OD5Sa1VCAGqnF2eDTptgDWUM%2B5HSNuEWNY%2BCxCrFTZXem9u1oeMKdlawmmuQOOI%2BYOkQir6gAmQlTiqGkKta3wwAQJmQEiXQGkt16O2TRIy3bRkomOvwo42vD%2B0rglwyAtnG88MBv%2BU3ENbt7PLChFFOSOo1ZStFY9BCucHcJuPepgfy198nAWIUZSsFOMPqh2MkGOqUB1Qyy8GL4bviTt8GszFBxToN7vFz%2F9Je%2FyBA%2FXKs3ZmM8a%2BjsqEEyF8gl5IxrHatIAdKz4qEfBiGZ3JyVb3w9nuV8GD6l09h02MJNnTvOv2uu4wB0PbFueHInyNtoOZ4x%2FssHgOmJjmWhdks9dxOrcTB9cx2hCVt1up46Ez%2F8HxmoafCqLqyNVXHqA9pEgE%2BWne0NEP%2BravQdtITIKgQOQ%2Fwe5sg5&X-Amz-Signature=853a91555378ad3d11f9feb3c7c24b972ffcbd5d25784ea1cf85145976462452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBNPKJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAC6Kz85%2FzLIy7JXg%2FGa1xnJmXYxFb3capIX%2B3nxlQVAIgKldkKGq79zu9wLb5BXuwtoIrOPPuq0opvpvaNZYDlzQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ2xqpSIVQAczzo3yrcA05JUxWjzeP8LImL6W%2B1wL8gY%2BzGzVIusyWtwHoeT53DRBLFAKL19k0Eko67vfqTNpXnW86Ley%2FHzBebsSJbgF6fn0OMtbJ7ozjO3nDfF3waU2EeaAJ3VVukpRKtvfqXl3kcEnm9%2FxzkUHjMi%2F3ORl1t%2BnDC4VEXb2f81mZIrWq507bPzXswo%2FhYCHVV%2B%2B7FlVUCDhty%2BSXJPYLSNXyfw5Efe0EhKf2i%2B2M1pk6NsG5LDxVedkloUuLzK9evykIV6Eu%2Bwj02pzst%2FD0afraOLouylKF0b8nbgiF6f5Mp7TP7oWB8SgSYqvhEKiOB7ibR4GVdg16GMNdLQK9r00ty5A2z2jEouX6d5prgHv8nW1nov1aArqL8Gzxvmcgoo4jNFzAdbOtEo8%2FjNEyQI0Qva7ynMMQX6naXIdNLBhEgjNvYL1BzOld1S0F%2BF0mbBl5OD5Sa1VCAGqnF2eDTptgDWUM%2B5HSNuEWNY%2BCxCrFTZXem9u1oeMKdlawmmuQOOI%2BYOkQir6gAmQlTiqGkKta3wwAQJmQEiXQGkt16O2TRIy3bRkomOvwo42vD%2B0rglwyAtnG88MBv%2BU3ENbt7PLChFFOSOo1ZStFY9BCucHcJuPepgfy198nAWIUZSsFOMPqh2MkGOqUB1Qyy8GL4bviTt8GszFBxToN7vFz%2F9Je%2FyBA%2FXKs3ZmM8a%2BjsqEEyF8gl5IxrHatIAdKz4qEfBiGZ3JyVb3w9nuV8GD6l09h02MJNnTvOv2uu4wB0PbFueHInyNtoOZ4x%2FssHgOmJjmWhdks9dxOrcTB9cx2hCVt1up46Ez%2F8HxmoafCqLqyNVXHqA9pEgE%2BWne0NEP%2BravQdtITIKgQOQ%2Fwe5sg5&X-Amz-Signature=90a7a73bb5da06bd7d4ce0d77045012ef31b3dbb4e8d1df0e731f00d50e6e74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


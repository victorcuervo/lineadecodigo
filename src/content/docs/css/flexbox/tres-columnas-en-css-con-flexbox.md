---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TWRGYD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDka6So%2F%2FOaCxsyAyLvzl3p8rDvRnS7p0CSMbc7ZiSBgIgSUUWdXInQsfbAeFvd7UeOUsVIGUBpS9AEWP3TltXfeoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdagZNRYzAC3g6T3CrcA5aICkIAMT1DSxWvxuJWipOiM4F8Xdq21dCRL%2BTZ4qtLdzbo%2BeAeUWZUvv515gKvz8ynhqG7XAs48c39GNNq5Uo8pmHtmoWJ3xZ%2BrqtA44%2BSYzkmVMb5pUiA7YeEsR25LBEn4uRYRhGmm5Rpm9VwxIzfmQIvBZzcbz%2Bn1DKqnqEDQ7xihOJFHrAuONjNHeuf9%2BNdH%2B8S%2Fdyv3sdnPk1Q93U07D%2FF0J3HEsA87J6PIPj0I06IdS%2FkQJtPuZ9D7E29rWPgAtmhHSWxZAwsL0o3nNnXFk9gQnTtqinyEGSmM32CAV9IgcBYlS5w4yamuuRC9%2FSlfMzrYPFS0xv%2B0PHpOhVKCGCqwHGTu%2FEJ1BslwXWdX5FRNlDTS0Y%2Bq8cKvv2Jl3UoenBl%2BnNE2r22CpWAFnDWWnSPr%2BKx0wZztqITazkiYb5jj1igEjLCTaKBKhoMFQdkvlidSibqEzyWBVyQzVAc0Yu4tkdSAvWndHvUYbvP9OA8WjBeQTr%2FmIUfsj%2B3YlJ9OOjBbANI1r00xd7Zcpy%2B%2BNVbOvkQm0rWzsuvYbpVt0NyrIMT2b5BLBY7m18BbS%2BH2Otovc1e76j3z3RNgzaFIfoiD7z%2BkZ0kfXPcyeSmmd3ReNMTkh5bwvEEMPT90skGOqUBC%2Fz1Z2VROysmaLlq8qFR6kdMdrPYUHo6Fscq4qa4hg%2FaUaBpUk34OuMeZLEDK9HjPK5F8wZIBlpZxTt7bQGCX11DYuB0rZDxjydinHAjK2%2Faje03aOkxEbHgRv3FckZEB5H%2FBE6R47wLLMPKja2PGjai3bbZ2tdIVSIm9k7dZ3n5iCzUlugPGyd42P8gVyn%2FQ5rmEXjYJmXyg1ZGY8knFfaJEZlR&X-Amz-Signature=d25557a7f1d0d135e5216044d554b35e5a4b9ce8f00f326982b5b6224391c233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TWRGYD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDka6So%2F%2FOaCxsyAyLvzl3p8rDvRnS7p0CSMbc7ZiSBgIgSUUWdXInQsfbAeFvd7UeOUsVIGUBpS9AEWP3TltXfeoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdagZNRYzAC3g6T3CrcA5aICkIAMT1DSxWvxuJWipOiM4F8Xdq21dCRL%2BTZ4qtLdzbo%2BeAeUWZUvv515gKvz8ynhqG7XAs48c39GNNq5Uo8pmHtmoWJ3xZ%2BrqtA44%2BSYzkmVMb5pUiA7YeEsR25LBEn4uRYRhGmm5Rpm9VwxIzfmQIvBZzcbz%2Bn1DKqnqEDQ7xihOJFHrAuONjNHeuf9%2BNdH%2B8S%2Fdyv3sdnPk1Q93U07D%2FF0J3HEsA87J6PIPj0I06IdS%2FkQJtPuZ9D7E29rWPgAtmhHSWxZAwsL0o3nNnXFk9gQnTtqinyEGSmM32CAV9IgcBYlS5w4yamuuRC9%2FSlfMzrYPFS0xv%2B0PHpOhVKCGCqwHGTu%2FEJ1BslwXWdX5FRNlDTS0Y%2Bq8cKvv2Jl3UoenBl%2BnNE2r22CpWAFnDWWnSPr%2BKx0wZztqITazkiYb5jj1igEjLCTaKBKhoMFQdkvlidSibqEzyWBVyQzVAc0Yu4tkdSAvWndHvUYbvP9OA8WjBeQTr%2FmIUfsj%2B3YlJ9OOjBbANI1r00xd7Zcpy%2B%2BNVbOvkQm0rWzsuvYbpVt0NyrIMT2b5BLBY7m18BbS%2BH2Otovc1e76j3z3RNgzaFIfoiD7z%2BkZ0kfXPcyeSmmd3ReNMTkh5bwvEEMPT90skGOqUBC%2Fz1Z2VROysmaLlq8qFR6kdMdrPYUHo6Fscq4qa4hg%2FaUaBpUk34OuMeZLEDK9HjPK5F8wZIBlpZxTt7bQGCX11DYuB0rZDxjydinHAjK2%2Faje03aOkxEbHgRv3FckZEB5H%2FBE6R47wLLMPKja2PGjai3bbZ2tdIVSIm9k7dZ3n5iCzUlugPGyd42P8gVyn%2FQ5rmEXjYJmXyg1ZGY8knFfaJEZlR&X-Amz-Signature=65325aea6389150b10af3c5fa0d4083e148acf7e10b96e4d3f007dc2ae2f4537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


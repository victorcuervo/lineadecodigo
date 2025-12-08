---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAUOWSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7fEZAYjY%2FJbNeJ7zWK9NGKMsktvmrRS2SDNXetLiB9AiEAyMcGHFVP3BpiqZ8XegIyP2dHWy0nIzNOKFI5p0%2BkjxgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRyoUfHQ9G%2Bl6QMqSrcA266CIO0hrGhbt%2FqjaYCYA4RdLkGVT%2B6OZfXbl%2BiEdl%2FIpPUAPthnyQYNkW0MIlivepXoWKetT9k6%2BO%2B9r32e9q9AWQ0WIFm63Nw61gMvhYogsMaeWmCHS9zaXJ1HkRx51h%2FkXkD3lBiDlpXoa5d6T3a9RkGOVvKnmxN1YhIQx4tOg8BSWdPnOK4pD6n7gPALBr7kbVl79g1SxKFGkoUqu92QsT%2BLHQW%2FT1vGGY0O4kMT5QEfDo%2F04Zv2T2KKBZ6GdT06bRNg9gVpU71zoWrdOrfgJ2I95Mqt%2BeNirSHm%2BP2IVNjXJ1kroRgUa0UiRXC2E9YIkgDS90MXRdnnrYmMQNNawmjFTK8YOv54RPkXtPQ5HX9EKrGXc47MW%2BXIiMVIcXB7AjOwubPah%2F2Y9ygYWWy6pMohrQ%2BLKKyZknVuZKqcdAJCwCqO7o%2Bi1nk0eo9d5x3lGxzIhZsMiOjHYp1sUs8RlLGTRfAWIfp9o1UbNpO0ncgn4av8YuqTSNKNblfsqdCjNihDnvW0ODlDcheqN3cdWBu83NqS3m4DKSdJJqvJuMNhn6Mk4eXRAXgq5YAG1%2Fm4pkt322dVhr7j6O%2FokiQ20lv%2FYcF4m6cCSGcTA9TMUeeFEGqRrJSUxaiMPfs2ckGOqUBEKK0FmXZM9x1Kl60Cu3gVczsZU1tEOw6i3YiAlWryN65xu%2FqEhctsWMfBhY9BI6P%2Bibw3VOnzgCtIEtU3EO4Ucd4oqwxQsGQrPvON0ZLZUUVPbPLLPQC1KXfTVkgdYWgxgCiW7FYzB9EZ0smMjQfTY%2BycbKY%2FqX55Zoa7zvFdCQXnj%2F21uAqvJOzhgYok7qzX367sBPkPAuJ%2B5ZYlRVePaNsDW3B&X-Amz-Signature=45e40a360794c28adcf8a4c9ed783d76ec0a163eaf168de689728bf6e7047fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAUOWSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7fEZAYjY%2FJbNeJ7zWK9NGKMsktvmrRS2SDNXetLiB9AiEAyMcGHFVP3BpiqZ8XegIyP2dHWy0nIzNOKFI5p0%2BkjxgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRyoUfHQ9G%2Bl6QMqSrcA266CIO0hrGhbt%2FqjaYCYA4RdLkGVT%2B6OZfXbl%2BiEdl%2FIpPUAPthnyQYNkW0MIlivepXoWKetT9k6%2BO%2B9r32e9q9AWQ0WIFm63Nw61gMvhYogsMaeWmCHS9zaXJ1HkRx51h%2FkXkD3lBiDlpXoa5d6T3a9RkGOVvKnmxN1YhIQx4tOg8BSWdPnOK4pD6n7gPALBr7kbVl79g1SxKFGkoUqu92QsT%2BLHQW%2FT1vGGY0O4kMT5QEfDo%2F04Zv2T2KKBZ6GdT06bRNg9gVpU71zoWrdOrfgJ2I95Mqt%2BeNirSHm%2BP2IVNjXJ1kroRgUa0UiRXC2E9YIkgDS90MXRdnnrYmMQNNawmjFTK8YOv54RPkXtPQ5HX9EKrGXc47MW%2BXIiMVIcXB7AjOwubPah%2F2Y9ygYWWy6pMohrQ%2BLKKyZknVuZKqcdAJCwCqO7o%2Bi1nk0eo9d5x3lGxzIhZsMiOjHYp1sUs8RlLGTRfAWIfp9o1UbNpO0ncgn4av8YuqTSNKNblfsqdCjNihDnvW0ODlDcheqN3cdWBu83NqS3m4DKSdJJqvJuMNhn6Mk4eXRAXgq5YAG1%2Fm4pkt322dVhr7j6O%2FokiQ20lv%2FYcF4m6cCSGcTA9TMUeeFEGqRrJSUxaiMPfs2ckGOqUBEKK0FmXZM9x1Kl60Cu3gVczsZU1tEOw6i3YiAlWryN65xu%2FqEhctsWMfBhY9BI6P%2Bibw3VOnzgCtIEtU3EO4Ucd4oqwxQsGQrPvON0ZLZUUVPbPLLPQC1KXfTVkgdYWgxgCiW7FYzB9EZ0smMjQfTY%2BycbKY%2FqX55Zoa7zvFdCQXnj%2F21uAqvJOzhgYok7qzX367sBPkPAuJ%2B5ZYlRVePaNsDW3B&X-Amz-Signature=cae976c2c390fddd8a6d5ea01bef2b159ea5e0c916fa4091462ca12287b1550c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


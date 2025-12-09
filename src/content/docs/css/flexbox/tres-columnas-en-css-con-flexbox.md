---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFHAK3Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCENouqk3vV0%2B3hEl9jql8SJi4%2BLGoVoFopu4ppvM5mHgIgOGZCDblalkU5DsT3tDFMVBfvAFkdQqzdvuW%2FGM3XKkgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZzsXnGbKPt8B6WBSrcA6D0LJXO%2BQSNRogTOEbNtlOcPR0efR0L3nGEihRZjPfzSo1jDGIJMK0rHtQOiEYi9NR0nto6JTajrvIRyNtfvN4gE1D0QNNLvcccT1tQMdN72yq%2F1gmrtk7cq6twJdQMzistBu%2F7LzBdUQPUi3YzPb30HWCZTiWXkao4LPnpQy%2BKSqddLw9FyilLMudgEavxx%2BNgLnJA45ZX2htraGC6ZffSzY3nC1zxPS2kc%2FVoRqsbQxefbZm6qJn6GsqAII1Qnp3y%2Fsg0%2FZ7niuyKUmKKpAVUfGmxE4B1hMECucB85D2P3S1m%2B1gARFe3Ixlr067Rq0VruPoN8WXl1W%2FSb1chvvo45T33MEPctYw6l7J2tmd8j%2BBfGqV3ThIxyEmlapAom5m9TT0eALk1F1SQ%2FegPmwfwVrU6%2F8D3RrAyzt7kfxLvI1kGqOpeN22fk4Igs2pfxZdzNgs38gUkCiJ9YrpkYxgZLASWAkn0ODTlqZm74pg78hb24unWvuM2wUzPtxN7VFiTmJmULN6nbewmGCtdUjtb924U4xBu8xw3%2FEcVgYFprOTjNTKj9wcdiADj8w%2BGHZXJ4BYAzXDfilrdirYLJxBBsxm3TTcItlyE3rj7Sidh3YOaun3ZLBEpY%2FZgMPqt3skGOqUBan2Bz71rYxC7d6puwl5P9WoToiUT511srfFXzdXNqdX282%2Bi2P%2FSfGPmZIkkSy7Qh2oQwC3Ft8r7FZPh7NmhMC6zmhQByVG7rPG22g1MtI34HxvtZJv00WOzTyxrtseXZ6lIbuqpXMs48Gow%2FCISCVPUDa2dNpp896QI3C7OnZNqXRhSQsPnMEIbYVRmPYzvTC6q%2FEnHD3W9HLH3rXRUNpxImqoq&X-Amz-Signature=dc6a83f05be6317280fff2467370f6fd23618fc045dc28323d45ab7a1de2f9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFHAK3Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCENouqk3vV0%2B3hEl9jql8SJi4%2BLGoVoFopu4ppvM5mHgIgOGZCDblalkU5DsT3tDFMVBfvAFkdQqzdvuW%2FGM3XKkgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZzsXnGbKPt8B6WBSrcA6D0LJXO%2BQSNRogTOEbNtlOcPR0efR0L3nGEihRZjPfzSo1jDGIJMK0rHtQOiEYi9NR0nto6JTajrvIRyNtfvN4gE1D0QNNLvcccT1tQMdN72yq%2F1gmrtk7cq6twJdQMzistBu%2F7LzBdUQPUi3YzPb30HWCZTiWXkao4LPnpQy%2BKSqddLw9FyilLMudgEavxx%2BNgLnJA45ZX2htraGC6ZffSzY3nC1zxPS2kc%2FVoRqsbQxefbZm6qJn6GsqAII1Qnp3y%2Fsg0%2FZ7niuyKUmKKpAVUfGmxE4B1hMECucB85D2P3S1m%2B1gARFe3Ixlr067Rq0VruPoN8WXl1W%2FSb1chvvo45T33MEPctYw6l7J2tmd8j%2BBfGqV3ThIxyEmlapAom5m9TT0eALk1F1SQ%2FegPmwfwVrU6%2F8D3RrAyzt7kfxLvI1kGqOpeN22fk4Igs2pfxZdzNgs38gUkCiJ9YrpkYxgZLASWAkn0ODTlqZm74pg78hb24unWvuM2wUzPtxN7VFiTmJmULN6nbewmGCtdUjtb924U4xBu8xw3%2FEcVgYFprOTjNTKj9wcdiADj8w%2BGHZXJ4BYAzXDfilrdirYLJxBBsxm3TTcItlyE3rj7Sidh3YOaun3ZLBEpY%2FZgMPqt3skGOqUBan2Bz71rYxC7d6puwl5P9WoToiUT511srfFXzdXNqdX282%2Bi2P%2FSfGPmZIkkSy7Qh2oQwC3Ft8r7FZPh7NmhMC6zmhQByVG7rPG22g1MtI34HxvtZJv00WOzTyxrtseXZ6lIbuqpXMs48Gow%2FCISCVPUDa2dNpp896QI3C7OnZNqXRhSQsPnMEIbYVRmPYzvTC6q%2FEnHD3W9HLH3rXRUNpxImqoq&X-Amz-Signature=152f02283958211ed807a2da451e823f63f55eda36835fb4808666c9e8cd1274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


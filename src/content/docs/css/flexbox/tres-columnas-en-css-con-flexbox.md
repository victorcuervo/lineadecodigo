---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Y7SG2I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMkhJlXp%2F5U9s%2FhpJOSqCir5aveFEdkIim5k%2F2VjSKyAiEA8ur9Sa8wlyRMF%2BJPIUqNFYVdUyjWM%2FETUuWOTL4wVZ0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLw0ySFpAJd3zdY%2FjyrcAzzETVh8vjd2jJ93X9I%2FGd%2FWVZP2NM0p3tneLbPBfSrkJGBR4NESgtsBs9y%2B728AIpkWt%2FjtJnOOqOmBxbN4BnWmBbMyjsO6dEg5AQrBnoteMY88Z0daycaKgDDHd%2F4290JPZnQe%2BRdSDcGS6mJtiKj155AuL5hwsGUEYyDksubQR1xTfCGiykRqoakD7dKuZLNtiHucwm7EQbI7MfZrIOFkgpMctzyfNdBlNFH0kg1HvcGAWUbSuvcfbA2JQ5jVwCaewhWNr4QNEljh6Y75G8KSokUM%2ByshAqhZHxs%2Bq66WBCNn%2FCbnQm3ZNT9H2St%2FnDk8a1t3svNNemGIyHZ63Z1z1pulV3mrtxcghcl7vTVwqFsYjx9h3ubRugmigJSWyNRcUM5iDezdcuCHJrr1kgltmbaai17A4kTpXuUJ9Z%2FTbG8RYQtKBeuD%2BL1mrSEfGpM9rnNfBBx0hRF94uok%2BbUNJQgBxBFqPta1TBZlI3Rv4McST773vQruYy0Ne6htcQXNnYJq1XNfShQ61s50KRF6ooJ5qp6ku%2Be6ov7HPLB40YB26HcCP53od7CAbtEc0tvN6YtMaqsahY1ZOgUOlu2sESKEsjJxkB7mUeSu5GlB%2BOqwFPqZDnqI5xgUMJHrz8kGOqUBPKUaFw%2FE74bQ9uovVOcDMB2FRXBMKVUbUFWBSE60RSZpiuAz4HcF2SxB3RGPhPIJ%2BwDZhq%2BESS6vjnuPLvs8TkonOYKSZq4flBRA4fkm13DaLaQcGMtHCkPk9TvrI6F%2FuVdnAPoZy%2B062MUnGoFJlfb2x1QQLRflBbKhbZhCenAHu%2FplhEx2S4mj%2FQ5zIldofCNJlFeGD910U29ZtY2Cc32x0YM7&X-Amz-Signature=626b0eb3c7e0d7f3de68945d749fd782235dcde021128ab0c8cfa736613d9bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Y7SG2I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMkhJlXp%2F5U9s%2FhpJOSqCir5aveFEdkIim5k%2F2VjSKyAiEA8ur9Sa8wlyRMF%2BJPIUqNFYVdUyjWM%2FETUuWOTL4wVZ0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLw0ySFpAJd3zdY%2FjyrcAzzETVh8vjd2jJ93X9I%2FGd%2FWVZP2NM0p3tneLbPBfSrkJGBR4NESgtsBs9y%2B728AIpkWt%2FjtJnOOqOmBxbN4BnWmBbMyjsO6dEg5AQrBnoteMY88Z0daycaKgDDHd%2F4290JPZnQe%2BRdSDcGS6mJtiKj155AuL5hwsGUEYyDksubQR1xTfCGiykRqoakD7dKuZLNtiHucwm7EQbI7MfZrIOFkgpMctzyfNdBlNFH0kg1HvcGAWUbSuvcfbA2JQ5jVwCaewhWNr4QNEljh6Y75G8KSokUM%2ByshAqhZHxs%2Bq66WBCNn%2FCbnQm3ZNT9H2St%2FnDk8a1t3svNNemGIyHZ63Z1z1pulV3mrtxcghcl7vTVwqFsYjx9h3ubRugmigJSWyNRcUM5iDezdcuCHJrr1kgltmbaai17A4kTpXuUJ9Z%2FTbG8RYQtKBeuD%2BL1mrSEfGpM9rnNfBBx0hRF94uok%2BbUNJQgBxBFqPta1TBZlI3Rv4McST773vQruYy0Ne6htcQXNnYJq1XNfShQ61s50KRF6ooJ5qp6ku%2Be6ov7HPLB40YB26HcCP53od7CAbtEc0tvN6YtMaqsahY1ZOgUOlu2sESKEsjJxkB7mUeSu5GlB%2BOqwFPqZDnqI5xgUMJHrz8kGOqUBPKUaFw%2FE74bQ9uovVOcDMB2FRXBMKVUbUFWBSE60RSZpiuAz4HcF2SxB3RGPhPIJ%2BwDZhq%2BESS6vjnuPLvs8TkonOYKSZq4flBRA4fkm13DaLaQcGMtHCkPk9TvrI6F%2FuVdnAPoZy%2B062MUnGoFJlfb2x1QQLRflBbKhbZhCenAHu%2FplhEx2S4mj%2FQ5zIldofCNJlFeGD910U29ZtY2Cc32x0YM7&X-Amz-Signature=8fdb9a56e3810784c86685c8fc9823e9fc651822ed59d27b9d0831dac4e6edf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


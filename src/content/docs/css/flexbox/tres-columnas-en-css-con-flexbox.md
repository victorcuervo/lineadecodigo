---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIOUYNA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdoGB417FxSAM9kZNrJvoZ34VVQ9L%2BiPMbwy4gGSy3MAiEAynMz4sh%2BoxWkFgViSSwMLSIPYjNIn7nfQApCUtwJk8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKCgMtuxA8Y4iaIqSrcA%2Bi9f8ge4KZRAdOBfgmrKJoCUnZ%2FbQdyj6oXNPy7Cegemz7yl6BZjJ%2B0Z%2Bbt2haon5EC5R7vtm4CsDB%2F3XyfoSUxZ3EStKYdDgh7o7MMx2UikZyhCe%2Fee28gmgkJjQNEFixMg6zOl7BokPaBU7wyo4EeAWROlX1CEijInUAm18d8SXzLQ9Bd1LlUfpgWldSLMXEdu9Xbte30g9nrGEGmxHiWRmpezPYD4D1QsZV%2Bn3%2B3G9pgquw9rSYZakh5HpZ4KYVI0kA4LmvUvrtO076i1EpF0T%2F%2FqgMn07%2Bhz5RNFpm2FFHg%2FvTRlveRhM%2FNgDgD13rEY1KJlF1%2Fk1MwrIVTp6SeaW6IhawozwpMGqrYZsHCqT%2BvpBOwkUME7HDEACtnVrYYXJ270vZCNR2J62NRV1Xln5pGMt0Rnhz%2F3YiDfKRsgN5IQ9oyQRd21oOLZZyRyX2BKqH1ja559If8gmgHOP1CwUGYIzuCLRnAIu0xSLxz6Uj14HJZn7NfV9yDAf%2BlHETTXyMBKNgGP6VxBwERUkt%2FEDfP6Gk2Pu%2B4hGA2j6RAO4PoFzVl6mcCwCKC%2BmMOiUmIIFVtgTvkM0BaXy%2BYkpRq3tTdYvvQXHUwh3hLjhIB4igXoqZSiJP5SFX2MMut3skGOqUBPquTrrJB9SfHQ12nYXeWobT%2FuVC6rw91SytKDUMFc33h%2F0WY0dYTNolQUwvG%2BIUgrMQQgyG4djGcLVFN9dcXPBA8NUYFI2g%2FWrNBiQKdYJE93TCTcMJAXEyTAuPSar8huRJUwz1qIuFrIolOSrG0foNyScArhI1vsPawvmiHcyX8RqXsg0V67F6oAPon5%2FczbY26nSBYJSaUbAYUNuiuPojQZmNu&X-Amz-Signature=d9fa7fb30a4bd1164f0a2b2c27afaa21ec7c70b571d8b8734d787c60998d4fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIOUYNA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdoGB417FxSAM9kZNrJvoZ34VVQ9L%2BiPMbwy4gGSy3MAiEAynMz4sh%2BoxWkFgViSSwMLSIPYjNIn7nfQApCUtwJk8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKCgMtuxA8Y4iaIqSrcA%2Bi9f8ge4KZRAdOBfgmrKJoCUnZ%2FbQdyj6oXNPy7Cegemz7yl6BZjJ%2B0Z%2Bbt2haon5EC5R7vtm4CsDB%2F3XyfoSUxZ3EStKYdDgh7o7MMx2UikZyhCe%2Fee28gmgkJjQNEFixMg6zOl7BokPaBU7wyo4EeAWROlX1CEijInUAm18d8SXzLQ9Bd1LlUfpgWldSLMXEdu9Xbte30g9nrGEGmxHiWRmpezPYD4D1QsZV%2Bn3%2B3G9pgquw9rSYZakh5HpZ4KYVI0kA4LmvUvrtO076i1EpF0T%2F%2FqgMn07%2Bhz5RNFpm2FFHg%2FvTRlveRhM%2FNgDgD13rEY1KJlF1%2Fk1MwrIVTp6SeaW6IhawozwpMGqrYZsHCqT%2BvpBOwkUME7HDEACtnVrYYXJ270vZCNR2J62NRV1Xln5pGMt0Rnhz%2F3YiDfKRsgN5IQ9oyQRd21oOLZZyRyX2BKqH1ja559If8gmgHOP1CwUGYIzuCLRnAIu0xSLxz6Uj14HJZn7NfV9yDAf%2BlHETTXyMBKNgGP6VxBwERUkt%2FEDfP6Gk2Pu%2B4hGA2j6RAO4PoFzVl6mcCwCKC%2BmMOiUmIIFVtgTvkM0BaXy%2BYkpRq3tTdYvvQXHUwh3hLjhIB4igXoqZSiJP5SFX2MMut3skGOqUBPquTrrJB9SfHQ12nYXeWobT%2FuVC6rw91SytKDUMFc33h%2F0WY0dYTNolQUwvG%2BIUgrMQQgyG4djGcLVFN9dcXPBA8NUYFI2g%2FWrNBiQKdYJE93TCTcMJAXEyTAuPSar8huRJUwz1qIuFrIolOSrG0foNyScArhI1vsPawvmiHcyX8RqXsg0V67F6oAPon5%2FczbY26nSBYJSaUbAYUNuiuPojQZmNu&X-Amz-Signature=cebebf077ccbc3cca6e25d3ddc7b8cccf415f3ab6bba838ac5f0fcafcc21c827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


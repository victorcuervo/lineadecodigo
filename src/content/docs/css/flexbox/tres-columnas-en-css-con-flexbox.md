---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEWRCCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs7%2BmA5X8EH6ePbkWSmRpPL77nNA%2BU93MTxY%2FLRayNCAiEA75N686nOWimV5vmwhyr5adMUaWD5ovSHtoWYvqYAQVgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ%2BOFav0XW1whK7euircA5SxHTbH%2F7fj%2BT3gznZZ5npjjAlwD03XGLybWtSxfT6IJwwKzytogjBDLA4%2B70yQ3J85BZc0frI7i2ZMOj4vWZil%2BIrCz1i3mQNdbi05eL%2FOiz2FnpcX64TpZfYkkLZoBv5WcUWXsOM5SFdrz8GYEsUYi1ynTMTSGlgUfyycAz9rOaP2pfv3jT3OggLS07nQERyZXdFXsiVjSOjsLR%2BJYClCmevsvsBwTWYIih%2B%2B3BY%2BlOUcE8u8woGMLfNKvCagilkiSWUe5lrn6G3wQtIvSYdMHy1THq0%2B5VFky3Wmy0O%2BOKYlWWZ0%2B6B%2B4uVupPQDZHaNQ9GXRA84UFjndbHPxJFpxNk20SYxkq1qodaOPDdzzYa2siA3T7XR0hvUatBQRmnpJqVbezlgvPNNv55AQaqSL%2BI0i5cQDkHylMoZzZXVgOzJWlFNPS1hnNOYZfQrUQ9v6WtzVCOaVYL8hN5o6gHiB4tBPdRCIEaxNGmOYKIq46HoIt%2F%2B%2Fv0J0EZaL5PJbbLqm6dRhvDXOeY58E0etWUQ5WIPexp3MZKo70RxY34897B704bez%2FfLQNi8GTOTMv%2BKa8tx%2Fc9ncXZSkYoj4FrWztWNpoGqY1z8bB15Rubi2jLn0FYHyVWJPtlTMKGoyckGOqUBJJF6tQfC8RhZBigki%2B06V9m5vNF8ZyUPb%2FZrFpSI2E%2BFUHDn35%2BGJt3RGZSRocMRmbUlFVfRtEQ9T0cdgWbAYWByS9pAUfcPrjRArNXgR4luYMYzH96pNK9dh7AUokgiaTNYWttfUWlg0ZbPofZ%2FsQD34vp0TVwiSapfwP%2FfoiUCKXJU9r7j8K%2Fd%2FkWwqA%2Bs9zWkaB7vh8OuPLWehbuKg30A6qgB&X-Amz-Signature=8e3870485e87456f33c9ebe2184b3391c555eb04e64e34ec9b578090aabe8719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEWRCCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs7%2BmA5X8EH6ePbkWSmRpPL77nNA%2BU93MTxY%2FLRayNCAiEA75N686nOWimV5vmwhyr5adMUaWD5ovSHtoWYvqYAQVgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ%2BOFav0XW1whK7euircA5SxHTbH%2F7fj%2BT3gznZZ5npjjAlwD03XGLybWtSxfT6IJwwKzytogjBDLA4%2B70yQ3J85BZc0frI7i2ZMOj4vWZil%2BIrCz1i3mQNdbi05eL%2FOiz2FnpcX64TpZfYkkLZoBv5WcUWXsOM5SFdrz8GYEsUYi1ynTMTSGlgUfyycAz9rOaP2pfv3jT3OggLS07nQERyZXdFXsiVjSOjsLR%2BJYClCmevsvsBwTWYIih%2B%2B3BY%2BlOUcE8u8woGMLfNKvCagilkiSWUe5lrn6G3wQtIvSYdMHy1THq0%2B5VFky3Wmy0O%2BOKYlWWZ0%2B6B%2B4uVupPQDZHaNQ9GXRA84UFjndbHPxJFpxNk20SYxkq1qodaOPDdzzYa2siA3T7XR0hvUatBQRmnpJqVbezlgvPNNv55AQaqSL%2BI0i5cQDkHylMoZzZXVgOzJWlFNPS1hnNOYZfQrUQ9v6WtzVCOaVYL8hN5o6gHiB4tBPdRCIEaxNGmOYKIq46HoIt%2F%2B%2Fv0J0EZaL5PJbbLqm6dRhvDXOeY58E0etWUQ5WIPexp3MZKo70RxY34897B704bez%2FfLQNi8GTOTMv%2BKa8tx%2Fc9ncXZSkYoj4FrWztWNpoGqY1z8bB15Rubi2jLn0FYHyVWJPtlTMKGoyckGOqUBJJF6tQfC8RhZBigki%2B06V9m5vNF8ZyUPb%2FZrFpSI2E%2BFUHDn35%2BGJt3RGZSRocMRmbUlFVfRtEQ9T0cdgWbAYWByS9pAUfcPrjRArNXgR4luYMYzH96pNK9dh7AUokgiaTNYWttfUWlg0ZbPofZ%2FsQD34vp0TVwiSapfwP%2FfoiUCKXJU9r7j8K%2Fd%2FkWwqA%2Bs9zWkaB7vh8OuPLWehbuKg30A6qgB&X-Amz-Signature=dba67ffa25c029efb59a2475ad0a945292fa22fb59e8708a2fab1f88887f8a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


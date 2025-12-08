---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLP7FQS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiucQ1ZXbeMgKDMIPzWMlyCx9TEb8hZjG4%2FWHTe4gFtwIhAKFR8HiV1E8cmMUXb7FDa%2BDiWSvVcq4zSqAvgZ5bNDaHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQay8giKvPLyWWS%2Fgq3APLIdSkU5C42W6aur%2FPRfKIGEua1RTOoqAtgzQ9srefMoVzvZpPRizQtia%2FbHadIx1hin8kt8PxGWmlYtFdGtNNB2D9KqBKw3vkGZkFiEgDiHipdOVmMTUIR%2FsUSxwfpkozu%2B71tlmVyQh%2Bjw6Ir61e6sBtIc5QqfSOv6uehk39DAVGcylAmJ5OSIMQpiK7zPB6j4GRycv%2B0IZEcfm8gxofFjkY7m8owsxl6VHwrDjzMpY5%2F1ng5pV3Rx1FQNSSQFKu2upCLexsupSiBmXkzmeD0HdJgZpONyi%2Ba3ZcJPDj5GDh22TxqpXXCYyRmG6kwtgueHOrbm8ixcXxxMiL9q0kwHTjQFam%2BS6VPVLcjs2jMSTeWNQLuatPM1Wsc%2FSubFmkxp317%2BkCF99iDStRrHdjQq2I7xbf74ejKa5NJeEK3BtBBIgqznF%2Fasp8KZpOK6DC1nXAVcmp7oqg%2B4mM6GS7zv9Jj%2FuU7adI8LZRXUYZx3aACVQu2hUpr1mrg2mR5fKbORR%2BYHvMcfuD4j3iMQuFr7Bdgs2AHv6R8P%2FqRVguxv6L%2Bv8j7SBPme1fSum9H7LE7bHMHweOFPTnWvywAmlxY881rStGQDrY5iv4u%2FqwXjIlSWZo2uf%2BVFORqDDIj9vJBjqkAWxtMuAuHFg8yY16DzO0XzwyY4ifPVGbq%2Be3sJPuV20ilHRqMwcgy3C98VxAWiHI7H4pz0P7c%2FhJIgeg%2Bp%2BtkFizSYoSngNIwIavaVYWfKF%2BQn3MZjXqgZrSZ4C61BJxGZZ95RbNic265ABuLTh9Paa18sG2PxSFAit%2FYoDCWi0x4ZXoJOuRoz6esHXzzXAZY%2FqyttTsN1DY8ukXgmidYIc%2B6NoU&X-Amz-Signature=2dc3cabc7ae6145111370ad587f51be9e2a11fb853c0668a406edef221069426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLP7FQS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiucQ1ZXbeMgKDMIPzWMlyCx9TEb8hZjG4%2FWHTe4gFtwIhAKFR8HiV1E8cmMUXb7FDa%2BDiWSvVcq4zSqAvgZ5bNDaHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQay8giKvPLyWWS%2Fgq3APLIdSkU5C42W6aur%2FPRfKIGEua1RTOoqAtgzQ9srefMoVzvZpPRizQtia%2FbHadIx1hin8kt8PxGWmlYtFdGtNNB2D9KqBKw3vkGZkFiEgDiHipdOVmMTUIR%2FsUSxwfpkozu%2B71tlmVyQh%2Bjw6Ir61e6sBtIc5QqfSOv6uehk39DAVGcylAmJ5OSIMQpiK7zPB6j4GRycv%2B0IZEcfm8gxofFjkY7m8owsxl6VHwrDjzMpY5%2F1ng5pV3Rx1FQNSSQFKu2upCLexsupSiBmXkzmeD0HdJgZpONyi%2Ba3ZcJPDj5GDh22TxqpXXCYyRmG6kwtgueHOrbm8ixcXxxMiL9q0kwHTjQFam%2BS6VPVLcjs2jMSTeWNQLuatPM1Wsc%2FSubFmkxp317%2BkCF99iDStRrHdjQq2I7xbf74ejKa5NJeEK3BtBBIgqznF%2Fasp8KZpOK6DC1nXAVcmp7oqg%2B4mM6GS7zv9Jj%2FuU7adI8LZRXUYZx3aACVQu2hUpr1mrg2mR5fKbORR%2BYHvMcfuD4j3iMQuFr7Bdgs2AHv6R8P%2FqRVguxv6L%2Bv8j7SBPme1fSum9H7LE7bHMHweOFPTnWvywAmlxY881rStGQDrY5iv4u%2FqwXjIlSWZo2uf%2BVFORqDDIj9vJBjqkAWxtMuAuHFg8yY16DzO0XzwyY4ifPVGbq%2Be3sJPuV20ilHRqMwcgy3C98VxAWiHI7H4pz0P7c%2FhJIgeg%2Bp%2BtkFizSYoSngNIwIavaVYWfKF%2BQn3MZjXqgZrSZ4C61BJxGZZ95RbNic265ABuLTh9Paa18sG2PxSFAit%2FYoDCWi0x4ZXoJOuRoz6esHXzzXAZY%2FqyttTsN1DY8ukXgmidYIc%2B6NoU&X-Amz-Signature=cf402942ce96db881b12eeaa5819afc5f204d60eea358c9dda577b7f4153806f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


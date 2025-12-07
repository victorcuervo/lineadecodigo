---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJZB5RA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonn%2BzuP6er3wLes55ouGYjhjWEHPZuY%2BGYRPyASyYegIgHdMogrxj7EPjOlgcd00407QaG%2Ba8J0Qd3nZWPOsVGAgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3sgAHnr1KXGLc%2FRircA0BCsn4u%2FUKko%2FVRJye6kQ5lsx5wlmW7cdos0pKcYmZobBQFnsTisGXucQ3CpLeGiOlH%2Bih0%2Fa%2B9x%2FIT0fj9GiU%2FTbX5vv4BJEdBTZc7tFUHkObuNBHel29PiaD6aTBdMF483vJwiLwayoXu%2BdWmrzR8LNs7FZCyruPkWizITp6903j2hT2XO%2BxW8FPRavm8fUuei%2B%2FmkGnqDKNFwu%2FTDahxa84bTmTGci5WAh5rXO4luVoL13Kc2VxV3%2F42xyEKaJ8%2FMMP2jqyKaz781w%2B1ZhVtMfRmwadD%2BnnT5hplEJ9oV6HwIq2byYvnE2hVeGeX6KDAXmKtBEcTxsoWEVwk0Tafi4RBVrjYI42EFGFAmakGMV4aWlvyU%2B5Uecmj51H8%2BXFRlSSL%2BT3d5DhzaTb%2F4DK%2B38wqNal27UevBk6wN5ANA58dtQqOPLWOwX%2FUE7wGMW82J0uzAdBqorwzufCOZpolqP6ubZLcrhznpnfAndAzbmjiz5hZ8EzVlAEGdvWzaFO6VWgCuOYbJQanAoFuiDIRWLwvGX7Is8NMEibdG1FGb5xsFaWGUec5%2BP8VLm%2BiRVq2vA9ADMxQR0soJF9TI7Ma50XtbHjHR6XZOJK0iDCWwT6YSFiS%2BNge4NfNMISa1ckGOqUB1Un0S6We4YN6Gu%2BiBhtdBDFCDHNiXOuK3tvsw3ajnGdvB4SaSTWk%2FKsuvNX0%2BtGoO0fCxo5Bn70rQOTjGVc7Hfi9F37t4SB0aMtYGgcWDviGrADtG7o18AnFpU9xnAQwvuGD7LNVs4z%2FOjqZY5CuG5Py%2F8f0g3l6ndwWUS8bSdqhm1HVBEJuW58XjQQCBxEx9%2Fiz0ZsOhB8I2KE2Hg%2FIP%2FtB3%2F59&X-Amz-Signature=dd48d250561d85731b9ea54ae3b21f28db86affb8d6431f98afe6bda99255c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJZB5RA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonn%2BzuP6er3wLes55ouGYjhjWEHPZuY%2BGYRPyASyYegIgHdMogrxj7EPjOlgcd00407QaG%2Ba8J0Qd3nZWPOsVGAgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3sgAHnr1KXGLc%2FRircA0BCsn4u%2FUKko%2FVRJye6kQ5lsx5wlmW7cdos0pKcYmZobBQFnsTisGXucQ3CpLeGiOlH%2Bih0%2Fa%2B9x%2FIT0fj9GiU%2FTbX5vv4BJEdBTZc7tFUHkObuNBHel29PiaD6aTBdMF483vJwiLwayoXu%2BdWmrzR8LNs7FZCyruPkWizITp6903j2hT2XO%2BxW8FPRavm8fUuei%2B%2FmkGnqDKNFwu%2FTDahxa84bTmTGci5WAh5rXO4luVoL13Kc2VxV3%2F42xyEKaJ8%2FMMP2jqyKaz781w%2B1ZhVtMfRmwadD%2BnnT5hplEJ9oV6HwIq2byYvnE2hVeGeX6KDAXmKtBEcTxsoWEVwk0Tafi4RBVrjYI42EFGFAmakGMV4aWlvyU%2B5Uecmj51H8%2BXFRlSSL%2BT3d5DhzaTb%2F4DK%2B38wqNal27UevBk6wN5ANA58dtQqOPLWOwX%2FUE7wGMW82J0uzAdBqorwzufCOZpolqP6ubZLcrhznpnfAndAzbmjiz5hZ8EzVlAEGdvWzaFO6VWgCuOYbJQanAoFuiDIRWLwvGX7Is8NMEibdG1FGb5xsFaWGUec5%2BP8VLm%2BiRVq2vA9ADMxQR0soJF9TI7Ma50XtbHjHR6XZOJK0iDCWwT6YSFiS%2BNge4NfNMISa1ckGOqUB1Un0S6We4YN6Gu%2BiBhtdBDFCDHNiXOuK3tvsw3ajnGdvB4SaSTWk%2FKsuvNX0%2BtGoO0fCxo5Bn70rQOTjGVc7Hfi9F37t4SB0aMtYGgcWDviGrADtG7o18AnFpU9xnAQwvuGD7LNVs4z%2FOjqZY5CuG5Py%2F8f0g3l6ndwWUS8bSdqhm1HVBEJuW58XjQQCBxEx9%2Fiz0ZsOhB8I2KE2Hg%2FIP%2FtB3%2F59&X-Amz-Signature=98f7c5dcea34ab4b5f31e1a6bdac0613e50800da48d8892377f552186bfe5268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72HT6XM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjltWLun%2BabeBgSLI3Nz6CT1ONl6GBnXtewV58AQLVUAIhAL8il8zVjcmfLR%2Bs1HzBdigSTRsVOkz1SzGiKBjThHZvKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCl4C51Zuw2j3pGssq3AOSz6DxO5ZV8UEZEGSIp61trGzkfHnvaj30RepG7N6ilb1ZSsGPWo2qjT5x3%2F9lhGK2plE26dRGlKkkQPC%2F6IFC1LZes5JdGMT%2BlVLZFY9NiO%2FKAO7%2BOt9DF0NaaGteazmIzL81qIUyd3hwpipVDKcyWr5BNX3TMpuF1z1J9Y3LY4QhEINPqOfC88xrEY95d2%2BsgaEdT3N%2BAkoFBrNNlm25SizotwM0iGQ3P60AMtmNTvEgfpDeqej%2FWCOsgOM44QGy421p359rDu2C4z3BTiAjLaapo8dI2UVv7lH53dTomVT8mML%2FGRlp22q5UKGOiYGBkQsYAnR%2B3kjlD%2BkCZOnzfoTHFPDmehd5fCSxofFEKvw3yKIOvUSVm36XENcPqCgtPzu8kFRXjy63%2F15BjuwuRjL50RL0r4e1UEkptDDyp6NXq4HMe1JRWwIe1rUbXjKR1y%2BHsfby0gAA9uOIqK%2Fjd4fXpxwJd%2ByRnVF%2BypqHA2E5HHibtKuu76R0Lndz7t7lqGZNQqvE8c%2BwbCk5K1UuZp95ZhHDdi8jU5kUo6myych3ImJ%2FFrPFNm6bFoPiz6RH4rsxGFnk1SKAVNPBP0i1oZxUEEGfbmUlw5YqPRiKzeW0xe35AJiEQedCFzC%2B4cvJBjqkAd1HzkfNck%2FPVp0%2Fqe9mjc8t3DFneXPyBk2XuCC%2B5kMFEyfrWU32s96hHyW5yJCBh6LMp5IV0z%2F8L0uVDBJoAea1QM4nUwo5ZQC8RpPFLZrHV2dSsW5C4eZIjAm2bM1f5YKmXpQdW0d0s1vBDIQdK21b8O4esEY%2BBDVNN1%2B5dyRGGY8BGaB8bUdRvyThGeZTKLVSonUIQEQXS4mnz8YOd9GLTbMs&X-Amz-Signature=85b06eaa3e03e02285c3b8dc955259deec806dee71ced175f2e32c442db2ef3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72HT6XM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjltWLun%2BabeBgSLI3Nz6CT1ONl6GBnXtewV58AQLVUAIhAL8il8zVjcmfLR%2Bs1HzBdigSTRsVOkz1SzGiKBjThHZvKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCl4C51Zuw2j3pGssq3AOSz6DxO5ZV8UEZEGSIp61trGzkfHnvaj30RepG7N6ilb1ZSsGPWo2qjT5x3%2F9lhGK2plE26dRGlKkkQPC%2F6IFC1LZes5JdGMT%2BlVLZFY9NiO%2FKAO7%2BOt9DF0NaaGteazmIzL81qIUyd3hwpipVDKcyWr5BNX3TMpuF1z1J9Y3LY4QhEINPqOfC88xrEY95d2%2BsgaEdT3N%2BAkoFBrNNlm25SizotwM0iGQ3P60AMtmNTvEgfpDeqej%2FWCOsgOM44QGy421p359rDu2C4z3BTiAjLaapo8dI2UVv7lH53dTomVT8mML%2FGRlp22q5UKGOiYGBkQsYAnR%2B3kjlD%2BkCZOnzfoTHFPDmehd5fCSxofFEKvw3yKIOvUSVm36XENcPqCgtPzu8kFRXjy63%2F15BjuwuRjL50RL0r4e1UEkptDDyp6NXq4HMe1JRWwIe1rUbXjKR1y%2BHsfby0gAA9uOIqK%2Fjd4fXpxwJd%2ByRnVF%2BypqHA2E5HHibtKuu76R0Lndz7t7lqGZNQqvE8c%2BwbCk5K1UuZp95ZhHDdi8jU5kUo6myych3ImJ%2FFrPFNm6bFoPiz6RH4rsxGFnk1SKAVNPBP0i1oZxUEEGfbmUlw5YqPRiKzeW0xe35AJiEQedCFzC%2B4cvJBjqkAd1HzkfNck%2FPVp0%2Fqe9mjc8t3DFneXPyBk2XuCC%2B5kMFEyfrWU32s96hHyW5yJCBh6LMp5IV0z%2F8L0uVDBJoAea1QM4nUwo5ZQC8RpPFLZrHV2dSsW5C4eZIjAm2bM1f5YKmXpQdW0d0s1vBDIQdK21b8O4esEY%2BBDVNN1%2B5dyRGGY8BGaB8bUdRvyThGeZTKLVSonUIQEQXS4mnz8YOd9GLTbMs&X-Amz-Signature=cca6d6917874c46f311bbcc7c350f503fbf4037531ace750c02c1637a63caf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


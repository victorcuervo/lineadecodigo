---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS7OH6ZQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH%2Fx2%2Ff6Wg5jSPzS36taI5qRFn%2Btl%2FPpaKBwpgCelFxAiA8MdUBRYYtwuOUbrGR3BWYelRWfm5JpAfvLnVIP8rOByr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2dtjODdSZK69dhIwKtwD2bwXwJbRJiSQPD9B66MTCt%2Fd3MLamxCuDVkqCvKGNjig4VHT1j%2FsPnLvFqbKIyBOClEfwtp%2BkmTcSeP6CftoM27TMD2AKj1uDIW15hV1IgWPIbFrD3UDmofXj2bpYKercF8vrRkR%2FE%2FTwlC25NIRLCvXVfiT5Vk6Obch9mnoi2sIVDCskHnMm5Hat%2FaBySIbjPjTJy1bpRJE%2F4XQtq6MTt8VvIVbRIG%2BDMYoJWr651wrQweofpTciCoZzYa2UyK0p35ViRC3XKZ22f0tDr%2FC9fuyyaV%2B8g5N3wJNsGkO9vuGDyVY1op%2BVJCLYJTz032CR6Lj3T33wjbpgeaSDtd84iSCoRvV56sbOC7%2BDBQFpWN8txV68NerVfXUw13IDDW8n0u99Lfb6vt8HG2aNk3f2wo6mHdr%2FNci0iYDAHDAieodCNFqBv7Y6iQ20r2euDRvhZeI4qKrOBJBw%2B010hdtD%2F1MnWBBwh6EoFr%2BGefvkKgNsysmrLR2XJ0g62rKjaYDhLFmHH19lK56DVaP%2BEQbNmDp%2BRzj0hml%2BPqIksc7YOlkk5E7ecI%2ByN2kJyo3oVCRqVVylyhPEo4w%2BWSxNr4uTfnJtQyl8jjz00nkjbOi1g1EFSDKxoPBR183sAsw5sPRyQY6pgFd7211i2FKn5OowQoN5I08j1F7qFsNQuGBz8ApMnxqG0luGMNCTjVIxHJZNnu8pgAlwiXTln0L%2B%2Box%2Ftm5%2FQYQDCLQo9u85G6tES2y%2FzSGh7qPs89sbQ3B2rnmftwKUj6nwVereKtoDXM%2BD6KN2isUDt1XdK%2FpJdNeBCZlqC%2FvOcTihbGga%2FoAmr84KH1Eum6KGORdkfRoDwt%2FT9fFCzi5u%2F5IWj%2Fw&X-Amz-Signature=c325343d20837020ce5b0a673d9da0da6b784a1aedafa4f99021d48f6e45e585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS7OH6ZQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH%2Fx2%2Ff6Wg5jSPzS36taI5qRFn%2Btl%2FPpaKBwpgCelFxAiA8MdUBRYYtwuOUbrGR3BWYelRWfm5JpAfvLnVIP8rOByr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2dtjODdSZK69dhIwKtwD2bwXwJbRJiSQPD9B66MTCt%2Fd3MLamxCuDVkqCvKGNjig4VHT1j%2FsPnLvFqbKIyBOClEfwtp%2BkmTcSeP6CftoM27TMD2AKj1uDIW15hV1IgWPIbFrD3UDmofXj2bpYKercF8vrRkR%2FE%2FTwlC25NIRLCvXVfiT5Vk6Obch9mnoi2sIVDCskHnMm5Hat%2FaBySIbjPjTJy1bpRJE%2F4XQtq6MTt8VvIVbRIG%2BDMYoJWr651wrQweofpTciCoZzYa2UyK0p35ViRC3XKZ22f0tDr%2FC9fuyyaV%2B8g5N3wJNsGkO9vuGDyVY1op%2BVJCLYJTz032CR6Lj3T33wjbpgeaSDtd84iSCoRvV56sbOC7%2BDBQFpWN8txV68NerVfXUw13IDDW8n0u99Lfb6vt8HG2aNk3f2wo6mHdr%2FNci0iYDAHDAieodCNFqBv7Y6iQ20r2euDRvhZeI4qKrOBJBw%2B010hdtD%2F1MnWBBwh6EoFr%2BGefvkKgNsysmrLR2XJ0g62rKjaYDhLFmHH19lK56DVaP%2BEQbNmDp%2BRzj0hml%2BPqIksc7YOlkk5E7ecI%2ByN2kJyo3oVCRqVVylyhPEo4w%2BWSxNr4uTfnJtQyl8jjz00nkjbOi1g1EFSDKxoPBR183sAsw5sPRyQY6pgFd7211i2FKn5OowQoN5I08j1F7qFsNQuGBz8ApMnxqG0luGMNCTjVIxHJZNnu8pgAlwiXTln0L%2B%2Box%2Ftm5%2FQYQDCLQo9u85G6tES2y%2FzSGh7qPs89sbQ3B2rnmftwKUj6nwVereKtoDXM%2BD6KN2isUDt1XdK%2FpJdNeBCZlqC%2FvOcTihbGga%2FoAmr84KH1Eum6KGORdkfRoDwt%2FT9fFCzi5u%2F5IWj%2Fw&X-Amz-Signature=1ed5e05379e374d8be93cb295c74b5d386268a1a6b3fd924224afe1021a26b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


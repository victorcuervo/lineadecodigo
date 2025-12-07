---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X746SJR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEGu0CFa%2B0gFFMbnx7zcxbMdcaV7ZBDDo14qh5%2FCD%2BYAiEAkEUVcOE5Ya%2ByR2GOMTN5xLd1lLWVC3wYN%2FJwcvUZKykqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwnpx80Zdbrwk2RoircA8f3DJSNy6OiEhxblpLLsLdZ5qmyaY9pPsdwFhoG8MUeuvs0swJFwP3Sf6EmeBXs9veoVvbFSovFISXAxlNHXkCwSqJsPH3VXhuN1KtPXdSBjSZtvTRq%2F%2FZhswbkZ2aMm0Q8qAnDvHpIyF815nxS6Eq%2F36Fxxh0p4c0n3hCt8sTGGfz%2BNHsu1%2FTcNVV0m2mLFWo4wabAiD5N%2BqSK4vzOi9BFRGqJ5rMizDA93LyY7u7OftzAVQh2n%2F53H0Wyk5tsx1V53IGc%2FK31D5z5qPvM11hmHPMAnbR4yvd%2BSBHCo%2FHpZm%2F1eNdyY5VresXgz7THUP4UBYAAP8bfv1rR6nMu2BTuizEh%2FjcZMHALSQy%2FPoCmx6kUaMXDmy8EwfIMNR9dbRu9Y4dBYqitIdrQ4PFMdZ4ucOWuumWjTEFIGMh4QkudGx06mPINxKN31jaKpwc4sFG2vquxM3IBL%2Fqe3UPc6M2SmNYnd3Jm6Onkihfm8K6eWgpegK8mvpiUOMXzPfCEHTbh6j1ka4LJrQifGkovixblddBukPEpoXTU2Ma1%2F04p8xK2PNIaXGO%2B43lWn2k1coGuf08f%2FUsVeKLMHqJWL8u7Z4U0JoZ1yr%2Bn0J3h1yLl%2F0XHkjlk9dInKUDoMMqa1ckGOqUBujf38FvVHPvIdWet0SPs6UuD6liesgFQ%2BIIm1%2FShl5x9oRDsbhWvwk9hKqu258Gn8GpAKslZJD5HGjovD7mgIKtMFwVvT5t8e5ZeCRLcgX%2Bj7%2F%2BYn0ENIaarztj%2FSxJSGqcee3z7tr2OnPWzZI0sYomNiFiQrfJtcNNVg6uTunPXqfgIHecN%2FIDOZjqMwH1lejFYbm2LGrg7tW7Siq%2FlkBKqaies&X-Amz-Signature=c5886927d74295614af34df814ddc1be88bd7533b06e4ecf1f309d5e55b47a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X746SJR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEGu0CFa%2B0gFFMbnx7zcxbMdcaV7ZBDDo14qh5%2FCD%2BYAiEAkEUVcOE5Ya%2ByR2GOMTN5xLd1lLWVC3wYN%2FJwcvUZKykqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwnpx80Zdbrwk2RoircA8f3DJSNy6OiEhxblpLLsLdZ5qmyaY9pPsdwFhoG8MUeuvs0swJFwP3Sf6EmeBXs9veoVvbFSovFISXAxlNHXkCwSqJsPH3VXhuN1KtPXdSBjSZtvTRq%2F%2FZhswbkZ2aMm0Q8qAnDvHpIyF815nxS6Eq%2F36Fxxh0p4c0n3hCt8sTGGfz%2BNHsu1%2FTcNVV0m2mLFWo4wabAiD5N%2BqSK4vzOi9BFRGqJ5rMizDA93LyY7u7OftzAVQh2n%2F53H0Wyk5tsx1V53IGc%2FK31D5z5qPvM11hmHPMAnbR4yvd%2BSBHCo%2FHpZm%2F1eNdyY5VresXgz7THUP4UBYAAP8bfv1rR6nMu2BTuizEh%2FjcZMHALSQy%2FPoCmx6kUaMXDmy8EwfIMNR9dbRu9Y4dBYqitIdrQ4PFMdZ4ucOWuumWjTEFIGMh4QkudGx06mPINxKN31jaKpwc4sFG2vquxM3IBL%2Fqe3UPc6M2SmNYnd3Jm6Onkihfm8K6eWgpegK8mvpiUOMXzPfCEHTbh6j1ka4LJrQifGkovixblddBukPEpoXTU2Ma1%2F04p8xK2PNIaXGO%2B43lWn2k1coGuf08f%2FUsVeKLMHqJWL8u7Z4U0JoZ1yr%2Bn0J3h1yLl%2F0XHkjlk9dInKUDoMMqa1ckGOqUBujf38FvVHPvIdWet0SPs6UuD6liesgFQ%2BIIm1%2FShl5x9oRDsbhWvwk9hKqu258Gn8GpAKslZJD5HGjovD7mgIKtMFwVvT5t8e5ZeCRLcgX%2Bj7%2F%2BYn0ENIaarztj%2FSxJSGqcee3z7tr2OnPWzZI0sYomNiFiQrfJtcNNVg6uTunPXqfgIHecN%2FIDOZjqMwH1lejFYbm2LGrg7tW7Siq%2FlkBKqaies&X-Amz-Signature=8357a298c1205bd494171aadd054f7a7632cd8176c0f0aee566989a756b0a303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


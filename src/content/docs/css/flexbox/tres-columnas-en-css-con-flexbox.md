---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP45CJ4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BGakDmi4H7mkALevTkUXR8wbS2%2Bwhn45BaCyVFE7MwAiBAj5gLGH%2FBP94643pYkhKmNf4hbK0decSXdA59FXBhJir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvKVy3HjvNdFlpiY1KtwDBM9Z%2Fg1I7VwgbTQbFFAH8LLbyxyRbhdE3OFKvZqVV1%2B5kk711bASmFzpRb3iortFKCu4XQIvOUFuhBIrUPU3%2BzgvnQm5yZk6otK0BpdPLif8F7J23stClxdptW23J0doWWkHRddS8VL4kVoLboCu6RWW8suktfWmfz4%2F%2BKYOPbFLBMHlZeF0MluXup2Q%2FEiUeMkW%2B%2BnvYI8yIW8H9Vr1sMfpDpVCwL%2FN6X0OZivhmjUglGjDqvzNnEHlsPHSjX3oVeiHsM%2BhppRtVM1QglB5X1l3qhb4%2FYwl5Tw6TGUFTv4ASv9p0QRWsoQwyJYbUexJaOk1MOuBxjeC2boCBEs300uegeAgBIE7%2Bv6NfKMMEFa2IhpH4EcL9Iz0PSjPc1fL56TcKydtkOTVp0gtl2pnoxbc2L3%2BNgzdx6Sp1QvV8WtwCxUGFD%2Fv5b8aABaVVlC%2BTUIHx2M5VxCvvMI79GQDhOGo0KFCJr%2B%2Bg16FirmHNWme%2BqPm6LVYulTY4xPIVEY%2FWPDqa%2Ft7bDs2tAAMMjlBJFAawkQ94PrA1rzIgHuewhdG%2BQt4EhfninFlAY11BJUW7ZEDQQOT6QIOxOgSTsvS%2ByWtSjZK4CEe30hUizHhktbUCZUJ55x4vyA0C3Mw7MPOyQY6pgF5SO%2FQoVfIvIiPNywQ04%2BDE%2B2aV05XwfrBt05ejTcN0q2rOb8P5f97fnj3%2ByqntXZwBE7HHX9HoGg01K7Qdf%2BiYbbfmTcciJvIeJPpnRAIIx4TEICUp%2BNFhJULuIwN4V2zx8qVl%2BqZFes7HhS5LDlG438PQVKHv4N0Rv8SkfYOg9PBuSNmZhwBPtuEKGPurygd2KKOM8laSNydYpBxtyWFhezPzzvn&X-Amz-Signature=81cd70c4988762e835ca4ea07bb91af8042a345e793a179e098b797297d6734e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP45CJ4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BGakDmi4H7mkALevTkUXR8wbS2%2Bwhn45BaCyVFE7MwAiBAj5gLGH%2FBP94643pYkhKmNf4hbK0decSXdA59FXBhJir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvKVy3HjvNdFlpiY1KtwDBM9Z%2Fg1I7VwgbTQbFFAH8LLbyxyRbhdE3OFKvZqVV1%2B5kk711bASmFzpRb3iortFKCu4XQIvOUFuhBIrUPU3%2BzgvnQm5yZk6otK0BpdPLif8F7J23stClxdptW23J0doWWkHRddS8VL4kVoLboCu6RWW8suktfWmfz4%2F%2BKYOPbFLBMHlZeF0MluXup2Q%2FEiUeMkW%2B%2BnvYI8yIW8H9Vr1sMfpDpVCwL%2FN6X0OZivhmjUglGjDqvzNnEHlsPHSjX3oVeiHsM%2BhppRtVM1QglB5X1l3qhb4%2FYwl5Tw6TGUFTv4ASv9p0QRWsoQwyJYbUexJaOk1MOuBxjeC2boCBEs300uegeAgBIE7%2Bv6NfKMMEFa2IhpH4EcL9Iz0PSjPc1fL56TcKydtkOTVp0gtl2pnoxbc2L3%2BNgzdx6Sp1QvV8WtwCxUGFD%2Fv5b8aABaVVlC%2BTUIHx2M5VxCvvMI79GQDhOGo0KFCJr%2B%2Bg16FirmHNWme%2BqPm6LVYulTY4xPIVEY%2FWPDqa%2Ft7bDs2tAAMMjlBJFAawkQ94PrA1rzIgHuewhdG%2BQt4EhfninFlAY11BJUW7ZEDQQOT6QIOxOgSTsvS%2ByWtSjZK4CEe30hUizHhktbUCZUJ55x4vyA0C3Mw7MPOyQY6pgF5SO%2FQoVfIvIiPNywQ04%2BDE%2B2aV05XwfrBt05ejTcN0q2rOb8P5f97fnj3%2ByqntXZwBE7HHX9HoGg01K7Qdf%2BiYbbfmTcciJvIeJPpnRAIIx4TEICUp%2BNFhJULuIwN4V2zx8qVl%2BqZFes7HhS5LDlG438PQVKHv4N0Rv8SkfYOg9PBuSNmZhwBPtuEKGPurygd2KKOM8laSNydYpBxtyWFhezPzzvn&X-Amz-Signature=72b80ef4a000c081c6a20f5638eab2fc461b4358118cf0c2453a9bc7cd9ee2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAWHGPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpq93dnHWhyyN01J%2FRuB%2BJAd%2Fft3S%2Bv2R90X40xZs09wIhAO7kFJjUYaxboQ0tbn4RwkWV15%2Bj2fxGagaQ7yi6S10IKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbDBqqmtgLMu7%2B5Xsq3ANflYuWPp0OIFh4cczJANQ3kmCOgZj4oxypXIxoSq5f1chFQ6e8FaiUZ999WryjnNwE6IkrwuGJ3ZJ3hgsYQfXETRGXZEGOvrfb79DNcYGnjvCxfZQZyB9O3tV1KrlpZ7DgQGhCH32n8ipj6kHGNdenxLCig7P2BlqtB9aF1l1hs%2FFX7rP8MbToPaxw9lY2wPrNw9Y6SjQlw4PMHw6xl%2F23p5bkt8mbCuGhEQDJeaj9Q2HLA0b5cmX6YoErrvWMmOlMEmLjpd5vvlvs99Kdtld4sXdqhbbPcUlu9yIFhX4hGtPIYovEFPjHt3R0HQYWzBd3%2BKNBOCHCOACFrLg1l4ClIrCEVfGaAWTOcfsURDYlnlUGYTNeuqBjKV6LjVK%2Bgdfz6AUoKSU%2Bd1%2BJVF9mDKkTt93XBTUxlcJM66ToU%2Ft298VP6llST4LdHENQ%2B4izaz4h8GuRAQwF8CmBaNdX2B3Emblw3bplhibjLStnSbGsYY2d%2BUyWkdk5I4%2Bfn26xluPxIz%2FH0wgkQvWEGFUvounP4Ra811bcFCogJPUYwsKb71Pw9Gt2NdujwvFMx0ldFFLktZVDULcMPHBqQ3pGAf9PA88XNIV7%2BDy3kPCLYeGgnTPHwTPJnPo0I41HTTC75dvJBjqkAVoPnWrm%2Bfr2I2ce%2BtgaZtEEQsiuZfdUmBdGU0lYZgyVfswxGK5CwMCXChANGWfynip%2FnJr7TEM6MlIFgmvhxly%2BM48E4%2BfJzgC8k1RK6sjlqDRrcvqb80riQLjTQIo%2FU3o6gLk9mfGOAun6O%2F8JIdYWUY5JUWyWdgjwPz%2FgDy8iR%2BPb835JJE%2B6ypQbeXi2RzZs3EHiIGOvHKtr%2Fr9vrdLeoLxn&X-Amz-Signature=dbb2f2cd37c3fabce6fded6a01cef20947cb0b72a1fc3181cade779fbfcfcb2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAWHGPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpq93dnHWhyyN01J%2FRuB%2BJAd%2Fft3S%2Bv2R90X40xZs09wIhAO7kFJjUYaxboQ0tbn4RwkWV15%2Bj2fxGagaQ7yi6S10IKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbDBqqmtgLMu7%2B5Xsq3ANflYuWPp0OIFh4cczJANQ3kmCOgZj4oxypXIxoSq5f1chFQ6e8FaiUZ999WryjnNwE6IkrwuGJ3ZJ3hgsYQfXETRGXZEGOvrfb79DNcYGnjvCxfZQZyB9O3tV1KrlpZ7DgQGhCH32n8ipj6kHGNdenxLCig7P2BlqtB9aF1l1hs%2FFX7rP8MbToPaxw9lY2wPrNw9Y6SjQlw4PMHw6xl%2F23p5bkt8mbCuGhEQDJeaj9Q2HLA0b5cmX6YoErrvWMmOlMEmLjpd5vvlvs99Kdtld4sXdqhbbPcUlu9yIFhX4hGtPIYovEFPjHt3R0HQYWzBd3%2BKNBOCHCOACFrLg1l4ClIrCEVfGaAWTOcfsURDYlnlUGYTNeuqBjKV6LjVK%2Bgdfz6AUoKSU%2Bd1%2BJVF9mDKkTt93XBTUxlcJM66ToU%2Ft298VP6llST4LdHENQ%2B4izaz4h8GuRAQwF8CmBaNdX2B3Emblw3bplhibjLStnSbGsYY2d%2BUyWkdk5I4%2Bfn26xluPxIz%2FH0wgkQvWEGFUvounP4Ra811bcFCogJPUYwsKb71Pw9Gt2NdujwvFMx0ldFFLktZVDULcMPHBqQ3pGAf9PA88XNIV7%2BDy3kPCLYeGgnTPHwTPJnPo0I41HTTC75dvJBjqkAVoPnWrm%2Bfr2I2ce%2BtgaZtEEQsiuZfdUmBdGU0lYZgyVfswxGK5CwMCXChANGWfynip%2FnJr7TEM6MlIFgmvhxly%2BM48E4%2BfJzgC8k1RK6sjlqDRrcvqb80riQLjTQIo%2FU3o6gLk9mfGOAun6O%2F8JIdYWUY5JUWyWdgjwPz%2FgDy8iR%2BPb835JJE%2B6ypQbeXi2RzZs3EHiIGOvHKtr%2Fr9vrdLeoLxn&X-Amz-Signature=f9ddfa39d86d7680d6cf08e9dbea62ec259b6f3b0d05b7f45e5edf187fde3736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


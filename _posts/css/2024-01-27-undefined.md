---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4VLWXI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD8Yayzh9FGsjm57cV%2F4NyTCmBt4B%2B0VujaVGOCi7SE7AIhAJvkPvvHdPAVnuIOuB3B9F%2BPKr1Ed7Eg8FH2WEsn%2FMRMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzJ6dsObbafJASzefUq3AM5iWFZ3aQMUf4nX0Amc3CAORixMvpl8is8rqETyM4Bti6CsZqSbX1dm5E5%2FdM00WVCHizNKAlMlU%2FTp099m0t0FEwflzIPjbhJrb17OTi%2BsT931uHbLVcR0hrqFpcgtc%2FGmHxmyoYRelHf2jlzBghwQ%2FE%2BntgCTWGhiP7h18dwq3QCVPdQJq%2BbRjCScDa1dMMTzUwB0REt1KvpJAz8BUzS9AOs2pL1S2I42gGnxFX%2B77xibZv50t%2FJnpTD%2B0fkjLkthZrU5pzkn8RdHhSnOmy1aZTUK4DONYSmeAOlJ0Gx3cne8Y%2FOObjmeCbo%2BfSJCkAxuGybEnjZ6zlYZU26s6KfAh6fQDBr5gADnH%2F4E%2FUjSxZ8PKlLKuNCLkWQh3kfxGWm1V9HwoxY5%2F6uGVOcJfT1pOCWjIY5ngPVoJoJzVaoPae58cV4o0HqEnjrdJhFHltagW4WUUghXieyw4q34S9J7S%2BsuQVg2zBO4Nowfk2H%2FLw4mawWzJiakRIxSffHPTdGThgEjHPLwS%2BdR2yMK5L0eCx0cFs7o24gfU5z9IX2xSE4bFBcCf%2FoA%2BxDxhHg4SAVk%2BKqlgqaZ26O5FvuCmQmyPEnrxha4%2Bo%2BNx1v10xBLAlVU2I7ruc4y6ekJjDH1L%2FJBjqkATC%2B0WCs%2BhBSoYOOfEU06lYLfw5ad5VC7cUyw6jgfhCkQfr3t2ax2qEDMeFmTGeb9ay9rnGVmdDxqasYGz4aI2yJ1hbsTxJxVpZuAY19eAIjvCCyBLQXIYtl4Uh%2FhdSgjr14EVHzL8HOOhZycY8Hk17xjhMnZeDUjfR4a0mtYA8zVr3S9p1jSGrkfhbMqJUU47mAgP8an9Onw%2FjF1aTtC1tDRYF9&X-Amz-Signature=2c54b75f909ca19c029874f3c53b6c1f581c039fd0b8b160e815946aac3d7524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4VLWXI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD8Yayzh9FGsjm57cV%2F4NyTCmBt4B%2B0VujaVGOCi7SE7AIhAJvkPvvHdPAVnuIOuB3B9F%2BPKr1Ed7Eg8FH2WEsn%2FMRMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzJ6dsObbafJASzefUq3AM5iWFZ3aQMUf4nX0Amc3CAORixMvpl8is8rqETyM4Bti6CsZqSbX1dm5E5%2FdM00WVCHizNKAlMlU%2FTp099m0t0FEwflzIPjbhJrb17OTi%2BsT931uHbLVcR0hrqFpcgtc%2FGmHxmyoYRelHf2jlzBghwQ%2FE%2BntgCTWGhiP7h18dwq3QCVPdQJq%2BbRjCScDa1dMMTzUwB0REt1KvpJAz8BUzS9AOs2pL1S2I42gGnxFX%2B77xibZv50t%2FJnpTD%2B0fkjLkthZrU5pzkn8RdHhSnOmy1aZTUK4DONYSmeAOlJ0Gx3cne8Y%2FOObjmeCbo%2BfSJCkAxuGybEnjZ6zlYZU26s6KfAh6fQDBr5gADnH%2F4E%2FUjSxZ8PKlLKuNCLkWQh3kfxGWm1V9HwoxY5%2F6uGVOcJfT1pOCWjIY5ngPVoJoJzVaoPae58cV4o0HqEnjrdJhFHltagW4WUUghXieyw4q34S9J7S%2BsuQVg2zBO4Nowfk2H%2FLw4mawWzJiakRIxSffHPTdGThgEjHPLwS%2BdR2yMK5L0eCx0cFs7o24gfU5z9IX2xSE4bFBcCf%2FoA%2BxDxhHg4SAVk%2BKqlgqaZ26O5FvuCmQmyPEnrxha4%2Bo%2BNx1v10xBLAlVU2I7ruc4y6ekJjDH1L%2FJBjqkATC%2B0WCs%2BhBSoYOOfEU06lYLfw5ad5VC7cUyw6jgfhCkQfr3t2ax2qEDMeFmTGeb9ay9rnGVmdDxqasYGz4aI2yJ1hbsTxJxVpZuAY19eAIjvCCyBLQXIYtl4Uh%2FhdSgjr14EVHzL8HOOhZycY8Hk17xjhMnZeDUjfR4a0mtYA8zVr3S9p1jSGrkfhbMqJUU47mAgP8an9Onw%2FjF1aTtC1tDRYF9&X-Amz-Signature=2291cbc7e36e1ab8b556d2f8fd36450787c5ce5370b06c9e7e63ac12756eab2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


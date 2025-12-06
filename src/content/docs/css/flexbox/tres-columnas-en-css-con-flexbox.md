---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSH2UD63%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbIQTVFTCkTP5L%2FEr40HpQB9jVltx9h7tGaUMSuic2BwIhAMxgP4RFG2E9cWIwd2cvoBP2UFx9O5qpDrA8k7dQJu3PKv8DCGgQABoMNjM3NDIzMTgzODA1IgzFKZaJhmNUMR2nVqUq3ANlsDjgMoaCs1DWw3h9zlGCtHxHgpl8elDtU3q33v0vUR3g9ZXqZBIr1oT7vHg1trLUMWRoYOSmlantdjh9rDl0iQ7obUAnrKeKHFDDtVw6mwhs9OFLkLgS5mcnnLTLT7KIRM%2FJzR%2FewNksqNEeLTclJt7bjzsdtom5bI4qvV1eYJff8DBUki3Xntg5WJ996xEgdLNifBQwuSKwqZ4BB7H2x1nSlSkXZ5Xl0YSmdVejcS1c8dEyMhILVab55ryMDFe0us0BiUTMfMp5WIUACTBx6bOhzrpxOhNx1yu8jnX1Et97pYhyWcEsMbbQupCZD7R%2FPXKmW3pJPSSDjuf2WrhJP0HebfpnQ7bWQvucaM9kQuHFLZoP%2BtRo22oUTvEW2bDRmqoz2Wfo%2Be3uoaHm5rhmg7tSewx%2BbxOPwVfY5ImnAQH7x9eHN6rC%2FyOCI7bdKUt0VFWTJd2bixjBYJmIr0T%2BzvvY7QL1ABzcfKj1brKGP9YTEXnAxPnerLDQJgzdLAdmfPcTMyoWobV8X3hTAL%2BNnfrKRCsrV0LnPXdsbNDSGTdBEbNB0d5viBVExPtapzDuRYJqyPKNOLzb0bynoOWya%2B%2BM4pJg%2BTYhM7S0bP2sqqQ31Gop3o%2FsUB9PbTCHxs3JBjqkAYmf0Kl3Cd8nYgsGN69xtXgH46JJObWRYiQAjiUMVbfep3zVJHPD5T%2FurRDypO%2FlnLMM5Nyr0H0zt1tlHi4T2jEBfa8QQFvJ%2FVxJvGpzdmsYu7ng8c%2BYGQ420NLKh8rScTz1WSHifYkqLNsk8p2X0ooQ1uCpsqJ4%2FZjSHT%2BDnqLtWhLEG6NaHZ%2Fb9uQhtLH%2FYGS7ayJ1DK3prYuCMm0ah1niJvXQ&X-Amz-Signature=011fd42836bd4c6644d3dc9365716e19cffaf1cd6d5bbe5765671d9ce3c4e4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSH2UD63%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbIQTVFTCkTP5L%2FEr40HpQB9jVltx9h7tGaUMSuic2BwIhAMxgP4RFG2E9cWIwd2cvoBP2UFx9O5qpDrA8k7dQJu3PKv8DCGgQABoMNjM3NDIzMTgzODA1IgzFKZaJhmNUMR2nVqUq3ANlsDjgMoaCs1DWw3h9zlGCtHxHgpl8elDtU3q33v0vUR3g9ZXqZBIr1oT7vHg1trLUMWRoYOSmlantdjh9rDl0iQ7obUAnrKeKHFDDtVw6mwhs9OFLkLgS5mcnnLTLT7KIRM%2FJzR%2FewNksqNEeLTclJt7bjzsdtom5bI4qvV1eYJff8DBUki3Xntg5WJ996xEgdLNifBQwuSKwqZ4BB7H2x1nSlSkXZ5Xl0YSmdVejcS1c8dEyMhILVab55ryMDFe0us0BiUTMfMp5WIUACTBx6bOhzrpxOhNx1yu8jnX1Et97pYhyWcEsMbbQupCZD7R%2FPXKmW3pJPSSDjuf2WrhJP0HebfpnQ7bWQvucaM9kQuHFLZoP%2BtRo22oUTvEW2bDRmqoz2Wfo%2Be3uoaHm5rhmg7tSewx%2BbxOPwVfY5ImnAQH7x9eHN6rC%2FyOCI7bdKUt0VFWTJd2bixjBYJmIr0T%2BzvvY7QL1ABzcfKj1brKGP9YTEXnAxPnerLDQJgzdLAdmfPcTMyoWobV8X3hTAL%2BNnfrKRCsrV0LnPXdsbNDSGTdBEbNB0d5viBVExPtapzDuRYJqyPKNOLzb0bynoOWya%2B%2BM4pJg%2BTYhM7S0bP2sqqQ31Gop3o%2FsUB9PbTCHxs3JBjqkAYmf0Kl3Cd8nYgsGN69xtXgH46JJObWRYiQAjiUMVbfep3zVJHPD5T%2FurRDypO%2FlnLMM5Nyr0H0zt1tlHi4T2jEBfa8QQFvJ%2FVxJvGpzdmsYu7ng8c%2BYGQ420NLKh8rScTz1WSHifYkqLNsk8p2X0ooQ1uCpsqJ4%2FZjSHT%2BDnqLtWhLEG6NaHZ%2Fb9uQhtLH%2FYGS7ayJ1DK3prYuCMm0ah1niJvXQ&X-Amz-Signature=b4c6b27e6e2015d8d9396d0bbeda6b76aa423f638e5ca57c11a75a53ba198ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


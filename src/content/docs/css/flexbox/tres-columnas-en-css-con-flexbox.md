---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KIFN5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXo0e2%2BRhaf2eJANtswZK5T5GAG79hunLIWJFkBJyrdwIgDQjZRhVdzSIOMJNgNZ8LXLGzUhhiGt7MGIxkSEOCCsYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFbVTcZtqXkVf9TyircAzXSeP2%2B07FO1JGx%2FXHP3%2FYCH%2BehgZE4eTa2JQ3aowdW0jMAW7wWRO0dL3VrhEUtz4bzo1TZlwVYwykjL%2Fr16kK37e%2FY3VWS38jeRs0QpOC8pKCzE7%2FE2HZ27EinHe2E1PRFgW5GEh%2Befs0WVP4ldE4P%2BRhAlvOjt1K7VKGkgm4yuA5VmI7GWEYjsOua%2BE8mWkFlYB693nRvspqzClo384h1fUhVtxgQqEtldo3U%2BPFCw7UP9gpX6AYeKaja%2FkenwcZ4i9VCN9SRAAzkZYwPrJrBY9xAJbeIecQDiuYBcQeNotiacHFxZJm6Za%2FJQgclgTJfTjz9Pbi95TU%2BrGH3kzc289SF8LImhmn3HScLTkJ23DuZHyj%2F6hqDUfLREtuF763YGL%2FZUEIm%2FeOMnJpLndynvmOBj4QnKH8MbA0JyJ7nT%2BDuKIeK7AZNP%2B13yssZ8cqGHg%2B0SkvdB8u2yyD8zCR%2BibxFz43P3PoP2NpRIQ%2BwvQbiQh0769oQ47fx7m4Iispl%2Bkg2TpFYxnPQzP0IMSnUeH%2BpIsA%2Fv0lLB0617ERTq9Nn2orrnTI4CKv0UFzYffo8qWA5o2idwRCPxv4Dw6K4UY8T2Bze%2FxsnFEw0o4eS4p23NAkG6i2lUWOpMJCQ28kGOqUBoy0hHBvV3Kloju3NI%2FUNvxcX6NLGv8fNB1Bc5SsLW331jSqMzhzV1KiTWw3zx1WQWgC3nug%2FOhpm5bdfJTr0Buehqny1MdnUGdzzm9UdsJ9SHDFIuh2qEcou5amSQhUyPw2zCtcFWokm5X7gE32rpej5gc%2BYmuOuYOXBWoxTm1Y%2FvSFu8GIPRm2QTPNiCdToYj1Vs1aJFHLVoIcxhF6tOemveT%2Bw&X-Amz-Signature=1cb97323c212f17900b546e35a93748a99d1f35d316732185bf8d7d9ae0084ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KIFN5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXo0e2%2BRhaf2eJANtswZK5T5GAG79hunLIWJFkBJyrdwIgDQjZRhVdzSIOMJNgNZ8LXLGzUhhiGt7MGIxkSEOCCsYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFbVTcZtqXkVf9TyircAzXSeP2%2B07FO1JGx%2FXHP3%2FYCH%2BehgZE4eTa2JQ3aowdW0jMAW7wWRO0dL3VrhEUtz4bzo1TZlwVYwykjL%2Fr16kK37e%2FY3VWS38jeRs0QpOC8pKCzE7%2FE2HZ27EinHe2E1PRFgW5GEh%2Befs0WVP4ldE4P%2BRhAlvOjt1K7VKGkgm4yuA5VmI7GWEYjsOua%2BE8mWkFlYB693nRvspqzClo384h1fUhVtxgQqEtldo3U%2BPFCw7UP9gpX6AYeKaja%2FkenwcZ4i9VCN9SRAAzkZYwPrJrBY9xAJbeIecQDiuYBcQeNotiacHFxZJm6Za%2FJQgclgTJfTjz9Pbi95TU%2BrGH3kzc289SF8LImhmn3HScLTkJ23DuZHyj%2F6hqDUfLREtuF763YGL%2FZUEIm%2FeOMnJpLndynvmOBj4QnKH8MbA0JyJ7nT%2BDuKIeK7AZNP%2B13yssZ8cqGHg%2B0SkvdB8u2yyD8zCR%2BibxFz43P3PoP2NpRIQ%2BwvQbiQh0769oQ47fx7m4Iispl%2Bkg2TpFYxnPQzP0IMSnUeH%2BpIsA%2Fv0lLB0617ERTq9Nn2orrnTI4CKv0UFzYffo8qWA5o2idwRCPxv4Dw6K4UY8T2Bze%2FxsnFEw0o4eS4p23NAkG6i2lUWOpMJCQ28kGOqUBoy0hHBvV3Kloju3NI%2FUNvxcX6NLGv8fNB1Bc5SsLW331jSqMzhzV1KiTWw3zx1WQWgC3nug%2FOhpm5bdfJTr0Buehqny1MdnUGdzzm9UdsJ9SHDFIuh2qEcou5amSQhUyPw2zCtcFWokm5X7gE32rpej5gc%2BYmuOuYOXBWoxTm1Y%2FvSFu8GIPRm2QTPNiCdToYj1Vs1aJFHLVoIcxhF6tOemveT%2Bw&X-Amz-Signature=e5a2c12454f978f88f4341f4f36a76b27eec630f95c8058242a2a48b2bec6908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


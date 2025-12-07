---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PY5OZA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcSc6WHlqmFMg5Y%2B8NjGYYdDdlulgXJ0fhMnL%2BR3GzDAiEAvV2X9kL%2BnSLq8JFoD%2FnJZBpIlwfX%2BdCrlDPDmf3pcAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGY4OZautKRykGqbircA0jsxqGWPt%2BCb7AzP246jwp3OWnDewwtAYaCZx1qhHjGrEPNuYuH9i2j5QXtIQfNfc3pMuOkgWAwjaUC3owlniY9XpblJ554JZRCIMazGnqbzXsQRheyeXCbC4flV2JNIiMVm5gfZ9OPWrifAtCDZnYc5JWKiMaq6Q2VvVTloqtKK5XYybOlJ21e0RI%2FjQ5t%2B%2BndUhl0o8J8JCW84CODUU5Kx1asRaPOHPjhOW5KLTRCb5XDzx6bauGF85%2F2mirEu0DyI92ums8FJRlagxGMoJOvqnUQrNl3l5PMowkHQqI5j7i1Rwa%2BE1ghxTfqo3%2B981k1piYdV6rJzF70D%2FK8N10zQcPnKXM%2Bx1WqgKx%2BSDnT8cVgtDSTH1b4vnnKdCQOU4MSYiDbgZG1luhZW3TxMypZ6PFz7ximiMWLREKQlOKMEjp6d5fdSoCNaD83v0R1MMCjpLKBac6m2uWT68hTxdXjPobXxPDElvRysXoxN2ONMGXXg3fs24fSzN7%2FumGSOu4WvSihL43YhjE0Yh8O0euZSoauISaXQf88PIOi7ySu%2B0mM%2F7hhuM8ZHvwTsEnECkh3gOoZMdwB9DRPVWbIMOAOinHb49IVpQaG%2BaCxuRZubOm5TTSgGMy4VU3fMJr90skGOqUB6NNXo0EnBmBpNAaeJWY7kEseUuXEcgiaknsrUTSsQjgpDKiFEB%2FVDP9caKm9o6zF111DS%2Fs0OYDRJLiYG5FZyQhVbwSKMw%2FKRPDiOtqe9nVa2vDVawPwIjuj1rHgVWntcwueP%2Fq2wMGxNGEfY4DDAYB40kY5Xs5a4uAqGX9hM8ryckC7sPSMa8d36DYb9HF4n4IkJSkLDU%2BeLKWuLp%2BqJJlrrlcp&X-Amz-Signature=95492ab86a4e0483541b7376336891c65171213b61e795494748819fe579b402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PY5OZA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcSc6WHlqmFMg5Y%2B8NjGYYdDdlulgXJ0fhMnL%2BR3GzDAiEAvV2X9kL%2BnSLq8JFoD%2FnJZBpIlwfX%2BdCrlDPDmf3pcAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGY4OZautKRykGqbircA0jsxqGWPt%2BCb7AzP246jwp3OWnDewwtAYaCZx1qhHjGrEPNuYuH9i2j5QXtIQfNfc3pMuOkgWAwjaUC3owlniY9XpblJ554JZRCIMazGnqbzXsQRheyeXCbC4flV2JNIiMVm5gfZ9OPWrifAtCDZnYc5JWKiMaq6Q2VvVTloqtKK5XYybOlJ21e0RI%2FjQ5t%2B%2BndUhl0o8J8JCW84CODUU5Kx1asRaPOHPjhOW5KLTRCb5XDzx6bauGF85%2F2mirEu0DyI92ums8FJRlagxGMoJOvqnUQrNl3l5PMowkHQqI5j7i1Rwa%2BE1ghxTfqo3%2B981k1piYdV6rJzF70D%2FK8N10zQcPnKXM%2Bx1WqgKx%2BSDnT8cVgtDSTH1b4vnnKdCQOU4MSYiDbgZG1luhZW3TxMypZ6PFz7ximiMWLREKQlOKMEjp6d5fdSoCNaD83v0R1MMCjpLKBac6m2uWT68hTxdXjPobXxPDElvRysXoxN2ONMGXXg3fs24fSzN7%2FumGSOu4WvSihL43YhjE0Yh8O0euZSoauISaXQf88PIOi7ySu%2B0mM%2F7hhuM8ZHvwTsEnECkh3gOoZMdwB9DRPVWbIMOAOinHb49IVpQaG%2BaCxuRZubOm5TTSgGMy4VU3fMJr90skGOqUB6NNXo0EnBmBpNAaeJWY7kEseUuXEcgiaknsrUTSsQjgpDKiFEB%2FVDP9caKm9o6zF111DS%2Fs0OYDRJLiYG5FZyQhVbwSKMw%2FKRPDiOtqe9nVa2vDVawPwIjuj1rHgVWntcwueP%2Fq2wMGxNGEfY4DDAYB40kY5Xs5a4uAqGX9hM8ryckC7sPSMa8d36DYb9HF4n4IkJSkLDU%2BeLKWuLp%2BqJJlrrlcp&X-Amz-Signature=36d774ac8cf556a8be67e9f55fa3a95b15d654e688d308fb0ff3a239a6bd8dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


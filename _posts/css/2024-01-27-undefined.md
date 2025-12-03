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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFZUGHU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAJXTvxLCX%2BYdqb1SSzT%2B8GTbyrkt%2B4KhG2yMXUT41T6AiEAjndMzrt2gG7y3ZAux3VBztmf%2Bt3%2F4Lgy4%2FM3KxohLF4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD%2Bo3fba6cTmpRq9nCrcA6iLz2VOWIBpKhVB99w%2BCYxM5f0ddWFwyF8K7gduMeOjERGxe1nepABU3uYU6R684ttpoOrZJzC6kQ9wBxNycfWw1D6FRjHPkwp0q49hqLvBWeozFnzavjUyoyA7aKnEU3IHyjZFdKrOJHcrAc4sB2KKg11ISYD7j3wzXuHDiqJiQsLD80mAlfZcyHLDQ9xhvJYZc415Ckg7FW%2BMvEJMSUkCnp6qmKX%2FRE9Vl3jQzyiFbcnt3bhFXUALh1aECLrR8C%2F4U1AiAiRVKLDoJvG%2FSpbGY3n2LqDG7LvVYxrwAJqF0pK7mmOMCuXRc1XWzWI7bpnlw131z54OuEr7WXvxeHgp1IIBFCm8lsPm8eXsQV%2BvExcGcDrnwW9RE6lTntBZGrF0%2F0lSY%2BN2LMUj0kkjwgMoxk0rheTiri42UhhPGiJMUwfdaz2xwFvmF9p7EeWyDJssUVhxqgBx1NisLewnydj%2BuPcp%2Bn%2Fn3Egxqzo9EZv0uPsmM4pEOlbiAV%2F0eoVtkmbmpiHFyh6kFxdV1x2uSXA3n4UxUH1tZuChZc%2BrXYFCtAuO%2BkBffoQmxP5kSx6uPmEpnXPgvFoi7uMeemIMcTAuFTvBbNS%2B2qXDyIZdEERoDMMFkHGQ14YEzPHaMPDAwckGOqUBieJ2U7UhWK0SKiqXfSSOaQ%2BLZpkX5VWBLd8nfplwNIoeoYGUm%2FAheqGDMJ3a0RiMpo5k0%2F3W4aKVmIBxmDT43iuw5IwjzkutNjY2MtNteDk5DGwW4JN1Teo5sFTxYPsrOqo3wCezyVRAmLOJKXTbz8zKZUYCRkg3tNvyY07UfW4%2BaA0bSprcLcpBVzBYukjvjbb3xifierXYxUNHV6mkXXivhIGG&X-Amz-Signature=98213ae5a8d7223b7948a626152f5a74d7bc42d839bd3c64d843df69b5f7c70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFZUGHU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAJXTvxLCX%2BYdqb1SSzT%2B8GTbyrkt%2B4KhG2yMXUT41T6AiEAjndMzrt2gG7y3ZAux3VBztmf%2Bt3%2F4Lgy4%2FM3KxohLF4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD%2Bo3fba6cTmpRq9nCrcA6iLz2VOWIBpKhVB99w%2BCYxM5f0ddWFwyF8K7gduMeOjERGxe1nepABU3uYU6R684ttpoOrZJzC6kQ9wBxNycfWw1D6FRjHPkwp0q49hqLvBWeozFnzavjUyoyA7aKnEU3IHyjZFdKrOJHcrAc4sB2KKg11ISYD7j3wzXuHDiqJiQsLD80mAlfZcyHLDQ9xhvJYZc415Ckg7FW%2BMvEJMSUkCnp6qmKX%2FRE9Vl3jQzyiFbcnt3bhFXUALh1aECLrR8C%2F4U1AiAiRVKLDoJvG%2FSpbGY3n2LqDG7LvVYxrwAJqF0pK7mmOMCuXRc1XWzWI7bpnlw131z54OuEr7WXvxeHgp1IIBFCm8lsPm8eXsQV%2BvExcGcDrnwW9RE6lTntBZGrF0%2F0lSY%2BN2LMUj0kkjwgMoxk0rheTiri42UhhPGiJMUwfdaz2xwFvmF9p7EeWyDJssUVhxqgBx1NisLewnydj%2BuPcp%2Bn%2Fn3Egxqzo9EZv0uPsmM4pEOlbiAV%2F0eoVtkmbmpiHFyh6kFxdV1x2uSXA3n4UxUH1tZuChZc%2BrXYFCtAuO%2BkBffoQmxP5kSx6uPmEpnXPgvFoi7uMeemIMcTAuFTvBbNS%2B2qXDyIZdEERoDMMFkHGQ14YEzPHaMPDAwckGOqUBieJ2U7UhWK0SKiqXfSSOaQ%2BLZpkX5VWBLd8nfplwNIoeoYGUm%2FAheqGDMJ3a0RiMpo5k0%2F3W4aKVmIBxmDT43iuw5IwjzkutNjY2MtNteDk5DGwW4JN1Teo5sFTxYPsrOqo3wCezyVRAmLOJKXTbz8zKZUYCRkg3tNvyY07UfW4%2BaA0bSprcLcpBVzBYukjvjbb3xifierXYxUNHV6mkXXivhIGG&X-Amz-Signature=8271cd19ca96b98b8cccdce95fe86fc8983f74ed059246dd18707dce6ea63fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


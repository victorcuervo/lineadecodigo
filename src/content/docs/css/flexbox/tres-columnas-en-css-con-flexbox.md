---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63G2NMY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE6QC1LaBgujmPZU6wRJrYH7O9F1ejKUiYx%2BcSjGOQ5AiEA98zIpFKkLGpFx7so%2BiVwHW1%2BCsvLbWBVe7lFW6XHkxcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaTHG3huMqBHx3IgircA9hv%2BNoE626wXq6JFqrmWaBKN8NuMtEBuZUCEW0rdaSU5aDCbuIG9xsJvbEoPhS%2B%2FGM%2B6hxyEr81WKcU4vsOpuefLJo98S0JtCBREK7zdnNq3s4aG83HdUQDK8L3zVpeo7%2FkUvuqdS1of643aSUDH1bzjp6fEYXKIhnehgRSixua6quFojk99RJky21HSvLRG3ankHCu7%2BqYdo0IRCGDPvZdKEK3EBfDzDlgUeX6mwgq9cSrT7FmIq5GXKluL7iurO4ZBMdJo6SWsl4pGmA6rg%2BnuloYEBxxiwqaAItZ72iCC6hBID8b2NTuzzH2vq4%2BqXxDsmun1Js8sacQ%2FhgyHzujNTGyEfS5V5JvWk5W9bYJtlnujX7Imax9qRQFK1aAv%2BUbMjb6NJPsGkEwSxADa9bfMe%2FmNq0dhIKFRxdB%2B0t15YSumBGWthz0Qh817jrI6vvEOytVrCUYYYZcNzFdKuJK9I0YCWKFooy%2BSavBkIftUxtWgGAZek%2BA84lVs8I1RYHPkbi3EzXWvU66mh5gKYfaBbWqr88ZjxFzrhWtwEUnViHCwDxFm0dRuMYKlklMe92nok9vhZveaakmFw6tE%2Fh2v4S8S%2B4Ep3A1HnebnrLxAlkGZrLJipaNqaeFMP7p3ckGOqUBhe2hYRYF1qBVGpOrIZeHgHrUA0pDzuorrU9BlBFaJWerWzoR4RbQl%2BXpLUspJqR6LGNJ%2BpOAjqw9CJDrhpX%2FpQwtgHhdRIfr%2FWvXKEmSgnwluHq5GFJaG7rbYUarh2ls13fy19FOdha9wW9%2BK7TCDLOOfGE0LR6OoPTt8uoxpby4H7r%2Bv8glfB%2BgXnZkMGUjoNiVcrHwKTqOciKs7j2CwpZ%2BIiKz&X-Amz-Signature=b5645dc480799aa8e3e9600e80ff7c1db88593e471e7ae28f7706aea0b916934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63G2NMY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE6QC1LaBgujmPZU6wRJrYH7O9F1ejKUiYx%2BcSjGOQ5AiEA98zIpFKkLGpFx7so%2BiVwHW1%2BCsvLbWBVe7lFW6XHkxcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaTHG3huMqBHx3IgircA9hv%2BNoE626wXq6JFqrmWaBKN8NuMtEBuZUCEW0rdaSU5aDCbuIG9xsJvbEoPhS%2B%2FGM%2B6hxyEr81WKcU4vsOpuefLJo98S0JtCBREK7zdnNq3s4aG83HdUQDK8L3zVpeo7%2FkUvuqdS1of643aSUDH1bzjp6fEYXKIhnehgRSixua6quFojk99RJky21HSvLRG3ankHCu7%2BqYdo0IRCGDPvZdKEK3EBfDzDlgUeX6mwgq9cSrT7FmIq5GXKluL7iurO4ZBMdJo6SWsl4pGmA6rg%2BnuloYEBxxiwqaAItZ72iCC6hBID8b2NTuzzH2vq4%2BqXxDsmun1Js8sacQ%2FhgyHzujNTGyEfS5V5JvWk5W9bYJtlnujX7Imax9qRQFK1aAv%2BUbMjb6NJPsGkEwSxADa9bfMe%2FmNq0dhIKFRxdB%2B0t15YSumBGWthz0Qh817jrI6vvEOytVrCUYYYZcNzFdKuJK9I0YCWKFooy%2BSavBkIftUxtWgGAZek%2BA84lVs8I1RYHPkbi3EzXWvU66mh5gKYfaBbWqr88ZjxFzrhWtwEUnViHCwDxFm0dRuMYKlklMe92nok9vhZveaakmFw6tE%2Fh2v4S8S%2B4Ep3A1HnebnrLxAlkGZrLJipaNqaeFMP7p3ckGOqUBhe2hYRYF1qBVGpOrIZeHgHrUA0pDzuorrU9BlBFaJWerWzoR4RbQl%2BXpLUspJqR6LGNJ%2BpOAjqw9CJDrhpX%2FpQwtgHhdRIfr%2FWvXKEmSgnwluHq5GFJaG7rbYUarh2ls13fy19FOdha9wW9%2BK7TCDLOOfGE0LR6OoPTt8uoxpby4H7r%2Bv8glfB%2BgXnZkMGUjoNiVcrHwKTqOciKs7j2CwpZ%2BIiKz&X-Amz-Signature=2b2588eb7b0f0fdc51970136fedd778c355b5ad1565d8be8c907cbe4f23c8767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


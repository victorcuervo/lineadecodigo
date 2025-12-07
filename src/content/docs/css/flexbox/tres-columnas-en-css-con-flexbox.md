---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIWCC57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMXkzvPRr%2Fgx%2FiWMn5DTbtiC3t%2Fy2dN5Vq9FCtCN0hAiEA2YQwsVqE9izZwTsLiljdrcVWg%2FhMDBYLQ6%2FWKBwSHBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj9gl9Nmrqb7iBB1yrcA2QJzMq4Z9JPOObDc9XsV3lGP4pMfWXuYpOIq9KEA%2BJx%2Bv0mB%2FN2h8E7ObfaXZXXev1ViYbEiNAHw0xpMFNn5EObPSeepk4tD7KW%2BvS4smVx%2FwXjAolzGcCx%2B0qr15jI6ezyyPoa9dQR9uIYQzhJkj3p5Thyh75lVrhQdDbvrCPaFJKCVguiq8CEhRiVNiJuDlMmh1d%2FAbBe%2Bel0J%2BC8HtDDcyFNhi9udDnZm3Xi3NqOElkJM0grRzTnHQK802g4QajiiEBOGNEYj4pf9cfY0sNETgpbmSncNEY0RIrxAaENrGhoy8uyDwGqybh8vXOxtyF922qsx%2Fp6%2BhDvIhHD18hX0bY7fCogfGfMtEAfdeUJb2tDAjefcyqEfEvU2u%2BFlgN50BshY4QdHBysbNAEG6vsLMFKd0NiRDWlmrqsHL9twricBn4Cy5fg3M2rkoJcE%2Bxu%2FFHGtpFIHOUQALcTBbfn55%2Bcd363ehAzEpkH%2BTb5oQxL8MkpR0GVLeGr8MqzuyAYHI6H6KXm5Bub%2B%2BodXKGOOrhIdY4kwitlewRgXTAkNaxQWGEwQ50QVC2Y31Awn5KL9%2BZx3LOMHhqeWd1r5CCFn1%2B2691PGbssn1fcAkMrdZyWKvyMtNhPq4vDMKH90skGOqUBN70VwY%2BKPsvebZZxqBFt3N1hnLYcjEvSZEuBoGzLNnuVUgnnPNaxVccq5EmcUBRqF6ilAgCn8Yj%2Bn24Mz48yln%2FuJB37bZqpG4IORDDnTvs2Ik3vX7Cxnp0P62ZH4IwxarZYoqsiXK8fwv2WaaNgdGcujlHiq%2FiOZ4cd%2B02eU7QSoK%2BVCNOzOqFpEqwgw4NAnQXpOTEnYYgBN84uSyQnUqwgvbh5&X-Amz-Signature=76cde66041024257f9c77a92b82b07b2a28e6968eb3209c5868391d7efad1a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIWCC57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMXkzvPRr%2Fgx%2FiWMn5DTbtiC3t%2Fy2dN5Vq9FCtCN0hAiEA2YQwsVqE9izZwTsLiljdrcVWg%2FhMDBYLQ6%2FWKBwSHBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj9gl9Nmrqb7iBB1yrcA2QJzMq4Z9JPOObDc9XsV3lGP4pMfWXuYpOIq9KEA%2BJx%2Bv0mB%2FN2h8E7ObfaXZXXev1ViYbEiNAHw0xpMFNn5EObPSeepk4tD7KW%2BvS4smVx%2FwXjAolzGcCx%2B0qr15jI6ezyyPoa9dQR9uIYQzhJkj3p5Thyh75lVrhQdDbvrCPaFJKCVguiq8CEhRiVNiJuDlMmh1d%2FAbBe%2Bel0J%2BC8HtDDcyFNhi9udDnZm3Xi3NqOElkJM0grRzTnHQK802g4QajiiEBOGNEYj4pf9cfY0sNETgpbmSncNEY0RIrxAaENrGhoy8uyDwGqybh8vXOxtyF922qsx%2Fp6%2BhDvIhHD18hX0bY7fCogfGfMtEAfdeUJb2tDAjefcyqEfEvU2u%2BFlgN50BshY4QdHBysbNAEG6vsLMFKd0NiRDWlmrqsHL9twricBn4Cy5fg3M2rkoJcE%2Bxu%2FFHGtpFIHOUQALcTBbfn55%2Bcd363ehAzEpkH%2BTb5oQxL8MkpR0GVLeGr8MqzuyAYHI6H6KXm5Bub%2B%2BodXKGOOrhIdY4kwitlewRgXTAkNaxQWGEwQ50QVC2Y31Awn5KL9%2BZx3LOMHhqeWd1r5CCFn1%2B2691PGbssn1fcAkMrdZyWKvyMtNhPq4vDMKH90skGOqUBN70VwY%2BKPsvebZZxqBFt3N1hnLYcjEvSZEuBoGzLNnuVUgnnPNaxVccq5EmcUBRqF6ilAgCn8Yj%2Bn24Mz48yln%2FuJB37bZqpG4IORDDnTvs2Ik3vX7Cxnp0P62ZH4IwxarZYoqsiXK8fwv2WaaNgdGcujlHiq%2FiOZ4cd%2B02eU7QSoK%2BVCNOzOqFpEqwgw4NAnQXpOTEnYYgBN84uSyQnUqwgvbh5&X-Amz-Signature=cdbf5c29d870635ba702f9a0911f5acc7e281b5a9dfbe681a2dfd82507605848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


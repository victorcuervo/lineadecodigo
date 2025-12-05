---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOZV3C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw5%2BR2p4u%2BbD4UJErE3YQTcxNCLvQcL0hpJwDJu878DAiBa4gmCUbdHmeWUFYGbdnelgZA3O1%2FFD7%2BIfiyTgRU%2B9yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsnRTuQIfIQ0vW7%2FhKtwD87pE5GGNHiENqPI%2BOzR5ea7x1xFyNwsW7GfPuU%2FWEZQ1wFHhvtYKW9Y93l7B7e1qvjBz1se%2FhTD1MXI%2B2AWdBagbtNWDt7oPspkpeTRDvOdhEkfBWR8TjOkh%2F0WWkkzDRtYU%2BEb%2BHRWSZNcNGf1hODGxz18kDjfENkdXExwHwhmiULHcq2awum8vQ3PCkL00%2B9YB8%2FeHKc6jUz2BMszRY86bmKe33PsLwqHMlkQ5GTf5viGVYVkKVQq%2Fam0tN%2FYPn7Sy35Vq02J0Ue4gTC9Pz0T5Uv6HP3bB9IVMZ%2BTM4MICGpWRSHXGjnkoN6kvMXzL1Lk%2BCo8N84jLAMlJCqHBIMthkjuouXdE97IA4tna4rVi4eajVRl0VGcVlPZBSMaibRyU9yjbifpcoRbv%2BXntvrTteXtZ4%2BiFHVAtz4e3vWHTownJYhYcmRUHBY08j401VvUiXVtAFqPerysUzFqI7hldDxEZD%2FAD3gReY%2FpMj%2FK2lf5DhB8T4Z3axLvJHuliT1ffcadKlD0G%2B6HKGA0OU5bA1pKeDJENTBiUz1SjFAfqAsHzwWFe674DnItmidqJViv%2BP2UKOIb4XQaJCTAOyaADZPMKOsljmRyXaS1ZHN3Hhb5WEIdTyJpXYuAw%2Fa%2FJyQY6pgG4%2BfU58X%2FFHYcnBTf7ukRaMfsKWDnNijagUL%2FwTEGQDg1cImpvsdNvsP5466%2BbX2Xd%2FWpnAOFd%2FuffQNriKlZhaM32wfgkhxIVKCcAHs4jCi1p2j1AdBPMfozw1EAqLQDc8SPcdXGSCAH0SXjFwOLsS2PmrVCMQclpLqI0Qu0IzHnuUPwr%2Fs1ww6qKDlaXHTq322pLFdo%2FIJOC9i%2BX3Vmr%2BkJXHOi%2B&X-Amz-Signature=05d494a5558d8769b0c989e500c7affea2c1ef49f9a77d5a304cd32f9cd733d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOZV3C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw5%2BR2p4u%2BbD4UJErE3YQTcxNCLvQcL0hpJwDJu878DAiBa4gmCUbdHmeWUFYGbdnelgZA3O1%2FFD7%2BIfiyTgRU%2B9yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsnRTuQIfIQ0vW7%2FhKtwD87pE5GGNHiENqPI%2BOzR5ea7x1xFyNwsW7GfPuU%2FWEZQ1wFHhvtYKW9Y93l7B7e1qvjBz1se%2FhTD1MXI%2B2AWdBagbtNWDt7oPspkpeTRDvOdhEkfBWR8TjOkh%2F0WWkkzDRtYU%2BEb%2BHRWSZNcNGf1hODGxz18kDjfENkdXExwHwhmiULHcq2awum8vQ3PCkL00%2B9YB8%2FeHKc6jUz2BMszRY86bmKe33PsLwqHMlkQ5GTf5viGVYVkKVQq%2Fam0tN%2FYPn7Sy35Vq02J0Ue4gTC9Pz0T5Uv6HP3bB9IVMZ%2BTM4MICGpWRSHXGjnkoN6kvMXzL1Lk%2BCo8N84jLAMlJCqHBIMthkjuouXdE97IA4tna4rVi4eajVRl0VGcVlPZBSMaibRyU9yjbifpcoRbv%2BXntvrTteXtZ4%2BiFHVAtz4e3vWHTownJYhYcmRUHBY08j401VvUiXVtAFqPerysUzFqI7hldDxEZD%2FAD3gReY%2FpMj%2FK2lf5DhB8T4Z3axLvJHuliT1ffcadKlD0G%2B6HKGA0OU5bA1pKeDJENTBiUz1SjFAfqAsHzwWFe674DnItmidqJViv%2BP2UKOIb4XQaJCTAOyaADZPMKOsljmRyXaS1ZHN3Hhb5WEIdTyJpXYuAw%2Fa%2FJyQY6pgG4%2BfU58X%2FFHYcnBTf7ukRaMfsKWDnNijagUL%2FwTEGQDg1cImpvsdNvsP5466%2BbX2Xd%2FWpnAOFd%2FuffQNriKlZhaM32wfgkhxIVKCcAHs4jCi1p2j1AdBPMfozw1EAqLQDc8SPcdXGSCAH0SXjFwOLsS2PmrVCMQclpLqI0Qu0IzHnuUPwr%2Fs1ww6qKDlaXHTq322pLFdo%2FIJOC9i%2BX3Vmr%2BkJXHOi%2B&X-Amz-Signature=319256a80bc3ef28fbc9cfbc00e4acb02074c95baa5f0d1070e0ff53eb49df39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


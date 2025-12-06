---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVD2UTXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXCB5SxcK0ZTMSXIub4nQE9IgR4v%2BfTgpp2yVf84UyAiB0VG59DXbz0iT60EGhnJgzbT1txbw95mnI5aj%2ByuXpwyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaUjrnBQDVoTGZ6ASKtwDKaw3wG27zBp7XvoT3zQO2ZUiaB%2F7hudEfhWFiC%2F7PZnYx%2F6AfMz9MsDKwBAcRft6vCQK%2BJAqJKG%2Bdk%2BBK1MDqynF0p6iw7qquFBQzkf2GcB5KrJ2P2KPrMTqLnXIuZ8k0gks9cjpp2AR2UFqUP3lEtJbrQYJSy%2BFleqY5Jbv5kBrym8CoHlfK3xJ4zb84sylHL%2BBDMfT745Lg615wNLIAWLrUtWW0lz3OsjY2bhRrxUb10t0BAjF0mVYutFGCtwSI3oSAFM7dtDelae1iwDo3V8Ou9Mfm4BY5shN534ETOIV16VdDJp4Nx%2FSvLFEWTUlzq%2BfIHIe3vYU816JA47GYUAB9roZ002lLX0WTeM3Oi0fS61vdoxl0qStNJsHcDG1r6yIiDhSXqt6%2BBj2%2B%2BemAuYptQqo6agoBE6okU25XqrxRKlKM5ZxR64%2BVmZgrAVuSdV8UIYccxSbhR5g1p%2BtB4TUoVZv5xDhXJzuu8lPvhxPz4Upg%2Bh0BH%2Bv4C9gQnqSzhmVcgwFtAcae0OwxobJNODhC83sNFtviCr1KfHvUAyJlwyJ313Evh6hYyZRdclfcTNCh%2Fe69n%2BkbjVriPXsC%2BUQPND5rcJrsxuczzYFjQxwz0q1kL8c2D9oBiYwzqbQyQY6pgHFZKumuz%2BoUDf00hCpm%2Bd495QuRfFi2eJnVOkUy6yPIPQrF2Cj1Vk369FDABA7H4hxihRcWwUiD%2B2TPwXQ8p%2Fg6OPvUGCBqdDSUp8xRyxxOl4f%2B884F3EaJ9jETuFAJ2cFioK35hCgYnZlNRdNRhcbOCTUegmbEbja%2Bi73yksisYVXFhziwUm3t7HOhytf5AJzjFkET6pdBBYrDFzVhsaT%2FroK%2FJCc&X-Amz-Signature=2e114a9d7c164e08ee1b5f6aa3c5be2115266dbce6caf316a403fcba17595901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVD2UTXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXCB5SxcK0ZTMSXIub4nQE9IgR4v%2BfTgpp2yVf84UyAiB0VG59DXbz0iT60EGhnJgzbT1txbw95mnI5aj%2ByuXpwyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaUjrnBQDVoTGZ6ASKtwDKaw3wG27zBp7XvoT3zQO2ZUiaB%2F7hudEfhWFiC%2F7PZnYx%2F6AfMz9MsDKwBAcRft6vCQK%2BJAqJKG%2Bdk%2BBK1MDqynF0p6iw7qquFBQzkf2GcB5KrJ2P2KPrMTqLnXIuZ8k0gks9cjpp2AR2UFqUP3lEtJbrQYJSy%2BFleqY5Jbv5kBrym8CoHlfK3xJ4zb84sylHL%2BBDMfT745Lg615wNLIAWLrUtWW0lz3OsjY2bhRrxUb10t0BAjF0mVYutFGCtwSI3oSAFM7dtDelae1iwDo3V8Ou9Mfm4BY5shN534ETOIV16VdDJp4Nx%2FSvLFEWTUlzq%2BfIHIe3vYU816JA47GYUAB9roZ002lLX0WTeM3Oi0fS61vdoxl0qStNJsHcDG1r6yIiDhSXqt6%2BBj2%2B%2BemAuYptQqo6agoBE6okU25XqrxRKlKM5ZxR64%2BVmZgrAVuSdV8UIYccxSbhR5g1p%2BtB4TUoVZv5xDhXJzuu8lPvhxPz4Upg%2Bh0BH%2Bv4C9gQnqSzhmVcgwFtAcae0OwxobJNODhC83sNFtviCr1KfHvUAyJlwyJ313Evh6hYyZRdclfcTNCh%2Fe69n%2BkbjVriPXsC%2BUQPND5rcJrsxuczzYFjQxwz0q1kL8c2D9oBiYwzqbQyQY6pgHFZKumuz%2BoUDf00hCpm%2Bd495QuRfFi2eJnVOkUy6yPIPQrF2Cj1Vk369FDABA7H4hxihRcWwUiD%2B2TPwXQ8p%2Fg6OPvUGCBqdDSUp8xRyxxOl4f%2B884F3EaJ9jETuFAJ2cFioK35hCgYnZlNRdNRhcbOCTUegmbEbja%2Bi73yksisYVXFhziwUm3t7HOhytf5AJzjFkET6pdBBYrDFzVhsaT%2FroK%2FJCc&X-Amz-Signature=c332b563f11a2759d998a2bbf1bf6c9ae33c0996871ab5011971d22c5245a35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


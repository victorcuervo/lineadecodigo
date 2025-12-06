---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRLL4TJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVybbaqbcDMLBRKIeB%2FqJddVBSV4wXELPTweU5dZl7igIgMS%2B55Dc5M%2Bbxxbe%2BgI206gdpQRipDejky%2Bc8v91MD6Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHFqLEyLbiqcqiNT2yrcA2KRMd0F91LRuMt%2F0SPhfnyfq70Jd5b8FndgKKGKAgch1OLqraxckKUGsiN97D3Yuiz1nD2crytrrPJn6UsSdUdgnyBnuwxbl0xDnvitL0s1xOLkHJkzTiUXZKJVoOII75HV%2FHkKd0aMqFcb%2FIWFzsD7lfz6SAaAW8IwDeUD%2FGsLoCbe%2Ff14zI0SP8lMYjHeXpiT0srPVbRf5%2FnKIYk%2FsYM%2FzRaaFLEPByPzBT6p8Z%2FRnE9BDhXiWNq2bRRDvON5iVQFH2WkwW45OOaSVwsmR85HBxjw72QMps7VNEi%2Bptl5kX7WG4zAjpMdMUBcphEPjUkKaf%2FSdEdr7HUIdSJIhrCH%2FOHloMocQbELYJpzvmoU4jkTvBImSr5f2X7uDsaBgTMBMfycR0z614OizKist37CcQ8jAMqB0mKOG04ZRF%2FDnhks3olDW2lpu4nMGzBSa7WglfJnSUK0ieX3gRoGTlXEvGEm5bNXw%2FqX6vMWtgm4jTZ1bJgj%2BgXJh7llxYOjkfSYdkEIbn46oRPs2c73sItIq4ToCkedZyuqCRH8u1ptrKdcpmJO7C7X6mcLM3VgqDUnyACTF%2BiQVplufvn8V72ujBy4p%2FVztVr0PIs4W4vN7WLPnDjEkpURnvaHMMKez8kGOqUBtcH%2FG1Lj70Em3rYskfTfH1ajw5yXScexDZeDpK7fMDwe2zKroVgjbeFYpw4NQXd5pfa%2BI9KpqRfmUIF2Kj9dgM2T4aqKlFp%2FxVKVA63em9wAVADKa6m%2BadCgGmhHmcwJhKpkxtnWvsm0S0zKqkZh%2BNA1Z3SonihdovXhupNsf0foyOUz47VHwACtw91pgAh2l3HlMQy6Gx%2Bl68xzKAAKorWNI7f4&X-Amz-Signature=450dd76ff115ce5c9de14e3fbbb3b34b9268ea617854d8ca20e750bb03bae164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRLL4TJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVybbaqbcDMLBRKIeB%2FqJddVBSV4wXELPTweU5dZl7igIgMS%2B55Dc5M%2Bbxxbe%2BgI206gdpQRipDejky%2Bc8v91MD6Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHFqLEyLbiqcqiNT2yrcA2KRMd0F91LRuMt%2F0SPhfnyfq70Jd5b8FndgKKGKAgch1OLqraxckKUGsiN97D3Yuiz1nD2crytrrPJn6UsSdUdgnyBnuwxbl0xDnvitL0s1xOLkHJkzTiUXZKJVoOII75HV%2FHkKd0aMqFcb%2FIWFzsD7lfz6SAaAW8IwDeUD%2FGsLoCbe%2Ff14zI0SP8lMYjHeXpiT0srPVbRf5%2FnKIYk%2FsYM%2FzRaaFLEPByPzBT6p8Z%2FRnE9BDhXiWNq2bRRDvON5iVQFH2WkwW45OOaSVwsmR85HBxjw72QMps7VNEi%2Bptl5kX7WG4zAjpMdMUBcphEPjUkKaf%2FSdEdr7HUIdSJIhrCH%2FOHloMocQbELYJpzvmoU4jkTvBImSr5f2X7uDsaBgTMBMfycR0z614OizKist37CcQ8jAMqB0mKOG04ZRF%2FDnhks3olDW2lpu4nMGzBSa7WglfJnSUK0ieX3gRoGTlXEvGEm5bNXw%2FqX6vMWtgm4jTZ1bJgj%2BgXJh7llxYOjkfSYdkEIbn46oRPs2c73sItIq4ToCkedZyuqCRH8u1ptrKdcpmJO7C7X6mcLM3VgqDUnyACTF%2BiQVplufvn8V72ujBy4p%2FVztVr0PIs4W4vN7WLPnDjEkpURnvaHMMKez8kGOqUBtcH%2FG1Lj70Em3rYskfTfH1ajw5yXScexDZeDpK7fMDwe2zKroVgjbeFYpw4NQXd5pfa%2BI9KpqRfmUIF2Kj9dgM2T4aqKlFp%2FxVKVA63em9wAVADKa6m%2BadCgGmhHmcwJhKpkxtnWvsm0S0zKqkZh%2BNA1Z3SonihdovXhupNsf0foyOUz47VHwACtw91pgAh2l3HlMQy6Gx%2Bl68xzKAAKorWNI7f4&X-Amz-Signature=92db430a518982a9ff744fcb96a46a92ee29919a092e5b681308784b7381cb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


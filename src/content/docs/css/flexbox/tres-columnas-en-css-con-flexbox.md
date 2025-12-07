---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDLX37L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI43EJ6e5tqW3UpWzP4jOxVtgvbiJ5BEU1YRyojOcglwIgPH0S%2BI3PxTwD2OQReJvUWuvhyPPrEu7xA7oAXsdAwlsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfZBniNpy1wB0rCUircAzmQCebbOphVXKSxAJOUYKCP76lu5er07A1XFBi4aq%2BktPQepZi85kYJKO5XI0qRaTKk5rPeaxD9pvsvwl4HMekH9XOdcCOn81hQn2Le3H1%2F0p%2Fj%2BBc3BwLhsqDfrGMKT84dkrI1TnftcnV%2FcSgCVWkPXxRhPE7o2RTJmm6w1UoJXA%2FKOVT%2BxjOIb8yUs%2B5J2ydBva8zf1sn9jhxB1Rlk1XNukV%2F9bv3USTgBZ2pPjMujDMKFBuV1Z5%2B6LT0DV68f%2BqgfD1AeFXdO54aFfqsJgImeAFm5OpIKiJ6MfOu35xCLurxAwAFVdXxIYnjA%2BU9DmSdfQ0sqycqwxpMXsO8w6CS9u4w49FIb4y6d1gWMW%2BuGQzDtDxY64BeKVZniO2ohEIc6NKoP5gXMgOZeZlNh2W2s6LSPJK1j0Tn8tBXWVoUdTAd%2BedLpC4od7VbP6Tq7CWCbzYlGKyd4okOb%2FA56ME6N3sn5sRzQLyboLG%2BAFXEhBXZi7WRJNvzIa61kar5H8nvLFIil%2BYbeaigWpYXcAfiijJwJPgCc177tqXkOUWJT%2BxF2tkcKT30%2BVfwHm7kBxpmFgMvBiozRH2No%2BwsBGn8shZb0%2BdNxTTy6pT50Ng8DMQEEtK3HtT3G5e%2FMPLG18kGOqUBCG2CxbHy1MLokdUTJGd5Nbszt8oEA0aFRuzRFg0TdXyH5p%2Fq5vpILBuWedzmuEbTcZau6E6fqo1e7OQFaJKyZ%2FHzsO0MU90matD5j1WkU1TjD%2FnCRyVKny53zQ1zL%2FiKpsUJIzOnJ0LOAbC1KFjm1V9Dxae70T%2F047AfsWZOQopPcBZ1ocVIMhEoWBY2FQEXRa4FXfpsLIDtENj8Ntc59QlnBLTS&X-Amz-Signature=9f9b7579338362454a2ccdfc02e07e2891c805fbb6eef30d6ac62fed60f7249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDLX37L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI43EJ6e5tqW3UpWzP4jOxVtgvbiJ5BEU1YRyojOcglwIgPH0S%2BI3PxTwD2OQReJvUWuvhyPPrEu7xA7oAXsdAwlsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfZBniNpy1wB0rCUircAzmQCebbOphVXKSxAJOUYKCP76lu5er07A1XFBi4aq%2BktPQepZi85kYJKO5XI0qRaTKk5rPeaxD9pvsvwl4HMekH9XOdcCOn81hQn2Le3H1%2F0p%2Fj%2BBc3BwLhsqDfrGMKT84dkrI1TnftcnV%2FcSgCVWkPXxRhPE7o2RTJmm6w1UoJXA%2FKOVT%2BxjOIb8yUs%2B5J2ydBva8zf1sn9jhxB1Rlk1XNukV%2F9bv3USTgBZ2pPjMujDMKFBuV1Z5%2B6LT0DV68f%2BqgfD1AeFXdO54aFfqsJgImeAFm5OpIKiJ6MfOu35xCLurxAwAFVdXxIYnjA%2BU9DmSdfQ0sqycqwxpMXsO8w6CS9u4w49FIb4y6d1gWMW%2BuGQzDtDxY64BeKVZniO2ohEIc6NKoP5gXMgOZeZlNh2W2s6LSPJK1j0Tn8tBXWVoUdTAd%2BedLpC4od7VbP6Tq7CWCbzYlGKyd4okOb%2FA56ME6N3sn5sRzQLyboLG%2BAFXEhBXZi7WRJNvzIa61kar5H8nvLFIil%2BYbeaigWpYXcAfiijJwJPgCc177tqXkOUWJT%2BxF2tkcKT30%2BVfwHm7kBxpmFgMvBiozRH2No%2BwsBGn8shZb0%2BdNxTTy6pT50Ng8DMQEEtK3HtT3G5e%2FMPLG18kGOqUBCG2CxbHy1MLokdUTJGd5Nbszt8oEA0aFRuzRFg0TdXyH5p%2Fq5vpILBuWedzmuEbTcZau6E6fqo1e7OQFaJKyZ%2FHzsO0MU90matD5j1WkU1TjD%2FnCRyVKny53zQ1zL%2FiKpsUJIzOnJ0LOAbC1KFjm1V9Dxae70T%2F047AfsWZOQopPcBZ1ocVIMhEoWBY2FQEXRa4FXfpsLIDtENj8Ntc59QlnBLTS&X-Amz-Signature=59fc905f3a970ff817bc76e36b30aaf9978587f0b1417838fbd702b3d71aade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


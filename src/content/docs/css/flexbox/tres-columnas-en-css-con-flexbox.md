---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDQ2VAW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr8QPRlm6DNogRxOM1NQIq7ugoPuG7JoBKI2QOVNXubAiBWGAPYx9P3N0LkrAB95cKRHerqISQTbLXYFWMgk59tbyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMvDnjEcEbjTouCoa3KtwDiPbTcjHX92%2FAgliNSs2FBJX9Rx1%2F0V0pfIoK1n2GgePqL2t1p7HmoSyTilVbrKAI87gYj3leUQxZWRKhweOSj4ctHq9V5WILaTmXZLsz0QyHGokvFP9MLukn%2F3twTCxcNx%2F33j%2FUDfT59yf62hpsli%2FBHLee0EpfjRFSfT2tRTDWhM3XaAUuoPxNvmRoc5U4wlEylG1U7oqrCG0FE0upMnblxUQ%2FVvMVc94Hbwj4PyfjDMmpC1lpgLUr%2F%2BNnNG5Ja0KvXD7lt6p4oNdqIv5qWD2svQGtJjSJDF7ZdO9X6Agere1VOtiocP%2FadSa1m2UXc5lfvdTDh98CqZdku7WCDyrbknfJYG4Y2kCm9okWZSia1PKs9gQQD1nn3nrAKt1QEBNIhrBkdnurTqi4yRxRGftj7imAwdS2hoptjEuL1fSqpqCCneoPedWDMGWxFUIIGbAcqVDCbEsyOf89REWegszVFAfcVROKNYTPp2rQS7xcmnkX2u%2FoUykPGqyBrtEhGVZGBugOjtOhtoBTh7lWbjuIdmJBmf0mS93mJ9mmtjrCCG5aKkNXXGkA8PFq6Ju0zT3Z81HbGlWA5senGdCCCDt2veMu2KtSwIi%2ByauXKBHkYZ2IcoUrvf1g3lEwgMnKyQY6pgGb1SFgqNevZqzXHPPqFEy7anWGlf1ipX7qhakLmmzQfYPHA8GpJ3LHFparPNOhLtPQquMuiuUSLk%2FhdOKkEz1cw3iWBDoB3XpMfmHB7ZoVpCuDUYZSYSU4EkcjmzAT%2Bgcp%2BwL6nMBRCDBg9StJcWyS%2FxXP6K%2BnmWDBzpdYxySuPs7xVzNy4klFXIXE%2Fm%2BfCO%2B7jth5OOrnhmAg2G0Ji6lGaPsRhup%2F&X-Amz-Signature=22d2f09be7c1bf55a981020ea8777a80dd77deb2f4373c427fe23ca00220ce3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDQ2VAW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr8QPRlm6DNogRxOM1NQIq7ugoPuG7JoBKI2QOVNXubAiBWGAPYx9P3N0LkrAB95cKRHerqISQTbLXYFWMgk59tbyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMvDnjEcEbjTouCoa3KtwDiPbTcjHX92%2FAgliNSs2FBJX9Rx1%2F0V0pfIoK1n2GgePqL2t1p7HmoSyTilVbrKAI87gYj3leUQxZWRKhweOSj4ctHq9V5WILaTmXZLsz0QyHGokvFP9MLukn%2F3twTCxcNx%2F33j%2FUDfT59yf62hpsli%2FBHLee0EpfjRFSfT2tRTDWhM3XaAUuoPxNvmRoc5U4wlEylG1U7oqrCG0FE0upMnblxUQ%2FVvMVc94Hbwj4PyfjDMmpC1lpgLUr%2F%2BNnNG5Ja0KvXD7lt6p4oNdqIv5qWD2svQGtJjSJDF7ZdO9X6Agere1VOtiocP%2FadSa1m2UXc5lfvdTDh98CqZdku7WCDyrbknfJYG4Y2kCm9okWZSia1PKs9gQQD1nn3nrAKt1QEBNIhrBkdnurTqi4yRxRGftj7imAwdS2hoptjEuL1fSqpqCCneoPedWDMGWxFUIIGbAcqVDCbEsyOf89REWegszVFAfcVROKNYTPp2rQS7xcmnkX2u%2FoUykPGqyBrtEhGVZGBugOjtOhtoBTh7lWbjuIdmJBmf0mS93mJ9mmtjrCCG5aKkNXXGkA8PFq6Ju0zT3Z81HbGlWA5senGdCCCDt2veMu2KtSwIi%2ByauXKBHkYZ2IcoUrvf1g3lEwgMnKyQY6pgGb1SFgqNevZqzXHPPqFEy7anWGlf1ipX7qhakLmmzQfYPHA8GpJ3LHFparPNOhLtPQquMuiuUSLk%2FhdOKkEz1cw3iWBDoB3XpMfmHB7ZoVpCuDUYZSYSU4EkcjmzAT%2Bgcp%2BwL6nMBRCDBg9StJcWyS%2FxXP6K%2BnmWDBzpdYxySuPs7xVzNy4klFXIXE%2Fm%2BfCO%2B7jth5OOrnhmAg2G0Ji6lGaPsRhup%2F&X-Amz-Signature=c5c514645955f44a0fdfa9ab92109ebee22c671168e18ba625299d0077525161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


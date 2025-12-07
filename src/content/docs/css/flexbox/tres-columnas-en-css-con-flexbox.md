---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVJEQVA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBeHK2x39OIlS%2FZPlizAQUqz2YErG1gG%2FYibgqr0Y9%2FAiASRBusJ%2FiASnypyayQImUfT%2FZi%2BYEwXnHTxcKcMp3kAyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qJjf%2BnfJe2xOO%2FTKtwDwbjVBippM9WnGbkmrzk3rz8zkXWZ8wWj7D6puToVSpDfsY%2FRVHjSEbrcyJUDd77Q27jvLyst7Sw6zcO29IzYwvVSWZ4mk628aXO2%2B4UkPeQ6%2B%2BZVAVinDYCOf38ZyED61L%2BSwzmJSk1EjpqxxYxLpvhaG1qRW1Y6w7G%2B3pHppmmF6UiiSNk%2BCoa9xnXHn5%2BChOpJ%2B6WOWtawfeGm9AIsBbjcY0Oy5B9bj610NpX6r5mPMVmNg6YODPbBasd9Jh9fKHo8deADzqd%2FA%2FFxF%2FarenBE5yKmyc3EH5zspQlcUQcxl3MNWcUFyKhJaIcXioz%2BqoQs43QCa7ZcxjKU7nCY10fmNRsfX9ii1SdePu3MwbVYMQ4lLTicYuhdDv3bt31DlvSZwSYwhlmEkebrLbF7q%2FoI4JlCqvECuh%2F0nX7ZmvjhIK94V%2BM2AXCA6hMiLdS%2B1vbWvH%2BoJE7Iq4N2pQtrkRCK%2B%2BfkhAAmZDRqXZn42Yl4nu86w2dSHSf87lZZXZuRn%2Bd39mYgqJcEleWiNWSwdWzOLl64E2JXmyHeMPg20GeMu6d1XGjXqYQDUXgIG4b7VQ%2FRtneATUNISaNug%2BUEe9tziIuw%2FhPS9H5KBy0FCsVMpAuMwXWXE%2FhCWe0wn5zUyQY6pgGnYUc8IYaPGPauj4Sv30FR0OSAyKJM59C4YTDQdjOr8ZN%2Bs8GnDML9yQr04tvop1PHMGqoXqATlDy5xzAf8hgb49FM8EAqJQVB%2FElbGNzOFldDtyhbd2l0n6uTdslpropR0aHZz%2BjxgPETQW5ifReR%2BVc0JVMD4MuY9oYpkIbXTgpQJ1tdn1qTZWN5g6TLtH2HiHKqN5zAMA6WWL0nteIkFqF8mu0q&X-Amz-Signature=cc5798f4c6d5625bfad5587ef5eae86a10d7ae481248ff1f4b03f8ea835fde02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVJEQVA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBeHK2x39OIlS%2FZPlizAQUqz2YErG1gG%2FYibgqr0Y9%2FAiASRBusJ%2FiASnypyayQImUfT%2FZi%2BYEwXnHTxcKcMp3kAyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qJjf%2BnfJe2xOO%2FTKtwDwbjVBippM9WnGbkmrzk3rz8zkXWZ8wWj7D6puToVSpDfsY%2FRVHjSEbrcyJUDd77Q27jvLyst7Sw6zcO29IzYwvVSWZ4mk628aXO2%2B4UkPeQ6%2B%2BZVAVinDYCOf38ZyED61L%2BSwzmJSk1EjpqxxYxLpvhaG1qRW1Y6w7G%2B3pHppmmF6UiiSNk%2BCoa9xnXHn5%2BChOpJ%2B6WOWtawfeGm9AIsBbjcY0Oy5B9bj610NpX6r5mPMVmNg6YODPbBasd9Jh9fKHo8deADzqd%2FA%2FFxF%2FarenBE5yKmyc3EH5zspQlcUQcxl3MNWcUFyKhJaIcXioz%2BqoQs43QCa7ZcxjKU7nCY10fmNRsfX9ii1SdePu3MwbVYMQ4lLTicYuhdDv3bt31DlvSZwSYwhlmEkebrLbF7q%2FoI4JlCqvECuh%2F0nX7ZmvjhIK94V%2BM2AXCA6hMiLdS%2B1vbWvH%2BoJE7Iq4N2pQtrkRCK%2B%2BfkhAAmZDRqXZn42Yl4nu86w2dSHSf87lZZXZuRn%2Bd39mYgqJcEleWiNWSwdWzOLl64E2JXmyHeMPg20GeMu6d1XGjXqYQDUXgIG4b7VQ%2FRtneATUNISaNug%2BUEe9tziIuw%2FhPS9H5KBy0FCsVMpAuMwXWXE%2FhCWe0wn5zUyQY6pgGnYUc8IYaPGPauj4Sv30FR0OSAyKJM59C4YTDQdjOr8ZN%2Bs8GnDML9yQr04tvop1PHMGqoXqATlDy5xzAf8hgb49FM8EAqJQVB%2FElbGNzOFldDtyhbd2l0n6uTdslpropR0aHZz%2BjxgPETQW5ifReR%2BVc0JVMD4MuY9oYpkIbXTgpQJ1tdn1qTZWN5g6TLtH2HiHKqN5zAMA6WWL0nteIkFqF8mu0q&X-Amz-Signature=365331418c902d10124c1bd3187b9fbeb8c646ddbd4d5ab810827cc25c579fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


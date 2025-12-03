---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNJC34H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEzhRXImws5JENfHWW%2Bw%2BnS5e%2FA6EZWHa9zcfal7MaDJAiAzMtNmBQZP1cGd3N8nDzXY71KDakX3jsYTNClr%2F1TchCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMU5BfCQ5HtSiGfHTsKtwDpKnSH%2B%2B6X3wTVUTkZxybPWSmr8JVl3aDZzOG4ASuc1QeSmhwuMnLoWA6YqaXhiGqRz97Fe1BpVwubaHLUf9lpW50Yjxve07953kkbEPuxWzhDqYA4MHDVMoXJDCBNfHx%2BR8jpiMuFprJ4UDGscH2imgBW6X%2FSeJjDwKBsvSd8Yx5nkqhVd%2FAmCKwHVsPWrL2AFGLN9mIH0G%2B8JPiBjwYa0UR3PljftP0CtNdVBSTSMS%2BJvwT60EW6tBlVlA3ahqZA6Zmvc0Ve5tbmjwNvdOWNtKWOnlkd%2B5spF38fzJV5iBsuJCZYR2%2B%2B9kFNQQ9Ib1ZzQzmqZ8fgD%2FUvpJVabxON%2BSLIqE7RU86fwHD%2BN3HBvXLiv6XRcEDcHZBYSjvOyUfZf6%2FTx0ACSBMHtojNt9UsfBk82E%2BRiWUYu%2BhhpUOFsPUzPW3xWUq%2BfwhO9A7QX5WAx4140tO08S0tJpBJtnTkeRLlwDY%2BeVrSwy3GUoIcSe490mBmXN1SF2djvnPPNSDz7JsJ0HyusBCl9YYFVvKwCsOdwezub5v%2B8aPal%2FX8Krj4%2B9WkK6Z6CrIMCMmUwuYcWJvS%2BYaDqxfsOK15pk5Xr%2BVWdMBEOOu4VJtQSuceuO77J8ENLK0UWKbxVYwpr3CyQY6pgEAJGLXNx9ycb2bPS6iax2%2FGSY7HCOdnYwkFQjpJauMUgwjj9mIUqlJYlnAjFpo6WRUlaa2QVINFzaH6sFpovvuVxA8oKYwVhaCSA8tD%2FPuTC7GxktGifmtPuKXezN5L85D5Fjm%2BVzmHsy%2FpitLrHkoVzrbj%2BXnFwd09gkPTAN4xOO5ddotMa14mwca1iTuCm3ZKlqNsqr4dZbucfR3zt%2B06CWXKS4L&X-Amz-Signature=f6d72c42ccc7baa63212378c8e51f3b71fa105847516c1d61093f1b44219d126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNJC34H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEzhRXImws5JENfHWW%2Bw%2BnS5e%2FA6EZWHa9zcfal7MaDJAiAzMtNmBQZP1cGd3N8nDzXY71KDakX3jsYTNClr%2F1TchCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMU5BfCQ5HtSiGfHTsKtwDpKnSH%2B%2B6X3wTVUTkZxybPWSmr8JVl3aDZzOG4ASuc1QeSmhwuMnLoWA6YqaXhiGqRz97Fe1BpVwubaHLUf9lpW50Yjxve07953kkbEPuxWzhDqYA4MHDVMoXJDCBNfHx%2BR8jpiMuFprJ4UDGscH2imgBW6X%2FSeJjDwKBsvSd8Yx5nkqhVd%2FAmCKwHVsPWrL2AFGLN9mIH0G%2B8JPiBjwYa0UR3PljftP0CtNdVBSTSMS%2BJvwT60EW6tBlVlA3ahqZA6Zmvc0Ve5tbmjwNvdOWNtKWOnlkd%2B5spF38fzJV5iBsuJCZYR2%2B%2B9kFNQQ9Ib1ZzQzmqZ8fgD%2FUvpJVabxON%2BSLIqE7RU86fwHD%2BN3HBvXLiv6XRcEDcHZBYSjvOyUfZf6%2FTx0ACSBMHtojNt9UsfBk82E%2BRiWUYu%2BhhpUOFsPUzPW3xWUq%2BfwhO9A7QX5WAx4140tO08S0tJpBJtnTkeRLlwDY%2BeVrSwy3GUoIcSe490mBmXN1SF2djvnPPNSDz7JsJ0HyusBCl9YYFVvKwCsOdwezub5v%2B8aPal%2FX8Krj4%2B9WkK6Z6CrIMCMmUwuYcWJvS%2BYaDqxfsOK15pk5Xr%2BVWdMBEOOu4VJtQSuceuO77J8ENLK0UWKbxVYwpr3CyQY6pgEAJGLXNx9ycb2bPS6iax2%2FGSY7HCOdnYwkFQjpJauMUgwjj9mIUqlJYlnAjFpo6WRUlaa2QVINFzaH6sFpovvuVxA8oKYwVhaCSA8tD%2FPuTC7GxktGifmtPuKXezN5L85D5Fjm%2BVzmHsy%2FpitLrHkoVzrbj%2BXnFwd09gkPTAN4xOO5ddotMa14mwca1iTuCm3ZKlqNsqr4dZbucfR3zt%2B06CWXKS4L&X-Amz-Signature=6a3f4a9b700593fd347b2c11a79ace3af95fcb765251fd408b88833a99bd305f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


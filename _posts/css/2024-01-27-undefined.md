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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5AFNEA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICTcBtBQ0JieStFIZ%2B9QgF%2Be5%2B1s4cCHOGg2aGRZtvHjAiEA4ifzHbbw0tzPo%2FwrN5%2B62D0RFhDuX69muV%2BWK7Dch%2FQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLottnFrf%2BdLJlDhICrcAxmqSZQegi3nS2eaUji1TZgKonGoTcd%2FNJQe009SauBF6sXmcEErCRQxcOe3ZAh29lr8ODdLgM45iog1mQ5TmN2YuTCtrHtwyIicIYvPnGf%2FnIc4VEJULa1ePVrX0H3mNaQNrEuZsnEv9fjNr6iDaDT9C6CHmKD493SnhYi1sNsWEswiy238IW7vZESWyExFcFJhTNbrQFiOj1dScKWwsxDJwE62azml62Kp2da6nHoVJkjDKjgJB1a74Jf%2F%2FXk2Ut%2FgR2kv1ka%2BUXR4IurUI0fTlcuyrEtVCnEorfnKJAJdbhgrRNCw3gfu3P8eDD28oTgSJ37LrsnK9jE2N%2BH5cBsm8KqqtDUnYTW5Jei9akeTv23LPdijSOyTKRutKosp3GdQvCDIxzPLQJUbxyNDIyN2qdFOJW4ptSlR%2F%2Bdn9gpPzcsc1q%2BXTZTbLZPvgP8ZOSJi7vvdYD0A2R3zdqdnin%2FuLxRW8vLe2d4gU%2FBPzv%2FvfGEWLzSKKxMUEFq8YIjlV%2FW5cO2p%2ByKSCLv5rVIgrOGjnC259Sn15cjskhawz6%2BFjp9uZqUlu8RNOGZI3NvdfoRWwZWZ%2FwUOF3gOqrWHF943sj89L2WqDDCky5CTyqOxiJDBdyDK%2FhprVncJMJj%2FvckGOqUB5fqK0hG0vWj%2B1nRb9ikTrvutwWdo%2FtNWpkrjluGkzMrZm3ngTEv8B8qEQA2RHg8aMI92NTM0JAkAUTj6PzMgsJ9evrcvjCwEE7eUw63hJk3BdP%2FKrnUrP2r%2BCctLbf5FIpLS7MeZLHdMYEyycuCcBhiaxVmZk0q8YN6kNsTXMcSefDdq7svqEav6X3Pv%2FhJ9qCW%2BfqyxdEAPy%2BVD%2Bjl%2BrY3eHoiX&X-Amz-Signature=9aaf79ba8866d4e27917c55e0c8ca2fc7d95f4facf2c47031c71308c862022e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5AFNEA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICTcBtBQ0JieStFIZ%2B9QgF%2Be5%2B1s4cCHOGg2aGRZtvHjAiEA4ifzHbbw0tzPo%2FwrN5%2B62D0RFhDuX69muV%2BWK7Dch%2FQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLottnFrf%2BdLJlDhICrcAxmqSZQegi3nS2eaUji1TZgKonGoTcd%2FNJQe009SauBF6sXmcEErCRQxcOe3ZAh29lr8ODdLgM45iog1mQ5TmN2YuTCtrHtwyIicIYvPnGf%2FnIc4VEJULa1ePVrX0H3mNaQNrEuZsnEv9fjNr6iDaDT9C6CHmKD493SnhYi1sNsWEswiy238IW7vZESWyExFcFJhTNbrQFiOj1dScKWwsxDJwE62azml62Kp2da6nHoVJkjDKjgJB1a74Jf%2F%2FXk2Ut%2FgR2kv1ka%2BUXR4IurUI0fTlcuyrEtVCnEorfnKJAJdbhgrRNCw3gfu3P8eDD28oTgSJ37LrsnK9jE2N%2BH5cBsm8KqqtDUnYTW5Jei9akeTv23LPdijSOyTKRutKosp3GdQvCDIxzPLQJUbxyNDIyN2qdFOJW4ptSlR%2F%2Bdn9gpPzcsc1q%2BXTZTbLZPvgP8ZOSJi7vvdYD0A2R3zdqdnin%2FuLxRW8vLe2d4gU%2FBPzv%2FvfGEWLzSKKxMUEFq8YIjlV%2FW5cO2p%2ByKSCLv5rVIgrOGjnC259Sn15cjskhawz6%2BFjp9uZqUlu8RNOGZI3NvdfoRWwZWZ%2FwUOF3gOqrWHF943sj89L2WqDDCky5CTyqOxiJDBdyDK%2FhprVncJMJj%2FvckGOqUB5fqK0hG0vWj%2B1nRb9ikTrvutwWdo%2FtNWpkrjluGkzMrZm3ngTEv8B8qEQA2RHg8aMI92NTM0JAkAUTj6PzMgsJ9evrcvjCwEE7eUw63hJk3BdP%2FKrnUrP2r%2BCctLbf5FIpLS7MeZLHdMYEyycuCcBhiaxVmZk0q8YN6kNsTXMcSefDdq7svqEav6X3Pv%2FhJ9qCW%2BfqyxdEAPy%2BVD%2Bjl%2BrY3eHoiX&X-Amz-Signature=360efebc09ab59e60f36195855f54b8cc66acd0b933711fcb577b98d855cf037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


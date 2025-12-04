---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7O2LM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIG5hQ97v7J8osWwCPS%2Fre13iyHtOIjC%2BrNlMU1UClCtlAiAYKTNs8KTwt%2B4uZCZ4QWGc2VJl7xar%2FvoQdckbXkqPUyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMkTUK81V8dQC3hBJvKtwDdAepmlZYsjecBips11%2FPsQY%2F1%2BFxl3ayNyjFeXttZvntTTeyHkW63MwRkUmxxEzl1nVksmxpoNuKtltSKTVyRQDV85un84y8N7B1GFbzlzhVpVgEDMrTL5RFyS3z7JS9Z66c87%2FZqD7rPfjomTBKlow6XGe0nuA8S6pWLFxouBD56fg2ZcGqQJ%2FgxRXKzLggOe1JB1vgiFmwXXEUGacZk6avrOoNpNh%2FCjTJ1N7HzNhXW8wAD3QNCcOOuxX1Dkf9iHn7ceum2YjkZQDvIPLY2dvcEJK7jUjsaJGYjOV9Vi7%2B0bCUpMhZwj%2BW7gcVW0LZh1IMlr82fiKjEwqaEkWWyZ%2B%2BI96cpuBkVeHvzqOCl4kRWts7xsi7tMHDGfVzhUXZRQPAAQRcB5ftJNLfP%2Be%2F5I0aufYyabLAe6aTGmzE96ppfniV630TkY5WmFmuzHpmC3gVfryQcLwAeQBVkngixztASgNut%2B97n%2F1HHka85v4gkOPBhQpVeK2tIHPiZvZ5fMoubs6JQbrMHNm%2FO6gz%2FpwHVuWUza3MntPNY7fOxAKNQBRxCH7OOFYeZXYYm1G0LF9iCieX7d0sIZ2ppGh2PTYrk0sSR0jPvhx8JpduO1oeGTCH2IwPCLkkJ6Aw1OfFyQY6pgGfRn8%2BOz4fW4VyOhFyiyTF7yOwnuGx32dyrzPepS6xczqpShLTsnMelWEmIQ3CD8DSKZA%2BlgXFtriq3SVSznch%2B8qwpzrbeTi4jiagIDDP6Rnb3Qx2hhtgS7RQGwjLXcZ4vDx4s%2BEwCBs31%2BTPqYksFtl8fo234fRn6GexwdJEV11edIL2LeT0eFGZY%2F8ot358LHr7OkK4A6J6WaEgv9ee%2BW%2FH5xV9&X-Amz-Signature=27ecd2b26b35e54c6ad4e424d7a839eee294f579da5cb95ad035306def98e8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7O2LM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIG5hQ97v7J8osWwCPS%2Fre13iyHtOIjC%2BrNlMU1UClCtlAiAYKTNs8KTwt%2B4uZCZ4QWGc2VJl7xar%2FvoQdckbXkqPUyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMkTUK81V8dQC3hBJvKtwDdAepmlZYsjecBips11%2FPsQY%2F1%2BFxl3ayNyjFeXttZvntTTeyHkW63MwRkUmxxEzl1nVksmxpoNuKtltSKTVyRQDV85un84y8N7B1GFbzlzhVpVgEDMrTL5RFyS3z7JS9Z66c87%2FZqD7rPfjomTBKlow6XGe0nuA8S6pWLFxouBD56fg2ZcGqQJ%2FgxRXKzLggOe1JB1vgiFmwXXEUGacZk6avrOoNpNh%2FCjTJ1N7HzNhXW8wAD3QNCcOOuxX1Dkf9iHn7ceum2YjkZQDvIPLY2dvcEJK7jUjsaJGYjOV9Vi7%2B0bCUpMhZwj%2BW7gcVW0LZh1IMlr82fiKjEwqaEkWWyZ%2B%2BI96cpuBkVeHvzqOCl4kRWts7xsi7tMHDGfVzhUXZRQPAAQRcB5ftJNLfP%2Be%2F5I0aufYyabLAe6aTGmzE96ppfniV630TkY5WmFmuzHpmC3gVfryQcLwAeQBVkngixztASgNut%2B97n%2F1HHka85v4gkOPBhQpVeK2tIHPiZvZ5fMoubs6JQbrMHNm%2FO6gz%2FpwHVuWUza3MntPNY7fOxAKNQBRxCH7OOFYeZXYYm1G0LF9iCieX7d0sIZ2ppGh2PTYrk0sSR0jPvhx8JpduO1oeGTCH2IwPCLkkJ6Aw1OfFyQY6pgGfRn8%2BOz4fW4VyOhFyiyTF7yOwnuGx32dyrzPepS6xczqpShLTsnMelWEmIQ3CD8DSKZA%2BlgXFtriq3SVSznch%2B8qwpzrbeTi4jiagIDDP6Rnb3Qx2hhtgS7RQGwjLXcZ4vDx4s%2BEwCBs31%2BTPqYksFtl8fo234fRn6GexwdJEV11edIL2LeT0eFGZY%2F8ot358LHr7OkK4A6J6WaEgv9ee%2BW%2FH5xV9&X-Amz-Signature=997d8a482050e09406c5e380200184c35d6210afd0e5b32de7aced27d0a81f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


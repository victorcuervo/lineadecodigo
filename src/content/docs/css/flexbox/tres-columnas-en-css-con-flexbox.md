---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMJPRJW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDRMl8MHO1%2F4bkY%2FlqtW39PlvK2StrvCg4NsBRRgkOyagIhAMhtie7NajXIRY5PxO4SO1mMpbh2YvuEVtW5cDGcz3%2B4Kv8DCEcQABoMNjM3NDIzMTgzODA1IgyLUBcwdRWGrydr8rUq3AMQRcYT3QzxrDgWMvPIoPl%2BazaJZUyJGZQxGlxlLNb6wQmTOSy2FSAKtfoNeyDIif6WRCIUMS6E44YzoAn7o%2BMartponRVFmnLup92mv3pix4dvN85CyiZiyH%2FgRiqi8q1EBJODy9A%2Bx8UDpdQ1yUQ5ufQPQMCpm6Z4pgHUGSK3m8cTVn3EoNB4XIvDY1dNJxQ8b7wHQwrLrJqoQVnUz5hEjmDUJa2qDSVZ3qDkGvE%2BwDUFxzYJzDOYgt4Oijkw7lOCtZ6w9AT2BEGem3AnhWwQrYz70t%2BG14iAor1HsafdtTlmzVS6mGwB1BVg30sSqhQ%2FWa4LCNi4hh%2ByCW%2F1L16k84I0BVISqUV7XYyyrZIYZCke%2B81DnUFrj4OGVxxCebeibEkJ1NbLhQIb%2FeIAKBwjFUum7Amf%2Fsyhh7%2FUHy%2B547yfL6J1IEJF%2FOhtkfvLI3twMfIb75UbK9Fj0UGHl4%2BsWIR1O6X1%2F%2FOyCaHRPREooYe0xREquGRVvLxZi1oEaI1jUdogWjSm8e3Q7vCE2ZbAWe9NPUQMEZUEiujsxu4fjZKpgLtWt%2B74%2FARCUOvxq79qOXBuM7XDqa6HwMJJJ%2BoPOSvXCPiWOeBmltQYvUpKZaqFJNEG8wWeKpR2ITCKosbJBjqkAbB6L7JLgM8w%2F1yOCdF1lhADQn7PQMJUYowolljiFRFhIC7Kbb5PmENefo34ZUihORecB5qNP0UzjVLJv4bTZ2ZNj2sGmjcUITHUKFLX9KaZ7aeB6N8uiUwqVRFHLuuy7pE2R1165h2dEXSnh8bgMp2YF1CUdFRVW24iFz9MrNENcjSlVRrr37ZwizWGvYz%2FCAy0IZ7wxj7AXQJj%2BtfLsiIuUuje&X-Amz-Signature=213d9fd8a51dfe62cfcff58c881255441d321b1e19bd0efddb9193100ec0616b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMJPRJW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDRMl8MHO1%2F4bkY%2FlqtW39PlvK2StrvCg4NsBRRgkOyagIhAMhtie7NajXIRY5PxO4SO1mMpbh2YvuEVtW5cDGcz3%2B4Kv8DCEcQABoMNjM3NDIzMTgzODA1IgyLUBcwdRWGrydr8rUq3AMQRcYT3QzxrDgWMvPIoPl%2BazaJZUyJGZQxGlxlLNb6wQmTOSy2FSAKtfoNeyDIif6WRCIUMS6E44YzoAn7o%2BMartponRVFmnLup92mv3pix4dvN85CyiZiyH%2FgRiqi8q1EBJODy9A%2Bx8UDpdQ1yUQ5ufQPQMCpm6Z4pgHUGSK3m8cTVn3EoNB4XIvDY1dNJxQ8b7wHQwrLrJqoQVnUz5hEjmDUJa2qDSVZ3qDkGvE%2BwDUFxzYJzDOYgt4Oijkw7lOCtZ6w9AT2BEGem3AnhWwQrYz70t%2BG14iAor1HsafdtTlmzVS6mGwB1BVg30sSqhQ%2FWa4LCNi4hh%2ByCW%2F1L16k84I0BVISqUV7XYyyrZIYZCke%2B81DnUFrj4OGVxxCebeibEkJ1NbLhQIb%2FeIAKBwjFUum7Amf%2Fsyhh7%2FUHy%2B547yfL6J1IEJF%2FOhtkfvLI3twMfIb75UbK9Fj0UGHl4%2BsWIR1O6X1%2F%2FOyCaHRPREooYe0xREquGRVvLxZi1oEaI1jUdogWjSm8e3Q7vCE2ZbAWe9NPUQMEZUEiujsxu4fjZKpgLtWt%2B74%2FARCUOvxq79qOXBuM7XDqa6HwMJJJ%2BoPOSvXCPiWOeBmltQYvUpKZaqFJNEG8wWeKpR2ITCKosbJBjqkAbB6L7JLgM8w%2F1yOCdF1lhADQn7PQMJUYowolljiFRFhIC7Kbb5PmENefo34ZUihORecB5qNP0UzjVLJv4bTZ2ZNj2sGmjcUITHUKFLX9KaZ7aeB6N8uiUwqVRFHLuuy7pE2R1165h2dEXSnh8bgMp2YF1CUdFRVW24iFz9MrNENcjSlVRrr37ZwizWGvYz%2FCAy0IZ7wxj7AXQJj%2BtfLsiIuUuje&X-Amz-Signature=1e84867318cb73bfbc84ae007276b96f59d10be2abad9a3d39cf17f0c266fd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


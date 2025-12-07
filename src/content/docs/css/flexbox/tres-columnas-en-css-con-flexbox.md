---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7YBQ4C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq%2FoZt1dvtqpTuOM2OH0OTuSubCJ1Ks9316%2BH8Z2ng2AiBSl2IUvRGVQilfq6%2BjH30oZ9v5L1lvQBKL%2BNYg6sXIWSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQLlPG%2FbB2xPGAdiHKtwDxKKR6bk1iyyI94u4eTcPODCrBeTbOM4d19cC6DrfZ3Yf4OKpQYl6RwsA0Sh3T0FNDCIYzzvgeTZUQScpCHZJlDvIomnc8h9emswukNH2USWhOX1%2BiV0eqsWHDl07PHCYGtjF4U406Ucz4VcZ3V9W0wvKDxdPn%2Bn%2FWqpNCAiKzGvqWPPZJeAbsGRnYya3S9IHhYcuddXFAXz9nB07NP8YmMgYvQv373CXkWs4Tzh9WcTZlDRJMVxEYd7TuK26N0Yd2c%2BFDqED4hWp09qUcERjX9y1Aul57WryDkeNeu3sIzck4gvSGqvu9b3fhSn%2F9REvJJStUy1cI93%2FSGOqPxSYr6YTfj7MCTWrck3nMdzA%2BZZZIC91vqIAzBRvjSzjThY2d8JjThS8BqFCG%2Brfwk0NYxRIPOqm5OMgD0J4j8oGgpW93KTv5yTXNE9kIBuijT5fxowKEeCl6YSXjpLsq3ltwvqsOD145MsH1uxCLaPJtpRCxYxnFaSDJ7nIITpv1s3hYsbuR7348xjNQDBHI0bvk3inBc4kNFprvhtZHsuwcFMi4eXtYzBxYTU9m8mzQy26vcc4R1x0uf4nKKitJkfBQhA5p%2B02g2sH3%2Br8%2BJkRCPw2C4gs08Z%2BSX%2BCHj4wosfXyQY6pgEGnLlB%2Bn7%2BhIatOVxpqI2%2FeL9CWxJ9N9E%2FAyn%2Fn7nXttWskbKFH63u33SSg37id2cAWpC88NAJa5InMVGeGbzhTE%2Ftz4W5QyCqbw8SpDIA%2FGhSBCHMoxRbmWxgJZyrNW4mC9fjTuCGHkX45qIgkqZn%2FDwXv1X7KkMdVJVJq%2FdgjUu0pFVsOYP6jlP0Qml%2FwHBwPj%2Bm0hJPWGCvz3fwQeYpqhVqLJwY&X-Amz-Signature=79e4f9b95768b4d2c841c5c37c7e8134d30068ae4a60c4e5d0b4f4774196b1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7YBQ4C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq%2FoZt1dvtqpTuOM2OH0OTuSubCJ1Ks9316%2BH8Z2ng2AiBSl2IUvRGVQilfq6%2BjH30oZ9v5L1lvQBKL%2BNYg6sXIWSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQLlPG%2FbB2xPGAdiHKtwDxKKR6bk1iyyI94u4eTcPODCrBeTbOM4d19cC6DrfZ3Yf4OKpQYl6RwsA0Sh3T0FNDCIYzzvgeTZUQScpCHZJlDvIomnc8h9emswukNH2USWhOX1%2BiV0eqsWHDl07PHCYGtjF4U406Ucz4VcZ3V9W0wvKDxdPn%2Bn%2FWqpNCAiKzGvqWPPZJeAbsGRnYya3S9IHhYcuddXFAXz9nB07NP8YmMgYvQv373CXkWs4Tzh9WcTZlDRJMVxEYd7TuK26N0Yd2c%2BFDqED4hWp09qUcERjX9y1Aul57WryDkeNeu3sIzck4gvSGqvu9b3fhSn%2F9REvJJStUy1cI93%2FSGOqPxSYr6YTfj7MCTWrck3nMdzA%2BZZZIC91vqIAzBRvjSzjThY2d8JjThS8BqFCG%2Brfwk0NYxRIPOqm5OMgD0J4j8oGgpW93KTv5yTXNE9kIBuijT5fxowKEeCl6YSXjpLsq3ltwvqsOD145MsH1uxCLaPJtpRCxYxnFaSDJ7nIITpv1s3hYsbuR7348xjNQDBHI0bvk3inBc4kNFprvhtZHsuwcFMi4eXtYzBxYTU9m8mzQy26vcc4R1x0uf4nKKitJkfBQhA5p%2B02g2sH3%2Br8%2BJkRCPw2C4gs08Z%2BSX%2BCHj4wosfXyQY6pgEGnLlB%2Bn7%2BhIatOVxpqI2%2FeL9CWxJ9N9E%2FAyn%2Fn7nXttWskbKFH63u33SSg37id2cAWpC88NAJa5InMVGeGbzhTE%2Ftz4W5QyCqbw8SpDIA%2FGhSBCHMoxRbmWxgJZyrNW4mC9fjTuCGHkX45qIgkqZn%2FDwXv1X7KkMdVJVJq%2FdgjUu0pFVsOYP6jlP0Qml%2FwHBwPj%2Bm0hJPWGCvz3fwQeYpqhVqLJwY&X-Amz-Signature=2d47b56b5b382cacde5afc703b0e4093da2076013031cc446deb4e250159443a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


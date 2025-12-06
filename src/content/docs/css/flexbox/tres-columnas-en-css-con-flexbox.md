---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZ5JTSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcy7L2855Pzs8qjMhAaITSboCj3e6P0uG4zqVDmFADFAiEA%2FypQhQzfpon%2FmUYM%2Fl%2BIybmtGE4dUsw8Bl8vUNq4Dkgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJit%2Be3lNMZ0JpFUACrcAxT7to%2FCQYbX%2FsrB71ggp0wgUjPmlhmfVHrFOKiSDrmqxnldJ%2FfpQwvRV%2Bi%2BuEyvI6FfvC%2BfJI33teCLvJyT6Wrk9hY8ZubctVAF0b2A1d4%2BNs8Occjctu%2Fi%2BeKIgZRbsaZ0OGGWrI3Gfdlmhv2BQboMCdKYcIfI4vKa0gIIbyx8QcnqhH2QchhMg%2FTFRG0epy3f9tcW%2B4Bbb4MSvukLa%2Fuu4DQdf1u%2By3eaK%2FHP3caH9jMg%2FcuyW5N7mZETco%2BPSaeITMSoB9FjHFCMS99ds5EsQ5FU4qdsSaf9E3R9EEJVSI2T4KnaCMAUhmwkOvATyzFo9WGQHueBendF0sQURam%2FYKsaI4jDag8aNP26bPuHYwr3D78oERVLzqW2aEHfJ1%2FEZaOQ339lcxeMS%2FxgifFtJIFJDmNcubZaTxFBmHIsMG2RAFXgVlkyHhuK%2F2U8r6Sk%2B8POq3%2Fs1WSp38VYYmRzDrbPyL4UCdnAqmjBWb3cBesFOyD8Psp7QsV254yxw0K5BCfOQ9Xsv5742mP8j2hTvumcLptoHf%2FVWedVjNi1M%2B7KlkElerV6YQ2To0OdWNNr%2F4FEHliRXIlg4i2FDhNIBUWjx%2FBtwZfoTDRzyFFY%2BJDccPkOB%2BZkK6UMMN%2FdzskGOqUBLA%2FgOxHNHkQeTKpot%2BD7c4Jf6GZ85DFZdbrdhLbv%2F6dk%2FS08rul%2FP%2B465Z43nYyZO7EJDTEL5PYn9yIQvU4nk0VG%2BFx5onr1AJyRpIJW4yKo1Abt7u%2B2r7Q5fLYy8TjIkvlakBK7l1r7TL34KWQxOwSNcwtEHbJxHmKMceh0A0I8XH1ufeNy5SZy2AYpRjFTAaMY%2FLkm8NTVU5l2gwuH1jwkfoal&X-Amz-Signature=9b4d27197da447d77f6995398fb2cd5f85813a8707c1e42c7f456d85000d9a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZ5JTSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcy7L2855Pzs8qjMhAaITSboCj3e6P0uG4zqVDmFADFAiEA%2FypQhQzfpon%2FmUYM%2Fl%2BIybmtGE4dUsw8Bl8vUNq4Dkgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJit%2Be3lNMZ0JpFUACrcAxT7to%2FCQYbX%2FsrB71ggp0wgUjPmlhmfVHrFOKiSDrmqxnldJ%2FfpQwvRV%2Bi%2BuEyvI6FfvC%2BfJI33teCLvJyT6Wrk9hY8ZubctVAF0b2A1d4%2BNs8Occjctu%2Fi%2BeKIgZRbsaZ0OGGWrI3Gfdlmhv2BQboMCdKYcIfI4vKa0gIIbyx8QcnqhH2QchhMg%2FTFRG0epy3f9tcW%2B4Bbb4MSvukLa%2Fuu4DQdf1u%2By3eaK%2FHP3caH9jMg%2FcuyW5N7mZETco%2BPSaeITMSoB9FjHFCMS99ds5EsQ5FU4qdsSaf9E3R9EEJVSI2T4KnaCMAUhmwkOvATyzFo9WGQHueBendF0sQURam%2FYKsaI4jDag8aNP26bPuHYwr3D78oERVLzqW2aEHfJ1%2FEZaOQ339lcxeMS%2FxgifFtJIFJDmNcubZaTxFBmHIsMG2RAFXgVlkyHhuK%2F2U8r6Sk%2B8POq3%2Fs1WSp38VYYmRzDrbPyL4UCdnAqmjBWb3cBesFOyD8Psp7QsV254yxw0K5BCfOQ9Xsv5742mP8j2hTvumcLptoHf%2FVWedVjNi1M%2B7KlkElerV6YQ2To0OdWNNr%2F4FEHliRXIlg4i2FDhNIBUWjx%2FBtwZfoTDRzyFFY%2BJDccPkOB%2BZkK6UMMN%2FdzskGOqUBLA%2FgOxHNHkQeTKpot%2BD7c4Jf6GZ85DFZdbrdhLbv%2F6dk%2FS08rul%2FP%2B465Z43nYyZO7EJDTEL5PYn9yIQvU4nk0VG%2BFx5onr1AJyRpIJW4yKo1Abt7u%2B2r7Q5fLYy8TjIkvlakBK7l1r7TL34KWQxOwSNcwtEHbJxHmKMceh0A0I8XH1ufeNy5SZy2AYpRjFTAaMY%2FLkm8NTVU5l2gwuH1jwkfoal&X-Amz-Signature=9ad9ba323647c10de3e2e50cd26ac232c2d2453a5a2b5df8e10b6fab6cc2ee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


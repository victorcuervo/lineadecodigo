---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ITJHZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJA%2F37aCNVWAeSSr%2FBAh0u5a5U1fnX%2Bz9EJ5MYC198KAIgPn3Wls439UpfrXdUFfzmfZRfAp%2FcmdWJ8KQayEJ%2FREEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOQRGOMtyuBukGniYyrcA6nEAA3nJBmAZBz4cb3NPoWn5w99%2FuczqXn4fM0jVOzBqsB4P5tdsiJjt%2FjhCR%2BnH4L4gwHybAIu8%2BzvA4Z1oZ39kscAjHEkATWcbifgS8DRPNcSRFs%2FpjIvZqLgbhvo5FO%2FJzxNt8YyMWJaqh%2FHNOPLMDlCBu6ZeZQLTH%2FotsUTuiT8TrSQL%2B7CHPWQpxwPxydMvhVNVg2PNvJLIrLCFj0X4%2FB0JJ5DdHL4dHpFpyWwXBuQIiS2C4IdjLWqnUZoE83H5bUltxX5Q6bxhlR8Uj7o5yPHfX3JsR5LZUfEpSUaihqb6fE%2FqBDd1BSRFr0TuMB4hyeUMpadF7UIlMzehKu%2F5LDFTZec2zwrlynbOk0y%2Fu4%2BSfxOBPJf0XEmGpcmwbtrX0U5U3tI1NuskoTgjk8ByPemmNMeVE%2FEVt0Xp%2FHIbT%2FSzjPIih5gpKQL93otmZpDc5%2BjjlpExDi4qDBOY3ZUx1Edw0hDM3rs1WPOKDdZBz0pp2EcJAWht2vfTNewFM%2BhMdxc2lPk88Y3hHb5HgAdNpecpgII9Pb0rUtezASCh0Hx6lx8Ipc7ByI%2BoAXj9AyfsXhIxvIqoLSONWROLrNVWu8jwv%2FI7a%2BQxsw51lKisp2JN0liP2McAiMPMKLrz8kGOqUBshMDhj33N3JVnK%2BT693ZXDDfKWKoISsLUcysenP10Wou4dvrGE%2FhL%2BJ4PFZSIwsFao2EwQUdWA6ciTJJg9irx6cNOq89piXaCoQl04%2B3MHwL7IV0HE99GNWWsfhNnCpQt4jTaWHpGWPPuco1WjLe8ScgFfAqGPQq8e6Btk7Iiak%2FmDX2bOzhRCyYOs1R2tnLv1%2Bh39w0io7T4MtR3ETP5iH9x%2Fu9&X-Amz-Signature=28777312fe8d35d576309573df7937a53d6cd55d45fa10e8eb75b64ca526e796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ITJHZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJA%2F37aCNVWAeSSr%2FBAh0u5a5U1fnX%2Bz9EJ5MYC198KAIgPn3Wls439UpfrXdUFfzmfZRfAp%2FcmdWJ8KQayEJ%2FREEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOQRGOMtyuBukGniYyrcA6nEAA3nJBmAZBz4cb3NPoWn5w99%2FuczqXn4fM0jVOzBqsB4P5tdsiJjt%2FjhCR%2BnH4L4gwHybAIu8%2BzvA4Z1oZ39kscAjHEkATWcbifgS8DRPNcSRFs%2FpjIvZqLgbhvo5FO%2FJzxNt8YyMWJaqh%2FHNOPLMDlCBu6ZeZQLTH%2FotsUTuiT8TrSQL%2B7CHPWQpxwPxydMvhVNVg2PNvJLIrLCFj0X4%2FB0JJ5DdHL4dHpFpyWwXBuQIiS2C4IdjLWqnUZoE83H5bUltxX5Q6bxhlR8Uj7o5yPHfX3JsR5LZUfEpSUaihqb6fE%2FqBDd1BSRFr0TuMB4hyeUMpadF7UIlMzehKu%2F5LDFTZec2zwrlynbOk0y%2Fu4%2BSfxOBPJf0XEmGpcmwbtrX0U5U3tI1NuskoTgjk8ByPemmNMeVE%2FEVt0Xp%2FHIbT%2FSzjPIih5gpKQL93otmZpDc5%2BjjlpExDi4qDBOY3ZUx1Edw0hDM3rs1WPOKDdZBz0pp2EcJAWht2vfTNewFM%2BhMdxc2lPk88Y3hHb5HgAdNpecpgII9Pb0rUtezASCh0Hx6lx8Ipc7ByI%2BoAXj9AyfsXhIxvIqoLSONWROLrNVWu8jwv%2FI7a%2BQxsw51lKisp2JN0liP2McAiMPMKLrz8kGOqUBshMDhj33N3JVnK%2BT693ZXDDfKWKoISsLUcysenP10Wou4dvrGE%2FhL%2BJ4PFZSIwsFao2EwQUdWA6ciTJJg9irx6cNOq89piXaCoQl04%2B3MHwL7IV0HE99GNWWsfhNnCpQt4jTaWHpGWPPuco1WjLe8ScgFfAqGPQq8e6Btk7Iiak%2FmDX2bOzhRCyYOs1R2tnLv1%2Bh39w0io7T4MtR3ETP5iH9x%2Fu9&X-Amz-Signature=2b5ac21d3272408c654d23b29aadf092fa086f6c10f4ae7c7e6b8493b60b4ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


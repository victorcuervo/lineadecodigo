---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKIIJ57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkAE7Rmdl7bBOc4VuKiDNYkgac1J880BhYp7UeRvMGNAiEAzggG%2FzldUjSrcdcxD5A5WoFfKVwQCBQYncWZ5vGQvDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWPC7%2BnPrVGZvJ%2FsSrcA%2F9WucLuU2rpaLh8APFD61qKzfVsPrqnptuH1trzB2uPqGFlHACh2JxXI5%2F071PuCIsGX1%2F9QBoHMsUTDJ5JV9n1hdzmRZweFetZC1kQFZVX93hvu09GObJKc80Pps9R4KGGoejtTGnxsNLXYyf1UGGoSkleRrONR3Twkc%2ByZdg%2FUICobCY8zvVum2zYOMCditodq4c5GL71x%2BZHnejydJHWmO7K7PaA3VMmJ80aBCeXHBYHHqQdOtby70brCrhFdsdV%2BXTuLyASFLy94pnKzx598rCGmSoz%2FSV4O846W1%2FrnW%2BMcBZAy26s8V0AKYUgFPGZ19IYMwsV%2BukaCes9oieqiW%2FAAbCbPmKfAE8BKiJgKh%2BWXu6DIrMjDVz83p6TqMYLXHVBI8VQm3zz5gafpX3xwzSrOYLy4Zr2u4glld%2FGoUsC3R%2FNcVSIyCyaz1U2CXoIcfW0s0kkVu5vDXM2ZdX3e%2BCGcz9yIkauKmO73Y3vT5RzzjI1QEeAzaMC1Q37q41Rlgbt3SoDSVY1MV5G8eOd8CHZafzc1A0JhmZ5RjqK40ECn%2FVnAo1Uzbtv7nZ6cjOYP6NVKti37PTarNRfTq0ZkvRjeen%2BRGXHq42VD969TvB%2F0sngIcwSH6%2BpMMiZ1ckGOqUBmFr95im%2FqbFbwSQvATNxDMSDZr540QThp1VpMSJzRSb9J%2FmAn7n8K%2B3ZQMfPdw0OFwEiLIUQH0ZRHgPUCuNo%2BfKr7%2B%2FTzbVWRQzYHS4nHMoUV21I1ZRmYUCs9dVYs%2FkVpzSEqNJs8ayUZz83v4sFSf0Ptt1hcWBHu7XA8mUIU8rlEt17JIaTmGN2HxBk%2BVtwfVD5HFEFyMqizqV2z1r1YXnQ4jrE&X-Amz-Signature=4bd928c03a14b4cc468c3a01333fad0a692f812c56a0e5b4151f3ea92b583f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKIIJ57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkAE7Rmdl7bBOc4VuKiDNYkgac1J880BhYp7UeRvMGNAiEAzggG%2FzldUjSrcdcxD5A5WoFfKVwQCBQYncWZ5vGQvDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWPC7%2BnPrVGZvJ%2FsSrcA%2F9WucLuU2rpaLh8APFD61qKzfVsPrqnptuH1trzB2uPqGFlHACh2JxXI5%2F071PuCIsGX1%2F9QBoHMsUTDJ5JV9n1hdzmRZweFetZC1kQFZVX93hvu09GObJKc80Pps9R4KGGoejtTGnxsNLXYyf1UGGoSkleRrONR3Twkc%2ByZdg%2FUICobCY8zvVum2zYOMCditodq4c5GL71x%2BZHnejydJHWmO7K7PaA3VMmJ80aBCeXHBYHHqQdOtby70brCrhFdsdV%2BXTuLyASFLy94pnKzx598rCGmSoz%2FSV4O846W1%2FrnW%2BMcBZAy26s8V0AKYUgFPGZ19IYMwsV%2BukaCes9oieqiW%2FAAbCbPmKfAE8BKiJgKh%2BWXu6DIrMjDVz83p6TqMYLXHVBI8VQm3zz5gafpX3xwzSrOYLy4Zr2u4glld%2FGoUsC3R%2FNcVSIyCyaz1U2CXoIcfW0s0kkVu5vDXM2ZdX3e%2BCGcz9yIkauKmO73Y3vT5RzzjI1QEeAzaMC1Q37q41Rlgbt3SoDSVY1MV5G8eOd8CHZafzc1A0JhmZ5RjqK40ECn%2FVnAo1Uzbtv7nZ6cjOYP6NVKti37PTarNRfTq0ZkvRjeen%2BRGXHq42VD969TvB%2F0sngIcwSH6%2BpMMiZ1ckGOqUBmFr95im%2FqbFbwSQvATNxDMSDZr540QThp1VpMSJzRSb9J%2FmAn7n8K%2B3ZQMfPdw0OFwEiLIUQH0ZRHgPUCuNo%2BfKr7%2B%2FTzbVWRQzYHS4nHMoUV21I1ZRmYUCs9dVYs%2FkVpzSEqNJs8ayUZz83v4sFSf0Ptt1hcWBHu7XA8mUIU8rlEt17JIaTmGN2HxBk%2BVtwfVD5HFEFyMqizqV2z1r1YXnQ4jrE&X-Amz-Signature=6f05fb0d3ed0ad05825e2d591b00f1645825c4a07ab05e1af3ce6a5ff5897148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


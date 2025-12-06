---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMI5ISW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeX4v34bqvPup7wdh%2BcrUxs3GDsu5DOkNGYpOibzUOgQIhAOun0txHetJKciJ8a0tph3zQxlfIS6BIPtbRQULgU3bWKv8DCHIQABoMNjM3NDIzMTgzODA1IgyrVshb2c6KzzX2clAq3AMgi83RTTa3o8ZzfW0kPjOov5EtCQm9vZbiQMKZMZlK3FzgoqXpgSqicwmNscnp0X8wliGSNYY8YvIRg7nnPE8qz7fTxSNSX8BP1zZ2DUFQ2e5epCtHzLqYV8t5ZaN16zoG%2FYj5hlHWIZw3TW5usHWP8jSWPhSJsQ82DlI4Ip6RidFC%2FoIvQm7x3Cfp9a1L4E141eClBpn6QrbXY6oopDR5Im9KNJtyqitVkfHMkSvhDKXrkVCWmcZdROADPoZt2kNKnOHkzWUgpTwBgaf19rJjOJ4obZRxqX6r8BQGgEbK%2Foun8Uz%2Bq5d4UGbxIcYW5LZx7JZMJEGMr7FLeIiHzm9C%2Fo4e7%2BYctM1z9o%2FJTpx%2B5xYxsEsVvYM18bTLUl%2FLZZiT8VDrjc%2BI5e%2B8hspKyeG%2FJRlg%2FyRSxRnTCU9l%2B38cv7AIr2hfVbWy4QnFHJhPM3gqrEFSpotzbM3slOTyBTUfUJ4uxF7rCpGr7sRq87L3jCfe2V%2FHSKZkiPH0Nsc3JJ4ISAROZJPXqA%2B9678ovIqkswXOaCoVMApRw8RP1iOmEhbaZRL%2FEyHKKBDfc1jygqDshFEOkDvdvvWy9x04DtOzmVfQYNNdWCMI9flxiYEYQtBk7uvTCvirrHcvJTD96s%2FJBjqkASxGeYoBE2zs3f5j0mn9MG7YDG873cEuF5NDSX3sbVk31bsj0Si9%2FDLY45EgivrfwmJdRCADsGQvjLVenJ31NlP5TTQOsaOsCfxUX46riY3Wvb%2FrhWgmq25AUkekp6rptzMR%2F4WnhdY02HwDUtLbHpL4jHOP8%2FODr0m4RrrPbCejRxBQuYb1ZArfkV4nsV4xi8UgYmpTuTW%2FKmfSUjB5fnGTtrT1&X-Amz-Signature=065645ce35521aab9efbf878d0585c9170fdadd9bd176110ce8362bf47598fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMI5ISW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeX4v34bqvPup7wdh%2BcrUxs3GDsu5DOkNGYpOibzUOgQIhAOun0txHetJKciJ8a0tph3zQxlfIS6BIPtbRQULgU3bWKv8DCHIQABoMNjM3NDIzMTgzODA1IgyrVshb2c6KzzX2clAq3AMgi83RTTa3o8ZzfW0kPjOov5EtCQm9vZbiQMKZMZlK3FzgoqXpgSqicwmNscnp0X8wliGSNYY8YvIRg7nnPE8qz7fTxSNSX8BP1zZ2DUFQ2e5epCtHzLqYV8t5ZaN16zoG%2FYj5hlHWIZw3TW5usHWP8jSWPhSJsQ82DlI4Ip6RidFC%2FoIvQm7x3Cfp9a1L4E141eClBpn6QrbXY6oopDR5Im9KNJtyqitVkfHMkSvhDKXrkVCWmcZdROADPoZt2kNKnOHkzWUgpTwBgaf19rJjOJ4obZRxqX6r8BQGgEbK%2Foun8Uz%2Bq5d4UGbxIcYW5LZx7JZMJEGMr7FLeIiHzm9C%2Fo4e7%2BYctM1z9o%2FJTpx%2B5xYxsEsVvYM18bTLUl%2FLZZiT8VDrjc%2BI5e%2B8hspKyeG%2FJRlg%2FyRSxRnTCU9l%2B38cv7AIr2hfVbWy4QnFHJhPM3gqrEFSpotzbM3slOTyBTUfUJ4uxF7rCpGr7sRq87L3jCfe2V%2FHSKZkiPH0Nsc3JJ4ISAROZJPXqA%2B9678ovIqkswXOaCoVMApRw8RP1iOmEhbaZRL%2FEyHKKBDfc1jygqDshFEOkDvdvvWy9x04DtOzmVfQYNNdWCMI9flxiYEYQtBk7uvTCvirrHcvJTD96s%2FJBjqkASxGeYoBE2zs3f5j0mn9MG7YDG873cEuF5NDSX3sbVk31bsj0Si9%2FDLY45EgivrfwmJdRCADsGQvjLVenJ31NlP5TTQOsaOsCfxUX46riY3Wvb%2FrhWgmq25AUkekp6rptzMR%2F4WnhdY02HwDUtLbHpL4jHOP8%2FODr0m4RrrPbCejRxBQuYb1ZArfkV4nsV4xi8UgYmpTuTW%2FKmfSUjB5fnGTtrT1&X-Amz-Signature=18faa09b220e040714817f504e330cced47a975ffb8500f0eaf42ebc191469ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


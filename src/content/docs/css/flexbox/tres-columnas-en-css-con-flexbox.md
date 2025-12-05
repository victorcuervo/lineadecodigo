---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRYJYOK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GG7hcYxRw6El0dKZtX6ed1XRspgIV%2FdQU3SHNbpH%2FQIhAPFjQTFxBoR8O7ROfP9qSphny3e2CDMx7tUP3QwARDYQKv8DCGEQABoMNjM3NDIzMTgzODA1IgzNx5I2qXJv9tB%2Bw7Aq3AM%2BjAk0X%2BOqr60tOEELgRc3FgODZdRtDIlvcty2kiOWl1EP0zDUTXvEz5VovAjYIOECB7zy7ATVS8wrg0NutHZ8CXHR4UVA9ClxSoKdIk2cyeEga89VrSXD7%2BjLDsQrYRvzoc8lUrkACzKTBanrw1MhkbY%2Fj47llDTCNmHgszw80bDYTyEvPcGIs76gAW%2BtI4OGJKLsndWZy%2FZsTvWpAkTUkzZZvD0bfyntW37gm8lg7GvT4d5SNkIIjWkrle5k0MEkxdvhRWi1p0k7aeltlFUfVST7xfxQ%2B8J3Ocy4A2iK%2F7jwHvb5jBO6cQYBd9Kp%2Fq5FETHrvoqv8UAL%2BgkZpGPmU5Q2K1kL2covljimta1ums7iCsKEZgyykH%2FWqwDQ6UDUeVJkv4Vtzlom7KvB8fWB8anINeJCz%2FFZfAVnyKvd%2FTpJvmi1yAYy2VyaNg2dgMZ1G5GW%2F6pYKXqXs95yU995hOWhBl9Nb%2BKoow8AAXVpSJSYpsiVZz8l71VVvkHflA0jAb8kAxNH7pr078p5Y4509qfXXL5QMOJLKDMYFh3xrenVPaSdnctXc9wf3%2Bv6iI4qZ2L9xdjqaq2KmbMONMfr8n18R6ChFq5XjPwZempW%2BsL1hBPr5Q6F1OokkTCS%2BMvJBjqkATCsKMCc3KTDxp7ZGaphFySr%2FiVIUXy4akBF%2Bq%2FQyvpiVix848Ij7e6RRKNhxIWq0%2BYlJA0PS0SEWbnBji3jbZlePfuUwVNnKW12aNSUQpKwxR1c6qHnizYWNUx9%2FPHl%2BsKFGiO2wLrP1ATpQeW1RDYgx%2F%2FfH41hBUavrWwlzLx6tRQVpXJRYsAJs%2BLZWni28SC4ZbAqQcg4vcKpdatUpiLJlRTt&X-Amz-Signature=30488488429f3edf45e075b8fdc615d0f74d68af4f4389cd2614fb34e5cfe41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRYJYOK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GG7hcYxRw6El0dKZtX6ed1XRspgIV%2FdQU3SHNbpH%2FQIhAPFjQTFxBoR8O7ROfP9qSphny3e2CDMx7tUP3QwARDYQKv8DCGEQABoMNjM3NDIzMTgzODA1IgzNx5I2qXJv9tB%2Bw7Aq3AM%2BjAk0X%2BOqr60tOEELgRc3FgODZdRtDIlvcty2kiOWl1EP0zDUTXvEz5VovAjYIOECB7zy7ATVS8wrg0NutHZ8CXHR4UVA9ClxSoKdIk2cyeEga89VrSXD7%2BjLDsQrYRvzoc8lUrkACzKTBanrw1MhkbY%2Fj47llDTCNmHgszw80bDYTyEvPcGIs76gAW%2BtI4OGJKLsndWZy%2FZsTvWpAkTUkzZZvD0bfyntW37gm8lg7GvT4d5SNkIIjWkrle5k0MEkxdvhRWi1p0k7aeltlFUfVST7xfxQ%2B8J3Ocy4A2iK%2F7jwHvb5jBO6cQYBd9Kp%2Fq5FETHrvoqv8UAL%2BgkZpGPmU5Q2K1kL2covljimta1ums7iCsKEZgyykH%2FWqwDQ6UDUeVJkv4Vtzlom7KvB8fWB8anINeJCz%2FFZfAVnyKvd%2FTpJvmi1yAYy2VyaNg2dgMZ1G5GW%2F6pYKXqXs95yU995hOWhBl9Nb%2BKoow8AAXVpSJSYpsiVZz8l71VVvkHflA0jAb8kAxNH7pr078p5Y4509qfXXL5QMOJLKDMYFh3xrenVPaSdnctXc9wf3%2Bv6iI4qZ2L9xdjqaq2KmbMONMfr8n18R6ChFq5XjPwZempW%2BsL1hBPr5Q6F1OokkTCS%2BMvJBjqkATCsKMCc3KTDxp7ZGaphFySr%2FiVIUXy4akBF%2Bq%2FQyvpiVix848Ij7e6RRKNhxIWq0%2BYlJA0PS0SEWbnBji3jbZlePfuUwVNnKW12aNSUQpKwxR1c6qHnizYWNUx9%2FPHl%2BsKFGiO2wLrP1ATpQeW1RDYgx%2F%2FfH41hBUavrWwlzLx6tRQVpXJRYsAJs%2BLZWni28SC4ZbAqQcg4vcKpdatUpiLJlRTt&X-Amz-Signature=e16c5cf110b587c4fa60b25228a239990aace66c9ed82316bb366308a27357c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


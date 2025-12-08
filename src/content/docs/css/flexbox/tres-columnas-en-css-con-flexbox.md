---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDRD3J4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjKrFKoP3h%2FVwzRCdHR%2BISj4r6D9kDnwZqipqiX306xAIhAKicAVkWnVpqhFGocXmSGcWY3G1tMFdx8qyKFxS5bOwCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZPfaJIVKQVUY%2FYNAq3ANd1yuPFTLf6fqu%2Beuupn47D6e0E1gxn2jRumJg9d4r3hikihjX%2FzUX6uGUoWwaSVrbNiOe0sRR0VYrWgiFAcRfOM5C6VarSV6q5sAn6q4EthLErWb%2Byz1B28qWSn0IK7zAA08BYc1eaPEWjP8V1s4FyUozJ36X%2F4Iuuwutb%2Fairp9Fct%2FPSu0nx7BrKhzAJXehs594ZMQX54Q4ie%2FPO%2BzwPqHmD8TqXEgjKosqbZGqB1rGGdPSawzscBqseBZpbJdg7KXJyKleUZDJFBE%2F6PX6OJMwVWpOMgmnGZdB5PLjPdONuxD528b8GUkb0Xzx7kmJjiDNmRs2HNkcH2zQpZnFSvpHO7F5YiljX%2B6RSYlXs5alqAMZkWbs6vyl7%2FlRP8NAtWPxq1hUP5bNtttto%2FFQbcoaALQkUHb1p%2B4egqTfMaHPxt4mdWlrGQGP1x44YQcPFrq2bPzMGMOC5iA9IflRzboORfz5eBIbO7zE%2Fm7odPlVPP6AnCInORCeJyr%2FJWrHFkwwCuofBgM1gvSRRNe%2F9spgoqhbB7f5suGOHPRlmrbM4yUxO71ji%2Bx9kNvPgVnEkInISnP5qzbe%2FsKV59apFKf57%2FzePkxuJ08VvYecruz7A2SXnxLcG2%2F6fzDYodjJBjqkAeFLFEGdgE%2B5vjMRWLBUT8jCr0SX%2BDuAhkYddl9qnc%2FJ%2FrmVanyuXgnVvh8ozc3m8FxI%2BgPC40xmgvAsYpljFr%2Bmru4pVBNNFL2QJ3vWglw1h9jrnRCFb0Bd6mL8b9HOD2e4UhFHx6mjLAuWForIufZ%2BQh00%2BxYNTfq32QbCBG18lODuNKAJo%2B4UtVttEQXg%2FIrQH8I9%2FxwKnK2JQpAph701lSP2&X-Amz-Signature=ef6ca1116e8cb1609fabae9bf870374f75773a9cde3524802f68db5fda85ec27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDRD3J4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjKrFKoP3h%2FVwzRCdHR%2BISj4r6D9kDnwZqipqiX306xAIhAKicAVkWnVpqhFGocXmSGcWY3G1tMFdx8qyKFxS5bOwCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZPfaJIVKQVUY%2FYNAq3ANd1yuPFTLf6fqu%2Beuupn47D6e0E1gxn2jRumJg9d4r3hikihjX%2FzUX6uGUoWwaSVrbNiOe0sRR0VYrWgiFAcRfOM5C6VarSV6q5sAn6q4EthLErWb%2Byz1B28qWSn0IK7zAA08BYc1eaPEWjP8V1s4FyUozJ36X%2F4Iuuwutb%2Fairp9Fct%2FPSu0nx7BrKhzAJXehs594ZMQX54Q4ie%2FPO%2BzwPqHmD8TqXEgjKosqbZGqB1rGGdPSawzscBqseBZpbJdg7KXJyKleUZDJFBE%2F6PX6OJMwVWpOMgmnGZdB5PLjPdONuxD528b8GUkb0Xzx7kmJjiDNmRs2HNkcH2zQpZnFSvpHO7F5YiljX%2B6RSYlXs5alqAMZkWbs6vyl7%2FlRP8NAtWPxq1hUP5bNtttto%2FFQbcoaALQkUHb1p%2B4egqTfMaHPxt4mdWlrGQGP1x44YQcPFrq2bPzMGMOC5iA9IflRzboORfz5eBIbO7zE%2Fm7odPlVPP6AnCInORCeJyr%2FJWrHFkwwCuofBgM1gvSRRNe%2F9spgoqhbB7f5suGOHPRlmrbM4yUxO71ji%2Bx9kNvPgVnEkInISnP5qzbe%2FsKV59apFKf57%2FzePkxuJ08VvYecruz7A2SXnxLcG2%2F6fzDYodjJBjqkAeFLFEGdgE%2B5vjMRWLBUT8jCr0SX%2BDuAhkYddl9qnc%2FJ%2FrmVanyuXgnVvh8ozc3m8FxI%2BgPC40xmgvAsYpljFr%2Bmru4pVBNNFL2QJ3vWglw1h9jrnRCFb0Bd6mL8b9HOD2e4UhFHx6mjLAuWForIufZ%2BQh00%2BxYNTfq32QbCBG18lODuNKAJo%2B4UtVttEQXg%2FIrQH8I9%2FxwKnK2JQpAph701lSP2&X-Amz-Signature=044e4350f40521e92a5dd56639111c37b65698be5fed5fa77956bc77c6170b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


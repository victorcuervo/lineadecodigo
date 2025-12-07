---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHDUBWKR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfFzYXlyxzcRg6jTHEB4r%2FMSFkx3FzAOEE5BNfEaxnTAiEAnlrIVR8JAQonTYVOTTLoOGxqGURIoVzyHPi08%2BrV4dYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8rlg%2BYTsRBedtAAircA4FKZHMO43WGRkvEb%2FlMvx4Lz%2F6FJpYLMj5J0whb8FczSHia6R3ua6jZuY8Ewoot3D51qkSCx4roi7z6B8OZgG5SXI%2BahzbA4gvNJA5TyC1jUzNiwtKl%2Bvwb3LL%2BJgu%2BDsEx80MrzpIJcvfCfpO4vOKI9X4R6bISn%2BCfHtCe5Nvt5zrS%2B2WB2rsgLxI%2FETVwS6LKAPci3qYLo%2FEfFSrLbFwRUCNREkoZu%2BHIKyYSfviZxLGSiY2POVz7VkA0echNGAM71VlxEtYJKGBRsV2D5miGZ5oACFCq74DHBMgmuqJYyesfUBnudc9r4uZ5SUQvgHt6JWCdqrRrRsSvFwHKujMpbL%2FX3YbLXNkEtfTS4QyzSs6FxwJqGMtEqb6nzuHAG7Eg3kz%2F6JvH7lrvSKkqSzTLoAjT0qAQQqLSx6niiMHuHn%2F65NbpJ1fhXCnHWQVNPZuu%2BW1HWyejTHAucC9gb%2F4K9Wi9U626YSkuvQt9TkOrBL3UHjoVblnd6sK5SH8JW0frWvdY4le85TkPoE8UPScbIOaZ4BviUZtfqfS3oLqrRicgdd7g3b%2B4BYFTXiaY0IbMGWWcs1A8eQY%2Fhza4R7bhuUWcbrN%2FjHYlbJDfNiTNI6hQANOrfBU3CSS%2FMMS41skGOqUBN3Y3tRl5kAJjH%2BquIdHAy2ETT9NaAM1Y7PVnU%2BeM22uG6m5OufA05PfQY7kXpxQzwfYND11HlG0HI7jCvA6Gx7jyLSpLc4lU13L3qNeUzc%2FU4R5mjhcrPiNVfVVS%2FSy%2FFc2QjRnXQM7yKxMvawJa%2FVegpIwtgoqx1TEc4peJuMbRJlLbMCNRn%2FylWoiqty5NGbew55a4gK0VFySSdetJVGPMo1vp&X-Amz-Signature=273000ddc625ffc8b150cd98559dbd1bac6243e89a0f35d247feb71cef0a5bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHDUBWKR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfFzYXlyxzcRg6jTHEB4r%2FMSFkx3FzAOEE5BNfEaxnTAiEAnlrIVR8JAQonTYVOTTLoOGxqGURIoVzyHPi08%2BrV4dYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8rlg%2BYTsRBedtAAircA4FKZHMO43WGRkvEb%2FlMvx4Lz%2F6FJpYLMj5J0whb8FczSHia6R3ua6jZuY8Ewoot3D51qkSCx4roi7z6B8OZgG5SXI%2BahzbA4gvNJA5TyC1jUzNiwtKl%2Bvwb3LL%2BJgu%2BDsEx80MrzpIJcvfCfpO4vOKI9X4R6bISn%2BCfHtCe5Nvt5zrS%2B2WB2rsgLxI%2FETVwS6LKAPci3qYLo%2FEfFSrLbFwRUCNREkoZu%2BHIKyYSfviZxLGSiY2POVz7VkA0echNGAM71VlxEtYJKGBRsV2D5miGZ5oACFCq74DHBMgmuqJYyesfUBnudc9r4uZ5SUQvgHt6JWCdqrRrRsSvFwHKujMpbL%2FX3YbLXNkEtfTS4QyzSs6FxwJqGMtEqb6nzuHAG7Eg3kz%2F6JvH7lrvSKkqSzTLoAjT0qAQQqLSx6niiMHuHn%2F65NbpJ1fhXCnHWQVNPZuu%2BW1HWyejTHAucC9gb%2F4K9Wi9U626YSkuvQt9TkOrBL3UHjoVblnd6sK5SH8JW0frWvdY4le85TkPoE8UPScbIOaZ4BviUZtfqfS3oLqrRicgdd7g3b%2B4BYFTXiaY0IbMGWWcs1A8eQY%2Fhza4R7bhuUWcbrN%2FjHYlbJDfNiTNI6hQANOrfBU3CSS%2FMMS41skGOqUBN3Y3tRl5kAJjH%2BquIdHAy2ETT9NaAM1Y7PVnU%2BeM22uG6m5OufA05PfQY7kXpxQzwfYND11HlG0HI7jCvA6Gx7jyLSpLc4lU13L3qNeUzc%2FU4R5mjhcrPiNVfVVS%2FSy%2FFc2QjRnXQM7yKxMvawJa%2FVegpIwtgoqx1TEc4peJuMbRJlLbMCNRn%2FylWoiqty5NGbew55a4gK0VFySSdetJVGPMo1vp&X-Amz-Signature=48c861694b453d23d8fbce067dc1a5296e17b46d4a3c87d12f28855ec1a54a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


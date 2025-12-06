---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CVIFDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc%2F1apiJgqco%2Fhzuv4oSjIOVfUc2275IMHf2JzQ1CclwIhANk0kS5wr3%2BsnDr9AaMrSW4kqxdg9nn9SDd9mqE76fZpKv8DCHMQABoMNjM3NDIzMTgzODA1IgyPuW69u5fOIwMBnYoq3APRbFXnfRkq9Hw5uGuF1oq%2BV3afDhnPqNAkCv6j8rJpNziw45pv36CgVWSnfVfe8%2BB163D0T6kdzdysgljdY7HP53GojieIPjXTdk%2FXvIO6i444DxUPMi8GWgUOAQZwXSfOWPgcMaZtaVM4niJtR4u4IJL7y%2B4FYsnrFLSjRJEH5AEL3yIJ%2BNm75AywdksbVaDj5wN70w82PPgP0SAQqEURSGwx4Bvp3w%2B4tA1HMSe3g8z6WVH0vBSaF3mlpLmTc1%2FBAGDdh6fNMuCTgIP%2BTJth5%2FLUk4qOuEsH2lPBW3XucMVa7Q7i46XTX3smzfEcUT%2BAlsjuG8mS6SS5ZKVc1iIts3nN6JVygv2C9TMe3eK3DZqVYjA8YLBu6NTwkXqNS2ea0ebjbKGXL1jpnGNCncf%2BrOJAeoH2GX%2Fg1fBtwpTbjKyRJQhrfFd3ssLepWwPe8Tg6RcZBPUH%2BnrSm8%2B4Aai1dXQ8KCHUT%2B8YQakcPSn1tbVrrbzrIPoYG5h0lOn24P0cur%2FcXevQXy6g36WVs5hi7UV%2BQRCih%2F01E%2F16BBjCCDeSgJ8wNugOmL9MsVSt7Ru0lXDP80nrwQOkVyDkQPSIFoLpfPdtset7EeGd71yp6jrnY%2FcMYnQrSuS4kzD168%2FJBjqkAREYt%2F43cO5mOJEbzSMlTCcaKOFKkQS9AjkJiVFchbahjw%2BjYt3ETn1SgT63ZBlj1tjBO5FyvdKE8w%2BkhGEo4v86S6RKrUcnnQ%2Bpwx9u0hD6ygs0NrSVvEEbcd%2Fwrsckt3i2W3BBPvRyUY961oJHfbavOmot5UmlZCCD0rezGtD5MjPREaAm0HYXW1fblGNWOzGA0Pj7uiT6nUfQyklVRIJekaXD&X-Amz-Signature=1a903032d45c93af1596c674728cd3ee16887b72725e95d184fb0ac92ef1c1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CVIFDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc%2F1apiJgqco%2Fhzuv4oSjIOVfUc2275IMHf2JzQ1CclwIhANk0kS5wr3%2BsnDr9AaMrSW4kqxdg9nn9SDd9mqE76fZpKv8DCHMQABoMNjM3NDIzMTgzODA1IgyPuW69u5fOIwMBnYoq3APRbFXnfRkq9Hw5uGuF1oq%2BV3afDhnPqNAkCv6j8rJpNziw45pv36CgVWSnfVfe8%2BB163D0T6kdzdysgljdY7HP53GojieIPjXTdk%2FXvIO6i444DxUPMi8GWgUOAQZwXSfOWPgcMaZtaVM4niJtR4u4IJL7y%2B4FYsnrFLSjRJEH5AEL3yIJ%2BNm75AywdksbVaDj5wN70w82PPgP0SAQqEURSGwx4Bvp3w%2B4tA1HMSe3g8z6WVH0vBSaF3mlpLmTc1%2FBAGDdh6fNMuCTgIP%2BTJth5%2FLUk4qOuEsH2lPBW3XucMVa7Q7i46XTX3smzfEcUT%2BAlsjuG8mS6SS5ZKVc1iIts3nN6JVygv2C9TMe3eK3DZqVYjA8YLBu6NTwkXqNS2ea0ebjbKGXL1jpnGNCncf%2BrOJAeoH2GX%2Fg1fBtwpTbjKyRJQhrfFd3ssLepWwPe8Tg6RcZBPUH%2BnrSm8%2B4Aai1dXQ8KCHUT%2B8YQakcPSn1tbVrrbzrIPoYG5h0lOn24P0cur%2FcXevQXy6g36WVs5hi7UV%2BQRCih%2F01E%2F16BBjCCDeSgJ8wNugOmL9MsVSt7Ru0lXDP80nrwQOkVyDkQPSIFoLpfPdtset7EeGd71yp6jrnY%2FcMYnQrSuS4kzD168%2FJBjqkAREYt%2F43cO5mOJEbzSMlTCcaKOFKkQS9AjkJiVFchbahjw%2BjYt3ETn1SgT63ZBlj1tjBO5FyvdKE8w%2BkhGEo4v86S6RKrUcnnQ%2Bpwx9u0hD6ygs0NrSVvEEbcd%2Fwrsckt3i2W3BBPvRyUY961oJHfbavOmot5UmlZCCD0rezGtD5MjPREaAm0HYXW1fblGNWOzGA0Pj7uiT6nUfQyklVRIJekaXD&X-Amz-Signature=31c50ebbe150c5b37f7a7f3d1eb023e775b7e09e2720b499a31b356f5c2afab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGWQ3LI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0LPf4ZhS5pB6bi126Z2vwANzSdOkNG6xNy2GmkfSTbQIhAMlBsarESicasTkuN94i1nM72j2cmcZh%2FtlfULsvLBWoKv8DCGEQABoMNjM3NDIzMTgzODA1IgzuirXu3GYu8psm0SUq3AOzhRYTMOFryoyUnUkm7DJnaWr7TecDrzUKslMPfMt772yyeFCoKdESTTVnWb4vX6nH0UNHYHuBlDLi7mb5mqrODp0GcAAp2beZvcApo2fm2Ay0GwpscTiJMLOOFjcbxHC7pIzoU1Tyjlzt08DpAA7WrLzkhnRXSfZ1lzRdJCvFboJviELc%2BQlXbRCNuQNv1k1NkR%2FlVaxpbMXpyPC0O6arYci0NUbjtrCylhJ7M852WuXDFo1UI5%2BkEgYD1S%2FBujO5ScllBLSlTVHDTJWo%2BiBsvJP8IaKgScPSQdzXabTANYHAywjMhAlI54Vk5vx4YS2fnuCkzDthocd7e8J0p8wPM2PFlGPeNQeOsS34BdhVkFqx%2FHE5TCKuJGifj79tViLJJaCQCd20r4GHWxfGLn39gOdZCcFWWRuyskjiOYiGmimnshoQWioGWYE2cSxouziipqTtZgUpF8swlQcZs6LiYIIKBh12H2oSqA7fRm%2FUq2hWBUcn93mu9Yc4blGCFXzwbGLd9R%2FSkAdsepGw%2BLiiHpDZJxqxNvehksWG3yUmLFaTuZ8grxx8lhfTPVt25quuCDU8y2p7V94YtaLXxlFYyBIpDkgHx4fi2jpeWGnBqCcLkNg%2FQdsw91%2FoyzCX9cvJBjqkAR4MKebzU8AYeGbVO22YscAT22sO%2B0miF0R5T7xyqkZGhXlVaX3%2B1E2kiGdnoJWY1sEptqs2FOMowOi6LYUVwRxfKs1W0fOh5Gjzsb6PBTyat%2FM5zVjF2muvakv12P%2F6gulrv7COshtetWvtYYDhgLi%2FJwKkV8uO6Zfw1UYo%2F4D4go5gsXbUOmfpT547vVzkONNydwqZhXJ%2F5MpT%2F6lS4gmV1PWq&X-Amz-Signature=f8742439912a6c235059b1a366e5a33d2d159eaa050af9331458e95674189846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGWQ3LI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0LPf4ZhS5pB6bi126Z2vwANzSdOkNG6xNy2GmkfSTbQIhAMlBsarESicasTkuN94i1nM72j2cmcZh%2FtlfULsvLBWoKv8DCGEQABoMNjM3NDIzMTgzODA1IgzuirXu3GYu8psm0SUq3AOzhRYTMOFryoyUnUkm7DJnaWr7TecDrzUKslMPfMt772yyeFCoKdESTTVnWb4vX6nH0UNHYHuBlDLi7mb5mqrODp0GcAAp2beZvcApo2fm2Ay0GwpscTiJMLOOFjcbxHC7pIzoU1Tyjlzt08DpAA7WrLzkhnRXSfZ1lzRdJCvFboJviELc%2BQlXbRCNuQNv1k1NkR%2FlVaxpbMXpyPC0O6arYci0NUbjtrCylhJ7M852WuXDFo1UI5%2BkEgYD1S%2FBujO5ScllBLSlTVHDTJWo%2BiBsvJP8IaKgScPSQdzXabTANYHAywjMhAlI54Vk5vx4YS2fnuCkzDthocd7e8J0p8wPM2PFlGPeNQeOsS34BdhVkFqx%2FHE5TCKuJGifj79tViLJJaCQCd20r4GHWxfGLn39gOdZCcFWWRuyskjiOYiGmimnshoQWioGWYE2cSxouziipqTtZgUpF8swlQcZs6LiYIIKBh12H2oSqA7fRm%2FUq2hWBUcn93mu9Yc4blGCFXzwbGLd9R%2FSkAdsepGw%2BLiiHpDZJxqxNvehksWG3yUmLFaTuZ8grxx8lhfTPVt25quuCDU8y2p7V94YtaLXxlFYyBIpDkgHx4fi2jpeWGnBqCcLkNg%2FQdsw91%2FoyzCX9cvJBjqkAR4MKebzU8AYeGbVO22YscAT22sO%2B0miF0R5T7xyqkZGhXlVaX3%2B1E2kiGdnoJWY1sEptqs2FOMowOi6LYUVwRxfKs1W0fOh5Gjzsb6PBTyat%2FM5zVjF2muvakv12P%2F6gulrv7COshtetWvtYYDhgLi%2FJwKkV8uO6Zfw1UYo%2F4D4go5gsXbUOmfpT547vVzkONNydwqZhXJ%2F5MpT%2F6lS4gmV1PWq&X-Amz-Signature=4b1d5087033032d5ee79211f276a2e879b0b705802f4ff55f28a95278f7291b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


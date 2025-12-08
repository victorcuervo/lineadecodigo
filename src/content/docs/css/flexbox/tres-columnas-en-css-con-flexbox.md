---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WXSBED%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzbBBUmSmSlTTzngvUli7nVT%2F7ho4mC5CyXypS5EBAOAiEAgi435%2FMC2aNpPCm9sIPMRYGsLE29jnrohYBnsT4b29kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqS7cjfcleLDGS21yrcA9OnAg2xAg2w4I0kCTfd%2BE5WoR8c2LUe%2FvctbfTnoG1vLy4WibhlZxqWiRPBL%2FK6HwPYjOLN6Z2glAUnTSrIZP59E6e5Sr5MMyyhLuskipF20A0C7B9%2B2870qKVvMcLxGgY0d2cEPxik0Fpi2SIJMQMby979gRbHo%2FwPpfTVjS1kl1WW0JiwpX5bDO5k4Ep4BzVgKdJbPs3kiY1OOb5EID6m49NVqgGVXpH5Vf0Sv1NR7HYIFghZaeU4eHq5vsQLw5YLnSxlAIQZO6wv0EJ4RSDUwja7RZd80rBnNPQOpfPx4%2FRW4hhiN%2FhVoFag1nHKMb7rB7B3LXj9eJ2wyNAWzWNP6WQsgMo828UDu%2Fr8PBSKiUWzmV%2BA%2FpoPCrFOzKRu4jkUuV6t9CSnDQvtb8jcv0ETPc8%2BSNdqLq9qkT6CcW77P6tF0cgZW2%2BWaONqvEEdhvjCzBgi1rpQJ7LM3Q9RP1jnu8abdItNNTEyfW0n4rYQb8OXhu53sBgFZ9tY%2Bq%2FpHepm1mf0cHoU7P%2FnCLUVhkWPa6p7J8sv7u%2FAcpnEE04BAaqKXO1kDtTKLycBxjBGOO7Mef3URrgBnWyA2BiZGrwytgiPz%2FDp%2B2Gk7EwNQXIhy%2FLyx%2BTxr5FokLNCMMS03MkGOqUBcH1NUAfngvP2tgr7bhMP49kw6yKwt1Y%2BJ60bsz%2BiMUs1jAPszSIwjGPQSHIIfc%2F2Xzcdm2VQwwQfP%2F2LQU0FmneT5G%2F3LMXybJ3NBlJm400jlAZ4e0yHlBbmm41ek1C89O2VbRrFJjGVgBCQp%2F19BE1YQZSo%2FYCDKxhFUfZxOM4oNNm%2FNOEfamiG4otcA5ZUIsozWOr2eTgUjP5zVoS%2Ffyrh%2BHb3&X-Amz-Signature=9416ded5c9c8866048e2c87b3a76b477e0a592344dabdcc0bdad33557325298a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WXSBED%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzbBBUmSmSlTTzngvUli7nVT%2F7ho4mC5CyXypS5EBAOAiEAgi435%2FMC2aNpPCm9sIPMRYGsLE29jnrohYBnsT4b29kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqS7cjfcleLDGS21yrcA9OnAg2xAg2w4I0kCTfd%2BE5WoR8c2LUe%2FvctbfTnoG1vLy4WibhlZxqWiRPBL%2FK6HwPYjOLN6Z2glAUnTSrIZP59E6e5Sr5MMyyhLuskipF20A0C7B9%2B2870qKVvMcLxGgY0d2cEPxik0Fpi2SIJMQMby979gRbHo%2FwPpfTVjS1kl1WW0JiwpX5bDO5k4Ep4BzVgKdJbPs3kiY1OOb5EID6m49NVqgGVXpH5Vf0Sv1NR7HYIFghZaeU4eHq5vsQLw5YLnSxlAIQZO6wv0EJ4RSDUwja7RZd80rBnNPQOpfPx4%2FRW4hhiN%2FhVoFag1nHKMb7rB7B3LXj9eJ2wyNAWzWNP6WQsgMo828UDu%2Fr8PBSKiUWzmV%2BA%2FpoPCrFOzKRu4jkUuV6t9CSnDQvtb8jcv0ETPc8%2BSNdqLq9qkT6CcW77P6tF0cgZW2%2BWaONqvEEdhvjCzBgi1rpQJ7LM3Q9RP1jnu8abdItNNTEyfW0n4rYQb8OXhu53sBgFZ9tY%2Bq%2FpHepm1mf0cHoU7P%2FnCLUVhkWPa6p7J8sv7u%2FAcpnEE04BAaqKXO1kDtTKLycBxjBGOO7Mef3URrgBnWyA2BiZGrwytgiPz%2FDp%2B2Gk7EwNQXIhy%2FLyx%2BTxr5FokLNCMMS03MkGOqUBcH1NUAfngvP2tgr7bhMP49kw6yKwt1Y%2BJ60bsz%2BiMUs1jAPszSIwjGPQSHIIfc%2F2Xzcdm2VQwwQfP%2F2LQU0FmneT5G%2F3LMXybJ3NBlJm400jlAZ4e0yHlBbmm41ek1C89O2VbRrFJjGVgBCQp%2F19BE1YQZSo%2FYCDKxhFUfZxOM4oNNm%2FNOEfamiG4otcA5ZUIsozWOr2eTgUjP5zVoS%2Ffyrh%2BHb3&X-Amz-Signature=41a5d80e06793c5c0ae0d5775ab5e538b9e315b0b1d9c073c9c7ee1b4688ee92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


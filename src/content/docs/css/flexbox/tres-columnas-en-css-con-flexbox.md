---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HE2G7TJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbtxQ4zFiafbpKZqivza2FJNu5Icnqa6eJdHG0aIkr2AiBp148GbVXOJ2nvh4%2BxJilOIQjuVllWH6t6idmSGBTnHSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRtGMSmMvOV3P2MQKtwDdHMaN44Y4VgA9nx%2F9ZMC7TJz5Dy0RKLBhfHPcTyEzFHVzvxE7%2FThnjSjgwnx8uZcl0vJeUFhMQ5hpC92RmEnCJMJJTxrUvoRXL4FzlokWfoUX0aolZkJKciqVLX%2BcCqQ3N6D0NZNoi7%2BQR%2B8ajLHsAc7VApWrbPgJWyKcp0kd7iD4qO6jY0tR5MpH7iYF5bhb7OdPdM6%2BFlH%2BDCgb26a%2FPDYm11NHlEZCuwM%2BGCZT8twSE%2Bj7lUKsqQRFrWyBZ6OhLycd5jh74N3jfJIIRRoGmm1cpC1eQygQYPpcOYdFRbT%2BRPlRFmQ0nsmJWV9Hy6xbzlX64NB2OOg8PfK1%2B6BJZH6mZmKA1oXiMsu1glKOMioTuYI0d%2Bo2nUOHEfjOSknzlrLzhc48LgaT7sgup1UlsoAH3HRy8zNiyhmH%2B5v%2BoHETav%2FpB%2FRB965msMioybb0zb4dNfYqLt5fSAnWcqe%2FUDXJo6UqGDQN37toQS0jh3sUC7cFDKRdpn6f9%2B7qLA1fsw3AxsqhK7X52AwwMVxDmkbYyV%2FpTxMWIwXPepAt42%2Fy2HBjwG%2B%2FhaTVCkCid%2FqHXt08sQ6bA75KlmBk6dsZP305%2FJdtPvsumDvqvJRiZQigFBbItrOe5ePH5Qw9ajXyQY6pgGC3NuRn9NlfP6TGaNnbfGFQU%2FXDaRot2SYfzhAhhL4gG8xRlyBVPRFzr4Kcxa4%2FqSsSsBl0WMvIkB4F7IwHE%2BDFtLzjFvsta8k%2BHSoXQDXGBMXtTOJiHDxKTOIJvU14PPigcYbfgjmXbxuzzk2x8d1YuRYspLe%2F4UQA2YJz2Zz5La4OaVemo5dlgAOxADJmgy5zGHp7Vfbhod6Er5vztE4xRsimPjm&X-Amz-Signature=ec478ca0089c6cdfeb47d8d856078739ab7d20e36d24c80f35f618b5b6c06320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HE2G7TJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbtxQ4zFiafbpKZqivza2FJNu5Icnqa6eJdHG0aIkr2AiBp148GbVXOJ2nvh4%2BxJilOIQjuVllWH6t6idmSGBTnHSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRtGMSmMvOV3P2MQKtwDdHMaN44Y4VgA9nx%2F9ZMC7TJz5Dy0RKLBhfHPcTyEzFHVzvxE7%2FThnjSjgwnx8uZcl0vJeUFhMQ5hpC92RmEnCJMJJTxrUvoRXL4FzlokWfoUX0aolZkJKciqVLX%2BcCqQ3N6D0NZNoi7%2BQR%2B8ajLHsAc7VApWrbPgJWyKcp0kd7iD4qO6jY0tR5MpH7iYF5bhb7OdPdM6%2BFlH%2BDCgb26a%2FPDYm11NHlEZCuwM%2BGCZT8twSE%2Bj7lUKsqQRFrWyBZ6OhLycd5jh74N3jfJIIRRoGmm1cpC1eQygQYPpcOYdFRbT%2BRPlRFmQ0nsmJWV9Hy6xbzlX64NB2OOg8PfK1%2B6BJZH6mZmKA1oXiMsu1glKOMioTuYI0d%2Bo2nUOHEfjOSknzlrLzhc48LgaT7sgup1UlsoAH3HRy8zNiyhmH%2B5v%2BoHETav%2FpB%2FRB965msMioybb0zb4dNfYqLt5fSAnWcqe%2FUDXJo6UqGDQN37toQS0jh3sUC7cFDKRdpn6f9%2B7qLA1fsw3AxsqhK7X52AwwMVxDmkbYyV%2FpTxMWIwXPepAt42%2Fy2HBjwG%2B%2FhaTVCkCid%2FqHXt08sQ6bA75KlmBk6dsZP305%2FJdtPvsumDvqvJRiZQigFBbItrOe5ePH5Qw9ajXyQY6pgGC3NuRn9NlfP6TGaNnbfGFQU%2FXDaRot2SYfzhAhhL4gG8xRlyBVPRFzr4Kcxa4%2FqSsSsBl0WMvIkB4F7IwHE%2BDFtLzjFvsta8k%2BHSoXQDXGBMXtTOJiHDxKTOIJvU14PPigcYbfgjmXbxuzzk2x8d1YuRYspLe%2F4UQA2YJz2Zz5La4OaVemo5dlgAOxADJmgy5zGHp7Vfbhod6Er5vztE4xRsimPjm&X-Amz-Signature=6a9e51b94b09b99ef77692d6e1f387e7515be12f62d18aa24525ee4d2555fb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


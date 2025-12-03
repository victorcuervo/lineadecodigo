---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4XS2CF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHwJYaFvvvqipfQygdY6xe6xQpeQxVgNyAP2PDi8g3mZAiEA3IL%2F2WuPexBIVaWb4vJNL%2F2uQbd7iOusZqL9YX3OxB8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCaOgTowcVXZ6NYuXyrcAzCsMuMu1qTvck1TkrT%2B90uChXJHARZ%2FfOen6JRCAPmiO9dssX%2Fex7igHxyq3N5UTnhlDPWUYvUC5ljjvQ4TjV7tx6cwJLtFBec8hJBmN2pc3z%2BN9qcNg9a24w6RAMX0Xi583oxxR%2BbAdTVDtWuetj9C9kcJwwj7rjw7VdG5ewJ4RRi%2FRAa4HSG%2B0Ej05A5QytVygAE2vh1AiVz1x7vAB%2FX6dyCzlfCEBGbsoS1tx25RCabbwbUEeh5NY2zybqnK3RGFD%2BFZIe%2F%2B5R2nVP2LiSOnlU1DfG9I9op5ZO5KV97qRde3yi54bfbRa3NyGbJX9fwIfnxLz9YkJ%2BiTnTlK%2B3lxD4qe6H6Jm7vDBZS3tP1HX13gEQd2F%2FV%2BTFobCyW91nFBwuM36MPzjmBt9OlYGC2yLosEs7KLqq3yMXYJoHa%2Bv3zXKYbbO%2BX1ZOrClYPsA5eWvVSYsKH2xAyzoFxaxejOO5TLSF6b1%2B%2BlvyqsGvPxsgadLKhIcxf86FTLyVI7gktmn2eAB6PyD2hWC4XpB3t0GHgkHgfvNDTElwOLpMcNwB%2BQes38R1%2FYpb1OM8FkwSbTp7Mw2ZbI8TCeMQ8dmWj3Ea4R676KAm34L1cDwneb8CvUJ%2FNOJlJRp2rpMNjkvckGOqUBsq72QryJvWQNc%2FUDuswEaOfWu5zSEoA7lzsKyAxFDfaUrXZyAl5ii5AxaqswHXLCUbpQZee5ekpcyDBKi2k4BL2SRONPL9N2zyMkLZU7xgfvs434xhyu4vsiSpTyDKjV724zFKsc5YQ2E%2Fj7IKacaN%2BBB36EdXokEfH2F4ie7SRozxkmWmAVlpZJiipABGa1U79s8Xk9deMaGPjCWs56sSp%2F7Nk2&X-Amz-Signature=23d54fa9dad39800bcb222a85c5a8db07955cb61c7c2de54d97110808da81c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4XS2CF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHwJYaFvvvqipfQygdY6xe6xQpeQxVgNyAP2PDi8g3mZAiEA3IL%2F2WuPexBIVaWb4vJNL%2F2uQbd7iOusZqL9YX3OxB8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCaOgTowcVXZ6NYuXyrcAzCsMuMu1qTvck1TkrT%2B90uChXJHARZ%2FfOen6JRCAPmiO9dssX%2Fex7igHxyq3N5UTnhlDPWUYvUC5ljjvQ4TjV7tx6cwJLtFBec8hJBmN2pc3z%2BN9qcNg9a24w6RAMX0Xi583oxxR%2BbAdTVDtWuetj9C9kcJwwj7rjw7VdG5ewJ4RRi%2FRAa4HSG%2B0Ej05A5QytVygAE2vh1AiVz1x7vAB%2FX6dyCzlfCEBGbsoS1tx25RCabbwbUEeh5NY2zybqnK3RGFD%2BFZIe%2F%2B5R2nVP2LiSOnlU1DfG9I9op5ZO5KV97qRde3yi54bfbRa3NyGbJX9fwIfnxLz9YkJ%2BiTnTlK%2B3lxD4qe6H6Jm7vDBZS3tP1HX13gEQd2F%2FV%2BTFobCyW91nFBwuM36MPzjmBt9OlYGC2yLosEs7KLqq3yMXYJoHa%2Bv3zXKYbbO%2BX1ZOrClYPsA5eWvVSYsKH2xAyzoFxaxejOO5TLSF6b1%2B%2BlvyqsGvPxsgadLKhIcxf86FTLyVI7gktmn2eAB6PyD2hWC4XpB3t0GHgkHgfvNDTElwOLpMcNwB%2BQes38R1%2FYpb1OM8FkwSbTp7Mw2ZbI8TCeMQ8dmWj3Ea4R676KAm34L1cDwneb8CvUJ%2FNOJlJRp2rpMNjkvckGOqUBsq72QryJvWQNc%2FUDuswEaOfWu5zSEoA7lzsKyAxFDfaUrXZyAl5ii5AxaqswHXLCUbpQZee5ekpcyDBKi2k4BL2SRONPL9N2zyMkLZU7xgfvs434xhyu4vsiSpTyDKjV724zFKsc5YQ2E%2Fj7IKacaN%2BBB36EdXokEfH2F4ie7SRozxkmWmAVlpZJiipABGa1U79s8Xk9deMaGPjCWs56sSp%2F7Nk2&X-Amz-Signature=370960000c648920b62d92047eaea9f50b045bfcd1dd4bd67cb4f08242b82c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


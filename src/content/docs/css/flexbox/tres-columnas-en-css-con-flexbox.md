---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDNNXCC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmYty5CfJs9gMPlW9ITP4Xxw0Y%2BPyeVMdB3k6rr1YVSgIhAOd33MrCi750jsNSyUlxQeD1ZQ1kD%2BAeirCuQkkv%2FXYWKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeLxz1YtslZsiZukkq3APS8yoz6Zrvq7M8IbkAvKj0%2B7tSOMcE8DPMuhID8ICleRPySzMtoaICsAZ4T3dep1rBevEP9cs3jOTJoDuASw3qlEQMkkH42wB%2Bs6D0%2Fyh0vygKPLmSktL9H4RidKSVCv0%2FbQMuq5qJowVit9nyAqFZjvpLMk%2BCOwXDoyiReCCzOvJuFOwP6QRxQyyNSW5nl%2B%2BjpEck9sMS4s%2FxT1pi%2BajNW7KGm%2BwBIvHm%2FpXUYl5x%2B41P5%2Bp2AS2F18F3xcn8aKyMclV385mpaII%2FYxKSNG25Uh7tovdvgmlbvC8iDtOkwQTlDPr%2FAsTmymZRzjdJVZ3r4PCWPWhCBIr0%2FxGw5k19Mxtd1o38ZIMrRVfs6vWznqT3Ms78dqfQx4RP3m8zxWzNTNFO7juoTtHhG%2BoGxSUS3DQ6me90TqK3YIVAkUsDqH3QLDn8z81HI1ijIYQmYW8Tn3G5fHZR1Q6zM8oq8SGED%2BxuuaaFHu7YYjYAOntZqhbpfKzihjRymhifSMdgMjdc6Fnyw8wdhdeK6t0FIvKWrIW8%2FPu%2FcZ2QIOkx7Ikiw1TtPTVKaGyNnEw1gLpUU9kxU0WLUqnZAoP1ZtzBp65b4mw%2FmE8k%2F%2FkgoBT1sktHa7fLtqH8cEBf%2Fugk3DC35NvJBjqkAUaVvyMjDGo37bSUZll2yfEgVrD9m%2BFipp6IIDpqKARQni89KFof3QzyCHloQRSbSZmE2%2Bx60pcMHX9pvPGxvs%2FpMXJZqEr2E84WvinXjxYIxp7ecAzpnGDPj9AmSABinIJ9lMjM1XKVxfrOAtcnobjI6jla4qIl8%2FEX2RjXmgdawGCvC16GFeapZc017SRoOljZnb8Q2474BK2mLZqlQWEbms6P&X-Amz-Signature=3a095412706200343c24481b7ab0c5c4f874da52e3ed174c0ea384467398b6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDNNXCC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmYty5CfJs9gMPlW9ITP4Xxw0Y%2BPyeVMdB3k6rr1YVSgIhAOd33MrCi750jsNSyUlxQeD1ZQ1kD%2BAeirCuQkkv%2FXYWKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeLxz1YtslZsiZukkq3APS8yoz6Zrvq7M8IbkAvKj0%2B7tSOMcE8DPMuhID8ICleRPySzMtoaICsAZ4T3dep1rBevEP9cs3jOTJoDuASw3qlEQMkkH42wB%2Bs6D0%2Fyh0vygKPLmSktL9H4RidKSVCv0%2FbQMuq5qJowVit9nyAqFZjvpLMk%2BCOwXDoyiReCCzOvJuFOwP6QRxQyyNSW5nl%2B%2BjpEck9sMS4s%2FxT1pi%2BajNW7KGm%2BwBIvHm%2FpXUYl5x%2B41P5%2Bp2AS2F18F3xcn8aKyMclV385mpaII%2FYxKSNG25Uh7tovdvgmlbvC8iDtOkwQTlDPr%2FAsTmymZRzjdJVZ3r4PCWPWhCBIr0%2FxGw5k19Mxtd1o38ZIMrRVfs6vWznqT3Ms78dqfQx4RP3m8zxWzNTNFO7juoTtHhG%2BoGxSUS3DQ6me90TqK3YIVAkUsDqH3QLDn8z81HI1ijIYQmYW8Tn3G5fHZR1Q6zM8oq8SGED%2BxuuaaFHu7YYjYAOntZqhbpfKzihjRymhifSMdgMjdc6Fnyw8wdhdeK6t0FIvKWrIW8%2FPu%2FcZ2QIOkx7Ikiw1TtPTVKaGyNnEw1gLpUU9kxU0WLUqnZAoP1ZtzBp65b4mw%2FmE8k%2F%2FkgoBT1sktHa7fLtqH8cEBf%2Fugk3DC35NvJBjqkAUaVvyMjDGo37bSUZll2yfEgVrD9m%2BFipp6IIDpqKARQni89KFof3QzyCHloQRSbSZmE2%2Bx60pcMHX9pvPGxvs%2FpMXJZqEr2E84WvinXjxYIxp7ecAzpnGDPj9AmSABinIJ9lMjM1XKVxfrOAtcnobjI6jla4qIl8%2FEX2RjXmgdawGCvC16GFeapZc017SRoOljZnb8Q2474BK2mLZqlQWEbms6P&X-Amz-Signature=1aab759d4abed36b55b7b0dd3c29a5358a2c1629ee6b22ea3e8266b804ea765d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNC24MP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCkJpn3xjBMmEcT8TuBbd8deDRPZyta66nFAqN6z3n3cQIgPVidug%2BIJocDte4DbXH31hOb2iC4aWbNVimCq5gWBBMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCQfBfKLXQNyT3LakircA2fEA6fDXWxIix92XgQfnv%2BRyqNrnkfuqxt35vzvYKz3YWt%2FAYlrF5ep4q%2F3VOr5M%2BXmDExWC%2F%2B5v6RJO%2BsrkxLD8LtfeGEWuawJbnkux8u8flVpFgVXkYu%2FxkqNXFLsHxH7z3iAfVYzfbuzU5L6Fjgopw8e6n7CfwNGSQU7UVt1wJiRtOxrWetB2sK7hFdiXeBBgTkKZ2jsBDmoQv1Md38qjSB%2BRWqcRzCfgq1%2FPyGDhzzmY13jWfN79eS%2FEhBmNG7ov81kg4B2SiqjcZQC9DH2eK5zzrEoJmIres0Aq7WxLu3LcyoOFajn0UXmrng61d%2FJfVPwpWJNzratYjMbzbpPfxhYiXCDFkABDh0EgbYEjxoUv6DEmRmvt9CV7RqsqVzoOG09tF3lI9vHQ8GzqMbGAs5uz3z2UXn9HfWoAfOdET%2FUHcrWVBItkLMldj%2FSFSc34ulSeMoKb%2B16cVvaN3LURTpnoQefLR1TI67i7ROoyLN%2FvyPo8JueHVUyjOrnxrRHvVMC66ubLH949y%2F6dg0cpcFD5H3gLRaH1%2FfFah65dQA1IH792UeWjtlRxbDa3VM2Na4UGSC8PCfv1DCxL5rWK9NaYrk7b0b6HqSi9OAJwQIQMyTvsz%2Fam207MJeQxMkGOqUBOWOs8jnNR0pPNFPZcY56wAAFGpb4E3nCGnxShXLuKZ97RI4lIXtOICoIxjK%2BJEzL5eF42LwibfP2SRv7Wl1VGs8dJy0XDZkFunfgmz6RjGEBoGAt5ejrFfpN8K77fbB%2BOB6KWFVSxOqYYIVi5OG68l1vG9NOf0pgEco1UjweASTXIdaCYDozn7s9CCPxPtwsPO7w%2BQjO%2B7jjmahRmLoHaIaz1ew4&X-Amz-Signature=2ddaf72f6a150c89a84812ce0d4a511239db2df3c4196950cd5b2d8402190fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNC24MP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCkJpn3xjBMmEcT8TuBbd8deDRPZyta66nFAqN6z3n3cQIgPVidug%2BIJocDte4DbXH31hOb2iC4aWbNVimCq5gWBBMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCQfBfKLXQNyT3LakircA2fEA6fDXWxIix92XgQfnv%2BRyqNrnkfuqxt35vzvYKz3YWt%2FAYlrF5ep4q%2F3VOr5M%2BXmDExWC%2F%2B5v6RJO%2BsrkxLD8LtfeGEWuawJbnkux8u8flVpFgVXkYu%2FxkqNXFLsHxH7z3iAfVYzfbuzU5L6Fjgopw8e6n7CfwNGSQU7UVt1wJiRtOxrWetB2sK7hFdiXeBBgTkKZ2jsBDmoQv1Md38qjSB%2BRWqcRzCfgq1%2FPyGDhzzmY13jWfN79eS%2FEhBmNG7ov81kg4B2SiqjcZQC9DH2eK5zzrEoJmIres0Aq7WxLu3LcyoOFajn0UXmrng61d%2FJfVPwpWJNzratYjMbzbpPfxhYiXCDFkABDh0EgbYEjxoUv6DEmRmvt9CV7RqsqVzoOG09tF3lI9vHQ8GzqMbGAs5uz3z2UXn9HfWoAfOdET%2FUHcrWVBItkLMldj%2FSFSc34ulSeMoKb%2B16cVvaN3LURTpnoQefLR1TI67i7ROoyLN%2FvyPo8JueHVUyjOrnxrRHvVMC66ubLH949y%2F6dg0cpcFD5H3gLRaH1%2FfFah65dQA1IH792UeWjtlRxbDa3VM2Na4UGSC8PCfv1DCxL5rWK9NaYrk7b0b6HqSi9OAJwQIQMyTvsz%2Fam207MJeQxMkGOqUBOWOs8jnNR0pPNFPZcY56wAAFGpb4E3nCGnxShXLuKZ97RI4lIXtOICoIxjK%2BJEzL5eF42LwibfP2SRv7Wl1VGs8dJy0XDZkFunfgmz6RjGEBoGAt5ejrFfpN8K77fbB%2BOB6KWFVSxOqYYIVi5OG68l1vG9NOf0pgEco1UjweASTXIdaCYDozn7s9CCPxPtwsPO7w%2BQjO%2B7jjmahRmLoHaIaz1ew4&X-Amz-Signature=62ab6bce682465bfefff9bc77a9d37ca6bdda03d4f3588f4e99fe8d6200c0a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


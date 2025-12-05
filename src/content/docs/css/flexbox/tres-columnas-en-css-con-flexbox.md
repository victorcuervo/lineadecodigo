---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2FH4UAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfivifgyIBrSnB0avStiwuyjXWqXYCiKoNGtF5yQH%2F4AiEAvncLEYaYOJ0E2af5mrRMs6FuTIGq5qs1dCQEcRrzVlAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO66yjkBjiuubIgCsircA%2BNvyHbEewq%2FKsLgRVB7%2FvzC7Gx3qpX%2BZM%2BCLMJ8lIN%2B6lZ%2Bn%2BMPWzqWwKL68SeY0Z9FrOsDWVvJCe9%2Fkl4zufJpL8v23gI1HItd23jjn%2BHcV0SPnwyXSMGkv4MrXILzRy0dMQF0rmsB5t5wDTCJAiBI3lgfP8He6OReGZKLitdwqK%2B61tDCDjJvTtx3Pq%2BMdIqwKO29sUwFlMrZ9dTgkxYPgTtAwC5KPTUI2DPURBtrYvjQZ75gfjg%2BW9z2KR4KStb5ZXL6lUPOXnlB9MRI%2F%2BI1NUm0dzVNXO6fzH8L1ZiEEvNYNIh3G1rQSqTuqT4zMySv7AkW6KY6UNDZ1zxSDQq90w0qdEWyRDz8PckZzBPMadmNy%2BSfbx7cLgA4DNyJIOOeWEFcvH%2BxHaLkwo2%2B7UZy8EfvcaZOkvH%2BC78foTtDwzOATjmspinJAiUIF2%2BuL%2Bk2Qe2xZu0%2BdyXMyXw4TdilqxJn5%2B2qr4%2BP3SrYEtlRZCCp%2BskvnbLDRpmVhbq6csVqNrmukkszO60sWcc4BUte2cJpSoM7fY6KZFgEkf%2FZaehlt9m1zzuSEXR0291g%2FnHA2Z2QSqHPKwF98VgFJSbR2TZlE98zNJOtmuf0Eot8hUaZQ%2FYYotbpgHohMJ6yyckGOqUBHr14PA3hiqyJoioOn0Tfzf0xSkVgPTO8llcNfkaKv9GXTAZLypJwI%2BijkgL4%2FfvE%2F5IJPTU5d%2BAvUsCF2eRPIy%2FihWGRbrATuAsML3%2FOYsnLpVG22UPZYih0bQ%2FgXIbh%2Bq1EQH5UcX%2FEXU2l0DRtdLWKoN05JWf0H4Ar3pJ%2Fe7zIMMr4bZN%2B6dWF7bXz9TXnS6LBikloHEHGTXBW5upl7zmJEj8e&X-Amz-Signature=5de222863c572013cf61c23cacc5f8830c0a8ce309dd9bf8cd0b071015d4f281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2FH4UAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfivifgyIBrSnB0avStiwuyjXWqXYCiKoNGtF5yQH%2F4AiEAvncLEYaYOJ0E2af5mrRMs6FuTIGq5qs1dCQEcRrzVlAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO66yjkBjiuubIgCsircA%2BNvyHbEewq%2FKsLgRVB7%2FvzC7Gx3qpX%2BZM%2BCLMJ8lIN%2B6lZ%2Bn%2BMPWzqWwKL68SeY0Z9FrOsDWVvJCe9%2Fkl4zufJpL8v23gI1HItd23jjn%2BHcV0SPnwyXSMGkv4MrXILzRy0dMQF0rmsB5t5wDTCJAiBI3lgfP8He6OReGZKLitdwqK%2B61tDCDjJvTtx3Pq%2BMdIqwKO29sUwFlMrZ9dTgkxYPgTtAwC5KPTUI2DPURBtrYvjQZ75gfjg%2BW9z2KR4KStb5ZXL6lUPOXnlB9MRI%2F%2BI1NUm0dzVNXO6fzH8L1ZiEEvNYNIh3G1rQSqTuqT4zMySv7AkW6KY6UNDZ1zxSDQq90w0qdEWyRDz8PckZzBPMadmNy%2BSfbx7cLgA4DNyJIOOeWEFcvH%2BxHaLkwo2%2B7UZy8EfvcaZOkvH%2BC78foTtDwzOATjmspinJAiUIF2%2BuL%2Bk2Qe2xZu0%2BdyXMyXw4TdilqxJn5%2B2qr4%2BP3SrYEtlRZCCp%2BskvnbLDRpmVhbq6csVqNrmukkszO60sWcc4BUte2cJpSoM7fY6KZFgEkf%2FZaehlt9m1zzuSEXR0291g%2FnHA2Z2QSqHPKwF98VgFJSbR2TZlE98zNJOtmuf0Eot8hUaZQ%2FYYotbpgHohMJ6yyckGOqUBHr14PA3hiqyJoioOn0Tfzf0xSkVgPTO8llcNfkaKv9GXTAZLypJwI%2BijkgL4%2FfvE%2F5IJPTU5d%2BAvUsCF2eRPIy%2FihWGRbrATuAsML3%2FOYsnLpVG22UPZYih0bQ%2FgXIbh%2Bq1EQH5UcX%2FEXU2l0DRtdLWKoN05JWf0H4Ar3pJ%2Fe7zIMMr4bZN%2B6dWF7bXz9TXnS6LBikloHEHGTXBW5upl7zmJEj8e&X-Amz-Signature=d45a8929305f33ced79c552011ef655a5d4783364bb5198bf07e17caeaf94100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


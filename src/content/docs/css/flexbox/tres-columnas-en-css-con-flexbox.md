---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5OVPPZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADinpaTAzGUzfEGFJnelcXNdjhREZmqJjtWrd%2BAL8VNAiBxoZfFvSsWN3IHgDNqNFaEo3aUWG8LNFAUwIcbSAnDtCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHPn7sEhZv6ThB76KtwDPoFayR36iMimd9gC1Y6TVbLMA8%2F322iGF8XGsdStCktkDZxqzluaSFbB0lKTGkGeBa1ZKoAByGPneba0sFTVW%2BOnTuKtaWWuRbpIxJdXBzs4vS5sxcaKldjLVlZjZ8VbPcLouTWPwRUarEVb8iOOJIIcK6Aaey9REZdWywoAS%2Bpo8pxMaPdBg1pKUx3ZOuOgEJBIfMcy1LCDFwJ45oUDCsGHN2Vl4YrmyNUAGzglut%2BtojbNhVZP3x7E5Jhx20c5v66%2FQZ0Q3Vw40pnv8xDgVZ3CM2IIacqyCslOgI1gMvAiipBwxC40vwRomVQm4g6a3Z77erhCPmDVH45iqy5aZh0UxyjYPGir4PXKX%2BfXWf%2BgmhHxqGBN42E62aMEt6aM2pyr7CZ2CoCulfR9zjwOeidIZP%2FGCXGTsV5u7qlCrSdi4ePZfzUeTGGDzVB5rzZ78EwWtfirgYBC%2B4D9H7p2GgYC8u1HV0EiguGsKcd5QpXEpMSNTs22PHQ17Hx%2FaxLrfVWxGZwV8L6gQnJLEBC8LImh%2BpaO%2BVB3uWNUQRk2a%2BylJAfDLObcGJAq7fSKoS8EdIyTZMP1kH1QqXK2dbPmQQbFpYZ%2FapCvS%2FU%2F8a2uTkl7x6c9Y7oa3%2FL1OmwwzqHYyQY6pgG0jdOHgyGuvYhH1yCgBmMcZLShFQnAKTyHgJZ8qF27n5UMcslNyvDnoaEZ9fSHOaXM87poC1cj%2FM2Bps%2BUX%2BN5y3L4yCh4pNZp7LAXdbu0r6PsSeqHqm67eeCYttlpPY8Pgjz1GA437%2FS5q7gu4DNyqeyScpZMKLrKtOjRfBtjl%2Fd06wK2f1I6QGv5WUB0K92sxDWwAnChiI%2FBPOLVBbL3Z7cmV9va&X-Amz-Signature=439d09b97de74bab4eeda46282aec7f0093c4070920fb7ac19a745b891c5914f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5OVPPZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADinpaTAzGUzfEGFJnelcXNdjhREZmqJjtWrd%2BAL8VNAiBxoZfFvSsWN3IHgDNqNFaEo3aUWG8LNFAUwIcbSAnDtCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHPn7sEhZv6ThB76KtwDPoFayR36iMimd9gC1Y6TVbLMA8%2F322iGF8XGsdStCktkDZxqzluaSFbB0lKTGkGeBa1ZKoAByGPneba0sFTVW%2BOnTuKtaWWuRbpIxJdXBzs4vS5sxcaKldjLVlZjZ8VbPcLouTWPwRUarEVb8iOOJIIcK6Aaey9REZdWywoAS%2Bpo8pxMaPdBg1pKUx3ZOuOgEJBIfMcy1LCDFwJ45oUDCsGHN2Vl4YrmyNUAGzglut%2BtojbNhVZP3x7E5Jhx20c5v66%2FQZ0Q3Vw40pnv8xDgVZ3CM2IIacqyCslOgI1gMvAiipBwxC40vwRomVQm4g6a3Z77erhCPmDVH45iqy5aZh0UxyjYPGir4PXKX%2BfXWf%2BgmhHxqGBN42E62aMEt6aM2pyr7CZ2CoCulfR9zjwOeidIZP%2FGCXGTsV5u7qlCrSdi4ePZfzUeTGGDzVB5rzZ78EwWtfirgYBC%2B4D9H7p2GgYC8u1HV0EiguGsKcd5QpXEpMSNTs22PHQ17Hx%2FaxLrfVWxGZwV8L6gQnJLEBC8LImh%2BpaO%2BVB3uWNUQRk2a%2BylJAfDLObcGJAq7fSKoS8EdIyTZMP1kH1QqXK2dbPmQQbFpYZ%2FapCvS%2FU%2F8a2uTkl7x6c9Y7oa3%2FL1OmwwzqHYyQY6pgG0jdOHgyGuvYhH1yCgBmMcZLShFQnAKTyHgJZ8qF27n5UMcslNyvDnoaEZ9fSHOaXM87poC1cj%2FM2Bps%2BUX%2BN5y3L4yCh4pNZp7LAXdbu0r6PsSeqHqm67eeCYttlpPY8Pgjz1GA437%2FS5q7gu4DNyqeyScpZMKLrKtOjRfBtjl%2Fd06wK2f1I6QGv5WUB0K92sxDWwAnChiI%2FBPOLVBbL3Z7cmV9va&X-Amz-Signature=61df9cb77f49247f1234da8bc81d48937cce5c3289b6ee57d68249f778d3e927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


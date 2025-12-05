---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Q5NCQQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIvRNuHfeVALjAoMpCdv6Uc5Z5Oz7w1eGxrKR2oark8AiEAlZgj9V%2FwotS%2FlNgdJe7aBC1zQLEQIePcmS3AEXpAJSgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJakPtsxMw3GhKg0zyrcA1tU8RvkxoB58lb5UoSq8nX240iC3f%2BgZnnzxHlrsCdtdVe2KO4Vg2X5d%2Bb2TuVsEo6G3xE4tSdS3ZOnwnCSvoPk2AX1joEQmJeig1%2B0FHfuin%2Fv6y9cDuR4pDDb%2FTJyXcpMCQXUkMuRQXBHq0L5h4Vh8BAOY2rfCRHxW%2BJHzCurml%2B6j9gVt8axBZNgKJcIt4hA9A1aPQoOmTbYW9NGCT0UhhifIFG3dz3bdIUK%2B18sCrpJn4qEJucZpQPhGwcCxlwNjU%2F28uQX1uOhDUGjud%2F2FRtVbGJ6jRwM8k%2FwQK8jDR0uwCoGopSMfzZURIEv6tf9thLXfTtKt1%2FKPDqLqvm1NFp%2B18xf8WIUoHxO4ubIjpC68zE%2FXgUMtzcwaazN703zV%2BqKckCZ%2FXFZcqdyrED0lBdRnjTb34k%2Bf8ahpRfCeOl09lodRk3g3qqOfZyJGq%2FAWORA75h%2FbyxADrEqo7JH6KO%2BjeLcYGg4AyNUVPJn1o0pDpALG22Wk8VYeTfSU3yxlmjxMWNO%2BTXk%2BEfilDyQnQAO7r9mH2AdXjhpTH32OSSLxNX21FkCH82vO6AdRsKuM22OOVrApUBsiTS4HOaZbyW8KVuODxjl7uuZpbFtCv%2Fx1vkSDR%2B0Zj1kMPaLyMkGOqUBfKHXrmHZ%2B8JvpcKyoCYQ%2BLgNU0ZydWRSIjFTm4T3uYspJKcKumqlCWEMHeGpDp9RprYEqklZZRAkue9HbiWOZymNuzV9W1LFkzgiK2aDlkq%2BA2vixTJRWOB9dDtRQ7lhk32yDF1BdI0dNp3Uic51uxfQcYTTP76v5R%2FSo9UvcK1M4V%2FF2WKvjQBF5rDRSUFIdtGiMiLMKKK%2FuWPHNVRtNxKVZlO%2B&X-Amz-Signature=86e940ff54ff0f4589703965c4d8ccb47227d12c36e4302425851249ed96b2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Q5NCQQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIvRNuHfeVALjAoMpCdv6Uc5Z5Oz7w1eGxrKR2oark8AiEAlZgj9V%2FwotS%2FlNgdJe7aBC1zQLEQIePcmS3AEXpAJSgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJakPtsxMw3GhKg0zyrcA1tU8RvkxoB58lb5UoSq8nX240iC3f%2BgZnnzxHlrsCdtdVe2KO4Vg2X5d%2Bb2TuVsEo6G3xE4tSdS3ZOnwnCSvoPk2AX1joEQmJeig1%2B0FHfuin%2Fv6y9cDuR4pDDb%2FTJyXcpMCQXUkMuRQXBHq0L5h4Vh8BAOY2rfCRHxW%2BJHzCurml%2B6j9gVt8axBZNgKJcIt4hA9A1aPQoOmTbYW9NGCT0UhhifIFG3dz3bdIUK%2B18sCrpJn4qEJucZpQPhGwcCxlwNjU%2F28uQX1uOhDUGjud%2F2FRtVbGJ6jRwM8k%2FwQK8jDR0uwCoGopSMfzZURIEv6tf9thLXfTtKt1%2FKPDqLqvm1NFp%2B18xf8WIUoHxO4ubIjpC68zE%2FXgUMtzcwaazN703zV%2BqKckCZ%2FXFZcqdyrED0lBdRnjTb34k%2Bf8ahpRfCeOl09lodRk3g3qqOfZyJGq%2FAWORA75h%2FbyxADrEqo7JH6KO%2BjeLcYGg4AyNUVPJn1o0pDpALG22Wk8VYeTfSU3yxlmjxMWNO%2BTXk%2BEfilDyQnQAO7r9mH2AdXjhpTH32OSSLxNX21FkCH82vO6AdRsKuM22OOVrApUBsiTS4HOaZbyW8KVuODxjl7uuZpbFtCv%2Fx1vkSDR%2B0Zj1kMPaLyMkGOqUBfKHXrmHZ%2B8JvpcKyoCYQ%2BLgNU0ZydWRSIjFTm4T3uYspJKcKumqlCWEMHeGpDp9RprYEqklZZRAkue9HbiWOZymNuzV9W1LFkzgiK2aDlkq%2BA2vixTJRWOB9dDtRQ7lhk32yDF1BdI0dNp3Uic51uxfQcYTTP76v5R%2FSo9UvcK1M4V%2FF2WKvjQBF5rDRSUFIdtGiMiLMKKK%2FuWPHNVRtNxKVZlO%2B&X-Amz-Signature=65319fc5cd5d9740fa796ce93a73ab730a6381b8e748d69d0923af1efc0e6755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


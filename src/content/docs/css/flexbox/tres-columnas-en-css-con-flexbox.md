---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZDRNT7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ebhOquXfXQwzviURb8OgwtcLnAzTuwdiGy%2BsmsjjNwIgcWY6AmGwQnybZ3ChgSgwL64cICI60jZugruj0P231NcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtGhkGAMOCExyMMYyrcA2%2BWYHeNYKqAiSS8Q6niPG7lb6BqsExmpZWK8R07Jc15MNXkN05gTuRmPmH3TOndC3ixk5xIqity669iWRVJPD32qQwm%2Br5JK4zmF3hPNgVAqLTGNQ5aT5DBWmRFB4oyp6M5C1B3JO5xUkur0SHGJGQ9dcUt%2FKojzn99JPTOrNl0A0pJR4HtOwt7Uvmw0xL%2Bp9BhbLUZXDNcZG4UY7T6ofpVpFBqVfGWtB4efsCaVLYkyewGUaS4E1%2Fc2NMo1nmKn6pkMuQH4Q6mbAzxzTE2cu2eocLUy0pWB002V22VafTBOrPb%2F4YbD5Pk6chjE1OkW6PuE9mNrBPEHiSmhFgddF553BqYKW8jzP4KPb42c3EImPfub7VNtpafbeXmAcW4XrvW0DOKY8JA6ErqIkEEQ5K9H%2Btav002SeX3JGW2h0osy63wv%2FJKo1q7lvFw5API2gq9vSHHiQdbRdMWVtAiAkh5S32y4qJ2sgWNvPo4Oc9BUqptBpOsY06XNGfzuZvDsY9XOaPUREUGieHeeWzgdqkx15P5NDnHD%2BtvPvR1HfxPP0jclwv2qF3CodnG%2FsQPOt31pcaBanszw%2FgX7joCn60lCqVml1f%2BK6jTPcoXTPAouaoMwFi8Y4EuQd5OMIbH18kGOqUBCnEwUF6AQo4wOvAjMJ8gK4ks%2F8N0q5kLjUS%2FYF5YNd5%2BS5N2Ee4jXGBEDdcUlmPgnULbFnwOuI47%2BTH1H0%2FpjTKJ2XZSIwtzPirzGJH0tIObVD%2Bm%2FcCaiDDsiCsy2Vk2Bh88RtRHBKArdX2jYJn1f%2FQc6WTk8STDM9NC%2BTC8mTnCY%2BdCkZPsNjgpEDUcfiqh3pgzy2VzVHQ1cjGwYFYLX7SpbViO&X-Amz-Signature=af9327bf201c98015ff9fa6c6e015bc62031cc88e5fe29ec3f90c73385659e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZDRNT7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ebhOquXfXQwzviURb8OgwtcLnAzTuwdiGy%2BsmsjjNwIgcWY6AmGwQnybZ3ChgSgwL64cICI60jZugruj0P231NcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtGhkGAMOCExyMMYyrcA2%2BWYHeNYKqAiSS8Q6niPG7lb6BqsExmpZWK8R07Jc15MNXkN05gTuRmPmH3TOndC3ixk5xIqity669iWRVJPD32qQwm%2Br5JK4zmF3hPNgVAqLTGNQ5aT5DBWmRFB4oyp6M5C1B3JO5xUkur0SHGJGQ9dcUt%2FKojzn99JPTOrNl0A0pJR4HtOwt7Uvmw0xL%2Bp9BhbLUZXDNcZG4UY7T6ofpVpFBqVfGWtB4efsCaVLYkyewGUaS4E1%2Fc2NMo1nmKn6pkMuQH4Q6mbAzxzTE2cu2eocLUy0pWB002V22VafTBOrPb%2F4YbD5Pk6chjE1OkW6PuE9mNrBPEHiSmhFgddF553BqYKW8jzP4KPb42c3EImPfub7VNtpafbeXmAcW4XrvW0DOKY8JA6ErqIkEEQ5K9H%2Btav002SeX3JGW2h0osy63wv%2FJKo1q7lvFw5API2gq9vSHHiQdbRdMWVtAiAkh5S32y4qJ2sgWNvPo4Oc9BUqptBpOsY06XNGfzuZvDsY9XOaPUREUGieHeeWzgdqkx15P5NDnHD%2BtvPvR1HfxPP0jclwv2qF3CodnG%2FsQPOt31pcaBanszw%2FgX7joCn60lCqVml1f%2BK6jTPcoXTPAouaoMwFi8Y4EuQd5OMIbH18kGOqUBCnEwUF6AQo4wOvAjMJ8gK4ks%2F8N0q5kLjUS%2FYF5YNd5%2BS5N2Ee4jXGBEDdcUlmPgnULbFnwOuI47%2BTH1H0%2FpjTKJ2XZSIwtzPirzGJH0tIObVD%2Bm%2FcCaiDDsiCsy2Vk2Bh88RtRHBKArdX2jYJn1f%2FQc6WTk8STDM9NC%2BTC8mTnCY%2BdCkZPsNjgpEDUcfiqh3pgzy2VzVHQ1cjGwYFYLX7SpbViO&X-Amz-Signature=4faf7c86f134e6c2dee36c124196bd68a07b3c77ccde5ec31f4febafb2d9d0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


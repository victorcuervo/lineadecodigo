---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCJEMSD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPzPLrQP8eh5aVWmFD1sJdNZDIMH9VYy1PVZaquzAq5AIhAK%2BBB43gcFBASfgKd%2FhwbINuMyxZzAfKA5M7od2Fh1haKv8DCHoQABoMNjM3NDIzMTgzODA1IgwqSieMJ5BR1VD2%2FDkq3AOMbxuwDRY9VqEguklV5vIkziCcBQu7QmAzZZW3Qj%2FAimaRnNuDmCW0s49VhFG2sPQPfAuuT6fGbrawUnWDcrZXlMGYirOP7apTNIpfseqUpJOBF68Yuk3A4G3Oh4PL7Nlhmj6N2UASbCOaKc8hitrVnJpwl9CGlzlOT10lIeAw%2Fg8EuXXEJrneGowi8o0v4M5tCJkkiz3gfjTqgKOZb8jhurEOuR2F4XsZb%2B5aQ7%2BXflqqegmlC5hYx1OCoPTmHR2WDULhyxajWzoDHGgLNE1KTIsaRzPx7SQUtqi06sfVt0L7Lp9TUehsyw1grayKtoj6V5Qm51ePIDIlVIumDpOGkrFE8RSgnb%2Fv31TZA4VZ%2BY%2B9xSIrDysTqHMkQo1f36hJLFwHcZoTf9G0mM2H1%2BLBbpkvKynjruLRAaOzW%2FmEdyXTEmrLm3tf2UdD85gmStuaQKkrguFbkHi7yqic4Vu0uezdhpYgekZgjXqoB6IcxmzOfJ%2FHuLg%2BWTTr%2BuT71pYnJ94JPYEr9I7BXSpUcNBEC4Oq5ECOgg84KtFl1LD6WXswhGY87xp1zv%2B8mPJz6ZzqxKHkH8mBH30Dohtgqh%2BnDvHxDSJJ2Sg%2BqDl4s2MITUqMDexFYUchHNdm8TCLzdHJBjqkAZ7UiX%2FWem0%2F3gllUbyFNPdb5FiJUDMQuILx1CKROm%2F%2BLBUxx7sPXZu0HjoXNUuN%2BIlbZfjAWv5o6MoaR5jJ02BMPuATi20jePjTISX5y58SRM%2FQSEjHL%2FaqRqWMLb15vDQk2%2BKsfnIysiVwcpRI3HXwtvGYjZsEKFBcdOTdw9LoDvTL%2Ft8znXtJWiKYSvCG3QHjxoQAiRsL9cUgMKc3qjDfzbSN&X-Amz-Signature=2be05091af442b63bc7ffe129bd49134d5e853535cba503253c73b3469094194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCJEMSD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPzPLrQP8eh5aVWmFD1sJdNZDIMH9VYy1PVZaquzAq5AIhAK%2BBB43gcFBASfgKd%2FhwbINuMyxZzAfKA5M7od2Fh1haKv8DCHoQABoMNjM3NDIzMTgzODA1IgwqSieMJ5BR1VD2%2FDkq3AOMbxuwDRY9VqEguklV5vIkziCcBQu7QmAzZZW3Qj%2FAimaRnNuDmCW0s49VhFG2sPQPfAuuT6fGbrawUnWDcrZXlMGYirOP7apTNIpfseqUpJOBF68Yuk3A4G3Oh4PL7Nlhmj6N2UASbCOaKc8hitrVnJpwl9CGlzlOT10lIeAw%2Fg8EuXXEJrneGowi8o0v4M5tCJkkiz3gfjTqgKOZb8jhurEOuR2F4XsZb%2B5aQ7%2BXflqqegmlC5hYx1OCoPTmHR2WDULhyxajWzoDHGgLNE1KTIsaRzPx7SQUtqi06sfVt0L7Lp9TUehsyw1grayKtoj6V5Qm51ePIDIlVIumDpOGkrFE8RSgnb%2Fv31TZA4VZ%2BY%2B9xSIrDysTqHMkQo1f36hJLFwHcZoTf9G0mM2H1%2BLBbpkvKynjruLRAaOzW%2FmEdyXTEmrLm3tf2UdD85gmStuaQKkrguFbkHi7yqic4Vu0uezdhpYgekZgjXqoB6IcxmzOfJ%2FHuLg%2BWTTr%2BuT71pYnJ94JPYEr9I7BXSpUcNBEC4Oq5ECOgg84KtFl1LD6WXswhGY87xp1zv%2B8mPJz6ZzqxKHkH8mBH30Dohtgqh%2BnDvHxDSJJ2Sg%2BqDl4s2MITUqMDexFYUchHNdm8TCLzdHJBjqkAZ7UiX%2FWem0%2F3gllUbyFNPdb5FiJUDMQuILx1CKROm%2F%2BLBUxx7sPXZu0HjoXNUuN%2BIlbZfjAWv5o6MoaR5jJ02BMPuATi20jePjTISX5y58SRM%2FQSEjHL%2FaqRqWMLb15vDQk2%2BKsfnIysiVwcpRI3HXwtvGYjZsEKFBcdOTdw9LoDvTL%2Ft8znXtJWiKYSvCG3QHjxoQAiRsL9cUgMKc3qjDfzbSN&X-Amz-Signature=a794bb96ce64fb0883f5cd7466c7445c6e32c6a170ac58a54b053f563e489df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


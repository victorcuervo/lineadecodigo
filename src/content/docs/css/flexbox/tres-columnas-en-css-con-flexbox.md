---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDSZ256%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVs%2BCcQQbjZlUn8u7qzAIF6v81jNVGSYWApjN2fqwlnQIhANivpGj0U2mSesnEY7BpMpOUVEnYJybaj05pRp%2Fnj0lmKv8DCGEQABoMNjM3NDIzMTgzODA1IgwXSJABeg2EtVMsgcAq3AM5z6rNWybg5z9Sa1R7rk5UVTL3rJsESUMbvDn7s7GjVRjGWsGNlu%2BBq7OrOpMPOelrLicAfY9Me1frScDzn41J8uhEVcp4WomlOnsbd6RbYFlnzg%2FmX08MU9PhbtZxW7Yui375lgdn1OH3KfCUlwM4k5VaFe%2F037KIZzHE6kZh5G%2BXRCja4wz6P1n8TF9sHCtZYRfmc1w5gC14Hhqg53Uu6Sj7urtv3KUVN7Egjmavks9YHyFUWH0FUzweK8i9k%2F6qXZqd61t21%2BbkNAUeSD4MsBrgI8inVJOWbjt6l3rfRUtMaDk%2BaKrLBpvlb9UqbH1iFgyVV90h%2F%2BQXUcV%2FYhZvsFYYA5xwP2SXQvYnSvDdZnyUalrBiOOTcncZRjD1QCazgmSve5kdpPrYgEGQpJZ9g%2FbFMISyuZVo5ljwvBnQTMieKznF90trGZI1%2BD15BgC9weEwW%2BaUpC%2BO6hKUbune9dVgefrwRxC4dbNCA5dwH7VS0hp7vtya8PodkOdamyDVYAhjQ0%2BQyjUifo3HaAoNKpSdIzZXhheRbKwMs1eWzWPZ9jWKE93Y72aIUrjlGhMY5yBxUensdXlKCEBNfox75o7JwjAZJfJaNi%2FAKLdi3MqFqj2XhJeYHKTwNDCz9svJBjqkASY0GCT5fUWYVmfvQmty9ZUutcQKABZerr67qDBZQlDzjgC4eEyZx29XgIPIgKWrYuWkqyc9AevV76PbtRd8EaMIHJkD%2ByfSYABU1rII2ycjO5CTIDgTEswa%2BuNg49fpIbUVLhOGxqx%2BjwYxNTfds7uag61%2FH6sIpH4TpJJLZ3SzS3cL6LPFmBcyRtFYqESmrV82dYlS3k0pKocg9QEhJmqyJtcD&X-Amz-Signature=d7a7675b879a4ccd2668b44317aced12e5483a6ae6e72f09385d09375068cb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDSZ256%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVs%2BCcQQbjZlUn8u7qzAIF6v81jNVGSYWApjN2fqwlnQIhANivpGj0U2mSesnEY7BpMpOUVEnYJybaj05pRp%2Fnj0lmKv8DCGEQABoMNjM3NDIzMTgzODA1IgwXSJABeg2EtVMsgcAq3AM5z6rNWybg5z9Sa1R7rk5UVTL3rJsESUMbvDn7s7GjVRjGWsGNlu%2BBq7OrOpMPOelrLicAfY9Me1frScDzn41J8uhEVcp4WomlOnsbd6RbYFlnzg%2FmX08MU9PhbtZxW7Yui375lgdn1OH3KfCUlwM4k5VaFe%2F037KIZzHE6kZh5G%2BXRCja4wz6P1n8TF9sHCtZYRfmc1w5gC14Hhqg53Uu6Sj7urtv3KUVN7Egjmavks9YHyFUWH0FUzweK8i9k%2F6qXZqd61t21%2BbkNAUeSD4MsBrgI8inVJOWbjt6l3rfRUtMaDk%2BaKrLBpvlb9UqbH1iFgyVV90h%2F%2BQXUcV%2FYhZvsFYYA5xwP2SXQvYnSvDdZnyUalrBiOOTcncZRjD1QCazgmSve5kdpPrYgEGQpJZ9g%2FbFMISyuZVo5ljwvBnQTMieKznF90trGZI1%2BD15BgC9weEwW%2BaUpC%2BO6hKUbune9dVgefrwRxC4dbNCA5dwH7VS0hp7vtya8PodkOdamyDVYAhjQ0%2BQyjUifo3HaAoNKpSdIzZXhheRbKwMs1eWzWPZ9jWKE93Y72aIUrjlGhMY5yBxUensdXlKCEBNfox75o7JwjAZJfJaNi%2FAKLdi3MqFqj2XhJeYHKTwNDCz9svJBjqkASY0GCT5fUWYVmfvQmty9ZUutcQKABZerr67qDBZQlDzjgC4eEyZx29XgIPIgKWrYuWkqyc9AevV76PbtRd8EaMIHJkD%2ByfSYABU1rII2ycjO5CTIDgTEswa%2BuNg49fpIbUVLhOGxqx%2BjwYxNTfds7uag61%2FH6sIpH4TpJJLZ3SzS3cL6LPFmBcyRtFYqESmrV82dYlS3k0pKocg9QEhJmqyJtcD&X-Amz-Signature=cfadd3163b04bc4d8916489f80eb09c7ea07a7aa1bcfb066be31ebed3f8c39e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT3P5D2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xPd6Fi6d%2FuyV%2BHD1Kxq7ISFKkuYbOB%2BqFL2LZK4L9AIhAJ5VEQU%2F8A1VVAFFhSnLjBcHuzrjjRfsjbwMntJTAoQiKv8DCH8QABoMNjM3NDIzMTgzODA1Igxu6JEcZjfEW22vXKsq3ANcd49sJJ4lAd8rbVaAI%2FP3h87CVpakrbMOGVyeNt6qKKCiMYheTFYHqIPjfwKrKjDmbwWAeXisR2pqmPomL58LZUPfKyWEApZDYfTAjLyiU5N5KZuULmHzhcdD6%2F%2BJoak9r3TzFLdPqpqFJnTIOKkbGXZn3AQ2BmVXOsBqUlhDXXKLE86ZCMFz%2FCnjRg236SqKWhwhVizZ1yRDXNztQdhynU3J%2BHDk2hUBukjR%2BMmjcfsOFqkvZJjcrjQmPTHFuOSqNq%2FJbGDappjVisJfskQVlnNSdCK%2F76L%2FC2VMd8mO7HsVt5Uok5yjQc9f1vict2Z5cS3I5Um4i5NSuyNLRdNXwcu9RCl9s7qxd99MkttXe9ul76fYA2WYJETXb5OIjXb%2B1wyA%2Bs9ukaKks4Cgo3ocFm7SrgVGVCiUFtl%2BlcNofH8ewNBcpX%2F0gM1Qna3t7jnCow7SyG57OZ6huSwnaktkhbY6oAUPZtThrZVbqdos7SYFdgT5G6M8b2Di6WNGPSmEU1tX3p1wKU559sNIVuOrqCutjKpnV9%2BeNYlKqy3LLeArodS2FdZT2vDX8Wr6BZutt0elVH7N9%2Fthixq7mXf%2FQZlsydv7h4pNJQhnj20Xqg3kl0oxLCEafDW7%2BjCL09LJBjqkAamXoLlV5qwU4t1blsT55X%2FvnEOSYtTlWwVbGnBXq4kXKfc2pkbiFaH7seHzASYRuLddQDKsjk9DjR%2B1li4kKdi%2Ff1t0oWMzq%2BHdVXKCvzYMi2eaFEhco6xpgx1h3iwpKOndnE6mvxUhgHxRxQ2%2BpIb49bVQSinXtBaCrxUS%2FYWMCQeh0nBoIeTNeNklCP1OHxjJkikp9KX%2FS%2BeSkbHJYa8wsiaw&X-Amz-Signature=683540a70e2a492318e0f3be63256a7509f1892c2fed9730fa75ad6e20ed2b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT3P5D2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xPd6Fi6d%2FuyV%2BHD1Kxq7ISFKkuYbOB%2BqFL2LZK4L9AIhAJ5VEQU%2F8A1VVAFFhSnLjBcHuzrjjRfsjbwMntJTAoQiKv8DCH8QABoMNjM3NDIzMTgzODA1Igxu6JEcZjfEW22vXKsq3ANcd49sJJ4lAd8rbVaAI%2FP3h87CVpakrbMOGVyeNt6qKKCiMYheTFYHqIPjfwKrKjDmbwWAeXisR2pqmPomL58LZUPfKyWEApZDYfTAjLyiU5N5KZuULmHzhcdD6%2F%2BJoak9r3TzFLdPqpqFJnTIOKkbGXZn3AQ2BmVXOsBqUlhDXXKLE86ZCMFz%2FCnjRg236SqKWhwhVizZ1yRDXNztQdhynU3J%2BHDk2hUBukjR%2BMmjcfsOFqkvZJjcrjQmPTHFuOSqNq%2FJbGDappjVisJfskQVlnNSdCK%2F76L%2FC2VMd8mO7HsVt5Uok5yjQc9f1vict2Z5cS3I5Um4i5NSuyNLRdNXwcu9RCl9s7qxd99MkttXe9ul76fYA2WYJETXb5OIjXb%2B1wyA%2Bs9ukaKks4Cgo3ocFm7SrgVGVCiUFtl%2BlcNofH8ewNBcpX%2F0gM1Qna3t7jnCow7SyG57OZ6huSwnaktkhbY6oAUPZtThrZVbqdos7SYFdgT5G6M8b2Di6WNGPSmEU1tX3p1wKU559sNIVuOrqCutjKpnV9%2BeNYlKqy3LLeArodS2FdZT2vDX8Wr6BZutt0elVH7N9%2Fthixq7mXf%2FQZlsydv7h4pNJQhnj20Xqg3kl0oxLCEafDW7%2BjCL09LJBjqkAamXoLlV5qwU4t1blsT55X%2FvnEOSYtTlWwVbGnBXq4kXKfc2pkbiFaH7seHzASYRuLddQDKsjk9DjR%2B1li4kKdi%2Ff1t0oWMzq%2BHdVXKCvzYMi2eaFEhco6xpgx1h3iwpKOndnE6mvxUhgHxRxQ2%2BpIb49bVQSinXtBaCrxUS%2FYWMCQeh0nBoIeTNeNklCP1OHxjJkikp9KX%2FS%2BeSkbHJYa8wsiaw&X-Amz-Signature=7c5ce59b2fad35770fa0838176a0f2e6ed103aa51b8ee05e27bacdf0b95deb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


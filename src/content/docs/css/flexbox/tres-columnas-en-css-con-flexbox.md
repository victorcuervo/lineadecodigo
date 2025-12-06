---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRXVH5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD32KtjkOKYS5AU2igrbSJfh%2F9EcbnVRYmKI%2BoGUGLq4QIgWil%2BQJEDGQVRwJMzfYaEpPIHbRSNGKW1ol0EKuCqBI8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKh%2F9otPynT1rSL6GCrcA0wjo59%2BKuWyWbMGVJQG7ta2SNXFcJU%2BwljSV32Jvf8dmF8hYwXBQW5tbhup920F2O2DRdfRW%2BbqoGNGuOB8VVPzxfCYl9%2FWJkxPS4LRtnG1WJLU7T%2FEtXGHZ%2F2hPKLOZdyMG0dFI3fFSWAJuL5tv6c8CJ0nfCSPyhg7UKdcvYorDPJnEGSKXzHwwa%2BT2kB7nfOIW3NkMdzzDvkqnXJwOzOWocddpXA%2F%2F5gmb%2FPx1%2FbHU0l8GB5MaMxZ6ciL9zKkSUsNfJxKTVT80a6ZVw7aiR2IsXSMEwC5VnPNdNTjuoUwk95INH%2BSz8eCeB5cz2hqCqMylhsw%2B6mTW1VmzU%2FJKMCSSRmWIcNJG%2Fs8zAZl3tFWP788eAa3VA4MA44k8OV6%2FB8ue%2BJqTfvtCyI8uxj65sCW1B4J7n4sjDUnP4Qjl%2FjIOnNTEPy11AN3i90QIx%2BbIkZKAjjdv%2BXnO6AofpV9DFPEAMcNYDNkYcc2oIQkNjzkz7yl3wysaXktsP2ej0dhzET%2BP5N8b7wnwBJGUrp8miWWdOPTbuq7TbvWXLRdn83yKn0bH67nkuyJ3fv4nY05F5LpXadVCvhNeXUyCkg8I2HUVX8kKVuVVJY2y8mKev1MbMVVhszvqUITfb85MKOm0MkGOqUB67yux%2FE2%2BQRcO73EG1%2BUHJWoVzmZw6Wi6TE1QEHYUPshvsGI9zzvuzrUJUQpvaUzMZdZi91WDDyolEjS6qPpxKnCJyGKCX7za%2B0fM0XD4Tu0k6%2BXQp2vvHeAo4jOIhlpfENgDDM2Qfn5A7LVk1j7MCnw4Wrl2ctpIHz3u51Z8GzMRmzPXD7k8LcNb2hEmJLqp5bOpb6WC7eiguYOhf%2B7RoxP4zdm&X-Amz-Signature=3ea93d4a57ed00b660c5e13fd36ea68a6fad0e8dafb3aec9cc4929ef3079f8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRXVH5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD32KtjkOKYS5AU2igrbSJfh%2F9EcbnVRYmKI%2BoGUGLq4QIgWil%2BQJEDGQVRwJMzfYaEpPIHbRSNGKW1ol0EKuCqBI8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKh%2F9otPynT1rSL6GCrcA0wjo59%2BKuWyWbMGVJQG7ta2SNXFcJU%2BwljSV32Jvf8dmF8hYwXBQW5tbhup920F2O2DRdfRW%2BbqoGNGuOB8VVPzxfCYl9%2FWJkxPS4LRtnG1WJLU7T%2FEtXGHZ%2F2hPKLOZdyMG0dFI3fFSWAJuL5tv6c8CJ0nfCSPyhg7UKdcvYorDPJnEGSKXzHwwa%2BT2kB7nfOIW3NkMdzzDvkqnXJwOzOWocddpXA%2F%2F5gmb%2FPx1%2FbHU0l8GB5MaMxZ6ciL9zKkSUsNfJxKTVT80a6ZVw7aiR2IsXSMEwC5VnPNdNTjuoUwk95INH%2BSz8eCeB5cz2hqCqMylhsw%2B6mTW1VmzU%2FJKMCSSRmWIcNJG%2Fs8zAZl3tFWP788eAa3VA4MA44k8OV6%2FB8ue%2BJqTfvtCyI8uxj65sCW1B4J7n4sjDUnP4Qjl%2FjIOnNTEPy11AN3i90QIx%2BbIkZKAjjdv%2BXnO6AofpV9DFPEAMcNYDNkYcc2oIQkNjzkz7yl3wysaXktsP2ej0dhzET%2BP5N8b7wnwBJGUrp8miWWdOPTbuq7TbvWXLRdn83yKn0bH67nkuyJ3fv4nY05F5LpXadVCvhNeXUyCkg8I2HUVX8kKVuVVJY2y8mKev1MbMVVhszvqUITfb85MKOm0MkGOqUB67yux%2FE2%2BQRcO73EG1%2BUHJWoVzmZw6Wi6TE1QEHYUPshvsGI9zzvuzrUJUQpvaUzMZdZi91WDDyolEjS6qPpxKnCJyGKCX7za%2B0fM0XD4Tu0k6%2BXQp2vvHeAo4jOIhlpfENgDDM2Qfn5A7LVk1j7MCnw4Wrl2ctpIHz3u51Z8GzMRmzPXD7k8LcNb2hEmJLqp5bOpb6WC7eiguYOhf%2B7RoxP4zdm&X-Amz-Signature=d524cc218bd1a57562cbf68668f033616ef415d40cd46000c9c89825cdb60d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


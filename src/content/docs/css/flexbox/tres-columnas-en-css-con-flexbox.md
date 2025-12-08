---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBUE4QFJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHulOaodWI5CIG3L0p%2BKcj4ViUnmww90NQEuQSXzVA%2FwIhAKK4zNqn018WnCkxyiL4ZZjPqXm5ZARCTTFkeLbdNNdpKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUPklpeRPpQIHp3%2Bgq3APq6vLDqUOhmsvrCawQX6e2tkNwUUjgqXts1FmjEGtqXj0DTeQhvzrwvZvHLK8uBiqO8VDNqJCcUfXUmWihsUxbBnwyde0LSBd2tDojCBLdowzkQ2F4N9yUnzIgcEs2hkdeMcqQrjlORZf0qXNtu8lDi4X0bZelhOugRqp25jXLIMcGIw3mGmEGE6%2BdoEBVAuKjpl8meeNkXwaLh7WCsnogN0%2FwqC%2BfQ8cYc5IbuWtUjFFKAe69D7qXUTyESbTDv3cgeXWHFqSKOvCndaSHEnMLQCaT6NcPdB22tPwUdjIWsj4%2BENSbXm6f5NsCYUnjohKkysUJtUTtwcam6V4%2FCU11NdK7Aige40xmVUjl9ILUco6vXLj%2BoiP6i5eEKlUqJeBHCPPr4fAKfOUiq%2BASDXAy2K%2B9zI0XxHlA4qB63308UZq0AndhLnUAYFLDR6YpPVvaoNbZWsBeZuVwEcKEtWUhImOYt3uO%2FFtOatjVY0%2BZ0dt9r0O3A2D7RDl3S7YorOsMZ9eLTHhj%2B5SDxxDoJkFiKbRLd96LD%2BAcRD0dIhX5%2BnRIzTQ%2BTNTXJfIn2pU0ehQQG%2B%2Fj7qu7zzC2U5kXxp9fcE3cTj9W%2FdL4BVPcX7y4hPhlpvzN9uK3%2FtrxOjCjkNvJBjqkAV5Zml%2FW5y88RrhDRiFqo9qV8CGw1iXrru%2BJJe%2BJ34U%2BEuGKNmbqMHBiRY%2BjIhXZ6yHuyP5UcWgCu1zU3%2Fyoa4t7GFu8CyrAyxSgl7mYpQQilopHs2kWGHKP1UeahRDpQ4FJEFJOWCn9Uuoyz%2F%2B3azkdDRVJMfN%2FPf21P9Qs2xnoATEdcTLODK3hmRe%2FCtldUJMOMKtnB9S3ekWmZzGuRGfIeHXH&X-Amz-Signature=0d2817410afb3fb7fefd613c95b9f5ff743c63de7de72e7ded01f487c304eaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBUE4QFJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHulOaodWI5CIG3L0p%2BKcj4ViUnmww90NQEuQSXzVA%2FwIhAKK4zNqn018WnCkxyiL4ZZjPqXm5ZARCTTFkeLbdNNdpKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUPklpeRPpQIHp3%2Bgq3APq6vLDqUOhmsvrCawQX6e2tkNwUUjgqXts1FmjEGtqXj0DTeQhvzrwvZvHLK8uBiqO8VDNqJCcUfXUmWihsUxbBnwyde0LSBd2tDojCBLdowzkQ2F4N9yUnzIgcEs2hkdeMcqQrjlORZf0qXNtu8lDi4X0bZelhOugRqp25jXLIMcGIw3mGmEGE6%2BdoEBVAuKjpl8meeNkXwaLh7WCsnogN0%2FwqC%2BfQ8cYc5IbuWtUjFFKAe69D7qXUTyESbTDv3cgeXWHFqSKOvCndaSHEnMLQCaT6NcPdB22tPwUdjIWsj4%2BENSbXm6f5NsCYUnjohKkysUJtUTtwcam6V4%2FCU11NdK7Aige40xmVUjl9ILUco6vXLj%2BoiP6i5eEKlUqJeBHCPPr4fAKfOUiq%2BASDXAy2K%2B9zI0XxHlA4qB63308UZq0AndhLnUAYFLDR6YpPVvaoNbZWsBeZuVwEcKEtWUhImOYt3uO%2FFtOatjVY0%2BZ0dt9r0O3A2D7RDl3S7YorOsMZ9eLTHhj%2B5SDxxDoJkFiKbRLd96LD%2BAcRD0dIhX5%2BnRIzTQ%2BTNTXJfIn2pU0ehQQG%2B%2Fj7qu7zzC2U5kXxp9fcE3cTj9W%2FdL4BVPcX7y4hPhlpvzN9uK3%2FtrxOjCjkNvJBjqkAV5Zml%2FW5y88RrhDRiFqo9qV8CGw1iXrru%2BJJe%2BJ34U%2BEuGKNmbqMHBiRY%2BjIhXZ6yHuyP5UcWgCu1zU3%2Fyoa4t7GFu8CyrAyxSgl7mYpQQilopHs2kWGHKP1UeahRDpQ4FJEFJOWCn9Uuoyz%2F%2B3azkdDRVJMfN%2FPf21P9Qs2xnoATEdcTLODK3hmRe%2FCtldUJMOMKtnB9S3ekWmZzGuRGfIeHXH&X-Amz-Signature=a62cda88bca046e336de13f637cfc200c201549c5072826293a576b5a8a60d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


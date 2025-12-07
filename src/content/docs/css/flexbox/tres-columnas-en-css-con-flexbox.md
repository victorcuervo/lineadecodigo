---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJTQ7DW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2A%2F0RCtMT9w4pIx7n9ETPHFZnUxTRUZIFEEfHvMlNpAiB67QLnZAR15asjttP800ET5Uq480D7l0GYW%2BeBcg5L2iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYq06Y16O%2Fu2zuUD%2BKtwDqSA%2F4AFx3vRKSAvWYdoWT3ypEIZny8Rz9akJYmHriw3U%2BPZPuZz8I6I4ZoaTGuXOeGNx25ZLPZQCfTt66GIUNAOxP1lXdis%2FCdOIBs7BfFeiNXmcPSfPNDuoiGng8cb3lDqXCzoVOWZNLyVtogg0QH%2FsToHQazZIY%2FmaGFlQMc1NuOGPK5AcLskTeyGtgliFb18MC6K96SdOuNmGyX3CHJWvGpUCobd%2Fq1NK877Bys2NGLlvIRgJkDqzrSaEjPN0zcDr4DN02XLZBwd7LTDh%2FBSm1yMv1r8pdulPWccL7x4uYhcGl%2F2YKM2%2FqR5L72zt%2BkIxRDIbVMOvHqGqJnOIbMzFCZLX6dCbuLY7ZVqkAJSND4tqcEQIe5cdDYtsOOgOjRJS4GiLG13QpTsV84dU6lUOeP8aiyqA%2BbOxcT6%2BRp%2Bu%2FzXsTscFJi30OfRk83n0ZBg%2BIAF2kZCoZmXHR5Bm3HnMobeqj8tU5gzKS0JRUgQOu8XFRNizWfEFP5er8FBI67EJbth6fP%2FtuFvuV3rqtN8e8091JC00XJgNpkkqo6BJwtkOqJ5CpEMGkTVReVQ9ZgEQfLktymA6IDvIvydGtu6Nq4yKCkHQNwdCxiwQ3QA4o4sf1AVv2bWV2scwu6HUyQY6pgEjoG7pz8E9O95fPkg9bT7uIrFzGV%2BpwPv0A0chU5L1kkjXRrkw582VcvEuWEnyY0I16sW19RYI5nuj9pZrI%2B0k3lIWKGR539VgXyUNATmf3PrW686QZbIfSKE61lZM9WgK4xQYAwmVzYWM7aKoTssFSreWEjWvUMIhQRSuZbW1QG2inv2OAzqsHQUh6HFkIyhwY7bE1KoQa1X6qUafvmx3LMk9IBYi&X-Amz-Signature=51892232a5de8bd98a40baefa5aa83610ece8715387e8a6aab1e59d818388cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJTQ7DW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2A%2F0RCtMT9w4pIx7n9ETPHFZnUxTRUZIFEEfHvMlNpAiB67QLnZAR15asjttP800ET5Uq480D7l0GYW%2BeBcg5L2iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYq06Y16O%2Fu2zuUD%2BKtwDqSA%2F4AFx3vRKSAvWYdoWT3ypEIZny8Rz9akJYmHriw3U%2BPZPuZz8I6I4ZoaTGuXOeGNx25ZLPZQCfTt66GIUNAOxP1lXdis%2FCdOIBs7BfFeiNXmcPSfPNDuoiGng8cb3lDqXCzoVOWZNLyVtogg0QH%2FsToHQazZIY%2FmaGFlQMc1NuOGPK5AcLskTeyGtgliFb18MC6K96SdOuNmGyX3CHJWvGpUCobd%2Fq1NK877Bys2NGLlvIRgJkDqzrSaEjPN0zcDr4DN02XLZBwd7LTDh%2FBSm1yMv1r8pdulPWccL7x4uYhcGl%2F2YKM2%2FqR5L72zt%2BkIxRDIbVMOvHqGqJnOIbMzFCZLX6dCbuLY7ZVqkAJSND4tqcEQIe5cdDYtsOOgOjRJS4GiLG13QpTsV84dU6lUOeP8aiyqA%2BbOxcT6%2BRp%2Bu%2FzXsTscFJi30OfRk83n0ZBg%2BIAF2kZCoZmXHR5Bm3HnMobeqj8tU5gzKS0JRUgQOu8XFRNizWfEFP5er8FBI67EJbth6fP%2FtuFvuV3rqtN8e8091JC00XJgNpkkqo6BJwtkOqJ5CpEMGkTVReVQ9ZgEQfLktymA6IDvIvydGtu6Nq4yKCkHQNwdCxiwQ3QA4o4sf1AVv2bWV2scwu6HUyQY6pgEjoG7pz8E9O95fPkg9bT7uIrFzGV%2BpwPv0A0chU5L1kkjXRrkw582VcvEuWEnyY0I16sW19RYI5nuj9pZrI%2B0k3lIWKGR539VgXyUNATmf3PrW686QZbIfSKE61lZM9WgK4xQYAwmVzYWM7aKoTssFSreWEjWvUMIhQRSuZbW1QG2inv2OAzqsHQUh6HFkIyhwY7bE1KoQa1X6qUafvmx3LMk9IBYi&X-Amz-Signature=bfbe802ec880df8db0f6289d7dfdbba74e8bb2bd426468bbcf11c7f7411724e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


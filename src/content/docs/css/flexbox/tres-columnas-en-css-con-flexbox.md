---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I62G52V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH4bDpyz85MAcraEKjpdQRcQepfJpeqUI%2B9vw2humyGAiA6XMg6faC3VYnml2dypZbEA4wgRHFJbIw2xm9DwuNYWyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHH4GAAPkk1UcNT9CKtwDN%2BmqEs7SL%2BtoHnqDHSjSpDN78ZynqInXYDew7dt7%2FNtk3O0wqlx21MWe7Rf3vsFo6qdfNDKbCrHJIwfe6Jh60m4XRNbbQwzPT1Fq0u769JexGQqUSEPV2Ad7bVScyL63JsDMsx6pkHhVF91GvTtcOE4mQLNTGpmkWCdGu46qkO1sq9pvW8BB%2B5F%2BFLir4YWmRRotqMD9iSvecBy4S7hOEQrhq4yW66ReDTlHQH7QQCQiaRikKcOrR6N8VFRMXhb%2FYTMOs5icBaFYezod4d3YiC847%2F4YIecdskmS1txw1bc6J41tNLqj8xxHHp5krTDBWKSGQEP1mB%2FUYzA8m3IwAen8WwyRJ9SUrsdeuOdjh8u5AJ8ok%2Bh7t5IGNdR3Ii1zk70nNESMYYSn8QjcQPug1InKQceajO%2FhOcxGI76Wu56aeqh%2Fw6qrSznrB0UBVDwLsGAf3c8ot1erjiL3qR407LN4F3SLJC8LAp52NBuwIlE%2BHAVml0K1elaHN7NgPIl%2B%2Bld8%2BGAblda87hmD6kj9wFkguezl2Vhl5yCJsRgIjc69oVlrwMxUFPs%2By08vMCC%2FNGOHLwGh63wkPTvlRXLrLrzI2Kqd2NaG69hcQQ9SjII3CASsvAlR52MXvpcw59zGyQY6pgFUsEw5HjmTRjg0%2FCk4hiDMljaGQXnFKqesvk4yZnli2IYJo1G0OCDoWsIzbuNvkeu8jMBg8dnBYcBzLTY1DAtVIaggjNP%2BuJxcU8tPUutcarQ1A%2BdnybK6JKenKJdicPC3t2EDmR9dRRNqLVvXDuaqRqoplIe2m4zkxWpuhDdebP6V8WdEjw1rXuE83mcXxt1b7%2FtRqM9Z7YopCPuZPn5MfppdMbS3&X-Amz-Signature=545272a399b3e38ef9189f8afeebb7d106ba6942ec32b7a1f933860f4cda4e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I62G52V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH4bDpyz85MAcraEKjpdQRcQepfJpeqUI%2B9vw2humyGAiA6XMg6faC3VYnml2dypZbEA4wgRHFJbIw2xm9DwuNYWyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHH4GAAPkk1UcNT9CKtwDN%2BmqEs7SL%2BtoHnqDHSjSpDN78ZynqInXYDew7dt7%2FNtk3O0wqlx21MWe7Rf3vsFo6qdfNDKbCrHJIwfe6Jh60m4XRNbbQwzPT1Fq0u769JexGQqUSEPV2Ad7bVScyL63JsDMsx6pkHhVF91GvTtcOE4mQLNTGpmkWCdGu46qkO1sq9pvW8BB%2B5F%2BFLir4YWmRRotqMD9iSvecBy4S7hOEQrhq4yW66ReDTlHQH7QQCQiaRikKcOrR6N8VFRMXhb%2FYTMOs5icBaFYezod4d3YiC847%2F4YIecdskmS1txw1bc6J41tNLqj8xxHHp5krTDBWKSGQEP1mB%2FUYzA8m3IwAen8WwyRJ9SUrsdeuOdjh8u5AJ8ok%2Bh7t5IGNdR3Ii1zk70nNESMYYSn8QjcQPug1InKQceajO%2FhOcxGI76Wu56aeqh%2Fw6qrSznrB0UBVDwLsGAf3c8ot1erjiL3qR407LN4F3SLJC8LAp52NBuwIlE%2BHAVml0K1elaHN7NgPIl%2B%2Bld8%2BGAblda87hmD6kj9wFkguezl2Vhl5yCJsRgIjc69oVlrwMxUFPs%2By08vMCC%2FNGOHLwGh63wkPTvlRXLrLrzI2Kqd2NaG69hcQQ9SjII3CASsvAlR52MXvpcw59zGyQY6pgFUsEw5HjmTRjg0%2FCk4hiDMljaGQXnFKqesvk4yZnli2IYJo1G0OCDoWsIzbuNvkeu8jMBg8dnBYcBzLTY1DAtVIaggjNP%2BuJxcU8tPUutcarQ1A%2BdnybK6JKenKJdicPC3t2EDmR9dRRNqLVvXDuaqRqoplIe2m4zkxWpuhDdebP6V8WdEjw1rXuE83mcXxt1b7%2FtRqM9Z7YopCPuZPn5MfppdMbS3&X-Amz-Signature=e5725aaaa893fbb8111c7bc6fcc913b482568f0b884396ebb0bd45f1dbe17a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


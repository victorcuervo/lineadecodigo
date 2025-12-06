---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTPWKV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQjBueq3pBRvjuPmlEs67vLbG8vIBuQghlzHH3QQbUVAiAvi0ZtRD2hD56GEtNsrUBMIdCXD0YhBMXGYB%2FA%2BTrsuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4TWK1Js0orkk68h2KtwDOPdT2lWzGfSG73IxeeB6pNUny3uwmxxb6geaxflNOe%2FGuIrpY1Kb7%2FoXeAxpTB7X8O%2F%2BSdzLAP4r7BpZa4BuvAQkK%2F9cY8rRiFHXF2zUG8R%2FxAA71SU45%2FmN2F4mCCCJ7T3FVeC7H34uTcyH4yGE1cAZZ6rIpLBGua8FIw1w3a04OxmFQ%2BJQl9Zpx1qe8mZsdbYpaf3X5CBQVsUs0e5ymu7zrcZG72qKfKssOyI1LgJV6Xf%2BcI6QnBmXwrQL5UFdi5WHq7d%2FuyXqXWxBVSBanuWSCmUIu0sIbguAsW%2FgfO%2FK7ad2YiVvfZuqL%2BUD%2BoAxjEYYWXWj2aaJHXQb73egnapdRVCXYJqDZUL0EDtLnp%2B4TqlRGcIInjHw0TaN3TzzztTY56m0gpcqpVqTSa56%2FWqT%2FcGt8eDaS2AL5HpDywLEgJ2wOIp%2FFDSFKpFG%2BDh88zB9Vy%2F%2Fh0xEc6vMJD%2FA6VBwBLKus2zcwJMLcO7UeXNJqtc%2FcpUpN9Dap9n5L7%2FXWZ1OVdwFrvzcD4Kh06NAwzHGHh3bprgmt6QnfULSOYqcxkhgdFEYqWTpK%2BrSEGTMh7fcG3muhPgX%2BHRkbyCMFxSqTnMw8Wp07fknXG0NRMNZSGFngqE%2FC6RT5s0wxqbQyQY6pgHAf1ugPzwwaCZWUAMnVqtaBZIUhbk1OpblPuZaX7K8ycFaCZIGILmORUotw7BLJ8XamhNrEusrdSoEp88l3mr4a1wZqKJvdpjcEvJOiqZwpljk9rI296ikTRzvJP0z44f0GNcGF08pyfGPnvAJrdhfk9jRIjVrmWGRNtLC8x8ULT7Xiv91tKhLjMGRUpA1O8rcfhD1Z%2F6SHD8ogrdbDs9k0ZCX9dwE&X-Amz-Signature=c73d486fb72879669664c24bc1129710690401e2d17cfa4ae3672261611a869a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTPWKV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQjBueq3pBRvjuPmlEs67vLbG8vIBuQghlzHH3QQbUVAiAvi0ZtRD2hD56GEtNsrUBMIdCXD0YhBMXGYB%2FA%2BTrsuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4TWK1Js0orkk68h2KtwDOPdT2lWzGfSG73IxeeB6pNUny3uwmxxb6geaxflNOe%2FGuIrpY1Kb7%2FoXeAxpTB7X8O%2F%2BSdzLAP4r7BpZa4BuvAQkK%2F9cY8rRiFHXF2zUG8R%2FxAA71SU45%2FmN2F4mCCCJ7T3FVeC7H34uTcyH4yGE1cAZZ6rIpLBGua8FIw1w3a04OxmFQ%2BJQl9Zpx1qe8mZsdbYpaf3X5CBQVsUs0e5ymu7zrcZG72qKfKssOyI1LgJV6Xf%2BcI6QnBmXwrQL5UFdi5WHq7d%2FuyXqXWxBVSBanuWSCmUIu0sIbguAsW%2FgfO%2FK7ad2YiVvfZuqL%2BUD%2BoAxjEYYWXWj2aaJHXQb73egnapdRVCXYJqDZUL0EDtLnp%2B4TqlRGcIInjHw0TaN3TzzztTY56m0gpcqpVqTSa56%2FWqT%2FcGt8eDaS2AL5HpDywLEgJ2wOIp%2FFDSFKpFG%2BDh88zB9Vy%2F%2Fh0xEc6vMJD%2FA6VBwBLKus2zcwJMLcO7UeXNJqtc%2FcpUpN9Dap9n5L7%2FXWZ1OVdwFrvzcD4Kh06NAwzHGHh3bprgmt6QnfULSOYqcxkhgdFEYqWTpK%2BrSEGTMh7fcG3muhPgX%2BHRkbyCMFxSqTnMw8Wp07fknXG0NRMNZSGFngqE%2FC6RT5s0wxqbQyQY6pgHAf1ugPzwwaCZWUAMnVqtaBZIUhbk1OpblPuZaX7K8ycFaCZIGILmORUotw7BLJ8XamhNrEusrdSoEp88l3mr4a1wZqKJvdpjcEvJOiqZwpljk9rI296ikTRzvJP0z44f0GNcGF08pyfGPnvAJrdhfk9jRIjVrmWGRNtLC8x8ULT7Xiv91tKhLjMGRUpA1O8rcfhD1Z%2F6SHD8ogrdbDs9k0ZCX9dwE&X-Amz-Signature=d564660f3a3b653f8d0aa0536372d60e745ac77d07063b1cc2409e276273a6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


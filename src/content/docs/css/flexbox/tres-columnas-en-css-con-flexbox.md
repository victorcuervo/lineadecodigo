---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFCRHLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUk1RMiaYnrqVWwElk3%2FZb4HU%2BaH1osikwBn1u2IOr6AiBVHKgJsyHRPcmSii20HQ4MrQAZGdtFtwk%2FmXpTsVWmcSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDynFE1oEjHtCwjpHKtwDQ9mmaebgoOwyj8d%2FI9PD6i647SGo2BduryN5%2FmmKJDQT8ol2FJ%2B%2FYuqbWWy%2BzmdQScDrabpwRaPOyU7KX2hQoY4zeow6kUwsVuGBpOvkcl2v3DP8RqzkU9v%2BjDVSGI5FSOsEzjGBtfHoeaLVxTMC7zJfrJxFvFfpsDlxgoBBZ42hR%2BDLkTJrUs5YEGCaxuJV3iyjUJ4CnD76uZOceondfSh2s8LfW90qdPV7picLBwYpwHrbjyAfesEebOtey940ZRRh1OO0Ukd8gs63hoKpKl%2FEHmiVgR%2BMhas3KNbCzOYH4vzzWKfpOFp51hZrd8am%2BvyDIvrPceJZ1jyURqBYSd4ULicRxYMjcxAu5Uszf6LYtwLc5lFg3YGEjxFs2gW5opdEoAWjyFIBEjxFdlPUbEiahMFHgrZmhqwsJREIVf1QcCdh2y9oa%2BVneLxXckoitnxeB4i11CXTRl4JmikVtXrieVg%2FfeSOmN6i54Cvt7gqZh3cBimezlNRZJtDVodrnPyfUn1Mr0wy9Q3PDnPZLYkMf9nO%2B9q%2FmtTieOadxWi2mwh3esHFPUeXmEfJgCOvqNr%2B28v%2Fm1SOZdFDd3kHYn7O4rqhQ1Ny7P2FEGmlMKVg8XBWUS%2FiPoC8uVowrNHYyQY6pgHNFOiWJvIfXAQOE7NB4rqk1x14Uqp7%2FkRSAedIJJLN3Owq5ysyjaLqejaZSgVppNEiWzCvIF%2F%2B6lJv9r8jwKq3Ch5%2FNlbjVJfDXnUO7JYOVkUG5fzHR27JEBunv%2F4Y565FHduWAc0h6ca9sG0JCNlCVv3A2oeHzPAHUWEdSINYpw%2FkUFf8e7NgElP6vAM%2Brb1A5Uc6KhwdSk5t32UCr%2BfcKGx1WX2A&X-Amz-Signature=8fe125dfd0ab80a9d4b400e02e3976817f5c49bba718d4a41a0a415b97a1f757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFCRHLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUk1RMiaYnrqVWwElk3%2FZb4HU%2BaH1osikwBn1u2IOr6AiBVHKgJsyHRPcmSii20HQ4MrQAZGdtFtwk%2FmXpTsVWmcSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDynFE1oEjHtCwjpHKtwDQ9mmaebgoOwyj8d%2FI9PD6i647SGo2BduryN5%2FmmKJDQT8ol2FJ%2B%2FYuqbWWy%2BzmdQScDrabpwRaPOyU7KX2hQoY4zeow6kUwsVuGBpOvkcl2v3DP8RqzkU9v%2BjDVSGI5FSOsEzjGBtfHoeaLVxTMC7zJfrJxFvFfpsDlxgoBBZ42hR%2BDLkTJrUs5YEGCaxuJV3iyjUJ4CnD76uZOceondfSh2s8LfW90qdPV7picLBwYpwHrbjyAfesEebOtey940ZRRh1OO0Ukd8gs63hoKpKl%2FEHmiVgR%2BMhas3KNbCzOYH4vzzWKfpOFp51hZrd8am%2BvyDIvrPceJZ1jyURqBYSd4ULicRxYMjcxAu5Uszf6LYtwLc5lFg3YGEjxFs2gW5opdEoAWjyFIBEjxFdlPUbEiahMFHgrZmhqwsJREIVf1QcCdh2y9oa%2BVneLxXckoitnxeB4i11CXTRl4JmikVtXrieVg%2FfeSOmN6i54Cvt7gqZh3cBimezlNRZJtDVodrnPyfUn1Mr0wy9Q3PDnPZLYkMf9nO%2B9q%2FmtTieOadxWi2mwh3esHFPUeXmEfJgCOvqNr%2B28v%2Fm1SOZdFDd3kHYn7O4rqhQ1Ny7P2FEGmlMKVg8XBWUS%2FiPoC8uVowrNHYyQY6pgHNFOiWJvIfXAQOE7NB4rqk1x14Uqp7%2FkRSAedIJJLN3Owq5ysyjaLqejaZSgVppNEiWzCvIF%2F%2B6lJv9r8jwKq3Ch5%2FNlbjVJfDXnUO7JYOVkUG5fzHR27JEBunv%2F4Y565FHduWAc0h6ca9sG0JCNlCVv3A2oeHzPAHUWEdSINYpw%2FkUFf8e7NgElP6vAM%2Brb1A5Uc6KhwdSk5t32UCr%2BfcKGx1WX2A&X-Amz-Signature=37ccd508fc7b4cd3e79739029863f479a756c717596a212a3d3fe6c7ca22fbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDN5TZIY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRtoKpWZP7dpsMH6gEDrIbXYv40W8PQM3BCEYrVhhhuAiAlJS3w1tQOqcOcK0Tw%2FOxZ%2Bfud5%2FjKaInvECj8EbZ9XiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLwy7%2FoWYV6arV%2B4KtwDiDxgJD%2B8hNukFwp%2BKWtKZSk2PFRLrR3XpV5MBYV2Rg0ryGG3zo3fnc%2BybUw%2FN1ysD1nTJU7YRtUUjn5AVrqsbtOwqEKT%2FiGPokaXIToC9Y6OIIumEq2Fpmwikta3JbgGTtuUTpE6KD5ekEoHUhOjbx7y565UDG0RD5QgTe%2BOJRNLbPxLY5hiubB4e35B7V%2BnO%2Fij3cwGwChA%2FVrpPEbe3gy4jWRcNFH%2BFtpejtiPZAoGEMR%2FdHCwJvlEzM8Yi9Odxpr%2Bbrpz2kLWaZVhJOuxTzmbT%2FBZzuD29eE%2FS12gdYQUwg2Cp23%2B7OuIZu8ZwdLxbjFZJR9a77IUf%2FWI85K9ZlyOwWAENex5FDsg3Ox7eCf%2Fpqe3j5i7J%2FMFb%2FtWz8cFTxWYL7K%2BCRJ3R42b1KVC0u6oJ1ZY2%2BBe2sGfKj5VrFeudt5uWeQqJ7A78f7zNl2CF2iuwUZ1M6DO3MuPOQ7EQXK%2FNYTpnzqhQT0QphLw43sQwCCfIMCodfoJ%2FUfOfpwYzEdalql84tqxI%2FjMOZaynUeLeDH6TrkWocqKZkLkMWPFrjZMYg3W4rQsq9q3J%2FJCKlLmDtbmK%2BE7NzxmptiXM38TWIghHVl6W0%2FnPowjyyQtJga6mh70TwGVnjIwvaDUyQY6pgGKpsYwSsSO6vRXNQHrl0CO2WnDKYlEhdGBvSVfKZ64%2BlqmRlEtM3H0EK%2Bq5QDaR3SdYLtaDi%2Bk3Zm12jQ0cEiY5GCTazeMBqqP8yrT4Uvrc0QLFqxDSZaAPRykTiMSR66hHH5Jdrj0wbd%2B65qD4A3H6uH3jV63P3Is%2BNg0kwNOctcXjIFQkfhSjcU2dEWF8v02VKg64gr09FCbwErIGL2QEV%2FKHr2T&X-Amz-Signature=0df0a168f1e2cce1298f3a39458bc7c610d41f3d7f4209c4cd011a8b8ec6a65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDN5TZIY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRtoKpWZP7dpsMH6gEDrIbXYv40W8PQM3BCEYrVhhhuAiAlJS3w1tQOqcOcK0Tw%2FOxZ%2Bfud5%2FjKaInvECj8EbZ9XiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLwy7%2FoWYV6arV%2B4KtwDiDxgJD%2B8hNukFwp%2BKWtKZSk2PFRLrR3XpV5MBYV2Rg0ryGG3zo3fnc%2BybUw%2FN1ysD1nTJU7YRtUUjn5AVrqsbtOwqEKT%2FiGPokaXIToC9Y6OIIumEq2Fpmwikta3JbgGTtuUTpE6KD5ekEoHUhOjbx7y565UDG0RD5QgTe%2BOJRNLbPxLY5hiubB4e35B7V%2BnO%2Fij3cwGwChA%2FVrpPEbe3gy4jWRcNFH%2BFtpejtiPZAoGEMR%2FdHCwJvlEzM8Yi9Odxpr%2Bbrpz2kLWaZVhJOuxTzmbT%2FBZzuD29eE%2FS12gdYQUwg2Cp23%2B7OuIZu8ZwdLxbjFZJR9a77IUf%2FWI85K9ZlyOwWAENex5FDsg3Ox7eCf%2Fpqe3j5i7J%2FMFb%2FtWz8cFTxWYL7K%2BCRJ3R42b1KVC0u6oJ1ZY2%2BBe2sGfKj5VrFeudt5uWeQqJ7A78f7zNl2CF2iuwUZ1M6DO3MuPOQ7EQXK%2FNYTpnzqhQT0QphLw43sQwCCfIMCodfoJ%2FUfOfpwYzEdalql84tqxI%2FjMOZaynUeLeDH6TrkWocqKZkLkMWPFrjZMYg3W4rQsq9q3J%2FJCKlLmDtbmK%2BE7NzxmptiXM38TWIghHVl6W0%2FnPowjyyQtJga6mh70TwGVnjIwvaDUyQY6pgGKpsYwSsSO6vRXNQHrl0CO2WnDKYlEhdGBvSVfKZ64%2BlqmRlEtM3H0EK%2Bq5QDaR3SdYLtaDi%2Bk3Zm12jQ0cEiY5GCTazeMBqqP8yrT4Uvrc0QLFqxDSZaAPRykTiMSR66hHH5Jdrj0wbd%2B65qD4A3H6uH3jV63P3Is%2BNg0kwNOctcXjIFQkfhSjcU2dEWF8v02VKg64gr09FCbwErIGL2QEV%2FKHr2T&X-Amz-Signature=843770cf5ba44ab565218aec45bf40908c00fdd204abf0f2924f790e6bdb9cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


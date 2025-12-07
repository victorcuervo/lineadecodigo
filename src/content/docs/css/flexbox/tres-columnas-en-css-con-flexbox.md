---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ42M7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUeIHtVaWdiC8BFiW6AM6RE3%2BUcFWdjPlLYReEUgdtdAiB99TK%2BkA%2F%2FLVHJpHy6ObYXKdWvJj7tZSkYIIK8BXtZaSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx85OoFukNu%2BmpM5YKtwDnbJb72pyT8yEwr8yDp8UwxlOKkjp%2FtDg8ctMiA8Y%2Fidq%2FqbapGegnv0iOkpwXVuDdo9bTIfT%2FhcPEpjnNvu99d33SuRFTK4hQjPXUeyxWSNAAZWDGEygPBbgezltxkKHd1GbwWDrO2PFw9rF7%2FNXoFPH9QlBRkCA5XzZ6gPOOBw2CGTlqY%2BOTCiHzCWh8uqZiSTEKJTuF82qoUJzl56RyJjqSsglNxnfPrEVN%2FB9%2B2exgMTn0JTIdspTKzJOhgIbW2zktPDYYNSLa463a8FGTrAk4HGH5oDawLfv%2BpLCKLKlHn6Wx8FNt3ixdC%2F05zaxgX3LQ5wkZf2bhe%2F55zJvpW34ls4J0Be2sqikaAEmavzsLefTDAfSe2Fdnigqw%2BI5QRa2FdB6eqdxASjRAFlWR7EfkPzeiZ%2FY0Yj%2BPixONOIs6Knb%2Fo%2FI6X6RwvmPMpaTmlVvyk%2F%2BG1jyHygl%2FDs9HmWixzJjSTu%2F6XAQH%2BjnNL2KKKM7ejd%2F5KdMu9jcHLSLu2T3LDUbFU6xB2EwckIZfFfRfN3DA02%2BUCwsJscnW%2FGZrYg8ln%2F%2FMHv0CzSO%2BKcwEUxdiIc4dKgMwB%2F0m%2F%2BWuBoRStXBVe3ixTl721VTw0GKnDKGC7Jr1mhCr80wk%2F7SyQY6pgGsWpypdJMmL9a0e7iugC56ZyGv0eddLklLm1MpJwoMfPUD2lBy9c0mQEt0VEdpaJSmR7mN0OIYukZpsThDZB8L%2FkC9jrqxmYtcgC5QI2zLzWTbw7L3T4%2BTUfILDMd5MdvrL%2FbYL5I4j5gSKDqRpsPEDaSej1p1GJ8NdbTL2%2FwgkLieN%2FMKFQk8XE%2FUZBAXooi7zBybY2D0Ae7BcfA4JIlFpPiADcsu&X-Amz-Signature=9281b48e950076debca0e500c69d889a8167422f0fe4f535f0aecfe7337dc3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ42M7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUeIHtVaWdiC8BFiW6AM6RE3%2BUcFWdjPlLYReEUgdtdAiB99TK%2BkA%2F%2FLVHJpHy6ObYXKdWvJj7tZSkYIIK8BXtZaSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx85OoFukNu%2BmpM5YKtwDnbJb72pyT8yEwr8yDp8UwxlOKkjp%2FtDg8ctMiA8Y%2Fidq%2FqbapGegnv0iOkpwXVuDdo9bTIfT%2FhcPEpjnNvu99d33SuRFTK4hQjPXUeyxWSNAAZWDGEygPBbgezltxkKHd1GbwWDrO2PFw9rF7%2FNXoFPH9QlBRkCA5XzZ6gPOOBw2CGTlqY%2BOTCiHzCWh8uqZiSTEKJTuF82qoUJzl56RyJjqSsglNxnfPrEVN%2FB9%2B2exgMTn0JTIdspTKzJOhgIbW2zktPDYYNSLa463a8FGTrAk4HGH5oDawLfv%2BpLCKLKlHn6Wx8FNt3ixdC%2F05zaxgX3LQ5wkZf2bhe%2F55zJvpW34ls4J0Be2sqikaAEmavzsLefTDAfSe2Fdnigqw%2BI5QRa2FdB6eqdxASjRAFlWR7EfkPzeiZ%2FY0Yj%2BPixONOIs6Knb%2Fo%2FI6X6RwvmPMpaTmlVvyk%2F%2BG1jyHygl%2FDs9HmWixzJjSTu%2F6XAQH%2BjnNL2KKKM7ejd%2F5KdMu9jcHLSLu2T3LDUbFU6xB2EwckIZfFfRfN3DA02%2BUCwsJscnW%2FGZrYg8ln%2F%2FMHv0CzSO%2BKcwEUxdiIc4dKgMwB%2F0m%2F%2BWuBoRStXBVe3ixTl721VTw0GKnDKGC7Jr1mhCr80wk%2F7SyQY6pgGsWpypdJMmL9a0e7iugC56ZyGv0eddLklLm1MpJwoMfPUD2lBy9c0mQEt0VEdpaJSmR7mN0OIYukZpsThDZB8L%2FkC9jrqxmYtcgC5QI2zLzWTbw7L3T4%2BTUfILDMd5MdvrL%2FbYL5I4j5gSKDqRpsPEDaSej1p1GJ8NdbTL2%2FwgkLieN%2FMKFQk8XE%2FUZBAXooi7zBybY2D0Ae7BcfA4JIlFpPiADcsu&X-Amz-Signature=e1467f04f2c6048a3529ac2a755abd0cd1e0b1cff16689fded8699a3a3fe6128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


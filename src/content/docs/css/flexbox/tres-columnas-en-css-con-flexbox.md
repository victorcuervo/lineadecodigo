---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQ56QLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFEMWAKnEVyX%2FfIQiqB0GeVEhnqs8bdNC3HeD8vlYYn8AiAJA1sfh%2BSFauEYK%2Fmwn1EvR9vNvsKF7TIP96xfqp9Pyir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMj4qc9lpTMK0Lz3CsKtwDYdSn5QKyGktKMHTQ7oUjPuV%2FXBYjA39gWOJ0CH59AM1dWptQNZgyCq36CSnpLOfngKsIgNFXeQu0wiHra3eXpCkqqpahPGCihSxg%2FzA0f%2BZz4%2Be%2F7JEfIT3wKD9UqtSaOKTf7HLeib9BkH3Mk9vPQtPxw3iFZIhIMOz2sN7eaGQPA2RCVTTOUmMvKv5olOGc9bHRjc6C0X64toao9U17%2F1tMHplJH4eT94Xhi5bbNdbDJFUPUA8RqDpsMapBtI4pZiH1Ve9ztkynJyXwK44XTagQ3DpsKLHQF9xe4uoG1Mdlr8uW7N7%2FlEZWtZjBPdv47pq2UkfbuMm4%2BWMTHQ2hKQPkfzjVa3%2BdkdfxYcaU0R4KvvIn7e0MPlvQfgtQnrhW29TKDKs%2FlfeBwTfpnhweeNWN9n23Qf2CDUNuwAfJyEabAebbWfRIqRjuac31c7ixtuLKVRvqQL%2BatrPP5oGFbNZRW7kKWA6lZt3ugzzxdSr3I5uzrcJvkfuE4W9b62iV0Y4%2B%2FjG2qjQBaniy6jdxv8rp5p9yY32ldVBp8IKeQVeRt0LOXlohHcvy%2BqvO0LsG%2FiZGJWB6AUdVlg2HiRNpXeHL3ZcTQZ%2FT7mP0KFHtPQIlWODvxRPBePTZNoUw2ObFyQY6pgF0XGXzSAczJYBLFo5yKlRZU3PsUYllImHmDwtSVNUohyyi%2F6phwdEwRQ27gr05zK5DE2MxnffNuDN4NTIn5rhiDJ63SjzMw8Gbu27gzO7IqmUsK1mJeen0xvTYVro1sTDbXhzXlSYdDcD%2BWLfAeubK%2BwxDHPnujTLdPUkDpRhFwCOO%2Bo%2FZBVTnsb41%2BXb91lL5S3CsG3i7Vkr8QjgdbErFZBIM5jYg&X-Amz-Signature=2e2c173bf765f0e6784e097bd4aaa5f04ad1bb8ccbb0b63445457b0af179ac87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQ56QLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFEMWAKnEVyX%2FfIQiqB0GeVEhnqs8bdNC3HeD8vlYYn8AiAJA1sfh%2BSFauEYK%2Fmwn1EvR9vNvsKF7TIP96xfqp9Pyir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMj4qc9lpTMK0Lz3CsKtwDYdSn5QKyGktKMHTQ7oUjPuV%2FXBYjA39gWOJ0CH59AM1dWptQNZgyCq36CSnpLOfngKsIgNFXeQu0wiHra3eXpCkqqpahPGCihSxg%2FzA0f%2BZz4%2Be%2F7JEfIT3wKD9UqtSaOKTf7HLeib9BkH3Mk9vPQtPxw3iFZIhIMOz2sN7eaGQPA2RCVTTOUmMvKv5olOGc9bHRjc6C0X64toao9U17%2F1tMHplJH4eT94Xhi5bbNdbDJFUPUA8RqDpsMapBtI4pZiH1Ve9ztkynJyXwK44XTagQ3DpsKLHQF9xe4uoG1Mdlr8uW7N7%2FlEZWtZjBPdv47pq2UkfbuMm4%2BWMTHQ2hKQPkfzjVa3%2BdkdfxYcaU0R4KvvIn7e0MPlvQfgtQnrhW29TKDKs%2FlfeBwTfpnhweeNWN9n23Qf2CDUNuwAfJyEabAebbWfRIqRjuac31c7ixtuLKVRvqQL%2BatrPP5oGFbNZRW7kKWA6lZt3ugzzxdSr3I5uzrcJvkfuE4W9b62iV0Y4%2B%2FjG2qjQBaniy6jdxv8rp5p9yY32ldVBp8IKeQVeRt0LOXlohHcvy%2BqvO0LsG%2FiZGJWB6AUdVlg2HiRNpXeHL3ZcTQZ%2FT7mP0KFHtPQIlWODvxRPBePTZNoUw2ObFyQY6pgF0XGXzSAczJYBLFo5yKlRZU3PsUYllImHmDwtSVNUohyyi%2F6phwdEwRQ27gr05zK5DE2MxnffNuDN4NTIn5rhiDJ63SjzMw8Gbu27gzO7IqmUsK1mJeen0xvTYVro1sTDbXhzXlSYdDcD%2BWLfAeubK%2BwxDHPnujTLdPUkDpRhFwCOO%2Bo%2FZBVTnsb41%2BXb91lL5S3CsG3i7Vkr8QjgdbErFZBIM5jYg&X-Amz-Signature=8e3ed84b43943913a66d70faa78dcd5ea4af6df5ed439f3b2181825dc6b6c9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF53WZI5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQM36jwCSl2T8VQWBmbz6SRNEhNrrWcNCiv7k4MBc0gIgHFQteNDy6Sea%2B3o3anMDasDQgggiafuCHRrGD0rr7%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK85IXnPX9Q7jQffESrcA6GWYmFBuWfJ7yCJTJJtSlZzGaO7YQOFOg3EPTvpcBV93FoD0Kr8js0Rtjc%2BE%2FgHRsd3HqImfO4g7XMnJjb4KFkd4D3t9hFloj%2FjTeKrwhb4CAbRh1qmQs%2FtbkIw7VA5RWFwQVUFn5PuKbrBDZvBisAWNel22KgKqQf8u9HFV4ohDbkEaXRE9jwB%2FqXX9Qt2FUtjdICrIaQXfPHLcuivn9GuVqT1CAjijXporOSPm0Ou9ZQ5MhwYFkQdvDLC9HFwTM9MhWXdoXvZz2f3g7FBZPnrRpY7GFZ5cfW6k8BwkYt5IWAuC2%2FhVCoD8%2BvQwcaEedvPoQXytXkd%2Bxr3MvulidplteuPtS7NoxXgNrLeuBc%2FE6yl2SSojxgWBfWpAasiGBgT7V4uDj0h0MTfjZ3iSF%2B70RVDuhyYR5N79kQOtlA6wzOu9SNoXeQ9TEbAQ4mmV%2F3fr9Cif36vDbN%2BQqfYIapTdcKbCdtpvGbInum0dWCRXIASzuz8H9vba6h7ULIYDkLkqbDT2NF2Mpaf8bteDCFgptanWQDS5c57Muhvz9%2BUZZMH42I4JUlfViJhd1icNJZl5bzVcreGS5EUCSKdH05XdSHKCkKAOmM9N2qU5JIObmIUD2QkMWjXLUnkMM%2Bm0MkGOqUBWUrvrM1ECINkXdZvsvAC7p3F06zGIrKVk65jQTi09P4ZpQiAuTliWLjSaRFSZOtnDFMhoBf8OvK4whxBQEjVRemEDaxcfXw%2BeTpkAMVAzvOuup47hPqH5w%2BW%2FScIk%2B9l%2BXvOGpth6fE0IZPbL5hTDLORKqvpTfu6a%2F7uLQwfsIhbp7NmRLOwbCl1DHYDgLtXwdZcGKlpzotFEvik8Tl3XFXqHAWS&X-Amz-Signature=4f6f07291a96ab461edee0c463867418197e6f0d2aa4e13e36d445211797329b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF53WZI5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQM36jwCSl2T8VQWBmbz6SRNEhNrrWcNCiv7k4MBc0gIgHFQteNDy6Sea%2B3o3anMDasDQgggiafuCHRrGD0rr7%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK85IXnPX9Q7jQffESrcA6GWYmFBuWfJ7yCJTJJtSlZzGaO7YQOFOg3EPTvpcBV93FoD0Kr8js0Rtjc%2BE%2FgHRsd3HqImfO4g7XMnJjb4KFkd4D3t9hFloj%2FjTeKrwhb4CAbRh1qmQs%2FtbkIw7VA5RWFwQVUFn5PuKbrBDZvBisAWNel22KgKqQf8u9HFV4ohDbkEaXRE9jwB%2FqXX9Qt2FUtjdICrIaQXfPHLcuivn9GuVqT1CAjijXporOSPm0Ou9ZQ5MhwYFkQdvDLC9HFwTM9MhWXdoXvZz2f3g7FBZPnrRpY7GFZ5cfW6k8BwkYt5IWAuC2%2FhVCoD8%2BvQwcaEedvPoQXytXkd%2Bxr3MvulidplteuPtS7NoxXgNrLeuBc%2FE6yl2SSojxgWBfWpAasiGBgT7V4uDj0h0MTfjZ3iSF%2B70RVDuhyYR5N79kQOtlA6wzOu9SNoXeQ9TEbAQ4mmV%2F3fr9Cif36vDbN%2BQqfYIapTdcKbCdtpvGbInum0dWCRXIASzuz8H9vba6h7ULIYDkLkqbDT2NF2Mpaf8bteDCFgptanWQDS5c57Muhvz9%2BUZZMH42I4JUlfViJhd1icNJZl5bzVcreGS5EUCSKdH05XdSHKCkKAOmM9N2qU5JIObmIUD2QkMWjXLUnkMM%2Bm0MkGOqUBWUrvrM1ECINkXdZvsvAC7p3F06zGIrKVk65jQTi09P4ZpQiAuTliWLjSaRFSZOtnDFMhoBf8OvK4whxBQEjVRemEDaxcfXw%2BeTpkAMVAzvOuup47hPqH5w%2BW%2FScIk%2B9l%2BXvOGpth6fE0IZPbL5hTDLORKqvpTfu6a%2F7uLQwfsIhbp7NmRLOwbCl1DHYDgLtXwdZcGKlpzotFEvik8Tl3XFXqHAWS&X-Amz-Signature=94fc4983423a9208c814bb4991e9082ea75e471c2b0853f7aa484cd10ccbc14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


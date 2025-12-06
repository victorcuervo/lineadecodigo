---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFLGMHR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ1s3Q5sW9sD4THKX1HzAxvfoVxHVc9ZmU6TZxsI%2FxqAiBTffVJVP2nuyd4ovcmBZx4cfPxb4NpONedcKgwTSx5Xyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM72DZYyox94d9vIJ0KtwDJtdmENa7ZBNMdVy1VTa2pWjijXe6EjIYaybmGINHKmUxdmExv8YBDStS5wRv%2FizbubFJjLh05OpB5VkCPsy7sCl9I8rPEkPoH70RW67RA847z8MMJtEuV%2FIVeFg8RbQtGnTJJsa2T897iJ8d3j4%2BVv9KsyrcOwzzPcybSsDK%2Bs5NP%2BQbvuQ%2FkPvf0afk9VHgJK1tlwKeyzxh9jTXOSsWh02EnhyK8Msy%2BO3Dh%2Bo9%2FydDOJhptGjXlBNAa%2BAip6svPhyapL8fry03cMwpm4131a%2Bx0Ns%2Fr%2BkD2np8KOzyB5GPX1IR7khJNRNaOkjRaeWB5w2IKYS%2FCqIRgfYq%2FjYSXChhbvEE%2B83co0c5NcYtkc45DXxHZzlsajW%2FQGIlkpf9BrCud3qws0LgKa6v2N%2FsjpZR4M%2BmvpzbOqwRTa70wVRaSZRGTYEqIUJrP6IP3qLoldgm5Pg6iTrTkvrvmjCeJSBsAlpNz3HOrjgd2xjto00JiZKH577GVpkqp47OTXmtgurTqMge4ITW5yipSRe7eEwNZEtM2UiLQf%2BcNU26Mz1u5sgv3jrRnhQT%2BqLWjpvLC8%2BefHM0TgLL36xHuss5jpueZqbsecBStvHTYAELyqCO96%2F9KZd%2FKu9ukSEw38PRyQY6pgHDnlP50sjfmFma5T0%2BFEcwsKRJxT4giguAYkviw2KZq2njHj5tD1IumYRESaE6jjq5%2BK9hZ3s64H7DwdUHMrSlhOldfyKbvPfJQnZ3csu1EAGys7hp2%2FdFxiBckLA8kK%2F5SOCcxuvtm40MgmFNBnPALreAFIJ%2F5mqm6YcG7H9dybba%2B3JTlD2jIWsGUM%2B7VJJKFQAVJsVPq0fJYkeRF6S1nhs5BWdg&X-Amz-Signature=4a3dd23cd6e1b936fda011e582358e796842c2ca67f244ba018d3a36c5d0c88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFLGMHR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ1s3Q5sW9sD4THKX1HzAxvfoVxHVc9ZmU6TZxsI%2FxqAiBTffVJVP2nuyd4ovcmBZx4cfPxb4NpONedcKgwTSx5Xyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM72DZYyox94d9vIJ0KtwDJtdmENa7ZBNMdVy1VTa2pWjijXe6EjIYaybmGINHKmUxdmExv8YBDStS5wRv%2FizbubFJjLh05OpB5VkCPsy7sCl9I8rPEkPoH70RW67RA847z8MMJtEuV%2FIVeFg8RbQtGnTJJsa2T897iJ8d3j4%2BVv9KsyrcOwzzPcybSsDK%2Bs5NP%2BQbvuQ%2FkPvf0afk9VHgJK1tlwKeyzxh9jTXOSsWh02EnhyK8Msy%2BO3Dh%2Bo9%2FydDOJhptGjXlBNAa%2BAip6svPhyapL8fry03cMwpm4131a%2Bx0Ns%2Fr%2BkD2np8KOzyB5GPX1IR7khJNRNaOkjRaeWB5w2IKYS%2FCqIRgfYq%2FjYSXChhbvEE%2B83co0c5NcYtkc45DXxHZzlsajW%2FQGIlkpf9BrCud3qws0LgKa6v2N%2FsjpZR4M%2BmvpzbOqwRTa70wVRaSZRGTYEqIUJrP6IP3qLoldgm5Pg6iTrTkvrvmjCeJSBsAlpNz3HOrjgd2xjto00JiZKH577GVpkqp47OTXmtgurTqMge4ITW5yipSRe7eEwNZEtM2UiLQf%2BcNU26Mz1u5sgv3jrRnhQT%2BqLWjpvLC8%2BefHM0TgLL36xHuss5jpueZqbsecBStvHTYAELyqCO96%2F9KZd%2FKu9ukSEw38PRyQY6pgHDnlP50sjfmFma5T0%2BFEcwsKRJxT4giguAYkviw2KZq2njHj5tD1IumYRESaE6jjq5%2BK9hZ3s64H7DwdUHMrSlhOldfyKbvPfJQnZ3csu1EAGys7hp2%2FdFxiBckLA8kK%2F5SOCcxuvtm40MgmFNBnPALreAFIJ%2F5mqm6YcG7H9dybba%2B3JTlD2jIWsGUM%2B7VJJKFQAVJsVPq0fJYkeRF6S1nhs5BWdg&X-Amz-Signature=1df909f235b3a09e171ce33361fd998962001e0651d412a381bf34ea1c36f7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


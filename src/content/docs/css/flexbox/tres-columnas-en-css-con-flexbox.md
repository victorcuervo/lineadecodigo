---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMYCAAD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC4IfOm%2FtYXPpLuZW9xELE5g6qKVwMd89x9o6zuccU8LgIgOvzUwQmSxLz8vWGIJEFZHOksdySwVGX2LO6atx%2BpBYEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOEm1Gxo8lIa%2BhFmkSrcA105aoWArbtpngKXbaa1pIlsiAdAnJixskCj8HZXZu3dt1qVKLoOkbyiVe5FShPZdczKk%2FG50gP5dUBsVf%2B3qU6Va8vlB6lv4NL55Ov06m9S%2FL0e5e%2F94lra1vVWX4i1s0QhDpcDCeOUhVbtfswU34UvrWoc71NfV5YhCUvIVyts85fvwtISjB3BH%2F5bL%2FgubNI%2BV90Q1f0qmypiw6%2FWKg98D9aHhEla8ZDtglctokquV4eSJ165Q3hgZssZGPLAI6EOZ8K%2F1MgvmhjxQeGYj6Ow%2FvTvszdKyb1vsx0ygA99w0w7KJNlbCOJO5J%2Fvn3YOo5VSumHwWeTnsijcHj8ZrkK4x%2BJ1J15jq4XC1%2FmCcAG9bowXvdsK4DhuDNhY0cH4k6JrXjih9oDufhP%2BXAK0sDW2xFjKNCVczmxwi96Wn0M10EG1d2S1jUGDq5moksq9VLcecaI6D1zEqdtTicmRp%2BshFSQ6ebrciIIpTeQgoxRlp8xEfi%2BvsDPMYxW%2FFcfVNcEE5HcW73O47ntBMcWDNIN8z8zmWkVZmQhPkMwOcNgNUdsdlLs8IJtwq1t0mlKfeHE3GC8Vvkd6sEacXBDcce0SACZyun3NcQVgF1e1err7Iwr3ywLrjlAVdHgMLiuxMkGOqUB6NbFbQx6J3ksQWFRZwyjAx1qhYaFhFtSeS5FupQA0kWlSM2xezrQYpPRZ%2BhRMBFVGYE28XFE4HHDgtsOD%2BkUVgMzFxyi%2FejpTwDh6BMhONBU%2B0hExJ0KeJoaLEEQA9%2BKeQjKS4Dugg6RtLKYa8p8%2FWpTh%2BEefSg7aI320IsB3YdmhTetJtFHyivq44sl%2FwdjL%2FRjWUa0Q6z0xLu6Nuf4BcbWMgYy&X-Amz-Signature=3aebc153312a0a8da049073311698b94715aeefdd95a3fafb4c6f55a051cdf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMYCAAD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC4IfOm%2FtYXPpLuZW9xELE5g6qKVwMd89x9o6zuccU8LgIgOvzUwQmSxLz8vWGIJEFZHOksdySwVGX2LO6atx%2BpBYEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOEm1Gxo8lIa%2BhFmkSrcA105aoWArbtpngKXbaa1pIlsiAdAnJixskCj8HZXZu3dt1qVKLoOkbyiVe5FShPZdczKk%2FG50gP5dUBsVf%2B3qU6Va8vlB6lv4NL55Ov06m9S%2FL0e5e%2F94lra1vVWX4i1s0QhDpcDCeOUhVbtfswU34UvrWoc71NfV5YhCUvIVyts85fvwtISjB3BH%2F5bL%2FgubNI%2BV90Q1f0qmypiw6%2FWKg98D9aHhEla8ZDtglctokquV4eSJ165Q3hgZssZGPLAI6EOZ8K%2F1MgvmhjxQeGYj6Ow%2FvTvszdKyb1vsx0ygA99w0w7KJNlbCOJO5J%2Fvn3YOo5VSumHwWeTnsijcHj8ZrkK4x%2BJ1J15jq4XC1%2FmCcAG9bowXvdsK4DhuDNhY0cH4k6JrXjih9oDufhP%2BXAK0sDW2xFjKNCVczmxwi96Wn0M10EG1d2S1jUGDq5moksq9VLcecaI6D1zEqdtTicmRp%2BshFSQ6ebrciIIpTeQgoxRlp8xEfi%2BvsDPMYxW%2FFcfVNcEE5HcW73O47ntBMcWDNIN8z8zmWkVZmQhPkMwOcNgNUdsdlLs8IJtwq1t0mlKfeHE3GC8Vvkd6sEacXBDcce0SACZyun3NcQVgF1e1err7Iwr3ywLrjlAVdHgMLiuxMkGOqUB6NbFbQx6J3ksQWFRZwyjAx1qhYaFhFtSeS5FupQA0kWlSM2xezrQYpPRZ%2BhRMBFVGYE28XFE4HHDgtsOD%2BkUVgMzFxyi%2FejpTwDh6BMhONBU%2B0hExJ0KeJoaLEEQA9%2BKeQjKS4Dugg6RtLKYa8p8%2FWpTh%2BEefSg7aI320IsB3YdmhTetJtFHyivq44sl%2FwdjL%2FRjWUa0Q6z0xLu6Nuf4BcbWMgYy&X-Amz-Signature=03360a207b368eb3b622e96b14facb508f9f31902dd99fe32007fcb216b695af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


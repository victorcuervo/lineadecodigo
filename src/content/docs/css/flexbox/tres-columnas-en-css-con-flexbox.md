---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBQAIM2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdezZQyn1tjcpolEYVCeYlkaLV6XnbdvZSOZqY71BMCAiEAziXnnnbofI8vH0GzSm%2Bph9nzdj%2BWXRXHRoQRKSLNjWkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BXP0fF6WcwPjTYircAw5lma0JBsGg0fT7tI787fUGXiM3RADLUWXCUYdRG2giZkx9Hhn1cEB%2FquMwg6nusKYFN8wmXdm%2BbsnPAbcYFofAYqUXvMedOoxppuzKnEZNAChAAPy3RcmDpXhFvOtPqBMvwDhc7o6LZcWNlsHJ9mhC5Y4ks5Krs5RVupp08oQHY2BOOvBd7Z6pXjQ9oaqSYydqap5WOkseEe%2FWeCUARlEdFgRNLLhrgZlKNCsU4v1LcCU%2FWftteLeK9XRvciDHsPvwNtr5354%2FQ0%2BYZhYUOHYVl4cLvsSRxB%2FETPtjnvMxpABHzMT26pV7f7kEGNN2uYqkg4GxrUPT59N4SkpmkYbYC1bHjk2zLQ%2F65mxk5nJXTwaJxzKHKgqvTmdFTyPt6%2B234bxxxQ8hAuwzmVr11vwGnqw84hO4e2nk%2BjaKx%2FjUT4mBpypgVu%2FTGPsp1Gk%2F489QhASspb3NlLxdrKBIma%2BGJ%2B4HsgLiwqXFR7EcGQISYW5rYzSYN7%2F4XcpepLUodFu30%2BOya86BFfgcIoGpjM3MU6R81cAKhDBMaNG3Ksa%2FLxZOveoz3DWoKGdyhr6Lu5bkEi2IX9ZVVZdRvQ3L97IOPtH%2BYR%2BgOkyfXekDsjWyZPlCRqgiokoLhgqWMIft2ckGOqUBREpvGkAHd0yqZ2sE05qP831Yuhlp3MRazQlMotCfvjHcmbsYAZedAvuJyfzdE9O%2Fwp8x%2BOyuOz3LABtifxhrDkx%2B9tKmag29ObwQbCBMk1cQ84Px7GYKWaK%2Fdx%2BTkxxwhkx0NTM%2BdhWjv5yAp6G84paWXj5aZsE6rHx3bqG9WAzDp40DQ4aNq6fmAPBepisod4IIJHh864dgFygUJzpG8kCE9KeK&X-Amz-Signature=6b1fc1021e0a010cee69e902ff8e070d97684461bbfbdfabeaf6186e74b29dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBQAIM2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdezZQyn1tjcpolEYVCeYlkaLV6XnbdvZSOZqY71BMCAiEAziXnnnbofI8vH0GzSm%2Bph9nzdj%2BWXRXHRoQRKSLNjWkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BXP0fF6WcwPjTYircAw5lma0JBsGg0fT7tI787fUGXiM3RADLUWXCUYdRG2giZkx9Hhn1cEB%2FquMwg6nusKYFN8wmXdm%2BbsnPAbcYFofAYqUXvMedOoxppuzKnEZNAChAAPy3RcmDpXhFvOtPqBMvwDhc7o6LZcWNlsHJ9mhC5Y4ks5Krs5RVupp08oQHY2BOOvBd7Z6pXjQ9oaqSYydqap5WOkseEe%2FWeCUARlEdFgRNLLhrgZlKNCsU4v1LcCU%2FWftteLeK9XRvciDHsPvwNtr5354%2FQ0%2BYZhYUOHYVl4cLvsSRxB%2FETPtjnvMxpABHzMT26pV7f7kEGNN2uYqkg4GxrUPT59N4SkpmkYbYC1bHjk2zLQ%2F65mxk5nJXTwaJxzKHKgqvTmdFTyPt6%2B234bxxxQ8hAuwzmVr11vwGnqw84hO4e2nk%2BjaKx%2FjUT4mBpypgVu%2FTGPsp1Gk%2F489QhASspb3NlLxdrKBIma%2BGJ%2B4HsgLiwqXFR7EcGQISYW5rYzSYN7%2F4XcpepLUodFu30%2BOya86BFfgcIoGpjM3MU6R81cAKhDBMaNG3Ksa%2FLxZOveoz3DWoKGdyhr6Lu5bkEi2IX9ZVVZdRvQ3L97IOPtH%2BYR%2BgOkyfXekDsjWyZPlCRqgiokoLhgqWMIft2ckGOqUBREpvGkAHd0yqZ2sE05qP831Yuhlp3MRazQlMotCfvjHcmbsYAZedAvuJyfzdE9O%2Fwp8x%2BOyuOz3LABtifxhrDkx%2B9tKmag29ObwQbCBMk1cQ84Px7GYKWaK%2Fdx%2BTkxxwhkx0NTM%2BdhWjv5yAp6G84paWXj5aZsE6rHx3bqG9WAzDp40DQ4aNq6fmAPBepisod4IIJHh864dgFygUJzpG8kCE9KeK&X-Amz-Signature=4ae76a107095e61a07ec172c6b1f9e440710f653770262bf6a96ea951e053d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


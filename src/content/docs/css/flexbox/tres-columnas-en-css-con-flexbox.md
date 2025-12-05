---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQJJEIE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZryMYAVHNFVAnkJoT9vl57xg7x1auQFgk4DRgsfeSZQIhAImNYOC2ciwYCx6KDiDsaMRKVYi9upvPgC3%2B9taDl43RKv8DCGAQABoMNjM3NDIzMTgzODA1IgzshDrL2TiHhbQK5YMq3AP6N3FlacieaGiNx2ddihJrv5lmpHcsnHJQqBkaxJQ%2BdOA861pHrW%2B52%2FJd0hQB0OY%2FJxJ7S2y%2BJgEfkbIwpVPW5Adz%2BvjkhAdi5TwX%2BoVVADDxStK9gCUIRI8C7D%2FVkZakFmN44RoyLdiARnXiqSYb4AJlLCcYOX1AEbQmrAYSQ9mW6xBGPftIg4VwsJzNomSoJ%2B5RBZw%2FrXnBib%2FqXxGd7BrNGIeqdFP2i%2BwEGvHnWcUJSTVt3KRFjtpDVfLWsOmcaF1JTUey7YwLWOFzgfaPC1o8l6IiILrB8QyytFl4GuZGQ5Mm4R0WcoBHESfs8rpPBwl2VXR3bBhP%2Fj297vPkpP2pz16vHANIorb9pHZTON5tooBl8oDf%2FsIRskMXW5FBs%2FpaQLJCczjKgYWOC0C381VRlPqI9%2B3gBObFEkhsivjr6lLjDNhDrbxAHZWSV7dorw2slARiTYX8ab9q1hqIGp%2F7nOEytjay5s%2FMVf1aXMijwy2%2BAWgelF7Z%2BKtHtqEzmzIZ00iN1yzWDRKABndnMHmbfbEYjF60P0iknQj5T4NU5cXueINhjr%2F5OacAvAusushUIpe3e4mbz9LyuRhH7IDiPzOKWMn4sl0BMcLsCKRre%2B%2FXZEE78IEsLzCh7MvJBjqkAQjN6zLxlddQExZOibNCngknjGFpC9VkavuHKzb0yxTI6YL9Vmib0Zf61XRPdf%2Bm6bl5CrocirHm9tfg1bKLcL9Uep8zwhgEnsUrYO3%2BLY8P1OmxWTze8s2OQYRAF3fePAEMc%2B%2B7itQScL%2BVmIMSqrNBR9K50E6kDmtHeFayC1emFOSU9QKaBf%2F9WuGyrFxDViSfsdxOjgS5hNITsOq2Sjjo%2FMGb&X-Amz-Signature=02090bc166b49c1572b58e6c99f6f538dd81ba4316f600e9a0b1c52a6d268361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQJJEIE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZryMYAVHNFVAnkJoT9vl57xg7x1auQFgk4DRgsfeSZQIhAImNYOC2ciwYCx6KDiDsaMRKVYi9upvPgC3%2B9taDl43RKv8DCGAQABoMNjM3NDIzMTgzODA1IgzshDrL2TiHhbQK5YMq3AP6N3FlacieaGiNx2ddihJrv5lmpHcsnHJQqBkaxJQ%2BdOA861pHrW%2B52%2FJd0hQB0OY%2FJxJ7S2y%2BJgEfkbIwpVPW5Adz%2BvjkhAdi5TwX%2BoVVADDxStK9gCUIRI8C7D%2FVkZakFmN44RoyLdiARnXiqSYb4AJlLCcYOX1AEbQmrAYSQ9mW6xBGPftIg4VwsJzNomSoJ%2B5RBZw%2FrXnBib%2FqXxGd7BrNGIeqdFP2i%2BwEGvHnWcUJSTVt3KRFjtpDVfLWsOmcaF1JTUey7YwLWOFzgfaPC1o8l6IiILrB8QyytFl4GuZGQ5Mm4R0WcoBHESfs8rpPBwl2VXR3bBhP%2Fj297vPkpP2pz16vHANIorb9pHZTON5tooBl8oDf%2FsIRskMXW5FBs%2FpaQLJCczjKgYWOC0C381VRlPqI9%2B3gBObFEkhsivjr6lLjDNhDrbxAHZWSV7dorw2slARiTYX8ab9q1hqIGp%2F7nOEytjay5s%2FMVf1aXMijwy2%2BAWgelF7Z%2BKtHtqEzmzIZ00iN1yzWDRKABndnMHmbfbEYjF60P0iknQj5T4NU5cXueINhjr%2F5OacAvAusushUIpe3e4mbz9LyuRhH7IDiPzOKWMn4sl0BMcLsCKRre%2B%2FXZEE78IEsLzCh7MvJBjqkAQjN6zLxlddQExZOibNCngknjGFpC9VkavuHKzb0yxTI6YL9Vmib0Zf61XRPdf%2Bm6bl5CrocirHm9tfg1bKLcL9Uep8zwhgEnsUrYO3%2BLY8P1OmxWTze8s2OQYRAF3fePAEMc%2B%2B7itQScL%2BVmIMSqrNBR9K50E6kDmtHeFayC1emFOSU9QKaBf%2F9WuGyrFxDViSfsdxOjgS5hNITsOq2Sjjo%2FMGb&X-Amz-Signature=333b24f8dbc55739671cb26233afd2e5e1badbfe154fb6d46ff1b1fb96951a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


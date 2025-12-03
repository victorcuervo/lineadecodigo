---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3QAEMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCWLw8ghPA%2BiONLzvtQxPeuYfS75HHI8rSe6n8j3H50HQIgZxoRo%2B5Wt24WGe9NRQQkwEFSalz8niFgW%2FifAuykBYoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIKZ6YET7sp8J%2BlbwCrcA1XAjT%2F9Qh90y2voVmOD6MGGPSvs1dt1iiFBRJxyDW9uoXoBYnTfErlfAJZUiEIXZvk%2FoNwNeK%2FGoTUdBwNyWYXfYXL4uRDZ0uGjE3qGBmDJ8C4g80j1CFfMIoQWUnRz8b0zqtkoIlYB2TBJXq53xNPMbKX4MOXZFrOQ9c7k3kI%2FHH7qJVNNI89pnb06OnEepfUqLuH97T1a4juWXLHLdg4JAS9rwhAAyViwcihIB11x9DHmKRX9unjMWrO6FDrgUkkuvJRY1AG6udcPW%2FVdY0XQvR5EDm%2B1eXFwMFbTzY3FRc%2BxqJU98xWYjlWc5yrj89om65C1Pb8jtrUYcYUhLaQTZMiV819I7QNZcy8I3JbUvv0%2FLNAVVoF5pjLhsVuzd5hA6v7CM%2FraQ%2F2j4qSQLNp2A9Gem7r1w2s71ZBMpRbOTVbOT0e5haaVB45OGujeRN9gYMJGEQzLfpH%2F%2FbKEqu9x6KiX%2FK1Jx%2BIWiqzyQM7xPCQiixpp%2FPma8Y19eRIPhCSDzAVIqZdGlTSL%2BvVcFk0Eub0IhgYyJOI9S%2Fhb5%2FE0fnGUTo63QJ9TMSB3MCLPQ6B4USqaETIWIRrox7eOXkwjAtI4%2BtabQxxfiH0ONg0lCEAaNKo953r%2F2m0bMMP4wskGOqUBxd4kedPHSjA5IkqcLN0yC0%2BaVttdSwUmuc1qm6w84rsP9mSg9cnZV9B9IWvPjYNah8scQL8EAMoC3csIQyApQNWH4zkxr2hnn6HSVFEYCWvqldEQXgylQkU264460N4c0oB841COU6uxrxOfkunnLe1KKJEWai3c8xFiH8qRSEaB%2F4e6iMscJDSsirv7HlcEl2FyXXbiAIWLRRFm%2FsLQV%2BP0UcEk&X-Amz-Signature=3788cd74d62e37240b58931684758229837883ebf2d34b00af680628368239ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3QAEMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCWLw8ghPA%2BiONLzvtQxPeuYfS75HHI8rSe6n8j3H50HQIgZxoRo%2B5Wt24WGe9NRQQkwEFSalz8niFgW%2FifAuykBYoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIKZ6YET7sp8J%2BlbwCrcA1XAjT%2F9Qh90y2voVmOD6MGGPSvs1dt1iiFBRJxyDW9uoXoBYnTfErlfAJZUiEIXZvk%2FoNwNeK%2FGoTUdBwNyWYXfYXL4uRDZ0uGjE3qGBmDJ8C4g80j1CFfMIoQWUnRz8b0zqtkoIlYB2TBJXq53xNPMbKX4MOXZFrOQ9c7k3kI%2FHH7qJVNNI89pnb06OnEepfUqLuH97T1a4juWXLHLdg4JAS9rwhAAyViwcihIB11x9DHmKRX9unjMWrO6FDrgUkkuvJRY1AG6udcPW%2FVdY0XQvR5EDm%2B1eXFwMFbTzY3FRc%2BxqJU98xWYjlWc5yrj89om65C1Pb8jtrUYcYUhLaQTZMiV819I7QNZcy8I3JbUvv0%2FLNAVVoF5pjLhsVuzd5hA6v7CM%2FraQ%2F2j4qSQLNp2A9Gem7r1w2s71ZBMpRbOTVbOT0e5haaVB45OGujeRN9gYMJGEQzLfpH%2F%2FbKEqu9x6KiX%2FK1Jx%2BIWiqzyQM7xPCQiixpp%2FPma8Y19eRIPhCSDzAVIqZdGlTSL%2BvVcFk0Eub0IhgYyJOI9S%2Fhb5%2FE0fnGUTo63QJ9TMSB3MCLPQ6B4USqaETIWIRrox7eOXkwjAtI4%2BtabQxxfiH0ONg0lCEAaNKo953r%2F2m0bMMP4wskGOqUBxd4kedPHSjA5IkqcLN0yC0%2BaVttdSwUmuc1qm6w84rsP9mSg9cnZV9B9IWvPjYNah8scQL8EAMoC3csIQyApQNWH4zkxr2hnn6HSVFEYCWvqldEQXgylQkU264460N4c0oB841COU6uxrxOfkunnLe1KKJEWai3c8xFiH8qRSEaB%2F4e6iMscJDSsirv7HlcEl2FyXXbiAIWLRRFm%2FsLQV%2BP0UcEk&X-Amz-Signature=efbc785659023ef4d1edde82e4326e28a3bd1f3fd4b0a017ff4f06c93578196d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNNAXIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT3XLx3MvuvgR9I7Gi%2BCC4Q0AQ59t3hGq4U0P3RS9uCgIgOKg5qzFxwjzlz1DM8RTZSuqKDMdhDYxDirtN75NqqSgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD33oREnAQ2h1kMz9ircA%2FLwO3j256RLpWV%2FNuOGUdngQrzuENh8RLAMVW8AGDMYESDKEGLTXerRr5fGg5bYofPu0UlmGTjQ9bKz7bP86Tx%2BDITFIC4OrfzCVV83C8peYhHYTeb8ZBCVPkVaSKtUqN%2BiR4PuTu%2BQOqPDMHrKuk2nTqxPaYBdoS%2FEsPMyKMTiZpJ63JlfJJeSqvOwA1ECTTqRnlXUHbnUFltG49m%2FTG1lpGZcGiqKukjOpnq4G%2BkNSx7ioWRI8N5tc4i1g1o8yCEZlOFzj6LfTSJh4wAH7qX5u579OvEecumUbYvcNINblRfXb%2BB6mKXrtPXU996QyX%2Fo99wD6TsPhgzdJZyv9009cjkD%2BLBhAjmnSBUNu%2FPYDqfRxceYGsH1XCNDYdhjjQTYt1G3NJm%2FHBVSKHMMHutOY0yCC0RVRwDu%2BSXpsXrCTT%2FVuOixmojG0Hg%2FC1V%2BO7VKABJRfeGaQndZM%2F1jaYaSKIbi8adm6JR4HBo%2FFDkyk7nOOH4sfmm4Gw69R12Heg5wxgoGpDwGIZrOcUPwsYUieqMaQ4lKz0igDHSh1Pjt2sxzH6b%2FDbELLmcUGAHpmyK6W4alf%2BibavykMS6CdRvd6J03kX6GuLoj2eTGSXYlQCq4pIHH2YNlfo5bMKvB28kGOqUBgKjNeCuGal8njpZXFfCc1GklAGCHkkcpHc4rVqe1P8woPnRwr5c558fj5GnC0pRp%2F9yiLN5BSqsVKhDZPelfh0UBIl6nbrnHDLKaDnCF3SjUwwh0XCuN31iStJ0VfvJwOy9bH%2FERRTATfLg113uqJlQPiXfortfY0jpXyO%2FI%2Bb837JJ43rfw4wi2YO1Uke9AZ36uHtwzbcRmiceobDri%2FN70Tabw&X-Amz-Signature=59de51c9567b23cad980c699863ed9a7549d4bfd95dc40844427807c9aa1dd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNNAXIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT3XLx3MvuvgR9I7Gi%2BCC4Q0AQ59t3hGq4U0P3RS9uCgIgOKg5qzFxwjzlz1DM8RTZSuqKDMdhDYxDirtN75NqqSgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD33oREnAQ2h1kMz9ircA%2FLwO3j256RLpWV%2FNuOGUdngQrzuENh8RLAMVW8AGDMYESDKEGLTXerRr5fGg5bYofPu0UlmGTjQ9bKz7bP86Tx%2BDITFIC4OrfzCVV83C8peYhHYTeb8ZBCVPkVaSKtUqN%2BiR4PuTu%2BQOqPDMHrKuk2nTqxPaYBdoS%2FEsPMyKMTiZpJ63JlfJJeSqvOwA1ECTTqRnlXUHbnUFltG49m%2FTG1lpGZcGiqKukjOpnq4G%2BkNSx7ioWRI8N5tc4i1g1o8yCEZlOFzj6LfTSJh4wAH7qX5u579OvEecumUbYvcNINblRfXb%2BB6mKXrtPXU996QyX%2Fo99wD6TsPhgzdJZyv9009cjkD%2BLBhAjmnSBUNu%2FPYDqfRxceYGsH1XCNDYdhjjQTYt1G3NJm%2FHBVSKHMMHutOY0yCC0RVRwDu%2BSXpsXrCTT%2FVuOixmojG0Hg%2FC1V%2BO7VKABJRfeGaQndZM%2F1jaYaSKIbi8adm6JR4HBo%2FFDkyk7nOOH4sfmm4Gw69R12Heg5wxgoGpDwGIZrOcUPwsYUieqMaQ4lKz0igDHSh1Pjt2sxzH6b%2FDbELLmcUGAHpmyK6W4alf%2BibavykMS6CdRvd6J03kX6GuLoj2eTGSXYlQCq4pIHH2YNlfo5bMKvB28kGOqUBgKjNeCuGal8njpZXFfCc1GklAGCHkkcpHc4rVqe1P8woPnRwr5c558fj5GnC0pRp%2F9yiLN5BSqsVKhDZPelfh0UBIl6nbrnHDLKaDnCF3SjUwwh0XCuN31iStJ0VfvJwOy9bH%2FERRTATfLg113uqJlQPiXfortfY0jpXyO%2FI%2Bb837JJ43rfw4wi2YO1Uke9AZ36uHtwzbcRmiceobDri%2FN70Tabw&X-Amz-Signature=2427dea2ee6c68c378f4d9c9c91313f0304f86a3204706b5d87396799a3546d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


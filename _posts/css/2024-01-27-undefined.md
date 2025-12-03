---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RN7GOU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFf0m1CzxufgccW4bzk9VlwM%2B%2FSAjTc6vSAZAb3ikKv1AiAuie07Gmsj3ms0O43iAm4KN%2BU1v7gUahBwtunwV5M8ASr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMEo4wM5x%2BBU6IOJqHKtwDLjlptP6MtItMVYNDv%2BxlV%2FMGmAaN2NMTe1w1AVm47KVyTfFQgPU%2F5XtAak0pR3dPnqtpNxZkBOGCaWI9n9Q%2BYWTvJxIo4KY6qpO43nST5rSSIZWes7Az9nT4GiN0E252aqn5xSLZgX%2BsMwYxL6l5q8BhEE4kGVOAMGCBADPsabYta%2BGao16AZ%2BrRN5vQzW%2BI%2F7TW4640R4OFJXVk4O4nWzauvqoV3AY75%2B7D0vilAXHgEf4Oa0cDS0nUqZQ6eNbhw7a%2FxkbHMRDUrHealGAYmBhd4BnAc2yqc%2Bm9dsscEVF7%2FFYJ4vD1M%2BJihGKfoJ1YWeYvpDjxCGec4CwwdatpBmOXwn0zzI2b%2BLjZoQQ%2FqF%2B7R2h82zemLVxWXkRW0YncXvFGOSCEmcODa6tM2ksnlN3ZskuRJFMlH70k8UbbMd4Ir%2FSjONyXsriOHR%2B%2BDzD4ZVO%2BYF5YOSoFvfLG6f0ADVhoHnji9Wp4%2BtAq26sj%2Bquk%2FfKOJowXzg26pW2BU9vmDRDfuv3fDX0cZtaoGBt5CysoZovN87maluTIjrulbqfNgXZTGk7UVX%2FObspfJyg62pRVV64Z4PsrFhz15GeYvY8HqStIgtrgOajzk%2FaAfanDFhezfAisCW5nFk0wo%2BnAyQY6pgFjFBYwNtVLA3a2nNkDw8D0gRqb6RHY6Pftnb20fKbXV%2F0yR7CDEAfTN7cMszD8DZ%2By8YO0N8DAu7YAQmr%2BSgLCtCCMYrTLvWfVzQyRypkf3V%2FlrXgfT6Rj0Xdrc7ULWSilGvLVMJIABiWC%2Fm2HEWRQbDAEK50BQk5BrHZyCZJDmhTK4gb9RJElcuouawDnOj3Kmq%2F52DLmoq188Q2%2B39afkUIhDX0O&X-Amz-Signature=e11a954c897c02a5728921de98856bf87315bca511c42c4c83bdda48529f3e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RN7GOU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFf0m1CzxufgccW4bzk9VlwM%2B%2FSAjTc6vSAZAb3ikKv1AiAuie07Gmsj3ms0O43iAm4KN%2BU1v7gUahBwtunwV5M8ASr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMEo4wM5x%2BBU6IOJqHKtwDLjlptP6MtItMVYNDv%2BxlV%2FMGmAaN2NMTe1w1AVm47KVyTfFQgPU%2F5XtAak0pR3dPnqtpNxZkBOGCaWI9n9Q%2BYWTvJxIo4KY6qpO43nST5rSSIZWes7Az9nT4GiN0E252aqn5xSLZgX%2BsMwYxL6l5q8BhEE4kGVOAMGCBADPsabYta%2BGao16AZ%2BrRN5vQzW%2BI%2F7TW4640R4OFJXVk4O4nWzauvqoV3AY75%2B7D0vilAXHgEf4Oa0cDS0nUqZQ6eNbhw7a%2FxkbHMRDUrHealGAYmBhd4BnAc2yqc%2Bm9dsscEVF7%2FFYJ4vD1M%2BJihGKfoJ1YWeYvpDjxCGec4CwwdatpBmOXwn0zzI2b%2BLjZoQQ%2FqF%2B7R2h82zemLVxWXkRW0YncXvFGOSCEmcODa6tM2ksnlN3ZskuRJFMlH70k8UbbMd4Ir%2FSjONyXsriOHR%2B%2BDzD4ZVO%2BYF5YOSoFvfLG6f0ADVhoHnji9Wp4%2BtAq26sj%2Bquk%2FfKOJowXzg26pW2BU9vmDRDfuv3fDX0cZtaoGBt5CysoZovN87maluTIjrulbqfNgXZTGk7UVX%2FObspfJyg62pRVV64Z4PsrFhz15GeYvY8HqStIgtrgOajzk%2FaAfanDFhezfAisCW5nFk0wo%2BnAyQY6pgFjFBYwNtVLA3a2nNkDw8D0gRqb6RHY6Pftnb20fKbXV%2F0yR7CDEAfTN7cMszD8DZ%2By8YO0N8DAu7YAQmr%2BSgLCtCCMYrTLvWfVzQyRypkf3V%2FlrXgfT6Rj0Xdrc7ULWSilGvLVMJIABiWC%2Fm2HEWRQbDAEK50BQk5BrHZyCZJDmhTK4gb9RJElcuouawDnOj3Kmq%2F52DLmoq188Q2%2B39afkUIhDX0O&X-Amz-Signature=b757bbf88081e0cb0a901ef21b3ddf62fdb728e8ed6fc3f1ec0b76a6e1416f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


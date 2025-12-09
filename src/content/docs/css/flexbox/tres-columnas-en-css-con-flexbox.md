---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LZO7FN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDawFTd9xVPrPNZNoEqHiGyu549ZkdmVqSm4Feo8QTaHQIgAeuKrk2I3%2FK3ylQim8fVZ9%2FjSaIdyIMgHNd6hHbX9X4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZpmEZ9OL7YoDC0yrcA80LDdznIvKF8VorlqJ24merghxL877B0v38J%2ByJqFA1BFGIJ75uVuAzazv60gQ7t2MKJcMoOuKvqBwQ38m0JCucrVUy4nMyMxteGqkdJjKzjxg2RsPDlS7w%2BoOQDXwRAJhiWSAQsnzJjDpobcIsPRCsnItru4%2BiQpcLAQpwy3GB21j0yzvAUIKyBP%2B4c6%2F5fv7ZF9tFg0Vz1M2QxtrYBRhHDPEwWk65Dt%2Buz7oksVvKNEvI5%2FXDC02RakC4zTGHL%2FVpkBWc0JFg168dnAhV1mszxKTF2K587C1BxCp7Gi5OebGv%2BFuv86kg%2Fc7AAabViQyBxdQMIczZi%2BztJ%2BbSlQedJ%2F%2Ftn9DFytJDPMByr9TFz4bFfj0m4isr3pwd3QHgNWaONXrjoFMgbA8Jjv8W5sttF6%2FHljrhwaU7ODfKHjYjHC6YIua4Hor9m0g4gPsk6%2BkBJyjku6RBRovk8q5MOUS9XuuzDZvYIOLvG%2FvsFOQVF50m8SFdZ43q0wwX7LzW218nmFHm%2Ffiapv5pgIBiMivrMM94bW%2B9zChTL%2BzCjpEupghHkUPhlY6Ra%2Bm5KNxuCHPVP8ktrAq6LpnId89wXAj2IS9dWJgRuf9CLtE4SZxA7K%2B5aT0VoTWoSeKLMKHD38kGOqUBpX0vqgx11KUXBaAx7mZB6WUIusz7EBBEQfDCW5Y3HV2nsP4jUwTVDjf28HTF%2BL403t7Solx7halDFj79dpKJxSQUUv1bYl%2BB%2Fn5lWFJi%2BuK9K8kacIekuMEs3SIdoEswm6QYYJrf7k%2FPDDddQR%2FIaKnNkjoWMwWU7YNFhDq%2FhGTiOFIyyFRoH37ZvQv100ayTAsJcsqEooQxztpNdvcItEK0oaC1&X-Amz-Signature=0bafd731317625848625a0a16fe5680dc43d4e583d31ae5b24413cd12fa0d44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LZO7FN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDawFTd9xVPrPNZNoEqHiGyu549ZkdmVqSm4Feo8QTaHQIgAeuKrk2I3%2FK3ylQim8fVZ9%2FjSaIdyIMgHNd6hHbX9X4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZpmEZ9OL7YoDC0yrcA80LDdznIvKF8VorlqJ24merghxL877B0v38J%2ByJqFA1BFGIJ75uVuAzazv60gQ7t2MKJcMoOuKvqBwQ38m0JCucrVUy4nMyMxteGqkdJjKzjxg2RsPDlS7w%2BoOQDXwRAJhiWSAQsnzJjDpobcIsPRCsnItru4%2BiQpcLAQpwy3GB21j0yzvAUIKyBP%2B4c6%2F5fv7ZF9tFg0Vz1M2QxtrYBRhHDPEwWk65Dt%2Buz7oksVvKNEvI5%2FXDC02RakC4zTGHL%2FVpkBWc0JFg168dnAhV1mszxKTF2K587C1BxCp7Gi5OebGv%2BFuv86kg%2Fc7AAabViQyBxdQMIczZi%2BztJ%2BbSlQedJ%2F%2Ftn9DFytJDPMByr9TFz4bFfj0m4isr3pwd3QHgNWaONXrjoFMgbA8Jjv8W5sttF6%2FHljrhwaU7ODfKHjYjHC6YIua4Hor9m0g4gPsk6%2BkBJyjku6RBRovk8q5MOUS9XuuzDZvYIOLvG%2FvsFOQVF50m8SFdZ43q0wwX7LzW218nmFHm%2Ffiapv5pgIBiMivrMM94bW%2B9zChTL%2BzCjpEupghHkUPhlY6Ra%2Bm5KNxuCHPVP8ktrAq6LpnId89wXAj2IS9dWJgRuf9CLtE4SZxA7K%2B5aT0VoTWoSeKLMKHD38kGOqUBpX0vqgx11KUXBaAx7mZB6WUIusz7EBBEQfDCW5Y3HV2nsP4jUwTVDjf28HTF%2BL403t7Solx7halDFj79dpKJxSQUUv1bYl%2BB%2Fn5lWFJi%2BuK9K8kacIekuMEs3SIdoEswm6QYYJrf7k%2FPDDddQR%2FIaKnNkjoWMwWU7YNFhDq%2FhGTiOFIyyFRoH37ZvQv100ayTAsJcsqEooQxztpNdvcItEK0oaC1&X-Amz-Signature=5095a548361f6907cc168ba91a1cf6b096b07e65bff28fce3aa5434089b6a327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


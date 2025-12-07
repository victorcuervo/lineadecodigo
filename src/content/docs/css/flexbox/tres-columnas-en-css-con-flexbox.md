---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TKRS5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTV%2B6LFU%2FpgiVznTXEoaEib72ZpCc8qpcMIrDxTjkGyQIhAP1tYm7Jz5zFQ7QbnDFilh5am68ajBFE4zv27SEhoyeEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGy0OnCenDMtQzGIq3ANvejHRHt8Fbc7ml%2BTTTGJzsqazLfxVPihD1e9UmZqNO9b2FWA1jyHu1mcV%2FtoLgNKN13n7GPF2TpZnuukb8VPdbOgW%2BBek%2B1sskNVa93paPDEK3bbMvLzgUHniXkCvpMsIh70OVFnQqwx8VjljK8qFQHMBB6E4gRXxrZXGwdO8O8rRvAKKY1T8to0dw7psebvdzGlP2JJst8Aj%2FagBzpfxiSVIO8Dpn6eTIeAv9nQITgduYkp%2Fornr7KWDZjHT0uqGSltqu6O3hLb1tBm%2BVvrfH9uIgbx7krK5hOvruyZWrBAuO75PkdAu7iyJduasW%2B3K%2FKpdTLgOrXO7zncIPN1Yg5YNeYIyYVxwdQmqu4kBUFnadX8UEI0Ia%2BPsL9094CAfNg9UihN2jdO4RfF6Nn4xXYigu0DNGgNsVEi12jkzed2GITAq6sxvCYCP9Y47mCmwSSC4S3h1BAmGsNz9xVUTlM98yG1vOkv2DrHd82fAL4Le3JMc3JChio4qO%2FCYMQi0RTG6tzJ7xRTab04u7BPJFm05cAEz849jTNTmmYurh7boSFb4v1okwBE4azbrcZsbH7DvL6OaR3e2KkFnQqo4yg016ZyK%2BzGyRNvPc2UNeDvnM84hzMIZeVeBXjDr%2FtLJBjqkASG54z%2B04gmEwosKWNWDqpl84MPgXHjOcy%2BoyQwDd%2FTay4mQAFRhITRgke4Us%2FvcppeDcTA6m5xiggVLWM18CJCfZi3G3PtLoYh51OGEvHW%2BVkyXlNubgCunTTpKehpA9UTmo60QSRyn03oI%2FeNi4EYbcYowKL9NPox6yM5TsmCRH8Ft%2FGpGVChXDWKKo2GehffMoFonH8TrqCdbExjg3yjcNQDA&X-Amz-Signature=d7f055c759273e07ba3f44e1cfbd7ab22c5fc1df3bb4a1466cf8f63225b8b299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TKRS5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTV%2B6LFU%2FpgiVznTXEoaEib72ZpCc8qpcMIrDxTjkGyQIhAP1tYm7Jz5zFQ7QbnDFilh5am68ajBFE4zv27SEhoyeEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGy0OnCenDMtQzGIq3ANvejHRHt8Fbc7ml%2BTTTGJzsqazLfxVPihD1e9UmZqNO9b2FWA1jyHu1mcV%2FtoLgNKN13n7GPF2TpZnuukb8VPdbOgW%2BBek%2B1sskNVa93paPDEK3bbMvLzgUHniXkCvpMsIh70OVFnQqwx8VjljK8qFQHMBB6E4gRXxrZXGwdO8O8rRvAKKY1T8to0dw7psebvdzGlP2JJst8Aj%2FagBzpfxiSVIO8Dpn6eTIeAv9nQITgduYkp%2Fornr7KWDZjHT0uqGSltqu6O3hLb1tBm%2BVvrfH9uIgbx7krK5hOvruyZWrBAuO75PkdAu7iyJduasW%2B3K%2FKpdTLgOrXO7zncIPN1Yg5YNeYIyYVxwdQmqu4kBUFnadX8UEI0Ia%2BPsL9094CAfNg9UihN2jdO4RfF6Nn4xXYigu0DNGgNsVEi12jkzed2GITAq6sxvCYCP9Y47mCmwSSC4S3h1BAmGsNz9xVUTlM98yG1vOkv2DrHd82fAL4Le3JMc3JChio4qO%2FCYMQi0RTG6tzJ7xRTab04u7BPJFm05cAEz849jTNTmmYurh7boSFb4v1okwBE4azbrcZsbH7DvL6OaR3e2KkFnQqo4yg016ZyK%2BzGyRNvPc2UNeDvnM84hzMIZeVeBXjDr%2FtLJBjqkASG54z%2B04gmEwosKWNWDqpl84MPgXHjOcy%2BoyQwDd%2FTay4mQAFRhITRgke4Us%2FvcppeDcTA6m5xiggVLWM18CJCfZi3G3PtLoYh51OGEvHW%2BVkyXlNubgCunTTpKehpA9UTmo60QSRyn03oI%2FeNi4EYbcYowKL9NPox6yM5TsmCRH8Ft%2FGpGVChXDWKKo2GehffMoFonH8TrqCdbExjg3yjcNQDA&X-Amz-Signature=6e4f94909ce6b3f5536c5431ea2181aeff304b467a42c4b306313662d80e1f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


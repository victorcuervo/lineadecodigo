---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGIDOC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDREO3VXllBR%2BMdnrooE6c1KOqeu%2BsqERrTcJEOcamU%2BQIgV5xB59ZbioPNlpmyVUA7nP0WG77C5RSRFCfr7w%2FBi%2BEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGImO4cHXxISWOj3XyrcA4fBZmB8eBSpc5v8Z18e0RI2moUlNUez1UIYhCYRroragucKJa10%2FnfXidJPha5y1pvhN4S6Pyl3XqrRueutyzrKITAZMCAGqJqVux0%2B6uy0Gd791dLjQF9oCnIhd7fE6MDhdQ5ffZv%2FIBRlfFavLOezj9zN6JT2Gfo68MOFWCfIIbT1sFue9qtYCA9W8d7MbQ77Ut7IlbXfOc%2F7b8SMGfXZnQIORDJ6zNWi2BctJga2dpPDcLVsH42nv1m1DHp%2B4LZvjqc%2BcCvYafKPXy5HStnAIC9Y0BlGr5975T0hDOlraVC4jSCb9xv%2BgYFoEhqeq51iRCdNBECFI8rHF7f7vK%2BMQiWidffXOAjiPsaAG3nUNgoh146Aqn6v89dnBo4lsMcPReC1YeJIwJ%2Bc%2BHzvszk2gmChUxWW0GDijeyb5pIx22lnrXV4a3ZytNIsmfMjR5Ec3FND%2Ft9PX20P%2FSteidaX1BR9mL%2BPHZqRTevWbvmKuhsaFpNcxWUirnmEFOYCAcsBGpsJhhiIPg%2BZcHmdA9t3BxvZnodnzHZgsuTU2INdv41xTTgHSFdS%2Ftdofo71lnoHc60ywqMGj9BHlmsuximMgnrCf0KtHKK9rDq2Coj8SSgD69AEv0Go3OHuMJSVw8kGOqUBd21CSpfCGkA833UTbSgP2GgvsKu55i9RUsh3Xi3GYrC1%2FWHw7yeJdXWMJCAx0yEMId8lwqDhGmb9Mmo73FdpKjf98CD%2FOt5bDxrUvz0hImX5kMRkqvLmvfCgebOBTnl03X%2F3IF2UsSmykxPJXyATziqrnk6DdCKzUAMb40jo7Jl%2BeX50K7HR9K5aUNsgmY2DSyUfikiWvt0KNOhDt06asfsIn6W1&X-Amz-Signature=cfc77fb1dab891476a811868cda57c75e044b7e69c61f2dfe977ece1d1e1e652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGIDOC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDREO3VXllBR%2BMdnrooE6c1KOqeu%2BsqERrTcJEOcamU%2BQIgV5xB59ZbioPNlpmyVUA7nP0WG77C5RSRFCfr7w%2FBi%2BEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGImO4cHXxISWOj3XyrcA4fBZmB8eBSpc5v8Z18e0RI2moUlNUez1UIYhCYRroragucKJa10%2FnfXidJPha5y1pvhN4S6Pyl3XqrRueutyzrKITAZMCAGqJqVux0%2B6uy0Gd791dLjQF9oCnIhd7fE6MDhdQ5ffZv%2FIBRlfFavLOezj9zN6JT2Gfo68MOFWCfIIbT1sFue9qtYCA9W8d7MbQ77Ut7IlbXfOc%2F7b8SMGfXZnQIORDJ6zNWi2BctJga2dpPDcLVsH42nv1m1DHp%2B4LZvjqc%2BcCvYafKPXy5HStnAIC9Y0BlGr5975T0hDOlraVC4jSCb9xv%2BgYFoEhqeq51iRCdNBECFI8rHF7f7vK%2BMQiWidffXOAjiPsaAG3nUNgoh146Aqn6v89dnBo4lsMcPReC1YeJIwJ%2Bc%2BHzvszk2gmChUxWW0GDijeyb5pIx22lnrXV4a3ZytNIsmfMjR5Ec3FND%2Ft9PX20P%2FSteidaX1BR9mL%2BPHZqRTevWbvmKuhsaFpNcxWUirnmEFOYCAcsBGpsJhhiIPg%2BZcHmdA9t3BxvZnodnzHZgsuTU2INdv41xTTgHSFdS%2Ftdofo71lnoHc60ywqMGj9BHlmsuximMgnrCf0KtHKK9rDq2Coj8SSgD69AEv0Go3OHuMJSVw8kGOqUBd21CSpfCGkA833UTbSgP2GgvsKu55i9RUsh3Xi3GYrC1%2FWHw7yeJdXWMJCAx0yEMId8lwqDhGmb9Mmo73FdpKjf98CD%2FOt5bDxrUvz0hImX5kMRkqvLmvfCgebOBTnl03X%2F3IF2UsSmykxPJXyATziqrnk6DdCKzUAMb40jo7Jl%2BeX50K7HR9K5aUNsgmY2DSyUfikiWvt0KNOhDt06asfsIn6W1&X-Amz-Signature=348e20cfadb735d0026af9a6c6a787a86cf8a1bfd7a051a661e39df61ccd279f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


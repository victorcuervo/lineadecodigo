---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD57H4MM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCxEHd%2Fu06LyY2MzqIK8RcgDXFYnl3VmsiECKgdyFJPPAIhAJjHPXde1loUVdqRq2TidQLetQeI782dJ%2Fq25guI2PIPKv8DCDwQABoMNjM3NDIzMTgzODA1Igy52WHdQ8W2H8G%2F%2Floq3AOF8XlkSwH2T4YFJjqMHayg2e1PP2dHB6jz4AEkYaw%2FNGqmS2R05fnf9ytVDgbTR7AwRYsNME6ZlkORCZB76tKV88ME34pe0xhSinXZGhAeoNMaY%2B%2BqwmVriSRGrD7Lw9YeqHKqJOByGyoN%2BKQVTarZByj84ocLum8gCtzEvc1AzyzlNoGI%2BZ0zcKRVvtFGvOqQWJF0RpleuimFzMjrhU%2FrShQ4dB%2FMzXAqaCMNaJQBHLGf9fMoq4c1CwjdcFbY2j725R4ErSJjpdyqEWpwx%2F%2FaSyoQofXOUlh9DaK2M04HDQDPgcSXYf5jae77Ha97jMxo56pzpS8EkRtYOp2sp0rjNY42Gkk9BOf%2BiYUra%2BO9EaT5OxTviMb9tPuD86Ig4kVuLoXF98SOk2OqQ5Gc%2BwWUZW3xonPprqY9xRep5U6%2Fj0OTjhypw5LpcKAQi3f%2B1tXxcL0OElXc2mH71oD489mFrWJtzJZTsmvYCyjHOYAy2BnyEV7i2GGtRHc9pOuaux4sW3biS%2Fdtu48uy%2FIIXrkFhgpaB8c0HIc5WBuIabeuxAjL9bZ8v2OEoX2HyI46G2jLWok4vEQxsuvW0DQpb88vF%2Fsf6TuAwp2lud%2FRoJe1lekG8SjQ7auwiwkVkTCp88PJBjqkAYwZGfzsDDfSLg3DWRaRJCj0leCVnsvMx3szGflaBaoPi96RRMQuE%2BppJaG2vQSjDJ87s2KDG1SJz9qlBdp%2BdBzwS4AmQUjoCSGH0QDK1IV2CAIc3khcul75kYo771YGLe6K3eaGl5Jc1RV6D3U7gvPeP02MbwUPA2vEf5WgfgZLWNGnWWmgco9oS9kv6QdJa8pBBhV4GVP%2BaiOWdy55X82i53ER&X-Amz-Signature=0eb337de4be716b72ac9ac44f70348f484af634aed9cd2f1793bb62f83d944dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD57H4MM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCxEHd%2Fu06LyY2MzqIK8RcgDXFYnl3VmsiECKgdyFJPPAIhAJjHPXde1loUVdqRq2TidQLetQeI782dJ%2Fq25guI2PIPKv8DCDwQABoMNjM3NDIzMTgzODA1Igy52WHdQ8W2H8G%2F%2Floq3AOF8XlkSwH2T4YFJjqMHayg2e1PP2dHB6jz4AEkYaw%2FNGqmS2R05fnf9ytVDgbTR7AwRYsNME6ZlkORCZB76tKV88ME34pe0xhSinXZGhAeoNMaY%2B%2BqwmVriSRGrD7Lw9YeqHKqJOByGyoN%2BKQVTarZByj84ocLum8gCtzEvc1AzyzlNoGI%2BZ0zcKRVvtFGvOqQWJF0RpleuimFzMjrhU%2FrShQ4dB%2FMzXAqaCMNaJQBHLGf9fMoq4c1CwjdcFbY2j725R4ErSJjpdyqEWpwx%2F%2FaSyoQofXOUlh9DaK2M04HDQDPgcSXYf5jae77Ha97jMxo56pzpS8EkRtYOp2sp0rjNY42Gkk9BOf%2BiYUra%2BO9EaT5OxTviMb9tPuD86Ig4kVuLoXF98SOk2OqQ5Gc%2BwWUZW3xonPprqY9xRep5U6%2Fj0OTjhypw5LpcKAQi3f%2B1tXxcL0OElXc2mH71oD489mFrWJtzJZTsmvYCyjHOYAy2BnyEV7i2GGtRHc9pOuaux4sW3biS%2Fdtu48uy%2FIIXrkFhgpaB8c0HIc5WBuIabeuxAjL9bZ8v2OEoX2HyI46G2jLWok4vEQxsuvW0DQpb88vF%2Fsf6TuAwp2lud%2FRoJe1lekG8SjQ7auwiwkVkTCp88PJBjqkAYwZGfzsDDfSLg3DWRaRJCj0leCVnsvMx3szGflaBaoPi96RRMQuE%2BppJaG2vQSjDJ87s2KDG1SJz9qlBdp%2BdBzwS4AmQUjoCSGH0QDK1IV2CAIc3khcul75kYo771YGLe6K3eaGl5Jc1RV6D3U7gvPeP02MbwUPA2vEf5WgfgZLWNGnWWmgco9oS9kv6QdJa8pBBhV4GVP%2BaiOWdy55X82i53ER&X-Amz-Signature=7f62509ef055ef45bd925ebb0a201c18440feb012718479e7da2e3a3cbf84f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHX2D3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGmBwUqyaJ5AzCg4RME0XA02i1fBBpe2W0qjZzxLvGafAiBiMJHL5D5Snd8wuEaAXWBZGRQ3Q3WKKwvnH%2FnKqdpZQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMIHGd1KJS%2FsaxbO6BKtwDjuIruyOecP7t4DWf212U5Gd5HEAbMunGcp87OuzdognCXqXc7%2FcUkIsZxmtJwA99HrCabTjvQnVnXHsScuzypMOs6AKg78x59pffA24Ky6MGje%2Bs5472pbmAKE5j5IP%2BMSn5W9YpShH8FahEB12WCqiglRX0RrcEIyzhpW%2Bz6d8tYzDkeKo9Is2D6lvIf%2FvAL44CkjNvv3UtsdEez0AYZTSGUcGC%2BkFT5QOdnH8y29jfDzstQqAAIM1aUjtVDkRFBDDfXgaVG9rPE8UOAwQNAaHfbTTWlXhaP9wLzBxciFDqgyPX6bTcFfcQeXzhXtWj1PTfIGhEVSybd3Hp%2B4Q%2FS9lgtw4D5GoPvgyZkNf4cJGRpypAHZ53wBcJ%2FK9B1TbJOux8qLbwocYFdHqCxAtxNDBYLP1SglMlejw%2BY4qg3FeryQD3iNnNPQzEyzupO81OTVl%2FkgWZ9szlfJrSQLRENZbEUwm7o5bEZi0r5%2B31NO0r%2FmgQ%2B8caczTmJJwTaF4%2BebeVUeLZzNohOSlDA24PdAF9A8hb%2Fbw9tQL%2BW9EnnTkkBN3Fx1g7egsxq74wubYFixH1Hudz3KI8FENkyAUPRcREAwb1eBdJZjvF1RhGTrj18Wyf0TXfPVsrdKgw4K3EyQY6pgHFTHjkJ5CE0BCuaS4RF9plSRn2pwn1nvN7o9PyTLwNE4FVyXVU1vueTsOFAeJLF1HnJt72Aj9V9f%2F2xjT3WltHvtxOypdN1jNWsHYmFMdglTD5Tr1p4wzGxelwrWLflS1bmtxUWiDTQQBGVOhHCjCPloORyFZM9qR6vyllHalWoEYXwE%2B59Ax8uuQOeF4wtT4Vbe%2Fj02VMAZsvZ3HmMxehtXK7K0Wi&X-Amz-Signature=82ad76060657691f5e2fc30fe2e2215ea7ee7c2bacf2e56a3dc28bbd27200da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHX2D3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGmBwUqyaJ5AzCg4RME0XA02i1fBBpe2W0qjZzxLvGafAiBiMJHL5D5Snd8wuEaAXWBZGRQ3Q3WKKwvnH%2FnKqdpZQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMIHGd1KJS%2FsaxbO6BKtwDjuIruyOecP7t4DWf212U5Gd5HEAbMunGcp87OuzdognCXqXc7%2FcUkIsZxmtJwA99HrCabTjvQnVnXHsScuzypMOs6AKg78x59pffA24Ky6MGje%2Bs5472pbmAKE5j5IP%2BMSn5W9YpShH8FahEB12WCqiglRX0RrcEIyzhpW%2Bz6d8tYzDkeKo9Is2D6lvIf%2FvAL44CkjNvv3UtsdEez0AYZTSGUcGC%2BkFT5QOdnH8y29jfDzstQqAAIM1aUjtVDkRFBDDfXgaVG9rPE8UOAwQNAaHfbTTWlXhaP9wLzBxciFDqgyPX6bTcFfcQeXzhXtWj1PTfIGhEVSybd3Hp%2B4Q%2FS9lgtw4D5GoPvgyZkNf4cJGRpypAHZ53wBcJ%2FK9B1TbJOux8qLbwocYFdHqCxAtxNDBYLP1SglMlejw%2BY4qg3FeryQD3iNnNPQzEyzupO81OTVl%2FkgWZ9szlfJrSQLRENZbEUwm7o5bEZi0r5%2B31NO0r%2FmgQ%2B8caczTmJJwTaF4%2BebeVUeLZzNohOSlDA24PdAF9A8hb%2Fbw9tQL%2BW9EnnTkkBN3Fx1g7egsxq74wubYFixH1Hudz3KI8FENkyAUPRcREAwb1eBdJZjvF1RhGTrj18Wyf0TXfPVsrdKgw4K3EyQY6pgHFTHjkJ5CE0BCuaS4RF9plSRn2pwn1nvN7o9PyTLwNE4FVyXVU1vueTsOFAeJLF1HnJt72Aj9V9f%2F2xjT3WltHvtxOypdN1jNWsHYmFMdglTD5Tr1p4wzGxelwrWLflS1bmtxUWiDTQQBGVOhHCjCPloORyFZM9qR6vyllHalWoEYXwE%2B59Ax8uuQOeF4wtT4Vbe%2Fj02VMAZsvZ3HmMxehtXK7K0Wi&X-Amz-Signature=311f9bd89f161eaca17a7c9b12e6795b62b6314b9337c75bc9d014fff9637635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


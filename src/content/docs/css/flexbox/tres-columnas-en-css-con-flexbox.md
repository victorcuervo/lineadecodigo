---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7FS6LO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFM7Eh6fS6dHpEol0lSVwswN0ZwIwjE1osx91i0MS%2B1sAiEA8XQlsZK80k4GBXS47TCCTTWN8DRRrT42%2F4lM00CA5o4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDG5M5FMYZbD2%2Bi4auyrcAycC%2FKMrjC7yGFm%2BTZmnqvJYCEbCXhK1HLK2W1%2Frafr9r%2Bf1qM%2BlhnlvbPuAwljDhRnDWXGbmEEKcdt7xA4%2FWHtylYBcWoM7i0EyvSlUKXa9HQlPxlvVrfW%2FHRuIPUqB1pdI8uV6j6TFUMmi5iTesJV8IBYWM0uBWz%2FOWHZRr7UkTVwVTuqisJLgDdVovpbX7aPYo7VzWBUyhrde%2BhWQQrFv3npnLzQJMDFM3YIVY68TuSm7esMRan5ZGnlJslZK1xaIknnHSRSg%2FLH5jvpR2jQBaBlVipjgTzca2UG0Icc7Iso%2Fx29DX3gPF37h42TcMBn3%2BrsG%2FmqNyAunc%2BbqaTaa6S075rCw3DSaesr7P85NfFpaJnbJGBkjFXyp5ppELF9CNw6k5HGuIVeJ2r%2BD%2BsJZK8k1w%2BIqY25eZPOW4P7hDhHGhSe69bzxv4gz39UsKGjYebLnMmNNzZXW6g0behUMa4QFzb9w6f7203WicgJzmHVbn74UcQfd%2F7n1HyJ5d%2BVIkBSgIRcBYPfAnUwCQ0R8DDw%2FzvMbsm5Z6gGIgOzCF5EGyqiRHfGiWYljevBOuWLW0TbWgJ3S%2FlTZ6hXOZuMMNjnoeTgP0g9hdsU9uC7zh%2BbK2%2Fb0ZqKZwEHCMKWExskGOqUBV8b8XvIUtSXHjNOnsc1qQRGuv9G%2BaqQvSqDAFNOP35Sg0kQp2ex07Tf8lUcX1nsRvsb1My5j%2B%2Fpqv4Se3OEJpUBWVtipRDYpAn7XWrRFC%2Bww%2B2eodAHlDOumba3l%2BrPM0tZsSsb4oC9MyQ8cEpIy7lHlqQriThBLFeFy%2BP7TEQvNHZC1AhS1I1WZDl%2B8%2F81L2%2F52eRSO%2Bcgpu1ETc4nQ%2FdW%2BKAKp&X-Amz-Signature=2ec51c87d16b4b6239211730f442d7abfbc4598b7f14ccbd19649b08715ecb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7FS6LO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFM7Eh6fS6dHpEol0lSVwswN0ZwIwjE1osx91i0MS%2B1sAiEA8XQlsZK80k4GBXS47TCCTTWN8DRRrT42%2F4lM00CA5o4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDG5M5FMYZbD2%2Bi4auyrcAycC%2FKMrjC7yGFm%2BTZmnqvJYCEbCXhK1HLK2W1%2Frafr9r%2Bf1qM%2BlhnlvbPuAwljDhRnDWXGbmEEKcdt7xA4%2FWHtylYBcWoM7i0EyvSlUKXa9HQlPxlvVrfW%2FHRuIPUqB1pdI8uV6j6TFUMmi5iTesJV8IBYWM0uBWz%2FOWHZRr7UkTVwVTuqisJLgDdVovpbX7aPYo7VzWBUyhrde%2BhWQQrFv3npnLzQJMDFM3YIVY68TuSm7esMRan5ZGnlJslZK1xaIknnHSRSg%2FLH5jvpR2jQBaBlVipjgTzca2UG0Icc7Iso%2Fx29DX3gPF37h42TcMBn3%2BrsG%2FmqNyAunc%2BbqaTaa6S075rCw3DSaesr7P85NfFpaJnbJGBkjFXyp5ppELF9CNw6k5HGuIVeJ2r%2BD%2BsJZK8k1w%2BIqY25eZPOW4P7hDhHGhSe69bzxv4gz39UsKGjYebLnMmNNzZXW6g0behUMa4QFzb9w6f7203WicgJzmHVbn74UcQfd%2F7n1HyJ5d%2BVIkBSgIRcBYPfAnUwCQ0R8DDw%2FzvMbsm5Z6gGIgOzCF5EGyqiRHfGiWYljevBOuWLW0TbWgJ3S%2FlTZ6hXOZuMMNjnoeTgP0g9hdsU9uC7zh%2BbK2%2Fb0ZqKZwEHCMKWExskGOqUBV8b8XvIUtSXHjNOnsc1qQRGuv9G%2BaqQvSqDAFNOP35Sg0kQp2ex07Tf8lUcX1nsRvsb1My5j%2B%2Fpqv4Se3OEJpUBWVtipRDYpAn7XWrRFC%2Bww%2B2eodAHlDOumba3l%2BrPM0tZsSsb4oC9MyQ8cEpIy7lHlqQriThBLFeFy%2BP7TEQvNHZC1AhS1I1WZDl%2B8%2F81L2%2F52eRSO%2Bcgpu1ETc4nQ%2FdW%2BKAKp&X-Amz-Signature=659a92fa1602eec68e78960cb1b7d396f3f4362e4fb4df10862a46d783671cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


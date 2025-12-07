---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT32ZTQ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASacqBmZjiDJgO9a6ws6Png1j0RBG2AoJSSudCgWe5BAiEA706eTrvM%2FdNwiG85IODTGZd4SLNtgpUTgaaoowD2SXgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkngupi7VL4SDbvXCrcAxfV7G221Ko3y0ENTRmnu1O0lxM5HocROIVcoksqaDytlpnf2PNXqEKEEgxF7UhC7CdCcvuYGtMmDbMuHH4B3TH%2BaCqbrTHuD3YnQhqNI4YohPc6RDX%2FaRKEeuZu%2Fy71EFUAOV6BhH5GmSELaNxlVyZHAW1Hmwis%2FOLMbIy0MOtOctEnTuTkpHMgE1lDrFsh4AzZ%2F7cRgUud2IEaXYz5I9tiH%2Be8oC5w2AUgMZhzqogOqfBA%2BaCxyvbkX3hUs%2BWHFd0%2Fb0%2BVlahlD9IArwqQ1c49fLjdk%2FFJrtpFTb%2B9GrfCdJmPZyaZ8C7r6yc3OH3M95gJCTcDpjuBtq6D7zPL%2BFKHMXh5KjsPip3RnAovvSqMQMXrjIDsDZv24tsZi6aYXuMQDUykfBiTkTxvreTHihiuV2HdmfX%2BGurx6HEF%2BbT4XluwVy5SIIxru9PXXDKJlZR5%2FZYpvXcrZsEKHsrQguMP8rBkOf8Kt6mNb1n1RSaa94rQ1zWxPEAH0DprqtvbNOd4sT4zZixUF33CvyGU1Yerz2wfkUR%2FDBPycJ97z8k9Vwo72F1wYo5CSPhOb%2FrxKSJeQRcApP0qwxCn4f5w5kwfIcWvH8IrMsph5Ktrr6Zv7T3VLuzTT%2BfzY89BMI%2F90skGOqUBMgJYTHryXnLjBm0mut5wfSRhyH1VaIZd3z4BQ4JUFs7niNCgqlDxkP1miy4HWrOUNDzQGs%2FedaM7mzy9F6jzHk2F4bZeOFUA8fP488%2FbqxVMDjpw%2B4aQ2RBanuyivGRnPFDRh%2FqOjWAfgfDVNjozFgbCoSU4cQHTDaIaf1vXkV4HfqjHKYNxmhlFaPo7Y4dQwVMfhEtfdz3b8y6ZVqBjwRcQjn8v&X-Amz-Signature=059a41ed34ee279548ba2d3b964c44d067a4ecc4c9ed685c167f93aa69d9ee69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT32ZTQ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASacqBmZjiDJgO9a6ws6Png1j0RBG2AoJSSudCgWe5BAiEA706eTrvM%2FdNwiG85IODTGZd4SLNtgpUTgaaoowD2SXgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkngupi7VL4SDbvXCrcAxfV7G221Ko3y0ENTRmnu1O0lxM5HocROIVcoksqaDytlpnf2PNXqEKEEgxF7UhC7CdCcvuYGtMmDbMuHH4B3TH%2BaCqbrTHuD3YnQhqNI4YohPc6RDX%2FaRKEeuZu%2Fy71EFUAOV6BhH5GmSELaNxlVyZHAW1Hmwis%2FOLMbIy0MOtOctEnTuTkpHMgE1lDrFsh4AzZ%2F7cRgUud2IEaXYz5I9tiH%2Be8oC5w2AUgMZhzqogOqfBA%2BaCxyvbkX3hUs%2BWHFd0%2Fb0%2BVlahlD9IArwqQ1c49fLjdk%2FFJrtpFTb%2B9GrfCdJmPZyaZ8C7r6yc3OH3M95gJCTcDpjuBtq6D7zPL%2BFKHMXh5KjsPip3RnAovvSqMQMXrjIDsDZv24tsZi6aYXuMQDUykfBiTkTxvreTHihiuV2HdmfX%2BGurx6HEF%2BbT4XluwVy5SIIxru9PXXDKJlZR5%2FZYpvXcrZsEKHsrQguMP8rBkOf8Kt6mNb1n1RSaa94rQ1zWxPEAH0DprqtvbNOd4sT4zZixUF33CvyGU1Yerz2wfkUR%2FDBPycJ97z8k9Vwo72F1wYo5CSPhOb%2FrxKSJeQRcApP0qwxCn4f5w5kwfIcWvH8IrMsph5Ktrr6Zv7T3VLuzTT%2BfzY89BMI%2F90skGOqUBMgJYTHryXnLjBm0mut5wfSRhyH1VaIZd3z4BQ4JUFs7niNCgqlDxkP1miy4HWrOUNDzQGs%2FedaM7mzy9F6jzHk2F4bZeOFUA8fP488%2FbqxVMDjpw%2B4aQ2RBanuyivGRnPFDRh%2FqOjWAfgfDVNjozFgbCoSU4cQHTDaIaf1vXkV4HfqjHKYNxmhlFaPo7Y4dQwVMfhEtfdz3b8y6ZVqBjwRcQjn8v&X-Amz-Signature=e05f70ef5d0ddfa932711036245110ba0dd230fddb96d48ff3e6dba847431a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


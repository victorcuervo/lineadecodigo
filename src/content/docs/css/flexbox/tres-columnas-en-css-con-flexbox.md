---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKTLLD5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHzq9pLfm8TV6Kkco0lVTwosPMjXdjFKHIoZYb%2BrGFQAiEAvDIwmsIXCvoT5GqlfP7mKm%2FClMAbgbdM1apc7kz0G%2BIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApbM3oZGaEm%2F%2BoEXSrcA%2Fbf30KQTezn%2BkzVOMiG0xWmV%2Fcc2PYR3%2Bt9o4G50xyawYX8Vge56Jc5kp20EjV4Jr9s0U8v6Ftm2kC%2Bo1EkMYG75A5pT%2BLGfgM%2F1KhOILNU1bCFY7r6t6Fic%2F4RPBSqLUAX34oPah4YlmueZFhBJEGi2t5L64dUpgz5aRkUxLjoyrc7fJ%2BVO8gDYdt4p6f%2F9RXr%2ByQwprv8ZKANsgbCIczzbmnbETTv5QoTf%2Bu8HS77M253foKXEm0iZ%2BOxeCoZ88Ptbp%2FmI%2FIfY72ivtfSsJ%2FP22ZWDr2TNmuU8qPmgcF2IIirx%2BFBRLeSWx6c8z3IvY5W8ep7%2FOKefJW3aEbkggEt%2FBZC3NoCLlUP%2BjTLZNKllEs%2F5H8g7SVOFSNABLmmoPp4cLQ8%2FtOOe%2B0XpBV05gEaT0sSAmH%2BjtAzhBrQdQETgegljbeSANmCz3%2F5H4gGhgejF9DmEtY9i2xY5yBGvynNjixIRhdut2c%2Fa33m5Dfy2k%2BNmbQA5CDxL12H%2BNfly8PorVmW8eDNIWQ2LHW%2B9DLSelSlijgfpykt49kF21AmIrWvtJno3u8ymhgOcVaqnNWND2wjATslxifpeJw5e6UcZGRX7Q9yUxjdjNln41gyqUVps1ocX7%2B0p6kWMPiH38kGOqUBDzM3tTYHPENxaIUB48qrZi9wrmVRXsJmG4YaQTNRQJHdReJm9qUS6y7bpTIm2Kj6Kb5ZHRNh5K3bJ%2BVj2mYzaE%2BR2Q1Jzrb7X%2F9iUd4vJx3obnfwnI6iJVdt4xfeenc3wxG6XmAFuwGk99pPMsY%2Fbi%2BBRTKpuQGsi82mrERWgFYICqIrANrmjT5mZc8MOzMmSHl0SUKAUTBLRRi3gMCTptuEitVS&X-Amz-Signature=d8cabb1b0ef531413088489e30e1887f6783a626cdfd1cdbf163f64ed63778b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKTLLD5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHzq9pLfm8TV6Kkco0lVTwosPMjXdjFKHIoZYb%2BrGFQAiEAvDIwmsIXCvoT5GqlfP7mKm%2FClMAbgbdM1apc7kz0G%2BIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApbM3oZGaEm%2F%2BoEXSrcA%2Fbf30KQTezn%2BkzVOMiG0xWmV%2Fcc2PYR3%2Bt9o4G50xyawYX8Vge56Jc5kp20EjV4Jr9s0U8v6Ftm2kC%2Bo1EkMYG75A5pT%2BLGfgM%2F1KhOILNU1bCFY7r6t6Fic%2F4RPBSqLUAX34oPah4YlmueZFhBJEGi2t5L64dUpgz5aRkUxLjoyrc7fJ%2BVO8gDYdt4p6f%2F9RXr%2ByQwprv8ZKANsgbCIczzbmnbETTv5QoTf%2Bu8HS77M253foKXEm0iZ%2BOxeCoZ88Ptbp%2FmI%2FIfY72ivtfSsJ%2FP22ZWDr2TNmuU8qPmgcF2IIirx%2BFBRLeSWx6c8z3IvY5W8ep7%2FOKefJW3aEbkggEt%2FBZC3NoCLlUP%2BjTLZNKllEs%2F5H8g7SVOFSNABLmmoPp4cLQ8%2FtOOe%2B0XpBV05gEaT0sSAmH%2BjtAzhBrQdQETgegljbeSANmCz3%2F5H4gGhgejF9DmEtY9i2xY5yBGvynNjixIRhdut2c%2Fa33m5Dfy2k%2BNmbQA5CDxL12H%2BNfly8PorVmW8eDNIWQ2LHW%2B9DLSelSlijgfpykt49kF21AmIrWvtJno3u8ymhgOcVaqnNWND2wjATslxifpeJw5e6UcZGRX7Q9yUxjdjNln41gyqUVps1ocX7%2B0p6kWMPiH38kGOqUBDzM3tTYHPENxaIUB48qrZi9wrmVRXsJmG4YaQTNRQJHdReJm9qUS6y7bpTIm2Kj6Kb5ZHRNh5K3bJ%2BVj2mYzaE%2BR2Q1Jzrb7X%2F9iUd4vJx3obnfwnI6iJVdt4xfeenc3wxG6XmAFuwGk99pPMsY%2Fbi%2BBRTKpuQGsi82mrERWgFYICqIrANrmjT5mZc8MOzMmSHl0SUKAUTBLRRi3gMCTptuEitVS&X-Amz-Signature=e60116d7453eb8f5d16b7703ceb89fe88dffa6cf7ac507b46864908d6e0438ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5SEHZF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXjGYarYR6Iq%2FM0mr1AinsCuOmeCsDhpY5wJ%2Bl9MWMAIgOT8qoyiRxtvnk5kYNmvIX35vwHa840IPMzPjJ52djkEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ9FlF1UHbSpX2YGCrcA4ZL0x6fL4bj9c0reTCUb1BQP%2FgZNB1YeX%2BGB8fviIyamAn%2FczTbWdq2J9uyWrPpuDEBn%2FLRkbpjHwvySB9ESQx4YbyrHGZU7WszucLbTj7%2FueR%2FVj%2F6CMeSW%2BcYnylxvWvM0p%2FeYXXfwSkPhv6Hbe54mUiYYh3oVhU0pVilKgmrh%2Bge7xIHd2qbvlJbTVDFeory8bPbFB0AuRZrwawxajUDYhnoNVRylvsTpffKVtFhBTk7aqv%2Fm%2F8SErnfNEw%2Fz7749sTrZxl6%2BPTnBwa8L7VEZQb%2F0iWQhny5SqymAHUf2oF0WclXno5XIQy65wmJLb0urLv4dMVmzH%2B5NMd6abOjKTTZtMbjeADUb2llY4J0Aw55de0uwQloMfRzhVypBQY8t63CNwuseIrFBTtfDE7Bv6SeBkgXkF1HP5EyRXY5W%2Fdbj4jzAuiJmTgpsWRm6ohmxza4Q2vEwPSEszQDdGPKCfmU2%2FW7Th8LWUgCrooLYgrjw41U%2BdN5Z0M%2BxdmYmcNWvCpiFRBe4HmByyJ1%2FBdpPnlVME%2FqzKL0sT5Vfqwlq9VjQW017g5vKEvLX9W1zMa7nozAHRoAyykdpCCfKRqWBa8Dhx29O3uxKRQ78OGKuMRd9U%2FXgqC6hiboMOr90skGOqUBQ4oyfqKN3VDJyhAUzWb2OZWoNXvramNuBOND4EdrqoZkF5C1E5TtShxnrbn1vOSlX6L965wGwLWE1cpXSWO1rplQTijJD2HRo51voKRbJfBDo3SNI6KZeLc6JFj1rDq%2Bv8nJYJTvPNS2%2Biv6SbIdwzMQJq0By2IOj516Baw2%2FYLwZ3V4Wn212g9mLUF%2BeX97YJQOARia08TcCkH2xIVF78lW3wdO&X-Amz-Signature=b6baae276f308fb2914c73393f869195a00d3c56bf9a20e75c5844c18177cdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5SEHZF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXjGYarYR6Iq%2FM0mr1AinsCuOmeCsDhpY5wJ%2Bl9MWMAIgOT8qoyiRxtvnk5kYNmvIX35vwHa840IPMzPjJ52djkEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ9FlF1UHbSpX2YGCrcA4ZL0x6fL4bj9c0reTCUb1BQP%2FgZNB1YeX%2BGB8fviIyamAn%2FczTbWdq2J9uyWrPpuDEBn%2FLRkbpjHwvySB9ESQx4YbyrHGZU7WszucLbTj7%2FueR%2FVj%2F6CMeSW%2BcYnylxvWvM0p%2FeYXXfwSkPhv6Hbe54mUiYYh3oVhU0pVilKgmrh%2Bge7xIHd2qbvlJbTVDFeory8bPbFB0AuRZrwawxajUDYhnoNVRylvsTpffKVtFhBTk7aqv%2Fm%2F8SErnfNEw%2Fz7749sTrZxl6%2BPTnBwa8L7VEZQb%2F0iWQhny5SqymAHUf2oF0WclXno5XIQy65wmJLb0urLv4dMVmzH%2B5NMd6abOjKTTZtMbjeADUb2llY4J0Aw55de0uwQloMfRzhVypBQY8t63CNwuseIrFBTtfDE7Bv6SeBkgXkF1HP5EyRXY5W%2Fdbj4jzAuiJmTgpsWRm6ohmxza4Q2vEwPSEszQDdGPKCfmU2%2FW7Th8LWUgCrooLYgrjw41U%2BdN5Z0M%2BxdmYmcNWvCpiFRBe4HmByyJ1%2FBdpPnlVME%2FqzKL0sT5Vfqwlq9VjQW017g5vKEvLX9W1zMa7nozAHRoAyykdpCCfKRqWBa8Dhx29O3uxKRQ78OGKuMRd9U%2FXgqC6hiboMOr90skGOqUBQ4oyfqKN3VDJyhAUzWb2OZWoNXvramNuBOND4EdrqoZkF5C1E5TtShxnrbn1vOSlX6L965wGwLWE1cpXSWO1rplQTijJD2HRo51voKRbJfBDo3SNI6KZeLc6JFj1rDq%2Bv8nJYJTvPNS2%2Biv6SbIdwzMQJq0By2IOj516Baw2%2FYLwZ3V4Wn212g9mLUF%2BeX97YJQOARia08TcCkH2xIVF78lW3wdO&X-Amz-Signature=c87cd8c8b00c4c86a2bb38f77fc59c92638467894832262efb1034d321cf013e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


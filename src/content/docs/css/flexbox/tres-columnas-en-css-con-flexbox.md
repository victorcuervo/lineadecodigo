---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGILQEB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPc0%2FOVOHb5kYzGEGyTafqyWeZA17AnZQMDH9Z9oegFQIhAP%2Bb15sDCqXfY50FG4Puu2ueZDdiPvwEj9MuPP5OX3upKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWbnj9i5nLYz13Ys4q3AP4NQBjx1yRU9pD7M%2B6m61kLYF3ApLHYR03q4W2%2B%2B9oCugcdKioiHXpbV8Q5bjlLcjp3c4isd1VmMGYFpYEueObRDfNdcujkgTs%2BMHvqvk3Hx0yEryoKz6CyZrahXZ9qoxlD%2Bl79SH6CUQkRHJjo8wIzaT1VYMG%2FJKcNreLVnIXoeYBvref6e9uRrIi24hZa9g%2FkRJl5zEMXGylAVayulMD7ksqga5NVEkXQF1oA8Hh1mhok6aUg2lJ9kcM2zgz9QMNeJKW4gnBaYOSovOoLs9pPoXd2oIkBMMBrUYIRc6UurZfC9bRGEeuZ%2FQs9SkEOFI1n%2FAOwg2nL1NSxQgu3VXiC%2BU1juqOE5%2FuRpNsOUGb0XZEiCv1WPBPtNkwPnUexl3BsP99iKHBTi8%2Fc%2BKhuHq1VlCrAwuNSPe8puyGLhAiJyfkJrMxkscYjHOr1NDRiZ2NVoKj5H9UKuqNg%2BNC%2B15d7ONhH%2Ft%2BbwAtHkVvq23u0Nd32daWB0ApYJj9utSRDfJc2yb2qiPmpEbv%2F6TgRtI%2FimkqOe6IjlgNeY7Li2rpuxbkJWZEVJxKd%2B1p%2FsoV6hwT53MCNIP%2F%2F4%2F8ioPyYs%2Fhw89UXOc3Zp8P9A7Sy4CmJ3xNSq9mfzdu8VoBajD03NzJBjqkAQLroNd4hObVi0CwQekyYBWVDLCsCv3QKQaHSFtvbhWfzmg%2ByLAj8%2BGjDkRpVaerdeoMFEX1jqAFGkbsIYmGikGPMtF8hfpUfxn77sH%2Ft2WQZKEiDt2%2Bx%2FXRgXB05bR38%2FLnmosgbs8LrOLl2ciCu2k%2FR1vYtwhlUC464EOGo9sW6zbXUq%2BpoG9DQF%2BYiVjeBLZrdU4b1Oxhe9B9v2bdXWaV4rej&X-Amz-Signature=3851c34165f3be03d49980c7432bdca8219b01c9cf5837c300cc865755e7876f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGILQEB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPc0%2FOVOHb5kYzGEGyTafqyWeZA17AnZQMDH9Z9oegFQIhAP%2Bb15sDCqXfY50FG4Puu2ueZDdiPvwEj9MuPP5OX3upKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWbnj9i5nLYz13Ys4q3AP4NQBjx1yRU9pD7M%2B6m61kLYF3ApLHYR03q4W2%2B%2B9oCugcdKioiHXpbV8Q5bjlLcjp3c4isd1VmMGYFpYEueObRDfNdcujkgTs%2BMHvqvk3Hx0yEryoKz6CyZrahXZ9qoxlD%2Bl79SH6CUQkRHJjo8wIzaT1VYMG%2FJKcNreLVnIXoeYBvref6e9uRrIi24hZa9g%2FkRJl5zEMXGylAVayulMD7ksqga5NVEkXQF1oA8Hh1mhok6aUg2lJ9kcM2zgz9QMNeJKW4gnBaYOSovOoLs9pPoXd2oIkBMMBrUYIRc6UurZfC9bRGEeuZ%2FQs9SkEOFI1n%2FAOwg2nL1NSxQgu3VXiC%2BU1juqOE5%2FuRpNsOUGb0XZEiCv1WPBPtNkwPnUexl3BsP99iKHBTi8%2Fc%2BKhuHq1VlCrAwuNSPe8puyGLhAiJyfkJrMxkscYjHOr1NDRiZ2NVoKj5H9UKuqNg%2BNC%2B15d7ONhH%2Ft%2BbwAtHkVvq23u0Nd32daWB0ApYJj9utSRDfJc2yb2qiPmpEbv%2F6TgRtI%2FimkqOe6IjlgNeY7Li2rpuxbkJWZEVJxKd%2B1p%2FsoV6hwT53MCNIP%2F%2F4%2F8ioPyYs%2Fhw89UXOc3Zp8P9A7Sy4CmJ3xNSq9mfzdu8VoBajD03NzJBjqkAQLroNd4hObVi0CwQekyYBWVDLCsCv3QKQaHSFtvbhWfzmg%2ByLAj8%2BGjDkRpVaerdeoMFEX1jqAFGkbsIYmGikGPMtF8hfpUfxn77sH%2Ft2WQZKEiDt2%2Bx%2FXRgXB05bR38%2FLnmosgbs8LrOLl2ciCu2k%2FR1vYtwhlUC464EOGo9sW6zbXUq%2BpoG9DQF%2BYiVjeBLZrdU4b1Oxhe9B9v2bdXWaV4rej&X-Amz-Signature=a2dcc5d15c39f1e4034428db6c394ea68f5c269eecaf91be422e7f9a5e7648b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


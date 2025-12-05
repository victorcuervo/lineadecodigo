---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWSBFXJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIbvhMbTM4yaAYsitCY%2ByZn0wTxNgNnL9hINg%2FnEWfVAiAptym1fDP6szTRpFQRvVoD78I%2Bg9Ry2%2B2I%2FzpV3XMMzyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPod6sFrG%2FvJyFRoOKtwD6QlFxvcUBsk74eNwLbLQScYc9gN2rdV1AD1EeJ3HyrjYKQ%2BSTEcmF9qhdOkkx2WS9JL3HMNaDJoIag4BzHddFLSHtEkFAwzarlg%2Bf%2BzC0QNDNTCW654k2OJPThYSd7JPEBoXSNM8XWYj7zlqVPLOXzQXvabcTrdoZqEOzdOKokF66aI3w%2Fer2RFMMeKFXqb47N6DRIaV9NiIypncZMdzRDy1cCh%2BL3sDI%2B6OAnDajaedTiy2N25kOj3phJLOr48UhD13hqT6mG%2FIjnVMPLgoyKM%2FUsAPV3KwMMop1JiKFgB%2FvqG0JL0sNR4Ke0pdUEhZ4uxyy%2FQAeeOKQr5Z%2B0K8zswXQs5rIl8uaY1vcfA%2F15b%2BmT%2Fc0QCL2%2BGZmnN0Zb2Doa9rQGghWphNtBgNlL0OLlsfVTutHkho3PkqC%2BOFk43SHV6Ydn8GqOHDlm6ooEEjlgcJ9fuWrMS1w7R8q4ZLZxvUCm%2B51cP%2Bul9zQi3f8%2FXE0Np4VuO7M1FMKNUEfKCHtbq8TtoGLT%2B4OPZKFdC91zs2ECLEWyQ9DC0nioZ9UJHJnBFHOgP7wW43DfUhTfe%2BrZ%2F7GA%2BTTWw4DAdPVWTaFYFQ7pz7Pu0xFuBDd%2F9MwzDa3Vrt3XsGdPDGZKYwvuHLyQY6pgHHthRad82DDY5cYMIzbLawLwXzktHyCjM0aV5AKRvQNSe2z2Fh0tbnuBl5dZDIVYMk%2BH%2F2PxIYhPj7k8nKqf31KKtWyGWwJbMYyIkVmIa2kta%2BpRYdr92YMdqQoqcVEDpFdPy4tsldTu20VN61DuOQEWgpycb%2FcDDsW6oFqIP6t9TtPyhhNoC4TCzvF6DLTZT1KueM2Ny6vfCFIsVcZwgqAR2QEmmU&X-Amz-Signature=0925b440a178202c5a8b9a1e191d535b136134b4a2362d33676af3941ec72af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWSBFXJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIbvhMbTM4yaAYsitCY%2ByZn0wTxNgNnL9hINg%2FnEWfVAiAptym1fDP6szTRpFQRvVoD78I%2Bg9Ry2%2B2I%2FzpV3XMMzyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPod6sFrG%2FvJyFRoOKtwD6QlFxvcUBsk74eNwLbLQScYc9gN2rdV1AD1EeJ3HyrjYKQ%2BSTEcmF9qhdOkkx2WS9JL3HMNaDJoIag4BzHddFLSHtEkFAwzarlg%2Bf%2BzC0QNDNTCW654k2OJPThYSd7JPEBoXSNM8XWYj7zlqVPLOXzQXvabcTrdoZqEOzdOKokF66aI3w%2Fer2RFMMeKFXqb47N6DRIaV9NiIypncZMdzRDy1cCh%2BL3sDI%2B6OAnDajaedTiy2N25kOj3phJLOr48UhD13hqT6mG%2FIjnVMPLgoyKM%2FUsAPV3KwMMop1JiKFgB%2FvqG0JL0sNR4Ke0pdUEhZ4uxyy%2FQAeeOKQr5Z%2B0K8zswXQs5rIl8uaY1vcfA%2F15b%2BmT%2Fc0QCL2%2BGZmnN0Zb2Doa9rQGghWphNtBgNlL0OLlsfVTutHkho3PkqC%2BOFk43SHV6Ydn8GqOHDlm6ooEEjlgcJ9fuWrMS1w7R8q4ZLZxvUCm%2B51cP%2Bul9zQi3f8%2FXE0Np4VuO7M1FMKNUEfKCHtbq8TtoGLT%2B4OPZKFdC91zs2ECLEWyQ9DC0nioZ9UJHJnBFHOgP7wW43DfUhTfe%2BrZ%2F7GA%2BTTWw4DAdPVWTaFYFQ7pz7Pu0xFuBDd%2F9MwzDa3Vrt3XsGdPDGZKYwvuHLyQY6pgHHthRad82DDY5cYMIzbLawLwXzktHyCjM0aV5AKRvQNSe2z2Fh0tbnuBl5dZDIVYMk%2BH%2F2PxIYhPj7k8nKqf31KKtWyGWwJbMYyIkVmIa2kta%2BpRYdr92YMdqQoqcVEDpFdPy4tsldTu20VN61DuOQEWgpycb%2FcDDsW6oFqIP6t9TtPyhhNoC4TCzvF6DLTZT1KueM2Ny6vfCFIsVcZwgqAR2QEmmU&X-Amz-Signature=bac04d7dbc2b47966d3f3e173f2f3e32917c1a902eeda52b32533e4be7c86913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


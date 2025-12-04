---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRP2R6X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDjaZTspEyP8ss682nnUIZCyxUvXhDGgFtxlVwXVGq3GQIgcN2EM%2Bfdq6fvi5riSvOLDKJJ4%2BFB5MozpahOSAf7bjgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKIPK9UaQ8JOdVEE%2FCrcA7Cejv%2FXlMcymd7HdSYKVQYbt0Cm3z%2FqIrU8ynw0UW54rPJmu%2BkNG8mLy33ZadYoUrC6fMl8moXEYfkpLL0zs39m7dedlDJstSqFs9ZXMSebWVMtLn2VQ3Vme7Ri4eeU8Yiqt%2BX3INlQU846E7ELVnnt94faIjJ0hTESEYE%2B1BpzxwE0GOeNre%2FSE9XmiwpYF2IBgaw0FRtK%2FWXbQobBYhPn40o1h542NPgsOE3WQL%2FB9YGUAYHljY0NRT%2BXFd9xT%2FrChbTQJrxj91TTqqhapjBwy9sZKJbMMmb8B7TFJUQXg1mHK92lxI4iUJTk943a0fpdVMVfrtEXb7152GydzFnvKkH614nUlBETvzXDt7hEm0xxSxsSgz4UMRY4SNdwHcAxs8GC2ulSkXqFHYshHEaji7NwwVvIfI54pTpX6BTiV7vcq2ZRoVO%2BFZ4ahGfd3Z43KRyrOXRvtSZR%2FqaLIWXVTZLG%2BBWNqkV7Wl4MFj%2B53sodwFWCFuV89O76EYmlIi31dQgiAo7kMuXYJUEDlPXkBZK%2BmfS4JaD20uJPioCMiU4pS7dBP2%2BTOgBiCjHNWxMxRLtTJzSpJVYondVBGRM37kwgkzNVhGBsGpS1XJLZVSPlaTxgYyNvlLWpMP2hxskGOqUBIMc9h%2FAFvSVMSoKYld1db%2BN4qOD0t%2BybznliYGd3ciq4yMW99FT87vPtLL%2B4cOT8ihBtEbeiHKbiHRo5Hi8QNF6c02nuJsLa6uwvbQUZnDCEC5ZKzuEZ8M%2B0LKCzgTF%2FBd3X2A8vlaoLZtfxX5vOK%2FOexV9%2FaRWvpEj3zC%2FEijTiyWNCscENEK5u%2FaCNISt%2Fi6CpW7wW6YVp%2BWj424hN0Gcr6fmN&X-Amz-Signature=25e691ca4800177472fcf29c52bb142e98e0523d6841495cd07c860b17569471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRP2R6X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDjaZTspEyP8ss682nnUIZCyxUvXhDGgFtxlVwXVGq3GQIgcN2EM%2Bfdq6fvi5riSvOLDKJJ4%2BFB5MozpahOSAf7bjgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKIPK9UaQ8JOdVEE%2FCrcA7Cejv%2FXlMcymd7HdSYKVQYbt0Cm3z%2FqIrU8ynw0UW54rPJmu%2BkNG8mLy33ZadYoUrC6fMl8moXEYfkpLL0zs39m7dedlDJstSqFs9ZXMSebWVMtLn2VQ3Vme7Ri4eeU8Yiqt%2BX3INlQU846E7ELVnnt94faIjJ0hTESEYE%2B1BpzxwE0GOeNre%2FSE9XmiwpYF2IBgaw0FRtK%2FWXbQobBYhPn40o1h542NPgsOE3WQL%2FB9YGUAYHljY0NRT%2BXFd9xT%2FrChbTQJrxj91TTqqhapjBwy9sZKJbMMmb8B7TFJUQXg1mHK92lxI4iUJTk943a0fpdVMVfrtEXb7152GydzFnvKkH614nUlBETvzXDt7hEm0xxSxsSgz4UMRY4SNdwHcAxs8GC2ulSkXqFHYshHEaji7NwwVvIfI54pTpX6BTiV7vcq2ZRoVO%2BFZ4ahGfd3Z43KRyrOXRvtSZR%2FqaLIWXVTZLG%2BBWNqkV7Wl4MFj%2B53sodwFWCFuV89O76EYmlIi31dQgiAo7kMuXYJUEDlPXkBZK%2BmfS4JaD20uJPioCMiU4pS7dBP2%2BTOgBiCjHNWxMxRLtTJzSpJVYondVBGRM37kwgkzNVhGBsGpS1XJLZVSPlaTxgYyNvlLWpMP2hxskGOqUBIMc9h%2FAFvSVMSoKYld1db%2BN4qOD0t%2BybznliYGd3ciq4yMW99FT87vPtLL%2B4cOT8ihBtEbeiHKbiHRo5Hi8QNF6c02nuJsLa6uwvbQUZnDCEC5ZKzuEZ8M%2B0LKCzgTF%2FBd3X2A8vlaoLZtfxX5vOK%2FOexV9%2FaRWvpEj3zC%2FEijTiyWNCscENEK5u%2FaCNISt%2Fi6CpW7wW6YVp%2BWj424hN0Gcr6fmN&X-Amz-Signature=d217e3190897afc1528390d39ae82de86c50a47cf348a2e3096d3a028ef8faff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


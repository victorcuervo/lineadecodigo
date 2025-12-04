---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXRW636%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAGtitEvxG2gIJOgCIP%2BzW4Ly4YVIErDsXE3B1Nn1u1MAiBFZlMPKsTBYBWZtLHQUAn3ylgVH5T6AI9816mUCeg9Lyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGHmT3I6gnKiEYsk6KtwDPB37KabL%2FkTdBZElROAQiA9%2FrYJ8pWF8WKpxUnrNKmHlFiEdRIUpEY1WIsDmxHwSljFc5HX8zZplB8gamDR%2FTbJLEG%2F7EuV6YDQa1GZxoouo49D%2Begyn3vbal1KOh%2Bx8i82Cql51l3W19Gj6Uwzq5hMCYQrHHeArIjL5G%2FVilZpiONBAGC2QGEKHnriMjsmoy2Dat7j66o4uPYwp5Ev5TGKkoz0Vt3a5qPcLGl8KTQhzSWu0O0%2FzIQ6efLN9%2FOCexKHSn5rG8SHG7sz5QhyAGaFtTs79sd97kFRjY9YleXLxo0CJkxaZ0sGnWUEcTJpEYJnVw3rhzTmhR7URxHYpsLgHH7QE%2BuosdkaX3wHIML7k78tvNs1sfVW8nziW582lahFwXn46gAYoIB15zuwk2jB%2FLaKwzC%2BBRYzK%2F1SNYyHgZcqkPY%2BorxCPtajuf5N9wb4FN21Xp7z3AWFbFG7WYfvGnwL51Cbk23XkIcGj%2BzqbyBQfJyIY5N34bBGVreDVkkVLHToZXQ2BXU8h1%2FCN3LSg0AtxgZGc8UcsoYmluODteeh%2Feu4UIHOq9bHJLv1zfkkGxif%2F4I%2BNrQ5t46R12VT297U7iBf6cvvJh9cqwuwfX1uPxKIhgZfoxh4wz77GyQY6pgENcYa64e586j9FznkcwkzIWp91vCaSgNIFZfz7Ww4yVA2eGGlC14kHRW1Ln%2B%2BmFYvCEVGNVUA68DnjJif5R3e3DVDgJcbAjIU9qYZcyS6NzCTTM%2FkU1D4WOWbE9GyL8sI2EewII6Eu31GTFnHsGggQnO0yACYRm4yErID2ICtlez0u0W1DAo4xvWyQMnJe9nfxeWG1SF1PssaBxXCIDRlMbE8oPDOP&X-Amz-Signature=2e0a012db4067cd0af5aa23e9e209eb126e4d3137acc2c596a7f72d3fd6174ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXRW636%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAGtitEvxG2gIJOgCIP%2BzW4Ly4YVIErDsXE3B1Nn1u1MAiBFZlMPKsTBYBWZtLHQUAn3ylgVH5T6AI9816mUCeg9Lyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGHmT3I6gnKiEYsk6KtwDPB37KabL%2FkTdBZElROAQiA9%2FrYJ8pWF8WKpxUnrNKmHlFiEdRIUpEY1WIsDmxHwSljFc5HX8zZplB8gamDR%2FTbJLEG%2F7EuV6YDQa1GZxoouo49D%2Begyn3vbal1KOh%2Bx8i82Cql51l3W19Gj6Uwzq5hMCYQrHHeArIjL5G%2FVilZpiONBAGC2QGEKHnriMjsmoy2Dat7j66o4uPYwp5Ev5TGKkoz0Vt3a5qPcLGl8KTQhzSWu0O0%2FzIQ6efLN9%2FOCexKHSn5rG8SHG7sz5QhyAGaFtTs79sd97kFRjY9YleXLxo0CJkxaZ0sGnWUEcTJpEYJnVw3rhzTmhR7URxHYpsLgHH7QE%2BuosdkaX3wHIML7k78tvNs1sfVW8nziW582lahFwXn46gAYoIB15zuwk2jB%2FLaKwzC%2BBRYzK%2F1SNYyHgZcqkPY%2BorxCPtajuf5N9wb4FN21Xp7z3AWFbFG7WYfvGnwL51Cbk23XkIcGj%2BzqbyBQfJyIY5N34bBGVreDVkkVLHToZXQ2BXU8h1%2FCN3LSg0AtxgZGc8UcsoYmluODteeh%2Feu4UIHOq9bHJLv1zfkkGxif%2F4I%2BNrQ5t46R12VT297U7iBf6cvvJh9cqwuwfX1uPxKIhgZfoxh4wz77GyQY6pgENcYa64e586j9FznkcwkzIWp91vCaSgNIFZfz7Ww4yVA2eGGlC14kHRW1Ln%2B%2BmFYvCEVGNVUA68DnjJif5R3e3DVDgJcbAjIU9qYZcyS6NzCTTM%2FkU1D4WOWbE9GyL8sI2EewII6Eu31GTFnHsGggQnO0yACYRm4yErID2ICtlez0u0W1DAo4xvWyQMnJe9nfxeWG1SF1PssaBxXCIDRlMbE8oPDOP&X-Amz-Signature=684ebbb73076b61896601adb6c7e9024548c3d45d6ad60fba2509d8897e9dab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


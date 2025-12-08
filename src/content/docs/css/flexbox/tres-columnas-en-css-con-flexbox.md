---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4D4OR3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtJeRxY%2FPB1gJigVolex1wyik8ywGitF5xQJ7KrpqQQIgQiHcVyvSuT%2BxFlhRGc5OWOD5uhw4lCkJV%2FE%2FGscKVtYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNd4AwxjRP3M8BN2ircAyE6BNu4D4lAurAARqYdrf1mIjTwjn9YYA5F8g%2FpIDItQS8j%2FXdftYdd3fZoohHrNmw97mnLm9ki9w6m5n0mmCq4gtbO6M%2FW0AdnuhoHtkC8GIlgVz5BCjST0In5wI5BL9Acfz37orRZxCxqbA3MSh4PYSbjyQxlrDzToHMwMlW1QPjwEz6DO19bhbPnx%2FW%2FA%2FBFQuqycYlTKp9OiamtMsnVLaAfm87l0STewnhiyjGey%2FV%2BaLKjFjMOsBfRNR41gp4roAloFlGxc7HQK8zU7eWgc0Ubez%2FmBXAko0ueC5HQLdixdi3MUrfZ5Bm5AhOSt60xW0aSgWnttKsrBIBi3gJ1DQw9QBFyKS8yR9zUZzy4Jo9W4Nhc%2B3N5WrahYvK5UKzAs85V81l9pXDTPhsWMb4bUv87x%2BTJ4ioVmPP3h%2FG8PqvoXKmjT50jTf4xdxkF2lBkiMQwk4ZA71rDs9BObprxE4a7SCeXLaQUaFQXSiyJyhw2mSPQjwPV%2BT0UVmvxmnQprBaySxuWViMJTJVk42Uyn3NjZ62nGOfVFNDbmqRXIzC6LHlWaezFUpgjL4W%2B1enVBM8uzsQsawiPHR%2F0iSvispDcW3%2BI64z4S38yVCeOPHJADBoH7ICFjazXMPzk28kGOqUBhBEKCrcAhFjD6osF4LJjkUlJp7p6RQmKxyDuVhZAoApSIQjI1LJ78z8a3lM%2Fxr9%2FcHIDUb8tPlNNt27atgRXqfvcRFmKMNCGMoDMN%2FCIe6jkLV1aat%2BcMJZHIx%2BzkylH9v%2F7U11UvNnIYg69HVTLsmR6KxXnjRsPS1c6mOm%2BCZkygz%2FD7cWvqDywWYpa5IVQm0EJ59amN%2BtMMgU7T1HykG0GVbkv&X-Amz-Signature=741cb0c33c9bc611152fd7b3705ce0cd54496eddd97c55a029f3ffc639f2813f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4D4OR3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtJeRxY%2FPB1gJigVolex1wyik8ywGitF5xQJ7KrpqQQIgQiHcVyvSuT%2BxFlhRGc5OWOD5uhw4lCkJV%2FE%2FGscKVtYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNd4AwxjRP3M8BN2ircAyE6BNu4D4lAurAARqYdrf1mIjTwjn9YYA5F8g%2FpIDItQS8j%2FXdftYdd3fZoohHrNmw97mnLm9ki9w6m5n0mmCq4gtbO6M%2FW0AdnuhoHtkC8GIlgVz5BCjST0In5wI5BL9Acfz37orRZxCxqbA3MSh4PYSbjyQxlrDzToHMwMlW1QPjwEz6DO19bhbPnx%2FW%2FA%2FBFQuqycYlTKp9OiamtMsnVLaAfm87l0STewnhiyjGey%2FV%2BaLKjFjMOsBfRNR41gp4roAloFlGxc7HQK8zU7eWgc0Ubez%2FmBXAko0ueC5HQLdixdi3MUrfZ5Bm5AhOSt60xW0aSgWnttKsrBIBi3gJ1DQw9QBFyKS8yR9zUZzy4Jo9W4Nhc%2B3N5WrahYvK5UKzAs85V81l9pXDTPhsWMb4bUv87x%2BTJ4ioVmPP3h%2FG8PqvoXKmjT50jTf4xdxkF2lBkiMQwk4ZA71rDs9BObprxE4a7SCeXLaQUaFQXSiyJyhw2mSPQjwPV%2BT0UVmvxmnQprBaySxuWViMJTJVk42Uyn3NjZ62nGOfVFNDbmqRXIzC6LHlWaezFUpgjL4W%2B1enVBM8uzsQsawiPHR%2F0iSvispDcW3%2BI64z4S38yVCeOPHJADBoH7ICFjazXMPzk28kGOqUBhBEKCrcAhFjD6osF4LJjkUlJp7p6RQmKxyDuVhZAoApSIQjI1LJ78z8a3lM%2Fxr9%2FcHIDUb8tPlNNt27atgRXqfvcRFmKMNCGMoDMN%2FCIe6jkLV1aat%2BcMJZHIx%2BzkylH9v%2F7U11UvNnIYg69HVTLsmR6KxXnjRsPS1c6mOm%2BCZkygz%2FD7cWvqDywWYpa5IVQm0EJ59amN%2BtMMgU7T1HykG0GVbkv&X-Amz-Signature=dcfc58830b8ab66fa4f4de30e5d322c22344587b3de0a71b50c8cd2d35915202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


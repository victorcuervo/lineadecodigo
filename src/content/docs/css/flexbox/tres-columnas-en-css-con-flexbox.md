---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=37bc146be22de4a2cb44e80944dd4cea48115e89a8c7c32d01bfde8e660fc2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=733989d12b96a13119a3d902cc69a602d58411970255af70ad0dd76e3b711cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


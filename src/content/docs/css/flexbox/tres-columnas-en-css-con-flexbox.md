---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKRTHYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcFoWaXD%2B0gwFcrupBXjXBUMNrUt2VrY1yj%2F3vZjooJAiBA78DugCwvK6LTm72%2FJVKOp86tnpWRHZV4l5h6Onk5ESqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYpaj3Clc4P2aekwmKtwDgSzSjgw6RBjJ56UyQe2HpM2lRQL5a0E7ht%2Fmba6neKhnx%2FUZkR9ZLKKg0hoXsW%2FXqfVOua4ibVsEOCmjzHZDzAJZYdjeASAiWXhf0Q%2Fkdha5HBc3Deq3hfUnMjVnTYbqmSpv2ZLAiYIiGqEIi%2BbF7UpK6mKUZARlHoyX2iKtcAc7z8QG8vtzWPs6kDV2%2B2W5FlIxW1AxCW2m48aO%2BeT13%2FX75aKoxI%2BkfUFcA85vOhkhvkUzZAyDb%2FBUvQBsAoez0GPnnHcthQlgyZdtSxnqfWUzeM%2BfxQts6EnXBf3t%2Bbkh%2BP%2FojoT8VZMU54PsZ7RjWOZBINuoojPD9%2BTsrxlSDABiXoj03Y6RqCqgxB5S%2FHhd9tfViUGonrS81P8soQwt0NjdX%2Bl3%2Bh55P4hBsEGtIjlCPR4iZtrPzsJtdy0s3aD%2BsCvAZPWVFaOLpHOhI9SYIXoEvA1sIPajAeJOn%2FXLkdR8xU%2Fg61Wnrm6CfXPMPM3bOpKvqIrExtLFhbdRxYjxis%2FfU1o%2F377Y52zr%2B7JB5iwD01DTieBhRRgbjvATh3hNF%2BHTPPm4zdeMPVtSCENi9QUwStEemHi7WWOySVGs2q2sMJatVcrnpyCZ7hnilfSXO6pAw2N3TmzYSJIwza3eyQY6pgHOlS0pk7rFDExWSgnEuWQAVhxFz%2Fvh4gXMoQeOG6l2jHpyYi4byr1YevmkaR4jTkpY2jXE8jR9KOofW6peC7jdYoJS1cbjOV5P%2FcdC3WSeAidxsfzT3DfQLGjI%2BAe8%2FNGwZk%2FCjZMIvCbLuY9Z8zLqDseHodw%2FS4v0VAhIF34egBZR4du62HzsEuOT0ke0ugpCT6ays1Z7AxNel5R96xJYmPV9A8UV&X-Amz-Signature=0659142bc97f3cb37f81ad522768d60d13218044273d7f9db46b212f67ef2f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKRTHYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcFoWaXD%2B0gwFcrupBXjXBUMNrUt2VrY1yj%2F3vZjooJAiBA78DugCwvK6LTm72%2FJVKOp86tnpWRHZV4l5h6Onk5ESqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYpaj3Clc4P2aekwmKtwDgSzSjgw6RBjJ56UyQe2HpM2lRQL5a0E7ht%2Fmba6neKhnx%2FUZkR9ZLKKg0hoXsW%2FXqfVOua4ibVsEOCmjzHZDzAJZYdjeASAiWXhf0Q%2Fkdha5HBc3Deq3hfUnMjVnTYbqmSpv2ZLAiYIiGqEIi%2BbF7UpK6mKUZARlHoyX2iKtcAc7z8QG8vtzWPs6kDV2%2B2W5FlIxW1AxCW2m48aO%2BeT13%2FX75aKoxI%2BkfUFcA85vOhkhvkUzZAyDb%2FBUvQBsAoez0GPnnHcthQlgyZdtSxnqfWUzeM%2BfxQts6EnXBf3t%2Bbkh%2BP%2FojoT8VZMU54PsZ7RjWOZBINuoojPD9%2BTsrxlSDABiXoj03Y6RqCqgxB5S%2FHhd9tfViUGonrS81P8soQwt0NjdX%2Bl3%2Bh55P4hBsEGtIjlCPR4iZtrPzsJtdy0s3aD%2BsCvAZPWVFaOLpHOhI9SYIXoEvA1sIPajAeJOn%2FXLkdR8xU%2Fg61Wnrm6CfXPMPM3bOpKvqIrExtLFhbdRxYjxis%2FfU1o%2F377Y52zr%2B7JB5iwD01DTieBhRRgbjvATh3hNF%2BHTPPm4zdeMPVtSCENi9QUwStEemHi7WWOySVGs2q2sMJatVcrnpyCZ7hnilfSXO6pAw2N3TmzYSJIwza3eyQY6pgHOlS0pk7rFDExWSgnEuWQAVhxFz%2Fvh4gXMoQeOG6l2jHpyYi4byr1YevmkaR4jTkpY2jXE8jR9KOofW6peC7jdYoJS1cbjOV5P%2FcdC3WSeAidxsfzT3DfQLGjI%2BAe8%2FNGwZk%2FCjZMIvCbLuY9Z8zLqDseHodw%2FS4v0VAhIF34egBZR4du62HzsEuOT0ke0ugpCT6ays1Z7AxNel5R96xJYmPV9A8UV&X-Amz-Signature=e786d6dba5c43ff8538266aaf90c4fcab026d44a16068acef1df11d0b29e5822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


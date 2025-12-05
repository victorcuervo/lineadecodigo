---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWR42DU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWgHMQgCIX9s7CSizA3MufyCVxVB7Yz8RJlqJ6%2FeP%2BvAiALW0lGkvW9L8P9YDztKuMzmc4phKz9afU1TkgzRdK4CCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMPIUBJ9tldqJ0RqoJKtwDxzPZrNe5qQGbubBJ9kwJshxhXnlIQzqxzMs7GPUNbn7XxzGGxET1S22C19tUrpKemT5khP3WNs%2F3Di%2FYsD8BofiCSUem8LM7%2BQOyxA1j0cRlR8Hl54qn8j%2B6u9W8N%2BmD3f11Ye%2BpmCkUXzFn4s6xFiYkHbkepU39AGTql%2BO5wkBLucVUbq%2FCf7%2FwG7pwiUW%2B7tInzK68LIEmu0bUE%2Fi0c2LPl8sqqPhCevWOMqWAQzRA6k8aTbgRw7KwYPJ2L5JouQr1Ljeuc%2BsUut6Gj762fxR1JyVnTFvUB%2B0Ng3UZbfxQqCrvKdRFduTwqMeRz2XArR3NJPn%2F79NXTGbEfXi7N9sJwhTFwoNO77gMV7ONwuRsj7EeeiN4XbMlzEmwkID17YdUxQQSe6laILEqBp3iI%2BwDtGRwt0CN9v5RGnivgn%2BO0pQO11WgDC%2Fd3AmgNaRZyWOgEhWBZ3gd%2FEpaXZnm659oj1X2MOPjoxiYU3l9rvSCEAnVB8sxxTJ0VJSpZy%2F28IgF1MdOOZGxohkHVVQSrYDekRFvAZSEJl0WRgFq0kdlxsfkA9Mqrs3BGd6djybs22KSOJHIjjr%2Bb4C12tBht6E9KOg7pStt4ecOR%2Bdj9J1qVCS6dfdjGECqoXIw5KnJyQY6pgGmy1n%2F8Kkfk4Mo7e5y%2B8Rm2z0et%2B%2FYuA3t0u0ndteFjc8J34Ly04ZpJVWKnvvPPA0p9HKRIrL%2FPQG5cTPa6HyG61MZsKJCRiAYU%2BqrCMm9A%2BX5XWrtXm5QAIHoJ67%2FMia909Z14ioiUzi7OzAJ2FDVCL6xtdv0VCOa6Vwd34iQgybFHij7Elb4nsdic6Wwt%2BlllWZBM7%2BDApppaIJbZygsd4gBkPXS&X-Amz-Signature=5ba99e51fc3e36ebffa26b25aa6adf0e1b063806b29dc37f0f57dfb3d93b32f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWR42DU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWgHMQgCIX9s7CSizA3MufyCVxVB7Yz8RJlqJ6%2FeP%2BvAiALW0lGkvW9L8P9YDztKuMzmc4phKz9afU1TkgzRdK4CCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMPIUBJ9tldqJ0RqoJKtwDxzPZrNe5qQGbubBJ9kwJshxhXnlIQzqxzMs7GPUNbn7XxzGGxET1S22C19tUrpKemT5khP3WNs%2F3Di%2FYsD8BofiCSUem8LM7%2BQOyxA1j0cRlR8Hl54qn8j%2B6u9W8N%2BmD3f11Ye%2BpmCkUXzFn4s6xFiYkHbkepU39AGTql%2BO5wkBLucVUbq%2FCf7%2FwG7pwiUW%2B7tInzK68LIEmu0bUE%2Fi0c2LPl8sqqPhCevWOMqWAQzRA6k8aTbgRw7KwYPJ2L5JouQr1Ljeuc%2BsUut6Gj762fxR1JyVnTFvUB%2B0Ng3UZbfxQqCrvKdRFduTwqMeRz2XArR3NJPn%2F79NXTGbEfXi7N9sJwhTFwoNO77gMV7ONwuRsj7EeeiN4XbMlzEmwkID17YdUxQQSe6laILEqBp3iI%2BwDtGRwt0CN9v5RGnivgn%2BO0pQO11WgDC%2Fd3AmgNaRZyWOgEhWBZ3gd%2FEpaXZnm659oj1X2MOPjoxiYU3l9rvSCEAnVB8sxxTJ0VJSpZy%2F28IgF1MdOOZGxohkHVVQSrYDekRFvAZSEJl0WRgFq0kdlxsfkA9Mqrs3BGd6djybs22KSOJHIjjr%2Bb4C12tBht6E9KOg7pStt4ecOR%2Bdj9J1qVCS6dfdjGECqoXIw5KnJyQY6pgGmy1n%2F8Kkfk4Mo7e5y%2B8Rm2z0et%2B%2FYuA3t0u0ndteFjc8J34Ly04ZpJVWKnvvPPA0p9HKRIrL%2FPQG5cTPa6HyG61MZsKJCRiAYU%2BqrCMm9A%2BX5XWrtXm5QAIHoJ67%2FMia909Z14ioiUzi7OzAJ2FDVCL6xtdv0VCOa6Vwd34iQgybFHij7Elb4nsdic6Wwt%2BlllWZBM7%2BDApppaIJbZygsd4gBkPXS&X-Amz-Signature=30a135836a087212c42d8e343576ae40e300a58f785ef9222dd40f25b63a9010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


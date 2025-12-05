---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDXWFMD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9vYtPWsg64ELsvRVrku1gXTMJ%2BVrw0Yhqh%2F1PHiX3aQIhAJ%2F1EpGFw5l3zStffCgZ59Vx0w%2FQ%2BZP6dfLndJthOtbdKv8DCFUQABoMNjM3NDIzMTgzODA1Igy9F5oNOSA9uwk9uEoq3AOpkvVOL%2FPgsSOwpjT1LoJ0x1G%2BFxvMWkvFKi6eJxDvkifM8Wd%2FSQFp5b%2FXuLchlo%2F57RH52tBC71ZncqTmCB2ZEffkM020SBXr%2FynRsUue360IbxmHfep9bs2%2BYHzGGK9Hy%2BhP1NMjm10CbYgOdS48VOCQ0cJDKOYczxNGopzu3ek91Go4m%2BOtVGnnLodBZlF6qgcYPuRibnlym5shyeO7gZ%2BpM4h5hypjW0cQ2KT5is0HAv6KulufSUrE4IFWNExI5MiMNKrHuncwQA0NxKQ3UHkAHrtRc5O1i6OED0U6uHhbbgoPtFRkKPh7vl3bCiXte4abjnFlRDxo5Z3q7urN%2FJpCbRd0x5xk5qiSVE%2BYlAScWfkzRuda6Y7w1CqfhyPTwSP0jpL1Sfx3vVPvwDf63dAjwVE0XKLMk4tea41zp9TPXWowSDImcnR6mrPX1jdtDNuc5cQdmnDeTZQnNh6hiwTcRWmHAEJ64tsOVp4zpi9HzZVOzH%2B%2BvIsE1xJKoDbXEmD%2F4KkHM%2B9F0Dvr2YA13GS%2BRY6%2F2gdHhccCVds6H2WFdUrge1an9Mk6fDcFXSaRtHd7osEbuRiIwPehNP%2Fv3HjovFdOv9k7dcIs1ZsDEk0LVg2VNxYq2Zl9ATDqqsnJBjqkAbPCxihZAiXTaB7%2BnOwZV5%2FNbnKfV7CRIWYyY%2BSPuwoqCL2eCUrXKNxjLF7FNNjV1UxOjUJy0cdjzy%2But44b8wNWgMOAP6GQeFtckJKhUAJcaSgGB1PbekO5v8n7Sm7eAUmAycGVD0zHgJFa2R6hASx3FNhVpXzQOup3ERkJ8ptiUtdFWxHbkHYBODKHvmPfUvgbyHTk3N0j1NAsIC0FnnhbKuH7&X-Amz-Signature=181c14995192dcfc83a93479ff36b938d48d15e145df6b54ed93462098f9ba31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDXWFMD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9vYtPWsg64ELsvRVrku1gXTMJ%2BVrw0Yhqh%2F1PHiX3aQIhAJ%2F1EpGFw5l3zStffCgZ59Vx0w%2FQ%2BZP6dfLndJthOtbdKv8DCFUQABoMNjM3NDIzMTgzODA1Igy9F5oNOSA9uwk9uEoq3AOpkvVOL%2FPgsSOwpjT1LoJ0x1G%2BFxvMWkvFKi6eJxDvkifM8Wd%2FSQFp5b%2FXuLchlo%2F57RH52tBC71ZncqTmCB2ZEffkM020SBXr%2FynRsUue360IbxmHfep9bs2%2BYHzGGK9Hy%2BhP1NMjm10CbYgOdS48VOCQ0cJDKOYczxNGopzu3ek91Go4m%2BOtVGnnLodBZlF6qgcYPuRibnlym5shyeO7gZ%2BpM4h5hypjW0cQ2KT5is0HAv6KulufSUrE4IFWNExI5MiMNKrHuncwQA0NxKQ3UHkAHrtRc5O1i6OED0U6uHhbbgoPtFRkKPh7vl3bCiXte4abjnFlRDxo5Z3q7urN%2FJpCbRd0x5xk5qiSVE%2BYlAScWfkzRuda6Y7w1CqfhyPTwSP0jpL1Sfx3vVPvwDf63dAjwVE0XKLMk4tea41zp9TPXWowSDImcnR6mrPX1jdtDNuc5cQdmnDeTZQnNh6hiwTcRWmHAEJ64tsOVp4zpi9HzZVOzH%2B%2BvIsE1xJKoDbXEmD%2F4KkHM%2B9F0Dvr2YA13GS%2BRY6%2F2gdHhccCVds6H2WFdUrge1an9Mk6fDcFXSaRtHd7osEbuRiIwPehNP%2Fv3HjovFdOv9k7dcIs1ZsDEk0LVg2VNxYq2Zl9ATDqqsnJBjqkAbPCxihZAiXTaB7%2BnOwZV5%2FNbnKfV7CRIWYyY%2BSPuwoqCL2eCUrXKNxjLF7FNNjV1UxOjUJy0cdjzy%2But44b8wNWgMOAP6GQeFtckJKhUAJcaSgGB1PbekO5v8n7Sm7eAUmAycGVD0zHgJFa2R6hASx3FNhVpXzQOup3ERkJ8ptiUtdFWxHbkHYBODKHvmPfUvgbyHTk3N0j1NAsIC0FnnhbKuH7&X-Amz-Signature=6e2f5e39f1d7b3529574f6b0ecb3c1644ecdf82f9fb7da99d7e0c9c2443cdb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZSYH3K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwWC%2BzydW%2BF0ek9Sbb7oetNvoMf%2Fyv248TmCUZjij5xAIhAJrlDHtRXa8%2BCDCVeCN%2B5YBwEPF19ClUXX1OK9Iy7JoXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydIiprKZOxJXkKgQEq3AMgxFXPcSOTffuhceigE6frAgnmbUlIzwVIJJ4BjJgxSGWtGyazlmRZbseRXS9Jz%2FAoxHyitOvz4f3Y6Yz8W7PaZMkWTtCzxrVfTuMlU24SI%2FzsBoF1KOY64J8juCxqfG1AzGy7bYnD%2B0zGqxFpaZ23q%2FS8QvmOdVSJp5lcm5uXzIzttIR4baCtRSyDQAN%2BiQzBtfj3tU1LY9vWsZjUzBPGOegDQDXY%2FHf%2FkEtPvSwqiCGUVczBpYDYGu19O4JLl73d2u%2FMO1UtwY%2BZRBygAcx9TDQrgb0aFBoAkUEK5%2FmkQmXz9sjP2YewkbFmmKWXvCJ3s8BbmVkzCr0QQkbOZC6dxO7X%2BB06riW9%2BoNM8pQaA8W4TTYyKMl21Oa9ybx9mxFc%2BbISS0lQgszIKbY%2F1frglbOGKlT74qDnRzhK%2BUOewUwR%2BqHdroP38mdrmlmQ3Bo%2FL5UaCsbJws9X5WUJs0vHLtQnsnutFIf7VKNDX1wO4BtF81j3Oq8jfmwiW7ZoqDtyQEFdFmoG4BUIWn1DWjcHxAL6VwKommFBswOqGJ5gpg9HNoQgFQ0FSRow3SPEsVtQmsoogKDycllqLKeewLdbJo7Jkuoj5i6VYSz%2BzRBu0usZaIXy4hmrABkO4zCa%2FdLJBjqkAVSHOz0lDM1V4Czm0yeEOCg7B81R%2B0dN5b%2BIKAGL4mRH3xzQ60RSe96v85M7G%2BhwQ7ROiax94h%2BJAk03QYKyzewpvMzK6P8JBw4VHZtaZ5YHuikLWA%2BNhfN354C25a0R9hG3SM4dQqiaPb6WQv9s5HfJNFv2Fmx8PwuWSfM2kKizfXP6sKz8rpZ%2BzDnz3%2FxkdaVPAZBQ7WXhYjUpmaYgy70E8WZk&X-Amz-Signature=4aa7390e136b526362f8550320174a3a9c4e61271a999b28f02e91c7f50d64c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZSYH3K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwWC%2BzydW%2BF0ek9Sbb7oetNvoMf%2Fyv248TmCUZjij5xAIhAJrlDHtRXa8%2BCDCVeCN%2B5YBwEPF19ClUXX1OK9Iy7JoXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydIiprKZOxJXkKgQEq3AMgxFXPcSOTffuhceigE6frAgnmbUlIzwVIJJ4BjJgxSGWtGyazlmRZbseRXS9Jz%2FAoxHyitOvz4f3Y6Yz8W7PaZMkWTtCzxrVfTuMlU24SI%2FzsBoF1KOY64J8juCxqfG1AzGy7bYnD%2B0zGqxFpaZ23q%2FS8QvmOdVSJp5lcm5uXzIzttIR4baCtRSyDQAN%2BiQzBtfj3tU1LY9vWsZjUzBPGOegDQDXY%2FHf%2FkEtPvSwqiCGUVczBpYDYGu19O4JLl73d2u%2FMO1UtwY%2BZRBygAcx9TDQrgb0aFBoAkUEK5%2FmkQmXz9sjP2YewkbFmmKWXvCJ3s8BbmVkzCr0QQkbOZC6dxO7X%2BB06riW9%2BoNM8pQaA8W4TTYyKMl21Oa9ybx9mxFc%2BbISS0lQgszIKbY%2F1frglbOGKlT74qDnRzhK%2BUOewUwR%2BqHdroP38mdrmlmQ3Bo%2FL5UaCsbJws9X5WUJs0vHLtQnsnutFIf7VKNDX1wO4BtF81j3Oq8jfmwiW7ZoqDtyQEFdFmoG4BUIWn1DWjcHxAL6VwKommFBswOqGJ5gpg9HNoQgFQ0FSRow3SPEsVtQmsoogKDycllqLKeewLdbJo7Jkuoj5i6VYSz%2BzRBu0usZaIXy4hmrABkO4zCa%2FdLJBjqkAVSHOz0lDM1V4Czm0yeEOCg7B81R%2B0dN5b%2BIKAGL4mRH3xzQ60RSe96v85M7G%2BhwQ7ROiax94h%2BJAk03QYKyzewpvMzK6P8JBw4VHZtaZ5YHuikLWA%2BNhfN354C25a0R9hG3SM4dQqiaPb6WQv9s5HfJNFv2Fmx8PwuWSfM2kKizfXP6sKz8rpZ%2BzDnz3%2FxkdaVPAZBQ7WXhYjUpmaYgy70E8WZk&X-Amz-Signature=8ef8074759ae38fd590170caffb3ff03afce7a603402c1d907fbe32c4ced03a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


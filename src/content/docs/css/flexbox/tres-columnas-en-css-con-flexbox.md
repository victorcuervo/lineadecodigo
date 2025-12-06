---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGQ7JXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnKty3XCGpWzncURbBpdhLZ8DZJ%2FmHIHiWuvhFlOoEigIhAN3ul1XOVgnZEhRAOKoPczke2Ds9ukUrEUgDGOUMEbO8Kv8DCH8QABoMNjM3NDIzMTgzODA1Igzofj9n0nooM8O3RIkq3AM0Vq6WSJ63HQ4mRFpYMOzAwjEqNPishWp6Qi7aBD4WVxASH8vQHpruNfXqsg0xz0TVB3KjPhH55Tvzemjc3YNaXGgw5tkse2jGhsiMXhK2HhhHaIUMlx5bAxBfFHJk3nC6Ufhfcygi%2FWZr8dsGMqgvk1qjD8vFI05OlHrWqGfJPhCsaoiGT9A9zf6SZV4YibBb2IT3H05s7uozHhL8%2FRXnRrB5koOd2Ubv94wc%2Bz4RjhdRWtnQGLxbaGmupvT8RukQTRlcA%2FAUBtoaZ5l5g0cSNOlBzG0DuSqZpzkqIGf8gV0%2BmZKRPe0iYVKNXisrKILM9cI2YrPL9z%2BzD3HpsXQxFdGs6Gvtgz4DsnYpcbXphh%2BwLLcoO%2B7R6AbXU4v5MTJOUt%2BKEB1bCAnDMnQbVJvZJy2ijJqdex3FSH7RBz4SSDEIQTvoxnnbCxh1x2gOeiw2ba%2FxrecOJOqwcOJlwaBgmP7KsN20o7CMsdvZITOVqBlz1Hm4yU%2BwPbxkFw0BjZ193%2BOZFAfFiOu8ASMB61Q6xc1cTS2gbEX4Ok%2BTZ3LNtaJAIU2YjFRhwb7wDN1ejolEyciQZvesl2QIpMOdsFM6z%2BByLjYn1BaZiTzb9kJ4vBQYzQk8jeOPVuQS2TDG1NLJBjqkAVzjI61LaDlc7Qc991iu753Y5J9D9XrxSi2HbxwBwpHZlLQjDVsZTT3Of52Ro5AvAX%2BMGhSP1AdpuOR6IEs7aRJpfbFhCMdzfpfV4HG7xCYD21Eux6XVyczABLutpobAJybc7eUjvHUR6BC3kATf4tDVMw2x4asIbjqOGrSHANYY%2FpZJwgxozGyLgMAxtWyNI%2BS9OiKvBAmu4JrFnbkhZxCT3%2BBr&X-Amz-Signature=79f61fb841eefbb7a2b1feb140e91bbb284fe4c9c10a580c83e0f92441a3b228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGQ7JXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnKty3XCGpWzncURbBpdhLZ8DZJ%2FmHIHiWuvhFlOoEigIhAN3ul1XOVgnZEhRAOKoPczke2Ds9ukUrEUgDGOUMEbO8Kv8DCH8QABoMNjM3NDIzMTgzODA1Igzofj9n0nooM8O3RIkq3AM0Vq6WSJ63HQ4mRFpYMOzAwjEqNPishWp6Qi7aBD4WVxASH8vQHpruNfXqsg0xz0TVB3KjPhH55Tvzemjc3YNaXGgw5tkse2jGhsiMXhK2HhhHaIUMlx5bAxBfFHJk3nC6Ufhfcygi%2FWZr8dsGMqgvk1qjD8vFI05OlHrWqGfJPhCsaoiGT9A9zf6SZV4YibBb2IT3H05s7uozHhL8%2FRXnRrB5koOd2Ubv94wc%2Bz4RjhdRWtnQGLxbaGmupvT8RukQTRlcA%2FAUBtoaZ5l5g0cSNOlBzG0DuSqZpzkqIGf8gV0%2BmZKRPe0iYVKNXisrKILM9cI2YrPL9z%2BzD3HpsXQxFdGs6Gvtgz4DsnYpcbXphh%2BwLLcoO%2B7R6AbXU4v5MTJOUt%2BKEB1bCAnDMnQbVJvZJy2ijJqdex3FSH7RBz4SSDEIQTvoxnnbCxh1x2gOeiw2ba%2FxrecOJOqwcOJlwaBgmP7KsN20o7CMsdvZITOVqBlz1Hm4yU%2BwPbxkFw0BjZ193%2BOZFAfFiOu8ASMB61Q6xc1cTS2gbEX4Ok%2BTZ3LNtaJAIU2YjFRhwb7wDN1ejolEyciQZvesl2QIpMOdsFM6z%2BByLjYn1BaZiTzb9kJ4vBQYzQk8jeOPVuQS2TDG1NLJBjqkAVzjI61LaDlc7Qc991iu753Y5J9D9XrxSi2HbxwBwpHZlLQjDVsZTT3Of52Ro5AvAX%2BMGhSP1AdpuOR6IEs7aRJpfbFhCMdzfpfV4HG7xCYD21Eux6XVyczABLutpobAJybc7eUjvHUR6BC3kATf4tDVMw2x4asIbjqOGrSHANYY%2FpZJwgxozGyLgMAxtWyNI%2BS9OiKvBAmu4JrFnbkhZxCT3%2BBr&X-Amz-Signature=a3fedf1da10040f4d304e02a7b7ba65dc86efd8d7532f33588bd2b429753df86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


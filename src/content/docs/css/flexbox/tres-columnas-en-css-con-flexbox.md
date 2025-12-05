---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APCDFMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfXLF1aiu%2F147WOrvjbuPGf7n1vpbCIDrrBfVtXNsfwwIgA%2FwmHgSfWl8ehIdqqZOuUpZITNcWbkQy7T%2Br4QgtHHkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKWeVdGG45x%2FX%2FPWFircA%2Bgx7ch5RZGuWXqggLi3vwtz5JNZ2k5dyEKA21lsNxgi0B1s8dxxzJjf%2B7sJGG0BlEG9dsirCstaXgplteZ7tz5hQHYHbATIe6N%2Fst1JJQON44Ktl4iG8kTZdKTVDjhqLFDSjfuQYOyIVfY3%2FGxVOmNilfXyxuDm%2BgQNwSrwpI1BLLwoS1fhC1FyNbxihBxslNHCXtylreWsfQvsM8hhctSQ%2BX47pupJqJBcBagzLM1BZvhkeFiqAkD4NO0IX%2FziUaGSPX44BBJwj3PsKFsEYHWtxJnudpBB5w6Ha1UFTiqnuF7DcDfbV%2B292UufaRVMI0H8jUKKuMxkNyvOpTYpRGGg5WPVcMil4C3eb9NSHPb%2FWQ1JvZdp6gxKS%2FSLpaQKAcSRCAAbfTChOSkyt6iMtTGvJ9IIVrvLf77ZzvlsNRffzy%2FN5EB73QI4ly4RC8rdcIFRywpDXcBzy%2FCSeLybB9%2BYeGjIAPPvZPXEBfIHdNFtHg15FCEBPTby%2FluMvS91F4opluFHWiOgQobNkpMxrNbR15tufEEivw6Ry%2Fx5ZfAVFCTD5iuNVoC3btPy5jJwPngWEob9GgqRhu3jcwTEoWOhTO2yBDZLnGBk14RTrOB4%2FTDYHZknqnNib8HVMMeQzckGOqUBYuK8Odayq%2BIV8qZIhlIYghJAUgJgZkrD%2BpUr2HzcmvnnR2LYdBw%2FF%2B%2FPzYNqFxbTQGd3YVe8Z02wbPMJ8te58R%2FuY8RGGWHJqNqRetveo2z8BX4VFgUmnVCVkg5Vkv4XnffTdTBWf2jbeIrFZMvl6tAMZ8ZjnWM%2FNb8youUG6sd6uTmFySA5nNN9Q%2FIIT4CX5XoPMwXhVEiNIwX3VdMwFLn%2BHJ5d&X-Amz-Signature=659d88f3003cc4348f2e95023f788484702293238ed9f06ced297fe97d714112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APCDFMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfXLF1aiu%2F147WOrvjbuPGf7n1vpbCIDrrBfVtXNsfwwIgA%2FwmHgSfWl8ehIdqqZOuUpZITNcWbkQy7T%2Br4QgtHHkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKWeVdGG45x%2FX%2FPWFircA%2Bgx7ch5RZGuWXqggLi3vwtz5JNZ2k5dyEKA21lsNxgi0B1s8dxxzJjf%2B7sJGG0BlEG9dsirCstaXgplteZ7tz5hQHYHbATIe6N%2Fst1JJQON44Ktl4iG8kTZdKTVDjhqLFDSjfuQYOyIVfY3%2FGxVOmNilfXyxuDm%2BgQNwSrwpI1BLLwoS1fhC1FyNbxihBxslNHCXtylreWsfQvsM8hhctSQ%2BX47pupJqJBcBagzLM1BZvhkeFiqAkD4NO0IX%2FziUaGSPX44BBJwj3PsKFsEYHWtxJnudpBB5w6Ha1UFTiqnuF7DcDfbV%2B292UufaRVMI0H8jUKKuMxkNyvOpTYpRGGg5WPVcMil4C3eb9NSHPb%2FWQ1JvZdp6gxKS%2FSLpaQKAcSRCAAbfTChOSkyt6iMtTGvJ9IIVrvLf77ZzvlsNRffzy%2FN5EB73QI4ly4RC8rdcIFRywpDXcBzy%2FCSeLybB9%2BYeGjIAPPvZPXEBfIHdNFtHg15FCEBPTby%2FluMvS91F4opluFHWiOgQobNkpMxrNbR15tufEEivw6Ry%2Fx5ZfAVFCTD5iuNVoC3btPy5jJwPngWEob9GgqRhu3jcwTEoWOhTO2yBDZLnGBk14RTrOB4%2FTDYHZknqnNib8HVMMeQzckGOqUBYuK8Odayq%2BIV8qZIhlIYghJAUgJgZkrD%2BpUr2HzcmvnnR2LYdBw%2FF%2B%2FPzYNqFxbTQGd3YVe8Z02wbPMJ8te58R%2FuY8RGGWHJqNqRetveo2z8BX4VFgUmnVCVkg5Vkv4XnffTdTBWf2jbeIrFZMvl6tAMZ8ZjnWM%2FNb8youUG6sd6uTmFySA5nNN9Q%2FIIT4CX5XoPMwXhVEiNIwX3VdMwFLn%2BHJ5d&X-Amz-Signature=c81565ca1db19c63939876104ec82e05063ccb53b7b96ca84a99d25c8013d7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


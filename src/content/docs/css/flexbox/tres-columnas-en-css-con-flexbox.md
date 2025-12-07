---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEMW4RU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4JhPl17bEsl7UIwwIUTtJKHREgzDER7pCFc8o9BkB%2FAIhAP585durwpbH30N9iPYMrQhZ5Jj2p1J7cELocDOO%2B6k5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF35zV3bTB0XRLtGAq3AMibUwPQLR96KJbEYNhKz46uEmLLL5wod9%2FUcppaHY%2BkWDy6OkY24r21tdUNt759yI4sCI6%2Bs%2Bd1RsgRJpqZ1aWe%2FW1MJSEkamsluv%2FN1vP0F0NwdKy99Fcl0WSCQjxFMIPnH8LTSBHFoTcCyGgbUN782iTitlpMfqQPkFx3Te%2Bmk4foVib45P%2F4%2FTqgidq6LHSt%2F%2B1JKm7%2FyYp0hnAn5qKWh0LqhVMN2q6%2BydULD9eeDKD1Lb3MuSlalnmiDcsHjAHXTEmxjG%2Brm2tpR12mbrBah0CMaCP5EXyqxm5TJD0xNJKds2NKL0rF3iv33ufI%2FP%2B1cOgITSVOY5bppGG8LN72UjBsQ0i%2BdZDn9jF8HoyZblL0DPmaN9gCUrnZu7Vc6%2BEKQxo6727OeWBJY3jQUldSpWAJXxwZLXJ%2B7eeKqoFACTpxrYzHzZZ3eYin3peQBKRujbyHUBey5XbcANO%2Bq6kFTR%2F0J609FzXfkUHXi2FxlAVuYy2aG4uOOtnRFEKcQhNaQewV%2BuyZTtWjq2eJ%2B6S6wDtKODj7KD65%2FToKzsCiT%2F1WlEAFenKkV8x9YwHJ2JNFgNUAu%2F0jySAfJ%2B9S99fzyKo9is1JSYxw6RPIcvDE1C7pjkSar6oXlDD2zC3mdXJBjqkAaAacc27wuj9955GSQ2hY2chUlEnAgmwgW2CcuPS%2B7SpivrvX4mslEWg2ehsDiw%2BPh0A%2FenpZ5AS7E6htSB5KNaoouI1s8xSozRdMFBxYhflcEi0zPZBwTuYMCFcTK7Tzr%2Fwuxlnaic86sj0m1kJS%2FwxR0TXM4EP07GttupjWBf%2Ftsvi6T3ehGOH6VL0JTO2%2F40J0WNICiEaoZt5XLi0G4%2FyCMaD&X-Amz-Signature=150e296971516dc9ce0703668b50cb867743973cfdc3644ad754d80a42acf8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEMW4RU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4JhPl17bEsl7UIwwIUTtJKHREgzDER7pCFc8o9BkB%2FAIhAP585durwpbH30N9iPYMrQhZ5Jj2p1J7cELocDOO%2B6k5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF35zV3bTB0XRLtGAq3AMibUwPQLR96KJbEYNhKz46uEmLLL5wod9%2FUcppaHY%2BkWDy6OkY24r21tdUNt759yI4sCI6%2Bs%2Bd1RsgRJpqZ1aWe%2FW1MJSEkamsluv%2FN1vP0F0NwdKy99Fcl0WSCQjxFMIPnH8LTSBHFoTcCyGgbUN782iTitlpMfqQPkFx3Te%2Bmk4foVib45P%2F4%2FTqgidq6LHSt%2F%2B1JKm7%2FyYp0hnAn5qKWh0LqhVMN2q6%2BydULD9eeDKD1Lb3MuSlalnmiDcsHjAHXTEmxjG%2Brm2tpR12mbrBah0CMaCP5EXyqxm5TJD0xNJKds2NKL0rF3iv33ufI%2FP%2B1cOgITSVOY5bppGG8LN72UjBsQ0i%2BdZDn9jF8HoyZblL0DPmaN9gCUrnZu7Vc6%2BEKQxo6727OeWBJY3jQUldSpWAJXxwZLXJ%2B7eeKqoFACTpxrYzHzZZ3eYin3peQBKRujbyHUBey5XbcANO%2Bq6kFTR%2F0J609FzXfkUHXi2FxlAVuYy2aG4uOOtnRFEKcQhNaQewV%2BuyZTtWjq2eJ%2B6S6wDtKODj7KD65%2FToKzsCiT%2F1WlEAFenKkV8x9YwHJ2JNFgNUAu%2F0jySAfJ%2B9S99fzyKo9is1JSYxw6RPIcvDE1C7pjkSar6oXlDD2zC3mdXJBjqkAaAacc27wuj9955GSQ2hY2chUlEnAgmwgW2CcuPS%2B7SpivrvX4mslEWg2ehsDiw%2BPh0A%2FenpZ5AS7E6htSB5KNaoouI1s8xSozRdMFBxYhflcEi0zPZBwTuYMCFcTK7Tzr%2Fwuxlnaic86sj0m1kJS%2FwxR0TXM4EP07GttupjWBf%2Ftsvi6T3ehGOH6VL0JTO2%2F40J0WNICiEaoZt5XLi0G4%2FyCMaD&X-Amz-Signature=20dfe86a61f44e678c7da6ed65971b98a94fb0a6a97423f2bd5f9388d19a8c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


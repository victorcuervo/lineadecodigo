---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737FCHGB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSZM5vTAjCakuHegKfmn5YF8TJH50kdpiGhDs7dpxyQIhAJCCMEQhvBmkpFYA9KOVeufV03g92Al6adJAL2koAgNgKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXlyDt1Bc5sGav%2FiAq3AOOAvWCRPNINobKSXdZ%2BCt4pJgDR1rB06MkFPKBWaCUoMvY3XtP0fq9UaRdcPiE0QBYL%2F0R1OwpLjZChG8QMxmIAGkUgSYzecsWpwxat87canT02lUIh4Mml8PxtunYSgmm39wFWJfYAWN5Zhgc1nUdd%2B4%2BKbslxT%2BSPsCnI8Q9L92WiWaMkoG8ZccnB6W7qtYMr%2BnRxag3ofZFgra%2FfLeTnuVMmNIe60vuX3%2B5S1H4YXUtbY00jtQzRvpG45sJtscKxdSBDWLVWV%2BK%2Bob0FbCPFrxA48DqirogMJFeLrMHHWrsXGk%2FeBjKZ3XqRXnESslvDFZXvBJBCIEX44iq2JnrOD237NX%2Bqo5jW7%2F%2Fu6MnExiRzZiuRyX6Vnej397s0lsoAbaOtT8tqKoef7EX4bVMUmJTfxXJCWMJrn3Ry5ffUWs89WpB3HreeCLLqJ%2BWtIZOvl2v%2F0IDKSRy3oTQTUJQvbH4AtpzxBqCFDU3GXochVguCwIFGNlDAkh1bLZgEHQ%2BytynPZ%2Fc1GYQnzdFNBwAxmDU8js4MKvnlYHIifCoaR36S%2FXOvzaxO%2FOj6HcLNHfHlC7lvWHoG8jV0%2Fs4lG3BOixU9ahzfrin%2FIu4yjDRmXWdPKFhGEweJdVb4zCZ7tnJBjqkAbtWcn4ZC7YzHTFJjp%2BxPdxx1bYV%2BZloNgMdBjftZQa6AEceKXNle5uWbUPcUf5iiEK%2BphKW%2BfAvbeA%2FZKULcvRr73Ym3%2BQ7PsgUzwpGijjKyk89R8Mm1Dq%2FRCwiEg3HPvC5X7oZrFFFScK%2BdHpzqp1B1T58JsPGg8k4vvg%2Fkv100IghY9UikvV6IDkfX7lTbenv5VWo6dWIJw3pe8za0fhya1Bd&X-Amz-Signature=7dbdb0f7a00b0dcd47eb3e129fbdcfcab3cc61ee8b4308b3d6847a0032b89b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737FCHGB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSZM5vTAjCakuHegKfmn5YF8TJH50kdpiGhDs7dpxyQIhAJCCMEQhvBmkpFYA9KOVeufV03g92Al6adJAL2koAgNgKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXlyDt1Bc5sGav%2FiAq3AOOAvWCRPNINobKSXdZ%2BCt4pJgDR1rB06MkFPKBWaCUoMvY3XtP0fq9UaRdcPiE0QBYL%2F0R1OwpLjZChG8QMxmIAGkUgSYzecsWpwxat87canT02lUIh4Mml8PxtunYSgmm39wFWJfYAWN5Zhgc1nUdd%2B4%2BKbslxT%2BSPsCnI8Q9L92WiWaMkoG8ZccnB6W7qtYMr%2BnRxag3ofZFgra%2FfLeTnuVMmNIe60vuX3%2B5S1H4YXUtbY00jtQzRvpG45sJtscKxdSBDWLVWV%2BK%2Bob0FbCPFrxA48DqirogMJFeLrMHHWrsXGk%2FeBjKZ3XqRXnESslvDFZXvBJBCIEX44iq2JnrOD237NX%2Bqo5jW7%2F%2Fu6MnExiRzZiuRyX6Vnej397s0lsoAbaOtT8tqKoef7EX4bVMUmJTfxXJCWMJrn3Ry5ffUWs89WpB3HreeCLLqJ%2BWtIZOvl2v%2F0IDKSRy3oTQTUJQvbH4AtpzxBqCFDU3GXochVguCwIFGNlDAkh1bLZgEHQ%2BytynPZ%2Fc1GYQnzdFNBwAxmDU8js4MKvnlYHIifCoaR36S%2FXOvzaxO%2FOj6HcLNHfHlC7lvWHoG8jV0%2Fs4lG3BOixU9ahzfrin%2FIu4yjDRmXWdPKFhGEweJdVb4zCZ7tnJBjqkAbtWcn4ZC7YzHTFJjp%2BxPdxx1bYV%2BZloNgMdBjftZQa6AEceKXNle5uWbUPcUf5iiEK%2BphKW%2BfAvbeA%2FZKULcvRr73Ym3%2BQ7PsgUzwpGijjKyk89R8Mm1Dq%2FRCwiEg3HPvC5X7oZrFFFScK%2BdHpzqp1B1T58JsPGg8k4vvg%2Fkv100IghY9UikvV6IDkfX7lTbenv5VWo6dWIJw3pe8za0fhya1Bd&X-Amz-Signature=1b054ef4f65c0e52466cb87275815258cc7cff5b85c201afe44113ef666c4b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5FVCMI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2B3UwkvbSaxd0bjey4dHVoTHOWt9rFgGQG%2BoCxsJC6wIhAPl14Yvg5mXsWoPdqaMRnPI%2FmBxwR1IcuoCNDiNUfOS7Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzSswCd%2Fp3i7TqewdIq3APwHma1dn%2BfbulZoMfROASKa9rFsNjsXi4Wrqawf%2FjJuWYYQrT%2F9Ds4XnnmuNbDzkr1GN3TplTi8QALDpMUxKcz797OZT1Sp8IHlnogdB3VffYXp3DGYUAwWZPwJ8tCeXAqY7wgq0qoSIYCjMsUHVZcbCQKaXLZ5fjQhuu7UXTYJ5fS8AlmI64TFGYFELY5W3KdnuQMICgF%2BWX7R1WoKQI9kfqQiVTkmzhd5%2BnCHUKySg5x84kI27ONGTwtJlbI29WKRb6cWSJvO4My5%2FLH4FAdzmcM2Hc6mH9sd8v1pqP6%2BRijtVF0hRsRDDEbhZ1xh2UMa8CF9RAceX7dIpm7CkFccY8T2TPdohJGUXBpKe9ZFiV%2B%2FTXy2tP4LhGtbM89CkrC1EH7q0O4SFa5UVEjFsVA7Fi2EbEPWwJMLpdC9bxAfhvYMUemBI4j9hLL1txWhbdK7ys1ZfuXanBsN5WcW%2BPC6xKW3rjvMFURFoRN4NZjKUbdheenozddIBF4jcsUp5%2FBHiVx%2FUIgShgRwdOsTLciRXEUDp5SuusiEj80gUCweHplpOl7MTQlLw%2B9Bi2cBoVpLMRCm01rlvzgDiAZdyWRLUmqLx%2BnButuGLUsO2c2upf7DPszRRLhzh98DzDUqsnJBjqkAb9%2FPMvGsCqIBRtFRnt1itB%2FkCbHoMndalRP2Vgj%2FD5Lveq9SMLbrW1bE42N8z6yhYVpYW68vIZix%2FWW0bM%2FBP8HaLA0jePDDhL%2BEaDrGDE%2F7TD6%2BV25Soi%2FG6jB0%2B9tMe0eAHZ5rYfrSyFGN6sRt82dTgmMju3gTrc60GJP1mtnennw%2BHQwiNFuYc786aTfjLZxz8i5981EMNQXmGcgnPpWL4jV&X-Amz-Signature=79b5a8615421f6bdf681146609b7d41ba2c6f579f01f43230931962179baf145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5FVCMI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2B3UwkvbSaxd0bjey4dHVoTHOWt9rFgGQG%2BoCxsJC6wIhAPl14Yvg5mXsWoPdqaMRnPI%2FmBxwR1IcuoCNDiNUfOS7Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzSswCd%2Fp3i7TqewdIq3APwHma1dn%2BfbulZoMfROASKa9rFsNjsXi4Wrqawf%2FjJuWYYQrT%2F9Ds4XnnmuNbDzkr1GN3TplTi8QALDpMUxKcz797OZT1Sp8IHlnogdB3VffYXp3DGYUAwWZPwJ8tCeXAqY7wgq0qoSIYCjMsUHVZcbCQKaXLZ5fjQhuu7UXTYJ5fS8AlmI64TFGYFELY5W3KdnuQMICgF%2BWX7R1WoKQI9kfqQiVTkmzhd5%2BnCHUKySg5x84kI27ONGTwtJlbI29WKRb6cWSJvO4My5%2FLH4FAdzmcM2Hc6mH9sd8v1pqP6%2BRijtVF0hRsRDDEbhZ1xh2UMa8CF9RAceX7dIpm7CkFccY8T2TPdohJGUXBpKe9ZFiV%2B%2FTXy2tP4LhGtbM89CkrC1EH7q0O4SFa5UVEjFsVA7Fi2EbEPWwJMLpdC9bxAfhvYMUemBI4j9hLL1txWhbdK7ys1ZfuXanBsN5WcW%2BPC6xKW3rjvMFURFoRN4NZjKUbdheenozddIBF4jcsUp5%2FBHiVx%2FUIgShgRwdOsTLciRXEUDp5SuusiEj80gUCweHplpOl7MTQlLw%2B9Bi2cBoVpLMRCm01rlvzgDiAZdyWRLUmqLx%2BnButuGLUsO2c2upf7DPszRRLhzh98DzDUqsnJBjqkAb9%2FPMvGsCqIBRtFRnt1itB%2FkCbHoMndalRP2Vgj%2FD5Lveq9SMLbrW1bE42N8z6yhYVpYW68vIZix%2FWW0bM%2FBP8HaLA0jePDDhL%2BEaDrGDE%2F7TD6%2BV25Soi%2FG6jB0%2B9tMe0eAHZ5rYfrSyFGN6sRt82dTgmMju3gTrc60GJP1mtnennw%2BHQwiNFuYc786aTfjLZxz8i5981EMNQXmGcgnPpWL4jV&X-Amz-Signature=ded96e174cef4a44ba19b8d574bda3b28b74801ece262e74f3d0b4870be236e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXIIBIZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICmIY49VDAmN50ImLmIDkQiOg1pYXQjJcEl%2FKrRK%2F5S6AiEAg3ZLkXDpFPV4%2BT5IQaHtcegdxq%2BlNlGOCvAHGfdVtskq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGW9QT2DW6eieu7y5yrcA7SIX1uwTtUnKLjNkvPhz1I35OhQq8tZlv4RuUm5dOZo%2BqDU62VT2ixDv9ClL1ULxW00XD3dc2WgDjvBZnH5I9wvKzHAvWrH8RcFO6YyMmdQklgamoY%2FdwmCciTbnT2%2FdpCl82XZcv3J2s1PV4VBLAECE8%2B3u8hnRQbvWBa8p8cCzS0mTeROcpJ3jJXC24AwUnG2zX3EvFoWqPO699%2F2r7lReENtLy72k7%2B5asfcHMQytwiPJg0dKPdD%2Bg%2BjLaZa00Rk954HAn2VwDsAiFF6JPTuutH3bBULbAOfdFbmVWEqv4n26z3tdz8Svj%2F5N8QcreSKaoWoC2%2By7eLGSle7kx8OzQJLvw5aNmb2cwxgU%2FYcCIEG9OO4SHYaATmdB80rH%2BUi24UuV19%2BmHlBnM3VPofua6dAqWhkZjn3yjE6PdrRr54t6dBoDrTFPoRN8g%2BXY7UjYwfr5P5dcm%2FHJ2VOP4lTyAI%2B7rQwaO1WFtcReI76VhO6RPnmekDFbFlcLdaQFVn3MsTDvd0kG%2BuOkv7mC%2BY2Jlf%2F7e9U39WzMPbV9B9%2BDptUcEesCkCavsO184fYDcqbalnolhmyaeY9ndKr3knlk77gskYleHTwmbFYTa0aAldL4iBFS5mFLOtqMJWGxckGOqUBfjFNfjoCoZPFjO5rziqHDlpIrd4eLJnTJwa5%2BY9vatsvts%2F72jqbnCLsV%2BjAQqgCvTLrR%2B%2BvkMamhoaEmBlBOKtBPPMlKa9E5b%2BA6MWjjVSxiabawOPNGtWzUY0tTDW4FMVJ8ZwIS391Eg%2FXo5VcGB6y3PWfhNMtzBT2BnWDnavOjHZH9vxQ1OORC0aNXlxFvYCzdbnJGpcDtjqxaNmlJrnKuO2m&X-Amz-Signature=37f7fee43f832d984642f3b6caaefe54b0b3076130287a2e46653d0701f862e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXIIBIZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICmIY49VDAmN50ImLmIDkQiOg1pYXQjJcEl%2FKrRK%2F5S6AiEAg3ZLkXDpFPV4%2BT5IQaHtcegdxq%2BlNlGOCvAHGfdVtskq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGW9QT2DW6eieu7y5yrcA7SIX1uwTtUnKLjNkvPhz1I35OhQq8tZlv4RuUm5dOZo%2BqDU62VT2ixDv9ClL1ULxW00XD3dc2WgDjvBZnH5I9wvKzHAvWrH8RcFO6YyMmdQklgamoY%2FdwmCciTbnT2%2FdpCl82XZcv3J2s1PV4VBLAECE8%2B3u8hnRQbvWBa8p8cCzS0mTeROcpJ3jJXC24AwUnG2zX3EvFoWqPO699%2F2r7lReENtLy72k7%2B5asfcHMQytwiPJg0dKPdD%2Bg%2BjLaZa00Rk954HAn2VwDsAiFF6JPTuutH3bBULbAOfdFbmVWEqv4n26z3tdz8Svj%2F5N8QcreSKaoWoC2%2By7eLGSle7kx8OzQJLvw5aNmb2cwxgU%2FYcCIEG9OO4SHYaATmdB80rH%2BUi24UuV19%2BmHlBnM3VPofua6dAqWhkZjn3yjE6PdrRr54t6dBoDrTFPoRN8g%2BXY7UjYwfr5P5dcm%2FHJ2VOP4lTyAI%2B7rQwaO1WFtcReI76VhO6RPnmekDFbFlcLdaQFVn3MsTDvd0kG%2BuOkv7mC%2BY2Jlf%2F7e9U39WzMPbV9B9%2BDptUcEesCkCavsO184fYDcqbalnolhmyaeY9ndKr3knlk77gskYleHTwmbFYTa0aAldL4iBFS5mFLOtqMJWGxckGOqUBfjFNfjoCoZPFjO5rziqHDlpIrd4eLJnTJwa5%2BY9vatsvts%2F72jqbnCLsV%2BjAQqgCvTLrR%2B%2BvkMamhoaEmBlBOKtBPPMlKa9E5b%2BA6MWjjVSxiabawOPNGtWzUY0tTDW4FMVJ8ZwIS391Eg%2FXo5VcGB6y3PWfhNMtzBT2BnWDnavOjHZH9vxQ1OORC0aNXlxFvYCzdbnJGpcDtjqxaNmlJrnKuO2m&X-Amz-Signature=2a83ad86f6a415184b2e2ecff6008ed593249d710e9977c7e546c8a1256ba3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


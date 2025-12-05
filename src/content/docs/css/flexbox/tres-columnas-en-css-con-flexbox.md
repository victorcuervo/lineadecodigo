---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPUGV6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDObb%2Fd8uu7%2BFsPfcKZyDYhfcJnC7Z0QKoTsgUWobS4KwIgMZnLbJSUbS7gFhbVBpQXZJccIJl5c5RDqjPbPZsw4C4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDF7HYSCnic0KDdwfZyrcA3j%2FSyW38ASQWBIfROxdt1kZOZqqgQTx4Onm62eQayLr4O0gvuF%2BRw4hWruBqJW9QIUTAr6XbM8sTcbsRmXPSQ2U2ayOw02QyUfCAneP8NbQbxYJb21F94PVtNgZg7x76MfAjiiDGlQMGF9yDEPSO300xr8Ti%2B6513N2GqjUN3XZExuhB3Fh%2Bzv3moQtzyyN50anh9RTDOoSaogJf6vTgPk9EETW9w0j3%2FuXsKYn9TnQYVpIasOsL2FE5SIpolMtD6sd81j7PSshb%2BTC3TJI2Cbws1q4%2BEhRKG8JYuDBTQF%2FS4g%2BdJ72YwFXcBgyGACxOgx6IRrgvwEm0aT9mo7u4eIACLY%2FPTcJzvRNYfX9u5dMdKHFRHInuKUHgAuEwSQi%2BwNkP6x%2F2xp1C7TTay8hPb0d%2Bbr4TitWXdta2M2lEueDHBWpbOTu%2FuIEwBwMTnc8kA%2BpBZtItnDG6NJs%2BaRtxmajbNhE0ZT%2FnCQXtQSV4dKwvgtLc0Pe2URv7uNcm47%2BGvdX%2B3DYDdF3zYfGVciCJma55djRONz%2FHMepkGGbl6xeZer1t3uFOWdF05%2Fu%2BCwUMesWtdeeodYhSr5naga1b5S6wkNwADl%2FQRivOocbyYo2G1j72LxcF3jHwEakMJKMyMkGOqUBEj4Teqmc%2F3zmaeOK7Fj71t2cFKK%2F8js1%2BqLvYlmdOKBjSZ7UHzmd%2FjsU0%2FZb2PF9znyfYQ19DtU6kszh375RAouLAw8jdhqHLIqLcd6JDmi1MnthWqW%2BiVbHY706ZiYv1%2B9SmHrJjnIbB8HK%2F244FxwjegIq%2BBjWTaS3VLmmWAF8oiRVF6pqzDRIRBnw22KcTCgtX7S7ne1I9cUyMw34569QQLGk&X-Amz-Signature=805529a76d2a38adc1cc659393eb1c86d88fe6f6d8feb9fbdff3632e2cdbd980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPUGV6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDObb%2Fd8uu7%2BFsPfcKZyDYhfcJnC7Z0QKoTsgUWobS4KwIgMZnLbJSUbS7gFhbVBpQXZJccIJl5c5RDqjPbPZsw4C4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDF7HYSCnic0KDdwfZyrcA3j%2FSyW38ASQWBIfROxdt1kZOZqqgQTx4Onm62eQayLr4O0gvuF%2BRw4hWruBqJW9QIUTAr6XbM8sTcbsRmXPSQ2U2ayOw02QyUfCAneP8NbQbxYJb21F94PVtNgZg7x76MfAjiiDGlQMGF9yDEPSO300xr8Ti%2B6513N2GqjUN3XZExuhB3Fh%2Bzv3moQtzyyN50anh9RTDOoSaogJf6vTgPk9EETW9w0j3%2FuXsKYn9TnQYVpIasOsL2FE5SIpolMtD6sd81j7PSshb%2BTC3TJI2Cbws1q4%2BEhRKG8JYuDBTQF%2FS4g%2BdJ72YwFXcBgyGACxOgx6IRrgvwEm0aT9mo7u4eIACLY%2FPTcJzvRNYfX9u5dMdKHFRHInuKUHgAuEwSQi%2BwNkP6x%2F2xp1C7TTay8hPb0d%2Bbr4TitWXdta2M2lEueDHBWpbOTu%2FuIEwBwMTnc8kA%2BpBZtItnDG6NJs%2BaRtxmajbNhE0ZT%2FnCQXtQSV4dKwvgtLc0Pe2URv7uNcm47%2BGvdX%2B3DYDdF3zYfGVciCJma55djRONz%2FHMepkGGbl6xeZer1t3uFOWdF05%2Fu%2BCwUMesWtdeeodYhSr5naga1b5S6wkNwADl%2FQRivOocbyYo2G1j72LxcF3jHwEakMJKMyMkGOqUBEj4Teqmc%2F3zmaeOK7Fj71t2cFKK%2F8js1%2BqLvYlmdOKBjSZ7UHzmd%2FjsU0%2FZb2PF9znyfYQ19DtU6kszh375RAouLAw8jdhqHLIqLcd6JDmi1MnthWqW%2BiVbHY706ZiYv1%2B9SmHrJjnIbB8HK%2F244FxwjegIq%2BBjWTaS3VLmmWAF8oiRVF6pqzDRIRBnw22KcTCgtX7S7ne1I9cUyMw34569QQLGk&X-Amz-Signature=087a2a370189b9db9535d80b3a9fdbead00d37c0d36daa0ad66ab95b0d36d51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJ7WCI4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7zARPBrKZWcpwj2YEcD1roXcG0tdsu1lO8r1lGpJcagIgLjI0fVBH4Y1kIYTSjoc0fbUU45LnM8Pb%2FioGbqtxDXYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCniG5HL3eFOVCEAGSrcA47chSZuPVZu1FVlpVAscp6l%2F00rHPkELZhazXvLgqRrzPNJ3oLvjWEDvScv56lL56tBNbaMvTtSWn3vruanW521zDh1kJVMZ8IM1UHubKh9nMC2icQDxAshKdwbtKa11nr2NY2AQwpfgPXKZxkSCbLY3lYgy2%2BUCCxahbyOwV1E7zIUw28ew85q1WiILENqLh1Yp4rwqbICQ4ZTGMIKXQeF1roEcLsBH7q%2BqF9Hs6yCcSGYrnDqskWU%2B6M0S%2BSSjmHxiR9ll8EGcaRYEda7UNEWRoVo%2FOPj5Jd8U%2BqPb6gHpNa6oY59npTervBblQY556t6YcrDFyFD9CkCviJGt6p8Sx%2FOPISmgUJstRCb3%2BgEMy6nPz3jzSxRJ2pdG8XTsWRarBTDTx%2BrkdCwWlyOWkhk0s4wqEISOFWaJHImCaslUM9oZF4uMNVAOkN5zCEkEBnhpKsR%2ByFMjH09mjoKhDQ7JnJTfcn2fGtr4gBQLZ950D9zQSlV4lTsvafK%2BOT2CA3g1mVQuEfl6bfiv7ulHDeKva3M4Qx%2BOwpazWgD4I%2Fb1AAw3drNMawkZcVAfGnfIgPCs%2FY7GHp6jPthmGJNp0vejjruSsRM%2F0qcan0N1atseZb2HnuDFeAD7p7iMLXc3MkGOqUBXHnmRF5YQLnYv3AUr%2BaEXIn6uqUKFZM03EncrjhtLWNgMcOd7zULETF4ZN8RfgwM46bVxNPkB2RVdV5wgisPaMQZwE8%2F3jxWBluXUbSTHM0x68wzsHBco6mWafDwBw3uaEvCbNq%2FnzOwzxEehupBsODOaRHLWE0VF%2BYZouDwRy3jqGtGoOVCYvBjENhq0PmR7gemekwmkwZYIZhEVbp3naoHLkpO&X-Amz-Signature=d75040185f6437b13b4d36ab93ba5f1aa271a21b33833b4299db08748201bb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJ7WCI4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7zARPBrKZWcpwj2YEcD1roXcG0tdsu1lO8r1lGpJcagIgLjI0fVBH4Y1kIYTSjoc0fbUU45LnM8Pb%2FioGbqtxDXYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCniG5HL3eFOVCEAGSrcA47chSZuPVZu1FVlpVAscp6l%2F00rHPkELZhazXvLgqRrzPNJ3oLvjWEDvScv56lL56tBNbaMvTtSWn3vruanW521zDh1kJVMZ8IM1UHubKh9nMC2icQDxAshKdwbtKa11nr2NY2AQwpfgPXKZxkSCbLY3lYgy2%2BUCCxahbyOwV1E7zIUw28ew85q1WiILENqLh1Yp4rwqbICQ4ZTGMIKXQeF1roEcLsBH7q%2BqF9Hs6yCcSGYrnDqskWU%2B6M0S%2BSSjmHxiR9ll8EGcaRYEda7UNEWRoVo%2FOPj5Jd8U%2BqPb6gHpNa6oY59npTervBblQY556t6YcrDFyFD9CkCviJGt6p8Sx%2FOPISmgUJstRCb3%2BgEMy6nPz3jzSxRJ2pdG8XTsWRarBTDTx%2BrkdCwWlyOWkhk0s4wqEISOFWaJHImCaslUM9oZF4uMNVAOkN5zCEkEBnhpKsR%2ByFMjH09mjoKhDQ7JnJTfcn2fGtr4gBQLZ950D9zQSlV4lTsvafK%2BOT2CA3g1mVQuEfl6bfiv7ulHDeKva3M4Qx%2BOwpazWgD4I%2Fb1AAw3drNMawkZcVAfGnfIgPCs%2FY7GHp6jPthmGJNp0vejjruSsRM%2F0qcan0N1atseZb2HnuDFeAD7p7iMLXc3MkGOqUBXHnmRF5YQLnYv3AUr%2BaEXIn6uqUKFZM03EncrjhtLWNgMcOd7zULETF4ZN8RfgwM46bVxNPkB2RVdV5wgisPaMQZwE8%2F3jxWBluXUbSTHM0x68wzsHBco6mWafDwBw3uaEvCbNq%2FnzOwzxEehupBsODOaRHLWE0VF%2BYZouDwRy3jqGtGoOVCYvBjENhq0PmR7gemekwmkwZYIZhEVbp3naoHLkpO&X-Amz-Signature=d843740b5d82c45b574a6dca1b2f9c14bd95ab49cd0ff7bbcbff471f7e4a01a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


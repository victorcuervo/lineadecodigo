---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAEFEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiYV6icirLiK%2B7WcErrxJnEsADlsn8UqXDAnNAtO2zbAiEA4JUzSuCqCSwCFZYzWTiAXy8J7ZOfAxaqhvPUxLF3%2BnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY8%2B%2BrOraRaNJ1JQyrcA66PwbIeRslnSu21AYWj4pFyuJmkYayLva2PS2t9NGZy4aMi3DmIG%2BwvLM9D9SMK3c3n9AE8LgQ7UXsyfcfnFFFYb93%2Fisn3zQwZ2twKGpUSOJBWPR9L%2FZD275o%2FT8LlmMQ6%2FGA%2FY3t4X78AyZh9lxY%2Bsd3OWsS%2FhSoNOMb2nxZsQLDBCiom5Sv6NIa9Mrryc5%2FKMPM%2BBXCTWytxx8LMW3o0Qe3alf82gxG0lTvLvsu0UTlWWz0yuX0fsD7Glfsl8NwEGw%2FkcApQt4MlZ5e0H6dvU4bjXwOXaxjz8pRpeP%2B99HdPm53FRzpBtd4Ob8BRcTke5KU0OVI910uf5L1gizgU%2BXhMpkIkbxrrIMdNj3QB3ksXaZz00y1FOEbsZzCK64cQYQFeaNWbufD46q9On4MdohszcuDTCCqCLgNlv2Mf6huSjg%2BJ8vwBujz%2BWSM2%2FyHsYAGOo8E1Ri89k8W6Jj9siCtxSm41Z7mpSCTWUd9630TFgSP7O0kXeiqsTfzA3GhqBFzLX4PEXUcpWE0NNB42ra1z%2F0BWo6rLZe53Rv4k0doPkTpGYyNNfLsnU2cDJsqnNlnoyHjalen0yFz5NAIkrSMAibt6qnMXkHNcjlr4PnG2%2FpMbqkhzuZLMMOfR2MkGOqUB%2BDq84bK02jWZ%2BIAF96EAXkOROcuOK9ZZKG1x2%2BAOKhLNfhhbMR6x0q1wSY%2B6hnXF0ZXzs7H8R6AX7SSdQImj7hx8LTy3r4ozd7Mv0nd6mB7MpFLcueWGeqdlOuLh7myzCgW1oDPKlhgxcTfaSxKCuiWcG39foDAvF%2B2Rxs748WVT5i1Q6rvDrzSbaFqVxc16jLdybLYTpdv1W2q3aqHCXKniBkwR&X-Amz-Signature=210f162ae2ead63de027f7e1eb93ef1cd49bfa678f46bbfd4987eb527e46f338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAEFEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiYV6icirLiK%2B7WcErrxJnEsADlsn8UqXDAnNAtO2zbAiEA4JUzSuCqCSwCFZYzWTiAXy8J7ZOfAxaqhvPUxLF3%2BnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY8%2B%2BrOraRaNJ1JQyrcA66PwbIeRslnSu21AYWj4pFyuJmkYayLva2PS2t9NGZy4aMi3DmIG%2BwvLM9D9SMK3c3n9AE8LgQ7UXsyfcfnFFFYb93%2Fisn3zQwZ2twKGpUSOJBWPR9L%2FZD275o%2FT8LlmMQ6%2FGA%2FY3t4X78AyZh9lxY%2Bsd3OWsS%2FhSoNOMb2nxZsQLDBCiom5Sv6NIa9Mrryc5%2FKMPM%2BBXCTWytxx8LMW3o0Qe3alf82gxG0lTvLvsu0UTlWWz0yuX0fsD7Glfsl8NwEGw%2FkcApQt4MlZ5e0H6dvU4bjXwOXaxjz8pRpeP%2B99HdPm53FRzpBtd4Ob8BRcTke5KU0OVI910uf5L1gizgU%2BXhMpkIkbxrrIMdNj3QB3ksXaZz00y1FOEbsZzCK64cQYQFeaNWbufD46q9On4MdohszcuDTCCqCLgNlv2Mf6huSjg%2BJ8vwBujz%2BWSM2%2FyHsYAGOo8E1Ri89k8W6Jj9siCtxSm41Z7mpSCTWUd9630TFgSP7O0kXeiqsTfzA3GhqBFzLX4PEXUcpWE0NNB42ra1z%2F0BWo6rLZe53Rv4k0doPkTpGYyNNfLsnU2cDJsqnNlnoyHjalen0yFz5NAIkrSMAibt6qnMXkHNcjlr4PnG2%2FpMbqkhzuZLMMOfR2MkGOqUB%2BDq84bK02jWZ%2BIAF96EAXkOROcuOK9ZZKG1x2%2BAOKhLNfhhbMR6x0q1wSY%2B6hnXF0ZXzs7H8R6AX7SSdQImj7hx8LTy3r4ozd7Mv0nd6mB7MpFLcueWGeqdlOuLh7myzCgW1oDPKlhgxcTfaSxKCuiWcG39foDAvF%2B2Rxs748WVT5i1Q6rvDrzSbaFqVxc16jLdybLYTpdv1W2q3aqHCXKniBkwR&X-Amz-Signature=29e3136d48ba02980d0cd58e35a173615dd54601da25016527e75bc81f25c607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


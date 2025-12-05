---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH36XK6S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbMGsgFCfJL1b4LyUZ2UD%2BCexfbqjpEO49arcgtkKrkAiBQVYOtod2IniCXjSz84MxIVNFeLTaiJDXRRF2n6jsI3ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FLEj1TXm6A3uMZyXKtwDERdARxYNxxE6gGbW4Csa%2ByemqU%2F7HHko8J%2BuaFS7Hp3VyPvdkD6a1HhDOjku5xKNsYe0VSkuen0UeEWeUeMLgXesg58LWSvyqWtRAqn9iFqY7bgjB%2FFIq85vHpNhg2dpwAzSVqUImHaMvVwem0w3CvscweLHoD7jr2bxvoXcCP%2FhEZfZ%2BhCUecutuM7DsvXDGKChZrZ%2BOPRD9cdO6fNU5zUccmcs1WJJIDEQcR99lV0j8BeTUsqgALj0eRy9%2BnUgzQSGNTTTtolQA%2FgxBEeWX29bIf5tIwtItWOjbLm4t5DoA4Mzh%2F3UT0WYxQGkrYAhLPXNonmkG83cQSxvVhcNNS8%2BTfvkYwVBcOJAHYGd1QK1eL04rOQlhgNLEbl0Gp0uWUK0io264firiQw1L%2FPrrQ57tvlW%2B66dQc5jmXf8oP60AvuhZUcmjLw5iEGtcv75LcTpjUqqe%2Fv%2B2MDvFXZjPR%2Ff0Gz43k52TM1Wp3IXnee1PoRe%2FOWr1RGZWvrC16xDh21v9Ypatg59xoXwkPCNmQMP1fRGIwWOolaG5k3kBuw9a%2F7qyE1DccvDkZbRrc3TvE4FBfmrRqyeuMI1hwlGYyy%2FQzo8kchgKoJTHCN1Zvhz4Jg%2FCmefVohR5rcw3uPLyQY6pgHq%2FnJMySNGkZeqUAb%2Fr6A4p9WR99avNG0Usrkmu4nGLid1z4pr2JIllOz%2BMRr1i4Mls2tF%2F93YBASMPrpVGeAOQnt9b%2BMmhdtIi4b7icnFAkfHvBYPQHidgVaH%2BWQ5hTXgeQaIrZIMIObfcLF7%2FQoFXdV7qVZ0y8elswXckdF%2FvDU%2FY6HpOHf9t6ey1cEvAUWWxW4pdhHPILeeGSSXeE3s56g9y6ij&X-Amz-Signature=ec06035dc9e487bc0ec59461ecbca585245a0e07c017c5346e192b288e8a4955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH36XK6S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbMGsgFCfJL1b4LyUZ2UD%2BCexfbqjpEO49arcgtkKrkAiBQVYOtod2IniCXjSz84MxIVNFeLTaiJDXRRF2n6jsI3ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FLEj1TXm6A3uMZyXKtwDERdARxYNxxE6gGbW4Csa%2ByemqU%2F7HHko8J%2BuaFS7Hp3VyPvdkD6a1HhDOjku5xKNsYe0VSkuen0UeEWeUeMLgXesg58LWSvyqWtRAqn9iFqY7bgjB%2FFIq85vHpNhg2dpwAzSVqUImHaMvVwem0w3CvscweLHoD7jr2bxvoXcCP%2FhEZfZ%2BhCUecutuM7DsvXDGKChZrZ%2BOPRD9cdO6fNU5zUccmcs1WJJIDEQcR99lV0j8BeTUsqgALj0eRy9%2BnUgzQSGNTTTtolQA%2FgxBEeWX29bIf5tIwtItWOjbLm4t5DoA4Mzh%2F3UT0WYxQGkrYAhLPXNonmkG83cQSxvVhcNNS8%2BTfvkYwVBcOJAHYGd1QK1eL04rOQlhgNLEbl0Gp0uWUK0io264firiQw1L%2FPrrQ57tvlW%2B66dQc5jmXf8oP60AvuhZUcmjLw5iEGtcv75LcTpjUqqe%2Fv%2B2MDvFXZjPR%2Ff0Gz43k52TM1Wp3IXnee1PoRe%2FOWr1RGZWvrC16xDh21v9Ypatg59xoXwkPCNmQMP1fRGIwWOolaG5k3kBuw9a%2F7qyE1DccvDkZbRrc3TvE4FBfmrRqyeuMI1hwlGYyy%2FQzo8kchgKoJTHCN1Zvhz4Jg%2FCmefVohR5rcw3uPLyQY6pgHq%2FnJMySNGkZeqUAb%2Fr6A4p9WR99avNG0Usrkmu4nGLid1z4pr2JIllOz%2BMRr1i4Mls2tF%2F93YBASMPrpVGeAOQnt9b%2BMmhdtIi4b7icnFAkfHvBYPQHidgVaH%2BWQ5hTXgeQaIrZIMIObfcLF7%2FQoFXdV7qVZ0y8elswXckdF%2FvDU%2FY6HpOHf9t6ey1cEvAUWWxW4pdhHPILeeGSSXeE3s56g9y6ij&X-Amz-Signature=868c3a7ae9535bcd550882a9deeb81d0778f263816d78810529b09f5cbae278c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


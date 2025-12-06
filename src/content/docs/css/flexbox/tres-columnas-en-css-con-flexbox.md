---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNHJQ5X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApoa3HvYCfhTSpS%2BpUfe3GMoxnVXkCpTwopXZPUzNohAiEAnY11w5DV3nilM6goSWau4wSG5pWdXLbpl3j7h6ZQcuQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2FrC1mANmHbrAjCzSrcAx8SOIrzwXj520Q4l66%2F0cAeuXCs%2FBdtT%2BU88i8Mfnx66y3sCJ%2Bu%2F7kkaPyCsx2Px0KspOwU7l%2B33Mf347PIDGEaw5gtLX8%2BLg2DBE9Mwl3R70F8wYtvfk2LjJoRsq25knw6Lhv%2BYWwlbnO0drBMXlIDKJU1BsrqSRN6VozistptxDY0C7emZ45ytOrXmNm0VvfnFXTbkWEB0sDNcobXiVzJKUI0ZSyW3UdUDxEgPcEQns05BaYTXX5uzY8klU6z%2B46x4YsKH5rcUOYOCotXuWq4Mjk5JlHosjBMEYPJ49qEoRVz6efDvmqKtIBevg11JmCYTkRdVdMBX%2BJ5kRcSznzXvM4Eu%2FMkmNOicE4jxWgEk5mLZaiatzgY7dcYtENatB3wEnHoNfIt4W8zX7HcQqSGUD8Cr0wSbct%2BPRbRanoYdBekLdESEhsDbYOPxdMVTIIGncKAAK9V35EA3HK6yqMzGYckptfN%2BQv2bKQSnSB5PGCbMi1S19efNaC3aDtpgvJOrfYpzVtUyhH9w%2FmHlqZIwr0SnY9LZZxaseHYl0K%2Fz4aPd99iNfs33CLZQzLKhkay4G3pzxRxI%2FCKFTJR1BxU0p%2BrUpisDnoNZofpDk583xE7AoHx6p5lL%2BmjML2m0MkGOqUB7BlAE0aA0kqSZWjeL8L2usngHgrkc6P%2F%2BgGVSsv6AhN8wvxBdGSCPSOH2Dffu%2F70ambNuJRjhJfRItr6I5OR7ttNX4NQbORBbWXwCziiXbFXu%2FcLNFZDCE7SZKhJBfwbwBrryC9N3o%2Bf8RvlqpyQClw%2BhXIZG5NQBrIePATXzubs2PnQ%2BhLumBBFRaTF8%2Fy5so8iOwUCYbUW9TGTK%2Bv4pQqsU%2FYc&X-Amz-Signature=9f93481214ca2b142cc21bbf887c31486060991e2957f78df255881776c7a760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNHJQ5X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApoa3HvYCfhTSpS%2BpUfe3GMoxnVXkCpTwopXZPUzNohAiEAnY11w5DV3nilM6goSWau4wSG5pWdXLbpl3j7h6ZQcuQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2FrC1mANmHbrAjCzSrcAx8SOIrzwXj520Q4l66%2F0cAeuXCs%2FBdtT%2BU88i8Mfnx66y3sCJ%2Bu%2F7kkaPyCsx2Px0KspOwU7l%2B33Mf347PIDGEaw5gtLX8%2BLg2DBE9Mwl3R70F8wYtvfk2LjJoRsq25knw6Lhv%2BYWwlbnO0drBMXlIDKJU1BsrqSRN6VozistptxDY0C7emZ45ytOrXmNm0VvfnFXTbkWEB0sDNcobXiVzJKUI0ZSyW3UdUDxEgPcEQns05BaYTXX5uzY8klU6z%2B46x4YsKH5rcUOYOCotXuWq4Mjk5JlHosjBMEYPJ49qEoRVz6efDvmqKtIBevg11JmCYTkRdVdMBX%2BJ5kRcSznzXvM4Eu%2FMkmNOicE4jxWgEk5mLZaiatzgY7dcYtENatB3wEnHoNfIt4W8zX7HcQqSGUD8Cr0wSbct%2BPRbRanoYdBekLdESEhsDbYOPxdMVTIIGncKAAK9V35EA3HK6yqMzGYckptfN%2BQv2bKQSnSB5PGCbMi1S19efNaC3aDtpgvJOrfYpzVtUyhH9w%2FmHlqZIwr0SnY9LZZxaseHYl0K%2Fz4aPd99iNfs33CLZQzLKhkay4G3pzxRxI%2FCKFTJR1BxU0p%2BrUpisDnoNZofpDk583xE7AoHx6p5lL%2BmjML2m0MkGOqUB7BlAE0aA0kqSZWjeL8L2usngHgrkc6P%2F%2BgGVSsv6AhN8wvxBdGSCPSOH2Dffu%2F70ambNuJRjhJfRItr6I5OR7ttNX4NQbORBbWXwCziiXbFXu%2FcLNFZDCE7SZKhJBfwbwBrryC9N3o%2Bf8RvlqpyQClw%2BhXIZG5NQBrIePATXzubs2PnQ%2BhLumBBFRaTF8%2Fy5so8iOwUCYbUW9TGTK%2Bv4pQqsU%2FYc&X-Amz-Signature=49039193f7a1dacedf130d168fe42f9009404f51b2475a093cd8a6c9d1eb844c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


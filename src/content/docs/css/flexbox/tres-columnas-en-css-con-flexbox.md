---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LQB4YRL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE4cN9g%2FADR%2BS5Nfh%2BXn2Y5fHCvJ1cZbtZqkBZioy81wIhAKRPBusadHdrtPdG%2B1Cmw7vgTiO5MGr6WCmUMSbXc0giKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEqhufcBQqiLpifDQq3AOhdEx%2BhZYMn7DtbGWanrAmBpMVKYLbI8NIiN9o8kArzh595DPxOEXhNHktG47jR3n0%2Bko3qNm7edSjwLx28XXcY90TZhvhmC7%2BhGewYRgLarFxT3xFaBE67Dn8LvC07EDSSBA2%2Fz7bFtFxNUXc1KbkbQaGgJ2TGu%2B%2B3dFs7t6JFOvoU4L4YyFWoikzhOB3uqHD23paFFmeshnbMnk73jjHPKTnFH2pXNIVIw7D0dx410EBp03QxPrRgH9XoXozLQtJpbZwfbWRl%2B4kYjfav%2FwXt4TT%2Bb%2FlTdyt5lpFmx18UD4aWTjvV0569vxrUfYYb0Hq%2Badg8ptICe5fkoRpYClVGBiNLdsCIGs78vE%2BLYzbK0mFbysBs2tCZRv55nOWALYjB3IJFXKMZH%2FvBfuktIdPFEl1O3wZoBid%2FphqewGjyI21MYO27jo8%2FUQXcIY5pa%2BRr5bEzfPnUE00btbFZo0cP6aURMy3Wvs40WUpYb77eCMIrR0ZshQio61Cmo6FmWaZakLV0OGfinh9TLua87prorF317eTKw8MI6hgle%2B%2FLTOmt6keB2fzUJH7BKE963kb9mYhYzt6BfHxuQzQSg48Fk%2FqypUy1%2FCawzoPZoCA%2BRBAVJkoP6r7lLwHXjCTn9TJBjqkAW%2Bq%2F%2Fn9jwaME00x947H2V6qJF0dWjQyBhyp5g%2Fj3pRnhijqbZRRjVFgBK1bT4XTPPFIPOcejHVUDqdkWWpVpWQ6%2BAET8tSfKX3jX8i35GTqMWKjPk938WDEcAM2UgiQiJGXy8RPNrP0a8zv06KXSOXEoWrU870Yk65LbfxAHE%2FsIW2q2GxInt%2FYFVZi7M1gLA417HGV9NQf2kwCeErzbv0LISTW&X-Amz-Signature=dac2ac71ccc9ec803b435af968a561aaf4c4adbeb2c4c1d175d2bb4e971dde59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LQB4YRL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE4cN9g%2FADR%2BS5Nfh%2BXn2Y5fHCvJ1cZbtZqkBZioy81wIhAKRPBusadHdrtPdG%2B1Cmw7vgTiO5MGr6WCmUMSbXc0giKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEqhufcBQqiLpifDQq3AOhdEx%2BhZYMn7DtbGWanrAmBpMVKYLbI8NIiN9o8kArzh595DPxOEXhNHktG47jR3n0%2Bko3qNm7edSjwLx28XXcY90TZhvhmC7%2BhGewYRgLarFxT3xFaBE67Dn8LvC07EDSSBA2%2Fz7bFtFxNUXc1KbkbQaGgJ2TGu%2B%2B3dFs7t6JFOvoU4L4YyFWoikzhOB3uqHD23paFFmeshnbMnk73jjHPKTnFH2pXNIVIw7D0dx410EBp03QxPrRgH9XoXozLQtJpbZwfbWRl%2B4kYjfav%2FwXt4TT%2Bb%2FlTdyt5lpFmx18UD4aWTjvV0569vxrUfYYb0Hq%2Badg8ptICe5fkoRpYClVGBiNLdsCIGs78vE%2BLYzbK0mFbysBs2tCZRv55nOWALYjB3IJFXKMZH%2FvBfuktIdPFEl1O3wZoBid%2FphqewGjyI21MYO27jo8%2FUQXcIY5pa%2BRr5bEzfPnUE00btbFZo0cP6aURMy3Wvs40WUpYb77eCMIrR0ZshQio61Cmo6FmWaZakLV0OGfinh9TLua87prorF317eTKw8MI6hgle%2B%2FLTOmt6keB2fzUJH7BKE963kb9mYhYzt6BfHxuQzQSg48Fk%2FqypUy1%2FCawzoPZoCA%2BRBAVJkoP6r7lLwHXjCTn9TJBjqkAW%2Bq%2F%2Fn9jwaME00x947H2V6qJF0dWjQyBhyp5g%2Fj3pRnhijqbZRRjVFgBK1bT4XTPPFIPOcejHVUDqdkWWpVpWQ6%2BAET8tSfKX3jX8i35GTqMWKjPk938WDEcAM2UgiQiJGXy8RPNrP0a8zv06KXSOXEoWrU870Yk65LbfxAHE%2FsIW2q2GxInt%2FYFVZi7M1gLA417HGV9NQf2kwCeErzbv0LISTW&X-Amz-Signature=0c6465df066492c31efc1a8d2d97b9bcdfbd134a77412ddd866001dc8ec88ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


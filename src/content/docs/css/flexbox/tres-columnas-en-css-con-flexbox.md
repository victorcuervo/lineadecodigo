---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAV3ZER%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjkETB61amulkIf587pkvna3FrPTWVegnsFccWFYRGtwIgTHnl%2BMZlB4RvYIdqMfC3twsdoDiuU2iicVBnslyT%2FdEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJuri9u9WfJdoNJ7oSrcA2eR9JclBbM6XCei38C92KwgSxrjzVmc6JcfwOGZn2MjDAZgOGAWSsNjNQSpzHyg2sVX3FXAynqlAou9Hb8r3%2BDLYakjS2pu4ahODlQVtGGJ4FG4iYc00DgXaKSIbec2udzp9hzSqDxO3tVzwIfUd0Kjbk%2BkISTRDpHfwCS2V9h1mBRgbYL%2FNBkKvB7D48IDWRvU35VcvP0%2F%2BCfjV7FpBbcOM2WMVSqsr%2FIb%2FjZlr5MtXzpJYkQmQm1bg6hqNUabG4BoO1t8ZCUbEM40wusq4xqPCWm1f0NLJkp5apkxZdg8DBdnAr5TLJvO0bGIkzeYICzPwKTq0P8JNHIRTTxm9AiVTLRLmwB%2FFY%2BRp5SFSmn9dm%2BMvj8Z6F4lWvsO%2FoCS38EiDdT4jayja%2FIkjkng%2F7Kxs2gtZr7DoFqDHyboog8U6K0zF3NktGK7TxY8zDcLjF1LO4%2BDA%2B%2BQDWDF8Y9L8GEplEeC%2BU3678eKuoqLzlB0%2FNulezXBJxWMxHNm%2F6HmuVFmjUALJnxYBBXOcldrGXHNyKI45hAEicimMJ%2FzTWgIk23vxku71D4ZBNoqvTx%2BMC8RvURs%2FuxNsmfbpnHTb%2B9FuIGbV1xzyam4sZuN664FMkgduN1VQPH9kSyBMIelyckGOqUBi62WWf1hwaKqYezHB4DTGhCgFubOlhnnUmFDDuyEP7qpNDyzFTFUuou19h4bE4BranvGcZMwPrkLwJsHU9tFuWUlS%2BmXOk5hlBCpmtefvkR3G%2F2%2Bk4dG7RbT%2Bbr8Z8ObVQHVUBXZ5%2B2uuwqiDeTc1LScRlhqXZPsQ4NxIRj9BPu3neXGlZA2i0OqSnxCzN5jTPLW4bqLNwgQiJC%2BpGR139%2BdFbu%2B&X-Amz-Signature=9dd52226ed809520f50cd008e9d632cc80ef1595957495045aac514a3248b185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAV3ZER%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjkETB61amulkIf587pkvna3FrPTWVegnsFccWFYRGtwIgTHnl%2BMZlB4RvYIdqMfC3twsdoDiuU2iicVBnslyT%2FdEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJuri9u9WfJdoNJ7oSrcA2eR9JclBbM6XCei38C92KwgSxrjzVmc6JcfwOGZn2MjDAZgOGAWSsNjNQSpzHyg2sVX3FXAynqlAou9Hb8r3%2BDLYakjS2pu4ahODlQVtGGJ4FG4iYc00DgXaKSIbec2udzp9hzSqDxO3tVzwIfUd0Kjbk%2BkISTRDpHfwCS2V9h1mBRgbYL%2FNBkKvB7D48IDWRvU35VcvP0%2F%2BCfjV7FpBbcOM2WMVSqsr%2FIb%2FjZlr5MtXzpJYkQmQm1bg6hqNUabG4BoO1t8ZCUbEM40wusq4xqPCWm1f0NLJkp5apkxZdg8DBdnAr5TLJvO0bGIkzeYICzPwKTq0P8JNHIRTTxm9AiVTLRLmwB%2FFY%2BRp5SFSmn9dm%2BMvj8Z6F4lWvsO%2FoCS38EiDdT4jayja%2FIkjkng%2F7Kxs2gtZr7DoFqDHyboog8U6K0zF3NktGK7TxY8zDcLjF1LO4%2BDA%2B%2BQDWDF8Y9L8GEplEeC%2BU3678eKuoqLzlB0%2FNulezXBJxWMxHNm%2F6HmuVFmjUALJnxYBBXOcldrGXHNyKI45hAEicimMJ%2FzTWgIk23vxku71D4ZBNoqvTx%2BMC8RvURs%2FuxNsmfbpnHTb%2B9FuIGbV1xzyam4sZuN664FMkgduN1VQPH9kSyBMIelyckGOqUBi62WWf1hwaKqYezHB4DTGhCgFubOlhnnUmFDDuyEP7qpNDyzFTFUuou19h4bE4BranvGcZMwPrkLwJsHU9tFuWUlS%2BmXOk5hlBCpmtefvkR3G%2F2%2Bk4dG7RbT%2Bbr8Z8ObVQHVUBXZ5%2B2uuwqiDeTc1LScRlhqXZPsQ4NxIRj9BPu3neXGlZA2i0OqSnxCzN5jTPLW4bqLNwgQiJC%2BpGR139%2BdFbu%2B&X-Amz-Signature=49649469252692b0d611fb3da9a6caf148164eb79841465fb6cfdbe44eef6cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


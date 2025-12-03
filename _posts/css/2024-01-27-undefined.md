---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVWAOZS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICApsf3QbgB4zGtRkomBJyxe4WTBFuLoif6we8VtIYpGAiAEvOWDKNIpBXL5y25acDwSvxkdds6R56%2FxmdvInLyPFyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCDGrPu9vH1yNdKDdKtwD%2F%2BDcnrIZ6vyRgSFQi612H9t5D45UqvwWx1lE48UkkIEMgDlE8mHf%2B%2B8MhmjwKnyrMKBDm7f1wjQ1IMwvZPtDJ%2Bg6oBiAFVzxdTobTWyLuyAaEPWK03DyRvd%2BDCJc9TZQjJZ87V445JvKxsoxox7jxj9bS6t%2FrXVNfkEfSsybsAbcAlLS00aWkEhRsfXnEpqAYes5BWot1LyQ1s2TUXJc2JeJ55pM6lenuj%2Fyc3Ffz12Eu9qJ0VzH9lUtFbss8ac1mEQIIG5NitGMjV8aKmvqEOnmOzIg0LWgE3bNcLIn9NufUxdyhtutWcs1Jm0XqGEfWbnKXnYIJd06Uv2ny2s6GCj1EJYtR51PyR1iuQYhCUn%2BrOLHM1FiMk5KFvMDOSIIAGYHmFH7G4Amt3bkGHbFaeKpPIjsEUDK%2FgymVTv5a04%2F9yZc2V4RGqBTBb8pecppBMilj85%2BAnDWBHQA6sSWpGKWpGGfsCuGSixajBE2q%2FWZAKf7q3Qo2zIJZjRtxeWiF%2F%2FMbvI5JSdeenOE%2FYMNxAlAZj3cOEjAZBcPQQHUY%2BpInaTVmuj%2FnVXrNZDcR%2Bqas2apq7nXHmjkAdG%2FDRmDyyaN8S7WXuEFqzlLk0Q1yYLxaRlL48ULCaLb5IMwrNrByQY6pgF1Qh6%2FqKNN89MN%2FVwdPZ%2BCVBIJOJ9tlwR39kXVuSxdMbetxGA9Ot0VyPGEMiTwtlJfTrW78RITyAHmS%2ByNZ1kAkUZz%2Bnsu5Az%2BxQ3gtYv%2BB7ABjs6abj4PrySp8ySkZ06R%2BBZee%2FBZF77RvtGeSialE4v0whfd%2Ft%2B94VNXtDmoGt3tjsmmH3Rrguwr5b0q9kwYXJL0EHaZbmRcabZeRFRD9tXTQfGy&X-Amz-Signature=1aa518748457f121b74f5ccf2be4f923a1ad95e1a9143f9aac63633a2189aa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVWAOZS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICApsf3QbgB4zGtRkomBJyxe4WTBFuLoif6we8VtIYpGAiAEvOWDKNIpBXL5y25acDwSvxkdds6R56%2FxmdvInLyPFyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCDGrPu9vH1yNdKDdKtwD%2F%2BDcnrIZ6vyRgSFQi612H9t5D45UqvwWx1lE48UkkIEMgDlE8mHf%2B%2B8MhmjwKnyrMKBDm7f1wjQ1IMwvZPtDJ%2Bg6oBiAFVzxdTobTWyLuyAaEPWK03DyRvd%2BDCJc9TZQjJZ87V445JvKxsoxox7jxj9bS6t%2FrXVNfkEfSsybsAbcAlLS00aWkEhRsfXnEpqAYes5BWot1LyQ1s2TUXJc2JeJ55pM6lenuj%2Fyc3Ffz12Eu9qJ0VzH9lUtFbss8ac1mEQIIG5NitGMjV8aKmvqEOnmOzIg0LWgE3bNcLIn9NufUxdyhtutWcs1Jm0XqGEfWbnKXnYIJd06Uv2ny2s6GCj1EJYtR51PyR1iuQYhCUn%2BrOLHM1FiMk5KFvMDOSIIAGYHmFH7G4Amt3bkGHbFaeKpPIjsEUDK%2FgymVTv5a04%2F9yZc2V4RGqBTBb8pecppBMilj85%2BAnDWBHQA6sSWpGKWpGGfsCuGSixajBE2q%2FWZAKf7q3Qo2zIJZjRtxeWiF%2F%2FMbvI5JSdeenOE%2FYMNxAlAZj3cOEjAZBcPQQHUY%2BpInaTVmuj%2FnVXrNZDcR%2Bqas2apq7nXHmjkAdG%2FDRmDyyaN8S7WXuEFqzlLk0Q1yYLxaRlL48ULCaLb5IMwrNrByQY6pgF1Qh6%2FqKNN89MN%2FVwdPZ%2BCVBIJOJ9tlwR39kXVuSxdMbetxGA9Ot0VyPGEMiTwtlJfTrW78RITyAHmS%2ByNZ1kAkUZz%2Bnsu5Az%2BxQ3gtYv%2BB7ABjs6abj4PrySp8ySkZ06R%2BBZee%2FBZF77RvtGeSialE4v0whfd%2Ft%2B94VNXtDmoGt3tjsmmH3Rrguwr5b0q9kwYXJL0EHaZbmRcabZeRFRD9tXTQfGy&X-Amz-Signature=f58c164aecfdf6d750424c8473d71a58d73e4182ca4bc95f541fb43830dd05e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


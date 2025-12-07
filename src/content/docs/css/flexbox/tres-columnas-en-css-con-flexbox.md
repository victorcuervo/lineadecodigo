---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHOXAKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Uu2JlCOBUclyUhESE6hHQjH2eRhxavJvSB3HcBYA9AIgdetiEk34PuvPh%2BDifjROb41s%2Fx0PsNkhKfI5w7d0574qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FdyuSha9GCJ9oH1ircAwnXnhguzKAppd4JecOOFmTdoYrbUiF26dFI5cwWrfL4zLdgBsXRo1FPB9gDwvn1mun03pg8OVgQE%2FTpB71bOSA6Il8nGCHOl0ennkdY2XDjqM9LXYpQ%2FELNU293k7rbQOMUx8aUfRRDiKtmAu1xf9QQphU5Zggtcqc66Ohu2PfSNSqawulr8hZ%2B7xPYqRBVMZ6DKy%2FpG4stq%2FEbnnh1BTT2BiwBV%2FRIIu8CvmeqpH0LPGP9xwFQw2z2s%2FzPm9qMGqRBr2W7wVXG56W9yWefTf8L2GmLM28n9ybz8sca4EyZRJB6I4Qo07Mzd8skVaYEnQf5Mh9JEk5mHCAWiIpjGaUei4trKyjRA%2BR2aik6hDX5ujFRGk%2Fa9K2qs9H8u77PyaA2kh%2FZH2FG8PShUqWMF90JzwpZKPnm3yOC5Bj6upjly6OV3uQW9XGhehb4E68PL6lD6stG%2FFJwFRtgGE9%2FSc4mkSjFmrlRxXaG8TqOvok9gON7hXYd9jgsCX82YWuWwkwhkGV97xmo%2BTKh4IrenbGSBHTCHJx6iKyGHx44klhc400%2FcvK%2FV%2B9YKSKm%2BXc2hwnRwIHCZiWeghkYiJQUZ%2BYX%2F7oHtnfGFdxJtf57DD%2FhCq3ZFL30wcEL%2FDvSMLib1MkGOqUBCm%2Fd6w04pSu8lz46SSxTRmSUoG9m8o2GrUuRBV3mxID4FK4fyKpovSv52D7Yp8%2F%2FRRT7TzuFBcx3KCMmLQUaCHpRp%2Bt6c4Rc%2BBAPa%2FciOU6HBZu04iQb0ZSrTN6LuFp9gmVSehsh%2BniL0dUpag8aWMRVM1snFjGMiC1U6qQ9mu7brueMir%2FNIcejUUHDigQUy4veB7ivnTL7B%2FrTEaqb%2FWjNqkSP&X-Amz-Signature=12993a7f467fbb948fe896a121a56c9fdb29e9e1a8fe7aa298dd2af6c27ea1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHOXAKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Uu2JlCOBUclyUhESE6hHQjH2eRhxavJvSB3HcBYA9AIgdetiEk34PuvPh%2BDifjROb41s%2Fx0PsNkhKfI5w7d0574qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FdyuSha9GCJ9oH1ircAwnXnhguzKAppd4JecOOFmTdoYrbUiF26dFI5cwWrfL4zLdgBsXRo1FPB9gDwvn1mun03pg8OVgQE%2FTpB71bOSA6Il8nGCHOl0ennkdY2XDjqM9LXYpQ%2FELNU293k7rbQOMUx8aUfRRDiKtmAu1xf9QQphU5Zggtcqc66Ohu2PfSNSqawulr8hZ%2B7xPYqRBVMZ6DKy%2FpG4stq%2FEbnnh1BTT2BiwBV%2FRIIu8CvmeqpH0LPGP9xwFQw2z2s%2FzPm9qMGqRBr2W7wVXG56W9yWefTf8L2GmLM28n9ybz8sca4EyZRJB6I4Qo07Mzd8skVaYEnQf5Mh9JEk5mHCAWiIpjGaUei4trKyjRA%2BR2aik6hDX5ujFRGk%2Fa9K2qs9H8u77PyaA2kh%2FZH2FG8PShUqWMF90JzwpZKPnm3yOC5Bj6upjly6OV3uQW9XGhehb4E68PL6lD6stG%2FFJwFRtgGE9%2FSc4mkSjFmrlRxXaG8TqOvok9gON7hXYd9jgsCX82YWuWwkwhkGV97xmo%2BTKh4IrenbGSBHTCHJx6iKyGHx44klhc400%2FcvK%2FV%2B9YKSKm%2BXc2hwnRwIHCZiWeghkYiJQUZ%2BYX%2F7oHtnfGFdxJtf57DD%2FhCq3ZFL30wcEL%2FDvSMLib1MkGOqUBCm%2Fd6w04pSu8lz46SSxTRmSUoG9m8o2GrUuRBV3mxID4FK4fyKpovSv52D7Yp8%2F%2FRRT7TzuFBcx3KCMmLQUaCHpRp%2Bt6c4Rc%2BBAPa%2FciOU6HBZu04iQb0ZSrTN6LuFp9gmVSehsh%2BniL0dUpag8aWMRVM1snFjGMiC1U6qQ9mu7brueMir%2FNIcejUUHDigQUy4veB7ivnTL7B%2FrTEaqb%2FWjNqkSP&X-Amz-Signature=3160c063fa8eaeb1e61687141529d1395fb475cb917db0a4768655b55d4c87fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


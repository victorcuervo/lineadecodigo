---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHOVVTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf4DMw14IPgVgvd3wBJxi5fU%2BcB20jF7bWvgxQK5mPrwIgQ0ZewcgXFvnGaXx10EXa0ImJ3HWwjCC%2FnhDnO4CmEPoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLszOGXjoDu0rGpkWyrcAyyW8W2cTppWsQuio3dsbZc%2FY53GxB%2BgQbgAYPB3dPNgmMfZ00jX5bbrq8wliBsQ2memz3SaL6pdyIxcUq0k3TRMAHiBrVN4dzFoP0Z%2B8iL32tB1FhxwCXqKIBdDapbPvjvJ2qpaXnSwzSKmTL%2FYl13PJrXKVjSDh1BXkK2ztvdFEA1VETk9z2bR82NLhuWAyIJQl%2FyfOI%2FQ%2BhRnyv7WdK2lXzm5acGhBg4dMP4H4SacANXBH9qQDAI5spDlaVGSoR%2FLm%2B58tWKTSp%2FWFdNyMMXsSvkPFdJP1XGfTir%2FcN55Xxnppm2ZoVks2sKKpiRy6hPGHVyP%2BJvve59s3bdeMg%2Fgokyi1jtXMoDfGxfgZuQ36mNtCDkdfMD33xr5%2F6kuQZXhTJx%2FCYE0DCrezr2tOHF8wysPq14gLuH8cCNmeMKJWpDgBu8MXHHLIPT3Rie4EbxYjiQ7D4H9BX66xEXrzX5Vx0dEEhfnbsejoH84COORBgCxDAzu91PT9KwnagU5uvzD3COD4%2FPHykiYzguMJqI2KlC4ZOOCe2tt9bLwFzbqxeM2DUx5TRO3vEttHBCoOVLy2KF8cL%2BIHOje3Q5vrkvhklkoLXlPFOBD%2BLUFJNKNtIuRLtg7VZGn2PMKMOzK0ckGOqUBxdjF%2Fb%2FLBvHBUQnh3Amvdwye05Xd9iSPdxxACVKeKtKTUKyD9OYDlYJZGARcRcByyMNsuHfvHUwo152D7kk%2F0dkbdK6MO6n69pGxLmorRVTHqrjO%2BivHkaspeSQTPOqi3iX8Ilvmd5hMhq6GIIVECIkPPT33QlC4smK33DHIlOTZV20sbcctGvCpMzWfneJ41DMSGmNgYoEZuTcc0A5fwOpomocD&X-Amz-Signature=30134b4a3aeda4a2c4950205bcafdbc2515bb14ea45e34651ff3461a6395bffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHOVVTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf4DMw14IPgVgvd3wBJxi5fU%2BcB20jF7bWvgxQK5mPrwIgQ0ZewcgXFvnGaXx10EXa0ImJ3HWwjCC%2FnhDnO4CmEPoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLszOGXjoDu0rGpkWyrcAyyW8W2cTppWsQuio3dsbZc%2FY53GxB%2BgQbgAYPB3dPNgmMfZ00jX5bbrq8wliBsQ2memz3SaL6pdyIxcUq0k3TRMAHiBrVN4dzFoP0Z%2B8iL32tB1FhxwCXqKIBdDapbPvjvJ2qpaXnSwzSKmTL%2FYl13PJrXKVjSDh1BXkK2ztvdFEA1VETk9z2bR82NLhuWAyIJQl%2FyfOI%2FQ%2BhRnyv7WdK2lXzm5acGhBg4dMP4H4SacANXBH9qQDAI5spDlaVGSoR%2FLm%2B58tWKTSp%2FWFdNyMMXsSvkPFdJP1XGfTir%2FcN55Xxnppm2ZoVks2sKKpiRy6hPGHVyP%2BJvve59s3bdeMg%2Fgokyi1jtXMoDfGxfgZuQ36mNtCDkdfMD33xr5%2F6kuQZXhTJx%2FCYE0DCrezr2tOHF8wysPq14gLuH8cCNmeMKJWpDgBu8MXHHLIPT3Rie4EbxYjiQ7D4H9BX66xEXrzX5Vx0dEEhfnbsejoH84COORBgCxDAzu91PT9KwnagU5uvzD3COD4%2FPHykiYzguMJqI2KlC4ZOOCe2tt9bLwFzbqxeM2DUx5TRO3vEttHBCoOVLy2KF8cL%2BIHOje3Q5vrkvhklkoLXlPFOBD%2BLUFJNKNtIuRLtg7VZGn2PMKMOzK0ckGOqUBxdjF%2Fb%2FLBvHBUQnh3Amvdwye05Xd9iSPdxxACVKeKtKTUKyD9OYDlYJZGARcRcByyMNsuHfvHUwo152D7kk%2F0dkbdK6MO6n69pGxLmorRVTHqrjO%2BivHkaspeSQTPOqi3iX8Ilvmd5hMhq6GIIVECIkPPT33QlC4smK33DHIlOTZV20sbcctGvCpMzWfneJ41DMSGmNgYoEZuTcc0A5fwOpomocD&X-Amz-Signature=96d3f056b24bcb562ff010940e4b195c9e8a925b1c8b775f4ac01966a1ab1ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


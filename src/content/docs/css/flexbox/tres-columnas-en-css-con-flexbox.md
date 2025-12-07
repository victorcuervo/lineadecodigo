---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI3X7PC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2ogiaaNYfxC6PgKYQj56Oy%2BongbT8EGtP7%2F%2BagyX6NAiEAzEIkubhkTZUtDfai5xED9LI%2FywOJepeFUjcxtbMdXQgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfKD0%2Fte7twOQlE9yrcA7zh4p3NucbXlbkTptNKteDZWtQEH%2F7%2BEuHh0a3ebpm2qfPi%2FXrDO7eIH5%2BxgaQZlrMXOm1KoiSXTzgW5rvZbjiqD49xyrb52PfkH2C9cxZ1bQtsy%2FmReaOEwTVBdmpBqGfLfpwPHeShbKaI6ic1RIlgYWA41Lh9W%2FcnO7ZSjwcKVcaYQ8jZj198az7eLxk3SmdX3Xjy9T%2FxcjmYPkgD%2B2yhcxMx5Hhk2wBjcVE4dXLG9xIshW88YAPuO7Fh%2FJ%2FkrR%2FLcAc1L4eMWAhPvrFIZ%2B8y0swdys5fB8S0GoMd45N5F2uusYiWt1tGcGTGg6owQD2341JsuAGnIR46sDmuB%2FRJpbT26AmWvCz7WoVLBrfzYdUihpzCcjQsYTqAwrGoXwWS7CfEHQGMyM%2FnuAv9UrrFmvUyAM8opEEIU8S%2FUwMUeWrZH8f%2ByD6i2TidB7ZTxausBNrGUID7Wb71lxfXLkjeu3%2FyGpDsLX6vFt0UGI%2Ba41iV2TtfKrarqqpUKgqMvSb%2F%2BkRm4SCuAy%2FHF1fM9UbUPfxk5aCWDMBaNkrvqAAv4ZjsJI78uQHM1Wl5Wom%2B4vTUQINgNxCWNBiMUW%2BN485CYsNGL%2FlgrzalDB9LPzL7VOEuaHWzkmTYrWw%2BMLyF2MkGOqUB6WAFIsUX2lZyYai2N4rkcdP8rHDMYMxkxzImH6sAty27vh3std0eFzqUAI8vyGjHglOONdHCFabnUKmVCkddR0pj747%2B6OT%2Bn4rbeyjKMCzPsdAWDOG4vAzhAFlf6%2FS%2BcjOAXxwNhGYVlbjltpBtEFMN7agkVKmxbzhrgrKuj0TeJG3K8UU5V6%2FQ5R%2Fe0TV2xy%2BHmpLS9diOKB67pSM4HrlrUnpu&X-Amz-Signature=b87e3e2875062626e8dc674be8638d828dbb2357d615ebc1e13a699af91a7a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI3X7PC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2ogiaaNYfxC6PgKYQj56Oy%2BongbT8EGtP7%2F%2BagyX6NAiEAzEIkubhkTZUtDfai5xED9LI%2FywOJepeFUjcxtbMdXQgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfKD0%2Fte7twOQlE9yrcA7zh4p3NucbXlbkTptNKteDZWtQEH%2F7%2BEuHh0a3ebpm2qfPi%2FXrDO7eIH5%2BxgaQZlrMXOm1KoiSXTzgW5rvZbjiqD49xyrb52PfkH2C9cxZ1bQtsy%2FmReaOEwTVBdmpBqGfLfpwPHeShbKaI6ic1RIlgYWA41Lh9W%2FcnO7ZSjwcKVcaYQ8jZj198az7eLxk3SmdX3Xjy9T%2FxcjmYPkgD%2B2yhcxMx5Hhk2wBjcVE4dXLG9xIshW88YAPuO7Fh%2FJ%2FkrR%2FLcAc1L4eMWAhPvrFIZ%2B8y0swdys5fB8S0GoMd45N5F2uusYiWt1tGcGTGg6owQD2341JsuAGnIR46sDmuB%2FRJpbT26AmWvCz7WoVLBrfzYdUihpzCcjQsYTqAwrGoXwWS7CfEHQGMyM%2FnuAv9UrrFmvUyAM8opEEIU8S%2FUwMUeWrZH8f%2ByD6i2TidB7ZTxausBNrGUID7Wb71lxfXLkjeu3%2FyGpDsLX6vFt0UGI%2Ba41iV2TtfKrarqqpUKgqMvSb%2F%2BkRm4SCuAy%2FHF1fM9UbUPfxk5aCWDMBaNkrvqAAv4ZjsJI78uQHM1Wl5Wom%2B4vTUQINgNxCWNBiMUW%2BN485CYsNGL%2FlgrzalDB9LPzL7VOEuaHWzkmTYrWw%2BMLyF2MkGOqUB6WAFIsUX2lZyYai2N4rkcdP8rHDMYMxkxzImH6sAty27vh3std0eFzqUAI8vyGjHglOONdHCFabnUKmVCkddR0pj747%2B6OT%2Bn4rbeyjKMCzPsdAWDOG4vAzhAFlf6%2FS%2BcjOAXxwNhGYVlbjltpBtEFMN7agkVKmxbzhrgrKuj0TeJG3K8UU5V6%2FQ5R%2Fe0TV2xy%2BHmpLS9diOKB67pSM4HrlrUnpu&X-Amz-Signature=4f77381427a61f31aab91e9297be8a4511a632987876259a14d524c3737c6454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


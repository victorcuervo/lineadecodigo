---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRGQGLD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKFL3ukcwHdtfd63nk0A3w78m0kgDea6Fi7THihzB%2B%2BAiB9LZ%2BnF9IM35V3hUA0rAe56SdXobPAkWAoo%2BZ4XrYhViqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnO8B6ExIiA0mgedTKtwDuXTwLfDPPAbEoOrBA7zJSG2s2ueoA%2Ff0h2LxO8SJPaqNUfcIBIDbEKQ3Mdlg327sX9flm%2FSISsfaEw1MHgWSSx%2FKpyuVgIFIo6vY922CUFlhyRzPpzVsw5rPAHKOxNJaC3KnBKFKxatGookChtJWCMOO%2F7Sk%2FjrefIeTgcpQrgjZbzKJGtIgyLZK9cS0nhiH1%2BBZiPKsVKq5FVCoy%2BsAyaBfyH9drQ2I35o4tsg8lguknlTcjET7i1J%2BmDBfg4LehGXZztXedgjFTbmG4vlMEdyD6MWnYi%2Bc8lUOMr8yQM%2BiGHzSeU7AQtd2irEWS5iNHhZVSM3tpExJxOULNTLe2aY9AVGwNDGvcQgC3wIlv%2BpaoaxQXjEkpA6oovwbx5Luln5Twhxl%2BtkKjvv8tXYvGsgvHBVxa2gt7KEag2MtVlmYKGssBo339wd%2FjOmYvZEgNS7XUebG3FpinyDeo5trdLxFTZi8RpVelbDThqCaaeT3FdTPOI6YLvywB9z1rUPlxnDDKpQEODSbFZYU1QGVHVMQpPX61kGVAjaXsr4JHAtJbdAI6tsS63RG5W3pg499Kcw%2FvTDXtWkAquyFZxRheio7eQXm%2BQky8Uez4Pt7c0QwxurpSpf1kjUCOjYw08fXyQY6pgFAWGyQvBOHZAApVkk%2BUEO29lrRhhjrKw2ib6VP6gzbE%2BkpZgGQ1vA4C0l%2BEKZ8dUut6HO8C%2B9NJu%2FXdQY3GVUA6%2BrDeANuW6Z04vKRP9qwuKFoWN0Bz0meaLUoM3BHLwrvuKw0lCuj4GEYOoX7UodMlwYEqA43eRdxZpc8MrhBSRwjjMn5nw7md1XQXlgXjPUZhvMObPephvAXOYisRSISfxw3s4uI&X-Amz-Signature=9bc4009cfe3b39a4681a82f7c9c720c1e1ca77b392e26d37b9effbc5e6143b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRGQGLD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKFL3ukcwHdtfd63nk0A3w78m0kgDea6Fi7THihzB%2B%2BAiB9LZ%2BnF9IM35V3hUA0rAe56SdXobPAkWAoo%2BZ4XrYhViqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnO8B6ExIiA0mgedTKtwDuXTwLfDPPAbEoOrBA7zJSG2s2ueoA%2Ff0h2LxO8SJPaqNUfcIBIDbEKQ3Mdlg327sX9flm%2FSISsfaEw1MHgWSSx%2FKpyuVgIFIo6vY922CUFlhyRzPpzVsw5rPAHKOxNJaC3KnBKFKxatGookChtJWCMOO%2F7Sk%2FjrefIeTgcpQrgjZbzKJGtIgyLZK9cS0nhiH1%2BBZiPKsVKq5FVCoy%2BsAyaBfyH9drQ2I35o4tsg8lguknlTcjET7i1J%2BmDBfg4LehGXZztXedgjFTbmG4vlMEdyD6MWnYi%2Bc8lUOMr8yQM%2BiGHzSeU7AQtd2irEWS5iNHhZVSM3tpExJxOULNTLe2aY9AVGwNDGvcQgC3wIlv%2BpaoaxQXjEkpA6oovwbx5Luln5Twhxl%2BtkKjvv8tXYvGsgvHBVxa2gt7KEag2MtVlmYKGssBo339wd%2FjOmYvZEgNS7XUebG3FpinyDeo5trdLxFTZi8RpVelbDThqCaaeT3FdTPOI6YLvywB9z1rUPlxnDDKpQEODSbFZYU1QGVHVMQpPX61kGVAjaXsr4JHAtJbdAI6tsS63RG5W3pg499Kcw%2FvTDXtWkAquyFZxRheio7eQXm%2BQky8Uez4Pt7c0QwxurpSpf1kjUCOjYw08fXyQY6pgFAWGyQvBOHZAApVkk%2BUEO29lrRhhjrKw2ib6VP6gzbE%2BkpZgGQ1vA4C0l%2BEKZ8dUut6HO8C%2B9NJu%2FXdQY3GVUA6%2BrDeANuW6Z04vKRP9qwuKFoWN0Bz0meaLUoM3BHLwrvuKw0lCuj4GEYOoX7UodMlwYEqA43eRdxZpc8MrhBSRwjjMn5nw7md1XQXlgXjPUZhvMObPephvAXOYisRSISfxw3s4uI&X-Amz-Signature=1018728af50db6514c0bd0e82bfbd3cf7e985e25888e94949a583cad38aca491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


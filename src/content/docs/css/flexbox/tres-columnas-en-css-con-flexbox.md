---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3F776YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5mDbDSdWbuGAyLgVMBbhJvaB%2BHwITAPO0IcnRDZLNwIgcttPa3eYC7dr7OGxavTeYPHdk0GTGF138J8N5XPzqWIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB43ZVdrnnH0qGrdDSrcA91GScUSe7iYCfwUlkU7lAY1lGVuDhZNvD4QdI6fEXorLMH5ViunO%2B4Jx77fqIraN42IYfUDNySz6gS4iM9yMWdtVchrVdyooeIrbihlS1SWbx1157ZyRKwoIIIuNY3Fb6ni7OTi5WI4WSiXce%2FcEskNGf3dwN6idOsnOdLWDtxiLBeLihx3JnDrtjfuiSMahCRt7zFiCNiBnJTgTASpnazpuZtlrvb9sZyR%2BhP%2F9U4FWTIU4l%2BtHGU1rLemG72No2zyjFkfcmKDDDTG9plirhEDRQEf%2BmZI3TybKi%2FoLLwkABj%2BYTQu5MxNJhxwNxxY2lESR6PKSeKJbZ%2FYTdzpRlKSBaJPRqrG%2FLAoikUI2ubkrHw81d8MTq4xubp7T7Ka0DTAeO9g1weLGuuUnrgqhe0Htb3hwOfV%2FaJKrlfxDA8dZ0p%2FlvO4YEKw9GGf6pSnl1mPQ0pn62qSs2tDUcye4UKuFmQlUNU8DEL6jXBd55Ds32bBm48WDQ0mHv%2FdKsiKFbzf4MT0df0Z6XDBdvPqzs3pJJpmWtG%2F1lPWvpdFbIzf974aBiBqpa7qi6ncCF7sKkDl3MBQejiQebT%2F%2B%2BOK%2FXf%2FAwXle1DqUKefVxrgEXMcFgMBqqEkm2V1l0gEMPytyckGOqUBn4UBkkMtyFY9DE4xf%2BUaT9L%2BExinGzWjqasOycQjYB2YHOXCEm4QbJz77kwoYOp68d5liXQqJVSiZD3sJy8C6vV6853kpThYG1BSee4pQsHN6y4VnJBAuqxrR7y4HQtqxlBi7nJi0KPWNrz70q1R%2FsbmcR7UMGhIYNsnEsEC8fh0QFkvGFeMvX8lJANKj8nBQUCa98lxMCrXJl7Y7DHU5fqak7wo&X-Amz-Signature=0a86aaa9e86c9147eba9fd679d7579e4330b1ae2079ea2fac24333732885dcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3F776YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5mDbDSdWbuGAyLgVMBbhJvaB%2BHwITAPO0IcnRDZLNwIgcttPa3eYC7dr7OGxavTeYPHdk0GTGF138J8N5XPzqWIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB43ZVdrnnH0qGrdDSrcA91GScUSe7iYCfwUlkU7lAY1lGVuDhZNvD4QdI6fEXorLMH5ViunO%2B4Jx77fqIraN42IYfUDNySz6gS4iM9yMWdtVchrVdyooeIrbihlS1SWbx1157ZyRKwoIIIuNY3Fb6ni7OTi5WI4WSiXce%2FcEskNGf3dwN6idOsnOdLWDtxiLBeLihx3JnDrtjfuiSMahCRt7zFiCNiBnJTgTASpnazpuZtlrvb9sZyR%2BhP%2F9U4FWTIU4l%2BtHGU1rLemG72No2zyjFkfcmKDDDTG9plirhEDRQEf%2BmZI3TybKi%2FoLLwkABj%2BYTQu5MxNJhxwNxxY2lESR6PKSeKJbZ%2FYTdzpRlKSBaJPRqrG%2FLAoikUI2ubkrHw81d8MTq4xubp7T7Ka0DTAeO9g1weLGuuUnrgqhe0Htb3hwOfV%2FaJKrlfxDA8dZ0p%2FlvO4YEKw9GGf6pSnl1mPQ0pn62qSs2tDUcye4UKuFmQlUNU8DEL6jXBd55Ds32bBm48WDQ0mHv%2FdKsiKFbzf4MT0df0Z6XDBdvPqzs3pJJpmWtG%2F1lPWvpdFbIzf974aBiBqpa7qi6ncCF7sKkDl3MBQejiQebT%2F%2B%2BOK%2FXf%2FAwXle1DqUKefVxrgEXMcFgMBqqEkm2V1l0gEMPytyckGOqUBn4UBkkMtyFY9DE4xf%2BUaT9L%2BExinGzWjqasOycQjYB2YHOXCEm4QbJz77kwoYOp68d5liXQqJVSiZD3sJy8C6vV6853kpThYG1BSee4pQsHN6y4VnJBAuqxrR7y4HQtqxlBi7nJi0KPWNrz70q1R%2FsbmcR7UMGhIYNsnEsEC8fh0QFkvGFeMvX8lJANKj8nBQUCa98lxMCrXJl7Y7DHU5fqak7wo&X-Amz-Signature=2fb27e56f02b79285939afac4f820ab77239c3573bf32a8e79ac3bf48a3c7d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


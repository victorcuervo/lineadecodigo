---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPLOLW44%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBxOeBt4LOW8pkO6ppmz9TWWmmZ9TTMZ0FjuIIeH87zAiEAszdvTaMwHzUQe42l9fItqmlxy0WAb7RjJ%2B%2BLu195q4kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsI%2BEs8U5TeYSgUCSrcAy83SKEv1YJQrAZ0QyJgwqqpG93ZbpYNguvQc7fbbRMNK1pnPLUNmRStst8AWv0YkFyefn%2BD2yidwiI%2FkIofES1gT0mbs%2FGDFsbvbispQzrY78f9INRrSOoj5OHN0MRXmfyZa64Ulemg5Bi6fA%2BGxw8%2FlKhPK4lwRhj37KyWsDnCvuhaiR5%2Fy2pE3ApjnP2ZrhSX%2FDssFm64ZWjmaLmUZVrsZEOWWcL99K%2Bq34%2FgeiyCHOySgeQ112%2FhIviDRDU7Ad70%2BqoG%2Bg1WdGTvP0ropVxxrUCrFpwXs1feJR%2F9LgqrHJGPVLpfLjxQ9gAGzntk5xpr16SGO%2B9FeHNnrPHaNcf6%2BY%2FEXAZDOWsLhGLM6gPZSZMovuSORIZGOs2q2BH55OgU1%2FMAHnNC%2Fy84chBycrw2aWuPbVaAyDqJ9R7ROqAXZI213wCk3KgnERPxAdVIBVibAlyQg%2B7cbYXYXSVZV6LdDD8Et9jKI%2FYtPWPiAcEaZ0Bf2UseEBtezsgJa2gVNvjbjj%2FIrdCgEYRCgpBXuS8f9P2yh2Snrp8NtHIiw4dsnijyz16qh5i%2FtJHcMcFBKKvkIJYVMlKlN8445QY6tZu8Ps6alSBpZxQiMLwPtTwxQ9gveKRWIvHXJ8JcMOr90skGOqUBHXeUI%2FzoTxUQGjkYWfbWsHa7%2FjVCKANOsyNblmknYaTYklQmaMvUfr96M%2B8LnYT8Z1XEWffvStueWT2%2BDgzg99a3GWX76vmtwDFNXWI%2FojS5Lfk9wf33qnQG3ITZDMlszpeBm58MMJsKSdljwyDsFXjrica2ulMYAmKpHEV6KFlUqDgbNMNriWbp0ZMDXQ%2FavwVggsr8exEvTBknVvs5v3DjHsmJ&X-Amz-Signature=dd824e79222418cbfdbce540c0f96da215d0fdca26aa4c2e386d90537f7e96b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPLOLW44%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBxOeBt4LOW8pkO6ppmz9TWWmmZ9TTMZ0FjuIIeH87zAiEAszdvTaMwHzUQe42l9fItqmlxy0WAb7RjJ%2B%2BLu195q4kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsI%2BEs8U5TeYSgUCSrcAy83SKEv1YJQrAZ0QyJgwqqpG93ZbpYNguvQc7fbbRMNK1pnPLUNmRStst8AWv0YkFyefn%2BD2yidwiI%2FkIofES1gT0mbs%2FGDFsbvbispQzrY78f9INRrSOoj5OHN0MRXmfyZa64Ulemg5Bi6fA%2BGxw8%2FlKhPK4lwRhj37KyWsDnCvuhaiR5%2Fy2pE3ApjnP2ZrhSX%2FDssFm64ZWjmaLmUZVrsZEOWWcL99K%2Bq34%2FgeiyCHOySgeQ112%2FhIviDRDU7Ad70%2BqoG%2Bg1WdGTvP0ropVxxrUCrFpwXs1feJR%2F9LgqrHJGPVLpfLjxQ9gAGzntk5xpr16SGO%2B9FeHNnrPHaNcf6%2BY%2FEXAZDOWsLhGLM6gPZSZMovuSORIZGOs2q2BH55OgU1%2FMAHnNC%2Fy84chBycrw2aWuPbVaAyDqJ9R7ROqAXZI213wCk3KgnERPxAdVIBVibAlyQg%2B7cbYXYXSVZV6LdDD8Et9jKI%2FYtPWPiAcEaZ0Bf2UseEBtezsgJa2gVNvjbjj%2FIrdCgEYRCgpBXuS8f9P2yh2Snrp8NtHIiw4dsnijyz16qh5i%2FtJHcMcFBKKvkIJYVMlKlN8445QY6tZu8Ps6alSBpZxQiMLwPtTwxQ9gveKRWIvHXJ8JcMOr90skGOqUBHXeUI%2FzoTxUQGjkYWfbWsHa7%2FjVCKANOsyNblmknYaTYklQmaMvUfr96M%2B8LnYT8Z1XEWffvStueWT2%2BDgzg99a3GWX76vmtwDFNXWI%2FojS5Lfk9wf33qnQG3ITZDMlszpeBm58MMJsKSdljwyDsFXjrica2ulMYAmKpHEV6KFlUqDgbNMNriWbp0ZMDXQ%2FavwVggsr8exEvTBknVvs5v3DjHsmJ&X-Amz-Signature=29e078532e325ff870768c5098289b33e6cd5ea987d1f683095772ce07ae63b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


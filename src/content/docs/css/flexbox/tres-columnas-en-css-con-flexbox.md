---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXTN54I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDcDGFQ0FiFsVXPn3fB0xzXhOw80%2Bcvy83235nKoaA%2FIgIgewvJK7nfaOwIE6Vsm3lkFHOa0Nbs1rHEquWqgd%2B0yw0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJzNtluCX5IOu6RTdyrcAyV3nGM%2BPJypD4ZziSQEubSi22vQerDrZR%2BlPfUV1UbpZLQ1iLa7Crd4jbhpMXGXFTVFawpw8jLJsW9h8TyyiAtsev6psPkiEFyTHv5yMARrhPcJFu73YtfN%2FLDLke4hUTx2goeGB2R7B%2Fnp3tyKdcswOHiSfqGtkMjO6b06KVR0NYNF4w1Gd9apS1mEDRpIdxCSRq45tindKjJt1oqSiqeP8yq7Pwn63%2B3frwAXdan9oIAP7fLZb9rakoGNd%2BOA9LyZ2We31WTtEYuNtYTqrConlnKex2EKsg4%2Bu8vnEInERa%2F9C3KlovDInnNJ9E2%2FNfTJNY1rA%2BCT9g5ZS%2B%2FSpKQYWBWb5JXb0kttnFTJXA%2B%2B%2FRPjfSLcdtnmfxWXXUqXEW2%2FkgGeIHAy0%2BIW9nlVMaA4%2B74SgZwjwhBpi%2Fs4Iyg5bCIzGG412UfFAfzg6ViVVsINiegCmE1w0bp5bvYLTE6uZZGN36MmsS1ZFwGlB62ceVfKTD4OcIxcrRHKFWJY1Ozol6YcmIXaUMmisc36Y8TRnFDF9Y2INe00i5xaMN9Elz%2F8ZOxj2wj9kaWMVPKBPaUDRCJ1Sm7J7DwZpgyxEyHQ8g3B501YjhUIQweSpGs1Yrcgt%2BhEacCioLZCML%2BtxMkGOqUB5SONLqB7R6naq004ipsk5fIzTEk%2F2GabibGiFNAHVdRuZPZ9u7DaGZn20hu05A1TaI4IZrf1nyLZfONWgI1IT2gL0Dpe0zXhgZWLs05%2Bmg1JaEZs1MN4OdrSNnl3yIpDJvM2BYJzNieDXFUIThs1eSvJl6GWeOJDuwscuVLMGJ6huPj2PDP6t5guGLAmeOsi25%2BjO%2BrzIVKsN1yZS0EBy0mYFjQp&X-Amz-Signature=3f173381c7a4a6f0e23bf9be6c0306f98214a9b80d86ecab1aba7198e83fb1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXTN54I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDcDGFQ0FiFsVXPn3fB0xzXhOw80%2Bcvy83235nKoaA%2FIgIgewvJK7nfaOwIE6Vsm3lkFHOa0Nbs1rHEquWqgd%2B0yw0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJzNtluCX5IOu6RTdyrcAyV3nGM%2BPJypD4ZziSQEubSi22vQerDrZR%2BlPfUV1UbpZLQ1iLa7Crd4jbhpMXGXFTVFawpw8jLJsW9h8TyyiAtsev6psPkiEFyTHv5yMARrhPcJFu73YtfN%2FLDLke4hUTx2goeGB2R7B%2Fnp3tyKdcswOHiSfqGtkMjO6b06KVR0NYNF4w1Gd9apS1mEDRpIdxCSRq45tindKjJt1oqSiqeP8yq7Pwn63%2B3frwAXdan9oIAP7fLZb9rakoGNd%2BOA9LyZ2We31WTtEYuNtYTqrConlnKex2EKsg4%2Bu8vnEInERa%2F9C3KlovDInnNJ9E2%2FNfTJNY1rA%2BCT9g5ZS%2B%2FSpKQYWBWb5JXb0kttnFTJXA%2B%2B%2FRPjfSLcdtnmfxWXXUqXEW2%2FkgGeIHAy0%2BIW9nlVMaA4%2B74SgZwjwhBpi%2Fs4Iyg5bCIzGG412UfFAfzg6ViVVsINiegCmE1w0bp5bvYLTE6uZZGN36MmsS1ZFwGlB62ceVfKTD4OcIxcrRHKFWJY1Ozol6YcmIXaUMmisc36Y8TRnFDF9Y2INe00i5xaMN9Elz%2F8ZOxj2wj9kaWMVPKBPaUDRCJ1Sm7J7DwZpgyxEyHQ8g3B501YjhUIQweSpGs1Yrcgt%2BhEacCioLZCML%2BtxMkGOqUB5SONLqB7R6naq004ipsk5fIzTEk%2F2GabibGiFNAHVdRuZPZ9u7DaGZn20hu05A1TaI4IZrf1nyLZfONWgI1IT2gL0Dpe0zXhgZWLs05%2Bmg1JaEZs1MN4OdrSNnl3yIpDJvM2BYJzNieDXFUIThs1eSvJl6GWeOJDuwscuVLMGJ6huPj2PDP6t5guGLAmeOsi25%2BjO%2BrzIVKsN1yZS0EBy0mYFjQp&X-Amz-Signature=8182652eeffdec3ba9d810a2e5375da977945b0004fa3377c89ae5cc52b9656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


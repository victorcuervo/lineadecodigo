---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFSNSB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYzCoNfXz6ju7Z3Mv6AF9AQR8vPB4slY16sR%2F9ExWn%2BwIgaM7iQDqNMy2K5xbXBSgBbK%2F2v5Ba%2FgvSgkU2bMXdZNYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEVsGSBc82l2IO6hsCrcA4EUa1VME5kjUmzCb7bhjUTalYcM251Sh8lYb%2FOm1pff9k98UHm5VWc9%2BjAPjDTNM%2FDmpb6tlvqpVip2668We2aVD1ALByvdAtOeBb7X5uEFLXd96cTqRUrzhnmBmdMewyyuY6MAf9kKR%2FgsGTTY9x7zlEkUQplnrzGqDih9MOfdmCAIcWL1zkw%2Fbqe32ccCIgnYZOtBmqBlpuVNEdXIhiufC%2FkoNbYHtpmlHuIB1U90UM6OSNYkVBfgqnI9j47g5ct1vlxj%2FWvpmIObv3%2F%2B9YFSu%2FXkD93A37lSAAtecdBooZ3SZNwMOmk3jW1C2g%2F%2Bf39PvB4ul9CgBsDGFiFUI8%2Be80zbKG1bsaDTv0AiGpVJxt94TOfGrGz4kt3FU7F1JxLRjuORxSvEQ3Oam4Tc12XMoKrGGI4lP3YmQMhgSpZL6qKXtRf%2Fk3y3hlsfKFCFQlSuoEHz6%2Be0nJPJd1RJvHj3%2FZ%2BgArCcs9RXVDRcp2n98ipS4O86kpfFpjhIYjZqZ69iX9Shk2TkmxecD3cxuAG6tkCZo%2FzyGruTbvyyyqbmTCPwbdd6CUBbQe2QPicfOgM7ow1IWmpr0DiQC0%2F%2FeotO0h0NSf0FaPNdWOOcSZXqw%2FM61sjS5NdF5QMCMJXH0ckGOqUB92lEBzNLhmAZW7I%2B0LeYUOQB0rw%2FIKGfF4IU%2F8HZ1HEsbYF%2FiPkw83lNk8dOcsPeX7s%2FZQcwjjf5zZ1%2BdxHTw4%2FkisIt9yDQu8BUdYRLr7%2FKqV78QNGKdvbDqvIKK26tojsZRW3Frg%2BM04nyBw0YGQdgNXW9D1xlavtiqm8f6%2BprDMfp1WEpNR9iTl4By%2BbRR8NrtS4XYThgiv0BPAOYAcbknMgv&X-Amz-Signature=c596e3ab633a2286845bc06871f85fa72c5f97b9e6c431b2cf394981863b35cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFSNSB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYzCoNfXz6ju7Z3Mv6AF9AQR8vPB4slY16sR%2F9ExWn%2BwIgaM7iQDqNMy2K5xbXBSgBbK%2F2v5Ba%2FgvSgkU2bMXdZNYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEVsGSBc82l2IO6hsCrcA4EUa1VME5kjUmzCb7bhjUTalYcM251Sh8lYb%2FOm1pff9k98UHm5VWc9%2BjAPjDTNM%2FDmpb6tlvqpVip2668We2aVD1ALByvdAtOeBb7X5uEFLXd96cTqRUrzhnmBmdMewyyuY6MAf9kKR%2FgsGTTY9x7zlEkUQplnrzGqDih9MOfdmCAIcWL1zkw%2Fbqe32ccCIgnYZOtBmqBlpuVNEdXIhiufC%2FkoNbYHtpmlHuIB1U90UM6OSNYkVBfgqnI9j47g5ct1vlxj%2FWvpmIObv3%2F%2B9YFSu%2FXkD93A37lSAAtecdBooZ3SZNwMOmk3jW1C2g%2F%2Bf39PvB4ul9CgBsDGFiFUI8%2Be80zbKG1bsaDTv0AiGpVJxt94TOfGrGz4kt3FU7F1JxLRjuORxSvEQ3Oam4Tc12XMoKrGGI4lP3YmQMhgSpZL6qKXtRf%2Fk3y3hlsfKFCFQlSuoEHz6%2Be0nJPJd1RJvHj3%2FZ%2BgArCcs9RXVDRcp2n98ipS4O86kpfFpjhIYjZqZ69iX9Shk2TkmxecD3cxuAG6tkCZo%2FzyGruTbvyyyqbmTCPwbdd6CUBbQe2QPicfOgM7ow1IWmpr0DiQC0%2F%2FeotO0h0NSf0FaPNdWOOcSZXqw%2FM61sjS5NdF5QMCMJXH0ckGOqUB92lEBzNLhmAZW7I%2B0LeYUOQB0rw%2FIKGfF4IU%2F8HZ1HEsbYF%2FiPkw83lNk8dOcsPeX7s%2FZQcwjjf5zZ1%2BdxHTw4%2FkisIt9yDQu8BUdYRLr7%2FKqV78QNGKdvbDqvIKK26tojsZRW3Frg%2BM04nyBw0YGQdgNXW9D1xlavtiqm8f6%2BprDMfp1WEpNR9iTl4By%2BbRR8NrtS4XYThgiv0BPAOYAcbknMgv&X-Amz-Signature=ca828311e09547c2050505c8ceadf82d78ad464ec89de27b7d7ed551ba307f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


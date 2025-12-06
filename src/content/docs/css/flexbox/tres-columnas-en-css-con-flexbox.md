---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7RK4DM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI6P3XTvLzMsxPdHNoRPIkUOzFxJ5XoVx0kZD8vbpzbwIgLWLgS4fWaC6bmkgdPOTwZIzz1ypZuFVF1bKFCCSsxfAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL1NgCEAbWHDUgfCgCrcA6ws%2FwtaBl7e7plLD6jivfNsMoff6MmMxeCyfgyMS1laZiA4xCdGDSMPnZ5yH1Nb8Xj8KbRuhOM1%2Bq535UcwT7hE6nODTjRDvXYaCMxaMPmFMMm%2Bk%2FW9ctfofwPOF6SWVTHcl5XOkUtZFJZMqRvrzh59PLnKB%2BQIaRIMz7e4DDIs1Oqu%2BlVpwJ2iZanC%2BLL88gLd5457Moj2ZQxWqdZ1Lce%2B5bf6W%2BbdF7hXXWQrkClgoW9Bdbb7oOx1AC8lU3ikAUvfO%2BbVOOZUfgrSsctSqk%2F3zzRhiqq3fVBJyJNVxpkMzcbHvC87cjIA26RRBV2BDTqusdQjsc9n9JUW0%2Blt8nJzOHSNZWN2jaq0sV7wdTTg6G1rEbYBbREcYvKa%2F%2B%2B6yVISum0ku2MhbDp%2F9obrLqfglhVMvlKx3Z2%2Fb1YHmS4cipG1l4BjKZvahjb6O536y1TgLN2dZjI%2BCcy1LhCcG96VlqPP9B9PhGdYT%2Fj4ZBy0417yZo6RcEiFhJuTVfjnFP9VbkoUL%2FS%2FTvXzo55b7f0E0kToroEP3R2BpnHyaCn%2BsO0RZq399aWXVFLU%2FFgY2d283R4ymdit7V21SgrFThIsqIVXq22Cu8SFGsjuOUqy0PfGyJeloxGwYKpRMLLH0ckGOqUBDuO9Qgx%2F0kPs50jRcxWiuFfkTxulBVq%2FReQhiqV4gkqxLSx8DCm83dAnwdUGzP03ppE%2B1VmzYV49dMC5M6dpQvn9oNfiauLJ04USXbry7TWolA6aPK2pQUF2IqKSLaXZZLdBV4oLWL%2Fq1o6AEeXZokf96VTuBN7PEsBjf%2B0RaoKcSJFiVFd%2FIy7pLKn24SsQdsfCbFfAZHbIk53RtbFLhGkE7DDG&X-Amz-Signature=cf22e14dd435937e5529256045f2cc830db7c1386b993dfe33a15ec6c73764c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7RK4DM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI6P3XTvLzMsxPdHNoRPIkUOzFxJ5XoVx0kZD8vbpzbwIgLWLgS4fWaC6bmkgdPOTwZIzz1ypZuFVF1bKFCCSsxfAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL1NgCEAbWHDUgfCgCrcA6ws%2FwtaBl7e7plLD6jivfNsMoff6MmMxeCyfgyMS1laZiA4xCdGDSMPnZ5yH1Nb8Xj8KbRuhOM1%2Bq535UcwT7hE6nODTjRDvXYaCMxaMPmFMMm%2Bk%2FW9ctfofwPOF6SWVTHcl5XOkUtZFJZMqRvrzh59PLnKB%2BQIaRIMz7e4DDIs1Oqu%2BlVpwJ2iZanC%2BLL88gLd5457Moj2ZQxWqdZ1Lce%2B5bf6W%2BbdF7hXXWQrkClgoW9Bdbb7oOx1AC8lU3ikAUvfO%2BbVOOZUfgrSsctSqk%2F3zzRhiqq3fVBJyJNVxpkMzcbHvC87cjIA26RRBV2BDTqusdQjsc9n9JUW0%2Blt8nJzOHSNZWN2jaq0sV7wdTTg6G1rEbYBbREcYvKa%2F%2B%2B6yVISum0ku2MhbDp%2F9obrLqfglhVMvlKx3Z2%2Fb1YHmS4cipG1l4BjKZvahjb6O536y1TgLN2dZjI%2BCcy1LhCcG96VlqPP9B9PhGdYT%2Fj4ZBy0417yZo6RcEiFhJuTVfjnFP9VbkoUL%2FS%2FTvXzo55b7f0E0kToroEP3R2BpnHyaCn%2BsO0RZq399aWXVFLU%2FFgY2d283R4ymdit7V21SgrFThIsqIVXq22Cu8SFGsjuOUqy0PfGyJeloxGwYKpRMLLH0ckGOqUBDuO9Qgx%2F0kPs50jRcxWiuFfkTxulBVq%2FReQhiqV4gkqxLSx8DCm83dAnwdUGzP03ppE%2B1VmzYV49dMC5M6dpQvn9oNfiauLJ04USXbry7TWolA6aPK2pQUF2IqKSLaXZZLdBV4oLWL%2Fq1o6AEeXZokf96VTuBN7PEsBjf%2B0RaoKcSJFiVFd%2FIy7pLKn24SsQdsfCbFfAZHbIk53RtbFLhGkE7DDG&X-Amz-Signature=a71d6647b79068576fda19176b08ca6967a9c9a366cf25442fe2ff470227b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


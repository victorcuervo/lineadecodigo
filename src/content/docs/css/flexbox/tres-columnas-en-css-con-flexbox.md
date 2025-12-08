---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULYZTBMQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXBNBa6cAi635qiC3IBbmGMex1qD10xmt8fWbh8KVPwIgc9FgHokHwaqpOzGUab2eVCuT64jWfQZa518yzCKgInwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINS4CwqG8q13wIhJyrcAw5SuDvl0Q4wwBfhAnF742SKUF8pRSp10igWFvA82GwLtxUsyzY%2BL1BRF3pziC6ZdsRKLvSzfzsfGRcOUH3XAYtaFuPmf5m9HDgiVXy4mvNzWOfQXQF%2BEIg3x0nGeWopOYeGhdPlldO4pbV%2BkIdgEMmgZlDKEz%2BaLApBRzARiN4zVBbyhrY9PYQnf%2Fi3XvmPpDPwgUDg%2BKnDmwkQYtnekns841PhoSelpPcjywt%2FzuyXc%2BVbGxLxXoi4eDrcRonxrvk%2FrkUqm6edy5bM1g5%2BUfZRxlAiSWkQGd0w%2FUFHVsTjfnuXl1tsT5cyRMpmCRm2pX1RMYl3EPgzMhi7%2BJpdU4TOhssREgmh5m5An%2B7dYtTP5%2FwQH67iHNGZPAwLu74n7Cxi%2BbD4V0nnBbESi4K%2F64jFaMSkNBOJP8wy5upUtouzSwuTbYQ8FryiIK%2BfYt5ow%2FmIylJNn48eX5sc1ufLgeOj2%2B3XMc01nY4xA8zirBzHb%2BGvYwKpf7WlfYkvbImoiAHeuJ5XzpHRQW6E4dhcx5Jgq249oWLCbVGy2TyyE56GSpnx3qy48FEp4Wp7nFm03UlKpLYaOIhrFqQ5o1mUEVzrCsK9dC5Afx1wfy9q7Xm%2BgUvyp1nZu6Zxz2sqMMKP28kGOqUBdyU8RqV7h0Fal6i3k196RlNpMlrV52oZhVWsS8g0BzK8v59wo%2FsSPF8d%2FR5z20HEPJ8gckCeZa7JVnp8GFqQAWiYMmjZ0Q8dHFJSi8sYxuu7S151oFCoiE%2B837cyJkjOZZAyLIEbn7Fw2kQfhGbX1X4YW6Iz13fmbERZiEiu9om1usXoRT92A2jJDMce%2FggFFEgXOm%2BU%2FFAznHgpb04jVVG2X7%2B7&X-Amz-Signature=525c8bd1830eb3d03fd00aba3a3d7b66ea57b4f3e16aae304ef0d7e4c9e46464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULYZTBMQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXBNBa6cAi635qiC3IBbmGMex1qD10xmt8fWbh8KVPwIgc9FgHokHwaqpOzGUab2eVCuT64jWfQZa518yzCKgInwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINS4CwqG8q13wIhJyrcAw5SuDvl0Q4wwBfhAnF742SKUF8pRSp10igWFvA82GwLtxUsyzY%2BL1BRF3pziC6ZdsRKLvSzfzsfGRcOUH3XAYtaFuPmf5m9HDgiVXy4mvNzWOfQXQF%2BEIg3x0nGeWopOYeGhdPlldO4pbV%2BkIdgEMmgZlDKEz%2BaLApBRzARiN4zVBbyhrY9PYQnf%2Fi3XvmPpDPwgUDg%2BKnDmwkQYtnekns841PhoSelpPcjywt%2FzuyXc%2BVbGxLxXoi4eDrcRonxrvk%2FrkUqm6edy5bM1g5%2BUfZRxlAiSWkQGd0w%2FUFHVsTjfnuXl1tsT5cyRMpmCRm2pX1RMYl3EPgzMhi7%2BJpdU4TOhssREgmh5m5An%2B7dYtTP5%2FwQH67iHNGZPAwLu74n7Cxi%2BbD4V0nnBbESi4K%2F64jFaMSkNBOJP8wy5upUtouzSwuTbYQ8FryiIK%2BfYt5ow%2FmIylJNn48eX5sc1ufLgeOj2%2B3XMc01nY4xA8zirBzHb%2BGvYwKpf7WlfYkvbImoiAHeuJ5XzpHRQW6E4dhcx5Jgq249oWLCbVGy2TyyE56GSpnx3qy48FEp4Wp7nFm03UlKpLYaOIhrFqQ5o1mUEVzrCsK9dC5Afx1wfy9q7Xm%2BgUvyp1nZu6Zxz2sqMMKP28kGOqUBdyU8RqV7h0Fal6i3k196RlNpMlrV52oZhVWsS8g0BzK8v59wo%2FsSPF8d%2FR5z20HEPJ8gckCeZa7JVnp8GFqQAWiYMmjZ0Q8dHFJSi8sYxuu7S151oFCoiE%2B837cyJkjOZZAyLIEbn7Fw2kQfhGbX1X4YW6Iz13fmbERZiEiu9om1usXoRT92A2jJDMce%2FggFFEgXOm%2BU%2FFAznHgpb04jVVG2X7%2B7&X-Amz-Signature=fb231145320d42917dc4dfa6d1c930f3ebcd432624a8cf02c020f0cd5ef0b8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4I7RHN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXIRaEEvsXFjNwDKCX2DSkejADicW4OkhCikwBOEoAkAiASnXrf%2F6upNRzq1n7arkh%2FyyshrUw02KZ8vLrG1YA%2B1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnxNrIRjMvq5dSQFKtwD6isSLpQXTjkOcv7Fm222rn3S1DaJSG02b4tLS5FwhZR5md2trkfb%2B7LWdKTXqcLtqVGID90soYmEC1I0UjAN9pwUp8ZLY6e%2BLLcqYcJU4Tan67Rs5Of61MxR%2BDGI0n9fooahx%2FIu7U5O8Q5JlkfrwaAVXCP926mtQv1B0nP7EKPZnUS738%2BIiSf0h1Sdg05Qb%2F7NIwIQ3IwoguKstzmxuvA0adUcIwQG42ZkBsiVJpztHk0hL338qHFidgg80uA4iqhDOaFb7%2BJe1VMTc0d274xkioI5SfvReTH6C7Ty5DfiCyqWnMLv4ijHPYGTZ%2BqKKXMQ9e68p9BV29oCFBMfkZ1PRucsjztcJFmewG60W0czKxsgNDfdxuTVgHVow0AvEJDngSX5lQXRfV7ys%2F65V9GpblPV9HM7oup3QmqRDJrU7mJDLcMFQuYj%2F7jTmiBBoJ8yeDphVMfw2euCmg1JBdm26Kp9lF4wUilEvoFuzAEhUd61b6kfrolQGJgR93v%2BWVn5nepyMRDneXxiDpifJ79hqY0VbzqvERyiun1Cfgm9giRldE8kq%2BJvaSdkgkZYTfkJViU%2FFSStgngt3vyd%2BX3VGFHDq8iD8danYZIVbhPQig0YX7bB46i9VjAw1MneyQY6pgH73qULRNC3Yc4%2ByQJftWsqziTNPrYlg3E2JcM%2FZau6Qx0E4kKl1wJ5X1luYhrbfoVR8lRxO0rlzfO2aTrvf2irnVyfjtMA98V2QXzDsiV7M74qCwxi17RtIjPiI6W9mzGyG1YHf%2FPV745Gw6aRznoVXqXuTKlXNcm4bFEoC1awLX2s4i2hzgAYnztReXNebR6DHcqe8RMkFpyK8V7Bx0GcUh9uuuDY&X-Amz-Signature=b0bb135052ac2789789c95b44ef93093c8f0a03d219ef02ed6060b644e4f06bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4I7RHN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXIRaEEvsXFjNwDKCX2DSkejADicW4OkhCikwBOEoAkAiASnXrf%2F6upNRzq1n7arkh%2FyyshrUw02KZ8vLrG1YA%2B1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnxNrIRjMvq5dSQFKtwD6isSLpQXTjkOcv7Fm222rn3S1DaJSG02b4tLS5FwhZR5md2trkfb%2B7LWdKTXqcLtqVGID90soYmEC1I0UjAN9pwUp8ZLY6e%2BLLcqYcJU4Tan67Rs5Of61MxR%2BDGI0n9fooahx%2FIu7U5O8Q5JlkfrwaAVXCP926mtQv1B0nP7EKPZnUS738%2BIiSf0h1Sdg05Qb%2F7NIwIQ3IwoguKstzmxuvA0adUcIwQG42ZkBsiVJpztHk0hL338qHFidgg80uA4iqhDOaFb7%2BJe1VMTc0d274xkioI5SfvReTH6C7Ty5DfiCyqWnMLv4ijHPYGTZ%2BqKKXMQ9e68p9BV29oCFBMfkZ1PRucsjztcJFmewG60W0czKxsgNDfdxuTVgHVow0AvEJDngSX5lQXRfV7ys%2F65V9GpblPV9HM7oup3QmqRDJrU7mJDLcMFQuYj%2F7jTmiBBoJ8yeDphVMfw2euCmg1JBdm26Kp9lF4wUilEvoFuzAEhUd61b6kfrolQGJgR93v%2BWVn5nepyMRDneXxiDpifJ79hqY0VbzqvERyiun1Cfgm9giRldE8kq%2BJvaSdkgkZYTfkJViU%2FFSStgngt3vyd%2BX3VGFHDq8iD8danYZIVbhPQig0YX7bB46i9VjAw1MneyQY6pgH73qULRNC3Yc4%2ByQJftWsqziTNPrYlg3E2JcM%2FZau6Qx0E4kKl1wJ5X1luYhrbfoVR8lRxO0rlzfO2aTrvf2irnVyfjtMA98V2QXzDsiV7M74qCwxi17RtIjPiI6W9mzGyG1YHf%2FPV745Gw6aRznoVXqXuTKlXNcm4bFEoC1awLX2s4i2hzgAYnztReXNebR6DHcqe8RMkFpyK8V7Bx0GcUh9uuuDY&X-Amz-Signature=3b6ca77bc2574eb16b2ede9c294ea3e3df2bdab93f711419458d59bd8bb67fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


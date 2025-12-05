---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C6W5IV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFunTnKkYTe%2BT9P7ZjG0U%2BeNQU3o2T9Io5VI%2BJGz60AIgBjJbgicMnqbovG53iZa%2FBmAZEzAu4yMpk7%2F8XnL%2BSdsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKQqu%2F5xr4lSYal%2FVircA9dpAWAMflQxCty3sADbHykFtulrwzCRlyeC2hRWM0OFravQ9QgV0kMSW6kuAY43S%2FFAotr0KYIYBQ%2BCHHSZ6Vi6sErQ6oPl9ys1byDSSk1vMZ72RL5izERjEsc%2Fv7gJZ2yFragWV5TjgRymO4C%2B04%2Bd3WGdKjXz9sEt66aChS7sOoCjZyJPEgeL3pY7QXXkiQ0t2vx40d19J9CFxYk6lefFBH%2BBxpp4gPrUtZjvl7GN8fUMYohJ5K%2F0hxHtN%2Fdx5%2FHb8g7%2FXAChheEgkn2BIkJQ%2FoycLoLUGDtX%2FUP%2F%2FnV84inerIxjVEDspYZTpPY17pBw1D1SiEq%2B5chTibN%2FbrsAd8I%2BOd5J294QPINyWUlWvbBD2YtlIRY3Z%2Bhh4D%2B1rMUUB%2FNXLr60503jrTHX%2FO3m3zs2sg%2BtcSps8DxVvUpHOCAv%2Bx5VN5VIj6G7acRrcm09JRId8yCCpzqNg3le8ZuLXyxKYxXuNqc2LZ7M3W%2BeesV2dT5PNHq2R8n8lZQE0uOPmsVagqJ1CSqjxsDJKZOKDmsUSk2Q6C1Wk5KT0e1GDSoy9Ff5Y4MDHIMa80S4X%2BimgUJm%2B7AqFOpexmuuXQ0IOSdp1vPVM63F2LqXSb0R1UXcmBsFzCg3xrT3MMzty8kGOqUB3q3oO2da%2FFRi%2B2Y9buSMGT8%2FuZShCOYaYaNrg7TGdJCkBqXhYWpofJhc3os%2Fh6SgX878HuI%2F9Pc3nJPxZGszjVKkAj%2BiQLliVy2GlYDvHf1Z1K3EgW7ySgRCMoOSHvj1E%2FOa1OjxpOQpBIm3XRm16Az%2FuPbAx8oH0VEx685qNincmlvpIx4iyuP9mT664CXPe4HYnNLrq3lJCt4i7yAl6pF2plsg&X-Amz-Signature=bafc10963bdac2cbecdc7292ad48b78d33cc0258339726a789e8140079bfe250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C6W5IV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFunTnKkYTe%2BT9P7ZjG0U%2BeNQU3o2T9Io5VI%2BJGz60AIgBjJbgicMnqbovG53iZa%2FBmAZEzAu4yMpk7%2F8XnL%2BSdsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKQqu%2F5xr4lSYal%2FVircA9dpAWAMflQxCty3sADbHykFtulrwzCRlyeC2hRWM0OFravQ9QgV0kMSW6kuAY43S%2FFAotr0KYIYBQ%2BCHHSZ6Vi6sErQ6oPl9ys1byDSSk1vMZ72RL5izERjEsc%2Fv7gJZ2yFragWV5TjgRymO4C%2B04%2Bd3WGdKjXz9sEt66aChS7sOoCjZyJPEgeL3pY7QXXkiQ0t2vx40d19J9CFxYk6lefFBH%2BBxpp4gPrUtZjvl7GN8fUMYohJ5K%2F0hxHtN%2Fdx5%2FHb8g7%2FXAChheEgkn2BIkJQ%2FoycLoLUGDtX%2FUP%2F%2FnV84inerIxjVEDspYZTpPY17pBw1D1SiEq%2B5chTibN%2FbrsAd8I%2BOd5J294QPINyWUlWvbBD2YtlIRY3Z%2Bhh4D%2B1rMUUB%2FNXLr60503jrTHX%2FO3m3zs2sg%2BtcSps8DxVvUpHOCAv%2Bx5VN5VIj6G7acRrcm09JRId8yCCpzqNg3le8ZuLXyxKYxXuNqc2LZ7M3W%2BeesV2dT5PNHq2R8n8lZQE0uOPmsVagqJ1CSqjxsDJKZOKDmsUSk2Q6C1Wk5KT0e1GDSoy9Ff5Y4MDHIMa80S4X%2BimgUJm%2B7AqFOpexmuuXQ0IOSdp1vPVM63F2LqXSb0R1UXcmBsFzCg3xrT3MMzty8kGOqUB3q3oO2da%2FFRi%2B2Y9buSMGT8%2FuZShCOYaYaNrg7TGdJCkBqXhYWpofJhc3os%2Fh6SgX878HuI%2F9Pc3nJPxZGszjVKkAj%2BiQLliVy2GlYDvHf1Z1K3EgW7ySgRCMoOSHvj1E%2FOa1OjxpOQpBIm3XRm16Az%2FuPbAx8oH0VEx685qNincmlvpIx4iyuP9mT664CXPe4HYnNLrq3lJCt4i7yAl6pF2plsg&X-Amz-Signature=74caef3112a71d23ca715b1272cfc6421cffb8f7752b6dbc04ee457b71f67807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWASS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWP3Otw4ovi8HGL6AUaSDYvr%2BT1E0O0zL3GRi2H1wgwIhAI3NJCMDXlkqzfhAAhj4XOw5JpwrK2Cl8ttnF3LQTfUTKv8DCFoQABoMNjM3NDIzMTgzODA1IgxVIcQsEqaQkbJxT%2FEq3AMdoVDTdPqHks93L5UegjgvS%2BCv1FLq4q%2FrN9orLlENnPzAb873ESP%2FXDhUAXa2ncZpe2gBIYqN4O%2FwzLx1%2BziPqnKuOVdAd8kSyFCsl0e1Kv0usnXTkHJInnRtFSt5Ka2BcpDyCjB6cww40kb6%2FFpMmQWDdwyv3CHn06%2Bcxq6VPhaCyrax2r6hq9qxEiq9Bv1GIf4SQkCSCzxt9xhvNlSvACzPRiGRTGOzhLzyqCG%2BmMop63ZOb8HvZjdvwflSWkdKjY2YYFk9bCLtfNZqX9BBRcSckxYJk5E2Qt1EOeXx%2FEiDfO%2FAVb8sa%2FnJweRlZLzcmSI3baRI6%2BNVbZB%2BuLhFTgqhhMbsfZpVo%2BO0kuf1ydz1Y5EYe4AVyX6yw3IEWiUc5Qtu23jEoErRbjbAK1XkUm1h554P9tACww5ULXVVs5MxulcZy%2B2nLzzi3nH62bBYybIewCpPy98GC51dA8FVaJNA0noMiSzPILyuf95kydF2EiTE2xz8%2FwG4u9fewjYyLsc8OrtQDjjxXTZTvZ1APUTE%2BQvI%2BIxVPIeEX2goMuatg3Tve%2BKJlnL37nNAO6igHVoBGf5mAyxnBqr6gANR%2FBMoGeeoaUoSQsvTxSxHBi9vqfT5UJGzD945ATDqxsrJBjqkAYG%2BUwcoxh6Rmhdx2e6W%2B3apI6br46upXTESmCNiT7zazY1AxcJU2awS85inzWzGOjyODvRE7kXDWBnMuPyV5AekSz1ckaNDwKLmc%2B9jTbi4fTUuaAlf52IdUgVaDWrqGNtXuMAAm0WcZzzrKdbTG%2FNTXEeykLmMHN1QiDoLfCpKGGmSm%2BVLYJ%2FO9drm6MQvmUncLoryRf8sWolHNEao4vblHzBh&X-Amz-Signature=2d479a33a1a3612603bdc05c016611a9f2c62ef03d82e526081770d0969dd591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWASS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWP3Otw4ovi8HGL6AUaSDYvr%2BT1E0O0zL3GRi2H1wgwIhAI3NJCMDXlkqzfhAAhj4XOw5JpwrK2Cl8ttnF3LQTfUTKv8DCFoQABoMNjM3NDIzMTgzODA1IgxVIcQsEqaQkbJxT%2FEq3AMdoVDTdPqHks93L5UegjgvS%2BCv1FLq4q%2FrN9orLlENnPzAb873ESP%2FXDhUAXa2ncZpe2gBIYqN4O%2FwzLx1%2BziPqnKuOVdAd8kSyFCsl0e1Kv0usnXTkHJInnRtFSt5Ka2BcpDyCjB6cww40kb6%2FFpMmQWDdwyv3CHn06%2Bcxq6VPhaCyrax2r6hq9qxEiq9Bv1GIf4SQkCSCzxt9xhvNlSvACzPRiGRTGOzhLzyqCG%2BmMop63ZOb8HvZjdvwflSWkdKjY2YYFk9bCLtfNZqX9BBRcSckxYJk5E2Qt1EOeXx%2FEiDfO%2FAVb8sa%2FnJweRlZLzcmSI3baRI6%2BNVbZB%2BuLhFTgqhhMbsfZpVo%2BO0kuf1ydz1Y5EYe4AVyX6yw3IEWiUc5Qtu23jEoErRbjbAK1XkUm1h554P9tACww5ULXVVs5MxulcZy%2B2nLzzi3nH62bBYybIewCpPy98GC51dA8FVaJNA0noMiSzPILyuf95kydF2EiTE2xz8%2FwG4u9fewjYyLsc8OrtQDjjxXTZTvZ1APUTE%2BQvI%2BIxVPIeEX2goMuatg3Tve%2BKJlnL37nNAO6igHVoBGf5mAyxnBqr6gANR%2FBMoGeeoaUoSQsvTxSxHBi9vqfT5UJGzD945ATDqxsrJBjqkAYG%2BUwcoxh6Rmhdx2e6W%2B3apI6br46upXTESmCNiT7zazY1AxcJU2awS85inzWzGOjyODvRE7kXDWBnMuPyV5AekSz1ckaNDwKLmc%2B9jTbi4fTUuaAlf52IdUgVaDWrqGNtXuMAAm0WcZzzrKdbTG%2FNTXEeykLmMHN1QiDoLfCpKGGmSm%2BVLYJ%2FO9drm6MQvmUncLoryRf8sWolHNEao4vblHzBh&X-Amz-Signature=0c4e89a021e3d7a879a5df67d032ca110c4a916e3c79d4cc765fc00a77ba6be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


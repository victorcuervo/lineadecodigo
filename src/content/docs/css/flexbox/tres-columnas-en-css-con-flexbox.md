---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33PTWU6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdLFCwsEvPLlysiw84YEIBDEMk2GPtCa7lZaA8Ii1uAQIgG6ToYQnaR1XMfYjur1AxcsVEVs9pEfVpkYTQwmp7c0cqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMaUAH3y5pRwkK3yrcAx7ObmiCDJ76%2BX3NQnMf6xe0ZN0WhbJ8iimwMh1RCKcFivqfFYGc4vYcdpMhkQ0Cj5qcOdZgc5ianq3PxGuKVRDuXOr58s4iOfHh1PcKy0aTBnmxhgEfWsmZ3wfWRIwe2e1PnIV%2BH6zdPqw3sTSvPTnmgyJ0HWGQ5QRgNTaOMEwwN69AmfOAg7BCBeCaJ4ZkD%2FaZ%2BPu7GZaoMd0QkfkroxJQaGlpbBSC0z%2FhtyXc%2Fb4olW4VGVOjYlImO75olLH%2BmN%2BD3VrV%2FiHpB95M3IxMfgnf8snz9kdcray2R1vl7uneYJyDHnQ92JS8Ayp%2FbashygNd9IjAnkc456RST0EckH9xENOoACBK3uexdj8lJY5AWRrH0TB%2BDkIuYuXCJ%2Bm3Vgv1daFhtw1k%2FkOUBLpY5dfDqm5LGxkrXaYgIYE2zYi0bQyOTxdLpOg6O0TgMVc8eGtZY%2FY9LveZuaS6%2F6ZPlP5Spim0Bjup9CAZQg843jSNeDBrfOgEuXPqvAxvzabkDBT%2FEO5%2Fcbq4TMdtauqS%2Fyls6WVuFFa9WPLsj6QqmPbzwkZtTeYPX72FMbB9MxFWzG0q9er7UqJotVSipGr3zwlhVnDC6t%2BKHga%2BbWFxp2kLxsrGmDhBdKuubWIxMOjR2MkGOqUB84AYCkJBVSrGKYJMRNV4lArL%2B2oux1EwjPnqvXBUOrRAW4%2F2ah3vdkbqySB9PliKBtbMjUrjjckEXxC1rm%2B9RuleNg5ztB%2FSOEgWTXqU9PyGlRuhXM0iGcY3kOoq%2FfiiCHnjMZr9j9hAm3BQuK422ZdhsNdK9iaIubCkk1FWQx%2Fskt1K%2BAVuCPt5kIjD%2Br%2BISUfidd%2BgnsL4zU6jA3heqd0nHrpz&X-Amz-Signature=d59414e5201767c730342828ef86e751b523504e4c0411dd85fd50c12ba64d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33PTWU6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdLFCwsEvPLlysiw84YEIBDEMk2GPtCa7lZaA8Ii1uAQIgG6ToYQnaR1XMfYjur1AxcsVEVs9pEfVpkYTQwmp7c0cqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMaUAH3y5pRwkK3yrcAx7ObmiCDJ76%2BX3NQnMf6xe0ZN0WhbJ8iimwMh1RCKcFivqfFYGc4vYcdpMhkQ0Cj5qcOdZgc5ianq3PxGuKVRDuXOr58s4iOfHh1PcKy0aTBnmxhgEfWsmZ3wfWRIwe2e1PnIV%2BH6zdPqw3sTSvPTnmgyJ0HWGQ5QRgNTaOMEwwN69AmfOAg7BCBeCaJ4ZkD%2FaZ%2BPu7GZaoMd0QkfkroxJQaGlpbBSC0z%2FhtyXc%2Fb4olW4VGVOjYlImO75olLH%2BmN%2BD3VrV%2FiHpB95M3IxMfgnf8snz9kdcray2R1vl7uneYJyDHnQ92JS8Ayp%2FbashygNd9IjAnkc456RST0EckH9xENOoACBK3uexdj8lJY5AWRrH0TB%2BDkIuYuXCJ%2Bm3Vgv1daFhtw1k%2FkOUBLpY5dfDqm5LGxkrXaYgIYE2zYi0bQyOTxdLpOg6O0TgMVc8eGtZY%2FY9LveZuaS6%2F6ZPlP5Spim0Bjup9CAZQg843jSNeDBrfOgEuXPqvAxvzabkDBT%2FEO5%2Fcbq4TMdtauqS%2Fyls6WVuFFa9WPLsj6QqmPbzwkZtTeYPX72FMbB9MxFWzG0q9er7UqJotVSipGr3zwlhVnDC6t%2BKHga%2BbWFxp2kLxsrGmDhBdKuubWIxMOjR2MkGOqUB84AYCkJBVSrGKYJMRNV4lArL%2B2oux1EwjPnqvXBUOrRAW4%2F2ah3vdkbqySB9PliKBtbMjUrjjckEXxC1rm%2B9RuleNg5ztB%2FSOEgWTXqU9PyGlRuhXM0iGcY3kOoq%2FfiiCHnjMZr9j9hAm3BQuK422ZdhsNdK9iaIubCkk1FWQx%2Fskt1K%2BAVuCPt5kIjD%2Br%2BISUfidd%2BgnsL4zU6jA3heqd0nHrpz&X-Amz-Signature=52490a0bef1def176de804a3505086054d0f37fbc110546afa24413e4f36c2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


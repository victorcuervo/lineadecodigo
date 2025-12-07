---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUMN5MB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUezB%2FnA32kfuA8zMGSsG3id3p6mGzCYfmdnlCZO4ccAiAhQwgFpbWTXTVCVCPZPjAhf%2B7syQYpaBVLuDju%2BtLVwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIeu2KA%2Bw%2BPmT4OVKtwDORYCJxKSFUOaHx9HM4Fwoy4Ua3tId%2FHYXVXl%2BvrViceXL%2FGOVmoE6WaYhe6pm7SfKM8M7%2BHkYxERpDPblxN0h2L39y5BbNm3Il5k48qBg%2BpnfB%2F8pDpi5v4vL%2BeDg6GDSbqD1h3bLXohHMed3gx8r853A1AuAUnwazmG%2BTyTXLrokXTDpuoZWVL8ldkhEztnnmMCpekfsPvlcwK8f0FOls4GqFBew9kF4r46hMsuIxLuJFO6oIl2y9BE2NBcbGrgkLi1fc9Hh%2B1BCu2lk2POCjNLDOWf02mmwjDvn4rvlUg6p0w2I1B9ObGiuKBg49F8VJMiYZCDfwz%2B5lq0WcT2Z%2Bn3SsGQE3vGk1imC5MNlN6qjMfp26Gwhz%2BMiJHx0f5Jn6mQXWMqZEnh4aS4zJugOFTNFqlBXetcO7bW4cMo%2FE4zoz%2Bm4S9OEDB%2BBNQZwTYv%2FyKMApzrIpFiSTid2BQFcjFj%2FrX2%2BrLDqHeogFq9h%2Fdg4p2q03aMZWHQaZLIJU8JnKlrVGbgmEe9ssjn2b9XEk11DOWCGoHZNmSkmyu0Rn4D0Ojmqpmv%2BpKStepxH6917V%2F9KKfWJ6JQ2aHsggDTrwhdIn3T%2B%2BH%2FhfuYCby469WAPiYgeu56mLJPDfUwlqnXyQY6pgFLfT3rkCuIlsJAbEIWhns2o4uKaHFtnphY9q%2FZlNhfW8W7e4BB14q42qsTLhcwa8%2B6u5jhv89xEzA7wtyTeC%2Fje7Kmw3VwfkJMEREdx%2Fq%2BGkoO%2BdM933X2PA1YO09k37V9HbjHWw8NAfB8rRRGoTVomCg0MmR4yhyDKahq6K0I071Xaq16e0XAdN%2Bsv5JziWpukYd1L%2BurOEW5DCh0OJxgbJAyGmuk&X-Amz-Signature=006dcc388f3e956d1a48e0e86ab91f6341e5f494accced7a649ca8452c0da230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUMN5MB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUezB%2FnA32kfuA8zMGSsG3id3p6mGzCYfmdnlCZO4ccAiAhQwgFpbWTXTVCVCPZPjAhf%2B7syQYpaBVLuDju%2BtLVwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIeu2KA%2Bw%2BPmT4OVKtwDORYCJxKSFUOaHx9HM4Fwoy4Ua3tId%2FHYXVXl%2BvrViceXL%2FGOVmoE6WaYhe6pm7SfKM8M7%2BHkYxERpDPblxN0h2L39y5BbNm3Il5k48qBg%2BpnfB%2F8pDpi5v4vL%2BeDg6GDSbqD1h3bLXohHMed3gx8r853A1AuAUnwazmG%2BTyTXLrokXTDpuoZWVL8ldkhEztnnmMCpekfsPvlcwK8f0FOls4GqFBew9kF4r46hMsuIxLuJFO6oIl2y9BE2NBcbGrgkLi1fc9Hh%2B1BCu2lk2POCjNLDOWf02mmwjDvn4rvlUg6p0w2I1B9ObGiuKBg49F8VJMiYZCDfwz%2B5lq0WcT2Z%2Bn3SsGQE3vGk1imC5MNlN6qjMfp26Gwhz%2BMiJHx0f5Jn6mQXWMqZEnh4aS4zJugOFTNFqlBXetcO7bW4cMo%2FE4zoz%2Bm4S9OEDB%2BBNQZwTYv%2FyKMApzrIpFiSTid2BQFcjFj%2FrX2%2BrLDqHeogFq9h%2Fdg4p2q03aMZWHQaZLIJU8JnKlrVGbgmEe9ssjn2b9XEk11DOWCGoHZNmSkmyu0Rn4D0Ojmqpmv%2BpKStepxH6917V%2F9KKfWJ6JQ2aHsggDTrwhdIn3T%2B%2BH%2FhfuYCby469WAPiYgeu56mLJPDfUwlqnXyQY6pgFLfT3rkCuIlsJAbEIWhns2o4uKaHFtnphY9q%2FZlNhfW8W7e4BB14q42qsTLhcwa8%2B6u5jhv89xEzA7wtyTeC%2Fje7Kmw3VwfkJMEREdx%2Fq%2BGkoO%2BdM933X2PA1YO09k37V9HbjHWw8NAfB8rRRGoTVomCg0MmR4yhyDKahq6K0I071Xaq16e0XAdN%2Bsv5JziWpukYd1L%2BurOEW5DCh0OJxgbJAyGmuk&X-Amz-Signature=97ddaee078ccd17222c12a36396e491c54f132ca64774abb135c5412c1948a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


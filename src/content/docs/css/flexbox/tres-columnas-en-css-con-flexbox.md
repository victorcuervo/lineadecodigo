---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FIX5HM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jOpvP8gY4BY1%2BtH%2B1Tbdh0fOuikp8HsuWT43AnxV8wIgP3M8HWp2I0EJG0sIVjIIeCbl2334ZKgcIMS%2BUDZ%2FN9MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrFLgjUh9h6rJYf3CrcA5RMD%2B64NLX7OyfQ01t4NfHvi6qzpEypCvWpqNnLLz0NdPf%2FF3cY%2FYKv4DUvEwzZ5Mroh5C1NMUG1J13YKMwxTlrUXQ3FyF9rkcG6bg%2Bj4TDW8myJvqnuVm0CIDQp8wH7mkTogyhhhaCsivWcUjpPHY8UoiPKpUpIAKUXFzrHxvZrEVNTv18WUnFFMWFrCNzq%2F%2FiIoCYPPDS3T%2BeSUemkcgOrVk2Xn%2F%2FHkciluQ4U4N95lk3icm4uLZllknCo%2FrELm8ncsJqyusgeIIU1S92Dr0FoKodKXijGa%2BYG4aDR40%2Fee1ktXNKoi7Xb33Hr4t5ouThh%2BeM5GDWZRY9dYSnY6qpEXHO%2FyFNHRSaz4zk0OkrCKGwUiMeTsqfuWvZvluQ1dmZgUtpzAj%2B1fGhjxS%2FWGGP9TK9CHZ8Cuib5AjoqWgrHbEjVXes3s%2FR2EDCsBGqjgff%2B9Dkz%2F2z6FE3rSRE8u8oD%2F%2B39aacjn1maVtZVRM44nXKKZrXXfK%2FQWMoDvI5maLhkK%2BL8DMa6f7T9LyKw2A7S3RyCCWQU4rwjW74C%2Bc6uhNLDX%2FQF7ACNxEPO42IXdrcsH%2B%2Bh0FO7q8yDlPmhehHSIb%2FPjcr7q%2FgZesma6eue3ZAsDXkx5gh85SgMJD90skGOqUB%2FpKAbCZ4o44QHHt%2BID8TR5bI7u5gSd%2FfupCQg1azoNkCL8cFXfZUxBzLSWuoqPXXZs%2Fb7OqsEvo%2FzazLnMgCQn45cQsZWaFa1QVznCsFpRvtTw1dc05NeQ%2BcjfRpTrpZGTdbFl3vyzebjEVmXG4Evv0VlIRdJDKQa%2BV7Ede7UVLQ2YOeQ2VveWZUY5Kulk%2FFiR3fThkFy04zm9cPumETCSdYDWBz&X-Amz-Signature=d4dc86641526ed597d2fd9cddb6af97018247bf7121ff510f67386625f2aaaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FIX5HM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jOpvP8gY4BY1%2BtH%2B1Tbdh0fOuikp8HsuWT43AnxV8wIgP3M8HWp2I0EJG0sIVjIIeCbl2334ZKgcIMS%2BUDZ%2FN9MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrFLgjUh9h6rJYf3CrcA5RMD%2B64NLX7OyfQ01t4NfHvi6qzpEypCvWpqNnLLz0NdPf%2FF3cY%2FYKv4DUvEwzZ5Mroh5C1NMUG1J13YKMwxTlrUXQ3FyF9rkcG6bg%2Bj4TDW8myJvqnuVm0CIDQp8wH7mkTogyhhhaCsivWcUjpPHY8UoiPKpUpIAKUXFzrHxvZrEVNTv18WUnFFMWFrCNzq%2F%2FiIoCYPPDS3T%2BeSUemkcgOrVk2Xn%2F%2FHkciluQ4U4N95lk3icm4uLZllknCo%2FrELm8ncsJqyusgeIIU1S92Dr0FoKodKXijGa%2BYG4aDR40%2Fee1ktXNKoi7Xb33Hr4t5ouThh%2BeM5GDWZRY9dYSnY6qpEXHO%2FyFNHRSaz4zk0OkrCKGwUiMeTsqfuWvZvluQ1dmZgUtpzAj%2B1fGhjxS%2FWGGP9TK9CHZ8Cuib5AjoqWgrHbEjVXes3s%2FR2EDCsBGqjgff%2B9Dkz%2F2z6FE3rSRE8u8oD%2F%2B39aacjn1maVtZVRM44nXKKZrXXfK%2FQWMoDvI5maLhkK%2BL8DMa6f7T9LyKw2A7S3RyCCWQU4rwjW74C%2Bc6uhNLDX%2FQF7ACNxEPO42IXdrcsH%2B%2Bh0FO7q8yDlPmhehHSIb%2FPjcr7q%2FgZesma6eue3ZAsDXkx5gh85SgMJD90skGOqUB%2FpKAbCZ4o44QHHt%2BID8TR5bI7u5gSd%2FfupCQg1azoNkCL8cFXfZUxBzLSWuoqPXXZs%2Fb7OqsEvo%2FzazLnMgCQn45cQsZWaFa1QVznCsFpRvtTw1dc05NeQ%2BcjfRpTrpZGTdbFl3vyzebjEVmXG4Evv0VlIRdJDKQa%2BV7Ede7UVLQ2YOeQ2VveWZUY5Kulk%2FFiR3fThkFy04zm9cPumETCSdYDWBz&X-Amz-Signature=4105c29d79eb717793dc79ea61d1f9a2e3d84bfaea825693717faa1c9eecde80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


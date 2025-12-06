---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGDFGUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTB66pMTvE1DYcxY7JmZMnd3QEJlT5gvK9Qhstq%2FbEKwIhAJgQ5Bua%2B%2BWwQg5ySJHp%2B3vzN4yXMuGO14pxqqDFR5d0Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzzjNjxe6j17D%2BI3i0q3AOs6KIwZ8epUsuzV0am9oOqiDKotifUnPXUkrcQgKRErYGRchWlhWLWrvKnNH9SSANSvxFcKVQobMtkD77ow9v96sV3SXq4kQBVWnJNEH75NSf3RxoGeC%2B9%2BIWFVUSUWMgYuIp7dsGc6Wv2Y%2BKMyKFLUbQXDoF37EAU39P6rEG11P4AmT4ww58ClQqemcgJc5tP%2BGSUaro%2FzmXSEfpJ5tB5HYu1Cg3EkPjsCdf3mhdtyMThlFSCcj%2FcpvG0WbgUQXEF1bQLl8tGDbbqqvALUgDxiQ1N3%2FzpD2wurnzn5KUAoVDBum9L%2BYx5TOuLMik6IppOJRkGkyymFpUK%2BnTZmpQa%2BgMubb6UsJiuvuYAxS8MzEy%2FRZuRjKyppieNWA2YhN7x9fOp%2F92%2FBL0Y5kJ0piD9iBTpfeCkRSvxQZsgjuUwWZtDzwdQ0EXelszgU%2F%2BPSV6JRBYPoIYgrYJysgK3zY9NqFm9nD19ePz947SLg1bOrkUAoRS%2B%2BKIEOJx2tvD%2BeMnR4%2FeEuSckJBPvcAWKxlr1tXEvpyvfGjxDa%2FsxSOb5ROiXHUA2pRFKvem66p98B7vFej0NyOQIaN1LvXiyW2%2FZ48danKP51dv6PV0%2BjFu1SHhzUF8Tsp6F4WJUSzDXxNHJBjqkATDsrTy0pvCqTBL2EP9VGYvOyhyQXC7R2kosd%2By9HHjCPIFSyWGgEgcq%2BT932PqtLDLEu8pkjoA8fF2zTrf0AqA96MAxxiKm%2F99rnWS38v%2BcT%2FhCqJHZLg4uGWGqe65ucE5y7ETh1mCRQ%2FBmnZINhC5glqhoO01GqCM81UOxQDPyFZKBmU1Z8E%2F54szeac9pShvneKPzBk6qkNGO%2Bb1xXBjXsMKD&X-Amz-Signature=4d19d726d33d132cd0c947ff6a92cf4e63ddb288bfce4a8f87c5fb89edc3e450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGDFGUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTB66pMTvE1DYcxY7JmZMnd3QEJlT5gvK9Qhstq%2FbEKwIhAJgQ5Bua%2B%2BWwQg5ySJHp%2B3vzN4yXMuGO14pxqqDFR5d0Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzzjNjxe6j17D%2BI3i0q3AOs6KIwZ8epUsuzV0am9oOqiDKotifUnPXUkrcQgKRErYGRchWlhWLWrvKnNH9SSANSvxFcKVQobMtkD77ow9v96sV3SXq4kQBVWnJNEH75NSf3RxoGeC%2B9%2BIWFVUSUWMgYuIp7dsGc6Wv2Y%2BKMyKFLUbQXDoF37EAU39P6rEG11P4AmT4ww58ClQqemcgJc5tP%2BGSUaro%2FzmXSEfpJ5tB5HYu1Cg3EkPjsCdf3mhdtyMThlFSCcj%2FcpvG0WbgUQXEF1bQLl8tGDbbqqvALUgDxiQ1N3%2FzpD2wurnzn5KUAoVDBum9L%2BYx5TOuLMik6IppOJRkGkyymFpUK%2BnTZmpQa%2BgMubb6UsJiuvuYAxS8MzEy%2FRZuRjKyppieNWA2YhN7x9fOp%2F92%2FBL0Y5kJ0piD9iBTpfeCkRSvxQZsgjuUwWZtDzwdQ0EXelszgU%2F%2BPSV6JRBYPoIYgrYJysgK3zY9NqFm9nD19ePz947SLg1bOrkUAoRS%2B%2BKIEOJx2tvD%2BeMnR4%2FeEuSckJBPvcAWKxlr1tXEvpyvfGjxDa%2FsxSOb5ROiXHUA2pRFKvem66p98B7vFej0NyOQIaN1LvXiyW2%2FZ48danKP51dv6PV0%2BjFu1SHhzUF8Tsp6F4WJUSzDXxNHJBjqkATDsrTy0pvCqTBL2EP9VGYvOyhyQXC7R2kosd%2By9HHjCPIFSyWGgEgcq%2BT932PqtLDLEu8pkjoA8fF2zTrf0AqA96MAxxiKm%2F99rnWS38v%2BcT%2FhCqJHZLg4uGWGqe65ucE5y7ETh1mCRQ%2FBmnZINhC5glqhoO01GqCM81UOxQDPyFZKBmU1Z8E%2F54szeac9pShvneKPzBk6qkNGO%2Bb1xXBjXsMKD&X-Amz-Signature=275d5e7e178985bdebaec403b9a594e8de8a516544dc6704ac08d15ce2682de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


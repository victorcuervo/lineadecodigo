---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652D5WJGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5MEweWbjXSqcntrDShNXWWmZv4b9sBqBuJajfpVn4wIhAJCxmmOq%2Bv6UldTLI5Gxfm71q2%2BUt4Ag010macMRKRc1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxfS9CQMmu0%2BTy%2BnYMq3AOErSWz3lr2RYbwppiArltfT8UtSrekFwuGkUtTohTJ9HbzeHpygOWziIwadt9Dhr3EN7OHYU6yzGA3emj81df%2F%2Fb8lInxt7DZH5YtIOUwTq%2BPEovDbavZ1o5ZRExT%2BAC4f%2FXL7kbolEo%2BUw%2B1Q8tJZVLWpKItxZwxpLIRugKnD3WzjfuQCG6e81UAIkyglCx4N7bvvGeM0cOgR50K8QvxNzcE5kkHUUY60wqaFT95YiisWHrb2YDRaN6BuEVsSnKVb0QVsWCI4LLunghqmk1s1ar%2FF86yES6BSAU1j6LzAk4pC%2FRhhKi39uggal%2BZ0yjlpQumzr%2FVUZ8FGJm1KAW9szpjJclKV%2FKpx6U1LIHyRkzeEgbPn%2BxV5hb3nJjb23mFH9%2F75yDBjFFIhswHPi6%2B%2FGEaiNOAQ3eDaTK2TOJzpTpGZJiVDfiLKCEu8lGF02v7SfBa8vVN1Uyo69IWSccPa0LP2LqDBDvRsSfNU2wVb2ruLyCIOqoiK6%2FIxB5QhrfaNk06CDwOP1mayfQMIuIf8vOYsrRnYsJRBxjJ51mh3BL5HdE39BRa8smr5BAENF523NMJKNx7cwaOsuqoDFGfq1bnQRmlpzxn5NCzEcrsLqPieXdlSE3jNTsskXzDiptDJBjqkAbT8yJEj%2FBpJm6Z%2FLhNwScuNaz4kLxHDuqE%2BG3QDGi6LL9d4BogMfdpkFUi3sPVO0lnTcZT7sW78uGKYCU6J8u7UX5NDrHgDdGPwU4VX0Nf0w2gMXBvQ76MZOfQeZMcQHt81AiHAaLfxat2FcC8wpvTeDtoCg0g48p%2FEmxMNsQFz7bmcNBjYfGo1IO1dp3XCQWFwRCIEAgIw6mYtHTLepzVsHWEU&X-Amz-Signature=a9ecde411c9093607b4f4f31dd908d3610ac4af5a236a995db02eff40eeb8af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652D5WJGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5MEweWbjXSqcntrDShNXWWmZv4b9sBqBuJajfpVn4wIhAJCxmmOq%2Bv6UldTLI5Gxfm71q2%2BUt4Ag010macMRKRc1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxfS9CQMmu0%2BTy%2BnYMq3AOErSWz3lr2RYbwppiArltfT8UtSrekFwuGkUtTohTJ9HbzeHpygOWziIwadt9Dhr3EN7OHYU6yzGA3emj81df%2F%2Fb8lInxt7DZH5YtIOUwTq%2BPEovDbavZ1o5ZRExT%2BAC4f%2FXL7kbolEo%2BUw%2B1Q8tJZVLWpKItxZwxpLIRugKnD3WzjfuQCG6e81UAIkyglCx4N7bvvGeM0cOgR50K8QvxNzcE5kkHUUY60wqaFT95YiisWHrb2YDRaN6BuEVsSnKVb0QVsWCI4LLunghqmk1s1ar%2FF86yES6BSAU1j6LzAk4pC%2FRhhKi39uggal%2BZ0yjlpQumzr%2FVUZ8FGJm1KAW9szpjJclKV%2FKpx6U1LIHyRkzeEgbPn%2BxV5hb3nJjb23mFH9%2F75yDBjFFIhswHPi6%2B%2FGEaiNOAQ3eDaTK2TOJzpTpGZJiVDfiLKCEu8lGF02v7SfBa8vVN1Uyo69IWSccPa0LP2LqDBDvRsSfNU2wVb2ruLyCIOqoiK6%2FIxB5QhrfaNk06CDwOP1mayfQMIuIf8vOYsrRnYsJRBxjJ51mh3BL5HdE39BRa8smr5BAENF523NMJKNx7cwaOsuqoDFGfq1bnQRmlpzxn5NCzEcrsLqPieXdlSE3jNTsskXzDiptDJBjqkAbT8yJEj%2FBpJm6Z%2FLhNwScuNaz4kLxHDuqE%2BG3QDGi6LL9d4BogMfdpkFUi3sPVO0lnTcZT7sW78uGKYCU6J8u7UX5NDrHgDdGPwU4VX0Nf0w2gMXBvQ76MZOfQeZMcQHt81AiHAaLfxat2FcC8wpvTeDtoCg0g48p%2FEmxMNsQFz7bmcNBjYfGo1IO1dp3XCQWFwRCIEAgIw6mYtHTLepzVsHWEU&X-Amz-Signature=9dd355b939350e2934bc9e7bb9a9d75475d8cfc7bf5cf9aa7eb471c970460f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


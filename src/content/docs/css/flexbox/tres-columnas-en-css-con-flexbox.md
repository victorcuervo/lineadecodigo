---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWM77YQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDGiuZZO5HhiFIuq%2BTt2S2Ry4pTdVIIzybPfINnIBsZwIgJD3AGxbUIKgKzxnSPeIQO0tABzZTA54QkOqACLjorfMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGfowxQPKUML2p3ZRSrcA32qyJQQW9PnFQ1B1xKAh4LWiP%2BwfSvYfWCRbApyxi6XpkTCyDFUp8KuKvXRnjf7SQYsd9GYgfQpnKVaBQxVBegoyXG%2F9eWkF0EuTsV%2FBhMoc6wFw%2FTRDQTOglhHiY1D09e2phW58Nlp4am%2BndeoPWnXZPEFxSrlzcFJ1uKS8Vp2n8VGvQdnO%2BzqnLJNRzQ6sBgrV8Czff5aJ1ZwLjfOzcguL8zUV4qASves8x23lLg7pzYemPzfAhIstWSuUD17M%2FyGd66yAfBr7Fl5f36WzEuOS37wxiOPN9VBPaoYVCpO5e0JEHLyYsm2Wg8HwkDLje8FArOotjUFiVPrJzDV7RqrxIHHzVWoA8tj37%2BevrlRxBAqnvQ0FiMUx2cFkBIR%2FtyNznJKMSQZp5MjE2oay1UKnA6nQjaTF8UU0oRWc4r7Kocs9pfcUwgBfoxD3mrUi27mlN5YdA4TLpUZs98Yeu69r6z7cFAnT3E%2BWN2Qhx%2B3rfUlzcRHzHKjfHz6lMiGnQpJkXs16kBYPAoHWpJfk%2Fp8FV%2FjRmY1R2Hx%2FC%2BDv69tBohb%2FuWxigXJtYvvF8fvop7xjyN2%2B3pP%2FQXub%2FGKWnZTHrrzvVYDaBniKPd79OAzsYFLaApoySApUW5sML%2FGzckGOqUBP85Hjoa9dBZ4rlx8BdtjANoEkGvmETAO3FzxGLxwanhyewtc%2FTmAvSE%2F1L2ZLQ1wrJK5ZLvOFFxuZHIak4lAWYxVI6lX7N3XPL2SlOWojeuX6pf91a3J4uITAv1yZPkEHjcnHBnO0r%2BSYho2KHXSTOSGDI5Y%2FP%2B4UwckeF61f3PB2KJg6ur%2B%2BqHmuq88JEfj7KSQtgBtwRQT7VQc9BIGeRInqS7K&X-Amz-Signature=a8cbd11b28508d33718ef5285a2225d0d94c6a70d1dc25fb8df52acc1731f7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWM77YQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDGiuZZO5HhiFIuq%2BTt2S2Ry4pTdVIIzybPfINnIBsZwIgJD3AGxbUIKgKzxnSPeIQO0tABzZTA54QkOqACLjorfMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGfowxQPKUML2p3ZRSrcA32qyJQQW9PnFQ1B1xKAh4LWiP%2BwfSvYfWCRbApyxi6XpkTCyDFUp8KuKvXRnjf7SQYsd9GYgfQpnKVaBQxVBegoyXG%2F9eWkF0EuTsV%2FBhMoc6wFw%2FTRDQTOglhHiY1D09e2phW58Nlp4am%2BndeoPWnXZPEFxSrlzcFJ1uKS8Vp2n8VGvQdnO%2BzqnLJNRzQ6sBgrV8Czff5aJ1ZwLjfOzcguL8zUV4qASves8x23lLg7pzYemPzfAhIstWSuUD17M%2FyGd66yAfBr7Fl5f36WzEuOS37wxiOPN9VBPaoYVCpO5e0JEHLyYsm2Wg8HwkDLje8FArOotjUFiVPrJzDV7RqrxIHHzVWoA8tj37%2BevrlRxBAqnvQ0FiMUx2cFkBIR%2FtyNznJKMSQZp5MjE2oay1UKnA6nQjaTF8UU0oRWc4r7Kocs9pfcUwgBfoxD3mrUi27mlN5YdA4TLpUZs98Yeu69r6z7cFAnT3E%2BWN2Qhx%2B3rfUlzcRHzHKjfHz6lMiGnQpJkXs16kBYPAoHWpJfk%2Fp8FV%2FjRmY1R2Hx%2FC%2BDv69tBohb%2FuWxigXJtYvvF8fvop7xjyN2%2B3pP%2FQXub%2FGKWnZTHrrzvVYDaBniKPd79OAzsYFLaApoySApUW5sML%2FGzckGOqUBP85Hjoa9dBZ4rlx8BdtjANoEkGvmETAO3FzxGLxwanhyewtc%2FTmAvSE%2F1L2ZLQ1wrJK5ZLvOFFxuZHIak4lAWYxVI6lX7N3XPL2SlOWojeuX6pf91a3J4uITAv1yZPkEHjcnHBnO0r%2BSYho2KHXSTOSGDI5Y%2FP%2B4UwckeF61f3PB2KJg6ur%2B%2BqHmuq88JEfj7KSQtgBtwRQT7VQc9BIGeRInqS7K&X-Amz-Signature=5393330b2eb84a410d9421c8cddd7e9ee7171c6f24c68760bf0d6ce76d112476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


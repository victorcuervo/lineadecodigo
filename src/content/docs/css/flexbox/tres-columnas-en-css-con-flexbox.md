---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVWINU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Wfml3YOgUR1pRds3LlkPVUdhgh3Vr6mSGXTugT5oKAIgAXNwz%2BoJ0gYZ16P9GcMNcajn8p9akW3tAMWW5GENCkUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIQ%2FR22Je13rRBpkTCrcA8Nln7Gs%2FAX%2FAVtriQrJS7Rdu7c58avfKcYjJYuRwbQLS3WQzjjwtPgTvoWsHXhimRsskwPLOmQBhvtWILLNTpA0aR5MqnEKtKs62RMSZ5wtpk1wyhD0dXyiGFO47%2Fke2X4afE%2F6%2BLG%2B2xOyp3nyGfjnl%2Fu766NFPBGZ1imhZjnpIkOnZK%2BdY1rPWWU9kGM3zFH0P%2FfNJB4GcM8WeBtAvzFwLHsGD8%2BvHx02UvXxOYM1LVoVGexODzLjy8ILjx5gqU1L6193ECz%2FZXa5kg1MtTtLYv4btFu%2F1V2L4gFsG4Xfnp%2B6aQ9fKNjUULvC5Fe0k2QLsl4xjNqYxEJVVpWIrNiCA50Eo6cHv5v%2BsMGOYCf%2FRaYh9sn8WG%2F7%2B0vXxylH9yFIlrTVsu5OQL3CDr%2FDvIYKCQP8MnVXPq1BedfwFvi9MQbRuJtvU8SOhTAzEzn1pR%2BZiUExfnYzT%2BEGRyPwiPzB9RrcmFJwJ3T6ybpgk2A0VLxB0TwkTiaDpV7mDjWL4Gf0jIB58MTErY8sWLqFHh0sXwCoKZm99tDtjOxE57vUdwd8B5EwJ4jjpEqX4Vs5Tog3arA62E5tu9pB7CV1PerLsWJImf7kd%2FjCG9tkwG8Ohp2h305jeBFjYAl8MIStyckGOqUB0ZkoxHM%2FGtRQQtVz%2BkNMt6WrYIE6habuggO3WMOwZZJuq1IosAwTg6djJdIS5mWuzF6FGWeaCO23O7MFrqEg8fW7c3tnhBboxPvi9CFHRdlmdxgNALxuEKxvXqiRSiU8ReCj0Zyf0ZV5%2B5UBSU6og418ctVp3jVbuWGmOlsw3pyfjiB%2BP2suBdWtmTc8Foe5cjHFvlEWCKdNUE%2BKCZVl19Q3mU6Z&X-Amz-Signature=3c1f1a49806c72e28e40e609e0102b5f26fbb26394f71f5991fcfdf63ba18227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVWINU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Wfml3YOgUR1pRds3LlkPVUdhgh3Vr6mSGXTugT5oKAIgAXNwz%2BoJ0gYZ16P9GcMNcajn8p9akW3tAMWW5GENCkUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIQ%2FR22Je13rRBpkTCrcA8Nln7Gs%2FAX%2FAVtriQrJS7Rdu7c58avfKcYjJYuRwbQLS3WQzjjwtPgTvoWsHXhimRsskwPLOmQBhvtWILLNTpA0aR5MqnEKtKs62RMSZ5wtpk1wyhD0dXyiGFO47%2Fke2X4afE%2F6%2BLG%2B2xOyp3nyGfjnl%2Fu766NFPBGZ1imhZjnpIkOnZK%2BdY1rPWWU9kGM3zFH0P%2FfNJB4GcM8WeBtAvzFwLHsGD8%2BvHx02UvXxOYM1LVoVGexODzLjy8ILjx5gqU1L6193ECz%2FZXa5kg1MtTtLYv4btFu%2F1V2L4gFsG4Xfnp%2B6aQ9fKNjUULvC5Fe0k2QLsl4xjNqYxEJVVpWIrNiCA50Eo6cHv5v%2BsMGOYCf%2FRaYh9sn8WG%2F7%2B0vXxylH9yFIlrTVsu5OQL3CDr%2FDvIYKCQP8MnVXPq1BedfwFvi9MQbRuJtvU8SOhTAzEzn1pR%2BZiUExfnYzT%2BEGRyPwiPzB9RrcmFJwJ3T6ybpgk2A0VLxB0TwkTiaDpV7mDjWL4Gf0jIB58MTErY8sWLqFHh0sXwCoKZm99tDtjOxE57vUdwd8B5EwJ4jjpEqX4Vs5Tog3arA62E5tu9pB7CV1PerLsWJImf7kd%2FjCG9tkwG8Ohp2h305jeBFjYAl8MIStyckGOqUB0ZkoxHM%2FGtRQQtVz%2BkNMt6WrYIE6habuggO3WMOwZZJuq1IosAwTg6djJdIS5mWuzF6FGWeaCO23O7MFrqEg8fW7c3tnhBboxPvi9CFHRdlmdxgNALxuEKxvXqiRSiU8ReCj0Zyf0ZV5%2B5UBSU6og418ctVp3jVbuWGmOlsw3pyfjiB%2BP2suBdWtmTc8Foe5cjHFvlEWCKdNUE%2BKCZVl19Q3mU6Z&X-Amz-Signature=bc28242a55871b9a30abac1631c283fceb9b7e87e588c884870156c3ab110362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


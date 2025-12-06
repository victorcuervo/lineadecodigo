---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655354XJ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpyqaUWb%2B13cFHNII71yCpvkAJ4jhAv9voFrpXFRVaGAiEAnMQJtBoczj61RZLD7xAL0uoLk7coV%2BN%2BD2PnGPNCXskq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGS2KEU68V3BU%2FeE1CrcAwKI%2BvHpzxo6Q9KRuDNKkmHTmrAebsTt3fl2Wfd2f9nqTPNPsbwUxOl6JgaaFyb30dNZO%2FRyfNqWou3nudeN8vRccvWy6HC%2B1AcgKx6N1DDt3wzvRDe9b73A0ZdZsZJ0i2ZRMN5XTU3hDUpZjiR6dKglOM15No1Ymn5lJA879YWb%2FT%2BJJViZS1idobfylEyHDVQdwo26RPKeRCR9afA8CwYDw9Yf%2BUZkpfxWXSUiASXaLoT4zhsrneCg2QUBq8ETZW%2B4CUaY4DRRpyDYEnUwtDF5iz6Hbzq1ghuMxpLtty0a3P%2FFU4pkVBY8qQ1fl2gFOe7Nr%2BdeV3kUViWza%2BqUwp3LN4iF44yPWN37hxOaiHxPq%2FTjiZMADUzW40e%2Bk8gXNMuRBK2hOLkoKr1qa7aEz9E3DH9ziR9FEShV7mRmuC8oYar0e43RNDHU%2FI9BGcHvj4mh3bqcUwZnAIt0tVLkUZ%2BIKXRDYr2qrDBN%2BRoMyvUcKpUOpWfiD1WW7JNhI7b6RqVUjVZC3J7uQjeAmugaZDAZYrbIa5v1CtWJ7a0O8N3BsbDQF64jAzsq%2BiSaYALhzKuAJhzgwZtXPZdCQfx6VPSW91IUGi810vuEK6FXvB3mCJzty%2BjI2EoInEYzMKOnzskGOqUBIZDw353tlivTSx64xzdi%2F618Ci34wwuM36QT47Vg%2FXZmuzNo0up76Orj%2BJR6fMBFw3bg8OeQSVVhhS3jEX8h07w3BY9MVY%2BkCYWhIsGxYfmQNf%2BmRJmTKzcm5UIAbTXkMBMnUL5r23fUwLgBG03Sr7TVZIHXy6BUqtYFJQtzUM8k1UjpLUrxwADg13LRB95%2BG6qtiOz4V4%2B38olVDhjoEpuhZ494&X-Amz-Signature=2d82ebc59d673793c0ccc5a1ee6407a0fa8bb29ffd266c5184034d4c2a5af9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655354XJ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpyqaUWb%2B13cFHNII71yCpvkAJ4jhAv9voFrpXFRVaGAiEAnMQJtBoczj61RZLD7xAL0uoLk7coV%2BN%2BD2PnGPNCXskq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGS2KEU68V3BU%2FeE1CrcAwKI%2BvHpzxo6Q9KRuDNKkmHTmrAebsTt3fl2Wfd2f9nqTPNPsbwUxOl6JgaaFyb30dNZO%2FRyfNqWou3nudeN8vRccvWy6HC%2B1AcgKx6N1DDt3wzvRDe9b73A0ZdZsZJ0i2ZRMN5XTU3hDUpZjiR6dKglOM15No1Ymn5lJA879YWb%2FT%2BJJViZS1idobfylEyHDVQdwo26RPKeRCR9afA8CwYDw9Yf%2BUZkpfxWXSUiASXaLoT4zhsrneCg2QUBq8ETZW%2B4CUaY4DRRpyDYEnUwtDF5iz6Hbzq1ghuMxpLtty0a3P%2FFU4pkVBY8qQ1fl2gFOe7Nr%2BdeV3kUViWza%2BqUwp3LN4iF44yPWN37hxOaiHxPq%2FTjiZMADUzW40e%2Bk8gXNMuRBK2hOLkoKr1qa7aEz9E3DH9ziR9FEShV7mRmuC8oYar0e43RNDHU%2FI9BGcHvj4mh3bqcUwZnAIt0tVLkUZ%2BIKXRDYr2qrDBN%2BRoMyvUcKpUOpWfiD1WW7JNhI7b6RqVUjVZC3J7uQjeAmugaZDAZYrbIa5v1CtWJ7a0O8N3BsbDQF64jAzsq%2BiSaYALhzKuAJhzgwZtXPZdCQfx6VPSW91IUGi810vuEK6FXvB3mCJzty%2BjI2EoInEYzMKOnzskGOqUBIZDw353tlivTSx64xzdi%2F618Ci34wwuM36QT47Vg%2FXZmuzNo0up76Orj%2BJR6fMBFw3bg8OeQSVVhhS3jEX8h07w3BY9MVY%2BkCYWhIsGxYfmQNf%2BmRJmTKzcm5UIAbTXkMBMnUL5r23fUwLgBG03Sr7TVZIHXy6BUqtYFJQtzUM8k1UjpLUrxwADg13LRB95%2BG6qtiOz4V4%2B38olVDhjoEpuhZ494&X-Amz-Signature=43c2bce075d589c335625f030b4dc6071f81a8dbcbdd976ee7d7ebe1912fd1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


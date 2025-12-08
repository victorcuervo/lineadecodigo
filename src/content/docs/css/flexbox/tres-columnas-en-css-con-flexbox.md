---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMVS7G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7OkC7F%2BCYZ3VgIFL8FD0w%2BKroDSB90ZhaRps%2BcRT4WAiBo7jBM9da0ODXsFITF4sfSYPIpcsUiZJzSxNuHKR6C1iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoi0SUpM9315TPWvKtwDdpxXAGj0lX1cby9Ljxh0Sj%2FqSOyicfHQ%2FqDa9GM1Y%2BSw7pm2PxEJTxZXg8kb1TsRUAqA3DHa3DLpwh%2FB7JUG0qhWj9e5W%2BgHqjqJwUL5WtARmpxVAZN3Iyp%2FTDIys5JJg%2FQOeFgTxcjG3Mzbutj64spZAc%2F%2BJou2SCP%2Bpaf2D03OWxX2ajjSnb9ldXV4ugYnbD8QxDoFWiRZXlJubqGtYSa0Svq8oaMXcRTjg8ieoJyUoY7PN0BlNXpT8SoQml94OoXAwcQRr8ZrrkLBw8X9JAocXCDvLC356NP6YUNon6QdxWkMS6TS8cFmnpbRqCtiK0cWVHSZW%2FxyE%2FiH8f667V55ZzRXNwU8hYwICeMr%2FLCpSMlswjLM4qgdRB5yopPk4D3qtGLJ%2FkJWEsYRqRGA2E%2B91Uka9GpW0ldYPthL6csM4Od%2BnxJL8d3SLjqhiTCh9uqld2v%2F%2F9Cki2P1E3ivhiw9vjweVaZjE83iA2POcZ%2F2OGeTjyCOdnm%2F2Oi24Mi6VKmVSJVOhdXy7CzwzGh%2F7kTFxwXOmz1Apf1Gu3qI7OT%2BEBbfNAuzcwBQQbCIloeiWkrAsHRQMR36aoEYt5lXKn%2BzPsEwII1gs%2BYLWMpRjsMDM4SGr9WmBraIq%2Fowju%2FYyQY6pgHLjuAbaeTlBUQUaj7AQK2p9MVGLI8R9hQuhl7K2bHER%2F%2FvL5aNR3yKRDCv%2BLwiKcgG3EaEvHqiFioPJnMDfqvlHvDSbuVGvv71q01d1HcFcg54Q%2FR13%2BkT2Uzobl73WZLfvOEl3TjL6pFHmlgtSfsZ6h9GZ37AKpbVtYKE7x2MYdZQ3lk2Lds5d%2BeUR4dn60cPQyiqhBHGhzFpCsP%2FpZL4lbpWjHa5&X-Amz-Signature=21a1e116c5891a36da840a0748e1cb9522b5338978f0d362edce592f207470b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMVS7G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7OkC7F%2BCYZ3VgIFL8FD0w%2BKroDSB90ZhaRps%2BcRT4WAiBo7jBM9da0ODXsFITF4sfSYPIpcsUiZJzSxNuHKR6C1iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoi0SUpM9315TPWvKtwDdpxXAGj0lX1cby9Ljxh0Sj%2FqSOyicfHQ%2FqDa9GM1Y%2BSw7pm2PxEJTxZXg8kb1TsRUAqA3DHa3DLpwh%2FB7JUG0qhWj9e5W%2BgHqjqJwUL5WtARmpxVAZN3Iyp%2FTDIys5JJg%2FQOeFgTxcjG3Mzbutj64spZAc%2F%2BJou2SCP%2Bpaf2D03OWxX2ajjSnb9ldXV4ugYnbD8QxDoFWiRZXlJubqGtYSa0Svq8oaMXcRTjg8ieoJyUoY7PN0BlNXpT8SoQml94OoXAwcQRr8ZrrkLBw8X9JAocXCDvLC356NP6YUNon6QdxWkMS6TS8cFmnpbRqCtiK0cWVHSZW%2FxyE%2FiH8f667V55ZzRXNwU8hYwICeMr%2FLCpSMlswjLM4qgdRB5yopPk4D3qtGLJ%2FkJWEsYRqRGA2E%2B91Uka9GpW0ldYPthL6csM4Od%2BnxJL8d3SLjqhiTCh9uqld2v%2F%2F9Cki2P1E3ivhiw9vjweVaZjE83iA2POcZ%2F2OGeTjyCOdnm%2F2Oi24Mi6VKmVSJVOhdXy7CzwzGh%2F7kTFxwXOmz1Apf1Gu3qI7OT%2BEBbfNAuzcwBQQbCIloeiWkrAsHRQMR36aoEYt5lXKn%2BzPsEwII1gs%2BYLWMpRjsMDM4SGr9WmBraIq%2Fowju%2FYyQY6pgHLjuAbaeTlBUQUaj7AQK2p9MVGLI8R9hQuhl7K2bHER%2F%2FvL5aNR3yKRDCv%2BLwiKcgG3EaEvHqiFioPJnMDfqvlHvDSbuVGvv71q01d1HcFcg54Q%2FR13%2BkT2Uzobl73WZLfvOEl3TjL6pFHmlgtSfsZ6h9GZ37AKpbVtYKE7x2MYdZQ3lk2Lds5d%2BeUR4dn60cPQyiqhBHGhzFpCsP%2FpZL4lbpWjHa5&X-Amz-Signature=07f735c00a56d7491a6a5351bcaa282aa3c74aadefdffb980b409f3c7dcb06e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


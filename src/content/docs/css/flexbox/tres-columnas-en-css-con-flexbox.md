---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVKRHLF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5TP19ipnRp7vJD2kkVwyeGDxpaIcMq1zJb1hqPZyIIQIhANWM4%2FVdIR3Vao3dA9EpOXJhe9Wpb3GT%2Bne4QULDmBB9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8jy6X6onMxu8XMSkq3AOd1lfhgzhH8XYEh6QGpLgTpLJxJatpMHV%2BDZCJOep0YNwbMfEo5YKb2RK97GPu9FcnmPY3XgqryNMgUIH5Fsqbo6DiQT27pljp0Q9u7TFRMSztilNhZx%2BNE3zePTJvsGAarFDg6oxog%2FGZ6PtJLkmiT1gxIImB0yPP2F4Ncxa3S436S9jSXWurLFjyIWTIixRyGMnXULcbjInky4sNHVmYVSaxIRZsdTuQz3ZNPUJnei2UE9ZRZ3b0NlUICxc6BxEqzBgHfLXIqLvoTyVaLFY3j6bswGJ5TATkAUb8zNja6WTtVkpGRIWd2s2FBaTcd0%2BThputIgDVQbZN42k81kzS06dD9fmdKNuXoRTJ93wOiYRKBLYYovmv6CLBYwMhunrC8rsY%2F5n0LCnAMzbcr30HbPaD27K4Z%2BCZZ9w5dkg8YWnYHUWRSC1JPBy%2FFC0c8S5XqoFQOMHjhVcIc5C8yyhE70MQcBKGb7OzJNEIN7JbFXEZRNYgv1TADYWvECBH6xF0C8Tk8OYjIGKpKUVhHMklhZfCTuNud7Gi0CZ5%2FK%2FIRxuenuMyDbdebViNOPywo2MIcUqptOMUtNJGiudg194LtREiFsMG%2FMG7LUSjXcUUT18ZaxbCW%2Bjf1TOzfzD2odjJBjqkAX1qE0QzMEo8o9IKmY524VPjANeM%2FGrosJzsbOtllpROT3svecnVhYnpCgry%2B4qqBOZavkDjefAss7Ahj6Qtr0d2lsExoGwCAMwAj5tIVapwxCp0r0sD%2FeAM77ANc3DG5xRlDbUNLLWsBp2%2B8etPl%2F4PowtwaAJsVq9p%2ByjAU5gnhPJV3cul0i0txLcdB8%2BvNWvcn5SpkWp%2FrweG66skiU3E%2B%2BrW&X-Amz-Signature=a601c9de13ee7ba61a7a66a866fd235bfff938c1d3ec4f8e2eca6444212214c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVKRHLF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5TP19ipnRp7vJD2kkVwyeGDxpaIcMq1zJb1hqPZyIIQIhANWM4%2FVdIR3Vao3dA9EpOXJhe9Wpb3GT%2Bne4QULDmBB9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8jy6X6onMxu8XMSkq3AOd1lfhgzhH8XYEh6QGpLgTpLJxJatpMHV%2BDZCJOep0YNwbMfEo5YKb2RK97GPu9FcnmPY3XgqryNMgUIH5Fsqbo6DiQT27pljp0Q9u7TFRMSztilNhZx%2BNE3zePTJvsGAarFDg6oxog%2FGZ6PtJLkmiT1gxIImB0yPP2F4Ncxa3S436S9jSXWurLFjyIWTIixRyGMnXULcbjInky4sNHVmYVSaxIRZsdTuQz3ZNPUJnei2UE9ZRZ3b0NlUICxc6BxEqzBgHfLXIqLvoTyVaLFY3j6bswGJ5TATkAUb8zNja6WTtVkpGRIWd2s2FBaTcd0%2BThputIgDVQbZN42k81kzS06dD9fmdKNuXoRTJ93wOiYRKBLYYovmv6CLBYwMhunrC8rsY%2F5n0LCnAMzbcr30HbPaD27K4Z%2BCZZ9w5dkg8YWnYHUWRSC1JPBy%2FFC0c8S5XqoFQOMHjhVcIc5C8yyhE70MQcBKGb7OzJNEIN7JbFXEZRNYgv1TADYWvECBH6xF0C8Tk8OYjIGKpKUVhHMklhZfCTuNud7Gi0CZ5%2FK%2FIRxuenuMyDbdebViNOPywo2MIcUqptOMUtNJGiudg194LtREiFsMG%2FMG7LUSjXcUUT18ZaxbCW%2Bjf1TOzfzD2odjJBjqkAX1qE0QzMEo8o9IKmY524VPjANeM%2FGrosJzsbOtllpROT3svecnVhYnpCgry%2B4qqBOZavkDjefAss7Ahj6Qtr0d2lsExoGwCAMwAj5tIVapwxCp0r0sD%2FeAM77ANc3DG5xRlDbUNLLWsBp2%2B8etPl%2F4PowtwaAJsVq9p%2ByjAU5gnhPJV3cul0i0txLcdB8%2BvNWvcn5SpkWp%2FrweG66skiU3E%2B%2BrW&X-Amz-Signature=4cb8123b0a183c9db4f0262006ea6c568912a757e4ba1b08264c10205a65866c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


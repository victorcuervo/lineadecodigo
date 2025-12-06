---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2IO4IF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHWUXNZFBtvxH3m2xLQsQKGNZgN%2B1jYu8HSNsPqTb5BgIhANMvQuBWygTBVMbiBq%2Bcp6DeJhHQ%2FAUYB9H7Vx1Cda2yKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTuFtQ2S708N%2F85OAq3ANNpNQjyzgyQi5M7LmGMkoOjDfRKF37a3bZQOUQM0EzwwlhjbY9dRqw57bY9dFRjUjmnK4d1WItq1dtw2Evy5jMQMV5sXV6q8Prx2IvfZ5vz2fQdvSfSTfe56o5JnPE%2FSQWRpHxqI%2Fha59lNkfbe1AD3MxpYhw1SO47678JjLghpichR9E7QWWJUFALtF4XJGAW79WbMU7nZmX95Ru3r90ubdospJBQ3P%2BTVQnxbIVdH8pn934WoBGNl43XXiAwwB8e7YAUqVtiThyRN0mxeYfwfNND0gfw73XEqxF%2F%2BfGhIpL5GAkmjQ705M%2F1f2pbeDis3s9Yt7ZvvcO%2FJ2kG1VBUfTSJw7RgiKZalnk4A%2FCXqibgYGN80q%2BiVy0QYNCtOASjcCbCRVwZv0JLqqeojEqX3z3btGMmqPH2yXQMDhjpA%2Fln97gbS4evG5r%2B1SNoBUUcj2Z%2B874SD0Ue%2BFgpSttAZvogoAJm37DNVWUw7xIzARb5%2FON%2FECEX%2BK8GKaRRu5YxCOEQXm340UMfv2cYOr5vz%2B8%2FWkoeVbB1lFSaxVCWGuEGg00%2FvFfWmZwYMF7KGIIP55yCuiHk0Btdl%2FpiJXIvvUS6iQEFvF%2BxknY8lMKvfHCZEptUPYXCtEUqizDkptDJBjqkAa4yBZEamaQ41FQYIsT%2FRiu0SAt1H5sd2Vd5E8npEWnq%2FaZD8m2ttwcwKVao60481m65YRSvZrhIIPfOjuV9uptA06mdSSWi7zkTLdwLm6vXll6E%2BuyEaN3HNUDf4Js7LZZKphiiABXANbIPMSZ0Z%2FSCyBjiu9n1wqrFQx758AKXBv9MAASapFynNNsDiAO5jAyZY12b%2B9UjawpS6SrEG8nu%2FL95&X-Amz-Signature=eebd491339d849b2bc60f90595affa6442449e732e02d3d640db2709704e5816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2IO4IF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHWUXNZFBtvxH3m2xLQsQKGNZgN%2B1jYu8HSNsPqTb5BgIhANMvQuBWygTBVMbiBq%2Bcp6DeJhHQ%2FAUYB9H7Vx1Cda2yKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTuFtQ2S708N%2F85OAq3ANNpNQjyzgyQi5M7LmGMkoOjDfRKF37a3bZQOUQM0EzwwlhjbY9dRqw57bY9dFRjUjmnK4d1WItq1dtw2Evy5jMQMV5sXV6q8Prx2IvfZ5vz2fQdvSfSTfe56o5JnPE%2FSQWRpHxqI%2Fha59lNkfbe1AD3MxpYhw1SO47678JjLghpichR9E7QWWJUFALtF4XJGAW79WbMU7nZmX95Ru3r90ubdospJBQ3P%2BTVQnxbIVdH8pn934WoBGNl43XXiAwwB8e7YAUqVtiThyRN0mxeYfwfNND0gfw73XEqxF%2F%2BfGhIpL5GAkmjQ705M%2F1f2pbeDis3s9Yt7ZvvcO%2FJ2kG1VBUfTSJw7RgiKZalnk4A%2FCXqibgYGN80q%2BiVy0QYNCtOASjcCbCRVwZv0JLqqeojEqX3z3btGMmqPH2yXQMDhjpA%2Fln97gbS4evG5r%2B1SNoBUUcj2Z%2B874SD0Ue%2BFgpSttAZvogoAJm37DNVWUw7xIzARb5%2FON%2FECEX%2BK8GKaRRu5YxCOEQXm340UMfv2cYOr5vz%2B8%2FWkoeVbB1lFSaxVCWGuEGg00%2FvFfWmZwYMF7KGIIP55yCuiHk0Btdl%2FpiJXIvvUS6iQEFvF%2BxknY8lMKvfHCZEptUPYXCtEUqizDkptDJBjqkAa4yBZEamaQ41FQYIsT%2FRiu0SAt1H5sd2Vd5E8npEWnq%2FaZD8m2ttwcwKVao60481m65YRSvZrhIIPfOjuV9uptA06mdSSWi7zkTLdwLm6vXll6E%2BuyEaN3HNUDf4Js7LZZKphiiABXANbIPMSZ0Z%2FSCyBjiu9n1wqrFQx758AKXBv9MAASapFynNNsDiAO5jAyZY12b%2B9UjawpS6SrEG8nu%2FL95&X-Amz-Signature=e55f62d6b51f2102a66a325f09235285c398b23a202f1f6a66e9f571924983fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


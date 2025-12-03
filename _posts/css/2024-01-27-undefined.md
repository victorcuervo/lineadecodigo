---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5Q6YUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCfn77Tl43QEI0CMWsKgePSOO0mpcbl3cTTc3Qys4B6mgIgEIokW8UWnvfXV%2FrWUrXvlv%2FHnRptnHeE5%2FwXqSsYnekq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNxGCtJ2PQ7HoOyLlSrcA0gTW%2FvEAqJjQ1xY3erkpi5XspIBsoNM2nJWDMcNO52%2Fr6zkwVr8IhrWTghqZ1SEe7fHdMLnNdTrJXO0IExve7g880nFkPvJjp2TOgRMyaRyLdT88YTHMfn96cfhfFOuNfLWlfQjm00Hb6nO%2BKFBQpHZvvnvhr45how7V%2BcGAcXQ005z1r6yUrfkARlA4RDuW71vLscLOjFzzMT4oI3UFSS37rN0HnFVRkaah6HHnrurSHte9YhRmWHJNHzin%2FxnQuC3kxvoWKM%2B0qb3fx8ZZh0QQ7QezoS8k3cYKHFUpvYCN03OROvK9NU62Ild6wFvWn0k%2BuFs4XyD8D4OYHD0HgC9841DOXdyoVO1i4G0yRcpbelvy8HGJv629Zpe8Zq%2BFLtYN%2B%2FJCGFVO6fcTrS2MiePAQRRKZDn5yDSBMeR9UTCTAx6dlYpPa%2FHtOqUgEWjpIYUVFq%2BFptv6wQTKqCXuj64PpaT7WzDhKn1tjgI9XPk4fcyAqR58%2BSTTXhy6eCpbVP3%2BvaRDzICQOkKj4yfgypWRtF1KZytIynYy2TtmuZ6qP4Mc%2B9pS5ba7Pb2sm3Q%2Blf5L7EWZyepxVYUSovp7PzMEccWYMwHCWQAWreARxuTbPErTYtaRwiL8VbbMLWHwckGOqUBpxkfk2BUPOz0nd4x2H6%2ButhnCyYGc58aWTcSJNTq4kIec99ILdzuevBQ%2F4o0yiiCnGIA5npZ2CCiTe%2Fz0qlFQo4lmDdDuN0wtwQWv4OqOQMfJVe7kcHsumDFtD%2Bu4U8L%2F8L3QBiWUymFCbr1Jfx7Kn6voDu7E4Eqi%2BrFzwkSWYd8yYQjWRtGI9JTpZYrPmhpERadDFYF2eScUaZw6lqC4TKA6ld%2F&X-Amz-Signature=0d06acc3e182a6b69a8dfeef04e012c66848d589b7c359637b602dfcff35d748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5Q6YUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCfn77Tl43QEI0CMWsKgePSOO0mpcbl3cTTc3Qys4B6mgIgEIokW8UWnvfXV%2FrWUrXvlv%2FHnRptnHeE5%2FwXqSsYnekq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNxGCtJ2PQ7HoOyLlSrcA0gTW%2FvEAqJjQ1xY3erkpi5XspIBsoNM2nJWDMcNO52%2Fr6zkwVr8IhrWTghqZ1SEe7fHdMLnNdTrJXO0IExve7g880nFkPvJjp2TOgRMyaRyLdT88YTHMfn96cfhfFOuNfLWlfQjm00Hb6nO%2BKFBQpHZvvnvhr45how7V%2BcGAcXQ005z1r6yUrfkARlA4RDuW71vLscLOjFzzMT4oI3UFSS37rN0HnFVRkaah6HHnrurSHte9YhRmWHJNHzin%2FxnQuC3kxvoWKM%2B0qb3fx8ZZh0QQ7QezoS8k3cYKHFUpvYCN03OROvK9NU62Ild6wFvWn0k%2BuFs4XyD8D4OYHD0HgC9841DOXdyoVO1i4G0yRcpbelvy8HGJv629Zpe8Zq%2BFLtYN%2B%2FJCGFVO6fcTrS2MiePAQRRKZDn5yDSBMeR9UTCTAx6dlYpPa%2FHtOqUgEWjpIYUVFq%2BFptv6wQTKqCXuj64PpaT7WzDhKn1tjgI9XPk4fcyAqR58%2BSTTXhy6eCpbVP3%2BvaRDzICQOkKj4yfgypWRtF1KZytIynYy2TtmuZ6qP4Mc%2B9pS5ba7Pb2sm3Q%2Blf5L7EWZyepxVYUSovp7PzMEccWYMwHCWQAWreARxuTbPErTYtaRwiL8VbbMLWHwckGOqUBpxkfk2BUPOz0nd4x2H6%2ButhnCyYGc58aWTcSJNTq4kIec99ILdzuevBQ%2F4o0yiiCnGIA5npZ2CCiTe%2Fz0qlFQo4lmDdDuN0wtwQWv4OqOQMfJVe7kcHsumDFtD%2Bu4U8L%2F8L3QBiWUymFCbr1Jfx7Kn6voDu7E4Eqi%2BrFzwkSWYd8yYQjWRtGI9JTpZYrPmhpERadDFYF2eScUaZw6lqC4TKA6ld%2F&X-Amz-Signature=d87234842d82a6e3f55e09836ef7b55c43771261dffdca4a0337e5575c9262eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


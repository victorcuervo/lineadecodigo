---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEC67DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQHisbfZs6NDAOczmLbs0Li20FTWlet6CvvokBQFiE0AIhANIPfuzbn%2Fn4d2PzmU1DTbNWn3W%2BT3xiGKDzsjJEtT9MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGhNfjfhAOpUfR7sq3ANgnKejuqVa12IKabh4sqp2KW%2B63t%2BV56ADk7XVCWPextrBKv%2F%2Fl25iJLj17oh039ZKhtvgAN5jZ2fs9No6Bm0y9VVzgT5MP0pOzWaPZSmTf8OnkH7XFF%2BgFDNDrrXn9D6SE7Zhj8M4yt%2Fjc9IyJ7n1yCrV3w1VmtG%2FuT0U8G746r17zdpZiGRYNZOdunsIwT%2FE5a9w1jE2PIomq1hTNNSKDVZgqwRUFxYkyAo5Oy%2FL2SrQ%2FM8b2%2FtHBZvYivysNNrdItrnTQ4TEe9Yfp4%2BCvPH%2FR%2BxCzFtxfWY229n8HPobWmrC3jV0zSRLZeQ6nqX5CtlF9vZlrsfmaPTVxK4W899gkryDt5Bxx7Gmass2Ai0y5ch916bTXPRZWsFseYrEw4hieNGGqm7RaG8wo%2B52SCZuWm%2FXESVc3GfsbDl9dN3UStl0ML0ZoECMEOQTJT0mt6C4i%2F1AQKaUnZn3hVIyMW0kZ97aYA4BC11ftoG3e0oChNm92warhMhLjUITWNY1lBi8AKgmXkOP8co9QEyyTa0k%2FMWKoXNkLgsm47lVzxFFCIBkVY%2BoYrujmLLOeAQYvRzeq2cYt%2FKpTylaHEvug4nAIxz%2BQ4aACC3dcXMPjtuI1pALdzOvkIbF0LPdDCvmtXJBjqkAX6gpeu%2BEFLaTL8RO2lYbufYw0zStVI2NLSKrhfhjpE8h4j3nNl3yCDJyAKX8tjZCJTL%2FbPK%2F39LvAi2FLaDldod3y3wAjG4evfX%2B1nzm9g61gIVxak5SphoqJ1cFBB3IjZ%2FiCzKhMa53scQquRGwQVRJHorFCiE3It82TXAn78Dtdy6dYj1RboBDY%2FRrKFTnsFG6tOJUUjaPBLH6ahq%2Blg%2B6xLr&X-Amz-Signature=f3142d53315089f8bcbc82f52fa412fc61414e4f3f36806386c779ebb0dd7598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEC67DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQHisbfZs6NDAOczmLbs0Li20FTWlet6CvvokBQFiE0AIhANIPfuzbn%2Fn4d2PzmU1DTbNWn3W%2BT3xiGKDzsjJEtT9MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGhNfjfhAOpUfR7sq3ANgnKejuqVa12IKabh4sqp2KW%2B63t%2BV56ADk7XVCWPextrBKv%2F%2Fl25iJLj17oh039ZKhtvgAN5jZ2fs9No6Bm0y9VVzgT5MP0pOzWaPZSmTf8OnkH7XFF%2BgFDNDrrXn9D6SE7Zhj8M4yt%2Fjc9IyJ7n1yCrV3w1VmtG%2FuT0U8G746r17zdpZiGRYNZOdunsIwT%2FE5a9w1jE2PIomq1hTNNSKDVZgqwRUFxYkyAo5Oy%2FL2SrQ%2FM8b2%2FtHBZvYivysNNrdItrnTQ4TEe9Yfp4%2BCvPH%2FR%2BxCzFtxfWY229n8HPobWmrC3jV0zSRLZeQ6nqX5CtlF9vZlrsfmaPTVxK4W899gkryDt5Bxx7Gmass2Ai0y5ch916bTXPRZWsFseYrEw4hieNGGqm7RaG8wo%2B52SCZuWm%2FXESVc3GfsbDl9dN3UStl0ML0ZoECMEOQTJT0mt6C4i%2F1AQKaUnZn3hVIyMW0kZ97aYA4BC11ftoG3e0oChNm92warhMhLjUITWNY1lBi8AKgmXkOP8co9QEyyTa0k%2FMWKoXNkLgsm47lVzxFFCIBkVY%2BoYrujmLLOeAQYvRzeq2cYt%2FKpTylaHEvug4nAIxz%2BQ4aACC3dcXMPjtuI1pALdzOvkIbF0LPdDCvmtXJBjqkAX6gpeu%2BEFLaTL8RO2lYbufYw0zStVI2NLSKrhfhjpE8h4j3nNl3yCDJyAKX8tjZCJTL%2FbPK%2F39LvAi2FLaDldod3y3wAjG4evfX%2B1nzm9g61gIVxak5SphoqJ1cFBB3IjZ%2FiCzKhMa53scQquRGwQVRJHorFCiE3It82TXAn78Dtdy6dYj1RboBDY%2FRrKFTnsFG6tOJUUjaPBLH6ahq%2Blg%2B6xLr&X-Amz-Signature=aa58e3021996ef27997dbb8324d1ff00a5ea9b31e85a3543a3ef0e59e9433014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


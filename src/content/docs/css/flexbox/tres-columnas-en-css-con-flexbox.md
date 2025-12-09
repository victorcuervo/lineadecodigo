---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLOBCYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCihye8PkUL%2B9ZBNbg4xGvb%2FvsJm5W6FhVLKs%2B62tTODAIhAPPPSYuQe2NiJD%2BhR4FwqeecO5Stxsr0%2F2qnsEebbqqbKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRpsIX%2B5Lxw30TTckq3APq0BWkfOOehEtn2%2BRV%2BMo917%2F48nIOoAcxtYXqTB83NW5N9YW5fane3mCLNy8itwoWkQaBPUIvREyn7VKiyG1wumhDNYKNbhh%2FQPlzWEHKERFEyFLo3pqaQvKBd874G9MS4OabyIEYiaMuDdzQBVHcoCjezvlzqhIERhqyw4k7WstHeUgUiiWbUdSBvLOnHGySChacysnISiMw1o5FkBVKl%2FUtZr91l0neYp6oK%2FbrvJcZJzzs%2FOic9LUyl704txhVdHA3JK946p8S9EULb%2B1DHpCKu%2FOKp85luoZ5DmAKbh7g%2FGuKIt75obl26091vySu5W0y8qnZ%2BWCgz3rNkzkytweAVeuCecbyaw7%2FrQ7o90obmfot8zCzQdILWO9vExaZJvGfkyu99xylSnqekBs7PF4L23oNlyo3Ei%2FkjYTFATmG1Edq4ZtCybOpJ1GW%2BbWoNyenOtgnYU1wiVckPmSxzIVEud2%2Fg7l%2B6jJJcEQonZJKxZYQBiFzzVBXrKxz6gWITAzuU1OnLv2oph6or%2BgIYI5uiRjIXxMNPhBcSAMzaTOnLIVaj5xjLbHS6nvKdzU7BpYEybR4kLpNATTAKUqSfZM4ptcN62eGEnJoE0cYUh80FT%2FeAau1q%2BzetTDO5N7JBjqkAaEYkHanrs6crLkuKJ04%2FHGSEYRA9IsjASJwGiz8bj97dYbaOdW2OctGGeZS3w%2BukJ0EIMpdE18gYzhIatTVL381m3TqF%2BZDr%2F1srjezvoJmlTQ%2FAnJXW%2FF7yUxuH1Kd4%2BoBrs3QiYa%2Fy2pQYF1eSsUtxC9uoMbkSZqvnoiCMpLZhOO1edDlTvMPtREI2hOUTWKxk0x79s4qy67xLhZLe0GVUBLT&X-Amz-Signature=e30dacc7032fd20fa294e95b805397413d52a6a19ca2f291e96b1a304d4e3eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLOBCYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCihye8PkUL%2B9ZBNbg4xGvb%2FvsJm5W6FhVLKs%2B62tTODAIhAPPPSYuQe2NiJD%2BhR4FwqeecO5Stxsr0%2F2qnsEebbqqbKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRpsIX%2B5Lxw30TTckq3APq0BWkfOOehEtn2%2BRV%2BMo917%2F48nIOoAcxtYXqTB83NW5N9YW5fane3mCLNy8itwoWkQaBPUIvREyn7VKiyG1wumhDNYKNbhh%2FQPlzWEHKERFEyFLo3pqaQvKBd874G9MS4OabyIEYiaMuDdzQBVHcoCjezvlzqhIERhqyw4k7WstHeUgUiiWbUdSBvLOnHGySChacysnISiMw1o5FkBVKl%2FUtZr91l0neYp6oK%2FbrvJcZJzzs%2FOic9LUyl704txhVdHA3JK946p8S9EULb%2B1DHpCKu%2FOKp85luoZ5DmAKbh7g%2FGuKIt75obl26091vySu5W0y8qnZ%2BWCgz3rNkzkytweAVeuCecbyaw7%2FrQ7o90obmfot8zCzQdILWO9vExaZJvGfkyu99xylSnqekBs7PF4L23oNlyo3Ei%2FkjYTFATmG1Edq4ZtCybOpJ1GW%2BbWoNyenOtgnYU1wiVckPmSxzIVEud2%2Fg7l%2B6jJJcEQonZJKxZYQBiFzzVBXrKxz6gWITAzuU1OnLv2oph6or%2BgIYI5uiRjIXxMNPhBcSAMzaTOnLIVaj5xjLbHS6nvKdzU7BpYEybR4kLpNATTAKUqSfZM4ptcN62eGEnJoE0cYUh80FT%2FeAau1q%2BzetTDO5N7JBjqkAaEYkHanrs6crLkuKJ04%2FHGSEYRA9IsjASJwGiz8bj97dYbaOdW2OctGGeZS3w%2BukJ0EIMpdE18gYzhIatTVL381m3TqF%2BZDr%2F1srjezvoJmlTQ%2FAnJXW%2FF7yUxuH1Kd4%2BoBrs3QiYa%2Fy2pQYF1eSsUtxC9uoMbkSZqvnoiCMpLZhOO1edDlTvMPtREI2hOUTWKxk0x79s4qy67xLhZLe0GVUBLT&X-Amz-Signature=80dcd0e854f51b4191c6431b4feaf10f1ffd85c865238dcf9111a18357dfd8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


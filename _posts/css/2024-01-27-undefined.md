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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJWQGO3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD2q4Smm3PG047b7HX2G0QYUo9WopV%2BIj5XMZPmyuAJfQIhAPasYB%2FR9p25DVsxDEOW63ryMseysGKD58xHzCbtrxBXKv8DCCIQABoMNjM3NDIzMTgzODA1IgwvDmelmSHUsrbPZN8q3AO%2FF0AHBhOi4hQf3qiuSj2gx%2B3L2sVKrTOGrj2f9fI2DWbjKW4GwPNWTb3m1felNb%2BaMcXpKLSwdBQJqjbZG1Jy9FLbdz4gthtxOb%2BdCbi3Y9fTCNXOecc0VzZ0Hy8hiHBQogdyrnefNo5fZu%2BfReGQqPSiz%2ByFWJLmaS6kcCyl2CMRp5Rw524fHOCE2AJnUGY7bcRYgAMpkoratIyQoRZjg0QhJqjf5cRgaMQuR80gNYjhLRS9%2Fojpq6jsxL63HxsXZ91SWQ6hmfr1p0ocDbeLqynmT4ift903XkMBDOoK6pEt7LeQfLjkyuuQE2QDy8bQANri3lT2bjUtBkHrv0dEfUFWHMpaTqSKxKss6vCBlYXVeEnX7YxrYag3sep26J0KVLbYg7PVVR7s7Lliu1c1qOYo2%2FX%2B8O2FR06Ne63SVdNWq0QlkXzitzMUl6gVJ6SUZAryHdViZHhL7Phy64JWv85cekRQ8tjTbMqNwtcICSDcgU1Mgx3%2Ftpvt096m8nuudFgcWwLrywaZgD1rClpD5F5chLvLaO6DOPPXxJLAJLCX3rhDVfH7lZD0Ktj7KUbbxh9ul0fZT1Xsuwo%2BryLGZxrSAtrl3B0mne3MlZTAbfagKns2dD%2ByTmJ51jDZlr7JBjqkAV7XZbgFwE56R8%2FwhrAPP8s%2FUfinun7nULivLP8qmYMyIykxwIpGeJGmPGM8Qxk0DhUgt261esAF3p6%2BF6bwHvKQSS%2BlMcZfqQ0i%2B4%2Facjz6ZLjlnZPt0yoXkvRvmprgGJPCQGafoPkXd3zVp7Q7l7V9PASfCrBaKx6tJbscHnc%2FhyYaCuiLCS%2FW4mFc08OPpyFHaR7f1XlaEUa%2B5NM1wDqhhW5x&X-Amz-Signature=4502e96d2cc90438355a2330dfeeb1943e5a7b66ae5519d54aa1967a67feb3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJWQGO3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD2q4Smm3PG047b7HX2G0QYUo9WopV%2BIj5XMZPmyuAJfQIhAPasYB%2FR9p25DVsxDEOW63ryMseysGKD58xHzCbtrxBXKv8DCCIQABoMNjM3NDIzMTgzODA1IgwvDmelmSHUsrbPZN8q3AO%2FF0AHBhOi4hQf3qiuSj2gx%2B3L2sVKrTOGrj2f9fI2DWbjKW4GwPNWTb3m1felNb%2BaMcXpKLSwdBQJqjbZG1Jy9FLbdz4gthtxOb%2BdCbi3Y9fTCNXOecc0VzZ0Hy8hiHBQogdyrnefNo5fZu%2BfReGQqPSiz%2ByFWJLmaS6kcCyl2CMRp5Rw524fHOCE2AJnUGY7bcRYgAMpkoratIyQoRZjg0QhJqjf5cRgaMQuR80gNYjhLRS9%2Fojpq6jsxL63HxsXZ91SWQ6hmfr1p0ocDbeLqynmT4ift903XkMBDOoK6pEt7LeQfLjkyuuQE2QDy8bQANri3lT2bjUtBkHrv0dEfUFWHMpaTqSKxKss6vCBlYXVeEnX7YxrYag3sep26J0KVLbYg7PVVR7s7Lliu1c1qOYo2%2FX%2B8O2FR06Ne63SVdNWq0QlkXzitzMUl6gVJ6SUZAryHdViZHhL7Phy64JWv85cekRQ8tjTbMqNwtcICSDcgU1Mgx3%2Ftpvt096m8nuudFgcWwLrywaZgD1rClpD5F5chLvLaO6DOPPXxJLAJLCX3rhDVfH7lZD0Ktj7KUbbxh9ul0fZT1Xsuwo%2BryLGZxrSAtrl3B0mne3MlZTAbfagKns2dD%2ByTmJ51jDZlr7JBjqkAV7XZbgFwE56R8%2FwhrAPP8s%2FUfinun7nULivLP8qmYMyIykxwIpGeJGmPGM8Qxk0DhUgt261esAF3p6%2BF6bwHvKQSS%2BlMcZfqQ0i%2B4%2Facjz6ZLjlnZPt0yoXkvRvmprgGJPCQGafoPkXd3zVp7Q7l7V9PASfCrBaKx6tJbscHnc%2FhyYaCuiLCS%2FW4mFc08OPpyFHaR7f1XlaEUa%2B5NM1wDqhhW5x&X-Amz-Signature=0c34a4fc219be7a4cc67793c174aeacedf8e9c97e48adef7bed27e7bdc0b749f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


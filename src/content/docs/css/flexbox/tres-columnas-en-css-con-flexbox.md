---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YAWB2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE%2BYf%2FAWhiP55xNifclBFavrdqo8AAZtXAc3LKJFgTwAiA%2FCG4l87xMB7%2Bvz2HmqIEGxOvCX2MajerWw203G7NQAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufejIdwdFJhenac8KtwDKk1y%2BHkUS2%2Bi2HDXPCj3DrTi%2B%2BLOmNYT4pHaFvfFrRyR%2FTb%2FbwR0K7NLZqeofO%2FrTquaYcJdbScpF%2BkHF%2FO1Q0a%2F%2B2NbHjF5hjbsjqFOPD8bBkaR9sd17qu84m2DdyWRjfOKW6wbCeRih%2BlK3ycw4C8Bb%2FG7SVJkYhTOmffOqyAkWLrQuIJgEcEMSEkttOX6lPcqnU5M1kYnC7GkN2Lh34ZBEkP2cMUcQnjs41%2B0b3drHl%2BYyBAdz66GsLv%2Bl3BVHR13v1Efzra7pazuyQr5S72ab1qg6l7ipwLzVzmClJHRDad%2FwzAAgf2POZiogdpduZzTdTWRdYJ%2FlufbK7Cl6oflSoBxTzIkN%2BW4bQy1yaDsZ1p835ftPNXek3tho5igPtczXp2JgWABanK8YROaUCkkGDdVNjG0ViW44wd2YBP1k4t93CgPlLzeWEHHDeNZeE%2FHcvOlCzaVQ6dVS2erIQkTM9tb8hLNbC0Z2YVtLZTSBqaFtEgOjLtmDdMdeK2EfqMuUh%2BGZc49JkQhwa59%2B5y9rdzCqxVdVSe2zTHZ9RD%2BPMETlXP5dJIqOtl2z8bLz%2FJp1Xo72MLl6lZ7%2FKOHfQ6pNcksK3iiNSt5S9g3VsFgx%2BHExJi5NOCZuHAwye7ZyQY6pgGCJZBL0w%2Fmft%2Bo%2FJkId8Hi8vJdBV%2Fh2QgKV2rtJGkPa9%2BxtUkm4s2ZUT5G5uMZ5t5w9lm3YsR9HydMdf4pdIcGnAHFCV1Kym9w9a2nVj7gYLYWnx5e2om56iU5szYJ7CH%2BvCe%2BleINSqfagWb0L7T4zzyn7cFjo9w0xqHu5LiN0SeHnHe00u8jWKX5RoGIlTYxmpZcXItqCkOmFosaxzK9791cYW%2BG&X-Amz-Signature=e4d4d6d23040dc87a58abf2832a5aeec2a1fbd7b8232df5c471677dbc7ae420e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YAWB2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE%2BYf%2FAWhiP55xNifclBFavrdqo8AAZtXAc3LKJFgTwAiA%2FCG4l87xMB7%2Bvz2HmqIEGxOvCX2MajerWw203G7NQAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufejIdwdFJhenac8KtwDKk1y%2BHkUS2%2Bi2HDXPCj3DrTi%2B%2BLOmNYT4pHaFvfFrRyR%2FTb%2FbwR0K7NLZqeofO%2FrTquaYcJdbScpF%2BkHF%2FO1Q0a%2F%2B2NbHjF5hjbsjqFOPD8bBkaR9sd17qu84m2DdyWRjfOKW6wbCeRih%2BlK3ycw4C8Bb%2FG7SVJkYhTOmffOqyAkWLrQuIJgEcEMSEkttOX6lPcqnU5M1kYnC7GkN2Lh34ZBEkP2cMUcQnjs41%2B0b3drHl%2BYyBAdz66GsLv%2Bl3BVHR13v1Efzra7pazuyQr5S72ab1qg6l7ipwLzVzmClJHRDad%2FwzAAgf2POZiogdpduZzTdTWRdYJ%2FlufbK7Cl6oflSoBxTzIkN%2BW4bQy1yaDsZ1p835ftPNXek3tho5igPtczXp2JgWABanK8YROaUCkkGDdVNjG0ViW44wd2YBP1k4t93CgPlLzeWEHHDeNZeE%2FHcvOlCzaVQ6dVS2erIQkTM9tb8hLNbC0Z2YVtLZTSBqaFtEgOjLtmDdMdeK2EfqMuUh%2BGZc49JkQhwa59%2B5y9rdzCqxVdVSe2zTHZ9RD%2BPMETlXP5dJIqOtl2z8bLz%2FJp1Xo72MLl6lZ7%2FKOHfQ6pNcksK3iiNSt5S9g3VsFgx%2BHExJi5NOCZuHAwye7ZyQY6pgGCJZBL0w%2Fmft%2Bo%2FJkId8Hi8vJdBV%2Fh2QgKV2rtJGkPa9%2BxtUkm4s2ZUT5G5uMZ5t5w9lm3YsR9HydMdf4pdIcGnAHFCV1Kym9w9a2nVj7gYLYWnx5e2om56iU5szYJ7CH%2BvCe%2BleINSqfagWb0L7T4zzyn7cFjo9w0xqHu5LiN0SeHnHe00u8jWKX5RoGIlTYxmpZcXItqCkOmFosaxzK9791cYW%2BG&X-Amz-Signature=a9ad708826dd408ef74e1a78a22b1d3ad4249a86fca622acc205334805fcbbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


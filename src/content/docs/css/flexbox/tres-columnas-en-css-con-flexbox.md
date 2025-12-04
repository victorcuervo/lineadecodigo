---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY65E62W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDllnRv4AVHDXORvld%2BImV5aEhVRTDXb1yI%2BBzredb%2FfgIhANDELzserKzP%2Bia5wV7pznlK2Yn6wu77FQrJ1vuA0w03Kv8DCEUQABoMNjM3NDIzMTgzODA1IgwS%2F1G9rD6spHafOm8q3AM07i7cargAjB6LA6XTmgYttMnRcQv1V3AnfY2LJqItQcjl3Ll3EJOG0oc%2FybT2kknRBRW2tKpit4sRG45t6CChZgA9mYGqjDB1Q3BmeNg4UkRToKUkQtQ41cEzbPd7LDcFJojf3hdF5nzS8kqWpeilpgn5lDHXuRAT20bfGpd4JU5bRsssdTs0YtVQBMTMAtlMErVJR%2Ba7KdNivetE3Ko9ea0Vg122868jMGp3DQf3AJK4DN2XFJQ%2F8wPxuhrtGFh81xiqnihViKfzAr27Rss0mNlBOWuCMHJhYuYejfl6KCUwI6AEFP1H7GOlmB3xFRCfi4nr4rFyuoozvVJbdWgwS2e5FP4l55cIkHfo8i9zaMmzho2oMUtlfBjeUp6g%2Bv%2BDJsPnRjTm%2BjyyH4ii1LfkEKFwQTH5%2F1acTpBMXtDUh2GBKkw4xPbI7BWl9wnb09Om7anQGos0JKE9DVP%2FWuit%2FZ%2BGxdpy6w1%2F5j9nIP4S9fL731LnPiUprWMj1RoO%2FJaq76vu8QS%2BHKMezDHzwBKW6RB4xlKQdrYhq9y3ebzaXxW6mSMB0v8Yc5e8FWAjld6xxb7spDVvj3kvY%2B7iE7yEatRyFUVwoipgdfqDTwzx4J%2FyUIkdGGSClR3fTzCa58XJBjqkAUTBU6RPbK%2B3LIff7%2FDB3XretHeKUe%2FKKRWINXgB4sBB2x95rEqLWR%2F%2FHo84g6RDGjRAltgIz8AIbwLk7d%2FDGcilvvbRWSomh3Vu2mNxOvo6A5uS61K%2F0IYuYP5C%2BFFVGVbRNLqzX5lE%2Fnab7SerjMVz6TFYwtxRrKJ7HZANq7k7f4N%2F5aWMlcqcdsnXZMWBws1GgoLzQd7XhxkJ3C%2BNreWy8k%2BX&X-Amz-Signature=84e507e730b636613d2e7ddab694a246384145217728095fc4cc0dce0f2ec6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY65E62W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDllnRv4AVHDXORvld%2BImV5aEhVRTDXb1yI%2BBzredb%2FfgIhANDELzserKzP%2Bia5wV7pznlK2Yn6wu77FQrJ1vuA0w03Kv8DCEUQABoMNjM3NDIzMTgzODA1IgwS%2F1G9rD6spHafOm8q3AM07i7cargAjB6LA6XTmgYttMnRcQv1V3AnfY2LJqItQcjl3Ll3EJOG0oc%2FybT2kknRBRW2tKpit4sRG45t6CChZgA9mYGqjDB1Q3BmeNg4UkRToKUkQtQ41cEzbPd7LDcFJojf3hdF5nzS8kqWpeilpgn5lDHXuRAT20bfGpd4JU5bRsssdTs0YtVQBMTMAtlMErVJR%2Ba7KdNivetE3Ko9ea0Vg122868jMGp3DQf3AJK4DN2XFJQ%2F8wPxuhrtGFh81xiqnihViKfzAr27Rss0mNlBOWuCMHJhYuYejfl6KCUwI6AEFP1H7GOlmB3xFRCfi4nr4rFyuoozvVJbdWgwS2e5FP4l55cIkHfo8i9zaMmzho2oMUtlfBjeUp6g%2Bv%2BDJsPnRjTm%2BjyyH4ii1LfkEKFwQTH5%2F1acTpBMXtDUh2GBKkw4xPbI7BWl9wnb09Om7anQGos0JKE9DVP%2FWuit%2FZ%2BGxdpy6w1%2F5j9nIP4S9fL731LnPiUprWMj1RoO%2FJaq76vu8QS%2BHKMezDHzwBKW6RB4xlKQdrYhq9y3ebzaXxW6mSMB0v8Yc5e8FWAjld6xxb7spDVvj3kvY%2B7iE7yEatRyFUVwoipgdfqDTwzx4J%2FyUIkdGGSClR3fTzCa58XJBjqkAUTBU6RPbK%2B3LIff7%2FDB3XretHeKUe%2FKKRWINXgB4sBB2x95rEqLWR%2F%2FHo84g6RDGjRAltgIz8AIbwLk7d%2FDGcilvvbRWSomh3Vu2mNxOvo6A5uS61K%2F0IYuYP5C%2BFFVGVbRNLqzX5lE%2Fnab7SerjMVz6TFYwtxRrKJ7HZANq7k7f4N%2F5aWMlcqcdsnXZMWBws1GgoLzQd7XhxkJ3C%2BNreWy8k%2BX&X-Amz-Signature=9b4fb4a9217d79fb9ff21fd95baf6ac91554bb2877de2f554156b968242140b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


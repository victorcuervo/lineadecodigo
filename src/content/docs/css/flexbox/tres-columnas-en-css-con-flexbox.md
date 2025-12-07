---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLRY2QX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpBMgE3CkTLspHpP%2FnaFH9dfjxJ1Z7ZnCs1pTwhya8mAiEAyXaWV0yeFvx9FsSu%2FipJwxvk7jLF9%2BRU9UJLZhJqGykqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPA%2BC9oASVMaLtFOCrcA0JKMcpjy6jRpVAm%2FyqCdgW3IdLE%2Fzc3u5p%2BvMTtpdysXpfmE92GWT1Vh%2BAYan1muP%2Brw%2FoRsFiIa41Di4wiv%2FwBxS175ifXkSK5hDzjd5I6ZDfexGUy2XIJgVXJQWghV%2BQ6y%2FpJlTNQma5SVLxhI3xw5J%2Fn9D75%2B8HqievtOZ9wtsJngB0aun2u0EXwlsW7gmNahoXyQtmkgz2BnKQjrijXP%2FsFinsIhUiFWJbQEJCtE6HPdOBy4sR0sIxsiwpDPRNz46iXGX6Q3e8hfq4jS2ubEnE%2B%2BmILoCa5wL3uX6L%2FCrG5GHtYORJP8mG12xA%2FYNnn15ZVDvgrKloO8MipAwUBEm9ac7PUE7fyv0qVE%2BRsSOvSi0ZEdVoEvQXRLIOwtKjhkfc%2Bmnjgcdj%2FI%2BQINjcZn7JpWXT0DSI62XKduv%2BbKKGDStumnjoyTxdjsYoK2YBfKqoOtQN4qHCSBHNLZzvUql8MeMu8Zn0Py5mvjsEHAniplUo9%2BZK5Gr92pvHwALz6vZNBDw3U5UW2QqhDYHfBwcgnUHrGdfNur0PaNlCxBdYx58%2Fp6xMH8vSu2PUGxkc%2BhNdrM533%2FeiOeO4C5VuXz1BeICyIiweg6fVIfpHlvxmBoQxdDiE3k4aTMLO51skGOqUBhy6ohjlIhWgznk296etMxTTvrIE2qYrFdPn5sJ425xihI3Y2wq3pDuDE6k5PY4AJ2nQTbHAcv67Soxy7D7%2B6VS3YiiyTlZ74kjXDn3AV52k5Mwokgug4IZ5ct%2FmvISOQ1Eoxc9bMXwIlILleby4uTOJ25aLrLm%2FmxC%2B7H5QjKXf%2FXndmGL%2BEHSoKVE32OBLs1fARWCaz6jgNtkgdVS6GDIn7u1KI&X-Amz-Signature=5fe939b82d6d33dbd6a5d2b27f4f71db1360d23af41fd84db2fb090a7507a36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLRY2QX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpBMgE3CkTLspHpP%2FnaFH9dfjxJ1Z7ZnCs1pTwhya8mAiEAyXaWV0yeFvx9FsSu%2FipJwxvk7jLF9%2BRU9UJLZhJqGykqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPA%2BC9oASVMaLtFOCrcA0JKMcpjy6jRpVAm%2FyqCdgW3IdLE%2Fzc3u5p%2BvMTtpdysXpfmE92GWT1Vh%2BAYan1muP%2Brw%2FoRsFiIa41Di4wiv%2FwBxS175ifXkSK5hDzjd5I6ZDfexGUy2XIJgVXJQWghV%2BQ6y%2FpJlTNQma5SVLxhI3xw5J%2Fn9D75%2B8HqievtOZ9wtsJngB0aun2u0EXwlsW7gmNahoXyQtmkgz2BnKQjrijXP%2FsFinsIhUiFWJbQEJCtE6HPdOBy4sR0sIxsiwpDPRNz46iXGX6Q3e8hfq4jS2ubEnE%2B%2BmILoCa5wL3uX6L%2FCrG5GHtYORJP8mG12xA%2FYNnn15ZVDvgrKloO8MipAwUBEm9ac7PUE7fyv0qVE%2BRsSOvSi0ZEdVoEvQXRLIOwtKjhkfc%2Bmnjgcdj%2FI%2BQINjcZn7JpWXT0DSI62XKduv%2BbKKGDStumnjoyTxdjsYoK2YBfKqoOtQN4qHCSBHNLZzvUql8MeMu8Zn0Py5mvjsEHAniplUo9%2BZK5Gr92pvHwALz6vZNBDw3U5UW2QqhDYHfBwcgnUHrGdfNur0PaNlCxBdYx58%2Fp6xMH8vSu2PUGxkc%2BhNdrM533%2FeiOeO4C5VuXz1BeICyIiweg6fVIfpHlvxmBoQxdDiE3k4aTMLO51skGOqUBhy6ohjlIhWgznk296etMxTTvrIE2qYrFdPn5sJ425xihI3Y2wq3pDuDE6k5PY4AJ2nQTbHAcv67Soxy7D7%2B6VS3YiiyTlZ74kjXDn3AV52k5Mwokgug4IZ5ct%2FmvISOQ1Eoxc9bMXwIlILleby4uTOJ25aLrLm%2FmxC%2B7H5QjKXf%2FXndmGL%2BEHSoKVE32OBLs1fARWCaz6jgNtkgdVS6GDIn7u1KI&X-Amz-Signature=5c01da138588f97006589d900b583c78c3da0716b4289ebc515772c31630bd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


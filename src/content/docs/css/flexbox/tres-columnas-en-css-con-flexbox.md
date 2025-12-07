---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RB7V5V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjOczttly2E7BnN8PU3fJI850CVUGowony1kuh%2FyOY9wIgH8DT9MvmQziIwJPdXOrH02Zg%2BX3YHk%2BRcyQG0WGWPi8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRJli2hKJpu%2FPdntyrcAwVR2B5xmNcef0A8fNalrrXAthbyzOLmTAHm94zQgTWgjzGHxhe05gixxXktTLRZhV7NeB5XblnK%2FE5mJEDfD9XxB2FLSlKn7axhQ0HE2zMssme90OCwSeDpMIdwKLFDpnFcmy%2FAf%2BtGRswWzcmk7aN1Pdjy1oLIxU1%2BTqwi6e8cJr8OYiy1ev7MuJIm3HUDQ6443m8WzO30FOPEdtHaNSCD9dSbdAocAJ6JlfwLKVBbNSoSLKRGkvbhHI5R2tqr%2FR8m2gqbdzbX5cAjBmhVBeewq%2BmEZfv19neKRDZbRZAfyaGjVGWoBh55iWuTTG1uAoc78XzXgDMe%2FAp1tsFka7SvypcR2KWchp5UdTvddTXWcnJMMlTbPHUX9Lut9Ww1S6M4zsV0LZPxHwrZgnUL5%2FXlTiZUGMXHAedoFgTzR131yYAtTK%2FGuFO5A5RriRocnZZgAyxIolZIMr4iDWjVNs7G2QMD%2BcjILnK6W2D1Ip7jPQe22acTz%2BYCSKMkpcqSQvbkmhk8%2F8lqO3jFrLyVyZNT3sSgu0R%2B8CBhBjK%2FuIBFOdZ6FQOJ1AF3Eqf7w7rQkG9fz04ePqXWGn52ZKCJy8GUIxcwtDK6cbYRRB1TCDyb9hVEb%2FE10mq45wpkMLu21skGOqUB9NngZfEvB80ViCdLlzF2puePOQd4obmZT5OCTzmoFJt7tCLdEwSX7ycUl0ZEiLlvWI4M02oCUrKfpVXxz%2FOi5DrIwvqu4ER2OyNGiIAJa3wX0yR7rWTTMqeJvT%2FuQnIWU7MtnbNmSW1Xx2SiGGJjEDbY6SYLenJqFHmEb7GNDMYZp8ecfA5peOPFFALonzB7ETHH31Gm3yavtXyStQ5tBYzwv%2BgA&X-Amz-Signature=73af720f831828d03dae17bdac0824e73a0a8716e09f61d4bf677774ee4bd612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RB7V5V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjOczttly2E7BnN8PU3fJI850CVUGowony1kuh%2FyOY9wIgH8DT9MvmQziIwJPdXOrH02Zg%2BX3YHk%2BRcyQG0WGWPi8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRJli2hKJpu%2FPdntyrcAwVR2B5xmNcef0A8fNalrrXAthbyzOLmTAHm94zQgTWgjzGHxhe05gixxXktTLRZhV7NeB5XblnK%2FE5mJEDfD9XxB2FLSlKn7axhQ0HE2zMssme90OCwSeDpMIdwKLFDpnFcmy%2FAf%2BtGRswWzcmk7aN1Pdjy1oLIxU1%2BTqwi6e8cJr8OYiy1ev7MuJIm3HUDQ6443m8WzO30FOPEdtHaNSCD9dSbdAocAJ6JlfwLKVBbNSoSLKRGkvbhHI5R2tqr%2FR8m2gqbdzbX5cAjBmhVBeewq%2BmEZfv19neKRDZbRZAfyaGjVGWoBh55iWuTTG1uAoc78XzXgDMe%2FAp1tsFka7SvypcR2KWchp5UdTvddTXWcnJMMlTbPHUX9Lut9Ww1S6M4zsV0LZPxHwrZgnUL5%2FXlTiZUGMXHAedoFgTzR131yYAtTK%2FGuFO5A5RriRocnZZgAyxIolZIMr4iDWjVNs7G2QMD%2BcjILnK6W2D1Ip7jPQe22acTz%2BYCSKMkpcqSQvbkmhk8%2F8lqO3jFrLyVyZNT3sSgu0R%2B8CBhBjK%2FuIBFOdZ6FQOJ1AF3Eqf7w7rQkG9fz04ePqXWGn52ZKCJy8GUIxcwtDK6cbYRRB1TCDyb9hVEb%2FE10mq45wpkMLu21skGOqUB9NngZfEvB80ViCdLlzF2puePOQd4obmZT5OCTzmoFJt7tCLdEwSX7ycUl0ZEiLlvWI4M02oCUrKfpVXxz%2FOi5DrIwvqu4ER2OyNGiIAJa3wX0yR7rWTTMqeJvT%2FuQnIWU7MtnbNmSW1Xx2SiGGJjEDbY6SYLenJqFHmEb7GNDMYZp8ecfA5peOPFFALonzB7ETHH31Gm3yavtXyStQ5tBYzwv%2BgA&X-Amz-Signature=d35f5d084e0535a1220b2de180c140c83dc0acd29a4955615470a9f30e7b8fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


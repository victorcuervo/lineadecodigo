---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLQNMBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYSnj29tClpNDUUiVBOCbFtb%2B4VwESC%2Bw4Dlb5DDyGIAiAjk2psPdEHdK3qTcCKMfYrP9RnlHTOQKWMpPVWUilwHyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmwlXyJgSyQrWtS9TKtwD1QS1h9NZnszGFEIf0oz0QTwZZENb2j5wyICv6FrQDkVglbTc136VgxgbN1d1gjXsgK%2BwgAq9HUVb0tFjmBXZwZYSrSnYXqnVilsi9dg5YfD3a19by61AbrUg4We6fBlaEMj4RbyFJIjN%2FsmtWptrU3r9FSCZ9k0vOfMUoWgnIVsVniHZQWGhffqbp5rW2%2B3k9sYd3FQjPQHBF9tmGpNCKhQMRFHy2tQsF4Rr%2BhQ2%2BGmQmRlGYaSRH9lc0HX4VZysEBdH2v3BfRJ3DAwAN%2FNpXp7xYLsSclfzSh6ll4GftmtIqSh0WMITf2PCI88Ayn6JSIGa7YcY0XA%2BnAULgX7bkPKXmC7ArnbgvUtXegALzX02fxDASQuVL4%2FA8v%2BnTEDH6f2XQEyhYJgABwOD%2FQSB%2FN3KbdphQ%2B88hlKAPK6MUD9DIDoG5QBFaFc%2FcQf1m6pw4bzBvNOiK3HHb0YjtnAK%2BQo%2BOlbSMwIjw3ZLi0IgT4kBFApgN%2BjYkEqRVeyC%2BUQ4FFDVC802ldoDYWLpfKbgx7YY8cEoSifmqMq90%2FtLWXxszo4t9aZccX03H68gjv8ECceMDavm6HzAWMVU0YflOq7b7MhYhgcDqDxa2%2FCj5JZpY3V67aT9seTe5X0w857PyQY6pgFPB3cPEuGvvPEkCBjc0l%2FdM9dStDXFkD2pkrQPEUFdzkvEmJpN9qZd1zo43RXGqoBBj%2B3EycqLZGr3hir61GsVlDRZMaRTtDWcW4QZ065PYSrGiKZ5pNW9mNyKwrNfOHoos7n46YdkwdYjlJWeNzQvgdZuiPfjghUqwRlkDxAfiqXI2ZtvwBwrrIpzXvrxNeCNLxmAT4cwWoz0NzNLX4LivzYitCOS&X-Amz-Signature=c1c2cb6aec9b99c787a451f6cdb9b8031832f325e3225ac5651baea3066b407d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLQNMBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYSnj29tClpNDUUiVBOCbFtb%2B4VwESC%2Bw4Dlb5DDyGIAiAjk2psPdEHdK3qTcCKMfYrP9RnlHTOQKWMpPVWUilwHyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmwlXyJgSyQrWtS9TKtwD1QS1h9NZnszGFEIf0oz0QTwZZENb2j5wyICv6FrQDkVglbTc136VgxgbN1d1gjXsgK%2BwgAq9HUVb0tFjmBXZwZYSrSnYXqnVilsi9dg5YfD3a19by61AbrUg4We6fBlaEMj4RbyFJIjN%2FsmtWptrU3r9FSCZ9k0vOfMUoWgnIVsVniHZQWGhffqbp5rW2%2B3k9sYd3FQjPQHBF9tmGpNCKhQMRFHy2tQsF4Rr%2BhQ2%2BGmQmRlGYaSRH9lc0HX4VZysEBdH2v3BfRJ3DAwAN%2FNpXp7xYLsSclfzSh6ll4GftmtIqSh0WMITf2PCI88Ayn6JSIGa7YcY0XA%2BnAULgX7bkPKXmC7ArnbgvUtXegALzX02fxDASQuVL4%2FA8v%2BnTEDH6f2XQEyhYJgABwOD%2FQSB%2FN3KbdphQ%2B88hlKAPK6MUD9DIDoG5QBFaFc%2FcQf1m6pw4bzBvNOiK3HHb0YjtnAK%2BQo%2BOlbSMwIjw3ZLi0IgT4kBFApgN%2BjYkEqRVeyC%2BUQ4FFDVC802ldoDYWLpfKbgx7YY8cEoSifmqMq90%2FtLWXxszo4t9aZccX03H68gjv8ECceMDavm6HzAWMVU0YflOq7b7MhYhgcDqDxa2%2FCj5JZpY3V67aT9seTe5X0w857PyQY6pgFPB3cPEuGvvPEkCBjc0l%2FdM9dStDXFkD2pkrQPEUFdzkvEmJpN9qZd1zo43RXGqoBBj%2B3EycqLZGr3hir61GsVlDRZMaRTtDWcW4QZ065PYSrGiKZ5pNW9mNyKwrNfOHoos7n46YdkwdYjlJWeNzQvgdZuiPfjghUqwRlkDxAfiqXI2ZtvwBwrrIpzXvrxNeCNLxmAT4cwWoz0NzNLX4LivzYitCOS&X-Amz-Signature=0266e422e5b4edad6e877af4c2c9ae9bc333e9f36de08769c5c8f2fd8371f4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


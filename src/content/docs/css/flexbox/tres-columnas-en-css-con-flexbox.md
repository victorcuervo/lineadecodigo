---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSBIJHH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwnN2n4sg3G2GTXbAUVTsTya1Gowq7t0Fwu5uKaDAngIhAL5X5w03v43fjMl%2FoWgNZRHYA05FBk3SFlilyJo0fLcJKv8DCE8QABoMNjM3NDIzMTgzODA1IgxppYBbBEsFUmqRN2wq3AP5RF63ix%2BhqfqWMdUAX%2Fw4GpptWYAHP9TJtvRmbBstPTeb%2FTzCWwYNAC8oY3DfjTUiYi2pkG6V4bGTfoIGIk8i2vzeFuy97BcdZDrIqLvGAX2kRpaznYlGro3mWrIdCW10IooaOpk1qc4R1GgJ%2B3LjDSGPCvue7NUE3zTMerr1bhAOi2%2FnYJa37C%2FqWTJjH1brUTv%2BPDpnSibQWw%2B28ZJBceIz7%2FBhib0DTyjiunbGYGyeuMr6gKfMm5JzCGJ7n1LbOQbQ5j5YBm7wZj%2BSGvN4Zd5c1A%2BVOU13AYCkzMSfbfk6fO3Fwm%2BJnp%2BHnDf47d5jwcNTtKp1xQQzdqTsK6PpksWXDQOdH7qYoUXdK%2BtGPCcMF0uKSfffbVyQ8z%2Bp8ksh1FxjAengWTNWRtePAPFmFD9EQuIlzCkhfq6eHaiC2ZPALNcRHo0WgM750xdtLL4PtPzmC4cBnYUHcOSqNg0%2BNwa1mtS%2BC2uffoF7cXe%2FxGYW9ucPSC%2FB19jelcazcrvnUl6fihDXrLljuz53RdRwb3DiemnZAFCKbpxTlzNjkHb3KsgoEgAPgL5ynwwqi%2FPHM8r8%2BvnIthX9XaWJHa0K1uG3sVpl%2BzNQksU5O6C7KWHNwnaZbAlfYgXeqjC7jMjJBjqkAeLYql7phjxCV0Hhp23jV689%2Faju1vb12TDoU6GBOATJ8RXyDIOu0Q3rRhcFsD7TlU5TA4vrl1uZqoydedw2bMG4QQP15Y9Ujev6NMLWEnOKI5aGCAdwIv%2FnSYDzvhe4Cg3yNax52j9Yrzp0Fv6xA3VL07crlwau3FiH2cw0gj787D%2BYJtu3y7xdozEx4%2FJCXUS9h%2BuzSbl%2FIYV5wsnNOG%2B54cUC&X-Amz-Signature=2ba6df7abc7c3f3b967f063dd647fb8eb165f2df1d34d74e03f13faa72e60687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSBIJHH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwnN2n4sg3G2GTXbAUVTsTya1Gowq7t0Fwu5uKaDAngIhAL5X5w03v43fjMl%2FoWgNZRHYA05FBk3SFlilyJo0fLcJKv8DCE8QABoMNjM3NDIzMTgzODA1IgxppYBbBEsFUmqRN2wq3AP5RF63ix%2BhqfqWMdUAX%2Fw4GpptWYAHP9TJtvRmbBstPTeb%2FTzCWwYNAC8oY3DfjTUiYi2pkG6V4bGTfoIGIk8i2vzeFuy97BcdZDrIqLvGAX2kRpaznYlGro3mWrIdCW10IooaOpk1qc4R1GgJ%2B3LjDSGPCvue7NUE3zTMerr1bhAOi2%2FnYJa37C%2FqWTJjH1brUTv%2BPDpnSibQWw%2B28ZJBceIz7%2FBhib0DTyjiunbGYGyeuMr6gKfMm5JzCGJ7n1LbOQbQ5j5YBm7wZj%2BSGvN4Zd5c1A%2BVOU13AYCkzMSfbfk6fO3Fwm%2BJnp%2BHnDf47d5jwcNTtKp1xQQzdqTsK6PpksWXDQOdH7qYoUXdK%2BtGPCcMF0uKSfffbVyQ8z%2Bp8ksh1FxjAengWTNWRtePAPFmFD9EQuIlzCkhfq6eHaiC2ZPALNcRHo0WgM750xdtLL4PtPzmC4cBnYUHcOSqNg0%2BNwa1mtS%2BC2uffoF7cXe%2FxGYW9ucPSC%2FB19jelcazcrvnUl6fihDXrLljuz53RdRwb3DiemnZAFCKbpxTlzNjkHb3KsgoEgAPgL5ynwwqi%2FPHM8r8%2BvnIthX9XaWJHa0K1uG3sVpl%2BzNQksU5O6C7KWHNwnaZbAlfYgXeqjC7jMjJBjqkAeLYql7phjxCV0Hhp23jV689%2Faju1vb12TDoU6GBOATJ8RXyDIOu0Q3rRhcFsD7TlU5TA4vrl1uZqoydedw2bMG4QQP15Y9Ujev6NMLWEnOKI5aGCAdwIv%2FnSYDzvhe4Cg3yNax52j9Yrzp0Fv6xA3VL07crlwau3FiH2cw0gj787D%2BYJtu3y7xdozEx4%2FJCXUS9h%2BuzSbl%2FIYV5wsnNOG%2B54cUC&X-Amz-Signature=3525857eca57d06c3a1cbff867f13d7f826fd7a993ba6663ac4ee54ac0567546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


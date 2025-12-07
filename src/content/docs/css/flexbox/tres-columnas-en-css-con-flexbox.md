---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGBGDP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjGmyzK9tkODvlfU80RbPWMSOcRB2CsYCYuY3L19iOHgIhAK9Pr1wk9Rn8SAHyCmZCcExeTkVbu98ODE1o%2FW%2FRdUrPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdR3wf7YG14EGWcPEq3ANLQhEnBtLM7XnqUPBR9ptfFOEao%2FNiclm5Hy%2FvgGu7oLM%2FadBy%2FrwwjoLopvDnWmpb0vNkKn0jcbFOeWSZehyjCDrZa4lqG7zhFOlXofZCA6FTnIVqjxViB%2BxU5La8BmhAZyiKA%2F7wL%2F6z3GmLfhyLQ2bGGZBh1mrJsryZ1fcjnLjx%2FHJKglq5EPA2nnYtZ9gaEKdzE%2BazCQ63oCa%2BFvR1fFIuibZ0KRbCiNzs6ilo2G9tgyz0SjVPByzOPaLvlcuIJQDxWfu2RX0dIHzQO71KVAlYyjIB0btD1gJ31OlWlWUOzxOULOtMkgGnLkZTz4SYSCpH9gNYLYe%2F3shTUGvBfht%2FCSVTo36b73GbZWDYTXMXwjF2%2FE%2BLfXG5QtMR5fb5UxpgXioIjz%2BfM51VM4oRk%2Bd54wpmZOUb2lEMj6RYs4f2wucrq8IX4H1ltgNMoXbrTeRYojXCRJZdyb1tswiWVeV%2BEuCo7LQm6RGLBd9UwgJDD2s6g1BplrKX4XnJzf%2FPw8UXqIE62boPKM0RP%2FfsZ22WskARqF3bG9LdJM8T28eBXKSDFFCA8ecUxKS7GEK9RyVeos%2FtvFTxk2SeRiK3XyniYac%2Fiuo9By1VjRIh%2FX%2F2STUIbw772uC1TzDo%2FdLJBjqkAVfo1ZTzB5ycw0o6q01KfDyMhxQss8txWK%2B31G8R0eiGPkVTF84qacQpOd2lILIYqOC25LLKR0ywVA6MrTk5M9o01yCq9avSRTtzpHo4M6YayfInpX2TjYI4eIZ3rbq5BvbG3kOZPDoWEocn%2Bm9tqAuL2IidA82%2FoFbE5coWjCwk0Q7vl0A5ruFW0NbSyroY%2F%2FF6O5GwaDGF%2BukxtbHEcwq19BKR&X-Amz-Signature=44cf4c009091cebb3257b5d12da961b59936e7eb200847de8b7065d7249572c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGBGDP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjGmyzK9tkODvlfU80RbPWMSOcRB2CsYCYuY3L19iOHgIhAK9Pr1wk9Rn8SAHyCmZCcExeTkVbu98ODE1o%2FW%2FRdUrPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdR3wf7YG14EGWcPEq3ANLQhEnBtLM7XnqUPBR9ptfFOEao%2FNiclm5Hy%2FvgGu7oLM%2FadBy%2FrwwjoLopvDnWmpb0vNkKn0jcbFOeWSZehyjCDrZa4lqG7zhFOlXofZCA6FTnIVqjxViB%2BxU5La8BmhAZyiKA%2F7wL%2F6z3GmLfhyLQ2bGGZBh1mrJsryZ1fcjnLjx%2FHJKglq5EPA2nnYtZ9gaEKdzE%2BazCQ63oCa%2BFvR1fFIuibZ0KRbCiNzs6ilo2G9tgyz0SjVPByzOPaLvlcuIJQDxWfu2RX0dIHzQO71KVAlYyjIB0btD1gJ31OlWlWUOzxOULOtMkgGnLkZTz4SYSCpH9gNYLYe%2F3shTUGvBfht%2FCSVTo36b73GbZWDYTXMXwjF2%2FE%2BLfXG5QtMR5fb5UxpgXioIjz%2BfM51VM4oRk%2Bd54wpmZOUb2lEMj6RYs4f2wucrq8IX4H1ltgNMoXbrTeRYojXCRJZdyb1tswiWVeV%2BEuCo7LQm6RGLBd9UwgJDD2s6g1BplrKX4XnJzf%2FPw8UXqIE62boPKM0RP%2FfsZ22WskARqF3bG9LdJM8T28eBXKSDFFCA8ecUxKS7GEK9RyVeos%2FtvFTxk2SeRiK3XyniYac%2Fiuo9By1VjRIh%2FX%2F2STUIbw772uC1TzDo%2FdLJBjqkAVfo1ZTzB5ycw0o6q01KfDyMhxQss8txWK%2B31G8R0eiGPkVTF84qacQpOd2lILIYqOC25LLKR0ywVA6MrTk5M9o01yCq9avSRTtzpHo4M6YayfInpX2TjYI4eIZ3rbq5BvbG3kOZPDoWEocn%2Bm9tqAuL2IidA82%2FoFbE5coWjCwk0Q7vl0A5ruFW0NbSyroY%2F%2FF6O5GwaDGF%2BukxtbHEcwq19BKR&X-Amz-Signature=c8d0fbeccd92a35d4b9fd5596d6f54952fdb881fec01dae3414de3548c0c1898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


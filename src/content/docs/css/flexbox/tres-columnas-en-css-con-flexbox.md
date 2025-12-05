---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHWZGV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1EH%2FTa6TTJOXgBeE4u0I2b3UcYjI%2FmeJvFQBiJEPaTQIgITEMY0nEGw3tHl0ifKNzr1ErI9BBxbUIzVMf9lmOQ1cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPUiCwK9djfDfpM8xircA2lPPz38jVibyS7%2Fbzhacf7%2FqhFS%2FOkTzvgVHxhMpxnU7C35q0T3s2UtYHY4TfYc%2FDY9dIWrRUHzSVAEYegX%2B0bg61QzL7gjerGQUKG5wHNDRksFgqQTmz8Wk1H3Bl6fXHnkYWSg6QYqz1T%2F3691c%2BqCQPMakv2ghLP6%2FwFn1v%2BefbELueNE%2BRC8mwcT5cwUIRZLRc3SM0Qn7M%2BRcw0rkjqyxijfe1tL%2BX3YK80%2Bk7Pq%2FSvxAS7i%2FeLSKvRxagSO6G3keEIdFc9p2CcT8DqQYpiJIH2V0rOjRxGpRR3ffq1XwiDkUb9gxGe3O%2F2WEDuMuhBV%2BpzNh1PoEAo42O%2BH939p03MS8%2BivQ3TcPfAamuzrnj3N6Wg3XY3hTIeLCls1xJ9dsafyuSZbGbSWRBFng1gjhbYEyhZq02W3XqTWEZ51LcmO6ya%2B3cBDutaTNUR%2BduRESd3jWPiBStQ77f9O2wxrIkcqd9Q1oQyO7nKirAsh%2B33cJ%2B3QIgcglwDV8GAPOZRVzwHm4rFxEU1Tf7DpXm7%2BkZLqqElrSP%2FsZHpwwHUByhqsio6oEEPWlVBiaCeqa6jLrnkz7FEqoPrkFjC7t4D4uDanEug%2BnvVl5qpTA%2FXuHOMPwYcMnH1aLoNXMMyMyMkGOqUBnzj7Ag%2Fksn6OKMWlF7Pk8diNTy0jK0NxY0nkQ%2FctIuLESpF9KooTlRfzwSJkxmzJPdZQNaMs9THFh0DaFiRJI%2BzsTJxmQKFClxI%2FhIseeA8xqAUhPgrmMYCOBODH8niMpf%2FIYWRzgah%2BKMVO1fjnX3jnatcqiDyj%2BjtsUkzVuicVkvWNEerEjXyTHzohs4hfB%2BGeqRYYbpxX3OXsxlv43tBlS56T&X-Amz-Signature=01a9463d9abf17bf90fbc2cfdd60fe475c4afd4157a978c789472ac244806858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHWZGV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1EH%2FTa6TTJOXgBeE4u0I2b3UcYjI%2FmeJvFQBiJEPaTQIgITEMY0nEGw3tHl0ifKNzr1ErI9BBxbUIzVMf9lmOQ1cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPUiCwK9djfDfpM8xircA2lPPz38jVibyS7%2Fbzhacf7%2FqhFS%2FOkTzvgVHxhMpxnU7C35q0T3s2UtYHY4TfYc%2FDY9dIWrRUHzSVAEYegX%2B0bg61QzL7gjerGQUKG5wHNDRksFgqQTmz8Wk1H3Bl6fXHnkYWSg6QYqz1T%2F3691c%2BqCQPMakv2ghLP6%2FwFn1v%2BefbELueNE%2BRC8mwcT5cwUIRZLRc3SM0Qn7M%2BRcw0rkjqyxijfe1tL%2BX3YK80%2Bk7Pq%2FSvxAS7i%2FeLSKvRxagSO6G3keEIdFc9p2CcT8DqQYpiJIH2V0rOjRxGpRR3ffq1XwiDkUb9gxGe3O%2F2WEDuMuhBV%2BpzNh1PoEAo42O%2BH939p03MS8%2BivQ3TcPfAamuzrnj3N6Wg3XY3hTIeLCls1xJ9dsafyuSZbGbSWRBFng1gjhbYEyhZq02W3XqTWEZ51LcmO6ya%2B3cBDutaTNUR%2BduRESd3jWPiBStQ77f9O2wxrIkcqd9Q1oQyO7nKirAsh%2B33cJ%2B3QIgcglwDV8GAPOZRVzwHm4rFxEU1Tf7DpXm7%2BkZLqqElrSP%2FsZHpwwHUByhqsio6oEEPWlVBiaCeqa6jLrnkz7FEqoPrkFjC7t4D4uDanEug%2BnvVl5qpTA%2FXuHOMPwYcMnH1aLoNXMMyMyMkGOqUBnzj7Ag%2Fksn6OKMWlF7Pk8diNTy0jK0NxY0nkQ%2FctIuLESpF9KooTlRfzwSJkxmzJPdZQNaMs9THFh0DaFiRJI%2BzsTJxmQKFClxI%2FhIseeA8xqAUhPgrmMYCOBODH8niMpf%2FIYWRzgah%2BKMVO1fjnX3jnatcqiDyj%2BjtsUkzVuicVkvWNEerEjXyTHzohs4hfB%2BGeqRYYbpxX3OXsxlv43tBlS56T&X-Amz-Signature=d8942c7e812759c3687de9013b53b554db0f8a02cc8ded089beaac5318b978fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


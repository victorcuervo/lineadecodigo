---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ2OF5W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTlYGohbyL5RAg0DUJq2M0R80tVu9RJYPgmozsr6PwYAiAq32%2BmTZdWCOFOOJjT0lWFQ1sg3g9YdeuLJ4EDuSNapir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBgEa6dGMIfEjXdWoKtwDFb6lOOpIm1%2Fbzp92anuhS%2FwcJB8SEPMhzh8A5l3bgyb05pAoFviZqHOj1CEOqLsSMcGa6dJcaxIg7idDmVShnRnaCcfvyiG62xn5eC3Ch13P0dzX3MAKZqCMtrD4DcIR4Tw0kwXsxlipabCNUQeH%2FrhRH7oZWB8mBB0scppRDJYuck%2FkqHJF7SW6xA7zrF7Rq%2B69%2Fym1vN0KMbnOvUEmGB5U91%2B5rDC9jBSPNtMhUXZd5FizdMyQBOpgpZxxM5Zxe8e0ScNeEXHW5hKBELYTx9AcGEjfK%2B2UWtkBOZw3u3mvwI1xuYsRqw5708SVvutRhSAxZVc5EHKgHDxs%2FlA%2FeyvBQdgNvuoHF4rbF3wC%2FiS%2Bcnwn1f9ohNOAowVn77nmu8HC5%2FZOTKs5XNrwx%2B0ZryCVjbgEm%2BGS70YaHWdkZl4O1NRVgehrnajJDFDrbtMYGzxOed12w3PrFFVSPmEPNn2LQWuiQNBmO7RIkcIMGPQfc0jPbhm8IkkUfv4fO7zAgJ0DnKkfbXfmTC7DoLuIdMYeOmCcG58nvaUartrcsTBf32EzESuGZWU6XEh1ep%2FZLYRdG8PIfc9ZIhl9kSIXOnCsbKSuwdspeyMqLsrZ677cexleSom%2BRF6qleYw28nKyQY6pgEzrP2G9paW0CQ7FhL8TdJz66R%2BjSZmzB1loSSr2rAu3E0M%2Fq9toxB6gv7IftyPJ07c65nEWvaVzITzbuYPi5R6Z419x0q%2Bm1AeaaTiD%2FwoHo8IuIdMZGbBj0bOLqmxa39b88el3muE5LKmNpUhzfy9U5Yy4KzjjvwATj3CyJVbkI2pJwU5RaTk5WTeauMtByXHpIBLUdERywDa7530LZ8Tz5xzDldw&X-Amz-Signature=d19ca5de5c2b40ac73956b5396fe259599e5150c1fa0524e75af95448acc7278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ2OF5W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTlYGohbyL5RAg0DUJq2M0R80tVu9RJYPgmozsr6PwYAiAq32%2BmTZdWCOFOOJjT0lWFQ1sg3g9YdeuLJ4EDuSNapir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBgEa6dGMIfEjXdWoKtwDFb6lOOpIm1%2Fbzp92anuhS%2FwcJB8SEPMhzh8A5l3bgyb05pAoFviZqHOj1CEOqLsSMcGa6dJcaxIg7idDmVShnRnaCcfvyiG62xn5eC3Ch13P0dzX3MAKZqCMtrD4DcIR4Tw0kwXsxlipabCNUQeH%2FrhRH7oZWB8mBB0scppRDJYuck%2FkqHJF7SW6xA7zrF7Rq%2B69%2Fym1vN0KMbnOvUEmGB5U91%2B5rDC9jBSPNtMhUXZd5FizdMyQBOpgpZxxM5Zxe8e0ScNeEXHW5hKBELYTx9AcGEjfK%2B2UWtkBOZw3u3mvwI1xuYsRqw5708SVvutRhSAxZVc5EHKgHDxs%2FlA%2FeyvBQdgNvuoHF4rbF3wC%2FiS%2Bcnwn1f9ohNOAowVn77nmu8HC5%2FZOTKs5XNrwx%2B0ZryCVjbgEm%2BGS70YaHWdkZl4O1NRVgehrnajJDFDrbtMYGzxOed12w3PrFFVSPmEPNn2LQWuiQNBmO7RIkcIMGPQfc0jPbhm8IkkUfv4fO7zAgJ0DnKkfbXfmTC7DoLuIdMYeOmCcG58nvaUartrcsTBf32EzESuGZWU6XEh1ep%2FZLYRdG8PIfc9ZIhl9kSIXOnCsbKSuwdspeyMqLsrZ677cexleSom%2BRF6qleYw28nKyQY6pgEzrP2G9paW0CQ7FhL8TdJz66R%2BjSZmzB1loSSr2rAu3E0M%2Fq9toxB6gv7IftyPJ07c65nEWvaVzITzbuYPi5R6Z419x0q%2Bm1AeaaTiD%2FwoHo8IuIdMZGbBj0bOLqmxa39b88el3muE5LKmNpUhzfy9U5Yy4KzjjvwATj3CyJVbkI2pJwU5RaTk5WTeauMtByXHpIBLUdERywDa7530LZ8Tz5xzDldw&X-Amz-Signature=c2fd033e83803eaaeb18425c6bf6024d94e7506adc31ee219601e5c0e1dd0a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


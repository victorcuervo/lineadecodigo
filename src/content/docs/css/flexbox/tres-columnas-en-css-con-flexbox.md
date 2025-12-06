---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIYU3L4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV1m9%2FGUNmTSo9KnQmTeJFBy4GMfJMgzjKS2bmH6n%2FSAIgXedRDMNCKZb%2FntU4zxMEtZa4A2Jyar602rfOCiiq4e0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGmcWM6ggFGdRl76FCrcA%2F1IYna5QyxtzRZwJ8NTR16z1GyuU6YEHEB%2Bs8FnGGgJ9ZiGNAaYvrzPr0Sv5RXkI1QrnUz39jURK0EEc3MLcW5%2BVfPnzH3VRXGo67ylZU%2F2qanUm4PWesdh2dBQQqk7EwReZJtFbSmdLHpnHNx5mQorYKtgwRTzPNGL7Kt9DzJh7XgItYMLH6DG3RKKJwbDkA767Ox8uxnZkAfYQf99wwfYw91q%2Fg14iH00WEiAu1JnQ%2Bg5nP1qmyzgFC7S1L%2By6vdMAxJOo0Aj0o9G12EGkzF0g78cYgrJ2FvEz4QhB%2FKE6W%2BYz4xxppJcbAjtXLbVBmD2BqiRg8kWaXxc90aWpes9jxZscx%2FQF%2BUw%2FdBV6K26TZdrydhqu%2FabA%2F6SjC%2BhCeaRoeVk1MCbCbBGHMCQIDbmlXz4m%2B1c86EkI7lWYf3sureQFXYy8%2FwUT0zwLbj6ptOd5Z3aukmH7sH%2FM%2BzrLKoBa49LqP9y2Z9D7mIqMUGSInmJsIlsNB5bzf3P5ZjZEJmNE7AsgnqEFr4kfq3127WGOV%2FcvqsrSXRfhmJBJuPE%2BWN3t0W0%2F7xFP5KqFG1ysKqXs8n79gVaISemHakUzs8ppPrAwGoL%2BXoh4ZxD%2BikegExIABpx7HsmmSLKMM%2Bv0ckGOqUBTdkNzNBGjjS40EzZ2K4PgBVYmThX7RbZGN0PaJLMtjQdWhqNuyV4bTjo3HwzFgUVFSkIQ6Im35D7VXTde6PK2gJAzSf%2Bdbm5J95yTbH%2BG410aRgexIhMMuJ7tqL9WW4oFktwENsEz%2BkGaj9kNBPipH5LK4N5wgvQ3UDo1qkVQ%2F5OJ38x6QMemEs8qw5sqNY9kiInwuJbDEUIEA3GXw6yCN3Zf4JH&X-Amz-Signature=9936fed26402025974b90d6cd120bf536f5bbde0bc215a2caf58aa1c0d695035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIYU3L4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV1m9%2FGUNmTSo9KnQmTeJFBy4GMfJMgzjKS2bmH6n%2FSAIgXedRDMNCKZb%2FntU4zxMEtZa4A2Jyar602rfOCiiq4e0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGmcWM6ggFGdRl76FCrcA%2F1IYna5QyxtzRZwJ8NTR16z1GyuU6YEHEB%2Bs8FnGGgJ9ZiGNAaYvrzPr0Sv5RXkI1QrnUz39jURK0EEc3MLcW5%2BVfPnzH3VRXGo67ylZU%2F2qanUm4PWesdh2dBQQqk7EwReZJtFbSmdLHpnHNx5mQorYKtgwRTzPNGL7Kt9DzJh7XgItYMLH6DG3RKKJwbDkA767Ox8uxnZkAfYQf99wwfYw91q%2Fg14iH00WEiAu1JnQ%2Bg5nP1qmyzgFC7S1L%2By6vdMAxJOo0Aj0o9G12EGkzF0g78cYgrJ2FvEz4QhB%2FKE6W%2BYz4xxppJcbAjtXLbVBmD2BqiRg8kWaXxc90aWpes9jxZscx%2FQF%2BUw%2FdBV6K26TZdrydhqu%2FabA%2F6SjC%2BhCeaRoeVk1MCbCbBGHMCQIDbmlXz4m%2B1c86EkI7lWYf3sureQFXYy8%2FwUT0zwLbj6ptOd5Z3aukmH7sH%2FM%2BzrLKoBa49LqP9y2Z9D7mIqMUGSInmJsIlsNB5bzf3P5ZjZEJmNE7AsgnqEFr4kfq3127WGOV%2FcvqsrSXRfhmJBJuPE%2BWN3t0W0%2F7xFP5KqFG1ysKqXs8n79gVaISemHakUzs8ppPrAwGoL%2BXoh4ZxD%2BikegExIABpx7HsmmSLKMM%2Bv0ckGOqUBTdkNzNBGjjS40EzZ2K4PgBVYmThX7RbZGN0PaJLMtjQdWhqNuyV4bTjo3HwzFgUVFSkIQ6Im35D7VXTde6PK2gJAzSf%2Bdbm5J95yTbH%2BG410aRgexIhMMuJ7tqL9WW4oFktwENsEz%2BkGaj9kNBPipH5LK4N5wgvQ3UDo1qkVQ%2F5OJ38x6QMemEs8qw5sqNY9kiInwuJbDEUIEA3GXw6yCN3Zf4JH&X-Amz-Signature=c6144cc97318e3e7bdf11c2486a6204615a57df449119a7a1a8e0a018537c346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


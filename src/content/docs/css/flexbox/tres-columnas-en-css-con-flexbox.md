---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYV4OV7H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQt0c4jnpZpAaXHRaIfjcvHZ5rkI5rcG9maFWAw2a4aQIhAP7Ke%2FWFcip3rJBi1yvUqqx383qKZl6yEiVo%2Fn08nh85Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyDO93qFLeu9%2FC34cMq3AOgXi16J6DPmZ6yNnBQMWN51vYsw3yknoEUfk6XpT8AFSN8Thbb4O116%2FPYvu5tUltmwAJ9ZUJ4yUgHx0N5cGGa92QmlmZeewcCVxYplADMX30hbQ8quvTeP7IrLZU6SEDCPymAJPRvvavJEeZWHizQagTzbFuiKwl6nQ5mjAiIRhTPthtNIJOpp1ApyXfII35vGhiY6he0yypa7AuMifugGWeIc%2Bxpb94tIQduIKU7bJDD4A6uu%2Fv3ACty8OJB3Ka2I69WrKou%2BiynVZa%2BBFQN8EJdBzMyMaTwxOUvcjoc5hiTaDMYu5SLe9DajX%2BTpZwiGvTm7NwjD78CuHoGFaykvG8d37V%2BFfQ3sVHsvgZjfBGdWBqc%2FPNmfXzDbzIbWeWzkL%2By3jG7KzJKA2PJmFXTwNfQFIK1Sc%2FTLjQLRenZNdAmRSsBEOMXhJSLA1uRk2W2o7KChFHyjaTeiYIqahE0fU%2FqgZuPpho0rBEVUFZOelqaDUXCdcTDUY1mPJLpsBXh9FyLrNKfbi7W7CPQcAkGybIvNzmWov6JLNGyFCBKtfgYiCmsw0yTiQyq0zmfGMbZqpSkoOYXtqw9y2XQq21u2Oc6bdDVLv5Muo%2FsqrIQawNjd0Gxx9juf7AhiTCty9HJBjqkAaqRrBrZAjSmS1LfH3Revt9pCwT%2BQy2%2FDi1C1%2BS4FTMGDDYEsuXV3dU3jDSO3Zw97Y6tay6rc6nyrOKHs5K06X09jftQ%2FItJKCWn6hom%2F1S8Ps%2FAlDJcgDPpSKhW5VzFXXwTqaLL76JuD3KEatDYl%2B6krrFRGpRG6CFI79EEPIFgPa4mPuIJuU5o05iLrAFTtDYoC6KdySBHNNnDkbA%2B%2FRRZ7r%2F7&X-Amz-Signature=ac7a447e8e73391e5f2c481528703fd1630a03c7436a8785384f5ca21bc5c8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYV4OV7H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQt0c4jnpZpAaXHRaIfjcvHZ5rkI5rcG9maFWAw2a4aQIhAP7Ke%2FWFcip3rJBi1yvUqqx383qKZl6yEiVo%2Fn08nh85Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyDO93qFLeu9%2FC34cMq3AOgXi16J6DPmZ6yNnBQMWN51vYsw3yknoEUfk6XpT8AFSN8Thbb4O116%2FPYvu5tUltmwAJ9ZUJ4yUgHx0N5cGGa92QmlmZeewcCVxYplADMX30hbQ8quvTeP7IrLZU6SEDCPymAJPRvvavJEeZWHizQagTzbFuiKwl6nQ5mjAiIRhTPthtNIJOpp1ApyXfII35vGhiY6he0yypa7AuMifugGWeIc%2Bxpb94tIQduIKU7bJDD4A6uu%2Fv3ACty8OJB3Ka2I69WrKou%2BiynVZa%2BBFQN8EJdBzMyMaTwxOUvcjoc5hiTaDMYu5SLe9DajX%2BTpZwiGvTm7NwjD78CuHoGFaykvG8d37V%2BFfQ3sVHsvgZjfBGdWBqc%2FPNmfXzDbzIbWeWzkL%2By3jG7KzJKA2PJmFXTwNfQFIK1Sc%2FTLjQLRenZNdAmRSsBEOMXhJSLA1uRk2W2o7KChFHyjaTeiYIqahE0fU%2FqgZuPpho0rBEVUFZOelqaDUXCdcTDUY1mPJLpsBXh9FyLrNKfbi7W7CPQcAkGybIvNzmWov6JLNGyFCBKtfgYiCmsw0yTiQyq0zmfGMbZqpSkoOYXtqw9y2XQq21u2Oc6bdDVLv5Muo%2FsqrIQawNjd0Gxx9juf7AhiTCty9HJBjqkAaqRrBrZAjSmS1LfH3Revt9pCwT%2BQy2%2FDi1C1%2BS4FTMGDDYEsuXV3dU3jDSO3Zw97Y6tay6rc6nyrOKHs5K06X09jftQ%2FItJKCWn6hom%2F1S8Ps%2FAlDJcgDPpSKhW5VzFXXwTqaLL76JuD3KEatDYl%2B6krrFRGpRG6CFI79EEPIFgPa4mPuIJuU5o05iLrAFTtDYoC6KdySBHNNnDkbA%2B%2FRRZ7r%2F7&X-Amz-Signature=4fa370aa7b0c3b24f1afbea1ea43d438abd4dfa155a41afc0bb0162fd3ee1ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


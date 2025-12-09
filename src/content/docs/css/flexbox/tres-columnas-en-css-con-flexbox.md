---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNOJZOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCac8mYZzf%2BuvzRKcUJPO6AmGjLfuyOGfjDMbF70QuvbAIhAODY4MYlCHUMRYtdrfYWiBQL0Rr8eC5fwpHPIm3kEKzPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWuoEkqkCvKGSDV00q3AOGawq08oeetF4lHOtb6emZTPfQHugeWw%2B%2FTyWt14gpIoqabt7RISqdQJz5d6T76860BMOZ4dnF2ShQbLXLvO2ILGgTcPnP3VNh0XH%2Fo68X5YQW9rzlHqkjz0CMEjrm5J1Z5KE4aOpppIgqIkFKU89zovwEdPqju02C8GgNOPGjdslJLh8iyr8WSwXJqcjQXvUXjesFK1cThtENsdfXhupyV4Js4kSFqIWQEZABao6a1GbFbq4p0kMewZlLeiW3AP6gJ4Q5Xk7acBkADx9D2%2FPO8dgXKVM%2B1NW24d3gmyOelFuFpj%2Fxh8V4%2F8zjuNvydUKLdkdsVSj9Mg3kELgRWAIWzF3IUvw3i3%2B8azD4EhAZxgcfqIl2SAfOMwx2CMq8W4317n3w0wfusX681NqrQu1UTAuhi29NdyohqGFhdyeojzv0aH2ac3x%2BkVc%2Byn3cdZmq37LdwUxmJ2QsVklnloDjsAjm1tRL6lM0mCmsH0dnf4q58x9Ts9mjJCBgDh0LF8ZDco41A4peuyv0mMEQ78TLC%2Br0SEETt1GdB80mt0ZXOTGGMJupY5ggPcRlwE8sqJM1c8q0sbjjRP09YMVgSfVJ6wKetzPKWFdrCIsVYUkwkP8n8zWaEmMbykINJTCArt7JBjqkASydFAKF4e%2FnRZfh8PO7YulopZ0%2FlLULUYBB97nqbR%2Brm011QRpkDcbrAThsrwc84jfbRJp4DiIvNSJ551ViMQrIGLfIRdZ2UiAEkUrU9BJz6gCl208NQH4tWM06ryQqH1ts2UWNJa3KGHOKjvwLgRwYgwKS%2Fw1I2bKcxRrF%2Fbq5q2dK0e7H%2BUTP55c5PpeuRLEfbb%2F5CfSbc%2FkYMt1J5oBQmuWF&X-Amz-Signature=d8443f799ba3b1e9fe4e7b1a2c4be886e21047a579d00d7ae37040920fc58af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNOJZOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCac8mYZzf%2BuvzRKcUJPO6AmGjLfuyOGfjDMbF70QuvbAIhAODY4MYlCHUMRYtdrfYWiBQL0Rr8eC5fwpHPIm3kEKzPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWuoEkqkCvKGSDV00q3AOGawq08oeetF4lHOtb6emZTPfQHugeWw%2B%2FTyWt14gpIoqabt7RISqdQJz5d6T76860BMOZ4dnF2ShQbLXLvO2ILGgTcPnP3VNh0XH%2Fo68X5YQW9rzlHqkjz0CMEjrm5J1Z5KE4aOpppIgqIkFKU89zovwEdPqju02C8GgNOPGjdslJLh8iyr8WSwXJqcjQXvUXjesFK1cThtENsdfXhupyV4Js4kSFqIWQEZABao6a1GbFbq4p0kMewZlLeiW3AP6gJ4Q5Xk7acBkADx9D2%2FPO8dgXKVM%2B1NW24d3gmyOelFuFpj%2Fxh8V4%2F8zjuNvydUKLdkdsVSj9Mg3kELgRWAIWzF3IUvw3i3%2B8azD4EhAZxgcfqIl2SAfOMwx2CMq8W4317n3w0wfusX681NqrQu1UTAuhi29NdyohqGFhdyeojzv0aH2ac3x%2BkVc%2Byn3cdZmq37LdwUxmJ2QsVklnloDjsAjm1tRL6lM0mCmsH0dnf4q58x9Ts9mjJCBgDh0LF8ZDco41A4peuyv0mMEQ78TLC%2Br0SEETt1GdB80mt0ZXOTGGMJupY5ggPcRlwE8sqJM1c8q0sbjjRP09YMVgSfVJ6wKetzPKWFdrCIsVYUkwkP8n8zWaEmMbykINJTCArt7JBjqkASydFAKF4e%2FnRZfh8PO7YulopZ0%2FlLULUYBB97nqbR%2Brm011QRpkDcbrAThsrwc84jfbRJp4DiIvNSJ551ViMQrIGLfIRdZ2UiAEkUrU9BJz6gCl208NQH4tWM06ryQqH1ts2UWNJa3KGHOKjvwLgRwYgwKS%2Fw1I2bKcxRrF%2Fbq5q2dK0e7H%2BUTP55c5PpeuRLEfbb%2F5CfSbc%2FkYMt1J5oBQmuWF&X-Amz-Signature=7f6bc580fbadd07601d073993b6cedb7832d4ed38668a48113a384c495cc28fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


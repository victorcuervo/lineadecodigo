---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMO5WYT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBJg%2FzxTcRH1aWdCK8gQhUwmAlQ7PEQN1d3jcKOlbcAwIgRw01rhd09qhkxqgzyg3aL90Xle45VVljmsGsSu4FfgIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV3PaBNKV2oKq9irSrcAy8ZEPx7BW3XqKLxkLfBtK8i9vdK4Tjqj7rwhjH9u16wlvbGjJ2dpwGgoEcOvsVnL0%2BoJ3u8wYDPtpg1kCOG34M84cmzVeYN0ioC6uWL8LJSvMwYnXiqqneofrsHHkM2ucwe%2F8VooRXmbM%2BHepge3maLSUEjzaV7OP4CAybWJWbjoM99XpzpBuRIrGre60KgBGwILe4TmPYAQ%2ByeNDxJ0J%2BiF4DMyw%2F1RsL0OhhU%2B6ebw%2Fod6SYSWOCYSnuY1d7sYlDfXVUC58ZpDEASzJ6OQ0Gb2EODxy8sh7WO9QrEJLO6XbJLsG%2B9hnPmRAYWlZ40hlEE0RFNTyBIw1WsFgaiDU09e%2B5svXj0KC%2FLfaSDErILyTtxI877uzesEbnW06qFSHfriOjOVxhIM%2Bi8syjgCLlH%2F21qjlL%2BJO0RGtiEj%2BpFPAg2yd%2FF9WUMJIrcWcsv%2BODQcjNY9SXWD8yzh4p60Vk8Imq80MbMJs4eizI3%2FAETKttSpRE6pZFDLwxYxlSrOEvHz4RbzW31LpZKQdq2qUdiaolM3arMR4QydKtMKaQwYxak5MqL9Fgx9DPcKQKj6p3UKT0lGHxf3YsndnZoyBU8dnch1QUEep3KOWeXW8qCZ04LlUAxi3axN58%2FMJn90skGOqUBCt43AvsoQxYfhdVh9xQdIh0baP5xwokWd7ce2nHfgng96UVRAqcbcCMxINOkCQfvGbW1c4igKYL8%2BunRzEgcSyMNYtZDb9oZSy%2FzBN9om3O2YDA5jC7q7vH%2BdGt%2BfbWtj7cmqjd2rhAk3MvVd%2FZZXGygNssSFHKHSmf3btg7z%2Fgww17hma6egoLBlUaQC7pMK79UcSIHk5%2FdzVmIrTDn%2F0qB%2BC42&X-Amz-Signature=419d13c7189d4ea55abd7b2228b31e87592a53e3b42fa0e9b2972b3881fbd002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMO5WYT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBJg%2FzxTcRH1aWdCK8gQhUwmAlQ7PEQN1d3jcKOlbcAwIgRw01rhd09qhkxqgzyg3aL90Xle45VVljmsGsSu4FfgIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV3PaBNKV2oKq9irSrcAy8ZEPx7BW3XqKLxkLfBtK8i9vdK4Tjqj7rwhjH9u16wlvbGjJ2dpwGgoEcOvsVnL0%2BoJ3u8wYDPtpg1kCOG34M84cmzVeYN0ioC6uWL8LJSvMwYnXiqqneofrsHHkM2ucwe%2F8VooRXmbM%2BHepge3maLSUEjzaV7OP4CAybWJWbjoM99XpzpBuRIrGre60KgBGwILe4TmPYAQ%2ByeNDxJ0J%2BiF4DMyw%2F1RsL0OhhU%2B6ebw%2Fod6SYSWOCYSnuY1d7sYlDfXVUC58ZpDEASzJ6OQ0Gb2EODxy8sh7WO9QrEJLO6XbJLsG%2B9hnPmRAYWlZ40hlEE0RFNTyBIw1WsFgaiDU09e%2B5svXj0KC%2FLfaSDErILyTtxI877uzesEbnW06qFSHfriOjOVxhIM%2Bi8syjgCLlH%2F21qjlL%2BJO0RGtiEj%2BpFPAg2yd%2FF9WUMJIrcWcsv%2BODQcjNY9SXWD8yzh4p60Vk8Imq80MbMJs4eizI3%2FAETKttSpRE6pZFDLwxYxlSrOEvHz4RbzW31LpZKQdq2qUdiaolM3arMR4QydKtMKaQwYxak5MqL9Fgx9DPcKQKj6p3UKT0lGHxf3YsndnZoyBU8dnch1QUEep3KOWeXW8qCZ04LlUAxi3axN58%2FMJn90skGOqUBCt43AvsoQxYfhdVh9xQdIh0baP5xwokWd7ce2nHfgng96UVRAqcbcCMxINOkCQfvGbW1c4igKYL8%2BunRzEgcSyMNYtZDb9oZSy%2FzBN9om3O2YDA5jC7q7vH%2BdGt%2BfbWtj7cmqjd2rhAk3MvVd%2FZZXGygNssSFHKHSmf3btg7z%2Fgww17hma6egoLBlUaQC7pMK79UcSIHk5%2FdzVmIrTDn%2F0qB%2BC42&X-Amz-Signature=8ff0505e1cb7db6b5c22358cfe45c7df13a591a2e02d313b8bc6bf6e4ff2c108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


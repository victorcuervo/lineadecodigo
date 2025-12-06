---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTOLEKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlAQSKuY06o0%2F8YdmdOkflI4cofHKAIMX10WuXFPkZHAiEAzRYrfsjcXhMaYxI4l17oTaSpolKHhRtcs%2Fh8fRtsYLMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjFRFv67o4E%2BryYUCrcAw8V9152ilITllsl3wauiVqmW1seYgav19rwa3cIwmmpiGhfPpIyX2MbeyCgdmLHBHmASx08dFdJm0SdZITRr2BJ64ElHKhKHGljuqSUuj0R8TsLCGmHGgCgI50GYFcKyLWcf73%2B19DKCbOdbbIbW%2FvI0p4ZtUASCDTGzAHcU6NrSIEob6tpr822dW%2FiYyFiaApLetYQn54RUweq%2B31EN2gW1zKT3yiqnF4U7FfYeI7XWt3LDqYAXUR9XhyAhlV3fShiI7I1B4Mn9BuYSBwGPKzCManJ9iWOOpQl8kDufMOwhGFyjG2%2FX87EERzNQNzqx4y6%2B9dLYucnJZAmDFPBEz0FVc0KOwpZfHrPTY3tRWsd1WODw%2B5iXxj%2BpXPjFSCdcNd4Jv1rchwAbn0cfZ0VXtot8TA841l0c1H9G9Mb1c1PjDjWQNq58jfDrqc%2FSbYRU6VLQKFGEXHu%2BJpXJjHrs7%2FWOoWondRB5xaJpnZo7c9XWFjA8QRRoi0iNl%2BrOtSSI2XGWExMw0wO1T2b7%2BtXJBquyF28ng%2BCfhz1QOmeTZyngkNUBs8B36CeWYLvkUL0wYp%2BRUHzpK2YodxK%2Fton4%2Bxj2yeZjFWQ3s26szS4f6UmKM5vIPBXeKnJ33E2MLLozckGOqUBxED3mucHgLekFbbFxnnqkUO%2FE5GIfxiTTfe8ysaPlnf9MUO%2BNL0AB9%2BfAyNUyoaRMg7VXqdZIKau9pI7TVqrAbivkJ1R3nuO6fGeVGXKRlnzde1g%2BteOUUVpHYHRYr8fDXocoyP%2B3jmed4Ajyb11ANHh1PDPqDoiufCcb0M5FAHPIwjNPZuwiiElTFn07mRcQ9LPjq9kEoY8QhazCW4aDEJMuzxN&X-Amz-Signature=087f8be2382cc0e155067b35189ed85013d80f614470bcd490e422e6e96b4ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTOLEKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlAQSKuY06o0%2F8YdmdOkflI4cofHKAIMX10WuXFPkZHAiEAzRYrfsjcXhMaYxI4l17oTaSpolKHhRtcs%2Fh8fRtsYLMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjFRFv67o4E%2BryYUCrcAw8V9152ilITllsl3wauiVqmW1seYgav19rwa3cIwmmpiGhfPpIyX2MbeyCgdmLHBHmASx08dFdJm0SdZITRr2BJ64ElHKhKHGljuqSUuj0R8TsLCGmHGgCgI50GYFcKyLWcf73%2B19DKCbOdbbIbW%2FvI0p4ZtUASCDTGzAHcU6NrSIEob6tpr822dW%2FiYyFiaApLetYQn54RUweq%2B31EN2gW1zKT3yiqnF4U7FfYeI7XWt3LDqYAXUR9XhyAhlV3fShiI7I1B4Mn9BuYSBwGPKzCManJ9iWOOpQl8kDufMOwhGFyjG2%2FX87EERzNQNzqx4y6%2B9dLYucnJZAmDFPBEz0FVc0KOwpZfHrPTY3tRWsd1WODw%2B5iXxj%2BpXPjFSCdcNd4Jv1rchwAbn0cfZ0VXtot8TA841l0c1H9G9Mb1c1PjDjWQNq58jfDrqc%2FSbYRU6VLQKFGEXHu%2BJpXJjHrs7%2FWOoWondRB5xaJpnZo7c9XWFjA8QRRoi0iNl%2BrOtSSI2XGWExMw0wO1T2b7%2BtXJBquyF28ng%2BCfhz1QOmeTZyngkNUBs8B36CeWYLvkUL0wYp%2BRUHzpK2YodxK%2Fton4%2Bxj2yeZjFWQ3s26szS4f6UmKM5vIPBXeKnJ33E2MLLozckGOqUBxED3mucHgLekFbbFxnnqkUO%2FE5GIfxiTTfe8ysaPlnf9MUO%2BNL0AB9%2BfAyNUyoaRMg7VXqdZIKau9pI7TVqrAbivkJ1R3nuO6fGeVGXKRlnzde1g%2BteOUUVpHYHRYr8fDXocoyP%2B3jmed4Ajyb11ANHh1PDPqDoiufCcb0M5FAHPIwjNPZuwiiElTFn07mRcQ9LPjq9kEoY8QhazCW4aDEJMuzxN&X-Amz-Signature=d5497cf353ffb77c6ccc899442e9d4b0cc867dd9a60704898e62c3e7c39ce7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


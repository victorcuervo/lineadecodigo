---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3A3ROCO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHJOLULX7NLK08xRovvuZp%2FgRh2OojRMVOwA7zhZ9j36AiEA%2FUGPwC1R4vmSCNNyfLfXL44G47Zdd474wvzwJgRtiOsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEXBn07P5kCOdqPrNyrcAwk%2FsyDaXy67yoh6t5jVAC%2F%2Fk4xHfBgmsIfjCvcDYYQloR4A%2FX0sOlS50q7KqTuPv7jofYBHL2P6Km4e8Kt%2F91EXnD9%2FxgmI6zRLCiL7IpCPJHkrpPUAEb2BfYVNpciwgnDdqFFNtsp9zMgpH9jBXv2lLRIjVzsbizoA3ZI8CevBhYH6xlIf0ZBMlJb0VjFBb61syueYAd8n4Jv53c6FGvArqd8xP2Gk5t594u7u2RiQVq1EBqMqapx%2F0Bv43IdcWrN%2F5UEnr0yK7CpCUoEUR5r%2FcMYd%2BYz%2B5HpUQCU1n0tUJHbg0y%2BZtYEIS07xLetqqfASp%2BAEPZFnu9y%2B9n58pf356x7%2B6nJWQi%2BNh8EtzqxKXPKv2VU0RMfr9V4jSmN9hIeUbd4gn0gypg3m%2FhVGynJM1T%2BhqdejdU230vg4b4QLUXGlRD2d6gh6wkefoFLMskqnum2bM7yQ2RRCHl5xQsshsYVCz0%2FXUg7VNePlgJ8Tf1U7JdU%2Fft64ZHFPJSplrlhL%2F3XDWdQEHKzbhfXckO7gLcwphl2Kl3rYFe%2FuV%2BN81QC2pKWzORNvzaBlY9JRLneuRm1PYuHawE%2BPYdX4V3UUTefEDZJBeo4D6V5hFFNrS%2BJWjvXJ6Obm00zpMPmDxskGOqUB2vLT9R61OAx47Lvro6luIyn1eVIpgbvo%2FqGnee3w4Rtn2h9SIhwT3SsuflJe%2BywQuoHnNBpkS0UIcRXAonwmRROwc3p7wPCycUXd6nmKBWXfLdQj3bQVLQAQHbVpIqjG92DxrjJujYGc8w8ewQtCkjayr9tgkyjIq4wJ9FPQkdRxKM2brdNqfTzMJsE4iVwno2GjNFhCu0LFC7C6O%2BDRTIhRXaoQ&X-Amz-Signature=b031c514868607c2d3629077fba1e0547b58756a2513a51d81758a1c1511921f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3A3ROCO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHJOLULX7NLK08xRovvuZp%2FgRh2OojRMVOwA7zhZ9j36AiEA%2FUGPwC1R4vmSCNNyfLfXL44G47Zdd474wvzwJgRtiOsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEXBn07P5kCOdqPrNyrcAwk%2FsyDaXy67yoh6t5jVAC%2F%2Fk4xHfBgmsIfjCvcDYYQloR4A%2FX0sOlS50q7KqTuPv7jofYBHL2P6Km4e8Kt%2F91EXnD9%2FxgmI6zRLCiL7IpCPJHkrpPUAEb2BfYVNpciwgnDdqFFNtsp9zMgpH9jBXv2lLRIjVzsbizoA3ZI8CevBhYH6xlIf0ZBMlJb0VjFBb61syueYAd8n4Jv53c6FGvArqd8xP2Gk5t594u7u2RiQVq1EBqMqapx%2F0Bv43IdcWrN%2F5UEnr0yK7CpCUoEUR5r%2FcMYd%2BYz%2B5HpUQCU1n0tUJHbg0y%2BZtYEIS07xLetqqfASp%2BAEPZFnu9y%2B9n58pf356x7%2B6nJWQi%2BNh8EtzqxKXPKv2VU0RMfr9V4jSmN9hIeUbd4gn0gypg3m%2FhVGynJM1T%2BhqdejdU230vg4b4QLUXGlRD2d6gh6wkefoFLMskqnum2bM7yQ2RRCHl5xQsshsYVCz0%2FXUg7VNePlgJ8Tf1U7JdU%2Fft64ZHFPJSplrlhL%2F3XDWdQEHKzbhfXckO7gLcwphl2Kl3rYFe%2FuV%2BN81QC2pKWzORNvzaBlY9JRLneuRm1PYuHawE%2BPYdX4V3UUTefEDZJBeo4D6V5hFFNrS%2BJWjvXJ6Obm00zpMPmDxskGOqUB2vLT9R61OAx47Lvro6luIyn1eVIpgbvo%2FqGnee3w4Rtn2h9SIhwT3SsuflJe%2BywQuoHnNBpkS0UIcRXAonwmRROwc3p7wPCycUXd6nmKBWXfLdQj3bQVLQAQHbVpIqjG92DxrjJujYGc8w8ewQtCkjayr9tgkyjIq4wJ9FPQkdRxKM2brdNqfTzMJsE4iVwno2GjNFhCu0LFC7C6O%2BDRTIhRXaoQ&X-Amz-Signature=6ee0df118765185e58a9a1223a77f6631459eea87c96d6cf89fcd59d119edf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZ7R3NQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2eQ%2BTwLbwSUsGjOldFVUR9SUFUY8h4f31pCm4o%2B6lagIgHxNvEX3wtHPIHlKqghKQltw7IhdQ9E5rr2vkGuD%2BTpIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKlxy7YR%2FG7XcQEd6ircA5TheNOZ7DUk2%2B1%2BVGgvRhYiRuIyXI7d4mDU9queopPBh47FTa2zZObREGekklDFcceRazeh%2BYNMuC4KZrNcaU%2FUrJdj8CrmM8S%2BEVcI2R56YV3Fm3DjbXX4ycZjR2oXKVR9KcHwpauggU2qwYFrtnXNFjkNcAsxiI8xqahJGSSfQcBLSfdC%2B4muUJpLrLjuJGpjImQX0i%2FvMmjtCCZOMAZGm1NWyIGb8mczQ37QEs%2Bze1OesPpGlt2LJzgN4PSxJsZEuWB4VS7IycnKxpy0OdCQ%2F%2BUWKF%2FUtwBkqccZa9pqYjTl5XYlMZ%2FRniS7FM4Jj0bDehG282wXZMPXPgQoI9613IUjQ1JUm3o6w24OAvuJSaQbZMpfnJMIYn5L%2BRbTmgWnzbVx0Y%2Bkv5xBYMWRkpEp1E5e8wUVfrxQCv5leKzGqHU9WKwuzVCFxbjDk4ccaC8CJc2e2nhk%2FeiRGBTROPkHK%2BWCDiBNeRnz8rk6ERBeJBybPe61pmeQQQr3nyS9g4KbGHh4WiR70%2BEk6A35hPc%2F8XXcGqsLf1bhcnJpxLYpX13Tup8B9rabqYyZtz92IEDeXJNDwGQAmAxFwl%2FmGdggf%2FW8HEfvn0MY98DLC2%2BybbDo5LraawzZ3WS6MO6MyMkGOqUBOKt5BDBh8fkZ0ZkxR1Z5v24Mak9zrl3jn%2FnhZcz%2Bn%2F8cTEs86BTpw7xStSy3RGUpYhzxl%2B5hsefWE6bdq9R7DJ2j573F7C8ayQNZmDsjMKOwj788n3VrYiw4%2FiyLkMfqTmajI1sz5qapFhRlrbEZfuczNCn9JMXCU1pQ0ZbaV%2FeAsKv3F9j7NdD5NIxaUz%2FWVjrE%2FETsdzHrvx2YOzTRad5wmCf4&X-Amz-Signature=a3050fb87dfed2acdc5b0a70ebd0571661257e1289e1c42f94b4000c740675df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZ7R3NQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2eQ%2BTwLbwSUsGjOldFVUR9SUFUY8h4f31pCm4o%2B6lagIgHxNvEX3wtHPIHlKqghKQltw7IhdQ9E5rr2vkGuD%2BTpIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKlxy7YR%2FG7XcQEd6ircA5TheNOZ7DUk2%2B1%2BVGgvRhYiRuIyXI7d4mDU9queopPBh47FTa2zZObREGekklDFcceRazeh%2BYNMuC4KZrNcaU%2FUrJdj8CrmM8S%2BEVcI2R56YV3Fm3DjbXX4ycZjR2oXKVR9KcHwpauggU2qwYFrtnXNFjkNcAsxiI8xqahJGSSfQcBLSfdC%2B4muUJpLrLjuJGpjImQX0i%2FvMmjtCCZOMAZGm1NWyIGb8mczQ37QEs%2Bze1OesPpGlt2LJzgN4PSxJsZEuWB4VS7IycnKxpy0OdCQ%2F%2BUWKF%2FUtwBkqccZa9pqYjTl5XYlMZ%2FRniS7FM4Jj0bDehG282wXZMPXPgQoI9613IUjQ1JUm3o6w24OAvuJSaQbZMpfnJMIYn5L%2BRbTmgWnzbVx0Y%2Bkv5xBYMWRkpEp1E5e8wUVfrxQCv5leKzGqHU9WKwuzVCFxbjDk4ccaC8CJc2e2nhk%2FeiRGBTROPkHK%2BWCDiBNeRnz8rk6ERBeJBybPe61pmeQQQr3nyS9g4KbGHh4WiR70%2BEk6A35hPc%2F8XXcGqsLf1bhcnJpxLYpX13Tup8B9rabqYyZtz92IEDeXJNDwGQAmAxFwl%2FmGdggf%2FW8HEfvn0MY98DLC2%2BybbDo5LraawzZ3WS6MO6MyMkGOqUBOKt5BDBh8fkZ0ZkxR1Z5v24Mak9zrl3jn%2FnhZcz%2Bn%2F8cTEs86BTpw7xStSy3RGUpYhzxl%2B5hsefWE6bdq9R7DJ2j573F7C8ayQNZmDsjMKOwj788n3VrYiw4%2FiyLkMfqTmajI1sz5qapFhRlrbEZfuczNCn9JMXCU1pQ0ZbaV%2FeAsKv3F9j7NdD5NIxaUz%2FWVjrE%2FETsdzHrvx2YOzTRad5wmCf4&X-Amz-Signature=1deff952c9075eaa6746e12aed264ef099926d7da1b0ac1396b73673037716a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HHNIEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25qVqWAAOkdDL0CW2TtRXHqVOn1169WBujr2unNWnLQIhAIaA8EsbhN7dS%2BqMhqc1p%2FnVkC3qo5hKgqgsK3EJQbkqKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjPUeX8XLMH7hrl24q3ANdaTmkDMLXQiXLOVT1d7Mg3L3sarfD5%2B10p9QtmxymSDbYzabE64ZclLIe2%2BhByyeFmMYffhZU5nBu4WjF5I2u0IKOgPY6jAUTykHKSEphmbz6LH8O1Mol9yHyvkogMKjV9PadrU8fLrvVEqPnStwgwGxtJ0uEeF9ARxA86O%2FoABoDzHns5cd9f0hIXxaJ5SreJJ6Gzw5ttIqITsM2nNQlIg19gh4cf%2B4aSUJk9yldMD1Xlf4xI8NH1YpdlzpC%2FuNiEZYkWFFdg9Ea79ue%2Bq7y%2FrYek3C%2FgWjMT%2B6BQwm5BsRwW3MCiXiAyG%2BTqnj42WPN00TiRHZfVgirzoy7ybDa26i%2F05WCtER%2FLVsXYp93WotTsnt1CLO7LXNcqLUOAHsSqseLNu7pbDCVqzu7BMlvXbk%2Bk%2BbdJfgyxIMw5ch%2BOW0zHuCPVPMUQ2%2FFwyoqkolp9OfFS7cT2OSGUaG%2FKbsoRwpLDnepovx80YQkON8UPQGcnoutdmaakCRLLazKcscf2U7mYpxcJMqIp0PfypM%2FuNW%2FK2jY0Yydp6FZ7dwhqI2tIQCtM7WhjvrBisNSqZJ6XlhXl2DF0KL6fdxd7yJfVSX4j0CjUfhy5PPhBWGF1kKBvopnqE5Rdf%2F%2FLDD26s%2FJBjqkAVNCtSsaytmOmQqa%2B%2BlM9vk6KC7wFd7uVGQKcj0EEZtddzcO9nnTrn3Ie3G4aX4KtATcQknY%2BoNRryZT196q7TmB2mqrPEWXmvgRFWaPLE9RJ7GfZaq1OrYsldhMBIhNR8CazA%2BbegoxX5A%2B8AnXbUh3kUmiGbqhHjdcXBb14HY8j2zg4pSTzariE4OWvw89hoNEjKdTtyN4i7OaPQkZzXm0UqEh&X-Amz-Signature=0625e508c8dcf989a9b1fa21c719f0d25f543e7380132769aa03e999faf97211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HHNIEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25qVqWAAOkdDL0CW2TtRXHqVOn1169WBujr2unNWnLQIhAIaA8EsbhN7dS%2BqMhqc1p%2FnVkC3qo5hKgqgsK3EJQbkqKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjPUeX8XLMH7hrl24q3ANdaTmkDMLXQiXLOVT1d7Mg3L3sarfD5%2B10p9QtmxymSDbYzabE64ZclLIe2%2BhByyeFmMYffhZU5nBu4WjF5I2u0IKOgPY6jAUTykHKSEphmbz6LH8O1Mol9yHyvkogMKjV9PadrU8fLrvVEqPnStwgwGxtJ0uEeF9ARxA86O%2FoABoDzHns5cd9f0hIXxaJ5SreJJ6Gzw5ttIqITsM2nNQlIg19gh4cf%2B4aSUJk9yldMD1Xlf4xI8NH1YpdlzpC%2FuNiEZYkWFFdg9Ea79ue%2Bq7y%2FrYek3C%2FgWjMT%2B6BQwm5BsRwW3MCiXiAyG%2BTqnj42WPN00TiRHZfVgirzoy7ybDa26i%2F05WCtER%2FLVsXYp93WotTsnt1CLO7LXNcqLUOAHsSqseLNu7pbDCVqzu7BMlvXbk%2Bk%2BbdJfgyxIMw5ch%2BOW0zHuCPVPMUQ2%2FFwyoqkolp9OfFS7cT2OSGUaG%2FKbsoRwpLDnepovx80YQkON8UPQGcnoutdmaakCRLLazKcscf2U7mYpxcJMqIp0PfypM%2FuNW%2FK2jY0Yydp6FZ7dwhqI2tIQCtM7WhjvrBisNSqZJ6XlhXl2DF0KL6fdxd7yJfVSX4j0CjUfhy5PPhBWGF1kKBvopnqE5Rdf%2F%2FLDD26s%2FJBjqkAVNCtSsaytmOmQqa%2B%2BlM9vk6KC7wFd7uVGQKcj0EEZtddzcO9nnTrn3Ie3G4aX4KtATcQknY%2BoNRryZT196q7TmB2mqrPEWXmvgRFWaPLE9RJ7GfZaq1OrYsldhMBIhNR8CazA%2BbegoxX5A%2B8AnXbUh3kUmiGbqhHjdcXBb14HY8j2zg4pSTzariE4OWvw89hoNEjKdTtyN4i7OaPQkZzXm0UqEh&X-Amz-Signature=d71b4882e3b725425917067ca6258a4afadf905f697c88d24867b7ebedf86631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


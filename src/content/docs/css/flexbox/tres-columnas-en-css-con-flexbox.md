---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEL4EVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWG9JfP4m0QRj%2FK%2FEi33grSXsJrhx7vjjd52kEyTu%2BKQIhAK0zeZj%2FYPX8IeHUfXtWCoU9XFCOcMNRvm28y9ppsYhQKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8namOZ2ogq0GXchoq3AOhN7dWSEkGfFnwaJtCF1rIyeRxQ8WWnZ63mb4ZCTnGWD0K6FZ0b1aycmDMbfUWqaNV%2FabS5O3p58ArJ6vNu96ezl9ME7x6mmoHDUuC6gMJA6pvWPZhg8Rnj5gZLvGRcW%2FfWcb69f92N%2F%2ByGts5Uo%2BrMBsxkhNQPQsCTKIWMjbGdf8QktCLdNxtcFZ8GKFhMfgsTzQmBjCwfc%2FEiELHnAGuJ0YvEnOtI4s%2BG8TV1ZxKJNX1mhtGsKltst09nGg26VcrMttCkhY5slpsgqHTUEa4TjcNQyi5eKbe8NJaFdsptq1tOX4VP2I59xaUuG2zopJMPhT1tl48w1I5pdsNZ9Fhtti2cH2Kd8CunDXfiZa4ARPZtSYlhc1YEQ1DZwFIKmYq%2F3Bs7CLyauPT51%2BaaOFeaFIxOfduCQEu7x0lmcSUiJ0SWDO4fRTdYOyD%2BnTqjnMaoFNggeDxplVxurRY72rOJTNO0hv8jkEWcPONTNoCqUFrUZ1epGzX8qj%2BKp5WKrC4vWsSBnQ4IXJQz3dC5GoEA9hGWgmaNgJZ9de5R3QukA0ePIfEBQzBRD9CF6coDVW%2Fh6KHiaTwakt1cv%2BC%2BsawpTywDJEp0JNfB%2BczoxRUkUOyJAXIfZSLvM6%2B9TD8s9zJBjqkAS0KHN6opQo3sOUAad7erMo4HlnUkE3rzA8qFO4kp422DdaFA7NB45LOEbQzlxnql8plTXuj3RLhXomC7CISFxnx%2BBAPD%2BUHYd82nFPgkT2WNk9C0Td5%2Fr754FQz40n%2FFJGB2NuKi3xN1bdmSLOwR6S4SL3VfHFrr%2FCPlubbtDimdQ%2FLq8BrOETW1anb7BA78wHQNqq0kG%2Bq90FPj%2FcxZWeZKUbQ&X-Amz-Signature=733175a45e7ce12e067240913d90e3da7f9f6c2c2e1e4f6729f62c5d3f44236d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEL4EVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWG9JfP4m0QRj%2FK%2FEi33grSXsJrhx7vjjd52kEyTu%2BKQIhAK0zeZj%2FYPX8IeHUfXtWCoU9XFCOcMNRvm28y9ppsYhQKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8namOZ2ogq0GXchoq3AOhN7dWSEkGfFnwaJtCF1rIyeRxQ8WWnZ63mb4ZCTnGWD0K6FZ0b1aycmDMbfUWqaNV%2FabS5O3p58ArJ6vNu96ezl9ME7x6mmoHDUuC6gMJA6pvWPZhg8Rnj5gZLvGRcW%2FfWcb69f92N%2F%2ByGts5Uo%2BrMBsxkhNQPQsCTKIWMjbGdf8QktCLdNxtcFZ8GKFhMfgsTzQmBjCwfc%2FEiELHnAGuJ0YvEnOtI4s%2BG8TV1ZxKJNX1mhtGsKltst09nGg26VcrMttCkhY5slpsgqHTUEa4TjcNQyi5eKbe8NJaFdsptq1tOX4VP2I59xaUuG2zopJMPhT1tl48w1I5pdsNZ9Fhtti2cH2Kd8CunDXfiZa4ARPZtSYlhc1YEQ1DZwFIKmYq%2F3Bs7CLyauPT51%2BaaOFeaFIxOfduCQEu7x0lmcSUiJ0SWDO4fRTdYOyD%2BnTqjnMaoFNggeDxplVxurRY72rOJTNO0hv8jkEWcPONTNoCqUFrUZ1epGzX8qj%2BKp5WKrC4vWsSBnQ4IXJQz3dC5GoEA9hGWgmaNgJZ9de5R3QukA0ePIfEBQzBRD9CF6coDVW%2Fh6KHiaTwakt1cv%2BC%2BsawpTywDJEp0JNfB%2BczoxRUkUOyJAXIfZSLvM6%2B9TD8s9zJBjqkAS0KHN6opQo3sOUAad7erMo4HlnUkE3rzA8qFO4kp422DdaFA7NB45LOEbQzlxnql8plTXuj3RLhXomC7CISFxnx%2BBAPD%2BUHYd82nFPgkT2WNk9C0Td5%2Fr754FQz40n%2FFJGB2NuKi3xN1bdmSLOwR6S4SL3VfHFrr%2FCPlubbtDimdQ%2FLq8BrOETW1anb7BA78wHQNqq0kG%2Bq90FPj%2FcxZWeZKUbQ&X-Amz-Signature=37db00d5e3ffa8e8f4a88ed0b6fa62bc12f4ca2902cccde305b88ee07a8c9799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ45E2FE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAznxjQOabTYQfB96Xjzs1PgilGjVow7E%2FFyU5lnNHQkAiBfMWTqkrVRGEjw7yucGUc7b3Nk3%2FzgPftWykmo0OFscSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFy0yZj%2FYU336XYJwKtwDWeEvpKFnS2UXrt2%2FeLZgIp0aUNAwG2CUhWu38oND%2BWp1zcF33hvdiML4BBmFjD7uf6UZNxeBCTZ52VHVgT8OQryi8DWzDFpxW7Kh03Aq1wA3EQBHp2ZZk5GZQyJR7%2B6Se44pwwGDUoGRssXR0XxeTJLuBYOTEVkFgEudLocg0cuTQ5eSutrZw28h4NqLFlJl0d%2F93teX1DqUXweq3nmv1EWaEpjgD45OcB6POQlmAcFHdnUN1Yj6cHapQZFxj3IwT4bQjLyHRRddjXmkTHmr%2B73QlmAjjkLGzb20gftfMfAZTc5sHzhba%2BtBECvnkeCComhYhhDNtFDj%2B1yQOg9i6XSqj7oLaWrWqy3xMOGhVonWwNC3JEQ5vczqaO7Jw9A3Gk69eWWhK3FUqxXCc3ve%2FlX6kj57OaB9RLgQRJFDI%2F287QHf7uhFj4doKp7MjCOz207NCzSZeK%2Fu8UcNn6b2t099xbFaGeoiZCqhkm30fqcaHooGEGe9mnAcvcSIF%2Bshce%2FRQJsOMfrvhigTOdV8kwCJZSYurPNBYz9bNcWrjNa3Tj66OUj%2FfZ31BnJbPWmgfqKdltCer1ruXbKw%2BBKb28z07VEwrl1s3wkpox38py7L%2Fc3%2BXYk%2BNrz7JMUwysfXyQY6pgEhWmhUWQhd4MiMCLm1yxTDIRo1ru3QG6gUeQdTfO7K3fnSs6WOmopy2oDbFDFdAiEmzBXjeWOEcRHEPDICg4HN92Mw%2B5Qy4yx9N3jALFi7RhqDm8ynQTagXnrUavEJbamb8%2BtPvyHiQOwW4PTlp6FdonnzzLAlY7qTHFdlwjFvfh%2B6VXryBLxhOJSKSUqnChdTW2CvbJwx%2FLLul0zvImdhshNq4kkl&X-Amz-Signature=318f762cd6247d33c4358ef85a5b18595a49062e7cd0a30b780a212e8cca9aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ45E2FE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAznxjQOabTYQfB96Xjzs1PgilGjVow7E%2FFyU5lnNHQkAiBfMWTqkrVRGEjw7yucGUc7b3Nk3%2FzgPftWykmo0OFscSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFy0yZj%2FYU336XYJwKtwDWeEvpKFnS2UXrt2%2FeLZgIp0aUNAwG2CUhWu38oND%2BWp1zcF33hvdiML4BBmFjD7uf6UZNxeBCTZ52VHVgT8OQryi8DWzDFpxW7Kh03Aq1wA3EQBHp2ZZk5GZQyJR7%2B6Se44pwwGDUoGRssXR0XxeTJLuBYOTEVkFgEudLocg0cuTQ5eSutrZw28h4NqLFlJl0d%2F93teX1DqUXweq3nmv1EWaEpjgD45OcB6POQlmAcFHdnUN1Yj6cHapQZFxj3IwT4bQjLyHRRddjXmkTHmr%2B73QlmAjjkLGzb20gftfMfAZTc5sHzhba%2BtBECvnkeCComhYhhDNtFDj%2B1yQOg9i6XSqj7oLaWrWqy3xMOGhVonWwNC3JEQ5vczqaO7Jw9A3Gk69eWWhK3FUqxXCc3ve%2FlX6kj57OaB9RLgQRJFDI%2F287QHf7uhFj4doKp7MjCOz207NCzSZeK%2Fu8UcNn6b2t099xbFaGeoiZCqhkm30fqcaHooGEGe9mnAcvcSIF%2Bshce%2FRQJsOMfrvhigTOdV8kwCJZSYurPNBYz9bNcWrjNa3Tj66OUj%2FfZ31BnJbPWmgfqKdltCer1ruXbKw%2BBKb28z07VEwrl1s3wkpox38py7L%2Fc3%2BXYk%2BNrz7JMUwysfXyQY6pgEhWmhUWQhd4MiMCLm1yxTDIRo1ru3QG6gUeQdTfO7K3fnSs6WOmopy2oDbFDFdAiEmzBXjeWOEcRHEPDICg4HN92Mw%2B5Qy4yx9N3jALFi7RhqDm8ynQTagXnrUavEJbamb8%2BtPvyHiQOwW4PTlp6FdonnzzLAlY7qTHFdlwjFvfh%2B6VXryBLxhOJSKSUqnChdTW2CvbJwx%2FLLul0zvImdhshNq4kkl&X-Amz-Signature=8954f0ad3792bf8dcf3fefb73308a0f988cf6e116926e9663a46ed0b443aa489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


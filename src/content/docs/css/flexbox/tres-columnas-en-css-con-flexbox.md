---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTRN55H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDafRRaDBFVVAIFIvLYbuXRaUW3YORxV0AIorqtZi6zXgIhAMIMhxzhcydqmq4%2BwD5eIGM38rCvSmZ5voo778fJsqo5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5IMTvP2tVPHpvoYgq3AOyW9zoPMRUfd3DgxutUk02o7iW1gtwHsqCOByPG19XMBF%2FFvsk7A6yua4yrkxQrdgNlBT1K%2FbjarZtQVrG5Ehi%2F5LNT7e2uAtvhDDcgN43TQmYFArsyiKJD1jzfgL9T184QpZS17DIc%2BSbzwul0JsQDwqA6SigTJsCm8DWxRWq%2FWCPU1fEy5pMjbkH69ugBqgfENA2alKOh78KNmdKK66UYa1tnlFgOg%2BRFvwUzbxi4phDEQ9uXZ3Vg%2BvPtYAkTqtMRgIGO2HzYX%2Fowaqx72xngHIwIGXUH8r1wcmdYtvJGnNIKkjE3rIxB84GPtTGqyIg5f%2Fh8JgJ1%2BZXd1%2BaqsfvkQRogMjd02VNfV1g7OcpQw%2Bq%2BDP%2FgjZdctt%2FI7EmAoDYXjiyGyguu1tAdDKP%2BRy%2BZOsBYlzFcOpO%2FIsZL2TQUgYbikSDXnhk4fGbhbQJVQ3LEfWjgx8D3g2hYleOvMukAeJJ%2BNdO02qnDGMyYYogBK50eTr%2FvxWuY6B2lOX8Lc9uJlKKgTVYrDkcCwXR4vSIBm%2B7H1HDzqw9Bd%2FYK6OIgpJjr6y894bI9gwUq5FInZSLvv0njEAaSaazmY3UInM1iOXSkOtHOqULj9YyPQHkKwP7aX8%2B7NoA9%2FPe%2BTCimdXJBjqkAUCGK3yAfzJPLDd2vqpwNQ%2BaWPrK8rh62sphBvBF9g2l7O4Y2UQc8SHmktkeq7qX51GfR2TwDK3lnpW8MZIXfmFjQsp2En0paeD92hP00WZqwyfaXp5eS1I76Z%2FmyoLxFucmvkfTzjRplzaxwNqGZ%2Br17PVFswt1G1oVt0Z2rHmz9isLSQyvnfEPvZuDl5VezSwYKcFKXJVZJVfV2QBlULex0NeR&X-Amz-Signature=0464cc9b685474f4a3932d671961b9de862b6caa8af466783d71c0aaa1d772c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTRN55H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDafRRaDBFVVAIFIvLYbuXRaUW3YORxV0AIorqtZi6zXgIhAMIMhxzhcydqmq4%2BwD5eIGM38rCvSmZ5voo778fJsqo5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5IMTvP2tVPHpvoYgq3AOyW9zoPMRUfd3DgxutUk02o7iW1gtwHsqCOByPG19XMBF%2FFvsk7A6yua4yrkxQrdgNlBT1K%2FbjarZtQVrG5Ehi%2F5LNT7e2uAtvhDDcgN43TQmYFArsyiKJD1jzfgL9T184QpZS17DIc%2BSbzwul0JsQDwqA6SigTJsCm8DWxRWq%2FWCPU1fEy5pMjbkH69ugBqgfENA2alKOh78KNmdKK66UYa1tnlFgOg%2BRFvwUzbxi4phDEQ9uXZ3Vg%2BvPtYAkTqtMRgIGO2HzYX%2Fowaqx72xngHIwIGXUH8r1wcmdYtvJGnNIKkjE3rIxB84GPtTGqyIg5f%2Fh8JgJ1%2BZXd1%2BaqsfvkQRogMjd02VNfV1g7OcpQw%2Bq%2BDP%2FgjZdctt%2FI7EmAoDYXjiyGyguu1tAdDKP%2BRy%2BZOsBYlzFcOpO%2FIsZL2TQUgYbikSDXnhk4fGbhbQJVQ3LEfWjgx8D3g2hYleOvMukAeJJ%2BNdO02qnDGMyYYogBK50eTr%2FvxWuY6B2lOX8Lc9uJlKKgTVYrDkcCwXR4vSIBm%2B7H1HDzqw9Bd%2FYK6OIgpJjr6y894bI9gwUq5FInZSLvv0njEAaSaazmY3UInM1iOXSkOtHOqULj9YyPQHkKwP7aX8%2B7NoA9%2FPe%2BTCimdXJBjqkAUCGK3yAfzJPLDd2vqpwNQ%2BaWPrK8rh62sphBvBF9g2l7O4Y2UQc8SHmktkeq7qX51GfR2TwDK3lnpW8MZIXfmFjQsp2En0paeD92hP00WZqwyfaXp5eS1I76Z%2FmyoLxFucmvkfTzjRplzaxwNqGZ%2Br17PVFswt1G1oVt0Z2rHmz9isLSQyvnfEPvZuDl5VezSwYKcFKXJVZJVfV2QBlULex0NeR&X-Amz-Signature=ba2576aa5a922298db262cc273f495f42e76af3e875bf8e2406817acf1742749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


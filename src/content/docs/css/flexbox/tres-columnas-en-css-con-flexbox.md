---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPETNEN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAasx0v228rIJI%2Fodfsafz5z8wQWidx3xqVcFb%2FurRwIhAMbBViNrYqmfd9Zp4pxlVj80%2BMj00qw0o7tvdkybEWcYKv8DCGwQABoMNjM3NDIzMTgzODA1IgwN5liVSA0cuBkAji4q3ANTfRqASfw85oiEb5ZrCvfScSb1B09UOJBfo%2FxkYNiVGaV10K0IVmOBe7HbIugg9b5YLmDjWODtF5N%2BO74Euzemu70CIg6yqm%2FesvSYdqaUmnzqNEx7P964tt%2FjhW4ZWSWeA%2Fi4WeTCzPjYV2MqtDjvS41Fauy7v09vMyZg3MjrsSuedZ4KALSV4sndviefmDvPifTke6hbZzGFx0DsAAg4NKLA7fA9mKaY8JQ5vDoC6ZXP%2FJg45f7H7MVkxKcK32DMFdPZhksXXa8tygLuOiyqRg3sMrFWzObk3lq%2F3DKXi6RsA87QbfXdCjA2IOb8Uwk8d3LuDBwh3inh7s5uV21il8GzIBrGYYPIE7bUypQBWg6UgSS9sdkWH2cKZR3%2FQvnzcUwWoQy8GKf1srfXdrksaQ%2BqcoQln5ryMewKddow41R%2BMzVlEkwk8IXgGKXAZb4fLESLtw4ewgPCNtJN72%2BQFCVVNELITwerOY0cRgiMVOfG1jIkDXMKZaniELbFqoOFMDxk696wsaNEBT3RRuo6grp5NJ4BZPAxZDBqL69ax7sH2gwYK1AMwYe1jWCAc2LMm5wwQV5MBibCtnNDU1nFjEBx7CwHZtkpvHXNq1aOpQP2TZBnEZ%2FUE%2BghUjCtp87JBjqkAZL%2BIvDKF6AkLJTtPb5F%2FPoy%2Fb1SQn7rkR6xlwJ9nP444gVYcXI%2BAw3buGjdRRVZPTIZsy%2BMxXF7ygr37oj7B0eFmM3Pw008uQ%2FUaZ8b%2BT0xV5TwoBIXP%2FuDhqOxfUF251aAPy3BlSvrEFhii3qoFItlpbFxEgZc6%2FDQ2S5elEhP7N9XkqOA2JC54I%2Bja3vvIKVa0UKeO4IlVqhBXOqglFoMBb95&X-Amz-Signature=bae533bd85cd06edbaa0b5faa5f20e2968ccf250845782042cfcc373b5d96c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPETNEN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAasx0v228rIJI%2Fodfsafz5z8wQWidx3xqVcFb%2FurRwIhAMbBViNrYqmfd9Zp4pxlVj80%2BMj00qw0o7tvdkybEWcYKv8DCGwQABoMNjM3NDIzMTgzODA1IgwN5liVSA0cuBkAji4q3ANTfRqASfw85oiEb5ZrCvfScSb1B09UOJBfo%2FxkYNiVGaV10K0IVmOBe7HbIugg9b5YLmDjWODtF5N%2BO74Euzemu70CIg6yqm%2FesvSYdqaUmnzqNEx7P964tt%2FjhW4ZWSWeA%2Fi4WeTCzPjYV2MqtDjvS41Fauy7v09vMyZg3MjrsSuedZ4KALSV4sndviefmDvPifTke6hbZzGFx0DsAAg4NKLA7fA9mKaY8JQ5vDoC6ZXP%2FJg45f7H7MVkxKcK32DMFdPZhksXXa8tygLuOiyqRg3sMrFWzObk3lq%2F3DKXi6RsA87QbfXdCjA2IOb8Uwk8d3LuDBwh3inh7s5uV21il8GzIBrGYYPIE7bUypQBWg6UgSS9sdkWH2cKZR3%2FQvnzcUwWoQy8GKf1srfXdrksaQ%2BqcoQln5ryMewKddow41R%2BMzVlEkwk8IXgGKXAZb4fLESLtw4ewgPCNtJN72%2BQFCVVNELITwerOY0cRgiMVOfG1jIkDXMKZaniELbFqoOFMDxk696wsaNEBT3RRuo6grp5NJ4BZPAxZDBqL69ax7sH2gwYK1AMwYe1jWCAc2LMm5wwQV5MBibCtnNDU1nFjEBx7CwHZtkpvHXNq1aOpQP2TZBnEZ%2FUE%2BghUjCtp87JBjqkAZL%2BIvDKF6AkLJTtPb5F%2FPoy%2Fb1SQn7rkR6xlwJ9nP444gVYcXI%2BAw3buGjdRRVZPTIZsy%2BMxXF7ygr37oj7B0eFmM3Pw008uQ%2FUaZ8b%2BT0xV5TwoBIXP%2FuDhqOxfUF251aAPy3BlSvrEFhii3qoFItlpbFxEgZc6%2FDQ2S5elEhP7N9XkqOA2JC54I%2Bja3vvIKVa0UKeO4IlVqhBXOqglFoMBb95&X-Amz-Signature=d7c47a3dc9bc94d2b1dc3f1d4d9fe71d39c06c8d0941fd5d6ac20824f0f7aef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


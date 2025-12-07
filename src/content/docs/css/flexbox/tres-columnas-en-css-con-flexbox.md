---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFEPGCS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjdg8D%2BX0mnSnlZBg7vH52DaIBT0wJ8Lfk%2F6J%2B4McNiAIgPGuHcj8TXLfzPSqOVh0YPhPwTAkLSsE%2BmbwNCdoigjkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYfFp6Vjptl5ZfDVSrcAxbEo7yQyTvKhriIfb5kU6UMCSZ4omO%2FJefdgw9rpQ6%2F3VqhgsJcX0BUYqufWtEj7hGQrLodyr5VKC4Moc%2FLKSUI64iqMooEYOT1rxkBTcShmjE7wCaw%2BpDC7ulmB4qYASde7fEgkbnGWPa2NULYBRmCNiy6cJRimJas%2FaD7dfprXA6cQ%2BLMYbVY0rS4BoxzTB7XL9qB6g6pIGrFhNstfiy8BGEV5mQlLL6yzfBCSI4ZamMMj7vKht%2FkjwxUighnW7UlFR3uswNKXb2EEJchjF06Tai7bUOodhnCMqUIfOxVXXZcj4l80dHixH7lqhRAkHmS9fEmaUElY2jbFjqgqSY8dUENrRoplg607BxO2%2Bfb%2BWV%2BykAe4z3GBpM4v3KVmOE3Jp%2FQSWzqx95l71vQo55Uf45BvoufLZ5iRZMWI82ayujj8t61VNunNuuEJ7YGkzcAS5kGMCpGzPR4SOEz1qrlUH1aTkMyoM6Uxep4x%2FaYiywyDZTgK3SVHMWiCHNzB5kmBSkpEW0fTOEmeKnokiCBUFkHWXlqadIGSAKnqFKUp4NosqlHQUxz9SJXf128Y6Vj5UwJu%2FE7FpAD9bSudKU%2BoLnSmHfABAsAA%2Ft%2B8RqQPRreTHVICYcDXINvMMeZ1ckGOqUB2zq4XXPfnl1R%2FflAVnBJ7iXYBmgGhMqtB1C5Xq%2BIr0gJdidHfOvHWvze17c%2F9AozmHQ9Ixf2nw4jnXnLvpRr7TPWfGSohZxFb0J2t3wn1TZKSL71j67jdNKqK12tB0irZvmZdzONTVkM3tloH5nPb%2FCdEx2P0pXYRcwcvs95DseqIJZussLdfj%2B4UAZNn3dDkjdsL9Y1iUJVwjPfrxNeZhLibvRA&X-Amz-Signature=977f424c2ede4ad397d307e9e6815d51036bb2f5c360d2ab603cbe1bd7d27481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFEPGCS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjdg8D%2BX0mnSnlZBg7vH52DaIBT0wJ8Lfk%2F6J%2B4McNiAIgPGuHcj8TXLfzPSqOVh0YPhPwTAkLSsE%2BmbwNCdoigjkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYfFp6Vjptl5ZfDVSrcAxbEo7yQyTvKhriIfb5kU6UMCSZ4omO%2FJefdgw9rpQ6%2F3VqhgsJcX0BUYqufWtEj7hGQrLodyr5VKC4Moc%2FLKSUI64iqMooEYOT1rxkBTcShmjE7wCaw%2BpDC7ulmB4qYASde7fEgkbnGWPa2NULYBRmCNiy6cJRimJas%2FaD7dfprXA6cQ%2BLMYbVY0rS4BoxzTB7XL9qB6g6pIGrFhNstfiy8BGEV5mQlLL6yzfBCSI4ZamMMj7vKht%2FkjwxUighnW7UlFR3uswNKXb2EEJchjF06Tai7bUOodhnCMqUIfOxVXXZcj4l80dHixH7lqhRAkHmS9fEmaUElY2jbFjqgqSY8dUENrRoplg607BxO2%2Bfb%2BWV%2BykAe4z3GBpM4v3KVmOE3Jp%2FQSWzqx95l71vQo55Uf45BvoufLZ5iRZMWI82ayujj8t61VNunNuuEJ7YGkzcAS5kGMCpGzPR4SOEz1qrlUH1aTkMyoM6Uxep4x%2FaYiywyDZTgK3SVHMWiCHNzB5kmBSkpEW0fTOEmeKnokiCBUFkHWXlqadIGSAKnqFKUp4NosqlHQUxz9SJXf128Y6Vj5UwJu%2FE7FpAD9bSudKU%2BoLnSmHfABAsAA%2Ft%2B8RqQPRreTHVICYcDXINvMMeZ1ckGOqUB2zq4XXPfnl1R%2FflAVnBJ7iXYBmgGhMqtB1C5Xq%2BIr0gJdidHfOvHWvze17c%2F9AozmHQ9Ixf2nw4jnXnLvpRr7TPWfGSohZxFb0J2t3wn1TZKSL71j67jdNKqK12tB0irZvmZdzONTVkM3tloH5nPb%2FCdEx2P0pXYRcwcvs95DseqIJZussLdfj%2B4UAZNn3dDkjdsL9Y1iUJVwjPfrxNeZhLibvRA&X-Amz-Signature=c8f85cd7d5599aea2fc3fd252c5fe9f6c4e7fdc65565bc2ac70e3631c4070e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


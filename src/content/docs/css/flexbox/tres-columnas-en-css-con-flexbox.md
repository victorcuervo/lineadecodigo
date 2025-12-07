---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JT4UOYN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ0CPOHEGSG%2FD9RNU3gUxDjzHloFY%2FW9XcCrv5v%2BlN4AiEAy4IvzWJ40tYM%2FpxoG%2FCsmSbbhvVBBDy7KJ5Etad2R8AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM48yxjIIkenr1miSircA0yFO5mLSE8wmB2Udw6AEBjZ%2FA8aaKbhN%2BbZ%2BfhsmFbobJMWsSryVb2HQinGSvQRPFGQjhuPZ2EcrpDFIPd4bAjiXRsLZBCAtkaoCWFOACg%2FzqqfgIdBPr0CVERUEuO3SkmKY0vU2JlsZ9jLOE%2BRx0W4%2FV2O66NBFqSd6gLx3i2uI5RZs%2FLKrss17eTl%2BNA8sJr4BRtfF0kLdYnF%2B66SoE4cQ8X5jaq9HfqLlq0SzFHiM%2BE3IPQhkGf4cL5cWy9KavDJ75fNfF8vQ6UijmjCyiRmZFMYNSnEfFOvfD8XtE5Yq38gRg8NMwYpHwWcZ3l7FZ8jMRxq6wgCs6JXE7mhAoqaHMteXO3A6ncylFOkLI1kZz9IIN2boeP7Bhx4mefxiA3Is9JyxWwc%2FtAd36CI4IsbCwmrN5Oq0lhHh2gdJptAtARw7cUsQavc70zz%2B%2BX7H3XmHvDXFiLENYRcySDP0mWyrSaL25ywuqAPtEc5OQwDhCiJQ18Pm1wYZQoogAFpG%2FwbijdHtt376gppMEZ%2FQuhC0MQ6tm%2BApGEaTfqy%2BSInzWB0rNbnDbEgKeZDiXJMNv2HAQGZwVC9NVEkm8NquDZCZX8tmEOAi8wDf82ac%2BGY25WnECDJYlBn0tvMMJ2f1MkGOqUBs1oJiIV4tp0%2Fm%2FBiAtP0WnQiGBDFxJPmwbDkn8pmeDj2CNVXskT844n4iBh%2Bnj3wGFJrdTIgD2j16psQSbReYkXLvubIzPDsGjAhTsYsPM13yzuSu2bVzM9ZDwLQfi%2FLK5zGFskk%2BwC6WNLG6i%2FsAeBjSMLHJZv4G1%2Fnb5zOqLCeDucbWvJDYXxnMz1hG9QrsN7%2B%2FpzIkyS5fMrjEXFvKY%2BdUhM3&X-Amz-Signature=38c82d3f0128c4fbdb65de78fb6d8d00b9a541644f65e5e0bcc09e59a735d43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JT4UOYN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ0CPOHEGSG%2FD9RNU3gUxDjzHloFY%2FW9XcCrv5v%2BlN4AiEAy4IvzWJ40tYM%2FpxoG%2FCsmSbbhvVBBDy7KJ5Etad2R8AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM48yxjIIkenr1miSircA0yFO5mLSE8wmB2Udw6AEBjZ%2FA8aaKbhN%2BbZ%2BfhsmFbobJMWsSryVb2HQinGSvQRPFGQjhuPZ2EcrpDFIPd4bAjiXRsLZBCAtkaoCWFOACg%2FzqqfgIdBPr0CVERUEuO3SkmKY0vU2JlsZ9jLOE%2BRx0W4%2FV2O66NBFqSd6gLx3i2uI5RZs%2FLKrss17eTl%2BNA8sJr4BRtfF0kLdYnF%2B66SoE4cQ8X5jaq9HfqLlq0SzFHiM%2BE3IPQhkGf4cL5cWy9KavDJ75fNfF8vQ6UijmjCyiRmZFMYNSnEfFOvfD8XtE5Yq38gRg8NMwYpHwWcZ3l7FZ8jMRxq6wgCs6JXE7mhAoqaHMteXO3A6ncylFOkLI1kZz9IIN2boeP7Bhx4mefxiA3Is9JyxWwc%2FtAd36CI4IsbCwmrN5Oq0lhHh2gdJptAtARw7cUsQavc70zz%2B%2BX7H3XmHvDXFiLENYRcySDP0mWyrSaL25ywuqAPtEc5OQwDhCiJQ18Pm1wYZQoogAFpG%2FwbijdHtt376gppMEZ%2FQuhC0MQ6tm%2BApGEaTfqy%2BSInzWB0rNbnDbEgKeZDiXJMNv2HAQGZwVC9NVEkm8NquDZCZX8tmEOAi8wDf82ac%2BGY25WnECDJYlBn0tvMMJ2f1MkGOqUBs1oJiIV4tp0%2Fm%2FBiAtP0WnQiGBDFxJPmwbDkn8pmeDj2CNVXskT844n4iBh%2Bnj3wGFJrdTIgD2j16psQSbReYkXLvubIzPDsGjAhTsYsPM13yzuSu2bVzM9ZDwLQfi%2FLK5zGFskk%2BwC6WNLG6i%2FsAeBjSMLHJZv4G1%2Fnb5zOqLCeDucbWvJDYXxnMz1hG9QrsN7%2B%2FpzIkyS5fMrjEXFvKY%2BdUhM3&X-Amz-Signature=8590a3bbb08731e3b1a6886e2a789715fabdc40ddcbf0db5cb2f11b57efbd71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


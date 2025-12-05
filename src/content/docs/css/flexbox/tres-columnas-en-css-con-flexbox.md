---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GFCZXU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1fCGDcoi0Ov8PTGP84JBz1L8wdJuIdKL%2BUBailvl7WwIhAKqEEX9LekwKI3UUwyUkxTn6lXBugVz1tX%2BqFmTZbub9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgznPu5%2BBGAD8e6PKfgq3AOGXbC0qn4ngZMnGDzGUcpPnqtV93p8vq2sQub2oDyAJFfqdU1mwpDgt3uogTW4zp6vIjsE4X7U5QyfUMDixa84IRpvMTqcx%2FTejCEVrKDl%2B7n5C6d7h2SAI1ecdgnX4mldBILrKMrLT4W0C590VBIPaWoSxVaonR5nRBGvC3WgVLA2YJmewkxzo6GGL0fGdmm4I19Ypg1WIcmHMKzSXJw76VgFu94pk%2Bs8QMPeKVK8%2B2%2BVwFnDakbkaMegfYq%2F4xIz7TqC0ZstqufARqDoh2B9Zy4cIqABqJZ18L2Sk72vPqVp3ynAhHUeWNe0jfiW9WEv3qltxVKHZwdePk1qo0ZTySAS8bg3jFt3r1L2Bo7%2Bb30HXdFFS0RyPVSjDKwTJhiASdbwP4eoptlgxmUVSYjEs3XWKHePesTSDqTI%2FziwPT9MofdWqJFzaXV2wVeAB9TeFJkCu7Izar1gaV85ke9x9HRK9%2BIhic2gmAHVym%2FGqj4%2FQXI3out3M%2B8pPnKrl3iZ9j3BKnDJSAUtsZFDfZ0gk7oKWcH5Z%2BShhzVHVrHzCkEoAIVspaLv3lLm%2F6%2BGT5wAfnGynqSztx49G9KbfuN8jpU4NgwhL8%2B7Bi7096Vgwj34sgWl5Jjqca4j9TCzr8nJBjqkAWnYzUfsnfmYe%2BZASRGAB%2BpgNQC10hJMAAVWAkYBPqgCX%2Fvemxthx%2FU8OF74PFu4fzjXQ%2F5W21jD8cF6%2FFWo9QCWqf%2BUTiXAZPl2f3sYH82fetEwfgLlWZI0%2BG%2B%2ByLdeOKZF4MHHvV0s79tlTwKqc6aZQ70oVbWgrrQdDT8pqjtr1lCd%2F27RTrdbzv1dVlPgilZ6SYigyEOfbfh98NxJilFBhaVM&X-Amz-Signature=0d1795c17f548ab06458334bace92ebde390154a3ccc6034b4f1ea11e1219e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GFCZXU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1fCGDcoi0Ov8PTGP84JBz1L8wdJuIdKL%2BUBailvl7WwIhAKqEEX9LekwKI3UUwyUkxTn6lXBugVz1tX%2BqFmTZbub9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgznPu5%2BBGAD8e6PKfgq3AOGXbC0qn4ngZMnGDzGUcpPnqtV93p8vq2sQub2oDyAJFfqdU1mwpDgt3uogTW4zp6vIjsE4X7U5QyfUMDixa84IRpvMTqcx%2FTejCEVrKDl%2B7n5C6d7h2SAI1ecdgnX4mldBILrKMrLT4W0C590VBIPaWoSxVaonR5nRBGvC3WgVLA2YJmewkxzo6GGL0fGdmm4I19Ypg1WIcmHMKzSXJw76VgFu94pk%2Bs8QMPeKVK8%2B2%2BVwFnDakbkaMegfYq%2F4xIz7TqC0ZstqufARqDoh2B9Zy4cIqABqJZ18L2Sk72vPqVp3ynAhHUeWNe0jfiW9WEv3qltxVKHZwdePk1qo0ZTySAS8bg3jFt3r1L2Bo7%2Bb30HXdFFS0RyPVSjDKwTJhiASdbwP4eoptlgxmUVSYjEs3XWKHePesTSDqTI%2FziwPT9MofdWqJFzaXV2wVeAB9TeFJkCu7Izar1gaV85ke9x9HRK9%2BIhic2gmAHVym%2FGqj4%2FQXI3out3M%2B8pPnKrl3iZ9j3BKnDJSAUtsZFDfZ0gk7oKWcH5Z%2BShhzVHVrHzCkEoAIVspaLv3lLm%2F6%2BGT5wAfnGynqSztx49G9KbfuN8jpU4NgwhL8%2B7Bi7096Vgwj34sgWl5Jjqca4j9TCzr8nJBjqkAWnYzUfsnfmYe%2BZASRGAB%2BpgNQC10hJMAAVWAkYBPqgCX%2Fvemxthx%2FU8OF74PFu4fzjXQ%2F5W21jD8cF6%2FFWo9QCWqf%2BUTiXAZPl2f3sYH82fetEwfgLlWZI0%2BG%2B%2ByLdeOKZF4MHHvV0s79tlTwKqc6aZQ70oVbWgrrQdDT8pqjtr1lCd%2F27RTrdbzv1dVlPgilZ6SYigyEOfbfh98NxJilFBhaVM&X-Amz-Signature=5bb36207c57301d4910b121741e03249e4e9fb74ad52784a4ffe5e66ba33f808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


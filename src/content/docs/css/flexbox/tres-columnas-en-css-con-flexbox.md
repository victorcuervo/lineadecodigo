---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2AQ4UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYX80hauPmE8N4b3qveJVqQLhfQcbvvvKkLnRLjL67cAiALWId6SFGVZ2uVnuVHKNVakD4J42BjRC2OUwFR%2FbGsoCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6GV1dP51kaNdBb6KtwDELzewM0FbJImEBlgAZzURUA9PcS9N31UWOfdua11U4Fmo98tgXnlyMlH5NWUKKBdHmLULe4tNJH5K8cIS9EUId9jCTV1gehDupit7%2BFltwNWe1g%2Fk%2BMw4Vvs2ziG%2FaZTwiWP%2FXyqhtxb3168f7SuZBkY6zILrCKSd%2BvKKgOOPDey9Ca35JtsSoGPPRgXEgICtZSpEmvv%2BD2XaPOAwE8VEt09Po6nvPkJFlU2wgKuwuQ%2B5v9npwdStqsAnC6GuYmkG8KdL1uQXVp634kIM0E9CjIayl9wKyqfHXNIpH2jfYEoQBnsVVHJvA0spyZ2lFTwRrhJbPhdhuMH4BiXUl%2BnVC6OfpgtW69D9ebmBAKb6dMILiJ5UAqFpGgkJKMm8u9sBkJc5NP%2ByzH9ripFfVGQerUj%2BmmJphDotaDXJj6J0UcW3Oxss3EZGu5m6zmBxIUHDKtoBUuxdMcEvcz6bHYsNyF%2BUDBEzf1%2FsOHlqZZ13d5Qm5rfm1e8gXYQeE7YoG%2BYrXKtYZXg8wOvN49Q7Kt25V3Y%2BIeGT1og4xeAkLYM9pvwv1v58GdEU6%2FK1GlUzBv5nndg7CNZfLPgRy9BO6M6zLH%2Fas8mZzW9NsQCl9fimkMBBb7sAf04%2BX2mWZEws5rVyQY6pgFfTjhNP2Dj7ZdLSVz%2F4puWHYw5cuSAHKl4TErrx4aD2nzVb1Bi4LM5IZWEwSeAIyB0wU3CXYo2aO0QZG%2BOisK1uy1ndPnfN%2FCqm39f%2F3KZ5%2Blxg5424VSb2HqyilqDiGvZvxU1QgeT0el%2BYtf8CLLcshFr%2B65DNo%2Bj13uC0Ts3V8s3QbtSl%2FT8oUI6i1RHrIoKRr5QZyZ94xsLBPjr8sZ0jPw5mgpm&X-Amz-Signature=e8bc2c5aa4cc111ac27d48733bb7b869b71e8ef6164b8dae9e65a62404474373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2AQ4UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYX80hauPmE8N4b3qveJVqQLhfQcbvvvKkLnRLjL67cAiALWId6SFGVZ2uVnuVHKNVakD4J42BjRC2OUwFR%2FbGsoCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6GV1dP51kaNdBb6KtwDELzewM0FbJImEBlgAZzURUA9PcS9N31UWOfdua11U4Fmo98tgXnlyMlH5NWUKKBdHmLULe4tNJH5K8cIS9EUId9jCTV1gehDupit7%2BFltwNWe1g%2Fk%2BMw4Vvs2ziG%2FaZTwiWP%2FXyqhtxb3168f7SuZBkY6zILrCKSd%2BvKKgOOPDey9Ca35JtsSoGPPRgXEgICtZSpEmvv%2BD2XaPOAwE8VEt09Po6nvPkJFlU2wgKuwuQ%2B5v9npwdStqsAnC6GuYmkG8KdL1uQXVp634kIM0E9CjIayl9wKyqfHXNIpH2jfYEoQBnsVVHJvA0spyZ2lFTwRrhJbPhdhuMH4BiXUl%2BnVC6OfpgtW69D9ebmBAKb6dMILiJ5UAqFpGgkJKMm8u9sBkJc5NP%2ByzH9ripFfVGQerUj%2BmmJphDotaDXJj6J0UcW3Oxss3EZGu5m6zmBxIUHDKtoBUuxdMcEvcz6bHYsNyF%2BUDBEzf1%2FsOHlqZZ13d5Qm5rfm1e8gXYQeE7YoG%2BYrXKtYZXg8wOvN49Q7Kt25V3Y%2BIeGT1og4xeAkLYM9pvwv1v58GdEU6%2FK1GlUzBv5nndg7CNZfLPgRy9BO6M6zLH%2Fas8mZzW9NsQCl9fimkMBBb7sAf04%2BX2mWZEws5rVyQY6pgFfTjhNP2Dj7ZdLSVz%2F4puWHYw5cuSAHKl4TErrx4aD2nzVb1Bi4LM5IZWEwSeAIyB0wU3CXYo2aO0QZG%2BOisK1uy1ndPnfN%2FCqm39f%2F3KZ5%2Blxg5424VSb2HqyilqDiGvZvxU1QgeT0el%2BYtf8CLLcshFr%2B65DNo%2Bj13uC0Ts3V8s3QbtSl%2FT8oUI6i1RHrIoKRr5QZyZ94xsLBPjr8sZ0jPw5mgpm&X-Amz-Signature=41ad8b84e95574b0d9976972c2872f45ff066bcc26dc674b8fb0c5857db6ac31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


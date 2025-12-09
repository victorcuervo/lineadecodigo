---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZSCVDKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNG6IRGfFYoBXkPFhmidq7BR5yu2fec7q%2BSBbVas718QIhAJ%2BdNK92oQUTULYEK4gO%2F3S9QqCGygbX7G2%2FDZLTnArZKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4MYxXjAGBtF4XQPMq3AODEFnXU6lB7AiIpCHI1fzp8pib6EATyPnUtqryfyWcfWtV7YT0k8mtRq8fWJKnpL52%2BD2lM1ZVtqEB%2B6F12Zl7ZBnBhaCLpr0%2FXsYj6g%2B80nyjUoSaN%2BdhS9UXu93Ed0upWAH97cE2gp5ojSGaKtMKMS8%2B7bd0VnrD8aONdi1BNYjtz1MW0mVZQWwfI8HJldB7San2TjJ9lcpu%2FqQpwuxoJOlnYp5NzRyD8Ok4GNhxZQ5TPVQ7X%2FjHkKTsDTMNoQ7p5uZirLHwdoew%2B%2BUUsoD6iCwNACkouGm8EvAkR65n1XqHeMYDolKTed6KgH3F8ORyDNrDJSfYKxGITj74V8lWGtXluGwR2ZJW5FA%2BNY7b7WyT3Tv5RGUfwwaWdWQsPdRahxy9P1EAstjAP8JQGBCayKBZvVEtIQl0Gi3ANNmeoDU8SKdENE3agnjGTBYLek7t4fMKn3zOsmeOLx9nz55GQeRJo82T1500o94lXkFS3p0Fm%2FXYU7vcZhAzdGtijR%2FD3ypfFdn1nN0VQNArX%2BpdcsEJ5J5WgI5IASaZbjDGwEU0Q0awZMW0hSHrHDg6fXdCxnfJGOq%2F4lWfrCuzY7aedJRNcqo2ccNw%2Bu7U3QQxeE9MNRBoSR%2Bt3QAUTzCth9%2FJBjqkAVMftUMSvwT90%2BRazyAua9Jf7hFHmVh%2BC%2FICz4qKKTJ2DWVMgCKlR%2Bvc%2BhTZhHXAcwIlaSXJZTdrCNJeWsgGYSK43zDSv5rvMl6W8%2B1fcJPJ96rTG1H56tRzOtEYGqE9LoZ7Q2L0tmEqKHZBt6DZQnLOQSvKypDwKUrdI3aRbyC%2Bt7QXZd9qfBibdKIn455q52MPvQ6WDTBz6yDA6trpT6d9wlXX&X-Amz-Signature=97ef00c23b7a45f5d2da6a55bd14cb49126458989dac901cc65444fb890bb8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZSCVDKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNG6IRGfFYoBXkPFhmidq7BR5yu2fec7q%2BSBbVas718QIhAJ%2BdNK92oQUTULYEK4gO%2F3S9QqCGygbX7G2%2FDZLTnArZKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4MYxXjAGBtF4XQPMq3AODEFnXU6lB7AiIpCHI1fzp8pib6EATyPnUtqryfyWcfWtV7YT0k8mtRq8fWJKnpL52%2BD2lM1ZVtqEB%2B6F12Zl7ZBnBhaCLpr0%2FXsYj6g%2B80nyjUoSaN%2BdhS9UXu93Ed0upWAH97cE2gp5ojSGaKtMKMS8%2B7bd0VnrD8aONdi1BNYjtz1MW0mVZQWwfI8HJldB7San2TjJ9lcpu%2FqQpwuxoJOlnYp5NzRyD8Ok4GNhxZQ5TPVQ7X%2FjHkKTsDTMNoQ7p5uZirLHwdoew%2B%2BUUsoD6iCwNACkouGm8EvAkR65n1XqHeMYDolKTed6KgH3F8ORyDNrDJSfYKxGITj74V8lWGtXluGwR2ZJW5FA%2BNY7b7WyT3Tv5RGUfwwaWdWQsPdRahxy9P1EAstjAP8JQGBCayKBZvVEtIQl0Gi3ANNmeoDU8SKdENE3agnjGTBYLek7t4fMKn3zOsmeOLx9nz55GQeRJo82T1500o94lXkFS3p0Fm%2FXYU7vcZhAzdGtijR%2FD3ypfFdn1nN0VQNArX%2BpdcsEJ5J5WgI5IASaZbjDGwEU0Q0awZMW0hSHrHDg6fXdCxnfJGOq%2F4lWfrCuzY7aedJRNcqo2ccNw%2Bu7U3QQxeE9MNRBoSR%2Bt3QAUTzCth9%2FJBjqkAVMftUMSvwT90%2BRazyAua9Jf7hFHmVh%2BC%2FICz4qKKTJ2DWVMgCKlR%2Bvc%2BhTZhHXAcwIlaSXJZTdrCNJeWsgGYSK43zDSv5rvMl6W8%2B1fcJPJ96rTG1H56tRzOtEYGqE9LoZ7Q2L0tmEqKHZBt6DZQnLOQSvKypDwKUrdI3aRbyC%2Bt7QXZd9qfBibdKIn455q52MPvQ6WDTBz6yDA6trpT6d9wlXX&X-Amz-Signature=20db8c2cb604fd4422b01c38525b1f89690efcfd5715fe89706db4c141c68eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


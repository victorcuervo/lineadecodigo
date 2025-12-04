---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VRUAAB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Yov%2FeY%2BHHEAPkrwHONQlxso7ePalQWGGN480JfDGuwIhAIO3POEJ0BZknExW80HCbPPBbXQsdLlkUPnQp%2FcOjzaZKv8DCEkQABoMNjM3NDIzMTgzODA1IgzqrLYV27mrPyy5cLcq3AMtipKQm432LLxNHSBZ362yHgHwDakga%2Bu3H234jFtGxplUU%2B47qPIj7yZ1v7qamlD6UfvuJqYUgc08odXFkmqQZkMNoS7%2FrWLThDuuS1CRJUtNbFDok8AxSWEfoP38eSkFDyQGdfTzplnYcMr%2FktO%2BSMALuCXHKTpDKxGrU0GyMvjrFLqc0QVRokBi5zZu2EAfyeYln%2Bim0Dg7BHIl%2FwqMQnp7HiWjpKAwCNsQIkVjAxorjlue%2FTpGiuM4b9wTI58MRm0yuKOYIQICIg6IxCna2Y8X7jXz0uLmCl4r4ZmTji0IyJrJqdtdh4LHllr4zpuKMR%2FJ4BqnaGafLbxxGVywToGP%2Bwd2SP0qwXxD4IuWsYmQRgMETB13KABAKwL9xZuQf6rkaGUEWms7jFsXHV9Y1%2BW4N%2Ff1HK1yHy8R1H2RARTiaadzaegOkj1WslrpgVvOrs2A6aTQjyUL2yp6TobDttQ2wf53xG0t9i6vkEkGGvFkOHCre%2FPAAJtN0HYIMy7QC6IndhQtwZdrrSNjesSxZvTTBMQ%2FkQJ0kdu0NTIpaWYUNKh6Fjgohc2jMCdgjiAD2ahmHp3p9V8SIeFvKHNjA%2BQsqaaALBpaPc%2B65A8dRufpBEebIxVXg2OJbTDk3MbJBjqkAUhaTVVsq1xlzLp1TwYKdu0qEhXGmNMPqy9DrOzkqHF7q%2BkBOELgXLBF%2BcYkIFtQZEPiwGL7Cq%2BM%2F3%2FPoatr3fOyIyvR2CTClkmqO4X3df2qifd0AMACSBwrnKi7uZ2PHJcoel1wGNNn6ilcr2ufT9PQGI6lWn6BHgwr4xirl6ZbAwzT1cGo2UIrElM3E8eIhsH%2FinPGpZFeNz8hBNjD%2BRSVvA66&X-Amz-Signature=62c90772e33e147024a1e5ab8fdf58452ce2257a160819dedcdd8b7f37f7be65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VRUAAB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Yov%2FeY%2BHHEAPkrwHONQlxso7ePalQWGGN480JfDGuwIhAIO3POEJ0BZknExW80HCbPPBbXQsdLlkUPnQp%2FcOjzaZKv8DCEkQABoMNjM3NDIzMTgzODA1IgzqrLYV27mrPyy5cLcq3AMtipKQm432LLxNHSBZ362yHgHwDakga%2Bu3H234jFtGxplUU%2B47qPIj7yZ1v7qamlD6UfvuJqYUgc08odXFkmqQZkMNoS7%2FrWLThDuuS1CRJUtNbFDok8AxSWEfoP38eSkFDyQGdfTzplnYcMr%2FktO%2BSMALuCXHKTpDKxGrU0GyMvjrFLqc0QVRokBi5zZu2EAfyeYln%2Bim0Dg7BHIl%2FwqMQnp7HiWjpKAwCNsQIkVjAxorjlue%2FTpGiuM4b9wTI58MRm0yuKOYIQICIg6IxCna2Y8X7jXz0uLmCl4r4ZmTji0IyJrJqdtdh4LHllr4zpuKMR%2FJ4BqnaGafLbxxGVywToGP%2Bwd2SP0qwXxD4IuWsYmQRgMETB13KABAKwL9xZuQf6rkaGUEWms7jFsXHV9Y1%2BW4N%2Ff1HK1yHy8R1H2RARTiaadzaegOkj1WslrpgVvOrs2A6aTQjyUL2yp6TobDttQ2wf53xG0t9i6vkEkGGvFkOHCre%2FPAAJtN0HYIMy7QC6IndhQtwZdrrSNjesSxZvTTBMQ%2FkQJ0kdu0NTIpaWYUNKh6Fjgohc2jMCdgjiAD2ahmHp3p9V8SIeFvKHNjA%2BQsqaaALBpaPc%2B65A8dRufpBEebIxVXg2OJbTDk3MbJBjqkAUhaTVVsq1xlzLp1TwYKdu0qEhXGmNMPqy9DrOzkqHF7q%2BkBOELgXLBF%2BcYkIFtQZEPiwGL7Cq%2BM%2F3%2FPoatr3fOyIyvR2CTClkmqO4X3df2qifd0AMACSBwrnKi7uZ2PHJcoel1wGNNn6ilcr2ufT9PQGI6lWn6BHgwr4xirl6ZbAwzT1cGo2UIrElM3E8eIhsH%2FinPGpZFeNz8hBNjD%2BRSVvA66&X-Amz-Signature=f01b2db257a3bc54f5537a8d8cfe74164514580225e51bc2e7fbdce76872e2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


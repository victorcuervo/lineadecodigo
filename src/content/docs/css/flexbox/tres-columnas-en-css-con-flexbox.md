---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWL6EJB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzrXaAGbNcBu4mudVvFHN8RTE5vYwZ2sQk9%2BFGSwTG%2FAiEAj8KV%2FlvmIUa0jD9pr1eZRDcb1gyfzniOU8APkR7Xw7gqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ4aqSI2u4EN3cFpircA4oIuutHclWNka6Dz5mLOBpWGwh3Vhq0lp29DHcP6N%2B68mQ6E6sEKdJs%2BEMpkL%2F4h7MpffxAXgLgdBRM4pkKIdRNtEufCh3S1x%2BHBKS%2B9kmD3vOWxQVbufAKTg2Iss8MjZMip40zRmERjaAQD5B6g4CCl9rWzk0EI2%2F1wzjh14ZqMsKm%2Fxr%2B4yNOm6LzpOCWWFooPZ%2FpS1cWG8cLw580aCsHjJvYYi5x2hj89gA0z9erz%2Ff6wxiPonPPww17nBZ5x2UxWkYo6c0PRbKxHnkrgmnoHf%2BirKHqA%2BBkssJI0MjcQff3s%2BFAkbgh6n%2Fc%2Bv5c6QjeeKzHjXCp528m01IeekBNab4x8xjCuyGxUyifrnibhgX3lNjbOyVMzSBu5UtqhMDBR8YzGsJn7Zi9RWpTkzttuGzUqeXUQkn%2Bqfgmcn6H1i4rEr4v0Fns6VqYH211Zvpo7dw206qKccNXQfK%2FCYtp1HW2%2BSQXvtZReLLMYNE4%2FiVvDxXy1gTB%2Bi%2FOY1X5Z3ILA2yUEYBmdJLQg6uBrGs4hj6RsL6umTKtvtK%2BdoAU3aPgvXNbtVSAr8I6mf0rrYWzHCVPjIi20WgQcC5RPk818m9DQwUs5Nfx6OFNyIE5caOPDQ1A29oTeAz4MPaG3MkGOqUBj7X641oDvOqcwgeN1Kq9yXXa4eC7nmcNHrV9RMfSPp1ZtmdkEhx9UN1%2FkqGmHfoQH1hNvMIhSn%2FKCKdxLK7x9eGFnmg6oNnTMuhXnz9iMvuPOmhHCSi%2BjrTfeWpBkERWQRVBNPqbJcuFTr0a0RXS0vgVJrICglUMUQHtpeYE5e%2FDROtLVepUhlUxGNRCbaXzXw%2BcSLbj4ErMnOsp0xX8njqbTJVc&X-Amz-Signature=0a44a023374756a4bfe28e8af379b32862ee4097071ef06a0e0f61786cb722aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWL6EJB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzrXaAGbNcBu4mudVvFHN8RTE5vYwZ2sQk9%2BFGSwTG%2FAiEAj8KV%2FlvmIUa0jD9pr1eZRDcb1gyfzniOU8APkR7Xw7gqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ4aqSI2u4EN3cFpircA4oIuutHclWNka6Dz5mLOBpWGwh3Vhq0lp29DHcP6N%2B68mQ6E6sEKdJs%2BEMpkL%2F4h7MpffxAXgLgdBRM4pkKIdRNtEufCh3S1x%2BHBKS%2B9kmD3vOWxQVbufAKTg2Iss8MjZMip40zRmERjaAQD5B6g4CCl9rWzk0EI2%2F1wzjh14ZqMsKm%2Fxr%2B4yNOm6LzpOCWWFooPZ%2FpS1cWG8cLw580aCsHjJvYYi5x2hj89gA0z9erz%2Ff6wxiPonPPww17nBZ5x2UxWkYo6c0PRbKxHnkrgmnoHf%2BirKHqA%2BBkssJI0MjcQff3s%2BFAkbgh6n%2Fc%2Bv5c6QjeeKzHjXCp528m01IeekBNab4x8xjCuyGxUyifrnibhgX3lNjbOyVMzSBu5UtqhMDBR8YzGsJn7Zi9RWpTkzttuGzUqeXUQkn%2Bqfgmcn6H1i4rEr4v0Fns6VqYH211Zvpo7dw206qKccNXQfK%2FCYtp1HW2%2BSQXvtZReLLMYNE4%2FiVvDxXy1gTB%2Bi%2FOY1X5Z3ILA2yUEYBmdJLQg6uBrGs4hj6RsL6umTKtvtK%2BdoAU3aPgvXNbtVSAr8I6mf0rrYWzHCVPjIi20WgQcC5RPk818m9DQwUs5Nfx6OFNyIE5caOPDQ1A29oTeAz4MPaG3MkGOqUBj7X641oDvOqcwgeN1Kq9yXXa4eC7nmcNHrV9RMfSPp1ZtmdkEhx9UN1%2FkqGmHfoQH1hNvMIhSn%2FKCKdxLK7x9eGFnmg6oNnTMuhXnz9iMvuPOmhHCSi%2BjrTfeWpBkERWQRVBNPqbJcuFTr0a0RXS0vgVJrICglUMUQHtpeYE5e%2FDROtLVepUhlUxGNRCbaXzXw%2BcSLbj4ErMnOsp0xX8njqbTJVc&X-Amz-Signature=94cacf7a50b3c0513c875ae0accc52615838d0172348482526e219a0afc9a8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


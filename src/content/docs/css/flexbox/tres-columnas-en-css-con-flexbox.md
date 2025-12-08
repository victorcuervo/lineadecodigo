---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWPAX55%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFXOIQFdC%2BxvgcpbLXnLixAWOijGZcwxTkk53npVpQJAiEAxPUJFxSx%2FktDG5oAPjv4aadt2Rb5quB8aBeuWcWBiZ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwUr6JHNqwfTOTYdyrcAxPOZIdYUlzskft1y2cb%2F5zZWsFl9FFJyZuhf1skWoqEz6Gai%2FvYo0hETuwgre%2FWOhM3RYXApWO%2FVq8GznaFuMtAXTkNjlX%2BTxGYH4awVBCXZl8WPe0zH9%2BHTU2rTsKwvmnvzPZYpt8TTyDGtNo%2Fotw7IlCW6hlrW7iD%2BFCMLy%2Fja%2FIRO6iJq0ElnlKuk%2BOetGzp%2F7cDXIQL6AEGnI2bnC93SfSt1D8%2BVPIxdqHongq4%2BfyghoEFUE6x1ZidaR%2FenFizut6J6xeYaO0I%2BKK1TLXufRs93zKiOWJq4ZtmdXDNNpgBlaAViFm%2B8ma3MrwvxovBvZl78mBbmN50EvCdI9hy%2FpJNl783kXhnDSxPiWW3IjxQ%2FW%2FoCor7raumAD7YUUz2C1O4cb9vT8u2Fr1Tx8Jy6pgnqaC2Tiyys491qTo3cKnIIIsTd3GFnk9PC%2FJcWCD047zIM9DAT19tdcEelBHSSLNyJPcQ%2BI3%2F%2F5odt4EVo%2BZGuNNZM6tJtVxqTw965%2Fw6o06xJHVL12Em1QnLFMEr1FqNRyEtozuzdHemTnDpZTal81XfEPcxrhSQL6TJ%2F50wzWzDxkj0v8wbfHKyEVGe%2Bh0NiWgTaK9mac2QiS6Zammdjh3gkiHDAq3YMNXt2ckGOqUBLnUUH44LqOMiVZfJ1cljZP433Dd9DekhTidATHPFCeZV150WSUE%2FwO%2Fo2%2Fm5TO4WSzgw7nMhLuqe31VfzeKjN1gALTc%2FSA4Y63pqUEMh6Lgs9v%2FqHTh6oErZ%2BIb%2B164ls7oee9hRqgDof4wcnlTJRz9eTDHT%2FPYPOmqK7EIO6K%2FvRDLTyKwTYR0hooeqbo0K2NhaOL3fvzsWQR9nMh6bbk%2BLg7xK&X-Amz-Signature=5ec22df983e2e992f79e48b4bf98acd0973187f4b1e0c760963e8b3c6b0737c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWPAX55%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFXOIQFdC%2BxvgcpbLXnLixAWOijGZcwxTkk53npVpQJAiEAxPUJFxSx%2FktDG5oAPjv4aadt2Rb5quB8aBeuWcWBiZ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwUr6JHNqwfTOTYdyrcAxPOZIdYUlzskft1y2cb%2F5zZWsFl9FFJyZuhf1skWoqEz6Gai%2FvYo0hETuwgre%2FWOhM3RYXApWO%2FVq8GznaFuMtAXTkNjlX%2BTxGYH4awVBCXZl8WPe0zH9%2BHTU2rTsKwvmnvzPZYpt8TTyDGtNo%2Fotw7IlCW6hlrW7iD%2BFCMLy%2Fja%2FIRO6iJq0ElnlKuk%2BOetGzp%2F7cDXIQL6AEGnI2bnC93SfSt1D8%2BVPIxdqHongq4%2BfyghoEFUE6x1ZidaR%2FenFizut6J6xeYaO0I%2BKK1TLXufRs93zKiOWJq4ZtmdXDNNpgBlaAViFm%2B8ma3MrwvxovBvZl78mBbmN50EvCdI9hy%2FpJNl783kXhnDSxPiWW3IjxQ%2FW%2FoCor7raumAD7YUUz2C1O4cb9vT8u2Fr1Tx8Jy6pgnqaC2Tiyys491qTo3cKnIIIsTd3GFnk9PC%2FJcWCD047zIM9DAT19tdcEelBHSSLNyJPcQ%2BI3%2F%2F5odt4EVo%2BZGuNNZM6tJtVxqTw965%2Fw6o06xJHVL12Em1QnLFMEr1FqNRyEtozuzdHemTnDpZTal81XfEPcxrhSQL6TJ%2F50wzWzDxkj0v8wbfHKyEVGe%2Bh0NiWgTaK9mac2QiS6Zammdjh3gkiHDAq3YMNXt2ckGOqUBLnUUH44LqOMiVZfJ1cljZP433Dd9DekhTidATHPFCeZV150WSUE%2FwO%2Fo2%2Fm5TO4WSzgw7nMhLuqe31VfzeKjN1gALTc%2FSA4Y63pqUEMh6Lgs9v%2FqHTh6oErZ%2BIb%2B164ls7oee9hRqgDof4wcnlTJRz9eTDHT%2FPYPOmqK7EIO6K%2FvRDLTyKwTYR0hooeqbo0K2NhaOL3fvzsWQR9nMh6bbk%2BLg7xK&X-Amz-Signature=6ccf4e7b55d66e3606ab454aba3e4a7b8cd545740d3ac407d151ddaae0b997ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


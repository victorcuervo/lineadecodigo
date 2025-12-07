---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWABMHZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BjD4dd%2FFo2qYx49BRKpkBBGuXUQTlypYdr5tAW3oegIhAJOENGQnYccLQyYUyfvVgDyzV9fY7il9zLZNDC46WjQrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqR01X5O1%2F9nx%2B1nkq3ANXbvk4pvSTglGuQYbHuCwPYB0uGM%2FpEK7h1X%2B%2BBYYt%2FiBHvyuXwiciBm2urvytmY6TbmS1EFZH1lItxWXlpsFA8dM7y6fFhdwJaVc3AKiV269KAYr4DHtAvDr6xDcXcWq9q1ZQhu2Q8I7rK0APTzwoGLEFhvjE6ctCha8oy7gwMjCZ3FggMQ8LmPfdJ8fKT4SWNMGM3ouLnOLVf3kEvKeacicjw2I4SU1z12jdzaQ7gF%2BRN9NK6M5BHESd5G%2BCU1eXpulbncuYDGK0C2vIayAFXTl6SWRM01duBgmwLKvjxVquM%2BAADz31%2FN9EBjN8zEY20cG3StuhqXsPkJkEtuUvgrDNYHih4oBOi4%2BHHuJ1ZjC37erOuXGBxO669Wvr5ZN2GU9JfsnnFbFD5IYPIzChyckCqwQn8EFzFioiCIjLCmxJDKpSpHsHTv7hydc5CaFCnpL4Nrv0BYjl9usFkXP3QXpac4XcjeqLTsz3KAa81wrioeANhM6iYA52ICLFAKSuXa6Pvsp2fd5vv0lIxwlg5zRTs%2F1ambzu2KkwSGOM88gQXzbqzHv2MFtl%2F630b0mYAObco6bLKoMYP5jChADsUTE6jzYZ7SRzTP%2BvnQBsB%2BXaHlsi82ghLDiLDTC7%2FdLJBjqkAdVHz5m3S1RDySz6LRRa0yvXO9Wq9rSChAhOjNOqVuHI7uli4%2Fy1%2Bf6iIU9wcdiDDlji67qjaLvnwje26djxndZrfp1ifiAhqTkcLsp0zd72FJln9W7u2jqvzFf6ignk1FHCxq7nPbLWhRJreuTpEdA6mEBkxLRz33SmANlk75LJMXnH%2BYkwtfa5PrpXF0cgdcySpxOv0niMw3Z1LPcqPMdVN%2BPZ&X-Amz-Signature=9043a4e8a037f4f2f420a89f2b6651cb3e319285ddeba9e037eda5631f4d94da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWABMHZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BjD4dd%2FFo2qYx49BRKpkBBGuXUQTlypYdr5tAW3oegIhAJOENGQnYccLQyYUyfvVgDyzV9fY7il9zLZNDC46WjQrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqR01X5O1%2F9nx%2B1nkq3ANXbvk4pvSTglGuQYbHuCwPYB0uGM%2FpEK7h1X%2B%2BBYYt%2FiBHvyuXwiciBm2urvytmY6TbmS1EFZH1lItxWXlpsFA8dM7y6fFhdwJaVc3AKiV269KAYr4DHtAvDr6xDcXcWq9q1ZQhu2Q8I7rK0APTzwoGLEFhvjE6ctCha8oy7gwMjCZ3FggMQ8LmPfdJ8fKT4SWNMGM3ouLnOLVf3kEvKeacicjw2I4SU1z12jdzaQ7gF%2BRN9NK6M5BHESd5G%2BCU1eXpulbncuYDGK0C2vIayAFXTl6SWRM01duBgmwLKvjxVquM%2BAADz31%2FN9EBjN8zEY20cG3StuhqXsPkJkEtuUvgrDNYHih4oBOi4%2BHHuJ1ZjC37erOuXGBxO669Wvr5ZN2GU9JfsnnFbFD5IYPIzChyckCqwQn8EFzFioiCIjLCmxJDKpSpHsHTv7hydc5CaFCnpL4Nrv0BYjl9usFkXP3QXpac4XcjeqLTsz3KAa81wrioeANhM6iYA52ICLFAKSuXa6Pvsp2fd5vv0lIxwlg5zRTs%2F1ambzu2KkwSGOM88gQXzbqzHv2MFtl%2F630b0mYAObco6bLKoMYP5jChADsUTE6jzYZ7SRzTP%2BvnQBsB%2BXaHlsi82ghLDiLDTC7%2FdLJBjqkAdVHz5m3S1RDySz6LRRa0yvXO9Wq9rSChAhOjNOqVuHI7uli4%2Fy1%2Bf6iIU9wcdiDDlji67qjaLvnwje26djxndZrfp1ifiAhqTkcLsp0zd72FJln9W7u2jqvzFf6ignk1FHCxq7nPbLWhRJreuTpEdA6mEBkxLRz33SmANlk75LJMXnH%2BYkwtfa5PrpXF0cgdcySpxOv0niMw3Z1LPcqPMdVN%2BPZ&X-Amz-Signature=457b6d7a915ca1a348322e59875043ae4a29fbc78c835317657f57df7f263013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


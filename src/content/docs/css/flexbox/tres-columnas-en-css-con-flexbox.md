---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPAWKRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeZbnPX2icY160%2Fzl6ltT7PMMLlFZ%2BudjvAUBW3%2BbxnwIgA5ScncinLzbKJoz6AcFoAnlpBj02VFgxWYenZ%2FUZkbIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNPGfaeLBfWkV2p5uCrcA4h7p0DV4nuxMAXX%2FFzB8Q8EI4kWHZ9dAwe1sPr8BIak2diCOG8nNKJn1m2ae9rOVbkePgMYLq9RIXCiDbDJYjm21oh%2FdRIPLnzV02ZMMwI9OmHeCs5esRVYLEal9rk5GuiLB%2BmgBdbPsuceJr8t207XIu9wNG4dFD0SMUVBkO3ygnhlPpUKCXLNIxOCWEip84oHHcvE9gNQ4X9ryN6%2BMcijAsB3t416%2B3%2BK4I9tSJPcms4FFBI9nscVvFUaot%2Bm2r5H0dMeosxW9N3MMmzc6SR%2BVQSzeIYSHiGxwiLRCrVcLewkuP2lDaMq3tXmj5XGa7%2FAfnhJ4xuFKx8B7UxGYPwsYf1B0pG6uxX0LJjFS0MtAkZWjg1ZpV0eG%2FSBHENMP86AgZ%2BlPaydsW6%2B2IcccF0QOCiy2K07C55JKuFFjRA7FZVw8iqf7WsdksTN0ss03bkjJlOLaW3iWHuOOghKJ85QgjBvG3YUVbl58DpUWGTfA4d0dx0eoyDV0NQhh9ZbAY2%2FUBt5bd9WDjgCcfGTTtVlXgoBk6TwkGOm7Y3x6lHajSKkxAVoUj5eAVUHy9O3TpC788ZwUEz90%2B1sDKwU9Zm%2BtWLLEiVlA0zreJzTksQieGw9GzU6LN7vzbHKMOqqyckGOqUBRficrlsToRGndBuhkO0H5qoJtJUQXYOJf2brxAQlgA6KiR91TcitvEZUJSol3Tf1lH86p2NYXmqiFGzAm5in3jPRTUpgUdm%2FlwO0lPaHV%2BIrTpP2VGpN3NJcqkFvyMp0Hsf5ITeyrxD1lqTkmgERWvSp%2B3s1dQzubO5w1qncpY8SdpACsxbOgQtncCY6MInO427L6MIEdY8%2FWhHDW7p3%2FcGs678J&X-Amz-Signature=6794277a9849232e8f40fa4772761e5e255ff29546b9053af47aa2ad97dd98b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPAWKRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeZbnPX2icY160%2Fzl6ltT7PMMLlFZ%2BudjvAUBW3%2BbxnwIgA5ScncinLzbKJoz6AcFoAnlpBj02VFgxWYenZ%2FUZkbIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNPGfaeLBfWkV2p5uCrcA4h7p0DV4nuxMAXX%2FFzB8Q8EI4kWHZ9dAwe1sPr8BIak2diCOG8nNKJn1m2ae9rOVbkePgMYLq9RIXCiDbDJYjm21oh%2FdRIPLnzV02ZMMwI9OmHeCs5esRVYLEal9rk5GuiLB%2BmgBdbPsuceJr8t207XIu9wNG4dFD0SMUVBkO3ygnhlPpUKCXLNIxOCWEip84oHHcvE9gNQ4X9ryN6%2BMcijAsB3t416%2B3%2BK4I9tSJPcms4FFBI9nscVvFUaot%2Bm2r5H0dMeosxW9N3MMmzc6SR%2BVQSzeIYSHiGxwiLRCrVcLewkuP2lDaMq3tXmj5XGa7%2FAfnhJ4xuFKx8B7UxGYPwsYf1B0pG6uxX0LJjFS0MtAkZWjg1ZpV0eG%2FSBHENMP86AgZ%2BlPaydsW6%2B2IcccF0QOCiy2K07C55JKuFFjRA7FZVw8iqf7WsdksTN0ss03bkjJlOLaW3iWHuOOghKJ85QgjBvG3YUVbl58DpUWGTfA4d0dx0eoyDV0NQhh9ZbAY2%2FUBt5bd9WDjgCcfGTTtVlXgoBk6TwkGOm7Y3x6lHajSKkxAVoUj5eAVUHy9O3TpC788ZwUEz90%2B1sDKwU9Zm%2BtWLLEiVlA0zreJzTksQieGw9GzU6LN7vzbHKMOqqyckGOqUBRficrlsToRGndBuhkO0H5qoJtJUQXYOJf2brxAQlgA6KiR91TcitvEZUJSol3Tf1lH86p2NYXmqiFGzAm5in3jPRTUpgUdm%2FlwO0lPaHV%2BIrTpP2VGpN3NJcqkFvyMp0Hsf5ITeyrxD1lqTkmgERWvSp%2B3s1dQzubO5w1qncpY8SdpACsxbOgQtncCY6MInO427L6MIEdY8%2FWhHDW7p3%2FcGs678J&X-Amz-Signature=283970c1c763c4c097ecc722d9adb4bd6867281ec658219e280b2d9767c901ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


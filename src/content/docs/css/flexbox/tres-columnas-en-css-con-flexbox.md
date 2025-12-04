---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWQKDQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDphP1%2FhC99Pf%2F4z68Nvgk5oqskggxi1PwuFOJk4zdw3AiEAhcLJymGpHOQIzwGLzVzuD688jrsasS%2FoesHGoaa5L%2Bwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBYx2UDKTf42IwF%2B3ircAxK2esDveJrCM5HeC5Llng5rLLHNLfNDVCnx8kREeHLLenudAYEnHvy83VqV2KTJr2icwFEpirFNJpurXIyRNa%2B%2F4WsjWsUzn%2BfSoRmsopoTgIMZ%2BnFszmsyD0JVXVfcUirar9abqkS7udjLCZ2%2BOn%2FCWUOELgpcW3JeiluMmkzahvYDnATbV4mePW7nHqeedIRjTfBp2JjScHUlDG%2BAtycBeQTPw2PWjp7Nw5PhfEqzza0NpcmqDx%2BXoomf6Hik%2FjkcFfOJuqJkmXIWZC3wPjaEIlDc4DmOqaImyQbuQMXM8pkvNIVR0oDxJeSMQVa9APDYdGR195JxswirrAhEzmDRJHlhkG8LvVr13Fopj8uwBLL9CudwvTJzGtep32YgvgI9nDxI7mbYwAE1%2BHU8NyMP32zPXdZn5GQPEp8Y6R9AiQuuK7b%2BqsYpnCZBJusOe2Tn0r4xVXkGF55Cw8Hb%2FhmrDqCxSLAn0i%2BHJqo8Gmb1jRXs%2FwxjmmvDz2OAX4EHrYmZFbweiko7nFaSE51ga%2BaoMWHUrva8ril6PMEDQOIwdBuoO6hw52lZr8ScJTdYGyjiFiqjvucOWVwze3GOAwDM51NMauLoTauLRn2syRWmv4GF7tzN9EeCmGJ3MNzoxMkGOqUBIjEuUNBBWqIQ8wcGwF6S9uz%2BrG%2BA3LBBnIYY1yFumJ6Y0YCXnwgjdfUjJv7lTpVvck3oxufC8lKRVIh8%2BmOW0f5iiAyVytJ9HJS%2Fw7zZthp7bHDEG2aVVb4E0aGV%2BFvwbaMcnuzYqDRiHo9kityKdJrZdLJ%2FhwPbWVzqFWOck72nGbexdBcxlt2KQYGOM9DA5w4Mxwi%2FssSkYOUljlF8hV1f5PwN&X-Amz-Signature=b9aa1594b52af087113646d4e5e726f64dce20df7f96cb7722098a67d45995d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWQKDQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDphP1%2FhC99Pf%2F4z68Nvgk5oqskggxi1PwuFOJk4zdw3AiEAhcLJymGpHOQIzwGLzVzuD688jrsasS%2FoesHGoaa5L%2Bwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBYx2UDKTf42IwF%2B3ircAxK2esDveJrCM5HeC5Llng5rLLHNLfNDVCnx8kREeHLLenudAYEnHvy83VqV2KTJr2icwFEpirFNJpurXIyRNa%2B%2F4WsjWsUzn%2BfSoRmsopoTgIMZ%2BnFszmsyD0JVXVfcUirar9abqkS7udjLCZ2%2BOn%2FCWUOELgpcW3JeiluMmkzahvYDnATbV4mePW7nHqeedIRjTfBp2JjScHUlDG%2BAtycBeQTPw2PWjp7Nw5PhfEqzza0NpcmqDx%2BXoomf6Hik%2FjkcFfOJuqJkmXIWZC3wPjaEIlDc4DmOqaImyQbuQMXM8pkvNIVR0oDxJeSMQVa9APDYdGR195JxswirrAhEzmDRJHlhkG8LvVr13Fopj8uwBLL9CudwvTJzGtep32YgvgI9nDxI7mbYwAE1%2BHU8NyMP32zPXdZn5GQPEp8Y6R9AiQuuK7b%2BqsYpnCZBJusOe2Tn0r4xVXkGF55Cw8Hb%2FhmrDqCxSLAn0i%2BHJqo8Gmb1jRXs%2FwxjmmvDz2OAX4EHrYmZFbweiko7nFaSE51ga%2BaoMWHUrva8ril6PMEDQOIwdBuoO6hw52lZr8ScJTdYGyjiFiqjvucOWVwze3GOAwDM51NMauLoTauLRn2syRWmv4GF7tzN9EeCmGJ3MNzoxMkGOqUBIjEuUNBBWqIQ8wcGwF6S9uz%2BrG%2BA3LBBnIYY1yFumJ6Y0YCXnwgjdfUjJv7lTpVvck3oxufC8lKRVIh8%2BmOW0f5iiAyVytJ9HJS%2Fw7zZthp7bHDEG2aVVb4E0aGV%2BFvwbaMcnuzYqDRiHo9kityKdJrZdLJ%2FhwPbWVzqFWOck72nGbexdBcxlt2KQYGOM9DA5w4Mxwi%2FssSkYOUljlF8hV1f5PwN&X-Amz-Signature=104e1871096ddb791f3193a98ed0b8b3c6dfae9c92ee3efd117da721ebf13f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


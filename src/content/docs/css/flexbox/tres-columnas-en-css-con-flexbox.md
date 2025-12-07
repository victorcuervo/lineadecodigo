---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YPG3YQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwBq1Pvrw9kIexvuUwSiUuy55qaRn%2FZurkzs2mZiQgMQIhAK9bGLxQ4Z4Vh8v9PEFcSevE0D6y7b7Ej7sOVW%2Ftr%2BcEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx44fZ%2F614%2B0Haz2VMq3AMZeqiaz%2FFHNzywpgC%2FcKKIkd1wfGyp5KERJpsOcuolpPQQtbvG7UbaYbMjyMIUr%2BgkHwBLuG7vwImv56OE58zT4vN1k1yHlM3s4Aqz2FQoA0R723DVC9o11g3zLUMxbfsFngunjMalQ6Ej3CV1Slf0HL7d8MFCs7%2Bmv3Up0xS2gkeF1rzAB9ioyhOX8c4O0Kuz23h3xcBFXZWA%2B0slpsGkdcYwdg%2Bog5gwaXrs5iZ5rorKK5SCYnyeXZHyYhW6G4MQPp3L0FOdYqGn1oP9cpa7QX4t7Sm%2BnlpqrJ6wavgwig7o2QjHk%2FDUdqLW32c5yB23EhIgtFjUBAg0SgFFrWgZqnDYIhLYURR%2FcbLfZVvOWXjAaMlMyAg2NkCZVbmSEOh4DGHjEaaF4eCuJ0R4tgyrU1SSZtD75J6O8DjipO2rkEtNn6RzXUDP%2BMc5%2BZrzWQGJNVrYmyF8QVE8Tr5uB%2BNjwUjq%2FnFUcQpZXJrUCTt6MC0vebip%2F%2B7G3oh2Pc3FUqYt%2BQhuIcaDrBXv53ZdnOhISDPV8PO6Bq7RvhQxtQ45xVfhpDBt%2Bv7Afhq56pC0CCqQKRIJ%2FABh3a5XGNt8o3g30Q99PVRKb98vggFmAamROoc6RD532aNiBWdyDDCvmtXJBjqkAcuhN%2BNGx9pqPafJ64U0NeesDNq%2FnwB1GBQK39ARS%2FOPUEMpiu%2B8sC8X%2FBxxz8DQNaw9W5igKNi%2BnIqCJEb1qWIDWIVrLxp7X%2B%2B70iVbnT7Q3eUhfcf0VqxXWLRsh3sMKgSsFoziNvAsfIOkqBjMt34HTmoPcRPaey9Ueqn%2F7HMlv8kzHFRGNbCLen7a6H%2FnbD7Oa1oKl9RZCShrDSNJ4oinrGP2&X-Amz-Signature=c5c00488062b06686b31bc3672183dbb2fb17e0d5fa194f98083ff6437c4c328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YPG3YQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwBq1Pvrw9kIexvuUwSiUuy55qaRn%2FZurkzs2mZiQgMQIhAK9bGLxQ4Z4Vh8v9PEFcSevE0D6y7b7Ej7sOVW%2Ftr%2BcEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx44fZ%2F614%2B0Haz2VMq3AMZeqiaz%2FFHNzywpgC%2FcKKIkd1wfGyp5KERJpsOcuolpPQQtbvG7UbaYbMjyMIUr%2BgkHwBLuG7vwImv56OE58zT4vN1k1yHlM3s4Aqz2FQoA0R723DVC9o11g3zLUMxbfsFngunjMalQ6Ej3CV1Slf0HL7d8MFCs7%2Bmv3Up0xS2gkeF1rzAB9ioyhOX8c4O0Kuz23h3xcBFXZWA%2B0slpsGkdcYwdg%2Bog5gwaXrs5iZ5rorKK5SCYnyeXZHyYhW6G4MQPp3L0FOdYqGn1oP9cpa7QX4t7Sm%2BnlpqrJ6wavgwig7o2QjHk%2FDUdqLW32c5yB23EhIgtFjUBAg0SgFFrWgZqnDYIhLYURR%2FcbLfZVvOWXjAaMlMyAg2NkCZVbmSEOh4DGHjEaaF4eCuJ0R4tgyrU1SSZtD75J6O8DjipO2rkEtNn6RzXUDP%2BMc5%2BZrzWQGJNVrYmyF8QVE8Tr5uB%2BNjwUjq%2FnFUcQpZXJrUCTt6MC0vebip%2F%2B7G3oh2Pc3FUqYt%2BQhuIcaDrBXv53ZdnOhISDPV8PO6Bq7RvhQxtQ45xVfhpDBt%2Bv7Afhq56pC0CCqQKRIJ%2FABh3a5XGNt8o3g30Q99PVRKb98vggFmAamROoc6RD532aNiBWdyDDCvmtXJBjqkAcuhN%2BNGx9pqPafJ64U0NeesDNq%2FnwB1GBQK39ARS%2FOPUEMpiu%2B8sC8X%2FBxxz8DQNaw9W5igKNi%2BnIqCJEb1qWIDWIVrLxp7X%2B%2B70iVbnT7Q3eUhfcf0VqxXWLRsh3sMKgSsFoziNvAsfIOkqBjMt34HTmoPcRPaey9Ueqn%2F7HMlv8kzHFRGNbCLen7a6H%2FnbD7Oa1oKl9RZCShrDSNJ4oinrGP2&X-Amz-Signature=4017d1f5bb28578db4dcd1032a46d915bdd93bcf0fd507f86c486de225a7b2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


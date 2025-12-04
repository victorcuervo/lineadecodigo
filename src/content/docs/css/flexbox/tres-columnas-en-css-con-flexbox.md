---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2MR2QA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDfN2S7GzQlS6uLvJeWx4TJmfjV2ms9RoXhv0nSW6k9MAiEAiIWuRuWQzX6nLQ3uVwvHV%2F5d%2BTfk7OiRw%2BiwcjbZ6jYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDM6Y7ipV1yuyqjtZyrcA3ZzF0y3WxJijr0rKCyuFUO0AWMPSffReZfTFzW01IIWnSrksb4acwE4MTVq%2BfZ4vVazEnxUP5Cq0OT11j9j3JOSNlQYHcqezHT4it6VSph72fnSkCMNcdqD791qADywx%2BZX5T%2FF8jcBFWXNusbp10ok%2FQvgOncr%2FT0HdgQRzsdI0i1T6PoOb85Ar%2BFM2ZX8NxbQgxYYSIC2zMd4%2F4twZYvP4R3LRSIwZ5RLPoT7IKj95jZol35l1gVrL%2Bj9X6EyWyOhLgsnGJ6XBqSr8%2F488LfuS1pCag9S%2FY7HzoWGJDlQa0SVod2kNHR47KDjTBxACgncphiNbTr9JcNt6jgNn1ahxitIL6HjgmFHUEHvn4Yv%2BaVoQuhEJ4eLQqcx%2FwBPcdKlh025B81wapzh6GJnSmOjHIpK8z9aK3x0C0ZG7ZtY2lmqH6AHdKNBvixHRNvEGIh5mdUNITk2%2Fhk3aDgoAfIcQzzHSXLwanPXy9StmpIuRhjwH9xbHqv7NSqreoTi5O9yNL176EuxFDRMI870ihQNeffXND84LO7kpj4C43UeC4K0KgWHl7f3uPw0cvxvwkdguXlr2vWs0wg9nWSUUOib781OHFXfpa9PzWilAsC0e48ZtIUHqugF9qn%2BMLfLxMkGOqUB9NapDlawXYFeu5TuMVKO0M5U6cJoeCAf3%2F0UsPwXLJnd%2FDzvN%2BwKq13qPkjCTXrLmM5x1X2sVSqoyaFjbmXVqZU5YOAsnz8GKlgIr7zTbIrUUqy0ZSTgci37%2BWFonvtPSr0xi59vgboTqL%2BOqWW7dDWyQ7ZVPM7I9eob07mkWvE2b5o29UvAfMZIQ4n%2FW3cJhdQAhDioHxHX1P%2F9j4eMP00boXNR&X-Amz-Signature=0b2fbcfbfe1d8afae840c99304857116a8a71278276438bc6cefa069fc9a6256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2MR2QA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDfN2S7GzQlS6uLvJeWx4TJmfjV2ms9RoXhv0nSW6k9MAiEAiIWuRuWQzX6nLQ3uVwvHV%2F5d%2BTfk7OiRw%2BiwcjbZ6jYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDM6Y7ipV1yuyqjtZyrcA3ZzF0y3WxJijr0rKCyuFUO0AWMPSffReZfTFzW01IIWnSrksb4acwE4MTVq%2BfZ4vVazEnxUP5Cq0OT11j9j3JOSNlQYHcqezHT4it6VSph72fnSkCMNcdqD791qADywx%2BZX5T%2FF8jcBFWXNusbp10ok%2FQvgOncr%2FT0HdgQRzsdI0i1T6PoOb85Ar%2BFM2ZX8NxbQgxYYSIC2zMd4%2F4twZYvP4R3LRSIwZ5RLPoT7IKj95jZol35l1gVrL%2Bj9X6EyWyOhLgsnGJ6XBqSr8%2F488LfuS1pCag9S%2FY7HzoWGJDlQa0SVod2kNHR47KDjTBxACgncphiNbTr9JcNt6jgNn1ahxitIL6HjgmFHUEHvn4Yv%2BaVoQuhEJ4eLQqcx%2FwBPcdKlh025B81wapzh6GJnSmOjHIpK8z9aK3x0C0ZG7ZtY2lmqH6AHdKNBvixHRNvEGIh5mdUNITk2%2Fhk3aDgoAfIcQzzHSXLwanPXy9StmpIuRhjwH9xbHqv7NSqreoTi5O9yNL176EuxFDRMI870ihQNeffXND84LO7kpj4C43UeC4K0KgWHl7f3uPw0cvxvwkdguXlr2vWs0wg9nWSUUOib781OHFXfpa9PzWilAsC0e48ZtIUHqugF9qn%2BMLfLxMkGOqUB9NapDlawXYFeu5TuMVKO0M5U6cJoeCAf3%2F0UsPwXLJnd%2FDzvN%2BwKq13qPkjCTXrLmM5x1X2sVSqoyaFjbmXVqZU5YOAsnz8GKlgIr7zTbIrUUqy0ZSTgci37%2BWFonvtPSr0xi59vgboTqL%2BOqWW7dDWyQ7ZVPM7I9eob07mkWvE2b5o29UvAfMZIQ4n%2FW3cJhdQAhDioHxHX1P%2F9j4eMP00boXNR&X-Amz-Signature=74fa0ba79f4d5dc25996389a57519c44bffb0527aa6c033ff92aa4ba805ae7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


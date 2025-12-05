---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOIYJLFV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH90x9QUucfrePRUFd1O7T5wSxSTkZ5kaSuKbQukyVhgAiAsNJnUATWF5oSvKIP3JP1oGHfZxU05AMM1i61%2Fk%2BLydyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzUc%2FX7xhUvvZJ1MPKtwDo9%2Fe4fxYmPv2HyXoNRYLiNBTmB7S0lG%2BpOn2xqCe1csLiXDKmwg5YKNvCD3g5w3Wm3plbA6fpwOogrAw18ikZPhbkkUXxdBqo7lt2ipZ71boWJaA%2FFLsi1b%2Fzunl5EYidZhZPtrPqIDI87zNSJ3gMM049EPvDHxFR0GR5tJmmt7IZ%2Bva456c3OyEVPuIn0TTmyJ3BWRVkwNUusgf0J0cu2HGualZ7%2F1IptBIDo0i7TUTErzvMXadNI7VhIufVh%2F0or7RuIDzcEvwZ%2BBCDpE%2Bne118QDRMO1pVM%2FArdM5mOxqCbsYvv9ewB0HmvWWQGJsvE6BasFd6gNHrA59%2FjCccKvW%2BEG%2B9x1rWuWyw7izelQ%2B8q4DQAA7X1LnBEVof3TZdWz0XJ%2BCPDv%2BXxG29368hucFqxgYB%2Fa%2B%2B5RN1ns86vI12duMqTDz%2FO9GTNVWYz3G05dC127yTmuHWeprVUAjuVUkh%2FZ6y5YJf%2BgUK4UGElBmqkWGN0nLYYiCAMHn2ZvnF7dLxgqBDZZBrLHPHm8CjfDhyHJgPaZ%2F7prHNV0oT%2Fa%2Fi2j2QAqKQzaCm%2Bwm%2FwJVKGXYynaLVwmxL74AWnXzxVXymcVrC0W3FEHQOMhcSs8wj3RGTyxEo0OqRNEwou%2FLyQY6pgETKZltHg89tPH0zz%2B8NjbRwPyCTfvyz%2FuEB3JxoRrXjmFZiwg57zZdiuuLJhzXqnRWAvE6iHKH%2Bg3H%2FRVRAVDOM9D%2Fql144lws2gXtCLna26PGb9zNmzQwUguizapOgWE3xG5wdZWoYR4sjkWDC8TJQz1N9EtfhVn5JG6S%2FqnrfD3ScoEW8fDx5NrzMqP4RR0hyHE25BRyfQttGKpbjIte8kiAeDsi&X-Amz-Signature=fd9069db5b43a5af5e6ffbbf5dc675ecf4568092715dcf4a405dec2afc047f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOIYJLFV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH90x9QUucfrePRUFd1O7T5wSxSTkZ5kaSuKbQukyVhgAiAsNJnUATWF5oSvKIP3JP1oGHfZxU05AMM1i61%2Fk%2BLydyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzUc%2FX7xhUvvZJ1MPKtwDo9%2Fe4fxYmPv2HyXoNRYLiNBTmB7S0lG%2BpOn2xqCe1csLiXDKmwg5YKNvCD3g5w3Wm3plbA6fpwOogrAw18ikZPhbkkUXxdBqo7lt2ipZ71boWJaA%2FFLsi1b%2Fzunl5EYidZhZPtrPqIDI87zNSJ3gMM049EPvDHxFR0GR5tJmmt7IZ%2Bva456c3OyEVPuIn0TTmyJ3BWRVkwNUusgf0J0cu2HGualZ7%2F1IptBIDo0i7TUTErzvMXadNI7VhIufVh%2F0or7RuIDzcEvwZ%2BBCDpE%2Bne118QDRMO1pVM%2FArdM5mOxqCbsYvv9ewB0HmvWWQGJsvE6BasFd6gNHrA59%2FjCccKvW%2BEG%2B9x1rWuWyw7izelQ%2B8q4DQAA7X1LnBEVof3TZdWz0XJ%2BCPDv%2BXxG29368hucFqxgYB%2Fa%2B%2B5RN1ns86vI12duMqTDz%2FO9GTNVWYz3G05dC127yTmuHWeprVUAjuVUkh%2FZ6y5YJf%2BgUK4UGElBmqkWGN0nLYYiCAMHn2ZvnF7dLxgqBDZZBrLHPHm8CjfDhyHJgPaZ%2F7prHNV0oT%2Fa%2Fi2j2QAqKQzaCm%2Bwm%2FwJVKGXYynaLVwmxL74AWnXzxVXymcVrC0W3FEHQOMhcSs8wj3RGTyxEo0OqRNEwou%2FLyQY6pgETKZltHg89tPH0zz%2B8NjbRwPyCTfvyz%2FuEB3JxoRrXjmFZiwg57zZdiuuLJhzXqnRWAvE6iHKH%2Bg3H%2FRVRAVDOM9D%2Fql144lws2gXtCLna26PGb9zNmzQwUguizapOgWE3xG5wdZWoYR4sjkWDC8TJQz1N9EtfhVn5JG6S%2FqnrfD3ScoEW8fDx5NrzMqP4RR0hyHE25BRyfQttGKpbjIte8kiAeDsi&X-Amz-Signature=4cb4d83f259d906a1bd02caaec0180c74804d216575a17491f1a6ccc82fd0cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.


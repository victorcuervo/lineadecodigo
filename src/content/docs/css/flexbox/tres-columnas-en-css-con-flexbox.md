---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z46CDOZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVh2APjec8avGyp39uRCSiOSA0iqhAUcrqvvvh3vJAsAiEAjpV7CQpmpDBC7AEqklBGXkBkrmwTG902aXFWySbNfkQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq1cEdW2YbqkNqrbCrcAxgs5Z3%2B3OCF%2FazEzhqmGQrNe%2BAOlUtjl7JvkCc8JWQ7eebJC6a1LrKm23hiVlorO53J%2Fdc9kFNzkWXXCZ17dpNHLHQbSgEqYq0vBMzdao4Lvn%2BbfDhJoYttopOPVq3Jj2umb7HB%2BAi5OwdAKvYJ%2B0OJNhVYaYLVOBn1%2BwajpBRRYTjFLvquRkTkXL6nsDmYztgF%2BmYBF5EobII8lYVE6CUhj8qhC8WV4V9eligq0Ax2U6ZqvQP8i8N2afIiaBVkxRXRZvY2BpLtERDw66W1qioWvS3Iudf%2BKbnMG9Q4VjOlw9oWz6IWHDiXYF3%2FlMpPp7gUFfaoJX4RdzMqcvjZnXz0Zk2OodYz8jx1S7VApOC80VD3eQ8vlPKKbTg%2FmWPt%2BV9CuXpYm%2BPAYie0K3zW8hTTilH966QWzWlG3ap%2Bb7MEj3vsV49%2Fe8r46Ik32qJeo2wNbOS6G1uLgH0%2F4aOBoePQhhoO6zqeLmq8ckQhGF7tV6voBpNe88QIXYATwEAXhhwvOoH13Vmvajew0wlqdaTuqrT%2B%2BlcRH9%2FUZT5dzJdoMNXx8GarGm3RFPhDlqihHF044lwVRv0zISh9tnQehUhaZhmQLSx0o8jDLj5ev5Trtua3yNmRRxszI2tgMOzH18kGOqUBYaTNJNulRcTzaOpZ5mSrF7g3gZr%2B1%2BmXJjXjy81Tp%2Fy8qbdBRALlCR5g%2BasoDNcxx7%2Bu8VNFWc%2FtwmE0GttqprfzOU7KW7VYx8qz43toooL%2Fx%2BRuZ%2BY6hGr8YbSdB8VPHuQ8%2BY1q5bOGoExtbycgks3QSyqE6rfP9tmhUWO9J6CTOmjYj7HxfqEGxEDNWqU9hhPtSRUtosTgifU06LK5kuZnXIsq&X-Amz-Signature=8b2550bfbf04ffa4cfebdb0981723ea48638da0b4e8e9110776f8634247705f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z46CDOZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVh2APjec8avGyp39uRCSiOSA0iqhAUcrqvvvh3vJAsAiEAjpV7CQpmpDBC7AEqklBGXkBkrmwTG902aXFWySbNfkQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq1cEdW2YbqkNqrbCrcAxgs5Z3%2B3OCF%2FazEzhqmGQrNe%2BAOlUtjl7JvkCc8JWQ7eebJC6a1LrKm23hiVlorO53J%2Fdc9kFNzkWXXCZ17dpNHLHQbSgEqYq0vBMzdao4Lvn%2BbfDhJoYttopOPVq3Jj2umb7HB%2BAi5OwdAKvYJ%2B0OJNhVYaYLVOBn1%2BwajpBRRYTjFLvquRkTkXL6nsDmYztgF%2BmYBF5EobII8lYVE6CUhj8qhC8WV4V9eligq0Ax2U6ZqvQP8i8N2afIiaBVkxRXRZvY2BpLtERDw66W1qioWvS3Iudf%2BKbnMG9Q4VjOlw9oWz6IWHDiXYF3%2FlMpPp7gUFfaoJX4RdzMqcvjZnXz0Zk2OodYz8jx1S7VApOC80VD3eQ8vlPKKbTg%2FmWPt%2BV9CuXpYm%2BPAYie0K3zW8hTTilH966QWzWlG3ap%2Bb7MEj3vsV49%2Fe8r46Ik32qJeo2wNbOS6G1uLgH0%2F4aOBoePQhhoO6zqeLmq8ckQhGF7tV6voBpNe88QIXYATwEAXhhwvOoH13Vmvajew0wlqdaTuqrT%2B%2BlcRH9%2FUZT5dzJdoMNXx8GarGm3RFPhDlqihHF044lwVRv0zISh9tnQehUhaZhmQLSx0o8jDLj5ev5Trtua3yNmRRxszI2tgMOzH18kGOqUBYaTNJNulRcTzaOpZ5mSrF7g3gZr%2B1%2BmXJjXjy81Tp%2Fy8qbdBRALlCR5g%2BasoDNcxx7%2Bu8VNFWc%2FtwmE0GttqprfzOU7KW7VYx8qz43toooL%2Fx%2BRuZ%2BY6hGr8YbSdB8VPHuQ8%2BY1q5bOGoExtbycgks3QSyqE6rfP9tmhUWO9J6CTOmjYj7HxfqEGxEDNWqU9hhPtSRUtosTgifU06LK5kuZnXIsq&X-Amz-Signature=3d825d8bf1b3cfcc5053cb5946306da39b69308645f9643c9f28cacdf216e7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

